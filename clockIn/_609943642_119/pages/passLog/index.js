function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var t = a(require("../../utils/we-moment-with-locales")), e = (a(require("vant-weapp/dialog/dialog")), 
a(require("vant-weapp/toast/toast"))), s = getApp(), o = 0, l = "", n = null;

Page({
    data: {
        list: []
    },
    onLoad: function(a) {
        o = 0, a && a.id && (n = a.id), this.getLog();
    },
    onShow: function() {
        s.globalData.enums && this.setData({
            CommunityCheckpointPassTypeEnums: s.globalData.enums.CommunityCheckpointPassTypeEnums
        });
    },
    getLog: function(a, i) {
        if (!s.globalData.self || s.globalData.self.id) {
            var u = this, g = this.data.list;
            a && (g = [], o = 0), o += 1, i && e.default.loading({
                duration: 0,
                message: "加载中.",
                loadingType: "spinner"
            });
            var r = {
                s: 15,
                asc: !1,
                p: o,
                uid: s.globalData.self.id
            };
            l && (r.key = l), n && (r.passid = n), s.services("api/app/community/checkpoint/pass/log").get(r).then(function(a) {
                wx.stopPullDownRefresh(), a && a.data.Success ? (a.data.Result.Data.map(function(a) {
                    if (a.createdTxt = (0, t.default)(a.created).format("MM月DD日 HH:mm"), a.flagsTags = [], 
                    s.globalData.enums) for (var e in s.globalData.enums.CheckpointPassFlagEnums) (a.flags & e) == e && a.flagsTags.push(s.globalData.enums.CheckpointPassFlagEnums[e]);
                    console.log(a);
                }), u.setData({
                    list: g.concat(a.data.Result.Data),
                    hasmore: a.data.Result.HasNextPage
                }), e.default.clear()) : a.data.Error ? e.default.fail(a.data.Error) : (0, e.default)("服务器繁忙，请稍后重试");
            });
        }
    },
    getMore: function() {
        this.getLog();
    },
    searchChange: function(a) {
        l = a.detail, o = 0, this.getLog(!0);
    },
    onPageScroll: function(a) {
        a.scrollTop < 44 && this.setData({
            scrollTop: a.scrollTop
        });
    },
    onPullDownRefresh: function() {
        this.getLog(!0, !0);
    }
});