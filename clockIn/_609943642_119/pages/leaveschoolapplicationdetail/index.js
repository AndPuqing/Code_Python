function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../utils/we-moment-with-locales")), a = t(require("vant-weapp/dialog/dialog")), i = t(require("vant-weapp/toast/toast")), n = getApp(), o = null;

Page({
    data: {
        currentDate1: new Date().getTime(),
        mixdate: new Date().getTime(),
        colorType: {
            1: "红色",
            2: "黄色",
            3: "绿色"
        }
    },
    onLoad: function(t) {
        o = t.id;
    },
    onReady: function() {
        this.getDetail();
    },
    getDetail: function() {
        var t = this;
        i.default.loading("加载中..."), n.services("api/app/community/guet/leaveschoolapplication/details").get({
            id: o,
            include_person: !0
        }).then(function(a) {
            if (a && a.data.Success) {
                var o = [], l = [], s = a.data.Result;
                a.data.Result.health && (a.data.Result.health.createdTxt = (0, e.default)(a.data.Result.health.created).format("YYYY-MM-DD HH:mm")), 
                a.data.Result.health2 && a.data.Result.health2.length > 0 && a.data.Result.health2.map(function(t) {
                    t.createdTxt = (0, e.default)(t.created).format("YYYY-MM-DD HH:mm");
                }), s.time && (s.timeTxt = (0, e.default)(s.time).format("YYYY-MM-DD")), s.phone_itinerary && s.phone_itinerary.result && (s.phone_itinerary.result.updateTxt = (0, 
                e.default)().format("YYYY-MM-DD HH:mm")), s.locations && s.locations.length > 0 && s.locations.map(function(t, e) {
                    o.push({
                        id: e,
                        width: 30,
                        height: 30,
                        iconPath: "../../static/location.png",
                        latitude: t.gps[1],
                        longitude: t.gps[0]
                    }), l.push({
                        latitude: t.gps[1],
                        longitude: t.gps[0]
                    });
                }), a.data.Result.itineraries && a.data.Result.itineraries.length > 0 && a.data.Result.itineraries.map(function(t) {
                    t.end.time && (t.end.timeTxt = (0, e.default)(t.end.time).format("YYYY-MM-DD HH:mm")), 
                    t.dayTxt = (0, e.default)(t.day).format("YYYY-MM-DD");
                }), s.createdTxt = (0, e.default)(s.created).format("YYYY-MM-DD HH:mm"), t.setData({
                    detail: s,
                    point: l,
                    markers: o,
                    CommunityLeaveSchoolApplicationStateEnums: n.globalData.enums.CommunityLeaveSchoolApplicationStateEnums
                });
            } else (0, i.default)(a.data.Error);
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
            newTime: (0, e.default)(new Date(t.detail)).format("YYYY-MM-DD") + " " + (0, e.default)(new Date(this.data.detail.limit.start)).format("HH:mm:ss"),
            popShow: !1
        });
    },
    adiut: function(t) {
        var l = this, s = {
            id: o,
            __version: this.data.detail.__version
        };
        0 == t.currentTarget.dataset.type ? s.passed = !0 : s.passed = !1, this.data.newTime && (s.visiting_time = (0, 
        e.default)(this.data.newTime).format("YYYY-MM-DD")), a.default.alert({
            title: "提示",
            message: "您确定要" + (s.passed ? "通过" : "拒绝") + "吗?",
            showCancelButton: !0
        }).then(function(t) {
            i.default.loading({
                duration: 0,
                forbidClick: !0,
                message: "加载中",
                loadingType: "spinner"
            }), n.services("api/app/community/guet/leaveschoolapplication/audit").post(s).then(function(t) {
                t && t.data.Success ? (i.default.success("审核成功"), l.getDetail()) : t.data.Error ? i.default.fail(t.data.Error) : (0, 
                i.default)("服务器繁忙，请稍后重试！");
            });
        });
    },
    delete: function() {
        var t = {
            id: o,
            disabled: !0
        };
        a.default.alert({
            title: "提示",
            message: "您确定要删除该通行证吗吗?",
            showCancelButton: !0
        }).then(function(e) {
            i.default.loading({
                duration: 0,
                forbidClick: !0,
                message: "加载中",
                loadingType: "spinner"
            }), n.services("api/app/community/guet/leaveschoolapplication/disable").get(t).then(function(t) {
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
            url: "/pages/userDetail/index?id=" + n.globalData.self.id
        });
    },
    goHouse: function() {
        wx.navigateTo({
            url: "/pages/webviewHousehold/index?url=/school/classdetail&id=" + this.data.detail.id
        });
    },
    previewImage: function(t) {
        var e = t.currentTarget.dataset.url, a = [];
        a.push(e), wx.previewImage({
            current: e,
            urls: a
        });
    },
    previewImage2: function(t) {
        var e = t.currentTarget.dataset.img, a = t.currentTarget.dataset.imgs;
        wx.previewImage({
            current: e,
            urls: a
        });
    }
});