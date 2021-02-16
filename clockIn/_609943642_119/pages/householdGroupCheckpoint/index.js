function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

e(require("../../utils/we-moment-with-locales"));

var t = e(require("vant-weapp/toast/toast")), a = (e(require("vant-weapp/dialog/dialog")), 
getApp()), r = "";

Page({
    data: {},
    onLoad: function(e) {
        r = e.id, this.getGroup();
    },
    getGroup: function(e) {
        var i = this, u = {
            groupid: r
        };
        a.services("api/group/tree").get(u).then(function(e) {
            if (e && e.data.Success) {
                var a = [];
                e.data.Result.children && e.data.Result.children.map(function(e) {
                    2020020702 == e.type && a.push(e);
                }), i.setData({
                    groups: a
                }), t.default.clear();
            } else t.default.fail(e.data.Error);
        });
    },
    goGroup: function(e) {
        wx.navigateTo({
            url: "/pages/checkPointGroup/index?id=" + e.currentTarget.dataset.id
        });
    }
});