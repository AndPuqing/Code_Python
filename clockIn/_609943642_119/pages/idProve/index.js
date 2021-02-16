function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function a(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}

var t = Object.assign || function(e) {
    for (var a = 1; a < arguments.length; a++) {
        var t = arguments[a];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
}, n = (e(require("../../utils/we-moment-with-locales")), e(require("vant-weapp/toast/toast"))), s = e(require("../../utils/config")), o = getApp();

Page({
    data: {
        upload_percent: 0,
        loading: !0
    },
    onLoad: function(e) {
        this.setData({
            self: o.globalData.self
        });
    },
    getdata: function(e) {
        var t;
        this.setData((t = {}, a(t, e.currentTarget.dataset.type, e.detail.value), a(t, "loading", !1), 
        t));
    },
    chooseImg: function() {
        var e = this, t = "";
        wx.chooseImage({
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            count: 1,
            success: function(i) {
                t = i.tempFilePaths[0], e.setData({
                    file: t
                }), wx.uploadFile({
                    url: s.default.host + "/api/upload/files",
                    header: {
                        "content-type": "multipart/form-data",
                        Authorization: "Bearer " + o.loginData.access_token
                    },
                    filePath: t,
                    name: "content",
                    formData: {
                        content: t
                    },
                    success: function(t) {
                        if (JSON.parse(t.data).Success) {
                            var n;
                            e.setData((n = {}, a(n, "self.photo", JSON.parse(t.data).Result[0]), a(n, "upload_percent", 0), 
                            a(n, "loading", !1), n));
                        }
                    },
                    fail: function(e) {
                        console.log(e), (0, n.default)("上传失败！");
                    }
                }).onProgressUpdate(function(a) {
                    e.setData({
                        upload_percent: 100 == a.progress ? a.progress : 0
                    });
                });
            },
            fail: function(e) {
                console.log(e);
            }
        });
    },
    save: function(e) {
        var a = this, s = this.data, i = s.self, r = (s.name, s.idcard), c = (s.address, 
        t({}, i, e.detail.value));
        r && r.length < 18 ? (0, n.default)("请输入正确的身份证号") : (n.default.loading({
            duration: 0,
            message: "正在提交",
            zIndex: 1e5,
            mask: !0
        }), setTimeout(function() {
            a.data.idcard && (c.idcard = a.data.idcard), a.data.address && (c.address = a.data.address), 
            a.data.name && (c.name = a.data.name), o.services("api/user").post(c).then(function(e) {
                e && e.data.Success ? (n.default.success("修改成功"), o.services("api/user/self").get({
                    force: !0
                }).then(function(e) {
                    o.globalData.self = e.data.Result;
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1,
                        complete: function(e) {}
                    });
                }, 1e3), o.services("api/app/community/household/fix/realname").get().then()) : (0, 
                n.default)(e.data.Error);
            });
        }, 1e3));
    },
    goback: function() {
        wx.navigateBack({
            delta: 1,
            complete: function(e) {}
        });
    }
});