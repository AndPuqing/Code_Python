var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function() {
    var e = {}, n = function(n, r) {
        if (!e[n]) return require(r);
        if (!e[n].status) {
            var o = e[n].m;
            o._exports = o._tempexports;
            var u = Object.getOwnPropertyDescriptor(o, "exports");
            u && u.configurable && Object.defineProperty(o, "exports", {
                set: function(e) {
                    "object" === (void 0 === e ? "undefined" : t(e)) && e !== o._exports && (o._exports.__proto__ = e.__proto__, 
                    Object.keys(e).forEach(function(t) {
                        o._exports[t] = e[t];
                    })), o._tempexports = e;
                },
                get: function() {
                    return o._tempexports;
                }
            }), e[n].status = 1, e[n].func(e[n].req, o, o.exports);
        }
        return e[n].m.exports;
    };
    return function(t, n, r) {
        var o = {
            exports: {},
            _tempexports: {}
        };
        e[t] = {
            status: 0,
            func: n,
            req: r,
            m: o
        };
    }(1585748419425, function(t, e, n) {
        !function(t) {
            function n(t, e) {
                for (var n = [], r = 0, o = t.length; r < o; r++) n.push(t[r].substr(0, e));
                return n;
            }
            function r(t) {
                return function(e, n, r) {
                    var o = r[t].indexOf(n.charAt(0).toUpperCase() + n.substr(1).toLowerCase());
                    ~o && (e.month = o);
                };
            }
            function o(t, e) {
                for (t = String(t), e = e || 2; t.length < e; ) t = "0" + t;
                return t;
            }
            var u = {}, i = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, a = /\d\d?/, s = /\d{3}/, c = /\d{4}/, f = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, m = /\[([^]*?)\]/gm, d = function() {}, h = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ], l = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ], p = n(l, 3), M = n(h, 3);
            u.i18n = {
                dayNamesShort: M,
                dayNames: h,
                monthNamesShort: p,
                monthNames: l,
                amPm: [ "am", "pm" ],
                DoFn: function(t) {
                    return t + [ "th", "st", "nd", "rd" ][t % 10 > 3 ? 0 : (t - t % 10 != 10) * t % 10];
                }
            };
            var g = {
                D: function(t) {
                    return t.getDate();
                },
                DD: function(t) {
                    return o(t.getDate());
                },
                Do: function(t, e) {
                    return e.DoFn(t.getDate());
                },
                d: function(t) {
                    return t.getDay();
                },
                dd: function(t) {
                    return o(t.getDay());
                },
                ddd: function(t, e) {
                    return e.dayNamesShort[t.getDay()];
                },
                dddd: function(t, e) {
                    return e.dayNames[t.getDay()];
                },
                M: function(t) {
                    return t.getMonth() + 1;
                },
                MM: function(t) {
                    return o(t.getMonth() + 1);
                },
                MMM: function(t, e) {
                    return e.monthNamesShort[t.getMonth()];
                },
                MMMM: function(t, e) {
                    return e.monthNames[t.getMonth()];
                },
                YY: function(t) {
                    return String(t.getFullYear()).substr(2);
                },
                YYYY: function(t) {
                    return o(t.getFullYear(), 4);
                },
                h: function(t) {
                    return t.getHours() % 12 || 12;
                },
                hh: function(t) {
                    return o(t.getHours() % 12 || 12);
                },
                H: function(t) {
                    return t.getHours();
                },
                HH: function(t) {
                    return o(t.getHours());
                },
                m: function(t) {
                    return t.getMinutes();
                },
                mm: function(t) {
                    return o(t.getMinutes());
                },
                s: function(t) {
                    return t.getSeconds();
                },
                ss: function(t) {
                    return o(t.getSeconds());
                },
                S: function(t) {
                    return Math.round(t.getMilliseconds() / 100);
                },
                SS: function(t) {
                    return o(Math.round(t.getMilliseconds() / 10), 2);
                },
                SSS: function(t) {
                    return o(t.getMilliseconds(), 3);
                },
                a: function(t, e) {
                    return t.getHours() < 12 ? e.amPm[0] : e.amPm[1];
                },
                A: function(t, e) {
                    return t.getHours() < 12 ? e.amPm[0].toUpperCase() : e.amPm[1].toUpperCase();
                },
                ZZ: function(t) {
                    var e = t.getTimezoneOffset();
                    return (e > 0 ? "-" : "+") + o(100 * Math.floor(Math.abs(e) / 60) + Math.abs(e) % 60, 4);
                }
            }, y = {
                D: [ a, function(t, e) {
                    t.day = e;
                } ],
                Do: [ new RegExp(a.source + f.source), function(t, e) {
                    t.day = parseInt(e, 10);
                } ],
                M: [ a, function(t, e) {
                    t.month = e - 1;
                } ],
                YY: [ a, function(t, e) {
                    var n = +("" + new Date().getFullYear()).substr(0, 2);
                    t.year = "" + (e > 68 ? n - 1 : n) + e;
                } ],
                h: [ a, function(t, e) {
                    t.hour = e;
                } ],
                m: [ a, function(t, e) {
                    t.minute = e;
                } ],
                s: [ a, function(t, e) {
                    t.second = e;
                } ],
                YYYY: [ c, function(t, e) {
                    t.year = e;
                } ],
                S: [ /\d/, function(t, e) {
                    t.millisecond = 100 * e;
                } ],
                SS: [ /\d{2}/, function(t, e) {
                    t.millisecond = 10 * e;
                } ],
                SSS: [ s, function(t, e) {
                    t.millisecond = e;
                } ],
                d: [ a, d ],
                ddd: [ f, d ],
                MMM: [ f, r("monthNamesShort") ],
                MMMM: [ f, r("monthNames") ],
                a: [ f, function(t, e, n) {
                    var r = e.toLowerCase();
                    r === n.amPm[0] ? t.isPm = !1 : r === n.amPm[1] && (t.isPm = !0);
                } ],
                ZZ: [ /([\+\-]\d\d:?\d\d|Z)/, function(t, e) {
                    "Z" === e && (e = "+00:00");
                    var n, r = (e + "").match(/([\+\-]|\d\d)/gi);
                    r && (n = 60 * r[1] + parseInt(r[2], 10), t.timezoneOffset = "+" === r[0] ? n : -n);
                } ]
            };
            y.dd = y.d, y.dddd = y.ddd, y.DD = y.D, y.mm = y.m, y.hh = y.H = y.HH = y.h, y.MM = y.M, 
            y.ss = y.s, y.A = y.a, u.masks = {
                default: "ddd MMM DD YYYY HH:mm:ss",
                shortDate: "M/D/YY",
                mediumDate: "MMM D, YYYY",
                longDate: "MMMM D, YYYY",
                fullDate: "dddd, MMMM D, YYYY",
                shortTime: "HH:mm",
                mediumTime: "HH:mm:ss",
                longTime: "HH:mm:ss.SSS"
            }, u.format = function(t, e, n) {
                var r = n || u.i18n;
                if ("number" == typeof t && (t = new Date(t)), "[object Date]" !== Object.prototype.toString.call(t) || isNaN(t.getTime())) throw new Error("Invalid Date in fecha.format");
                var o = [];
                return e = (e = u.masks[e] || e || u.masks.default).replace(m, function(t, e) {
                    return o.push(e), "??";
                }), (e = e.replace(i, function(e) {
                    return e in g ? g[e](t, r) : e.slice(1, e.length - 1);
                })).replace(/\?\?/g, function() {
                    return o.shift();
                });
            }, u.parse = function(t, e, n) {
                var r = n || u.i18n;
                if ("string" != typeof e) throw new Error("Invalid format in fecha.parse");
                if (e = u.masks[e] || e, t.length > 1e3) return !1;
                var o = !0, a = {};
                if (e.replace(i, function(e) {
                    if (y[e]) {
                        var n = y[e], u = t.search(n[0]);
                        ~u ? t.replace(n[0], function(e) {
                            return n[1](a, e, r), t = t.substr(u + e.length), e;
                        }) : o = !1;
                    }
                    return y[e] ? "" : e.slice(1, e.length - 1);
                }), !o) return !1;
                var s = new Date();
                !0 === a.isPm && null != a.hour && 12 != +a.hour ? a.hour = +a.hour + 12 : !1 === a.isPm && 12 == +a.hour && (a.hour = 0);
                var c;
                return null != a.timezoneOffset ? (a.minute = +(a.minute || 0) - +a.timezoneOffset, 
                c = new Date(Date.UTC(a.year || s.getFullYear(), a.month || 0, a.day || 1, a.hour || 0, a.minute || 0, a.second || 0, a.millisecond || 0))) : c = new Date(a.year || s.getFullYear(), a.month || 0, a.day || 1, a.hour || 0, a.minute || 0, a.second || 0, a.millisecond || 0), 
                c;
            }, void 0 !== e && e.exports ? e.exports = u : "function" == typeof define && define.amd ? define(function() {
                return u;
            }) : t.fecha = u;
        }(this);
    }, function(t) {
        return n({}[t], t);
    }), n(1585748419425);
}();