function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../utils/config")), a = t(require("vant-weapp/toast/toast")), n = t(require("../../utils/we-moment-with-locales")), o = getApp(), i = require("../../utils/qrcode.js"), s = "#000", u = (0, 
n.default)();

Component({
    properties: {
        code: String,
        imagePath: String,
        size: {
            type: Number,
            value: 500
        },
        canvasHidden: {
            type: Boolean,
            value: !0
        },
        show: {
            type: Boolean,
            value: !0,
            observer: function(t, e) {
                this.data.canvasHidden || this.getCode();
            }
        },
        color: String,
        quarantine: Object
    },
    data: {},
    ready: function() {
        this.getCode();
    },
    methods: {
        setCanvasSize: function() {
            var t = {};
            try {
                var e = wx.getSystemInfoSync().windowWidth / (750 / 686), a = e;
                t.w = e, t.h = a;
            } catch (t) {
                console.log("获取设备信息失败" + t);
            }
            return t;
        },
        newqrcode: function() {
            if (this.data.code) {
                this.setCanvasSize();
                console.log(s), this.createQrCode(e.default.host + "/yqfk/#/fangxing?token=" + this.data.code, "mycanvas", 686 / 750 * o.globalData.systemInfo.windowWidth, 686 / 750 * o.globalData.systemInfo.windowWidth, s);
            }
        },
        createQrCode: function(t, e, a, n, o) {
            var s = this;
            i.api.draw(t, e, a, n, this, o), setTimeout(function() {
                s.canvasToTempImage();
            }, 1e3);
        },
        canvasToTempImage: function() {
            var t = this;
            wx.canvasToTempFilePath({
                canvasId: "mycanvas",
                success: function(e) {
                    var a = e.tempFilePath;
                    console.log(a), t.setData({
                        imagePath: a,
                        canvasHidden: !1
                    });
                },
                fail: function(t) {
                    console.log(t);
                }
            }, this);
        },
        previewImg: function(t) {
            (0, n.default)(new Date()).diff(u, "minutes") >= 5 && this.getCode();
        },
        getCode: function() {
            var t = this, e = this;
            getApp().services("api/app/community/person/token").get().then(function(o) {
                a.default.clear(), o && o.data.Success ? (u = (0, n.default)(), e.setData({
                    code: o.data.Result,
                    canvasHidden: !0
                }, function() {
                    getApp().services("api/app/community/person/qrcode").get().then(function(a) {
                        e.data.color ? s = t.data.color : a && a.data.Result && a.data.Result.color && (s = a.data.Result.color), 
                        a && a.data.Result && a.data.Result.quarantine && (a.data.Result.quarantine.endtxt = (0, 
                        n.default)(a.data.Result.quarantine.end).format("YYYY年MM月DD日 HH:mm"), s = "#ff0000");
                        var o = {
                            quarantine: a.data.Result.quarantine ? a.data.Result.quarantine : null,
                            health: a.data.Result.health ? a.data.Result.health : null
                        };
                        e.triggerEvent("change", o), e.setData(o), e.newqrcode();
                    });
                })) : (t.setData({
                    imagePath: ""
                }), a.default.fail(o.data.Error));
            });
        }
    }
});