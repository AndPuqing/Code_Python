function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("vant-weapp/toast/toast")), a = t(require("../../utils/config")), s = t(require("vant-weapp/dialog/dialog")), i = t(require("../../utils/we-moment-with-locales")), n = require("qs"), l = getApp(), u = null;

Page({
    data: {
        steps: [],
        loading: !0,
        selfid: 1,
        house: {},
        CommunityLeaveSchoolApplicationTypeEnums: {
            0: "离校",
            1: "返校"
        }
    },
    onLoad: function(t) {
        u = t.id ? t.id : null, t.hid && (u = t.hid), t.q && this.getID(t.q), this.getItinerary();
    },
    onChange: function(t) {
        this.setData({
            activeNames: t.detail
        });
    },
    onChange1: function(t) {
        this.setData({
            activeNames1: t.detail
        });
    },
    onChangecollapse: function(t) {
        this.setData({
            activeNames2: t.detail
        });
    },
    getID: function(t) {
        var s = this, i = decodeURIComponent(t), n = [];
        i.indexOf("https") > -1 && ((n = i.split("/")).indexOf(a.default.shost) > -1 || n.indexOf(a.default.ahost) > -1) && n.indexOf("h") > -1 ? l.services("s/re/" + n[n.length - 1]).get().then(function(t) {
            if (t && t.data.Success) {
                var a = t.data.Result.split("?");
                a[0].indexOf("yqfk/#") > -1 && (u = a[1].split("=")[1], s.inintData());
            } else e.default.fail("请重新扫码");
        }) : e.default.fail("请重新扫码");
    },
    inintData: function(t) {
        this.getItinerary(), this.getself(), this.getApply(), this.getleaveApply(), this.getlog(), 
        u && (this.gethousehold(t), this.getText(u)), this.getBuildAdmin(t);
    },
    onHide: function() {
        s.default.close();
    },
    onShow: function() {
        l.globalData.self || this.getself(), this.data.house.id && this.data.house.user && this.data.house.user.id == l.globalData.self.id || wx.hideShareMenu(), 
        this.data.CommunityHouseholdApplicationStateEnums || this.setData({
            CommunityHouseholdApplicationStateEnums: l.globalData.enums ? l.globalData.enums.CommunityHouseholdApplicationStateEnums : {}
        }), l.loginData ? (this.getlog(), s.default.close(), u && (this.data.house.id || this.gethousehold())) : s.default.alert({
            title: "提示",
            message: "您还未登录，请跳转登录后继续"
        }).then(function(t) {
            wx.navigateTo({
                url: "/pages/wxlog/index"
            });
        }), this.getApply(), this.getleaveApply(), this.getBuildAdmin(), l.globalData.self && l.globalData.self.phone && this.setData({
            selfid: l.globalData.self.id
        });
    },
    getText: function(t) {
        var e = this;
        l.services("api/app/community/tips/read").get({
            hid: t
        }).then(function(t) {
            t && t.data.Success && e.setData({
                desc: t.data.Result.desc
            });
        });
    },
    getlog: function() {
        var t = this;
        l.services("api/app/community/itinerary").get({
            member_uid: l.globalData.self.id,
            s: 5,
            asc: !0
        }).then(function(e) {
            e && e.data.Success && (e.data.Result.Data.map(function(t) {
                t.dayTxt = (0, i.default)(t.day).format("MM月DD日"), t.end.time && (t.end.timeTxt = (0, 
                i.default)(t.end.time).format("YYYY-MM-DD HH:mm"));
            }), console.log(e.data.Result.Data), t.setData({
                list: e.data.Result.Data
            }));
        });
    },
    getItinerary: function() {
        var t = this;
        l.services("api/app/community/person/phone/itinerary").get().then(function(e) {
            if (e && e.data.Success && e.data.Result && e.data.Result.url) {
                var a = e.data.Result;
                a.result && (a.result.updateTxt = (0, i.default)(a.result.update).format("YYYY-MM-DD HH:mm:ss")), 
                t.setData({
                    itinerary: a
                });
            }
        });
    },
    deletItem: function(t) {
        var a = this, i = t.currentTarget.dataset.id;
        s.default.alert({
            title: "提示",
            message: "您确定要删除该记录吗?",
            showCancelButton: !0
        }).then(function(t) {
            l.services("api/app/community/itinerary/disable").get({
                id: i,
                disabled: !0
            }).then(function(t) {
                t && t.data.Success ? (e.default.success("删除成功"), a.getlog()) : e.default.fail(t.data.Error);
            });
        });
    },
    goitineraryDetail: function(t) {
        t.currentTarget.dataset.id && wx.navigateTo({
            url: "/pages/itineraryAdd/index?id=" + t.currentTarget.dataset.id
        });
    },
    getCodebind: function() {
        var t = this;
        l.services("api/app/community/pass/task/guet/student").get().then(function(a) {
            if (a && a.data.Success) {
                var s = [];
                a.data.Result.map(function(t) {
                    var e = {
                        task: t.pass,
                        title: t.title,
                        subtitle: t.desc
                    };
                    if (t.btns && t.btns.length > 0) {
                        t.btns[0].param;
                        switch (t.btns[0].router) {
                          case "/shangbao":
                            t.btns[0].router = "/pages/healthLineAdd/index", t.btns[0].param = {
                                id: getApp().globalData.self.id
                            };
                            break;

                          case "/dengji":
                            t.btns[0].router = "/pages/itineraryAdd/index", t.btns[0].param = {
                                uid: getApp().globalData.self.id
                            };
                            break;

                          case "/household/select":
                            t.btns[0].router = "/pages/householdAddUser/index", t.btns[0].param = t.btns[0].param || {}, 
                            t.btns[0].param.reset = "true";
                        }
                        e.url = t.btns[0].router + "?" + (0, n.stringify)(t.btns[0].param), e.btnName = t.btns[0].name, 
                        "申请注册" != t.title && "填报行程" != t.title || (e.url += "&student=true");
                    }
                    s.push(e);
                }), t.setData({
                    loading: !1,
                    steps: s,
                    tasks: a.data.Result
                });
            } else a.data.Error ? e.default.fail(a.data.Error) : (t.setData({
                error: !1
            }), e.default.fail("服务器繁忙，请稍后重试"));
        });
    },
    getself: function() {
        var t = this;
        l.services("api/user/self/v2").get().then(function(e) {
            e && e.data.Success && (l.globalData.self = e.data.Result, t.setData({
                selfid: l.globalData.self.id
            }));
        });
    },
    getBuildAdmin: function(t) {
        var a = this, s = {};
        t && (s.force = !0), l.services("api/app/community/household/students").get(s).then(function(t) {
            if (t && t.data.Success) {
                e.default.clear();
                var s = !1;
                t.data.Result.map(function(t) {
                    t.household.id == u ? (s = !0, a.setData({
                        add: s,
                        student: t.member
                    })) : u || s || (s = !0, u = t.household.id, a.getText(u), a.gethousehold(), a.setData({
                        add: s,
                        student: t.member,
                        house: t.household,
                        passes: []
                    }, function() {
                        a.getMyPass();
                    }));
                }), s || a.getCodebind();
            } else t.data.Error ? e.default.fail(t.data.Error) : e.default.fail("服务器繁忙，请稍后重试");
        });
    },
    gethousehold: function(t) {
        var a = this;
        t && e.default.loading({
            duration: 0,
            message: "加载中.",
            context: this
        }), l.services("api/app/community/household/simple/details").get({
            id: u,
            force: !0
        }).then(function(t) {
            wx.stopPullDownRefresh(), e.default.clear(), t && t.data.Success ? a.setData({
                house: t.data.Result,
                error: !1,
                passes: []
            }, function() {
                a.getMyPass();
            }) : t.data.Error ? e.default.fail(t.data.Error) : a.setData({
                error: !1
            });
        }), l.services("api/app/community/stat/v2").get({
            hid: u
        }).then(function(t) {
            t && t.data.Success && a.setData({
                stat: t.data.Result
            });
        });
    },
    getApply: function() {
        var t = this, a = {
            s: 5,
            uid: l.globalData.self.id,
            sort: "created",
            asc: !1
        };
        u && (a.hid = u), l.services("api/app/community/household/application").get(a).then(function(a) {
            wx.stopPullDownRefresh(), a && a.data.Success && (a.data.Result.Data.map(function(t) {
                t.createdTxt = (0, i.default)(t.created).format("MM-DD HH:mm");
            }), t.setData({
                apply: a.data.Result.Data
            }), e.default.clear());
        });
    },
    getleaveApply: function() {
        var t = this, a = {
            s: 5,
            uid: l.globalData.self.id,
            sort: "created",
            asc: !1
        };
        u && (a.hid = u), l.services("api/app/community/guet/leaveschoolapplication").get(a).then(function(a) {
            wx.stopPullDownRefresh(), a && a.data.Success && (a.data.Result.Data.map(function(t) {
                t.createdTxt = (0, i.default)(t.created).format("MM-DD HH:mm");
            }), t.setData({
                leaveapply: a.data.Result.Data
            }), e.default.clear());
        });
    },
    getMyPass: function() {
        var t = this;
        l.services("api/app/community/pass/canapply/guet/student").get().then(function(a) {
            if (e.default.clear(), wx.stopPullDownRefresh(), a && a.data.Success) {
                var s = function(t) {
                    var e = "";
                    switch (t.limit_type) {
                      case 0:
                        t.expiredday && (e += "共" + t.expiredday + "天有效时间。"), t.expired && (t.expiredTxt = (0, 
                        i.default)(t.expired).format("YYYY-MM-DD "), e += "通行证有效日期：" + t.expiredTxt + "，"), 
                        t.limit.time_periods && (e += "有效时段:", t.limit.time_periods.map(function(t, a) {
                            t.startTxt = (0, i.default)((0, i.default)().format("YYYY-MM-DD 00:00:00")).add(t.start, "minutes").format("HH:mm"), 
                            t.endTxt = (0, i.default)((0, i.default)().format("YYYY-MM-DD 00:00:00")).add(t.end, "minutes").format("HH:mm"), 
                            e += t.startTxt + "-" + t.endTxt + "  ";
                        }), e += ",有效期内可以进出桂电,"), e += "进出不限次数。" + t.desc;
                        break;

                      case 1:
                        e = "每" + t.limit.cycle + "天可使用" + t.limit.times + "次", t.id && (e += "，剩" + (t.limit.times - (t.limit.use_times || 0)) + "次");
                        break;

                      case 2:
                        e = "总" + t.limit.times + "次", t.id && (e += "，剩" + (t.limit.times - (t.limit.use_times || 0)) + "次");
                    }
                    return t.state, e;
                }, n = a.data.Result;
                n.map(function(t) {
                    t.desc = s(t);
                }), t.setData({
                    passes: n
                }), e.default.clear();
            }
        });
    },
    previewImage2: function(t) {
        var e = t.currentTarget.dataset.url, a = [];
        a.push(e), wx.previewImage({
            current: e,
            urls: a
        });
    },
    godetail: function() {
        wx.navigateTo({
            url: "/pages/householdStudentList/index?id=" + u + "&university=true"
        });
    },
    goCardDetail: function() {
        wx.navigateTo({
            url: "/pages/itineraryProve/index"
        });
    },
    goapply: function() {
        wx.navigateTo({
            url: "/pages/houseJionUserApply/index?hid=" + u
        });
    },
    onShareAppMessage: function() {
        return {
            title: "欢迎大家加入" + this.data.house.group.name + this.data.house.name,
            path: "/pages/householdStudentApply/index?id=" + u
        };
    },
    goLeaveSchool: function() {
        wx.navigateTo({
            url: "/pages/leaveschoolapplication/index?type=0"
        });
    },
    onPullDownRefresh: function() {
        this.inintData(!0);
    },
    goLeave: function() {
        wx.navigateTo({
            url: "/pages/leave/index"
        });
    }
});