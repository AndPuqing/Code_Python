function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

e(require("../../utils/config"));

var t = e(require("vant-weapp/toast/toast")), a = e(require("../../utils/we-moment-with-locales")), n = (e(require("vant-weapp/dialog/dialog")), 
getApp()), d = require("../../utils/qrcode.js"), s = "green", o = (0, a.default)();

Component({
    properties: {
        edit: {
            type: Boolean,
            value: !0
        },
        code: Object,
        imagePath: String,
        ismember: {
            type: Boolean,
            value: !1
        },
        size: {
            type: Number,
            value: 500
        },
        canvasHidden: {
            type: Boolean,
            value: !0
        },
        dataShow: Boolean,
        show: {
            type: Boolean,
            value: !0,
            observer: function(e, t) {
                this.data.canvasHidden || this.getCode();
            }
        },
        bind: {
            type: Boolean,
            value: !0
        },
        color: String,
        quarantine: Object
    },
    data: {
        CommunityHealthCodeLevelEnums: {
            1: "#f00",
            2: "#f90",
            3: "#0c0"
        },
        colorText: {
            1: "红色",
            2: "黄色",
            3: "绿色"
        },
        members: [],
        active: {}
    },
    ready: function() {
        var e = this;
        n.globalData.self && this.setData({
            active: {
                name: n.globalData.self.name
            }
        }, function() {
            e.getCode();
        });
    },
    methods: {
        toggleSelect: function() {
            1 != this.data.members.length && this.setData({
                sheetShow: !this.data.sheetShow
            });
        },
        setCanvasSize: function() {
            var e = {};
            try {
                var t = wx.getSystemInfoSync().windowWidth / (750 / 686), a = t;
                e.w = t, e.h = a;
            } catch (e) {
                console.log("获取设备信息失败" + e);
            }
            return e;
        },
        newqrcode: function() {
            if (this.data.code) {
                this.setCanvasSize();
                this.createQrCode(JSON.stringify(this.data.code), "mycanvas", 686 / 750 * n.globalData.systemInfo.windowWidth, 686 / 750 * n.globalData.systemInfo.windowWidth, s);
            }
        },
        createQrCode: function(e, a, n, s, o) {
            var i = this;
            d.api.draw(e, a, n, s, this, o), setTimeout(function() {
                t.default.clear(), i.canvasToTempImage();
            }, 1e3);
        },
        canvasToTempImage: function() {
            var e = this;
            wx.canvasToTempFilePath({
                canvasId: "mycanvas",
                success: function(t) {
                    var a = t.tempFilePath;
                    e.setData({
                        imagePath: a,
                        canvasHidden: !1
                    });
                },
                fail: function(e) {
                    console.log(e);
                }
            }, this);
        },
        previewImg: function(e) {
            var t = this.data.imagePath;
            wx.previewImage({
                current: t,
                urls: [ t ]
            }), (0, a.default)(new Date()).diff(o, "minutes") >= 5 && this.getCode();
        },
        getCode: function() {
            var e = this, a = this;
            t.default.loading({
                duration: 0,
                message: "加载中...",
                context: this
            }), getApp().services("api/app/community/healthcode/check/bind").post().then(function(n) {
                t.default.loading({
                    duration: 100,
                    message: "加载中...",
                    context: e
                }), t.default.clear(), n && n.data.Success && n.data.Result ? e.getDetail() : n && n.data.Success && !n.data.Result ? (a.setData({
                    imagePath: "",
                    bind: !1,
                    canvasHidden: !1,
                    dataShow: !0
                }), e.triggerEvent("change", {
                    bind: !1
                })) : n.data.Error ? (0, t.default)(n.data.Error) : (0, t.default)("服务器繁忙，请稍后重试");
            });
        },
        hiddenStr: function(e, t, a) {
            for (var n = e.length - t, d = "", s = 0; s < n; s++) d += "*";
            return d + e.substring(n, e.length);
        },
        getDetail: function() {
            var e = this, n = this, d = {};
            this.data.active.uid ? (d.id = this.data.active.uid, getApp().services("api/app/community/healthcode/member/details").get(d).then(function(d) {
                if (d && d.data.Success) {
                    e.triggerEvent("change", {
                        bind: !0
                    }), s = e.data.CommunityHealthCodeLevelEnums[d.data.Result.code.type], e.data.color && (s = e.data.color), 
                    d.data.Result.person && (d.data.Result.person.name = d.data.Result.person.cxm, d.data.Result.person.xm = e.hiddenStr(d.data.Result.person.cxm, 1), 
                    d.data.Result.person.zjhm = d.data.Result.person.chm.replace(/^(.{3})(?:\d+)(.{4})$/, "$1********$2"));
                    var o = {
                        codeId: d.data.Result.code.jkmid,
                        dueTime: String(new Date(d.data.Result.code.updated).getTime())
                    };
                    n.setData({
                        dataShow: !0,
                        code: o,
                        source: d.data.Result.code,
                        type: d.data.Result.code.jkmid ? d.data.Result.code.type : "3",
                        canvasHidden: !0,
                        update: (0, a.default)(d.data.Result.code.updated).format("YYYY-MM-DD HH:mm"),
                        person: d.data.Result.person,
                        bind: !0,
                        imagePath: ""
                    }, function() {
                        n.newqrcode();
                    });
                } else d.data.Error ? (console.log(d.data.Error), (0, t.default)({
                    type: "text",
                    duration: 1e3,
                    message: d.data.Error,
                    context: e
                })) : (0, t.default)({
                    type: "text",
                    duration: 1e3,
                    message: "服务器繁忙，请稍后重试",
                    context: e
                });
            })) : getApp().services("api/app/community/healthcode/details").get().then(function(d) {
                if (d && d.data.Success) {
                    e.getHealth(), e.triggerEvent("change", {
                        bind: !0
                    }), s = e.data.CommunityHealthCodeLevelEnums[d.data.Result.code.type], e.data.color && (s = e.data.color), 
                    d.data.Result.person && (d.data.Result.person.name = d.data.Result.person.xm, d.data.Result.person.xm = e.hiddenStr(d.data.Result.person.xm, 1), 
                    d.data.Result.person.zjhm = d.data.Result.person.zjhm.replace(/^(.{3})(?:\d+)(.{4})$/, "$1********$2"), 
                    e.getMembers(d.data.Result.person));
                    var o = {
                        codeId: d.data.Result.code.jkmid,
                        dueTime: String(new Date(d.data.Result.code.updated).getTime())
                    };
                    n.setData({
                        dataShow: !0,
                        code: o,
                        source: d.data.Result.code,
                        type: d.data.Result.code.jkmid ? d.data.Result.code.type : "3",
                        canvasHidden: !0,
                        update: (0, a.default)(d.data.Result.code.updated).format("YYYY-MM-DD HH:mm"),
                        person: d.data.Result.person,
                        bind: !0
                    }, function() {
                        n.newqrcode();
                    });
                } else d.data.Error ? (0, t.default)({
                    type: "text",
                    duration: 1e3,
                    message: d.data.Error,
                    context: e
                }) : (0, t.default)({
                    type: "text",
                    duration: 1e3,
                    message: "服务器繁忙，请稍后重试",
                    context: e
                });
            });
        },
        getMembers: function(e) {
            var t = this, a = [], d = {};
            e && a.push({
                name: e.name
            }), n.globalData.self && (d = {
                uid: n.globalData.self.id
            }), getApp().services("api/app/community/healthcode/member").get(d).then(function(e) {
                e && e.data.Success && (e.data.Result.Data.map(function(e) {
                    a.push({
                        name: e.person.cxm,
                        uid: e.id
                    });
                }), console.log(a), t.setData({
                    members: a
                }));
            });
        },
        select: function(e) {
            var t = this;
            this.setData({
                active: e.detail,
                sheetShow: !1
            }, function() {
                t.getCode();
            });
        },
        getHealth: function() {
            var e = this;
            getApp().services("api/app/community/person/qrcode").get().then(function(t) {
                if (t && t.data.Success) {
                    var n = null;
                    t.data.Result.quarantine && ((n = t.data.Result.quarantine).endtxt = (0, a.default)(n.end).format("YYYY-MM-DD HH:mm"));
                    var d = {
                        quarantine: t.data.Result.quarantine ? t.data.Result.quarantine : null,
                        health: t.data.Result.health ? t.data.Result.health : null
                    };
                    e.setData(d);
                }
            });
        },
        goSigin: function() {
            wx.navigateTo({
                url: "/pages/healthCodeBind/index"
            });
        },
        gochangeData: function(e) {
            console.log(e), e.currentTarget.dataset.id ? wx.navigateTo({
                url: "/pages/healthCodeMembersAdd/index?uid=" + e.currentTarget.dataset.id
            }) : wx.navigateTo({
                url: "/pages/healthCodeLog/index?reset=true"
            });
        }
    }
});