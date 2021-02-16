function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../utils/we-moment-with-locales")), a = t(require("vant-weapp/toast/toast")), i = t(require("vant-weapp/dialog/dialog")), n = (t(require("../../utils/config")), 
require("qs")), o = getApp(), d = "", s = "", l = "", u = "", r = null;

Page({
    data: {
        imgs: [],
        currentDate1: new Date().getTime(),
        mixdate: new Date().getTime(),
        date: (0, e.default)().format("YYYY-MM-DD")
    },
    onLoad: function(t) {
        if (console.log(t), t.q) {
            var e = decodeURIComponent(t.q), a = (0, n.parse)(e);
            a["https://yq.guet.edu.cn/yqfk/#/passApply?id"] && (d = a["https://yq.guet.edu.cn/yqfk/#/passApply?id"]);
        }
        t.id && (d = t.id), t.cid && (d = t.cid), s = t.gid ? t.gid : null, r = t.hid ? t.hid : null;
    },
    onShow: function() {
        o.loginData ? i.default.close() : i.default.alert({
            title: "提示",
            message: "您还未登录，请跳转登录后继续"
        }).then(function(t) {
            wx.navigateTo({
                url: "/pages/wxlog/index"
            });
        }), this.getBuildAdmin();
    },
    getBuildAdmin: function(t) {
        var e = this, i = {};
        t && (i.force = !0), o.services("api/app/community/household/students").get(i).then(function(t) {
            if (t && t.data.Success) {
                var i = !1;
                t.data.Result.map(function(t) {
                    !i && t.household.tags && t.household.tags.indexOf("school") > -1 && (i = !0, r = t.household.id);
                }), e.getDetail();
            } else t.data.Error ? a.default.fail(t.data.Error) : a.default.fail("服务器繁忙，请稍后重试");
        });
    },
    getTrainnumber: function(t) {
        l = t.detail;
    },
    getPlate: function(t) {
        u = t.detail;
    },
    getDetail: function() {
        var t = this;
        o.services("api/app/community/pass/config/details").get({
            id: d
        }).then(function(e) {
            if (e && e.data.Success) {
                var a = e.data.Result;
                t.setData({
                    detail: a
                });
            }
        });
    },
    toggleBottomPopup: function() {
        this.setData({
            popShow: !this.data.popShow
        });
    },
    onTimeChange: function(t) {
        console.log(t), this.setData({
            currentDate1: t.detail,
            date: (0, e.default)(new Date(t.detail)).format("YYYY-MM-DD"),
            popShow: !1
        });
    },
    checkUser: function() {},
    getphoto: function(t) {
        console.log(t), this.setData({
            imgs: t.detail.imgs
        });
    },
    save: function() {
        var t = this.data, e = t.imgs, n = t.detail, s = t.date, c = {
            desc: l,
            imgs: e,
            cid: d,
            limit: {}
        };
        if (10 == n.type) {
            if (!u) return void (0, a.default)("请输入车牌号");
            c.vehicle_plate = u;
        }
        if (5 == n.type) {
            if (!s) return void (0, a.default)("请选择开会日期");
            c.visiting_time = s;
        }
        r && (c.hid = r), a.default.loading({
            duration: 0,
            message: "加载中.",
            loadingType: "spinner"
        }), o.services("api/app/community/pass/apply").post(c).then(function(t) {
            a.default.clear(), t && t.data.Success ? ((0, a.default)("申请成功"), setTimeout(function() {
                1 == getCurrentPages().length ? wx.switchTab({
                    url: "/pages/index/index"
                }) : wx.navigateBack({
                    delta: 1,
                    complete: function(t) {}
                });
            }, 1e3)) : ("需先填写返程信息，终点位置必须是横县范围内。" == t.data.Error && i.default.alert({
                title: "提示",
                message: t.data.Error + "点击按钮前往填写",
                showCancelButton: !0,
                confirmButtonText: "立即前往"
            }).then(function(t) {
                wx.navigateTo({
                    url: "/pages/itineraryAdd/index"
                });
            }), "需先填写健康情况" == t.data.Error ? i.default.alert({
                title: "提示",
                message: t.data.Error + "点击按钮前往填写",
                showCancelButton: !0,
                confirmButtonText: "立即前往"
            }).then(function(t) {
                wx.navigateTo({
                    url: "/pages/healthLineAdd/index"
                });
            }) : "已经有该类通行证" == t.data.Error ? (0, a.default)("该通行证不能重复申请") : (0, a.default)(t.data.Error));
        });
    }
});