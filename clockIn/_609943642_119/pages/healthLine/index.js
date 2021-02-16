function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../utils/we-moment-with-locales")), a = t(require("vant-weapp/toast/toast")), i = t(require("vant-weapp/dialog/dialog")), s = t(require("../../utils/config")), d = getApp();

Page({
    data: {
        result: [],
        active: {}
    },
    onLoad: function(t) {
        console.log((0, e.default)().isBetween("2020-2-24", "2010-10-26"));
    },
    onShow: function() {
        var t = this;
        if ((this.data.active.id || this.data.active.name) && this.getlog(), !this.data.active.id && !this.data.active.name && d.globalData.self) {
            var e = {};
            e = d.globalData.self, this.setData({
                active: e
            }, function() {
                t.getlog();
            });
        }
        this.getmembers();
    },
    onReady: function() {
        this.getlog();
    },
    getmembers: function() {
        var t = this;
        d.services("api/app/community/household/members").get({
            s: 10
        }).then(function(e) {
            if (e && e.data.Success) {
                var a = [];
                e.data.Result.map(function(t) {
                    var e = {
                        id: t.uid,
                        name: t.name
                    };
                    t.hids && t.hids.length > 0 && (e.hid = t.hids[0]), t.user && t.user.photo && (e.photo = t.user.photo), 
                    a.push(e);
                }), t.setData({
                    members: a
                });
            }
        });
    },
    getlog: function() {
        var t = this, i = this.data.active, s = {
            s: 30,
            p: 1,
            start: "2020-08-01 00:00:00"
        };
        i.id ? s.member_uid = i.id : s.key = i.name, a.default.loading({
            mask: !0,
            duration: 0,
            message: "加载中..."
        }), d.services("api/app/community/health/daily").get(s).then(function(i) {
            if (a.default.clear(), i && i.data.Success) {
                i.data.Result.Data.map(function(t) {
                    (0, e.default)().isBetween((0, e.default)((0, e.default)().format("YYYY-MM-DD 12:00:00")).subtract(1, "days"), (0, 
                    e.default)((0, e.default)().format("YYYY-MM-DD 12:00:00")), "seconds") ? (0, e.default)(t.created).isBetween((0, 
                    e.default)((0, e.default)().format("YYYY-MM-DD 12:00:00")).subtract(1, "days"), (0, 
                    e.default)((0, e.default)().format("YYYY-MM-DD 12:00:00")), "seconds") && (t.btn = !0) : (0, 
                    e.default)((0, e.default)().format("YYYY-MM-DD 12:00:00")).isBefore((0, e.default)()) ? (0, 
                    e.default)(t.created).isBetween((0, e.default)((0, e.default)().format("YYYY-MM-DD 12:00:00")), (0, 
                    e.default)((0, e.default)()), "seconds") && (t.btn = !0) : t.btn = !1, t.createdTxt = (0, 
                    e.default)(t.created).format("YYYY-MM-DD HH:mm");
                }), t.setData({
                    list: i.data.Result.Data
                });
            } else a.default.fail(i.data.Error);
        });
    },
    dialogtoggle: function() {
        var t = "reset=true&";
        this.data.active.id ? t += "id=" + this.data.active.id + "&name=" + this.data.active.name : t += "name=" + this.data.active.name + "&hid=" + this.data.active.hid, 
        "ncov" == s.default.key ? wx.navigateTo({
            url: "/pages/healthLineAdd2/index?" + t
        }) : wx.navigateTo({
            url: "/pages/healthLineAdd/index?" + t
        });
    },
    toggleSheet: function() {
        this.setData({
            sheetshow: !this.data.sheetshow
        });
    },
    select: function(t) {
        var e = this;
        this.setData({
            active: t.detail
        }, function() {
            e.getlog();
        });
    },
    deletItem: function(t) {
        var e = this, s = t.currentTarget.dataset.id;
        i.default.alert({
            title: "提示",
            message: "您确定要删除该记录吗?",
            showCancelButton: !0
        }).then(function(t) {
            d.services("api/app/community/health/daily/disable").get({
                id: s,
                disabled: !0
            }).then(function(t) {
                t && t.data.Success ? (a.default.success("删除成功"), e.getlog()) : a.default.fail(t.data.Error);
            });
        });
    }
});