var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function() {
    var e = {}, i = function(i, n) {
        if (!e[i]) return require(n);
        if (!e[i].status) {
            var r = e[i].m;
            r._exports = r._tempexports;
            var a = Object.getOwnPropertyDescriptor(r, "exports");
            a && a.configurable && Object.defineProperty(r, "exports", {
                set: function(e) {
                    "object" === (void 0 === e ? "undefined" : t(e)) && e !== r._exports && (r._exports.__proto__ = e.__proto__, 
                    Object.keys(e).forEach(function(t) {
                        r._exports[t] = e[t];
                    })), r._tempexports = e;
                },
                get: function() {
                    return r._tempexports;
                }
            }), e[i].status = 1, e[i].func(e[i].req, r, r.exports);
        }
        return e[i].m.exports;
    };
    return function(t, i, n) {
        var r = {
            exports: {},
            _tempexports: {}
        };
        e[t] = {
            status: 0,
            func: i,
            req: n,
            m: r
        };
    }(1585748419424, function(e, i, n) {
        !function(e, r) {
            "object" == (void 0 === n ? "undefined" : t(n)) && "object" == (void 0 === i ? "undefined" : t(i)) ? i.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == (void 0 === n ? "undefined" : t(n)) ? n.wxF2 = r() : e.wxF2 = r();
        }("undefined" != typeof self ? self : this, function() {
            return function(t) {
                function e(n) {
                    if (i[n]) return i[n].exports;
                    var r = i[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
                }
                var i = {};
                return e.m = t, e.c = i, e.d = function(t, i, n) {
                    e.o(t, i) || Object.defineProperty(t, i, {
                        configurable: !1,
                        enumerable: !0,
                        get: n
                    });
                }, e.n = function(t) {
                    var i = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return e.d(i, "a", i), i;
                }, e.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }, e.p = "", e(e.s = 51);
            }([ function(t, e, i) {
                var n = i(57), r = {
                    upperFirst: i(58),
                    lowerFirst: i(59),
                    isString: i(15),
                    isNumber: i(16),
                    isBoolean: i(60),
                    isFunction: i(61),
                    isDate: i(33),
                    isArray: i(13),
                    isNil: i(10),
                    isObject: i(18),
                    isPlainObject: i(34),
                    deepMix: i(63),
                    mix: i(19),
                    each: i(4),
                    isObjectValueEqual: function(t, e) {
                        t = Object.assign({}, t), e = Object.assign({}, e);
                        var i = Object.getOwnPropertyNames(t), n = Object.getOwnPropertyNames(e);
                        if (i.length !== n.length) return !1;
                        for (var r = 0, a = i.length; r < a; r++) {
                            var s = i[r];
                            if (t[s] !== e[s]) return !1;
                        }
                        return !0;
                    },
                    wrapBehavior: function(t, e) {
                        if (t["_wrap_" + e]) return t["_wrap_" + e];
                        var i = function(i) {
                            t[e](i);
                        };
                        return t["_wrap_" + e] = i, i;
                    },
                    getWrapBehavior: function(t, e) {
                        return t["_wrap_" + e];
                    },
                    parsePadding: function(t) {
                        var e, i, n, a;
                        return r.isNumber(t) || r.isString(t) ? e = n = a = i = t : r.isArray(t) && (e = t[0], 
                        i = r.isNil(t[1]) ? t[0] : t[1], n = r.isNil(t[2]) ? t[0] : t[2], a = r.isNil(t[3]) ? i : t[3]), 
                        [ e, i, n, a ];
                    },
                    directionEnabled: function(t, e) {
                        return void 0 === t || "string" == typeof t && -1 !== t.indexOf(e);
                    }
                };
                r.Array = {
                    merge: function(t) {
                        for (var e = [], i = 0, n = t.length; i < n; i++) e = e.concat(t[i]);
                        return e;
                    },
                    values: function(t, e) {
                        for (var i = [], n = {}, a = 0, s = t.length; a < s; a++) {
                            var o = t[a][e];
                            r.isNil(o) || (r.isArray(o) ? r.each(o, function(t) {
                                n[t] || (i.push(t), n[t] = !0);
                            }) : n[o] || (i.push(o), n[o] = !0));
                        }
                        return i;
                    },
                    firstValue: function(t, e) {
                        for (var i = null, n = 0, a = t.length; n < a; n++) {
                            var s = t[n][e];
                            if (!r.isNil(s)) {
                                i = r.isArray(s) ? s[0] : s;
                                break;
                            }
                        }
                        return i;
                    },
                    group: function(t, e, i) {
                        if (void 0 === i && (i = {}), !e) return [ t ];
                        var n = r.Array.groupToMap(t, e), a = [];
                        if (1 === e.length && i[e[0]]) {
                            var s = i[e[0]];
                            r.each(s, function(t) {
                                t = "_" + t, a.push(n[t]);
                            });
                        } else for (var o in n) a.push(n[o]);
                        return a;
                    },
                    groupToMap: function(t, e) {
                        if (!e) return {
                            0: t
                        };
                        for (var i = {}, n = 0, r = t.length; n < r; n++) {
                            var a = t[n], s = function(t) {
                                for (var i = "_", n = 0, r = e.length; n < r; n++) i += t[e[n]] && t[e[n]].toString();
                                return i;
                            }(a);
                            i[s] ? i[s].push(a) : i[s] = [ a ];
                        }
                        return i;
                    },
                    remove: function(t, e) {
                        if (t) {
                            var i = t.indexOf(e);
                            -1 !== i && t.splice(i, 1);
                        }
                    },
                    getRange: function(t) {
                        if (!t.length) return {
                            min: 0,
                            max: 0
                        };
                        var e = Math.max.apply(null, t);
                        return {
                            min: Math.min.apply(null, t),
                            max: e
                        };
                    }
                }, r.mix(r, n), t.exports = r;
            }, function(t, e, i) {
                var n = i(56), r = i(0), a = {
                    version: "3.3.3",
                    trackable: !0,
                    scales: {},
                    widthRatio: {
                        column: .5,
                        rose: .999999,
                        multiplePie: .75
                    },
                    lineDash: [ 4, 4 ]
                };
                a.setTheme = function(t) {
                    r.deepMix(this, t);
                }, a.setTheme(n), t.exports = a;
            }, function(t, e, i) {
                var n = i(0), r = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initProperties = function() {
                        this._attrs = {
                            zIndex: 0,
                            visible: !0,
                            destroyed: !1,
                            isShape: !0,
                            attrs: {}
                        };
                    }, i.getType = function() {
                        return this._attrs.type;
                    }, i.drawInner = function(t) {
                        var e = this.get("attrs");
                        this.createPath(t);
                        var i = t.globalAlpha;
                        if (this.hasFill()) {
                            var r = e.fillOpacity;
                            n.isNil(r) || 1 === r ? t.fill() : (t.globalAlpha = r, t.fill(), t.globalAlpha = i);
                        }
                        if (this.hasStroke() && e.lineWidth > 0) {
                            var a = e.strokeOpacity;
                            n.isNil(a) || 1 === a || (t.globalAlpha = a), t.stroke();
                        }
                    }, i.getBBox = function() {
                        var t = this._attrs.bbox;
                        return t || ((t = this.calculateBox()) && (t.x = t.minX, t.y = t.minY, t.width = t.maxX - t.minX, 
                        t.height = t.maxY - t.minY), this._attrs.bbox = t), t;
                    }, i.calculateBox = function() {
                        return null;
                    }, i.createPath = function() {}, e;
                }(i(27));
                t.exports = r;
            }, function(t, e, i) {
                var n = {
                    Canvas: i(82),
                    Group: i(39),
                    Shape: i(2),
                    Matrix: i(28),
                    Vector2: i(9)
                };
                i(84), i(85), i(86), i(87), i(88), i(89), i(90), i(91), i(92), t.exports = n;
            }, function(t, e, i) {
                var n = i(18), r = i(13);
                t.exports = function(t, e) {
                    if (t) if (r(t)) for (var i = 0, a = t.length; i < a && !1 !== e(t[i], i); i++) ; else if (n(t)) for (var s in t) if (t.hasOwnProperty(s) && !1 === e(t[s], s)) break;
                };
            }, function(t, e, i) {
                function n(t) {
                    return r.isArray(t) ? t : r.isString(t) ? t.split("*") : [ t ];
                }
                var r = i(0), a = i(35), s = [ "color", "size", "shape" ], o = i(1), c = i(67), h = i(8), l = i(25), u = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i.getDefaultCfg = function() {
                        return {
                            type: null,
                            data: null,
                            attrs: {},
                            scales: {},
                            container: null,
                            styleOptions: null,
                            chart: null,
                            shapeType: "",
                            generatePoints: !1,
                            attrOptions: {},
                            sortable: !1,
                            startOnZero: !0,
                            visible: !0,
                            connectNulls: !1
                        };
                    }, i.init = function() {
                        this._initAttrs();
                        var t = this._processData();
                        this.get("adjust") && this._adjustData(t), this.set("dataArray", t);
                    }, i._getGroupScales = function() {
                        var t = this, e = [];
                        return r.each(s, function(i) {
                            var n = t.getAttr(i);
                            if (n) {
                                var a = n.scales;
                                r.each(a, function(t) {
                                    t && t.isCategory && -1 === e.indexOf(t) && e.push(t);
                                });
                            }
                        }), e;
                    }, i._groupData = function(t) {
                        var e = this.get("colDefs"), i = this._getGroupScales();
                        if (i.length) {
                            var n = {}, a = [];
                            return r.each(i, function(t) {
                                var i = t.field;
                                a.push(i), e && e[i] && e[i].values && (n[t.field] = e[i].values);
                            }), r.Array.group(t, a, n);
                        }
                        return [ t ];
                    }, i._setAttrOptions = function(t, e) {
                        this.get("attrOptions")[t] = e;
                    }, i._createAttrOption = function(t, e, i, n) {
                        var a = {};
                        a.field = e, i ? r.isFunction(i) ? a.callback = i : a.values = i : a.values = n, 
                        this._setAttrOptions(t, a);
                    }, i._initAttrs = function() {
                        var t = this.get("attrs"), e = this.get("attrOptions"), i = this.get("coord");
                        for (var a in e) if (e.hasOwnProperty(a)) {
                            var s = e[a], o = r.upperFirst(a), h = n(s.field);
                            "position" === a && (s.coord = i);
                            for (var l = [], u = 0, f = h.length; u < f; u++) {
                                var p = h[u], g = this._createScale(p);
                                l.push(g);
                            }
                            if ("position" === a) {
                                var d = l[1];
                                "polar" === i.type && i.transposed && this.hasAdjust("stack") && d.values.length && d.change({
                                    nice: !1,
                                    min: 0,
                                    max: Math.max.apply(null, d.values)
                                });
                            }
                            s.scales = l;
                            var v = new c[o](s);
                            t[a] = v;
                        }
                    }, i._createScale = function(t) {
                        var e = this.get("scales"), i = e[t];
                        return i || (i = this.get("chart").createScale(t), e[t] = i), i;
                    }, i._processData = function() {
                        for (var t = this.get("data"), e = [], i = this._groupData(t), n = 0, r = i.length; n < r; n++) {
                            var a = i[n], s = this._saveOrigin(a);
                            this.hasAdjust("dodge") && this._numberic(s), e.push(s);
                        }
                        return e;
                    }, i._saveOrigin = function(t) {
                        for (var e = [], i = 0, n = t.length; i < n; i++) {
                            var r = t[i], a = {};
                            for (var s in r) a[s] = r[s];
                            a._origin = r, e.push(a);
                        }
                        return e;
                    }, i._numberic = function(t) {
                        for (var e = this.getAttr("position").scales, i = 0, n = t.length; i < n; i++) for (var r = t[i], a = Math.min(2, e.length), s = 0; s < a; s++) {
                            var o = e[s];
                            if (o.isCategory) {
                                var c = o.field;
                                r[c] = o.translate(r[c]);
                            }
                        }
                    }, i._adjustData = function(t) {
                        var e = this.get("adjust");
                        if (e) {
                            var i = r.upperFirst(e.type);
                            if (!l[i]) throw new Error("not support such adjust : " + e);
                            var n = this.getXScale(), a = this.getYScale(), s = r.mix({
                                xField: n.field,
                                yField: a.field
                            }, e);
                            new l[i](s).processAdjust(t), "Stack" === i && this._updateStackRange(a.field, a, t);
                        }
                    }, i._updateStackRange = function(t, e, i) {
                        for (var n = r.Array.merge(i), a = e.min, s = e.max, o = 0, c = n.length; o < c; o++) {
                            var h = n[o], l = Math.min.apply(null, h[t]), u = Math.max.apply(null, h[t]);
                            l < a && (a = l), u > s && (s = u);
                        }
                        (a < e.min || s > e.max) && e.change({
                            min: a,
                            max: s
                        });
                    }, i._sort = function(t) {
                        var e = this.getXScale(), i = e.field, n = e.type;
                        "identity" !== n && e.values.length > 1 && r.each(t, function(t) {
                            t.sort(function(t, r) {
                                return "timeCat" === n ? e._toTimeStamp(t._origin[i]) - e._toTimeStamp(r._origin[i]) : e.translate(t._origin[i]) - e.translate(r._origin[i]);
                            });
                        }), this.set("hasSorted", !0), this.set("dataArray", t);
                    }, i.paint = function() {
                        var t = this.get("dataArray"), e = [], i = this.getShapeFactory();
                        i.setCoord(this.get("coord")), this._beforeMapping(t);
                        for (var n = 0, r = t.length; n < r; n++) {
                            var a = t[n];
                            a.length && (a = this._mapping(a), e.push(a), this.draw(a, i));
                        }
                        this.set("dataArray", e);
                    }, i.getShapeFactory = function() {
                        var t = this.get("shapeFactory");
                        if (!t) {
                            var e = this.get("shapeType");
                            t = h.getShapeFactory(e), this.set("shapeFactory", t);
                        }
                        return t;
                    }, i._mapping = function(t) {
                        for (var e = this.get("attrs"), i = this.getYScale().field, n = [], a = 0, s = t.length; a < s; a++) {
                            var o = t[a], c = {};
                            c._origin = o._origin, c.points = o.points, c._originY = o[i];
                            for (var h in e) if (e.hasOwnProperty(h)) {
                                var l = e[h], u = l.names, f = this._getAttrValues(l, o);
                                if (u.length > 1) for (var p = 0, g = f.length; p < g; p++) {
                                    var d = f[p];
                                    c[u[p]] = r.isArray(d) && 1 === d.length ? d[0] : d;
                                } else c[u[0]] = 1 === f.length ? f[0] : f;
                            }
                            n.push(c);
                        }
                        return n;
                    }, i._getAttrValues = function(t, e) {
                        for (var i = t.scales, n = [], r = 0, a = i.length; r < a; r++) {
                            var s = i[r], o = s.field;
                            "identity" === s.type ? n.push(s.value) : n.push(e[o]);
                        }
                        return t.mapping.apply(t, n);
                    }, i.getAttrValue = function(t, e) {
                        var i = this.getAttr(t), n = null;
                        return i && (n = this._getAttrValues(i, e)[0]), n;
                    }, i._beforeMapping = function(t) {
                        var e = this;
                        e.get("sortable") && e._sort(t), e.get("generatePoints") && r.each(t, function(t) {
                            e._generatePoints(t);
                        });
                    }, i.isInCircle = function() {
                        var t = this.get("coord");
                        return t && t.isPolar;
                    }, i.getCallbackCfg = function(t, e, i) {
                        if (!t) return e;
                        var n = {}, a = t.map(function(t) {
                            return i[t];
                        });
                        return r.each(e, function(t, e) {
                            r.isFunction(t) ? n[e] = t.apply(null, a) : n[e] = t;
                        }), n;
                    }, i.getDrawCfg = function(t) {
                        var e = this.isInCircle(), i = {
                            origin: t,
                            x: t.x,
                            y: t.y,
                            color: t.color,
                            size: t.size,
                            shape: t.shape,
                            isInCircle: e,
                            opacity: t.opacity
                        }, n = this.get("styleOptions");
                        return n && n.style && (i.style = this.getCallbackCfg(n.fields, n.style, t._origin)), 
                        this.get("generatePoints") && (i.points = t.points), e && (i.center = this.get("coord").center), 
                        i;
                    }, i.draw = function(t, e) {
                        var i = this, n = i.get("container"), a = i.getYScale();
                        r.each(t, function(t, s) {
                            if (!a || !r.isNil(t._origin[a.field])) {
                                t.index = s;
                                var o = i.getDrawCfg(t), c = t.shape;
                                i.drawShape(c, t, o, n, e);
                            }
                        });
                    }, i.drawShape = function(t, e, i, n, a) {
                        var s = a.drawShape(t, i, n);
                        s && r.each([].concat(s), function(t) {
                            t.set("origin", e);
                        });
                    }, i._generatePoints = function(t) {
                        for (var e = this.getShapeFactory(), i = this.getAttr("shape"), n = 0, r = t.length; n < r; n++) {
                            var a = t[n], s = this.createShapePointsCfg(a), o = i ? this._getAttrValues(i, a) : null, c = e.getShapePoints(o, s);
                            a.points = c;
                        }
                    }, i.createShapePointsCfg = function(t) {
                        var e, i = this.getXScale(), n = this.getYScale(), r = this._normalizeValues(t[i.field], i);
                        return e = n ? this._normalizeValues(t[n.field], n) : t.y ? t.y : .1, {
                            x: r,
                            y: e,
                            y0: n ? n.scale(this.getYMinValue()) : void 0
                        };
                    }, i.getYMinValue = function() {
                        var t = this.getYScale(), e = t.min, i = t.max;
                        return this.get("startOnZero") ? i <= 0 && e <= 0 ? i : e >= 0 ? e : 0 : e;
                    }, i._normalizeValues = function(t, e) {
                        var i = [];
                        if (r.isArray(t)) for (var n = 0, a = t.length; n < a; n++) {
                            var s = t[n];
                            i.push(e.scale(s));
                        } else i = e.scale(t);
                        return i;
                    }, i.getAttr = function(t) {
                        return this.get("attrs")[t];
                    }, i.getXScale = function() {
                        return this.getAttr("position").scales[0];
                    }, i.getYScale = function() {
                        return this.getAttr("position").scales[1];
                    }, i.hasAdjust = function(t) {
                        return this.get("adjust") && this.get("adjust").type === t;
                    }, i._getSnap = function(t, e, i) {
                        var n, r = 0, a = this.getYScale().field;
                        if (this.hasAdjust("stack") && t.field === a) {
                            n = [], i.forEach(function(t) {
                                n.push(t._originY);
                            });
                            for (var s = n.length; r < s && !(n[0][0] > e); r++) {
                                if (n[n.length - 1][1] <= e) {
                                    r = n.length - 1;
                                    break;
                                }
                                if (n[r][0] <= e && n[r][1] > e) break;
                            }
                        } else {
                            (n = t.values).sort(function(t, e) {
                                return t - e;
                            });
                            for (var o = n.length; r < o && !((n[0] + n[1]) / 2 > e) && !((n[r - 1] + n[r]) / 2 <= e && (n[r + 1] + n[r]) / 2 > e); r++) if ((n[n.length - 2] + n[n.length - 1]) / 2 <= e) {
                                r = n.length - 1;
                                break;
                            }
                        }
                        return n[r];
                    }, i.getSnapRecords = function(t) {
                        var e = this, i = e.get("coord"), n = e.getXScale(), a = e.getYScale(), s = n.field, o = e.get("dataArray");
                        this.get("hasSorted") || this._sort(o);
                        var c = [], h = i.invertPoint(t), l = h.x;
                        e.isInCircle() && !i.transposed && l > (1 + n.rangeMax()) / 2 && (l = n.rangeMin());
                        var u = n.invert(l);
                        n.isCategory || (u = e._getSnap(n, u));
                        var f = [];
                        if (o.forEach(function(t) {
                            t.forEach(function(t) {
                                var i = r.isNil(t._origin) ? t[s] : t._origin[s];
                                e._isEqual(i, u, n) && f.push(t);
                            });
                        }), this.hasAdjust("stack") && i.isPolar && i.transposed && 1 === n.values.length) {
                            if (l >= 0 && l <= 1) {
                                var p = a.invert(h.y);
                                p = e._getSnap(a, p, f), f.forEach(function(t) {
                                    (r.isArray(p) ? t._originY.toString() === p.toString() : t._originY === p) && c.push(t);
                                });
                            }
                        } else c = f;
                        return c;
                    }, i._isEqual = function(t, e, i) {
                        return "timeCat" === i.type ? i._toTimeStamp(t) === e : e === t;
                    }, i.position = function(t) {
                        return this._setAttrOptions("position", {
                            field: t
                        }), this;
                    }, i.color = function(t, e) {
                        return this._createAttrOption("color", t, e, o.colors), this;
                    }, i.size = function(t, e) {
                        return this._createAttrOption("size", t, e, o.sizes), this;
                    }, i.shape = function(t, e) {
                        var i = this.get("type"), n = o.shapes[i] || [];
                        return this._createAttrOption("shape", t, e, n), this;
                    }, i.style = function(t, e) {
                        var i = this.get("styleOptions");
                        i || (i = {}, this.set("styleOptions", i)), r.isObject(t) && (e = t, t = null);
                        var a;
                        return t && (a = n(t)), i.fields = a, i.style = e, this;
                    }, i.adjust = function(t) {
                        return r.isString(t) && (t = {
                            type: t
                        }), this.set("adjust", t), this;
                    }, i.animate = function(t) {
                        return this.set("animateCfg", t), this;
                    }, i.reset = function() {
                        this.set("attrOptions", {}), this.set("adjust", null), this.clearInner();
                    }, i.clearInner = function() {
                        var t = this.get("container");
                        t && (t.clear(), t.setMatrix([ 1, 0, 0, 1, 0, 0 ])), t && t.clear(), this.set("attrs", {}), 
                        this.set("groupScales", null), this.set("xDistance", null), this.set("_width", null);
                    }, i.clear = function() {
                        this.clearInner(), this.set("scales", {});
                    }, i.destroy = function() {
                        this.clear(), t.prototype.destroy.call(this);
                    }, i._display = function(t) {
                        this.set("visible", t);
                        var e = this.get("container"), i = e.get("canvas");
                        e.set("visible", t), i.draw();
                    }, i.show = function() {
                        this._display(!0);
                    }, i.hide = function() {
                        this._display(!1);
                    }, e;
                }(a);
                t.exports = u;
            }, function(t, e, i) {
                var n = i(0), r = {
                    min: 0,
                    median: .5,
                    max: 1
                }, a = function() {
                    function t(t) {
                        this._initDefaultCfg(), n.deepMix(this, t);
                    }
                    var e = t.prototype;
                    return e._initDefaultCfg = function() {}, e._getNormalizedValue = function(t, e) {
                        return n.isNil(r[t]) ? e.scale(t) : r[t];
                    }, e.parsePercentPoint = function(t, e) {
                        var i = parseFloat(e[0]) / 100, n = parseFloat(e[1]) / 100, r = t.start, a = t.end, s = Math.abs(r.x - a.x), o = Math.abs(r.y - a.y);
                        return {
                            x: s * i + Math.min(r.x, a.x),
                            y: o * n + Math.min(r.y, a.y)
                        };
                    }, e.parsePoint = function(t, e) {
                        var i = this.xScale, r = this.yScales;
                        if (n.isFunction(e) && (e = e(i, r)), n.isString(e[0]) && -1 !== e[0].indexOf("%")) return this.parsePercentPoint(t, e);
                        var a = this._getNormalizedValue(e[0], i), s = this._getNormalizedValue(e[1], r[0]), o = t.convertPoint({
                            x: a,
                            y: s
                        });
                        return this.limitInPlot ? a >= 0 && a <= 1 && s >= 0 && s <= 1 ? o : null : o;
                    }, e.render = function() {}, e.repaint = function() {
                        this.remove();
                        var t = this.coord, e = this.container, i = this.canvas;
                        e && !e.isDestroyed() && (this.render(t, e), i.draw());
                    }, e.remove = function() {
                        var t = this.element;
                        t && t.remove(!0);
                    }, e.changeVisible = function(t) {
                        this.visible = t;
                        var e = this.element;
                        e && (e.set ? e.set("visible", t) : e.style.display = t ? "" : "none");
                    }, t;
                }();
                t.exports = a;
            }, function(t, e, i) {
                function n(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }
                function r(t, e) {
                    return t - e;
                }
                var a = i(35), s = i(64), o = i(0), c = i(65), h = i(5), l = i(73), u = i(79), f = i(1), p = i(3).Canvas, g = i(21), d = function(t) {
                    function e(e) {
                        var i, r = n(n(i = t.call(this, e) || this));
                        return o.each(h, function(t, e) {
                            var i = o.lowerFirst(e);
                            r[i] = function(e) {
                                var i = new t(e);
                                return r.addGeom(i), i;
                            };
                        }), r._init(), i;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t), e.initPlugins = function() {
                        return {
                            _plugins: [],
                            _cacheId: 0,
                            register: function(t) {
                                var e = this._plugins;
                                [].concat(t).forEach(function(t) {
                                    -1 === e.indexOf(t) && e.push(t);
                                }), this._cacheId++;
                            },
                            unregister: function(t) {
                                var e = this._plugins;
                                [].concat(t).forEach(function(t) {
                                    var i = e.indexOf(t);
                                    -1 !== i && e.splice(i, 1);
                                }), this._cacheId++;
                            },
                            clear: function() {
                                this._plugins = [], this._cacheId++;
                            },
                            count: function() {
                                return this._plugins.length;
                            },
                            getAll: function() {
                                return this._plugins;
                            },
                            notify: function(t, e, i) {
                                var n, r, a, s, o, c = this.descriptors(t), h = c.length;
                                for (n = 0; n < h; ++n) if (r = c[n], a = r.plugin, "function" == typeof (o = a[e]) && (s = [ t ].concat(i || []), 
                                !1 === o.apply(a, s))) return !1;
                                return !0;
                            },
                            descriptors: function(t) {
                                var e = t._plugins || (t._plugins = {});
                                if (e.id === this._cacheId) return e.descriptors;
                                var i = [], n = [];
                                return this._plugins.concat(t && t.get("plugins") || []).forEach(function(t) {
                                    -1 === i.indexOf(t) && (i.push(t), n.push({
                                        plugin: t
                                    }));
                                }), e.descriptors = n, e.id = this._cacheId, n;
                            }
                        };
                    };
                    var i = e.prototype;
                    return i.getDefaultCfg = function() {
                        return {
                            id: null,
                            padding: f.padding,
                            data: null,
                            scales: {},
                            geoms: null,
                            colDefs: null,
                            pixelRatio: f.pixelRatio,
                            filters: null,
                            appendPadding: f.appendPadding
                        };
                    }, i._syncYScales = function() {
                        var t = this.get("geoms"), e = [], i = [], n = [];
                        o.each(t, function(t) {
                            var r = t.getYScale();
                            r.isLinear && (e.push(r), i.push(r.min), n.push(r.max));
                        }), i = Math.min.apply(null, i), n = Math.max.apply(null, n), o.each(e, function(t) {
                            t.change({
                                min: i
                            }), t.change({
                                max: n
                            });
                        });
                    }, i._getFieldsForLegend = function() {
                        var t = [], e = this.get("geoms");
                        return o.each(e, function(e) {
                            var i = e.get("attrOptions").color;
                            if (i && i.field && o.isString(i.field)) {
                                var n = i.field.split("*");
                                o.each(n, function(e) {
                                    -1 === t.indexOf(e) && t.push(e);
                                });
                            }
                        }), t;
                    }, i._createScale = function(t, e) {
                        return this.get("scaleController").createScale(t, e);
                    }, i._adjustScale = function() {
                        var t = this.get("coord"), e = this.getXScale(), i = this.getYScales(), n = [];
                        e && n.push(e), n = n.concat(i);
                        var r = t.isPolar && function(t) {
                            var e = t.startAngle, i = t.endAngle;
                            return !(!o.isNil(e) && !o.isNil(i) && i - e < 2 * Math.PI);
                        }(t), a = this.get("scaleController").defs;
                        o.each(n, function(e) {
                            if ((e.isCategory || e.isIdentity) && e.values && (!a[e.field] || !a[e.field].range)) {
                                var i, n = e.values.length;
                                if (1 === n) i = [ .5, 1 ]; else {
                                    var s = 0;
                                    i = r ? t.transposed ? [ (s = 1 / n * f.widthRatio.multiplePie) / 2, 1 - s / 2 ] : [ 0, 1 - 1 / n ] : [ s = 1 / n * 1 / 2, 1 - s ];
                                }
                                e.range = i;
                            }
                        });
                        for (var s = this.get("geoms"), c = 0; c < s.length; c++) {
                            var h = s[c];
                            if ("interval" === h.get("type")) {
                                var l = h.getYScale(), u = l.field, p = l.min, g = l.max, d = l.type;
                                a[u] && a[u].min || "time" === d || (p > 0 ? l.change({
                                    min: 0
                                }) : g <= 0 && l.change({
                                    max: 0
                                }));
                            }
                        }
                    }, i._removeGeoms = function() {
                        for (var t = this.get("geoms"); t.length > 0; ) t.shift().destroy();
                    }, i._clearGeoms = function() {
                        for (var t = this.get("geoms"), e = 0, i = t.length; e < i; e++) t[e].clear();
                    }, i._clearInner = function() {
                        this.set("scales", {}), this.set("legendItems", null), this._clearGeoms(), e.plugins.notify(this, "clearInner"), 
                        this.get("axisController") && this.get("axisController").clear();
                    }, i._execFilter = function(t) {
                        var e = this.get("filters");
                        return e && (t = t.filter(function(t) {
                            var i = !0;
                            return o.each(e, function(e, n) {
                                if (e && !(i = e(t[n], t))) return !1;
                            }), i;
                        })), t;
                    }, i._initGeoms = function(t) {
                        for (var e = this.get("coord"), i = this.get("filteredData"), n = this.get("colDefs"), r = 0, a = t.length; r < a; r++) {
                            var s = t[r];
                            s.set("data", i), s.set("coord", e), s.set("colDefs", n), s.init();
                        }
                    }, i._initCoord = function() {
                        var t = this.get("plotRange"), e = o.mix({
                            type: "cartesian"
                        }, this.get("coordCfg"), {
                            plot: t
                        }), i = e.type, n = new (0, c[o.upperFirst(i)])(e);
                        this.set("coord", n);
                    }, i._initLayout = function() {
                        var t = this.get("_padding");
                        t || (t = this.get("margin") || this.get("padding"), t = o.parsePadding(t));
                        var e = "auto" === t[0] ? 0 : t[0], i = "auto" === t[1] ? 0 : t[1], n = "auto" === t[2] ? 0 : t[2], r = "auto" === t[3] ? 0 : t[3], a = this.get("width"), c = this.get("height"), h = new s({
                            start: {
                                x: r,
                                y: e
                            },
                            end: {
                                x: a - i,
                                y: c - n
                            }
                        });
                        this.set("plotRange", h), this.set("plot", h);
                    }, i._initCanvas = function() {
                        try {
                            var t = new p({
                                el: this.get("el") || this.get("id"),
                                context: this.get("context"),
                                pixelRatio: this.get("pixelRatio"),
                                width: this.get("width"),
                                height: this.get("height"),
                                fontFamily: f.fontFamily
                            });
                            this.set("canvas", t), this.set("width", t.get("width")), this.set("height", t.get("height"));
                        } catch (t) {
                            throw t;
                        }
                        e.plugins.notify(this, "afterCanvasInit"), this._initLayout();
                    }, i._initLayers = function() {
                        var t = this.get("canvas");
                        this.set("backPlot", t.addGroup()), this.set("middlePlot", t.addGroup({
                            zIndex: 10
                        })), this.set("frontPlot", t.addGroup({
                            zIndex: 20
                        }));
                    }, i._init = function() {
                        this._initCanvas(), this._initLayers(), this.set("geoms", []), this.set("scaleController", new l()), 
                        this.set("axisController", new u({
                            frontPlot: this.get("frontPlot").addGroup({
                                className: "axisContainer"
                            }),
                            backPlot: this.get("backPlot").addGroup({
                                className: "axisContainer"
                            }),
                            chart: this
                        })), e.plugins.notify(this, "init");
                    }, i.source = function(t, e) {
                        return this.set("data", t), e && this.scale(e), this;
                    }, i.scale = function(t, e) {
                        var i = this.get("colDefs") || {};
                        return o.isObject(t) ? o.mix(i, t) : i[t] = e, this.set("colDefs", i), this.get("scaleController").defs = i, 
                        this;
                    }, i.axis = function(t, e) {
                        var i = this.get("axisController");
                        return t ? (i.axisCfg = i.axisCfg || {}, i.axisCfg[t] = e) : i.axisCfg = null, this;
                    }, i.coord = function(t, e) {
                        var i;
                        return o.isObject(t) ? i = t : (i = e || {}).type = t || "cartesian", this.set("coordCfg", i), 
                        this;
                    }, i.filter = function(t, e) {
                        var i = this.get("filters") || {};
                        i[t] = e, this.set("filters", i);
                    }, i.render = function() {
                        var t = this.get("canvas"), i = this.get("geoms"), n = this.get("data") || [], r = this._execFilter(n);
                        this.set("filteredData", r), this._initCoord(), e.plugins.notify(this, "beforeGeomInit"), 
                        this._initGeoms(i), this.get("syncY") && this._syncYScales(), this._adjustScale(), 
                        e.plugins.notify(this, "beforeGeomDraw"), this._renderAxis();
                        var a = this.get("middlePlot");
                        if (this.get("limitInPlot") && !a.attr("clip")) {
                            var s = this.get("coord"), o = g.getClip(s);
                            o.set("canvas", a.get("canvas")), a.attr("clip", o);
                        }
                        for (var c = 0, h = i.length; c < h; c++) i[c].paint();
                        return e.plugins.notify(this, "afterGeomDraw"), t.sort(), this.get("frontPlot").sort(), 
                        e.plugins.notify(this, "beforeCanvasDraw"), t.draw(), this;
                    }, i.clear = function() {
                        return e.plugins.notify(this, "clear"), this._removeGeoms(), this._clearInner(), 
                        this.set("filters", null), this.set("isUpdate", !1), this.set("_padding", null), 
                        this.get("canvas").draw(), this;
                    }, i.repaint = function() {
                        this.set("isUpdate", !0), e.plugins.notify(this, "repaint"), this._clearInner(), 
                        this.render();
                    }, i.changeData = function(t) {
                        this.set("data", t), e.plugins.notify(this, "changeData"), this.set("_padding", null), 
                        this.repaint();
                    }, i.changeSize = function(t, e) {
                        return t ? this.set("width", t) : t = this.get("width"), e ? this.set("height", e) : e = this.get("height"), 
                        this.get("canvas").changeSize(t, e), this._initLayout(), this.repaint(), this;
                    }, i.destroy = function() {
                        this.clear(), this.get("canvas").destroy(), e.plugins.notify(this, "afterCanvasDestroyed"), 
                        this._interactions && o.each(this._interactions, function(t) {
                            t.destroy();
                        }), t.prototype.destroy.call(this);
                    }, i.getPosition = function(t) {
                        var e = this.get("coord"), i = this.getXScale(), n = this.getYScales()[0], r = i.field, a = i.scale(t[r]), s = n.field, o = n.scale(t[s]);
                        return e.convertPoint({
                            x: a,
                            y: o
                        });
                    }, i.getRecord = function(t) {
                        var e = this.get("coord"), i = this.getXScale(), n = this.getYScales()[0], r = e.invertPoint(t), a = {};
                        return a[i.field] = i.invert(r.x), a[n.field] = n.invert(r.y), a;
                    }, i.getSnapRecords = function(t) {
                        var e = this.get("geoms")[0], i = [];
                        return e && (i = e.getSnapRecords(t)), i;
                    }, i.createScale = function(t) {
                        var e = this.get("data"), i = this.get("filteredData");
                        i.length && -1 === this._getFieldsForLegend().indexOf(t) && (e = i);
                        var n = this.get("scales");
                        return n[t] || (n[t] = this._createScale(t, e)), n[t];
                    }, i.addGeom = function(t) {
                        var e = this.get("geoms"), i = this.get("middlePlot");
                        e.push(t), t.set("chart", this), t.set("container", i.addGroup());
                    }, i.getXScale = function() {
                        return this.get("geoms")[0].getXScale();
                    }, i.getYScales = function() {
                        var t = this.get("geoms"), e = [];
                        return o.each(t, function(t) {
                            var i = t.getYScale();
                            -1 === e.indexOf(i) && e.push(i);
                        }), e;
                    }, i.getLegendItems = function() {
                        if (this.get("legendItems")) return this.get("legendItems");
                        var t = {}, e = [], i = this.get("geoms");
                        return o.each(i, function(i) {
                            var n = i.getAttr("color");
                            if (n) {
                                var a = n.getScale("color");
                                if ("identity" !== a.type && !function(t, e) {
                                    var i = !1;
                                    return o.each(t, function(t) {
                                        var n = [].concat(t.values), a = [].concat(e.values);
                                        t.type !== e.type || t.field !== e.field || n.sort(r).toString() !== a.sort(r).toString() || (i = !0);
                                    }), i;
                                }(e, a)) {
                                    e.push(a);
                                    var s = a.field, c = a.getTicks(), h = [];
                                    o.each(c, function(t) {
                                        var e = t.text, i = t.value, r = a.invert(i), s = {
                                            fill: n.mapping(r).join("") || f.defaultColor,
                                            radius: 3,
                                            symbol: "circle",
                                            stroke: "#fff"
                                        };
                                        h.push({
                                            name: e,
                                            dataValue: r,
                                            checked: !0,
                                            marker: s
                                        });
                                    }), t[s] = h;
                                }
                            }
                        }), this.set("legendItems", t), t;
                    }, i.registerPlugins = function(t) {
                        var i = this, n = i.get("plugins") || [];
                        o.isArray(n) || (n = [ n ]), [].concat(t).forEach(function(t) {
                            -1 === n.indexOf(t) && (t.init && t.init(i), n.push(t));
                        }), e.plugins._cacheId++, i.set("plugins", n);
                    }, i._renderAxis = function() {
                        var t = this.get("axisController"), i = this.getXScale(), n = this.getYScales(), r = this.get("coord");
                        e.plugins.notify(this, "beforeRenderAxis"), t.createAxis(r, i, n);
                    }, i._isAutoPadding = function() {
                        if (this.get("_padding")) return !1;
                        var t = this.get("padding");
                        return o.isArray(t) ? -1 !== t.indexOf("auto") : "auto" === t;
                    }, i._updateLayout = function(t) {
                        var e = this.get("width"), i = this.get("height"), n = {
                            x: t[3],
                            y: t[0]
                        }, r = {
                            x: e - t[1],
                            y: i - t[2]
                        }, a = this.get("plot"), s = this.get("coord");
                        a.reset(n, r), s.reset(a);
                    }, e;
                }(a);
                d.plugins = d.initPlugins(), t.exports = d;
            }, function(t, e, i) {
                var n = i(0), r = i(1), a = {}, s = {
                    _coord: null,
                    draw: function(t, e) {
                        this.drawShape && this.drawShape(t, e);
                    },
                    setCoord: function(t) {
                        this._coord = t;
                    },
                    parsePoint: function(t) {
                        var e = this._coord;
                        return e.isPolar && (1 === t.x && (t.x = .9999999), 1 === t.y && (t.y = .9999999)), 
                        e.convertPoint(t);
                    },
                    parsePoints: function(t) {
                        if (!t) return !1;
                        var e = this, i = [];
                        return t.forEach(function(t) {
                            i.push(e.parsePoint(t));
                        }), i;
                    }
                }, o = {
                    defaultShapeType: null,
                    setCoord: function(t) {
                        this._coord = t;
                    },
                    getShape: function(t) {
                        n.isArray(t) && (t = t[0]);
                        var e = this[t] || this[this.defaultShapeType];
                        return e._coord = this._coord, e;
                    },
                    getShapePoints: function(t, e) {
                        var i = this.getShape(t);
                        return (i.getPoints || i.getShapePoints || this.getDefaultPoints)(e);
                    },
                    getDefaultPoints: function() {
                        return [];
                    },
                    drawShape: function(t, e, i) {
                        var n = this.getShape(t);
                        return e.color || (e.color = r.colors[0]), n.draw(e, i);
                    }
                };
                a.registerFactory = function(t, e) {
                    var i = n.upperFirst(t), r = n.mix({}, o, e);
                    return a[i] = r, r.name = t, r;
                }, a.registerShape = function(t, e, i) {
                    var r = n.upperFirst(t), o = a[r], c = n.mix({}, s, i);
                    return o[e] = c, c;
                }, a.registShape = a.registerShape, a.getShapeFactory = function(t) {
                    return t = t || "point", this[n.upperFirst(t)];
                }, t.exports = a;
            }, function(t, e) {
                t.exports = {
                    create: function() {
                        return [ 0, 0 ];
                    },
                    length: function(t) {
                        var e = t[0], i = t[1];
                        return Math.sqrt(e * e + i * i);
                    },
                    normalize: function(t, e) {
                        var i = this.length(e);
                        return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t;
                    },
                    add: function(t, e, i) {
                        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t;
                    },
                    sub: function(t, e, i) {
                        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t;
                    },
                    scale: function(t, e, i) {
                        return t[0] = e[0] * i, t[1] = e[1] * i, t;
                    },
                    dot: function(t, e) {
                        return t[0] * e[0] + t[1] * e[1];
                    },
                    direction: function(t, e) {
                        return t[0] * e[1] - e[0] * t[1];
                    },
                    angle: function(t, e) {
                        var i = this.dot(t, e) / (this.length(t) * this.length(e));
                        return Math.acos(i);
                    },
                    angleTo: function(t, e, i) {
                        var n = this.angle(t, e), r = this.direction(t, e) >= 0;
                        return i ? r ? 2 * Math.PI - n : n : r ? n : 2 * Math.PI - n;
                    },
                    zero: function(t) {
                        return 0 === t[0] && 0 === t[1];
                    },
                    distance: function(t, e) {
                        var i = e[0] - t[0], n = e[1] - t[1];
                        return Math.sqrt(i * i + n * n);
                    },
                    clone: function(t) {
                        return [ t[0], t[1] ];
                    },
                    min: function(t, e, i) {
                        return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t;
                    },
                    max: function(t, e, i) {
                        return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t;
                    },
                    transformMat2d: function(t, e, i) {
                        var n = e[0], r = e[1];
                        return t[0] = i[0] * n + i[2] * r + i[4], t[1] = i[1] * n + i[3] * r + i[5], t;
                    }
                };
            }, function(t, e) {
                t.exports = function(t) {
                    return null === t || void 0 === t;
                };
            }, function(t, e) {
                var i = {}.toString;
                t.exports = function(t, e) {
                    return i.call(t) === "[object " + e + "]";
                };
            }, function(t, e, i) {
                var n, r = i(0), a = i(7);
                r.isWx || r.isMy || (n = i(139));
                var s = [ "touchstart", "touchmove", "touchend" ], o = function() {
                    function t(t, e) {
                        var i = this.getDefaultCfg();
                        r.deepMix(this, i, t), this.chart = e, this.canvas = e.get("canvas"), this.el = e.get("canvas").get("el"), 
                        this._bindEvents();
                    }
                    var e = t.prototype;
                    return e.getDefaultCfg = function() {
                        return {
                            startEvent: s[0],
                            processEvent: s[1],
                            endEvent: s[2],
                            resetEvent: null
                        };
                    }, e._start = function(t) {
                        this.preStart && this.preStart(t), this.start(t), this.onStart && this.onStart(t);
                    }, e._process = function(t) {
                        this.preProcess && this.preProcess(t), this.process(t), this.onProcess && this.onProcess(t);
                    }, e._end = function(t) {
                        this.preEnd && this.preEnd(t), this.end(t), this.onEnd && this.onEnd(t);
                    }, e._reset = function(t) {
                        this.preReset && this.preReset(t), this.reset(t), this.onReset && this.onReset(t);
                    }, e.start = function() {}, e.process = function() {}, e.end = function() {}, e.reset = function() {}, 
                    e._bindEvents = function() {
                        this._clearEvents();
                        var t = this.startEvent, e = this.processEvent, i = this.endEvent, r = this.resetEvent, a = this.el;
                        n && (this.hammer = new n(a)), this._bindEvent(t, "_start"), this._bindEvent(e, "_process"), 
                        this._bindEvent(i, "_end"), this._bindEvent(r, "_reset");
                    }, e._clearEvents = function() {
                        var t = this.startEvent, e = this.processEvent, i = this.endEvent, n = this.resetEvent;
                        this.hammer && (this.hammer.destroy(), this.hammer = null), this._clearTouchEvent(t, "_start"), 
                        this._clearTouchEvent(e, "_process"), this._clearTouchEvent(i, "_end"), this._clearTouchEvent(n, "_reset");
                    }, e._bindEvent = function(t, e) {
                        var i = this.el;
                        t && (-1 !== s.indexOf(t) ? r.addEventListener(i, t, r.wrapBehavior(this, e)) : this.hammer && this.hammer.on(t, r.wrapBehavior(this, e)));
                    }, e._clearTouchEvent = function(t, e) {
                        var i = this.el;
                        t && -1 !== s.indexOf(t) && r.removeEventListener(i, t, r.getWrapBehavior(this, e));
                    }, e.destroy = function() {
                        this._clearEvents();
                    }, t;
                }();
                a._Interactions = {}, a.registerInteraction = function(t, e) {
                    a._Interactions[t] = e;
                }, a.getInteraction = function(t) {
                    return a._Interactions[t];
                }, a.prototype.interaction = function(t, e) {
                    var i = this._interactions || {};
                    i[t] && i[t].destroy();
                    var n = new (a.getInteraction(t))(e, this);
                    return i[t] = n, this._interactions = i, this;
                }, a.prototype.clearInteraction = function(t) {
                    var e = this._interactions;
                    if (e) return t ? (e[t] && e[t].destroy(), delete e[t]) : r.each(e, function(t, i) {
                        t.destroy(), delete e[i];
                    }), this;
                }, t.exports = o;
            }, function(t, e, i) {
                var n = i(11), r = Array.isArray ? Array.isArray : function(t) {
                    return n(t, "Array");
                };
                t.exports = r;
            }, function(t, e, i) {
                function n(t, e, i, n, a) {
                    return {
                        x: r(a, t.x, e.x, i.x, n.x),
                        y: r(a, t.y, e.y, i.y, n.y)
                    };
                }
                function r(t, e, i, n, r) {
                    var a = t * t;
                    return e + (3 * -e + t * (3 * e - e * t)) * t + (3 * i + t * (-6 * i + 3 * i * t)) * t + (3 * n - 3 * n * t) * a + r * (a * t);
                }
                function a(t) {
                    for (var e = 1 / 0, i = -1 / 0, r = 1 / 0, a = -1 / 0, s = {
                        x: t[0],
                        y: t[1]
                    }, o = {
                        x: t[2],
                        y: t[3]
                    }, c = {
                        x: t[4],
                        y: t[5]
                    }, h = {
                        x: t[6],
                        y: t[7]
                    }, l = 0; l < 100; l++) {
                        var u = n(s, o, c, h, l / 100);
                        u.x < e && (e = u.x), u.x > i && (i = u.x), u.y < r && (r = u.y), u.y > a && (a = u.y);
                    }
                    return {
                        minX: e,
                        minY: r,
                        maxX: i,
                        maxY: a
                    };
                }
                var s = i(9), o = s.create(), c = s.create(), h = s.create();
                t.exports = {
                    getBBoxFromPoints: function(t, e) {
                        if (0 !== t.length) {
                            for (var i = t[0], n = i.x, r = i.x, a = i.y, s = i.y, o = t.length, c = 1; c < o; c++) i = t[c], 
                            n = Math.min(n, i.x), r = Math.max(r, i.x), a = Math.min(a, i.y), s = Math.max(s, i.y);
                            return e = e / 2 || 0, {
                                minX: n - e,
                                minY: a - e,
                                maxX: r + e,
                                maxY: s + e
                            };
                        }
                    },
                    getBBoxFromLine: function(t, e, i, n, r) {
                        return r = r / 2 || 0, {
                            minX: Math.min(t, i) - r,
                            minY: Math.min(e, n) - r,
                            maxX: Math.max(t, i) + r,
                            maxY: Math.max(e, n) + r
                        };
                    },
                    getBBoxFromArc: function(t, e, i, n, r, a) {
                        var l = Math.abs(n - r);
                        if (l % Math.PI * 2 < 1e-4 && l > 1e-4) return {
                            minX: t - i,
                            minY: e - i,
                            maxX: t + i,
                            maxY: e + i
                        };
                        o[0] = Math.cos(n) * i + t, o[1] = Math.sin(n) * i + e, c[0] = Math.cos(r) * i + t, 
                        c[1] = Math.sin(r) * i + e;
                        var u = [ 0, 0 ], f = [ 0, 0 ];
                        if (s.min(u, o, c), s.max(f, o, c), (n %= 2 * Math.PI) < 0 && (n += 2 * Math.PI), 
                        (r %= 2 * Math.PI) < 0 && (r += 2 * Math.PI), n > r && !a ? r += 2 * Math.PI : n < r && a && (n += 2 * Math.PI), 
                        a) {
                            var p = r;
                            r = n, n = p;
                        }
                        for (var g = 0; g < r; g += Math.PI / 2) g > n && (h[0] = Math.cos(g) * i + t, h[1] = Math.sin(g) * i + e, 
                        s.min(u, h, u), s.max(f, h, f));
                        return {
                            minX: u[0],
                            minY: u[1],
                            maxX: f[0],
                            maxY: f[1]
                        };
                    },
                    getBBoxFromBezierGroup: function(t, e) {
                        for (var i = 1 / 0, n = -1 / 0, r = 1 / 0, s = -1 / 0, o = 0, c = t.length; o < c; o++) {
                            var h = a(t[o]);
                            h.minX < i && (i = h.minX), h.maxX > n && (n = h.maxX), h.minY < r && (r = h.minY), 
                            h.maxY > s && (s = h.maxY);
                        }
                        return e = e / 2 || 0, {
                            minX: i - e,
                            minY: r - e,
                            maxX: n + e,
                            maxY: s + e
                        };
                    }
                };
            }, function(t, e, i) {
                var n = i(11);
                t.exports = function(t) {
                    return n(t, "String");
                };
            }, function(t, e, i) {
                var n = i(11);
                t.exports = function(t) {
                    return n(t, "Number");
                };
            }, function(t, e, i) {
                var n = i(19), r = i(4), a = i(18), s = i(10), o = function() {
                    function t(t) {
                        this._initDefaultCfg(), n(this, t), this.init();
                    }
                    var e = t.prototype;
                    return e._initDefaultCfg = function() {
                        this.type = "base", this.formatter = null, this.range = [ 0, 1 ], this.ticks = null, 
                        this.values = [];
                    }, e.init = function() {}, e.getTicks = function() {
                        var t = this, e = t.ticks, i = [];
                        return r(e, function(e) {
                            var n;
                            n = a(e) ? e : {
                                text: t.getText(e),
                                tickValue: e,
                                value: t.scale(e)
                            }, i.push(n);
                        }), i;
                    }, e.getText = function(t, e) {
                        var i = this.formatter;
                        return t = i ? i(t, e) : t, !s(t) && t.toString || (t = ""), t.toString();
                    }, e.rangeMin = function() {
                        return this.range[0];
                    }, e.rangeMax = function() {
                        var t = this.range;
                        return t[t.length - 1];
                    }, e.invert = function(t) {
                        return t;
                    }, e.translate = function(t) {
                        return t;
                    }, e.scale = function(t) {
                        return t;
                    }, e.clone = function() {
                        var t = this, e = t.constructor, i = {};
                        return r(t, function(e, n) {
                            i[n] = t[n];
                        }), new e(i);
                    }, e.change = function(t) {
                        return this.ticks = null, n(this, t), this.init(), this;
                    }, t;
                }();
                t.exports = o;
            }, function(e, i) {
                var n = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                    return void 0 === e ? "undefined" : t(e);
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
                };
                e.exports = function(t) {
                    var e = void 0 === t ? "undefined" : n(t);
                    return null !== t && "object" === e || "function" === e;
                };
            }, function(t, e) {
                function i(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && "constructor" !== i && void 0 !== e[i] && (t[i] = e[i]);
                }
                t.exports = function(t, e, n, r) {
                    return e && i(t, e), n && i(t, n), r && i(t, r), t;
                };
            }, function(t, e, i) {
                function n(t, e) {
                    return r(e) ? e : t.invert(t.scale(e));
                }
                var r = i(15), a = i(13), s = i(19), o = i(4), c = function() {
                    function t(t) {
                        this.type = "base", this.name = null, this.method = null, this.values = [], this.scales = [], 
                        this.linear = null, s(this, t);
                    }
                    var e = t.prototype;
                    return e._getAttrValue = function(t, e) {
                        var i = this.values;
                        if (t.isCategory && !this.linear) return i[t.translate(e) % i.length];
                        var n = t.scale(e);
                        return this.getLinearValue(n);
                    }, e.getLinearValue = function(t) {
                        var e = this.values, i = e.length - 1, n = Math.floor(i * t), r = i * t - n, a = e[n];
                        return a + ((n === i ? a : e[n + 1]) - a) * r;
                    }, e.callback = function(t) {
                        var e = this.scales[0];
                        return "identity" === e.type ? e.value : this._getAttrValue(e, t);
                    }, e.getNames = function() {
                        for (var t = this.scales, e = this.names, i = Math.min(t.length, e.length), n = [], r = 0; r < i; r++) n.push(e[r]);
                        return n;
                    }, e.getFields = function() {
                        var t = this.scales, e = [];
                        return o(t, function(t) {
                            e.push(t.field);
                        }), e;
                    }, e.getScale = function(t) {
                        return this.scales[this.names.indexOf(t)];
                    }, e.mapping = function() {
                        for (var t = this.scales, e = this.callback, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                        var a = n;
                        if (e) {
                            for (var s = 0, o = n.length; s < o; s++) n[s] = this._toOriginParam(n[s], t[s]);
                            a = e.apply(this, n);
                        }
                        return a = [].concat(a);
                    }, e._toOriginParam = function(t, e) {
                        var i = t;
                        if (!e.isLinear) if (a(t)) {
                            i = [];
                            for (var r = 0, s = t.length; r < s; r++) i.push(n(e, t[r]));
                        } else i = n(e, t);
                        return i;
                    }, t;
                }();
                t.exports = c;
            }, function(t, e, i) {
                var n = i(3).Shape;
                t.exports = {
                    getClip: function(t) {
                        var e, i = t.start, r = t.end, a = r.x - i.x, s = Math.abs(r.y - i.y);
                        if (t.isPolar) {
                            var o = t.circleRadius, c = t.center, h = t.startAngle, l = t.endAngle;
                            e = new n.Sector({
                                attrs: {
                                    x: c.x,
                                    y: c.y,
                                    r: o,
                                    r0: 0,
                                    startAngle: h,
                                    endAngle: l
                                }
                            });
                        } else e = new n.Rect({
                            attrs: {
                                x: i.x,
                                y: r.y - 10,
                                width: a,
                                height: s + 20
                            }
                        });
                        return e.isClip = !0, e;
                    },
                    isPointInPlot: function(t, e) {
                        var i = t.x, n = t.y, r = e.tl, a = e.tr, s = e.br;
                        return i >= r.x && i <= a.x && n >= r.y && n <= s.y;
                    }
                };
            }, function(t, e, i) {
                var n = i(0), r = {
                    splitPoints: function(t) {
                        var e = [], i = t.x, r = t.y;
                        return (r = n.isArray(r) ? r : [ r ]).forEach(function(t, r) {
                            var a = {
                                x: n.isArray(i) ? i[r] : i,
                                y: t
                            };
                            e.push(a);
                        }), e;
                    },
                    splitArray: function(t, e, i) {
                        if (!t.length) return [];
                        var r, a = [], s = [];
                        return n.each(t, function(t) {
                            r = t._origin ? t._origin[e] : t[e], i ? n.isNil(r) || s.push(t) : n.isArray(r) && n.isNil(r[0]) || n.isNil(r) ? s.length && (a.push(s), 
                            s = []) : s.push(t);
                        }), s.length && a.push(s), a;
                    }
                };
                t.exports = r;
            }, function(t, e, i) {
                var n = i(29), r = i(0);
                t.exports = {
                    getColDef: function(t, e) {
                        var i;
                        return t.get("colDefs") && t.get("colDefs")[e] && (i = t.get("colDefs")[e]), i;
                    },
                    getFieldRange: function(t, e, i) {
                        if (!t) return [ 0, 1 ];
                        var n = 0, r = 0;
                        if ("linear" === i) {
                            var a = e.min, s = e.max;
                            n = (t.min - a) / (s - a), r = (t.max - a) / (s - a);
                        } else {
                            var o = e, c = t.values, h = o.indexOf(c[0]), l = o.indexOf(c[c.length - 1]);
                            n = h / (o.length - 1), r = l / (o.length - 1);
                        }
                        return [ n, r ];
                    },
                    getLimitRange: function(t, e) {
                        var i, a = e.field, s = e.type, o = r.Array.values(t, a);
                        return "linear" === s ? (i = r.Array.getRange(o), e.min < i.min && (i.min = e.min), 
                        e.max > i.max && (i.max = e.max)) : "timeCat" === s ? (r.each(o, function(t, e) {
                            o[e] = n.toTimeStamp(t);
                        }), o.sort(function(t, e) {
                            return t - e;
                        }), i = o) : i = o, i;
                    }
                };
            }, function(t, e, i) {
                var n = i(0), r = function() {
                    function t(t) {
                        this._initDefaultCfg(), n.mix(this, t);
                        var e, i;
                        this.plot ? (e = this.plot.bl, i = this.plot.tr, this.start = e, this.end = i) : (e = this.start, 
                        i = this.end), this.init(e, i);
                    }
                    var e = t.prototype;
                    return e._initDefaultCfg = function() {}, e.init = function() {}, e.convertPoint = function(t) {
                        return t;
                    }, e.invertPoint = function(t) {
                        return t;
                    }, e.reset = function(t) {
                        this.plot = t;
                        var e = t.bl, i = t.tr;
                        this.start = e, this.end = i, this.init(e, i);
                    }, t;
                }();
                t.exports = r;
            }, function(t, e, i) {
                var n = i(19), r = function() {
                    function t(t) {
                        this._initDefaultCfg(), n(this, t);
                    }
                    var e = t.prototype;
                    return e._initDefaultCfg = function() {
                        this.adjustNames = [ "x", "y" ];
                    }, e.processAdjust = function() {}, t;
                }();
                t.exports = r;
            }, function(t, e, i) {
                var n = i(0), r = i(1), a = i(9), s = function() {
                    function t(t) {
                        this._initDefaultCfg(), n.mix(this, t), this.draw();
                    }
                    var e = t.prototype;
                    return e._initDefaultCfg = function() {
                        this.ticks = [], this.tickLine = {}, this.offsetFactor = 1, this.frontContainer = null, 
                        this.backContainer = null, this.gridPoints = [];
                    }, e.draw = function() {
                        var t = this.line, e = this.tickLine, i = this.label, n = this.grid;
                        n && this.drawGrid(n), e && this.drawTicks(e), t && this.drawLine(t), i && this.drawLabels();
                    }, e.drawTicks = function(t) {
                        var e = this, i = e.ticks, r = t.length, a = e.getContainer(t.top);
                        n.each(i, function(i) {
                            var s = e.getOffsetPoint(i.value), o = e.getSidePoint(s, r);
                            a.addShape("line", {
                                className: "axis-tick",
                                attrs: n.mix({
                                    x1: s.x,
                                    y1: s.y,
                                    x2: o.x,
                                    y2: o.y
                                }, t)
                            })._id = e._id + "-ticks";
                        });
                    }, e.drawLabels = function() {
                        var t = this, e = t.labelOffset, i = t.labels;
                        n.each(i, function(i) {
                            var r = t.getContainer(i.get("top")), a = t.getOffsetPoint(i.get("value")), s = t.getSidePoint(a, e), o = s.x, c = s.y;
                            i.attr(n.mix({
                                x: o,
                                y: c
                            }, t.getTextAlignInfo(a, e), i.get("textStyle"))), i._id = t._id + "-" + i.attr("text"), 
                            r.add(i);
                        });
                    }, e.drawLine = function() {}, e.drawGrid = function(t) {
                        var e = this, i = e.gridPoints, s = e.ticks, o = t, c = i.length;
                        n.each(i, function(i, h) {
                            if (n.isFunction(t)) {
                                var l = s[h] || {}, u = t(l.text, h, c);
                                o = u ? n.mix({}, r._defaultAxis.grid, u) : null;
                            }
                            if (o) {
                                var f, p = o.type, g = i.points, d = e.getContainer(o.top);
                                if ("arc" === p) {
                                    var v = e.center, y = e.startAngle, m = e.endAngle, x = a.length([ g[0].x - v.x, g[0].y - v.y ]);
                                    f = d.addShape("Arc", {
                                        className: "axis-grid",
                                        attrs: n.mix({
                                            x: v.x,
                                            y: v.y,
                                            startAngle: y,
                                            endAngle: m,
                                            r: x
                                        }, o)
                                    });
                                } else f = d.addShape("Polyline", {
                                    className: "axis-grid",
                                    attrs: n.mix({
                                        points: g
                                    }, o)
                                });
                                f._id = i._id;
                            }
                        });
                    }, e.getOffsetPoint = function() {}, e.getAxisVector = function() {}, e.getOffsetVector = function(t, e) {
                        var i = this.getAxisVector(t), n = a.normalize([], i), r = this.offsetFactor, s = [ -1 * n[1] * r, n[0] * r ];
                        return a.scale([], s, e);
                    }, e.getSidePoint = function(t, e) {
                        var i = this.getOffsetVector(t, e);
                        return {
                            x: t.x + i[0],
                            y: t.y + i[1]
                        };
                    }, e.getTextAlignInfo = function(t, e) {
                        var i, n, r = this.getOffsetVector(t, e);
                        return i = r[0] > 0 ? "left" : r[0] < 0 ? "right" : "center", n = r[1] > 0 ? "top" : r[1] < 0 ? "bottom" : "middle", 
                        {
                            textAlign: i,
                            textBaseline: n
                        };
                    }, e.getContainer = function(t) {
                        var e = this.frontContainer, i = this.backContainer;
                        return t ? e : i;
                    }, t;
                }();
                t.exports = s;
            }, function(t, e, i) {
                var n = i(0), r = i(28), a = i(9), s = i(83), o = {
                    stroke: "strokeStyle",
                    fill: "fillStyle",
                    opacity: "globalAlpha"
                }, c = [ "fillStyle", "font", "globalAlpha", "lineCap", "lineWidth", "lineJoin", "miterLimit", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "strokeStyle", "textAlign", "textBaseline", "lineDash" ], h = [ "circle", "sector", "polygon", "rect", "polyline" ], l = function() {
                    function t(t) {
                        this._initProperties(), n.mix(this._attrs, t);
                        var e = this._attrs.attrs;
                        e && this.initAttrs(e), this.initTransform();
                    }
                    var e = t.prototype;
                    return e._initProperties = function() {
                        this._attrs = {
                            zIndex: 0,
                            visible: !0,
                            destroyed: !1
                        };
                    }, e.get = function(t) {
                        return this._attrs[t];
                    }, e.set = function(t, e) {
                        this._attrs[t] = e;
                    }, e.isGroup = function() {
                        return this.get("isGroup");
                    }, e.isShape = function() {
                        return this.get("isShape");
                    }, e.initAttrs = function(t) {
                        this.attr(n.mix(this.getDefaultAttrs(), t));
                    }, e.getDefaultAttrs = function() {
                        return {};
                    }, e._setAttr = function(t, e) {
                        var i = this._attrs.attrs;
                        if ("clip" === t) e = this._setAttrClip(e); else {
                            var n = o[t];
                            n && (i[n] = e);
                        }
                        i[t] = e;
                    }, e._getAttr = function(t) {
                        return this._attrs.attrs[t];
                    }, e._setAttrClip = function(t) {
                        return t && h.indexOf(t._attrs.type) > -1 ? (null === t.get("canvas") && (t = Object.assign({}, t)), 
                        t.set("parent", this.get("parent")), t.set("context", this.get("context")), t) : null;
                    }, e.attr = function(t, e) {
                        if (this.get("destroyed")) return null;
                        var i = arguments.length;
                        if (0 === i) return this._attrs.attrs;
                        if (n.isObject(t)) {
                            this._attrs.bbox = null;
                            for (var r in t) this._setAttr(r, t[r]);
                            return this._afterAttrsSet && this._afterAttrsSet(), this;
                        }
                        return 2 === i ? (this._attrs.bbox = null, this._setAttr(t, e), this._afterAttrsSet && this._afterAttrsSet(), 
                        this) : this._getAttr(t);
                    }, e.getParent = function() {
                        return this.get("parent");
                    }, e.draw = function(t) {
                        this.get("destroyed") || this.get("visible") && (this.setContext(t), this.drawInner(t), 
                        this.restoreContext(t));
                    }, e.setContext = function(t) {
                        var e = this._attrs.attrs.clip;
                        t.save(), e && (e.resetTransform(t), e.createPath(t), t.clip()), this.resetContext(t), 
                        this.resetTransform(t);
                    }, e.restoreContext = function(t) {
                        t.restore();
                    }, e.resetContext = function(t) {
                        var e = this._attrs.attrs;
                        if (!this._attrs.isGroup) for (var i in e) if (c.indexOf(i) > -1) {
                            var r = e[i];
                            "fillStyle" !== i && "strokeStyle" !== i || (r = s.parseStyle(r, this, t)), "lineDash" === i && t.setLineDash && n.isArray(r) ? t.setLineDash(r) : t[i] = r;
                        }
                    }, e.hasFill = function() {
                        return this.get("canFill") && this._attrs.attrs.fillStyle;
                    }, e.hasStroke = function() {
                        return this.get("canStroke") && this._attrs.attrs.strokeStyle;
                    }, e.drawInner = function() {}, e.show = function() {
                        return this.set("visible", !0), this;
                    }, e.hide = function() {
                        return this.set("visible", !1), this;
                    }, e.isVisible = function() {
                        return this.get("visible");
                    }, e._removeFromParent = function() {
                        var t = this.get("parent");
                        if (t) {
                            var e = t.get("children");
                            n.Array.remove(e, this);
                        }
                        return this;
                    }, e.remove = function(t) {
                        t ? this.destroy() : this._removeFromParent();
                    }, e.destroy = function() {
                        if (this.get("destroyed")) return null;
                        this._removeFromParent(), this._attrs = {}, this.set("destroyed", !0);
                    }, e.getBBox = function() {
                        return {
                            minX: 0,
                            maxX: 0,
                            minY: 0,
                            maxY: 0,
                            width: 0,
                            height: 0
                        };
                    }, e.initTransform = function() {
                        var t = this._attrs.attrs || {};
                        t.matrix || (t.matrix = [ 1, 0, 0, 1, 0, 0 ]), this._attrs.attrs = t;
                    }, e.getMatrix = function() {
                        return this._attrs.attrs.matrix;
                    }, e.setMatrix = function(t) {
                        this._attrs.attrs.matrix = [ t[0], t[1], t[2], t[3], t[4], t[5] ];
                    }, e.transform = function(t) {
                        var e = this._attrs.attrs.matrix;
                        return this._attrs.attrs.matrix = r.transform(e, t), this;
                    }, e.setTransform = function(t) {
                        return this._attrs.attrs.matrix = [ 1, 0, 0, 1, 0, 0 ], this.transform(t);
                    }, e.translate = function(t, e) {
                        var i = this._attrs.attrs.matrix;
                        r.translate(i, i, [ t, e ]);
                    }, e.rotate = function(t) {
                        var e = this._attrs.attrs.matrix;
                        r.rotate(e, e, t);
                    }, e.scale = function(t, e) {
                        var i = this._attrs.attrs.matrix;
                        r.scale(i, i, [ t, e ]);
                    }, e.moveTo = function(t, e) {
                        var i = this._attrs.x || 0, n = this._attrs.y || 0;
                        this.translate(t - i, e - n), this.set("x", t), this.set("y", e);
                    }, e.apply = function(t) {
                        var e = this._attrs.attrs.matrix;
                        return a.transformMat2d(t, t, e), this;
                    }, e.resetTransform = function(t) {
                        var e = this._attrs.attrs.matrix;
                        (function(t) {
                            return 1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3] && 0 === t[4] && 0 === t[5];
                        })(e) || t.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
                    }, e.isDestroyed = function() {
                        return this.get("destroyed");
                    }, t;
                }();
                t.exports = l;
            }, function(t, e) {
                var i = {
                    multiply: function(t, e) {
                        return [ t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5] ];
                    },
                    scale: function(t, e, i) {
                        return t[0] = e[0] * i[0], t[1] = e[1] * i[0], t[2] = e[2] * i[1], t[3] = e[3] * i[1], 
                        t[4] = e[4], t[5] = e[5], t;
                    },
                    rotate: function(t, e, i) {
                        var n = Math.cos(i), r = Math.sin(i), a = e[0] * n + e[2] * r, s = e[1] * n + e[3] * r, o = e[0] * -r + e[2] * n, c = e[1] * -r + e[3] * n;
                        return t[0] = a, t[1] = s, t[2] = o, t[3] = c, t[4] = e[4], t[5] = e[5], t;
                    },
                    translate: function(t, e, i) {
                        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + e[0] * i[0] + e[2] * i[1], 
                        t[5] = e[5] + e[1] * i[0] + e[3] * i[1], t;
                    },
                    transform: function(t, e) {
                        for (var n = [].concat(t), r = 0, a = e.length; r < a; r++) {
                            var s = e[r];
                            switch (s[0]) {
                              case "t":
                                i.translate(n, n, [ s[1], s[2] ]);
                                break;

                              case "s":
                                i.scale(n, n, [ s[1], s[2] ]);
                                break;

                              case "r":
                                i.rotate(n, n, s[1]);
                            }
                        }
                        return n;
                    }
                };
                t.exports = i;
            }, function(t, e, i) {
                var n = i(15), r = i(33);
                t.exports = {
                    toTimeStamp: function(t) {
                        return n(t) && (t = t.indexOf("T") > 0 ? new Date(t).getTime() : new Date(t.replace(/-/gi, "/")).getTime()), 
                        r(t) && (t = t.getTime()), t;
                    }
                };
            }, function(t, e, i) {
                var n = i(0), r = i(29);
                t.exports = {
                    beforeGeomInit: function(t) {
                        t.set("limitInPlot", !0);
                        var e = t.get("data"), i = t.get("colDefs");
                        if (!i) return e;
                        var a = t.get("geoms"), s = !1;
                        n.each(a, function(t) {
                            if (-1 !== [ "area", "line", "path" ].indexOf(t.get("type"))) return s = !0, !1;
                        });
                        var o = [];
                        if (n.each(i, function(t, e) {
                            !s && t && (t.values || t.min || t.max) && o.push(e);
                        }), 0 === o.length) return e;
                        var c = [];
                        n.each(e, function(t) {
                            var e = !0;
                            n.each(o, function(a) {
                                var s = t[a];
                                if (s) {
                                    var o = i[a];
                                    if ("timeCat" === o.type) {
                                        var c = o.values;
                                        n.isNumber(c[0]) && (s = r.toTimeStamp(s));
                                    }
                                    (o.values && -1 === o.values.indexOf(s) || o.min && s < o.min || o.max && s > o.max) && (e = !1);
                                }
                            }), e && c.push(t);
                        }), t.set("filteredData", c);
                    }
                };
            }, function(t, e, i) {
                var n = i(23), r = i(0);
                t.exports = {
                    updateLinearScale: function(t, e, i) {
                        var a = this.chart, s = n.getColDef(a, t);
                        a.scale(t, r.mix({}, s, {
                            min: e,
                            max: i,
                            nice: !1
                        }));
                    },
                    updateCatScale: function(t, e, i, a, s, o) {
                        var c = this.chart, h = n.getColDef(c, t);
                        c.scale(t, r.mix({}, h, {
                            values: e,
                            ticks: i,
                            scale: function(t) {
                                "timeCat" === this.type && (t = this._toTimeStamp(t));
                                var e, i, n, r = this.rangeMin(), c = this.rangeMax(), h = c - r, l = a.indexOf(t);
                                if (l >= 0 && l < s) e = (i = r > 0 ? -.1 : r - .1) - h, n = l / s; else if (l >= 0 && l > o) i = (e = c < 1 ? 1.1 : c + .1) + h, 
                                n = (l - o - 1) / (a.length - 1 - o); else {
                                    var u = this.translate(t);
                                    n = 1 === this.values.length ? u : u / (this.values.length - 1), e = r, i = c;
                                }
                                return e + n * (i - e);
                            },
                            getTicks: function() {
                                var t = this, e = this.ticks, i = [];
                                return r.each(e, function(e) {
                                    var n;
                                    if (r.isObject(e)) n = e; else {
                                        var a = t.scale(e);
                                        a = a >= 0 && a <= 1 ? a : NaN, n = {
                                            text: r.isString(e) ? e : t.getText(e),
                                            value: a,
                                            tickValue: e
                                        };
                                    }
                                    i.push(n);
                                }), i;
                            }
                        }));
                    }
                };
            }, function(t, e, i) {
                var n = i(10);
                t.exports = function(t) {
                    return n(t) ? "" : t.toString();
                };
            }, function(t, e, i) {
                var n = i(11);
                t.exports = function(t) {
                    return n(t, "Date");
                };
            }, function(t, e, i) {
                var n = i(62), r = i(11);
                t.exports = function(t) {
                    if (!n(t) || !r(t, "Object")) return !1;
                    if (null === Object.getPrototypeOf(t)) return !0;
                    for (var e = t; null !== Object.getPrototypeOf(e); ) e = Object.getPrototypeOf(e);
                    return Object.getPrototypeOf(t) === e;
                };
            }, function(t, e, i) {
                var n = i(0), r = function() {
                    function t(t) {
                        var e = {}, i = this.getDefaultCfg();
                        this._attrs = e, n.mix(e, i, t);
                    }
                    var e = t.prototype;
                    return e.getDefaultCfg = function() {
                        return {};
                    }, e.get = function(t) {
                        return this._attrs[t];
                    }, e.set = function(t, e) {
                        this._attrs[t] = e;
                    }, e.destroy = function() {
                        this._attrs = {}, this.destroyed = !0;
                    }, t;
                }();
                t.exports = r;
            }, function(t, e, i) {
                var n = i(17), r = i(37), a = i(4), s = i(16), o = i(15), c = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this), this.type = "cat", this.isCategory = !0, 
                        this.isRounding = !0;
                    }, i.init = function() {
                        var t = this.values, e = this.tickCount;
                        if (a(t, function(e, i) {
                            t[i] = e.toString();
                        }), !this.ticks) {
                            var i = t;
                            e && (i = r({
                                maxCount: e,
                                data: t,
                                isRounding: this.isRounding
                            }).ticks), this.ticks = i;
                        }
                    }, i.getText = function(e) {
                        return -1 === this.values.indexOf(e) && s(e) && (e = this.values[Math.round(e)]), 
                        t.prototype.getText.call(this, e);
                    }, i.translate = function(t) {
                        var e = this.values.indexOf(t);
                        return -1 === e && s(t) ? e = t : -1 === e && (e = NaN), e;
                    }, i.scale = function(t) {
                        var e, i = this.rangeMin(), n = this.rangeMax();
                        return (o(t) || -1 !== this.values.indexOf(t)) && (t = this.translate(t)), e = this.values.length > 1 ? t / (this.values.length - 1) : t, 
                        i + e * (n - i);
                    }, i.invert = function(t) {
                        if (o(t)) return t;
                        var e = this.rangeMin(), i = this.rangeMax();
                        t < e && (t = e), t > i && (t = i);
                        var n = (t - e) / (i - e), r = Math.round(n * (this.values.length - 1)) % this.values.length;
                        return r = r || 0, this.values[r];
                    }, e;
                }(n);
                n.Cat = c, t.exports = c;
            }, function(t, e, i) {
                var n = i(4);
                t.exports = function(t) {
                    var e, i = {}, r = [], a = t.isRounding, s = function(t) {
                        var e = [];
                        return n(t, function(t) {
                            e = e.concat(t);
                        }), e;
                    }(t.data), o = s.length, c = t.maxCount || 8;
                    if (a ? 2 === (e = function(t, e) {
                        var i;
                        for (i = e; i > 0 && t % i != 0; i--) ;
                        if (1 === i) for (i = e; i > 0 && (t - 1) % i != 0; i--) ;
                        return i;
                    }(o - 1, c - 1) + 1) ? e = c : e < c - 4 && (e = c - 4) : e = c, !a && o <= e + e / 2) r = [].concat(s); else {
                        for (var h = parseInt(o / (e - 1), 10), l = s.map(function(t, e) {
                            return e % h == 0 ? s.slice(e, e + h) : null;
                        }).filter(function(t) {
                            return t;
                        }), u = 1, f = l.length; u < f && (a ? u * h < o - h : u < e - 1); u++) r.push(l[u][0]);
                        if (s.length) {
                            r.unshift(s[0]);
                            var p = s[o - 1];
                            -1 === r.indexOf(p) && r.push(p);
                        }
                    }
                    return i.categories = s, i.ticks = r, i;
                };
            }, function(t, e, i) {
                var n = i(0), r = i(2), a = {}, s = "_INDEX";
                t.exports = {
                    getGroupClass: function() {},
                    getChildren: function() {
                        return this.get("children");
                    },
                    addShape: function(t, e) {
                        void 0 === e && (e = {});
                        var i = this.get("canvas"), s = a[t];
                        s || (s = n.upperFirst(t), a[t] = s), e.canvas = i, "Text" === s && i && i.get("fontFamily") && (e.attrs.fontFamily = e.attrs.fontFamily || i.get("fontFamily"));
                        var o = new r[s](e);
                        return this.add(o), o;
                    },
                    addGroup: function(t) {
                        var e = this.get("canvas"), i = this.getGroupClass();
                        (t = n.mix({}, t)).canvas = e, t.parent = this;
                        var r = new i(t);
                        return this.add(r), r;
                    },
                    contain: function(t) {
                        return this.get("children").indexOf(t) > -1;
                    },
                    sort: function() {
                        for (var t = this.get("children"), e = 0, i = t.length; e < i; e++) t[e][s] = e;
                        return t.sort(function(t) {
                            return function(e, i) {
                                var n = t(e, i);
                                return 0 === n ? e[s] - i[s] : n;
                            };
                        }(function(t, e) {
                            return t.get("zIndex") - e.get("zIndex");
                        })), this;
                    },
                    clear: function() {
                        for (var t = this.get("children"); 0 !== t.length; ) t[t.length - 1].remove(!0);
                        return this;
                    },
                    add: function(t) {
                        var e = this.get("children");
                        n.isArray(t) || (t = [ t ]);
                        for (var i = 0, r = t.length; i < r; i++) {
                            var a = t[i], s = a.get("parent");
                            if (s) {
                                var o = s.get("children");
                                n.Array.remove(o, a);
                            }
                            this._setEvn(a), e.push(a);
                        }
                        return this;
                    },
                    _setEvn: function(t) {
                        t._attrs.parent = this, t._attrs.context = this._attrs.context, t._attrs.canvas = this._attrs.canvas;
                        var e = t._attrs.attrs.clip;
                        if (e && (e.set("parent", this), e.set("context", this.get("context"))), t._attrs.isGroup) for (var i = t._attrs.children, n = 0, r = i.length; n < r; n++) t._setEvn(i[n]);
                    }
                };
            }, function(t, e, i) {
                var n = i(0), r = i(27), a = i(38), s = i(9), o = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initProperties = function() {
                        this._attrs = {
                            zIndex: 0,
                            visible: !0,
                            destroyed: !1,
                            isGroup: !0,
                            children: []
                        };
                    }, i.drawInner = function(t) {
                        for (var e = this.get("children"), i = 0, n = e.length; i < n; i++) e[i].draw(t);
                        return this;
                    }, i.getBBox = function() {
                        for (var t = 1 / 0, e = -1 / 0, i = 1 / 0, n = -1 / 0, r = this.get("children"), a = 0, o = r.length; a < o; a++) {
                            var c = r[a];
                            if (c.get("visible")) {
                                var h = c.getBBox();
                                if (!h) continue;
                                var l = [ h.minX, h.minY ], u = [ h.minX, h.maxY ], f = [ h.maxX, h.minY ], p = [ h.maxX, h.maxY ], g = c.attr("matrix");
                                s.transformMat2d(l, l, g), s.transformMat2d(u, u, g), s.transformMat2d(f, f, g), 
                                s.transformMat2d(p, p, g), t = Math.min(l[0], u[0], f[0], p[0], t), e = Math.max(l[0], u[0], f[0], p[0], e), 
                                i = Math.min(l[1], u[1], f[1], p[1], i), n = Math.max(l[1], u[1], f[1], p[1], n);
                            }
                        }
                        return {
                            minX: t,
                            minY: i,
                            maxX: e,
                            maxY: n,
                            x: t,
                            y: i,
                            width: e - t,
                            height: n - i
                        };
                    }, i.destroy = function() {
                        this.get("destroyed") || (this.clear(), t.prototype.destroy.call(this));
                    }, e;
                }(r);
                n.mix(o.prototype, a, {
                    getGroupClass: function() {
                        return o;
                    }
                }), t.exports = o;
            }, function(e, i) {
                e.exports = {
                    requestAnimationFrame: "object" == ("undefined" == typeof window ? "undefined" : t(window)) && window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
                        return setTimeout(t, 16);
                    }
                };
            }, function(t, e, i) {
                function n(t) {
                    return [ t.x, t.y ];
                }
                var r = i(9);
                t.exports = {
                    smooth: function(t, e, i) {
                        for (var a, s, o, c = !!e, h = function(t, e, i, a) {
                            var s, o, c, h, l, u, f, p, g = [], d = !!a;
                            if (d) {
                                for (c = [ 1 / 0, 1 / 0 ], h = [ -1 / 0, -1 / 0 ], p = 0, f = t.length; p < f; p++) l = n(t[p]), 
                                r.min(c, c, l), r.max(h, h, l);
                                r.min(c, c, a[0]), r.max(h, h, a[1]);
                            }
                            for (p = 0, u = t.length; p < u; p++) {
                                if (l = n(t[p]), i) s = n(t[p ? p - 1 : u - 1]), o = n(t[(p + 1) % u]); else {
                                    if (0 === p || p === u - 1) {
                                        g.push([ l[0], l[1] ]);
                                        continue;
                                    }
                                    s = n(t[p - 1]), o = n(t[p + 1]);
                                }
                                var v = r.sub([], o, s);
                                r.scale(v, v, .4);
                                var y = r.distance(l, s), m = r.distance(l, o), x = y + m;
                                0 !== x && (y /= x, m /= x);
                                var _ = r.scale([], v, -y), S = r.scale([], v, m), b = r.add([], l, _), C = r.add([], l, S);
                                d && (r.max(b, b, c), r.min(b, b, h), r.max(C, C, c), r.min(C, C, h)), g.push([ b[0], b[1] ]), 
                                g.push([ C[0], C[1] ]);
                            }
                            return i && g.push(g.shift()), g;
                        }(t, 0, c, i), l = t.length, u = [], f = 0; f < l - 1; f++) a = h[2 * f], s = h[2 * f + 1], 
                        o = t[f + 1], u.push([ "C", a[0], a[1], s[0], s[1], o.x, o.y ]);
                        return c && (a = h[l], s = h[l + 1], o = t[0], u.push([ "C", a[0], a[1], s[0], s[1], o.x, o.y ])), 
                        u;
                    }
                };
            }, function(t, e, i) {
                var n = i(5), r = i(22), a = i(0);
                i(43);
                var s = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return e.type = "path", e.shapeType = "line", e;
                    }, i.getDrawCfg = function(e) {
                        var i = t.prototype.getDrawCfg.call(this, e);
                        return i.isStack = this.hasAdjust("stack"), i;
                    }, i.draw = function(t, e) {
                        var i = this, n = i.get("container"), s = i.getYScale(), o = i.get("connectNulls"), c = r.splitArray(t, s.field, o), h = this.getDrawCfg(t[0]);
                        h.origin = t, a.each(c, function(r, a) {
                            h.splitedIndex = a, h.points = r, i.drawShape(h.shape, t[0], h, n, e);
                        });
                    }, e;
                }(n);
                n.Path = s, t.exports = s;
            }, function(t, e, i) {
                var n = i(0), r = i(8), a = i(22), s = i(1), o = r.registerFactory("line", {
                    defaultShapeType: "line"
                });
                n.each([ "line", "smooth", "dash" ], function(t) {
                    r.registerShape("line", t, {
                        draw: function(e, i) {
                            var r = "smooth" === t, o = function(t) {
                                var e = {
                                    strokeStyle: t.color
                                };
                                return t.size >= 0 && (e.lineWidth = t.size), n.mix(e, t.style), n.mix({}, s.shape.line, e);
                            }(e);
                            return "dash" === t && (o.lineDash = s.lineDash), function(t, e, i, r) {
                                var s = t.points;
                                if (s.length && n.isArray(s[0].y)) {
                                    for (var o = [], c = [], h = 0, l = s.length; h < l; h++) {
                                        var u = s[h], f = a.splitPoints(u);
                                        c.push(f[0]), o.push(f[1]);
                                    }
                                    return t.isInCircle && (o.push(o[0]), c.push(c[0])), t.isStack ? e.addShape("Polyline", {
                                        className: "line",
                                        attrs: n.mix({
                                            points: o,
                                            smooth: r
                                        }, i)
                                    }) : [ e.addShape("Polyline", {
                                        className: "line",
                                        attrs: n.mix({
                                            points: o,
                                            smooth: r
                                        }, i)
                                    }), e.addShape("Polyline", {
                                        className: "line",
                                        attrs: n.mix({
                                            points: c,
                                            smooth: r
                                        }, i)
                                    }) ];
                                }
                                return t.isInCircle && s.push(s[0]), e.addShape("Polyline", {
                                    className: "line",
                                    attrs: n.mix({
                                        points: s,
                                        smooth: r
                                    }, i)
                                });
                            }(e, i, o, r);
                        }
                    });
                }), t.exports = o;
            }, function(t, e, i) {
                var n = i(1), r = i(0), a = {
                    getDefalutSize: function() {
                        var t = this.get("defaultSize");
                        if (!t) {
                            var e = this.get("coord"), i = this.getXScale(), r = this.get("dataArray"), a = i.values.length, s = i.range, o = 1 / a, c = 1;
                            e && e.isPolar ? c = e.transposed && a > 1 ? n.widthRatio.multiplePie : n.widthRatio.rose : (i.isLinear && (o *= s[1] - s[0]), 
                            c = n.widthRatio.column), o *= c, this.hasAdjust("dodge") && (o /= r.length), t = o, 
                            this.set("defaultSize", t);
                        }
                        return t;
                    },
                    getDimWidth: function(t) {
                        var e = this.get("coord"), i = e.convertPoint({
                            x: 0,
                            y: 0
                        }), n = e.convertPoint({
                            x: "x" === t ? 1 : 0,
                            y: "x" === t ? 0 : 1
                        }), r = 0;
                        return i && n && (r = Math.sqrt(Math.pow(n.x - i.x, 2) + Math.pow(n.y - i.y, 2))), 
                        r;
                    },
                    _getWidth: function() {
                        var t = this.get("_width");
                        if (!t) {
                            var e = this.get("coord");
                            t = e && e.isPolar && !e.transposed ? (e.endAngle - e.startAngle) * e.circleRadius : this.getDimWidth("x"), 
                            this.set("_width", t);
                        }
                        return t;
                    },
                    _toNormalizedSize: function(t) {
                        return t / this._getWidth();
                    },
                    _toCoordSize: function(t) {
                        return this._getWidth() * t;
                    },
                    getNormalizedSize: function(t) {
                        var e = this.getAttrValue("size", t);
                        return e = r.isNil(e) ? this.getDefalutSize() : this._toNormalizedSize(e);
                    },
                    getSize: function(t) {
                        var e = this.getAttrValue("size", t);
                        if (r.isNil(e)) {
                            var i = this.getDefalutSize();
                            e = this._toCoordSize(i);
                        }
                        return e;
                    }
                };
                t.exports = a;
            }, function(t, e, i) {
                var n = i(0), r = {
                    circle: function(t, e, i, n) {
                        n.arc(t, e, i, 0, 2 * Math.PI, !1);
                    },
                    square: function(t, e, i, n) {
                        n.moveTo(t - i, e - i), n.lineTo(t + i, e - i), n.lineTo(t + i, e + i), n.lineTo(t - i, e + i), 
                        n.closePath();
                    }
                }, a = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initProperties = function() {
                        t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                        this._attrs.type = "marker";
                    }, i.getDefaultAttrs = function() {
                        return {
                            x: 0,
                            y: 0,
                            lineWidth: 0
                        };
                    }, i.createPath = function(t) {
                        var e, i = this.get("attrs"), a = i.x, s = i.y, o = i.radius, c = i.symbol || "circle";
                        e = n.isFunction(c) ? c : r[c], t.beginPath(), e(a, s, o, t, this);
                    }, i.calculateBox = function() {
                        var t = this.get("attrs"), e = t.x, i = t.y, n = t.radius;
                        return {
                            minX: e - n,
                            minY: i - n,
                            maxX: e + n,
                            maxY: i + n
                        };
                    }, e;
                }(i(3).Shape);
                t.exports = a;
            }, function(t, e, i) {
                var n = i(0), r = i(3).Group, a = i(45), s = function() {
                    function t(t) {
                        n.deepMix(this, this.getDefaultCfg(), t), this._init(), this._renderTitle(), this._renderItems();
                    }
                    var e = t.prototype;
                    return e.getDefaultCfg = function() {
                        return {
                            showTitle: !1,
                            title: null,
                            items: null,
                            titleGap: 12,
                            itemGap: 10,
                            itemMarginBottom: 12,
                            itemFormatter: null,
                            itemWidth: null,
                            wordSpace: 6,
                            x: 0,
                            y: 0,
                            layout: "horizontal",
                            joinString: ": "
                        };
                    }, e._init = function() {
                        var t = new r({
                            zIndex: this.zIndex || 0
                        });
                        this.container = t;
                        var e = t.addGroup();
                        this.wrapper = e;
                        var i = e.addGroup({
                            className: "itemsGroup"
                        });
                        this.itemsGroup = i, this.parent && this.parent.add(t);
                    }, e._renderTitle = function(t) {
                        t = t || this.title;
                        var e = this.titleShape, i = 0;
                        if (this.showTitle && t) {
                            if (e && !e.get("destroyed")) e.attr("text", t); else {
                                var r = this.wrapper, a = this.titleStyle;
                                e = r.addShape("text", {
                                    className: "title",
                                    attrs: n.mix({
                                        x: 0,
                                        y: 0,
                                        text: t
                                    }, a)
                                }), this.titleShape = e;
                            }
                            i = e.getBBox().height + this.titleGap;
                        }
                        this._titleHeight = i;
                    }, e._renderItems = function(t) {
                        var e = this;
                        (t = t || e.items) && (e.reversed && t.reverse(), n.each(t, function(t, i) {
                            e._addItem(t, i);
                        }), t.length > 1 && this._adjustItems(), this._renderBackground());
                    }, e._renderBackground = function() {
                        var t = this.background;
                        if (t) {
                            var e = this.container, i = this.wrapper.getBBox(), r = i.minX, a = i.minY, s = i.width, o = i.height, c = t.padding || [ 0, 0, 0, 0 ];
                            c = n.parsePadding(c);
                            var h = n.mix({
                                x: r - c[3],
                                y: a - c[0],
                                width: s + c[1] + c[3],
                                height: o + c[0] + c[2]
                            }, t), l = this.backShape;
                            l ? l.attr(h) : l = e.addShape("Rect", {
                                zIndex: -1,
                                attrs: h
                            }), this.backShape = l, e.sort();
                        }
                    }, e._addItem = function(t) {
                        var e = this.itemsGroup.addGroup({
                            name: t.name,
                            value: t.value,
                            dataValue: t.dataValue,
                            checked: t.checked
                        }), i = this.unCheckStyle, r = this.unCheckColor, s = this.nameStyle, o = this.valueStyle, c = this.wordSpace, h = t.marker, l = t.value, u = 0;
                        if (r && (i.fill = r), h) {
                            var f = h.radius || 3, p = n.mix({
                                x: f,
                                y: this._titleHeight
                            }, h);
                            !1 === t.checked && n.mix(p, i);
                            var g = new a({
                                className: "item-marker",
                                attrs: p
                            });
                            e.add(g), u += g.getBBox().width + c;
                        }
                        var d, v = t.name;
                        if (v) {
                            var y = this.joinString || "";
                            v = l ? v + y : v, d = e.addShape("text", {
                                className: "name",
                                attrs: n.mix({
                                    x: u,
                                    y: this._titleHeight,
                                    text: this._formatItemValue(v)
                                }, s, !1 === t.checked ? i : null)
                            });
                        }
                        if (l) {
                            var m = u;
                            d && (m += d.getBBox().width), e.addShape("text", {
                                className: "value",
                                attrs: n.mix({
                                    x: m,
                                    y: this._titleHeight,
                                    text: l
                                }, o, !1 === t.checked ? i : null)
                            });
                        }
                        return e;
                    }, e._formatItemValue = function(t) {
                        var e = this.itemFormatter;
                        return e && (t = e.call(this, t)), t;
                    }, e._getMaxItemWidth = function() {
                        var t = this.itemWidth;
                        if (n.isNumber(t) || n.isNil(t)) return t;
                        if ("auto" === t) {
                            for (var e = this.itemsGroup.get("children"), i = e.length, r = 0, a = 0; a < i; a++) {
                                var s = e[a].getBBox().width;
                                r = Math.max(r, s);
                            }
                            var o = this.maxLength, c = this.itemGap, h = (o - c) / 2, l = (o - 2 * c) / 3;
                            return 2 === i ? Math.max(r, h) : r <= l ? l : r <= h ? h : r;
                        }
                    }, e._adjustHorizontal = function() {
                        for (var t, e, i = this.maxLength, n = this.itemsGroup.get("children"), r = this.itemGap, a = this.itemMarginBottom, s = this._titleHeight, o = 0, c = 0, h = this._getMaxItemWidth(), l = [], u = 0, f = n.length; u < f; u++) {
                            var p = n[u], g = p.getBBox(), d = g.height, v = g.width;
                            e = d + a, (t = h || v) - (i - c) > 1e-4 && (o++, c = 0), p.moveTo(c, o * e), l.push({
                                x: c,
                                y: o * e + s - d / 2,
                                width: 1.375 * v,
                                height: 1.375 * d
                            }), c += t + r;
                        }
                        this.legendHitBoxes = l;
                    }, e._adjustVertical = function() {
                        for (var t, e, i = this.maxLength, r = this.itemsGroup, a = this.itemGap, s = this.itemMarginBottom, o = this.itemWidth, c = this._titleHeight, h = r.get("children"), l = 0, u = 0, f = 0, p = [], g = 0, d = h.length; g < d; g++) {
                            var v = h[g], y = v.getBBox();
                            t = y.width, e = y.height, n.isNumber(o) ? u = o + a : t > u && (u = t + a), i - l < e ? (l = 0, 
                            f += u, v.moveTo(f, 0), p.push({
                                x: f,
                                y: c - e / 2,
                                width: 1.375 * t,
                                height: 1.375 * e
                            })) : (v.moveTo(f, l), p.push({
                                x: f,
                                y: l - e / 2 + c,
                                width: 1.375 * t,
                                height: 1.375 * e
                            })), l += e + s;
                        }
                        this.legendHitBoxes = p;
                    }, e._adjustItems = function() {
                        "horizontal" === this.layout ? this._adjustHorizontal() : this._adjustVertical();
                    }, e.moveTo = function(t, e) {
                        this.x = t, this.y = e;
                        var i = this.container;
                        return i && i.moveTo(t, e), this;
                    }, e.setItems = function(t) {
                        this.clearItems(), this._renderItems(t);
                    }, e.setTitle = function(t) {
                        this._renderTitle(t);
                    }, e.clearItems = function() {
                        this.itemsGroup.clear();
                    }, e.getWidth = function() {
                        return this.container.getBBox().width;
                    }, e.getHeight = function() {
                        return this.container.getBBox().height;
                    }, e.show = function() {
                        this.container.show();
                    }, e.hide = function() {
                        this.container.hide();
                    }, e.clear = function() {
                        var t = this.container;
                        t.clear(), t.remove(!0);
                    }, t;
                }();
                t.exports = s;
            }, function(t, e, i) {
                var n = i(0), r = {
                    appear: {
                        duration: 450,
                        easing: "quadraticOut"
                    },
                    update: {
                        duration: 300,
                        easing: "quadraticOut"
                    },
                    enter: {
                        duration: 300,
                        easing: "quadraticOut"
                    },
                    leave: {
                        duration: 350,
                        easing: "quadraticIn"
                    }
                }, a = {
                    defaultCfg: {},
                    Action: {},
                    getAnimation: function(t, e, i) {
                        var r = this.defaultCfg[t];
                        if (r) {
                            var a = r[i];
                            if (n.isFunction(a)) return a(e);
                        }
                        return !1;
                    },
                    getAnimateCfg: function(t, e) {
                        var i = r[e], a = this.defaultCfg[t];
                        return a && a.cfg && a.cfg[e] ? n.deepMix({}, i, a.cfg[e]) : i;
                    },
                    registerAnimation: function(t, e) {
                        this.Action || (this.Action = {}), this.Action[t] = e;
                    }
                };
                t.exports = a;
            }, function(t, e, i) {
                var n = i(3).Matrix, r = i(0), a = {
                    getCoordInfo: function(t) {
                        var e = t.start, i = t.end;
                        return {
                            start: e,
                            end: i,
                            width: i.x - e.x,
                            height: Math.abs(i.y - e.y)
                        };
                    },
                    getScaledMatrix: function(t, e, i) {
                        var r;
                        t.apply(e);
                        var a = e[0], s = e[1];
                        if ("x" === i) {
                            t.transform([ [ "t", a, s ], [ "s", .01, 1 ], [ "t", -a, -s ] ]);
                            var o = t.getMatrix();
                            r = n.transform(o, [ [ "t", a, s ], [ "s", 100, 1 ], [ "t", -a, -s ] ]);
                        } else if ("y" === i) {
                            t.transform([ [ "t", a, s ], [ "s", 1, .01 ], [ "t", -a, -s ] ]);
                            var c = t.getMatrix();
                            r = n.transform(c, [ [ "t", a, s ], [ "s", 1, 100 ], [ "t", -a, -s ] ]);
                        } else if ("xy" === i) {
                            t.transform([ [ "t", a, s ], [ "s", .01, .01 ], [ "t", -a, -s ] ]);
                            var h = t.getMatrix();
                            r = n.transform(h, [ [ "t", a, s ], [ "s", 100, 100 ], [ "t", -a, -s ] ]);
                        }
                        return r;
                    },
                    getAnimateParam: function(t, e, i) {
                        var n = {};
                        return t.delay && (n.delay = r.isFunction(t.delay) ? t.delay(e, i) : t.delay), n.easing = t.easing, 
                        n.duration = t.duration, n.delay = t.delay, n;
                    },
                    doAnimation: function(t, e, i, n) {
                        var r = t._id, s = t.get("index"), o = a.getAnimateParam(i, s, r), c = o.easing, h = o.delay, l = o.duration, u = t.animate().to({
                            attrs: e,
                            duration: l,
                            delay: h,
                            easing: c
                        });
                        n && u.onEnd(function() {
                            n();
                        });
                    }
                };
                t.exports = a;
            }, function(t, e, i) {
                var n = i(0), r = i(23), a = [ "touchstart", "touchmove", "touchend", "touchStart", "touchMove", "touchEnd" ];
                t.exports = {
                    _handleMove: function(t) {
                        if ("swipe" === t.type && t.deltaTime > 350) return null;
                        var e, i, n = this.currentDeltaX, r = this.currentDeltaY, s = this.lastPoint;
                        if (-1 !== a.indexOf(t.type)) {
                            var o = t.touches[0];
                            e = o.x - s.x, i = o.y - s.y, this.lastPoint = o;
                        } else null !== n && null !== r && (e = t.deltaX - n, i = t.deltaY - r, this.currentDeltaX = t.deltaX, 
                        this.currentDeltaY = t.deltaY);
                        if (Math.abs(e) > 0 || Math.abs(i) > 0) {
                            var c = this._timestamp, h = +new Date();
                            h - c > 16 && (this._doMove(e, i), this._timestamp = h);
                        }
                    },
                    _doMove: function(t, e) {
                        var i = this, a = i.mode, s = i.chart, o = i.limitRange, c = s.get("coord"), h = c.start, l = c.end, u = s.get("data");
                        if (n.directionEnabled(a, "x") && 0 !== t) {
                            var f = s.getXScale(), p = f.field;
                            o[p] || (o[p] = r.getLimitRange(u, f));
                            var g = l.x - h.x;
                            f.isCategory ? i._handleCatScale(f, t, g) : f.isLinear && i._handleLinearScale(f, t, g, "x");
                            var d = r.getColDef(s, p);
                            i.xRange = r.getFieldRange(d, o[p], f.type);
                        }
                        if (n.directionEnabled(a, "y") && 0 !== e) {
                            var v = h.y - l.y, y = s.getYScales();
                            n.each(y, function(t) {
                                var n = t.field;
                                o[n] || (o[n] = r.getLimitRange(u, t)), t.isLinear && i._handleLinearScale(t, e, v, "y");
                            });
                            var m = r.getColDef(s, y[0].field);
                            i.yRange = r.getFieldRange(m, o[y[0].field], y[0].type);
                        }
                        s.repaint();
                    },
                    _handleLinearScale: function(t, e, i, r) {
                        var a = t.field, s = t.min, o = t.max, c = this.limitRange;
                        if (s !== c[a].min || o !== c[a].max) {
                            var h = e / i * (o - s), l = "x" === r ? o - h : o + h, u = "x" === r ? s - h : s + h;
                            c[a] && !n.isNil(c[a].min) && u <= c[a].min && (l = o - s + (u = c[a].min)), c[a] && !n.isNil(c[a].max) && l >= c[a].max && (u = (l = c[a].max) - (o - s)), 
                            this.updateLinearScale(a, u, l);
                        }
                    },
                    _handleCatScale: function(t, e, i) {
                        var n = t.type, r = t.field, a = t.values, s = t.ticks, o = this.limitRange[r], c = o.length - 1, h = a.length, l = i / (h * (this.speed || 1)), u = o.indexOf(a[0]), f = o.indexOf(a[h - 1]), p = u, g = f, d = Math.abs(e / i), v = this.step || Math.max(1, parseInt(d * h));
                        if (this._panCumulativeDelta += e, p = this._panCumulativeDelta > l ? Math.max(0, p - v) : this._panCumulativeDelta < -l ? Math.min(c - h + 1, p + v) : p, 
                        g = Math.min(c, p + h - 1), p === u && g === f) return null;
                        var y = o.slice(p, g + 1), m = null;
                        if ("timeCat" === n) {
                            var x = s.length > 2 ? s[1] - s[0] : 864e5;
                            if (this._panCumulativeDelta > l) for (var _ = s[0] - x; _ >= y[0]; _ -= x) s.unshift(_); else if (this._panCumulativeDelta < -l) for (var S = s[s.length - 1] + x; S <= y[y.length - 1]; S += x) s.push(S);
                            m = s;
                        }
                        this.updateCatScale(r, y, m, o, p, g), this._panCumulativeDelta = p !== u ? 0 : this._panCumulativeDelta;
                    }
                };
            }, function(t, e, i) {
                var n = i(0);
                t.exports = {
                    _bindPress: function() {
                        var t = this.chart, e = this.hammer, i = this.el, r = this.pressThreshold, a = this.pressTime, s = t.get("tooltipController");
                        s && s.enable && (t.set("_closeTooltip", !0), e ? (e.get("press").set({
                            threshold: r,
                            time: a
                        }), e.on("press", n.wrapBehavior(this, "_handlePress"))) : n.addEventListener(i, "press", n.wrapBehavior(this, "_handlePress")));
                    },
                    reset: function() {
                        var t = this.chart, e = t.get("tooltipController");
                        e && (this.pressed = !1, !e.cfg.alwaysShow && t.hideTooltip(), t.set("_closeTooltip", !0));
                    },
                    _handlePress: function(t) {
                        this.pressed = !0;
                        var e = t.center || t.touches[0];
                        this.chart.set("_closeTooltip", !1), this.chart.showTooltip(e);
                    }
                };
            }, function(t, e, i) {
                var n = i(52), r = i(54);
                r.Util.measureText = function(t, e, i) {
                    if (!i) {
                        var n = 12;
                        return e && (n = parseInt(e.split(" ")[3], 10)), n /= 2, {
                            width: function(t) {
                                for (var e = 0, i = 0; i < t.length; i++) t.charCodeAt(i) > 0 && t.charCodeAt(i) < 128 ? e++ : e += 2;
                                return e;
                            }(t) * n
                        };
                    }
                    return i.font = e || "12px sans-serif", i.measureText(t);
                }, r.Util.addEventListener = function(t, e, i) {
                    t.addListener(e, i);
                }, r.Util.removeEventListener = function(t, e, i) {
                    t.removeListener(e, i);
                }, r.Util.createEvent = function(t, e) {
                    var i = 0, n = 0, r = t.touches;
                    return r && r.length > 0 && (i = r[0].x, n = r[0].y), {
                        type: t.type,
                        chart: e,
                        x: i,
                        y: n
                    };
                }, r.Renderer = n, t.exports = r;
            }, function(t, e, i) {
                function n(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }
                var r = {
                    fontSize: "FontSize",
                    opacity: "GlobalAlpha",
                    lineDash: "LineDash",
                    textAlign: "TextAlign"
                }, a = {
                    start: "left",
                    end: "right"
                }, s = function(t) {
                    function e(e) {
                        var i, r = n(n(i = t.call(this) || this));
                        return r.ctx = e, r.style = {}, r._initContext(e), i;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i.getContext = function(t) {
                        if ("2d" === t) return this.ctx;
                    }, i._initContext = function(t) {
                        Object.keys(r).map(function(e) {
                            return Object.defineProperty(t, e, {
                                set: function(i) {
                                    "textAlign" === e && (i = a[i] ? a[i] : i), t["set" + r[e]](i);
                                }
                            }), e;
                        });
                    }, e;
                }(i(53));
                t.exports = s;
            }, function(e, i, n) {
                var r;
                !function(i) {
                    function a() {}
                    function s(t, e) {
                        for (var i = t.length; i--; ) if (t[i].listener === e) return i;
                        return -1;
                    }
                    function o(t) {
                        return function() {
                            return this[t].apply(this, arguments);
                        };
                    }
                    function c(e) {
                        return "function" == typeof e || e instanceof RegExp || !(!e || "object" != (void 0 === e ? "undefined" : t(e))) && c(e.listener);
                    }
                    var h = a.prototype, l = i.EventEmitter;
                    h.getListeners = function(t) {
                        var e, i, n = this._getEvents();
                        if (t instanceof RegExp) {
                            e = {};
                            for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i]);
                        } else e = n[t] || (n[t] = []);
                        return e;
                    }, h.flattenListeners = function(t) {
                        var e, i = [];
                        for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
                        return i;
                    }, h.getListenersAsObject = function(t) {
                        var e, i = this.getListeners(t);
                        return i instanceof Array && ((e = {})[t] = i), e || i;
                    }, h.addListener = function(e, i) {
                        if (!c(i)) throw new TypeError("listener must be a function");
                        var n, r = this.getListenersAsObject(e), a = "object" == (void 0 === i ? "undefined" : t(i));
                        for (n in r) r.hasOwnProperty(n) && -1 === s(r[n], i) && r[n].push(a ? i : {
                            listener: i,
                            once: !1
                        });
                        return this;
                    }, h.on = o("addListener"), h.addOnceListener = function(t, e) {
                        return this.addListener(t, {
                            listener: e,
                            once: !0
                        });
                    }, h.once = o("addOnceListener"), h.defineEvent = function(t) {
                        return this.getListeners(t), this;
                    }, h.defineEvents = function(t) {
                        for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
                        return this;
                    }, h.removeListener = function(t, e) {
                        var i, n, r = this.getListenersAsObject(t);
                        for (n in r) r.hasOwnProperty(n) && -1 !== (i = s(r[n], e)) && r[n].splice(i, 1);
                        return this;
                    }, h.off = o("removeListener"), h.addListeners = function(t, e) {
                        return this.manipulateListeners(!1, t, e);
                    }, h.removeListeners = function(t, e) {
                        return this.manipulateListeners(!0, t, e);
                    }, h.manipulateListeners = function(e, i, n) {
                        var r, a, s = e ? this.removeListener : this.addListener, o = e ? this.removeListeners : this.addListeners;
                        if ("object" != (void 0 === i ? "undefined" : t(i)) || i instanceof RegExp) for (r = n.length; r--; ) s.call(this, i, n[r]); else for (r in i) i.hasOwnProperty(r) && (a = i[r]) && ("function" == typeof a ? s.call(this, r, a) : o.call(this, r, a));
                        return this;
                    }, h.removeEvent = function(e) {
                        var i, n = void 0 === e ? "undefined" : t(e), r = this._getEvents();
                        if ("string" === n) delete r[e]; else if (e instanceof RegExp) for (i in r) r.hasOwnProperty(i) && e.test(i) && delete r[i]; else delete this._events;
                        return this;
                    }, h.removeAllListeners = o("removeEvent"), h.emitEvent = function(t, e) {
                        var i, n, r, a, s = this.getListenersAsObject(t);
                        for (a in s) if (s.hasOwnProperty(a)) for (i = s[a].slice(0), r = 0; r < i.length; r++) !0 === (n = i[r]).once && this.removeListener(t, n.listener), 
                        n.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, n.listener);
                        return this;
                    }, h.trigger = o("emitEvent"), h.emit = function(t) {
                        var e = Array.prototype.slice.call(arguments, 1);
                        return this.emitEvent(t, e);
                    }, h.setOnceReturnValue = function(t) {
                        return this._onceReturnValue = t, this;
                    }, h._getOnceReturnValue = function() {
                        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
                    }, h._getEvents = function() {
                        return this._events || (this._events = {});
                    }, a.noConflict = function() {
                        return i.EventEmitter = l, a;
                    }, void 0 !== (r = function() {
                        return a;
                    }.call(i, n, i, e)) && (e.exports = r);
                }("undefined" != typeof window ? window : this || {});
            }, function(t, e, i) {
                var n = i(55);
                i(94), i(106), i(111), i(112), i(113), i(116);
                var r = i(125), a = i(128), s = i(129), o = i(130), c = i(136), h = i(137);
                n.Animate = i(47), n.Chart.plugins.register([ r, s, a, o, c, h ]), i(138), n.Interaction = i(12), 
                t.exports = n;
            }, function(t, e, i) {
                var n = {}, r = i(1);
                n.Global = r, n.version = r.version, n.Chart = i(7), n.Shape = i(8), n.G = i(3), 
                n.Util = i(0), n.track = function(t) {
                    r.trackable = t;
                }, i(93), t.exports = n;
            }, function(t, e, i) {
                var n = i(0), r = {
                    label: {
                        fill: "#808080",
                        fontSize: 10
                    },
                    line: {
                        stroke: "#E8E8E8",
                        lineWidth: 1
                    },
                    grid: {
                        type: "line",
                        stroke: "#E8E8E8",
                        lineWidth: 1,
                        lineDash: [ 2 ]
                    },
                    tickLine: null,
                    labelOffset: 7.5
                }, a = {
                    fontFamily: '"Helvetica Neue", "San Francisco", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", sans-serif',
                    defaultColor: "#1890FF",
                    pixelRatio: 1,
                    padding: "auto",
                    appendPadding: 15,
                    colors: [ "#1890FF", "#2FC25B", "#FACC14", "#223273", "#8543E0", "#13C2C2", "#3436C7", "#F04864" ],
                    shapes: {
                        line: [ "line", "dash" ],
                        point: [ "circle", "hollowCircle" ]
                    },
                    sizes: [ 4, 10 ],
                    axis: {
                        common: r,
                        bottom: n.mix({}, r, {
                            grid: null
                        }),
                        left: n.mix({}, r, {
                            line: null
                        }),
                        right: n.mix({}, r, {
                            line: null
                        }),
                        circle: n.mix({}, r, {
                            line: null
                        }),
                        radius: n.mix({}, r, {
                            labelOffset: 4
                        })
                    },
                    shape: {
                        line: {
                            lineWidth: 2,
                            lineJoin: "round",
                            lineCap: "round"
                        },
                        point: {
                            lineWidth: 0,
                            size: 3
                        },
                        area: {
                            fillOpacity: .1
                        }
                    },
                    _defaultAxis: r
                };
                t.exports = a;
            }, function(e, i) {
                var n, r = !!function() {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0;
                            }
                        });
                        window.addEventListener("e", null, e);
                    } catch (t) {}
                    return t;
                }() && {
                    passive: !0
                };
                n = {
                    isWx: "object" == ("undefined" == typeof wx ? "undefined" : t(wx)) && "function" == typeof wx.getSystemInfoSync,
                    isMy: "object" == ("undefined" == typeof my ? "undefined" : t(my)) && "function" == typeof my.getSystemInfoSync,
                    isNode: void 0 !== e && void 0 !== e.exports,
                    isBrowser: "undefined" != typeof window && void 0 !== window.document && void 0 !== window.sessionStorage,
                    getPixelRatio: function() {
                        return window && window.devicePixelRatio || 1;
                    },
                    getStyle: function(t, e) {
                        return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
                    },
                    getWidth: function(t) {
                        var e = this.getStyle(t, "width");
                        return "auto" === e && (e = t.offsetWidth), parseFloat(e);
                    },
                    getHeight: function(t) {
                        var e = this.getStyle(t, "height");
                        return "auto" === e && (e = t.offsetHeight), parseFloat(e);
                    },
                    getDomById: function(t) {
                        return t ? document.getElementById(t) : null;
                    },
                    getRelativePosition: function(t, e) {
                        var i = e.get("el"), n = i.getBoundingClientRect(), r = n.top, a = n.right, s = n.bottom, o = n.left, c = parseFloat(this.getStyle(i, "padding-left")), h = parseFloat(this.getStyle(i, "padding-top")), l = a - o - c - parseFloat(this.getStyle(i, "padding-right")), u = s - r - h - parseFloat(this.getStyle(i, "padding-bottom")), f = e.get("pixelRatio");
                        return {
                            x: (t.x - o - c) / l * i.width / f,
                            y: (t.y - r - h) / u * i.height / f
                        };
                    },
                    addEventListener: function(t, e, i) {
                        n.isBrowser && t.addEventListener(e, i, r);
                    },
                    removeEventListener: function(t, e, i) {
                        n.isBrowser && t.removeEventListener(e, i, r);
                    },
                    createEvent: function(t, e) {
                        return function(t, e) {
                            var i = t.type, r = {}, a = t.targetTouches;
                            a && a.length > 0 ? (r.x = a[0].clientX, r.y = a[0].clientY) : (r.x = t.clientX, 
                            r.y = t.clientY);
                            var s = e.get("canvas"), o = n.getRelativePosition(r, s);
                            return function(e, i, n, r, a) {
                                return {
                                    type: e,
                                    chart: i,
                                    native: t || null,
                                    x: void 0 !== n ? n : null,
                                    y: void 0 !== r ? r : null
                                };
                            }(i, e, o.x, o.y);
                        }(t, e);
                    },
                    measureText: function(t, e, i) {
                        return i || (i = document.createElement("canvas").getContext("2d")), i.font = e || "12px sans-serif", 
                        i.measureText(t);
                    }
                }, e.exports = n;
            }, function(t, e, i) {
                var n = i(32);
                t.exports = function(t) {
                    var e = n(t);
                    return e.charAt(0).toUpperCase() + e.substring(1);
                };
            }, function(t, e, i) {
                var n = i(32);
                t.exports = function(t) {
                    var e = n(t);
                    return e.charAt(0).toLowerCase() + e.substring(1);
                };
            }, function(t, e, i) {
                var n = i(11);
                t.exports = function(t) {
                    return n(t, "Boolean");
                };
            }, function(t, e, i) {
                var n = i(11);
                t.exports = function(t) {
                    return n(t, "Function");
                };
            }, function(e, i) {
                var n = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                    return void 0 === e ? "undefined" : t(e);
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
                };
                e.exports = function(t) {
                    return "object" === (void 0 === t ? "undefined" : n(t)) && null !== t;
                };
            }, function(t, e, i) {
                function n(t, e, i, o) {
                    i = i || 0, o = o || s;
                    for (var c in e) if (e.hasOwnProperty(c)) {
                        var h = e[c];
                        null !== h && r(h) ? (r(t[c]) || (t[c] = {}), i < o ? n(t[c], h, i + 1, o) : t[c] = e[c]) : a(h) ? (t[c] = [], 
                        t[c] = t[c].concat(h)) : void 0 !== h && (t[c] = h);
                    }
                }
                var r = i(34), a = i(13), s = 5;
                t.exports = function() {
                    for (var t = new Array(arguments.length), e = t.length, i = 0; i < e; i++) t[i] = arguments[i];
                    for (var r = t[0], a = 1; a < e; a++) n(r, t[a]);
                    return r;
                };
            }, function(t, e, i) {
                var n = i(0), r = function() {
                    function t(t) {
                        n.mix(this, t), this._init();
                    }
                    var e = t.prototype;
                    return e._init = function() {
                        var t = this.start, e = this.end, i = Math.min(t.x, e.x), n = Math.max(t.x, e.x), r = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
                        this.tl = {
                            x: i,
                            y: r
                        }, this.tr = {
                            x: n,
                            y: r
                        }, this.bl = {
                            x: i,
                            y: a
                        }, this.br = {
                            x: n,
                            y: a
                        }, this.width = n - i, this.height = a - r;
                    }, e.reset = function(t, e) {
                        this.start = t, this.end = e, this._init();
                    }, e.isInRange = function(t, e) {
                        n.isObject(t) && (e = t.y, t = t.x);
                        var i = this.tl, r = this.br;
                        return i.x <= t && t <= r.x && i.y <= e && e <= r.y;
                    }, t;
                }();
                t.exports = r;
            }, function(t, e, i) {
                var n = i(24);
                i(66), t.exports = n;
            }, function(t, e, i) {
                var n = i(24), r = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initDefaultCfg = function() {
                        this.type = "cartesian", this.transposed = !1, this.isRect = !0;
                    }, i.init = function(t, e) {
                        this.x = {
                            start: t.x,
                            end: e.x
                        }, this.y = {
                            start: t.y,
                            end: e.y
                        };
                    }, i.convertPoint = function(t) {
                        var e = this.transposed, i = e ? "y" : "x", n = e ? "x" : "y", r = this.x, a = this.y;
                        return {
                            x: r.start + (r.end - r.start) * t[i],
                            y: a.start + (a.end - a.start) * t[n]
                        };
                    }, i.invertPoint = function(t) {
                        var e = this.transposed, i = e ? "y" : "x", n = e ? "x" : "y", r = this.x, a = this.y, s = {};
                        return s[i] = (t.x - r.start) / (r.end - r.start), s[n] = (t.y - a.start) / (a.end - a.start), 
                        s;
                    }, e;
                }(n);
                n.Cartesian = r, n.Rect = r, t.exports = r;
            }, function(t, e, i) {
                t.exports = {
                    Position: i(68),
                    Shape: i(69),
                    Size: i(70),
                    Color: i(71)
                };
            }, function(t, e, i) {
                var n = i(10), r = i(13), a = i(4), s = function(t) {
                    function e(e) {
                        var i;
                        return i = t.call(this, e) || this, i.names = [ "x", "y" ], i.type = "position", 
                        i;
                    }
                    return function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t), e.prototype.mapping = function(t, e) {
                        var i, s, o, c = this.scales, h = this.coord, l = c[0], u = c[1];
                        if (n(t) || n(e)) return [];
                        if (r(e) && r(t)) {
                            i = [], s = [];
                            for (var f = 0, p = 0, g = t.length, d = e.length; f < g && p < d; f++, p++) o = h.convertPoint({
                                x: l.scale(t[f]),
                                y: u.scale(e[p])
                            }), i.push(o.x), s.push(o.y);
                        } else if (r(e)) t = l.scale(t), s = [], a(e, function(e) {
                            e = u.scale(e), o = h.convertPoint({
                                x: t,
                                y: e
                            }), i && i !== o.x ? (r(i) || (i = [ i ]), i.push(o.x)) : i = o.x, s.push(o.y);
                        }); else if (r(t)) e = u.scale(e), i = [], a(t, function(t) {
                            t = l.scale(t), o = h.convertPoint({
                                x: t,
                                y: e
                            }), s && s !== o.y ? (r(s) || (s = [ s ]), s.push(o.y)) : s = o.y, i.push(o.x);
                        }); else {
                            t = l.scale(t), e = u.scale(e);
                            var v = h.convertPoint({
                                x: t,
                                y: e
                            });
                            i = v.x, s = v.y;
                        }
                        return [ i, s ];
                    }, e;
                }(i(20));
                t.exports = s;
            }, function(t, e, i) {
                var n = function(t) {
                    function e(e) {
                        var i;
                        return i = t.call(this, e) || this, i.names = [ "shape" ], i.type = "shape", i.gradient = null, 
                        i;
                    }
                    return function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t), e.prototype.getLinearValue = function(t) {
                        var e = this.values;
                        return e[Math.round((e.length - 1) * t)];
                    }, e;
                }(i(20));
                t.exports = n;
            }, function(t, e, i) {
                var n = function(t) {
                    function e(e) {
                        var i;
                        return i = t.call(this, e) || this, i.names = [ "size" ], i.type = "size", i.gradient = null, 
                        i;
                    }
                    return function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t), e;
                }(i(20));
                t.exports = n;
            }, function(t, e, i) {
                var n = i(0), r = i(72), a = function(t) {
                    function e(e) {
                        var i;
                        return i = t.call(this, e) || this, i.names = [ "color" ], i.type = "color", i.gradient = null, 
                        n.isString(i.values) && (i.linear = !0), i;
                    }
                    return function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t), e.prototype.getLinearValue = function(t) {
                        var e = this.gradient;
                        if (!e) {
                            var i = this.values;
                            e = r.gradient(i), this.gradient = e;
                        }
                        return e(t);
                    }, e;
                }(i(20));
                t.exports = a;
            }, function(t, e, i) {
                function n(t, e, i, n) {
                    return t[n] + (e[n] - t[n]) * i;
                }
                function r(t) {
                    return "#" + a(t[0]) + a(t[1]) + a(t[2]);
                }
                function a(t) {
                    return t = Math.round(t), 1 === (t = t.toString(16)).length && (t = "0" + t), t;
                }
                function s(t) {
                    var e = [];
                    return e.push(parseInt(t.substr(1, 2), 16)), e.push(parseInt(t.substr(3, 2), 16)), 
                    e.push(parseInt(t.substr(5, 2), 16)), e;
                }
                var o = i(0), c = {
                    black: "#000000",
                    blue: "#0000ff",
                    grey: "#808080",
                    green: "#008000",
                    orange: "#ffa500",
                    pink: "#ffc0cb",
                    purple: "#800080",
                    red: "#ff0000",
                    white: "#ffffff",
                    yellow: "#ffff00"
                }, h = {
                    toHex: function(t) {
                        if (c[t]) return c[t];
                        if ("#" === t[0]) {
                            if (7 === t.length) return t;
                            var e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, n) {
                                return "#" + e + e + i + i + n + n;
                            });
                            return c[t] = e, e;
                        }
                        var i = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
                        return i.shift(), i = r(i), c[t] = i, i;
                    },
                    hex2arr: s,
                    gradient: function(t) {
                        var e = [];
                        return o.isString(t) && (t = t.split("-")), o.each(t, function(t) {
                            -1 === t.indexOf("#") && (t = h.toHex(t)), e.push(s(t));
                        }), function(t) {
                            return function(t, e) {
                                var i = t.length - 1, a = Math.floor(i * e), s = i * e - a, o = t[a], c = a === i ? o : t[a + 1];
                                return r([ n(o, c, s, 0), n(o, c, s, 1), n(o, c, s, 2) ]);
                            }(e, t);
                        };
                    }
                };
                t.exports = h;
            }, function(t, e, i) {
                var n = i(0), r = i(1), a = i(74), s = {
                    linear: "Linear",
                    cat: "Cat",
                    timeCat: "TimeCat",
                    identity: "Identity"
                }, o = function() {
                    function t(t) {
                        this.defs = {}, n.mix(this, t);
                    }
                    var e = t.prototype;
                    return e._getDef = function(t) {
                        var e = this.defs, i = null;
                        return (r.scales[t] || e[t]) && (i = n.mix({}, r.scales[t]), n.each(e[t], function(t, e) {
                            n.isNil(t) ? delete i[e] : i[e] = t;
                        })), i;
                    }, e._getDefaultType = function(t, e, i) {
                        if (i && i.type) return i.type;
                        var r = "linear", a = n.Array.firstValue(e, t);
                        return n.isArray(a) && (a = a[0]), n.isString(a) && (r = "cat"), r;
                    }, e._getScaleCfg = function(t, e, i, r) {
                        var a, s = {
                            field: e,
                            values: a = r && r.values ? r.values : n.Array.values(i, e)
                        };
                        if (!("cat" === t || "timeCat" === t || r && r.min && r.max)) {
                            var o = n.Array.getRange(a), c = o.min, h = o.max;
                            s.min = c, s.max = h, s.nice = !0;
                        }
                        return "cat" !== t && "timeCat" !== t || (s.isRounding = !1), s;
                    }, e.createScale = function(t, e) {
                        var i, r = this._getDef(t);
                        if (!e || !e.length) return r && r.type ? (r.field = t, i = new a[s[r.type]](r)) : i = new a.Identity({
                            value: t,
                            field: t.toString(),
                            values: [ t ]
                        }), i;
                        var o = e[0][t];
                        if (null === o && (o = n.Array.firstValue(e, t)), n.isNumber(t) || n.isNil(o) && !r) i = new a.Identity({
                            value: t,
                            field: t.toString(),
                            values: [ t ]
                        }); else {
                            var c = this._getDefaultType(t, e, r), h = this._getScaleCfg(c, t, e, r);
                            r && n.mix(h, r), i = new a[s[c]](h);
                        }
                        return i;
                    }, t;
                }();
                t.exports = o;
            }, function(t, e, i) {
                var n = i(17);
                i(75), i(78), i(36), t.exports = n;
            }, function(t, e, i) {
                var n = i(10), r = i(4), a = i(17), s = i(76), o = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this), this.type = "linear", this.isLinear = !0, 
                        this.nice = !1, this.min = null, this.minLimit = null, this.max = null, this.maxLimit = null, 
                        this.tickCount = null, this.tickInterval = null, this.minTickInterval = null, this.snapArray = null;
                    }, i.init = function() {
                        if (this.ticks) {
                            var t = this.ticks, e = this.translate(t[0]), i = this.translate(t[t.length - 1]);
                            (n(this.min) || this.min > e) && (this.min = e), (n(this.max) || this.max < i) && (this.max = i);
                        } else this.min = this.translate(this.min), this.max = this.translate(this.max), 
                        this.initTicks();
                    }, i.calculateTicks = function() {
                        var t = this.min, e = this.max, i = this.minLimit, n = this.maxLimit, r = this.tickCount, a = this.tickInterval, o = this.minTickInterval, c = this.snapArray;
                        if (1 === r) throw new Error("linear scale'tickCount should not be 1");
                        if (e < t) throw new Error("max: " + e + " should not be less than min: " + t);
                        return s({
                            min: t,
                            max: e,
                            minLimit: i,
                            maxLimit: n,
                            minCount: r,
                            maxCount: r,
                            interval: a,
                            minTickInterval: o,
                            snapArray: c
                        }).ticks;
                    }, i.initTicks = function() {
                        var t = this, e = t.calculateTicks();
                        if (t.nice) t.ticks = e, t.min = e[0], t.max = e[e.length - 1]; else {
                            var i = [];
                            r(e, function(e) {
                                e >= t.min && e <= t.max && i.push(e);
                            }), i.length || (i.push(t.min), i.push(t.max)), t.ticks = i;
                        }
                    }, i.scale = function(t) {
                        if (n(t)) return NaN;
                        var e = this.max, i = this.min;
                        if (e === i) return 0;
                        var r = (t - i) / (e - i), a = this.rangeMin();
                        return a + r * (this.rangeMax() - a);
                    }, i.invert = function(t) {
                        var e = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
                        return this.min + e * (this.max - this.min);
                    }, e;
                }(a);
                a.Linear = o, t.exports = o;
            }, function(t, e, i) {
                var n = i(10), r = i(16), a = i(77), s = [ 0, 1, 1.2, 1.5, 1.6, 2, 2.2, 2.4, 2.5, 3, 4, 5, 6, 7.5, 8, 10 ], o = [ 0, 1, 2, 4, 5, 10 ];
                t.exports = function(t) {
                    var e = t.min, i = t.max, c = t.interval, h = t.minTickInterval, l = [], u = t.minCount || 5, f = t.maxCount || 7, p = u === f, g = n(t.minLimit) ? -1 / 0 : t.minLimit, d = n(t.maxLimit) ? 1 / 0 : t.maxLimit, v = (u + f) / 2, y = v, m = t.snapArray ? t.snapArray : p ? s : o;
                    if (e === g && i === d && p && (c = (i - e) / (y - 1)), n(e) && (e = 0), n(i) && (i = 0), 
                    i === e && (0 === e ? i = 1 : e > 0 ? e = 0 : i = 0, i - e < 5 && !c && i - e >= 1 && (c = 1)), 
                    n(c)) {
                        var x = (i - e) / (v - 1);
                        c = a.snapFactorTo(x, m, "ceil"), f !== u && ((y = parseInt((i - e) / c, 10)) > f && (y = f), 
                        y < u && (y = u), c = a.snapFactorTo((i - e) / (y - 1), m, "floor"));
                    }
                    if (r(h) && c < h && (c = h), t.interval || f !== u) i = Math.min(a.snapMultiple(i, c, "ceil"), d), 
                    e = Math.max(a.snapMultiple(e, c, "floor"), g), y = Math.round((i - e) / c), e = a.fixedBase(e, c), 
                    i = a.fixedBase(i, c); else {
                        v = parseInt(v, 10);
                        var _, S = (i + e) / 2, b = a.snapMultiple(S, c, "ceil"), C = Math.floor((v - 2) / 2), w = b + C * c;
                        _ = v % 2 == 0 ? b - C * c : b - (C + 1) * c, w < i && (w += c), _ > e && (_ -= c), 
                        i = a.fixedBase(w, c), e = a.fixedBase(_, c);
                    }
                    i = Math.min(i, d), e = Math.max(e, g), l.push(e);
                    for (var P = 1; P < y; P++) {
                        var M = a.fixedBase(c * P + e, c);
                        M < i && l.push(M);
                    }
                    return l[l.length - 1] < i && l.push(i), {
                        min: e,
                        max: i,
                        interval: c,
                        count: y,
                        ticks: l
                    };
                };
            }, function(t, e) {
                function i(t, e) {
                    var i = t.length;
                    if (0 === i) return NaN;
                    var n = t[0];
                    if (e < t[0]) return NaN;
                    if (e >= t[i - 1]) return t[i - 1];
                    for (var r = 1; r < t.length && !(e < t[r]); r++) n = t[r];
                    return n;
                }
                function n(t, e) {
                    var i = t.length;
                    if (0 === i) return NaN;
                    var n;
                    if (e > t[i - 1]) return NaN;
                    if (e < t[0]) return t[0];
                    for (var r = 1; r < t.length; r++) if (e <= t[r]) {
                        n = t[r];
                        break;
                    }
                    return n;
                }
                var r = {
                    snapFactorTo: function(t, e, i) {
                        if (isNaN(t)) return NaN;
                        var n = 1;
                        if (0 !== t) {
                            t < 0 && (n = -1);
                            var a = function(t) {
                                var e = 1;
                                if (t === 1 / 0 || t === -1 / 0) throw new Error("Not support Infinity!");
                                if (t < 1) {
                                    for (var i = 0; t < 1; ) e /= 10, t *= 10, i++;
                                    e.toString().length > 12 && (e = parseFloat(e.toFixed(i)));
                                } else for (;t > 10; ) e *= 10, t /= 10;
                                return e;
                            }(t *= n);
                            n *= a, t /= a;
                        }
                        var s = (t = "floor" === i ? r.snapFloor(e, t) : "ceil" === i ? r.snapCeiling(e, t) : r.snapTo(e, t)) * n;
                        return Math.abs(n) < 1 && s.toString().length > 12 && (s = t / parseInt(1 / n) * (n > 0 ? 1 : -1)), 
                        s;
                    },
                    snapMultiple: function(t, e, i) {
                        return ("ceil" === i ? Math.ceil(t / e) : "floor" === i ? Math.floor(t / e) : Math.round(t / e)) * e;
                    },
                    snapTo: function(t, e) {
                        var r = i(t, e), a = n(t, e);
                        if (isNaN(r) || isNaN(a)) {
                            if (t[0] >= e) return t[0];
                            var s = t[t.length - 1];
                            if (s <= e) return s;
                        }
                        return Math.abs(e - r) < Math.abs(a - e) ? r : a;
                    },
                    snapFloor: function(t, e) {
                        return i(t, e);
                    },
                    snapCeiling: function(t, e) {
                        return n(t, e);
                    },
                    fixedBase: function(t, e) {
                        var i = e.toString(), n = i.indexOf(".");
                        if (-1 === n) return Math.round(t);
                        var r = i.substr(n + 1).length;
                        return r > 20 && (r = 20), parseFloat(t.toFixed(r));
                    }
                };
                t.exports = r;
            }, function(t, e, i) {
                var n = i(17), r = i(16), a = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this), this.isIdentity = !0, this.type = "identity", 
                        this.value = null;
                    }, i.getText = function() {
                        return this.value.toString();
                    }, i.scale = function(t) {
                        return this.value !== t && r(t) ? t : this.range[0];
                    }, i.invert = function() {
                        return this.value;
                    }, e;
                }(n);
                n.Identity = a, t.exports = a;
            }, function(t, e, i) {
                var n = i(0), r = i(80), a = i(1), s = i(3).Shape, o = function() {
                    function t(t) {
                        this.axisCfg = {}, this.frontPlot = null, this.backPlot = null, this.axes = {}, 
                        n.mix(this, t);
                    }
                    var e = t.prototype;
                    return e._isHide = function(t) {
                        var e = this.axisCfg;
                        return !e || !1 === e[t];
                    }, e._getLinePosition = function(t, e, i, n) {
                        var r = "", a = t.field, s = this.axisCfg;
                        return s[a] && s[a].position ? r = s[a].position : "x" === e ? r = n ? "left" : "bottom" : "y" === e && (r = i ? "right" : "left", 
                        n && (r = "bottom")), r;
                    }, e._getLineCfg = function(t, e, i) {
                        var n, r, a = 1;
                        return "x" === e ? (n = {
                            x: 0,
                            y: 0
                        }, r = {
                            x: 1,
                            y: 0
                        }) : "right" === i ? (n = {
                            x: 1,
                            y: 0
                        }, r = {
                            x: 1,
                            y: 1
                        }) : (n = {
                            x: 0,
                            y: 0
                        }, r = {
                            x: 0,
                            y: 1
                        }, a = -1), t.transposed && (a *= -1), {
                            offsetFactor: a,
                            start: t.convertPoint(n),
                            end: t.convertPoint(r)
                        };
                    }, e._getCircleCfg = function(t) {
                        return {
                            startAngle: t.startAngle,
                            endAngle: t.endAngle,
                            center: t.center,
                            radius: t.circleRadius
                        };
                    }, e._getRadiusCfg = function(t) {
                        var e, i;
                        return t.transposed ? (e = {
                            x: 0,
                            y: 0
                        }, i = {
                            x: 1,
                            y: 0
                        }) : (e = {
                            x: 0,
                            y: 0
                        }, i = {
                            x: 0,
                            y: 1
                        }), {
                            offsetFactor: -1,
                            start: t.convertPoint(e),
                            end: t.convertPoint(i)
                        };
                    }, e._getAxisCfg = function(t, e, i, r, o) {
                        var c = this, h = this.axisCfg, l = e.getTicks(), u = n.deepMix({
                            ticks: l,
                            frontContainer: this.frontPlot,
                            backContainer: this.backPlot
                        }, o, h[e.field]), f = [], p = u.label, g = l.length, d = 0, v = 0, y = p;
                        return n.each(l, function(t, e) {
                            if (n.isFunction(p)) {
                                var i = p(t.text, e, g);
                                y = i ? n.mix({}, a._defaultAxis.label, i) : null;
                            }
                            if (y) {
                                var r = {};
                                y.textAlign && (r.textAlign = y.textAlign), y.textBaseline && (r.textBaseline = y.textBaseline);
                                var o = new s.Text({
                                    className: "axis-label",
                                    attrs: n.mix({
                                        x: 0,
                                        y: 0,
                                        text: t.text,
                                        fontFamily: c.chart.get("canvas").get("fontFamily")
                                    }, y),
                                    value: t.value,
                                    textStyle: r,
                                    top: y.top,
                                    context: c.chart.get("canvas").get("context")
                                });
                                f.push(o);
                                var h = o.getBBox(), l = h.width, u = h.height;
                                d = Math.max(d, l), v = Math.max(v, u);
                            }
                        }), u.labels = f, u.maxWidth = d, u.maxHeight = v, u;
                    }, e._createAxis = function(t, e, i, n, r) {
                        void 0 === r && (r = "");
                        var s, o, c, h = t.type, l = t.transposed;
                        if ("cartesian" === h || "rect" === h) {
                            var u = this._getLinePosition(e, n, r, l);
                            (c = a.axis[u]).position = u, s = "Line", o = u;
                        } else "x" === n && !l || "y" === n && l ? (c = a.axis.circle, s = "Circle", o = "circle") : (c = a.axis.radius, 
                        s = "Line", o = "radius");
                        var f = this._getAxisCfg(t, e, i, n, c);
                        f.type = s, f.dimType = n, f.verticalScale = i, f.index = r, this.axes[o] = f;
                    }, e.createAxis = function(t, e, i) {
                        var a = this;
                        e && !a._isHide(e.field) && a._createAxis(t, e, i[0], "x"), n.each(i, function(i, n) {
                            a._isHide(i.field) || a._createAxis(t, i, e, "y", n);
                        });
                        var s = this.axes, o = a.chart;
                        if (o._isAutoPadding()) {
                            var c = n.parsePadding(o.get("padding")), h = n.parsePadding(o.get("appendPadding")), l = o.get("legendRange") || {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            }, u = [ "auto" === c[0] ? l.top + 2 * h[0] : c[0], "auto" === c[1] ? l.right + h[1] : c[1], "auto" === c[2] ? l.bottom + h[2] : c[2], "auto" === c[3] ? l.left + h[3] : c[3] ];
                            if (t.isPolar) {
                                var f = s.circle;
                                if (f) {
                                    var p = f.maxHeight, g = f.maxWidth, d = f.labelOffset;
                                    u[0] += p + d, u[1] += g + d, u[2] += p + d, u[3] += g + d;
                                }
                            } else {
                                if (s.right && "auto" === c[1]) {
                                    var v = s.right, y = v.maxWidth, m = v.labelOffset;
                                    u[1] += y + m;
                                }
                                if (s.left && "auto" === c[3]) {
                                    var x = s.left, _ = x.maxWidth, S = x.labelOffset;
                                    u[3] += _ + S;
                                }
                                if (s.bottom && "auto" === c[2]) {
                                    var b = s.bottom, C = b.maxHeight, w = b.labelOffset;
                                    u[2] += C + w;
                                }
                            }
                            o.set("_padding", u), o._updateLayout(u);
                        }
                        n.each(s, function(e) {
                            var i, s = e.type, o = e.grid, c = e.verticalScale, h = e.ticks, l = e.dimType, u = e.position, f = e.index;
                            if (t.isPolar ? "Line" === s ? i = a._getRadiusCfg(t) : "Circle" === s && (i = a._getCircleCfg(t)) : i = a._getLineCfg(t, l, u), 
                            o && c) {
                                var p = [], g = function(t) {
                                    var e = c.getTicks().slice(0);
                                    if (e.length > 0) {
                                        var i = e[0], n = e[e.length - 1];
                                        0 !== i.value && e.unshift({
                                            value: 0
                                        }), 1 !== n.value && e.push({
                                            value: 1
                                        });
                                    }
                                    return e;
                                }();
                                n.each(h, function(e) {
                                    var i = [];
                                    n.each(g, function(n) {
                                        var r = "x" === l ? e.value : n.value, a = "x" === l ? n.value : e.value;
                                        if (r >= 0 && r <= 1 && a >= 0 && a <= 1) {
                                            var s = t.convertPoint({
                                                x: r,
                                                y: a
                                            });
                                            i.push(s);
                                        }
                                    }), p.push({
                                        points: i,
                                        _id: "axis-" + l + f + "-grid-" + e.tickValue
                                    });
                                }), e.gridPoints = p, t.isPolar && (e.center = t.center, e.startAngle = t.startAngle, 
                                e.endAngle = t.endAngle);
                            }
                            i._id = "axis-" + l, n.isNil(f) || (i._id = "axis-" + l + f), new r[s](n.mix(e, i));
                        });
                    }, e.clear = function() {
                        this.axes = {}, this.frontPlot.clear(), this.backPlot.clear();
                    }, t;
                }();
                t.exports = o;
            }, function(t, e, i) {
                var n = i(26);
                i(81), t.exports = n;
            }, function(t, e, i) {
                var n = i(0), r = i(26), a = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this), this.start = null, this.end = null;
                    }, i.getOffsetPoint = function(t) {
                        var e = this.start, i = this.end;
                        return {
                            x: e.x + (i.x - e.x) * t,
                            y: e.y + (i.y - e.y) * t
                        };
                    }, i.getAxisVector = function() {
                        var t = this.start, e = this.end;
                        return [ e.x - t.x, e.y - t.y ];
                    }, i.drawLine = function(t) {
                        var e = this.getContainer(t.top), i = this.start, r = this.end;
                        e.addShape("line", {
                            className: "axis-line",
                            attrs: n.mix({
                                x1: i.x,
                                y1: i.y,
                                x2: r.x,
                                y2: r.y
                            }, t)
                        });
                    }, e;
                }(r);
                r.Line = a, t.exports = a;
            }, function(t, e, i) {
                var n = i(0), r = i(38), a = i(39), s = i(40).requestAnimationFrame, o = function() {
                    function t(t) {
                        this._attrs = n.mix({
                            type: "canvas",
                            children: []
                        }, t), this._initPixelRatio(), this._initCanvas();
                    }
                    var e = t.prototype;
                    return e.get = function(t) {
                        return this._attrs[t];
                    }, e.set = function(t, e) {
                        this._attrs[t] = e;
                    }, e._initPixelRatio = function() {
                        this.get("pixelRatio") || this.set("pixelRatio", n.getPixelRatio());
                    }, e.beforeDraw = function() {
                        var t = this._attrs.context, e = this._attrs.el;
                        !n.isWx && !n.isMy && t && t.clearRect(0, 0, e.width, e.height);
                    }, e._initCanvas = function() {
                        var t, e = this.get("el"), i = this.get("context");
                        if (!(t = i ? i.canvas : n.isString(e) ? n.getDomById(e) : e)) throw new Error("Please specify the id or el of the chart!");
                        i && t && !t.getContext && (t.getContext = function() {
                            return i;
                        });
                        var r = this.get("width");
                        r || (r = n.getWidth(t));
                        var a = this.get("height");
                        a || (a = n.getHeight(t)), this.set("canvas", this), this.set("el", t), this.set("context", i || t.getContext("2d")), 
                        this.changeSize(r, a);
                    }, e.changeSize = function(t, e) {
                        var i = this.get("pixelRatio"), r = this.get("el");
                        n.isBrowser && (r.style.width = t + "px", r.style.height = e + "px"), n.isWx || n.isMy || (r.width = t * i, 
                        r.height = e * i, 1 === i) || this.get("context").scale(i, i), this.set("width", t), 
                        this.set("height", e);
                    }, e.getWidth = function() {
                        var t = this.get("pixelRatio");
                        return this.get("width") * t;
                    }, e.getHeight = function() {
                        var t = this.get("pixelRatio");
                        return this.get("height") * t;
                    }, e.getPointByClient = function(t, e) {
                        var i = this.get("el"), n = i.getBoundingClientRect(), r = n.right - n.left, a = n.bottom - n.top;
                        return {
                            x: (t - n.left) * (i.width / r),
                            y: (e - n.top) * (i.height / a)
                        };
                    }, e._beginDraw = function() {
                        this._attrs.toDraw = !0;
                    }, e._endDraw = function() {
                        this._attrs.toDraw = !1;
                    }, e.draw = function() {
                        function t() {
                            e.set("animateHandler", s(function() {
                                e.set("animateHandler", void 0), e.get("toDraw") && t();
                            })), e.beforeDraw();
                            try {
                                for (var i = e._attrs.context, r = e._attrs.children, a = 0, o = r.length; a < o; a++) r[a].draw(i);
                                (n.isWx || n.isMy) && i.draw();
                            } catch (t) {
                                console.warn("error in draw canvas, detail as:"), console.warn(t), e._endDraw();
                            }
                            e._endDraw();
                        }
                        var e = this;
                        e.get("destroyed") || (e.get("animateHandler") ? this._beginDraw() : t());
                    }, e.destroy = function() {
                        this.get("destroyed") || (this.clear(), this._attrs = {}, this.set("destroyed", !0));
                    }, e.isDestroyed = function() {
                        return this.get("destroyed");
                    }, t;
                }();
                n.mix(o.prototype, r, {
                    getGroupClass: function() {
                        return a;
                    }
                }), t.exports = o;
            }, function(t, e, i) {
                function n(t, e) {
                    r.each(t, function(t) {
                        t = t.split(":"), e.addColorStop(Number(t[0]), t[1]);
                    });
                }
                var r = i(0);
                t.exports = {
                    parseStyle: function(t, e, i) {
                        if ("(" === t[1]) try {
                            var r = t[0];
                            if ("l" === r) return function(t, e, i) {
                                var r = t.split(" "), a = r[0].slice(2, r[0].length - 1);
                                a = function(t, e) {
                                    return (parseFloat(a) * Math.PI / 180 % e + e) % e;
                                }(0, 2 * Math.PI);
                                var s, o, c = r.slice(1), h = e.getBBox(), l = h.minX, u = h.minY, f = h.maxX, p = h.maxY;
                                a >= 0 && a < .5 * Math.PI ? (s = {
                                    x: l,
                                    y: u
                                }, o = {
                                    x: f,
                                    y: p
                                }) : .5 * Math.PI <= a && a < Math.PI ? (s = {
                                    x: f,
                                    y: u
                                }, o = {
                                    x: l,
                                    y: p
                                }) : Math.PI <= a && a < 1.5 * Math.PI ? (s = {
                                    x: f,
                                    y: p
                                }, o = {
                                    x: l,
                                    y: u
                                }) : (s = {
                                    x: l,
                                    y: p
                                }, o = {
                                    x: f,
                                    y: u
                                });
                                var g = Math.tan(a), d = g * g, v = (o.x - s.x + g * (o.y - s.y)) / (d + 1) + s.x, y = g * (o.x - s.x + g * (o.y - s.y)) / (d + 1) + s.y, m = i.createLinearGradient(s.x, s.y, v, y);
                                return n(c, m), m;
                            }(t, e, i);
                            if ("r" === r) return function(t, e, i) {
                                var r = t.split(" "), a = r[0].slice(2, r[0].length - 1);
                                a = a.split(",");
                                var s = parseFloat(a[0]), o = parseFloat(a[1]), c = parseFloat(a[2]), h = r.slice(1);
                                if (0 === c) return h[h.length - 1].split(":")[1];
                                var l = e.getBBox(), u = l.width, f = l.height, p = l.minX, g = l.minY, d = Math.sqrt(u * u + f * f) / 2, v = i.createRadialGradient(p + u * s, g + f * o, c * d, p + u / 2, g + f / 2, d);
                                return n(h, v), v;
                            }(t, e, i);
                        } catch (t) {
                            console.error("error in parsing gradient string, please check if there are any extra whitespaces."), 
                            console.error(t);
                        }
                        return t;
                    }
                };
            }, function(t, e, i) {
                var n = i(0), r = i(2), a = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initProperties = function() {
                        t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                        this._attrs.type = "rect";
                    }, i.getDefaultAttrs = function() {
                        return {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0,
                            radius: 0,
                            lineWidth: 0
                        };
                    }, i.createPath = function(t) {
                        var e = this.get("attrs"), i = e.x, r = e.y, a = e.width, s = e.height;
                        t.beginPath();
                        var o = e.radius;
                        o && a * s ? (o = n.parsePadding(o), t.moveTo(i + o[0], r), t.lineTo(i + a - o[1], r), 
                        t.arc(i + a - o[1], r + o[1], o[1], -Math.PI / 2, 0, !1), t.lineTo(i + a, r + s - o[2]), 
                        t.arc(i + a - o[2], r + s - o[2], o[2], 0, Math.PI / 2, !1), t.lineTo(i + o[3], r + s), 
                        t.arc(i + o[3], r + s - o[3], o[3], Math.PI / 2, Math.PI, !1), t.lineTo(i, r + o[0]), 
                        t.arc(i + o[0], r + o[0], o[0], Math.PI, 3 * Math.PI / 2, !1), t.closePath()) : t.rect(i, r, a, s);
                    }, i.calculateBox = function() {
                        var t = this.get("attrs"), e = t.x, i = t.y;
                        return {
                            minX: e,
                            minY: i,
                            maxX: e + t.width,
                            maxY: i + t.height
                        };
                    }, e;
                }(r);
                r.Rect = a, t.exports = a;
            }, function(t, e, i) {
                var n = i(2), r = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initProperties = function() {
                        t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                        this._attrs.type = "circle";
                    }, i.getDefaultAttrs = function() {
                        return {
                            x: 0,
                            y: 0,
                            r: 0,
                            lineWidth: 0
                        };
                    }, i.createPath = function(t) {
                        var e = this.get("attrs"), i = e.x, n = e.y, r = e.r;
                        t.beginPath(), t.arc(i, n, r, 0, 2 * Math.PI, !1), t.closePath();
                    }, i.calculateBox = function() {
                        var t = this.get("attrs"), e = t.x, i = t.y, n = t.r;
                        return {
                            minX: e - n,
                            maxX: e + n,
                            minY: i - n,
                            maxY: i + n
                        };
                    }, e;
                }(n);
                n.Circle = r, t.exports = r;
            }, function(t, e, i) {
                var n = i(2), r = i(14), a = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initProperties = function() {
                        t.prototype._initProperties.call(this), this._attrs.canStroke = !0, this._attrs.type = "line";
                    }, i.getDefaultAttrs = function() {
                        return {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 0,
                            lineWidth: 1
                        };
                    }, i.createPath = function(t) {
                        var e = this.get("attrs"), i = e.x1, n = e.y1, r = e.x2, a = e.y2;
                        t.beginPath(), t.moveTo(i, n), t.lineTo(r, a);
                    }, i.calculateBox = function() {
                        var t = this.get("attrs"), e = t.x1, i = t.y1, n = t.x2, a = t.y2, s = t.lineWidth;
                        return r.getBBoxFromLine(e, i, n, a, s);
                    }, e;
                }(n);
                n.Line = a, t.exports = a;
            }, function(t, e, i) {
                var n = i(2), r = i(14), a = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initProperties = function() {
                        t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                        this._attrs.type = "polygon";
                    }, i.getDefaultAttrs = function() {
                        return {
                            points: null,
                            lineWidth: 0
                        };
                    }, i.createPath = function(t) {
                        var e = this.get("attrs").points;
                        t.beginPath();
                        for (var i = 0, n = e.length; i < n; i++) {
                            var r = e[i];
                            0 === i ? t.moveTo(r.x, r.y) : t.lineTo(r.x, r.y);
                        }
                        t.closePath();
                    }, i.calculateBox = function() {
                        var t = this.get("attrs").points;
                        return r.getBBoxFromPoints(t);
                    }, e;
                }(n);
                n.Polygon = a, t.exports = a;
            }, function(t, e, i) {
                var n = i(2), r = i(41), a = i(14), s = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initProperties = function() {
                        t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                        this._attrs.type = "polyline";
                    }, i.getDefaultAttrs = function() {
                        return {
                            points: null,
                            lineWidth: 1,
                            smooth: !1
                        };
                    }, i.createPath = function(t) {
                        for (var e = this.get("attrs"), i = e.points, n = e.smooth, a = [], s = 0, o = i.length; s < o; s++) {
                            var c = i[s];
                            isNaN(c.x) || isNaN(c.y) || a.push(c);
                        }
                        if (t.beginPath(), a.length) if (t.moveTo(a[0].x, a[0].y), n) for (var h = r.smooth(a, !1, [ [ 0, 0 ], [ 1, 1 ] ]), l = 0, u = h.length; l < u; l++) {
                            var f = h[l];
                            t.bezierCurveTo(f[1], f[2], f[3], f[4], f[5], f[6]);
                        } else {
                            var p, g;
                            for (p = 1, g = a.length - 1; p < g; p++) t.lineTo(a[p].x, a[p].y);
                            t.lineTo(a[g].x, a[g].y);
                        }
                    }, i.calculateBox = function() {
                        var t = this.get("attrs"), e = t.points, i = t.smooth, n = t.lineWidth;
                        if (i) {
                            for (var s = [], o = r.smooth(e, !1, [ [ 0, 0 ], [ 1, 1 ] ]), c = 0, h = o.length; c < h; c++) {
                                var l = o[c];
                                if (0 === c) s.push([ e[0].x, e[0].y, l[1], l[2], l[3], l[4], l[5], l[6] ]); else {
                                    var u = o[c - 1];
                                    s.push([ u[5], u[6], l[1], l[2], l[3], l[4], l[5], l[6] ]);
                                }
                            }
                            return a.getBBoxFromBezierGroup(s, n);
                        }
                        return a.getBBoxFromPoints(e, n);
                    }, e;
                }(n);
                n.Polyline = s, t.exports = s;
            }, function(t, e, i) {
                var n = i(2), r = i(14), a = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initProperties = function() {
                        t.prototype._initProperties.call(this), this._attrs.canStroke = !0, this._attrs.canFill = !0, 
                        this._attrs.type = "arc";
                    }, i.getDefaultAttrs = function() {
                        return {
                            x: 0,
                            y: 0,
                            r: 0,
                            startAngle: 0,
                            endAngle: 2 * Math.PI,
                            clockwise: !1,
                            lineWidth: 1
                        };
                    }, i.createPath = function(t) {
                        var e = this.get("attrs"), i = e.x, n = e.y, r = e.r, a = e.startAngle, s = e.endAngle, o = e.clockwise;
                        t.beginPath(), t.arc(i, n, r, a, s, o);
                    }, i.calculateBox = function() {
                        var t = this.get("attrs"), e = t.x, i = t.y, n = t.r, a = t.startAngle, s = t.endAngle, o = t.clockwise;
                        return r.getBBoxFromArc(e, i, n, a, s, o);
                    }, e;
                }(n);
                n.Arc = a, t.exports = a;
            }, function(t, e, i) {
                var n = i(2), r = i(14), a = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initProperties = function() {
                        t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                        this._attrs.type = "sector";
                    }, i.getDefaultAttrs = function() {
                        return {
                            x: 0,
                            y: 0,
                            lineWidth: 0,
                            r: 0,
                            r0: 0,
                            startAngle: 0,
                            endAngle: 2 * Math.PI,
                            clockwise: !1
                        };
                    }, i.createPath = function(t) {
                        var e = this.get("attrs"), i = e.x, n = e.y, r = e.startAngle, a = e.endAngle, s = e.r, o = e.r0, c = e.clockwise;
                        t.beginPath();
                        var h = Math.cos(r), l = Math.sin(r);
                        t.moveTo(h * o + i, l * o + n), t.lineTo(h * s + i, l * s + n), t.arc(i, n, s, r, a, c), 
                        t.lineTo(Math.cos(a) * o + i, Math.sin(a) * o + n), 0 !== o && t.arc(i, n, o, a, r, !c), 
                        t.closePath();
                    }, i.calculateBox = function() {
                        var t = this.get("attrs"), e = t.x, i = t.y, n = t.r, a = t.r0, s = t.startAngle, o = t.endAngle, c = t.clockwise, h = r.getBBoxFromArc(e, i, n, s, o, c), l = r.getBBoxFromArc(e, i, a, s, o, c);
                        return {
                            minX: Math.min(h.minX, l.minX),
                            minY: Math.min(h.minY, l.minY),
                            maxX: Math.max(h.maxX, l.maxX),
                            maxY: Math.max(h.maxY, l.maxY)
                        };
                    }, e;
                }(n);
                n.Sector = a, t.exports = a;
            }, function(t, e, i) {
                var n = i(0), r = i(2), a = 0, s = {}, o = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initProperties = function() {
                        t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                        this._attrs.type = "text";
                    }, i.getDefaultAttrs = function() {
                        return {
                            lineWidth: 0,
                            lineCount: 1,
                            fontSize: 12,
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontVariant: "normal",
                            textAlign: "start",
                            textBaseline: "bottom",
                            lineHeight: null,
                            textArr: null
                        };
                    }, i._getFontStyle = function() {
                        var t = this._attrs.attrs, e = t.fontSize, i = t.fontFamily, n = t.fontWeight;
                        return t.fontStyle + " " + t.fontVariant + " " + n + " " + e + "px " + i;
                    }, i._afterAttrsSet = function() {
                        var t = this._attrs.attrs;
                        if (t.font = this._getFontStyle(), t.text) {
                            var e = t.text, i = null, r = 1;
                            n.isString(e) && -1 !== e.indexOf("\n") && (r = (i = e.split("\n")).length), t.lineCount = r, 
                            t.textArr = i;
                        }
                        this.set("attrs", t);
                    }, i._getTextHeight = function() {
                        var t = this._attrs.attrs;
                        if (t.height) return t.height;
                        var e = t.lineCount, i = 1 * t.fontSize;
                        return e > 1 ? i * e + this._getSpaceingY() * (e - 1) : i;
                    }, i._getSpaceingY = function() {
                        var t = this._attrs.attrs, e = t.lineHeight, i = 1 * t.fontSize;
                        return e ? e - i : .14 * i;
                    }, i.drawInner = function(t) {
                        var e = this._attrs.attrs, i = e.text, r = e.x, a = e.y;
                        if (!(n.isNil(i) || isNaN(r) || isNaN(a))) {
                            var s = e.textArr, o = 1 * e.fontSize, c = this._getSpaceingY();
                            e.rotate && (t.translate(r, a), t.rotate(e.rotate), r = 0, a = 0);
                            var h, l = e.textBaseline;
                            s && (h = this._getTextHeight());
                            var u;
                            if (this.hasFill()) {
                                var f = e.fillOpacity;
                                if (n.isNil(f) || 1 === f || (t.globalAlpha = f), s) for (var p = 0, g = s.length; p < g; p++) {
                                    var d = s[p];
                                    u = a + p * (c + o) - h + o, "middle" === l && (u += h - o - (h - o) / 2), "top" === l && (u += h - o), 
                                    t.fillText(d, r, u);
                                } else t.fillText(i, r, a);
                            }
                            if (this.hasStroke()) if (s) for (var v = 0, y = s.length; v < y; v++) {
                                var m = s[v];
                                u = a + v * (c + o) - h + o, "middle" === l && (u += h - o - (h - o) / 2), "top" === l && (u += h - o), 
                                t.strokeText(m, r, u);
                            } else t.strokeText(i, r, a);
                        }
                    }, i.calculateBox = function() {
                        var t = this._attrs.attrs, e = t.x, i = t.y, n = t.textAlign, r = t.textBaseline, a = this._getTextWidth();
                        if (!a) return {
                            minX: e,
                            minY: i,
                            maxX: e,
                            maxY: i
                        };
                        var s = this._getTextHeight(), o = {
                            x: e,
                            y: i - s
                        };
                        return n && ("end" === n || "right" === n ? o.x -= a : "center" === n && (o.x -= a / 2)), 
                        r && ("top" === r ? o.y += s : "middle" === r && (o.y += s / 2)), {
                            minX: o.x,
                            minY: o.y,
                            maxX: o.x + a,
                            maxY: o.y + s
                        };
                    }, i._getTextWidth = function() {
                        var t = this._attrs.attrs;
                        if (t.width) return t.width;
                        var e = t.text, i = this.get("context");
                        if (!n.isNil(e)) {
                            var r = t.font, o = t.textArr, c = e + "" + r;
                            if (s[c]) return s[c];
                            var h = 0;
                            if (o) for (var l = 0, u = o.length; l < u; l++) {
                                var f = o[l];
                                h = Math.max(h, n.measureText(f, r, i).width);
                            } else h = n.measureText(e, r, i).width;
                            return a > 5e3 && (a = 0, s = {}), a++, s[c] = h, h;
                        }
                    }, e;
                }(r);
                r.Text = o, t.exports = o;
            }, function(t, e, i) {
                var n = i(2), r = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initProperties = function() {
                        t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                        this._attrs.createPath = null, this._attrs.type = "custom";
                    }, i.createPath = function(t) {
                        var e = this.get("createPath");
                        e && e.call(this, t);
                    }, i.calculateBox = function() {
                        var t = this.get("calculateBox");
                        return t && t.call(this);
                    }, e;
                }(n);
                n.Custom = r, t.exports = r;
            }, function(t, e, i) {
                var n = i(1), r = i(0);
                setTimeout(function() {
                    if (n.trackable && r.isBrowser) {
                        var t = new Image(), e = {
                            pg: document.URL,
                            r: new Date().getTime(),
                            f2: !0,
                            version: n.version,
                            page_type: "syslog"
                        }, i = encodeURIComponent(JSON.stringify([ e ]));
                        t.src = "https://kcart.alipay.com/web/bi.do?BIProfile=merge&d=" + i;
                    }
                }, 3e3);
            }, function(t, e, i) {
                var n = i(5);
                i(95), i(42), i(97), i(98), i(100), i(102), i(104), t.exports = n;
            }, function(t, e, i) {
                var n = i(0), r = i(5);
                i(96);
                var a = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return e.type = "point", e.shapeType = "point", e.generatePoints = !0, e;
                    }, i.draw = function(t, e) {
                        var i = this, r = i.get("container");
                        n.each(t, function(t) {
                            var a = t.shape, s = i.getDrawCfg(t);
                            if (n.isArray(t.y)) {
                                var o = i.hasAdjust("stack");
                                n.each(t.y, function(n, c) {
                                    s.y = n, o && 0 === c || i.drawShape(a, t, s, r, e);
                                });
                            } else n.isNil(t.y) || i.drawShape(a, t, s, r, e);
                        });
                    }, e;
                }(r);
                r.Point = a, t.exports = a;
            }, function(t, e, i) {
                function n(t, e, i) {
                    if (0 !== t.size) {
                        var n = function(t) {
                            var e = {
                                lineWidth: 0,
                                stroke: t.color,
                                fill: t.color
                            };
                            return t.size && (e.size = t.size), r.mix(e, t.style), r.mix({}, a.shape.point, e);
                        }(t), s = n.r || n.size, o = t.x, c = r.isArray(t.y) ? t.y : [ t.y ];
                        "hollowCircle" === i && (n.lineWidth = 1, n.fill = null);
                        for (var h = 0, l = c.length; h < l; h++) return "rect" === i ? e.addShape("Rect", {
                            className: "point",
                            attrs: r.mix({
                                x: o - s,
                                y: c[h] - s,
                                width: 2 * s,
                                height: 2 * s
                            }, n)
                        }) : e.addShape("Circle", {
                            className: "point",
                            attrs: r.mix({
                                x: o,
                                y: c[h],
                                r: s
                            }, n)
                        });
                    }
                }
                var r = i(0), a = i(1), s = i(22), o = i(8), c = o.registerFactory("point", {
                    defaultShapeType: "circle",
                    getDefaultPoints: function(t) {
                        return s.splitPoints(t);
                    }
                });
                r.each([ "circle", "hollowCircle", "rect" ], function(t) {
                    o.registerShape("point", t, {
                        draw: function(e, i) {
                            return n(e, i, t);
                        }
                    });
                }), t.exports = c;
            }, function(t, e, i) {
                var n = i(42), r = i(5);
                i(43);
                var a = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    return function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t), e.prototype.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return e.type = "line", e.sortable = !0, e;
                    }, e;
                }(n);
                r.Line = a, t.exports = a;
            }, function(t, e, i) {
                var n = i(5), r = i(22), a = i(0);
                i(99);
                var s = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return e.type = "area", e.shapeType = "area", e.generatePoints = !0, e.sortable = !0, 
                        e;
                    }, i.draw = function(t, e) {
                        var i = this, n = i.get("container"), s = this.getDrawCfg(t[0]), o = i.getYScale(), c = i.get("connectNulls"), h = r.splitArray(t, o.field, c);
                        s.origin = t, a.each(h, function(r, a) {
                            s.splitedIndex = a;
                            var o = r.map(function(t) {
                                return t.points;
                            });
                            s.points = o, i.drawShape(s.shape, t[0], s, n, e);
                        });
                    }, e;
                }(n);
                n.Area = s, t.exports = s;
            }, function(t, e, i) {
                function n(t, e) {
                    return Math.abs(t - e) < 1e-5;
                }
                function r(t) {
                    return !isNaN(t) && !o.isNil(t);
                }
                function a(t) {
                    for (var e = [], i = 0, n = t.length; i < n; i++) {
                        var a = t[i];
                        r(a.x) && r(a.y) && e.push(a);
                    }
                    return e;
                }
                function s(t, e, i) {
                    var r = t.points, s = [], c = [];
                    o.each(r, function(t) {
                        c.push(t[0]), s.push(t[1]);
                    });
                    var f = o.mix({
                        fillStyle: t.color
                    }, u.shape.area, t.style);
                    return c.reverse(), s = this.parsePoints(s), c = this.parsePoints(c), t.isInCircle && (s.push(s[0]), 
                    c.unshift(c[c.length - 1]), function(t, e) {
                        var i = !0;
                        return o.each(t, function(t) {
                            if (!n(t.x, e.x) || !n(t.y, e.y)) return i = !1, !1;
                        }), i;
                    }(c, t.center) && (c = [])), function(t, e, i, n, r) {
                        var s = t.concat(e);
                        return r ? i.addShape("Custom", {
                            className: "area",
                            attrs: o.mix({
                                points: s
                            }, n),
                            createPath: function(t) {
                                var e = [ [ 0, 0 ], [ 1, 1 ] ], i = a(this._attrs.attrs.points), n = i.length, r = i.slice(0, n / 2), s = i.slice(n / 2, n), o = h.smooth(r, !1, e);
                                t.beginPath(), t.moveTo(r[0].x, r[0].y);
                                for (var c = 0, l = o.length; c < l; c++) {
                                    var u = o[c];
                                    t.bezierCurveTo(u[1], u[2], u[3], u[4], u[5], u[6]);
                                }
                                if (s.length) {
                                    var f = h.smooth(s, !1, e);
                                    t.lineTo(s[0].x, s[0].y);
                                    for (var p = 0, g = f.length; p < g; p++) {
                                        var d = f[p];
                                        t.bezierCurveTo(d[1], d[2], d[3], d[4], d[5], d[6]);
                                    }
                                }
                                t.closePath();
                            },
                            calculateBox: function() {
                                var t = a(this._attrs.attrs.points);
                                return l.getBBoxFromPoints(t);
                            }
                        }) : i.addShape("Polyline", {
                            className: "area",
                            attrs: o.mix({
                                points: s
                            }, n)
                        });
                    }(s, c, e, f, i);
                }
                var o = i(0), c = i(8), h = i(41), l = i(14), u = i(1), f = c.registerFactory("area", {
                    defaultShapeType: "area",
                    getDefaultPoints: function(t) {
                        var e = t.x, i = t.y, n = t.y0;
                        i = o.isArray(i) ? i : [ n, i ];
                        var r = [];
                        return r.push({
                            x: e,
                            y: i[0]
                        }, {
                            x: e,
                            y: i[1]
                        }), r;
                    }
                });
                o.each([ "area", "smooth" ], function(t) {
                    c.registerShape("area", t, {
                        draw: function(e, i) {
                            return s.call(this, e, i, "smooth" === t);
                        }
                    });
                }), t.exports = f;
            }, function(t, e, i) {
                function n(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }
                var r = i(5), a = i(0), s = i(44);
                i(101);
                var o = function(t) {
                    function e(e) {
                        var i;
                        return i = t.call(this, e) || this, a.mix(n(n(i)), s), i;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return e.type = "interval", e.shapeType = "interval", e.generatePoints = !0, e;
                    }, i.createShapePointsCfg = function(e) {
                        var i = t.prototype.createShapePointsCfg.call(this, e);
                        return i.size = this.getNormalizedSize(e), i;
                    }, i.clearInner = function() {
                        t.prototype.clearInner.call(this), this.set("defaultSize", null);
                    }, e;
                }(r);
                r.Interval = o, t.exports = o;
            }, function(t, e, i) {
                var n = i(0), r = i(8), a = i(9), s = i(1), o = r.registerFactory("interval", {
                    defaultShapeType: "rect",
                    getDefaultPoints: function(t) {
                        return function(t) {
                            var e = t.x, i = t.y, r = t.y0, a = t.size, s = r, o = i;
                            n.isArray(i) && (o = i[1], s = i[0]);
                            var c, h;
                            return n.isArray(e) ? (c = e[0], h = e[1]) : (c = e - a / 2, h = e + a / 2), [ {
                                x: c,
                                y: s
                            }, {
                                x: c,
                                y: o
                            }, {
                                x: h,
                                y: o
                            }, {
                                x: h,
                                y: s
                            } ];
                        }(t);
                    }
                });
                r.registerShape("interval", "rect", {
                    draw: function(t, e) {
                        var i = this.parsePoints(t.points), r = n.mix({
                            fill: t.color
                        }, s.shape.interval, t.style);
                        if (t.isInCircle) {
                            var o = i.slice(0);
                            this._coord.transposed && (o = [ i[0], i[3], i[2], i[1] ]);
                            var c = t.center, h = c.x, l = c.y, u = [ 1, 0 ], f = [ o[0].x - h, o[0].y - l ], p = [ o[1].x - h, o[1].y - l ], g = [ o[2].x - h, o[2].y - l ], d = a.angleTo(u, p), v = a.angleTo(u, g), y = a.length(f), m = a.length(p);
                            return d >= 1.5 * Math.PI && (d -= 2 * Math.PI), v >= 1.5 * Math.PI && (v -= 2 * Math.PI), 
                            e.addShape("Sector", {
                                className: "interval",
                                attrs: n.mix({
                                    x: h,
                                    y: l,
                                    r: m,
                                    r0: y,
                                    startAngle: d,
                                    endAngle: v
                                }, r)
                            });
                        }
                        var x = function(t) {
                            for (var e = [], i = [], n = 0, r = t.length; n < r; n++) {
                                var a = t[n];
                                e.push(a.x), i.push(a.y);
                            }
                            var s = Math.min.apply(null, e), o = Math.min.apply(null, i);
                            return {
                                x: s,
                                y: o,
                                width: Math.max.apply(null, e) - s,
                                height: Math.max.apply(null, i) - o
                            };
                        }(i);
                        return e.addShape("rect", {
                            className: "interval",
                            attrs: n.mix(x, r)
                        });
                    }
                }), t.exports = o;
            }, function(t, e, i) {
                var n = i(5), r = i(0);
                i(103);
                var a = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return e.type = "polygon", e.shapeType = "polygon", e.generatePoints = !0, e;
                    }, i.createShapePointsCfg = function(e) {
                        var i, n = t.prototype.createShapePointsCfg.call(this, e), a = n.x, s = n.y;
                        if (!r.isArray(a) || !r.isArray(s)) {
                            var o = this.getXScale(), c = this.getYScale(), h = .5 / (o.values ? o.values.length : o.ticks.length), l = .5 / (c.values ? c.values.length : c.ticks.length);
                            o.isCategory && c.isCategory ? (a = [ a - h, a - h, a + h, a + h ], s = [ s - l, s + l, s + l, s - l ]) : r.isArray(a) ? (a = [ (i = a)[0], i[0], i[1], i[1] ], 
                            s = [ s - l / 2, s + l / 2, s + l / 2, s - l / 2 ]) : r.isArray(s) && (s = [ (i = s)[0], i[1], i[1], i[0] ], 
                            a = [ a - h / 2, a - h / 2, a + h / 2, a + h / 2 ]), n.x = a, n.y = s;
                        }
                        return n;
                    }, e;
                }(n);
                n.Polygon = a, t.exports = a;
            }, function(t, e, i) {
                var n = i(8), r = i(0), a = n.registerFactory("polygon", {
                    defaultShapeType: "polygon",
                    getDefaultPoints: function(t) {
                        for (var e = [], i = t.x, n = t.y, r = 0, a = i.length; r < a; r++) e.push({
                            x: i[r],
                            y: n[r]
                        });
                        return e;
                    }
                });
                n.registerShape("polygon", "polygon", {
                    draw: function(t, e) {
                        var i = this.parsePoints(t.points), n = r.mix({
                            fill: t.color,
                            points: i
                        }, t.style);
                        return e.addShape("Polygon", {
                            className: "polygon",
                            attrs: n
                        });
                    }
                }), t.exports = a;
            }, function(t, e, i) {
                function n(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }
                var r = i(5), a = i(0), s = i(44);
                i(105);
                var o = function(t) {
                    function e(e) {
                        var i;
                        return i = t.call(this, e) || this, a.mix(n(n(i)), s), i;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return e.type = "schema", e.shapeType = "schema", e.generatePoints = !0, e;
                    }, i.createShapePointsCfg = function(e) {
                        var i = t.prototype.createShapePointsCfg.call(this, e);
                        return i.size = this.getNormalizedSize(e), i;
                    }, i.clearInner = function() {
                        t.prototype.clearInner.call(this), this.set("defaultSize", null);
                    }, e;
                }(r);
                r.Schema = o, t.exports = o;
            }, function(t, e, i) {
                var n = i(8), r = i(0), a = n.registerFactory("schema", {});
                n.registerShape("schema", "candle", {
                    getPoints: function(t) {
                        return function(t, e, i) {
                            var n = function(t) {
                                var i = e.sort(function(t, e) {
                                    return t < e ? 1 : -1;
                                }), n = i.length;
                                if (n < 4) for (var r = i[n - 1], a = 0; a < 4 - n; a++) i.push(r);
                                return i;
                            }();
                            return [ {
                                x: t,
                                y: n[0]
                            }, {
                                x: t,
                                y: n[1]
                            }, {
                                x: t - i / 2,
                                y: n[2]
                            }, {
                                x: t - i / 2,
                                y: n[1]
                            }, {
                                x: t + i / 2,
                                y: n[1]
                            }, {
                                x: t + i / 2,
                                y: n[2]
                            }, {
                                x: t,
                                y: n[2]
                            }, {
                                x: t,
                                y: n[3]
                            } ];
                        }(t.x, t.y, t.size);
                    },
                    draw: function(t, e) {
                        var i = this.parsePoints(t.points), n = r.mix({
                            stroke: t.color,
                            fill: t.color,
                            lineWidth: 1
                        }, t.style);
                        return e.addShape("Custom", {
                            className: "schema",
                            attrs: n,
                            createPath: function(t) {
                                t.beginPath(), t.moveTo(i[0].x, i[0].y), t.lineTo(i[1].x, i[1].y), t.moveTo(i[2].x, i[2].y);
                                for (var e = 3; e < 6; e++) t.lineTo(i[e].x, i[e].y);
                                t.closePath(), t.moveTo(i[6].x, i[6].y), t.lineTo(i[7].x, i[7].y);
                            }
                        });
                    }
                }), t.exports = a;
            }, function(t, e, i) {
                t.exports = {
                    Stack: i(107),
                    Dodge: i(109)
                };
            }, function(t, e, i) {
                var n = i(108);
                t.exports = n;
            }, function(t, e, i) {
                var n = i(13), r = i(10), a = i(25), s = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initDefaultCfg = function() {
                        this.xField = null, this.yField = null;
                    }, i.processAdjust = function(t) {
                        this.processStack(t);
                    }, i.processStack = function(t) {
                        var e = this.xField, i = this.yField, a = t.length, s = {
                            positive: {},
                            negative: {}
                        };
                        this.reverseOrder && (t = t.slice(0).reverse());
                        for (var o = 0; o < a; o++) for (var c = t[o], h = 0, l = c.length; h < l; h++) {
                            var u = c[h], f = u[e] || 0, p = u[i], g = f.toString();
                            if (p = n(p) ? p[1] : p, !r(p)) {
                                var d = p >= 0 ? "positive" : "negative";
                                s[d][g] || (s[d][g] = 0), u[i] = [ s[d][g], p + s[d][g] ], s[d][g] += p;
                            }
                        }
                    }, e;
                }(a);
                a.Stack = s, t.exports = s;
            }, function(t, e, i) {
                var n = i(110);
                t.exports = n;
            }, function(t, e, i) {
                var n = i(25), r = i(4), a = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initDefaultCfg = function() {
                        this.marginRatio = .5, this.dodgeRatio = .5, this.adjustNames = [ "x", "y" ];
                    }, i.getDodgeOffset = function(t, e, i) {
                        var n = t.pre, r = t.next, a = r - n, s = a * this.dodgeRatio / i, o = this.marginRatio * s;
                        return (n + r) / 2 + (.5 * (a - i * s - (i - 1) * o) + ((e + 1) * s + e * o) - .5 * s - .5 * a);
                    }, i.processAdjust = function(t) {
                        var e = this, i = t.length, n = e.xField;
                        r(t, function(t, r) {
                            for (var a = 0, s = t.length; a < s; a++) {
                                var o = t[a], c = o[n], h = {
                                    pre: c - .5,
                                    next: c + .5
                                }, l = e.getDodgeOffset(h, r, i);
                                o[n] = l;
                            }
                        });
                    }, e;
                }(n);
                n.Dodge = a, t.exports = a;
            }, function(t, e, i) {
                var n = i(24), r = i(9), a = i(28), s = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initDefaultCfg = function() {
                        this.type = "polar", this.startAngle = -Math.PI / 2, this.endAngle = 3 * Math.PI / 2, 
                        this.inner = 0, this.innerRadius = 0, this.isPolar = !0, this.transposed = !1, this.center = null, 
                        this.radius = null;
                    }, i.init = function(t, e) {
                        var i, n, r = this.inner || this.innerRadius, a = Math.abs(e.x - t.x), s = Math.abs(e.y - t.y);
                        this.startAngle === -Math.PI && 0 === this.endAngle ? (i = Math.min(a / 2, s), n = {
                            x: (t.x + e.x) / 2,
                            y: t.y
                        }) : (i = Math.min(a, s) / 2, n = {
                            x: (t.x + e.x) / 2,
                            y: (t.y + e.y) / 2
                        });
                        var o = this.radius;
                        o > 0 && o <= 1 && (i *= o), this.x = {
                            start: this.startAngle,
                            end: this.endAngle
                        }, this.y = {
                            start: i * r,
                            end: i
                        }, this.center = n, this.circleRadius = i;
                    }, i.convertPoint = function(t) {
                        var e = this.center, i = this.transposed, n = i ? "y" : "x", r = i ? "x" : "y", a = this.x, s = this.y, o = a.start + (a.end - a.start) * t[n], c = s.start + (s.end - s.start) * t[r];
                        return {
                            x: e.x + Math.cos(o) * c,
                            y: e.y + Math.sin(o) * c
                        };
                    }, i.invertPoint = function(t) {
                        var e = this.center, i = this.transposed, n = this.x, s = this.y, o = i ? "y" : "x", c = i ? "x" : "y", h = [ 1, 0, 0, 1, 0, 0 ];
                        a.rotate(h, h, n.start);
                        var l = [ 1, 0 ];
                        r.transformMat2d(l, l, h), l = [ l[0], l[1] ];
                        var u = [ t.x - e.x, t.y - e.y ];
                        if (r.zero(u)) return {
                            x: 0,
                            y: 0
                        };
                        var f = r.angleTo(l, u, n.end < n.start);
                        Math.abs(f - 2 * Math.PI) < .001 && (f = 0);
                        var p = r.length(u), g = f / (n.end - n.start);
                        g = n.end - n.start > 0 ? g : -g;
                        var d = (p - s.start) / (s.end - s.start), v = {};
                        return v[o] = g, v[c] = d, v;
                    }, e;
                }(n);
                n.Polar = s, t.exports = s;
            }, function(t, e, i) {
                var n = i(0), r = i(26), a = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this), this.startAngle = -Math.PI / 2, this.endAngle = 3 * Math.PI / 2, 
                        this.radius = null, this.center = null;
                    }, i.getOffsetPoint = function(t) {
                        var e = this.startAngle, i = e + (this.endAngle - e) * t;
                        return this._getCirclePoint(i);
                    }, i._getCirclePoint = function(t, e) {
                        var i = this.center;
                        return e = e || this.radius, {
                            x: i.x + Math.cos(t) * e,
                            y: i.y + Math.sin(t) * e
                        };
                    }, i.getTextAlignInfo = function(t, e) {
                        var i, n = this.getOffsetVector(t, e), r = "middle";
                        return n[0] > 0 ? i = "left" : n[0] < 0 ? i = "right" : (i = "center", n[1] > 0 ? r = "top" : n[1] < 0 && (r = "bottom")), 
                        {
                            textAlign: i,
                            textBaseline: r
                        };
                    }, i.getAxisVector = function(t) {
                        var e = this.center, i = this.offsetFactor;
                        return [ (t.y - e.y) * i, -1 * (t.x - e.x) * i ];
                    }, i.drawLine = function(t) {
                        var e = this.center, i = this.radius, r = this.startAngle, a = this.endAngle;
                        this.getContainer(t.top).addShape("arc", {
                            className: "axis-line",
                            attrs: n.mix({
                                x: e.x,
                                y: e.y,
                                r: i,
                                startAngle: r,
                                endAngle: a
                            }, t)
                        });
                    }, e;
                }(r);
                r.Circle = a, t.exports = a;
            }, function(t, e, i) {
                var n = i(114);
                t.exports = n;
            }, function(t, e, i) {
                var n = i(17), r = i(36), a = i(115), s = i(37), o = i(29), c = i(4), h = i(16), l = i(18), u = i(15), f = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this), this.type = "timeCat", this.sortable = !0, 
                        this.tickCount = 5, this.mask = "YYYY-MM-DD";
                    }, i.init = function() {
                        var t = this, e = this.values;
                        c(e, function(i, n) {
                            e[n] = t._toTimeStamp(i);
                        }), this.sortable && e.sort(function(t, e) {
                            return t - e;
                        }), t.ticks || (t.ticks = this.calculateTicks());
                    }, i.calculateTicks = function() {
                        var t = this.tickCount;
                        return t ? s({
                            maxCount: t,
                            data: this.values,
                            isRounding: this.isRounding
                        }).ticks : this.values;
                    }, i.translate = function(t) {
                        t = this._toTimeStamp(t);
                        var e = this.values.indexOf(t);
                        return -1 === e && (e = h(t) && t < this.values.length ? t : NaN), e;
                    }, i.scale = function(t) {
                        var e, i = this.rangeMin(), n = this.rangeMax(), r = this.translate(t);
                        return e = 1 === this.values.length || isNaN(r) ? r : r > -1 ? r / (this.values.length - 1) : 0, 
                        i + e * (n - i);
                    }, i.getText = function(t) {
                        var e = "", i = this.translate(t);
                        e = i > -1 ? this.values[i] : t;
                        var n = this.formatter;
                        return e = parseInt(e, 10), e = n ? n(e) : a.format(e, this.mask);
                    }, i.getTicks = function() {
                        var t = this, e = this.ticks, i = [];
                        return c(e, function(e) {
                            var n;
                            n = l(e) ? e : {
                                text: u(e) ? e : t.getText(e),
                                value: t.scale(e),
                                tickValue: e
                            }, i.push(n);
                        }), i;
                    }, i._toTimeStamp = function(t) {
                        return o.toTimeStamp(t);
                    }, e;
                }(r);
                n.TimeCat = f, t.exports = f;
            }, function(t, e, i) {
                var n;
                !function(r) {
                    function a(t, e) {
                        for (var i = [], n = 0, r = t.length; n < r; n++) i.push(t[n].substr(0, e));
                        return i;
                    }
                    function s(t) {
                        return function(e, i, n) {
                            var r = n[t].indexOf(i.charAt(0).toUpperCase() + i.substr(1).toLowerCase());
                            ~r && (e.month = r);
                        };
                    }
                    function o(t, e) {
                        for (t = String(t), e = e || 2; t.length < e; ) t = "0" + t;
                        return t;
                    }
                    var c = {}, h = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, l = /\d\d?/, u = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, f = /\[([^]*?)\]/gm, p = function() {}, g = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ], d = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ], v = a(d, 3), y = a(g, 3);
                    c.i18n = {
                        dayNamesShort: y,
                        dayNames: g,
                        monthNamesShort: v,
                        monthNames: d,
                        amPm: [ "am", "pm" ],
                        DoFn: function(t) {
                            return t + [ "th", "st", "nd", "rd" ][t % 10 > 3 ? 0 : (t - t % 10 != 10) * t % 10];
                        }
                    };
                    var m = {
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
                    }, x = {
                        D: [ l, function(t, e) {
                            t.day = e;
                        } ],
                        Do: [ new RegExp(l.source + u.source), function(t, e) {
                            t.day = parseInt(e, 10);
                        } ],
                        M: [ l, function(t, e) {
                            t.month = e - 1;
                        } ],
                        YY: [ l, function(t, e) {
                            var i = +("" + new Date().getFullYear()).substr(0, 2);
                            t.year = "" + (e > 68 ? i - 1 : i) + e;
                        } ],
                        h: [ l, function(t, e) {
                            t.hour = e;
                        } ],
                        m: [ l, function(t, e) {
                            t.minute = e;
                        } ],
                        s: [ l, function(t, e) {
                            t.second = e;
                        } ],
                        YYYY: [ /\d{4}/, function(t, e) {
                            t.year = e;
                        } ],
                        S: [ /\d/, function(t, e) {
                            t.millisecond = 100 * e;
                        } ],
                        SS: [ /\d{2}/, function(t, e) {
                            t.millisecond = 10 * e;
                        } ],
                        SSS: [ /\d{3}/, function(t, e) {
                            t.millisecond = e;
                        } ],
                        d: [ l, p ],
                        ddd: [ u, p ],
                        MMM: [ u, s("monthNamesShort") ],
                        MMMM: [ u, s("monthNames") ],
                        a: [ u, function(t, e, i) {
                            var n = e.toLowerCase();
                            n === i.amPm[0] ? t.isPm = !1 : n === i.amPm[1] && (t.isPm = !0);
                        } ],
                        ZZ: [ /([\+\-]\d\d:?\d\d|Z)/, function(t, e) {
                            "Z" === e && (e = "+00:00");
                            var i, n = (e + "").match(/([\+\-]|\d\d)/gi);
                            n && (i = 60 * n[1] + parseInt(n[2], 10), t.timezoneOffset = "+" === n[0] ? i : -i);
                        } ]
                    };
                    x.dd = x.d, x.dddd = x.ddd, x.DD = x.D, x.mm = x.m, x.hh = x.H = x.HH = x.h, x.MM = x.M, 
                    x.ss = x.s, x.A = x.a, c.masks = {
                        default: "ddd MMM DD YYYY HH:mm:ss",
                        shortDate: "M/D/YY",
                        mediumDate: "MMM D, YYYY",
                        longDate: "MMMM D, YYYY",
                        fullDate: "dddd, MMMM D, YYYY",
                        shortTime: "HH:mm",
                        mediumTime: "HH:mm:ss",
                        longTime: "HH:mm:ss.SSS"
                    }, c.format = function(t, e, i) {
                        var n = i || c.i18n;
                        if ("number" == typeof t && (t = new Date(t)), "[object Date]" !== Object.prototype.toString.call(t) || isNaN(t.getTime())) throw new Error("Invalid Date in fecha.format");
                        var r = [];
                        return e = (e = c.masks[e] || e || c.masks.default).replace(f, function(t, e) {
                            return r.push(e), "??";
                        }), (e = e.replace(h, function(e) {
                            return e in m ? m[e](t, n) : e.slice(1, e.length - 1);
                        })).replace(/\?\?/g, function() {
                            return r.shift();
                        });
                    }, c.parse = function(t, e, i) {
                        var n = i || c.i18n;
                        if ("string" != typeof e) throw new Error("Invalid format in fecha.parse");
                        if (e = c.masks[e] || e, t.length > 1e3) return !1;
                        var r = !0, a = {};
                        if (e.replace(h, function(e) {
                            if (x[e]) {
                                var i = x[e], s = t.search(i[0]);
                                ~s ? t.replace(i[0], function(e) {
                                    return i[1](a, e, n), t = t.substr(s + e.length), e;
                                }) : r = !1;
                            }
                            return x[e] ? "" : e.slice(1, e.length - 1);
                        }), !r) return !1;
                        var s = new Date();
                        !0 === a.isPm && null != a.hour && 12 != +a.hour ? a.hour = +a.hour + 12 : !1 === a.isPm && 12 == +a.hour && (a.hour = 0);
                        var o;
                        return null != a.timezoneOffset ? (a.minute = +(a.minute || 0) - +a.timezoneOffset, 
                        o = new Date(Date.UTC(a.year || s.getFullYear(), a.month || 0, a.day || 1, a.hour || 0, a.minute || 0, a.second || 0, a.millisecond || 0))) : o = new Date(a.year || s.getFullYear(), a.month || 0, a.day || 1, a.hour || 0, a.minute || 0, a.second || 0, a.millisecond || 0), 
                        o;
                    }, void 0 !== t && t.exports ? t.exports = c : void 0 !== (n = function() {
                        return c;
                    }.call(e, i, e, t)) && (t.exports = n);
                }();
            }, function(t, e, i) {
                t.exports = {
                    Text: i(117),
                    Line: i(118),
                    Arc: i(119),
                    Rect: i(120),
                    Html: i(121),
                    Tag: i(122),
                    Point: i(123),
                    RegionFilter: i(124)
                };
            }, function(t, e, i) {
                var n = i(0), r = i(6), a = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initDefaultCfg = function() {
                        this.type = "text", this.position = null, this.content = null, this.style = {
                            fill: "#000"
                        }, this.offsetX = 0, this.offsetY = 0;
                    }, i.render = function(t, e) {
                        var i = this.position, r = this.parsePoint(t, i);
                        if (r) {
                            var a = this.content, s = this.style, o = this.offsetX, c = this.offsetY;
                            o && (r.x += o), c && (r.y += c);
                            var h = e.addShape("text", {
                                className: "guide-text",
                                attrs: n.mix({
                                    x: r.x,
                                    y: r.y,
                                    text: a
                                }, s)
                            });
                            return this.element = h, h;
                        }
                    }, e;
                }(r);
                r.Text = a, t.exports = a;
            }, function(t, e, i) {
                var n = i(0), r = i(6), a = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initDefaultCfg = function() {
                        this.type = "line", this.start = [], this.end = [], this.style = {
                            stroke: "#000",
                            lineWidth: 1
                        };
                    }, i.render = function(t, e) {
                        var i = [];
                        if (i[0] = this.parsePoint(t, this.start), i[1] = this.parsePoint(t, this.end), 
                        i[0] && i[1]) {
                            var r = e.addShape("Line", {
                                className: "guide-line",
                                attrs: n.mix({
                                    x1: i[0].x,
                                    y1: i[0].y,
                                    x2: i[1].x,
                                    y2: i[1].y
                                }, this.style)
                            });
                            return this.element = r, r;
                        }
                    }, e;
                }(r);
                r.Line = a, t.exports = a;
            }, function(t, e, i) {
                var n = i(0), r = i(6), a = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initDefaultCfg = function() {
                        this.type = "arc", this.start = [], this.end = [], this.style = {
                            stroke: "#999",
                            lineWidth: 1
                        };
                    }, i.render = function(t, e) {
                        var i = this.parsePoint(t, this.start), r = this.parsePoint(t, this.end);
                        if (i && r) {
                            var a = t.center, s = Math.sqrt((i.x - a.x) * (i.x - a.x) + (i.y - a.y) * (i.y - a.y)), o = Math.atan2(i.y - a.y, i.x - a.x), c = Math.atan2(r.y - a.y, r.x - a.x), h = e.addShape("arc", {
                                className: "guide-arc",
                                attrs: n.mix({
                                    x: a.x,
                                    y: a.y,
                                    r: s,
                                    startAngle: o,
                                    endAngle: c
                                }, this.style)
                            });
                            return this.element = h, h;
                        }
                    }, e;
                }(r);
                r.Arc = a, t.exports = a;
            }, function(t, e, i) {
                var n = i(0), r = i(6), a = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initDefaultCfg = function() {
                        this.type = "rect", this.start = [], this.end = [], this.style = {
                            fill: "#CCD7EB",
                            opacity: .4
                        };
                    }, i.render = function(t, e) {
                        var i = this.parsePoint(t, this.start), r = this.parsePoint(t, this.end);
                        if (i && r) {
                            var a = e.addShape("rect", {
                                className: "guide-rect",
                                attrs: n.mix({
                                    x: Math.min(i.x, r.x),
                                    y: Math.min(i.y, r.y),
                                    width: Math.abs(r.x - i.x),
                                    height: Math.abs(i.y - r.y)
                                }, this.style)
                            });
                            return this.element = a, a;
                        }
                    }, e;
                }(r);
                r.Rect = a, t.exports = a;
            }, function(t, e, i) {
                function n(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t.style[i] = e[i]);
                    return t;
                }
                function r(t) {
                    var e = document.createElement("div");
                    return t = t.replace(/(^\s*)|(\s*$)/g, ""), e.innerHTML = "" + t, e.childNodes[0];
                }
                var a = i(0), s = i(6), o = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initDefaultCfg = function() {
                        this.type = "html", this.position = null, this.alignX = "center", this.alignY = "middle", 
                        this.offsetX = null, this.offsetY = null, this.html = null;
                    }, i.render = function(t, e) {
                        var i = this.parsePoint(t, this.position);
                        if (i) {
                            var s = r(this.html);
                            s = n(s, {
                                position: "absolute",
                                top: Math.floor(i.y) + "px",
                                left: Math.floor(i.x) + "px",
                                visibility: "hidden"
                            });
                            var o = e.get("canvas").get("el"), c = o.parentNode;
                            c = n(c, {
                                position: "relative"
                            });
                            var h = r('<div class="guideWapper" style="position: absolute;top: 0; left: 0;"></div>');
                            c.appendChild(h), h.appendChild(s);
                            var l = o.offsetTop, u = o.offsetLeft, f = this.alignX, p = this.alignY, g = this.offsetX, d = this.offsetY, v = function(t, e, i, n) {
                                var r = [];
                                return "left" === t && "top" === e ? (r[0] = 0, r[1] = 0) : "right" === t && "top" === e ? (r[0] = -i, 
                                r[1] = 0) : "left" === t && "bottom" === e ? (r[0] = 0, r[1] = Math.floor(-n)) : "right" === t && "bottom" === e ? (r[0] = Math.floor(-i), 
                                r[1] = Math.floor(-n)) : "right" === t && "middle" === e ? (r[0] = Math.floor(-i), 
                                r[1] = Math.floor(-n / 2)) : "left" === t && "middle" === e ? (r[0] = 0, r[1] = Math.floor(-n / 2)) : "center" === t && "bottom" === e ? (r[0] = Math.floor(-i / 2), 
                                r[1] = Math.floor(-n)) : "center" === t && "top" === e ? (r[0] = Math.floor(-i / 2), 
                                r[1] = 0) : (r[0] = Math.floor(-i / 2), r[1] = Math.floor(-n / 2)), r;
                            }(f, p, a.getWidth(s), a.getHeight(s));
                            i.x = i.x + v[0] + u, i.y = i.y + v[1] + l, g && (i.x += g), d && (i.y += d), n(s, {
                                top: Math.floor(i.y) + "px",
                                left: Math.floor(i.x) + "px",
                                visibility: "visible"
                            }), this.element = h;
                        }
                    }, i.remove = function() {
                        var t = this.element;
                        t && t.parentNode && t.parentNode.removeChild(t);
                    }, e;
                }(s);
                s.Html = o, t.exports = o;
            }, function(t, e, i) {
                var n = i(0), r = i(6), a = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initDefaultCfg = function() {
                        this.type = "tag", this.position = null, this.content = null, this.direct = "tl", 
                        this.autoAdjust = !0, this.offsetX = 0, this.offsetY = 0, this.side = 4, this.background = {
                            padding: 5,
                            radius: 2,
                            fill: "#1890FF"
                        }, this.textStyle = {
                            fontSize: 12,
                            fill: "#fff",
                            textAlign: "center",
                            textBaseline: "middle"
                        }, this.withPoint = !0, this.pointStyle = {
                            fill: "#1890FF",
                            r: 3,
                            lineWidth: 1,
                            stroke: "#fff"
                        };
                    }, i._getDirect = function(t, e, i, n) {
                        var r = this.direct, a = this.side, s = t.get("canvas"), o = s.get("width"), c = s.get("height"), h = e.x, l = e.y, u = r[0], f = r[1];
                        "t" === u && l - a - n < 0 ? u = "b" : "b" === u && l + a + n > c && (u = "t");
                        var p = "c" === u ? a : 0;
                        return "l" === f && h - p - i < 0 ? f = "r" : "r" === f && h + p + i > o ? f = "l" : "c" === f && (i / 2 + h + p > o ? f = "l" : h - i / 2 - p < 0 && (f = "r")), 
                        r = u + f;
                    }, i.render = function(t, e) {
                        var i = this.parsePoint(t, this.position);
                        if (i) {
                            var r = this.content, a = this.background, s = this.textStyle, o = [], c = e.addGroup({
                                className: "guide-tag"
                            });
                            if (this.withPoint) {
                                var h = c.addShape("Circle", {
                                    className: "guide-tag-point",
                                    attrs: n.mix({
                                        x: i.x,
                                        y: i.y
                                    }, this.pointStyle)
                                });
                                o.push(h);
                            }
                            var l = c.addGroup(), u = l.addShape("text", {
                                className: "guide-tag-text",
                                zIndex: 1,
                                attrs: n.mix({
                                    x: 0,
                                    y: 0,
                                    text: r
                                }, s)
                            });
                            o.push(u);
                            var f = u.getBBox(), p = n.parsePadding(a.padding), g = f.width + p[1] + p[3], d = f.height + p[0] + p[2], v = f.minY - p[0], y = f.minX - p[3], m = l.addShape("rect", {
                                className: "guide-tag-bg",
                                zIndex: -1,
                                attrs: n.mix({
                                    x: y,
                                    y: v,
                                    width: g,
                                    height: d
                                }, a)
                            });
                            o.push(m);
                            var x, _ = this.autoAdjust ? this._getDirect(e, i, g, d) : this.direct, S = this.side, b = i.x + this.offsetX, C = i.y + this.offsetY, w = n.parsePadding(a.radius);
                            "tl" === _ ? (x = [ {
                                x: g + y - S - 1,
                                y: d + v - 1
                            }, {
                                x: g + y,
                                y: d + v - 1
                            }, {
                                x: g + y,
                                y: d + S + v
                            } ], w[2] = 0, b -= g, C = C - S - d) : "cl" === _ ? (x = [ {
                                x: g + y - 1,
                                y: (d - S) / 2 + v - 1
                            }, {
                                x: g + y - 1,
                                y: (d + S) / 2 + v + 1
                            }, {
                                x: g + S + y,
                                y: d / 2 + v
                            } ], b = b - g - S, C -= d / 2) : "bl" === _ ? (x = [ {
                                x: g + y,
                                y: -S + v
                            }, {
                                x: g + y - S - 1,
                                y: v + 1
                            }, {
                                x: g + y,
                                y: v + 1
                            } ], w[1] = 0, b -= g, C += S) : "bc" === _ ? (x = [ {
                                x: g / 2 + y,
                                y: -S + v
                            }, {
                                x: (g - S) / 2 + y - 1,
                                y: v + 1
                            }, {
                                x: (g + S) / 2 + y + 1,
                                y: v + 1
                            } ], b -= g / 2, C += S) : "br" === _ ? (x = [ {
                                x: y,
                                y: v - S
                            }, {
                                x: y,
                                y: v + 1
                            }, {
                                x: y + S + 1,
                                y: v + 1
                            } ], w[0] = 0, C += S) : "cr" === _ ? (x = [ {
                                x: y - S,
                                y: d / 2 + v
                            }, {
                                x: y + 1,
                                y: (d - S) / 2 + v - 1
                            }, {
                                x: y + 1,
                                y: (d + S) / 2 + v + 1
                            } ], b += S, C -= d / 2) : "tr" === _ ? (x = [ {
                                x: y,
                                y: d + S + v
                            }, {
                                x: y,
                                y: d + v - 1
                            }, {
                                x: S + y + 1,
                                y: d + v - 1
                            } ], w[3] = 0, C = C - d - S) : "tc" === _ && (x = [ {
                                x: (g - S) / 2 + y - 1,
                                y: d + v - 1
                            }, {
                                x: (g + S) / 2 + y + 1,
                                y: d + v - 1
                            }, {
                                x: g / 2 + y,
                                y: d + S + v
                            } ], b -= g / 2, C = C - d - S);
                            var P = l.addShape("Polygon", {
                                className: "guide-tag-side",
                                zIndex: 0,
                                attrs: {
                                    points: x,
                                    fill: a.fill
                                }
                            });
                            return o.push(P), m.attr("radius", w), l.moveTo(b - y, C - v), l.sort(), this.element = c, 
                            o;
                        }
                    }, e;
                }(r);
                r.Tag = a, t.exports = a;
            }, function(t, e, i) {
                var n = i(0), r = i(6), a = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initDefaultCfg = function() {
                        this.type = "point", this.position = null, this.offsetX = 0, this.offsetY = 0, this.style = {
                            fill: "#1890FF",
                            r: 3,
                            lineWidth: 1,
                            stroke: "#fff"
                        };
                    }, i.render = function(t, e) {
                        var i = this.parsePoint(t, this.position);
                        if (!i) return null;
                        var r = e.addShape("Circle", {
                            className: "guide-point",
                            attrs: n.mix({
                                x: i.x + this.offsetX,
                                y: i.y + this.offsetY
                            }, this.style)
                        });
                        return this.element = r, r;
                    }, e;
                }(r);
                r.Point = a, t.exports = a;
            }, function(t, e, i) {
                var n = i(0), r = i(6), a = i(2).Rect, s = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i._initDefaultCfg = function() {
                        this.type = "regionFilter", this.start = [], this.end = [], this.color = null, this.style = null;
                    }, i.render = function(t) {
                        var e = this.parsePoint(t, this.start), i = this.parsePoint(t, this.end);
                        if (e && i) {
                            var r = new a({
                                attrs: {
                                    x: Math.min(e.x, i.x),
                                    y: Math.min(e.y, i.y),
                                    width: Math.abs(i.x - e.x),
                                    height: Math.abs(i.y - e.y)
                                }
                            });
                            this.clip = r;
                            var s = this.chart, o = this.color, c = this.style || {}, h = [];
                            s.get("geoms").map(function(t) {
                                var e = t.get("container"), i = e.get("children"), a = e.addGroup({
                                    zIndex: 10,
                                    className: "guide-region-filter"
                                });
                                return i.map(function(t) {
                                    if (t.get("isShape")) {
                                        var e = t.get("type"), i = n.mix({}, t.get("attrs"), c);
                                        o && (i.fill || i.fillStyle) && (i.fill = i.fillStyle = o), o && (i.stroke || i.strokeStyle) && (i.stroke = i.strokeStyle = o);
                                        var r = {
                                            attrs: i
                                        };
                                        "custom" !== e && "Custom" !== e || (r.createPath = t.get("createPath"), r.calculateBox = t.get("calculateBox")), 
                                        a.addShape(e, r);
                                    }
                                    return t;
                                }), a.attr("clip", r), e.sort(), h.push(a), t;
                            }), this.element = h;
                        }
                    }, i.remove = function() {
                        var t = this.element;
                        n.each(t, function(t) {
                            t && t.remove(!0);
                        }), this.clip && this.clip.remove(!0);
                    }, e;
                }(r);
                r.RegionFilter = s, t.exports = s;
            }, function(t, e, i) {
                function n(t) {
                    var e = t.getAttr("color");
                    if (e) {
                        var i = e.getScale(e.type);
                        if (i.isLinear) return i;
                    }
                    var n = t.getXScale();
                    return t.getYScale() || n;
                }
                function r(t) {
                    var e = [];
                    return a.each(t, function(t) {
                        var i = function(t, e) {
                            var i = -1;
                            return a.each(t, function(t, n) {
                                if (t.title === e.title && t.name === e.name && t.value === e.value && t.color === e.color) return i = n, 
                                !1;
                            }), i;
                        }(e, t);
                        -1 === i ? e.push(t) : e[i] = t;
                    }), e;
                }
                var a = i(0), s = i(1), o = i(126), c = i(21);
                s.tooltip = a.deepMix({
                    triggerOn: [ "touchstart", "touchmove" ],
                    alwaysShow: !1,
                    showTitle: !1,
                    showCrosshairs: !1,
                    crosshairsStyle: {
                        stroke: "rgba(0, 0, 0, 0.25)",
                        lineWidth: 1
                    },
                    showTooltipMarker: !0,
                    background: {
                        radius: 1,
                        fill: "rgba(0, 0, 0, 0.65)",
                        padding: [ 3, 5 ]
                    },
                    titleStyle: {
                        fontSize: 12,
                        fill: "#fff",
                        textAlign: "start",
                        textBaseline: "top"
                    },
                    nameStyle: {
                        fontSize: 12,
                        fill: "rgba(255, 255, 255, 0.65)",
                        textAlign: "start",
                        textBaseline: "middle"
                    },
                    valueStyle: {
                        fontSize: 12,
                        fill: "#fff",
                        textAlign: "start",
                        textBaseline: "middle"
                    },
                    showItemMarker: !0,
                    itemMarkerStyle: {
                        radius: 3,
                        symbol: "circle",
                        lineWidth: 1,
                        stroke: "#fff"
                    },
                    layout: "horizontal",
                    snap: !1
                }, s.tooltip || {});
                var h = function() {
                    function t(t) {
                        this.enable = !0, this.cfg = {}, this.tooltip = null, this.chart = null, this.timeStamp = 0, 
                        a.mix(this, t);
                        var e = this.chart;
                        this.canvasDom = e.get("canvas").get("el");
                    }
                    var e = t.prototype;
                    return e._setCrosshairsCfg = function() {
                        var t = this.chart, e = a.mix({}, s.tooltip), i = t.get("geoms"), n = [];
                        a.each(i, function(t) {
                            var e = t.get("type");
                            -1 === n.indexOf(e) && n.push(e);
                        });
                        var r = t.get("coord").type;
                        return !i.length || "cartesian" !== r && "rect" !== r || 1 === n.length && -1 !== [ "line", "area", "path", "point" ].indexOf(n[0]) && a.mix(e, {
                            showCrosshairs: !0
                        }), e;
                    }, e._getMaxLength = function(t) {
                        void 0 === t && (t = {});
                        var e = t, i = e.layout, n = e.plotRange;
                        return "horizontal" === i ? n.br.x - n.bl.x : n.bl.y - n.tr.y;
                    }, e.render = function() {
                        if (!this.tooltip) {
                            var t = this.chart, e = t.get("canvas"), i = t.get("frontPlot").addGroup({
                                className: "tooltipContainer",
                                zIndex: 10
                            }), n = t.get("backPlot").addGroup({
                                className: "tooltipContainer"
                            }), r = t.get("plotRange"), s = t.get("coord"), c = this._setCrosshairsCfg(), h = this.cfg;
                            (h = a.deepMix({
                                plotRange: r,
                                frontPlot: i,
                                backPlot: n,
                                canvas: e,
                                fixed: s.transposed || s.isPolar
                            }, c, h)).maxLength = this._getMaxLength(h), this.cfg = h;
                            var l = new o(h);
                            this.tooltip = l, this.bindEvents();
                        }
                    }, e.clear = function() {
                        var t = this.tooltip;
                        t && t.destroy(), this.tooltip = null, this.prePoint = null, this._lastActive = null, 
                        this.unBindEvents();
                    }, e._getTooltipMarkerStyle = function(t) {
                        void 0 === t && (t = {});
                        var e = t, i = e.type, n = e.items, r = this.cfg;
                        if ("rect" === i) {
                            var s, o, c, h, l = this.chart, u = l.get("plotRange"), f = u.tl, p = u.br, g = l.get("coord"), d = n[0], v = n[n.length - 1], y = d.width;
                            g.transposed ? (s = f.x, o = v.y - .75 * y, c = p.x - f.x, h = d.y - v.y + 1.5 * y) : (s = d.x - .75 * y, 
                            o = f.y, c = v.x - d.x + 1.5 * y, h = p.y - f.y), t.style = a.mix({
                                x: s,
                                y: o,
                                width: c,
                                height: h,
                                fill: "#CCD6EC",
                                opacity: .3
                            }, r.tooltipMarkerStyle);
                        } else t.style = a.mix({
                            radius: 4,
                            fill: "#fff",
                            lineWidth: 2
                        }, r.tooltipMarkerStyle);
                        return t;
                    }, e._setTooltip = function(t, e, i) {
                        void 0 === i && (i = {});
                        var n = this._lastActive, s = this.tooltip, o = this.cfg;
                        e = r(e);
                        var h = this.chart, l = h.get("coord"), u = h.getYScales()[0], f = o.snap;
                        if (!1 === f && u.isLinear) {
                            var p, g, d = l.invertPoint(t), v = h.get("plotRange");
                            c.isPointInPlot(t, v) && (l.transposed ? (p = u.invert(d.x), g = t.x, s.setXTipContent(p), 
                            s.setXTipPosition(g), s.setYCrosshairPosition(g)) : (p = u.invert(d.y), g = t.y, 
                            s.setYTipContent(p), s.setYTipPosition(g), s.setXCrosshairPosition(g)));
                        }
                        if (o.onShow && o.onShow({
                            x: t.x,
                            y: t.y,
                            tooltip: s,
                            items: e,
                            tooltipMarkerCfg: i
                        }), function(t, e) {
                            return JSON.stringify(t) === JSON.stringify(e);
                        }(n, e)) !1 === f && (a.directionEnabled(o.crosshairsType, "y") || o.showYTip) && this.chart.get("canvas").draw(); else {
                            this._lastActive = e;
                            var y = o.onChange;
                            y && y({
                                x: t.x,
                                y: t.y,
                                tooltip: s,
                                items: e,
                                tooltipMarkerCfg: i
                            });
                            var m = e[0], x = m.title || m.name, _ = m.x;
                            if (e.length > 1 && (_ = (e[0].x + e[e.length - 1].x) / 2), s.setContent(x, e, l.transposed), 
                            s.setPosition(e, t), l.transposed) {
                                var S = m.y;
                                e.length > 1 && (S = (e[0].y + e[e.length - 1].y) / 2), s.setYTipContent(x), s.setYTipPosition(S), 
                                s.setXCrosshairPosition(S), f && (s.setXTipContent(m.value), s.setXTipPosition(_), 
                                s.setYCrosshairPosition(_));
                            } else s.setXTipContent(x), s.setXTipPosition(_), s.setYCrosshairPosition(_), f && (s.setYTipContent(m.value), 
                            s.setYTipPosition(m.y), s.setXCrosshairPosition(m.y));
                            var b = i.items;
                            o.showTooltipMarker && b.length ? (i = this._getTooltipMarkerStyle(i), s.setMarkers(i)) : s.clearMarkers(), 
                            s.show();
                        }
                    }, e.showTooltip = function(t) {
                        var e, i, r = this.chart, o = [], c = [], h = this.cfg;
                        h.showItemMarker && (i = h.itemMarkerStyle);
                        var l = r.get("geoms"), u = r.get("coord");
                        if (a.each(l, function(r) {
                            if (r.get("visible")) {
                                var h = r.get("type"), l = r.getSnapRecords(t);
                                a.each(l, function(t) {
                                    if (t.x && t.y) {
                                        var l = t.x, f = t.y, p = t._origin, g = t.color, d = {
                                            x: l,
                                            y: a.isArray(f) ? f[1] : f,
                                            color: g || s.defaultColor,
                                            origin: p,
                                            name: function(t, e) {
                                                var i, r, s = t._getGroupScales();
                                                if (s.length && a.each(s, function(t) {
                                                    return r = t, !1;
                                                }), r) {
                                                    var o = r.field;
                                                    i = r.getText(e[o]);
                                                } else {
                                                    var c = n(t);
                                                    i = c.alias || c.field;
                                                }
                                                return i;
                                            }(r, p),
                                            value: function(t, e) {
                                                var i = n(r);
                                                return i.getText(e[i.field]);
                                            }(0, p),
                                            title: function(t, e) {
                                                var i = t.getAttr("position").getFields()[0], n = t.get("scales")[i];
                                                return n.getText(e[n.field]);
                                            }(r, p)
                                        };
                                        i && (d.marker = a.mix({
                                            fill: g || s.defaultColor
                                        }, i)), c.push(d), -1 !== [ "line", "area", "path" ].indexOf(h) ? (e = "circle", 
                                        o.push(d)) : "interval" !== h || "cartesian" !== u.type && "rect" !== u.type || (e = "rect", 
                                        d.width = r.getSize(t._origin), o.push(d));
                                    }
                                });
                            }
                        }), c.length) {
                            var f = {
                                items: o,
                                type: e
                            };
                            this._setTooltip(t, c, f);
                        } else this.hideTooltip();
                    }, e.hideTooltip = function() {
                        var t = this.cfg;
                        this._lastActive = null;
                        var e = this.tooltip;
                        e && (e.hide(), t.onHide && t.onHide({
                            tooltip: e
                        }), this.chart.get("canvas").draw());
                    }, e.handleShowEvent = function(t) {
                        var e = this.chart;
                        if (this.enable && !e.get("_closeTooltip")) {
                            var i = e.get("plotRange"), n = a.createEvent(t, e);
                            if (c.isPointInPlot(n, i) || this.cfg.alwaysShow) {
                                var r = this.timeStamp, s = +new Date();
                                s - r > 16 && (this.showTooltip(n), this.timeStamp = s);
                            } else this.hideTooltip();
                        }
                    }, e.handleHideEvent = function() {
                        var t = this.chart;
                        this.enable && !t.get("_closeTooltip") && this.hideTooltip();
                    }, e.handleDocEvent = function(t) {
                        var e = this.chart;
                        if (this.enable && !e.get("_closeTooltip")) {
                            var i = this.canvasDom;
                            t.target !== i && this.hideTooltip();
                        }
                    }, e._handleEvent = function(t, e, i) {
                        var n = this.canvasDom;
                        a.each([].concat(t), function(t) {
                            "bind" === i ? a.addEventListener(n, t, e) : a.removeEventListener(n, t, e);
                        });
                    }, e.bindEvents = function() {
                        var t = this.cfg, e = t.triggerOn, i = t.triggerOff, n = t.alwaysShow, r = a.wrapBehavior(this, "handleShowEvent"), s = a.wrapBehavior(this, "handleHideEvent");
                        if (e && this._handleEvent(e, r, "bind"), i && this._handleEvent(i, s, "bind"), 
                        !n) {
                            var o = a.wrapBehavior(this, "handleDocEvent");
                            a.isBrowser && a.addEventListener(document, "touchstart", o);
                        }
                    }, e.unBindEvents = function() {
                        var t = this.cfg, e = t.triggerOn, i = t.triggerOff, n = t.alwaysShow, r = a.getWrapBehavior(this, "handleShowEvent"), s = a.getWrapBehavior(this, "handleHideEvent");
                        if (e && this._handleEvent(e, r, "unBind"), i && this._handleEvent(i, s, "unBind"), 
                        !n) {
                            var o = a.getWrapBehavior(this, "handleDocEvent");
                            a.isBrowser && a.removeEventListener(document, "touchstart", o);
                        }
                    }, t;
                }();
                t.exports = {
                    init: function(t) {
                        var e = new h({
                            chart: t
                        });
                        t.set("tooltipController", e), t.tooltip = function(t, i) {
                            return a.isObject(t) && (i = t, t = !0), e.enable = t, i && (e.cfg = i), this;
                        };
                    },
                    afterGeomDraw: function(t) {
                        var e = t.get("tooltipController");
                        e.render(), t.showTooltip = function(t) {
                            return e.showTooltip(t), this;
                        }, t.hideTooltip = function() {
                            return e.hideTooltip(), this;
                        };
                    },
                    clearInner: function(t) {
                        t.get("tooltipController").clear();
                    }
                };
            }, function(t, e, i) {
                var n = i(0), r = i(45), a = i(46), s = i(127), o = function() {
                    function t(t) {
                        n.deepMix(this, this.getDefaultCfg(), t);
                        var e = this.frontPlot;
                        if (!this.custom) {
                            var i = new a(n.mix({
                                parent: e,
                                zIndex: 3
                            }, t));
                            this.container = i;
                            var r = this.fixed, o = this.background;
                            r || (this.tooltipArrow = e.addShape("Polygon", {
                                className: "tooltip-arrow",
                                visible: !1,
                                zIndex: 2,
                                attrs: n.mix({
                                    points: []
                                }, o)
                            }));
                        }
                        if (this.showXTip) {
                            var c = this.xTipBackground, h = new s({
                                className: "xTip",
                                background: c,
                                visible: !1
                            });
                            e.add(h.container), this.xTipBox = h;
                        }
                        if (this.showYTip) {
                            var l = this.yTipBackground, u = new s({
                                className: "yTip",
                                background: l,
                                visible: !1
                            });
                            e.add(u.container), this.yTipBox = u;
                        }
                        this.showCrosshairs && this._renderCrosshairs(), e.sort();
                    }
                    var e = t.prototype;
                    return e.getDefaultCfg = function() {
                        return {
                            showCrosshairs: !1,
                            crosshairsStyle: {
                                stroke: "rgba(0, 0, 0, 0.25)",
                                lineWidth: 1
                            },
                            crosshairsType: "y",
                            showXTip: !1,
                            showYTip: !1,
                            xTip: null,
                            xTipBackground: {
                                radius: 1,
                                fill: "rgba(0, 0, 0, 0.65)",
                                padding: [ 3, 5 ]
                            },
                            yTip: null,
                            yTipBackground: {
                                radius: 1,
                                fill: "rgba(0, 0, 0, 0.65)",
                                padding: [ 3, 5 ]
                            },
                            background: null,
                            layout: "horizontal",
                            offsetX: 0,
                            offsetY: 0
                        };
                    }, e.setContent = function(t, e) {
                        if (this.title = t, this.items = e, !this.custom) {
                            var i = this.container;
                            i.setTitle(t), i.setItems(e);
                        }
                    }, e.setYTipContent = function(t) {
                        var e = this.yTip;
                        t = n.isFunction(e) ? e(t) : n.mix({
                            text: t
                        }, e), this.yTipBox && this.yTipBox.updateContent(t);
                    }, e.setYTipPosition = function(t) {
                        var e = this.plotRange, i = this.crosshairsShapeX;
                        if (this.showYTip) {
                            var n = this.yTipBox, r = n.getHeight(), a = n.getWidth(), s = e.tl.x - a, o = t - r / 2;
                            o <= e.tl.y && (o = e.tl.y), o + r >= e.br.y && (o = e.br.y - r), s < 0 && (s = e.tl.x, 
                            i && i.attr("x1", e.tl.x + a)), n.updatePosition(s, o);
                        }
                    }, e.setXTipContent = function(t) {
                        var e = this.xTip;
                        t = n.isFunction(e) ? e(t) : n.mix({
                            text: t
                        }, e), this.xTipBox && this.xTipBox.updateContent(t);
                    }, e.setXTipPosition = function(t) {
                        var e = this.showXTip, i = this.canvas, n = this.plotRange, r = this.xTipBox, a = this.crosshairsShapeY;
                        if (e) {
                            var s = i.get("height"), o = r.getWidth(), c = r.getHeight(), h = t - o / 2, l = n.br.y;
                            h <= n.tl.x && (h = n.tl.x), h + o >= n.tr.x && (h = n.tr.x - o), s - l < c && (l -= c), 
                            r.updatePosition(h, l), a && a.attr("y1", l);
                        }
                    }, e.setXCrosshairPosition = function(t) {
                        this.crosshairsShapeX && this.crosshairsShapeX.moveTo(0, t);
                    }, e.setYCrosshairPosition = function(t) {
                        this.crosshairsShapeY && this.crosshairsShapeY.moveTo(t, 0);
                    }, e.setPosition = function(t) {
                        var e = this.container, i = this.plotRange, r = this.offsetX, a = this.offsetY, s = this.fixed, o = this.tooltipArrow;
                        if (e) {
                            var c = e.container.getBBox(), h = c.minX, l = c.minY, u = c.width, f = c.height, p = i.tl, g = i.tr, d = 0, v = p.y - f - 4 + a;
                            if (s) d = (p.x + g.x) / 2 - u / 2 + r; else {
                                var y;
                                if (y = t.length > 1 ? (t[0].x + t[t.length - 1].x) / 2 : t[0].x, (d = y - u / 2 + r) < p.x && (d = p.x), 
                                d + u > g.x && (d = g.x - u), o) {
                                    o.attr("points", [ {
                                        x: y - 3,
                                        y: p.y - 4 + a
                                    }, {
                                        x: y + 3,
                                        y: p.y - 4 + a
                                    }, {
                                        x: y,
                                        y: p.y + a
                                    } ]);
                                    var m = e.backShape, x = n.parsePadding(m.attr("radius"));
                                    y === p.x ? (x[3] = 0, o.attr("points", [ {
                                        x: p.x,
                                        y: p.y + a
                                    }, {
                                        x: p.x,
                                        y: p.y - 4 + a
                                    }, {
                                        x: p.x + 4,
                                        y: p.y - 4 + a
                                    } ])) : y === g.x && (x[2] = 0, o.attr("points", [ {
                                        x: g.x,
                                        y: p.y + a
                                    }, {
                                        x: g.x - 4,
                                        y: p.y - 4 + a
                                    }, {
                                        x: g.x,
                                        y: p.y - 4 + a
                                    } ])), m.attr("radius", x);
                                }
                            }
                            e.moveTo(d - h, v - l);
                        }
                    }, e.setMarkers = function(t) {
                        void 0 === t && (t = {});
                        var e = t, i = e.items, a = e.style, s = e.type, o = this._getMarkerGroup(s);
                        if ("circle" === s) for (var c = 0, h = i.length; c < h; c++) {
                            var l = i[c], u = new r({
                                className: "tooltip-circle-marker",
                                attrs: n.mix({
                                    x: l.x,
                                    y: l.y,
                                    stroke: l.color
                                }, a)
                            });
                            o.add(u);
                        } else o.addShape("rect", {
                            className: "tooltip-rect-marker",
                            attrs: a
                        });
                    }, e.clearMarkers = function() {
                        var t = this.markerGroup;
                        t && t.clear();
                    }, e.show = function() {
                        var t = this.crosshairsShapeX, e = this.crosshairsShapeY, i = this.markerGroup, n = this.container, r = this.tooltipArrow, a = this.xTipBox, s = this.yTipBox, o = this.canvas;
                        t && t.show(), e && e.show(), i && i.show(), n && n.show(), r && r.show(), a && a.show(), 
                        s && s.show(), o.draw();
                    }, e.hide = function() {
                        var t = this.crosshairsShapeX, e = this.crosshairsShapeY, i = this.markerGroup, n = this.container, r = this.tooltipArrow, a = this.xTipBox, s = this.yTipBox;
                        t && t.hide(), e && e.hide(), i && i.hide(), n && n.hide(), r && r.hide(), a && a.hide(), 
                        s && s.hide();
                    }, e.destroy = function() {
                        var t = this.crosshairsShapeX, e = this.crosshairsShapeY, i = this.markerGroup, n = this.container, r = this.tooltipArrow, a = this.xTipBox, s = this.yTipBox;
                        t && t.remove(!0), e && e.remove(!0), i && i.remove(!0), r && r.remove(!0), n && n.clear(), 
                        a && a.clear(), s && s.clear(), this.destroyed = !0;
                    }, e._getMarkerGroup = function(t) {
                        var e = this.markerGroup;
                        return e ? e.clear() : ("circle" === t ? (e = this.frontPlot.addGroup({
                            zIndex: 1
                        }), this.frontPlot.sort()) : e = this.backPlot.addGroup(), this.markerGroup = e), 
                        e;
                    }, e._renderCrosshairs = function() {
                        var t = this.crosshairsType, e = this.crosshairsStyle, i = this.frontPlot, r = this.plotRange, a = r.tl, s = r.br;
                        n.directionEnabled(t, "x") && (this.crosshairsShapeX = i.addShape("Line", {
                            className: "tooltip-crosshairs-x",
                            zIndex: 0,
                            visible: !1,
                            attrs: n.mix({
                                x1: a.x,
                                y1: 0,
                                x2: s.x,
                                y2: 0
                            }, e)
                        })), n.directionEnabled(t, "y") && (this.crosshairsShapeY = i.addShape("Line", {
                            className: "tooltip-crosshairs-y",
                            zIndex: 0,
                            visible: !1,
                            attrs: n.mix({
                                x1: 0,
                                y1: s.y,
                                x2: 0,
                                y2: a.y
                            }, e)
                        }));
                    }, t;
                }();
                t.exports = o;
            }, function(t, e, i) {
                var n = i(0), r = i(3).Group, a = function() {
                    function t(t) {
                        n.deepMix(this, this.getDefaultCfg(), t), this._init();
                        var e = this.content, i = this.x, r = this.y;
                        n.isNil(e) || this.updateContent(e), this.updatePosition(i, r);
                    }
                    var e = t.prototype;
                    return e.getDefaultCfg = function() {
                        return {
                            x: 0,
                            y: 0,
                            content: "",
                            textStyle: {
                                fontSize: 12,
                                fill: "#fff",
                                textAlign: "center",
                                textBaseline: "middle"
                            },
                            background: {
                                radius: 1,
                                fill: "rgba(0, 0, 0, 0.65)",
                                padding: [ 3, 5 ]
                            },
                            width: 0,
                            height: 0,
                            className: ""
                        };
                    }, e._init = function() {
                        var t = this.content, e = this.textStyle, i = this.background, a = this.className, s = this.visible, o = new r({
                            className: a,
                            zIndex: 0,
                            visible: s
                        }), c = o.addShape("Text", {
                            className: a + "-text",
                            zIndex: 1,
                            attrs: n.mix({
                                text: t,
                                x: 0,
                                y: 0
                            }, e)
                        }), h = o.addShape("Rect", {
                            className: a + "-bg",
                            zIndex: -1,
                            attrs: n.mix({
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            }, i)
                        });
                        o.sort(), this.container = o, this.textShape = c, this.backgroundShape = h;
                    }, e._getBBox = function() {
                        var t = this.textShape, e = this.background, i = t.getBBox(), r = n.parsePadding(e.padding), a = i.width + r[1] + r[3], s = i.height + r[0] + r[2];
                        return {
                            x: i.minX - r[3],
                            y: i.minY - r[0],
                            width: a,
                            height: s
                        };
                    }, e.updateContent = function(t) {
                        var e = this.textShape, i = this.backgroundShape;
                        if (!n.isNil(t)) {
                            n.isObject(t) || (t = {
                                text: t
                            }), e.attr(t);
                            var r = this._getBBox(), a = r.x, s = r.y, o = r.width, c = r.height, h = this.width || o, l = this.height || c;
                            i.attr({
                                x: a,
                                y: s,
                                width: h,
                                height: l
                            }), this._width = h, this._height = l, this.content = t.text;
                        }
                    }, e.updatePosition = function(t, e) {
                        var i = this.container, n = this._getBBox(), r = n.x, a = n.y;
                        i.moveTo(t - r, e - a), this.x = t - r, this.y = e - a;
                    }, e.getWidth = function() {
                        return this._width;
                    }, e.getHeight = function() {
                        return this._height;
                    }, e.show = function() {
                        this.container.show();
                    }, e.hide = function() {
                        this.container.hide();
                    }, e.clear = function() {
                        var t = this.container;
                        t.clear(), t.remove(!0), this.container = null, this.textShape = null, this.backgroundShape = null;
                    }, t;
                }();
                t.exports = a;
            }, function(t, e, i) {
                var n = i(0), r = i(6), a = i(1);
                a.guide = n.deepMix({
                    line: {
                        style: {
                            stroke: "#a3a3a3",
                            lineWidth: 1
                        },
                        top: !0
                    },
                    text: {
                        style: {
                            fill: "#787878",
                            textAlign: "center",
                            textBaseline: "middle"
                        },
                        offsetX: 0,
                        offsetY: 0,
                        top: !0
                    },
                    rect: {
                        style: {
                            fill: "#fafafa"
                        },
                        top: !1
                    },
                    arc: {
                        style: {
                            stroke: "#a3a3a3"
                        },
                        top: !0
                    },
                    html: {
                        offsetX: 0,
                        offsetY: 0,
                        alignX: "center",
                        alignY: "middle"
                    },
                    tag: {
                        top: !0,
                        offsetX: 0,
                        offsetY: 0,
                        side: 4,
                        background: {
                            padding: 5,
                            radius: 2,
                            fill: "#1890FF"
                        },
                        textStyle: {
                            fontSize: 12,
                            fill: "#fff",
                            textAlign: "center",
                            textBaseline: "middle"
                        }
                    },
                    point: {
                        top: !0,
                        offsetX: 0,
                        offsetY: 0,
                        style: {
                            fill: "#fff",
                            r: 3,
                            lineWidth: 2,
                            stroke: "#1890ff"
                        }
                    }
                }, a.guide || {});
                var s = function() {
                    function t(t) {
                        this.guides = [], this.xScale = null, this.yScales = null, this.guideShapes = [], 
                        n.mix(this, t);
                    }
                    var e = t.prototype;
                    return e._toString = function(t) {
                        return n.isFunction(t) && (t = t(this.xScale, this.yScales)), t = t.toString();
                    }, e._getId = function(t, e) {
                        var i = e.id;
                        if (!i) {
                            var n = e.type;
                            i = "arc" === n || "line" === n || "rect" === n ? this._toString(e.start) + "-" + this._toString(e.end) : this._toString(e.position);
                        }
                        return i;
                    }, e.paint = function(t) {
                        var e = this, i = e.chart, r = e.guides, a = e.xScale, s = e.yScales, o = [];
                        n.each(r, function(n, r) {
                            n.xScale = a, n.yScales = s;
                            var c;
                            "regionFilter" === n.type ? n.chart = i : c = n.top ? e.frontPlot : e.backPlot, 
                            n.coord = t, n.container = c, n.canvas = i.get("canvas");
                            var h = n.render(t, c);
                            if (h) {
                                var l = e._getId(h, n);
                                [].concat(h).forEach(function(t) {
                                    t._id = t.get("className") + "-" + l, t.set("index", r), o.push(t);
                                });
                            }
                        }), e.guideShapes = o;
                    }, e.clear = function() {
                        return this.reset(), this.guides = [], this;
                    }, e.reset = function() {
                        var t = this.guides;
                        n.each(t, function(t) {
                            t.remove();
                        });
                    }, e._createGuide = function(t, e) {
                        var i = n.upperFirst(t), s = new r[i](n.deepMix({}, a.guide[t], e));
                        return this.guides.push(s), s;
                    }, e.line = function(t) {
                        return void 0 === t && (t = {}), this._createGuide("line", t);
                    }, e.text = function(t) {
                        return void 0 === t && (t = {}), this._createGuide("text", t);
                    }, e.arc = function(t) {
                        return void 0 === t && (t = {}), this._createGuide("arc", t);
                    }, e.html = function(t) {
                        return void 0 === t && (t = {}), this._createGuide("html", t);
                    }, e.rect = function(t) {
                        return void 0 === t && (t = {}), this._createGuide("rect", t);
                    }, e.tag = function(t) {
                        return void 0 === t && (t = {}), this._createGuide("tag", t);
                    }, e.point = function(t) {
                        return void 0 === t && (t = {}), this._createGuide("point", t);
                    }, e.regionFilter = function(t) {
                        return void 0 === t && (t = {}), this._createGuide("regionFilter", t);
                    }, t;
                }();
                t.exports = {
                    init: function(t) {
                        var e = new s({
                            frontPlot: t.get("frontPlot").addGroup({
                                zIndex: 20,
                                className: "guideContainer"
                            }),
                            backPlot: t.get("backPlot").addGroup({
                                className: "guideContainer"
                            })
                        });
                        t.set("guideController", e), t.guide = function() {
                            return e;
                        };
                    },
                    afterGeomDraw: function(t) {
                        var e = t.get("guideController");
                        if (e.guides.length) {
                            var i = t.getXScale(), n = t.getYScales(), r = t.get("coord");
                            e.xScale = i, e.yScales = n, e.chart = t, e.paint(r);
                        }
                    },
                    clear: function(t) {
                        t.get("guideController").clear();
                    },
                    repaint: function(t) {
                        t.get("guideController").reset();
                    }
                };
            }, function(t, e, i) {
                var n = i(0), r = i(46), a = i(1), s = {
                    itemMarginBottom: 12,
                    itemGap: 10,
                    showTitle: !1,
                    titleStyle: {
                        fontSize: 12,
                        fill: "#808080",
                        textAlign: "start",
                        textBaseline: "top"
                    },
                    nameStyle: {
                        fill: "#808080",
                        fontSize: 12,
                        textAlign: "start",
                        textBaseline: "middle"
                    },
                    valueStyle: {
                        fill: "#000000",
                        fontSize: 12,
                        textAlign: "start",
                        textBaseline: "middle"
                    },
                    unCheckStyle: {
                        fill: "#bfbfbf"
                    },
                    itemWidth: "auto",
                    wordSpace: 6,
                    selectedMode: "multiple"
                };
                a.legend = n.deepMix({
                    common: s,
                    right: n.mix({
                        position: "right",
                        layout: "vertical"
                    }, s),
                    left: n.mix({
                        position: "left",
                        layout: "vertical"
                    }, s),
                    top: n.mix({
                        position: "top",
                        layout: "horizontal"
                    }, s),
                    bottom: n.mix({
                        position: "bottom",
                        layout: "horizontal"
                    }, s)
                }, a.legend || {});
                var o = function() {
                    function t(t) {
                        this.legendCfg = {}, this.enable = !0, this.position = "top", n.mix(this, t);
                        var e = this.chart;
                        this.canvasDom = e.get("canvas").get("el"), this.clear();
                    }
                    var e = t.prototype;
                    return e.addLegend = function(t, e, i) {
                        var n = this.legendCfg, r = t.field, a = n[r];
                        if (!1 === a) return null;
                        if (a && a.custom) this.addCustomLegend(r); else {
                            var s = n.position || this.position;
                            a && a.position && (s = a.position), t.isCategory && this._addCategoryLegend(t, e, s, i);
                        }
                    }, e.addCustomLegend = function(t) {
                        var e = this.legendCfg;
                        t && e[t] && (e = e[t]);
                        var i = e.position || this.position, s = this.legends;
                        s[i] = s[i] || [];
                        var o = e.items;
                        if (!o) return null;
                        var c = this.container;
                        n.each(o, function(t) {
                            n.isPlainObject(t.marker) ? t.marker.radius = t.marker.radius || 3 : t.marker = {
                                symbol: t.marker || "circle",
                                fill: t.fill,
                                radius: 3
                            }, t.checked = !!n.isNil(t.checked) || t.checked, t.name = t.name || t.value;
                        });
                        var h = new r(n.deepMix({}, a.legend[i], e, {
                            maxLength: this._getMaxLength(i),
                            items: o,
                            parent: c
                        }));
                        s[i].push(h);
                    }, e.clear = function() {
                        var t = this.legends;
                        n.each(t, function(t) {
                            n.each(t, function(t) {
                                t.clear();
                            });
                        }), this.legends = {}, this.unBindEvents();
                    }, e._isFiltered = function(t, e, i) {
                        var r = !1;
                        return n.each(e, function(e) {
                            if (r = r || t.getText(e) === t.getText(i)) return !1;
                        }), r;
                    }, e._getMaxLength = function(t) {
                        var e = this.chart, i = n.parsePadding(e.get("appendPadding"));
                        return "right" === t || "left" === t ? e.get("height") - (i[0] + i[2]) : e.get("width") - (i[1] + i[3]);
                    }, e._addCategoryLegend = function(t, e, i, s) {
                        var o = this, c = o.legendCfg, h = o.legends, l = o.container, u = o.chart, f = t.field;
                        h[i] = h[i] || [];
                        var p = "circle";
                        c[f] && c[f].marker ? p = c[f].marker : c.marker && (p = c.marker), n.each(e, function(e) {
                            n.isPlainObject(p) ? n.mix(e.marker, p) : e.marker.symbol = p, s && (e.checked = o._isFiltered(t, s, e.dataValue));
                        }), u.get("legendItems")[f] = e;
                        var g = n.deepMix({}, a.legend[i], c[f] || c, {
                            maxLength: o._getMaxLength(i),
                            items: e,
                            field: f,
                            filterVals: s,
                            parent: l
                        });
                        g.showTitle && n.deepMix(g, {
                            title: t.alias || t.field
                        });
                        var d = new r(g);
                        return h[i].push(d), d;
                    }, e._alignLegend = function(t, e, i) {
                        var r = this.plotRange, a = r.tl, s = r.bl, o = this.chart, c = t.offsetX || 0, h = t.offsetY || 0, l = o.get("width"), u = o.get("height"), f = n.parsePadding(o.get("appendPadding")), p = t.getHeight(), g = t.getWidth(), d = 0, v = 0;
                        if ("left" === i || "right" === i) {
                            var y = t.verticalAlign || "middle", m = Math.abs(a.y - s.y);
                            d = "left" === i ? f[3] : l - g - f[1], v = (m - p) / 2 + a.y, "top" === y ? v = a.y : "bottom" === y && (v = s.y - p), 
                            e && (v = e.get("y") - p - 12);
                        } else {
                            var x = t.align || "left";
                            if (d = f[3], "center" === x ? d = l / 2 - g / 2 : "right" === x && (d = l - (g + f[1])), 
                            v = "top" === i ? f[0] + Math.abs(t.container.getBBox().minY) : u - p, e) {
                                var _ = e.getWidth();
                                d = e.x + _ + 12;
                            }
                        }
                        "bottom" === i && h > 0 && (h = 0), "right" === i && c > 0 && (c = 0), t.moveTo(d + c, v + h);
                    }, e.alignLegends = function() {
                        var t = this, e = t.legends;
                        return n.each(e, function(e, i) {
                            n.each(e, function(n, r) {
                                var a = e[r - 1];
                                t._alignLegend(n, a, i);
                            });
                        }), t;
                    }, e.handleEvent = function(t) {
                        var e = this, i = e.chart, r = n.createEvent(t, i), a = function(t, i) {
                            var r = null, a = e.legends;
                            return n.each(a, function(e) {
                                n.each(e, function(e) {
                                    var a = e.itemsGroup, s = e.legendHitBoxes, o = a.get("children");
                                    if (o.length) {
                                        var c = e.x, h = e.y;
                                        n.each(s, function(n, a) {
                                            if (t >= n.x + c && t <= n.x + n.width + c && i >= n.y + h && i <= n.height + n.y + h) return r = {
                                                clickedItem: o[a],
                                                clickedLegend: e
                                            }, !1;
                                        });
                                    }
                                });
                            }), r;
                        }(r.x, r.y);
                        if (a && !1 !== a.clickedLegend.clickable) {
                            var s = a.clickedItem, o = a.clickedLegend;
                            if (o.onClick) t.clickedItem = s, o.onClick(t); else if (!o.custom) {
                                var c = s.get("checked"), h = s.get("dataValue"), l = o.filterVals, u = o.field;
                                "single" === o.selectedMode ? i.filter(u, function(t) {
                                    return t === h;
                                }) : (c ? n.Array.remove(l, h) : l.push(h), i.filter(u, function(t) {
                                    return -1 !== l.indexOf(t);
                                })), i.repaint();
                            }
                        }
                    }, e.bindEvents = function() {
                        var t = this.legendCfg.triggerOn || "touchstart", e = n.wrapBehavior(this, "handleEvent");
                        n.addEventListener(this.canvasDom, t, e);
                    }, e.unBindEvents = function() {
                        var t = this.legendCfg.triggerOn || "touchstart", e = n.getWrapBehavior(this, "handleEvent");
                        n.removeEventListener(this.canvasDom, t, e);
                    }, t;
                }();
                t.exports = {
                    init: function(t) {
                        var e = new o({
                            container: t.get("backPlot"),
                            plotRange: t.get("plotRange"),
                            chart: t
                        });
                        t.set("legendController", e), t.legend = function(t, i) {
                            var r = e.legendCfg;
                            return e.enable = !0, n.isBoolean(t) ? (e.enable = t, r = i || {}) : n.isObject(t) ? r = t : r[t] = i, 
                            e.legendCfg = r, this;
                        };
                    },
                    beforeGeomDraw: function(t) {
                        var e = t.get("legendController");
                        if (!e.enable) return null;
                        var i = e.legendCfg;
                        if (i && i.custom) e.addCustomLegend(); else {
                            var r = t.getLegendItems(), a = t.get("scales"), s = t.get("filters");
                            n.each(r, function(t, i) {
                                var n, r = a[i], o = r.values;
                                n = s && s[i] ? o.filter(s[i]) : o.slice(0), e.addLegend(r, t, n);
                            });
                        }
                        i && !1 !== i.clickable && e.bindEvents();
                        var o = e.legends, c = {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        };
                        n.each(o, function(e, i) {
                            var r = 0;
                            n.each(e, function(t) {
                                var e = t.getWidth(), n = t.getHeight();
                                "top" === i || "bottom" === i ? (r = Math.max(r, n), t.offsetY > 0 && (r += t.offsetY)) : (r = Math.max(r, e), 
                                t.offsetX > 0 && (r += t.offsetX));
                            }), c[i] = r + function(t, e) {
                                var i = 0;
                                switch (e = n.parsePadding(e), t) {
                                  case "top":
                                    i = e[0];
                                    break;

                                  case "right":
                                    i = e[1];
                                    break;

                                  case "bottom":
                                    i = e[2];
                                    break;

                                  case "left":
                                    i = e[3];
                                }
                                return i;
                            }(i, t.get("appendPadding"));
                        }), t.set("legendRange", c);
                    },
                    afterGeomDraw: function(t) {
                        t.get("legendController").alignLegends();
                    },
                    clearInner: function(t) {
                        t.get("legendController").clear(), t.set("legendRange", null);
                    }
                };
            }, function(t, e, i) {
                function n(t, e, i) {
                    var n = [];
                    return h.each(t, function(t, r) {
                        var a = t.get("container").get("children"), s = t.get("type"), c = h.isNil(t.get("animateCfg")) ? o(s, e) : t.get("animateCfg");
                        !1 !== c && h.each(a, function(e, a) {
                            e.get("className") === s && (e._id = function(t, e, i) {
                                var n, r = t.get("type"), a = "geom" + i + "-" + r, s = t.getXScale(), o = t.getYScale(), c = s.field || "x", l = o.field || "y", u = e[l];
                                n = s.isIdentity ? s.value : e[c], a += "interval" === r || "schema" === r ? "-" + n : "line" === r || "area" === r || "path" === r ? "-" + r : s.isCategory ? "-" + n : "-" + n + "-" + u;
                                var f = t._getGroupScales();
                                return h.each(f, function(t) {
                                    var i = t.field;
                                    "identity" !== t.type && (a += "-" + e[i]);
                                }), a;
                            }(t, e.get("origin")._origin, r), e.set("coord", i), e.set("animateCfg", c), e.set("index", a), 
                            n.push(e));
                        }), t.set("shapes", a);
                    }), n;
                }
                function r(t, e, i, n) {
                    return h.isFunction(n) ? n : h.isString(n) ? p.Action[n] : p.getAnimation(t, e, i);
                }
                function a(t, e, i) {
                    if (!1 === i || h.isObject(i) && !1 === i[e]) return !1;
                    var n = p.getAnimateCfg(t, e);
                    return i && i[e] ? h.deepMix({}, n, i[e]) : n;
                }
                function s(t, e, i) {
                    var n, s, o = [], c = [];
                    h.each(e, function(e) {
                        var i = t[e._id];
                        i ? (e.set("cacheShape", i), o.push(e), delete t[e._id]) : c.push(e);
                    }), h.each(t, function(t) {
                        var e = t.className, o = t.coord, c = t._id, l = t.attrs, u = t.index, f = t.type;
                        if (!1 === (s = a(e, "leave", t.animateCfg))) return !0;
                        if (n = r(e, o, "leave", s.animation), h.isFunction(n)) {
                            var p = i.addShape(f, {
                                attrs: l,
                                index: u,
                                canvas: i,
                                className: e
                            });
                            p._id = c, n(p, s, o);
                        }
                    }), h.each(o, function(t) {
                        var e = t.get("className");
                        if (!1 === (s = a(e, "update", t.get("animateCfg")))) return !0;
                        var i = t.get("coord"), o = t.get("cacheShape").attrs, c = function(t, e) {
                            var i = {};
                            for (var n in e) h.isNumber(t[n]) && t[n] !== e[n] ? i[n] = e[n] : h.isArray(t[n]) && JSON.stringify(t[n]) !== JSON.stringify(e[n]) && (i[n] = e[n]);
                            return i;
                        }(o, t._attrs.attrs);
                        Object.keys(c).length && (n = r(e, i, "update", s.animation), h.isFunction(n) ? n(t, s, i) : (t.attr(o), 
                        t.animate().to({
                            attrs: c,
                            duration: s.duration,
                            easing: s.easing,
                            delay: s.delay
                        }).onEnd(function() {
                            t.set("cacheShape", null);
                        })));
                    }), h.each(c, function(t) {
                        var e = t.get("className"), i = t.get("coord");
                        if (!1 === (s = a(e, "enter", t.get("animateCfg")))) return !0;
                        if (n = r(e, i, "enter", s.animation), h.isFunction(n)) if ("interval" === e && i.isPolar && i.transposed) {
                            var c = t.get("index"), l = o[c - 1];
                            n(t, s, l);
                        } else n(t, s, i);
                    });
                }
                function o(t, e) {
                    if (!t) return null;
                    var i = e.get("animate");
                    return t.indexOf("guide-tag") > -1 && (t = "guide-tag"), h.isObject(i) ? i[t] : !1 !== i && null;
                }
                var c, h = i(0), l = i(27), u = i(131), f = i(132), p = i(47), g = i(134), d = i(135), v = i(7);
                l.prototype.animate = function() {
                    var t = h.mix({}, this.get("attrs"));
                    return new f(this, t, c);
                }, v.prototype.animate = function(t) {
                    return this.set("animate", t), this;
                }, p.Action = g, p.defaultCfg = {
                    interval: {
                        enter: function(t) {
                            return t.isPolar && t.transposed ? function(t) {
                                t.set("zIndex", -1), t.get("parent").sort();
                            } : g.fadeIn;
                        }
                    },
                    area: {
                        enter: function(t) {
                            return t.isPolar ? null : g.fadeIn;
                        }
                    },
                    line: {
                        enter: function(t) {
                            return t.isPolar ? null : g.fadeIn;
                        }
                    },
                    path: {
                        enter: function(t) {
                            return t.isPolar ? null : g.fadeIn;
                        }
                    }
                };
                var y = {
                    line: function(t) {
                        return t.isPolar ? d.groupScaleInXY : d.groupWaveIn;
                    },
                    area: function(t) {
                        return t.isPolar ? d.groupScaleInXY : d.groupWaveIn;
                    },
                    path: function(t) {
                        return t.isPolar ? d.groupScaleInXY : d.groupWaveIn;
                    },
                    point: function() {
                        return d.shapesScaleInXY;
                    },
                    interval: function(t) {
                        var e;
                        return t.isPolar ? (e = d.groupScaleInXY, t.transposed && (e = d.groupWaveIn)) : e = t.transposed ? d.groupScaleInX : d.groupScaleInY, 
                        e;
                    },
                    schema: function() {
                        return d.groupWaveIn;
                    }
                };
                t.exports = {
                    afterCanvasInit: function() {
                        (c = new u()).play();
                    },
                    beforeCanvasDraw: function(t) {
                        if (!1 !== t.get("animate")) {
                            var e = t.get("isUpdate"), i = t.get("canvas"), c = t.get("coord"), l = t.get("geoms"), u = i.get("caches") || [];
                            0 === u.length && (e = !1);
                            var f = n(l, t, c), g = t.get("axisController"), v = g.frontPlot, m = g.backPlot, x = v.get("children").concat(m.get("children")), _ = [];
                            t.get("guideController") && (_ = t.get("guideController").guideShapes);
                            var S = [];
                            if (x.concat(_).forEach(function(e) {
                                var i = o(e.get("className"), t);
                                e.set("coord", c), e.set("animateCfg", i), S.push(e), f.push(e);
                            }), i.set("caches", function(t) {
                                for (var e = {}, i = 0, n = t.length; i < n; i++) {
                                    var r = t[i];
                                    if (r._id && !r.isClip) {
                                        var a = r._id;
                                        e[a] = {
                                            _id: a,
                                            type: r.get("type"),
                                            attrs: h.mix({}, r._attrs.attrs),
                                            className: r.get("className"),
                                            geomType: r.get("className"),
                                            index: r.get("index"),
                                            coord: r.get("coord"),
                                            animateCfg: r.get("animateCfg")
                                        };
                                    }
                                }
                                return e;
                            }(f)), e) s(u, f, i); else {
                                var b, C;
                                h.each(l, function(e) {
                                    var i = e.get("type"), n = h.isNil(e.get("animateCfg")) ? o(i, t) : e.get("animateCfg");
                                    if (!1 !== n) if (b = a(i, "appear", n), C = r(i, c, "appear", b.animation), h.isFunction(C)) {
                                        var s = e.get("shapes");
                                        h.each(s, function(t) {
                                            C(t, b, c);
                                        });
                                    } else if (y[i]) {
                                        C = d[b.animation] || y[i](c);
                                        var l = e.getYScale(), u = c.convertPoint({
                                            x: 0,
                                            y: l.scale(e.getYMinValue())
                                        }), f = e.get("container");
                                        C && C(f, b, c, u);
                                    }
                                }), h.each(S, function(t) {
                                    var e = t.get("animateCfg"), i = t.get("className");
                                    if (e && e.appear) {
                                        var n = p.getAnimateCfg(i, "appear"), a = h.deepMix({}, n, e.appear), s = r(i, c, "appear", a.animation);
                                        h.isFunction(s) && s(t, a, c);
                                    }
                                });
                            }
                        }
                    },
                    afterCanvasDestroyed: function() {
                        c.stop();
                    }
                };
            }, function(e, i, n) {
                var r = n(40).requestAnimationFrame, a = "object" == ("undefined" == typeof performance ? "undefined" : t(performance)) && performance.now ? performance : Date, s = function() {
                    function t() {
                        this.anims = [], this.time = null, this.playing = !1, this.canvas = [];
                    }
                    var e = t.prototype;
                    return e.play = function() {
                        function t() {
                            e.playing && (r(t), e.update());
                        }
                        var e = this;
                        e.time = a.now(), e.playing = !0, r(t);
                    }, e.stop = function() {
                        this.playing = !1, this.time = null, this.canvas = [];
                    }, e.update = function() {
                        var t = a.now();
                        this.canvas = [];
                        for (var e = 0; e < this.anims.length; e++) {
                            var i = this.anims[e];
                            if (!(t < i.startTime || i.hasEnded)) {
                                var n = i.shape;
                                if (n.get("destroyed")) this.anims.splice(e, 1), e--; else {
                                    var r = i.startState, s = i.endState, o = i.interpolate, c = i.duration;
                                    t >= i.startTime && !i.hasStarted && (i.hasStarted = !0, i.onStart && i.onStart());
                                    var h = (t - i.startTime) / c;
                                    if (h = Math.max(0, Math.min(h, 1)), h = i.easing(h), i.onFrame) i.onFrame(h); else for (var l in o) {
                                        var u = (0, o[l])(h), f = void 0;
                                        if ("points" === l) {
                                            f = [];
                                            for (var p = Math.max(r.points.length, s.points.length), g = 0; g < p; g += 2) f.push({
                                                x: u[g],
                                                y: u[g + 1]
                                            });
                                        } else f = u;
                                        n._attrs.attrs[l] = f, n._attrs.bbox = null;
                                    }
                                    var d = n.get("canvas");
                                    -1 === this.canvas.indexOf(d) && this.canvas.push(d), i.onUpdate && i.onUpdate(h), 
                                    t >= i.endTime && !i.hasEnded && (i.hasEnded = !0, i.onEnd && i.onEnd()), 1 === h && (this.anims.splice(e, 1), 
                                    e--);
                                }
                            }
                        }
                        this.canvas.map(function(t) {
                            return t.draw(), t;
                        }), this.time = a.now();
                    }, t;
                }();
                e.exports = s;
            }, function(t, e, i) {
                function n(t) {
                    for (var e = [], i = 0, n = t.length; i < n; i++) t[i] && (e.push(t[i].x), e.push(t[i].y));
                    return e;
                }
                function r(t, e) {
                    return t = +t, e -= t, function(i) {
                        return t + e * i;
                    };
                }
                function a(t, e) {
                    var i, n = e ? e.length : 0, a = t ? Math.min(n, t.length) : 0, s = new Array(a), o = new Array(n);
                    for (i = 0; i < a; ++i) s[i] = r(t[i], e[i]);
                    for (;i < n; ++i) o[i] = e[i];
                    return function(t) {
                        for (i = 0; i < a; ++i) o[i] = s[i](t);
                        return o;
                    };
                }
                var s = i(133), o = function() {
                    function t(t, e, i) {
                        this.hasStarted = !1, this.hasEnded = !1, this.shape = t, this.source = e, this.timeline = i, 
                        this.animate = null;
                    }
                    var e = t.prototype;
                    return e.to = function(t) {
                        void 0 === t && (t = {});
                        var e, i = t.delay || 0, o = t.attrs || {}, c = t.duration || 1e3;
                        e = "function" == typeof t.easing ? t.easing : s[t.easing] || s.linear;
                        var h = {
                            shape: this.shape,
                            startTime: this.timeline.time + i,
                            duration: c,
                            easing: e
                        }, l = {};
                        for (var u in o) {
                            var f = this.source[u], p = o[u];
                            "points" === u ? (f = n(f), p = n(p), l.points = a(f, p), this.source.points = f, 
                            o.points = p) : "matrix" === u ? l.matrix = a(f, p) : l[u] = r(f, p);
                        }
                        return h.interpolate = l, h.startState = this.source, h.endState = o, h.endTime = h.startTime + c, 
                        this.timeline.anims.push(h), this.animate = h, this;
                    }, e.onFrame = function(t) {
                        return this.animate && (this.animate.onFrame = function(e) {
                            t(e);
                        }), this;
                    }, e.onStart = function(t) {
                        return this.animate && (this.animate.onStart = function() {
                            t();
                        }), this;
                    }, e.onUpdate = function(t) {
                        return this.animate && (this.animate.onUpdate = function(e) {
                            t(e);
                        }), this;
                    }, e.onEnd = function(t) {
                        return this.animate && (this.animate.onEnd = function() {
                            t();
                        }), this;
                    }, t;
                }();
                t.exports = o;
            }, function(t, e) {
                var i = {
                    linear: function(t) {
                        return t;
                    },
                    quadraticIn: function(t) {
                        return t * t;
                    },
                    quadraticOut: function(t) {
                        return t * (2 - t);
                    },
                    quadraticInOut: function(t) {
                        return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
                    },
                    cubicIn: function(t) {
                        return t * t * t;
                    },
                    cubicOut: function(t) {
                        return --t * t * t + 1;
                    },
                    cubicInOut: function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
                    },
                    elasticIn: function(t) {
                        var e, i = .1, n = .4;
                        return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), !i || i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), 
                        -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n));
                    },
                    elasticOut: function(t) {
                        var e, i = .1, n = .4;
                        return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), !i || i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), 
                        i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1);
                    },
                    elasticInOut: function(t) {
                        var e, i = .1, n = .4;
                        return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), !i || i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), 
                        (t *= 2) < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1);
                    },
                    backIn: function(t) {
                        var e = 1.70158;
                        return t * t * ((e + 1) * t - e);
                    },
                    backOut: function(t) {
                        var e = 1.70158;
                        return (t -= 1) * t * ((e + 1) * t + e) + 1;
                    },
                    backInOut: function(t) {
                        var e = 2.5949095;
                        return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
                    },
                    bounceIn: function(t) {
                        return 1 - i.bounceOut(1 - t);
                    },
                    bounceOut: function(t) {
                        return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
                    },
                    bounceInOut: function(t) {
                        return t < .5 ? .5 * i.bounceIn(2 * t) : .5 * i.bounceOut(2 * t - 1) + .5;
                    }
                };
                t.exports = i;
            }, function(t, e, i) {
                var n = i(0), r = i(48);
                t.exports = {
                    fadeIn: function(t, e) {
                        var i = n.isNil(t.attr("fillOpacity")) ? 1 : t.attr("fillOpacity"), a = n.isNil(t.attr("strokeOpacity")) ? 1 : t.attr("strokeOpacity");
                        t.attr("fillOpacity", 0), t.attr("strokeOpacity", 0);
                        var s = {
                            fillOpacity: i,
                            strokeOpacity: a
                        };
                        r.doAnimation(t, s, e);
                    }
                };
            }, function(t, e, i) {
                function n(t, e, i, n, r) {
                    var s, c, h = a.getCoordInfo(i), l = h.start, u = h.end, f = h.width, p = h.height, g = new o.Rect({
                        attrs: {
                            x: l.x,
                            y: u.y,
                            width: f,
                            height: p
                        }
                    });
                    "y" === r ? (s = l.x + f / 2, c = n.y < l.y ? n.y : l.y) : "x" === r ? (s = n.x > l.x ? n.x : l.x, 
                    c = l.y + p / 2) : "xy" === r && (i.isPolar ? (s = i.center.x, c = i.center.y) : (s = (l.x + u.x) / 2, 
                    c = (l.y + u.y) / 2));
                    var d = a.getScaledMatrix(g, [ s, c ], r);
                    g.isClip = !0, g.endState = {
                        matrix: d
                    }, g.set("canvas", t.get("canvas")), t.attr("clip", g), a.doAnimation(g, g.endState, e, function() {
                        t.attr("clip", null), g.remove(!0);
                    });
                }
                function r(t, e, i) {
                    for (var n, r, s, o = t.get("children"), c = 0, h = o.length; c < h; c++) {
                        var l = o[c], u = l.getBBox();
                        n = (u.minX + u.maxX) / 2, r = (u.minY + u.maxY) / 2, s = a.getScaledMatrix(l, [ n, r ], i), 
                        a.doAnimation(l, {
                            matrix: s
                        }, e);
                    }
                }
                var a = i(48), s = i(21), o = i(3).Shape;
                t.exports = {
                    groupWaveIn: function(t, e, i) {
                        var n = s.getClip(i);
                        n.set("canvas", t.get("canvas")), t.attr("clip", n);
                        var r = {};
                        if (i.isPolar) {
                            var o = i.startAngle, c = i.endAngle;
                            r.endAngle = c, n.attr("endAngle", o);
                        } else {
                            var h = i.start, l = i.end, u = Math.abs(h.x - l.x), f = Math.abs(h.y - l.y);
                            i.isTransposed ? (n.attr("height", 0), r.height = f) : (n.attr("width", 0), r.width = u);
                        }
                        a.doAnimation(n, r, e, function() {
                            t.attr("clip", null), n.remove(!0);
                        });
                    },
                    groupScaleInX: function(t, e, i, r) {
                        n(t, e, i, r, "x");
                    },
                    groupScaleInY: function(t, e, i, r) {
                        n(t, e, i, r, "y");
                    },
                    groupScaleInXY: function(t, e, i, r) {
                        n(t, e, i, r, "xy");
                    },
                    shapesScaleInX: function(t, e) {
                        r(t, e, "x");
                    },
                    shapesScaleInY: function(t, e) {
                        r(t, e, "y");
                    },
                    shapesScaleInXY: function(t, e) {
                        r(t, e, "xy");
                    }
                };
            }, function(t, e, i) {
                var n = i(23), r = i(0), a = {
                    mode: "x",
                    xStyle: {
                        backgroundColor: "rgba(202, 215, 239, .2)",
                        fillerColor: "rgba(202, 215, 239, .5)",
                        size: 4,
                        lineCap: "round",
                        offsetX: 0,
                        offsetY: 8
                    },
                    yStyle: {
                        backgroundColor: "rgba(202, 215, 239, .2)",
                        fillerColor: "rgba(202, 215, 239, .5)",
                        size: 4,
                        lineCap: "round",
                        offsetX: 8,
                        offsetY: 0
                    }
                };
                t.exports = {
                    init: function(t) {
                        t.set("_limitRange", {}), t.scrollBar = function(t) {
                            !0 === t ? t = a : r.isObject(t) && (t = r.deepMix({}, a, t)), this.set("_scrollBarCfg", t);
                        };
                    },
                    clear: function(t) {
                        t.set("_limitRange", {});
                    },
                    changeData: function(t) {
                        t.set("_limitRange", {});
                    },
                    clearInner: function(t) {
                        var e = t.get("_horizontalBar"), i = t.get("_verticalBar");
                        e && e.remove(!0), i && i.remove(!0), t.set("_horizontalBar", null), t.set("_verticalBar", null);
                    },
                    afterGeomDraw: function(t) {
                        var e = t.get("_scrollBarCfg");
                        if (e) {
                            var i = t.get("data"), a = t.get("plotRange"), s = t.get("backPlot"), o = t.get("canvas").get("height"), c = t.get("_limitRange"), h = e.mode;
                            if (r.directionEnabled(h, "x")) {
                                var l = e.xStyle, u = l.offsetX, f = l.offsetY, p = l.lineCap, g = l.backgroundColor, d = l.fillerColor, v = l.size, y = t.getXScale(), m = c[y.field];
                                m || (m = n.getLimitRange(i, y), c[y.field] = m);
                                var x = n.getFieldRange(y, m, y.type), _ = t.get("_horizontalBar"), S = o - v / 2 + f;
                                _ ? _.get("children")[1].attr({
                                    x1: Math.max(a.bl.x + a.width * x[0] + u, a.bl.x),
                                    x2: Math.min(a.bl.x + a.width * x[1] + u, a.br.x)
                                }) : ((_ = s.addGroup({
                                    className: "horizontalBar"
                                })).addShape("line", {
                                    attrs: {
                                        x1: a.bl.x + u,
                                        y1: S,
                                        x2: a.br.x + u,
                                        y2: S,
                                        lineWidth: v,
                                        stroke: g,
                                        lineCap: p
                                    }
                                }), _.addShape("line", {
                                    attrs: {
                                        x1: Math.max(a.bl.x + a.width * x[0] + u, a.bl.x),
                                        y1: S,
                                        x2: Math.min(a.bl.x + a.width * x[1] + u, a.br.x),
                                        y2: S,
                                        lineWidth: v,
                                        stroke: d,
                                        lineCap: p
                                    }
                                }), t.set("_horizontalBar", _));
                            }
                            if (r.directionEnabled(h, "y")) {
                                var b = e.yStyle, C = b.offsetX, w = b.offsetY, P = b.lineCap, M = b.backgroundColor, T = b.fillerColor, A = b.size, D = t.getYScales()[0], k = c[D.field];
                                k || (k = n.getLimitRange(i, D), c[D.field] = k);
                                var O = n.getFieldRange(D, k, D.type), I = t.get("_verticalBar"), E = A / 2 + C;
                                I ? I.get("children")[1].attr({
                                    y1: Math.max(a.tl.y + a.height * O[0] + w, a.tl.y),
                                    y2: Math.min(a.tl.y + a.height * O[1] + w, a.bl.y)
                                }) : ((I = s.addGroup({
                                    className: "verticalBar"
                                })).addShape("line", {
                                    attrs: {
                                        x1: E,
                                        y1: a.tl.y + w,
                                        x2: E,
                                        y2: a.bl.y + w,
                                        lineWidth: A,
                                        stroke: M,
                                        lineCap: P
                                    }
                                }), I.addShape("line", {
                                    attrs: {
                                        x1: E,
                                        y1: Math.max(a.tl.y + a.height * O[0] + w, a.tl.y),
                                        x2: E,
                                        y2: Math.min(a.tl.y + a.height * O[1] + w, a.bl.y),
                                        lineWidth: A,
                                        stroke: T,
                                        lineCap: P
                                    }
                                }), t.set("_verticalBar", I));
                            }
                        }
                    }
                };
            }, function(t, e, i) {
                function n(t, e, i) {
                    return {
                        x: t.x + i * Math.cos(e),
                        y: t.y + i * Math.sin(e)
                    };
                }
                function r(t, e) {
                    var i = t.getBBox(), n = e.getBBox();
                    return Math.max(i.minX, n.minX) <= Math.min(i.maxX, n.minX) && Math.max(i.minY, n.minY) <= Math.min(i.maxY, n.maxY);
                }
                var a = i(0), s = i(3).Group, o = {
                    anchorOffset: 5,
                    inflectionOffset: 15,
                    sidePadding: 20,
                    lineHeight: 32,
                    adjustOffset: 15,
                    skipOverlapLabels: !1,
                    triggerOn: "touchstart",
                    activeShape: !1,
                    activeStyle: {
                        offset: 1,
                        appendRadius: 8,
                        fillOpacity: .5
                    },
                    label1OffsetY: -1,
                    label2OffsetY: 1
                }, c = function() {
                    function t(t) {
                        a.mix(this, t);
                        var e = this.chart;
                        this.canvasDom = e.get("canvas").get("el");
                    }
                    var e = t.prototype;
                    return e.renderLabels = function() {
                        var t = this, e = t.chart, i = t.pieLabelCfg, o = t.labelGroup, c = [ [], [] ], h = e.get("geoms")[0].get("container").get("children"), l = i.anchorOffset, u = i.inflectionOffset, f = i.label1, p = i.label2, g = i.lineHeight, d = i.skipOverlapLabels, v = i.label1OffsetY, y = i.label2OffsetY, m = e.get("coord"), x = m.center, _ = m.circleRadius;
                        h.forEach(function(t) {
                            var i = t._attrs.attrs, r = function(t, e) {
                                return e < t && (e += 2 * Math.PI), (e + t) / 2;
                            }(i.startAngle, i.endAngle), o = n(x, r, _ + l), h = n(x, r, _ + u), g = t.get("origin"), d = g._origin, m = g.color, S = {
                                _anchor: o,
                                _inflection: h,
                                _data: d,
                                x: h.x,
                                y: h.y,
                                r: _ + u,
                                fill: m
                            }, b = new s({
                                context: e.get("canvas").get("context"),
                                data: d
                            }), C = {
                                x: 0,
                                y: 0,
                                fontSize: 12,
                                lineHeight: 12,
                                fill: "#808080"
                            };
                            a.isFunction(f) && b.addShape("Text", {
                                attrs: a.mix({
                                    textBaseline: "bottom"
                                }, C, f(d, m)),
                                data: d,
                                offsetY: v
                            }), a.isFunction(p) && b.addShape("Text", {
                                attrs: a.mix({
                                    textBaseline: "top"
                                }, C, p(d, m)),
                                data: d,
                                offsetY: y
                            }), S.textGroup = b, o.x < x.x ? (S._side = "left", c[0].push(S)) : (S._side = "right", 
                            c[1].push(S));
                        });
                        var S = [];
                        if (d) for (var b, C = c[1].concat(c[0]), w = 0, P = C.length; w < P; w++) {
                            var M = C[w], T = t._drawLabel(M);
                            b && r(T, b) || (o.add(T), t._drawLabelLine(M), b = T, S.push(T));
                        } else {
                            var A = e.get("height"), D = parseInt(A / g, 10);
                            c.forEach(function(e) {
                                e.length > D && e.splice(D, e.length - D), e.sort(function(t, e) {
                                    return t.y - e.y;
                                });
                                var i = t._antiCollision(e);
                                S = S.concat(i);
                            });
                        }
                        this.drawnLabels = S;
                    }, e.bindEvents = function() {
                        var t = this.pieLabelCfg.triggerOn || "touchstart", e = a.wrapBehavior(this, "_handleEvent");
                        a.addEventListener(this.canvasDom, t, e);
                    }, e.unBindEvents = function() {
                        var t = this.pieLabelCfg.triggerOn || "touchstart", e = a.getWrapBehavior(this, "_handleEvent");
                        a.removeEventListener(this.canvasDom, t, e);
                    }, e.clear = function() {
                        this.labelGroup && this.labelGroup.clear(), this.halo && this.halo.remove(!0), this.lastSelectedData = null, 
                        this.drawnLabels = [], this.unBindEvents();
                    }, e._drawLabel = function(t) {
                        var e = this.pieLabelCfg, i = this.chart.get("width"), n = e.sidePadding, r = t.y, a = t.textGroup, s = a.get("children"), o = {
                            textAlign: "left" === t._side ? "left" : "right",
                            x: "left" === t._side ? n : i - n
                        };
                        return s.forEach(function(t) {
                            t.attr(o), t.attr("y", r + t.get("offsetY"));
                        }), a;
                    }, e._drawLabelLine = function(t, e) {
                        var i = this.chart, n = this.pieLabelCfg, r = this.labelGroup, s = i.get("width"), o = n.sidePadding, c = n.adjustOffset, h = n.lineStyle, l = n.anchorStyle, u = n.skipOverlapLabels, f = t._anchor, p = t._inflection, g = t.fill, d = t.y, v = {
                            x: "left" === t._side ? o : s - o,
                            y: d
                        }, y = [ f, p, v ];
                        if (!u && p.y !== d) if (p.y < d) {
                            var m = p, x = {
                                x: "left" === t._side ? v.x + e + c : v.x - e - c,
                                y: p.y
                            }, _ = {
                                x: "left" === t._side ? v.x + e : v.x - e,
                                y: v.y
                            };
                            y = [ f, m, x, _, v ], ("right" === t._side && x.x < m.x || "left" === t._side && x.x > m.x) && (y = [ f, _, v ]);
                        } else y = [ f, {
                            x: p.x,
                            y: d
                        }, v ];
                        r.addShape("Polyline", {
                            attrs: a.mix({
                                points: y,
                                lineWidth: 1,
                                stroke: g
                            }, h)
                        }), r.addShape("Circle", {
                            attrs: a.mix({
                                x: f.x,
                                y: f.y,
                                r: 2,
                                fill: g
                            }, l)
                        });
                    }, e._antiCollision = function(t) {
                        var e, i = this, n = i.chart, r = i.pieLabelCfg, a = n.get("coord"), s = n.get("height"), o = a.center, c = a.circleRadius, h = r.inflectionOffset, l = r.lineHeight, u = o.y - c - h - l, f = !0, p = s, g = 0, d = Number.MIN_VALUE, v = 0, y = t.map(function(t) {
                            var e = t.y;
                            e > g && (g = e), e < d && (d = e);
                            var i = t.textGroup.getBBox().width;
                            return i >= v && (v = i), {
                                size: l,
                                targets: [ e - u ]
                            };
                        });
                        g - u > p && (p = g - u);
                        for (;f; ) for (function(t) {
                            t.forEach(function(t) {
                                var e = (Math.min.apply(d, t.targets) + Math.max.apply(d, t.targets)) / 2;
                                t.pos = Math.min(Math.max(d, e - t.size / 2), p - t.size);
                            });
                        }(y), f = !1, e = y.length; e--; ) if (e > 0) {
                            var m = y[e - 1], x = y[e];
                            m.pos + m.size > x.pos && (m.size += x.size, m.targets = m.targets.concat(x.targets), 
                            m.pos + m.size > p && (m.pos = p - m.size), y.splice(e, 1), f = !0);
                        }
                        e = 0, y.forEach(function(i) {
                            var n = u;
                            i.targets.forEach(function() {
                                t[e].y = i.pos + n + l / 2, n += l, e++;
                            });
                        });
                        var _ = [];
                        return t.forEach(function(t) {
                            var e = i._drawLabel(t);
                            i.labelGroup.add(e), i._drawLabelLine(t, v), _.push(e);
                        }), _;
                    }, e._handleEvent = function(t) {
                        for (var e, i = this.chart, n = this.drawnLabels, r = this.pieLabelCfg, s = r.onClick, o = r.activeShape, c = a.createEvent(t, i), h = c.x, l = c.y, u = 0, f = n.length; u < f; u++) {
                            var p = n[u], g = p.getBBox();
                            if (h >= g.minX && h <= g.maxX && l >= g.minY && l <= g.maxY) {
                                e = p;
                                break;
                            }
                        }
                        var d = i.getSnapRecords({
                            x: h,
                            y: l
                        });
                        e ? c.data = e.get("data") : d.length && (c.data = d[0]._origin), s && s(c), c.data && o && this._activeShape(c.data);
                    }, e._getSelectedShapeByData = function(t) {
                        var e = null, i = this.chart.get("geoms")[0], n = i.get("container").get("children");
                        return a.each(n, function(n) {
                            if (n.get("isShape") && n.get("className") === i.get("type")) {
                                var r = n.get("origin")._origin;
                                if (a.isObjectValueEqual(r, t)) return e = n, !1;
                            }
                        }), e;
                    }, e._activeShape = function(t) {
                        var e = this.chart, i = this.lastSelectedData, n = this.pieLabelCfg;
                        if (t !== i) {
                            this.lastSelectedData = t;
                            var r = n.activeStyle, s = this._getSelectedShapeByData(t)._attrs.attrs, o = s.x, c = s.y, h = s.startAngle, l = s.endAngle, u = s.r, f = s.fill, p = e.get("frontPlot");
                            this.halo && this.halo.remove(!0);
                            var g = p.addShape("sector", {
                                attrs: a.mix({
                                    x: o,
                                    y: c,
                                    r: u + r.offset + r.appendRadius,
                                    r0: u + r.offset,
                                    fill: f,
                                    startAngle: h,
                                    endAngle: l
                                }, r)
                            });
                            this.halo = g, e.get("canvas").draw();
                        }
                    }, t;
                }();
                t.exports = {
                    init: function(t) {
                        var e = t.get("frontPlot").addGroup({
                            className: "pie-label",
                            zIndex: 0
                        }), i = new c({
                            chart: t,
                            labelGroup: e
                        });
                        t.set("pieLabelController", i), t.pieLabel = function(t) {
                            return t = a.deepMix({}, o, t), i.pieLabelCfg = t, this;
                        };
                    },
                    afterGeomDraw: function(t) {
                        var e = t.get("pieLabelController");
                        e.pieLabelCfg && (e.renderLabels(), e.bindEvents());
                    },
                    clearInner: function(t) {
                        var e = t.get("pieLabelController");
                        e.pieLabelCfg && e.clear();
                    }
                };
            }, function(t, e, i) {
                t.exports = {
                    Interaction: i(12),
                    PieSelect: i(140),
                    IntervalSelect: i(141),
                    Swipe: i(142),
                    Pan: i(143),
                    Pinch: i(144)
                };
            }, function(e, i, n) {
                var r;
                !function(a, s, o, c) {
                    function h(t, e, i) {
                        return setTimeout(g(t, i), e);
                    }
                    function l(t, e, i) {
                        return !!Array.isArray(t) && (u(t, i[e], i), !0);
                    }
                    function u(t, e, i) {
                        var n;
                        if (t) if (t.forEach) t.forEach(e, i); else if (t.length !== c) for (n = 0; n < t.length; ) e.call(i, t[n], n, t), 
                        n++; else for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t);
                    }
                    function f(t, e, i) {
                        var n = "DEPRECATED METHOD: " + e + "\n" + i + " AT \n";
                        return function() {
                            var e = new Error("get-stack-trace"), i = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", r = a.console && (a.console.warn || a.console.log);
                            return r && r.call(a.console, n, i), t.apply(this, arguments);
                        };
                    }
                    function p(t, e, i) {
                        var n, r = e.prototype;
                        (n = t.prototype = Object.create(r)).constructor = t, n._super = r, i && it(n, i);
                    }
                    function g(t, e) {
                        return function() {
                            return t.apply(e, arguments);
                        };
                    }
                    function d(e, i) {
                        return (void 0 === e ? "undefined" : t(e)) == at ? e.apply(i ? i[0] || c : c, i) : e;
                    }
                    function v(t, e) {
                        return t === c ? e : t;
                    }
                    function y(t, e, i) {
                        u(S(e), function(e) {
                            t.addEventListener(e, i, !1);
                        });
                    }
                    function m(t, e, i) {
                        u(S(e), function(e) {
                            t.removeEventListener(e, i, !1);
                        });
                    }
                    function x(t, e) {
                        for (;t; ) {
                            if (t == e) return !0;
                            t = t.parentNode;
                        }
                        return !1;
                    }
                    function _(t, e) {
                        return t.indexOf(e) > -1;
                    }
                    function S(t) {
                        return t.trim().split(/\s+/g);
                    }
                    function b(t, e, i) {
                        if (t.indexOf && !i) return t.indexOf(e);
                        for (var n = 0; n < t.length; ) {
                            if (i && t[n][i] == e || !i && t[n] === e) return n;
                            n++;
                        }
                        return -1;
                    }
                    function C(t) {
                        return Array.prototype.slice.call(t, 0);
                    }
                    function w(t, e, i) {
                        for (var n = [], r = [], a = 0; a < t.length; ) {
                            var s = e ? t[a][e] : t[a];
                            b(r, s) < 0 && n.push(t[a]), r[a] = s, a++;
                        }
                        return i && (n = e ? n.sort(function(t, i) {
                            return t[e] > i[e];
                        }) : n.sort()), n;
                    }
                    function P(t, e) {
                        for (var i, n, r = e[0].toUpperCase() + e.slice(1), a = 0; a < nt.length; ) {
                            if (i = nt[a], (n = i ? i + r : e) in t) return n;
                            a++;
                        }
                        return c;
                    }
                    function M(t) {
                        var e = t.ownerDocument || t;
                        return e.defaultView || e.parentWindow || a;
                    }
                    function T(t, e) {
                        var i = this;
                        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, 
                        this.domHandler = function(e) {
                            d(t.options.enable, [ t ]) && i.handler(e);
                        }, this.init();
                    }
                    function A(t, e, i) {
                        var n = i.pointers.length, r = i.changedPointers.length, a = e & vt && n - r == 0, s = e & (yt | mt) && n - r == 0;
                        i.isFirst = !!a, i.isFinal = !!s, a && (t.session = {}), i.eventType = e, function(t, e) {
                            var i = t.session, n = e.pointers, r = n.length;
                            i.firstInput || (i.firstInput = D(e)), r > 1 && !i.firstMultiple ? i.firstMultiple = D(e) : 1 === r && (i.firstMultiple = !1);
                            var a = i.firstInput, s = i.firstMultiple, o = s ? s.center : a.center, h = e.center = k(n);
                            e.timeStamp = ct(), e.deltaTime = e.timeStamp - a.timeStamp, e.angle = Y(o, h), 
                            e.distance = E(o, h), function(t, e) {
                                var i = e.center, n = t.offsetDelta || {}, r = t.prevDelta || {}, a = t.prevInput || {};
                                e.eventType !== vt && a.eventType !== yt || (r = t.prevDelta = {
                                    x: a.deltaX || 0,
                                    y: a.deltaY || 0
                                }, n = t.offsetDelta = {
                                    x: i.x,
                                    y: i.y
                                }), e.deltaX = r.x + (i.x - n.x), e.deltaY = r.y + (i.y - n.y);
                            }(i, e), e.offsetDirection = I(e.deltaX, e.deltaY);
                            var l = O(e.deltaTime, e.deltaX, e.deltaY);
                            e.overallVelocityX = l.x, e.overallVelocityY = l.y, e.overallVelocity = ot(l.x) > ot(l.y) ? l.x : l.y, 
                            e.scale = s ? function(t, e) {
                                return E(e[0], e[1], At) / E(t[0], t[1], At);
                            }(s.pointers, n) : 1, e.rotation = s ? function(t, e) {
                                return Y(e[1], e[0], At) + Y(t[1], t[0], At);
                            }(s.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, 
                            function(t, e) {
                                var i, n, r, a, s = t.lastInterval || e, o = e.timeStamp - s.timeStamp;
                                if (e.eventType != mt && (o > dt || s.velocity === c)) {
                                    var h = e.deltaX - s.deltaX, l = e.deltaY - s.deltaY, u = O(o, h, l);
                                    n = u.x, r = u.y, i = ot(u.x) > ot(u.y) ? u.x : u.y, a = I(h, l), t.lastInterval = e;
                                } else i = s.velocity, n = s.velocityX, r = s.velocityY, a = s.direction;
                                e.velocity = i, e.velocityX = n, e.velocityY = r, e.direction = a;
                            }(i, e);
                            var u = t.element;
                            x(e.srcEvent.target, u) && (u = e.srcEvent.target), e.target = u;
                        }(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i;
                    }
                    function D(t) {
                        for (var e = [], i = 0; i < t.pointers.length; ) e[i] = {
                            clientX: st(t.pointers[i].clientX),
                            clientY: st(t.pointers[i].clientY)
                        }, i++;
                        return {
                            timeStamp: ct(),
                            pointers: e,
                            center: k(e),
                            deltaX: t.deltaX,
                            deltaY: t.deltaY
                        };
                    }
                    function k(t) {
                        var e = t.length;
                        if (1 === e) return {
                            x: st(t[0].clientX),
                            y: st(t[0].clientY)
                        };
                        for (var i = 0, n = 0, r = 0; r < e; ) i += t[r].clientX, n += t[r].clientY, r++;
                        return {
                            x: st(i / e),
                            y: st(n / e)
                        };
                    }
                    function O(t, e, i) {
                        return {
                            x: e / t || 0,
                            y: i / t || 0
                        };
                    }
                    function I(t, e) {
                        return t === e ? xt : ot(t) >= ot(e) ? t < 0 ? _t : St : e < 0 ? bt : Ct;
                    }
                    function E(t, e, i) {
                        i || (i = Tt);
                        var n = e[i[0]] - t[i[0]], r = e[i[1]] - t[i[1]];
                        return Math.sqrt(n * n + r * r);
                    }
                    function Y(t, e, i) {
                        i || (i = Tt);
                        var n = e[i[0]] - t[i[0]], r = e[i[1]] - t[i[1]];
                        return 180 * Math.atan2(r, n) / Math.PI;
                    }
                    function B() {
                        this.evEl = kt, this.evWin = Ot, this.pressed = !1, T.apply(this, arguments);
                    }
                    function F() {
                        this.evEl = Yt, this.evWin = Bt, T.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
                    }
                    function N() {
                        this.evTarget = Nt, this.evWin = Lt, this.started = !1, T.apply(this, arguments);
                    }
                    function L() {
                        this.evTarget = Xt, this.targetIds = {}, T.apply(this, arguments);
                    }
                    function R() {
                        T.apply(this, arguments);
                        var t = g(this.handler, this);
                        this.touch = new L(this.manager, t), this.mouse = new B(this.manager, t), this.primaryTouch = null, 
                        this.lastTouches = [];
                    }
                    function X(t) {
                        var e = t.changedPointers[0];
                        if (e.identifier === this.primaryTouch) {
                            var i = {
                                x: e.clientX,
                                y: e.clientY
                            };
                            this.lastTouches.push(i);
                            var n = this.lastTouches;
                            setTimeout(function() {
                                var t = n.indexOf(i);
                                t > -1 && n.splice(t, 1);
                            }, zt);
                        }
                    }
                    function z(t, e) {
                        this.manager = t, this.set(e);
                    }
                    function j(t) {
                        this.options = it({}, this.defaults, t || {}), this.id = ut++, this.manager = null, 
                        this.options.enable = v(this.options.enable, !0), this.state = Zt, this.simultaneous = {}, 
                        this.requireFail = [];
                    }
                    function G(t) {
                        return t & te ? "cancel" : t & Kt ? "end" : t & $t ? "move" : t & Jt ? "start" : "";
                    }
                    function W(t) {
                        return t == Ct ? "down" : t == bt ? "up" : t == _t ? "left" : t == St ? "right" : "";
                    }
                    function H(t, e) {
                        var i = e.manager;
                        return i ? i.get(t) : t;
                    }
                    function V() {
                        j.apply(this, arguments);
                    }
                    function q() {
                        V.apply(this, arguments), this.pX = null, this.pY = null;
                    }
                    function U() {
                        V.apply(this, arguments);
                    }
                    function Z() {
                        j.apply(this, arguments), this._timer = null, this._input = null;
                    }
                    function J() {
                        V.apply(this, arguments);
                    }
                    function $() {
                        V.apply(this, arguments);
                    }
                    function K() {
                        j.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, 
                        this._input = null, this.count = 0;
                    }
                    function Q(t, e) {
                        return e = e || {}, e.recognizers = v(e.recognizers, Q.defaults.preset), new tt(t, e);
                    }
                    function tt(t, e) {
                        this.options = it({}, Q.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, 
                        this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, 
                        this.element = t, this.input = function(t) {
                            return new (t.options.inputClass || (pt ? F : gt ? L : ft ? R : B))(t, A);
                        }(this), this.touchAction = new z(this, this.options.touchAction), et(this, !0), 
                        u(this.options.recognizers, function(t) {
                            var e = this.add(new t[0](t[1]));
                            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
                        }, this);
                    }
                    function et(t, e) {
                        var i = t.element;
                        if (i.style) {
                            var n;
                            u(t.options.cssProps, function(r, a) {
                                n = P(i.style, a), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = r) : i.style[n] = t.oldCssProps[n] || "";
                            }), e || (t.oldCssProps = {});
                        }
                    }
                    var it, nt = [ "", "webkit", "Moz", "MS", "ms", "o" ], rt = s.createElement("div"), at = "function", st = Math.round, ot = Math.abs, ct = Date.now;
                    it = "function" != typeof Object.assign ? function(t) {
                        if (t === c || null === t) throw new TypeError("Cannot convert undefined or null to object");
                        for (var e = Object(t), i = 1; i < arguments.length; i++) {
                            var n = arguments[i];
                            if (n !== c && null !== n) for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r]);
                        }
                        return e;
                    } : Object.assign;
                    var ht = f(function(t, e, i) {
                        for (var n = Object.keys(e), r = 0; r < n.length; ) (!i || i && t[n[r]] === c) && (t[n[r]] = e[n[r]]), 
                        r++;
                        return t;
                    }, "extend", "Use `assign`."), lt = f(function(t, e) {
                        return ht(t, e, !0);
                    }, "merge", "Use `assign`."), ut = 1, ft = "ontouchstart" in a, pt = P(a, "PointerEvent") !== c, gt = ft && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent), dt = 25, vt = 1, yt = 4, mt = 8, xt = 1, _t = 2, St = 4, bt = 8, Ct = 16, wt = _t | St, Pt = bt | Ct, Mt = wt | Pt, Tt = [ "x", "y" ], At = [ "clientX", "clientY" ];
                    T.prototype = {
                        handler: function() {},
                        init: function() {
                            this.evEl && y(this.element, this.evEl, this.domHandler), this.evTarget && y(this.target, this.evTarget, this.domHandler), 
                            this.evWin && y(M(this.element), this.evWin, this.domHandler);
                        },
                        destroy: function() {
                            this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), 
                            this.evWin && m(M(this.element), this.evWin, this.domHandler);
                        }
                    };
                    var Dt = {
                        mousedown: vt,
                        mousemove: 2,
                        mouseup: yt
                    }, kt = "mousedown", Ot = "mousemove mouseup";
                    p(B, T, {
                        handler: function(t) {
                            var e = Dt[t.type];
                            e & vt && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = yt), 
                            this.pressed && (e & yt && (this.pressed = !1), this.callback(this.manager, e, {
                                pointers: [ t ],
                                changedPointers: [ t ],
                                pointerType: "mouse",
                                srcEvent: t
                            }));
                        }
                    });
                    var It = {
                        pointerdown: vt,
                        pointermove: 2,
                        pointerup: yt,
                        pointercancel: mt,
                        pointerout: mt
                    }, Et = {
                        2: "touch",
                        3: "pen",
                        4: "mouse",
                        5: "kinect"
                    }, Yt = "pointerdown", Bt = "pointermove pointerup pointercancel";
                    a.MSPointerEvent && !a.PointerEvent && (Yt = "MSPointerDown", Bt = "MSPointerMove MSPointerUp MSPointerCancel"), 
                    p(F, T, {
                        handler: function(t) {
                            var e = this.store, i = !1, n = t.type.toLowerCase().replace("ms", ""), r = It[n], a = Et[t.pointerType] || t.pointerType, s = "touch" == a, o = b(e, t.pointerId, "pointerId");
                            r & vt && (0 === t.button || s) ? o < 0 && (e.push(t), o = e.length - 1) : r & (yt | mt) && (i = !0), 
                            o < 0 || (e[o] = t, this.callback(this.manager, r, {
                                pointers: e,
                                changedPointers: [ t ],
                                pointerType: a,
                                srcEvent: t
                            }), i && e.splice(o, 1));
                        }
                    });
                    var Ft = {
                        touchstart: vt,
                        touchmove: 2,
                        touchend: yt,
                        touchcancel: mt
                    }, Nt = "touchstart", Lt = "touchstart touchmove touchend touchcancel";
                    p(N, T, {
                        handler: function(t) {
                            var e = Ft[t.type];
                            if (e === vt && (this.started = !0), this.started) {
                                var i = function(t, e) {
                                    var i = C(t.touches), n = C(t.changedTouches);
                                    return e & (yt | mt) && (i = w(i.concat(n), "identifier", !0)), [ i, n ];
                                }.call(this, t, e);
                                e & (yt | mt) && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                                    pointers: i[0],
                                    changedPointers: i[1],
                                    pointerType: "touch",
                                    srcEvent: t
                                });
                            }
                        }
                    });
                    var Rt = {
                        touchstart: vt,
                        touchmove: 2,
                        touchend: yt,
                        touchcancel: mt
                    }, Xt = "touchstart touchmove touchend touchcancel";
                    p(L, T, {
                        handler: function(t) {
                            var e = Rt[t.type], i = function(t, e) {
                                var i = C(t.touches), n = this.targetIds;
                                if (e & (2 | vt) && 1 === i.length) return n[i[0].identifier] = !0, [ i, i ];
                                var r, a, s = C(t.changedTouches), o = [], c = this.target;
                                if (a = i.filter(function(t) {
                                    return x(t.target, c);
                                }), e === vt) for (r = 0; r < a.length; ) n[a[r].identifier] = !0, r++;
                                for (r = 0; r < s.length; ) n[s[r].identifier] && o.push(s[r]), e & (yt | mt) && delete n[s[r].identifier], 
                                r++;
                                return o.length ? [ w(a.concat(o), "identifier", !0), o ] : void 0;
                            }.call(this, t, e);
                            i && this.callback(this.manager, e, {
                                pointers: i[0],
                                changedPointers: i[1],
                                pointerType: "touch",
                                srcEvent: t
                            });
                        }
                    });
                    var zt = 2500;
                    p(R, T, {
                        handler: function(t, e, i) {
                            var n = "touch" == i.pointerType, r = "mouse" == i.pointerType;
                            if (!(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                                if (n) (function(t, e) {
                                    t & vt ? (this.primaryTouch = e.changedPointers[0].identifier, X.call(this, e)) : t & (yt | mt) && X.call(this, e);
                                }).call(this, e, i); else if (r && function(t) {
                                    for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                                        var r = this.lastTouches[n], a = Math.abs(e - r.x), s = Math.abs(i - r.y);
                                        if (a <= 25 && s <= 25) return !0;
                                    }
                                    return !1;
                                }.call(this, i)) return;
                                this.callback(t, e, i);
                            }
                        },
                        destroy: function() {
                            this.touch.destroy(), this.mouse.destroy();
                        }
                    });
                    var jt = P(rt.style, "touchAction"), Gt = jt !== c, Wt = "manipulation", Ht = "none", Vt = "pan-x", qt = "pan-y", Ut = function() {
                        if (!Gt) return !1;
                        var t = {}, e = a.CSS && a.CSS.supports;
                        return [ "auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none" ].forEach(function(i) {
                            t[i] = !e || a.CSS.supports("touch-action", i);
                        }), t;
                    }();
                    z.prototype = {
                        set: function(t) {
                            "compute" == t && (t = this.compute()), Gt && this.manager.element.style && Ut[t] && (this.manager.element.style[jt] = t), 
                            this.actions = t.toLowerCase().trim();
                        },
                        update: function() {
                            this.set(this.manager.options.touchAction);
                        },
                        compute: function() {
                            var t = [];
                            return u(this.manager.recognizers, function(e) {
                                d(e.options.enable, [ e ]) && (t = t.concat(e.getTouchAction()));
                            }), function(t) {
                                if (_(t, Ht)) return Ht;
                                var e = _(t, Vt), i = _(t, qt);
                                return e && i ? Ht : e || i ? e ? Vt : qt : _(t, Wt) ? Wt : "auto";
                            }(t.join(" "));
                        },
                        preventDefaults: function(t) {
                            var e = t.srcEvent, i = t.offsetDirection;
                            if (this.manager.session.prevented) e.preventDefault(); else {
                                var n = this.actions, r = _(n, Ht) && !Ut[Ht], a = _(n, qt) && !Ut[qt], s = _(n, Vt) && !Ut[Vt];
                                if (r) {
                                    var o = 1 === t.pointers.length, c = t.distance < 2, h = t.deltaTime < 250;
                                    if (o && c && h) return;
                                }
                                if (!s || !a) return r || a && i & wt || s && i & Pt ? this.preventSrc(e) : void 0;
                            }
                        },
                        preventSrc: function(t) {
                            this.manager.session.prevented = !0, t.preventDefault();
                        }
                    };
                    var Zt = 1, Jt = 2, $t = 4, Kt = 8, Qt = Kt, te = 16;
                    j.prototype = {
                        defaults: {},
                        set: function(t) {
                            return it(this.options, t), this.manager && this.manager.touchAction.update(), this;
                        },
                        recognizeWith: function(t) {
                            if (l(t, "recognizeWith", this)) return this;
                            var e = this.simultaneous;
                            return t = H(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this;
                        },
                        dropRecognizeWith: function(t) {
                            return l(t, "dropRecognizeWith", this) ? this : (t = H(t, this), delete this.simultaneous[t.id], 
                            this);
                        },
                        requireFailure: function(t) {
                            if (l(t, "requireFailure", this)) return this;
                            var e = this.requireFail;
                            return t = H(t, this), -1 === b(e, t) && (e.push(t), t.requireFailure(this)), this;
                        },
                        dropRequireFailure: function(t) {
                            if (l(t, "dropRequireFailure", this)) return this;
                            t = H(t, this);
                            var e = b(this.requireFail, t);
                            return e > -1 && this.requireFail.splice(e, 1), this;
                        },
                        hasRequireFailures: function() {
                            return this.requireFail.length > 0;
                        },
                        canRecognizeWith: function(t) {
                            return !!this.simultaneous[t.id];
                        },
                        emit: function(t) {
                            function e(e) {
                                i.manager.emit(e, t);
                            }
                            var i = this, n = this.state;
                            n < Kt && e(i.options.event + G(n)), e(i.options.event), t.additionalEvent && e(t.additionalEvent), 
                            n >= Kt && e(i.options.event + G(n));
                        },
                        tryEmit: function(t) {
                            if (this.canEmit()) return this.emit(t);
                            this.state = 32;
                        },
                        canEmit: function() {
                            for (var t = 0; t < this.requireFail.length; ) {
                                if (!(this.requireFail[t].state & (32 | Zt))) return !1;
                                t++;
                            }
                            return !0;
                        },
                        recognize: function(t) {
                            var e = it({}, t);
                            if (!d(this.options.enable, [ this, e ])) return this.reset(), void (this.state = 32);
                            this.state & (Qt | te | 32) && (this.state = Zt), this.state = this.process(e), 
                            this.state & (Jt | $t | Kt | te) && this.tryEmit(e);
                        },
                        process: function(t) {},
                        getTouchAction: function() {},
                        reset: function() {}
                    }, p(V, j, {
                        defaults: {
                            pointers: 1
                        },
                        attrTest: function(t) {
                            var e = this.options.pointers;
                            return 0 === e || t.pointers.length === e;
                        },
                        process: function(t) {
                            var e = this.state, i = t.eventType, n = e & (Jt | $t), r = this.attrTest(t);
                            return n && (i & mt || !r) ? e | te : n || r ? i & yt ? e | Kt : e & Jt ? e | $t : Jt : 32;
                        }
                    }), p(q, V, {
                        defaults: {
                            event: "pan",
                            threshold: 10,
                            pointers: 1,
                            direction: Mt
                        },
                        getTouchAction: function() {
                            var t = this.options.direction, e = [];
                            return t & wt && e.push(qt), t & Pt && e.push(Vt), e;
                        },
                        directionTest: function(t) {
                            var e = this.options, i = !0, n = t.distance, r = t.direction, a = t.deltaX, s = t.deltaY;
                            return r & e.direction || (e.direction & wt ? (r = 0 === a ? xt : a < 0 ? _t : St, 
                            i = a != this.pX, n = Math.abs(t.deltaX)) : (r = 0 === s ? xt : s < 0 ? bt : Ct, 
                            i = s != this.pY, n = Math.abs(t.deltaY))), t.direction = r, i && n > e.threshold && r & e.direction;
                        },
                        attrTest: function(t) {
                            return V.prototype.attrTest.call(this, t) && (this.state & Jt || !(this.state & Jt) && this.directionTest(t));
                        },
                        emit: function(t) {
                            this.pX = t.deltaX, this.pY = t.deltaY;
                            var e = W(t.direction);
                            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
                        }
                    }), p(U, V, {
                        defaults: {
                            event: "pinch",
                            threshold: 0,
                            pointers: 2
                        },
                        getTouchAction: function() {
                            return [ Ht ];
                        },
                        attrTest: function(t) {
                            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & Jt);
                        },
                        emit: function(t) {
                            if (1 !== t.scale) {
                                var e = t.scale < 1 ? "in" : "out";
                                t.additionalEvent = this.options.event + e;
                            }
                            this._super.emit.call(this, t);
                        }
                    }), p(Z, j, {
                        defaults: {
                            event: "press",
                            pointers: 1,
                            time: 251,
                            threshold: 9
                        },
                        getTouchAction: function() {
                            return [ "auto" ];
                        },
                        process: function(t) {
                            var e = this.options, i = t.pointers.length === e.pointers, n = t.distance < e.threshold, r = t.deltaTime > e.time;
                            if (this._input = t, !n || !i || t.eventType & (yt | mt) && !r) this.reset(); else if (t.eventType & vt) this.reset(), 
                            this._timer = h(function() {
                                this.state = Qt, this.tryEmit();
                            }, e.time, this); else if (t.eventType & yt) return Qt;
                            return 32;
                        },
                        reset: function() {
                            clearTimeout(this._timer);
                        },
                        emit: function(t) {
                            this.state === Qt && (t && t.eventType & yt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = ct(), 
                            this.manager.emit(this.options.event, this._input)));
                        }
                    }), p(J, V, {
                        defaults: {
                            event: "rotate",
                            threshold: 0,
                            pointers: 2
                        },
                        getTouchAction: function() {
                            return [ Ht ];
                        },
                        attrTest: function(t) {
                            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & Jt);
                        }
                    }), p($, V, {
                        defaults: {
                            event: "swipe",
                            threshold: 10,
                            velocity: .3,
                            direction: wt | Pt,
                            pointers: 1
                        },
                        getTouchAction: function() {
                            return q.prototype.getTouchAction.call(this);
                        },
                        attrTest: function(t) {
                            var e, i = this.options.direction;
                            return i & (wt | Pt) ? e = t.overallVelocity : i & wt ? e = t.overallVelocityX : i & Pt && (e = t.overallVelocityY), 
                            this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && ot(e) > this.options.velocity && t.eventType & yt;
                        },
                        emit: function(t) {
                            var e = W(t.offsetDirection);
                            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
                        }
                    }), p(K, j, {
                        defaults: {
                            event: "tap",
                            pointers: 1,
                            taps: 1,
                            interval: 300,
                            time: 250,
                            threshold: 9,
                            posThreshold: 10
                        },
                        getTouchAction: function() {
                            return [ Wt ];
                        },
                        process: function(t) {
                            var e = this.options, i = t.pointers.length === e.pointers, n = t.distance < e.threshold, r = t.deltaTime < e.time;
                            if (this.reset(), t.eventType & vt && 0 === this.count) return this.failTimeout();
                            if (n && r && i) {
                                if (t.eventType != yt) return this.failTimeout();
                                var a = !this.pTime || t.timeStamp - this.pTime < e.interval, s = !this.pCenter || E(this.pCenter, t.center) < e.posThreshold;
                                if (this.pTime = t.timeStamp, this.pCenter = t.center, s && a ? this.count += 1 : this.count = 1, 
                                this._input = t, 0 == this.count % e.taps) return this.hasRequireFailures() ? (this._timer = h(function() {
                                    this.state = Qt, this.tryEmit();
                                }, e.interval, this), Jt) : Qt;
                            }
                            return 32;
                        },
                        failTimeout: function() {
                            return this._timer = h(function() {
                                this.state = 32;
                            }, this.options.interval, this), 32;
                        },
                        reset: function() {
                            clearTimeout(this._timer);
                        },
                        emit: function() {
                            this.state == Qt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
                        }
                    }), Q.VERSION = "2.0.7", Q.defaults = {
                        domEvents: !1,
                        touchAction: "compute",
                        enable: !0,
                        inputTarget: null,
                        inputClass: null,
                        preset: [ [ J, {
                            enable: !1
                        } ], [ U, {
                            enable: !1
                        }, [ "rotate" ] ], [ $, {
                            direction: wt
                        } ], [ q, {
                            direction: wt
                        }, [ "swipe" ] ], [ K ], [ K, {
                            event: "doubletap",
                            taps: 2
                        }, [ "tap" ] ], [ Z ] ],
                        cssProps: {
                            userSelect: "none",
                            touchSelect: "none",
                            touchCallout: "none",
                            contentZooming: "none",
                            userDrag: "none",
                            tapHighlightColor: "rgba(0,0,0,0)"
                        }
                    }, tt.prototype = {
                        set: function(t) {
                            return it(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), 
                            this.input.target = t.inputTarget, this.input.init()), this;
                        },
                        stop: function(t) {
                            this.session.stopped = t ? 2 : 1;
                        },
                        recognize: function(t) {
                            var e = this.session;
                            if (!e.stopped) {
                                this.touchAction.preventDefaults(t);
                                var i, n = this.recognizers, r = e.curRecognizer;
                                (!r || r && r.state & Qt) && (r = e.curRecognizer = null);
                                for (var a = 0; a < n.length; ) i = n[a], 2 === e.stopped || r && i != r && !i.canRecognizeWith(r) ? i.reset() : i.recognize(t), 
                                !r && i.state & (Jt | $t | Kt) && (r = e.curRecognizer = i), a++;
                            }
                        },
                        get: function(t) {
                            if (t instanceof j) return t;
                            for (var e = this.recognizers, i = 0; i < e.length; i++) if (e[i].options.event == t) return e[i];
                            return null;
                        },
                        add: function(t) {
                            if (l(t, "add", this)) return this;
                            var e = this.get(t.options.event);
                            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), 
                            t;
                        },
                        remove: function(t) {
                            if (l(t, "remove", this)) return this;
                            if (t = this.get(t)) {
                                var e = this.recognizers, i = b(e, t);
                                -1 !== i && (e.splice(i, 1), this.touchAction.update());
                            }
                            return this;
                        },
                        on: function(t, e) {
                            if (t !== c && e !== c) {
                                var i = this.handlers;
                                return u(S(t), function(t) {
                                    i[t] = i[t] || [], i[t].push(e);
                                }), this;
                            }
                        },
                        off: function(t, e) {
                            if (t !== c) {
                                var i = this.handlers;
                                return u(S(t), function(t) {
                                    e ? i[t] && i[t].splice(b(i[t], e), 1) : delete i[t];
                                }), this;
                            }
                        },
                        emit: function(t, e) {
                            this.options.domEvents && function(t, e) {
                                var i = s.createEvent("Event");
                                i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i);
                            }(t, e);
                            var i = this.handlers[t] && this.handlers[t].slice();
                            if (i && i.length) {
                                e.type = t, e.preventDefault = function() {
                                    e.srcEvent.preventDefault();
                                };
                                for (var n = 0; n < i.length; ) i[n](e), n++;
                            }
                        },
                        destroy: function() {
                            this.element && et(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), 
                            this.element = null;
                        }
                    }, it(Q, {
                        INPUT_START: vt,
                        INPUT_MOVE: 2,
                        INPUT_END: yt,
                        INPUT_CANCEL: mt,
                        STATE_POSSIBLE: Zt,
                        STATE_BEGAN: Jt,
                        STATE_CHANGED: $t,
                        STATE_ENDED: Kt,
                        STATE_RECOGNIZED: Qt,
                        STATE_CANCELLED: te,
                        STATE_FAILED: 32,
                        DIRECTION_NONE: xt,
                        DIRECTION_LEFT: _t,
                        DIRECTION_RIGHT: St,
                        DIRECTION_UP: bt,
                        DIRECTION_DOWN: Ct,
                        DIRECTION_HORIZONTAL: wt,
                        DIRECTION_VERTICAL: Pt,
                        DIRECTION_ALL: Mt,
                        Manager: tt,
                        Input: T,
                        TouchAction: z,
                        TouchInput: L,
                        MouseInput: B,
                        PointerEventInput: F,
                        TouchMouseInput: R,
                        SingleTouchInput: N,
                        Recognizer: j,
                        AttrRecognizer: V,
                        Tap: K,
                        Pan: q,
                        Swipe: $,
                        Pinch: U,
                        Rotate: J,
                        Press: Z,
                        on: y,
                        off: m,
                        each: u,
                        merge: lt,
                        extend: ht,
                        assign: it,
                        inherit: p,
                        bindFn: g,
                        prefixed: P
                    }), (void 0 !== a ? a : "undefined" != typeof self ? self : {}).Hammer = Q, (r = function() {
                        return Q;
                    }.call(i, n, i, e)) !== c && (e.exports = r);
                }(window, document);
            }, function(t, e, i) {
                function n(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }
                var r = i(0), a = i(12), s = i(7), o = function(t) {
                    function e(e, i) {
                        var a, s = n(n(a = t.call(this, e, i) || this));
                        i.registerPlugins({
                            clearInner: function() {
                                s.halo && s.halo.remove(!0), s.selected = !1, s.selectedShape = null, s.lastShape = null, 
                                s.halo = null, s.defaultSelected = null;
                            }
                        });
                        var o = s.defaultSelected;
                        if (r.isObject(o)) {
                            var c = s._getSelectedShapeByData(o);
                            c && s._selectedShape(c), a.canvas.draw();
                        }
                        return a;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return e = r.mix({}, e, {
                            startEvent: "tap",
                            processEvent: null,
                            animate: !1,
                            offset: 1,
                            appendRadius: 8,
                            style: {
                                fillOpacity: .5
                            },
                            cancelable: !0,
                            defaultSelected: null
                        }), (r.isWx || r.isMy) && (e.startEvent = "touchstart", e.endEvent = "touchend"), 
                        e;
                    }, i._getSelectedShapeByData = function(t) {
                        var e = null, i = this.chart.get("geoms")[0], n = i.get("container").get("children");
                        return r.each(n, function(n) {
                            if (n.get("isShape") && n.get("className") === i.get("type")) {
                                var a = n.get("origin")._origin;
                                if (r.isObjectValueEqual(a, t)) return e = n, !1;
                            }
                        }), e;
                    }, i._selectedShape = function(t) {
                        var e = this.offset, i = this.style, n = this.appendRadius, a = this.chart;
                        this.lastShape = t;
                        var s = t._attrs.attrs, o = s.x, c = s.y, h = s.startAngle, l = s.endAngle, u = s.r, f = s.fill, p = a.get("frontPlot").addShape("sector", {
                            attrs: r.mix({
                                x: o,
                                y: c,
                                r: u + e + n,
                                r0: u + e,
                                fill: f,
                                startAngle: h,
                                endAngle: l
                            }, i)
                        });
                        this.halo = p;
                        var g = this.animate;
                        g && (!0 === g && (g = {
                            duration: 300
                        }), p.attr("r", u + e), p.animate().to(r.mix({
                            attrs: {
                                r: u + e + n
                            }
                        }, g)));
                    }, i.start = function(t) {
                        var e = this.chart;
                        "tap" === t.type && (t.clientX = t.center.x, t.clientY = t.center.y);
                        var i = r.createEvent(t, e), n = i.x, a = i.y;
                        this.halo && this.halo.remove(!0);
                        var s = e.getSnapRecords({
                            x: n,
                            y: a
                        });
                        if (!s.length) return this.selected = !1, void (this.selectedShape = null);
                        var o = s[0]._origin, c = this._getSelectedShapeByData(o), h = this.lastShape;
                        if (this.selectedShape = c, this.selected = !0, c === h) {
                            if (!this.cancelable) return;
                            this.halo && this.halo.remove(!0), this.lastShape = null, this.selected = !1;
                        } else this._selectedShape(c);
                        this.canvas.draw();
                    }, i.end = function(t) {
                        var e = this.selectedShape;
                        e && !e.get("destroyed") && (t.data = e.get("origin")._origin, t.shapeInfo = e.get("origin"), 
                        t.shape = e, t.selected = !!this.selected);
                    }, e;
                }(a);
                s.registerInteraction("pie-select", o), t.exports = o;
            }, function(t, e, i) {
                var n = i(0), r = i(21), a = i(12), s = i(7), o = function(t) {
                    function e(e, i) {
                        var r, a = (r = t.call(this, e, i) || this).defaultSelected;
                        if (n.isObject(a)) {
                            var s = r._selectShapesByData(a), o = s.selectedShape, c = s.unSelectedShapes;
                            o && r._selectShapes(o, c), r.selectedShape = o;
                        }
                        return r;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return e = n.mix({}, e, {
                            startEvent: "tap",
                            processEvent: null,
                            selectAxis: !0,
                            selectAxisStyle: {
                                fontWeight: "bold"
                            },
                            mode: "shape",
                            selectStyle: {
                                fillOpacity: 1
                            },
                            unSelectStyle: {
                                fillOpacity: .4
                            },
                            cancelable: !0,
                            defaultSelected: null
                        }), (n.isWx || n.isMy) && (e.startEvent = "touchstart", e.endEvent = "touchend"), 
                        e;
                    }, i._getIntervalShapes = function() {
                        var t = [];
                        return this.chart.get("geoms").forEach(function(e) {
                            if ("interval" === e.get("type")) {
                                var i = e.get("container");
                                t = t.concat(i.get("children"));
                            }
                        }), t;
                    }, i._resetShape = function(t) {
                        var e = t.get("_originAttrs");
                        e && (t._attrs.attrs = e, t.set("_originAttrs", null));
                    }, i._setEventData = function(t) {
                        var e = this.selectedShape;
                        e && !e.get("destroyed") && (t.data = e.get("origin")._origin, t.shapeInfo = e.get("origin"), 
                        t.shape = e, t.selected = !!e.get("_selected"));
                    }, i._selectShapesByData = function(t) {
                        var e = this._getIntervalShapes(), i = null, r = [];
                        return n.each(e, function(e) {
                            if (e.get("isShape") && "interval" === e.get("className")) {
                                var a = e.get("origin")._origin;
                                n.isObjectValueEqual(a, t) ? i = e : r.push(e);
                            }
                        }), {
                            selectedShape: i,
                            unSelectedShapes: r
                        };
                    }, i._selectShapes = function(t, e) {
                        var i = this.selectStyle, r = this.unSelectStyle, a = this.selectAxisStyle, s = this.chart;
                        if (!t.get("_originAttrs")) {
                            var o = Object.assign({}, t.attr());
                            t.set("_originAttrs", o);
                        }
                        if (t.attr(i), n.each(e, function(t) {
                            if (t.get("_originAttrs")) t.attr(t.get("_originAttrs")); else {
                                var e = Object.assign({}, t.attr());
                                t.set("_originAttrs", e);
                            }
                            t.set("_selected", !1), r && t.attr(r);
                        }), t.set("_selected", !0), this.selectAxis) {
                            this.selectedAxisShape && this._resetShape(this.selectedAxisShape);
                            var c, h = s.getXScale(), l = t.get("origin")._origin, u = s.get("axisController"), f = u.frontPlot, p = u.backPlot;
                            n.each(f.get("children").concat(p.get("children")), function(t) {
                                if (t.get("value") === h.scale(l[h.field])) return c = t, !1;
                            }), this.selectedAxisShape = c, c.set("_originAttrs", Object.assign({}, c.attr())), 
                            c.attr(a);
                        }
                        this.canvas.draw();
                    }, i.reset = function() {
                        var t = this;
                        if (t.selectedShape) {
                            var e = t._getIntervalShapes();
                            n.each(e, function(e) {
                                t._resetShape(e), e.set("_selected", !1);
                            }), t.selectedAxisShape && t._resetShape(t.selectedAxisShape), t.canvas.draw(), 
                            t.selectedShape = null, t.selectedAxisShape = null;
                        }
                    }, i.start = function(t) {
                        var e = this.chart;
                        "tap" === t.type && (t.clientX = t.center.x, t.clientY = t.center.y);
                        var i, a = n.createEvent(t, e), s = a.x, o = a.y, c = this.mode, h = this._getIntervalShapes(), l = [];
                        if ("shape" === c) {
                            var u = e.get("plotRange");
                            if (!r.isPointInPlot({
                                x: s,
                                y: o
                            }, u)) return void this.reset();
                            n.each(h, function(t) {
                                var e = t.getBBox();
                                s >= e.x && s <= e.x + e.width && o >= e.y && o <= e.height + e.y ? i = t : l.push(t);
                            });
                        } else if ("range" === c) {
                            var f = e.getSnapRecords({
                                x: s,
                                y: o
                            });
                            if (!f.length) return void this.reset();
                            var p = f[0]._origin, g = this._selectShapesByData(p);
                            i = g.selectedShape, l = g.unSelectedShapes;
                        }
                        if (i) if (this.selectedShape = i, i.get("_selected")) {
                            if (!this.cancelable) return void this._setEventData(t);
                            this.reset();
                        } else this._selectShapes(i, l); else this.reset();
                        this._setEventData(t);
                    }, i.end = function(t) {
                        this._setEventData(t);
                    }, e;
                }(a);
                s.registerInteraction("interval-select", o), t.exports = o;
            }, function(t, e, i) {
                function n(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }
                var r = i(0), a = i(12), s = i(7), o = i(30), c = i(49), h = i(31), l = function(t) {
                    function e(e, i) {
                        var a, s = n(n(a = t.call(this, e, i) || this)), l = s.hammer, u = s.threshold, f = s.velocity;
                        return l && l.get("swipe").set({
                            direction: 6,
                            threshold: u,
                            velocity: f
                        }), i.registerPlugins([ o, {
                            changeData: function() {
                                s.limitRange = {};
                            },
                            clear: function() {
                                s.limitRange = {};
                            }
                        } ]), s.mode = "x", r.mix(s, h, c), a;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return e = r.mix({}, e, {
                            startEvent: "touchstart",
                            processEvent: "swipe",
                            endEvent: "touchend",
                            currentDeltaX: null,
                            threshold: 10,
                            velocity: .3,
                            limitRange: {},
                            _timestamp: 0,
                            _panCumulativeDelta: 0,
                            speed: 5
                        });
                    }, i.process = function(t) {
                        this.currentDeltaX = 0, this._handleMove(t);
                    }, i.end = function() {
                        this.currentDeltaX = null, this._panCumulativeDelta = 0;
                    }, e;
                }(a);
                s.registerInteraction("swipe", l), t.exports = l;
            }, function(t, e, i) {
                function n(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }
                var r = i(0), a = i(12), s = i(7), o = i(30), c = i(49), h = i(50), l = i(31), u = function(t) {
                    function e(e, i) {
                        var a, s = n(n(a = t.call(this, e, i) || this)), u = s.hammer, f = s.panThreshold;
                        return u && u.get("pan").set({
                            threshold: f
                        }), i.registerPlugins([ o, {
                            changeData: function() {
                                s.limitRange = {};
                            },
                            clear: function() {
                                s.limitRange = {};
                            }
                        } ]), r.mix(n(n(a)), l, c, h), a._bindPress(), a;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return e = r.mix({}, e, {
                            startEvent: "panstart",
                            processEvent: "panmove",
                            endEvent: "panend",
                            resetEvent: "touchend",
                            mode: "x",
                            panThreshold: 10,
                            pressThreshold: 9,
                            pressTime: 251,
                            currentDeltaX: null,
                            currentDeltaY: null,
                            limitRange: {},
                            _timestamp: 0,
                            lastPoint: null,
                            _panCumulativeDelta: 0,
                            speed: 5
                        }), (r.isWx || r.isMy) && (e.startEvent = "touchstart", e.processEvent = "touchmove", 
                        e.endEvent = "touchend"), e;
                    }, i.start = function(t) {
                        this.pressed || (this.currentDeltaX = 0, this.currentDeltaY = 0, "touchstart" !== t.type && "touchStart" !== t.type || (this.lastPoint = t.touches[0]), 
                        this._handleMove(t));
                    }, i.process = function(t) {
                        this.pressed || this._handleMove(t);
                    }, i.end = function() {
                        this.pressed || (this.currentDeltaX = null, this.currentDeltaY = null, this.lastPoint = null, 
                        this._panCumulativeDelta = 0);
                    }, e;
                }(a);
                s.registerInteraction("pan", u), t.exports = u;
            }, function(t, e, i) {
                function n(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }
                var r = i(0), a = i(23), s = i(12), o = i(7), c = i(30), h = i(50), l = i(31), u = function(t) {
                    function e(e, i) {
                        var a, s = n(n(a = t.call(this, e, i) || this));
                        return s.hammer.get("pinch").set({
                            enable: !0
                        }), i.registerPlugins([ c, {
                            changeData: function() {
                                s.limitRange = {}, s.originTicks = null;
                            },
                            clear: function() {
                                s.limitRange = {}, s.originTicks = null;
                            }
                        } ]), r.mix(s, h, l), s._bindPress(), a;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var i = e.prototype;
                    return i.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return r.mix({}, e, {
                            startEvent: "pinchstart",
                            processEvent: "pinch",
                            endEvent: "pinchend",
                            resetEvent: "touchend",
                            pressThreshold: 9,
                            pressTime: 251,
                            mode: "x",
                            currentPinchScaling: null,
                            originValues: null,
                            minScale: null,
                            maxScale: null,
                            limitRange: {},
                            sensitivity: 1,
                            _pinchCumulativeDelta: 0,
                            _timestamp: 0
                        });
                    }, i.start = function() {
                        this.pressed || (this.currentPinchScaling = 1);
                    }, i.process = function(t) {
                        this.pressed || this._handlePinch(t);
                    }, i.end = function(t) {
                        this.pressed || (this._handlePinch(t), this.currentPinchScaling = null, this.pinchCumulativeDelta = 0);
                    }, i._handlePinch = function(t) {
                        var e, i = 1 / this.currentPinchScaling * t.scale, n = t.target.getBoundingClientRect(), r = {
                            x: t.center.x - n.left,
                            y: t.center.y - n.top
                        }, a = Math.abs(t.pointers[0].clientX - t.pointers[1].clientX), s = Math.abs(t.pointers[0].clientY - t.pointers[1].clientY), o = a / s;
                        e = o > .3 && o < 1.7 ? "xy" : a > s ? "x" : "y";
                        var c = this._timestamp, h = +new Date();
                        h - c > 16 && (this._doZoom(i, r, e), this._timestamp = h), this.currentPinchScaling = t.scale;
                    }, i._doZoom = function(t, e, i) {
                        var n, s = this, o = s.mode, c = s.chart, h = s.limitRange;
                        n = "xy" === o && void 0 !== i ? i : "xy";
                        var l = c.get("data");
                        if (r.directionEnabled(o, "x") && r.directionEnabled(n, "x")) {
                            var u = c.getXScale(), f = u.field;
                            h[f] || (h[f] = a.getLimitRange(l, u)), u.isCategory ? s._zoomCatScale(u, t, e) : u.isLinear && s._zoomLinearScale(u, t, e, "x");
                            var p = a.getColDef(c, f);
                            this.xRange = a.getFieldRange(p, h[f], u.type);
                        }
                        if (r.directionEnabled(o, "y") && r.directionEnabled(n, "y")) {
                            var g = c.getYScales();
                            r.each(g, function(i) {
                                var n = i.field;
                                h[n] || (h[n] = a.getLimitRange(l, i)), i.isLinear && s._zoomLinearScale(i, t, e, "y");
                            });
                            var d = a.getColDef(c, g[0].field);
                            this.yRange = a.getFieldRange(d, h[g[0].field], g[0].type);
                        }
                        c.repaint();
                    }, i._zoomLinearScale = function(t, e, i, n) {
                        var r = this.chart, a = t.min, s = t.max, o = t.field, c = s - a, h = this.limitRange, l = h[o].max - h[o].min, u = r.get("coord"), f = c * (e - 1);
                        if (this.minScale && e < 1) {
                            var p = l / this.minScale;
                            f = Math.max(c - p, f);
                        }
                        if (this.maxScale && e >= 1) {
                            var g = l / this.maxScale;
                            f = Math.min(c - g, f);
                        }
                        var d = u.invertPoint(i), v = "x" === n ? d.x : d.y, y = s - f * (1 - v), m = a + f * v;
                        this.updateLinearScale(o, m, y);
                    }, i._zoomCatScale = function(t, e, i) {
                        var n = this._pinchCumulativeDelta, r = this.sensitivity;
                        n = e > 1 ? n + 1 : n - 1, this._pinchCumulativeDelta = n;
                        var a = t.field, s = t.values, o = this.chart.get("coord");
                        this.originTicks || (this.originTicks = t.ticks);
                        var c = this.limitRange[a], h = c.length, l = this.minScale || 1, u = this.maxScale || 5, f = parseInt(h / u), p = parseInt(h / l), g = s.length;
                        if (n > 0 && g <= f) return null;
                        if (n < 0 && g >= p) return null;
                        var d = h - 1, v = s[0], y = s[g - 1], m = c.indexOf(v), x = c.indexOf(y), _ = (o.start.x + o.end.x) / 2, S = i.x;
                        if (Math.abs(n) > r) {
                            var b = Math.max(1, parseInt(g * Math.abs(e - 1)));
                            n < 0 ? (S >= _ ? m <= 0 ? x = Math.min(d, x + b) : m = Math.max(0, m - b) : S < _ && (x >= d ? m = Math.max(0, m - b) : x = Math.min(d, x + b)), 
                            this._pinchCumulativeDelta = 0) : n > 0 && (S >= _ ? m = m < x ? m = Math.min(x, m + b) : m : S < _ && (x = x > m ? x = Math.max(m, x - b) : x), 
                            this._pinchCumulativeDelta = 0);
                            var C = c.slice(m, x + 1);
                            this.updateCatScale(a, C, this.originTicks, c, m, x);
                        }
                    }, e;
                }(s);
                o.registerInteraction("pinch", u), t.exports = u;
            } ]);
        });
    }, function(t) {
        return i({}[t], t);
    }), i(1585748419424);
}();