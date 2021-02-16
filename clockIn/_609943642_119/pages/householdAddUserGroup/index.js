function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("vant-weapp/toast/toast")), e = (t(require("../../utils/we-moment-with-locales")), 
getApp()), i = "2020020701", s = "", o = 1;

Page({
    data: {
        list: []
    },
    onLoad: function(t) {
        o = 1, t.grouptype && (i = t.grouptype), this.getlist();
    },
    searchChange: function(t) {
        s = t.detail, o = 1, this.getlist(!0);
    },
    getmoreList: function() {
        a.default.loading({
            duration: 0,
            forbidClick: !0,
            message: "加载中...",
            loadingType: "spinner"
        }), this.getlist();
    },
    getlist: function(t) {
        var n = this.data.list, r = {
            type: i,
            s: 10,
            p: o,
            with_subgroup: !0,
            with_subarea: !0
        };
        s && (r.name = s), t && (n = []);
        var u = this;
        e.services("api/group").get(r).then(function(t) {
            t && t.data.Success ? (a.default.clear(), o += 1, t.data.Result.Data.map(function(t) {
                n.push({
                    id: t.id,
                    name: t.name,
                    type: t.type,
                    areaid: t.areaid
                });
            }), u.setData({
                list: n,
                hasmore: t.data.Result.HasNextPage
            })) : a.default.fail(t.data.Error);
        });
    },
    chooseGroup: function(t) {
        e.globalData.choosegroups = t.currentTarget.dataset.group, wx.navigateBack({
            delta: 1,
            complete: function(t) {}
        });
    }
});