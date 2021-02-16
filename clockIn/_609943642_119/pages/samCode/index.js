function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("vant-weapp/toast/toast")), e = t(require("vant-weapp/dialog/dialog")), n = t(require("../../utils/we-moment-with-locales")), s = t(require("../../utils/config")), i = getApp();

(0, n.default)();

Page({
    data: {
        list: [],
        activeNames: [ 0 ],
        stepDate: [],
        appShow: 1
    },
    onLoad: function(t) {
        var a = wx.getStorageSync("appshow");
        console.log(a), this.setData({
            key: s.default.key,
            appShow: a || 1
        }), this.getPass();
    },
    onUnload: function() {
        wx.setStorage({
            key: "appshow",
            data: this.data.appShow
        });
    },
    onShow: function() {
        this.toggleActionSheet1(), this.getCms();
    },
    getCms: function() {
        var t = this;
        getApp().services("api/app/cms").get({
            s: 1,
            cid: "5e52abb679e0190001035b65"
        }).then(function(a) {
            a && a.data.Success && a.data.Result.Data.length > 0 && t.setData({
                cms: a.data.Result.Data[0].title
            });
        });
    },
    changeApp: function(t) {
        this.setData({
            appShow: t.detail.index
        });
    },
    gochangeData: function() {
        wx.navigateTo({
            url: "/pages/healthCodeLog/index?reset=true"
        });
    },
    toggleActionSheet1: function() {
        this.setData({
            show: !this.data.show
        }, function() {
            wx.stopPullDownRefresh();
        });
    },
    getlog: function() {
        var t = this;
        i.services("api/app/community/checkpoint/pass/log").get({
            s: 10
        }).then(function(e) {
            if (e && e.data.Success) {
                var s = [];
                e.data.Result.Data.map(function(t) {
                    t && s.push({
                        group: t.group,
                        created: (0, n.default)(t.created).format("MM月DD日 HH:mm")
                    });
                }), t.setData({
                    list: s
                });
            } else a.default.fail(e.data.Error);
        });
    },
    getPass: function() {
        var t = this;
        i.services("api/app/community/pass/canapply").get({
            me: !0
        }).then(function(e) {
            if (e && e.data.Success) {
                var n = [];
                e.data.Result.length > 0 && e.data.Result.map(function(t, a) {
                    "桂电学生临时通行证" != t.name && "桂电学生返校通行证" != t.name && "桂电学生外宿通行证" != t.name && n.push(t);
                }), t.setData({
                    pass: n
                });
            } else a.default.fail(e.data.Error);
        });
    },
    onChange: function(t) {
        this.setData({
            activeNames: t.detail
        });
    },
    goUrl: function(t) {
        wx.navigateTo({
            url: t.currentTarget.dataset.url
        });
    },
    goAddHealth: function() {
        i.globalData.self && i.globalData.self.id && wx.navigateTo({
            url: "/pages/healthLineAdd/index?id=" + i.globalData.self.id
        });
    },
    gxqrcodeChange: function(t) {
        console.log(t), this.setData(t.detail);
    },
    qrChange: function(t) {
        this.setData(t.detail);
    },
    onPullDownRefresh: function() {
        this.toggleActionSheet1(), this.getCms();
    },
    bindtap: function(t) {
        console.log(this.data.bind), this.data.bind ? wx.navigateTo({
            url: t.currentTarget.dataset.url
        }) : e.default.alert({
            title: "提示",
            message: "请先领取个人的广西健康码后，再进行代领健康码！"
        }).then(function(t) {});
    },
    gotrip: function() {
        wx.navigateToMiniProgram({
            appId: "wxbebb3cdd9b331046",
            success: function(t) {}
        });
    }
});