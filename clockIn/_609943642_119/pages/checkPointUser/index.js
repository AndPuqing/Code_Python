function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

t(require("../../utils/we-moment-with-locales"));

var e = t(require("vant-weapp/toast/toast")), a = t(require("vant-weapp/dialog/dialog")), s = getApp(), u = "", r = "";

Page({
    data: {
        actions: [ {
            name: "负责人",
            id: "admin"
        }, {
            name: "检查员",
            id: "community.inspector"
        } ],
        userList: {}
    },
    onLoad: function(t) {
        u = t.id, this.getUser(), this.setData({
            UserInGroupRoleTags: s.globalData.enums.UserInGroupRoleTags
        });
    },
    inputChange: function(t) {
        r = t.detail;
    },
    onChange: function(t) {
        this.setData({
            result: t.detail
        });
    },
    getUser: function(t) {
        var a = this, r = {
            id: u,
            s: 999
        };
        s.services("api/group/users").get(r).then(function(t) {
            t && t.data.Success ? a.setData({
                users: t.data.Result && t.data.Result.Data ? t.data.Result.Data : []
            }) : e.default.fail(t.data.Error);
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
        var t = this, r = this.data.checkboxresult;
        0 != r.length && a.default.alert({
            title: "提示",
            message: "您确定要删除" + r.length + "个用户吗?",
            showCancelButton: !0
        }).then(function(a) {
            var n = {
                id: u,
                uids: r,
                add: !1
            };
            s.services("api/group/users").post(n).then(function(a) {
                a && a.data.Success ? (e.default.success("删除成功"), t.getUser()) : e.default.fail(a.data.Error);
            });
        });
    },
    searchUser: function() {
        var t = this, a = {
            key: r,
            s: 1
        };
        11 == r.length ? s.services("api/user").get(a).then(function(a) {
            a && a.data.Success ? a.data.Result.Data.length > 0 ? t.setData({
                userList: a.data.Result.Data[0]
            }) : (t.setData({
                userList: {}
            }), (0, e.default)("查找不到该手机号用户")) : e.default.fail(a.data.Error);
        }) : (0, e.default)("请输入正确的手机号");
    },
    save: function() {
        var t = this, a = this.data, n = (a.checkboxresult, a.result), i = a.userList, o = {
            id: u,
            add: !0,
            roles: n,
            uids: [ r ]
        };
        11 == r.length ? (console.log(i), i.id ? s.services("api/group/users").post(o).then(function(a) {
            a && a.data.Success ? (e.default.success("添加成功"), t.setData({
                result: [],
                phone: ""
            }), t.getUser()) : e.default.fail(a.data.Error);
        }) : s.services("api/user").get({
            key: r
        }).then(function(a) {
            a && a.data.Success ? a.data.Result.Data.length > 0 ? s.services("api/group/users").post(o).then(function(a) {
                a && a.data.Success ? (e.default.success("添加成功"), t.setData({
                    result: [],
                    phone: ""
                }), t.getUser()) : e.default.fail(a.data.Error);
            }) : (t.setData({
                userList: {}
            }), (0, e.default)("查找不到该手机号用户")) : e.default.fail(a.data.Error);
        })) : (0, e.default)("请输入正确的手机号");
    }
});