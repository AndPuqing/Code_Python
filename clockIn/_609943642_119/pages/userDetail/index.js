function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("vant-weapp/toast/toast")), a = (t(require("../../utils/restfulApi")), 
t(require("../../utils/we-moment-with-locales"))), i = getApp(), l = "";

Page({
    data: {
        colorType: {
            1: "红色",
            2: "黄色",
            3: "绿色"
        }
    },
    onLoad: function(t) {
        l = t.id, this.getDetail();
    },
    getDetail: function() {
        var t = this;
        i.services("api/app/community/person/details").get({
            id: l
        }).then(function(i) {
            e.default.clear(), i && i.data.Success && (i.data.Result.health && (i.data.Result.health.createdTxt = (0, 
            a.default)(i.data.Result.health.created).format("YYYY-MM-DD HH:mm")), i.data.Result.itinerary.length > 0 && i.data.Result.itinerary.map(function(t) {
                t.dayTxt = (0, a.default)(t.day).format("YYYY-MM-DD");
            }), t.setData({
                detail: i.data.Result
            }));
        });
    }
});