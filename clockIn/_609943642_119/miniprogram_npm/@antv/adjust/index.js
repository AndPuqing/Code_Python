var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function() {
    var n = {}, r = function(r, e) {
        if (!n[r]) return require(e);
        if (!n[r].status) {
            var o = n[r].m;
            o._exports = o._tempexports;
            var i = Object.getOwnPropertyDescriptor(o, "exports");
            i && i.configurable && Object.defineProperty(o, "exports", {
                set: function(n) {
                    "object" === (void 0 === n ? "undefined" : t(n)) && n !== o._exports && (o._exports.__proto__ = n.__proto__, 
                    Object.keys(n).forEach(function(t) {
                        o._exports[t] = n[t];
                    })), o._tempexports = n;
                },
                get: function() {
                    return o._tempexports;
                }
            }), n[r].status = 1, n[r].func(n[r].req, o, o.exports);
        }
        return n[r].m.exports;
    };
    return function(t, r, e) {
        var o = {
            exports: {},
            _tempexports: {}
        };
        n[t] = {
            status: 0,
            func: r,
            req: e,
            m: o
        };
    }(1585748419207, function(n, r, e) {
        !function(n, o) {
            "object" === (void 0 === e ? "undefined" : t(e)) && "object" === (void 0 === r ? "undefined" : t(r)) ? r.exports = o() : "function" == typeof define && define.amd ? define([], o) : "object" === (void 0 === e ? "undefined" : t(e)) ? e.adjust = o() : n.adjust = o();
        }("undefined" != typeof self ? self : this, function() {
            return function(t) {
                function n(e) {
                    if (r[e]) return r[e].exports;
                    var o = r[e] = {
                        i: e,
                        l: !1,
                        exports: {}
                    };
                    return t[e].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
                }
                var r = {};
                return n.m = t, n.c = r, n.d = function(t, r, e) {
                    n.o(t, r) || Object.defineProperty(t, r, {
                        configurable: !1,
                        enumerable: !0,
                        get: e
                    });
                }, n.n = function(t) {
                    var r = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return n.d(r, "a", r), r;
                }, n.o = function(t, n) {
                    return Object.prototype.hasOwnProperty.call(t, n);
                }, n.p = "", n(n.s = 10);
            }([ function(t, n, r) {
                var e = r(12), o = r(1);
                t.exports = function(t, n) {
                    if (t) if (o(t)) for (var r = 0, i = t.length; r < i && !1 !== n(t[r], r); r++) ; else if (e(t)) for (var u in t) if (t.hasOwnProperty(u) && !1 === n(t[u], u)) break;
                };
            }, function(t, n, r) {
                var e = r(5), o = Array.isArray ? Array.isArray : function(t) {
                    return e(t, "Array");
                };
                t.exports = o;
            }, function(t, n, r) {
                var e = r(3), o = function() {
                    function t(t) {
                        this._initDefaultCfg(), e(this, t);
                    }
                    var n = t.prototype;
                    return n._initDefaultCfg = function() {
                        this.adjustNames = [ "x", "y" ];
                    }, n.processAdjust = function() {}, t;
                }();
                t.exports = o;
            }, function(t, n) {
                function r(t, n) {
                    for (var r in n) n.hasOwnProperty(r) && "constructor" !== r && void 0 !== n[r] && (t[r] = n[r]);
                }
                t.exports = function(t, n, e, o) {
                    return n && r(t, n), e && r(t, e), o && r(t, o), t;
                };
            }, function(t, n) {
                t.exports = function(t) {
                    for (var n = [], r = 0; r < t.length; r++) n = n.concat(t[r]);
                    return n;
                };
            }, function(t, n) {
                var r = {}.toString;
                t.exports = function(t, n) {
                    return r.call(t) === "[object " + n + "]";
                };
            }, function(t, n) {
                t.exports = function(t) {
                    return null === t || void 0 === t;
                };
            }, function(t, n, r) {
                var e = r(0), o = {
                    values: r(8)
                };
                t.exports = {
                    isAdjust: function(t) {
                        return this.adjustNames.indexOf(t) >= 0;
                    },
                    _getDimValues: function(t) {
                        var n = this, r = {}, i = [];
                        if (n.xField && n.isAdjust("x") && i.push(n.xField), n.yField && n.isAdjust("y") && i.push(n.yField), 
                        e(i, function(n) {
                            var e = o.values(t, n);
                            e.sort(function(t, n) {
                                return t - n;
                            }), r[n] = e;
                        }), !n.yField && n.isAdjust("y")) {
                            var u = [ 0, 1 ];
                            r.y = u;
                        }
                        return r;
                    },
                    adjustData: function(t, n) {
                        var r = this, o = r._getDimValues(n);
                        e(t, function(n, i) {
                            e(o, function(e, o) {
                                r.adjustDim(o, e, n, t.length, i);
                            });
                        });
                    },
                    getAdjustRange: function(t, n, r) {
                        var e, o, i = this, u = r.indexOf(n), a = r.length;
                        return !i.yField && i.isAdjust("y") ? (e = 0, o = 1) : a > 1 ? (e = 0 === u ? r[0] : r[u - 1], 
                        o = u === a - 1 ? r[a - 1] : r[u + 1], 0 !== u ? e += (n - e) / 2 : e -= (o - n) / 2, 
                        u !== a - 1 ? o -= (o - n) / 2 : o += (n - r[a - 2]) / 2) : (e = 0 === n ? 0 : n - .5, 
                        o = 0 === n ? 1 : n + .5), {
                            pre: e,
                            next: o
                        };
                    },
                    groupData: function(t, n) {
                        var r = {};
                        return e(t, function(t) {
                            var e = t[n];
                            void 0 === e && (e = t[n] = 0), r[e] || (r[e] = []), r[e].push(t);
                        }), r;
                    }
                };
            }, function(t, n, r) {
                var e = r(6), o = r(1), i = r(0);
                t.exports = function(t, n) {
                    for (var r = [], u = {}, a = 0; a < t.length; a++) {
                        var s = t[a][n];
                        e(s) || (o(s) || (s = [ s ]), i(s, function(t) {
                            u[t] || (r.push(t), u[t] = !0);
                        }));
                    }
                    return r;
                };
            }, function(t, n, r) {
                var e = r(5);
                t.exports = function(t) {
                    return e(t, "Function");
                };
            }, function(t, n, r) {
                var e = r(3), o = r(2), i = r(11), u = r(13), a = r(7), s = r(14), f = r(18);
                e(o.prototype, a), e(i.prototype, a, s), e(u.prototype, f), o.Jitter = r(19), o.Symmetric = r(20), 
                o.Dodge = i, o.Stack = u, t.exports = o;
            }, function(t, n, r) {
                function e(t, n) {
                    t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                }
                var o = r(2), i = r(0), u = function(t) {
                    function n() {
                        return t.apply(this, arguments) || this;
                    }
                    e(n, t);
                    var r = n.prototype;
                    return r._initDefaultCfg = function() {
                        this.marginRatio = .5, this.dodgeRatio = .5, this.adjustNames = [ "x", "y" ];
                    }, r.getDodgeOffset = function(t, n, r) {
                        var e = this, o = t.pre, i = t.next, u = i - o, a = u * e.dodgeRatio / r, s = e.marginRatio * a;
                        return (o + i) / 2 + (.5 * (u - r * a - (r - 1) * s) + ((n + 1) * a + n * s) - .5 * a - .5 * u);
                    }, r.processAdjust = function(t) {
                        var n = this, r = t.length, e = n.xField;
                        i(t, function(t, o) {
                            for (var i = 0, u = t.length; i < u; i++) {
                                var a = t[i], s = a[e], f = {
                                    pre: 1 === u ? s - 1 : s - .5,
                                    next: 1 === u ? s + 1 : s + .5
                                }, c = n.getDodgeOffset(f, o, r);
                                a[e] = c;
                            }
                        });
                    }, n;
                }(o);
                o.Dodge = u, t.exports = u;
            }, function(n, r) {
                var e = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? function(n) {
                    return void 0 === n ? "undefined" : t(n);
                } : function(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : void 0 === n ? "undefined" : t(n);
                };
                n.exports = function(t) {
                    var n = void 0 === t ? "undefined" : e(t);
                    return null !== t && "object" === n || "function" === n;
                };
            }, function(t, n, r) {
                function e(t, n) {
                    t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                }
                var o = r(1), i = r(6), u = r(2), a = function(t) {
                    function n() {
                        return t.apply(this, arguments) || this;
                    }
                    e(n, t);
                    var r = n.prototype;
                    return r._initDefaultCfg = function() {
                        this.xField = null, this.yField = null;
                    }, r.processAdjust = function(t) {
                        this.processStack(t);
                    }, r.processStack = function(t) {
                        var n = this, r = n.xField, e = n.yField, u = t.length, a = {
                            positive: {},
                            negative: {}
                        };
                        n.reverseOrder && (t = t.slice(0).reverse());
                        for (var s = 0; s < u; s++) for (var f = t[s], c = 0, p = f.length; c < p; c++) {
                            var l = f[c], d = l[r] || 0, v = l[e], y = d.toString();
                            if (v = o(v) ? v[1] : v, !i(v)) {
                                var h = v >= 0 ? "positive" : "negative";
                                a[h][y] || (a[h][y] = 0), l[e] = [ a[h][y], v + a[h][y] ], a[h][y] += v;
                            }
                        }
                    }, n;
                }(u);
                u.Stack = a, t.exports = a;
            }, function(t, n, r) {
                var e = {
                    merge: r(4),
                    values: r(8)
                }, o = r(15), i = r(0);
                t.exports = {
                    processAdjust: function(t) {
                        var n = this, r = e.merge(t), i = n.dodgeBy, u = t;
                        i && (u = o(r, i)), n.cacheMap = {}, n.adjDataArray = u, n.mergeData = r, n.adjustData(u, r), 
                        n.adjDataArray = null, n.mergeData = null;
                    },
                    getDistribution: function(t) {
                        var n = this, r = n.adjDataArray, o = n.cacheMap, u = o[t];
                        return u || (u = {}, i(r, function(n, r) {
                            var o = e.values(n, t);
                            o.length || o.push(0), i(o, function(t) {
                                u[t] || (u[t] = []), u[t].push(r);
                            });
                        }), o[t] = u), u;
                    },
                    adjustDim: function(t, n, r, e, o) {
                        var u = this, a = u.getDistribution(t), s = u.groupData(r, t);
                        i(s, function(r, e) {
                            e = parseFloat(e);
                            var s;
                            s = 1 === n.length ? {
                                pre: n[0] - 1,
                                next: n[0] + 1
                            } : u.getAdjustRange(t, e, n), i(r, function(n) {
                                var r = n[t], e = a[r], i = e.indexOf(o);
                                n[t] = u.getDodgeOffset(s, i, e.length);
                            });
                        });
                    }
                };
            }, function(t, n, r) {
                var e = r(16);
                t.exports = function(t, n) {
                    if (!n) return [ t ];
                    var r = e(t, n), o = [];
                    for (var i in r) o.push(r[i]);
                    return o;
                };
            }, function(t, n, r) {
                var e = r(9), o = r(1), i = r(17);
                t.exports = function(t, n) {
                    if (!n) return {
                        0: t
                    };
                    if (!e(n)) {
                        var r = o(n) ? n : n.replace(/\s+/g, "").split("*");
                        n = function(t) {
                            for (var n = "_", e = 0, o = r.length; e < o; e++) n += t[r[e]] && t[r[e]].toString();
                            return n;
                        };
                    }
                    return i(t, n);
                };
            }, function(t, n, r) {
                var e = r(0), o = r(1), i = Object.prototype.hasOwnProperty;
                t.exports = function(t, n) {
                    if (!n || !o(t)) return t;
                    var r = {}, u = null;
                    return e(t, function(t) {
                        u = n(t), i.call(r, u) ? r[u].push(t) : r[u] = [ t ];
                    }), r;
                };
            }, function(t, n) {
                t.exports = {
                    _initDefaultCfg: function() {
                        this.xField = null, this.yField = null, this.height = null, this.size = 10, this.reverseOrder = !1, 
                        this.adjustNames = [ "y" ];
                    },
                    processOneDimStack: function(t) {
                        var n = this, r = n.xField, e = n.yField || "y", o = n.height, i = {};
                        n.reverseOrder && (t = t.slice(0).reverse());
                        for (var u = 0, a = t.length; u < a; u++) for (var s = t[u], f = 0, c = s.length; f < c; f++) {
                            var p = s[f], l = 2 * (p.size || n.size) / o, d = p[r];
                            i[d] || (i[d] = l / 2), p[e] = i[d], i[d] += l;
                        }
                    },
                    processAdjust: function(t) {
                        this.yField ? this.processStack(t) : this.processOneDimStack(t);
                    }
                };
            }, function(t, n, r) {
                function e(t, n) {
                    t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                }
                var o = r(0), i = r(3), u = {
                    merge: r(4)
                }, a = r(2), s = r(7), f = function(t) {
                    function n() {
                        return t.apply(this, arguments) || this;
                    }
                    e(n, t);
                    var r = n.prototype;
                    return r._initDefaultCfg = function() {
                        this.xField = null, this.yField = null, this.adjustNames = [ "x", "y" ], this.groupFields = null;
                    }, r.processAdjust = function(t) {
                        var n = this, r = u.merge(t);
                        n.adjDataArray = t, n.mergeData = r, n.adjustData(t, r), n.adjFrames = null, n.mergeData = null;
                    }, r.getAdjustOffset = function(t, n) {
                        var r = n - t;
                        return t + .05 * r + .9 * r * Math.random();
                    }, r._adjustGroup = function(t, n, r, e) {
                        var i = this, u = i.getAdjustRange(n, r, e);
                        o(t, function(t) {
                            t[n] = i.getAdjustOffset(u.pre, u.next);
                        });
                    }, r.adjustDim = function(t, n, r) {
                        var e = this, i = e.groupData(r, t);
                        o(i, function(r, o) {
                            o = parseFloat(o), e._adjustGroup(r, t, o, n);
                        });
                    }, n;
                }(a);
                i(f.prototype, s), a.Jitter = f, t.exports = f;
            }, function(t, n, r) {
                function e(t, n) {
                    t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                }
                var o = r(0), i = r(21), u = r(1), a = {
                    merge: r(4)
                }, s = r(2), f = function(t) {
                    function n() {
                        return t.apply(this, arguments) || this;
                    }
                    e(n, t);
                    var r = n.prototype;
                    return r._initDefaultCfg = function() {
                        this.xField = null, this.yField = null, this.cacheMax = null, this.adjustNames = [ "y" ], 
                        this.groupFields = null;
                    }, r._getMax = function(t) {
                        var n = this.mergeData, r = i(n, function(n) {
                            var r = n[t];
                            return u(r) ? Math.max.apply(null, r) : r;
                        })[t];
                        return u(r) ? Math.max.apply(null, r) : r;
                    }, r._getXValuesMax = function() {
                        var t = this, n = t.yField, r = t.xField, e = {}, i = t.mergeData;
                        return o(i, function(t) {
                            var o = t[r], i = t[n], a = u(i) ? Math.max.apply(null, i) : i;
                            e[o] = e[o] || 0, e[o] < a && (e[o] = a);
                        }), e;
                    }, r.processAdjust = function(t) {
                        var n = this, r = a.merge(t);
                        n.mergeData = r, n._processSymmetric(t), n.mergeData = null;
                    }, r._processSymmetric = function(t) {
                        var n, r = this, e = r.xField, i = r.yField, a = r._getMax(i), s = t[0][0];
                        s && u(s[i]) && (n = r._getXValuesMax()), o(t, function(t) {
                            o(t, function(t) {
                                var r, s = t[i];
                                if (u(s)) {
                                    var f = t[e], c = n[f];
                                    r = (a - c) / 2;
                                    var p = [];
                                    o(s, function(t) {
                                        p.push(r + t);
                                    }), t[i] = p;
                                } else r = (a - s) / 2, t[i] = [ r, s + r ];
                            });
                        });
                    }, n;
                }(s);
                s.Symmetric = f, t.exports = f;
            }, function(t, n, r) {
                var e = r(1), o = r(9), i = r(0);
                t.exports = function(t, n) {
                    if (e(t)) {
                        var r = t[0], u = void 0;
                        u = o(n) ? n(t[0]) : t[0][n];
                        var a = void 0;
                        return i(t, function(t) {
                            (a = o(n) ? n(t) : t[n]) > u && (r = t, u = a);
                        }), r;
                    }
                };
            } ]);
        });
    }, function(t) {
        return r({}[t], t);
    }), r(1585748419207);
}();