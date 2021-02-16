function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}

var i = e(require("vant-weapp/toast/toast")), a = (e(require("../../utils/we-moment-with-locales")), 
getApp()), n = null, s = null, u = "region";

Page({
    data: {
        region: {},
        building: {},
        group: {},
        simple: {},
        unit: {},
        active: {},
        admin: !1,
        legend_build: {
            2020020705: "行业",
            2020020704: "村屯",
            2020020703: "部门",
            2020020702: "楼栋",
            2020020701: "楼栋"
        },
        relationship: {
            2020020705: [ {
                name: "业主"
            }, {
                name: "工人"
            }, {
                name: "其他"
            } ],
            2020020704: [ {
                name: "户主"
            }, {
                name: "亲属"
            }, {
                name: "租客"
            }, {
                name: "工人"
            }, {
                name: "其他"
            } ],
            2020020703: [ {
                name: "干部职工"
            }, {
                name: "住户"
            }, {
                name: "其他"
            } ],
            2020020702: [ {
                name: "户主"
            }, {
                name: "亲属"
            }, {
                name: "租客"
            }, {
                name: "工人"
            }, {
                name: "其他"
            } ],
            2020020701: [ {
                name: "户主"
            }, {
                name: "亲属"
            }, {
                name: "租客"
            }, {
                name: "工人"
            }, {
                name: "其他"
            } ]
        },
        time: 30
    },
    onLoad: function(e) {
        n = e.no;
    },
    onShow: function() {
        console.log(a.globalData.choosegroups);
        var e = this.data, i = e.region, n = e.building, s = e.simple, u = e.unit, o = e.buildings, l = e.simples, d = e.units;
        if (a.globalData.choosegroups) {
            var r;
            i.id != a.globalData.choosegroups.id && (n = {}, s = {}, u = {}, o = [], l = [], 
            d = []), this.setData((r = {
                buildings: o,
                simple: l,
                unit: d,
                building: n
            }, t(r, "simple", s), t(r, "unit", u), t(r, "region", a.globalData.choosegroups), 
            r)), this.data.building && this.getsimple(), this.getbuilding();
        }
    },
    chooseGroup: function() {
        wx.navigateTo({
            url: "/pages/householdAddUserGroup/index?grouptype=2020020701"
        });
    },
    getbuilding: function() {
        var e = this;
        this.data.region.id && a.services("api/app/community/building").get({
            groupid: this.data.region.id,
            s: 1e4
        }).then(function(t) {
            if (t && t.data.Success) {
                var a = [];
                t.data.Result.Data.map(function(e) {
                    a.push({
                        id: e.id,
                        name: e.name
                    });
                }), e.setData({
                    buildings: a
                });
            } else i.default.fail(t.data.Error);
        });
    },
    getUnit: function() {
        var e = this, t = this.data, n = (t.group, t.building);
        t.unit;
        if (n.id) {
            var s = {
                bid: n.id,
                s: 1e4
            };
            a.services("api/app/community/household/simple").get(s).then(function(t) {
                if (t && t.data.Success) {
                    var a = [], n = {};
                    t.data.Result.Data.map(function(e) {
                        e.unit_name && (n[e.unit_name] = e.unit_name);
                    });
                    for (var s in n) a.push({
                        name: s
                    });
                    e.setData({
                        units: a
                    });
                } else i.default.fail(t.data.Error);
            });
        }
    },
    getsimple: function() {
        var e = this, t = this.data, n = t.unit, s = t.building, u = (t.simple, {
            bid: s.id,
            s: 1e4
        });
        n.name && (u.unit_name = n.name), a.services("api/app/community/household/simple").get(u).then(function(t) {
            if (t && t.data.Success) {
                var a = [];
                t.data.Result.Data.map(function(e) {
                    a.push({
                        id: e.id,
                        name: e.no ? e.no : e.name
                    });
                }), e.setData({
                    simples: a
                });
            } else i.default.fail(t.data.Error);
        });
    },
    inputchange: function(e) {
        desc = e.detail;
    },
    onChange: function(e) {
        s = e.detail;
    },
    setTImeData: function() {
        var e = this, t = setInterval(function() {
            var i = e.data.time - 1;
            console.log(i), e.setData({
                time: i
            }), 0 == i && (e.setData({
                time: 30
            }), clearInterval(t));
        }, 1e3);
    },
    getSmsCode: function() {
        var e = this;
        console.log(s), s && 11 == s.length ? a.services("api/app/community/user/assist/register/smscode").get({
            phone: s
        }).then(function(t) {
            t && t.data.Success ? (i.default.success("发送成功"), e.setTImeData()) : i.default.fail(t.data.Error);
        }) : (0, i.default)("输入正确的手机号");
    },
    save: function(e) {
        var t = e.detail.value, s = t.code, u = t.name, o = t.phone, l = t.idcard, d = this.data, r = d.region, c = d.building, g = d.simple, m = {
            no: n,
            code: s,
            name: u,
            phone: o
        };
        r.id ? c.id ? g.id ? u ? o ? s ? (l && (m.idcard = l), g.id && (m.hid = g.id), console.log(m), 
        a.services("api/app/community/user/assist/register").post(m).then(function(e) {
            e && e.data.Success ? a.services("api/app/community/pass/purchase/bind").get(m).then(function(e) {
                e && e.data.Success ? (i.default.success("绑定成功"), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1,
                        complete: function(e) {}
                    });
                }, 1e3)) : i.default.fail(e.data.Error);
            }) : i.default.fail(e.data.Error);
        })) : (0, i.default)("请填写认证码") : (0, i.default)("请填写手机号") : (0, i.default)("请填写姓名") : (0, 
        i.default)("请选择房间号") : (0, i.default)("请选择楼栋") : (0, i.default)("请选择小区或单位");
    },
    toggle: function() {
        this.setData({
            sheetshow: !this.data.sheetshow
        });
    },
    toggleSheet: function(e) {
        console.log(e);
        var t = [], i = this.data, a = i.buildings, n = i.simples, s = i.units, o = i.regions;
        "region" == (u = e.currentTarget.dataset.type) && (t = o), "building" == u && a && (t = a), 
        "unit" == u && s && (t = s), "simple" == u && n && (t = n), this.setData({
            actions: t,
            sheetshow: !0
        });
    },
    onSelect: function(e) {
        var t = this, i = this.data, a = i.building, n = i.simple, s = i.active, o = i.unit, l = i.region;
        "region" == u && (l = e.detail, a = {}, o = {}, n = {}), "building" == u && (a = e.detail, 
        o = {}, n = {}), "simple" == u && (n = e.detail), "unit" == u && (o = e.detail, 
        n = {}), this.setData({
            region: l,
            building: a,
            simple: n,
            active: s,
            unit: o
        }, function() {
            "region" == u && t.getbuilding(), "building" == u && (t.getUnit(), t.getsimple());
        });
    }
});