function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
}, a = e(require("vant-weapp/toast/toast")), n = (e(require("../../utils/config")), 
e(require("../../utils/restfulApi")), getApp());

Page({
    data: {
        username: "",
        loading: !1,
        reset: !1
    },
    onLoad: function(e) {
        var a = "";
        e.phone && (a = e.phone), this.setData(t({}, e, {
            username: a,
            userInfo: n.globalData.userInfo
        }), function() {}), console.log(n);
    },
    changeUserName: function(e) {
        this.setData({
            username: e.detail
        });
    },
    gonext: function() {
        var e = this, t = this.data.username;
        t && 11 == t.length ? (a.default.loading({
            duration: 0,
            forbidClick: !0,
            loadingType: "spinner",
            message: "正在发送验证码..."
        }), this.setData({
            loading: !0
        }), n.services("api/user/login/smscode").get({
            phone: this.data.username
        }).then(function(t) {
            t.data.Success ? (a.default.success("短信发送成功"), setTimeout(function() {
                wx.redirectTo({
                    url: "/pages/wxPhoneLoginCode/index?phone=" + e.data.username
                }), e.setData({});
            }, 1e3)) : (e.setData({
                loading: !1
            }), a.default.fail(t.data.Error));
        })) : (0, a.default)("请输入正确的手机号码");
    }
});