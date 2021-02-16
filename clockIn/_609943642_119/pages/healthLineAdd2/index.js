function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var t = Object.assign || function(a) {
    for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (a[o] = e[o]);
    }
    return a;
}, e = (a(require("../../utils/we-moment-with-locales")), a(require("vant-weapp/dialog/dialog")), 
a(require("vant-weapp/toast/toast"))), o = a(require("../../utils/config")), n = getApp(), l = require("../../common/tool"), i = {}, d = 35.5, s = 36.5, c = 36.5;

!function(a, t, e) {
    t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e;
}({
    q1: "0",
    q2: "0",
    q3: "0",
    q4: "0",
    q5: "0",
    q6: "1",
    q7: "0",
    q8: "0",
    q9: "0",
    q10: "0",
    q11: "2",
    q12: "南宁",
    q13: "0",
    q20: "d208",
    q21: "1",
    sbdd: "桂林"
}, "sbdd", o.default.end.location);

Page({
    data: {
        tags: [ {
            name: "健康",
            flag: 1
        }, {
            name: "发热",
            flag: 0
        }, {
            name: "干咳",
            flag: 0
        }, {
            name: "乏力",
            flag: 0
        }, {
            name: "腹泻",
            flag: 0
        }, {
            name: "感冒",
            flag: 0
        }, {
            name: "头疼头晕",
            flag: 0
        }, {
            name: "呼吸不畅",
            flag: 0
        }, {
            name: "流鼻涕",
            flag: 0
        } ],
        tagsShow: !0,
        radio: [],
        locload: !1
    },
    onLoad: function(a) {
        console.log(a), this.setData(t({
            key: o.default.key
        }, a)), i = a, this.location = new l.Location();
    },
    onShow: function() {
        var a = this;
        i.id == n.globalData.self.id && this.getLastHealthLog(), this.location.startgetlocation(!0, function(t) {
            t.latitude && t.longitude && a.setData({
                locload: !0
            });
        });
    },
    onCheckboxChange: function(a) {
        var t = a.detail.value, e = this.data, o = e.tags, n = e.result;
        n = n || [];
        var l = !1;
        o.map(function(a) {
            0 == a.flag && (a.checked = !1, t.indexOf(a.name) > -1 && 0 == a.flag && (a.checked = !0));
        }), l = t.indexOf("发热") > -1;
        var i = !1;
        o.map(function(a) {
            0 == a.flag && a.checked && (i = !0);
        }), i ? (o[0].checked = !1, n.indexOf("健康") > -1 && n.splice(n.indexOf("健康"), 1)) : (o[0].checked = !0, 
        n.push("健康")), console.log(n), this.setData({
            tags: o,
            stepSHow: l,
            result: n
        });
    },
    toggle: function(a) {
        var t = a.currentTarget.dataset.index;
        this.selectComponent(".checkboxes-" + t).toggle();
    },
    noop: function() {},
    onChange: function(a) {
        var t = this.data, e = t.tags, o = t.stepSHow, n = [], l = a.detail;
        l.indexOf("健康") > -1 ? (o = !1, e.map(function(a) {
            a.checked = !1, l.indexOf(a.name) > -1 && 0 == a.flag && l.splice(l.indexOf(a.name), 1);
        }), n = l) : n = a.detail, e.map(function(a) {
            a.flag && (n.indexOf(a.name) > -1 ? a.checked = !0 : a.checked = !1);
        }), this.setData({
            stepSHow: o,
            result: n,
            tags: e
        });
    },
    radioChange: function(a) {
        this.setData({
            radio: a.detail
        });
    },
    getLastHealthLog: function() {},
    save: function() {
        var a = this.data, t = a.result, l = a.tags, g = a.radio, u = {
            member: {
                uid: i.id ? i.id : n.globalData.self ? n.globalData.self.id : null,
                name: i.name ? i.name : null,
                phone: i.phone ? i.phone : null
            },
            data: {
                tags: [],
                flags: 0
            },
            loc: {}
        };
        if (i.hid && (u.hid = i.hid), n.globalData.position && n.globalData.position.location && (u.loc.areaid = n.globalData.position.areaid, 
        u.loc.desc = n.globalData.position.location), "guet" == o.default.key && !n.globalData.location || n.globalData.location && !n.globalData.location.longitude) return (0, 
        e.default)("正在定位,请定位成功后重试"), void this.location.startgetlocation(!0);
        n.globalData.location && n.globalData.location.longitude && (u.loc.gps = {
            lng: n.globalData.location.longitude,
            lat: n.globalData.location.latitude
        }), l.map(function(a) {
            a.checked ? (u.data.flags |= a.flag, a.flag || u.data.tags.push(a.name)) : u.data.flags &= ~a.flag;
        }), u.data.body_temperature = Number(d), i.student && (u.data.normal = !0, u.data.tags.push("上午" + s), 
        u.data.tags.push("下午" + c), u.data.body_temperature = Number(c), d = Number(c)), 
        Number(d) <= 35.5 ? (0, e.default)("请填写正确的体温") : t && 0 == t.length && 0 == u.data.tags.length ? (0, 
        e.default)("请选择您的健康状态") : 0 != g.length && 1 != g.length ? (e.default.loading({
            duration: 0,
            forbidClick: !0,
            message: "提交中"
        }), console.log(u), n.services("api/app/community/health/daily").post(u).then(function(a) {
            a && a.data.Success && a.data.Result ? (e.default.success("操作成功"), setTimeout(function() {
                wx.navigateBack({
                    delta: 1,
                    complete: function(a) {}
                });
            }, 1e3)) : a.data.Error ? (0, e.default)(a.data.Error) : (0, e.default)("服务器繁忙，请稍后再试");
        })) : (0, e.default)("请勾选填报承诺确认按钮");
    },
    stepChange: function(a) {
        d = a.detail;
    },
    stepperChange: function(a) {
        "morningtem" == a.currentTarget.dataset.type ? s = a.detail : "noontem" == a.currentTarget.dataset.type && (c = a.detail);
    }
});