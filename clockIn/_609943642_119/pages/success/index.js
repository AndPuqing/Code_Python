Page({
    data: {},
    onLoad: function(e) {},
    goback: function() {
        1 == getCurrentPages().length ? wx.redirectTo({
            url: "/pages/samCode/index"
        }) : wx.navigateBack({
            delta: 1,
            success: function() {}
        });
    }
});