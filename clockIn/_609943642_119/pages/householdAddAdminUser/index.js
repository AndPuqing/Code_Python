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
}, a = (t(require("../../utils/we-moment-with-locales")), t(require("vant-weapp/toast/toast"))), s = t(require("vant-weapp/dialog/dialog")), i = getApp(), n = "", u = "";

Page({
    data: {
        actions: [ {
            name: "管理员",
            id: "admin"
        }, {
            name: "助理",
            id: "assistant"
        } ],
        userList: {}
    },
    onLoad: function(t) {
        n = t.id, this.getUser(), this.setData({
            UserInBuildingRoleTags: i.globalData.enums.UserInBuildingRoleTags
        });
    },
    inputChange: function(t) {
        u = t.detail;
    },
    onChange: function(t) {
        this.setData({
            result: t.detail
        });
    },
    getUser: function(t) {
        var s = this, u = {
            id: n
        };
        i.services("api/app/community/building/details").get(u).then(function(t) {
            if (t && t.data.Success) {
                var i = [];
                t.data.Result.users && t.data.Result.users.map(function(a) {
                    t.data.Result.uids.map(function(t) {
                        a.id == t.uid && i.push(e({}, a, t));
                    });
                }), s.setData({
                    users: i
                });
            } else a.default.fail(t.data.Error);
        });
    },
    toggle: function(t) {
        var e = t.currentTarget.dataset.index;
        this.selectComponent(".checkboxes-" + e).toggle();
    },
    noop: function() {},
    onCheckboxChange: function(t) {
        console.log(t), this.setData({
            checkboxresult: t.detail
        });
    },
    deleteUser: function() {
        var t = this, e = this.data.checkboxresult;
        0 != e.length && s.default.alert({
            title: "提示",
            message: "您确定要删除" + e.length + "个用户吗?",
            showCancelButton: !0
        }).then(function(s) {
            var u = {
                id: n,
                uids: e,
                add: !1
            };
            i.services("api/app/community/building/users").post(u).then(function(e) {
                e && e.data.Success ? (a.default.success("删除成功"), t.getUser()) : a.default.fail(e.data.Error);
            });
        });
    },
    searchUser: function() {
        var t = this, e = {
            key: u,
            s: 1
        };
        11 == u.length ? i.services("api/user").get(e).then(function(e) {
            e && e.data.Success ? e.data.Result.Data.length > 0 ? t.setData({
                userList: e.data.Result.Data[0]
            }) : (t.setData({
                userList: {}
            }), (0, a.default)("查找不到该手机号用户")) : a.default.fail(e.data.Error);
        }) : (0, a.default)("请输入正确的手机号");
    },
    save: function() {
        var t = this, e = this.data, s = (e.checkboxresult, e.result), r = e.userList, l = {
            id: n,
            add: !0,
            roles: s,
            uids: [ u ]
        };
        11 == u.length ? r.id ? i.services("api/app/community/building/users").post(l).then(function(e) {
            e && e.data.Success ? (a.default.success("添加成功"), t.setData({
                result: [],
                phone: ""
            }), t.getUser()) : a.default.fail(e.data.Error);
        }) : i.services("api/user").get({
            key: u
        }).then(function(e) {
            e && e.data.Success ? e.data.Result.Data.length > 0 ? i.services("api/app/community/building/users").post(l).then(function(e) {
                e && e.data.Success ? (a.default.success("添加成功"), t.setData({
                    result: [],
                    phone: ""
                }), t.getUser()) : a.default.fail(e.data.Error);
            }) : (t.setData({
                userList: {}
            }), (0, a.default)("查找不到该手机号用户")) : a.default.fail(e.data.Error);
        }) : (0, a.default)("请输入正确的手机号");
    }
});