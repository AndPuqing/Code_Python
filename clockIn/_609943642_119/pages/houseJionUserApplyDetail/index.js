function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var a, i = t(require("../../utils/we-moment-with-locales")), n = t(require("vant-weapp/toast/toast")), r = t(require("vant-weapp/dialog/dialog")), l = getApp(), u = null;

Page((a = {
    data: {
        colorType: {
            1: "红色",
            2: "黄色",
            3: "绿色"
        },
        markers: []
    },
    onLoad: function(t) {
        u = t.id, this.getDetail(), this.setData({
            CommunityHouseholdApplicationStateEnums: l.globalData.enums ? l.globalData.enums.CommunityHouseholdApplicationStateEnums : {}
        });
    },
    getDetail: function(t) {
        var e = this;
        t && n.default.loading({
            duration: 0,
            forbidClick: !0,
            message: "加载中",
            loadingType: "spinner"
        });
        var a = {
            id: u,
            include_person: !0
        };
        l.services("api/app/community/household/application/details").get(a).then(function(t) {
            if (wx.stopPullDownRefresh(), n.default.clear(), t && t.data.Success) {
                var a = [], r = [], l = t.data.Result;
                t.data.Result.health && (t.data.Result.health.createdTxt = (0, i.default)(t.data.Result.health.created).format("YYYY-MM-DD HH:mm")), 
                t.data.Result.health2.length > 0 && t.data.Result.health2.map(function(t) {
                    t.createdTxt = (0, i.default)(t.created).format("YYYY-MM-DD HH:mm");
                }), l.phone_itinerary && l.phone_itinerary.result && (l.phone_itinerary.result.updateTxt = (0, 
                i.default)().format("YYYY-MM-DD HH:mm")), l.locations.length > 0 && l.locations.map(function(t, e) {
                    a.push({
                        id: e,
                        width: 30,
                        height: 30,
                        iconPath: "../../static/location.png",
                        latitude: t.gps[1],
                        longitude: t.gps[0]
                    }), r.push({
                        latitude: t.gps[1],
                        longitude: t.gps[0]
                    });
                }), t.data.Result.itineraries.length > 0 && t.data.Result.itineraries.map(function(t) {
                    t.end.time && (t.end.timeTxt = (0, i.default)(t.end.time).format("YYYY-MM-DD HH:mm")), 
                    t.dayTxt = (0, i.default)(t.day).format("YYYY-MM-DD");
                }), l.createdTxt = (0, i.default)(l.created).format("YYYY-MM-DD HH:mm"), e.setData({
                    detail: l,
                    point: r,
                    markers: a
                });
            } else t.data.Error ? (0, n.default)(t.data.Error) : (0, n.default)("服务器繁忙，请稍后重试");
        });
    },
    goUserDetail: function(t) {
        wx.navigateTo({
            url: "/pages/userDetail/index?id=" + t.currentTarget.dataset.id
        });
    },
    save: function(t) {
        var e = this, a = {
            id: u,
            __version: this.data.detail.__version
        };
        0 == t.currentTarget.dataset.type ? a.passed = !0 : a.passed = !1, r.default.alert({
            title: "提示",
            message: "您确定" + (a.passed ? "通过" : "拒绝") + "该申请吗?",
            showCancelButton: !0
        }).then(function(t) {
            n.default.loading({
                duration: 0,
                forbidClick: !0,
                message: "加载中",
                loadingType: "spinner"
            }), l.services("api/app/community/household/application/audit").post(a).then(function(t) {
                t && t.data.Success ? (n.default.success("审核成功"), e.getDetail()) : t.data.Error ? (0, 
                n.default)(t.data.Error) : (0, n.default)("服务器繁忙，请稍后重试");
            });
        });
    },
    onPullDownRefresh: function() {
        this.getDetail(!0);
    }
}, e(a, "onPullDownRefresh", function() {
    this.getLog(!0);
}), e(a, "previewImage", function(t) {
    var e = t.currentTarget.dataset.url, a = [];
    a.push(e), wx.previewImage({
        current: e,
        urls: a
    });
}), e(a, "previewImage2", function(t) {
    var e = t.currentTarget.dataset.img, a = t.currentTarget.dataset.imgs;
    wx.previewImage({
        current: e,
        urls: a
    });
}), a));