var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function() {
    var a = {}, e = function(e, n) {
        if (!a[e]) return require(n);
        if (!a[e].status) {
            var r = a[e].m;
            r._exports = r._tempexports;
            var o = Object.getOwnPropertyDescriptor(r, "exports");
            o && o.configurable && Object.defineProperty(r, "exports", {
                set: function(a) {
                    "object" === (void 0 === a ? "undefined" : t(a)) && a !== r._exports && (r._exports.__proto__ = a.__proto__, 
                    Object.keys(a).forEach(function(t) {
                        r._exports[t] = a[t];
                    })), r._tempexports = a;
                },
                get: function() {
                    return r._tempexports;
                }
            }), a[e].status = 1, a[e].func(a[e].req, r, r.exports);
        }
        return a[e].m.exports;
    };
    return function(t, e, n) {
        var r = {
            exports: {},
            _tempexports: {}
        };
        a[t] = {
            status: 0,
            func: e,
            req: n,
            m: r
        };
    }(1585748419427, function(t, a, e) {
        function n(t) {
            wx.getNetworkType({
                success: function(a) {
                    t(a.networkType);
                }
            });
        }
        function r() {
            var t = wx.getSystemInfoSync();
            return {
                adt: encodeURIComponent(t.model),
                scl: t.pixelRatio,
                scr: t.windowWidth + "x" + t.windowHeight,
                lg: t.language,
                fl: t.version,
                jv: encodeURIComponent(t.system),
                tz: encodeURIComponent(t.platform)
            };
        }
        function o() {
            try {
                return wx.getStorageSync(v.prefix + "auid");
            } catch (t) {}
        }
        function s() {
            try {
                var t = u();
                return wx.setStorageSync(v.prefix + "auid", t), t;
            } catch (t) {}
        }
        function i() {
            try {
                return wx.getStorageSync(v.prefix + "ssid");
            } catch (t) {}
        }
        function p() {
            try {
                var t = "s" + u();
                return wx.setStorageSync(v.prefix + "ssid", t), t;
            } catch (t) {}
        }
        function u(t) {
            for (var a = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ], e = 10; 1 < e; e--) {
                var n = Math.floor(10 * Math.random()), r = a[n];
                a[n] = a[e - 1], a[e - 1] = r;
            }
            for (e = n = 0; 5 > e; e++) n = 10 * n + a[e];
            return (t || "") + (n + "") + +new Date();
        }
        function c() {
            try {
                var t = getCurrentPages(), a = "/";
                return 0 < t.length && (a = t.pop().__route__), a;
            } catch (t) {
                console.log("get current page path error:" + t);
            }
        }
        function f() {
            var t = {
                dm: "wechat.apps.xx",
                url: encodeURIComponent(c() + g(m.Data.pageQuery)),
                pvi: "",
                si: "",
                ty: 0
            };
            return t.pvi = function() {
                var a = o();
                return a || (a = s(), t.ty = 1), a;
            }(), t.si = function() {
                var t = i();
                return t || (t = p()), t;
            }(), t;
        }
        function l() {
            var t = r();
            return n(function(t) {
                try {
                    wx.setStorageSync(v.prefix + "ntdata", t);
                } catch (t) {}
            }), t.ct = wx.getStorageSync(v.prefix + "ntdata") || "4g", t;
        }
        function h() {
            var t, a = m.Data.userInfo, e = [];
            for (t in a) a.hasOwnProperty(t) && e.push(t + "=" + a[t]);
            return a = e.join(";"), {
                r2: v.app_id,
                r4: "wx",
                ext: "v=" + v.version + (null !== a && "" !== a ? ";ui=" + encodeURIComponent(a) : "")
            };
        }
        function g(t) {
            if (!v.stat_param || !t) return "";
            t = _(t);
            var a, e = [];
            for (a in t) e.push(a + "=" + t[a]);
            return 0 < e.length ? "?" + e.join("&") : "";
        }
        function _(t) {
            if (1 > v.ignore_params.length) return t;
            var a, e = {};
            for (a in t) 0 <= v.ignore_params.indexOf(a) || (e[a] = t[a]);
            return e;
        }
        function y() {
            var t = Page;
            Page = function(a) {
                var e = a.onLoad;
                a.onLoad = function(t) {
                    e && e.call(this, t), m.Data.lastPageQuery = m.Data.pageQuery, m.Data.pageQuery = t, 
                    m.Data.lastPageUrl = m.Data.pageUrl, m.Data.pageUrl = c(), m.Data.show = !1, m.Page.init();
                }, t(a);
            };
        }
        var v = {
            app_id: "",
            event_id: "",
            api_base: "https://pingtas.qq.com/pingd",
            prefix: "_mta_",
            version: "1.3.9",
            stat_share_app: !1,
            stat_pull_down_fresh: !1,
            stat_reach_bottom: !1,
            stat_param: !0
        }, m = {
            App: {
                init: function(t) {
                    "appID" in t && (v.app_id = t.appID), "eventID" in t && (v.event_id = t.eventID), 
                    "statShareApp" in t && (v.stat_share_app = t.statShareApp), "statPullDownFresh" in t && (v.stat_pull_down_fresh = t.statPullDownFresh), 
                    "statReachBottom" in t && (v.stat_reach_bottom = t.statReachBottom), "ignoreParams" in t && (v.ignore_params = t.ignoreParams), 
                    "statParam" in t && (v.stat_param = t.statParam), p();
                    try {
                        "lauchOpts" in t && (m.Data.lanchInfo = t.lauchOpts, m.Data.lanchInfo.landing = 1);
                    } catch (t) {}
                    "autoReport" in t && t.autoReport && y();
                }
            },
            Page: {
                init: function() {
                    var t = getCurrentPages()[getCurrentPages().length - 1];
                    t.onShow && function() {
                        var a = t.onShow;
                        t.onShow = function() {
                            if (!0 === m.Data.show) {
                                var t = m.Data.lastPageQuery;
                                m.Data.lastPageQuery = m.Data.pageQuery, m.Data.pageQuery = t, m.Data.lastPageUrl = m.Data.pageUrl, 
                                m.Data.pageUrl = c();
                            }
                            m.Data.show = !0, m.Page.stat(), a.apply(this, arguments);
                        };
                    }(), v.stat_pull_down_fresh && t.onPullDownRefresh && function() {
                        var a = t.onPullDownRefresh;
                        t.onPullDownRefresh = function() {
                            m.Event.stat(v.prefix + "pulldownfresh", {
                                url: t.__route__
                            }), a.apply(this, arguments);
                        };
                    }(), v.stat_reach_bottom && t.onReachBottom && function() {
                        var a = t.onReachBottom;
                        t.onReachBottom = function() {
                            m.Event.stat(v.prefix + "reachbottom", {
                                url: t.__route__
                            }), a.apply(this, arguments);
                        };
                    }(), v.stat_share_app && t.onShareAppMessage && function() {
                        var a = t.onShareAppMessage;
                        t.onShareAppMessage = function() {
                            return m.Event.stat(v.prefix + "shareapp", {
                                url: t.__route__
                            }), a.apply(this, arguments);
                        };
                    }();
                },
                multiStat: function(t, a) {
                    if (1 == a) m.Page.stat(t); else {
                        var e = getCurrentPages()[getCurrentPages().length - 1];
                        e.onShow && function() {
                            var a = e.onShow;
                            e.onShow = function() {
                                m.Page.stat(t), a.call(this, arguments);
                            };
                        }();
                    }
                },
                stat: function(t) {
                    if ("" != v.app_id) {
                        var a = [], e = h();
                        if (t && (e.r2 = t), t = [ f(), e, l() ], m.Data.lanchInfo) {
                            t.push({
                                ht: m.Data.lanchInfo.scene
                            }), m.Data.pageQuery && m.Data.pageQuery._mta_ref_id && t.push({
                                rarg: m.Data.pageQuery._mta_ref_id
                            });
                            try {
                                1 == m.Data.lanchInfo.landing && (e.ext += ";lp=1", m.Data.lanchInfo.landing = 0);
                            } catch (t) {}
                        }
                        t.push({
                            rdm: "/",
                            rurl: 0 >= m.Data.lastPageUrl.length ? m.Data.pageUrl + g(m.Data.lastPageQuery) : encodeURIComponent(m.Data.lastPageUrl + g(m.Data.lastPageQuery))
                        }), t.push({
                            rand: +new Date()
                        }), e = 0;
                        for (var n = t.length; e < n; e++) for (var r in t[e]) t[e].hasOwnProperty(r) && a.push(r + "=" + (void 0 === t[e][r] ? "" : t[e][r]));
                        wx.request({
                            url: v.api_base + "?" + a.join("&").toLowerCase()
                        });
                    }
                }
            },
            Event: {
                stat: function(t, a) {
                    if ("" != v.event_id) {
                        var e = [], n = f(), r = h();
                        n.dm = "wxapps.click", n.url = t, r.r2 = v.event_id;
                        var o, s = void 0 === a ? {} : a, i = [];
                        for (o in s) s.hasOwnProperty(o) && i.push(encodeURIComponent(o) + "=" + encodeURIComponent(s[o]));
                        for (s = i.join(";"), r.r5 = s, s = 0, r = (n = [ n, r, l(), {
                            rand: +new Date()
                        } ]).length; s < r; s++) for (var p in n[s]) n[s].hasOwnProperty(p) && e.push(p + "=" + (void 0 === n[s][p] ? "" : n[s][p]));
                        wx.request({
                            url: v.api_base + "?" + e.join("&").toLowerCase()
                        });
                    }
                }
            },
            Data: {
                userInfo: null,
                lanchInfo: null,
                pageQuery: null,
                lastPageQuery: null,
                pageUrl: "",
                lastPageUrl: "",
                show: !1
            }
        };
        a.exports = m;
    }, function(t) {
        return e({}[t], t);
    }), e(1585748419427);
}();