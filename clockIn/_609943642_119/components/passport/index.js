function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

t(require("../../utils/config"));

var a = t(require("vant-weapp/toast/toast")), e = (t(require("../../utils/we-moment-with-locales")), 
t(require("vant-weapp/dialog/dialog"))), r = getApp();

Component({
    properties: {
        activeNames: {
            type: Array,
            value: [ 0 ]
        },
        passes: Array,
        title: String,
        hid: String
    },
    data: {},
    ready: function() {
        this.setData({
            CommunityHouseholdApplicationStateEnums: r.globalData.enums ? r.globalData.enums.CommunityHouseholdApplicationStateEnums : {}
        });
    },
    methods: {
        onChange: function(t) {
            this.setData({
                activeNames: t.detail
            });
        },
        goUrl: function(t) {
            wx.navigateTo({
                url: t.currentTarget.dataset.url
            });
        },
        cancelItem: function(t) {
            var i = this, n = t.currentTarget.dataset.id;
            e.default.alert({
                title: "提示",
                message: "您确定撤销该申请吗?",
                showCancelButton: !0
            }).then(function(t) {
                r.services("api/app/community/pass/cancel").get({
                    id: n
                }).then(function(t) {
                    t && t.data.Success ? ((0, a.default)("撤销成功"), i.triggerEvent("change", {
                        data: !0
                    })) : t.data.Error ? (0, a.default)(t.data.Error) : (0, a.default)("服务器繁忙，请稍后重试");
                });
            });
        },
        goApply: function(t) {
            var e = this.data.hid;
            t.currentTarget.dataset.item.disabled ? (0, a.default)("该功能暂未开放！") : 10 != t.currentTarget.dataset.type ? wx.navigateTo({
                url: "/pages/passCardNormalApply/index?id=" + t.currentTarget.dataset.id + "&gid=" + t.currentTarget.dataset.gid + (e ? "&hid=" + e : "")
            }) : wx.navigateTo({
                url: "/pages/passCardApplication/index?id=" + t.currentTarget.dataset.id
            });
        }
    }
});