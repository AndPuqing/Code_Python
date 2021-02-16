function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var a = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (t[s] = a[s]);
    }
    return t;
}, s = t(require("vant-weapp/toast/toast")), n = t(require("../../utils/config")), i = getApp(), o = require("../../common/tool"), r = null;

Component({
    properties: {
        flow: {
            type: String,
            observer: function(t, e) {
                "out" == t ? (r = "false", this.submit()) : "in" == t && (r = "true", this.submit());
            }
        },
        flags: {
            type: Array,
            value: [ {
                title: "身体状态",
                tags: [ {
                    k: 1 << 30,
                    v: "体温正常"
                }, {
                    k: 1 << 31,
                    v: "发烧"
                } ],
                value: 0,
                key: "health"
            } ]
        },
        code: Object,
        whitelist_user: Boolean,
        mqttkey: String,
        parent: Object,
        title: String,
        config: Object,
        pass: Object,
        group: Object,
        house: Object,
        plate: String,
        point: Object,
        log: {
            type: Object,
            observer: function(t, e) {
                if (t.flags) {
                    var a = 36.5, s = this.data.flags, n = "";
                    s.map(function(e) {
                        e.tags.map(function(a) {
                            a.k & t.flags == a.k && (e.value = a.k);
                        });
                    }), t.plate && (n = t.plate), t.temp && (a = t.temp), this.setData({
                        temp: a,
                        inputPanel: n,
                        flags: s
                    });
                }
            }
        },
        members: Array,
        temp: {
            type: Number,
            value: 36.5
        },
        person: Object,
        inputplate: String
    },
    data: {
        flags: [],
        CommunityCheckpointPassTypeEnums: {
            1: "允许通行",
            2: "绿码，可通行",
            3: "绿码，外部人员",
            4: "黄码，限制通行",
            5: "红码，不能通行",
            6: "未绑定健康码",
            "-1": "禁止通行"
        }
    },
    ready: function() {
        var t = this.data, e = t.pass, a = t.point, s = t.house, n = t.flags, i = t.log, r = this.renderTitle(e, a, s);
        console.log(r, 222), this.serialize(i, n), this.setData({
            config: r,
            flags: n,
            temp: 36.5
        }), this.location = new o.Location(), this.location.startgetlocation();
    },
    created: function() {},
    methods: {
        stepChange: function(t) {
            this.setData({
                temp: Number(t.detail)
            });
        },
        onMemberChange: function(t) {
            var e = this.data.members;
            t.detail.value && e.map(function(e, a) {
                e.check = !1, t.detail.value.indexOf(String(a)) > -1 && (e.check = !0);
            }), this.setData({
                members: e
            });
        },
        onPlateChange: function(t) {
            this.setData({
                inputplate: t.detail.value[0]
            });
        },
        getTrainnumber: function(t) {
            this.setData({
                inputplate: t.detail
            });
        },
        onRadiohealthChange: function(t) {
            var a = this;
            this.setData(e({}, "flags[" + t.currentTarget.dataset.parentIndex + "].value", t.detail.value), function() {
                console.log(a.data.flags);
            });
        },
        serialize: function(t, e) {
            return t && e.map(function(e) {
                e.tags.map(function(a) {
                    (a.k & t.flags) == a.k && (e.value = a.k);
                });
            }), e;
        },
        renderTitle: function(t, e, a) {
            var s = {};
            switch (s.passTag = 2, e && e.tags && e.tags.indexOf("community.checkpoint.autopass") > -1 ? s.passTag = 0 : e && e.tags && e.tags.indexOf("community.checkpoint.memberautopass") > -1 && (s.passTag = 1), 
            "ncov" != n.default.key || a || (s.passTag = 1), s.passTag) {
              case 1:
                s.title = a ? null : "请先加入";
                break;

              case 2:
                s.title = t ? t.name : "请申请通行证";
            }
            return e && e.tags && e.tags.indexOf("community.checkpoint.vehicle") > -1 && (s.vehicleTag = !0, 
            this.data.last_plate && (s.inputplate = this.data.last_plate)), s;
        },
        getPassableGuet: function() {
            var t = this.data, e = t.point, a = t.house, s = t.pass, n = t.whitelist_user;
            return e && e.tags && (e.tags.indexOf("community.checkpoint.autopass") > -1 || e.tags.indexOf("community.checkpoint.flow.stat") > -1) ? 1 : s ? 1 : e && e.tags && e.tags.indexOf("community.checkpoint.memberautopass") > -1 && a ? 1 : n ? 1 : -1;
        },
        getPassable: function() {
            var t = this.data, e = t.point, a = t.house, s = t.pass, n = t.whitelist_user, i = t.code, o = -1;
            return o = e && e.tags && (e.tags.indexOf("community.checkpoint.autopass") > -1 || e.tags.indexOf("community.checkpoint.flow.stat") > -1) ? 1 : s ? 1 : e && e.tags && e.tags.indexOf("community.checkpoint.memberautopass") > -1 && a ? 1 : e && e.tags && e.tags.indexOf("community.checkpoint.memberautopass") > -1 && i && 3 == i.type ? 3 : n ? 1 : -1, 
            i && 3 == i.type && 1 == o && (o = 2), i && 2 == i.type && (o = 4), i && 1 == i.type && (o = 5), 
            i && i.jkmid || (o = 6), o;
        },
        submit: function(t) {
            var e = this;
            t && t.currentTarget.dataset && (r = t.currentTarget.dataset.isin);
            var o = this.data, l = o.flags, u = o.inputplate, p = o.gps, c = o.temp, g = o.person, m = o.log, f = o.members, h = o.house, d = o.mqttkey;
            g = g || {};
            var b = m.flags;
            l.map(function(t) {
                t.tags.map(function(e) {
                    parseInt(t.value) == e.k ? b |= e.k : b &= ~e.k;
                });
            }), "true" == r ? (b |= 2, b &= -5) : (b |= 4, b &= -3), h || (b |= 1 << 21), g.plate = u, 
            g.temp = c;
            var v = {
                flags: b,
                gps: p,
                person: g
            };
            v = a({}, m, v), f && f.length > 0 && (v.person.members = [], f.map(function(t) {
                t.check && v.person.members.push(t);
            })), i.globalData.location && i.globalData.location.longitude && (v.gps = {
                lng: i.globalData.location.longitude,
                lat: i.globalData.location.latitude
            }), d && (v.mqtt_key = d), "guet" == n.default.key ? v.pass_type = this.getPassableGuet() : v.pass_type = this.getPassable(), 
            getApp().services("api/app/community/checkpoint/pass/log/fill").post(v).then(function(t) {
                t && t.data.Success ? e.triggerEvent("change", {
                    data: v
                }) : (e.triggerEvent("error", {
                    data: t.data
                }), t.data.Error ? (0, s.default)("请重新扫码") : (0, s.default)("服务器繁忙，请稍后重试！"));
            });
        },
        goAppy: function() {
            i.globalData.choosegroups = this.data.parent, wx.navigateTo({
                url: "/pages/householdAddUser/index?grouptype=" + this.data.parent.type
            });
        }
    }
});