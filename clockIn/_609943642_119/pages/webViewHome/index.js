var n = function(n) {
    return n && n.__esModule ? n : {
        default: n
    };
}(require("../../utils/config"));

Page({
    data: {},
    onLoad: function(o) {
        var t = this;
        this.setData({
            host: n.default.host,
            t: new Date().getTime()
        }, function() {
            console.log(t.data.t);
        });
    },
    onReady: function() {},
    onShow: function() {
        wx.hideHomeButton();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});