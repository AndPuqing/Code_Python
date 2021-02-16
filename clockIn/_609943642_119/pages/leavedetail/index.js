function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../utils/we-moment-with-locales")), e = t(require("vant-weapp/dialog/dialog")), i = t(require("vant-weapp/toast/toast")), n = getApp(), s = null;

Page({
    data: {
        currentDate1: new Date().getTime(),
        mixdate: new Date().getTime()
    },
    onLoad: function(t) {
        s = t.id;
    },
    onReady: function() {
        this.getDetail();
    },
    getDetail: function() {
        var t = this;
        i.default.loading("加载中..."), n.services("api/app/community/guet/leave/details").get({
            id: s
        }).then(function(e) {
            if (e && e.data.Success) {
                var s = e.data.Result;
                s.createdTxt = (0, a.default)(s.created).format("YYYY-MM-DD HH:mm"), s.start && (s.startTxt = (0, 
                a.default)(s.start).format("YYYY-MM-DD ")), s.end && (s.endTxt = (0, a.default)(s.end).format("YYYY-MM-DD ")), 
                t.setData({
                    detail: e.data.Result,
                    CommunityHouseholdApplicationStateEnums: n.globalData.enums ? n.globalData.enums.CommunityHouseholdApplicationStateEnums : {},
                    CommunityPassLimitTypeEnums: n.globalData.enums ? n.globalData.enums.CommunityPassLimitTypeEnums : {}
                });
            } else (0, i.default)(e.data.Error);
        });
    },
    toggle: function() {
        this.setData({
            popShow: !this.data.popShow
        });
    },
    toggleBottomPopup: function(t) {
        0 == this.data.detail.state && this.setData({
            popShow: !0
        }, function() {});
    },
    onTimeChange: function(t) {
        this.setData({
            currentDate1: t.detail,
            newTime: (0, a.default)(new Date(t.detail)).format("YYYY-MM-DD") + " " + (0, a.default)(new Date(this.data.detail.limit.start)).format("HH:mm:ss"),
            popShow: !1
        });
    },
    adiut: function(t) {
        var o = this, u = {
            id: s,
            __version: this.data.detail.__version
        };
        0 == t.currentTarget.dataset.type ? u.passed = !0 : u.passed = !1, this.data.newTime && (u.visiting_time = (0, 
        a.default)(this.data.newTime).format("YYYY-MM-DD")), e.default.alert({
            title: "提示",
            message: "您确定要" + (u.passed ? "通过" : "拒绝") + "吗?",
            showCancelButton: !0
        }).then(function(t) {
            i.default.loading({
                duration: 0,
                forbidClick: !0,
                message: "加载中",
                loadingType: "spinner"
            }), n.services("api/app/community/guet/leave/audit").post(u).then(function(t) {
                t && t.data.Success ? (i.default.success("审核成功"), o.getDetail()) : t.data.Error ? i.default.fail(t.data.Error) : (0, 
                i.default)("服务器繁忙，请稍后重试！");
            });
        });
    },
    delete: function() {
        var t = {
            id: s,
            passs: !1,
            __version: this.data.detail.__version
        };
        e.default.alert({
            title: "提示",
            message: "您确定要拒绝该通行证吗吗?",
            showCancelButton: !0
        }).then(function(a) {
            i.default.loading({
                duration: 0,
                forbidClick: !0,
                message: "加载中",
                loadingType: "spinner"
            }), n.services("api/app/community/guet/leave/audit").post(t).then(function(t) {
                t && t.data.Success && t.data.Result ? (i.default.success("拒绝成功"), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 1e3)) : t.data.Error ? i.default.fail(t.data.Error) : (0, i.default)("服务器繁忙，请稍后重试！");
            });
        });
    },
    goback: function() {
        wx.reLaunch({
            url: "/pages/index/index"
        });
    },
    previewImg: function(t) {
        var a = t.currentTarget.dataset.url, e = this.data.detail.imgs;
        wx.previewImage({
            current: a,
            urls: e
        });
    }
});