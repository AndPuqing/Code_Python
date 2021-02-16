function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../utils/we-moment-with-locales")), a = t(require("vant-weapp/dialog/dialog")), n = t(require("vant-weapp/toast/toast")), s = getApp(), o = 0, i = !1, u = 0, l = "", r = "", d = {};

Page({
    data: {
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
        actions: [ {
            name: "同意",
            value: 0
        }, {
            name: "拒绝",
            value: 1
        } ],
        value2: !1,
        value1: 0,
        list: []
    },
    onLoad: function(t) {
        u = 0;
        s.globalData.trees && s.globalData.trees.map(function(t) {
            d[t.areaid] = t;
        }), this.setData({
            CommunityLeaveStateEnums: s.globalData.enums ? s.globalData.enums.CommunityLeaveStateEnums : {}
        });
    },
    onShow: function() {
        this.getLog();
    },
    getLog: function(t, a) {
        var r = this, c = this.data.list;
        t && (c = [], u = 0), u += 1, a && n.default.loading({
            duration: 0,
            message: "加载中.",
            loadingType: "spinner"
        });
        var g = {
            state: o,
            s: 15,
            can_audit: !0,
            with_subgroup: !0,
            with_subarea: !0,
            sort: "created",
            asc: i,
            p: u
        };
        l && (g.key = l), s.services("api/app/community/guet/leave").get(g).then(function(t) {
            wx.stopPullDownRefresh(), t && t.data.Success ? (t.data.Result.Data.map(function(t) {
                d[t.areaid] && (t.groupname = d[t.areaid].name.replace("村委会", "")), t.createdTxt = (0, 
                e.default)(t.created).format("YYYY年MM月DD日 HH:mm");
            }), r.setData({
                list: c.concat(t.data.Result.Data),
                hasmore: t.data.Result.HasNextPage
            }), n.default.clear()) : n.default.fail(t.data.Error);
        });
    },
    getMore: function() {
        this.getLog();
    },
    menuChange: function(t) {
        o = t.detail, u = 0, this.getLog(!0);
    },
    menuChange2: function(t) {
        i = t.detail, u = 0, this.getLog(!0);
    },
    searchChange: function(t) {
        l = t.detail, u = 0, this.getLog(!0);
    },
    onPageScroll: function(t) {
        t.scrollTop < 50 && this.setData({
            scrollTop: t.scrollTop
        });
    },
    toggle: function(t) {
        0 == t.currentTarget.dataset.state && (r = t.currentTarget.dataset.id, this.setData({
            show: !0
        }));
    },
    sheetToggle: function() {
        this.setData({
            show: !this.data.show
        });
    },
    onselect: function(t) {
        var e = this;
        console.log(t);
        var o = {
            id: t.currentTarget.dataset.id
        };
        "true" == t.currentTarget.dataset.type ? o.passed = !0 : o.passed = !1, a.default.alert({
            title: "提示",
            message: "您确定要" + (o.passed ? "通过" : "拒绝") + "吗?",
            showCancelButton: !0
        }).then(function(t) {
            n.default.loading({
                duration: 0,
                forbidClick: !0,
                message: "加载中",
                loadingType: "spinner"
            }), s.services("api/app/community/guet/leave/audit").post(o).then(function(t) {
                t && t.data.Success ? (n.default.success("审核成功"), u = 0, e.getLog(!0)) : n.default.fail(t.data.Error);
            });
        });
    },
    delete: function(t) {
        var e = {
            id: t.currentTarget.dataset.id,
            __version: t.currentTarget.dataset.version,
            passed: !1
        };
        a.default.alert({
            title: "提示",
            message: "您确定要拒绝该申请吗?",
            showCancelButton: !0
        }).then(function(t) {
            n.default.loading({
                duration: 0,
                forbidClick: !0,
                message: "加载中",
                loadingType: "spinner"
            }), s.services("api/app/community/guet/leave/audit").post(e).then(function(t) {
                t && t.data.Success ? n.default.success("拒绝成功") : t.data.Error ? n.default.fail(t.data.Error) : (0, 
                n.default)("服务器繁忙，请稍后重试！");
            });
        });
    },
    goDetail: function(t) {
        wx.navigateTo({
            url: "/pages/leavedetail/index?id=" + t.currentTarget.dataset.id
        });
    },
    onPullDownRefresh: function() {
        u = 0, this.getLog(!0, !0);
    }
});