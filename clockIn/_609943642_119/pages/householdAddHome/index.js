var a = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("vant-weapp/toast/toast")), e = getApp(), t = "", l = "";

Page({
    data: {},
    onLoad: function(a) {
        console.log(a), t = a.areaid, l = a.bid, this.setData({
            self: e.globalData.self
        });
    },
    save: function(o) {
        var n = {
            no: o.detail.value.no ? o.detail.value.no : "",
            name: o.detail.value.name,
            uid: e.globalData.self.id,
            areaid: t,
            bid: l
        };
        o.detail.value.name ? o.detail.value.no ? (console.log(n), e.services("api/app/community/household").post(n).then(function(e) {
            e && e.data.Success ? (a.default.success("添加成功"), setTimeout(function() {
                wx.navigateBack({
                    delta: 2,
                    complete: function(a) {}
                });
            }, 1e3)) : a.default.fail(e.data.Error);
        })) : (0, a.default)("请输入您的门牌号") : (0, a.default)("请输入您的房间名");
    }
});