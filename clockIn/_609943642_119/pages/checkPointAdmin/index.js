function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

a(require("../../utils/we-moment-with-locales")), a(require("vant-weapp/toast/toast")), 
a(require("vant-weapp/dialog/dialog"));

var t = getApp();

Page({
    data: {
        list: []
    },
    onLoad: function(a) {
        var e = [];
        if (t.globalData.self && t.globalData.self.admins && t.globalData.self.admins.in_groups && t.globalData.self.admins.groups) {
            var n = function(a, t) {
                return a.filter(function(a) {
                    return a.in_group_roles.indexOf(t) > -1;
                });
            };
            t.globalData.self.admins.groups.map(function(a) {
                n(t.globalData.self.admins.in_groups, "admin").length > 0 && 2020020702 == a.type && e.push(a);
            });
        }
        this.setData({
            groups: e
        });
    },
    goGroup: function(a) {
        wx.navigateTo({
            url: "/pages/checkPointGroup/index?id=" + a.currentTarget.dataset.id
        });
    }
});