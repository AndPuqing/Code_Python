function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var a = t(require("vant-weapp/toast/toast")), i = t(require("../../utils/config")), s = t(require("vant-weapp/dialog/dialog")), l = t(require("../../utils/we-moment-with-locales")), n = getApp(), o = null;

Page({
    data: {
        steps: [ {
            title: "手机认证",
            subtitle: "需要认证手机号进行注册",
            url: "/pages/phoneTypeChoose/index",
            btnName: "去认证"
        }, {
            title: "领取广西健康码",
            subtitle: "领取广西健康码，确保健康出行",
            url: "/pages/healthCodeBind/index",
            btnName: "去申请"
        }, {
            title: "申请加入班级",
            subtitle: "帮助孩子申请加入班级，统一管理",
            url: "/pages/householdStudentGoApply/index",
            btnName: "去加入"
        } ],
        loading: !0,
        selfid: 1,
        house: {}
    },
    onLoad: function(t) {
        t.id && (o = t.id), t.q && this.getID(t.q);
    },
    onChange: function(t) {
        this.setData({
            activeNames: t.detail
        });
    },
    getID: function(t) {
        var e = this, s = decodeURIComponent(t), l = [];
        s.indexOf("https") > -1 && ((l = s.split("/")).indexOf(i.default.shost) > -1 || l.indexOf(i.default.ahost) > -1) && l.indexOf("h") > -1 ? n.services("s/re/" + l[l.length - 1]).get().then(function(t) {
            if (t && t.data.Success) {
                var i = t.data.Result.split("?");
                i[0].indexOf("yqfk/#") > -1 && (o = i[1].split("=")[1], e.inintData());
            } else a.default.fail("请重新扫码");
        }) : a.default.fail("请重新扫码");
    },
    inintData: function(t) {
        this.getself(), this.getApply(), this.gethousehold(t), this.getBuildAdmin();
    },
    onHide: function() {
        s.default.close();
    },
    onShow: function() {
        if (n.globalData.self || this.getself(), this.data.house.id && this.data.house.user && this.data.house.user.id == n.globalData.self.id || wx.hideShareMenu(), 
        this.data.CommunityHouseholdApplicationStateEnums || this.setData({
            CommunityHouseholdApplicationStateEnums: n.globalData.enums ? n.globalData.enums.CommunityHouseholdApplicationStateEnums : {}
        }), n.loginData ? (s.default.close(), o && (this.data.house.id || this.gethousehold(), 
        this.getApply(), this.getBuildAdmin())) : s.default.alert({
            title: "提示",
            message: "您还未登录，请跳转登录后继续"
        }).then(function(t) {
            wx.navigateTo({
                url: "/pages/wxlog/index"
            });
        }), n.globalData.self && n.globalData.self.phone) {
            var t;
            this.setData((t = {}, e(t, "steps[0].task", !0), e(t, "selfid", n.globalData.self.id), 
            t));
        }
    },
    getCodebind: function() {
        var t = this;
        n.services("api/app/community/healthcode/check/bind").post().then(function(i) {
            if (i && i.data.Success) {
                var s;
                t.setData((s = {}, e(s, "steps[1].task", i.data.Result), e(s, "steps[2].url", "/pages/householdStudentGoApply/index?id=" + o), 
                e(s, "loading", !1), s));
            } else i.data.Error ? a.default.fail(i.data.Error) : (t.setData({
                error: !1
            }), a.default.fail("服务器繁忙，请稍后重试"));
        });
    },
    getself: function() {
        var t = this;
        n.services("api/user/self/v2").get().then(function(i) {
            if (i && i.data.Success) if (n.globalData.self = i.data.Result, n.globalData.self && n.globalData.self.phone) {
                var s;
                t.setData((s = {}, e(s, "steps[0].task", !0), e(s, "selfid", n.globalData.self.id), 
                s));
            } else {
                var l;
                t.setData((l = {}, e(l, "steps[0].task", !1), e(l, "selfid", n.globalData.self.id), 
                l));
            } else i.data.Error || (t.setData({
                error: !1
            }), a.default.fail("服务器繁忙，请稍后重试"));
        });
    },
    getBuildAdmin: function() {
        var t = this;
        n.services("api/app/community/household/students").get().then(function(e) {
            if (e && e.data.Success) {
                a.default.clear();
                var i = !1;
                e.data.Result.map(function(e) {
                    e.household.id == o && (i = !0, t.setData({
                        add: i,
                        student: e.member
                    }));
                }), i || t.getCodebind();
            } else e.data.Error ? a.default.fail(e.data.Error) : a.default.fail("服务器繁忙，请稍后重试");
        });
    },
    gethousehold: function(t) {
        var e = this;
        a.default.loading({
            duration: 0,
            message: "加载中...",
            context: this
        }), n.services("api/app/community/household/simple/details").get({
            id: o,
            force: !0
        }).then(function(t) {
            wx.stopPullDownRefresh(), t && t.data.Success ? (e.getPass(), e.setData({
                house: t.data.Result,
                error: !1
            })) : t.data.Error ? a.default.fail(t.data.Error) : e.setData({
                error: !1
            });
        }), n.services("api/app/community/stat/v2").get({
            hid: o
        }).then(function(t) {
            t && t.data.Success && e.setData({
                stat: t.data.Result
            });
        });
    },
    getApply: function() {
        var t = this, e = {
            hid: o,
            s: 5,
            uid: n.globalData.self.id
        };
        n.services("api/app/community/household/application").get(e).then(function(e) {
            wx.stopPullDownRefresh(), e && e.data.Success && (e.data.Result.Data.map(function(t) {
                t.createdTxt = (0, l.default)(t.created).format("MM-DD HH:mm");
            }), t.setData({
                apply: e.data.Result.Data
            }), a.default.clear());
        });
    },
    getPass: function() {
        var t = this, e = {
            me: !0
        };
        n.services("api/app/community/pass").get(e).then(function(e) {
            if (a.default.clear(), wx.stopPullDownRefresh(), e && e.data.Success) {
                var i = function(t) {
                    var e = "";
                    switch (t.limit_type) {
                      case 0:
                        t.expired && (t.expiredTxt = (0, l.default)(t.expired).format("YYYY-MM-DD "), e += "通行证有效日期：" + t.expiredTxt + "，"), 
                        t.limit.time_periods && (e += "有效时段:", t.limit.time_periods.map(function(t, a) {
                            t.startTxt = (0, l.default)((0, l.default)().format("YYYY-MM-DD 00:00:00")).add(t.start, "minutes").format("HH:mm"), 
                            t.endTxt = (0, l.default)((0, l.default)().format("YYYY-MM-DD 00:00:00")).add(t.end, "minutes").format("HH:mm"), 
                            e += t.startTxt + "-" + t.endTxt + "  ";
                        }), e += ",有效期内可以进出桂电,"), e += "不限次数";
                        break;

                      case 1:
                        e = "每" + t.limit.cycle + "天可使用" + t.limit.times + "次", t.id && (e += "，剩余" + (t.limit.times - (t.limit.use_times || 0)) + "次");
                        break;

                      case 2:
                        e = "总" + t.limit.times + "次", t.id && (e += "，剩" + (t.limit.times - (t.limit.use_times || 0)) + "次");
                    }
                    return t.state, e;
                };
                e.data.Result.Data.map(function(t) {
                    t.desc = i(t);
                }), t.setData({
                    passes: e.data.Result.Data
                }), a.default.clear();
            }
        });
    },
    godetail: function() {
        wx.navigateTo({
            url: "/pages/householdStudentList/index?id=" + o
        });
    },
    goapply: function() {
        wx.navigateTo({
            url: "/pages/houseJionUserApply/index?hid=" + o
        });
    },
    onShareAppMessage: function() {
        return {
            title: "欢迎大家加入" + this.data.house.group.name + this.data.house.name,
            path: "/pages/householdStudentApply/index?id=" + o
        };
    },
    onPullDownRefresh: function() {
        this.inintData(!0);
    }
});