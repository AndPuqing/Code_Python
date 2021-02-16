function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

e(require("vant-weapp/toast/toast")), e(require("../../utils/we-moment-with-locales"));

var t = e(require("vant-weapp/dialog/dialog")), a = (e(require("../../utils/config")), 
getApp()), o = {};

Page({
    data: {
        show: !1,
        bind: !0
    },
    onLoad: function(e) {
        console.log(a), o = e;
    },
    onShow: function() {
        this.getBind(), a.loginData ? (t.default.close(), this.setData({
            options: o
        })) : t.default.alert({
            title: "提示",
            message: "您还未登录，请跳转登录后继续"
        }).then(function(e) {
            wx.navigateTo({
                url: "/pages/wxlog/index"
            });
        }), a.globalData.self && !a.globalData.self.phone && t.default.alert({
            title: "提示",
            message: "您还未绑定手机，请绑定后继续操作"
        }).then(function(e) {
            wx.navigateTo({
                url: "/pages/phoneTypeChoose/index"
            });
        });
    },
    goPasslog: function() {
        wx.redirectTo({
            url: "/pages/passLog/index"
        });
    },
    goback: function() {
        wx.reLaunch({
            url: "/pages/index/index"
        });
    },
    goUrl: function(e) {
        wx.navigateTo({
            url: e.currentTarget.dataset.url
        });
    },
    getBind: function() {
        var e = this;
        a.services("api/app/community/healthcode/check/bind").post().then(function(t) {
            t && t.data.Success && e.setData({
                bind: t.data.Result
            });
        });
    },
    ResultChange: function(e) {
        var t = e.detail.data, a = e.detail.detail, o = "01";
        4 == (4 & t.flags) && (o = "02"), console.log(e), this.setData({
            detail: a,
            turnflage: o,
            data: t,
            show: !0
        });
    },
    onPullDownRefresh: function() {
        var e = this;
        this.setData({
            reshow: !this.data.reshow
        }, function() {
            wx.stopPullDownRefresh(), e.setData({
                reshow: !e.data.reshow
            });
        });
    }
});