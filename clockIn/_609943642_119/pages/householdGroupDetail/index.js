function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

t(require("../../utils/we-moment-with-locales"));

var a = t(require("vant-weapp/toast/toast")), e = (t(require("vant-weapp/dialog/dialog")), 
getApp()), i = (require("../../miniprogram_npm/@antv/wx-f2/index.js"), "");

Page({
    data: {},
    onLoad: function(t) {
        i = t.id, this.setData({
            CommunityCheckpointTypeEnums: e.globalData.enums.CommunityCheckpointTypeEnums
        });
    },
    onShow: function() {
        this.getLog(), this.getInfo(), this.getGroupUser();
    },
    getLog: function(t) {
        var n = this, u = {
            id: i
        };
        e.services("api/group/details").get(u).then(function(t) {
            t && t.data.Success ? (n.setData({
                detail: t.data.Result
            }, function() {}), a.default.clear()) : a.default.fail(t.data.Error);
        });
    },
    getGroupUser: function() {
        var t = this, n = {
            id: i,
            s: 1
        };
        e.services("api/group/users").get(n).then(function(e) {
            e && e.data.Success ? (t.setData({
                usercount: e.data.Result && e.data.Result.TotalCount ? e.data.Result.TotalCount : 0
            }), a.default.clear()) : a.default.fail(e.data.Error);
        });
    },
    getInfo: function(t) {
        var n = this, u = {
            id: i
        };
        e.services("api/app/community/details").get(u).then(function(t) {
            if (t && t.data.Success) {
                var e = t.data.Result.data;
                n.setData({
                    info: e
                }), a.default.clear();
            } else a.default.fail(t.data.Error);
        });
    },
    goUrl: function(t) {
        console.log(t), wx.navigateTo({
            url: t.currentTarget.dataset.url
        });
    }
});