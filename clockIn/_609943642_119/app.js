function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var a = Object.assign || function(e) {
    for (var a = 1; a < arguments.length; a++) {
        var t = arguments[a];
        for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
}, t = e(require("./utils/config")), s = e(require("./utils/we-moment-with-locales")), n = e(require("./utils/restfulApi")), i = require("./utils/qqmap-wx-jssdk.js"), o = require("./miniprogram_npm/mta-wechat-analysis/index.js");

App({
    onLaunch: function(e) {
        var l = this, r = this;
        this.qqmapsdk = new i({
            key: t.default.mapApiToken
        }), this.services = (0, n.default)("");
        var u = wx.getStorageSync("loginData");
        u && "{}" != JSON.stringify(u) && (0, s.default)(new Date()).isBefore(u.loginTime, "day") ? (this.loginData = u, 
        this.services = (0, n.default)(u.access_token), this.services("token/refresh").get().then(function(e) {
            e.data.id ? (l.loginData = e.data, l.loginData.loginTime = (0, s.default)().add(14, "days"), 
            l.loginData.cookie = e.header["Set-Cookie"], wx.setStorage({
                key: "loginData",
                data: l.loginData
            }), l.services = (0, n.default)(l.loginData.access_token)) : wx.navigateTo({
                url: "/pages/wxlog/index"
            });
        })) : wx.navigateTo({
            url: "/pages/wxlog/index"
        });
        var c = wx.getSystemInfoSync(), d = wx.getStorageSync("deviceId");
        this.deviceId = "";
        var g = {
            data: a({}, c)
        };
        d && (g.id = d, this.deviceId = d), this.services("api/app/weixin/weapp/device").post(g).then(function(e) {
            e.data.Success && (l.deviceId = e.data.Result, wx.setStorage({
                key: "deviceId",
                data: e.data.Result
            }));
        });
        var p = wx.getStorageSync("realName");
        p && (this.globalData.realname = p);
        var f = wx.getStorageSync("self");
        f && (this.globalData.self = f);
        var h = wx.getStorageSync("Enums");
        h && (this.globalData.enums = h), this.getInitData(), wx.getSystemInfo({
            success: function(e) {
                r.globalData.systemInfo = e;
            }
        }), wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(e) {
                        l.globalData.userInfo = e.userInfo, l.globalData.userInfoDetail = e, l.userInfoReadyCallback && l.userInfoReadyCallback(e);
                    }
                });
            }
        }), o.App.init({
            appID: "500640738",
            eventID: "500640738",
            lauchOpts: e,
            statPullDownFresh: !0,
            statShareApp: !0,
            statReachBottom: !0
        });
        var v = wx.getUpdateManager();
        v.onCheckForUpdate(function(e) {
            console.log(e.hasUpdate);
        }), v.onUpdateReady(function() {
            v.applyUpdate();
        }), v.onUpdateFailed(function() {});
    },
    getInitData: function() {
        var e = this;
        this.services("api/user/self").get().then(function(e) {
            e && e.data.Success && (wx.setStorage({
                key: "self",
                data: e.data.Result
            }), getApp().globalData.self = e.data.Result);
        }), this.services("api/app/community/household/rebind").get().then(function(e) {
            e && e.data.Success;
        }), this.services("api/user/app/version").post({
            appversion2: t.default.version,
            applabel: t.default.name
        }).then(function(e) {
            e && e.data.Success;
        }), wx.request({
            url: t.default.host + "/api/Static/Enums",
            success: function(a) {
                a && a.data.Success && (wx.setStorage({
                    key: "Enums",
                    data: a.data.Result
                }), e.globalData.enums = a.data.Result);
            }
        });
    },
    globalData: {
        error: [],
        realname: !1,
        location: {},
        userInfo: null,
        url: "/pages/index/index"
    }
});