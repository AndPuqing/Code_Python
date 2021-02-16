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

var a, i, l = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
}, n = e(require("../../utils/we-moment-with-locales")), d = e(require("vant-weapp/toast/toast")), o = e(require("vant-weapp/dialog/dialog")), s = e(require("../../utils/config")), r = getApp(), c = require("../../common/tool"), u = 36.5, f = 36.5, g = null, y = "sr", m = null, p = {};

Page({
    data: {
        currentDate1: new Date().getTime(),
        maxdate: new Date().getTime(),
        mindate: new Date("1930-01-01").getTime(),
        gxselect: [ {
            title: "体温",
            key: "tw",
            type: "number",
            select: "0"
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
        log: {},
        radio: []
    },
    onLoad: function(e) {
        p = e, this.setData(l({
            key: s.default.key
        }, e)), this.getlog(), this.location = new c.Location();
    },
    onShow: function() {
        var e = this;
        this.location.startgetlocation(!0, function(t) {
            t.latitude && t.longitude && e.setData({
                locload: !0
            });
        });
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
    getlog: function() {
        var e = this, t = this.data.gxselect;
        r.services("api/app/community/healthcode/default/health/v2").get().then(function(a) {
            if (a && a.data.Success) {
                var i = a.data.Result;
                t.map(function(e) {
                    "radio" == e.type && i[e.key] || "checkbox" == e.type && i[e.key] || "number" == e.type && i[e.key] || "text" == e.type && i[e.key] && (e.select = i[e.key]);
                }), e.setData({
                    gxselect: t
                });
            } else a.data.Error ? (0, d.default)(a.data.Error) : ((0, d.default)("服务器繁忙，请稍后再试"), 
            setTimeout(function() {
                wx.navigateBack({
                    delta: 1
                });
            }, 1e3));
        });
    },
    toggleSheet: function(e) {
        if (g = e.currentTarget.dataset.type, !this.data.reset || "xb" == g) {
            console.log(e);
            var t = this.data.sheets;
            this.setData({
                actions: t[g],
                show: !0
            });
        }
    },
    toggleTime: function(e) {
        y = e.currentTarget.dataset.type, m = e.currentTarget.dataset.index ? e.currentTarget.dataset.index : null, 
        this.setData({
            timeShow: !this.data.timeShow
        });
    },
    onTimeChange: function(e) {
        if ("sr" == y) this.setData({
            currentDate1: e.detail,
            sr: (0, n.default)(new Date(e.detail)).format("YYYY-MM-DD"),
            timeShow: !1
        }); else {
            var a;
            this.setData((a = {
                currentDate1: e.detail
            }, t(a, "gxselect[" + m + "].select", (0, n.default)(new Date(e.detail)).format("YYYY-MM-DD")), 
            t(a, "timeShow", !1), a));
        }
    },
    stepChange: function(e) {
        console.log(e), this.setData(t({}, "gxselect[" + e.currentTarget.dataset.index + "].select", e.detail));
    },
    stepperChange: function(e) {
        "morningtem" == e.currentTarget.dataset.type ? u = e.detail : "noontem" == e.currentTarget.dataset.type && (f = e.detail);
    },
    save: function(e) {
        var t = this.data, a = t.gxselect, i = t.radio, l = {};
        if (console.log(u), p.student && Number(u) < 35) (0, d.default)("请输入正确的上午体温"); else if (p.student && Number(f) < 35) (0, 
        d.default)("请输入正确的下午体温"); else {
            for (var n in a) {
                if ("radio" == a[n].type) if (11 != n) {
                    if (!a[n].select) return void (0, d.default)("请选择" + a[n].title);
                    if (1 == n && "3" == a[n].select && !e.detail.value.zzms) return void (0, d.default)("请您填写症状描述");
                    1 == n && "3" == a[n].select && e.detail.value.zzms && (l.zzms = e.detail.value.zzms), 
                    l[a[n].key] = a[n].select;
                } else {
                    if (!a[n].select && "1" == a[10].select) return void (0, d.default)("请选择" + a[n].title);
                    a[n].select && "1" == a[10].select && (l[a[n].key] = a[n].select);
                }
                if ("checkbox" == a[n].type) if ("0" == a[3].select) l.jygyljs = 5; else {
                    if (!a[n].select || 0 == a[n].select.length) return void (0, d.default)("请选择" + a[n].title);
                    l.jygyljs = a[n].select.join(",");
                }
                if ("number" == a[n].type && !p.student) {
                    if (!a[n].select) return void (0, d.default)("请输入" + a[n].title);
                    if (Number(a[n].select) < 35.5) return void (0, d.default)("请输入正确" + a[n].title);
                    if (Number(a[n].select) > 40) return void (0, d.default)("请输入正确" + a[n].title);
                    l[a[n].key] = a[n].select;
                }
                if ("text" == a[n].type) {
                    if ("1" == a[13].select && 20 != n && 21 != n && !e.detail.value[a[n].key]) return void (0, 
                    d.default)("请输入" + a[n].title);
                    if (12 == n && !e.detail.value[a[n].key]) return void (0, d.default)("请输入" + a[n].title);
                    "1" != a[13].select && 12 != n || !e.detail.value[a[n].key] || (l[a[n].key] = e.detail.value[a[n].key]);
                }
                if ("time" == a[n].type) {
                    if ("1" == a[13].select && !a[n].select) return void (0, d.default)("请选择入境时间");
                    "1" == a[13].select && a[n].select && (l[a[n].key] = a[n].select);
                }
            }
            if ("guet" == s.default.key && !r.globalData.location || r.globalData.location && !r.globalData.location.longitude) return (0, 
            d.default)("正在定位,请定位成功后重试"), void this.location.startgetlocation(!0);
            if (0 != i.length) {
                l.sbdd = s.default.end.location;
                var c = {
                    data: {
                        body_temperature: l.tw,
                        flags: 0,
                        gx2: l,
                        tags: []
                    },
                    loc: {},
                    member: {
                        name: p.name ? p.name : null,
                        phone: p.phone ? p.phone : null,
                        uid: p.id ? p.id : null,
                        hid: p.hid ? p.hid : null
                    }
                };
                p.student && (c.data.tags.push("上午" + u), c.data.tags.push("下午" + f), c.data.body_temperature = Number(f)), 
                r.globalData.location && r.globalData.location.longitude && (c.loc.gps = {
                    lng: r.globalData.location.longitude,
                    lat: r.globalData.location.latitude
                }), "0" == l.q2 ? c.data.flags += 1 : (c.data.tags = c.data.tags.concat([ "乏力", "干咳", "气促" ]), 
                c.data.flags += 2), o.default.alert({
                    title: "提示",
                    message: "绿码通行，红码、黄码限制通行，您填写的内容可能会影响您的出行，请确保您所填信息属实、准确、无误后提交。如填报虚假信息，后果由个人负责。",
                    showCancelButton: !0
                }).then(function(e) {
                    d.default.loading({
                        mask: !0,
                        duration: 0,
                        message: "提交中..."
                    }), r.services("api/app/community/health/daily").post(c).then(function(e) {
                        e && e.data.Success ? (r.services("api/app/community/healthcode/status").get({
                            force: !0
                        }).then(function(e) {}), d.default.success("操作成功"), setTimeout(function() {
                            wx.navigateBack({
                                delta: 1,
                                complete: function(e) {}
                            });
                        }, 1e3)) : e.data.Error ? (0, d.default)(e.data.Error) : (0, d.default)("服务器繁忙，请稍后再试");
                    });
                });
            } else (0, d.default)("请勾选您的承诺");
        }
    }
});