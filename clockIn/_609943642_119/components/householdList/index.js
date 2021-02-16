function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../utils/we-moment-with-locales")), a = e(require("vant-weapp/toast/toast")), n = e(require("vant-weapp/dialog/dialog")), s = getApp(), i = {};

Component({
    properties: {
        show: {
            type: Boolean,
            observer: function(e, t) {
                this.gethousehold();
            }
        }
    },
    data: {
        relations: [ {
            name: "户主"
        }, {
            name: "亲属"
        }, {
            name: "租客"
        }, {
            name: "工人"
        }, {
            name: "其他"
        } ],
        meid: ""
    },
    ready: function() {
        getApp() && getApp().services() && this.gethousehold();
    },
    methods: {
        gethousehold: function() {
            var e = this;
            getApp().services("api/app/community/household").get({
                myhome: !0,
                s: 99,
                stat: !0
            }).then(function(a) {
                if (wx.stopPullDownRefresh(), a && a.data.Success) {
                    var n = "";
                    s.globalData.self && s.globalData.self.id && (n = s.globalData.self.id);
                    var i = [];
                    a.data.Result.Data.map(function(e) {
                        e.members && e.members.map(function(a) {
                            n && a.uid && a.uid == n && a.tag && a.tag.indexOf("户主") > -1 && (e.houseadmin = !0), 
                            a.health && a.health.time && (a.health.timeTxt = (0, t.default)(new Date()).locale("zh-cn").from((0, 
                            t.default)(a.health.time), !0).replace(/\s*/g, ""));
                        }), i.push({
                            id: e.id,
                            name: e.group ? e.group.name : "" + e.no
                        });
                    }), e.setData({
                        meid: n,
                        household: a.data.Result.Data,
                        actions: i,
                        active: i.length ? i[0] : {}
                    });
                }
            });
        },
        deleteUser: function(e) {
            var t = this, s = e.currentTarget.dataset, i = s.index, o = s.item, r = {
                id: o.id,
                __version: 1,
                members: o.members
            };
            r.members.splice(i, 1), n.default.alert({
                title: "提示",
                message: "您确定要删除该成员吗?",
                showCancelButton: !0
            }).then(function(e) {
                getApp().services("api/app/community/household/details").get({
                    id: o.id
                }).then(function(e) {
                    e.data.Success ? (r.__version = e.data.Result.__version, getApp().services("api/app/community/household/members").post(r).then(function(e) {
                        e && e.data.Success ? (a.default.success("删除成功"), t.gethousehold()) : a.default.fail(e.data.Error);
                    })) : a.default.fail(e.data.Error);
                });
            });
        },
        resetUser: function(e) {
            var t = this.data.household, a = e.currentTarget.dataset, n = a.parentindex, s = a.index, o = a.user, r = {}, d = {}, u = t[n].members[s].name, l = t[n].members[s].phone, h = {
                name: t[n].members[s].tag
            };
            r = {
                name: t[n].group.name,
                id: t[n].id
            }, i = o, t[n].members.splice(s, 1), d = t[n], this.setData({
                name: u,
                phone: l,
                relation: h,
                household: t,
                userType: !0,
                active: r,
                house: d,
                vanshow: !0
            });
        },
        toggle: function(e) {
            console.log(e);
            var t = this.data, a = t.name, n = t.phone, s = t.relation, o = {}, r = {};
            e && e.currentTarget.dataset.active && (o = {
                name: e.currentTarget.dataset.active.group.name,
                id: e.currentTarget.dataset.active.id
            }, r = e.currentTarget.dataset.active), e && "close" == e.currentTarget.dataset.type && (a = "", 
            n = "", s = {}, o = {}, i = {}, this.gethousehold()), this.setData({
                name: a,
                phone: n,
                relation: s,
                active: o,
                house: r,
                vanshow: !this.data.vanshow,
                userType: !1
            });
        },
        toggleRelation: function() {
            this.setData({
                relationshow: !this.data.relationshow
            });
        },
        onrelationSelect: function(e) {
            this.setData({
                relation: e.detail
            });
        },
        changename: function(e) {
            this.setData({
                name: e.detail
            });
        },
        changetel: function(e) {
            this.setData({
                phone: e.detail
            });
        },
        qiutHouse: function(e) {
            var t = this, s = e.currentTarget.dataset.hid;
            n.default.alert({
                title: "提示",
                message: "您确定要退出该房间吗?",
                showCancelButton: !0
            }).then(function(e) {
                getApp().services("api/app/community/household/quit").get({
                    id: s
                }).then(function(e) {
                    e.data.Success ? ((0, a.default)("退出成功"), t.gethousehold()) : (0, a.default)(e.data.Error);
                });
            });
        },
        save: function(e) {
            var t = this, n = this.data, s = n.active, o = (n.phone, n.name, n.house), r = n.relation, d = {
                id: s.id,
                members: []
            };
            if (e.detail.value.name) if (r && r.name) {
                o.members && o.members.map(function(e) {
                    var t = {
                        name: e.name,
                        phone: e.phone
                    };
                    e.tag && (t.tag = e.tag), e.uid && (t.uid = e.uid), d.members.push(t);
                });
                var u = {
                    name: e.detail.value.name,
                    phone: e.detail.value.phone ? e.detail.value.phone : "",
                    tag: r.name
                };
                i.uid && (u.uid = i.uid), d.members.push(u), this.toggle(), i = {}, getApp().services("api/app/community/household/details").get({
                    id: o.id
                }).then(function(e) {
                    e.data.Success ? (d.__version = e.data.Result.__version, getApp().services("api/app/community/household/members").post(d).then(function(e) {
                        e && e.data.Success ? (a.default.success("操作成功"), t.setData({
                            phone: "",
                            relation: {},
                            name: ""
                        }), t.gethousehold()) : a.default.fail(e.data.Error);
                    })) : a.default.fail(res.data.Error);
                });
            } else (0, a.default)({
                message: "请选择亲属关系",
                zIndex: 1e5
            }); else (0, a.default)({
                message: "请填写正确的姓名",
                zIndex: 1e5
            });
        },
        goAddItinerary: function(e) {
            wx.navigateTo({
                url: "/pages/itineraryAdd/index?id=" + e.currentTarget.dataset.id
            });
        },
        goAddHealth: function(e) {
            var t = "";
            e.currentTarget.dataset.id ? t += "id=" + e.currentTarget.dataset.id + "&name=" + e.currentTarget.dataset.name : t += "name=" + e.currentTarget.dataset.name + "&hid=" + e.currentTarget.dataset.hid, 
            wx.navigateTo({
                url: "/pages/healthLineAdd/index?" + t
            });
        },
        shareUser: function() {}
    }
});