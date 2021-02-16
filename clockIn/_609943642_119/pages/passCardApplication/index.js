function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function a(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}

var t, n = e(require("../../utils/we-moment-with-locales")), i = e(require("vant-weapp/toast/toast")), s = (e(require("vant-weapp/dialog/dialog")), 
e(require("../../utils/config"))), o = getApp(), l = "relations", r = {}, d = {}, u = {}, c = "";

Page((t = {
    data: {
        relations: [ {
            name: "户主"
        }, {
            name: "亲属"
        }, {
            name: "租客"
        }, {
            name: "工人"
        }, {
            name: "其他"
        } ],
        otherrelations: [ {
            name: "同事"
        }, {
            name: "亲属"
        }, {
            name: "朋友"
        } ],
        purposes: [ {
            name: "公务"
        }, {
            name: "上班"
        }, {
            name: "务工"
        }, {
            name: "上学"
        }, {
            name: "其他"
        } ],
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
        actions: [],
        nowarea: {
            province_list: s.default.province_list,
            city_list: s.default.city_list,
            county_list: s.default.county_list
        },
        area: {},
        other: [],
        currentDate1: new Date().getTime(),
        mixdate: new Date().getTime(),
        date: (0, n.default)().format("YYYY-MM-DD"),
        infoShow: !0
    },
    onLoad: function(e) {
        c = e.cid, this.getTree(), this.setData({
            self: o.globalData.self
        });
    },
    infoToggle: function() {
        this.data.infoShow;
    },
    seeBook: function() {
        this.setData({
            bookshow: !this.data.bookshow
        });
    },
    radioChange: function(e) {
        this.setData({
            radio: e.detail
        });
    },
    toggleRelation: function(e) {
        l = e.currentTarget.dataset.type, this.setData({
            sheetshow: !0,
            actions: this.data[e.currentTarget.dataset.types]
        });
    },
    toggle: function() {
        this.setData({
            sheetshow: !this.data.sheetshow
        });
    },
    select: function(e) {
        this.setData(a({}, "" + l, e.detail));
    },
    getTree: function() {
        var e = this, a = {
            types: 0
        };
        o.services("api/group/tree").get(a).then(function(a) {
            if (a && a.data.Success) {
                a.data.Result.children.map(function(e) {
                    d[e.name] = [], r[e.name] = {
                        name: e.name,
                        areaid: e.areaid
                    }, e.children.map(function(a) {
                        r[a.name] = {
                            name: a.name,
                            areaid: a.areaid
                        }, d[e.name].push(a.name);
                    });
                });
                var t = [ {
                    values: Object.keys(d),
                    className: "column1"
                }, {
                    values: d[Object.keys(d)[0]],
                    className: "column2",
                    defaultIndex: 2
                } ];
                e.setData({
                    area: d,
                    columns: t
                }), console.log(d);
            } else i.default.fail(a.data.Error);
        });
    },
    toggleArea: function() {
        this.setData({
            areaShow: !this.data.areaShow
        });
    },
    chooseArea: function(e) {
        console.log(e), this.setData({
            areaShow: !1,
            areaActive: r[e.detail.value[1]]
        });
    },
    changename: function(e) {
        u.name = e.detail;
    },
    changetel: function(e) {
        u.phone = e.detail;
    },
    toggleUser: function() {
        this.setData({
            vanshow: !this.data.vanshow
        });
    },
    toggleRelationSheet: function() {
        this.setData({
            relationshow: !this.data.relationshow
        });
    },
    onrelationSelect: function(e) {
        u.relationship = e.detail.name, this.setData({
            relationship: e.detail.name
        });
    },
    adduserItem: function() {
        var e = this.data.other;
        e.push(u), u.phone.length < 18 ? (0, i.default)({
            message: "请输入正确的身份证号码",
            zIndex: 1e5
        }) : (u = {}, this.setData({
            relationship: "",
            other: e,
            vanshow: !1
        }));
    },
    deleteItem: function(e) {
        other = this.data.other, other.splice(e.currentTarget.dataset.index, 1), this.setData({
            other: other
        });
    },
    addUser: function() {},
    onChange: function(e) {
        var a = e.detail, t = a.picker, n = a.value;
        a.index;
        t.setColumnValues(1, d[n[0]]);
    },
    toggleNowArea: function(e) {
        this.setData({
            nowAreaShow: !this.data.nowAreaShow
        });
    },
    areaSelect: function(e) {
        var a = {
            location: "",
            areaid: ""
        };
        a.location = e.detail.values[1].name + " " + e.detail.values[2].name, a.areaid = e.detail.values[2].code + "000000", 
        console.log(a), this.setData({
            start: a,
            nowAreaShow: !1
        }, function() {});
    },
    toggleBottomPopup: function() {
        this.setData({
            popShow: !this.data.popShow
        });
    }
}, a(t, "onChange", function(e) {
    console.log(e), this.setData({
        currentDate1: e.detail,
        date: (0, n.default)(new Date(e.detail)).format("YYYY-MM-DD"),
        popShow: !1
    });
}), a(t, "save", function(e) {
    console.log(e);
    var a = this.data, t = a.relation, n = a.other, l = a.purpose, r = a.start, d = a.type, u = a.date, h = a.radio;
    if (e.detail.value.idcard && e.detail.value.idcard.length < 18) (0, i.default)("请输入正确的身份证号码"); else if (e.detail.value.company) if (t.name) if (l.name) if (r.areaid) if (u) if (d.name) if (h) {
        var f = {
            cid: c,
            others: n,
            relationship: t.name,
            purpose: l.name,
            company: e.detail.value.company,
            desc: e.detail.value.desc
        }, m = {
            day: u,
            start: r,
            end: s.default.end,
            type: d.name,
            members: n
        };
        e.detail.value.seat && (m.seat = e.detail.value.seat), e.detail.value.train_number && (m.train_number = e.detail.value.train_number), 
        o.services("api/user/self").get().then(function(a) {
            if (a && a.data.Success) {
                var t = a.data.Result;
                t.idcard = e.detail.value.idcard, t.name = e.detail.value.name, t.address = e.detail.value.address, 
                o.services("api/user").post(t).then(function(e) {
                    e && e.data.Success;
                });
            }
        }), o.services("api/app/community/pass/apply").post(f).then(function(e) {
            e && e.data.Success ? wx.redirectTo({
                url: "/pages/success/index"
            }) : i.default.fail(e.data.Error);
        }), o.services("api/app/community/itinerary").post(m).then(function(e) {
            e && e.data.Success;
        });
    } else (0, i.default)("请阅读并同意遵守《承诺书》"); else (0, i.default)("请选择交通方式"); else (0, 
    i.default)("请选择到达时间"); else (0, i.default)("请选择现所在城市"); else (0, i.default)("请选择回来的目的"); else (0, 
    i.default)("请选择与屋主的关系"); else (0, i.default)("请输入你的单位名称");
}), t));