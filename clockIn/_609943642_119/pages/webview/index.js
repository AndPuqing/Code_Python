var n = function(n) {
    return n && n.__esModule ? n : {
        default: n
    };
}(require("../../utils/config"));

Page({
    data: {},
    onLoad: function(o) {
        this.setData({
            host: n.default.host
        });
    },
    onReady: function() {},
    getmessage: function(n) {
        console.log("发送给我的数据", n);
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});