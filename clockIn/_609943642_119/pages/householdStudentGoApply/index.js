function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

e(require("../../utils/we-moment-with-locales"));

var a = e(require("vant-weapp/toast/toast")), n = e(require("vant-weapp/dialog/dialog")), i = getApp(), l = null;

Page({
    data: {
        radio: [],
        imgs: []
    },
    onLoad: function(e) {
        console.log(e), l = e.id, this.setData({
            student: !!e.student && e.student,
            self: i.globalData.self
        });
    },
    getdata: function(e) {
        this.setData(t({}, e.currentTarget.dataset.type, e.detail.value));
    },
    radio2Change: function(e) {
        this.setData({
            radio2: e.detail
        });
    },
    getImgs: function(e) {
        this.setData({
            videos: e.detail.video,
            imgs: e.detail.imgs,
            progress: e.detail.progress
        });
    },
    radioChange: function(e) {
        this.setData({
            radio: e.detail
        });
    },
    save: function(e) {
        var t = this.data, d = t.name, o = t.student_id, s = t.phone, u = t.student, r = t.radio, g = t.imgs, c = t.radio2, h = {
            student_id: o,
            name: d,
            phone: e.detail.value.phone
        };
        l && (h.hid = l), o ? d ? s || e.detail.value.phone ? 11 == e.detail.value.phone.length || 11 == s.length ? r.length > 0 && g.length < 2 ? (0, 
        a.default)("上传当地健康码“绿码”和7天内的核酸检测报告。共至少两张照片。") : (r.length > 0 && g.length > 0 && (h.imgs = g), 
        s && (h.phone = s), h.name = h.name.replace(/\s+/g, ""), h.student_id = h.student_id.replace(/\s+/g, ""), 
        c && 0 != c.length ? (console.log(h), n.default.alert({
            title: "提交前确认",
            confirmButtonText: "提交",
            message: "您申请的信息为:" + h.student_id + " " + h.name + "。请确认信息后再点击提交",
            showCancelButton: !0
        }).then(function(e) {
            a.default.loading({
                mask: !0,
                duration: 0,
                message: "提交申请中..."
            }), i.services("api/app/community/household/application").post(h).then(function(e) {
                e && e.data.Success ? wx.redirectTo({
                    url: "/pages/success/index"
                }) : e.data.Error ? a.default.fail(e.data.Error) : a.default.fail("服务器繁忙，请稍后重试");
            });
        })) : (0, a.default)("请阅读《桂林电子科技大学学生返校承诺书》并勾选")) : (0, a.default)("请输入您正确的手机号") : (0, 
        a.default)("请输入您的手机号") : (0, a.default)("请输入" + (u ? "您" : "您孩子") + "的名字") : (0, 
        a.default)("请输入" + (u ? "您" : "您孩子") + "的学号");
    },
    goDetail: function() {
        wx.navigateTo({
            url: "/pages/householdStudentGoApplypremit/index"
        });
    }
});