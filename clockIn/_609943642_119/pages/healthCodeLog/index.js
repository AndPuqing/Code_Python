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

var a, i, l, s = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
}, n = e(require("../../utils/we-moment-with-locales")), d = e(require("vant-weapp/toast/toast")), r = e(require("vant-weapp/dialog/dialog")), c = e(require("../../utils/config")), o = getApp(), u = {}, m = null, f = null, y = null, h = "sr", g = null, p = null;

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
            xb: [ {
                name: "女",
                type: 0
            }, {
                name: "男",
                type: 1
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
        y = null, e.idcard && e.name ? ((u = {
            zjhm: e.idcard,
            xm: e.name
        }).zjzldm = this.data.sheets.zjzldm[Number(e.type) - 1], y = !0, this.setData({
            zjzldm: this.data.sheets.zjzldm[Number(e.type) - 1]
        })) : u = {}, p = e.extra ? e.extra : null, o.globalData.self && (u.dhhm = o.globalData.self.phone ? o.globalData.self.phone : ""), 
        m = e.id ? e.id : null, e.reset && (this.getlog(), this.setData({
            reset: !0
        })), m || this.getregister();
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
        var a = this, i = e.currentTarget.dataset, l = i.index, s = i.name;
        this.setData(t({}, "gxselect[" + l + "].select", String(s)), function() {
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
        y && (t.from_user = y), o.services("api/app/community/healthcode/default/register").get(t).then(function(t) {
            if (t && t.data.Success) {
                var a = "";
                t.data.Result.sr && (a = (0, n.default)(t.data.Result.sr).format("YYYY-MM-DD"));
                var i = {};
                (0 == t.data.Result.xb || t.data.Result.xb) && (i = e.data.sheets.xb[Number(t.data.Result.xb)]);
                var l = {};
                t.data.Result.zjzldm && (l = e.data.sheets.zjzldm[Number(t.data.Result.zjzldm) - 1]), 
                e.setData({
                    xb: i,
                    sr: a,
                    zjzldm: u.zjzldm ? u.zjzldm : l,
                    log: s({}, t.data.Result, u)
                });
            } else t.data.Error ? (0, d.default)(t.data.Error) : ((0, d.default)("服务器繁忙，请稍后再试"), 
            setTimeout(function() {
                wx.navigateBack({
                    delta: 1
                });
            }, 1e3));
        });
    },
    getlog: function() {
        var e = this, t = this.data.gxselect;
        o.services("api/app/community/healthcode/default/health/v2").get().then(function(a) {
            if (a && a.data.Success) {
                var i = a.data.Result;
                t.map(function(e) {
                    "radio" != e.type || !i[e.key] && 0 != i[e.key] ? "checkbox" == e.type && i[e.key] ? e.select = i[e.key] : "number" == e.type && i[e.key] ? e.select = i[e.key] : "text" == e.type && i[e.key] && (e.select = i[e.key]) : "tw" == e.key && Number(i[e.key]) < 36.5 ? e.select = "36.5" : "tw" == e.key && Number(i[e.key]) > 37.2 ? e.select = "37.6" : "tw" == e.key && Number(i[e.key]) > 36.5 && Number(i[e.key]) <= 37.2 ? e.select = "37.2" : e.select = String(i[e.key]);
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
        if (f = e.currentTarget.dataset.type, !this.data.reset || "xb" == f) {
            console.log(e);
            var t = this.data.sheets;
            this.setData({
                actions: t[f],
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
        this.setData((a = {}, t(a, "" + f, e.detail), t(a, "show", !1), a), function() {
            console.log(i.data.show);
        });
    },
    toggleTime: function(e) {
        h = e.currentTarget.dataset.type, g = e.currentTarget.dataset.index ? e.currentTarget.dataset.index : null, 
        this.setData({
            timeShow: !this.data.timeShow
        });
    },
    onTimeChange: function(e) {
        if ("sr" == h) this.setData({
            currentDate1: e.detail,
            sr: (0, n.default)(new Date(e.detail)).format("YYYY-MM-DD"),
            timeShow: !1
        }); else {
            var a;
            this.setData((a = {
                currentDate1: e.detail
            }, t(a, "gxselect[" + g + "].select", (0, n.default)(new Date(e.detail)).format("YYYY-MM-DD")), 
            t(a, "timeShow", !1), a));
        }
    },
    stepChange: function(e) {
        console.log(e), this.setData(t({}, "gxselect[" + e.currentTarget.dataset.index + "].select", e.detail));
    },
    save: function(e) {
        var t = this, a = this.data, i = a.gxselect, l = a.radio, s = a.zjzldm, n = a.xb, u = a.sr, m = a.reset;
        if (m || e.detail.value.xm) if (m || s.name) if (m || e.detail.value.zjhm) if (n.name) {
            var f = {
                zjzldm: s.type,
                zjhm: e.detail.value.zjhm,
                xm: e.detail.value.xm,
                dhhm: e.detail.value.dhhm,
                dw: e.detail.value.dw,
                jtzz: e.detail.value.jtzz,
                sr: u,
                xb: n.type
            }, y = {};
            for (var h in i) {
                if ("radio" == i[h].type) if (11 != h) {
                    if (!i[h].select) return void (0, d.default)("请选择" + i[h].title);
                    if (1 == h && "3" == i[h].select && !e.detail.value.zzms) return void (0, d.default)("请您填写症状描述");
                    1 == h && "3" == i[h].select && e.detail.value.zzms && (y.zzms = e.detail.value.zzms), 
                    y[i[h].key] = i[h].select;
                } else {
                    if (!i[h].select && "1" == i[10].select) return void (0, d.default)("请选择" + i[h].title);
                    i[h].select && "1" == i[10].select && (y[i[h].key] = i[h].select);
                }
                if ("checkbox" == i[h].type) if ("0" == i[3].select) y.jygyljs = 5; else {
                    if (!i[h].select || 0 == i[h].select.length) return void (0, d.default)("请选择" + i[h].title);
                    y.jygyljs = i[h].select.join(",");
                }
                if ("number" == i[h].type) {
                    if (!i[h].select) return void (0, d.default)("请选择" + i[h].title);
                    y[i[h].key] = i[h].select;
                }
                if ("text" == i[h].type) {
                    if ("1" == i[13].select && 20 != h && 21 != h && !e.detail.value[i[h].key]) return void (0, 
                    d.default)("请输入" + i[h].title);
                    if (12 == h && !e.detail.value[i[h].key]) return void (0, d.default)("请输入" + i[h].title);
                    "1" != i[13].select && 12 != h || !e.detail.value[i[h].key] || (y[i[h].key] = e.detail.value[i[h].key]);
                }
                if ("time" == i[h].type) {
                    if ("1" == i[13].select && !i[h].select) return void (0, d.default)("请选择入境时间");
                    "1" == i[13].select && i[h].select && (y[i[h].key] = i[h].select);
                }
            }
            if (0 != l.length) {
                y.sbdd = c.default.end.location;
                var g = {
                    data: {
                        body_temperature: y.tw,
                        flags: 0,
                        gx2: y,
                        tags: []
                    },
                    member: {
                        uid: o.globalData.self.id
                    }
                };
                "0" == y.q2 ? g.data.flags += 1 : (g.data.tags.concat([ "发热", "乏力", "干咳", "气促" ]), 
                g.data.flags += 2), m ? r.default.alert({
                    title: "提示",
                    message: "绿码通行，红码、黄码限制通行，您填写的内容可能会影响您的出行，请确保您所填信息属实、准确、无误后提交。如填报虚假信息，后果由个人负责。",
                    showCancelButton: !0
                }).then(function(e) {
                    d.default.loading({
                        mask: !0,
                        duration: 0,
                        message: "提交中..."
                    }), o.services("api/app/community/health/daily").post(g).then(function(e) {
                        e && e.data.Success ? o.services("api/app/community/healthcode/update").post(f).then(function(e) {
                            e && e.data.Success ? (o.services("api/app/community/healthcode/status").get({
                                force: !0
                            }).then(function(e) {}), wx.redirectTo({
                                url: "/pages/success/index"
                            })) : e.data.Error ? (0, d.default)(e.data.Error) : (0, d.default)("服务器繁忙，请稍后再试");
                        }) : e.data.Error ? (0, d.default)(e.data.Error) : (0, d.default)("服务器繁忙，请稍后再试");
                    });
                }) : r.default.alert({
                    title: "提示",
                    message: "绿码通行，红码、黄码限制通行，您填写的内容可能会影响您的出行，请确保您所填信息属实、准确、无误后提交。如填报虚假信息，后果由个人负责。",
                    showCancelButton: !0
                }).then(function(e) {
                    t.registerFun(f, g);
                });
            } else (0, d.default)("请勾选您的承诺");
        } else (0, d.default)("请选择您的性别"); else (0, d.default)("请填写您的证件号码"); else (0, d.default)("请选择您的证件类型"); else (0, 
        d.default)("请填写您的真实姓名");
    },
    registerFun: function(e, t) {
        var a = this;
        p && (e.verify_result = p), d.default.loading({
            mask: !0,
            duration: 0,
            message: "提交中..."
        }), o.services("api/app/community/healthcode/register").post(e).then(function(i) {
            i && i.data.Success ? (o.services("api/app/community/health/daily").post(t).then(function(e) {
                e.data.Success && o.services("api/app/community/healthcode/status").get({
                    force: !0
                }).then(function(e) {});
            }), wx.redirectTo({
                url: "/pages/success/index"
            })) : !i || i.data.Success || 1 != e.zjzldm || "人脸核验失败，请稍后再试。" != i.data.Error && "微信人脸核验结果不能为空。" != i.data.Error ? i.data.Error ? (0, 
            d.default)(i.data.Error) : (0, d.default)("服务器繁忙，请稍后再试") : (d.default.clear(), r.default.alert({
                title: "提示",
                message: "根据广西健康码的管理要求,您的信息:" + e.xm + " " + e.zjhm + "需要实名验证后才可以申领广西健康码，点击继续核验人脸",
                showCancelButton: !0,
                confirmButtonText: "继续"
            }).then(function(i) {
                wx.startFacialRecognitionVerify({
                    name: e.xm,
                    idCardNumber: e.zjhm,
                    checkAliveType: 2,
                    success: function(i) {
                        e.verify_errcode = i.errCode, e.verify_errmsg = i.errMsg, p = i.verifyResult, a.registerFun(e, t);
                    },
                    fail: function(i) {
                        e.verify_errcode = i.errCode, e.verify_errmsg = i.errMsg, p = i.verifyResult, a.registerFun(e, t);
                    }
                });
            }));
        });
    }
});