function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../utils/we-moment-with-locales")), e = (t(require("vant-weapp/dialog/dialog")), 
t(require("vant-weapp/toast/toast"))), s = getApp(), i = 0, o = "";

Page({
    data: {
        list: []
    },
    onLoad: function(t) {
        this.getGroup();
    },
    getGroup: function() {
        var t = this;
        s.services("api/app/community/checkpoint").get({
            me: !0
        }).then(function(a) {
            if (a && a.data.Success) {
                var s = [];
                a.data.Result.Data.map(function(t) {
                    s.push(t.group);
                }), t.setData({
                    groups: s,
                    active: s.length > 0 ? s[0] : {}
                }, function() {
                    s.length && t.getLog();
                }), e.default.clear();
            } else e.default.fail(a.data.Error);
        });
    },
    getLog: function(t) {
        var o = this, n = this.data, u = n.list, l = n.active;
        t && (u = [], i = 0), i += 1, e.default.loading({
            duration: 0,
            forbidClick: !0,
            message: "加载中",
            loadingType: "spinner"
        });
        var c = {
            s: 15,
            asc: !0,
            p: i,
            groupid: l.id
        };
        s.services("api/app/community/checkpoint/pass/log").get(c).then(function(t) {
            t && t.data.Success ? (t.data.Result.Data.map(function(t) {
                if (t.createdTxt = (0, a.default)(t.created).format("MM月DD日 HH:mm"), t.flagsTags = [], 
                s.globalData.enums) for (var e in s.globalData.enums.CheckpointPassFlagEnums) (t.flags & e) == e && t.flagsTags.push(s.globalData.enums.CheckpointPassFlagEnums[e]);
            }), o.setData({
                list: u.concat(t.data.Result.Data),
                hasmore: t.data.Result.HasNextPage
            }), e.default.clear()) : e.default.fail(t.data.Error);
        });
    },
    toggleSheet: function() {
        this.setData({
            sheetshow: !this.data.sheetshow
        });
    },
    getMore: function() {
        this.getLog();
    },
    searchChange: function(t) {
        o = t.detail, i = 0, this.getLog(!0);
    },
    onSelect: function(t) {
        var a = this;
        this.setData({
            active: t.detail
        }, function() {
            i = 0, a.getLog(!0);
        });
    }
});