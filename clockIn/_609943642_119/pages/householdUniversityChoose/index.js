function i(i) {
    return i && i.__esModule ? i : {
        default: i
    };
}

var t = i(require("vant-weapp/toast/toast")), e = (i(require("../../utils/we-moment-with-locales")), 
getApp()), a = {
    id: "5e9662c03c974c00019f447f",
    name: "桂电学生"
}, s = "type";

Page({
    data: {
        building: {},
        group: {},
        simple: {},
        active: {},
        admin: !1
    },
    onLoad: function(i) {
        this.setData({
            group: a,
            GroupTypeEnum: e.globalData.enums ? e.globalData.enums.GroupTypeEnum : {}
        });
    },
    onShow: function() {
        this.getbuilding();
    },
    getbuilding: function() {
        var i = this;
        e.services("api/app/community/building").get({
            groupid: a.id,
            s: 1e4
        }).then(function(e) {
            if (e && e.data.Success) {
                var a = [], s = i.data.building;
                e.data.Result.Data.map(function(i) {
                    a.push({
                        id: i.id,
                        name: i.name,
                        areaid: i.areaid
                    });
                }), 0 == a.length && t.default.loading({
                    type: "text",
                    duration: 3e3,
                    forbidClick: !0,
                    message: "暂无学院可选择"
                }), i.setData({
                    building: s,
                    buildings: a
                }, function() {
                    s.id && i.getsimple();
                });
            } else e.data.Error ? t.default.fail(e.data.Error) : t.default.loading({
                type: "fail",
                duration: 1500,
                forbidClick: !0,
                message: "服务繁忙，请稍后重试"
            });
        });
    },
    getsimple: function() {
        var i = this, a = this.data, s = a.building, n = a.simple, l = {
            bid: s.id,
            s: 1e4
        };
        e.services("api/app/community/household/simple").get(l).then(function(e) {
            if (e && e.data.Success) {
                var a = [];
                e.data.Result.Data.map(function(i) {
                    a.push({
                        id: i.id,
                        name: i.no ? i.no : i.name
                    });
                }), 0 == a.length && t.default.loading({
                    type: "text",
                    duration: 3e3,
                    forbidClick: !0,
                    message: "暂无房间可选择"
                }), i.setData({
                    simples: a,
                    simple: n
                });
            } else e.data.Error ? t.default.fail(e.data.Error) : t.default.loading({
                type: "fail",
                duration: 1500,
                forbidClick: !0,
                message: "服务繁忙，请稍后重试"
            });
        });
    },
    inputchange: function(i) {
        desc = i.detail;
    },
    onChange: function(i) {
        var t = i.detail;
        this.setData({
            admin: t
        });
    },
    save: function() {
        var i = this.data, e = i.simple;
        i.building.id ? e.id ? (t.default.loading({
            mask: !0,
            duration: 0,
            message: "跳转中...",
            context: this
        }), wx.redirectTo({
            url: "/pages/householdUniversity/index?hid=" + e.id,
            success: function() {},
            fail: function() {
                t.default.clear("跳转出错！");
            }
        })) : (0, t.default)("请选择班级") : (0, t.default)("请选择学院");
    },
    toggle: function() {
        this.setData({
            sheetshow: !this.data.sheetshow
        });
    },
    toggleSheet: function(i) {
        var e = [], a = this.data, n = a.building, l = a.buildings, d = a.simples;
        if ("building" == (s = i.currentTarget.dataset.type) && l && (e = l), "simple" == s && d && (e = d), 
        0 == e.length) return t.default.loading({
            type: "text",
            duration: 1500,
            forbidClick: !0,
            message: "数据正在加载，请重试"
        }), void ("building" == s ? this.getbuilding() : "simple" == s && n.id ? this.getsimple() : "simple" != s || n.id || (0, 
        t.default)("请选择学院"));
        this.setData({
            actions: e,
            sheetshow: !0
        });
    },
    getSheetData: function(i) {
        var t = this, e = this.data, a = e.building, n = e.simple, l = (e.active, e.simples), d = i.currentTarget.dataset.item;
        "building" == s && (a = d, n = {}, l = []), "simple" == s && (n = d), this.setData({
            simples: l,
            building: a,
            simple: n
        }, function() {
            t.toggle(), "simple" != s && t.getsimple();
        });
    },
    onSelect: function(i) {
        var t = this, e = this.data, a = e.building, n = e.simple, l = e.active;
        "building" == s && (a = i.detail, n = {}), "simple" == s && (n = i.detail), "type" == s && (l = i.detail), 
        this.setData({
            building: a,
            simple: n,
            active: l
        }, function() {
            "simple" != s && t.getsimple();
        });
    }
});