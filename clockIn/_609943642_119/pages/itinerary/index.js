function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../utils/we-moment-with-locales")), e = t(require("vant-weapp/toast/toast")), i = t(require("vant-weapp/dialog/dialog")), s = getApp(), n = !1;

Page({
    data: {
        result: [],
        active: {}
    },
    onLoad: function(t) {},
    onShow: function() {
        var t = this;
        if (!this.data.active.id && !this.data.active.name && s.globalData.self) {
            var a = {};
            a = s.globalData.self, this.setData({
                active: a
            }, function() {
                t.getlog();
            });
        }
        this.data.active.id && this.getlog(), this.getmembers();
    },
    getmembers: function() {
        var t = this;
        s.services("api/app/community/household/members").get({
            s: 10
        }).then(function(a) {
            if (a && a.data.Success) {
                var e = [];
                a.data.Result.map(function(t) {
                    var a = {
                        id: t.uid,
                        name: t.name
                    };
                    t.user && t.user.photo && (a.photo = t.user.photo), e.push(a);
                }), t.setData({
                    members: e
                });
            }
        });
    },
    getlog: function() {
        var t = this, e = this.data.active;
        s.services("api/app/community/itinerary").get({
            member_uid: e.id,
            s: 20,
            asc: !0
        }).then(function(e) {
            e && e.data.Success && (e.data.Result.Data.map(function(t) {
                t.locked && (n = !0), t.dayTxt = (0, a.default)(t.day).format("MM月DD日");
            }), t.setData({
                list: e.data.Result.Data
            }));
        });
    },
    dialogtoggle: function() {
        wx.navigateTo({
            url: "/pages/itineraryAdd/index?uid=" + this.data.active.id
        });
    },
    toggleSheet: function() {
        this.setData({
            sheetshow: !this.data.sheetshow
        });
    },
    select: function(t) {
        var a = this;
        this.setData({
            active: t.detail
        }, function() {
            a.getlog();
        });
    },
    deletItem: function(t) {
        var a = this, n = t.currentTarget.dataset.id;
        i.default.alert({
            title: "提示",
            message: "您确定要删除该记录吗?",
            showCancelButton: !0
        }).then(function(t) {
            s.services("api/app/community/itinerary/disable").get({
                id: n,
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
    }
});