var n = Object.assign || function(n) {
    for (var o = 1; o < arguments.length; o++) {
        var t = arguments[o];
        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
    }
    return n;
};

Page({
    data: {},
    onLoad: function(o) {
        this.setData(n({}, o));
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});