function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../utils/we-moment-with-locales")), a = t(require("vant-weapp/toast/toast")), i = t(require("vant-weapp/dialog/dialog")), n = (t(require("../../utils/config")), 
require("qs"), getApp()), o = "", l = "", u = [], d = "";

Page({
    data: {
        imgs: [],
        radio: [],
        currentDate1: new Date().getTime(),
        mixdate: new Date("2020-12-01").getTime(),
        date: (0, e.default)().format("YYYY-MM-DD"),
        CommunityLeaveSchoolApplicationTypeEnums: {
            0: "离校",
            1: "返校"
        },
        type: 0
    },
    onLoad: function(t) {
        t.type && this.setData({
            type: t.type
        });
    },
    onShow: function() {
        n.loginData ? i.default.close() : i.default.alert({
            title: "提示",
            message: "您还未登录，请跳转登录后继续"
        }).then(function(t) {
            wx.navigateTo({
                url: "/pages/wxlog/index"
            });
        });
    },
    getTrainnumber: function(t) {
        o = t.detail;
    },
    getdestination: function(t) {
        l = t.detail;
    },
    getPlate: function(t) {
        d = t.detail;
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
    getphoto: function(t) {
        console.log(t), u = t.detail.imgs, this.setData({
            imgs: t.detail.imgs
        });
    },
    save: function() {
        var t = this.data, d = t.imgs, s = (t.detail, t.date), r = t.radio, g = t.radio2, f = t.type, c = {
            desc: o,
            type: f
        };
        if (s) if (c.time = (0, e.default)(s).format("YYYY-MMM-DD 00:00:00"), l) {
            if (c.destination = l, 1 == f) {
                if (r.length > 0 && d.length < 2) return void (0, a.default)("上传当地健康码“绿码”和7天内的核酸检测报告。共至少两张照片。");
                if (!g || 0 == g.length) return void (0, a.default)("请阅读《桂林电子科技大学学生返校承诺书》并勾选");
            }
            a.default.loading({
                duration: 0,
                message: "加载中.",
                loadingType: "spinner"
            }), setTimeout(function() {
                c.imgs = u, n.services("api/app/community/guet/leaveschoolapplication").post(c).then(function(t) {
                    a.default.clear(), t && t.data.Success ? ((0, a.default)("申请成功"), setTimeout(function() {
                        1 == getCurrentPages().length ? wx.switchTab({
                            url: "/pages/index/index"
                        }) : wx.navigateBack({
                            delta: 1,
                            complete: function(t) {}
                        });
                    }, 1e3)) : "请先添加一条从桂林出发的行程信息。" == t.data.Error ? i.default.confirm({
                        title: "提示",
                        message: "请先添加一条从桂林出发的行程信息，再进行离校申请！！"
                    }).then(function() {
                        wx.navigateTo({
                            url: "/pages/itineraryAdd/index"
                        });
                    }).catch(function() {}) : t.data.Error && (0, a.default)(t.data.Error);
                });
            }, 1e3);
        } else (0, a.default)("请填写离校居住地"); else (0, a.default)("请选择返校日期");
    },
    radioChange: function(t) {
        this.setData({
            radio: t.detail
        });
    },
    radio2Change: function(t) {
        this.setData({
            radio2: t.detail
        });
    },
    goDetail: function() {
        wx.navigateTo({
            url: "/pages/householdStudentGoApplypremit/index"
        });
    }
});