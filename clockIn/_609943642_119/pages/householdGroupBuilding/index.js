function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

t(require("../../utils/we-moment-with-locales"));

var a = t(require("vant-weapp/toast/toast")), e = (t(require("vant-weapp/dialog/dialog")), 
getApp()), i = "";

Page({
    data: {},
    onLoad: function(t) {
        i = t.id, this.getGroup();
    },
    getGroup: function(t) {
        var u = this, r = {
            groupid: i,
            s: 100,
            asc: !1
        };
        e.services("api/app/community/building").get(r).then(function(t) {
            if (t && t.data.Success) {
                var e = t.data.Result.Data;
                u.setData({
                    groups: e
                }), a.default.clear();
            } else a.default.fail(t.data.Error);
        });
    },
    goGroup: function(t) {
        wx.navigateTo({
            url: "/pages/householdDetail/index?id=" + t.currentTarget.dataset.id
        });
    }
});