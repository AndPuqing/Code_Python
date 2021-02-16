function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("vant-weapp/dialog/dialog")), a = t(require("vant-weapp/toast/toast")), i = t(require("../../utils/we-moment-with-locales")), s = t(require("../../common/page")), n = t(require(".../../../../utils/config")), o = getApp(), u = {}, l = "", r = "";

(0, s.default)({
    data: {
        checkDetail: {},
        activeNames: [ 0 ],
        passable: !1,
        submitflag: !1,
        quarantine: {}
    },
    onLoad: function(t) {
        if (t.token) l = t.token; else if (t.q) {
            var e = decodeURIComponent(t.q), i = [];
            e.indexOf("https") > -1 && (e.indexOf(n.default.shost) > -1 || e.indexOf(n.default.ahost) > -1) && e.indexOf("fangxing") > -1 ? (i = e.split("/"), 
            l = i[i.length - 1].split("=")[1]) : a.default.fail("请重新扫码");
        }
        this.initData();
    },
    onShow: function() {
        this.checkPhone(), o.loginData ? e.default.close() : e.default.alert({
            title: "提示",
            message: "您还未登录，请跳转登录后继续"
        }).then(function(t) {
            wx.navigateTo({
                url: "/pages/wxlog/index"
            });
        });
    },
    onRadioChange: function(t) {
        console.log(t), this.setData({
            radio: t.detail.value
        });
    },
    onRadiohealthChange: function(t) {
        this.setData({
            healthRadio: t.detail.value
        });
    },
    getCheckDetail: function() {
        var t = this, e = {
            token: l,
            groupid: this.data.active.id,
            user_scan: !0
        };
        o.services("api/app/community/pass/forcheckpoint").get(e).then(function(e) {
            if (e && e.data.Success) {
                var i = e.data.Result, s = {};
                if (i.house && (s.areaid = i.house.areaid, s.groupid = i.house.groupid, s.hid = i.house.id), 
                i.use && (s.passid = i.use.id, s.pass_type = i.use.type, i.use.areaid && (s.areaid = i.use.areaid), 
                i.use.hid && (s.hid = i.use.hid), i.use.groupid && (s.groupid = i.use.groupid)), 
                i.use_members && i.use_members.map(function(t, e) {
                    t.uid && t.uid == o.globalData.self.id && i.use_members.splice(e, 1);
                }), i.use) {
                    i.use.text = function(t) {
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
                    }(i.use);
                }
                u = i, t.getPassable(), t.getQrcode(u.log.uid);
                var n = {
                    user: i.user,
                    apply: i.apply ? i.apply : null,
                    group: i.group ? i.group : null,
                    parent: i.parent ? i.parent : null,
                    house: i.house ? i.house : null,
                    use: i.use ? i.use : null,
                    members: i.use_members ? i.use_members : null,
                    person: s,
                    log: i.log ? i.log : null,
                    last_plate: i.last_plate ? i.last_plate : null,
                    point: i.point ? i.point : null,
                    error: !1,
                    submitflag: !1,
                    overdue: !1,
                    show: !0
                };
                i.group && i.group.tags && i.group.tags.indexOf("community.checkpoint.autopass") > -1 && (n.autopass = !0), 
                t.setData(n);
            } else e.data.Error ? "Token 无效" == e.data.Error ? t.setData({
                submitflag: !0,
                overdue: !0,
                error: !1
            }) : (0, a.default)(e.data.Error) : t.setData({
                error: !0
            });
        });
    },
    getQrcode: function(t) {
        var e = this;
        getApp().services("api/app/community/person/qrcode").get({
            id: t
        }).then(function(t) {
            if (t && t.data.Success) {
                var s = t.data.Result.health ? t.data.Result.health : {}, n = t.data.Result.quarantine ? t.data.Result.quarantine : {};
                n.id && (n.endTxt = (0, i.default)(t.data.Result.quarantine.end).format("YYYY-MM-DD HH:mm"), 
                e.setData({
                    quarantine: n || null,
                    passable: !1
                })), s.id && (s.timeTxt = (0, i.default)(new Date()).locale("zh-cn").from((0, i.default)(s.modified), !0).replace(/\s*/g, "")), 
                e.setData({
                    healthlog: s,
                    quarantine: n
                });
            } else res.data.Error && a.default.fail(res.data.Error);
        });
    },
    getPassable: function() {
        var t = !1;
        u && u.point && u.point.tags && u.point.tags.indexOf("community.checkpoint.memberautopass"), 
        u && u.point && u.point.tags && (u.point.tags.indexOf("community.checkpoint.autopass") > -1 || u.point.tags.indexOf("community.checkpoint.flow.stat") > -1) ? t = !0 : u && u.use ? t = !0 : u && u.point && u.point.tags && u.point.tags.indexOf("community.checkpoint.memberautopass") > -1 && u.house ? (!0, 
        t = !0) : t = !(!u || !u.whitelist_user), this.setData({
            passable: t
        });
    },
    onChange: function(t) {
        console.log(t), this.setData({
            activeNames: t.detail
        });
    },
    initData: function() {
        var t = this;
        o.services("api/app/community/checkpoint").get({
            me: !0
        }).then(function(e) {
            e && e.data.Success ? (e.data.Result.Data.map(function(t) {
                t.name = t.group.name, t.id = t.group.id;
            }), t.setData({
                error: !1,
                show: !0,
                groups: e.data.Result.Data,
                active: e.data.Result.Data.length > 0 ? e.data.Result.Data[0] : {}
            }, function() {
                e.data.Result.Data.length > 0 && (t.getCheckDetail(), t.data.active.aid ? r = t.data.active.aid : t.setAttendan());
            })) : e.data.Error ? (t.setData({
                error: !1
            }), a.default.fail(e.data.Error)) : t.setData({
                error: !0
            });
        });
    },
    setAttendan: function() {
        o.services("api/app/community/checkpoint/attendance").post({
            groupid: this.data.active.id,
            data: {}
        }).then(function(t) {
            t.data.Result && (r = t.data.Result);
        });
    },
    toggleSheet: function() {
        this.setData({
            sheetshow: !this.data.sheetshow
        });
    },
    onSelect: function(t) {
        var e = this;
        t.detail.aid ? r = t.detail.aid : this.setAttendan(), this.setData({
            active: t.detail
        }, function() {
            e.getCheckDetail();
        });
    },
    goPasslog: function() {
        wx.redirectTo({
            url: "/pages/passLog/index"
        });
    },
    goback: function() {
        wx.reLaunch({
            url: "/pages/index/index"
        });
    },
    inputPanelBack: function(t) {
        console.log(t);
        var e = this, a = t.detail.data;
        e.setData({
            submitflag: !0,
            log: a
        });
    },
    scanContinue: function() {
        var t = this;
        wx.scanCode({
            onlyFromCamera: !0,
            scanType: "qrCode",
            success: function(e) {
                var a = [];
                if (e.result.indexOf("http") > -1 && (a = e.result.split("?"))[0].indexOf("fangxing") > -1) {
                    l = a[1].split("=")[1];
                    var i = {
                        user: null,
                        apply: null,
                        group: null,
                        parent: null,
                        house: null,
                        use: null,
                        person: null,
                        point: null,
                        submitflag: !1,
                        overdue: !1,
                        show: !0
                    };
                    console.log(111), t.setData(i, function() {
                        t.getCheckDetail();
                    });
                }
            },
            fail: function() {
                (0, a.default)("扫码失败");
            }
        });
    }
});