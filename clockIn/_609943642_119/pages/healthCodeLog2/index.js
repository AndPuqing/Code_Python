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

var a, i = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
}, s = e(require("../../utils/we-moment-with-locales")), l = e(require("vant-weapp/toast/toast")), n = (e(require("vant-weapp/dialog/dialog")), 
e(require("../../utils/config"))), d = getApp(), o = {}, c = null, r = null, u = null;

Page({
    data: (a = {
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
            type: "radio",
            select: "36.5",
            data: [ {
                name: "自觉正常，未发热",
                id: 36.5
            }, {
                name: "发热37.3度以上",
                id: 37.6
            }, {
                name: "发热37.3度以下",
                id: 37.2
            } ]
        }, {
            title: "健康自报",
            key: "zz",
            type: "radio",
            select: "0",
            data: [ {
                name: "无症状",
                id: 0
            }, {
                name: "干咳",
                id: 1
            }, {
                name: "乏力",
                id: 2
            }, {
                name: "其他症状",
                id: 3
            } ]
        }, {
            title: "是否常驻广西",
            key: "sfczgx",
            type: "radio",
            select: "1",
            data: [ {
                name: "否，我是临时来广西的",
                id: 0
            }, {
                name: "是，在广西居住了已有半年以上",
                id: 1
            } ]
        }, {
            title: "近期是否在广西",
            key: "jqsfzgx",
            type: "radio",
            select: "0",
            data: [ {
                name: "一直在广西3个月或以上",
                id: 0
            }, {
                name: "来或返回广西超过14日",
                id: 1
            }, {
                name: "来或返回广西不超过14日（含14日）",
                id: 2
            }, {
                name: "目前仍在外地",
                id: 3
            } ]
        }, {
            title: "近一个月旅居史",
            key: "jygyljs",
            type: "checkbox",
            data: [ {
                name: "武汉",
                id: 0
            }, {
                name: "湖北（除武汉外）",
                id: 1
            }, {
                name: "中国大陆其他省（自治区）市",
                id: 2
            }, {
                name: "中国港澳台地区",
                id: 3
            }, {
                name: "国外",
                id: 4
            } ]
        }, {
            title: "近期接触史1",
            key: "jqjcs1",
            type: "radio",
            select: "1",
            data: [ {
                name: "14日内密切接触近期有湖北旅居者",
                id: 0
            }, {
                name: "14日内没有密切接触近期有湖北旅居者",
                id: 1
            } ]
        }, {
            title: "近期接触史2",
            key: "jqjcs2",
            type: "radio",
            select: "1",
            data: [ {
                name: "自我感觉14日内曾与患者接触过者",
                id: 0
            }, {
                name: "14日内没有接触过患者",
                id: 1
            } ]
        }, {
            title: "个人健康状态",
            key: "grjkzt",
            type: "radio",
            select: "0",
            data: [ {
                name: "正常活动、自觉正常无不适症状",
                id: 0
            }, {
                name: "居家健康服务、广西有固定住处，在家自我健康观察",
                id: 1
            }, {
                name: "集中健康服务、广西无固定住处，如住酒店等实施集中观察",
                id: 2
            }, {
                name: "集中医学观察、在医疗机构医学观察",
                id: 3
            } ]
        } ],
        zjzldm: {
            name: "身份证",
            type: 1
        }
    }, t(a, "log", {}), t(a, "radio", []), a),
    onLoad: function(e) {
        u = null, e.idcard && e.name && (o = {
            zjhm: e.idcard,
            xm: e.name
        }, u = !0, this.setData({
            zjzldm: this.data.sheets.zjzldm[Number(e.type) - 1]
        })), d.globalData.self && (o.dhhm = d.globalData.self.phone ? d.globalData.self.phone : ""), 
        e.id && (c = e.id), e.reset && (this.getlog(), this.setData({
            reset: !0
        })), c || this.getregister();
    },
    onChange: function(e) {
        var a = this, i = e.currentTarget.dataset.index, s = e.detail.name;
        this.setData(t({}, "gxselect[" + i + "].select", String(s)), function() {
            console.log(a.data.gxselect);
        });
    },
    onClick: function(e) {
        var a = this, i = e.currentTarget.dataset, s = i.index, l = i.name;
        this.setData(t({}, "gxselect[" + s + "].select", String(l)), function() {
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
        u && (t.from_user = u), d.services("api/app/community/healthcode/default/register").get(t).then(function(t) {
            if (t && t.data.Success) {
                var a = "";
                t.data.Result.sr && (a = (0, s.default)(t.data.Result.sr).format("YYYY-MM-DD"));
                var l = {};
                (0 == t.data.Result.xb || t.data.Result.xb) && (l = e.data.sheets.xb[Number(t.data.Result.xb)]), 
                e.setData({
                    xb: l,
                    sr: a,
                    log: i({}, t.data.Result, o)
                });
            }
        });
    },
    getlog: function() {
        var e = this, t = this.data.gxselect;
        d.services("api/app/community/healthcode/default/health").get().then(function(a) {
            if (a && a.data.Success) {
                var i = a.data.Result, s = "";
                t.map(function(e) {
                    "radio" != e.type || !i[e.key] && 0 != i[e.key] ? "checkbox" == e.type && i[e.key] && (e.select = i[e.key].split(",")) : "tw" == e.key && Number(i[e.key]) < 36.5 ? e.select = "36.5" : "tw" == e.key && Number(i[e.key]) > 37.2 ? e.select = "37.6" : "tw" == e.key && Number(i[e.key]) > 36.5 && Number(i[e.key]) <= 37.2 ? e.select = "37.2" : e.select = String(i[e.key]);
                }), i.zzms && (s = i.zzms), console.log(t), e.setData({
                    zzms: s,
                    gxselect: t
                });
            }
        });
    },
    toggleSheet: function(e) {
        if (r = e.currentTarget.dataset.type, !this.data.reset || "xb" == r) {
            console.log(e);
            var t = this.data.sheets;
            this.setData({
                actions: t[r],
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
        this.setData((a = {}, t(a, "" + r, e.detail), t(a, "show", !1), a), function() {
            console.log(i.data.show);
        });
    },
    toggleTime: function() {
        this.setData({
            timeShow: !this.data.timeShow
        });
    },
    onTimeChange: function(e) {
        this.setData({
            currentDate1: e.detail,
            sr: (0, s.default)(new Date(e.detail)).format("YYYY-MM-DD"),
            timeShow: !1
        });
    },
    save: function(e) {
        console.log(e), console.log(this.data.gxselect);
        var t = this.data, a = t.gxselect, i = t.radio, s = t.zjzldm, o = t.xb, c = t.sr, r = t.reset;
        if (r || e.detail.value.xm) if (r || s.name) if (r || e.detail.value.zjhm) if (o.name) if (c) if (e.detail.value.jtzz) {
            var u = {
                zjzldm: s.type,
                zjhm: e.detail.value.zjhm,
                xm: e.detail.value.xm,
                dhhm: e.detail.value.dhhm,
                dw: e.detail.value.dw,
                jtzz: e.detail.value.jtzz,
                sr: c,
                xb: o.type
            }, m = {};
            for (var f in a) {
                if ("radio" == a[f].type) {
                    if (!a[f].select) return void (0, l.default)("请选择" + a[f].title);
                    if (1 == f && "3" == a[f].select && !e.detail.value.zzms) return void (0, l.default)("请您填写症状描述");
                    1 == f && "3" == a[f].select && e.detail.value.zzms && (m.zzms = e.detail.value.zzms), 
                    m[a[f].key] = a[f].select;
                }
                if ("checkbox" == a[f].type) if ("0" == a[3].select) m.jygyljs = 5; else {
                    if (!a[f].select || 0 == a[f].select.length) return void (0, l.default)("请选择" + a[f].title);
                    m.jygyljs = a[f].select.join(",");
                }
            }
            if (0 != i.length) {
                m.sbdd = n.default.end.location, console.log(u), console.log(m);
                var h = {
                    data: {
                        body_temperature: m.tw,
                        flags: 0,
                        gx: m,
                        tags: []
                    },
                    member: {
                        uid: d.globalData.self.id
                    }
                };
                "0" == m.zz ? h.data.flags += 1 : (h.data.tags.push(a[1].data[Number(m.zz)].name), 
                h.data.flags += 2), l.default.loading({
                    mask: !0,
                    duration: 0,
                    message: "提交中..."
                }), r ? d.services("api/app/community/health/daily").post(h).then(function(e) {
                    e && e.data.Success ? d.services("api/app/community/healthcode/update").post(u).then(function(e) {
                        e && e.data.Success ? (l.default.success(r ? "修改成功" : "注册成功"), setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 1e3)) : (0, l.default)(e.data.Error);
                    }) : (0, l.default)(e.data.Error);
                }) : d.services("api/app/community/health/daily").post(h).then(function(e) {
                    e && e.data.Success ? d.services("api/app/community/healthcode/register").post(u).then(function(e) {
                        e && e.data.Success ? (l.default.success(r ? "修改成功" : "注册成功"), setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 1e3)) : (0, l.default)(e.data.Error);
                    }) : (0, l.default)(e.data.Error);
                });
            } else (0, l.default)("请勾选您的承诺");
        } else (0, l.default)("请填写您的详细居住地址"); else (0, l.default)("请填写您的生日"); else (0, l.default)("请填写您的性别"); else (0, 
        l.default)("请填写您的证件号码"); else (0, l.default)("请填写您的证件类型"); else (0, l.default)("请填写您的真实姓名");
    }
});