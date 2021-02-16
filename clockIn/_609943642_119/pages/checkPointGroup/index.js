function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

t(require("../../utils/we-moment-with-locales"));

var e = t(require("vant-weapp/toast/toast")), a = (t(require("vant-weapp/dialog/dialog")), 
getApp()), n = require("../../miniprogram_npm/@antv/wx-f2/index.js"), o = "";

Page({
    data: {
        opts0: {
            lazyLoad: !0
        },
        opts1: {
            lazyLoad: !0
        },
        opts3: {
            lazyLoad: !0
        }
    },
    onLoad: function(t) {
        o = t.id, this.getInfo(), this.setData({
            CommunityCheckpointTypeEnums: a.globalData.enums.CommunityCheckpointTypeEnums
        });
    },
    onShow: function() {
        this.getUser(), this.getLog();
    },
    getLog: function(t) {
        var n = this, i = {
            groupid: o
        };
        a.services("api/app/community/checkpoint/details").get(i).then(function(t) {
            t && t.data.Success ? (n.setData({
                detail: t.data.Result
            }), e.default.clear()) : e.default.fail(t.data.Error);
        });
    },
    getUser: function(t) {
        var n = this, i = {
            id: o,
            s: 3
        };
        a.services("api/group/users").get(i).then(function(t) {
            t && t.data.Success ? (n.setData({
                users: t.data.Result.Data
            }), e.default.clear()) : e.default.fail(t.data.Error);
        });
    },
    getInfo: function(t) {
        var i = this, r = {
            groupid: o
        }, s = this;
        a.services("api/app/community/checkpoint/pass/log/stat").get(r).then(function(t) {
            if (t && t.data.Success) {
                var a = t.data.Result;
                i.setData({
                    info: a
                }), a.map(function(t, e) {
                    var a = t.cells, o = t.cells.reduce(function(t, e) {
                        return t + e.v;
                    }, 0);
                    console.log(o);
                    var i = {};
                    a.map(function(t, e) {
                        i[t.n] = t.v, a[e].percent = t.v / o, a[e].a = 1;
                    }), s.chartComponent = s.selectComponent("#opts" + e), console.log(s.chartComponent), 
                    s.chartComponent.init(function(t, e, o) {
                        var r = new n.Chart({
                            el: t,
                            width: e,
                            height: o
                        });
                        return r.source(a, {
                            percent: {
                                formatter: function(t) {
                                    return 100 * t + "%";
                                }
                            }
                        }), r.legend({
                            position: "right",
                            itemFormatter: function(t) {
                                return t + "  " + i[t];
                            }
                        }), r.tooltip(!1), r.coord("polar", {
                            transposed: !0,
                            radius: .7
                        }), r.axis(!1), r.interval().position("a*percent").color("n", [ "#1890FF", "#13C2C2", "#2FC25B", "#FACC14", "#F04864", "#8543E0" ]).adjust("stack").style({
                            lineWidth: .7,
                            stroke: "#fff",
                            lineJoin: "round",
                            lineCap: "round"
                        }).animate({
                            appear: {
                                duration: 1500,
                                easing: "bounceOut"
                            }
                        }), r.render(), r;
                    });
                }), e.default.clear();
            } else e.default.fail(t.data.Error);
        });
    },
    goUser: function() {
        wx.navigateTo({
            url: "/pages/checkPointUser/index?id=" + o
        });
    },
    goUrl: function() {
        wx.navigateTo({
            url: "/pages/checkPointGroupCode/index?id=" + o
        });
    }
});