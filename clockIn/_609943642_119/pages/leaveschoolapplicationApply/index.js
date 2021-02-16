function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../utils/we-moment-with-locales")), a = t(require("vant-weapp/dialog/dialog")), i = t(require("vant-weapp/toast/toast")), s = getApp(), o = 0, n = !1, l = 0, u = "", r = "", d = {};

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
        s.globalData.trees && s.globalData.trees.map(function(t) {
            d[t.areaid] = t;
        }), this.setData({
            CommunityHouseholdApplicationStateEnums: s.globalData.enums ? s.globalData.enums.CommunityHouseholdApplicationStateEnums : {}
        }), t.me;
    },
    onShow: function() {
        this.getLog();
    },
    getLog: function(t, a) {
        var r = this, c = this.data.list;
        t && (c = [], l = 0), l += 1, a && i.default.loading({
            duration: 0,
            message: "加载中.",
            loadingType: "spinner"
        });
        var m = {
            state: o,
            s: 15,
            can_audit: !0,
            with_subgroup: !0,
            with_subarea: !0,
            sort: "created",
            asc: n,
            p: l
        };
        u && (m.key = u), s.services("api/app/community/guet/leaveschoolapplication").get(m).then(function(t) {
            if (wx.stopPullDownRefresh(), t && t.data.Success) {
                var a = function(t) {
                    var a = "";
                    switch (t.limit_type) {
                      case 0:
                        t.expiredday && (a += "共" + t.expiredday + "天有效时间。"), t.expired && (t.expiredTxt = (0, 
                        e.default)(t.expired).format("YYYY-MM-DD "), a += "通行证有效日期：" + t.expiredTxt + "，"), 
                        t.limit.time_periods && (a += "有效时段:", t.limit.time_periods.map(function(t, i) {
                            t.startTxt = (0, e.default)((0, e.default)().format("YYYY-MM-DD 00:00:00")).add(t.start, "minutes").format("HH:mm"), 
                            t.endTxt = (0, e.default)((0, e.default)().format("YYYY-MM-DD 00:00:00")).add(t.end, "minutes").format("HH:mm"), 
                            a += t.startTxt + "-" + t.endTxt + "  ";
                        }), a += ",有效期内可以进出桂电,"), a += "限制类型为进出不限次数。" + (t.desc ? t.desc : "");
                        break;

                      case 1:
                        a = "每" + t.limit.cycle + "天可使用" + t.limit.times + "次", t.id && (a += "，剩余" + (t.limit.times - (t.limit.use_times || 0)) + "次");
                        break;

                      case 2:
                        a = "总" + t.limit.times + "次", t.id && (a += "，剩" + (t.limit.times - (t.limit.use_times || 0)) + "次");
                    }
                    return t.state, a;
                };
                t.data.Result.Data.map(function(t) {
                    d[t.areaid] && (t.groupname = d[t.areaid].name.replace("村委会", "")), t.createdTxt = (0, 
                    e.default)(t.created).format("YYYY年MM月DD日 HH:mm"), t.text = a(t);
                }), r.setData({
                    list: c.concat(t.data.Result.Data),
                    hasmore: t.data.Result.HasNextPage
                }), i.default.clear();
            } else i.default.fail(t.data.Error);
        });
    },
    getMore: function() {
        this.getLog();
    },
    menuChange: function(t) {
        o = t.detail, l = 0, this.getLog(!0);
    },
    menuChange2: function(t) {
        n = t.detail, l = 0, this.getLog(!0);
    },
    searchChange: function(t) {
        u = t.detail, l = 0, this.getLog(!0);
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
            i.default.loading({
                duration: 0,
                forbidClick: !0,
                message: "加载中",
                loadingType: "spinner"
            }), s.services("api/app/community/guet/leaveschoolapplication/audit").post(o).then(function(t) {
                t && t.data.Success ? (i.default.success("审核成功"), l = 0, e.getLog(!0)) : i.default.fail(t.data.Error);
            });
        });
    },
    delete: function(t) {
        var e = {
            id: t.currentTarget.dataset.id,
            disabled: !0
        };
        a.default.alert({
            title: "提示",
            message: "您确定要删除该申请吗?",
            showCancelButton: !0
        }).then(function(t) {
            i.default.loading({
                duration: 0,
                forbidClick: !0,
                message: "加载中",
                loadingType: "spinner"
            }), s.services("api/app/community/guet/leaveschoolapplication/disable").get(e).then(function(t) {
                t && t.data.Success && t.data.Result ? i.default.success("删除成功") : t.data.Error ? i.default.fail(t.data.Error) : (0, 
                i.default)("服务器繁忙，请稍后重试！");
            });
        });
    },
    goDetail: function(t) {
        wx.navigateTo({
            url: "/pages/leaveschoolapplicationdetail/index?id=" + t.currentTarget.dataset.id
        });
    },
    onPullDownRefresh: function() {
        l = 0, this.getLog(!0, !0);
    }
});