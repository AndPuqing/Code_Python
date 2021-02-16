var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("vant-weapp/toast/toast")), e = getApp();

Page({
    data: {
        imgs: [],
        textarea: "",
        title: "",
        progress: !0
    },
    onLoad: function(t) {
        this.setData({
            HelpFeedbackStateEnums: e.globalData.enums.HelpFeedbackStateEnums
        });
    },
    onShow: function() {
        this.getlog();
    },
    getTextareaValue: function(t) {
        this.setData({
            textarea: t.detail
        });
    },
    getImgs: function(t) {
        this.setData({
            videos: t.detail.video,
            imgs: t.detail.imgs,
            progress: t.detail.progress
        });
    },
    getTitle: function(t) {
        this.setData({
            title: t.detail
        });
    },
    getlog: function() {
        var a = this;
        e.services("api/app/help/feedback").get({
            s: 999,
            me: !0,
            cid: "5e4374dd4aafa00001fceeb7"
        }).then(function(e) {
            e.data && e.data.Result ? a.setData({
                list: e.data.Result.Data
            }) : t.default.fail(e.data.Error);
        });
    },
    save: function() {
        var a = this, s = this.data, i = s.imgs, l = s.title, d = s.textarea, n = {
            imgs: i,
            cid: "5e4374dd4aafa00001fceeb7",
            contents: d,
            title: l
        };
        s.progress ? 0 != l.length ? 0 != d.length ? (console.log(i), t.default.loading({
            mask: !0,
            duration: 0,
            message: "提交中..."
        }), e.services("api/app/help/feedback").post(n).then(function(e) {
            e.data && e.data.Result ? (t.default.success("提交成功"), a.setData({
                title: "",
                textarea: "",
                imgs: []
            }), a.getlog()) : t.default.fail(e.data.Error);
        })) : t.default.fail("请输入问题描述") : t.default.fail("请输入标题") : t.default.fail("您还有视频或者图片未上传完成，请稍后重试");
    }
});