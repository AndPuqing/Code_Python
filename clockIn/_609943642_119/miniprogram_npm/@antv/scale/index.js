var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function() {
    var n = {}, e = function(e, r) {
        if (!n[e]) return require(r);
        if (!n[e].status) {
            var i = n[e].m;
            i._exports = i._tempexports;
            var o = Object.getOwnPropertyDescriptor(i, "exports");
            o && o.configurable && Object.defineProperty(i, "exports", {
                set: function(n) {
                    "object" === (void 0 === n ? "undefined" : t(n)) && n !== i._exports && (i._exports.__proto__ = n.__proto__, 
                    Object.keys(n).forEach(function(t) {
                        i._exports[t] = n[t];
                    })), i._tempexports = n;
                },
                get: function() {
                    return i._tempexports;
                }
            }), n[e].status = 1, n[e].func(n[e].req, i, i.exports);
        }
        return n[e].m.exports;
    };
    return function(t, e, r) {
        var i = {
            exports: {},
            _tempexports: {}
        };
        n[t] = {
            status: 0,
            func: e,
            req: r,
            m: i
        };
    }(1585748419422, function(n, e, r) {
        !function(n, i) {
            "object" === (void 0 === r ? "undefined" : t(r)) && "object" === (void 0 === e ? "undefined" : t(e)) ? e.exports = i() : "function" == typeof define && define.amd ? define([], i) : "object" === (void 0 === r ? "undefined" : t(r)) ? r.scale = i() : n.scale = i();
        }("undefined" != typeof self ? self : this, function() {
            return function(t) {
                function n(r) {
                    if (e[r]) return e[r].exports;
                    var i = e[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
                }
                var e = {};
                return n.m = t, n.c = e, n.d = function(t, e, r) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    });
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return n.d(e, "a", e), e;
                }, n.o = function(t, n) {
                    return Object.prototype.hasOwnProperty.call(t, n);
                }, n.p = "", n(n.s = 13);
            }([ function(t, n, e) {
                var r = e(16), i = e(1), o = e(7), a = e(2), u = function() {
                    function t(t) {
                        this._initDefaultCfg(), r(this, t), this.init();
                    }
                    var n = t.prototype;
                    return n._initDefaultCfg = function() {
                        this.type = "base", this.formatter = null, this.range = [ 0, 1 ], this.ticks = null, 
                        this.values = [];
                    }, n.init = function() {}, n.getTicks = function() {
                        var t = this, n = t.ticks, e = [];
                        return i(n, function(n) {
                            var r;
                            r = o(n) ? n : {
                                text: t.getText(n),
                                tickValue: n,
                                value: t.scale(n)
                            }, e.push(r);
                        }), e;
                    }, n.getText = function(t, n) {
                        var e = this.formatter;
                        return t = e ? e(t, n) : t, !a(t) && t.toString || (t = ""), t.toString();
                    }, n.rangeMin = function() {
                        return this.range[0];
                    }, n.rangeMax = function() {
                        var t = this.range;
                        return t[t.length - 1];
                    }, n.invert = function(t) {
                        return t;
                    }, n.translate = function(t) {
                        return t;
                    }, n.scale = function(t) {
                        return t;
                    }, n.clone = function() {
                        var t = this, n = t.constructor, e = {};
                        return i(t, function(n, r) {
                            e[r] = t[r];
                        }), new n(e);
                    }, n.change = function(t) {
                        return this.ticks = null, r(this, t), this.init(), this;
                    }, t;
                }();
                t.exports = u;
            }, function(t, n, e) {
                var r = e(7), i = e(17);
                t.exports = function(t, n) {
                    if (t) if (i(t)) for (var e = 0, o = t.length; e < o && !1 !== n(t[e], e); e++) ; else if (r(t)) for (var a in t) if (t.hasOwnProperty(a) && !1 === n(t[a], a)) break;
                };
            }, function(t, n) {
                t.exports = function(t) {
                    return null === t || void 0 === t;
                };
            }, function(t, n) {
                var e = {}.toString;
                t.exports = function(t, n) {
                    return e.call(t) === "[object " + n + "]";
                };
            }, function(t, n, e) {
                function r(t, n) {
                    t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                }
                var i = e(2), o = e(1), a = e(0), u = e(18), s = function(t) {
                    function n() {
                        return t.apply(this, arguments) || this;
                    }
                    r(n, t);
                    var e = n.prototype;
                    return e._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this);
                        var n = this;
                        n.type = "linear", n.isLinear = !0, n.nice = !1, n.min = null, n.minLimit = null, 
                        n.max = null, n.maxLimit = null, n.tickCount = null, n.tickInterval = null, n.minTickInterval = null, 
                        n.snapArray = null;
                    }, e.init = function() {
                        var t = this;
                        if (t.ticks) {
                            var n = t.ticks, e = t.translate(n[0]), r = t.translate(n[n.length - 1]);
                            (i(t.min) || t.min > e) && (t.min = e), (i(t.max) || t.max < r) && (t.max = r);
                        } else t.min = t.translate(t.min), t.max = t.translate(t.max), t.initTicks();
                    }, e.calculateTicks = function() {
                        var t = this.min, n = this.max, e = this.minLimit, r = this.maxLimit, i = this.tickCount, o = this.tickInterval, a = this.minTickInterval, s = this.snapArray;
                        if (1 === i) throw new Error("linear scale'tickCount should not be 1");
                        if (n < t) throw new Error("max: " + n + " should not be less than min: " + t);
                        return u({
                            min: t,
                            max: n,
                            minLimit: e,
                            maxLimit: r,
                            minCount: i,
                            maxCount: i,
                            interval: o,
                            minTickInterval: a,
                            snapArray: s
                        }).ticks;
                    }, e.initTicks = function() {
                        var t = this, n = t.calculateTicks();
                        if (t.nice) t.ticks = n, t.min = n[0], t.max = n[n.length - 1]; else {
                            var e = [];
                            o(n, function(n) {
                                n >= t.min && n <= t.max && e.push(n);
                            }), e.length || (e.push(t.min), e.push(t.max)), t.ticks = e;
                        }
                    }, e.scale = function(t) {
                        if (i(t)) return NaN;
                        var n = this.max, e = this.min;
                        if (n === e) return 0;
                        var r = (t - e) / (n - e), o = this.rangeMin();
                        return o + r * (this.rangeMax() - o);
                    }, e.invert = function(t) {
                        var n = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
                        return this.min + n * (this.max - this.min);
                    }, n;
                }(a);
                a.Linear = s, t.exports = s;
            }, function(t, n, e) {
                var r = e(3);
                t.exports = function(t) {
                    return r(t, "Number");
                };
            }, function(t, n, e) {
                var r = e(3);
                t.exports = function(t) {
                    return r(t, "String");
                };
            }, function(n, e) {
                var r = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? function(n) {
                    return void 0 === n ? "undefined" : t(n);
                } : function(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : void 0 === n ? "undefined" : t(n);
                };
                n.exports = function(t) {
                    var n = void 0 === t ? "undefined" : r(t);
                    return null !== t && "object" === n || "function" === n;
                };
            }, function(t, n) {
                function e(t) {
                    var n = 1;
                    if (t === 1 / 0 || t === -1 / 0) throw new Error("Not support Infinity!");
                    if (t < 1) {
                        for (var e = 0; t < 1; ) n /= 10, t *= 10, e++;
                        n.toString().length > o && (n = parseFloat(n.toFixed(e)));
                    } else for (;t > 10; ) n *= 10, t /= 10;
                    return n;
                }
                function r(t, n) {
                    var e = t.length;
                    if (0 === e) return NaN;
                    var r = t[0];
                    if (n < t[0]) return NaN;
                    if (n >= t[e - 1]) return t[e - 1];
                    for (var i = 1; i < t.length && !(n < t[i]); i++) r = t[i];
                    return r;
                }
                function i(t, n) {
                    var e = t.length;
                    if (0 === e) return NaN;
                    var r;
                    if (n > t[e - 1]) return NaN;
                    if (n < t[0]) return t[0];
                    for (var i = 1; i < t.length; i++) if (n <= t[i]) {
                        r = t[i];
                        break;
                    }
                    return r;
                }
                var o = 12, a = {
                    snapFactorTo: function(t, n, r) {
                        if (isNaN(t)) return NaN;
                        var i = 1;
                        if (0 !== t) {
                            t < 0 && (i = -1);
                            var u = e(t *= i);
                            i *= u, t /= u;
                        }
                        t = "floor" === r ? a.snapFloor(n, t) : "ceil" === r ? a.snapCeiling(n, t) : a.snapTo(n, t);
                        var s = parseFloat((t * i).toPrecision(o));
                        return Math.abs(i) < 1 && s.toString().length > o && (s = t / parseInt(1 / i) * (i > 0 ? 1 : -1)), 
                        s;
                    },
                    snapMultiple: function(t, n, e) {
                        return ("ceil" === e ? Math.ceil(t / n) : "floor" === e ? Math.floor(t / n) : Math.round(t / n)) * n;
                    },
                    snapTo: function(t, n) {
                        var e = r(t, n), o = i(t, n);
                        if (isNaN(e) || isNaN(o)) {
                            if (t[0] >= n) return t[0];
                            var a = t[t.length - 1];
                            if (a <= n) return a;
                        }
                        return Math.abs(n - e) < Math.abs(o - n) ? e : o;
                    },
                    snapFloor: function(t, n) {
                        return r(t, n);
                    },
                    snapCeiling: function(t, n) {
                        return i(t, n);
                    },
                    fixedBase: function(t, n) {
                        var e = n.toString(), r = e.indexOf("."), i = e.indexOf("e-");
                        if (r < 0 && i < 0) return Math.round(t);
                        var o = i >= 0 ? parseInt(e.substr(i + 2), 10) : e.substr(r + 1).length;
                        return o > 20 && (o = 20), parseFloat(t.toFixed(o));
                    }
                };
                t.exports = a;
            }, function(t, n, e) {
                function r(t, n) {
                    t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                }
                var i = e(0), o = e(10), a = e(1), u = e(5), s = e(6), c = function(t) {
                    function n() {
                        return t.apply(this, arguments) || this;
                    }
                    r(n, t);
                    var e = n.prototype;
                    return e._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this), this.type = "cat", this.isCategory = !0, 
                        this.isRounding = !0;
                    }, e.init = function() {
                        var t = this, n = t.values, e = t.tickCount;
                        if (a(n, function(t, e) {
                            n[e] = t.toString();
                        }), !t.ticks) {
                            var r = n;
                            e && (r = o({
                                maxCount: e,
                                data: n,
                                isRounding: t.isRounding
                            }).ticks), this.ticks = r;
                        }
                    }, e.getText = function(n) {
                        return -1 === this.values.indexOf(n) && u(n) && (n = this.values[Math.round(n)]), 
                        t.prototype.getText.call(this, n);
                    }, e.translate = function(t) {
                        var n = this.values.indexOf(t);
                        return -1 === n && u(t) ? n = t : -1 === n && (n = NaN), n;
                    }, e.scale = function(t) {
                        var n, e = this.rangeMin(), r = this.rangeMax();
                        return (s(t) || -1 !== this.values.indexOf(t)) && (t = this.translate(t)), n = this.values.length > 1 ? t / (this.values.length - 1) : t, 
                        e + n * (r - e);
                    }, e.invert = function(t) {
                        if (s(t)) return t;
                        var n = this.rangeMin(), e = this.rangeMax();
                        t < n && (t = n), t > e && (t = e);
                        var r = (t - n) / (e - n), i = Math.round(r * (this.values.length - 1)) % this.values.length;
                        return i = i || 0, this.values[i];
                    }, n;
                }(i);
                i.Cat = c, t.exports = c;
            }, function(t, n, e) {
                function r(t) {
                    var n = [];
                    return o(t, function(t) {
                        n = n.concat(t);
                    }), n;
                }
                function i(t, n) {
                    var e;
                    for (e = n; e > 0 && t % e != 0; e--) ;
                    if (1 === e) for (e = n; e > 0 && (t - 1) % e != 0; e--) ;
                    return e;
                }
                var o = e(1);
                t.exports = function(t) {
                    var n, e = {}, o = [], a = t.isRounding, u = r(t.data), s = u.length, c = t.maxCount || 8;
                    if (a ? 2 === (n = i(s - 1, c - 1) + 1) ? n = c : n < c - 4 && (n = c - 4) : n = c, 
                    !a && s <= n + n / 2) o = [].concat(u); else {
                        for (var f = parseInt(s / (n - 1), 10), l = u.map(function(t, n) {
                            return n % f == 0 ? u.slice(n, n + f) : null;
                        }).filter(function(t) {
                            return t;
                        }), h = 1, p = l.length; h < p && (a ? h * f < s - f : h < n - 1); h++) o.push(l[h][0]);
                        if (u.length) {
                            o.unshift(u[0]);
                            var m = u[s - 1];
                            -1 === o.indexOf(m) && o.push(m);
                        }
                    }
                    return e.categories = u, e.ticks = o, e;
                };
            }, function(t, n, e) {
                var r;
                !function(i) {
                    function o(t, n) {
                        for (var e = [], r = 0, i = t.length; r < i; r++) e.push(t[r].substr(0, n));
                        return e;
                    }
                    function a(t) {
                        return function(n, e, r) {
                            var i = r[t].indexOf(e.charAt(0).toUpperCase() + e.substr(1).toLowerCase());
                            ~i && (n.month = i);
                        };
                    }
                    function u(t, n) {
                        for (t = String(t), n = n || 2; t.length < n; ) t = "0" + t;
                        return t;
                    }
                    var s = {}, c = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, f = /\d\d?/, l = /\d{3}/, h = /\d{4}/, p = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, m = /\[([^]*?)\]/gm, v = function() {}, g = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ], d = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ], x = o(d, 3), y = o(g, 3);
                    s.i18n = {
                        dayNamesShort: y,
                        dayNames: g,
                        monthNamesShort: x,
                        monthNames: d,
                        amPm: [ "am", "pm" ],
                        DoFn: function(t) {
                            return t + [ "th", "st", "nd", "rd" ][t % 10 > 3 ? 0 : (t - t % 10 != 10) * t % 10];
                        }
                    };
                    var M = {
                        D: function(t) {
                            return t.getDate();
                        },
                        DD: function(t) {
                            return u(t.getDate());
                        },
                        Do: function(t, n) {
                            return n.DoFn(t.getDate());
                        },
                        d: function(t) {
                            return t.getDay();
                        },
                        dd: function(t) {
                            return u(t.getDay());
                        },
                        ddd: function(t, n) {
                            return n.dayNamesShort[t.getDay()];
                        },
                        dddd: function(t, n) {
                            return n.dayNames[t.getDay()];
                        },
                        M: function(t) {
                            return t.getMonth() + 1;
                        },
                        MM: function(t) {
                            return u(t.getMonth() + 1);
                        },
                        MMM: function(t, n) {
                            return n.monthNamesShort[t.getMonth()];
                        },
                        MMMM: function(t, n) {
                            return n.monthNames[t.getMonth()];
                        },
                        YY: function(t) {
                            return String(t.getFullYear()).substr(2);
                        },
                        YYYY: function(t) {
                            return u(t.getFullYear(), 4);
                        },
                        h: function(t) {
                            return t.getHours() % 12 || 12;
                        },
                        hh: function(t) {
                            return u(t.getHours() % 12 || 12);
                        },
                        H: function(t) {
                            return t.getHours();
                        },
                        HH: function(t) {
                            return u(t.getHours());
                        },
                        m: function(t) {
                            return t.getMinutes();
                        },
                        mm: function(t) {
                            return u(t.getMinutes());
                        },
                        s: function(t) {
                            return t.getSeconds();
                        },
                        ss: function(t) {
                            return u(t.getSeconds());
                        },
                        S: function(t) {
                            return Math.round(t.getMilliseconds() / 100);
                        },
                        SS: function(t) {
                            return u(Math.round(t.getMilliseconds() / 10), 2);
                        },
                        SSS: function(t) {
                            return u(t.getMilliseconds(), 3);
                        },
                        a: function(t, n) {
                            return t.getHours() < 12 ? n.amPm[0] : n.amPm[1];
                        },
                        A: function(t, n) {
                            return t.getHours() < 12 ? n.amPm[0].toUpperCase() : n.amPm[1].toUpperCase();
                        },
                        ZZ: function(t) {
                            var n = t.getTimezoneOffset();
                            return (n > 0 ? "-" : "+") + u(100 * Math.floor(Math.abs(n) / 60) + Math.abs(n) % 60, 4);
                        }
                    }, D = {
                        D: [ f, function(t, n) {
                            t.day = n;
                        } ],
                        Do: [ new RegExp(f.source + p.source), function(t, n) {
                            t.day = parseInt(n, 10);
                        } ],
                        M: [ f, function(t, n) {
                            t.month = n - 1;
                        } ],
                        YY: [ f, function(t, n) {
                            var e = +("" + new Date().getFullYear()).substr(0, 2);
                            t.year = "" + (n > 68 ? e - 1 : e) + n;
                        } ],
                        h: [ f, function(t, n) {
                            t.hour = n;
                        } ],
                        m: [ f, function(t, n) {
                            t.minute = n;
                        } ],
                        s: [ f, function(t, n) {
                            t.second = n;
                        } ],
                        YYYY: [ h, function(t, n) {
                            t.year = n;
                        } ],
                        S: [ /\d/, function(t, n) {
                            t.millisecond = 100 * n;
                        } ],
                        SS: [ /\d{2}/, function(t, n) {
                            t.millisecond = 10 * n;
                        } ],
                        SSS: [ l, function(t, n) {
                            t.millisecond = n;
                        } ],
                        d: [ f, v ],
                        ddd: [ p, v ],
                        MMM: [ p, a("monthNamesShort") ],
                        MMMM: [ p, a("monthNames") ],
                        a: [ p, function(t, n, e) {
                            var r = n.toLowerCase();
                            r === e.amPm[0] ? t.isPm = !1 : r === e.amPm[1] && (t.isPm = !0);
                        } ],
                        ZZ: [ /([\+\-]\d\d:?\d\d|Z)/, function(t, n) {
                            "Z" === n && (n = "+00:00");
                            var e, r = (n + "").match(/([\+\-]|\d\d)/gi);
                            r && (e = 60 * r[1] + parseInt(r[2], 10), t.timezoneOffset = "+" === r[0] ? e : -e);
                        } ]
                    };
                    D.dd = D.d, D.dddd = D.ddd, D.DD = D.D, D.mm = D.m, D.hh = D.H = D.HH = D.h, D.MM = D.M, 
                    D.ss = D.s, D.A = D.a, s.masks = {
                        default: "ddd MMM DD YYYY HH:mm:ss",
                        shortDate: "M/D/YY",
                        mediumDate: "MMM D, YYYY",
                        longDate: "MMMM D, YYYY",
                        fullDate: "dddd, MMMM D, YYYY",
                        shortTime: "HH:mm",
                        mediumTime: "HH:mm:ss",
                        longTime: "HH:mm:ss.SSS"
                    }, s.format = function(t, n, e) {
                        var r = e || s.i18n;
                        if ("number" == typeof t && (t = new Date(t)), "[object Date]" !== Object.prototype.toString.call(t) || isNaN(t.getTime())) throw new Error("Invalid Date in fecha.format");
                        var i = [];
                        return n = (n = s.masks[n] || n || s.masks.default).replace(m, function(t, n) {
                            return i.push(n), "??";
                        }), (n = n.replace(c, function(n) {
                            return n in M ? M[n](t, r) : n.slice(1, n.length - 1);
                        })).replace(/\?\?/g, function() {
                            return i.shift();
                        });
                    }, s.parse = function(t, n, e) {
                        var r = e || s.i18n;
                        if ("string" != typeof n) throw new Error("Invalid format in fecha.parse");
                        if (n = s.masks[n] || n, t.length > 1e3) return !1;
                        var i = !0, o = {};
                        if (n.replace(c, function(n) {
                            if (D[n]) {
                                var e = D[n], a = t.search(e[0]);
                                ~a ? t.replace(e[0], function(n) {
                                    return e[1](o, n, r), t = t.substr(a + n.length), n;
                                }) : i = !1;
                            }
                            return D[n] ? "" : n.slice(1, n.length - 1);
                        }), !i) return !1;
                        var a = new Date();
                        !0 === o.isPm && null != o.hour && 12 != +o.hour ? o.hour = +o.hour + 12 : !1 === o.isPm && 12 == +o.hour && (o.hour = 0);
                        var u;
                        return null != o.timezoneOffset ? (o.minute = +(o.minute || 0) - +o.timezoneOffset, 
                        u = new Date(Date.UTC(o.year || a.getFullYear(), o.month || 0, o.day || 1, o.hour || 0, o.minute || 0, o.second || 0, o.millisecond || 0))) : u = new Date(o.year || a.getFullYear(), o.month || 0, o.day || 1, o.hour || 0, o.minute || 0, o.second || 0, o.millisecond || 0), 
                        u;
                    }, void 0 !== t && t.exports ? t.exports = s : void 0 !== (r = function() {
                        return s;
                    }.call(n, e, n, t)) && (t.exports = r);
                }();
            }, function(t, n, e) {
                var r = e(6), i = e(22);
                t.exports = {
                    toTimeStamp: function(t) {
                        return r(t) && (t = t.indexOf("T") > 0 ? new Date(t).getTime() : new Date(t.replace(/-/gi, "/")).getTime()), 
                        i(t) && (t = t.getTime()), t;
                    }
                };
            }, function(t, n, e) {
                var r = e(14), i = e(0);
                i.Linear = e(4), i.Identity = e(19), i.Cat = e(9), i.Time = e(20), i.TimeCat = e(23), 
                i.Log = e(24), i.Pow = e(25);
                for (var o in i) !function(t) {
                    if (i.hasOwnProperty(t)) {
                        var n = r(t);
                        i[n] = function(n) {
                            return new i[t](n);
                        };
                    }
                }(o);
                var a = [ "cat", "timeCat" ];
                i.isCategory = function(t) {
                    return a.indexOf(t) >= 0;
                }, t.exports = i;
            }, function(t, n, e) {
                var r = e(15);
                t.exports = function(t) {
                    var n = r(t);
                    return n.charAt(0).toLowerCase() + n.substring(1);
                };
            }, function(t, n, e) {
                var r = e(2);
                t.exports = function(t) {
                    return r(t) ? "" : t.toString();
                };
            }, function(t, n) {
                function e(t, n) {
                    for (var e in n) n.hasOwnProperty(e) && "constructor" !== e && void 0 !== n[e] && (t[e] = n[e]);
                }
                t.exports = function(t, n, r, i) {
                    return n && e(t, n), r && e(t, r), i && e(t, i), t;
                };
            }, function(t, n, e) {
                var r = e(3), i = Array.isArray ? Array.isArray : function(t) {
                    return r(t, "Array");
                };
                t.exports = i;
            }, function(t, n, e) {
                var r = e(2), i = e(5), o = e(8), a = [ 0, 1, 1.2, 1.5, 1.6, 2, 2.2, 2.4, 2.5, 3, 4, 5, 6, 7.5, 8, 10 ], u = [ 0, 1, 2, 4, 5, 10 ];
                t.exports = function(t) {
                    var n = t.min, e = t.max, s = t.interval, c = t.minTickInterval, f = [], l = t.minCount || 5, h = t.maxCount || 7, p = l === h, m = r(t.minLimit) ? -1 / 0 : t.minLimit, v = r(t.maxLimit) ? 1 / 0 : t.maxLimit, g = (l + h) / 2, d = g, x = t.snapArray ? t.snapArray : p ? a : u;
                    if (n === m && e === v && p && (s = (e - n) / (d - 1)), r(n) && (n = 0), r(e) && (e = 0), 
                    Math.abs(e - n) < 1e-12 && (0 === n ? e = 1 : n > 0 ? n = 0 : e = 0, e - n < 5 && !s && e - n >= 1 && (s = 1)), 
                    r(s)) {
                        var y = (e - n) / (g - 1);
                        s = o.snapFactorTo(y, x, "ceil"), h !== l && ((d = parseInt((e - n) / s, 10)) > h && (d = h), 
                        d < l && (d = l), s = o.snapFactorTo((e - n) / (d - 1), x, "floor"));
                    }
                    if (i(c) && s < c && (s = c), t.interval || h !== l) e = Math.min(o.snapMultiple(e, s, "ceil"), v), 
                    n = Math.max(o.snapMultiple(n, s, "floor"), m), d = Math.round((e - n) / s), n = o.fixedBase(n, s), 
                    e = o.fixedBase(e, s); else {
                        g = parseInt(g, 10);
                        var M, D = (e + n) / 2, _ = o.snapMultiple(D, s, "ceil"), b = Math.floor((g - 2) / 2), T = _ + b * s;
                        M = g % 2 == 0 ? _ - b * s : _ - (b + 1) * s;
                        for (var k = null; T < e && (null === k || T > k); ) k = T, T = o.fixedBase(T + s, s);
                        for (var S = null; M > n && (null === S || M < S); ) S = M, M = o.fixedBase(M - s, s);
                        e = T, n = M;
                    }
                    e = Math.min(e, v), n = Math.max(n, m), f.push(n);
                    for (var C = 1; C < d; C++) {
                        var Y = o.fixedBase(s * C + n, s);
                        Y < e && f.push(Y);
                    }
                    return f[f.length - 1] < e && f.push(e), {
                        min: n,
                        max: e,
                        interval: s,
                        count: d,
                        ticks: f
                    };
                };
            }, function(t, n, e) {
                function r(t, n) {
                    t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                }
                var i = e(0), o = e(5), a = function(t) {
                    function n() {
                        return t.apply(this, arguments) || this;
                    }
                    r(n, t);
                    var e = n.prototype;
                    return e._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this), this.isIdentity = !0, this.type = "identity", 
                        this.value = null;
                    }, e.getText = function() {
                        return this.value.toString();
                    }, e.scale = function(t) {
                        return this.value !== t && o(t) ? t : this.range[0];
                    }, e.invert = function() {
                        return this.value;
                    }, n;
                }(i);
                i.Identity = a, t.exports = a;
            }, function(t, n, e) {
                function r(t, n) {
                    t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                }
                var i = e(11), o = e(1), a = e(2), u = e(6), s = e(0), c = e(4), f = e(21), l = e(12), h = function(t) {
                    function n() {
                        return t.apply(this, arguments) || this;
                    }
                    r(n, t);
                    var e = n.prototype;
                    return e._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this), this.type = "time", this.mask = "YYYY-MM-DD";
                    }, e.init = function() {
                        var n = this, e = n.values;
                        if (e && e.length) {
                            var r = [], i = 1 / 0, u = i, s = 0;
                            o(e, function(t) {
                                var e = n._toTimeStamp(t);
                                if (isNaN(e)) throw new TypeError("Invalid Time: " + t);
                                i > e ? (u = i, i = e) : u > e && (u = e), s < e && (s = e), r.push(e);
                            }), e.length > 1 && (n.minTickInterval = u - i), (a(n.min) || n._toTimeStamp(n.min) > i) && (n.min = i), 
                            (a(n.max) || n._toTimeStamp(n.max) < s) && (n.max = s);
                        }
                        t.prototype.init.call(this);
                    }, e.calculateTicks = function() {
                        var t = this, n = t.min, e = t.max, r = t.tickCount, i = t.tickInterval;
                        return f({
                            min: n,
                            max: e,
                            minCount: r,
                            maxCount: r,
                            interval: i,
                            minInterval: t.minTickInterval
                        }).ticks;
                    }, e.getText = function(t) {
                        var n = this.formatter;
                        return t = this.translate(t), t = n ? n(t) : i.format(t, this.mask);
                    }, e.scale = function(n) {
                        return u(n) && (n = this.translate(n)), t.prototype.scale.call(this, n);
                    }, e.translate = function(t) {
                        return this._toTimeStamp(t);
                    }, e._toTimeStamp = function(t) {
                        return l.toTimeStamp(t);
                    }, n;
                }(c);
                s.Time = h, t.exports = h;
            }, function(t, n, e) {
                function r(t) {
                    return new Date(t).getFullYear();
                }
                function i(t) {
                    return new Date(t, 0, 1).getTime();
                }
                function o(t) {
                    return new Date(t).getMonth();
                }
                function a(t, n) {
                    var e = r(t), i = r(n), a = o(t);
                    return 12 * (i - e) + (o(n) - a) % 12;
                }
                function u(t, n) {
                    return new Date(t, n, 1).getTime();
                }
                function s(t, n) {
                    return Math.ceil((n - t) / v);
                }
                function c(t, n) {
                    return Math.ceil((n - t) / m);
                }
                function f(t, n) {
                    return Math.ceil((n - t) / 6e4);
                }
                var l = e(8), h = e(2), p = [ 1, 2, 4, 6, 8, 12 ], m = 36e5, v = 864e5;
                t.exports = function(t) {
                    var n, e = t.minInterval, g = [], d = t.min, x = t.max, y = t.interval;
                    if (x === d && (x = d + v), h(y)) {
                        var M = x - d, D = v, _ = 365 * D;
                        y = parseInt(M / (t.maxCount || 6), 10), e && e > y && (y = e);
                        var b = y / _, T = r(d);
                        if (b > .51) {
                            for (var k = Math.ceil(b), S = r(x), C = T; C <= S + k; C += k) g.push(i(C));
                            y = null;
                        } else if (b > .0834) {
                            for (var Y = Math.ceil(b / .0834), w = o(d), N = a(d, x), F = 0; F <= N + Y; F += Y) g.push(u(T, F + w));
                            y = null;
                        } else if (y > .5 * D) {
                            var O = new Date(d), I = O.getFullYear(), P = O.getMonth(d), H = O.getDate(), j = Math.ceil(y / D), A = s(d, x);
                            y = j * D;
                            for (var L = 0; L < A + j; L += j) g.push(new Date(I, P, H + L).getTime());
                        } else if (y > m) {
                            var E = new Date(d), Z = E.getFullYear(), B = E.getMonth(d), R = E.getDate(), z = E.getHours(), U = l.snapTo(p, Math.ceil(y / m)), q = c(d, x);
                            y = U * m;
                            for (var J = 0; J <= q + U; J += U) g.push(new Date(Z, B, R, z + J).getTime());
                        } else if (y > 6e4) {
                            var V = f(d, x), W = Math.ceil(y / 6e4);
                            y = 6e4 * W;
                            for (var G = 0; G <= V + W; G += W) g.push(d + 6e4 * G);
                        } else {
                            y < 1e3 && (y = 1e3), d = 1e3 * Math.floor(d / 1e3);
                            var K = Math.ceil((x - d) / 1e3), Q = Math.ceil(y / 1e3);
                            y = 1e3 * Q;
                            for (var X = 0; X < K + Q; X += Q) g.push(d + 1e3 * X);
                        }
                    }
                    if (!g.length) {
                        d = 1e3 * Math.floor(d / 1e3), n = ((x = 1e3 * Math.ceil(x / 1e3)) - d) / y;
                        for (var $ = 0; $ <= n; $++) g.push(l.fixedBase(y * $ + d, y));
                    }
                    return {
                        max: x,
                        min: d,
                        interval: y,
                        ticks: g,
                        count: g.length
                    };
                };
            }, function(t, n, e) {
                var r = e(3);
                t.exports = function(t) {
                    return r(t, "Date");
                };
            }, function(t, n, e) {
                function r(t, n) {
                    t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                }
                var i = e(0), o = e(9), a = e(11), u = e(10), s = e(12), c = e(1), f = e(5), l = e(7), h = e(6), p = function(t) {
                    function n() {
                        return t.apply(this, arguments) || this;
                    }
                    r(n, t);
                    var e = n.prototype;
                    return e._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this), this.type = "timeCat", this.sortable = !0, 
                        this.tickCount = 5, this.mask = "YYYY-MM-DD";
                    }, e.init = function() {
                        var t = this, n = this.values;
                        c(n, function(e, r) {
                            n[r] = t._toTimeStamp(e);
                        }), this.sortable && n.sort(function(t, n) {
                            return t - n;
                        }), t.ticks || (t.ticks = this.calculateTicks());
                    }, e.calculateTicks = function() {
                        var t = this, n = t.tickCount;
                        return n ? u({
                            maxCount: n,
                            data: t.values,
                            isRounding: t.isRounding
                        }).ticks : t.values;
                    }, e.translate = function(t) {
                        t = this._toTimeStamp(t);
                        var n = this.values.indexOf(t);
                        return -1 === n && (n = f(t) && t < this.values.length ? t : NaN), n;
                    }, e.scale = function(t) {
                        var n, e = this.rangeMin(), r = this.rangeMax(), i = this.translate(t);
                        return n = 1 === this.values.length || isNaN(i) ? i : i > -1 ? i / (this.values.length - 1) : 0, 
                        e + n * (r - e);
                    }, e.getText = function(t) {
                        var n = "", e = this.translate(t);
                        n = e > -1 ? this.values[e] : t;
                        var r = this.formatter;
                        return n = parseInt(n, 10), n = r ? r(n) : a.format(n, this.mask);
                    }, e.getTicks = function() {
                        var t = this, n = this.ticks, e = [];
                        return c(n, function(n) {
                            var r;
                            r = l(n) ? n : {
                                text: h(n) ? n : t.getText(n),
                                value: t.scale(n),
                                tickValue: n
                            }, e.push(r);
                        }), e;
                    }, e._toTimeStamp = function(t) {
                        return s.toTimeStamp(t);
                    }, n;
                }(o);
                i.TimeCat = p, t.exports = p;
            }, function(t, n, e) {
                function r(t, n) {
                    t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                }
                function i(t, n) {
                    return 1 === t ? 1 : Math.log(n) / Math.log(t);
                }
                var o = e(1), a = e(0), u = function(t) {
                    function n() {
                        return t.apply(this, arguments) || this;
                    }
                    r(n, t);
                    var e = n.prototype;
                    return e._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this), this.type = "log", this.tickCount = 10, 
                        this.base = 2, this._minTick = null;
                    }, e.calculateTicks = function() {
                        var t, n = this, e = n.base;
                        if (n.min < 0) throw new Error("The minimum value must be greater than zero!");
                        var r = i(e, n.max);
                        if (n.min > 0) t = Math.floor(i(e, n.min)); else {
                            var a = n.values, u = n.max;
                            o(a, function(t) {
                                t > 0 && t < u && (u = t);
                            }), u === n.max && (u = n.max / e), u > 1 && (u = 1), t = Math.floor(i(e, u)), n._minTick = t, 
                            n.positiveMin = u;
                        }
                        for (var s = r - t, c = n.tickCount, f = Math.ceil(s / c), l = [], h = t; h < r + f; h += f) l.push(Math.pow(e, h));
                        return 0 === n.min && l.unshift(0), l;
                    }, e._getScalePercent = function(t) {
                        var n = this.max, e = this.min;
                        if (n === e) return 0;
                        if (t <= 0) return 0;
                        var r = this.base, o = this.positiveMin;
                        o && (e = 1 * o / r);
                        return t < o ? t / o / (i(r, n) - i(r, e)) : (i(r, t) - i(r, e)) / (i(r, n) - i(r, e));
                    }, e.scale = function(t) {
                        var n = this._getScalePercent(t), e = this.rangeMin();
                        return e + n * (this.rangeMax() - e);
                    }, e.invert = function(t) {
                        var n, e = this.base, r = i(e, this.max), o = this.rangeMin(), a = this.rangeMax() - o, u = this.positiveMin;
                        if (u) {
                            if (0 === t) return 0;
                            var s = 1 / (r - (n = i(e, u / e))) * a;
                            if (t < s) return t / s * u;
                        } else n = i(e, this.min);
                        var c = (t - o) / a * (r - n) + n;
                        return Math.pow(e, c);
                    }, n;
                }(e(4));
                a.Log = u, t.exports = u;
            }, function(t, n, e) {
                function r(t, n) {
                    t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                }
                function i(t, n) {
                    var e = Math.E;
                    return Math.pow(e, Math.log(n) / t);
                }
                var o = e(0), a = function(t) {
                    function n() {
                        return t.apply(this, arguments) || this;
                    }
                    r(n, t);
                    var e = n.prototype;
                    return e._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this), this.type = "pow", this.tickCount = 10, 
                        this.exponent = 2;
                    }, e.calculateTicks = function() {
                        var t, n = this, e = n.exponent, r = Math.ceil(i(e, n.max));
                        if ((t = n.min >= 0 ? Math.floor(i(e, n.min)) : 0) > r) {
                            var o = r;
                            r = t, t = o;
                        }
                        for (var a = r - t, u = n.tickCount, s = Math.ceil(a / u), c = [], f = t; f < r + s; f += s) c.push(Math.pow(f, e));
                        return c;
                    }, e._getScalePercent = function(t) {
                        var n = this.max, e = this.min;
                        if (n === e) return 0;
                        var r = this.exponent;
                        return (i(r, t) - i(r, e)) / (i(r, n) - i(r, e));
                    }, e.scale = function(t) {
                        var n = this._getScalePercent(t), e = this.rangeMin();
                        return e + n * (this.rangeMax() - e);
                    }, e.invert = function(t) {
                        var n = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin()), e = this.exponent, r = i(e, this.max), o = i(e, this.min), a = n * (r - o) + o;
                        return Math.pow(a, e);
                    }, n;
                }(e(4));
                o.Pow = a, t.exports = a;
            } ]);
        });
    }, function(t) {
        return e({}[t], t);
    }), e(1585748419422);
}();