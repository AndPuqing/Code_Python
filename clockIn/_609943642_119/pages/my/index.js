function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (t[s] = a[s]);
    }
    return t;
}, a = t(require("../../common/page")), s = t(require("../../utils/config")), i = t(require("vant-weapp/toast/toast")), o = getApp(), n = [];

(0, a.default)({
    data: {},
    onLoad: function(t) {
        this.setData({
            key: s.default.key,
            version: s.default.version
        });
    },
    onShow: function() {
        var t = this;
        if (o.globalData.self) {
            var e = !1;
            o.globalData.self.roles && o.globalData.self.roles.indexOf("Administrator") > -1 && (e = !0), 
            this.setData({
                userInfo: o.globalData.userInfo,
                self: o.globalData.self,
                administrator: e
            });
        }
        this.getStudent(), o.globalData.self || o.services("api/user/self/v2").get().then(function(e) {
            e.data.Success && (o.globalData.self = e.data.Result, t.setData({
                userInfo: o.globalData.userInfo,
                self: o.globalData.self
            }));
        }), this.gethousehold(), this.getAdminhousehold(), this.getAdminData();
    },
    getAdminData: function() {
        if (o.globalData.self && o.globalData.self.admins && o.globalData.self.admins.in_groups) {
            var t = !1;
            o.globalData.self.admins.in_groups.map(function(e) {
                [ 2020020701, 2020020703, 2020020704, 2, 0 ].indexOf(e.type) > -1 && e.in_group_roles.indexOf("admin") > -1 && (t = !0);
            }), this.setData({
                isUnitAdmin: t
            });
        }
    },
    gethousehold: function() {
        var t = this;
        o.services("api/app/community/household").get({
            myhome: !0,
            s: 99,
            stat: !0
        }).then(function(e) {
            if (wx.stopPullDownRefresh(), e && e.data.Success) {
                var a = [];
                e.data.Result.Data.map(function(t) {
                    t.tags && t.tags.indexOf("school") > -1 && a.push(t);
                }), t.setData({
                    household: e.data.Result.Data,
                    shcool: a
                });
            }
        });
    },
    getAdminhousehold: function() {
        var t = this;
        o.services("api/app/community/building/admins").get().then(function(e) {
            if (wx.stopPullDownRefresh(), e && e.data.Success) {
                e.data.Result.households && (n = e.data.Result.households);
                var a = !1;
                e.data.Result.buildings && e.data.Result.buildings.map(function(t) {
                    "2020020701" == t.type && (a = !0);
                }), t.setData({
                    admins: e.data.Result.buildings,
                    buildingAdmin: a
                });
            }
        });
    },
    getwhiteList: function() {
        var t = this;
        o.services("api/app/community/checkpoint").get({
            s: 99,
            can_add_whitelist_user: !0
        }).then(function(a) {
            if (wx.stopPullDownRefresh(), a && a.data.Success) {
                var s = [];
                a.data.Result.Data.map(function(t) {
                    n.map(function(a) {
                        t.hids.indexOf(a.id) > -1 && (a.admins || a.owner) && s.push({
                            house: e({}, a),
                            group: t.group
                        });
                    });
                }), console.log(s), t.setData({
                    whitelist: s
                });
            }
        });
    },
    getStudent: function(t) {
        var e = this, a = {
            s: 99
        };
        t && (a.force = !0), o.services("api/app/community/household/students").get(a).then(function(t) {
            wx.stopPullDownRefresh(), t && t.data.Success && e.setData({
                students: t.data.Result
            });
        });
    },
    loginOut: function() {
        o.globalData.self = {}, o.services = {}, this.setData({
            self: {}
        }), wx.clearStorage(), wx.redirectTo({
            url: "/pages/wxlog/index?auto=true",
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    goUrl: function(t) {
        o.loginData && wx.navigateTo({
            url: t.currentTarget.dataset.url,
            success: function() {
                i.default.clear();
            },
            fail: function() {
                (0, i.default)("模块加载失败");
            }
        });
    },
    gohouseDetail: function(t) {
        var e = t.currentTarget.dataset.item;
        console.log(e);
        var a = "";
        a = e.tags && e.tags.indexOf("school") > -1 ? "/pages/webviewHousehold/index?url=/school/classdetail&id=" + e.id : "/pages/webviewHousehold/index?url=/building/detail&id=" + e.building.id, 
        wx.navigateTo({
            url: a
        });
    },
    gohouseApplyDetail: function(t) {
        "5e9662c03c974c00019f447f" == t.currentTarget.dataset.item.group.id ? wx.navigateTo({
            url: "/pages/householdUniversity/index?id=" + t.currentTarget.dataset.item.id
        }) : wx.navigateTo({
            url: "/pages/householdStudentApply/index?id=" + t.currentTarget.dataset.item.id
        });
    },
    gominiProgram: function() {
        wx.navigateToMiniProgram({
            appId: "wx28197fe0459851c7",
            path: "pages/ScanTransition?scene=02679151490338295808",
            success: function(t) {}
        });
    },
    gologin: function() {
        wx.navigateTo({
            url: "/pages/wxlog/index"
        });
    },
    onPullDownRefresh: function() {
        var t = this;
        this.gethousehold(), this.getAdminhousehold(), this.getStudent(!0), o.services("api/app/community/household/rebind").get().then(function(t) {}), 
        o.services("api/user/self").get({
            force: !0
        }).then(function(e) {
            if (e.data.Success) {
                o.globalData.self.roles && o.globalData.self.roles.indexOf("Administrator") > -1 && !0, 
                o.globalData.self = e.data.Result, t.setData({
                    self: o.globalData.self,
                    administrator: !0
                });
            }
        });
    }
});