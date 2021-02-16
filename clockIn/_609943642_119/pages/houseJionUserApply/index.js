function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../utils/we-moment-with-locales")), e = t(require("vant-weapp/toast/toast")), n = getApp(), o = null, i = !1, s = null, l = null, u = null, d = null;

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
            text: "申请时间升序",
            value: !0
        }, {
            text: "申请时间降序",
            value: !1
        } ],
        actions: [ {
            name: "同意",
            value: 0
        }, {
            name: "拒绝",
            value: 1
        } ],
        value1: 0,
        value2: !1,
        list: []
    },
    onLoad: function(t) {
        s = 0, o = 0, u = null, d = null, t.hid && (d = t.hid), this.setData({
            CommunityHouseholdApplicationStateEnums: n.globalData.enums ? n.globalData.enums.CommunityHouseholdApplicationStateEnums : {}
        });
    },
    onShow: function() {
        this.getLog(!0);
    },
    getLog: function(t, u) {
        var r = this, c = this.data.list;
        t && (c = [], s = 0), s += 1, u && e.default.loading({
            duration: 0,
            message: "加载中.",
            loadingType: "spinner"
        });
        var g = {
            state: o,
            s: 15,
            can_audit: !0,
            sort: "created",
            asc: i,
            p: s
        };
        l && (g.key = l), d && (g.hid = d), n.services("api/app/community/household/application").get(g).then(function(t) {
            e.default.clear(), wx.stopPullDownRefresh(), t && t.data.Success ? (t.data.Result.Data.map(function(t) {
                t.createdTxt = (0, a.default)(t.created).format("MM-DD HH:mm");
            }), r.setData({
                list: c.concat(t.data.Result.Data),
                hasmore: t.data.Result.HasNextPage
            }), e.default.clear()) : t.data.Error ? (0, e.default)(t.data.Error) : (0, e.default)("服务器繁忙，请稍后重试");
        });
    },
    getMore: function() {
        this.getLog();
    },
    menuChange: function(t) {
        o = t.detail, s = 0, this.getLog(!0);
    },
    menuChange2: function(t) {
        console.log(t), i = t.detail, s = 0, this.getLog(!0);
    },
    searchChange: function(t) {
        l = t.detail, s = 0, this.getLog(!0);
    },
    onPageScroll: function(t) {},
    goDetail: function(t) {
        wx.navigateTo({
            url: "/pages/houseJionUserApplyDetail/index?id=" + t.currentTarget.dataset.id
        });
    },
    toggle: function(t) {
        0 == t.currentTarget.dataset.state && (u = t.currentTarget.dataset.id, this.setData({
            show: !0
        }));
    },
    sheetToggle: function() {
        this.setData({
            show: !this.data.show
        });
    },
    onselect: function(t) {
        var a = this, o = {
            id: u
        };
        0 == t.detail.value ? o.passed = !0 : o.passed = !1, e.default.loading({
            duration: 0,
            forbidClick: !0,
            message: "加载中",
            loadingType: "spinner"
        }), n.services("api/app/community/household/application/audit").post(o).then(function(t) {
            t && t.data.Success ? (e.default.success("审核成功"), a.getLog(!0)) : t.data.Error ? (0, 
            e.default)(t.data.Error) : (0, e.default)("服务器繁忙，请稍后重试");
        });
    },
    onPullDownRefresh: function() {
        this.getLog(!0, !0);
    }
});