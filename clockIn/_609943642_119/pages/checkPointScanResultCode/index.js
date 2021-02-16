function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("vant-weapp/toast/toast")), a = (t(require("vant-weapp/dialog/dialog")), 
t(require("../../utils/restfulApi")), t(require("../../utils/we-moment-with-locales"))), i = (require("../../utils/qrcode.js"), 
getApp()), s = "", n = "01";

Page({
    data: {
        activeNames: [ 0 ]
    },
    onLoad: function(t) {
        var e = this;
        s = t.id, n = 2 == t.flag ? "02" : "01", this.setData({
            self: i.globalData.self,
            CommunityHouseholdApplicationStateEnums: i.globalData.enums ? i.globalData.enums.CommunityHouseholdApplicationStateEnums : {}
        }), this.timer = setInterval(function() {
            e.setData({
                time: (0, a.default)().format("HH:mm:ss")
            });
        });
    },
    onChange: function(t) {
        this.setData({
            activeNames: t.detail
        });
    },
    onShow: function() {
        this.initData();
    },
    initData: function() {
        var t = this;
        i.services("api/app/community/household/rebind").get().then(function(e) {
            t.getDetail();
        });
    },
    getDetail: function() {
        var t = this;
        i.services("api/app/community/pass/forcheckpoint").get({
            groupid: s
        }).then(function(a) {
            if (a && a.data.Success) {
                a.data.Result.group && t.getCheckDetail(a.data.Result.group.id);
                var i = a.data.Result, s = !1;
                if (s = !!(i.point && i.point.tags && i.point.tags.indexOf("community.checkpoint.autopass") > -1) || (!!i.use || !!(i.group && i.group.tags && i.group.tags.indexOf("community.checkpoint.memberautopass") > -1)), 
                a.data.Result.use) {
                    a.data.Result.use.text = function(t) {
                        var e = null;
                        switch (t.limit_type) {
                          case 0:
                            e = "不限次数";
                            break;

                          case 1:
                            e = "每" + t.limit.cycle + "天可使用" + t.limit.times + "次", t.id && (e += "，剩余" + (t.limit.times - (t.limit.use_times || 0)) + "次");
                            break;

                          case 2:
                            e = "总" + t.limit.times + "次", t.id && (e += "，剩" + (t.limit.times - (t.limit.use_times || 0)) + "次");
                        }
                        return t.state, e;
                    }(a.data.Result.use);
                }
                t.setData({
                    detail: a.data.Result,
                    passable: s
                });
            } else e.default.fail(a.data.Error);
        });
    },
    getCheckDetail: function(t) {
        var a = this;
        i.services("api/app/community/checkpoint/details").get({
            groupid: t,
            user_scan: !0
        }).then(function(t) {
            t && t.data.Success ? a.setData({
                group: t.data.Result
            }) : e.default.fail(t.data.Error);
        });
    },
    getPasslog: function() {
        var t = this;
        i.services("api/app/community/checkpoint/pass/log").get({
            groupid: gid,
            user_scan: !0
        }).then(function(a) {
            a && a.data.Success ? t.setData({
                group: a.data.Result
            }) : e.default.fail(a.data.Error);
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
            url: "/pages/checkPointScanResult/index?id=" + s
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
    gominiProgram: function() {
        console.log(n + this.data.detail.point.entId), wx.navigateToMiniProgram({
            appId: "wx28197fe0459851c7",
            path: "pages/ScanTransition?scene=" + (n + this.data.detail.point.entId),
            success: function(t) {}
        });
    }
});