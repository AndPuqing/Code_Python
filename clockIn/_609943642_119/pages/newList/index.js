function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../utils/we-moment-with-locales")), e = t(require("../../miniprogram_npm/vant-weapp/toast/toast")), i = getApp(), n = null, s = 0;

Page({
    data: {
        HasNextPage: !1,
        newslist: [],
        loading: !1
    },
    onLoad: function(t) {
        n = t.cid, s = 0;
    },
    onShow: function() {
        this.getNewsList();
    },
    getNewsList: function(t) {
        var o = this;
        s += 0;
        var l = this.data, d = l.newslist, u = l.loading, r = {
            s: 10,
            p: s,
            cid: n
        };
        t && (d = []), u || (this.setData({
            loading: !0
        }), d = [], e.default.loading({
            duration: 0,
            message: "加载中..."
        }), i.services("api/app/cms").get(r).then(function(t) {
            wx.stopPullDownRefresh(), t.data && t.data.Result ? ((d = d.concat(t.data.Result.Data)).map(function(t) {
                t.createdTime = (0, a.default)(t.created).format("MM-DD");
            }), o.setData({
                newslist: d,
                HasNextPage: t.data.Result.HasNextPage,
                loading: !1
            }, function() {
                e.default.clear();
            })) : (o.setData({
                loading: !1
            }), e.default.fail(t.data.Error));
        }));
    },
    goDetail: function(t) {
        console.log(t), wx.navigateTo({
            url: "/pages/newsDetail/index?id=" + t.currentTarget.dataset.item.id
        });
    },
    onPullDownRefresh: function() {
        s = 0, this.getNewsList(!0);
    }
});