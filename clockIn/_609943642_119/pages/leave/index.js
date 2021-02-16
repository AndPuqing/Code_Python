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

var a = t(require("../../utils/we-moment-with-locales")), n = t(require("vant-weapp/toast/toast")), o = (t(require("vant-weapp/dialog/dialog")), 
t(require("../../utils/config")), getApp()), i = "startTime";

Page({
    data: {
        currentDate1: new Date().getTime(),
        mixdate: new Date("2020-09-01").getTime(),
        startTime: (0, a.default)().format("YYYY-MM-DD"),
        endTime: "",
        imgs: []
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    toggleBottomPopup: function(t) {
        console.log(t), i = t.currentTarget.dataset.type, this.setData({
            popShow: !this.data.popShow
        });
    },
    onTimeChange: function(t) {
        var n;
        console.log(t), this.setData((n = {
            currentDate1: t.detail
        }, e(n, "" + i, (0, a.default)(new Date(t.detail)).format("YYYY-MM-DD")), e(n, "popShow", !1), 
        n));
    },
    getData: function(t) {
        this.setData(e({}, "" + t.currentTarget.dataset.type, t.detail));
    },
    getphoto: function(t) {
        console.log(t), n.default.loading({
            duration: 0,
            message: "加载中.",
            loadingType: "spinner"
        }), this.setData({
            imgs: t.detail.imgs
        }, function() {
            n.default.clear();
        });
    },
    save: function() {
        var t = this.data, e = {
            start: t.startTime,
            end: t.endTime,
            destination: t.destination,
            desc: t.desc,
            imgs: t.imgs
        };
        e.start ? e.end ? e.destination ? (console.log(e), e.start = (0, a.default)(e.start).format("YYYY-MM-DD 00:00:00"), 
        e.end = (0, a.default)(e.end).format("YYYY-MM-DD 23:59:59"), n.default.loading({
            duration: 0,
            message: "加载中.",
            loadingType: "spinner"
        }), o.services("api/app/community/guet/leave").post(e).then(function(t) {
            n.default.clear(), t && t.data.Success ? (n.default.success("提交成功"), setTimeout(function() {
                wx.navigateBack({
                    delta: 1
                });
            }, 1e3)) : t.data.Error ? (0, n.default)(t.data.Error) : (0, n.default)("服务器繁忙，请稍后重试");
        })) : (0, n.default)("请填写离校居住地") : (0, n.default)("请选返校日期") : (0, n.default)("请选离校日期");
    }
});