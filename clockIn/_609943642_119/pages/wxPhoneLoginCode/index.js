function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s]);
    }
    return e;
}, a = e(require("vant-weapp/toast/toast")), s = e(require("../../utils/we-moment-with-locales")), o = (e(require("vant-weapp/notify/notify")), 
e(require("../../utils/restfulApi"))), n = e(require("../../utils/config")), i = getApp();

Page({
    data: {
        isShow: !1,
        isFocus: !0,
        inputValue: "",
        src: "image/close.png",
        phone: "",
        codes: [ "", "", "", "" ],
        second: 60,
        returnBloean: !0
    },
    onLoad: function(e) {
        this.setData(t({}, e)), console.log(i), this.timeReget();
    },
    timeReget: function(e) {
        var t = this, a = 60;
        t.setData({
            sendType: !0,
            second: 60
        }), t.timer = setInterval(function() {
            0 == (a -= 1) ? (clearInterval(t.timer), t.setData({
                sendType: !1
            })) : t.setData({
                second: a
            });
        }, 1e3);
    },
    sendCode: function() {
        var e = this;
        wx.request({
            url: n.default.host + "/api/user/phone/change/smscode",
            data: {
                phone: this.data.phone
            },
            method: "get",
            header: {
                Authorization: "Bearer " + i.loginData.access_token
            },
            success: function(t) {
                t.data.Success ? (a.default.success("短信发送成功"), e.timeReget()) : a.default.fail(t.data.Error);
            },
            fail: function(e) {
                a.default.fail(e.data.Error);
            }
        });
    },
    listenKeyInput: function(e) {
        for (var t = this, a = e.detail.value, s = a.length, o = new Array(), n = 0; n < (s > 4 ? 4 : s); n++) {
            var i = a.substr(n, 1);
            o[n] = i;
        }
        for (n = o.length; n < 4; n++) o.push("");
        if (this.setData({
            codes: o
        }), s > 3) {
            var r = a.substr(0, 4);
            this.inputSuccess(r), this.setData({
                inputValue: "",
                isFocus: !1
            }, function() {
                t.save();
            });
        }
    },
    inputSuccess: function() {},
    openKeyboard: function() {
        this.setData({
            isFocus: !0
        });
    },
    save: function() {
        var e = this, t = this.data, r = t.codes, u = t.phone, c = r.join("");
        a.default.loading({
            duration: 0,
            forbidClick: !0,
            loadingType: "spinner",
            message: "正在验证..."
        });
        wx.request({
            url: n.default.host + "/token",
            data: {
                grant_type: "sms",
                password: c,
                username: u
            },
            method: "get",
            header: {
                "X-Client-AppName": "farmer",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                t.data.access_token ? wx.request({
                    url: n.default.host + "/api/user/self",
                    method: "get",
                    header: {
                        Authorization: "Bearer " + t.data.access_token
                    },
                    success: function(n) {
                        n && n.data.Success && (i.loginData = t.data, i.loginData.loginTime = (0, s.default)().add(14, "days"), 
                        i.loginData.cookie = t.header["Set-Cookie"], wx.setStorage({
                            key: "loginData",
                            data: i.loginData
                        }), wx.setStorage({
                            key: "self",
                            data: n.data.Result
                        }), getApp().globalData.self = n.data.Result, i.services = (0, o.default)(i.loginData.access_token), 
                        console.log(i), n.data.Result.name || n.data.Result.photo || i.services("api/app/weixin/weapp/userinfo").post({
                            encryptedData: i.globalData.userInfoDetail.encryptedData,
                            iv: i.globalData.userInfoDetail.iv
                        }).then(function(e) {}), wx.login({
                            success: function(t) {
                                i.services("api/app/weixin/weapp/bind").get({
                                    code: t.code
                                }).then(function(t) {
                                    t.data.Success && (a.default.success("登录成功"), i.services("api/app/community/household/rebind").get().then(function(e) {}), 
                                    e.setData({
                                        islogin: !0
                                    }), setTimeout(function() {
                                        wx.reLaunch({
                                            url: i.globalData.url
                                        });
                                    }, 1500));
                                });
                            }
                        }));
                    }
                }) : (a.default.fail(t.data.Error), e.setData({
                    codes: [ "", "", "", "" ],
                    isFocus: !0
                }));
            },
            fail: function(t) {
                a.default.fail(t.data.Error), e.setData({
                    codes: [ "", "", "", "" ],
                    isFocus: !0
                });
            }
        });
    }
});