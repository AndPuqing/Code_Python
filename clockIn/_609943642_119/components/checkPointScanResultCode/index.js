function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

t(require("vant-weapp/toast/toast")), t(require("vant-weapp/dialog/dialog")), t(require("../../utils/restfulApi"));

var e = t(require("../../utils/we-moment-with-locales")), a = t(require("../../utils/config")), i = (require("../../utils/qrcode.js"), 
getApp()), n = {};

Component({
    properties: {
        appShow: Boolean,
        bind: {
            type: Boolean,
            value: !0
        },
        key: String,
        turnflage: {
            type: String,
            observer: function(t, e) {
                console.log(t);
            }
        },
        gid: {
            type: String,
            value: ""
        },
        detail: Object,
        time: String,
        log: Object,
        active: {
            type: Number,
            value: 1
        },
        photo: String
    },
    data: {
        CommunityHouseholdApplicationStateEnums: [],
        CommunityCheckpointPassTypeEnums: {
            1: "允许通行",
            2: "绿码",
            3: "绿码",
            4: "黄码，限制通行",
            5: "红码，不能通行",
            6: "未绑定健康码",
            "-1": "禁止通行"
        }
    },
    ready: function() {
        var t = this;
        n = {}, this.setData({
            active: "guet" == a.default.key ? 0 : 1,
            key: a.default.key,
            photo: i.globalData.self.photo ? i.globalData.self.photo : "",
            name: this.hiddenStr(i.globalData.self.name, 1),
            CommunityHouseholdApplicationStateEnums: i.globalData.enums ? i.globalData.enums.CommunityHouseholdApplicationStateEnums : {}
        }), this.timer = setInterval(function() {
            var a = new Date().getMilliseconds(), i = "";
            a < 99 ? i += "0" + Number(a / 10).toFixed(0) : a < 999 && (i += Number(a / 10).toFixed(0)), 
            t.setData({
                time: (0, e.default)().format("HH:mm:ss"),
                millisecond: i
            });
        }, 120), this.initData();
    },
    methods: {
        hiddenStr: function(t, e, a) {
            if (t) {
                for (var i = t.length - e, n = "", o = 0; o < i; o++) n += "*";
                return n + t.substring(i, t.length);
            }
        },
        codeChange: function(t) {
            t.detail.quarantine && t.detail.quarantine.id && (n = t.detail.quarantine, this.setData({
                quarantine: n,
                passable: !1
            }));
        },
        onChange: function(t) {
            this.setData({
                activeNames: t.detail
            });
        },
        initData: function() {
            this.getPassable();
        },
        getPassable: function() {
            var t = this.data.detail;
            console.log(t);
            var e = !1, a = !1;
            t && t.point && t.point.tags && t.point.tags.indexOf("community.checkpoint.memberautopass") > -1 && (e = !0), 
            t && t.point && t.point.tags && (t.point.tags.indexOf("community.checkpoint.autopass") > -1 || t.point.tags.indexOf("community.checkpoint.flow.stat") > -1) ? a = !0 : t && t.use ? (a = !0, 
            e = !1) : t && t.point && t.point.tags && t.point.tags.indexOf("community.checkpoint.memberautopass") > -1 && t.house ? (e = !0, 
            a = !0) : a = !(!t || !t.whitelist_user), this.setData({
                memberable: e,
                passable: a
            });
        },
        previewImage2: function(t) {
            var e = t.currentTarget.dataset.img, a = [];
            a.push(e), wx.previewImage({
                current: e,
                urls: a
            });
        },
        toggleActionSheet1: function() {
            this.setData({
                show: !this.data.show
            });
        },
        chooseComfir1: function(t) {
            var e = this;
            this.setData({
                active: t.detail
            }, function() {
                e.getSettleAcount(), e.toggleActionSheet1();
            });
        },
        goReset: function() {
            wx.redirectTo({
                url: "/pages/checkPointScanResult/index?id="
            });
        },
        goPasslog: function() {
            wx.redirectTo({
                url: "/pages/passLog/index"
            });
        },
        goback: function() {
            wx.reLaunch({
                url: "/pages/index/index"
            });
        },
        goUrl: function(t) {
            wx.navigateTo({
                url: t.currentTarget.dataset.url
            });
        },
        gosiginCode: function() {
            wx.navigateTo({
                url: "/pages/healthCodeBind/index"
            });
        },
        gominiProgram: function() {
            var t = this;
            wx.navigateToMiniProgram({
                appId: "wx28197fe0459851c7",
                path: "pages/ScanTransition?scene=" + (this.data.turnflage + this.data.detail.point.entId),
                success: function(e) {
                    t.setData({
                        btndisabled: !0
                    });
                }
            });
        },
        changeApp: function(t) {
            this.setData({
                active: t.detail.index
            });
        }
    }
});