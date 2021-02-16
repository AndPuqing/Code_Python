function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../utils/config")), a = (e(require("../../utils/we-moment-with-locales")), 
e(require("vant-weapp/toast/toast"))), o = (e(require("vant-weapp/dialog/dialog")), 
getApp()), n = null;

Page({
    data: {
        radio: []
    },
    onLoad: function(e) {
        n = null, this.getLog();
    },
    radioChange: function(e) {
        this.setData({
            radio: e.detail
        });
    },
    chooseImg: function() {
        var e = this, i = "";
        wx.chooseImage({
            sizeType: [ "compressed" ],
            sourceType: [ "album" ],
            count: 1,
            success: function(s) {
                console.log(s), i = s.tempFilePaths[0], e.setData({
                    file: i
                }), wx.uploadFile({
                    url: t.default.host + "/api/upload/files",
                    header: {
                        "content-type": "multipart/form-data",
                        Authorization: "Bearer " + o.loginData.access_token
                    },
                    filePath: i,
                    name: "content",
                    formData: {
                        content: i
                    },
                    success: function(t) {
                        JSON.parse(t.data).Success && (console.log(JSON.parse(t.data).Result), n = JSON.parse(t.data).Result[0], 
                        e.setData({
                            upload_percent: 0
                        }));
                    },
                    fail: function(e) {
                        console.log(e), (0, a.default)("上传失败！");
                    }
                }).onProgressUpdate(function(t) {
                    e.setData({
                        upload_percent: 100 == t.progress ? t.progress : 0
                    });
                });
            }
        });
    },
    save: function() {
        if (n) if (0 != this.data.radio.length) {
            a.default.loading({
                duration: 0,
                forbidClick: !0,
                message: "提交中",
                loadingType: "spinner"
            });
            var e = {
                url: n
            };
            o.services("api/app/community/person/phone/itinerary").post(e).then(function(e) {
                e && e.data.Success ? ((0, a.default)("提交成功"), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                })) : e.data.Error ? (0, a.default)(e.data.Error) : (0, a.default)("服务器繁忙，请稍后重试");
            });
        } else (0, a.default)("请勾选您的承诺"); else (0, a.default)("请上传行程卡");
    },
    getLog: function() {
        var e = this;
        o.services("api/app/community/person/phone/itinerary").get().then(function(t) {
            t && t.data.Success && t.data.Result ? e.setData({
                file: t.data.Result.url
            }) : t.data.Error && (0, a.default)(t.data.Error);
        });
    },
    goGetProve: function() {
        wx.navigateTo({
            url: "/pages/itineraryProveBook/index"
        });
    }
});