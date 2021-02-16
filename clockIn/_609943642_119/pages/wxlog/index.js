function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var a = e(require("vant-weapp/toast/toast")), t = (e(require("vant-weapp/notify/notify")), 
e(require("../../utils/restfulApi"))), o = e(require("../../utils/we-moment-with-locales")), s = e(require("../../utils/config")), n = getApp(), i = !1;

Page({
    data: {
        motto: "Hello World",
        userInfo: {},
        hasUserInfo: !1,
        canIUse: !1,
        islogin: !1,
        isCheck: !0
    },
    onLoad: function(e) {
        console.log(e), e.auto && (i = e.auto);
    },
    getUserInfo: function(e) {
        console.log(e), n.globalData.userInfo = e.detail.userInfo, this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: !0
        });
    },
    onGotUserInfo: function(e) {
        console.log(e), e.detail.userInfo ? (n.globalData.userInfo = e.detail.userInfo, 
        n.globalData.userInfoDetail = e.detail, this.login()) : a.default.fail("请点击允许继续");
    },
    login: function(e) {
        var r = this;
        a.default.loading({
            mask: !0,
            duration: 0,
            message: "正在登录..."
        }), wx.login({
            success: function(e) {
                wx.request({
                    url: s.default.host + "/api/app/weixin/weapp/prelogin",
                    method: "post",
                    data: {
                        code: e.code,
                        encryptedData: n.globalData.userInfoDetail.encryptedData,
                        iv: n.globalData.userInfoDetail.iv
                    },
                    header: {
                        "X-Client-AppName": s.default.appName
                    },
                    success: function(l) {
                        console.log(l.data), l.data.Success ? wx.request({
                            url: s.default.host + "/token",
                            data: "grant_type=password&username=212&password=111&weapp_code=" + e.code,
                            method: "post",
                            header: {
                                "X-Client-AppName": s.default.appName,
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                e && e.data.access_token ? wx.request({
                                    url: s.default.host + "/api/user/self",
                                    method: "get",
                                    header: {
                                        "X-Client-AppName": s.default.appName,
                                        Authorization: "Bearer " + e.data.access_token
                                    },
                                    success: function(r) {
                                        r && r.data.Success && (n.loginData = e.data, n.loginData.loginTime = (0, o.default)().add(14, "days"), 
                                        n.loginData.cookie = e.header["Set-Cookie"], wx.setStorage({
                                            key: "loginData",
                                            data: n.loginData
                                        }), n.services = (0, t.default)(n.loginData.access_token), r.data.Result.name || r.data.Result.photo || n.services("api/app/weixin/weapp/userinfo").post({
                                            encryptedData: n.globalData.userInfoDetail.encryptedData,
                                            iv: n.globalData.userInfoDetail.iv
                                        }).then(function(e) {}), n.services("api/app/community/household/rebind").get().then(function(e) {
                                            e && e.data.Success;
                                        }), n.services("api/user/app/version").post({
                                            appversion2: s.default.version,
                                            applabel: s.default.name
                                        }).then(function(e) {}), wx.setStorage({
                                            key: "self",
                                            data: r.data.Result
                                        }), getApp().globalData.self = r.data.Result, a.default.success("登录成功"), setTimeout(function() {
                                            i ? wx.switchTab({
                                                url: "/pages/index/index"
                                            }) : wx.navigateBack({
                                                delta: 1
                                            });
                                        }, 1500));
                                    }
                                }) : (a.default.fail(e.data.error_description ? e.data.error_description : e.data.Error ? e.data.Error : "登录错误，请联系管理员"), 
                                r.setData({
                                    islogin: !1
                                }));
                            }
                        }) : a.default.fail(l.data.error_description ? l.data.error_description : l.data.Error ? l.data.Error : "登录错误，请联系管理员");
                    }
                });
            }
        });
    },
    cancalLogin: function() {
        getCurrentPages().length > 1 ? wx.navigateBack({
            delta: 1
        }) : wx.reLaunch({
            url: "/pages/index/index"
        });
    }
});