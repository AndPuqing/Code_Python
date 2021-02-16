function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
    }
    return e;
};

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return Page(t({
        checkPhone: function() {
            l.globalData.self && l.globalData.self.id && !l.globalData.self.phone && o.default.alert({
                title: "提示",
                message: "您还未绑定手机,请绑定手机后继续",
                showCancelButton: !0
            }).then(function(e) {
                wx.navigateTo({
                    url: "/pages/phoneTypeChoose/index"
                });
            });
        },
        checkLogIn: function(e) {
            if (getApp().loginData && !getApp().globalData.self) try {
                wx.request({
                    url: a.default.host + "/api/user/self",
                    method: "get",
                    header: {
                        Authorization: "Bearer " + getApp().loginData.access_token
                    },
                    success: function(e) {
                        e && e.data.Success && (getApp().globalData.self = e.data.Result);
                    }
                });
            } catch (e) {}
            !getApp().globalData.enums && getApp().services && getApp().services("api/Static/Enums").get().then(function(e) {
                e && e.data.Success && (wx.setStorage({
                    key: "Enums",
                    data: e.data.Result
                }), getApp().globalData.enums = e.data.Result);
            });
        }
    }, e));
};

e(require("../utils/we-moment-with-locales"));

var a = e(require("../utils/config")), o = e(require("vant-weapp/dialog/dialog")), l = getApp();