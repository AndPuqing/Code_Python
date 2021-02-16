function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../utils/we-moment-with-locales")), a = t(require("../../miniprogram_npm/vant-weapp/toast/toast")), n = getApp(), i = "";

Page({
    data: {
        nodes: [],
        html: ""
    },
    onLoad: function(t) {
        this.context = this.selectComponent("#article"), console.log(this.context), i = t.id, 
        this.getDetail();
    },
    getDetail: function() {
        var t = this, s = {
            id: i
        };
        a.default.loading({
            duration: 0,
            message: "加载中..."
        }), n.services("api/app/cms/details").get(s).then(function(n) {
            if (n.data && n.data.Result) {
                var i = n.data.Result;
                i.publishedTime = (0, e.default)(i.published).format("YYYY-MM-DD HH:mm:ss"), t.context.setContent(i.contents), 
                t.setData({
                    news: i,
                    html: i.contents,
                    loading: !1
                }, function() {
                    a.default.clear();
                });
            } else t.setData({
                loading: !1
            }), a.default.fail(n.data.Error);
        });
    }
});