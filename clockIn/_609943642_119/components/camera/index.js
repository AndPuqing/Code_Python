function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/config")), a = getApp();

Component({
    properties: {
        files: {
            type: Array,
            value: []
        },
        imgs: {
            type: Array,
            value: [],
            observer: function(e, t) {
                console.log(e);
                var a = [];
                e.map(function(e) {
                    a.push({
                        img: e,
                        upload_percent: 100
                    });
                }), this.setData({
                    files: a
                });
            }
        },
        type: {
            type: String,
            value: ""
        }
    },
    data: {
        files: [],
        imgs: [],
        video: "",
        videos: "",
        upload_percent: 100
    },
    methods: {
        chooseImg: function() {
            var i = this, s = this.data.files;
            wx.chooseImage({
                sizeType: [ "compressed" ],
                success: function(o) {
                    o.tempFilePaths.map(function(e) {
                        s.push({
                            img: e,
                            upload_percent: 0,
                            total: 0,
                            now: 0
                        });
                    }), console.log(o), i.setData({
                        files: s
                    }, function() {
                        s.map(function(o, n) {
                            o.upload_percent || wx.uploadFile({
                                url: t.default.host + "/api/upload/files",
                                header: {
                                    "content-type": "multipart/form-data",
                                    Authorization: "Bearer " + a.loginData.access_token
                                },
                                filePath: o.img,
                                name: "content",
                                formData: {
                                    content: o.img
                                },
                                success: function(t) {
                                    if (JSON.parse(t.data).Success) {
                                        var a = JSON.parse(t.data).Result;
                                        console.log(a), i.data.imgs.push(a[0]), i.setData(e({
                                            imgs: i.data.imgs
                                        }, "files[" + n + "].upload_percent", 100), function() {
                                            console.log(i.data.files), i.triggerEvent("change", {
                                                imgs: i.data.imgs,
                                                video: i.data.videos,
                                                progress: i.data.imgs.length == s.length && 100 == i.data.upload_percent
                                            });
                                        });
                                    }
                                },
                                fail: function() {
                                    wx.showToast({
                                        title: "第" + (n + 1) + "张图片上传失败",
                                        icon: "none",
                                        duration: 1e3
                                    });
                                    var e = this.data.splice(n, 1);
                                    this.setData({
                                        files: e
                                    });
                                }
                            }).onProgressUpdate(function(t) {
                                o.upload_percent = t.progress, o.upload_percent % 10 || i.setData(e({}, "files[" + n + "].upload_percent", t.progress), function() {});
                            });
                        });
                    });
                }
            });
        },
        chooseVideo: function() {
            var e = this;
            wx.chooseVideo({
                sourceType: [ "camera" ],
                maxDuration: 15,
                compressed: !0,
                camera: "back",
                success: function(i) {
                    e.setData({
                        video: i.tempFilePath,
                        size: (i.size / 1048576).toFixed(2)
                    }, function() {});
                    var s = wx.uploadFile({
                        url: t.default.host + "/api/upload/files",
                        header: {
                            "content-type": "multipart/form-data",
                            Authorization: "Bearer " + a.loginData.access_token
                        },
                        filePath: i.tempFilePath,
                        name: "content",
                        formData: {
                            content: i.tempFilePath
                        },
                        success: function(t) {
                            if (JSON.parse(t.data).Success) {
                                var a = JSON.parse(t.data);
                                e.setData({
                                    videos: a.Result,
                                    upload_percent: 100
                                }, function() {
                                    e.triggerEvent("change", {
                                        imgs: e.data.imgs,
                                        video: e.data.videos,
                                        progress: e.data.imgs.length == e.data.files.length && 100 == e.data.upload_percent
                                    });
                                });
                            }
                        },
                        fail: function(e) {
                            wx.showToast({
                                title: "视频上传失败",
                                icon: "none",
                                duration: 1e3
                            });
                        }
                    }), o = 0;
                    e.setData({
                        upload_percent: o
                    }), s.onProgressUpdate(function(t) {
                        (o = t.progress) % 10 || e.setData({
                            upload_percent: o
                        });
                    });
                }
            });
        },
        previewImage2: function(e) {
            var t = e.currentTarget.dataset.id, a = [];
            this.data.files.map(function(e) {
                a.push(e.img);
            }), wx.previewImage({
                current: t,
                urls: a
            });
        },
        delPic: function(e) {
            var t = this, a = this, i = this.data, s = i.files, o = i.imgs;
            s.splice(e.currentTarget.dataset.index, 1), o.splice(e.currentTarget.dataset.index, 1), 
            this.setData({
                files: s,
                imgs: o
            }, function() {
                a.triggerEvent("change", {
                    imgs: a.data.imgs,
                    video: a.data.videos,
                    progress: a.data.imgs.length == t.data.files.length && 100 == a.data.upload_percent
                });
            });
        },
        delVid: function(e) {
            var t = this, a = this, i = this.data;
            i.video, i.videos;
            this.setData({
                video: "",
                videos: ""
            }, function() {
                a.triggerEvent("change", {
                    imgs: a.data.imgs,
                    video: a.data.videos,
                    progress: a.data.imgs.length == t.data.files.length && 100 == a.data.upload_percent
                });
            });
        },
        playVideo: function() {
            this.videoContext = wx.createVideoContext("myVideo"), this.videoContext.requestFullScreen(), 
            this.videoContext.play();
        },
        outFullscreen: function(e) {
            e.detail.fullscreen || this.videoContext.stop();
        }
    }
});