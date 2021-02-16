function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("vant-weapp/toast/toast")), a = e(require("../../utils/we-moment-with-locales")), i = getApp(), s = "";

Page({
    data: {
        imgs: []
    },
    onLoad: function(e) {
        s = e.id, this.getDetail(), this.getReview();
    },
    getDetail: function() {
        var e = this;
        i.services("api/app/help/feedback/details").get({
            id: s
        }).then(function(s) {
            s.data && s.data.Result ? (s.data.Result.createdTxt = (0, a.default)(s.data.Result.created).format("YYYY-MM-DD HH:mm:ss"), 
            e.setData({
                HelpFeedbackStateEnums: i.globalData.enums.HelpFeedbackStateEnums,
                detail: s.data.Result
            })) : t.default.fail(s.data.Error);
        });
    },
    getReview: function() {
        var e = this;
        i.services("api/app/help/feedback/reviews").get({
            id: s,
            s: 999,
            asc: !0
        }).then(function(i) {
            if (i.data && i.data.Result) {
                var s = i.data.Result.Data;
                s.map(function(e) {
                    e.timeTxt = (0, a.default)(new Date()).locale("zh-cn").from((0, a.default)(e.time), !0).replace(/\s*/g, "");
                }), e.setData({
                    review: s
                });
            } else t.default.fail(i.data.Error);
        });
    },
    getTextareaValue: function(e) {
        this.setData({
            textarea: e.detail
        });
    },
    getImgs: function(e) {
        this.setData({
            videos: e.detail.video,
            imgs: e.detail.imgs,
            progress: e.detail.progress
        });
    },
    previewImage2: function(e) {
        var t = e.currentTarget.dataset.img, a = e.currentTarget.dataset.imgs;
        wx.previewImage({
            current: t,
            urls: a
        });
    },
    save: function() {
        var e = this, a = this.data, r = a.imgs, d = (a.title, a.textarea), l = (a.progress, 
        {
            imgs: r,
            id: s,
            contents: d
        });
        d ? (t.default.loading({
            mask: !0,
            duration: 0,
            message: "提交中..."
        }), i.services("api/app/help/feedback/review").post(l).then(function(a) {
            a.data && a.data.Result ? (e.getReview(), e.setData({
                textarea: "",
                imgs: []
            }), e.getDetail()) : t.default.fail(a.data.Error);
        })) : (0, t.default)("请输入回复内容");
    }
});