function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

a(require("../../utils/we-moment-with-locales"));

var t = a(require("vant-weapp/toast/toast")), e = (a(require("vant-weapp/dialog/dialog")), 
getApp()), i = (require("../../miniprogram_npm/@antv/wx-f2/index.js"), "");

Page({
    data: {},
    onLoad: function(a) {
        i = a.id, this.setData({
            CommunityCheckpointTypeEnums: e.globalData.enums.CommunityCheckpointTypeEnums
        });
    },
    onShow: function() {
        this.getLog();
    },
    getLog: function(a) {
        var n = this, s = {
            id: i
        };
        e.services("api/app/community/building/details").get(s).then(function(a) {
            if (a && a.data.Success) {
                var e = a.data.Result;
                e.admins = [], e.uids && e.uids.map(function(a) {
                    a.roles && a.roles.indexOf("admin") > -1 && e.users.map(function(t) {
                        a.uid == t.id && e.admins.push(t);
                    });
                }), n.setData({
                    detail: e
                }, function() {
                    n.getInfo();
                }), t.default.clear();
            } else t.default.fail(a.data.Error);
        });
    },
    getInfo: function(a) {
        var n = this, s = {
            bid: i,
            s: 200,
            order: "no",
            asc: !0
        };
        this.data.detail.data && this.data.detail.data.unit_names && (s.unit_name = this.data.detail.data.unit_names[0]);
        e.services("api/app/community/household").get(s).then(function(a) {
            if (a && a.data.Success) {
                var e = a.data.Result.Data;
                n.setData({
                    info: e
                }), t.default.clear();
            } else t.default.fail(a.data.Error);
        });
    },
    goUrl: function(a) {
        wx.navigateTo({
            url: a.currentTarget.dataset.url
        });
    }
});