function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("vant-weapp/dialog/dialog")), a = t(require("vant-weapp/toast/toast")), i = t(require("../../utils/we-moment-with-locales")), s = t(require("../../common/page")), n = t(require("../../utils/config")), u = getApp(), o = {}, l = "", c = "";

(0, s.default)({
    data: {
        checkDetail: {},
        activeNames: [ 0 ],
        passable: !1,
        submitflag: !1
    },
    onLoad: function(t) {
        if (t.no) l = t.no; else if (t.q) {
            var e = decodeURIComponent(t.q);
            console.log(e);
            var i = [];
            e.indexOf("https") > -1 && (e.indexOf(n.default.shost) > -1 || e.indexOf(n.default.ahost) > -1) && e.indexOf("pass") > -1 ? (i = e.split("/"), 
            l = i[i.length - 1].split("=")[1]) : a.default.fail("请重新扫码");
        }
    },
    onShow: function() {
        this.checkPhone(), this.initData(), u.loginData || e.default.alert({
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
    getPassLog: function(t) {
        var e = this;
        u.services("api/app/community/checkpoint/pass/log/details").get({
            id: t
        }).then(function(t) {
            if (t && t.data.Success) {
                t.data.Result.user && e.getHealthLog(t.data.Result.user.id);
                t.data.Result;
                e.setData({
                    log: t.data.Result
                });
            } else a.default.fail(t.data.Error);
        });
    },
    getHealthLog: function(t) {
        var e = this;
        u.services("api/app/community/health/daily").get({
            member_uid: t,
            s: 1
        }).then(function(t) {
            if (t && t.data.Success) {
                var s = t.data.Result.Data.length > 0 ? t.data.Result.Data[0] : {};
                s.id && (s.timeTxt = (0, i.default)(new Date()).locale("zh-cn").from((0, i.default)(s.modified), !0).replace(/\s*/g, "")), 
                e.setData({
                    healthlog: s
                });
            } else a.default.fail(t.data.Error);
        });
    },
    getCheckPointDetail: function() {
        var t = this;
        u.services("api/app/community/checkpoint/details").get({
            groupid: this.data.active.id,
            token: l,
            user_scan: !0
        }).then(function(e) {
            e && e.data.Success ? (e.data.Result.lid && t.getPassLog(e.data.Result.lid), t.setData({
                checkpoint: e.data.Result
            })) : a.default.fail(e.data.Error);
        });
    },
    getCheckDetail: function() {
        var t = this;
        u.services("api/app/community/pass/forcheckpoint").get({
            token: l,
            groupid: this.data.active.id
        }).then(function(e) {
            if (e && e.data.Success) {
                if (e && e.data.Success) {
                    e.data.Result.group && t.getCheckPointDetail(e.data.Result.group.id);
                    var i = e.data.Result, s = {};
                    if (i.house && (s.areaid = i.house.areaid, s.groupid = i.house.groupid, s.hid = i.house.id), 
                    i.use && (s.passid = i.use.id, s.pass_type = i.use.type), e.data.Result.use) {
                        e.data.Result.use.text = function(t) {
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
                        }(e.data.Result.use);
                    }
                    o = i, t.getPassable();
                    var n = {
                        use_members: i.use_members ? i.use_members : null,
                        user: i.user ? i.user : null,
                        apply: i.apply ? i.apply : null,
                        group: i.group ? i.group : null,
                        parent: i.parent ? i.parent : null,
                        house: i.house ? i.house : null,
                        use: i.use ? i.use : null,
                        person: s,
                        submit: !1
                    };
                    console.log(n), t.setData(n);
                }
            } else (0, a.default)("二维码已过期，请重新扫码"), setTimeout(function() {
                wx.navigateBack({
                    delta: 1
                });
            }, 1e3);
        });
    },
    getPassable: function() {
        var t = !1;
        t = !!(o.point && o.point.tags && o.point.tags.indexOf("community.checkpoint.autopass") > -1) || (!!o.use || !!(o.group && o.group.tags && o.group.tags.indexOf("community.checkpoint.memberautopass") > -1 || o.point && o.point.tags && o.point.tags.indexOf("community.checkpoint.memberautopass") > -1 && o.house)), 
        console.log(o, 11), this.setData({
            passable: t
        });
    },
    onChange: function(t) {
        console.log(t), this.setData({
            activeNames: t.detail
        });
    },
    getlatestattendance: function() {
        u.services("api/app/community/checkpoint/attendance/latest").get().then(function(t) {
            t && t.data.Success && (c = t.data.Result.id);
        });
    },
    initData: function() {
        var t = this;
        u.services("api/app/community/checkpoint").get({
            me: !0
        }).then(function(e) {
            e && e.data.Success && (e.data.Result.Data.map(function(t) {
                t.name = t.group.name, t.id = t.group.id;
            }), t.setData({
                show: !0,
                groups: e.data.Result.Data,
                active: e.data.Result.Data.length > 0 ? e.data.Result.Data[0] : {}
            }, function() {
                e.data.Result.Data.length > 0 && (t.getCheckDetail(), t.data.active.aid ? c = t.data.active.aid : t.setAttendan());
            }));
        });
    },
    setAttendan: function() {
        u.services("api/app/community/checkpoint/attendance").post({
            groupid: this.data.active.id,
            data: {}
        }).then(function(t) {
            t.data.Result && (c = t.data.Result);
        });
    },
    save: function(t) {
        console.log(t);
        var e = this.data, i = e.healthRadio, s = e.radio, n = {
            token: l,
            aid: c,
            person: {},
            flags: Number(t.currentTarget.dataset.flag)
        };
        Number(i) && (n.flags += Number(i)), Number(s) && (n.flags += Number(s)), u.services("api/app/community/checkpoint/pass/log").post(n).then(function(t) {
            t && t.data.Success ? wx.redirectTo({
                url: "/pages/personCheckResult/index?token=" + l + "&flags=" + n.flags
            }) : (0, a.default)("扫码已过期");
        });
    },
    toggleSheet: function() {
        this.setData({
            sheetshow: !this.data.sheetshow
        });
    },
    onSelect: function(t) {
        var e = this;
        t.detail.aid ? c = t.detail.aid : this.setAttendan(), this.setData({
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
        var e = this, a = t.detail.data.Result;
        e.setData({
            submitflag: !0,
            log: a
        });
    },
    scanContinue: function() {
        wx.scanCode({
            onlyFromCamera: !0,
            scanType: "qrCode",
            success: function(t) {
                var e = this;
                console.log(t);
                var a = [];
                if (t.result.indexOf("http") > -1 && (a = t.result.split("?"))[0].indexOf("fangxing") > -1) {
                    l = a[1].split("=")[1];
                    var i = {
                        user: null,
                        apply: null,
                        group: null,
                        parent: null,
                        house: null,
                        use: null,
                        person: null,
                        submit: !1,
                        submitflag: !1
                    };
                    this.setData(i, function() {
                        e.getCheckDetail();
                    });
                }
            },
            fail: function() {
                (0, a.default)("扫码失败");
            }
        });
    },
    goIndex: function() {
        wx.reLaunch({
            url: "/pages/index/index"
        });
    }
});