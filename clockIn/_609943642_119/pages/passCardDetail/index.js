function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../utils/we-moment-with-locales")), e = t(require("vant-weapp/dialog/dialog")), i = t(require("vant-weapp/toast/toast")), s = getApp(), n = null;

Page({
    data: {
        currentDate1: new Date().getTime(),
        mixdate: new Date().getTime()
    },
    onLoad: function(t) {
        n = t.id;
    },
    onReady: function() {
        this.getDetail();
    },
    getDetail: function() {
        var t = this;
        i.default.loading("加载中..."), s.services("api/app/community/pass/details").get({
            id: n
        }).then(function(e) {
            if (e && e.data.Success) {
                var n = e.data.Result;
                n.createdTxt = (0, a.default)(n.created).format("YYYY-MM-DD HH:mm"), n.expired && (n.expiredTxt = (0, 
                a.default)(n.expired).format("YYYY-MM-DD HH:mm:ss")), n.limit.time_periods && n.limit.time_periods.map(function(t) {
                    t.startTxt = (0, a.default)((0, a.default)().format("YYYY-MM-DD 00:00:00")).add(t.start, "minutes").format("HH:mm"), 
                    t.endTxt = (0, a.default)((0, a.default)().format("YYYY-MM-DD 00:00:00")).add(t.end, "minutes").format("HH:mm");
                }), n.limit.start && (n.limit.startTxt = (0, a.default)(n.limit.start).format("YYYY-MM-DD HH:mm:ss")), 
                n.limit.end && (n.limit.endTxt = (0, a.default)(n.limit.end).format("YYYY-MM-DD HH:mm:ss")), 
                t.setData({
                    detail: e.data.Result,
                    CommunityHouseholdApplicationStateEnums: s.globalData.enums ? s.globalData.enums.CommunityHouseholdApplicationStateEnums : {},
                    CommunityPassLimitTypeEnums: s.globalData.enums ? s.globalData.enums.CommunityPassLimitTypeEnums : {}
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
        var d = this, o = {
            id: n,
            __version: this.data.detail.__version
        };
        0 == t.currentTarget.dataset.type ? o.passed = !0 : o.passed = !1, this.data.newTime && (o.visiting_time = (0, 
        a.default)(this.data.newTime).format("YYYY-MM-DD")), e.default.alert({
            title: "提示",
            message: "您确定要" + (o.passed ? "通过" : "拒绝") + "吗?",
            showCancelButton: !0
        }).then(function(t) {
            i.default.loading({
                duration: 0,
                forbidClick: !0,
                message: "加载中",
                loadingType: "spinner"
            }), s.services("api/app/community/pass/audit").post(o).then(function(t) {
                t && t.data.Success ? (i.default.success("审核成功"), d.getDetail()) : t.data.Error ? i.default.fail(t.data.Error) : (0, 
                i.default)("服务器繁忙，请稍后重试！");
            });
        });
    },
    delete: function() {
        var t = {
            id: n,
            disabled: !0
        };
        e.default.alert({
            title: "提示",
            message: "您确定要删除该通行证吗吗?",
            showCancelButton: !0
        }).then(function(a) {
            i.default.loading({
                duration: 0,
                forbidClick: !0,
                message: "加载中",
                loadingType: "spinner"
            }), s.services("api/app/community/pass/disable").get(t).then(function(t) {
                t && t.data.Success && t.data.Result ? (i.default.success("删除成功"), setTimeout(function() {
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
    goUser: function(t) {
        wx.navigateTo({
            url: "/pages/userDetail/index?id=" + s.globalData.self.id
        });
    },
    goHouse: function() {
        wx.navigateTo({
            url: "/pages/webviewHousehold/index?url=/school/classdetail&id=" + this.data.detail.id
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