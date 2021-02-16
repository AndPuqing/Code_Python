var n = Object.assign || function(n) {
    for (var o = 1; o < arguments.length; o++) {
        var t = arguments[o];
        for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
    }
    return n;
}, o = function(n) {
    return n && n.__esModule ? n : {
        default: n
    };
}(require("../../utils/config"));

Page({
    data: {},
    onLoad: function(t) {
        console.log(t), this.setData(n({
            host: o.default.host
        }, t));
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});