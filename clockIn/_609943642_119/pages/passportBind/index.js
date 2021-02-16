function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("vant-weapp/toast/toast")), a = t(require("vant-weapp/dialog/dialog")), i = t(require("../../utils/we-moment-with-locales")), s = getApp(), n = null;

Page({
    data: {},
    onLoad: function(t) {
        n = t.no;
    },
    onShow: function() {
        this.getHouseHold();
    },
    onChange: function(t) {
        console.log(t), this.setData({
            radio: String(t.detail)
        });
    },
    onClick: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.name;
        this.setData({
            radio: String(e)
        });
    },
    getPass: function() {
        s.services("api/app/community/pass").get({
            state: 1
        }).then(function(t) {
            if (t && t.data.Success) {
                var e = function(t) {
                    var e = null;
                    switch (t.limit_type) {
                      case 0:
                        e = "不限次数";
                        break;

                      case 1:
                        e = "每" + t.limit.cycle + "天可使用" + t.limit.times + "次", t.id && (e += "，剩余" + (t.limit.times - (t.limit.use_times || 0)) + "次");
                        break;

                      case 2:
                        e = "总" + t.limit.times + "次", t.id && (e += "，剩" + (t.limit.times - (t.limit.use_times || 0)) + "次");
                    }
                    return t.state, e;
                };
                t.data.Result.Data.map(function(t) {
                    t.limit && (t.issuedTxt = (0, i.default)(t.issued).format("YYYY-MM-DD HH:mm"), t.text = e(t));
                });
            }
        });
    },
    getHouseHold: function() {
        var t = this;
        s.services("api/app/community/household").get({
            myhome: !0,
            s: 999
        }).then(function(e) {
            e && e.data.Success && t.setData({
                list: e.data.Result.Data
            });
        });
    },
    bindCard: function() {
        var t = this.data, i = t.radio, o = t.list, u = o[i] ? o[i] : {};
        console.log(u), u.id ? a.default.alert({
            title: "提示",
            message: "您确定要绑定该通行证吗?",
            showCancelButton: !0
        }).then(function(t) {
            var a = {
                no: n,
                hid: u.id
            };
            s.services("api/app/community/pass/purchase/bind").get(a).then(function(t) {
                t && t.data.Success ? (e.default.success("绑定成功"), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 1e3)) : e.default.fail(t.data.Error);
            });
        }) : (0, e.default)("请选择通行证");
    },
    addUser: function() {
        wx.navigateTo({
            url: "/pages/householdAddUser/index?grouptype=2020020701"
        });
    }
});