function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var t = a(require("vant-weapp/toast/toast")), e = a(require("vant-weapp/dialog/dialog")), s = a(require("../../utils/we-moment-with-locales")), i = a(require("../../utils/config")), n = getApp(), l = null;

Page({
    data: {
        passvalid: !0
    },
    onLoad: function(a) {
        if (console.log(a), a.no) l = a.no; else if (a.q) {
            var e = decodeURIComponent(a.q), s = [];
            e.indexOf("https") > -1 && (e.indexOf(i.default.shost) > -1 || e.indexOf(i.default.ahost) > -1) && e.indexOf("pass") > -1 ? (s = e.split("/"), 
            l = s[s.length - 1].split("=")[1]) : (this.setData({
                passvalid: !0
            }), t.default.fail("请重新扫码"));
        }
        l && this.setData({
            no: l
        });
    },
    onShow: function() {
        if (n.loginData ? e.default.close() : e.default.alert({
            title: "提示",
            message: "您还未登录，请跳转登录后继续"
        }).then(function(a) {
            wx.navigateTo({
                url: "/pages/wxlog/index"
            });
        }), n.globalData.self) {
            var a = !1;
            n.globalData.self.admins && n.globalData.self.admins.in_groups && n.globalData.self.admins.in_groups.map(function(t) {
                (t.in_group_roles.indexOf("community.inspector") > -1 || t.in_group_roles.indexOf("admin") > -1) && (a = !0);
            }), this.setData({
                self: n.globalData.self,
                admins: a
            });
        }
        this.getCardDetail();
    },
    getCardDetail: function() {
        var a = this;
        n.services("api/user/self").get().then(function(t) {
            if (wx.stopPullDownRefresh(), t && t.data.Success) {
                var e = !1;
                n.globalData.self = t.data.Result, n.globalData.self.admins && n.globalData.self.admins.in_groups && n.globalData.self.admins.in_groups.map(function(a) {
                    (a.in_group_roles.indexOf("community.inspector") > -1 || a.in_group_roles.indexOf("admin") > -1) && (e = !0);
                }), a.setData({
                    self: n.globalData.self,
                    admins: e
                });
            }
        }), n.services("api/app/community/pass/purchase/valid").get({
            no: l
        }).then(function(t) {
            wx.stopPullDownRefresh(), t && t.data.Success && a.setData({
                passvalid: t.data.Result
            });
        }), n.services("api/app/community/pass/details").get({
            id: l
        }).then(function(e) {
            if (wx.stopPullDownRefresh(), e && e.data.Success) {
                var i = e.data.Result;
                if (i.issuedTxt = (0, s.default)(i.issued).format("YYYY年MM月DD日"), i.limit) {
                    i.text = function(a) {
                        var t = null;
                        switch (a.limit_type) {
                          case 0:
                            t = "不限次数";
                            break;

                          case 1:
                            t = "每" + a.limit.cycle + "天可使用" + a.limit.times + "次", a.id && (t += "，剩余" + (a.limit.times - (a.limit.use_times || 0)) + "次");
                            break;

                          case 2:
                            t = "总" + a.limit.times + "次", a.id && (t += "，剩" + (a.limit.times - (a.limit.use_times || 0)) + "次");
                        }
                        return a.state, t;
                    }(i);
                }
                var l = {
                    card: i,
                    CommunityPassTypeEnums: n.globalData.enums.CommunityPassTypeEnums,
                    CommunityPassLimitTypeEnums: n.globalData.enums.CommunityPassLimitTypeEnums
                };
                a.setData(l);
            } else a.setData({
                card: {}
            }), "对象未找到。" == e.data.Error || "您没有登录或者无权访问该内容。" == e.data.Error || (0, t.default)(e.data.Error);
        });
    },
    goBindCard: function(a) {
        var t = a.currentTarget.dataset.type;
        console.log(t), 2 == t ? wx.navigateTo({
            url: "/pages/passportAdminBind/index?no=" + l
        }) : wx.navigateTo({
            url: "/pages/passportBind/index?no=" + l
        });
    },
    unBindCard: function() {
        var a = this;
        e.default.alert({
            title: "提示",
            message: "您确定要解绑该通行证吗?",
            showCancelButton: !0
        }).then(function(e) {
            n.services("api/app/community/pass/purchase/unbind").get({
                no: l
            }).then(function(e) {
                e && e.data.Success ? (a.getCardDetail(), t.default.success("解绑成功")) : t.default.fail(e.data.Error);
            });
        });
    },
    goUseCard: function() {
        wx.navigateTo({
            url: "/pages/passportCheck/index?no=" + l
        });
    },
    goback: function() {
        wx.reLaunch({
            url: "/pages/index/index"
        });
    },
    onPullDownRefresh: function() {
        this.getCardDetail();
    }
});