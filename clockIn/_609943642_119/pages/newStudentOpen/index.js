function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../common/page")), n = (e(require("../../utils/config")), 
e(require("vant-weapp/toast/toast"))), a = getApp(), o = !1;

(0, t.default)({
    data: {},
    onLoad: function(e) {},
    onReady: function() {
        this.getlist();
    },
    onShow: function() {
        o && this.getlist(!0);
    },
    getlist: function(e) {
        var t = this;
        e || n.default.loading({
            duration: 0,
            message: "加载中...",
            mask: !0
        }), a.services("api/app/community/guet/newstudent/open/my").get({
            generate_token: !0
        }).then(function(e) {
            wx.stopPullDownRefresh(), n.default.clear(), e && e.data.Success ? 1 == e.data.Result.length ? wx.redirectTo({
                url: "/pages/newStudentOpenView/index?token=" + e.data.Result[0].token
            }) : (0 == e.data.Result.length && (o = !0), t.setData({
                list: e.data.Result
            })) : ((0, n.default)(e.data.Error), o = !0);
        });
    },
    gourl: function(e) {
        token = e.currentTarget.dataset.token, wx.redirectTo({
            url: "/pages/newStudentOpenView/index?token=" + token
        });
    },
    goHealtchcode: function() {
        wx.navigateTo({
            url: "/pages/samCode/index"
        });
    }
});