var a = getApp();

Page({
    data: {},
    onLoad: function(t) {
        console.log(a.globalData.error), this.setData({
            error: a.globalData.error
        });
    },
    clipboar: function(a) {
        wx.setClipboardData({
            data: a.currentTarget.dataset.data.param
        });
    }
});