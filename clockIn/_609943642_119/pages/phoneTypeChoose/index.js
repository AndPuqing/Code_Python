function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var a = e(require("vant-weapp/toast/toast")), t = e(require("vant-weapp/dialog/dialog")), i = getApp();

Page({
    data: {
        loading: !1
    },
    onLoad: function(e) {},
    getPhoneNumber: function(e) {
        var n = this;
        if (e.detail.encryptedData || e.detail.iv) {
            var o = {
                encryptedData: e.detail.encryptedData,
                iv: e.detail.iv
            };
            i.loginData ? (this.setData({
                loading: !0
            }), a.default.loading({
                mask: !0,
                duration: 0,
                message: "加载..."
            }), i.services("api/app/weixin/weapp/phone").post(o).then(function(e) {
                e && e.data.Success ? (i.services("api/app/community/household/rebind").get().then(function(e) {}), 
                i.services("api/user/self").get({
                    force: !0
                }).then(function(e) {
                    e && e.data.Success && (wx.setStorage({
                        key: "self",
                        data: e.data.Result
                    }), getApp().globalData.self = e.data.Result, i.services("api/app/point/task/execute").get({
                        id: "5cf13229dc5ace9456b366f2"
                    }).then(function(e) {}), wx.redirectTo({
                        url: "/pages/success/index"
                    }));
                })) : (n.setData({
                    loading: !1
                }), a.default.clear(), "该手机号已经存在系统中，请解除绑定后再重试" == e.data.Error ? t.default.alert({
                    title: "提示",
                    message: "系统中已经有该手机号了，是否使用该手机号进行登录",
                    showCancelButton: !0
                }).then(function(e) {
                    wx.navigateTo({
                        url: "/pages/wxPhoneLogin/index?phone="
                    });
                }) : e.data.Error ? a.default.fail(e.data.Error) : a.default.fail("系统繁忙，请稍后重试"));
            })) : a.default.fail("请登录后再进行验证");
        }
    },
    goPhoneLog: function() {
        wx.redirectTo({
            url: "/pages/phoneLog/index"
        });
    }
});