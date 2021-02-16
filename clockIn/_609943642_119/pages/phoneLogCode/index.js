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
}, a = e(require("vant-weapp/toast/toast")), s = e(require("../../utils/config")), o = getApp();

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
        this.setData(t({}, e)), console.log(o), this.timeReget();
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
            url: s.default.host + "/api/user/phone/change/smscode",
            data: {
                phone: this.data.phone
            },
            method: "get",
            header: {
                Authorization: "Bearer " + o.loginData.access_token
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
            var u = a.substr(0, 4);
            this.inputSuccess(u), this.setData({
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
        var e = this, t = this.data, n = t.codes;
        t.phone;
        console.log(n.join(""));
        var i = n.join("");
        a.default.loading({
            duration: 0,
            forbidClick: !0,
            loadingType: "spinner",
            message: "正在验证..."
        });
        wx.request({
            url: s.default.host + "/api/user/phone/change",
            data: {
                code: i
            },
            method: "get",
            header: {
                Authorization: "Bearer " + o.loginData.access_token
            },
            success: function(t) {
                t.data.Success ? wx.request({
                    url: s.default.host + "/api/user/self",
                    method: "get",
                    data: {
                        force: !0
                    },
                    header: {
                        Authorization: "Bearer " + o.loginData.access_token
                    },
                    success: function(t) {
                        t && t.data.Success && (wx.setStorage({
                            key: "self",
                            data: t.data.Result
                        }), getApp().globalData.self = t.data.Result, a.default.success("成功"), o.services("api/app/point/task/execute").get({
                            id: "5cf13229dc5ace9456b366f2"
                        }).then(function(e) {}), o.services("api/app/community/household/rebind").get().then(function(e) {}), 
                        e.setData({
                            islogin: !0
                        }), setTimeout(function() {
                            wx.redirectTo({
                                url: "/pages/success/index"
                            });
                        }, 1500));
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