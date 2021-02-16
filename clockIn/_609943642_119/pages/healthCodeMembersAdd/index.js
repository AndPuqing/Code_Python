function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var a, i, l, n = e(require("../../utils/we-moment-with-locales")), s = e(require("vant-weapp/toast/toast")), d = e(require("vant-weapp/dialog/dialog")), r = e(require("../../utils/config")), o = getApp(), c = null, u = null, m = "sr", y = null, f = null;

Page({
    data: (l = {
        log: {},
        reset: !1,
        currentDate1: new Date().getTime(),
        maxdate: new Date().getTime(),
        mindate: new Date("1930-01-01").getTime(),
        sheets: {
            zjzldm: [ {
                name: "身份证",
                type: 1
            }, {
                name: "护照",
                type: 2
            }, {
                name: "台湾回乡证",
                type: 3
            }, {
                name: "台湾居民来往内地通行证",
                type: 4
            }, {
                name: "台湾居民居住证",
                type: 5
            }, {
                name: "港澳当地政府颁发的身份证号码",
                type: 6
            }, {
                name: "港澳居民来往内地通行证（回乡证，大陆政府颁发）",
                type: 7
            }, {
                name: "港澳居民居住证（大陆政府颁发）",
                type: 8
            } ],
            gx: [ {
                name: "其他关系",
                type: 0
            }, {
                name: "父子（女）关系",
                type: 1
            }, {
                name: "母子（女）关系",
                type: 2
            }, {
                name: "祖孙关系",
                type: 3
            }, {
                name: "夫妻关系",
                type: 4
            }, {
                name: "师生关系",
                type: 5
            }, {
                name: "同事关系",
                type: 6
            }, {
                name: "朋友关系",
                type: 7
            } ]
        },
        xb: {},
        gxselect: [ {
            title: "体温",
            key: "tw",
            type: "number",
            select: "36.5"
        }, {
            title: "14日内是否被诊断为新冠肺炎、疑似患者或被确认为密切接触者",
            key: "q1",
            select: "0",
            type: "radio",
            data: [ {
                name: "是",
                id: 1
            }, {
                name: "否",
                id: 0
            } ]
        }, {
            title: "14日内是否曾有发热、乏力、干咳、气促、呼吸道症状",
            key: "q2",
            select: "0",
            type: "radio",
            data: [ {
                name: "是",
                id: 1
            }, {
                name: "否",
                id: 0
            } ]
        }, (a = {
            title: "14日内家庭成员是否有被诊断为新冠肺炎、疑似患者或被确认为密切接触者",
            select: "0",
            key: "q3"
        }, t(a, "select", "0"), t(a, "type", "radio"), t(a, "data", [ {
            name: "是",
            id: 1
        }, {
            name: "否",
            id: 0
        }, {
            name: "不确定",
            id: 2
        } ]), a), (i = {
            title: "14日内是否与确诊的新冠肺炎患者、疑似患者或被确认为密切接触者有接触史",
            select: "0",
            key: "q4"
        }, t(i, "select", "0"), t(i, "type", "radio"), t(i, "data", [ {
            name: "是",
            id: 1
        }, {
            name: "否",
            id: 0
        }, {
            name: "不确定",
            id: 2
        } ]), i), {
            title: "近14日内是否在武汉市居住或者到过武汉市",
            disabled: !0,
            key: "q5",
            select: "0",
            type: "radio",
            data: [ {
                name: "是",
                id: 1
            }, {
                name: "否",
                id: 0
            } ]
        }, {
            title: "是否连续14日居住在广西",
            key: "q6",
            type: "radio",
            select: "1",
            data: [ {
                name: "是",
                id: 1
            }, {
                name: "否",
                id: 0
            } ]
        }, {
            title: "14日内，您是否接触有发热和/或呼吸道症状的患者",
            key: "q7",
            select: "0",
            type: "radio",
            data: [ {
                name: "是",
                id: 1
            }, {
                name: "否",
                id: 0
            } ]
        }, {
            title: "14日内，您所居住社区是否曾报告有新冠肺炎病例",
            key: "q8",
            select: "0",
            type: "radio",
            data: [ {
                name: "是",
                id: 1
            }, {
                name: "否",
                id: 0
            }, {
                name: "不确定",
                id: 2
            } ]
        }, {
            title: "14日内，是否服用过退烧药、感冒药",
            key: "q9",
            select: "0",
            type: "radio",
            data: [ {
                name: "是",
                id: 1
            }, {
                name: "否",
                id: 0
            } ]
        }, {
            title: "过去14日内，您是否曾接受新型冠状病毒检查",
            key: "q10",
            select: "0",
            type: "radio",
            data: [ {
                name: "是",
                id: 1
            }, {
                name: "否",
                id: 0
            } ]
        }, {
            title: "新型冠状病毒检查的结果为",
            key: "q11",
            type: "radio",
            data: [ {
                name: "是",
                id: 1
            }, {
                name: "否",
                id: 0
            }, {
                name: "结果未知",
                id: 2
            } ]
        }, {
            title: "此后14日内的居住地址，请填写详细地址",
            key: "q12",
            type: "text"
        }, {
            title: "近一个月内是否有入境记录",
            key: "q13",
            select: "0",
            type: "radio",
            data: [ {
                name: "是",
                id: 1
            }, {
                name: "否",
                id: 0
            } ]
        }, {
            title: "最近一次入境时间",
            key: "q14",
            type: "time"
        }, {
            title: "国籍",
            key: "q15",
            type: "text"
        }, {
            title: "最近一次入境口岸",
            key: "q16",
            type: "text"
        }, {
            title: "最近一次入境目的地",
            key: "q17",
            type: "text"
        }, {
            title: "最近一次入境航班/车次号",
            key: "q18",
            type: "text"
        }, {
            title: "最近一次入境航班/车次的座位号",
            key: "q19",
            type: "text"
        }, {
            title: "最近一次入桂航班/车次号",
            key: "q20",
            type: "text"
        }, {
            title: "最近一次入桂航班/车次的座位号",
            key: "q21",
            type: "text"
        }, {
            title: "14日内，您旅行或居住的国家和地区",
            key: "q22",
            type: "text"
        }, {
            title: "14日内，您在中国旅行或居住的省（自治区、直辖市）和/或港澳台地区",
            key: "q23",
            type: "text"
        } ],
        zjzldm: {
            name: "身份证",
            type: 1
        }
    }, t(l, "log", {}), t(l, "radio", []), l),
    onLoad: function(e) {
        e.uid ? (this.setData({
            id: e.uid
        }), c = e.uid, this.getregister()) : c = null, e.jkmid ? (this.setData({
            id: e.jkmid
        }), f = e.jkmid, this.getregister()) : f = null;
    },
    onShow: function() {
        if (o.globalData.enums) {
            var e = [];
            for (var a in o.globalData.enums.CommunityHealthCodeRelationshipTypeEnum) e.push({
                name: o.globalData.enums.CommunityHealthCodeRelationshipTypeEnum[a],
                type: a
            });
            this.setData(t({}, "sheets.gx", e));
        }
    },
    getData: function(e) {
        this.setData(t({}, "" + e.currentTarget.dataset.type, e.detail.value));
    },
    fieldChange: function(e) {
        this.setData(t({}, "gxselect[" + e.currentTarget.dataset.index + "].select", e.detail));
    },
    onChange: function(e) {
        var a = this, i = e.currentTarget.dataset.index, l = e.detail.name;
        this.setData(t({}, "gxselect[" + i + "].select", String(l)), function() {
            console.log(a.data.gxselect);
        });
    },
    onClick: function(e) {
        var a = this, i = e.currentTarget.dataset, l = i.index, n = i.name;
        this.setData(t({}, "gxselect[" + l + "].select", String(n)), function() {
            console.log(a.data.gxselect);
        });
    },
    onCheckChange: function(e) {
        e.detail.length > 1 && e.detail.indexOf("5") > -1 && e.detail.splice(e.detail.indexOf("5"), 1);
        var a = e.currentTarget.dataset.index;
        this.setData(t({}, "gxselect[" + a + "].select", e.detail), function() {});
    },
    onCheckClick: function(e) {
        var t = e.currentTarget.dataset, a = (t.index, t.id);
        this.selectComponent(".checkboxes-" + a).toggle();
    },
    noop: function() {},
    radioChange: function(e) {
        this.setData({
            radio: e.detail
        });
    },
    getregister: function() {
        var e = this, t = {};
        c && (t.id = c), o.services("api/app/community/healthcode/member/details").get(t).then(function(t) {
            if (t && t.data.Success) {
                var a = {}, i = {}, l = {};
                t.data.Result.person && (a = e.data.sheets.gx[Number(t.data.Result.person.gx)], 
                l = e.data.sheets.zjzldm[t.data.Result.person.cdm - 1], i = {
                    zjhm: t.data.Result.person.chm,
                    xm: t.data.Result.person.cxm
                }, f = t.data.Result.person.cid, e.getlog(t.data.Result.person.cid)), e.setData({
                    zjzldm: l,
                    gx: a,
                    log: i
                });
            } else t.data.Error ? (0, s.default)(t.data.Error) : ((0, s.default)("服务器繁忙，请稍后再试"), 
            setTimeout(function() {
                wx.navigateBack({
                    delta: 1
                });
            }, 1e3));
        });
    },
    getlog: function(e) {
        var t = this, a = this.data.gxselect;
        o.services("api/app/community/healthcode/member/default/health/v2").get({
            jkmid: e
        }).then(function(e) {
            if (e && e.data.Success) {
                var i = e.data.Result;
                a.map(function(e) {
                    "radio" != e.type || !i[e.key] && 0 != i[e.key] ? "checkbox" == e.type && i[e.key] ? e.select = i[e.key] : "number" == e.type && i[e.key] ? e.select = i[e.key] : "text" == e.type && i[e.key] && (e.select = i[e.key]) : "tw" == e.key && Number(i[e.key]) < 36.5 ? e.select = "36.5" : "tw" == e.key && Number(i[e.key]) > 37.2 ? e.select = "37.6" : "tw" == e.key && Number(i[e.key]) > 36.5 && Number(i[e.key]) <= 37.2 ? e.select = "37.2" : e.select = String(i[e.key]);
                }), t.setData({
                    gxselect: a
                });
            } else e.data.Error ? (0, s.default)(e.data.Error) : ((0, s.default)("服务器繁忙，请稍后再试"), 
            setTimeout(function() {
                wx.navigateBack({
                    delta: 1
                });
            }, 1e3));
        });
    },
    toggleSheet: function(e) {
        if (u = e.currentTarget.dataset.type, !c) {
            var t = this.data.sheets;
            this.setData({
                actions: t[u],
                show: !0
            });
        }
    },
    toggle: function() {
        this.setData({
            show: !this.data.show
        });
    },
    onSelect: function(e) {
        var a, i = this;
        this.setData((a = {}, t(a, "" + u, e.detail), t(a, "show", !1), a), function() {
            console.log(i.data.show);
        });
    },
    toggleTime: function(e) {
        m = e.currentTarget.dataset.type, y = e.currentTarget.dataset.index ? e.currentTarget.dataset.index : null, 
        this.setData({
            timeShow: !this.data.timeShow
        });
    },
    onTimeChange: function(e) {
        if ("sr" == m) this.setData({
            currentDate1: e.detail,
            sr: (0, n.default)(new Date(e.detail)).format("YYYY-MM-DD"),
            timeShow: !1
        }); else {
            var a;
            this.setData((a = {
                currentDate1: e.detail
            }, t(a, "gxselect[" + y + "].select", (0, n.default)(new Date(e.detail)).format("YYYY-MM-DD")), 
            t(a, "timeShow", !1), a));
        }
    },
    stepChange: function(e) {
        console.log(e), this.setData(t({}, "gxselect[" + e.currentTarget.dataset.index + "].select", e.detail));
    },
    save: function(e) {
        var t = this, a = this.data, i = a.gxselect, l = a.radio, n = a.zjzldm, u = a.reset, m = a.gx, y = a.xm, p = a.zjhm;
        if (u || e.detail.value.xm || y) if (u || n.name) if (u || e.detail.value.zjhm || p) if (u || m.name) {
            var g = {
                zjzldm: n.type,
                zjhm: e.detail.value.zjhm,
                xm: e.detail.value.xm,
                dhhm: o.globalData.self.phone,
                gx: m.type
            };
            y && (g.xm = y), p && (g.zjhm = p);
            var h = {
                jkmid: f
            };
            if (c) for (var k in i) {
                if ("radio" == i[k].type) if (11 != k) {
                    if (!i[k].select) return void (0, s.default)("请选择" + i[k].title);
                    if (1 == k && "3" == i[k].select && !e.detail.value.zzms) return void (0, s.default)("请您填写症状描述");
                    1 == k && "3" == i[k].select && e.detail.value.zzms && (h.zzms = e.detail.value.zzms), 
                    h[i[k].key] = i[k].select;
                } else {
                    if (!i[k].select && "1" == i[10].select) return void (0, s.default)("请选择" + i[k].title);
                    i[k].select && "1" == i[10].select && (h[i[k].key] = i[k].select);
                }
                if ("checkbox" == i[k].type) if ("0" == i[3].select) h.jygyljs = 5; else {
                    if (!i[k].select || 0 == i[k].select.length) return void (0, s.default)("请选择" + i[k].title);
                    h.jygyljs = i[k].select.join(",");
                }
                if ("number" == i[k].type) {
                    if (!i[k].select) return void (0, s.default)("请选择" + i[k].title);
                    h[i[k].key] = i[k].select;
                }
                if ("text" == i[k].type) {
                    if ("1" == i[13].select && 20 != k && 21 != k && !e.detail.value[i[k].key]) return void (0, 
                    s.default)("请输入" + i[k].title);
                    if (12 == k && !e.detail.value[i[k].key]) return void (0, s.default)("请输入" + i[k].title);
                    "1" != i[13].select && 12 != k || !e.detail.value[i[k].key] || (h[i[k].key] = e.detail.value[i[k].key]);
                }
                if ("time" == i[k].type) {
                    if ("1" == i[13].select && !i[k].select) return void (0, s.default)("请选择入境时间");
                    "1" == i[13].select && i[k].select && (h[i[k].key] = i[k].select);
                }
            }
            console.log(g), 0 != l.length ? (h.sbdd = r.default.end.location, c ? d.default.alert({
                title: "提示",
                message: "绿码通行，红码、黄码限制通行，您填写的内容可能会影响您的出行，请确保您所填信息属实、准确、无误后提交。如填报虚假信息，后果由个人负责。",
                showCancelButton: !0
            }).then(function(e) {
                s.default.loading({
                    mask: !0,
                    duration: 0,
                    message: "提交中..."
                }), o.services("api/app/community/healthcode/member/report/v2").post(h).then(function(e) {
                    e && e.data.Success ? (o.services("api/app/community/healthcode/member/status").get({
                        jkmid: h.jkmid,
                        force: !0
                    }).then(function(e) {}), wx.redirectTo({
                        url: "/pages/success/index"
                    })) : e.data.Error ? (0, s.default)(e.data.Error) : (0, s.default)("服务器繁忙，请稍后再试");
                });
            }) : d.default.alert({
                title: "提示",
                message: "绿码通行，红码、黄码限制通行，您填写的内容可能会影响您的出行，请确保您所填信息属实、准确、无误后提交。如填报虚假信息，后果由个人负责。",
                showCancelButton: !0
            }).then(function(e) {
                t.registerFun(g, h);
            })) : (0, s.default)("请勾选您的承诺");
        } else (0, s.default)("请选择你们的关系"); else (0, s.default)("请填写证件号码"); else (0, s.default)("请选择证件类型"); else (0, 
        s.default)("请填写真实姓名");
    },
    registerFun: function(e, t) {
        s.default.loading({
            mask: !0,
            duration: 0,
            message: "提交中..."
        }), o.services("api/app/community/healthcode/member/bind").post(e).then(function(e) {
            e && e.data.Success ? (o.services("api/app/community/healthcode/member/status").get({
                force: !0
            }).then(function(e) {}), wx.redirectTo({
                url: "/pages/success/index"
            })) : e.data.Error ? (0, s.default)(e.data.Error) : (0, s.default)("服务器繁忙，请稍后再试");
        });
    }
});