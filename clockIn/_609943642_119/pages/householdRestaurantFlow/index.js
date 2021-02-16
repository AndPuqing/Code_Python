function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var e = a(require("../../utils/we-moment-with-locales")), t = a(require("vant-weapp/toast/toast")), o = (a(require("vant-weapp/dialog/dialog")), 
getApp());

Page({
    data: {
        appShow: 0
    },
    onLoad: function(a) {
        var e = wx.getStorageSync("areaType");
        console.log(e), this.setData({
            appShow: e || 0
        }), this.getLog();
    },
    onHide: function() {
        wx.setStorage({
            key: "areaType",
            data: this.data.appShow
        });
    },
    getLog: function(a) {
        var n = this;
        a && t.default.loading({
            duration: 0,
            message: "加载中...",
            loadingType: "spinner",
            context: this
        }), o.services("api/app/community/checkpoint/flow/stat/realtime").get().then(function(a) {
            if (wx.stopPullDownRefresh(), t.default.clear(), a && a.data.Success) {
                var o = [ [], [] ], i = a.data.Result;
                console.log(o), i.map(function(a) {
                    a.lastTxt = (0, e.default)(a.last).format("MM-DD HH:mm"), a.group.name = a.group.name.replace("检查点", ""), 
                    a.group.name.indexOf("金鸡岭校区") > -1 && (a.group.name = a.group.name.replace("金鸡岭校区", ""), 
                    o[1].push(a)), a.group.name.indexOf("花江校区") > -1 && (a.group.name = a.group.name.replace("花江校区", ""), 
                    o[0].push(a));
                }), console.log(o), n.setData({
                    datas: o,
                    list: o[n.data.appShow]
                }), t.default.clear();
            } else t.default.fail(a.data.Error);
        });
    },
    changeApp: function(a) {
        this.setData({
            appShow: a.detail.index,
            list: this.data.datas ? this.data.datas[a.detail.index] : []
        });
    },
    onShow: function() {
        var a = this;
        this.timer = setInterval(function() {
            a.getLog();
        }, 3e5);
    },
    onUnload: function() {
        wx.setStorage({
            key: "areaType",
            data: this.data.appShow
        }), clearInterval(this.timer);
    },
    onPullDownRefresh: function() {
        this.getLog(!0);
    }
});