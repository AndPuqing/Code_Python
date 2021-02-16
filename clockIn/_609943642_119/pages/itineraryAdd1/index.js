function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var a = t(require("../../utils/we-moment-with-locales")), i = t(require("vant-weapp/toast/toast")), n = t(require("../../utils/config")), s = t(require("vant-weapp/dialog/dialog")), o = getApp(), r = {}, d = "start", l = "location", u = null, c = null, m = {}, h = null, p = "initType", f = "start", g = 0;

Page({
    data: {
        currentDate1: new Date().getTime(),
        currentDate2: "12:00",
        mixdate: new Date("2020-01-01").getTime(),
        date: (0, a.default)().format("YYYY-MM-DD"),
        actions: [],
        types: [ {
            name: "火车",
            id: 0
        }, {
            name: "飞机",
            id: 1
        }, {
            name: "汽车",
            id: 2
        }, {
            name: "自驾",
            id: 3
        } ],
        label: {
            "飞机": "航班",
            "自驾": "车牌",
            "火车": "车次",
            "汽车": "车次"
        },
        initType: {
            name: "火车",
            id: 0
        },
        stations: [ {
            name: "桂林站",
            id: 0
        }, {
            name: "桂林北站",
            id: 0
        }, {
            name: "桂林西站",
            id: 0
        }, {
            name: "汽车北站",
            id: 2
        }, {
            name: "汽车南站",
            id: 2
        }, {
            name: "琴谭客运汽车站",
            id: 2
        }, {
            name: "桂林两江国际机场",
            id: 1
        }, {
            name: "桂林高速路口",
            id: 3
        } ],
        transports: [ {} ],
        station: {},
        area: {
            province_list: n.default.province_list,
            city_list: n.default.city_list,
            county_list: n.default.county_list
        },
        result: [],
        stopovers: [ {}, {}, {} ],
        members: [],
        togethers: []
    },
    onLoad: function(t) {
        m = {}, t.id ? (u = t.id, this.getDetail(), this.setData({
            id: u
        })) : u = null, t.student ? (h = t.student, this.setData({
            end: n.default.end,
            is_guilin: !0,
            student: t.student
        })) : h = null, t.uid ? (c = t.uid, this.getmembers()) : c = null, this.getlocationAndAddress();
    },
    onShow: function() {
        o.globalData.enums && this.setData({
            CommunityItineraryGUETBackShcoolTypeEnums: o.globalData.enums.CommunityItineraryGUETBackShcoolTypeEnums
        });
    },
    onBackChange: function(t) {
        console.log(111, t), this.setData({
            guet_back_shcool_type: String(t.detail)
        });
    },
    onClick: function(t) {
        var e = this.data.station;
        if ("桂林站" == e.name || "桂林北站" == e.name || "桂林两江国际机场" == e.name) {
            var a = t.currentTarget.dataset, i = (a.index, a.name);
            this.setData({
                guet_back_shcool_type: String(i)
            });
        }
    },
    getlocationAndAddress: function() {
        var t = this;
        wx.getLocation({
            type: "gcj02",
            success: function(e) {
                o.globalData.location = e, o.qqmapsdk.reverseGeocoder({
                    location: {
                        latitude: e.latitude,
                        longitude: e.longitude
                    },
                    success: function(e) {
                        r = {
                            areaid: e.result.ad_info.adcode + "000000",
                            location: e.result.ad_info.city + e.result.ad_info.district
                        }, h && r.areaid && t.setData({
                            start: r
                        });
                    },
                    fail: function(e) {
                        o.services("api/app/amap/v3/geocode/regeo").get({
                            key: "1a4d5e12e65cacc7b6987bc7ea246262",
                            location: o.globalData.location.longitude + "," + o.globalData.location.latitude
                        }).then(function(e) {
                            "OK" == e.data.info && (r = {
                                areaid: e.data.regeocode.addressComponent.adcode + "000000",
                                location: e.data.regeocode.formatted_address
                            }, h && r.areaid && t.setData({
                                start: r
                            }));
                        });
                    },
                    complete: function(t) {}
                });
            }
        });
    },
    getDetail: function() {
        var t = this, e = this.data.types;
        o.services("api/app/community/itinerary/details").get({
            id: u
        }).then(function(n) {
            if (n && n.data.Success) {
                m = n.data.Result;
                var s = {}, o = [];
                n.data.Result.type && n.data.Result.type.split("|").map(function(t, e) {
                    o.push({
                        initType: {
                            name: t,
                            id: e
                        }
                    });
                }), n.data.Result.train_number && n.data.Result.train_number.split("|").map(function(t, e) {
                    o[e].train_number = t;
                }), n.data.Result.coach && n.data.Result.coach.split("|").map(function(t, e) {
                    o[e].coach = t;
                }), n.data.Result.seat && n.data.Result.seat.split("|").map(function(t, e) {
                    o[e].seat = t;
                }), s.currentDate1 = m.day ? new Date(m.day).getTime() : new Date().getTime(), s.date = m.day ? (0, 
                a.default)(new Date(m.day)).format("YYYY-MM-DD") : (0, a.default)(new Date()).format("YYYY-MM-DD"), 
                s.start = m.start ? m.start : {}, s.end = m.end ? m.end : {}, m.type ? e.map(function(t) {
                    t.name == m.type && (s.initType = t);
                }) : s.initType = {}, (0 == m.guet_back_shcool_type || m.guet_back_shcool_type) && (s.guet_back_shcool_type = String(m.guet_back_shcool_type)), 
                m.end.time && (s.arrive = (0, a.default)(m.end.time).format("YYYY-MM-DD"), s.arriveTime = (0, 
                a.default)(m.end.time).format("HH:mm")), String(m.end.areaid).indexOf("4503") > -1 && (s.is_guilin = !0), 
                m.end.station && (s.station = {
                    name: m.end.station
                }), m.members && m.members.length > 0 && (s.togethers = [], m.members.map(function(t) {
                    t.name && t.idcard && t.relationship && t.phone && s.togethers.push(t);
                })), s.transports = o, s.train_number = m.train_number ? m.train_number : "", s.seat = m.seat ? m.seat : "", 
                s.coach = m.coach ? m.coach : "", s.stopovers = m.stopovers ? m.stopovers : [], 
                t.getmembers(), t.setData(s);
            } else n.data.Error ? i.default.fail(n.data.Error) : (i.default.fail("服务器繁忙，请稍后重试！"), 
            setTimeout(function(t) {
                wx.navigateBack({
                    delta: 1
                });
            }, 1e3));
        });
    },
    toggleBottomPopup: function(t) {
        f = t.currentTarget.dataset.type, this.setData({
            popShow: !this.data.popShow
        });
    },
    toggleBottomPopupTime: function() {
        this.setData({
            popShowTime: !this.data.popShowTime
        });
    },
    toggleSheet: function(t) {
        var e = [];
        e = "station" == (p = t.currentTarget.dataset.model) ? this.data.stations : this.data.types, 
        this.setData({
            sheetshow: !this.data.sheetshow,
            actions: e
        });
    },
    toggleSheet2: function() {
        this.setData({
            sheetshow: !this.data.sheetshow
        });
    },
    onTimeChange: function(t) {
        var i;
        console.log(f, t), this.setData((i = {
            currentDate1: t.detail
        }, e(i, "" + f, (0, a.default)(new Date(t.detail)).format("YYYY-MM-DD")), e(i, "popShow", !1), 
        i));
    },
    onSubTimeChange: function(t) {
        this.setData({
            currentDate2: t.detail,
            arriveTime: t.detail,
            popShowTime: !1
        });
    },
    select: function(t) {
        var a, i = this.data.station, n = null, s = [];
        "initType" == p && h && (this.data.stations.map(function(e) {
            e.id == t.detail.id && s.push(e);
        }), i = 1 == s.length ? s[0] : {}), "station" == p && (console.log(t.detail), n = "桂林站" != t.detail.name && "桂林北站" != t.detail.name && "桂林两江国际机场" != t.detail.name ? "1" : null), 
        this.setData((a = {
            guet_back_shcool_type: n,
            station: i
        }, e(a, "" + p, t.detail), e(a, "sheetshow", !1), a));
    },
    toggleArea: function(t) {
        l = t.currentTarget.dataset.model, d = t.currentTarget.dataset.type, h && "end" == d || this.setData({
            areaShow: !this.data.areaShow
        });
    },
    areaSelect: function(t) {
        var a = this.data.station;
        if ("location" == l) {
            var i, n = this.data.is_guilin, s = {
                location: "",
                areaid: ""
            };
            "市辖区" == t.detail.values[2].name ? s.location = t.detail.values[0].name + " " + t.detail.values[1].name : s.location = t.detail.values[0].name + " " + t.detail.values[1].name + " " + t.detail.values[2].name, 
            s.areaid = t.detail.values[2].code, "end" == d && (s.areaid.indexOf("4503") > -1 ? (n = !0, 
            a = "") : (n = !1, a = "")), this.setData((i = {}, e(i, "" + d, s), e(i, "areaShow", !1), 
            e(i, "is_guilin", n), e(i, "station", a), i), function() {});
        } else {
            var o, r = {
                location: "",
                areaid: ""
            };
            r.location = t.detail.values[1].name + " " + t.detail.values[2].name, r.areaid = t.detail.values[2].code + "000000", 
            this.setData((o = {}, e(o, l + "[" + d + "]", r), e(o, "areaShow", !1), o), function() {});
        }
    },
    getmembers: function() {
        var t = this;
        o.services("api/app/community/household/members").get({
            s: 10
        }).then(function(e) {
            if (e && e.data.Success) {
                var a = [], i = [];
                e.data.Result.map(function(t, e) {
                    var n = {};
                    n.name = t.name, t.phone && (n.phone = t.phone), t.uid && (n.uid = t.uid), m.id && m.members && m.members.map(function(t) {
                        (n.name == t.name || n.uid && t.uid && n.uid == t.uid) && i.push(String(e));
                    }), a.push(n);
                }), console.log(i), t.setData({
                    result: i,
                    members: a
                });
            }
        });
    },
    toggle: function(t) {
        var e = t.currentTarget.dataset.index;
        this.selectComponent(".checkboxes-" + e).toggle();
    },
    noop: function() {},
    onChange: function(t) {
        console.log(t), this.setData({
            result: t.detail
        });
    },
    noLeaveSave: function() {
        if (this.data.address) this.regetAddress(); else {
            var t = {
                day: "2020-01-25",
                start: {
                    location: r.location ? r.location : n.default.end.location,
                    areaid: r.areaid ? r.areaid : n.default.end.areaid,
                    time: "2020-01-25"
                },
                end: {
                    location: r.location ? r.location : n.default.end.location,
                    areaid: r.areaid ? r.areaid : n.default.end.areaid,
                    time: (0, a.default)().format("YYYY-MM-DD")
                }
            };
            s.default.alert({
                title: "请确认",
                message: "您确定假期在" + (r.location ? r.location : n.default.end.location) + "未离开过吗?",
                showCancelButton: !0
            }).then(function(e) {
                o.services("api/app/community/itinerary").post(t).then(function(t) {
                    t && t.data.Success ? (i.default.success("操作成功"), setTimeout(function() {
                        wx.navigateBack({
                            delta: 1,
                            complete: function(t) {}
                        });
                    }, 1e3)) : i.default.fail(t.data.Error);
                });
            });
        }
    },
    regetAddress: function() {
        var t = this;
        s.default.alert({
            title: "温馨提示",
            message: "未获取到您的位置信息，请重试"
        }).then(function(e) {
            t.getlocationAndAddress();
        });
    },
    radioChange: function(t) {
        this.setData({
            radio: t.detail
        });
    },
    addTogether: function() {
        var t = this.data.togethers;
        t.push({}), this.setData({
            togethers: t
        });
    },
    deleteTogether: function(t) {
        var e = this.data.togethers;
        console.log(e), e.splice(t.currentTarget.dataset.index, 1), this.setData({
            togethers: e
        });
    },
    setdata: function(t) {
        this.setData(e({}, "togethers[" + t.currentTarget.dataset.index + "]." + t.currentTarget.dataset.type, t.detail));
    },
    getdata: function(t) {
        this.setData(e({}, "togethers[" + t.currentTarget.dataset.index + "]." + t.currentTarget.dataset.type, t.detail.value));
    },
    save: function(t) {
        var e = this, a = this.data, n = a.start, s = a.end, r = a.date, d = a.result, l = a.members, h = a.stopovers, p = a.label, f = a.radio, g = (a.initType, 
        a.station), v = a.togethers, y = a.arriveTime, D = a.arrive, _ = a.is_guilin, b = a.guet_back_shcool_type, T = a.transports;
        if (r) if (n && n.areaid) if (s && s.areaid) if (D) if (y) if (g.name || !_) if (g.name || _) if (b || !_) {
            s.areaid && 6 == s.areaid.length && (s.areaid = s.areaid + "000000"), n.areaid && 6 == n.areaid.length && (n.areaid = n.areaid + "000000");
            var S = {
                day: r,
                start: n,
                end: s,
                members: [],
                guet_back_shcool_type: b
            };
            S.end.time = D + " " + y, g && (S.end.station = g.name), m.__version && (S.__version = m.__version), 
            c ? S.members.push({
                uid: c
            }) : S.members.push({
                uid: o.globalData.self.id
            }), h.length > 0 && (S.stopovers = [], h.map(function(t) {
                t.areaid && S.stopovers.push(t);
            })), l && l.length > 0 && l.map(function(t, e) {
                d.indexOf(String(e)) > -1 && S.members.push(t);
            });
            for (var w in T) {
                if (!T[w].initType || !T[w].initType.name) return void (0, i.default)("请输入中转交通方式" + (Number(w) + 1) + "的交通方式");
                if (S.type = (S.type ? S.type : "") + T[w].initType.name, w < T.length - 1 && (S.type = S.type + "|"), 
                !T[w].train_number) return void (0, i.default)("请输入交通中转" + (Number(w) + 1) + p[T[w].initType.name]);
                S.train_number = (S.train_number ? S.train_number : "") + T[w].train_number, w < T.length - 1 && (S.train_number = S.train_number + "|"), 
                T[w].coach ? (S.coach = (S.coach ? S.coach : "") + T[w].coach, w < T.length - 1 && (S.coach = S.coach + "|")) : w < T.length - 1 && (S.coach = "|"), 
                T[w].seat ? (S.seat = (S.seat ? S.seat : "") + T[w].seat, w < T.length - 1 && (S.seat = S.seat + "|")) : w < T.length - 1 && (S.seat = "|");
            }
            if (v.length > 0) {
                for (var x in v) {
                    if (!v[x].name) return void (0, i.default)("请输入同行人" + (Number(x) + 1) + "正确的同行人名字");
                    if (!v[x].relationship) return void (0, i.default)("请输入同行人" + (Number(x) + 1) + "与您的关系");
                    if (!v[x].idcard || 18 != v[x].idcard.length) return void (0, i.default)("请输入正确的同行人" + (Number(x) + 1) + "身份证号码");
                    if (!v[x].phone || 11 != v[x].phone.length) return void (0, i.default)("请输入正确的同行人" + (Number(x) + 1) + "电话");
                }
                S.members = S.members.concat(v);
            }
            f && 0 != f.length ? (i.default.loading({
                duration: 0,
                message: "正在提交",
                zIndex: 1e5,
                mask: !0
            }), u ? (S.id = u, o.services("api/app/community/itinerary/details").get({
                id: u
            }).then(function(t) {
                t && t.data.Success ? (S.__version = t.data.Result.__version, o.services("api/app/community/itinerary").post(S).then(function(t) {
                    t && t.data.Success ? (i.default.success("操作成功"), e.setData({
                        result: []
                    }), setTimeout(function() {
                        wx.navigateBack({
                            delta: 1,
                            complete: function(t) {}
                        });
                    }, 1e3)) : i.default.fail(t.data.Error);
                })) : i.default.fail(t.data.Error);
            })) : o.services("api/app/community/itinerary").post(S).then(function(t) {
                t && t.data.Success ? (i.default.success("操作成功"), e.setData({
                    result: []
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1,
                        complete: function(t) {}
                    });
                }, 1e3)) : i.default.fail(t.data.Error);
            })) : (0, i.default)("请点击填报承诺确认按钮");
        } else (0, i.default)({
            message: "请选择您的返校方式",
            zIndex: 1e5
        }); else (0, i.default)({
            message: "请填写您的终点站",
            zIndex: 1e5
        }); else (0, i.default)({
            message: "请选择您的终点站",
            zIndex: 1e5
        }); else (0, i.default)({
            message: "请选择您的到达时间",
            zIndex: 1e5
        }); else (0, i.default)({
            message: "请选择您的到达日期",
            zIndex: 1e5
        }); else (0, i.default)({
            message: "请选择您的终点",
            zIndex: 1e5
        }); else (0, i.default)({
            message: "请选择您的起点",
            zIndex: 1e5
        }); else (0, i.default)({
            message: "请选择您的出行时间",
            zIndex: 1e5
        });
    },
    addStopovers: function() {
        var t = this.data.stopovers;
        t.push({}), this.setData({
            stopovers: t
        });
    },
    deleteStopovers: function(t) {
        var e = this.data.stopovers;
        e.splice(t.currentTarget.dataset.index, 1), this.setData({
            stopovers: e
        });
    },
    getendStation: function(t) {
        this.setData(e({}, "" + t.currentTarget.dataset.type, t.detail.value));
    },
    addPort: function() {
        var t = this.data.transports;
        t.push({}), this.setData({
            transports: t
        });
    },
    deletePort: function(t) {
        var e = this.data.transports;
        e.splice(t.currentTarget.dataset.index, 1), this.setData({
            transports: e
        });
    },
    getStation: function(t) {
        var a = this;
        g = t.currentTarget.dataset.index, this.setData(e({}, "transports[" + g + "]." + t.currentTarget.dataset.model, t.detail.value), function() {
            console.log(a.data.transports);
        });
    },
    toggleStationSheet: function() {
        this.setData({
            portShow: !this.data.portShow
        });
    },
    toggleStation: function(t) {
        g = t.currentTarget.dataset.index, this.setData({
            portShow: !this.data.portShow
        });
    },
    stationSelect: function(t) {
        var a;
        this.setData((a = {}, e(a, "transports[" + g + "]", {
            initType: t.detail
        }), e(a, "portShow", !1), a));
    }
});