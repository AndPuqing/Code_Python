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

var a = e(require("vant-weapp/toast/toast")), r = e(require("vant-weapp/dialog/dialog")), i = e(require("../../utils/config")), s = getApp();

Page({
    data: {
        actions: [ {
            name: "身份证",
            type: 1
        }, {
            name: "护照",
            type: 2
        }, {
            name: "台湾回乡证",
            type: 3
        }, {
            name: "台湾居民来往内地通行证",
            type: 4
        }, {
            name: "台湾居民居住证",
            type: 5
        }, {
            name: "港澳当地政府颁发的身份证号码",
            type: 6
        }, {
            name: "港澳居民来往内地通行证（回乡证，大陆政府颁发）",
            type: 7
        }, {
            name: "港澳居民居住证（大陆政府颁发）",
            type: 8
        } ],
        zjzldm: {
            name: "身份证",
            type: 1
        },
        radio: "0"
    },
    onLoad: function(e) {
        this.setData({
            self: s.globalData.self
        });
    },
    toggle: function() {
        this.setData({
            show: !this.data.show
        });
    },
    onSelect: function(e) {
        this.setData({
            zjzldm: e.detail
        });
    },
    getdata: function(e) {
        this.setData(t({}, e.currentTarget.dataset.type, e.detail.value));
    },
    save: function(e) {
        var t = this, s = this.data, n = s.xm, l = s.zjhm, o = s.radio, d = {
            zjzldm: this.data.zjzldm.type,
            xm: e.detail.value.xm,
            zjhm: e.detail.value.zjhm
        };
        n || e.detail.value.xm ? l || e.detail.value.zjhm ? (n && (d.xm = n), l && (d.zjhm = l), 
        d.xm = d.xm.replace(/\s+/g, ""), d.zjhm = d.zjhm.replace(/\s+/g, ""), 1 == this.data.zjzldm.type ? r.default.alert({
            title: "提示",
            message: "根据广西健康码的管理要求,您的信息:" + d.xm.replace(/\s+/g, "") + " " + d.zjhm.replace(/\s+/g, "") + "需要实名验证后才可以申领广西健康码，点击继续核验人脸",
            showCancelButton: !0,
            confirmButtonText: "继续"
        }).then(function(e) {
            wx.startFacialRecognitionVerify({
                name: d.xm.replace(/\s+/g, ""),
                idCardNumber: d.zjhm.replace(/\s+/g, ""),
                checkAliveType: Number(o),
                success: function(e) {
                    console.log(e), d.verify_errcode = e.errCode, d.verify_errmsg = e.errMsg, d.verify_result = e.verifyResult, 
                    t.saveData(d);
                },
                fail: function(e) {
                    console.log(e), d.verify_errcode = e.errCode, d.verify_errmsg = e.errMsg, d.verify_result = e.verifyResult, 
                    e.verifyResult ? t.saveData(d) : (0, a.default)(i.default.faceToast[e.errCode] + "..");
                }
            });
        }) : this.saveData(d)) : (0, a.default)("请输入身份证号") : (0, a.default)("请输入姓名");
    },
    saveData: function(e) {
        var t = this;
        a.default.loading({
            mask: !0,
            duration: 0,
            message: "提交中..."
        }), s.services("api/app/community/healthcode/bind").post(e).then(function(i) {
            i && i.data.Success && i.data.Result > -1 ? wx.redirectTo({
                url: "/pages/success/index"
            }) : i && i.data.Success && -1 == i.data.Result ? (a.default.clear(), r.default.alert({
                title: "提示",
                confirmButtonText: "前往注册",
                message: "您的信息:" + e.xm + " " + e.zjhm + "，没有注册广西健康码，需要您填写注册信息申领广西健康码。",
                showCancelButton: !0
            }).then(function(a) {
                var r = "/pages/healthCodeLog/index?idcard=" + e.zjhm + "&type=" + t.data.zjzldm.type + "&name=" + e.xm;
                i.data.extra && (r += "&extra=" + i.data.extra), wx.redirectTo({
                    url: r
                });
            })) : i.data.Error ? (0, a.default)(i.data.Error) : (0, a.default)("服务器繁忙，请稍后重试！");
        });
    },
    onChange: function(e) {
        console.log(e), "change" == e.type && this.setData({
            radio: e.detail
        });
    },
    onClick: function(e) {
        var t = e.currentTarget.dataset.name;
        this.setData({
            radio: t
        });
    }
});