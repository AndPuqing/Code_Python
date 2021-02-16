function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("vant-weapp/toast/toast")), i = (e(require("../../utils/restfulApi")), 
e(require("../../utils/we-moment-with-locales")), e(require("vant-weapp/dialog/dialog")), 
e(require("../../utils/config"))), a = require("qs"), s = getApp(), n = null, u = null, o = null, l = {};

Component({
    properties: {
        mqtt_key: String,
        bind: {
            type: Boolean,
            value: !0
        },
        options: {
            type: Object,
            observer: function(e, t) {
                console.log(e), e.id && (u = e.id, this.initData()), e.q && this.getID(e.q);
            }
        },
        key: String,
        title: String,
        config: Object,
        pass: Object,
        group: Object,
        house: Object,
        plate: String,
        log: Object,
        temp: Number,
        person: Object,
        inputplate: String
    },
    data: {},
    ready: function() {
        this.setData({
            key: i.default.key
        });
    },
    methods: {
        getID: function(e) {
            var l = this, r = decodeURIComponent(e), d = [];
            r.indexOf("http") > -1 ? ((d = r.split("/")).indexOf(i.default.shost) > -1 || d.indexOf(i.default.ahost) > -1) && d.indexOf("s") > -1 ? s.services("s/re/" + d[d.length - 1]).get().then(function(e) {
                if (e && e.data.Success) {
                    var r = e.data.Result.split("?");
                    if (r[0].indexOf("yqfk/#") > -1) {
                        var d = (0, a.parse)(r[1], {
                            ignoreQueryPrefix: !0
                        });
                        console.log(d), u = d.groupid, d.mqtt_key && (o = d.mqtt_key), d.flow && (n = d.flow), 
                        "guet" == i.default.key && u ? l.initData() : u ? s.services("api/app/community/checkpoint/details").get({
                            groupid: u
                        }).then(function(e) {
                            e.data.Result && 20 != e.data.Result.checkpoint_type ? l.initData() : e.data.Result && 20 == e.data.Result.checkpoint_type ? wx.redirectTo({
                                url: "/pages/webviewScan/index?id=" + u
                            }) : (t.default.fail("请重新扫码"), l.setData({
                                error: !0
                            }));
                        }) : (t.default.fail("请重新扫码"), l.setData({
                            is_id: !0
                        }));
                    }
                } else t.default.fail("请重新扫码"), l.setData({
                    is_id: !0
                });
            }) : (t.default.fail("请重新扫码"), this.setData({
                error: !0
            })) : (t.default.fail("请重新扫码"), this.setData({
                is_id: !0
            }));
        },
        initData: function() {
            s.services("api/app/community/household/rebind").get().then(function(e) {}), this.getDetail();
        },
        onThinkRadioChange: function(e) {
            this.setData({
                thinkeradio: e.detail.value
            });
        },
        onRadioChange: function(e) {
            console.log(e), this.setData({
                radio: e.detail.value
            });
        },
        onRadiohealthChange: function(e) {
            this.setData({
                healthRadio: e.detail.value
            });
        },
        gosiginCode: function() {
            wx.navigateTo({
                url: "/pages/healthCodeBind/index"
            });
        },
        getDetail: function() {
            var e = this;
            t.default.loading({
                duration: 6e3,
                message: "加载中...",
                loadingType: "spinner",
                context: this
            });
            var i = {
                groupid: u,
                user_scan: !0
            };
            s.services("api/app/community/pass/forcheckpoint").get(i).then(function(i) {
                if (t.default.loading({
                    duration: 0,
                    message: "加载中...",
                    loadingType: "spinner",
                    context: e
                }), t.default.clear(), i && i.data.Success) {
                    var a = i.data.Result, u = {};
                    if (a.house && (u.areaid = a.house.areaid, u.groupid = a.house.groupid, u.hid = a.house.id), 
                    !a.use || a.point.tags && -1 != a.point.tags.indexOf("community.checkpoint.station") || (u.passid = a.use.id, 
                    u.pass_type = a.use.type, a.use.areaid && (u.areaid = a.use.areaid), a.use.hid && (u.hid = a.use.hid), 
                    a.use.groupid && (u.groupid = a.use.groupid)), a.use_members && a.use_members.map(function(e, t) {
                        e.uid && e.uid == s.globalData.self.id && a.use_members.splice(t, 1);
                    }), a.use) {
                        a.use.text = function(e) {
                            var t = null;
                            switch (e.limit_type) {
                              case 0:
                                t = "不限次数";
                                break;

                              case 1:
                                t = "每" + e.limit.cycle + "天可使用" + e.limit.times + "次", e.id && (t += "，剩余" + (e.limit.times - (e.limit.use_times || 0)) + "次");
                                break;

                              case 2:
                                t = "总" + e.limit.times + "次", e.id && (t += "，剩" + (e.limit.times - (e.limit.use_times || 0)) + "次");
                            }
                            return e.state, t;
                        }(a.use);
                    }
                    l = a;
                    var r = [];
                    a && a.apply && a.apply.length > 0 && a.apply.map(function(e, t) {
                        "桂电学生临时通行证" != e.name && "桂电学生外宿通行证" != e.name && r.push(e);
                    });
                    var d = {
                        code: a.code ? a.code : null,
                        whitelist_user: a.whitelist_user,
                        user: a.user ? a.user : {},
                        apply: r || null,
                        group: a.group ? a.group : null,
                        parent: a.parent ? a.parent : null,
                        house: a.house ? a.house : null,
                        use: a.use ? a.use : null,
                        memebers: a.use_members ? a.use_members : null,
                        person: u,
                        log: a.log ? a.log : null,
                        last_plate: a.last_plate ? a.last_plate : null,
                        point: a.point ? a.point : null,
                        is_id: !1,
                        error: !1
                    };
                    n && (d.flow = n), o && (d.mqtt_key = o), a.group && a.group.tags && a.group.tags.indexOf("community.checkpoint.autopass") > -1 && (d.autopass = !0), 
                    e.setData(d);
                } else i.data.Error ? (0, t.default)(i.data.Error) : (t.default.clear(), e.setData({
                    error: !0
                }));
            });
        },
        onchange: function(e) {
            console.log(e), this.triggerEvent("change", {
                detail: l,
                data: e.detail.data
            });
        }
    }
});