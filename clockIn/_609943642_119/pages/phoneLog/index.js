function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var a = Object.assign || function(e) {
    for (var a = 1; a < arguments.length; a++) {
        var t = arguments[a];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
}, t = e(require("vant-weapp/toast/toast")), n = e(require("../../utils/config")), o = (e(require("../../utils/restfulApi")), 
e(require("vant-weapp/dialog/dialog"))), s = getApp();

Page({
    data: {
        username: "",
        loading: !1,
        reset: !1
    },
    onLoad: function(e) {
        this.setData(a({}, e, {
            self: s.globalData.self,
            userInfo: s.globalData.userInfo
        }), function() {}), console.log(s);
    },
    changeUserName: function(e) {
        this.setData({
            username: e.detail
        });
    },
    gonext: function() {
        var e = this, a = this.data.username;
        s.loginData ? a && 11 == a.length ? (t.default.loading({
            duration: 0,
            forbidClick: !0,
            loadingType: "spinner",
            message: "正在发送验证码..."
        }), this.setData({
            loading: !0
        }), wx.request({
            url: n.default.host + "/api/user/phone/change/smscode",
            data: {
                phone: this.data.username
            },
            method: "get",
            header: {
                Authorization: "Bearer " + s.loginData.access_token
            },
            success: function(a) {
                a.data.Success ? (t.default.success("短信发送成功"), setTimeout(function() {
                    wx.redirectTo({
                        url: "../../pages/phoneLogCode/index?phone=" + e.data.username
                    }), e.setData({});
                }, 1e3)) : (e.setData({
                    loading: !1
                }), t.default.clear(), "该手机号已经存在系统中，请解除绑定后再重试" == a.data.Error && o.default.alert({
                    title: "提示",
                    message: "系统中已经有该手机号了，是否使用该手机号进行登录",
                    showCancelButton: !0
                }).then(function(a) {
                    wx.redirectTo({
                        url: "/pages/wxPhoneLogin/index?phone=" + e.data.username
                    });
                }));
            },
            fail: function(a) {
                e.setData({
                    loading: !1
                }), t.default.fail(a.data.Error);
            }
        })) : (0, t.default)("请输入正确的手机号码") : t.default.fail("请登录后再进行验证");
    }
});