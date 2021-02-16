function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function a(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var e, o = t(require("../../utils/we-moment-with-locales")), n = (t(require("vant-weapp/dialog/dialog")), 
t(require("vant-weapp/toast/toast"))), i = getApp(), s = 1, l = !1, u = 0, r = "";

Page((e = {
    data: {
        list: [],
        option1: [ {
            text: "待审核",
            value: 0
        }, {
            text: "已同意",
            value: 1
        }, {
            text: "已拒绝",
            value: 2
        } ],
        option2: [ {
            text: "升序",
            value: !0
        }, {
            text: "降序",
            value: !1
        } ],
        value2: !1,
        value1: 1
    },
    onLoad: function(t) {
        u = 0, this.setData({
            CommunityHouseholdApplicationStateEnums: i.globalData.enums ? i.globalData.enums.CommunityHouseholdApplicationStateEnums : {}
        });
    },
    onReady: function() {
        this.getLog();
    },
    onShow: function() {
        i.globalData.enums && this.setData({
            CommunityCheckpointPassTypeEnums: i.globalData.enums.CommunityCheckpointPassTypeEnums
        });
    },
    getMore: function() {
        this.getLog();
    },
    menuChange: function(t) {
        s = t.detail, u = 0, this.getLog(!0);
    },
    menuChange2: function(t) {
        l = t.detail, u = 0, this.getLog(!0);
    },
    getLog: function(t, e) {
        var g;
        if (!i.globalData.self || i.globalData.self.id) {
            var c = this, d = this.data.list;
            t && (d = [], u = 0), u += 1, n.default.loading({
                duration: 0,
                message: "加载中.",
                loadingType: "spinner"
            });
            var f = (g = {
                s: 10,
                asc: !1,
                p: u,
                uid: i.globalData.self.id,
                sort: "created"
            }, a(g, "asc", l), a(g, "state", s), g);
            r && (f.key = r), i.services("api/app/community/pass").get(f).then(function(t) {
                wx.stopPullDownRefresh(), t && t.data.Success ? (t.data.Result.Data.map(function(t) {
                    t.createdTxt = (0, o.default)(t.created).format("MM月DD日 HH:mm");
                }), c.setData({
                    list: d.concat(t.data.Result.Data),
                    hasmore: t.data.Result.HasNextPage
                }), n.default.clear()) : t.data.Error ? n.default.fail(t.data.Error) : (0, n.default)("服务器繁忙，请稍后重试");
            });
        }
    }
}, a(e, "getMore", function() {
    this.getLog();
}), a(e, "searchChange", function(t) {
    r = t.detail, u = 0, this.getLog(!0);
}), a(e, "onPageScroll", function(t) {
    t.scrollTop < 44 && this.setData({
        scrollTop: t.scrollTop
    });
}), a(e, "onPullDownRefresh", function() {
    this.getLog(!0, !0);
}), a(e, "goDetail", function(t) {
    wx.navigateTo({
        url: "/pages/passCardDetail/index?id=" + t.currentTarget.dataset.id
    });
}), e));