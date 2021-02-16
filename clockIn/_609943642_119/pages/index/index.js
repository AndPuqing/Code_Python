function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var t = Object.assign || function(a) {
    for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (a[s] = e[s]);
    }
    return a;
}, e = a(require("../../utils/we-moment-with-locales")), s = a(require("vant-weapp/toast/toast")), n = (a(require("vant-weapp/dialog/dialog")), 
a(require("../../utils/config"))), i = a(require("../../common/page")), o = getApp();

(0, i.default)({
    data: {
        confirUserName: !0,
        studentshow: !1
    },
    onLoad: function() {
        this.setData({
            key: n.default.key
        }), "ncov" == n.default.key && (o.globalData.realname = !0);
    },
    onShow: function() {
        this.checkPhone(), this.getData(), this.getLog();
        var a = wx.getStorageSync("passState");
        a || 0 === a ? 1 == a && this.setData({
            studentshow: !0
        }) : this.checkuserData(), "ncov" == n.default.key && this.getcityCms(), o.globalData.self && this.setData({
            confirUserName: o.globalData.realname,
            show: !this.data.show,
            self: o.globalData.self
        });
    },
    goUrl: function(a) {
        wx.navigateTo({
            url: a.currentTarget.dataset.url
        });
    },
    gotabbar: function(a) {
        wx.switchTab({
            url: a.currentTarget.dataset.url
        });
    },
    getData: function() {
        var a = this;
        o.services("api/app/community/person/stat").get().then(function(t) {
            wx.stopPullDownRefresh(), t && t.data.Success && a.setData({
                data: t.data.Result
            });
        });
    },
    getcityCms: function() {
        var a = this;
        o.services("api/app/cms").get({
            cid: "5e52abb679e0190001035b65",
            read: !0,
            s: 3
        }).then(function(t) {
            if (wx.stopPullDownRefresh(), t && t.data.Success) {
                var s = t.data.Result.Data;
                s.map(function(a) {
                    a.createdTxt = (0, e.default)(a.created).format("MM-DD HH:mm");
                }), a.setData({
                    cityNew: s
                });
            }
        });
    },
    getLog: function() {
        var a = this;
        o.globalData.self && o.globalData.self.id && o.services("api/app/community/checkpoint/pass/log").get({
            s: 5,
            uid: o.globalData.self.id
        }).then(function(t) {
            t && t.data.Success ? (t.data.Result.Data.map(function(a) {
                if (a.createdTxt = (0, e.default)(a.created).format("MM月DD日 HH:mm"), a.flagsTags = [], 
                o.globalData.enums) for (var t in o.globalData.enums.CheckpointPassFlagEnums) (a.flags & t) == t && a.flagsTags.push(o.globalData.enums.CheckpointPassFlagEnums[t]);
            }), a.setData({
                list: t.data.Result.Data
            }), s.default.clear()) : s.default.fail(t.data.Error);
        });
    },
    onShareAppMessage: function(a) {
        return {
            title: n.default.name,
            path: "/pages/index/index"
        };
    },
    goPassLog: function() {
        wx.navigateTo({
            url: "/pages/passLog/index"
        });
    },
    goNewsList: function(a) {
        wx.navigateTo({
            url: "/pages/newList/index?cid=" + a.currentTarget.dataset.cid
        });
    },
    goDetail: function(a) {
        wx.navigateTo({
            url: "/pages/newsDetail/index?id=" + a.currentTarget.dataset.item.id
        });
    },
    confirUserName: function() {
        this.setData({
            confirUserName: !this.data.confirUserName
        });
    },
    saveName: function(a) {
        console.log(a);
        var e = this.data.self, n = t({}, e, a.detail.value);
        a.detail.value.name ? (this.confirUserName(), o.services("api/user").post(n).then(function(a) {
            a && a.data.Success ? (s.default.success("修改成功"), o.services("api/user/self").get().then(function(a) {
                o.globalData.self = a.data.Result;
            }), wx.setStorage({
                key: "realName",
                data: !0
            }), o.globalData.realname = !0, o.services("api/app/community/household/fix/realname").get().then()) : (0, 
            s.default)(a.data.Error);
        })) : (0, s.default)({
            message: "请填写正确的姓名",
            zIndex: 1e5
        });
    },
    closepanel: function() {
        console.log(1);
    },
    checkuserData: function() {
        var a = this;
        o.services("api/app/community/guet/student/202009/pass/state").get({}).then(function(t) {
            t && t.data.Success && (wx.setStorage({
                key: "passState",
                data: t.data.Result
            }), 1 == t.data.Result && a.setData({
                studentshow: !0
            }));
        });
    },
    agreeRule: function() {
        s.default.loading({
            mask: !0,
            duration: 0,
            message: "加载中..."
        }), this.setData({
            studentshow: !1
        }), o.services("api/app/community/guet/student/202009/pass/apply").get({}).then(function(a) {
            a && a.data.Success ? (s.default.success("操作成功"), wx.setStorage({
                key: "passState",
                data: 2
            })) : a.data.Error ? (0, s.default)(a.data.Error) : (0, s.default)("服务器繁忙，请稍后重试");
        });
    }
});