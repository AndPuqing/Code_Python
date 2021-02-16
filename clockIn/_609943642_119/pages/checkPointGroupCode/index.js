function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

e(require("../../utils/we-moment-with-locales"));

var t = e(require("vant-weapp/toast/toast")), a = (e(require("vant-weapp/dialog/dialog")), 
getApp()), o = "";

Page({
    data: {},
    onLoad: function(e) {
        o = e.id, this.getLog();
    },
    getLog: function(e) {
        var s = this, l = {
            gid: o,
            url: "yqfk/#"
        };
        a.services("api/app/community/household/qrcode").get(l).then(function(e) {
            if (e && e.data.Success) {
                var a = e.data.Result.replace("https", "http");
                s.setData({
                    url: a
                }), t.default.clear();
            } else t.default.fail(e.data.Error);
        });
    },
    save: function() {
        wx.downloadFile({
            url: this.data.url,
            success: function(e) {
                console.log(e), wx.saveImageToPhotosAlbum({
                    filePath: e.tempFilePath,
                    success: function(e) {
                        console.log(e), (0, t.default)("保存成功");
                    }
                });
            }
        });
    }
});