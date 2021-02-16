function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("vant-weapp/toast/toast")), e = (t(require("../../utils/restfulApi")), 
t(require("../../utils/we-moment-with-locales"))), s = getApp(), l = "";

Page({
    data: {},
    onLoad: function(t) {
        console.log(t), l = t.token;
        var a = [];
        if (s.globalData.enums) for (var e in s.globalData.enums.CheckpointPassFlagEnums) (Number(t.flags) & e) == e && (console.log(Number(t.flags), (Number(t.flags) & e) == e), 
        a.push(s.globalData.enums.CheckpointPassFlagEnums[e]));
        this.setData({
            actions: a
        }), this.getCheckDetail();
    },
    getCheckDetail: function() {
        var t = this;
        s.services("api/app/community/person/check/v2").get({
            token: l
        }).then(function(s) {
            s && s.data.Success ? (s.data.Result.health_last && (s.data.Result.health_last.timeTxt = (0, 
            e.default)(new Date()).locale("zh-cn").from((0, e.default)(s.data.Result.health_last.modified), !0).replace(/\s*/g, "")), 
            s.data.Result.quarantines && s.data.Result.quarantines.length > 0 && s.data.Result.quarantines.map(function(t) {
                t.startTxt = (0, e.default)(t.start).format("YYYY-MM-DD"), t.endTxt = (0, e.default)(t.end).format("YYYY-MM-DD");
            }), t.setData({
                checkDetail: s.data.Result
            })) : (a.default.fail("您扫码的二维码无效或者已过期，请重新扫码"), setTimeout(function() {
                wx.navigateBack({
                    delta: 1
                });
            }, 2e3));
        });
    },
    goback: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    }
});