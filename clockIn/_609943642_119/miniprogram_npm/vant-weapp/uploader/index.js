var e = require("../common/component"), t = require("./utils"), i = require("../common/utils");

(0, e.VantComponent)({
    props: {
        disabled: Boolean,
        multiple: Boolean,
        uploadText: String,
        previewSize: {
            type: null,
            value: 90,
            observer: "setComputedPreviewSize"
        },
        name: {
            type: [ Number, String ],
            value: ""
        },
        accept: {
            type: String,
            value: "image"
        },
        fileList: {
            type: Array,
            value: [],
            observer: "formatFileList"
        },
        maxSize: {
            type: Number,
            value: Number.MAX_VALUE
        },
        maxCount: {
            type: Number,
            value: 100
        },
        previewImage: {
            type: Boolean,
            value: !0
        },
        previewFullImage: {
            type: Boolean,
            value: !0
        },
        imageFit: {
            type: String,
            value: "scaleToFill"
        },
        useSlot: Boolean,
        useBeforeRead: Boolean
    },
    data: {
        lists: [],
        computedPreviewSize: "",
        isInCount: !0
    },
    methods: {
        formatFileList: function() {
            var e = this.data, i = e.fileList, a = void 0 === i ? [] : i, n = e.maxCount, r = a.map(function(e) {
                return Object.assign(Object.assign({}, e), {
                    isImage: void 0 === e.isImage ? (0, t.isImageFile)(e) : e.isImage
                });
            });
            this.setData({
                lists: r,
                isInCount: r.length < n
            });
        },
        setComputedPreviewSize: function(e) {
            this.setData({
                computedPreviewSize: (0, i.addUnit)(e)
            });
        },
        startUpload: function() {
            var e = this;
            if (!this.data.disabled) {
                var t = this.data, i = t.name, a = void 0 === i ? "" : i, n = t.capture, r = void 0 === n ? [ "album", "camera" ] : n, o = t.maxCount, s = void 0 === o ? 100 : o, u = t.multiple, l = void 0 !== u && u, m = t.maxSize, c = t.accept, d = t.lists, v = t.useBeforeRead, f = void 0 !== v && v, p = s - d.length;
                ("image" === c ? new Promise(function(e, t) {
                    wx.chooseImage({
                        count: l ? p > 9 ? 9 : p : 1,
                        sourceType: r,
                        success: e,
                        fail: t
                    });
                }) : new Promise(function(e, t) {
                    wx.chooseMessageFile({
                        count: l ? p : 1,
                        type: "file",
                        success: e,
                        fail: t
                    });
                })).then(function(t) {
                    var i = l ? t.tempFiles : t.tempFiles[0];
                    if (i instanceof Array) {
                        if (!i.every(function(e) {
                            return e.size <= m;
                        })) return void e.$emit("oversize", {
                            name: a
                        });
                    } else if (i.size > m) return void e.$emit("oversize", {
                        name: a
                    });
                    f ? e.$emit("before-read", {
                        file: i,
                        name: a,
                        callback: function(t) {
                            t && e.$emit("after-read", {
                                file: i,
                                name: a
                            });
                        }
                    }) : e.$emit("after-read", {
                        file: i,
                        name: a
                    });
                });
            }
        },
        deleteItem: function(e) {
            var t = e.currentTarget.dataset.index;
            this.$emit("delete", {
                index: t,
                name: this.data.name
            });
        },
        doPreviewImage: function(e) {
            if (this.data.previewFullImage) {
                var t = e.currentTarget.dataset.url, i = this.data.lists.filter(function(e) {
                    return e.isImage;
                }).map(function(e) {
                    return e.url || e.path;
                });
                this.$emit("click-preview", {
                    url: t,
                    name: this.data.name
                }), wx.previewImage({
                    urls: i,
                    current: t,
                    fail: function() {
                        wx.showToast({
                            title: "预览图片失败",
                            icon: "none"
                        });
                    }
                });
            }
        }
    }
});