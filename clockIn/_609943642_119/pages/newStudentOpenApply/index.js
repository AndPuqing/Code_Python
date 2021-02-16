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

var a = e(require("vant-weapp/toast/toast")), n = (e(require("vant-weapp/dialog/dialog")), 
getApp()), o = "collge";

Page({
    data: {
        collges: [ {
            name: "机电工程学院"
        }, {
            name: "信息与通信学院"
        }, {
            name: "计算机与信息安全学院"
        }, {
            name: "艺术与设计学院"
        }, {
            name: "商学院"
        }, {
            name: "外国语学院"
        }, {
            name: "数学与计算科学学院"
        }, {
            name: "电子工程与自动化学院"
        }, {
            name: "法学院"
        }, {
            name: "材料科学与工程学院"
        }, {
            name: "生命与环境科学学院"
        }, {
            name: "建筑与交通工程学院"
        }, {
            name: "人工智能学院"
        }, {
            name: "国防生学院"
        } ],
        types: [ {
            name: "本科"
        }, {
            name: "本科（2+2）"
        } ],
        actions: []
    },
    onLoad: function(e) {},
    onReady: function() {},
    toggleSheet: function(e) {
        var t = this;
        console.log(e), o = "collges" == e.currentTarget.dataset.type ? "collge" : "student_type", 
        this.setData({
            show: !0,
            actions: this.data[e.currentTarget.dataset.type]
        }, function() {
            console.log(t.data.actions);
        });
    },
    onSelect: function(e) {
        var a = this;
        console.log(e), this.setData(t({}, "" + o, e.detail.name), function() {
            console.log(a.data);
        });
    },
    toggle: function() {
        this.setData({
            show: !this.data.show
        });
    },
    getdata: function(e) {
        console.log(e), this.setData({
            major: e.detail
        });
    },
    radio2Change: function(e) {
        this.setData({
            radio2: e.detail
        });
    },
    goDetail: function() {
        wx.navigateTo({
            url: "/pages/householdStudentGoApplypremit/index"
        });
    },
    save: function() {
        console.log(this.data);
        var e = this.data, t = (e.date, e.radio2), o = e.collge, i = e.student_type, l = {
            college: o,
            major: e.major,
            student_type: i
        };
        o ? t && 0 != t.length ? (console.log(l), a.default.loading({
            duration: 0,
            message: "加载中.",
            loadingType: "spinner"
        }), n.services("api/app/community/household/application/guet/newstudent").post(l).then(function(e) {
            a.default.clear(), e && e.data.Success ? ((0, a.default)("申请成功"), setTimeout(function() {
                1 == getCurrentPages().length ? wx.switchTab({
                    url: "/pages/index/index"
                }) : wx.navigateBack({
                    delta: 1,
                    complete: function(e) {}
                });
            }, 1e3)) : e.data.Error && (0, a.default)(e.data.Error);
        })) : (0, a.default)("请阅读《桂林电子科技大学学生返校承诺书》并勾选") : (0, a.default)("请选择返校日期");
    }
});