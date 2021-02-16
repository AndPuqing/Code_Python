function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var e = a(require("vant-weapp/toast/toast")), t = (a(require("../../utils/we-moment-with-locales")), 
a(require("../../utils/config"))), i = getApp(), n = "2020020701", s = {}, o = "", u = "type";

Page({
    data: {
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
        }
    },
    onLoad: function(a) {
        "true" == a.reset && (i.globalData.choosegroups = {}), n = "2020020701", (a = a).grouptype && (n = a.grouptype), 
        this.setData({
            key: t.default.key,
            buildings: [],
            simples: [],
            units: [],
            GroupTypeEnum: i.globalData.enums ? i.globalData.enums.GroupTypeEnum : {},
            flag: n
        });
    },
    onShow: function() {
        var a = this.data, e = a.group, t = a.building, n = a.simple, o = a.unit;
        i.globalData.choosegroups && (i.globalData.choosegroups && s.grouptype && s.grouptype != i.globalData.choosegroups.type && (i.globalData.choosegroups = {}), 
        e.id != i.globalData.choosegroups.id && (t = {}, n = {}, o = {}), this.setData({
            flag: String(i.globalData.choosegroups.type ? i.globalData.choosegroups.type : this.data.flag),
            building: t,
            simple: n,
            unit: o,
            group: i.globalData.choosegroups
        }), this.data.building && this.data.building.id && this.getsimple(), this.getbuilding());
    },
    getbuilding: function() {
        var a = this;
        i.globalData.choosegroups.id && i.services("api/app/community/building").get({
            groupid: i.globalData.choosegroups.id,
            s: 1e4
        }).then(function(t) {
            if (t && t.data.Success) {
                var i = [], s = a.data.building;
                t.data.Result.Data.map(function(a) {
                    i.push({
                        id: a.id,
                        name: a.name,
                        areaid: a.areaid
                    });
                }), "2020020704" == n && i.length > 0 && (s = i[0]), 0 == i.length && e.default.loading({
                    type: "text",
                    duration: 3e3,
                    forbidClick: !0,
                    message: "暂无" + a.data.legend_build[n] + "可选择"
                }), a.setData({
                    building: s,
                    buildings: i
                }, function() {
                    s.id && a.getsimple();
                });
            } else t.data.Error ? e.default.fail(t.data.Error) : (0, e.default)("服务繁忙，请稍后重试");
        });
    },
    getUnit: function() {
        var a = this, t = this.data, n = (t.group, t.building);
        t.unit;
        if (n.id) {
            var s = {
                bid: n.id,
                s: 1e4
            };
            i.services("api/app/community/household/simple").get(s).then(function(t) {
                if (t && t.data.Success) {
                    var i = [], n = {};
                    t.data.Result.Data.map(function(a) {
                        a.unit_name && (n[a.unit_name] = a.unit_name);
                    });
                    for (var s in n) i.push({
                        name: s
                    });
                    a.setData({
                        units: i
                    });
                } else t.data.Error ? e.default.fail(t.data.Error) : (0, e.default)("服务繁忙，请稍后重试");
            });
        }
    },
    getsimple: function() {
        var a = this, s = this.data, o = s.unit, u = s.building, l = s.simple, d = {
            bid: u.id,
            s: 1e4
        };
        o.name && (d.unit_name = o.name), i.services("api/app/community/household/simple").get(d).then(function(i) {
            if (i && i.data.Success) {
                var s = [];
                i.data.Result.Data.map(function(a) {
                    s.push({
                        id: a.id,
                        name: a.no ? a.no : a.name
                    });
                }), "guet" != t.default.key && "2020020703" == n && s.length > 0 && (l = s[0]), 
                0 == s.length && "2020020703" != n && e.default.loading({
                    type: "text",
                    duration: 3e3,
                    forbidClick: !0,
                    message: "暂无房间可选择"
                }), console.log(l), a.setData({
                    simples: s,
                    simple: l
                });
            } else i.data.Error ? e.default.fail(i.data.Error) : (0, e.default)("服务繁忙，请稍后重试");
        });
    },
    inputchange: function(a) {
        o = a.detail;
    },
    onChange: function(a) {
        var e = a.detail;
        this.setData({
            admin: e
        });
    },
    save: function() {
        var a = this.data, s = a.group, u = a.building, l = a.simple, d = a.active, g = (a.admin, 
        a.legend_build), r = {
            desc: o,
            tag: d.name,
            name: i.globalData.self.name,
            phone: i.globalData.self.phone,
            admin: !1
        };
        "户主" == d.name && (r.admin = !0), s.id ? u.id ? l.id || "guet" != t.default.key ? (u.id && (r.hid = u.id), 
        l.id && (r.hid = l.id), d.name && (r.tag = d.name), i.services("api/app/community/household/application").post(r).then(function(a) {
            a && a.data.Success ? wx.redirectTo({
                url: "/pages/success/index"
            }) : e.default.fail(a.data.Error);
        })) : (0, e.default)("请选择楼栋或房间") : (0, e.default)("请选择" + g[n]) : (0, e.default)("请选择小区或单位");
    },
    chooseGroup: function() {
        wx.navigateTo({
            url: "/pages/householdAddUserGroup/index?grouptype=" + n
        });
    },
    toggle: function() {
        this.setData({
            sheetshow: !this.data.sheetshow
        });
    },
    toggleSheet: function(a) {
        var t = [], s = this.data, o = s.buildings, l = s.simples, d = s.units;
        if ("building" == (u = a.currentTarget.dataset.type) && o && (t = o), "unit" == u && d && (t = d), 
        "simple" == u && l && (t = l), "type" == u && (t = this.data.relationship[n]), i.globalData.choosegroups && (!i.globalData.choosegroups || i.globalData.choosegroups.id)) return 0 == t.length ? (e.default.loading({
            type: "text",
            duration: 1500,
            forbidClick: !0,
            message: "数据正在加载，请重试"
        }), void ("building" == u ? this.getbuilding() : "simple" != u && (this.getsimple(), 
        this.getUnit()))) : void this.setData({
            actions: t,
            sheetshow: !0
        });
        (0, e.default)("请选择" + this.data.GroupTypeEnum[n]);
    },
    getSheetData: function(a) {
        var e = this, t = this.data, i = t.building, n = t.simple, s = t.active, o = t.unit, l = a.currentTarget.dataset.item;
        "building" == u && (i = l, o = {}, n = {}), "simple" == u && (n = l), "unit" == u && (o = l, 
        n = {}), "type" == u && (s = l), this.setData({
            building: i,
            simple: n,
            active: s,
            unit: o
        }, function() {
            e.toggle(), "simple" != u && (e.getsimple(), e.getUnit());
        });
    },
    onSelect: function(a) {
        var e = this, t = this.data, i = t.building, n = t.simple, s = t.active, o = t.unit;
        "building" == u && (i = a.detail, o = {}, n = {}), "simple" == u && (n = a.detail), 
        "unit" == u && (o = a.detail, n = {}), "type" == u && (s = a.detail), this.setData({
            building: i,
            simple: n,
            active: s,
            unit: o
        }, function() {
            "simple" != u && (e.getsimple(), e.getUnit());
        });
    },
    goAddGroup: function() {
        var a = this.data.buildings;
        wx.navigateTo({
            url: "/pages/householdAddHome/index?bid=" + a[0].id + "&areaid=" + a[0].areaid
        });
    }
});