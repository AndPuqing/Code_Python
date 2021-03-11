var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function() {
    var e = {}, n = function(t, n, i) {
        var r = {
            exports: {},
            _tempexports: {}
        };
        e[t] = {
            status: 0,
            func: n,
            req: i,
            m: r
        };
    }, i = function(n, i) {
        if (!e[n]) return require(i);
        if (!e[n].status) {
            var r = e[n].m;
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
            }), e[n].status = 1, e[n].func(e[n].req, r, r.exports);
        }
        return e[n].m.exports;
    };
    return n(1585748419314, function(t, e, n) {
        var i = t("./core");
        t("./geom/"), t("./geom/adjust/"), t("./coord/polar"), t("./component/axis/circle"), 
        t("./scale/time-cat"), t("./component/guide/arc"), t("./component/guide/html"), 
        t("./component/guide/line"), t("./component/guide/rect"), t("./component/guide/text"), 
        t("./component/guide/tag"), t("./component/guide/point");
        var r = t("./component/marker");
        i.Component = {
            Marker: r
        };
        var a = t("./plugin/tooltip"), o = t("./plugin/guide"), s = t("./plugin/legend"), u = t("./animation/detail");
        i.Animate = t("./animation/animate"), i.Chart.plugins.register([ a, s, o, u ]), 
        t("./interaction/new/index"), e.exports = i;
    }, function(t) {
        return i({
            "./core": 1585748419315,
            "./geom/": 1585748419369,
            "./geom/adjust/": 1585748419385,
            "./coord/polar": 1585748419389,
            "./component/axis/circle": 1585748419390,
            "./scale/time-cat": 1585748419391,
            "./component/guide/arc": 1585748419392,
            "./component/guide/html": 1585748419394,
            "./component/guide/line": 1585748419395,
            "./component/guide/rect": 1585748419396,
            "./component/guide/text": 1585748419397,
            "./component/guide/tag": 1585748419398,
            "./component/guide/point": 1585748419399,
            "./component/marker": 1585748419400,
            "./plugin/tooltip": 1585748419401,
            "./plugin/guide": 1585748419405,
            "./plugin/legend": 1585748419406,
            "./animation/detail": 1585748419407,
            "./animation/animate": 1585748419411,
            "./interaction/new/index": 1585748419415
        }[t], t);
    }), n(1585748419315, function(t, e, n) {
        var i = {}, r = t("./global");
        i.Global = r, i.version = r.version, i.Chart = t("./chart/chart"), i.Shape = t("./geom/shape/shape"), 
        i.G = t("./graphic/index"), i.Util = t("./util/common"), i.Helper = t("./util/helper"), 
        i.track = function() {
            return null;
        }, e.exports = i;
    }, function(t) {
        return i({
            "./global": 1585748419316,
            "./chart/chart": 1585748419321,
            "./geom/shape/shape": 1585748419339,
            "./graphic/index": 1585748419346,
            "./util/common": 1585748419318,
            "./util/helper": 1585748419368
        }[t], t);
    }), n(1585748419316, function(t, e, n) {
        var i = t("./theme"), r = t("./util/common"), a = {
            version: "3.6.3",
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
        }, a.setTheme(i), e.exports = a;
    }, function(t) {
        return i({
            "./theme": 1585748419317,
            "./util/common": 1585748419318
        }[t], t);
    }), n(1585748419317, function(t, e, n) {
        var i = t("./util/common"), r = {
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
                bottom: i.mix({}, r, {
                    grid: null
                }),
                left: i.mix({}, r, {
                    line: null
                }),
                right: i.mix({}, r, {
                    line: null
                }),
                circle: i.mix({}, r, {
                    line: null
                }),
                radius: i.mix({}, r, {
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
        e.exports = a;
    }, function(t) {
        return i({
            "./util/common": 1585748419318
        }[t], t);
    }), n(1585748419318, function(t, e, n) {
        var i = t("@babel/runtime/helpers/interopRequireWildcard");
        n.__esModule = !0;
        var r = {
            isObjectValueEqual: !0,
            parsePadding: !0,
            directionEnabled: !0,
            upperFirst: !0,
            lowerFirst: !0,
            isString: !0,
            isNumber: !0,
            isBoolean: !0,
            isFunction: !0,
            isDate: !0,
            isArray: !0,
            isNil: !0,
            isObject: !0,
            isPlainObject: !0,
            isEqual: !0,
            deepMix: !0,
            mix: !0,
            each: !0,
            uniq: !0,
            find: !0,
            Array: !0
        };
        n.isObjectValueEqual = function(t, e) {
            t = Object.assign({}, t), e = Object.assign({}, e);
            var n = Object.getOwnPropertyNames(t), i = Object.getOwnPropertyNames(e);
            if (n.length !== i.length) return !1;
            for (var r = 0, a = n.length; r < a; r++) {
                var o = n[r];
                if (t[o] !== e[o]) return !1;
            }
            return !0;
        }, n.parsePadding = function(t) {
            var e, n, i, r;
            return (0, a.isNumber)(t) || (0, a.isString)(t) ? e = i = r = n = t : (0, a.isArray)(t) && (e = t[0], 
            n = (0, a.isNil)(t[1]) ? t[0] : t[1], i = (0, a.isNil)(t[2]) ? t[0] : t[2], r = (0, 
            a.isNil)(t[3]) ? n : t[3]), [ e, n, i, r ];
        }, n.directionEnabled = function(t, e) {
            return void 0 === t || "string" == typeof t && -1 !== t.indexOf(e);
        }, n.Array = void 0;
        var a = t("@antv/util");
        n.upperFirst = a.upperFirst, n.lowerFirst = a.lowerFirst, n.isString = a.isString, 
        n.isNumber = a.isNumber, n.isBoolean = a.isBoolean, n.isFunction = a.isFunction, 
        n.isDate = a.isDate, n.isArray = a.isArray, n.isNil = a.isNil, n.isObject = a.isObject, 
        n.isPlainObject = a.isPlainObject, n.isEqual = a.isEqual, n.deepMix = a.deepMix, 
        n.mix = a.mix, n.each = a.each, n.uniq = a.uniq, n.find = a.find;
        var o = i(t("./array"));
        n.Array = o;
        var s = t("./dom");
        Object.keys(s).forEach(function(t) {
            "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(r, t) || (n[t] = s[t]));
        });
    }, function(t) {
        return i({
            "./array": 1585748419319,
            "./dom": 1585748419320
        }[t], t);
    }), n(1585748419319, function(t, e, n) {
        function i(t, e) {
            if (!e) return {
                0: t
            };
            for (var n = {}, i = 0, r = t.length; i < r; i++) {
                var a = t[i], o = function(t) {
                    for (var n = "_", i = 0, r = e.length; i < r; i++) n += t[e[i]] && t[e[i]].toString();
                    return n;
                }(a);
                n[o] ? n[o].push(a) : n[o] = [ a ];
            }
            return n;
        }
        n.__esModule = !0, n.merge = function(t) {
            for (var e = [], n = 0, i = t.length; n < i; n++) e = e.concat(t[n]);
            return e;
        }, n.values = function(t, e) {
            for (var n = [], i = {}, a = 0, o = t.length; a < o; a++) {
                var s = t[a][e];
                (0, r.isNil)(s) || ((0, r.isArray)(s) ? (0, r.each)(s, function(t) {
                    i[t] || (n.push(t), i[t] = !0);
                }) : i[s] || (n.push(s), i[s] = !0));
            }
            return n;
        }, n.firstValue = function(t, e) {
            for (var n = null, i = 0, a = t.length; i < a; i++) {
                var o = t[i][e];
                if (!(0, r.isNil)(o)) {
                    n = (0, r.isArray)(o) ? o[0] : o;
                    break;
                }
            }
            return n;
        }, n.group = function(t, e, n) {
            if (void 0 === n && (n = {}), !e) return [ t ];
            var a = i(t, e), o = [];
            if (1 === e.length && n[e[0]]) {
                var s = n[e[0]];
                (0, r.each)(s, function(t) {
                    t = "_" + t, o.push(a[t]);
                });
            } else for (var u in a) o.push(a[u]);
            return o;
        }, n.groupToMap = i, n.remove = function(t, e) {
            if (t) {
                var n = t.indexOf(e);
                -1 !== n && t.splice(n, 1);
            }
        }, n.getRange = function(t) {
            if (!t.length) return {
                min: 0,
                max: 0
            };
            var e = Math.max.apply(null, t);
            return {
                min: Math.min.apply(null, t),
                max: e
            };
        };
        var r = t("@antv/util");
    }, function(t) {
        return i({}[t], t);
    }), n(1585748419320, function(e, n, i) {
        function r(t, e) {
            return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
        }
        function a(t, e) {
            var n = e.get("el");
            if (!n) return t;
            var i = n.getBoundingClientRect(), a = i.top, o = i.right, s = i.bottom, u = i.left, c = parseFloat(r(n, "padding-left")), l = parseFloat(r(n, "padding-top")), h = o - u - c - parseFloat(r(n, "padding-right")), f = s - a - l - parseFloat(r(n, "padding-bottom")), p = e.get("pixelRatio");
            return {
                x: (t.x - u - c) / h * n.width / p,
                y: (t.y - a - l) / f * n.height / p
            };
        }
        function o(t, e, n, i, r) {
            return {
                type: t,
                chart: e,
                native: r || null,
                x: void 0 !== n ? n : null,
                y: void 0 !== i ? i : null
            };
        }
        i.__esModule = !0, i.isCanvasElement = function(e) {
            return !(!e || "object" !== (void 0 === e ? "undefined" : t(e)) || (1 !== e.nodeType || !e.nodeName) && !e.isCanvasElement);
        }, i.getPixelRatio = function() {
            return window && window.devicePixelRatio || 1;
        }, i.getStyle = r, i.getWidth = function(t) {
            var e = r(t, "width");
            return "auto" === e && (e = t.offsetWidth), parseFloat(e);
        }, i.getHeight = function(t) {
            var e = r(t, "height");
            return "auto" === e && (e = t.offsetHeight), parseFloat(e);
        }, i.getDomById = function(t) {
            return t ? document.getElementById(t) : null;
        }, i.getRelativePosition = a, i.addEventListener = function(t, e, n) {
            t.addEventListener(e, n, s);
        }, i.removeEventListener = function(t, e, n) {
            t.removeEventListener(e, n, s);
        }, i.createEvent = function(t, e) {
            var n, i = t.type;
            if (t.touches) {
                var r = t.changedTouches[0] || {}, s = r.x, u = r.y, c = r.clientX, l = r.clientY;
                if (s && u) return o(i, e, s, u, t);
                n = {
                    x: c,
                    y: l
                };
            } else n = {
                x: t.clientX,
                y: t.clientY
            };
            var h = a(n, e.get("canvas"));
            return o(i, e, h.x, h.y, t);
        }, i.measureText = function(t, e, n) {
            return n || (n = document.createElement("canvas").getContext("2d")), n.font = e || "12px sans-serif", 
            n.measureText(t);
        }, i.isBrowser = i.isNode = i.isMy = i.isWx = void 0;
        var s = !!function() {
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
        }, u = "object" === ("undefined" == typeof wx ? "undefined" : t(wx)) && "function" == typeof wx.getSystemInfoSync;
        i.isWx = u;
        var c = "object" === ("undefined" == typeof my ? "undefined" : t(my)) && "function" == typeof my.getSystemInfoSync;
        i.isMy = c;
        var l = void 0 !== n && void 0 !== n.exports;
        i.isNode = l;
        var h = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.sessionStorage;
        i.isBrowser = h;
    }, function(t) {
        return i({}[t], t);
    }), n(1585748419321, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, l.default)(t);
                if (r()) {
                    var i = (0, l.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, c.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        function a(t, e) {
            return t - e;
        }
        function o(t, e) {
            var n = !1;
            return g.each(t, function(t) {
                var i = [].concat(t.values), r = [].concat(e.values);
                t.type !== e.type || t.field !== e.field || i.sort(a).toString() !== r.sort(a).toString() || (n = !0);
            }), n;
        }
        var s = t("@babel/runtime/helpers/interopRequireDefault"), u = s(t("@babel/runtime/helpers/assertThisInitialized")), c = s(t("@babel/runtime/helpers/possibleConstructorReturn")), l = s(t("@babel/runtime/helpers/getPrototypeOf")), h = s(t("@babel/runtime/helpers/inheritsLoose")), f = t("./const"), p = t("../base"), d = t("./plot"), g = t("../util/common"), v = t("../coord/index"), m = t("../geom/base"), y = t("./controller/scale"), x = t("./controller/axis"), b = t("../global"), _ = t("../graphic/index").Canvas, S = t("../util/helper"), P = function(t) {
            function e(e) {
                var n;
                n = t.call(this, e) || this;
                var i = (0, u.default)(n);
                return g.each(m, function(t, e) {
                    var n = g.lowerFirst(e);
                    i[n] = function(e) {
                        var n = new t(e);
                        return i.addGeom(n), n;
                    };
                }), i._init(), n;
            }
            (0, h.default)(e, t);
            i(e);
            e.initPlugins = function() {
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
                            var n = e.indexOf(t);
                            -1 !== n && e.splice(n, 1);
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
                    notify: function(t, e, n) {
                        var i, r, a, o, s, u = this.descriptors(t), c = u.length;
                        for (i = 0; i < c; ++i) if (r = u[i], a = r.plugin, "function" == typeof (s = a[e]) && (o = [ t ].concat(n || []), 
                        !1 === s.apply(a, o))) return !1;
                        return !0;
                    },
                    descriptors: function(t) {
                        var e = t._plugins || (t._plugins = {});
                        if (e.id === this._cacheId) return e.descriptors;
                        var n = [], i = [];
                        return this._plugins.concat(t && t.get("plugins") || []).forEach(function(t) {
                            -1 === n.indexOf(t) && (n.push(t), i.push({
                                plugin: t
                            }));
                        }), e.descriptors = i, e.id = this._cacheId, i;
                    }
                };
            };
            var n = e.prototype;
            return n.getDefaultCfg = function() {
                return {
                    id: null,
                    rendered: !1,
                    padding: b.padding,
                    data: null,
                    scales: {},
                    geoms: [],
                    colDefs: null,
                    pixelRatio: b.pixelRatio,
                    filters: null,
                    appendPadding: b.appendPadding
                };
            }, n._syncYScales = function() {
                if (this.get("syncY")) {
                    var t = this.get("geoms"), e = [], n = [], i = [];
                    g.each(t, function(t) {
                        var r = t.getYScale();
                        r.isLinear && (e.push(r), n.push(r.min), i.push(r.max));
                    }), n = Math.min.apply(null, n), i = Math.max.apply(null, i), g.each(e, function(t) {
                        t.change({
                            min: n
                        }), t.change({
                            max: i
                        });
                    });
                }
            }, n._getFieldsForLegend = function() {
                var t = [], e = this.get("geoms");
                return g.each(e, function(e) {
                    var n = e.get("attrOptions").color;
                    if (n && n.field && g.isString(n.field)) {
                        var i = n.field.split("*");
                        g.each(i, function(e) {
                            -1 === t.indexOf(e) && t.push(e);
                        });
                    }
                }), t;
            }, n._getScaleData = function(t) {
                var e = this.get("data"), n = this.get("filteredData");
                return n.length && -1 === this._getFieldsForLegend().indexOf(t) && (e = n), e;
            }, n._adjustScale = function() {
                for (var t = this.get("scaleController"), e = this.get("geoms"), n = 0; n < e.length; n++) {
                    var i = e[n];
                    if ("interval" === i.get("type")) {
                        var r = i.getYScale();
                        t.adjustStartZero(r);
                    }
                }
            }, n._removeGeoms = function() {
                for (var t = this.get("geoms"); t.length > 0; ) t.shift().destroy();
            }, n._clearGeoms = function() {
                for (var t = this.get("geoms"), e = 0, n = t.length; e < n; e++) t[e].clear();
            }, n._clearInner = function() {
                this._clearGeoms(), e.plugins.notify(this, "clearInner"), this.get("axisController") && this.get("axisController").clear();
            }, n._initFilteredData = function() {
                var t = this.get("filters"), e = this.get("data") || [];
                t && (e = e.filter(function(e) {
                    var n = !0;
                    return g.each(t, function(t, i) {
                        if (t && !(n = t(e[i], e))) return !1;
                    }), n;
                })), this.set("filteredData", e);
            }, n._changeGeomsData = function() {
                for (var t = this.get("geoms"), e = this.get("filteredData"), n = 0, i = t.length; n < i; n++) t[n].changeData(e);
            }, n._initGeom = function(t) {
                var e = this.get("coord"), n = this.get("filteredData"), i = this.get("colDefs"), r = this.get("middlePlot");
                t.set("chart", this), t.set("container", r.addGroup()), t.set("data", n), t.set("coord", e), 
                t.set("colDefs", i), t.init(), this.emit(f.EVENT_AFTER_GEOM_INIT, t);
            }, n._initGeoms = function() {
                for (var t = this.get("geoms"), e = 0, n = t.length; e < n; e++) this._initGeom(t[e]);
            }, n._initCoord = function() {
                var t = this.get("plotRange"), e = g.mix({
                    type: "cartesian"
                }, this.get("coordCfg"), {
                    plot: t
                }), n = e.type, i = new (0, v[g.upperFirst(n)])(e);
                this.set("coord", i);
            }, n._initLayout = function() {
                var t = this.get("_padding");
                t || (t = this.get("margin") || this.get("padding"), t = g.parsePadding(t));
                var e = "auto" === t[0] ? 0 : t[0], n = "auto" === t[1] ? 0 : t[1], i = "auto" === t[2] ? 0 : t[2], r = {
                    x: "auto" === t[3] ? 0 : t[3],
                    y: e
                }, a = {
                    x: this.get("width") - n,
                    y: this.get("height") - i
                }, o = this.get("plot");
                if (o) o.reset(r, a); else {
                    var s = new d({
                        start: r,
                        end: a
                    });
                    this.set("plotRange", s), this.set("plot", s);
                }
            }, n._initCanvas = function() {
                var t = this;
                try {
                    var n = new _({
                        el: t.get("el") || t.get("id"),
                        context: t.get("context"),
                        pixelRatio: t.get("pixelRatio"),
                        width: t.get("width"),
                        height: t.get("height"),
                        fontFamily: b.fontFamily
                    });
                    t.set("canvas", n), t.set("el", n.get("el")), t.set("width", n.get("width")), t.set("height", n.get("height"));
                } catch (t) {
                    throw t;
                }
                e.plugins.notify(t, "afterCanvasInit");
            }, n._initLayers = function() {
                var t = this.get("canvas");
                this.set("backPlot", t.addGroup()), this.set("middlePlot", t.addGroup({
                    zIndex: 10
                })), this.set("frontPlot", t.addGroup({
                    zIndex: 20
                }));
            }, n._initEvents = function() {
                var t = this;
                this.on(f.EVENT_AFTER_DATA_CHANGE, function() {
                    t._initFilteredData(), t._changeGeomsData(), t._adjustScale();
                }), this.on(f.EVENT_AFTER_SIZE_CHANGE, function() {
                    t._initLayout();
                    var e = t.get("coord");
                    e && e.reset(t.get("plot"));
                });
            }, n._initScaleController = function() {
                var t = new y({
                    chart: this
                });
                this.set("colDefs", t.defs), this.set("scales", t.scales), this.set("scaleController", t);
            }, n._clearScaleController = function() {
                this.get("scaleController").clear();
            }, n._init = function() {
                var t = this;
                t._initCanvas(), t._initLayout(), t._initLayers(), t._initEvents(), t._initScaleController(), 
                t.set("axisController", new x({
                    frontPlot: t.get("frontPlot").addGroup({
                        className: "axisContainer"
                    }),
                    backPlot: t.get("backPlot").addGroup({
                        className: "axisContainer"
                    }),
                    chart: t
                })), e.plugins.notify(t, "init");
            }, n.init = function() {
                this._initFilteredData(), this._initCoord(), e.plugins.notify(this, "beforeGeomInit"), 
                this._initGeoms(), this._syncYScales(), this._adjustScale(), this.emit(f.EVENT_AFTER_INIT);
            }, n.source = function(t, e) {
                return this.set("data", t), e && this.scale(e), this;
            }, n.scale = function(t, e) {
                return this.get("scaleController").setFieldDef(t, e), this;
            }, n.axis = function(t, e) {
                var n = this.get("axisController");
                return t ? (n.axisCfg = n.axisCfg || {}, n.axisCfg[t] = e) : n.axisCfg = null, this;
            }, n.coord = function(t, e) {
                var n;
                return g.isObject(t) ? n = t : (n = e || {}).type = t || "cartesian", this.set("coordCfg", n), 
                this;
            }, n.filter = function(t, e) {
                var n = this.get("filters") || {};
                n[t] = e, this.set("filters", n), this.get("rendered") && this.emit(f.EVENT_AFTER_DATA_CHANGE, this.get("data"));
            }, n.render = function() {
                var t = this.get("rendered"), n = this.get("canvas"), i = this.get("geoms");
                t || (this.init(), this.set("rendered", !0)), this.emit(f.EVENT_BEFORE_RENDER), 
                e.plugins.notify(this, "beforeGeomDraw"), this._renderAxis();
                var r = this.get("middlePlot");
                if (this.get("limitInPlot") && !r.attr("clip")) {
                    var a = this.get("coord"), o = S.getClip(a);
                    o.set("canvas", r.get("canvas")), r.attr("clip", o);
                }
                for (var s = 0, u = i.length; s < u; s++) i[s].paint();
                return e.plugins.notify(this, "afterGeomDraw"), n.sort(), this.get("frontPlot").sort(), 
                e.plugins.notify(this, "beforeCanvasDraw"), n.draw(), this.emit(f.EVENT_AFTER_RENDER), 
                this;
            }, n.clear = function() {
                return e.plugins.notify(this, "clear"), this._clearInner(), this._removeGeoms(), 
                this._clearScaleController(), this.set("legendItems", null), this.set("filters", null), 
                this.set("isUpdate", !1), this.set("_padding", null), this.set("rendered", !1), 
                this.get("canvas").draw(), this;
            }, n.repaint = function() {
                this.get("rendered") && (this.set("isUpdate", !0), this.set("legendItems", null), 
                e.plugins.notify(this, "repaint"), this._clearInner(), this.render());
            }, n.changeData = function(t) {
                this.emit(f.EVENT_BEFORE_DATA_CHANGE, t), this.set("data", t), e.plugins.notify(this, "changeData"), 
                this.emit(f.EVENT_AFTER_DATA_CHANGE, t), this.set("_padding", null), this.repaint();
            }, n.changeSize = function(t, e) {
                return t ? this.set("width", t) : t = this.get("width"), e ? this.set("height", e) : e = this.get("height"), 
                this.get("canvas").changeSize(t, e), this.emit(f.EVENT_AFTER_SIZE_CHANGE, {
                    width: t,
                    height: e
                }), this.repaint(), this;
            }, n.destroy = function() {
                this.clear(), this.get("canvas").destroy(), e.plugins.notify(this, "afterCanvasDestroyed"), 
                this._interactions && g.each(this._interactions, function(t) {
                    t.destroy();
                }), t.prototype.destroy.call(this);
            }, n.getPosition = function(t) {
                var e = this, n = e.get("coord"), i = e.getXScale(), r = e.getYScales()[0], a = i.field, o = i.scale(t[a]), s = r.field, u = r.scale(t[s]);
                return n.convertPoint({
                    x: o,
                    y: u
                });
            }, n.getRecord = function(t) {
                var e = this, n = e.get("coord"), i = e.getXScale(), r = e.getYScales()[0], a = n.invertPoint(t), o = {};
                return o[i.field] = i.invert(a.x), o[r.field] = r.invert(a.y), o;
            }, n.getSnapRecords = function(t) {
                var e = this.get("geoms")[0], n = [];
                return e && (n = e.getSnapRecords(t)), n;
            }, n.createScale = function(t) {
                var e = this._getScaleData(t);
                return this.get("scaleController").createScale(t, e);
            }, n.addGeom = function(t) {
                var e = this.get("rendered");
                this.get("geoms").push(t), e && this._initGeom(t);
            }, n.getXScale = function() {
                return this.get("geoms")[0].getXScale();
            }, n.getYScales = function() {
                var t = this.get("geoms"), e = [];
                return g.each(t, function(t) {
                    var n = t.getYScale();
                    -1 === e.indexOf(n) && e.push(n);
                }), e;
            }, n.getLegendItems = function() {
                if (this.get("legendItems")) return this.get("legendItems");
                var t = {}, e = [], n = this.get("geoms");
                return g.each(n, function(n) {
                    var i = n.getAttr("color");
                    if (i) {
                        var r = i.getScale("color");
                        if (r.isCategory && !o(e, r)) {
                            e.push(r);
                            var a = r.field, s = r.getTicks(), u = [];
                            g.each(s, function(t) {
                                var e = t.text, n = t.value, a = r.invert(n), o = {
                                    fill: i.mapping(a).join("") || b.defaultColor,
                                    radius: 3,
                                    symbol: "circle",
                                    stroke: "#fff"
                                };
                                u.push({
                                    name: e,
                                    dataValue: a,
                                    checked: !0,
                                    marker: o
                                });
                            }), t[a] = u;
                        }
                    }
                }), this.set("legendItems", t), t;
            }, n.registerPlugins = function(t) {
                var n = this, i = n.get("plugins") || [];
                g.isArray(i) || (i = [ i ]), [].concat(t).forEach(function(t) {
                    -1 === i.indexOf(t) && (t.init && t.init(n), i.push(t));
                }), e.plugins._cacheId++, n.set("plugins", i);
            }, n._renderAxis = function() {
                var t = this.get("axisController"), n = this.getXScale(), i = this.getYScales(), r = this.get("coord");
                e.plugins.notify(this, "beforeRenderAxis"), t.createAxis(r, n, i);
            }, n._isAutoPadding = function() {
                if (this.get("_padding")) return !1;
                var t = this.get("padding");
                return g.isArray(t) ? -1 !== t.indexOf("auto") : "auto" === t;
            }, n._updateLayout = function(t) {
                var e = this.get("width"), n = this.get("height"), i = {
                    x: t[3],
                    y: t[0]
                }, r = {
                    x: e - t[1],
                    y: n - t[2]
                }, a = this.get("plot"), o = this.get("coord");
                a.reset(i, r), o.reset(a);
            }, e;
        }(p);
        P.plugins = P.initPlugins(), e.exports = P;
    }, function(t) {
        return i({
            "./const": 1585748419322,
            "../base": 1585748419323,
            "./plot": 1585748419325,
            "../util/common": 1585748419318,
            "../coord/index": 1585748419326,
            "../geom/base": 1585748419331,
            "./controller/scale": 1585748419340,
            "./controller/axis": 1585748419342,
            "../global": 1585748419316,
            "../graphic/index": 1585748419346,
            "../util/helper": 1585748419368
        }[t], t);
    }), n(1585748419322, function(t, e, n) {
        n.__esModule = !0, n.EVENT_AFTER_GEOM_INIT = n.EVENT_AFTER_SIZE_CHANGE = n.EVENT_AFTER_DATA_CHANGE = n.EVENT_BEFORE_DATA_CHANGE = n.EVENT_AFTER_RENDER = n.EVENT_BEFORE_RENDER = n.EVENT_AFTER_INIT = void 0;
        n.EVENT_AFTER_INIT = "afterinit";
        n.EVENT_BEFORE_RENDER = "beforerender";
        n.EVENT_AFTER_RENDER = "afterrender";
        n.EVENT_BEFORE_DATA_CHANGE = "beforedatachange";
        n.EVENT_AFTER_DATA_CHANGE = "afterdatachange";
        n.EVENT_AFTER_SIZE_CHANGE = "_aftersizechange";
        n.EVENT_AFTER_GEOM_INIT = "_aftergeominit";
    }, function(t) {
        return i({}[t], t);
    }), n(1585748419323, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = a(t("./graphic/event/emit")), l = t("./util/common"), h = function(t) {
            function e(e) {
                var n, i = {}, r = (n = t.call(this) || this).getDefaultCfg();
                return n._attrs = i, l.mix(i, r, e), n;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n.getDefaultCfg = function() {
                return {};
            }, n.get = function(t) {
                return this._attrs[t];
            }, n.set = function(t, e) {
                this._attrs[t] = e;
            }, n.destroy = function() {
                this._attrs = {}, this.destroyed = !0;
            }, e;
        }(c.default);
        e.exports = h;
    }, function(t) {
        return i({
            "./graphic/event/emit": 1585748419324,
            "./util/common": 1585748419318
        }[t], t);
    }), n(1585748419324, function(t, e, n) {
        n.__esModule = !0, n.default = void 0;
        var i = t("../../util/common"), r = function() {
            function t() {
                this.__events = {};
            }
            var e = t.prototype;
            return e.on = function(t, e) {
                if (t && e) {
                    var n = this.__events[t] || [];
                    n.push(e), this.__events[t] = n;
                }
            }, e.emit = function(t, e) {
                var n = this;
                if ((0, i.isObject)(t) && (t = (e = t) && e.type), t) {
                    var r = this.__events[t];
                    r && r.length && r.forEach(function(t) {
                        t.call(n, e);
                    });
                }
            }, e.off = function(t, e) {
                var n = this.__events, i = n[t];
                if (i && i.length) if (e) for (var r = 0, a = i.length; r < a; r++) i[r] === e && i.splice(r, 1); else delete n[t];
            }, t;
        }();
        n.default = r;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318
        }[t], t);
    }), n(1585748419325, function(t, e, n) {
        var i = t("../util/common"), r = function() {
            function t(t) {
                i.mix(this, t), this._init();
            }
            var e = t.prototype;
            return e._init = function() {
                var t = this, e = t.start, n = t.end, i = Math.min(e.x, n.x), r = Math.max(e.x, n.x), a = Math.min(e.y, n.y), o = Math.max(e.y, n.y);
                this.tl = {
                    x: i,
                    y: a
                }, this.tr = {
                    x: r,
                    y: a
                }, this.bl = {
                    x: i,
                    y: o
                }, this.br = {
                    x: r,
                    y: o
                }, this.width = r - i, this.height = o - a;
            }, e.reset = function(t, e) {
                this.start = t, this.end = e, this._init();
            }, e.isInRange = function(t, e) {
                i.isObject(t) && (e = t.y, t = t.x);
                var n = this.tl, r = this.br;
                return n.x <= t && t <= r.x && n.y <= e && e <= r.y;
            }, t;
        }();
        e.exports = r;
    }, function(t) {
        return i({
            "../util/common": 1585748419318
        }[t], t);
    }), n(1585748419326, function(t, e, n) {
        var i = t("./base");
        t("./cartesian"), e.exports = i;
    }, function(t) {
        return i({
            "./base": 1585748419327,
            "./cartesian": 1585748419330
        }[t], t);
    }), n(1585748419327, function(t, e, n) {
        var i = t("../util/common"), r = t("../graphic/util/matrix"), a = t("../graphic/util/vector2"), o = [ 1, 0, 0, 1, 0, 0 ], s = function() {
            function t(t) {
                this._initDefaultCfg(), i.mix(this, t);
                var e, n;
                this.plot ? (e = this.plot.bl, n = this.plot.tr, this.start = e, this.end = n) : (e = this.start, 
                n = this.end), this.init(e, n);
            }
            var e = t.prototype;
            return e._initDefaultCfg = function() {}, e._scale = function(t, e) {
                var n = this.matrix, i = this.center;
                r.translate(n, n, [ i.x, i.y ]), r.scale(n, n, [ t, e ]), r.translate(n, n, [ -i.x, -i.y ]);
            }, e.init = function(t, e) {
                this.matrix = [].concat(o), this.center = {
                    x: (e.x - t.x) / 2 + t.x,
                    y: (e.y - t.y) / 2 + t.y
                }, this.scale && this._scale(this.scale[0], this.scale[1]);
            }, e.convertPoint = function(t) {
                var e = this._convertPoint(t), n = [ e.x, e.y ];
                return a.transformMat2d(n, n, this.matrix), {
                    x: n[0],
                    y: n[1]
                };
            }, e.invertPoint = function(t) {
                return this._invertPoint(t);
            }, e._convertPoint = function(t) {
                return t;
            }, e._invertPoint = function(t) {
                return t;
            }, e.reset = function(t) {
                this.plot = t;
                var e = t.bl, n = t.tr;
                this.start = e, this.end = n, this.init(e, n);
            }, t;
        }();
        e.exports = s;
    }, function(t) {
        return i({
            "../util/common": 1585748419318,
            "../graphic/util/matrix": 1585748419328,
            "../graphic/util/vector2": 1585748419329
        }[t], t);
    }), n(1585748419328, function(t, e, n) {
        var i = {
            multiply: function(t, e) {
                return [ t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5] ];
            },
            scale: function(t, e, n) {
                return t[0] = e[0] * n[0], t[1] = e[1] * n[0], t[2] = e[2] * n[1], t[3] = e[3] * n[1], 
                t[4] = e[4], t[5] = e[5], t;
            },
            rotate: function(t, e, n) {
                var i = Math.cos(n), r = Math.sin(n), a = e[0] * i + e[2] * r, o = e[1] * i + e[3] * r, s = e[0] * -r + e[2] * i, u = e[1] * -r + e[3] * i;
                return t[0] = a, t[1] = o, t[2] = s, t[3] = u, t[4] = e[4], t[5] = e[5], t;
            },
            translate: function(t, e, n) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + e[0] * n[0] + e[2] * n[1], 
                t[5] = e[5] + e[1] * n[0] + e[3] * n[1], t;
            },
            transform: function(t, e) {
                for (var n = [].concat(t), r = 0, a = e.length; r < a; r++) {
                    var o = e[r];
                    switch (o[0]) {
                      case "t":
                        i.translate(n, n, [ o[1], o[2] ]);
                        break;

                      case "s":
                        i.scale(n, n, [ o[1], o[2] ]);
                        break;

                      case "r":
                        i.rotate(n, n, o[1]);
                    }
                }
                return n;
            }
        };
        e.exports = i;
    }, function(t) {
        return i({}[t], t);
    }), n(1585748419329, function(t, e, n) {
        e.exports = {
            create: function() {
                return [ 0, 0 ];
            },
            length: function(t) {
                var e = t[0], n = t[1];
                return Math.sqrt(e * e + n * n);
            },
            normalize: function(t, e) {
                var n = this.length(e);
                return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t;
            },
            add: function(t, e, n) {
                return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
            },
            sub: function(t, e, n) {
                return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
            },
            scale: function(t, e, n) {
                return t[0] = e[0] * n, t[1] = e[1] * n, t;
            },
            dot: function(t, e) {
                return t[0] * e[0] + t[1] * e[1];
            },
            direction: function(t, e) {
                return t[0] * e[1] - e[0] * t[1];
            },
            angle: function(t, e) {
                var n = this.dot(t, e) / (this.length(t) * this.length(e));
                return Math.acos(n);
            },
            angleTo: function(t, e, n) {
                var i = this.angle(t, e), r = this.direction(t, e) >= 0;
                return n ? r ? 2 * Math.PI - i : i : r ? i : 2 * Math.PI - i;
            },
            zero: function(t) {
                return 0 === t[0] && 0 === t[1];
            },
            distance: function(t, e) {
                var n = e[0] - t[0], i = e[1] - t[1];
                return Math.sqrt(n * n + i * i);
            },
            clone: function(t) {
                return [ t[0], t[1] ];
            },
            min: function(t, e, n) {
                return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t;
            },
            max: function(t, e, n) {
                return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t;
            },
            transformMat2d: function(t, e, n) {
                var i = e[0], r = e[1];
                return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t;
            }
        };
    }, function(t) {
        return i({}[t], t);
    }), n(1585748419330, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("./base"), l = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initDefaultCfg = function() {
                this.type = "cartesian", this.transposed = !1, this.isRect = !0;
            }, n.init = function(e, n) {
                t.prototype.init.call(this, e, n), this.x = {
                    start: e.x,
                    end: n.x
                }, this.y = {
                    start: e.y,
                    end: n.y
                };
            }, n._convertPoint = function(t) {
                var e = this, n = e.transposed, i = n ? "y" : "x", r = n ? "x" : "y", a = e.x, o = e.y;
                return {
                    x: a.start + (a.end - a.start) * t[i],
                    y: o.start + (o.end - o.start) * t[r]
                };
            }, n._invertPoint = function(t) {
                var e = this, n = e.transposed, i = n ? "y" : "x", r = n ? "x" : "y", a = e.x, o = e.y, s = {};
                return s[i] = (t.x - a.start) / (a.end - a.start), s[r] = (t.y - o.start) / (o.end - o.start), 
                s;
            }, e;
        }(c);
        c.Cartesian = l, c.Rect = l, e.exports = l;
    }, function(t) {
        return i({
            "./base": 1585748419327
        }[t], t);
    }), n(1585748419331, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, c.default)(t);
                if (r()) {
                    var i = (0, c.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, u.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        function a(t) {
            return f.isArray(t) ? t : f.isString(t) ? t.split("*") : [ t ];
        }
        var o = t("@babel/runtime/helpers/interopRequireWildcard"), s = t("@babel/runtime/helpers/interopRequireDefault"), u = s(t("@babel/runtime/helpers/possibleConstructorReturn")), c = s(t("@babel/runtime/helpers/getPrototypeOf")), l = s(t("@babel/runtime/helpers/inheritsLoose")), h = o(t("../attr/index")), f = t("../util/common"), p = t("../base"), d = [ "color", "size", "shape" ], g = t("../global"), v = t("./shape/shape"), m = t("@antv/adjust/lib/base"), y = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, l.default)(e, t);
            i(e);
            var n = e.prototype;
            return n.getDefaultCfg = function() {
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
                    connectNulls: !1,
                    ignoreEmptyGroup: !1
                };
            }, n.init = function() {
                var t = this;
                t._initAttrs(), t._processData();
            }, n._getGroupScales = function() {
                var t = this, e = [];
                return f.each(d, function(n) {
                    var i = t.getAttr(n);
                    if (i) {
                        var r = i.scales;
                        f.each(r, function(t) {
                            t && t.isCategory && -1 === e.indexOf(t) && e.push(t);
                        });
                    }
                }), e;
            }, n._groupData = function(t) {
                var e = this, n = e.get("colDefs"), i = e._getGroupScales();
                if (i.length) {
                    var r = {}, a = [];
                    return f.each(i, function(t) {
                        var e = t.field;
                        a.push(e), n && n[e] && n[e].values && (r[t.field] = n[e].values);
                    }), f.Array.group(t, a, r);
                }
                return [ t ];
            }, n._setAttrOptions = function(t, e) {
                this.get("attrOptions")[t] = e;
                var n = this.get("attrs");
                Object.keys(n).length && this._createAttr(t, e);
            }, n._createAttrOption = function(t, e, n, i) {
                var r = {};
                r.field = e, n ? f.isFunction(n) ? r.callback = n : r.values = n : r.values = i, 
                this._setAttrOptions(t, r);
            }, n._createAttr = function(t, e) {
                var n = this, i = n.get("attrs"), r = n.get("coord"), o = f.upperFirst(t), s = a(e.field);
                "position" === t && (e.coord = r);
                for (var u = [], c = 0, l = s.length; c < l; c++) {
                    var p = s[c], d = n._createScale(p);
                    u.push(d);
                }
                if ("position" === t) {
                    var g = u[1];
                    "polar" === r.type && r.transposed && n.hasAdjust("stack") && g.values.length && g.change({
                        nice: !1,
                        min: 0,
                        max: Math.max.apply(null, g.values)
                    });
                }
                e.scales = u;
                var v = new h[o](e);
                return i[t] = v, v;
            }, n._initAttrs = function() {
                var t = this.get("attrOptions");
                for (var e in t) t.hasOwnProperty(e) && this._createAttr(e, t[e]);
            }, n._createScale = function(t) {
                var e = this.get("scales"), n = e[t];
                return n || (n = this.get("chart").createScale(t), e[t] = n), n;
            }, n._processData = function() {
                var t = this, e = this.get("data"), n = [], i = this._groupData(e);
                if (this.get("ignoreEmptyGroup")) {
                    var r = this.getYScale();
                    i = i.filter(function(t) {
                        return t.some(function(t) {
                            return void 0 !== t[r.field];
                        });
                    });
                }
                for (var a = 0, o = i.length; a < o; a++) {
                    var s = i[a], u = t._saveOrigin(s);
                    this.hasAdjust("dodge") && t._numberic(u), n.push(u);
                }
                return t.get("adjust") && t._adjustData(n), t.get("sortable") && t._sort(n), t.set("dataArray", n), 
                n;
            }, n._saveOrigin = function(t) {
                for (var e = [], n = 0, i = t.length; n < i; n++) {
                    var r = t[n], a = {};
                    for (var o in r) a[o] = r[o];
                    a._origin = r, e.push(a);
                }
                return e;
            }, n._numberic = function(t) {
                for (var e = this.getAttr("position").scales, n = 0, i = t.length; n < i; n++) for (var r = t[n], a = Math.min(2, e.length), o = 0; o < a; o++) {
                    var s = e[o];
                    if (s.isCategory) {
                        var u = s.field;
                        r[u] = s.translate(r[u]);
                    }
                }
            }, n._adjustData = function(t) {
                var e = this, n = e.get("adjust");
                if (n) {
                    var i = f.upperFirst(n.type);
                    if (!m[i]) throw new Error("not support such adjust : " + n);
                    var r = e.getXScale(), a = e.getYScale(), o = f.mix({
                        xField: r.field,
                        yField: a.field
                    }, n);
                    new m[i](o).processAdjust(t), "Stack" === i && e._updateStackRange(a.field, a, t);
                }
            }, n._updateStackRange = function(t, e, n) {
                for (var i = f.Array.merge(n), r = e.min, a = e.max, o = 0, s = i.length; o < s; o++) {
                    var u = i[o], c = Math.min.apply(null, u[t]), l = Math.max.apply(null, u[t]);
                    c < r && (r = c), l > a && (a = l);
                }
                (r < e.min || a > e.max) && e.change({
                    min: r,
                    max: a
                });
            }, n._sort = function(t) {
                var e = this, n = e.getXScale(), i = n.field, r = n.type;
                "identity" !== r && n.values.length > 1 && f.each(t, function(t) {
                    t.sort(function(t, e) {
                        return "timeCat" === r ? n._toTimeStamp(t._origin[i]) - n._toTimeStamp(e._origin[i]) : n.translate(t._origin[i]) - n.translate(e._origin[i]);
                    });
                }), e.set("hasSorted", !0), e.set("dataArray", t);
            }, n.paint = function() {
                var t = this, e = t.get("dataArray"), n = [], i = t.getShapeFactory();
                i.setCoord(t.get("coord")), t._beforeMapping(e);
                for (var r = 0, a = e.length; r < a; r++) {
                    var o = e[r];
                    o.length && (o = t._mapping(o), n.push(o), t.draw(o, i));
                }
                t.set("dataArray", n);
            }, n.getShapeFactory = function() {
                var t = this.get("shapeFactory");
                if (!t) {
                    var e = this.get("shapeType");
                    t = v.getShapeFactory(e), this.set("shapeFactory", t);
                }
                return t;
            }, n._mapping = function(t) {
                var e = this, n = e.get("attrs"), i = e.getYScale().field, r = {};
                for (var a in n) if (n.hasOwnProperty(a)) for (var o = n[a], s = o.names, u = o.scales, c = 0, l = t.length; c < l; c++) {
                    var h = t[c];
                    if (h._originY = h[i], "position" === o.type) for (var p = e._getAttrValues(o, h), d = 0, g = p.length; d < g; d++) {
                        var v = p[d];
                        h[s[d]] = f.isArray(v) && 1 === v.length ? v[0] : v;
                    } else {
                        var m = s[0], y = "" + m + h[u[0].field], x = r[y];
                        x || (x = e._getAttrValues(o, h), r[y] = x), h[m] = x[0];
                    }
                }
                return t;
            }, n._getAttrValues = function(t, e) {
                for (var n = t.scales, i = [], r = 0, a = n.length; r < a; r++) {
                    var o = n[r], s = o.field;
                    "identity" === o.type ? i.push(o.value) : i.push(e[s]);
                }
                return t.mapping.apply(t, i);
            }, n.getAttrValue = function(t, e) {
                var n = this.getAttr(t), i = null;
                return n && (i = this._getAttrValues(n, e)[0]), i;
            }, n._beforeMapping = function(t) {
                var e = this;
                e.get("generatePoints") && e._generatePoints(t);
            }, n.isInCircle = function() {
                var t = this.get("coord");
                return t && t.isPolar;
            }, n.getCallbackCfg = function(t, e, n) {
                if (!t) return e;
                var i = {}, r = t.map(function(t) {
                    return n[t];
                });
                return f.each(e, function(t, e) {
                    f.isFunction(t) ? i[e] = t.apply(null, r) : i[e] = t;
                }), i;
            }, n.getDrawCfg = function(t) {
                var e = this, n = e.isInCircle(), i = {
                    origin: t,
                    x: t.x,
                    y: t.y,
                    color: t.color,
                    size: t.size,
                    shape: t.shape,
                    isInCircle: n,
                    opacity: t.opacity
                }, r = e.get("styleOptions");
                return r && r.style && (i.style = e.getCallbackCfg(r.fields, r.style, t._origin)), 
                e.get("generatePoints") && (i.points = t.points, i.nextPoints = t.nextPoints), n && (i.center = e.get("coord").center), 
                i;
            }, n.draw = function(t, e) {
                var n = this, i = n.get("container"), r = n.getYScale();
                f.each(t, function(t, a) {
                    if (!r || !f.isNil(t._origin[r.field])) {
                        t.index = a;
                        var o = n.getDrawCfg(t), s = t.shape;
                        n.drawShape(s, t, o, i, e);
                    }
                });
            }, n.drawShape = function(t, e, n, i, r) {
                var a = r.drawShape(t, n, i);
                a && f.each([].concat(a), function(t) {
                    t.set("origin", e);
                });
            }, n._generatePoints = function(t) {
                var e = this, n = e.getShapeFactory(), i = e.getAttr("shape");
                f.each(t, function(t) {
                    for (var r = 0, a = t.length; r < a; r++) {
                        var o = t[r], s = e.createShapePointsCfg(o), u = i ? e._getAttrValues(i, o) : null, c = n.getShapePoints(u, s);
                        o.points = c;
                    }
                }), f.each(t, function(e, n) {
                    var i = t[n + 1];
                    i && (e[0].nextPoints = i[0].points);
                });
            }, n.createShapePointsCfg = function(t) {
                var e, n = this.getXScale(), i = this.getYScale(), r = this._normalizeValues(t[n.field], n);
                return e = i ? this._normalizeValues(t[i.field], i) : t.y ? t.y : .1, {
                    x: r,
                    y: e,
                    y0: i ? i.scale(this.getYMinValue()) : void 0
                };
            }, n.getYMinValue = function() {
                var t = this.getYScale(), e = t.min, n = t.max;
                return this.get("startOnZero") ? n <= 0 && e <= 0 ? n : e >= 0 ? e : 0 : e;
            }, n._normalizeValues = function(t, e) {
                var n = [];
                if (f.isArray(t)) for (var i = 0, r = t.length; i < r; i++) {
                    var a = t[i];
                    n.push(e.scale(a));
                } else n = e.scale(t);
                return n;
            }, n.getAttr = function(t) {
                return this.get("attrs")[t];
            }, n.getXScale = function() {
                return this.getAttr("position").scales[0];
            }, n.getYScale = function() {
                return this.getAttr("position").scales[1];
            }, n.hasAdjust = function(t) {
                return this.get("adjust") && this.get("adjust").type === t;
            }, n._getSnap = function(t, e, n) {
                var i, r = 0, a = this.getYScale().field;
                if (this.hasAdjust("stack") && t.field === a) {
                    i = [], n.forEach(function(t) {
                        i.push(t._originY);
                    });
                    for (var o = i.length; r < o && !(i[0][0] > e); r++) {
                        if (i[i.length - 1][1] <= e) {
                            r = i.length - 1;
                            break;
                        }
                        if (i[r][0] <= e && i[r][1] > e) break;
                    }
                } else {
                    (i = t.values).sort(function(t, e) {
                        return t - e;
                    });
                    for (var s = i.length; r < s && !(s <= 1) && !((i[0] + i[1]) / 2 > e) && !((i[r - 1] + i[r]) / 2 <= e && (i[r + 1] + i[r]) / 2 > e); r++) if ((i[i.length - 2] + i[i.length - 1]) / 2 <= e) {
                        r = i.length - 1;
                        break;
                    }
                }
                return i[r];
            }, n.getSnapRecords = function(t) {
                var e = this, n = e.get("coord"), i = e.getXScale(), r = e.getYScale(), a = i.field, o = e.get("dataArray");
                this.get("hasSorted") || this._sort(o);
                var s = [], u = n.invertPoint(t), c = u.x;
                e.isInCircle() && !n.transposed && c > (1 + i.rangeMax()) / 2 && (c = i.rangeMin());
                var l = i.invert(c);
                i.isCategory || (l = e._getSnap(i, l));
                var h = [];
                if (o.forEach(function(t) {
                    t.forEach(function(t) {
                        var n = f.isNil(t._origin) ? t[a] : t._origin[a];
                        e._isEqual(n, l, i) && h.push(t);
                    });
                }), this.hasAdjust("stack") && n.isPolar && n.transposed) {
                    if (c >= 0 && c <= 1) {
                        var p = r.invert(u.y);
                        p = e._getSnap(r, p, h), h.forEach(function(t) {
                            (f.isArray(p) ? t._originY.toString() === p.toString() : t._originY === p) && s.push(t);
                        });
                    }
                } else s = h;
                return s;
            }, n._isEqual = function(t, e, n) {
                return "timeCat" === n.type ? n._toTimeStamp(t) === e : e === t;
            }, n.position = function(t) {
                return this._setAttrOptions("position", {
                    field: t
                }), this;
            }, n.color = function(t, e) {
                return this._createAttrOption("color", t, e, g.colors), this;
            }, n.size = function(t, e) {
                return this._createAttrOption("size", t, e, g.sizes), this;
            }, n.shape = function(t, e) {
                var n = this.get("type"), i = g.shapes[n] || [];
                return this._createAttrOption("shape", t, e, i), this;
            }, n.style = function(t, e) {
                var n = this.get("styleOptions");
                n || (n = {}, this.set("styleOptions", n)), f.isObject(t) && (e = t, t = null);
                var i;
                return t && (i = a(t)), n.fields = i, n.style = e, this;
            }, n.adjust = function(t) {
                return f.isString(t) && (t = {
                    type: t
                }), this.set("adjust", t), this;
            }, n.animate = function(t) {
                return this.set("animateCfg", t), this;
            }, n.changeData = function(t) {
                this.set("data", t), this.set("scales", {}), this.init();
            }, n.clearInner = function() {
                var t = this.get("container");
                t && t.clear();
            }, n.reset = function() {
                this.set("attrs", {}), this.set("attrOptions", {}), this.set("adjust", null), this.clearInner();
            }, n.clear = function() {
                this.clearInner();
            }, n.destroy = function() {
                this.clear(), t.prototype.destroy.call(this);
            }, n._display = function(t) {
                this.set("visible", t);
                var e = this.get("container"), n = e.get("canvas");
                e.set("visible", t), n.draw();
            }, n.show = function() {
                this._display(!0);
            }, n.hide = function() {
                this._display(!1);
            }, e;
        }(p);
        e.exports = y;
    }, function(t) {
        return i({
            "../attr/index": 1585748419332,
            "../util/common": 1585748419318,
            "../base": 1585748419323,
            "../global": 1585748419316,
            "./shape/shape": 1585748419339
        }[t], t);
    }), n(1585748419332, function(t, e, n) {
        var i = t("@babel/runtime/helpers/interopRequireDefault");
        n.__esModule = !0, n.Color = n.Size = n.Shape = n.Position = void 0;
        var r = i(t("./position"));
        n.Position = r.default;
        var a = i(t("./shape"));
        n.Shape = a.default;
        var o = i(t("./size"));
        n.Size = o.default;
        var s = i(t("./color"));
        n.Color = s.default;
    }, function(t) {
        return i({
            "./position": 1585748419333,
            "./shape": 1585748419335,
            "./size": 1585748419336,
            "./color": 1585748419337
        }[t], t);
    }), n(1585748419333, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault");
        n.__esModule = !0, n.default = void 0;
        var o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("@antv/util"), l = function(t) {
            function e(e) {
                var n;
                return n = t.call(this, e) || this, n.names = [ "x", "y" ], n.type = "position", 
                n;
            }
            (0, u.default)(e, t);
            i(e);
            return e.prototype.mapping = function(t, e) {
                var n, i, r, a = this.scales, o = this.coord, s = a[0], u = a[1];
                if ((0, c.isNil)(t) || (0, c.isNil)(e)) return [];
                if ((0, c.isArray)(e) && (0, c.isArray)(t)) {
                    n = [], i = [];
                    for (var l = 0, h = 0, f = t.length, p = e.length; l < f && h < p; l++, h++) r = o.convertPoint({
                        x: s.scale(t[l]),
                        y: u.scale(e[h])
                    }), n.push(r.x), i.push(r.y);
                } else if ((0, c.isArray)(e)) t = s.scale(t), i = [], (0, c.each)(e, function(e) {
                    e = u.scale(e), r = o.convertPoint({
                        x: t,
                        y: e
                    }), n && n !== r.x ? ((0, c.isArray)(n) || (n = [ n ]), n.push(r.x)) : n = r.x, 
                    i.push(r.y);
                }); else if ((0, c.isArray)(t)) e = u.scale(e), n = [], (0, c.each)(t, function(t) {
                    t = s.scale(t), r = o.convertPoint({
                        x: t,
                        y: e
                    }), i && i !== r.y ? ((0, c.isArray)(i) || (i = [ i ]), i.push(r.y)) : i = r.y, 
                    n.push(r.x);
                }); else {
                    t = s.scale(t), e = u.scale(e);
                    var d = o.convertPoint({
                        x: t,
                        y: e
                    });
                    n = d.x, i = d.y;
                }
                return [ n, i ];
            }, e;
        }(a(t("./base")).default);
        n.default = l;
    }, function(t) {
        return i({
            "./base": 1585748419334
        }[t], t);
    }), n(1585748419334, function(t, e, n) {
        function i(t, e) {
            return (0, r.isString)(e) ? e : t.invert(t.scale(e));
        }
        n.__esModule = !0, n.default = void 0;
        var r = t("@antv/util"), a = function() {
            function t(t) {
                var e = this;
                this.type = "base", this.name = null, this.method = null, this.values = [], this.scales = [], 
                this.linear = null;
                var n = null, i = this.callback;
                if (t.callback) {
                    var a = t.callback;
                    n = function() {
                        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        var s = a.apply(void 0, n);
                        return (0, r.isNil)(s) && (s = i.apply(e, n)), s;
                    };
                }
                (0, r.mix)(this, t), n && (0, r.mix)(this, {
                    callback: n
                });
            }
            var e = t.prototype;
            return e._getAttrValue = function(t, e) {
                var n = this.values;
                if (t.isCategory && !this.linear) return n[t.translate(e) % n.length];
                var i = t.scale(e);
                return this.getLinearValue(i);
            }, e.getLinearValue = function(t) {
                var e = this.values, n = e.length - 1, i = Math.floor(n * t), r = n * t - i, a = e[i];
                return a + ((i === n ? a : e[i + 1]) - a) * r;
            }, e.callback = function(t) {
                var e = this, n = e.scales[0];
                return "identity" === n.type ? n.value : e._getAttrValue(n, t);
            }, e.getNames = function() {
                for (var t = this.scales, e = this.names, n = Math.min(t.length, e.length), i = [], r = 0; r < n; r++) i.push(e[r]);
                return i;
            }, e.getFields = function() {
                var t = this.scales, e = [];
                return (0, r.each)(t, function(t) {
                    e.push(t.field);
                }), e;
            }, e.getScale = function(t) {
                return this.scales[this.names.indexOf(t)];
            }, e.mapping = function() {
                for (var t = this.scales, e = this.callback, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                var a = i;
                if (e) {
                    for (var o = 0, s = i.length; o < s; o++) i[o] = this._toOriginParam(i[o], t[o]);
                    a = e.apply(this, i);
                }
                return a = [].concat(a);
            }, e._toOriginParam = function(t, e) {
                var n = t;
                if (!e.isLinear) if ((0, r.isArray)(t)) {
                    n = [];
                    for (var a = 0, o = t.length; a < o; a++) n.push(i(e, t[a]));
                } else n = i(e, t);
                return n;
            }, t;
        }();
        n.default = a;
    }, function(t) {
        return i({}[t], t);
    }), n(1585748419335, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault");
        n.__esModule = !0, n.default = void 0;
        var o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = function(t) {
            function e(e) {
                var n;
                return n = t.call(this, e) || this, n.names = [ "shape" ], n.type = "shape", n.gradient = null, 
                n;
            }
            (0, u.default)(e, t);
            i(e);
            return e.prototype.getLinearValue = function(t) {
                var e = this.values;
                return e[Math.round((e.length - 1) * t)];
            }, e;
        }(a(t("./base")).default);
        n.default = c;
    }, function(t) {
        return i({
            "./base": 1585748419334
        }[t], t);
    }), n(1585748419336, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault");
        n.__esModule = !0, n.default = void 0;
        var o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = function(t) {
            function e(e) {
                var n;
                return n = t.call(this, e) || this, n.names = [ "size" ], n.type = "size", n.gradient = null, 
                n;
            }
            (0, u.default)(e, t);
            i(e);
            return e;
        }(a(t("./base")).default);
        n.default = c;
    }, function(t) {
        return i({
            "./base": 1585748419334
        }[t], t);
    }), n(1585748419337, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault");
        n.__esModule = !0, n.default = void 0;
        var o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("@antv/util"), l = a(t("./base")), h = a(t("./color-util")), f = function(t) {
            function e(e) {
                var n;
                return n = t.call(this, e) || this, n.names = [ "color" ], n.type = "color", n.gradient = null, 
                (0, c.isString)(n.values) && (n.linear = !0), n;
            }
            (0, u.default)(e, t);
            i(e);
            return e.prototype.getLinearValue = function(t) {
                var e = this.gradient;
                if (!e) {
                    var n = this.values;
                    e = h.default.gradient(n), this.gradient = e;
                }
                return e(t);
            }, e;
        }(l.default);
        n.default = f;
    }, function(t) {
        return i({
            "./base": 1585748419334,
            "./color-util": 1585748419338
        }[t], t);
    }), n(1585748419338, function(t, e, n) {
        function i(t, e, n, i) {
            return t[i] + (e[i] - t[i]) * n;
        }
        function r(t) {
            return "#" + a(t[0]) + a(t[1]) + a(t[2]);
        }
        function a(t) {
            return t = Math.round(t), 1 === (t = t.toString(16)).length && (t = "0" + t), t;
        }
        function o(t, e) {
            var n = t.length - 1, a = Math.floor(n * e), o = n * e - a, s = t[a], u = a === n ? s : t[a + 1];
            return r([ i(s, u, o, 0), i(s, u, o, 1), i(s, u, o, 2) ]);
        }
        function s(t) {
            var e = [];
            return e.push(parseInt(t.substr(1, 2), 16)), e.push(parseInt(t.substr(3, 2), 16)), 
            e.push(parseInt(t.substr(5, 2), 16)), e;
        }
        n.__esModule = !0, n.default = void 0;
        var u = t("@antv/util"), c = {
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
        }, l = {
            toHex: function(t) {
                if (c[t]) return c[t];
                if ("#" === t[0]) {
                    if (7 === t.length) return t;
                    var e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, n, i) {
                        return "#" + e + e + n + n + i + i;
                    });
                    return c[t] = e, e;
                }
                var n = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
                return n.shift(), n = r(n), c[t] = n, n;
            },
            hex2arr: s,
            gradient: function(t) {
                var e = [];
                return (0, u.isString)(t) && (t = t.split("-")), (0, u.each)(t, function(t) {
                    -1 === t.indexOf("#") && (t = l.toHex(t)), e.push(s(t));
                }), function(t) {
                    return o(e, t);
                };
            }
        }, h = l;
        n.default = h;
    }, function(t) {
        return i({}[t], t);
    }), n(1585748419339, function(t, e, n) {
        var i = t("../../util/common"), r = t("../../global"), a = {}, o = {
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
                var e = this, n = [];
                return t.forEach(function(t) {
                    n.push(e.parsePoint(t));
                }), n;
            }
        }, s = {
            defaultShapeType: null,
            setCoord: function(t) {
                this._coord = t;
            },
            getShape: function(t) {
                var e = this;
                i.isArray(t) && (t = t[0]);
                var n = e[t] || e[e.defaultShapeType];
                return n._coord = e._coord, n;
            },
            getShapePoints: function(t, e) {
                var n = this.getShape(t);
                return (n.getPoints || n.getShapePoints || this.getDefaultPoints)(e);
            },
            getDefaultPoints: function() {
                return [];
            },
            drawShape: function(t, e, n) {
                var i = this.getShape(t);
                return e.color || (e.color = r.colors[0]), i.draw(e, n);
            }
        };
        a.registerFactory = function(t, e) {
            var n = i.upperFirst(t), r = i.mix({}, s, e);
            return a[n] = r, r.name = t, r;
        }, a.registerShape = function(t, e, n) {
            var r = i.upperFirst(t), s = a[r], u = i.mix({}, o, n);
            return s[e] = u, u;
        }, a.registShape = a.registerShape, a.getShapeFactory = function(t) {
            var e = this;
            return t = t || "point", e[i.upperFirst(t)];
        }, e.exports = a;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318,
            "../../global": 1585748419316
        }[t], t);
    }), n(1585748419340, function(t, e, n) {
        function i(t) {
            if (!t.isPolar) return !1;
            var e = t.startAngle, n = t.endAngle;
            return !(!a.isNil(e) && !a.isNil(n) && n - e < 2 * Math.PI);
        }
        function r(t) {
            Object.keys(t).forEach(function(e) {
                delete t[e];
            });
        }
        var a = t("../../util/common"), o = t("../../global"), s = t("../../scale/"), u = {
            linear: "Linear",
            cat: "Cat",
            timeCat: "TimeCat",
            identity: "Identity"
        }, c = function() {
            function t(t) {
                this.defs = {}, this.scales = {}, a.mix(this, t);
            }
            var e = t.prototype;
            return e.setFieldDef = function(t, e) {
                var n = this.defs;
                a.isObject(t) ? a.mix(n, t) : n[t] = e, this.updateScales();
            }, e._getDef = function(t) {
                var e = this.defs, n = null;
                return (o.scales[t] || e[t]) && (n = a.mix({}, o.scales[t]), a.each(e[t], function(t, e) {
                    a.isNil(t) ? delete n[e] : n[e] = t;
                })), n;
            }, e._getDefaultType = function(t, e, n) {
                if (n && n.type) return n.type;
                var i = "linear", r = a.Array.firstValue(e, t);
                return a.isArray(r) && (r = r[0]), a.isString(r) && (i = "cat"), i;
            }, e._getScaleDef = function(t, e, n, i) {
                var r, o = {
                    field: e,
                    values: r = i && i.values ? i.values : a.Array.values(n, e)
                };
                if ("cat" !== t && "timeCat" !== t) {
                    if (!i || !i.min || !i.max) {
                        var s = a.Array.getRange(r), u = s.min, c = s.max;
                        o.min = u, o.max = c, o.nice = !0;
                    }
                } else o.isRounding = !1;
                return o;
            }, e._adjustRange = function(t, e) {
                var n = e.range, r = e.values;
                if ("linear" === t || n || !r) return e;
                var a = r.length;
                if (1 === a) e.range = [ .5, 1 ]; else {
                    var s = this.chart.get("coord"), u = o.widthRatio.multiplePie, c = 0;
                    i(s) ? s.transposed ? (c = 1 / a * u, e.range = [ c / 2, 1 - c / 2 ]) : e.range = [ 0, 1 - 1 / a ] : (c = 1 / a * 1 / 2, 
                    e.range = [ c, 1 - c ]);
                }
                return e;
            }, e._getScaleCfg = function(t, e) {
                var n = this, i = n._getDef(t);
                if (!e || !e.length) return i && i.type ? (i.field = t, {
                    type: u[i.type],
                    cfg: i
                }) : {
                    type: "Identity",
                    cfg: {
                        value: t,
                        field: t.toString(),
                        values: [ t ]
                    }
                };
                var r = e[0][t];
                if (null === r && (r = a.Array.firstValue(e, t)), a.isNumber(t) || a.isNil(r) && !i) return {
                    type: "Identity",
                    cfg: {
                        value: t,
                        field: t.toString(),
                        values: [ t ]
                    }
                };
                var o = n._getDefaultType(t, e, i), s = n._getScaleDef(o, t, e, i);
                return i && a.mix(s, i), s = this._adjustRange(o, s), {
                    type: u[o],
                    cfg: s
                };
            }, e.createScale = function(t, e) {
                var n = this.scales, i = this._getScaleCfg(t, e), r = i.type, a = i.cfg, o = n[t];
                if (o && u[o.type] === r) return o.change(a), o;
                var c = new s[r](a);
                return n[t] = c, c;
            }, e._updateScale = function(t) {
                var e = t.field, n = this.chart._getScaleData(e), i = this._getScaleCfg(e, n).cfg;
                t.change(i);
            }, e.updateScales = function() {
                var t = this, e = this.scales;
                a.each(e, function(e) {
                    t._updateScale(e);
                });
            }, e.adjustStartZero = function(t) {
                var e = this.defs, n = t.field, i = t.min, r = t.max;
                e[n] && e[n].min || (i > 0 ? t.change({
                    min: 0
                }) : r < 0 && t.change({
                    max: 0
                }));
            }, e.clear = function() {
                r(this.defs), r(this.scales), this.data = null;
            }, t;
        }();
        e.exports = c;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318,
            "../../global": 1585748419316,
            "../../scale/": 1585748419341
        }[t], t);
    }), n(1585748419341, function(t, e, n) {
        var i = t("@antv/scale/lib/base");
        t("@antv/scale/lib/linear"), t("@antv/scale/lib/identity"), t("@antv/scale/lib/category"), 
        e.exports = i;
    }, function(t) {
        return i({}[t], t);
    }), n(1585748419342, function(t, e, n) {
        function i(t) {
            var e = t.slice(0);
            if (e.length > 0) {
                var n = e[0], i = e[e.length - 1];
                0 !== n.value && e.unshift({
                    value: 0
                }), 1 !== i.value && e.push({
                    value: 1
                });
            }
            return e;
        }
        var r = t("../../util/common"), a = t("../../component/axis/"), o = t("../../global"), s = t("../../graphic/index").Shape, u = function() {
            function t(t) {
                this.axisCfg = {}, this.frontPlot = null, this.backPlot = null, this.axes = {}, 
                r.mix(this, t);
            }
            var e = t.prototype;
            return e._isHide = function(t) {
                var e = this.axisCfg;
                return !e || !1 === e[t];
            }, e._getLinePosition = function(t, e, n, i) {
                var r = "", a = t.field, o = this.axisCfg;
                return o[a] && o[a].position ? r = o[a].position : "x" === e ? r = i ? "left" : "bottom" : "y" === e && (r = n ? "right" : "left", 
                i && (r = "bottom")), r;
            }, e._getLineCfg = function(t, e, n) {
                var i, r, a = 1;
                return "x" === e ? (i = {
                    x: 0,
                    y: 0
                }, r = {
                    x: 1,
                    y: 0
                }) : "right" === n ? (i = {
                    x: 1,
                    y: 0
                }, r = {
                    x: 1,
                    y: 1
                }) : (i = {
                    x: 0,
                    y: 0
                }, r = {
                    x: 0,
                    y: 1
                }, a = -1), t.transposed && (a *= -1), {
                    offsetFactor: a,
                    start: t.convertPoint(i),
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
                var e, n;
                return t.transposed ? (e = {
                    x: 0,
                    y: 0
                }, n = {
                    x: 1,
                    y: 0
                }) : (e = {
                    x: 0,
                    y: 0
                }, n = {
                    x: 0,
                    y: 1
                }), {
                    offsetFactor: -1,
                    start: t.convertPoint(e),
                    end: t.convertPoint(n)
                };
            }, e._getAxisCfg = function(t, e, n, i, a) {
                var u = this, c = this.axisCfg, l = e.getTicks(), h = r.deepMix({
                    ticks: l,
                    frontContainer: this.frontPlot,
                    backContainer: this.backPlot
                }, a, c[e.field]), f = [], p = h.label, d = l.length, g = 0, v = 0, m = p;
                return r.each(l, function(t, e) {
                    if (r.isFunction(p)) {
                        var n = p(t.text, e, d);
                        m = n ? r.mix({}, o._defaultAxis.label, n) : null;
                    }
                    if (m) {
                        var i = {};
                        m.textAlign && (i.textAlign = m.textAlign), m.textBaseline && (i.textBaseline = m.textBaseline);
                        var a = new s.Text({
                            className: "axis-label",
                            attrs: r.mix({
                                x: 0,
                                y: 0,
                                text: t.text,
                                fontFamily: u.chart.get("canvas").get("fontFamily")
                            }, m),
                            value: t.value,
                            textStyle: i,
                            top: m.top,
                            context: u.chart.get("canvas").get("context")
                        });
                        f.push(a);
                        var c = a.getBBox(), l = c.width, h = c.height;
                        g = Math.max(g, l), v = Math.max(v, h);
                    }
                }), h.labels = f, h.maxWidth = g, h.maxHeight = v, h;
            }, e._createAxis = function(t, e, n, i, r) {
                void 0 === r && (r = "");
                var a, s, u, c = this, l = t.type, h = t.transposed;
                if ("cartesian" === l || "rect" === l) {
                    var f = c._getLinePosition(e, i, r, h);
                    (u = o.axis[f]).position = f, a = "Line", s = f;
                } else "x" === i && !h || "y" === i && h ? (u = o.axis.circle, a = "Circle", s = "circle") : (u = o.axis.radius, 
                a = "Line", s = "radius");
                var p = c._getAxisCfg(t, e, n, i, u);
                p.type = a, p.dimType = i, p.verticalScale = n, p.index = r, this.axes[s] = p;
            }, e.createAxis = function(t, e, n) {
                var o = this;
                e && !o._isHide(e.field) && o._createAxis(t, e, n[0], "x"), r.each(n, function(n, i) {
                    o._isHide(n.field) || o._createAxis(t, n, e, "y", i);
                });
                var s = this.axes, u = o.chart;
                if (u._isAutoPadding()) {
                    var c = r.parsePadding(u.get("padding")), l = r.parsePadding(u.get("appendPadding")), h = u.get("legendRange") || {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, f = [ "auto" === c[0] ? h.top + 2 * l[0] : c[0], "auto" === c[1] ? h.right + l[1] : c[1], "auto" === c[2] ? h.bottom + l[2] : c[2], "auto" === c[3] ? h.left + l[3] : c[3] ];
                    if (t.isPolar) {
                        var p = s.circle;
                        if (p) {
                            var d = p.maxHeight, g = p.maxWidth, v = p.labelOffset;
                            f[0] += d + v, f[1] += g + v, f[2] += d + v, f[3] += g + v;
                        }
                    } else {
                        if (s.right && "auto" === c[1]) {
                            var m = s.right, y = m.maxWidth, x = m.labelOffset;
                            f[1] += y + x;
                        }
                        if (s.left && "auto" === c[3]) {
                            var b = s.left, _ = b.maxWidth, S = b.labelOffset;
                            f[3] += _ + S;
                        }
                        if (s.bottom && "auto" === c[2]) {
                            var P = s.bottom, R = P.maxHeight, C = P.labelOffset;
                            f[2] += R + C;
                        }
                    }
                    u.set("_padding", f), u._updateLayout(f);
                }
                r.each(s, function(e) {
                    var n, s = e.type, u = e.grid, c = e.verticalScale, l = e.ticks, h = e.dimType, f = e.position, p = e.index;
                    if (t.isPolar ? "Line" === s ? n = o._getRadiusCfg(t) : "Circle" === s && (n = o._getCircleCfg(t)) : n = o._getLineCfg(t, h, f), 
                    u && c) {
                        var d = [], g = i(c.getTicks());
                        r.each(l, function(e) {
                            var n = [];
                            r.each(g, function(i) {
                                var r = "x" === h ? e.value : i.value, a = "x" === h ? i.value : e.value;
                                if (r >= 0 && r <= 1 && a >= 0 && a <= 1) {
                                    var o = t.convertPoint({
                                        x: r,
                                        y: a
                                    });
                                    n.push(o);
                                }
                            }), d.push({
                                points: n,
                                _id: "axis-" + h + p + "-grid-" + e.tickValue
                            });
                        }), e.gridPoints = d, t.isPolar && (e.center = t.center, e.startAngle = t.startAngle, 
                        e.endAngle = t.endAngle);
                    }
                    n._id = "axis-" + h, r.isNil(p) || (n._id = "axis-" + h + p), new a[s](r.mix(e, n));
                });
            }, e.clear = function() {
                this.axes = {}, this.frontPlot.clear(), this.backPlot.clear();
            }, t;
        }();
        e.exports = u;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318,
            "../../component/axis/": 1585748419343,
            "../../global": 1585748419316,
            "../../graphic/index": 1585748419346
        }[t], t);
    }), n(1585748419343, function(t, e, n) {
        var i = t("./abstract");
        t("./line"), e.exports = i;
    }, function(t) {
        return i({
            "./abstract": 1585748419344,
            "./line": 1585748419345
        }[t], t);
    }), n(1585748419344, function(t, e, n) {
        var i = t("../../util/common"), r = t("../../global"), a = t("../../graphic/util/vector2"), o = function() {
            function t(t) {
                this._initDefaultCfg(), i.mix(this, t), this.draw();
            }
            var e = t.prototype;
            return e._initDefaultCfg = function() {
                this.ticks = [], this.tickLine = {}, this.offsetFactor = 1, this.frontContainer = null, 
                this.backContainer = null, this.gridPoints = [];
            }, e.draw = function() {
                var t = this.line, e = this.tickLine, n = this.label, i = this.grid;
                i && this.drawGrid(i), e && this.drawTicks(e), t && this.drawLine(t), n && this.drawLabels();
            }, e.drawTicks = function(t) {
                var e = this, n = e.ticks, r = t.length, a = e.getContainer(t.top);
                i.each(n, function(n) {
                    var o = e.getOffsetPoint(n.value), s = e.getSidePoint(o, r);
                    a.addShape("line", {
                        className: "axis-tick",
                        attrs: i.mix({
                            x1: o.x,
                            y1: o.y,
                            x2: s.x,
                            y2: s.y
                        }, t)
                    })._id = e._id + "-ticks";
                });
            }, e.drawLabels = function() {
                var t = this, e = t.labelOffset, n = t.labels;
                i.each(n, function(n) {
                    var r = t.getContainer(n.get("top")), a = t.getOffsetPoint(n.get("value")), o = t.getSidePoint(a, e), s = o.x, u = o.y;
                    n.attr(i.mix({
                        x: s,
                        y: u
                    }, t.getTextAlignInfo(a, e), n.get("textStyle"))), n._id = t._id + "-" + n.attr("text"), 
                    r.add(n);
                });
            }, e.drawLine = function() {}, e.drawGrid = function(t) {
                var e = this, n = e.gridPoints, o = e.ticks, s = t, u = n.length;
                i.each(n, function(n, c) {
                    if (i.isFunction(t)) {
                        var l = o[c] || {}, h = t(l.text, c, u);
                        s = h ? i.mix({}, r._defaultAxis.grid, h) : null;
                    }
                    if (s) {
                        var f, p = s.type, d = n.points, g = e.getContainer(s.top);
                        if ("arc" === p) {
                            var v = e.center, m = e.startAngle, y = e.endAngle, x = a.length([ d[0].x - v.x, d[0].y - v.y ]);
                            f = g.addShape("Arc", {
                                className: "axis-grid",
                                attrs: i.mix({
                                    x: v.x,
                                    y: v.y,
                                    startAngle: m,
                                    endAngle: y,
                                    r: x
                                }, s)
                            });
                        } else f = g.addShape("Polyline", {
                            className: "axis-grid",
                            attrs: i.mix({
                                points: d
                            }, s)
                        });
                        f._id = n._id;
                    }
                });
            }, e.getOffsetPoint = function() {}, e.getAxisVector = function() {}, e.getOffsetVector = function(t, e) {
                var n = this, i = n.getAxisVector(t), r = a.normalize([], i), o = n.offsetFactor, s = [ -1 * r[1] * o, r[0] * o ];
                return a.scale([], s, e);
            }, e.getSidePoint = function(t, e) {
                var n = this.getOffsetVector(t, e);
                return {
                    x: t.x + n[0],
                    y: t.y + n[1]
                };
            }, e.getTextAlignInfo = function(t, e) {
                var n, i, r = this.getOffsetVector(t, e);
                return n = r[0] > 0 ? "left" : r[0] < 0 ? "right" : "center", i = r[1] > 0 ? "top" : r[1] < 0 ? "bottom" : "middle", 
                {
                    textAlign: n,
                    textBaseline: i
                };
            }, e.getContainer = function(t) {
                var e = this.frontContainer, n = this.backContainer;
                return t ? e : n;
            }, t;
        }();
        e.exports = o;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318,
            "../../global": 1585748419316,
            "../../graphic/util/vector2": 1585748419329
        }[t], t);
    }), n(1585748419345, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("../../util/common"), l = t("./abstract"), h = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initDefaultCfg = function() {
                t.prototype._initDefaultCfg.call(this), this.start = null, this.end = null;
            }, n.getOffsetPoint = function(t) {
                var e = this.start, n = this.end;
                return {
                    x: e.x + (n.x - e.x) * t,
                    y: e.y + (n.y - e.y) * t
                };
            }, n.getAxisVector = function() {
                var t = this.start, e = this.end;
                return [ e.x - t.x, e.y - t.y ];
            }, n.drawLine = function(t) {
                var e = this.getContainer(t.top), n = this.start, i = this.end;
                e.addShape("line", {
                    className: "axis-line",
                    attrs: c.mix({
                        x1: n.x,
                        y1: n.y,
                        x2: i.x,
                        y2: i.y
                    }, t)
                });
            }, e;
        }(l);
        l.Line = h, e.exports = h;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318,
            "./abstract": 1585748419344
        }[t], t);
    }), n(1585748419346, function(t, e, n) {
        var i = {
            Canvas: t("./canvas"),
            Group: t("./group"),
            Shape: t("./shape"),
            Matrix: t("./util/matrix"),
            Vector2: t("./util/vector2")
        };
        t("./shape/rect"), t("./shape/circle"), t("./shape/line"), t("./shape/polygon"), 
        t("./shape/polyline"), t("./shape/arc"), t("./shape/sector"), t("./shape/text"), 
        t("./shape/custom"), e.exports = i;
    }, function(t) {
        return i({
            "./canvas": 1585748419347,
            "./group": 1585748419354,
            "./shape": 1585748419351,
            "./util/matrix": 1585748419328,
            "./util/vector2": 1585748419329,
            "./shape/rect": 1585748419356,
            "./shape/circle": 1585748419357,
            "./shape/line": 1585748419358,
            "./shape/polygon": 1585748419360,
            "./shape/polyline": 1585748419361,
            "./shape/arc": 1585748419363,
            "./shape/sector": 1585748419364,
            "./shape/text": 1585748419365,
            "./shape/custom": 1585748419367
        }[t], t);
    }), n(1585748419347, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = a(t("./event/emit")), l = a(t("./event/controller")), h = a(t("./canvas-element")), f = t("../util/common"), p = t("./container"), d = t("./group"), g = t("./util/requestAnimationFrame").requestAnimationFrame, v = function(t) {
            function e(e) {
                var n;
                return n = t.call(this) || this, n._attrs = f.mix({
                    type: "canvas",
                    children: []
                }, e), n._initPixelRatio(), n._initCanvas(), n;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n.get = function(t) {
                return this._attrs[t];
            }, n.set = function(t, e) {
                this._attrs[t] = e;
            }, n._initPixelRatio = function() {
                this.get("pixelRatio") || this.set("pixelRatio", f.getPixelRatio());
            }, n.beforeDraw = function() {
                var t = this._attrs.context, e = this._attrs.el;
                t && t.clearRect && t.clearRect(0, 0, e.width, e.height);
            }, n._initCanvas = function() {
                var t = this, e = t.get("el"), n = t.get("context");
                if (!e && !n) throw new Error("Please specify the id, el or context of the chart!");
                var i;
                i = e ? f.isString(e) ? f.getDomById(e) : e : h.default.create(n), n && i && !i.getContext && (i.getContext = function() {
                    return n;
                });
                var r = t.get("width");
                r || (r = f.getWidth(i));
                var a = t.get("height");
                a || (a = f.getHeight(i)), t.set("canvas", this), t.set("el", i), t.set("context", n || i.getContext("2d")), 
                t.changeSize(r, a);
                var o = new l.default({
                    canvas: this,
                    el: i
                });
                t.set("eventController", o);
            }, n.changeSize = function(t, e) {
                var n = this.get("pixelRatio"), i = this.get("el");
                i.style && (i.style.width = t + "px", i.style.height = e + "px"), f.isCanvasElement(i) && (i.width = t * n, 
                i.height = e * n, 1 !== n && this.get("context").scale(n, n)), this.set("width", t), 
                this.set("height", e);
            }, n.getWidth = function() {
                var t = this.get("pixelRatio");
                return this.get("width") * t;
            }, n.getHeight = function() {
                var t = this.get("pixelRatio");
                return this.get("height") * t;
            }, n.getPointByClient = function(t, e) {
                var n = this.get("el"), i = n.getBoundingClientRect(), r = i.right - i.left, a = i.bottom - i.top;
                return {
                    x: (t - i.left) * (n.width / r),
                    y: (e - i.top) * (n.height / a)
                };
            }, n._beginDraw = function() {
                this._attrs.toDraw = !0;
            }, n._endDraw = function() {
                this._attrs.toDraw = !1;
            }, n.draw = function() {
                function t() {
                    e.set("animateHandler", g(function() {
                        e.set("animateHandler", void 0), e.get("toDraw") && t();
                    })), e.beforeDraw();
                    try {
                        for (var n = e._attrs.context, i = e._attrs.children, r = 0, a = i.length; r < a; r++) i[r].draw(n);
                        n.draw && n.draw();
                    } catch (t) {
                        console.warn("error in draw canvas, detail as:"), console.warn(t), e._endDraw();
                    }
                    e._endDraw();
                }
                var e = this;
                e.get("destroyed") || (e.get("animateHandler") ? this._beginDraw() : t());
            }, n.destroy = function() {
                if (!this.get("destroyed")) {
                    var t = this.get("el");
                    t.width = 0, t.height = 0, this.clear(), this._attrs = {}, this.set("destroyed", !0);
                }
            }, n.isDestroyed = function() {
                return this.get("destroyed");
            }, e;
        }(c.default);
        f.mix(v.prototype, p, {
            getGroupClass: function() {
                return d;
            }
        }), e.exports = v;
    }, function(t) {
        return i({
            "./event/emit": 1585748419324,
            "./event/controller": 1585748419348,
            "./canvas-element": 1585748419349,
            "../util/common": 1585748419318,
            "./container": 1585748419350,
            "./group": 1585748419354,
            "./util/requestAnimationFrame": 1585748419355
        }[t], t);
    }), n(1585748419348, function(t, e, n) {
        n.__esModule = !0, n.default = void 0;
        var i = t("../../util/dom"), r = t("../../util/common"), a = function(t, e) {
            var n = e.x - t.x, i = e.y - t.y;
            return Math.abs(n) > Math.abs(i) ? n > 0 ? "right" : "left" : i > 0 ? "down" : "up";
        }, o = function(t, e) {
            var n = Math.abs(e.x - t.x), i = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + i * i);
        }, s = function(t, e) {
            return {
                x: t.x + (e.x - t.x) / 2,
                y: t.y + (e.y - t.y) / 2
            };
        }, u = function(t, e) {
            if (t) {
                for (var n = [], a = t.length, o = 0; o < a; o++) {
                    var s = t[o], u = s.x, c = s.y, l = s.clientX, h = s.clientY, f = void 0;
                    f = (0, r.isNumber)(u) || (0, r.isNumber)(c) ? {
                        x: u,
                        y: c
                    } : (0, i.getRelativePosition)({
                        x: l,
                        y: h
                    }, e), n.push(f);
                }
                return n;
            }
        }, c = 250, l = function() {
            function t(t) {
                var e = this, n = t.canvas, i = t.el;
                this._click = function(t) {
                    e.emitEvent("click", t);
                }, this._start = function(t) {
                    var n = u(t.touches, e.canvas);
                    n && (t.points = n, e.emitEvent("touchstart", t), e.reset(), e.startTime = Date.now(), 
                    e.startPoints = n, n.length > 1 ? (e.startDistance = o(n[0], n[1]), e.center = s(n[0], n[1])) : e.pressTimeout = setTimeout(function() {
                        t.direction = "none", e.emitStart("press", t), e.emitEvent("press", t), e.eventType = "press";
                    }, c));
                }, this._move = function(t) {
                    var n = u(t.touches, e.canvas);
                    if (n) {
                        e.clearPressTimeout(), t.points = n, e.emitEvent("touchmove", t);
                        var i = e.startPoints;
                        if (i) if (n.length > 1) {
                            var r = e.startDistance, s = o(n[0], n[1]);
                            t.zoom = s / r, t.center = e.center, e.emitStart("pinch", t), e.emitEvent("pinch", t);
                        } else {
                            var c = n[0].x - i[0].x, l = n[0].y - i[0].y, h = e.direction || a(i[0], n[0]);
                            e.direction = h;
                            var f = e.getEventType(n);
                            t.direction = h, t.deltaX = c, t.deltaY = l, e.emitStart(f, t), e.emitEvent(f, t);
                            var p = e.lastMoveTime, d = Date.now();
                            d - p > 0 && (e.prevMoveTime = p, e.prevMovePoints = e.lastMovePoints, e.lastMoveTime = d, 
                            e.lastMovePoints = n);
                        }
                    }
                }, this._end = function(t) {
                    e.emitEnd(t), e.emitEvent("touchend", t);
                    var n = e.lastMoveTime;
                    if (Date.now() - n < 100) {
                        var i = n - (e.prevMoveTime || e.startTime);
                        if (i > 0) {
                            var r = e.prevMovePoints || e.startPoints, s = e.lastMovePoints, u = o(r[0], s[0]) / i;
                            u > .3 && (t.velocity = u, t.direction = a(r[0], s[0]), e.emitEvent("swipe", t));
                        }
                    }
                    e.reset();
                    var c = t.touches;
                    c && c.length > 0 && e._start(t);
                }, this._cancel = function(t) {
                    e.emitEvent("touchcancel", t), e.reset();
                }, this.canvas = n, this.delegateEvent(i), this.processEvent = {};
            }
            var e = t.prototype;
            return e.delegateEvent = function(t) {
                t.addEventListener("click", this._click), t.addEventListener("touchstart", this._start), 
                t.addEventListener("touchmove", this._move), t.addEventListener("touchend", this._end), 
                t.addEventListener("touchcancel", this._cancel);
            }, e.emitEvent = function(t, e) {
                this.canvas.emit(t, e);
            }, e.getEventType = function(t) {
                var e = this.eventType, n = this.canvas, i = this.startTime, r = this.startPoints;
                if (e) return e;
                var a, s = n.__events.pan;
                return a = s && s.length ? Date.now() - i > c && o(r[0], t[0]) < 10 ? "press" : "pan" : "press", 
                this.eventType = a, a;
            }, e.enable = function(t) {
                this.processEvent[t] = !0;
            }, e.isProcess = function(t) {
                return this.processEvent[t];
            }, e.emitStart = function(t, e) {
                this.isProcess(t) || (this.enable(t), this.emitEvent(t + "start", e));
            }, e.emitEnd = function(t) {
                var e = this, n = this.processEvent;
                Object.keys(n).forEach(function(i) {
                    e.emitEvent(i + "end", t), delete n[i];
                });
            }, e.clearPressTimeout = function() {
                this.pressTimeout && (clearTimeout(this.pressTimeout), this.pressTimeout = 0);
            }, e.reset = function() {
                this.clearPressTimeout(), this.startTime = 0, this.startPoints = null, this.startDistance = 0, 
                this.direction = null, this.eventType = null, this.pinch = !1, this.prevMoveTime = 0, 
                this.prevMovePoints = null, this.lastMoveTime = 0, this.lastMovePoints = null;
            }, t;
        }();
        n.default = l;
    }, function(t) {
        return i({
            "../../util/dom": 1585748419320,
            "../../util/common": 1585748419318
        }[t], t);
    }), n(1585748419349, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, u.default)(t);
                if (r()) {
                    var i = (0, u.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, s.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        function a(t) {
            if (!t) return !1;
            if (1 !== t.nodeType || !t.nodeName || "canvas" !== t.nodeName.toLowerCase()) return !1;
            var e = !1;
            try {
                t.addEventListener("eventTest", function() {
                    e = !0;
                }), t.dispatchEvent(new Event("eventTest"));
            } catch (t) {
                e = !1;
            }
            return e;
        }
        var o = t("@babel/runtime/helpers/interopRequireDefault");
        n.__esModule = !0, n.default = void 0;
        var s = o(t("@babel/runtime/helpers/possibleConstructorReturn")), u = o(t("@babel/runtime/helpers/getPrototypeOf")), c = o(t("@babel/runtime/helpers/inheritsLoose")), l = function(t) {
            function e(e) {
                var n;
                return n = t.call(this) || this, n.context = e, n.width = 0, n.height = 0, n.style = {}, 
                n.currentStyle = {}, n.isCanvasElement = !0, n;
            }
            (0, c.default)(e, t);
            i(e);
            var n = e.prototype;
            return n.getContext = function() {
                return this.context;
            }, n.getBoundingClientRect = function() {
                return {
                    top: 0,
                    right: this.width,
                    bottom: this.height,
                    left: 0
                };
            }, n.addEventListener = function(t, e) {
                this.on(t, e);
            }, n.removeEventListener = function(t, e) {
                this.off(t, e);
            }, n.dispatchEvent = function(t, e) {
                this.emit(t, e);
            }, e;
        }(o(t("./event/emit")).default), h = {
            create: function(t) {
                return t ? a(t.canvas) ? t.canvas : new l(t) : null;
            }
        };
        n.default = h;
    }, function(t) {
        return i({
            "./event/emit": 1585748419324
        }[t], t);
    }), n(1585748419350, function(t, e, n) {
        function i(t) {
            return function(e, n) {
                var i = t(e, n);
                return 0 === i ? e[s] - n[s] : i;
            };
        }
        var r = t("../util/common"), a = t("./shape"), o = {}, s = "_INDEX";
        e.exports = {
            getGroupClass: function() {},
            getChildren: function() {
                return this.get("children");
            },
            addShape: function(t, e) {
                void 0 === e && (e = {});
                var n = this.get("canvas"), i = o[t];
                i || (i = r.upperFirst(t), o[t] = i), e.canvas = n, "Text" === i && n && n.get("fontFamily") && (e.attrs.fontFamily = e.attrs.fontFamily || n.get("fontFamily"));
                var s = new a[i](e);
                return this.add(s), s;
            },
            addGroup: function(t) {
                var e = this.get("canvas"), n = this.getGroupClass();
                (t = r.mix({}, t)).canvas = e, t.parent = this;
                var i = new n(t);
                return this.add(i), i;
            },
            contain: function(t) {
                return this.get("children").indexOf(t) > -1;
            },
            sort: function() {
                for (var t = this.get("children"), e = 0, n = t.length; e < n; e++) t[e][s] = e;
                return t.sort(i(function(t, e) {
                    return t.get("zIndex") - e.get("zIndex");
                })), this;
            },
            clear: function() {
                for (var t = this.get("children"); 0 !== t.length; ) t[t.length - 1].remove(!0);
                return this;
            },
            add: function(t) {
                var e = this, n = e.get("children");
                r.isArray(t) || (t = [ t ]);
                for (var i = 0, a = t.length; i < a; i++) {
                    var o = t[i], s = o.get("parent");
                    if (s) {
                        var u = s.get("children");
                        r.Array.remove(u, o);
                    }
                    e._setEvn(o), n.push(o);
                }
                return e;
            },
            _setEvn: function(t) {
                var e = this;
                t._attrs.parent = e, t._attrs.context = e._attrs.context, t._attrs.canvas = e._attrs.canvas;
                var n = t._attrs.attrs.clip;
                if (n && (n.set("parent", e), n.set("context", e.get("context"))), t._attrs.isGroup) for (var i = t._attrs.children, r = 0, a = i.length; r < a; r++) t._setEvn(i[r]);
            }
        };
    }, function(t) {
        return i({
            "../util/common": 1585748419318,
            "./shape": 1585748419351
        }[t], t);
    }), n(1585748419351, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("../util/common"), l = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initProperties = function() {
                this._attrs = {
                    zIndex: 0,
                    visible: !0,
                    destroyed: !1,
                    isShape: !0,
                    attrs: {}
                };
            }, n.getType = function() {
                return this._attrs.type;
            }, n.drawInner = function(t) {
                var e = this, n = e.get("attrs");
                e.createPath(t);
                var i = t.globalAlpha;
                if (e.hasFill()) {
                    var r = n.fillOpacity;
                    c.isNil(r) || 1 === r ? t.fill() : (t.globalAlpha = r, t.fill(), t.globalAlpha = i);
                }
                if (e.hasStroke() && n.lineWidth > 0) {
                    var a = n.strokeOpacity;
                    c.isNil(a) || 1 === a || (t.globalAlpha = a), t.stroke();
                }
            }, n.getBBox = function() {
                var t = this._attrs.bbox;
                return t || ((t = this.calculateBox()) && (t.x = t.minX, t.y = t.minY, t.width = t.maxX - t.minX, 
                t.height = t.maxY - t.minY), this._attrs.bbox = t), t;
            }, n.calculateBox = function() {
                return null;
            }, n.createPath = function() {}, e;
        }(t("./element"));
        e.exports = l;
    }, function(t) {
        return i({
            "../util/common": 1585748419318,
            "./element": 1585748419352
        }[t], t);
    }), n(1585748419352, function(t, e, n) {
        function i(t) {
            return 1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3] && 0 === t[4] && 0 === t[5];
        }
        var r = t("../util/common"), a = t("./util/matrix"), o = t("./util/vector2"), s = t("./util/style-parse"), u = {
            stroke: "strokeStyle",
            fill: "fillStyle",
            opacity: "globalAlpha"
        }, c = [ "fillStyle", "font", "globalAlpha", "lineCap", "lineWidth", "lineJoin", "miterLimit", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "strokeStyle", "textAlign", "textBaseline", "lineDash", "shadow" ], l = [ "circle", "sector", "polygon", "rect", "polyline" ], h = function() {
            function t(t) {
                this._initProperties(), r.mix(this._attrs, t);
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
                this.attr(r.mix(this.getDefaultAttrs(), t));
            }, e.getDefaultAttrs = function() {
                return {};
            }, e._setAttr = function(t, e) {
                var n = this._attrs.attrs;
                if ("clip" === t) e = this._setAttrClip(e); else {
                    var i = u[t];
                    i && (n[i] = e);
                }
                n[t] = e;
            }, e._getAttr = function(t) {
                return this._attrs.attrs[t];
            }, e._setAttrClip = function(t) {
                return t && l.indexOf(t._attrs.type) > -1 ? (null === t.get("canvas") && (t = Object.assign({}, t)), 
                t.set("parent", this.get("parent")), t.set("context", this.get("context")), t) : null;
            }, e.attr = function(t, e) {
                var n = this;
                if (n.get("destroyed")) return null;
                var i = arguments.length;
                if (0 === i) return n._attrs.attrs;
                if (r.isObject(t)) {
                    this._attrs.bbox = null;
                    for (var a in t) n._setAttr(a, t[a]);
                    return n._afterAttrsSet && n._afterAttrsSet(), n;
                }
                return 2 === i ? (this._attrs.bbox = null, n._setAttr(t, e), n._afterAttrsSet && n._afterAttrsSet(), 
                n) : n._getAttr(t);
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
                if (!this._attrs.isGroup) for (var n in e) if (c.indexOf(n) > -1) {
                    var i = e[n];
                    "fillStyle" !== n && "strokeStyle" !== n || (i = s.parseStyle(i, this, t)), "lineDash" === n && t.setLineDash && r.isArray(i) ? t.setLineDash(i) : t[n] = i;
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
                    r.Array.remove(e, this);
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
                return this._attrs.attrs.matrix = a.transform(e, t), this;
            }, e.setTransform = function(t) {
                return this._attrs.attrs.matrix = [ 1, 0, 0, 1, 0, 0 ], this.transform(t);
            }, e.translate = function(t, e) {
                var n = this._attrs.attrs.matrix;
                a.translate(n, n, [ t, e ]);
            }, e.rotate = function(t) {
                var e = this._attrs.attrs.matrix;
                a.rotate(e, e, t);
            }, e.scale = function(t, e) {
                var n = this._attrs.attrs.matrix;
                a.scale(n, n, [ t, e ]);
            }, e.moveTo = function(t, e) {
                var n = this._attrs.x || 0, i = this._attrs.y || 0;
                this.translate(t - n, e - i), this.set("x", t), this.set("y", e);
            }, e.apply = function(t) {
                var e = this._attrs.attrs.matrix;
                return o.transformMat2d(t, t, e), this;
            }, e.resetTransform = function(t) {
                var e = this._attrs.attrs.matrix;
                i(e) || t.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
            }, e.isDestroyed = function() {
                return this.get("destroyed");
            }, t;
        }();
        e.exports = h;
    }, function(t) {
        return i({
            "../util/common": 1585748419318,
            "./util/matrix": 1585748419328,
            "./util/vector2": 1585748419329,
            "./util/style-parse": 1585748419353
        }[t], t);
    }), n(1585748419353, function(t, e, n) {
        function i(t, e) {
            return (t % e + e) % e;
        }
        function r(t, e) {
            s.each(t, function(t) {
                t = t.split(":"), e.addColorStop(Number(t[0]), t[1]);
            });
        }
        function a(t, e, n) {
            var a = t.split(" "), o = a[0].slice(2, a[0].length - 1);
            o = i(parseFloat(o) * Math.PI / 180, 2 * Math.PI);
            var s, u, c = a.slice(1), l = e.getBBox(), h = l.minX, f = l.minY, p = l.maxX, d = l.maxY;
            o >= 0 && o < .5 * Math.PI ? (s = {
                x: h,
                y: f
            }, u = {
                x: p,
                y: d
            }) : .5 * Math.PI <= o && o < Math.PI ? (s = {
                x: p,
                y: f
            }, u = {
                x: h,
                y: d
            }) : Math.PI <= o && o < 1.5 * Math.PI ? (s = {
                x: p,
                y: d
            }, u = {
                x: h,
                y: f
            }) : (s = {
                x: h,
                y: d
            }, u = {
                x: p,
                y: f
            });
            var g = Math.tan(o), v = g * g, m = (u.x - s.x + g * (u.y - s.y)) / (v + 1) + s.x, y = g * (u.x - s.x + g * (u.y - s.y)) / (v + 1) + s.y, x = n.createLinearGradient(s.x, s.y, m, y);
            return r(c, x), x;
        }
        function o(t, e, n) {
            var i = t.split(" "), a = i[0].slice(2, i[0].length - 1);
            a = a.split(",");
            var o = parseFloat(a[0]), s = parseFloat(a[1]), u = parseFloat(a[2]), c = i.slice(1);
            if (0 === u) return c[c.length - 1].split(":")[1];
            var l = e.getBBox(), h = l.width, f = l.height, p = l.minX, d = l.minY, g = Math.sqrt(h * h + f * f) / 2, v = n.createRadialGradient(p + h * o, d + f * s, u * g, p + h / 2, d + f / 2, g);
            return r(c, v), v;
        }
        var s = t("../../util/common");
        e.exports = {
            parseStyle: function(t, e, n) {
                if ("(" === t[1]) try {
                    var i = t[0];
                    if ("l" === i) return a(t, e, n);
                    if ("r" === i) return o(t, e, n);
                } catch (t) {
                    console.error("error in parsing gradient string, please check if there are any extra whitespaces."), 
                    console.error(t);
                }
                return t;
            }
        };
    }, function(t) {
        return i({
            "../../util/common": 1585748419318
        }[t], t);
    }), n(1585748419354, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("../util/common"), l = t("./element"), h = t("./container"), f = t("./util/vector2"), p = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initProperties = function() {
                this._attrs = {
                    zIndex: 0,
                    visible: !0,
                    destroyed: !1,
                    isGroup: !0,
                    children: []
                };
            }, n.drawInner = function(t) {
                for (var e = this.get("children"), n = 0, i = e.length; n < i; n++) e[n].draw(t);
                return this;
            }, n.getBBox = function() {
                for (var t = 1 / 0, e = -1 / 0, n = 1 / 0, i = -1 / 0, r = this.get("children"), a = 0, o = r.length; a < o; a++) {
                    var s = r[a];
                    if (s.get("visible")) {
                        var u = s.getBBox();
                        if (!u) continue;
                        var c = [ u.minX, u.minY ], l = [ u.minX, u.maxY ], h = [ u.maxX, u.minY ], p = [ u.maxX, u.maxY ], d = s.attr("matrix");
                        f.transformMat2d(c, c, d), f.transformMat2d(l, l, d), f.transformMat2d(h, h, d), 
                        f.transformMat2d(p, p, d), t = Math.min(c[0], l[0], h[0], p[0], t), e = Math.max(c[0], l[0], h[0], p[0], e), 
                        n = Math.min(c[1], l[1], h[1], p[1], n), i = Math.max(c[1], l[1], h[1], p[1], i);
                    }
                }
                return {
                    minX: t,
                    minY: n,
                    maxX: e,
                    maxY: i,
                    x: t,
                    y: n,
                    width: e - t,
                    height: i - n
                };
            }, n.destroy = function() {
                this.get("destroyed") || (this.clear(), t.prototype.destroy.call(this));
            }, e;
        }(l);
        c.mix(p.prototype, h, {
            getGroupClass: function() {
                return p;
            }
        }), e.exports = p;
    }, function(t) {
        return i({
            "../util/common": 1585748419318,
            "./element": 1585748419352,
            "./container": 1585748419350,
            "./util/vector2": 1585748419329
        }[t], t);
    }), n(1585748419355, function(e, n, i) {
        n.exports = {
            requestAnimationFrame: "object" === ("undefined" == typeof window ? "undefined" : t(window)) && window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
                return setTimeout(t, 16);
            }
        };
    }, function(t) {
        return i({}[t], t);
    }), n(1585748419356, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("../../util/common"), l = t("../shape"), h = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initProperties = function() {
                t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                this._attrs.type = "rect";
            }, n.getDefaultAttrs = function() {
                return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    radius: 0,
                    lineWidth: 0
                };
            }, n.createPath = function(t) {
                var e = this.get("attrs"), n = e.x, i = e.y, r = e.width, a = e.height;
                t.beginPath();
                var o = e.radius;
                o && r * a ? (o = c.parsePadding(o), t.moveTo(n + o[0], i), t.lineTo(n + r - o[1], i), 
                t.arc(n + r - o[1], i + o[1], o[1], -Math.PI / 2, 0, !1), t.lineTo(n + r, i + a - o[2]), 
                t.arc(n + r - o[2], i + a - o[2], o[2], 0, Math.PI / 2, !1), t.lineTo(n + o[3], i + a), 
                t.arc(n + o[3], i + a - o[3], o[3], Math.PI / 2, Math.PI, !1), t.lineTo(n, i + o[0]), 
                t.arc(n + o[0], i + o[0], o[0], Math.PI, 3 * Math.PI / 2, !1), t.closePath()) : t.rect(n, i, r, a);
            }, n.calculateBox = function() {
                var t = this.get("attrs"), e = t.x, n = t.y;
                return {
                    minX: e,
                    minY: n,
                    maxX: e + t.width,
                    maxY: n + t.height
                };
            }, e;
        }(l);
        l.Rect = h, e.exports = h;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318,
            "../shape": 1585748419351
        }[t], t);
    }), n(1585748419357, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("../shape"), l = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initProperties = function() {
                t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                this._attrs.type = "circle";
            }, n.getDefaultAttrs = function() {
                return {
                    x: 0,
                    y: 0,
                    r: 0,
                    lineWidth: 0
                };
            }, n.createPath = function(t) {
                var e = this.get("attrs"), n = e.x, i = e.y, r = e.r;
                t.beginPath(), t.arc(n, i, r, 0, 2 * Math.PI, !1), t.closePath();
            }, n.calculateBox = function() {
                var t = this.get("attrs"), e = t.x, n = t.y, i = t.r;
                return {
                    minX: e - i,
                    maxX: e + i,
                    minY: n - i,
                    maxY: n + i
                };
            }, e;
        }(c);
        c.Circle = l, e.exports = l;
    }, function(t) {
        return i({
            "../shape": 1585748419351
        }[t], t);
    }), n(1585748419358, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("../shape"), l = t("../util/bbox"), h = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initProperties = function() {
                t.prototype._initProperties.call(this), this._attrs.canStroke = !0, this._attrs.type = "line";
            }, n.getDefaultAttrs = function() {
                return {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0,
                    lineWidth: 1
                };
            }, n.createPath = function(t) {
                var e = this.get("attrs"), n = e.x1, i = e.y1, r = e.x2, a = e.y2;
                t.beginPath(), t.moveTo(n, i), t.lineTo(r, a);
            }, n.calculateBox = function() {
                var t = this.get("attrs"), e = t.x1, n = t.y1, i = t.x2, r = t.y2, a = t.lineWidth;
                return l.getBBoxFromLine(e, n, i, r, a);
            }, e;
        }(c);
        c.Line = h, e.exports = h;
    }, function(t) {
        return i({
            "../shape": 1585748419351,
            "../util/bbox": 1585748419359
        }[t], t);
    }), n(1585748419359, function(t, e, n) {
        function i(t, e, n, i, a) {
            return {
                x: r(a, t.x, e.x, n.x, i.x),
                y: r(a, t.y, e.y, n.y, i.y)
            };
        }
        function r(t, e, n, i, r) {
            var a = t * t;
            return e + (3 * -e + t * (3 * e - e * t)) * t + (3 * n + t * (-6 * n + 3 * n * t)) * t + (3 * i - 3 * i * t) * a + r * (a * t);
        }
        function a(t) {
            for (var e = 1 / 0, n = -1 / 0, r = 1 / 0, a = -1 / 0, o = {
                x: t[0],
                y: t[1]
            }, s = {
                x: t[2],
                y: t[3]
            }, u = {
                x: t[4],
                y: t[5]
            }, c = {
                x: t[6],
                y: t[7]
            }, l = 0; l < 100; l++) {
                var h = i(o, s, u, c, l / 100);
                h.x < e && (e = h.x), h.x > n && (n = h.x), h.y < r && (r = h.y), h.y > a && (a = h.y);
            }
            return {
                minX: e,
                minY: r,
                maxX: n,
                maxY: a
            };
        }
        var o = t("./vector2"), s = o.create(), u = o.create(), c = o.create();
        e.exports = {
            getBBoxFromPoints: function(t, e) {
                if (0 !== t.length) {
                    for (var n = t[0], i = n.x, r = n.x, a = n.y, o = n.y, s = t.length, u = 1; u < s; u++) n = t[u], 
                    i = Math.min(i, n.x), r = Math.max(r, n.x), a = Math.min(a, n.y), o = Math.max(o, n.y);
                    return e = e / 2 || 0, {
                        minX: i - e,
                        minY: a - e,
                        maxX: r + e,
                        maxY: o + e
                    };
                }
            },
            getBBoxFromLine: function(t, e, n, i, r) {
                return r = r / 2 || 0, {
                    minX: Math.min(t, n) - r,
                    minY: Math.min(e, i) - r,
                    maxX: Math.max(t, n) + r,
                    maxY: Math.max(e, i) + r
                };
            },
            getBBoxFromArc: function(t, e, n, i, r, a) {
                var l = Math.abs(i - r);
                if (l % (2 * Math.PI) < 1e-4 && l > 1e-4) return {
                    minX: t - n,
                    minY: e - n,
                    maxX: t + n,
                    maxY: e + n
                };
                s[0] = Math.cos(i) * n + t, s[1] = Math.sin(i) * n + e, u[0] = Math.cos(r) * n + t, 
                u[1] = Math.sin(r) * n + e;
                var h = [ 0, 0 ], f = [ 0, 0 ];
                if (o.min(h, s, u), o.max(f, s, u), (i %= 2 * Math.PI) < 0 && (i += 2 * Math.PI), 
                (r %= 2 * Math.PI) < 0 && (r += 2 * Math.PI), i > r && !a ? r += 2 * Math.PI : i < r && a && (i += 2 * Math.PI), 
                a) {
                    var p = r;
                    r = i, i = p;
                }
                for (var d = 0; d < r; d += Math.PI / 2) d > i && (c[0] = Math.cos(d) * n + t, c[1] = Math.sin(d) * n + e, 
                o.min(h, c, h), o.max(f, c, f));
                return {
                    minX: h[0],
                    minY: h[1],
                    maxX: f[0],
                    maxY: f[1]
                };
            },
            getBBoxFromBezierGroup: function(t, e) {
                for (var n = 1 / 0, i = -1 / 0, r = 1 / 0, o = -1 / 0, s = 0, u = t.length; s < u; s++) {
                    var c = a(t[s]);
                    c.minX < n && (n = c.minX), c.maxX > i && (i = c.maxX), c.minY < r && (r = c.minY), 
                    c.maxY > o && (o = c.maxY);
                }
                return e = e / 2 || 0, {
                    minX: n - e,
                    minY: r - e,
                    maxX: i + e,
                    maxY: o + e
                };
            }
        };
    }, function(t) {
        return i({
            "./vector2": 1585748419329
        }[t], t);
    }), n(1585748419360, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("../shape"), l = t("../util/bbox"), h = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initProperties = function() {
                t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                this._attrs.type = "polygon";
            }, n.getDefaultAttrs = function() {
                return {
                    points: null,
                    lineWidth: 0
                };
            }, n.createPath = function(t) {
                var e = this.get("attrs").points;
                t.beginPath();
                for (var n = 0, i = e.length; n < i; n++) {
                    var r = e[n];
                    0 === n ? t.moveTo(r.x, r.y) : t.lineTo(r.x, r.y);
                }
                t.closePath();
            }, n.calculateBox = function() {
                var t = this.get("attrs").points;
                return l.getBBoxFromPoints(t);
            }, e;
        }(c);
        c.Polygon = h, e.exports = h;
    }, function(t) {
        return i({
            "../shape": 1585748419351,
            "../util/bbox": 1585748419359
        }[t], t);
    }), n(1585748419361, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, u.default)(t);
                if (r()) {
                    var i = (0, u.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, s.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        function a(t) {
            for (var e = [], n = 0, i = t.length; n < i; n++) {
                var r = t[n];
                isNaN(r.x) || isNaN(r.y) || e.push(r);
            }
            return e;
        }
        var o = t("@babel/runtime/helpers/interopRequireDefault"), s = o(t("@babel/runtime/helpers/possibleConstructorReturn")), u = o(t("@babel/runtime/helpers/getPrototypeOf")), c = o(t("@babel/runtime/helpers/inheritsLoose")), l = t("../shape"), h = t("../util/smooth"), f = t("../util/bbox"), p = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, c.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initProperties = function() {
                t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                this._attrs.type = "polyline";
            }, n.getDefaultAttrs = function() {
                return {
                    points: null,
                    lineWidth: 1,
                    smooth: !1
                };
            }, n.createPath = function(t) {
                var e = this.get("attrs"), n = e.points, i = e.smooth, r = a(n);
                if (t.beginPath(), r.length) if (t.moveTo(r[0].x, r[0].y), i) for (var o = [ [ 0, 0 ], [ 1, 1 ] ], s = h.smooth(r, !1, o), u = 0, c = s.length; u < c; u++) {
                    var l = s[u];
                    t.bezierCurveTo(l[1], l[2], l[3], l[4], l[5], l[6]);
                } else {
                    var f, p;
                    for (f = 1, p = r.length - 1; f < p; f++) t.lineTo(r[f].x, r[f].y);
                    t.lineTo(r[p].x, r[p].y);
                }
            }, n.calculateBox = function() {
                var t = this.get("attrs"), e = t.points, n = t.smooth, i = t.lineWidth, r = a(e);
                if (n) {
                    for (var o = [], s = [ [ 0, 0 ], [ 1, 1 ] ], u = h.smooth(r, !1, s), c = 0, l = u.length; c < l; c++) {
                        var p = u[c];
                        if (0 === c) o.push([ r[0].x, r[0].y, p[1], p[2], p[3], p[4], p[5], p[6] ]); else {
                            var d = u[c - 1];
                            o.push([ d[5], d[6], p[1], p[2], p[3], p[4], p[5], p[6] ]);
                        }
                    }
                    return f.getBBoxFromBezierGroup(o, i);
                }
                return f.getBBoxFromPoints(r, i);
            }, e;
        }(l);
        l.Polyline = p, e.exports = p;
    }, function(t) {
        return i({
            "../shape": 1585748419351,
            "../util/smooth": 1585748419362,
            "../util/bbox": 1585748419359
        }[t], t);
    }), n(1585748419362, function(t, e, n) {
        function i(t) {
            return [ t.x, t.y ];
        }
        function r(t, e, n, r) {
            var o, s, u, c, l, h, f, p, d = [], g = !!r;
            if (g) {
                for (u = [ 1 / 0, 1 / 0 ], c = [ -1 / 0, -1 / 0 ], p = 0, f = t.length; p < f; p++) l = i(t[p]), 
                a.min(u, u, l), a.max(c, c, l);
                a.min(u, u, r[0]), a.max(c, c, r[1]);
            }
            for (p = 0, h = t.length; p < h; p++) {
                if (l = i(t[p]), n) o = i(t[p ? p - 1 : h - 1]), s = i(t[(p + 1) % h]); else {
                    if (0 === p || p === h - 1) {
                        d.push([ l[0], l[1] ]);
                        continue;
                    }
                    o = i(t[p - 1]), s = i(t[p + 1]);
                }
                var v = a.sub([], s, o);
                a.scale(v, v, e);
                var m = a.distance(l, o), y = a.distance(l, s), x = m + y;
                0 !== x && (m /= x, y /= x);
                var b = a.scale([], v, -m), _ = a.scale([], v, y), S = a.add([], l, b), P = a.add([], l, _);
                g && (a.max(S, S, u), a.min(S, S, c), a.max(P, P, u), a.min(P, P, c)), d.push([ S[0], S[1] ]), 
                d.push([ P[0], P[1] ]);
            }
            return n && d.push(d.shift()), d;
        }
        var a = t("./vector2");
        e.exports = {
            smooth: function(t, e, n) {
                for (var i, a, o, s = !!e, u = r(t, .4, s, n), c = t.length, l = [], h = 0; h < c - 1; h++) i = u[2 * h], 
                a = u[2 * h + 1], o = t[h + 1], l.push([ "C", i[0], i[1], a[0], a[1], o.x, o.y ]);
                return s && (i = u[c], a = u[c + 1], o = t[0], l.push([ "C", i[0], i[1], a[0], a[1], o.x, o.y ])), 
                l;
            }
        };
    }, function(t) {
        return i({
            "./vector2": 1585748419329
        }[t], t);
    }), n(1585748419363, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("../shape"), l = t("../util/bbox"), h = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initProperties = function() {
                t.prototype._initProperties.call(this), this._attrs.canStroke = !0, this._attrs.canFill = !0, 
                this._attrs.type = "arc";
            }, n.getDefaultAttrs = function() {
                return {
                    x: 0,
                    y: 0,
                    r: 0,
                    startAngle: 0,
                    endAngle: 2 * Math.PI,
                    anticlockwise: !1,
                    lineWidth: 1
                };
            }, n.createPath = function(t) {
                var e = this.get("attrs"), n = e.x, i = e.y, r = e.r, a = e.startAngle, o = e.endAngle, s = e.anticlockwise;
                t.beginPath(), a !== o && t.arc(n, i, r, a, o, s);
            }, n.calculateBox = function() {
                var t = this.get("attrs"), e = t.x, n = t.y, i = t.r, r = t.startAngle, a = t.endAngle, o = t.anticlockwise;
                return l.getBBoxFromArc(e, n, i, r, a, o);
            }, e;
        }(c);
        c.Arc = h, e.exports = h;
    }, function(t) {
        return i({
            "../shape": 1585748419351,
            "../util/bbox": 1585748419359
        }[t], t);
    }), n(1585748419364, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("../shape"), l = t("../util/bbox"), h = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initProperties = function() {
                t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                this._attrs.type = "sector";
            }, n.getDefaultAttrs = function() {
                return {
                    x: 0,
                    y: 0,
                    lineWidth: 0,
                    r: 0,
                    r0: 0,
                    startAngle: 0,
                    endAngle: 2 * Math.PI,
                    anticlockwise: !1
                };
            }, n.createPath = function(t) {
                var e = this.get("attrs"), n = e.x, i = e.y, r = e.startAngle, a = e.endAngle, o = e.r, s = e.r0, u = e.anticlockwise;
                t.beginPath();
                var c = Math.cos(r), l = Math.sin(r);
                t.moveTo(c * s + n, l * s + i), t.lineTo(c * o + n, l * o + i), (Math.abs(a - r) > 1e-4 || 0 === r && a < 0) && (t.arc(n, i, o, r, a, u), 
                t.lineTo(Math.cos(a) * s + n, Math.sin(a) * s + i), 0 !== s && t.arc(n, i, s, a, r, !u)), 
                t.closePath();
            }, n.calculateBox = function() {
                var t = this.get("attrs"), e = t.x, n = t.y, i = t.r, r = t.r0, a = t.startAngle, o = t.endAngle, s = t.anticlockwise, u = l.getBBoxFromArc(e, n, i, a, o, s), c = l.getBBoxFromArc(e, n, r, a, o, s);
                return {
                    minX: Math.min(u.minX, c.minX),
                    minY: Math.min(u.minY, c.minY),
                    maxX: Math.max(u.maxX, c.maxX),
                    maxY: Math.max(u.maxY, c.maxY)
                };
            }, e;
        }(c);
        c.Sector = h, e.exports = h;
    }, function(t) {
        return i({
            "../shape": 1585748419351,
            "../util/bbox": 1585748419359
        }[t], t);
    }), n(1585748419365, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("../../util/common"), l = t("../shape"), h = t("../util/rect"), f = 0, p = {}, d = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initProperties = function() {
                t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                this._attrs.type = "text";
            }, n.getDefaultAttrs = function() {
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
            }, n._getFontStyle = function() {
                var t = this._attrs.attrs, e = t.fontSize, n = t.fontFamily, i = t.fontWeight;
                return t.fontStyle + " " + t.fontVariant + " " + i + " " + e + "px " + n;
            }, n._afterAttrsSet = function() {
                var t = this._attrs.attrs;
                if (t.font = this._getFontStyle(), t.text) {
                    var e = t.text, n = null, i = 1;
                    c.isString(e) && -1 !== e.indexOf("\n") && (i = (n = e.split("\n")).length), t.lineCount = i, 
                    t.textArr = n;
                }
                this.set("attrs", t);
            }, n._getTextHeight = function() {
                var t = this._attrs.attrs;
                if (t.height) return t.height;
                var e = t.lineCount, n = 1 * t.fontSize;
                return e > 1 ? n * e + this._getSpaceingY() * (e - 1) : n;
            }, n._getSpaceingY = function() {
                var t = this._attrs.attrs, e = t.lineHeight, n = 1 * t.fontSize;
                return e ? e - n : .14 * n;
            }, n.drawInner = function(t) {
                var e = this, n = e._attrs.attrs, i = n.text, r = n.x, a = n.y;
                if (!(c.isNil(i) || isNaN(r) || isNaN(a))) {
                    var o = n.textArr, s = 1 * n.fontSize, u = e._getSpaceingY();
                    n.rotate && (t.translate(r, a), t.rotate(n.rotate), r = 0, a = 0);
                    var l, h = n.textBaseline;
                    o && (l = e._getTextHeight());
                    var f;
                    if (e.hasFill()) {
                        var p = n.fillOpacity;
                        if (c.isNil(p) || 1 === p || (t.globalAlpha = p), o) for (var d = 0, g = o.length; d < g; d++) {
                            var v = o[d];
                            f = a + d * (u + s) - l + s, "middle" === h && (f += l - s - (l - s) / 2), "top" === h && (f += l - s), 
                            t.fillText(v, r, f);
                        } else t.fillText(i, r, a);
                    }
                    if (e.hasStroke()) if (o) for (var m = 0, y = o.length; m < y; m++) {
                        var x = o[m];
                        f = a + m * (u + s) - l + s, "middle" === h && (f += l - s - (l - s) / 2), "top" === h && (f += l - s), 
                        t.strokeText(x, r, f);
                    } else t.strokeText(i, r, a);
                }
            }, n.calculateBox = function() {
                var t = this, e = t._attrs.attrs, n = e.x, i = e.y, r = e.textAlign, a = e.textBaseline, o = t._getTextWidth();
                if (!o) return {
                    minX: n,
                    minY: i,
                    maxX: n,
                    maxY: i
                };
                var s = t._getTextHeight();
                if (e.rotate) {
                    var u = h.calcRotatedBox({
                        width: o,
                        height: s,
                        rotate: e.rotate
                    });
                    o = u.width, s = u.height;
                }
                var c = {
                    x: n,
                    y: i - s
                };
                return r && ("end" === r || "right" === r ? c.x -= o : "center" === r && (c.x -= o / 2)), 
                a && ("top" === a ? c.y += s : "middle" === a && (c.y += s / 2)), {
                    minX: c.x,
                    minY: c.y,
                    maxX: c.x + o,
                    maxY: c.y + s
                };
            }, n._getTextWidth = function() {
                var t = this._attrs.attrs;
                if (t.width) return t.width;
                var e = t.text, n = this.get("context");
                if (!c.isNil(e)) {
                    var i = t.font, r = t.textArr, a = e + "" + i;
                    if (p[a]) return p[a];
                    var o = 0;
                    if (r) for (var s = 0, u = r.length; s < u; s++) {
                        var l = r[s];
                        o = Math.max(o, c.measureText(l, i, n).width);
                    } else o = c.measureText(e, i, n).width;
                    return f > 5e3 && (f = 0, p = {}), f++, p[a] = o, o;
                }
            }, e;
        }(l);
        l.Text = d, e.exports = d;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318,
            "../shape": 1585748419351,
            "../util/rect": 1585748419366
        }[t], t);
    }), n(1585748419366, function(t, e, n) {
        var i = {
            calcRotatedBox: function(t) {
                var e = t.width, n = t.height, i = t.rotate, r = Math.abs(i);
                return {
                    width: Math.abs(e * Math.cos(r) + n * Math.sin(r)),
                    height: Math.abs(n * Math.cos(r) + e * Math.sin(r))
                };
            }
        };
        e.exports = i;
    }, function(t) {
        return i({}[t], t);
    }), n(1585748419367, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("../shape"), l = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initProperties = function() {
                t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                this._attrs.createPath = null, this._attrs.type = "custom";
            }, n.createPath = function(t) {
                var e = this.get("createPath");
                e && e.call(this, t);
            }, n.calculateBox = function() {
                var t = this.get("calculateBox");
                return t && t.call(this);
            }, e;
        }(c);
        c.Custom = l, e.exports = l;
    }, function(t) {
        return i({
            "../shape": 1585748419351
        }[t], t);
    }), n(1585748419368, function(t, e, n) {
        n.__esModule = !0, n.getClip = function(t) {
            var e, n = t.start, r = t.end, a = r.x - n.x, o = Math.abs(r.y - n.y);
            if (t.isPolar) {
                var s = t.circleRadius, u = t.center, c = t.startAngle, l = t.endAngle;
                e = new i.Sector({
                    attrs: {
                        x: u.x,
                        y: u.y,
                        r: s,
                        r0: 0,
                        startAngle: c,
                        endAngle: l
                    }
                });
            } else e = new i.Rect({
                attrs: {
                    x: n.x,
                    y: r.y - 10,
                    width: a,
                    height: o + 20
                }
            });
            return e.isClip = !0, e;
        }, n.isPointInPlot = function(t, e) {
            var n = t.x, i = t.y, r = e.tl, a = e.tr, o = e.br;
            return n >= r.x && n <= a.x && i >= r.y && i <= o.y;
        };
        var i = t("../graphic/index").Shape;
    }, function(t) {
        return i({
            "../graphic/index": 1585748419346
        }[t], t);
    }), n(1585748419369, function(t, e, n) {
        var i = t("./base");
        t("./point"), t("./path"), t("./line"), t("./area"), t("./interval"), t("./polygon"), 
        t("./schema"), e.exports = i;
    }, function(t) {
        return i({
            "./base": 1585748419331,
            "./point": 1585748419370,
            "./path": 1585748419373,
            "./line": 1585748419375,
            "./area": 1585748419376,
            "./interval": 1585748419378,
            "./polygon": 1585748419381,
            "./schema": 1585748419383
        }[t], t);
    }), n(1585748419370, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("../util/common"), l = t("./base");
        t("./shape/point");
        var h = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n.getDefaultCfg = function() {
                var e = t.prototype.getDefaultCfg.call(this);
                return e.type = "point", e.shapeType = "point", e.generatePoints = !1, e;
            }, n.draw = function(t, e) {
                var n = this, i = n.get("container");
                c.each(t, function(t) {
                    var r = t.shape, a = n.getDrawCfg(t);
                    if (c.isArray(t.y)) {
                        var o = n.hasAdjust("stack");
                        c.each(t.y, function(s, u) {
                            a.y = s, o && 0 === u || n.drawShape(r, t, a, i, e);
                        });
                    } else c.isNil(t.y) || n.drawShape(r, t, a, i, e);
                });
            }, e;
        }(l);
        l.Point = h, e.exports = h;
    }, function(t) {
        return i({
            "../util/common": 1585748419318,
            "./base": 1585748419331,
            "./shape/point": 1585748419371
        }[t], t);
    }), n(1585748419371, function(t, e, n) {
        function i(t) {
            var e = {
                lineWidth: 0,
                stroke: t.color,
                fill: t.color
            };
            return t.size && (e.size = t.size), a.mix(e, t.style), a.mix({}, o.shape.point, e);
        }
        function r(t, e, n) {
            if (0 !== t.size) {
                var r = i(t), o = r.r || r.size, s = t.x, u = a.isArray(t.y) ? t.y : [ t.y ];
                "hollowCircle" === n && (r.lineWidth = 1, r.fill = null);
                for (var c = 0, l = u.length; c < l; c++) return "rect" === n ? e.addShape("Rect", {
                    className: "point",
                    attrs: a.mix({
                        x: s - o,
                        y: u[c] - o,
                        width: 2 * o,
                        height: 2 * o
                    }, r)
                }) : e.addShape("Circle", {
                    className: "point",
                    attrs: a.mix({
                        x: s,
                        y: u[c],
                        r: o
                    }, r)
                });
            }
        }
        var a = t("../../util/common"), o = t("../../global"), s = t("./util"), u = t("./shape"), c = [ "circle", "hollowCircle", "rect" ], l = u.registerFactory("point", {
            defaultShapeType: "circle",
            getDefaultPoints: function(t) {
                return s.splitPoints(t);
            }
        });
        a.each(c, function(t) {
            u.registerShape("point", t, {
                draw: function(e, n) {
                    return r(e, n, t);
                }
            });
        }), e.exports = l;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318,
            "../../global": 1585748419316,
            "./util": 1585748419372,
            "./shape": 1585748419339
        }[t], t);
    }), n(1585748419372, function(t, e, n) {
        var i = t("../../util/common"), r = {
            splitPoints: function(t) {
                var e = [], n = t.x, r = t.y;
                return (r = i.isArray(r) ? r : [ r ]).forEach(function(t, r) {
                    var a = {
                        x: i.isArray(n) ? n[r] : n,
                        y: t
                    };
                    e.push(a);
                }), e;
            },
            splitArray: function(t, e, n) {
                if (!t.length) return [];
                var r, a = [], o = [];
                return i.each(t, function(t) {
                    r = t._origin ? t._origin[e] : t[e], n ? i.isNil(r) || o.push(t) : i.isArray(r) && i.isNil(r[0]) || i.isNil(r) ? o.length && (a.push(o), 
                    o = []) : o.push(t);
                }), o.length && a.push(o), a;
            }
        };
        e.exports = r;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318
        }[t], t);
    }), n(1585748419373, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("./base"), l = t("./shape/util"), h = t("../util/common");
        t("./shape/line");
        var f = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n.getDefaultCfg = function() {
                var e = t.prototype.getDefaultCfg.call(this);
                return e.type = "path", e.shapeType = "line", e;
            }, n.getDrawCfg = function(e) {
                var n = t.prototype.getDrawCfg.call(this, e);
                return n.isStack = this.hasAdjust("stack"), n;
            }, n.draw = function(t, e) {
                var n = this, i = n.get("container"), r = n.getYScale(), a = n.get("connectNulls"), o = l.splitArray(t, r.field, a), s = this.getDrawCfg(t[0]);
                s.origin = t, h.each(o, function(r, a) {
                    s.splitedIndex = a, s.points = r, n.drawShape(s.shape, t[0], s, i, e);
                });
            }, e;
        }(c);
        c.Path = f, e.exports = f;
    }, function(t) {
        return i({
            "./base": 1585748419331,
            "./shape/util": 1585748419372,
            "../util/common": 1585748419318,
            "./shape/line": 1585748419374
        }[t], t);
    }), n(1585748419374, function(t, e, n) {
        function i(t) {
            var e = {
                strokeStyle: t.color
            };
            return t.size >= 0 && (e.lineWidth = t.size), a.mix(e, t.style), a.mix({}, u.shape.line, e);
        }
        function r(t, e, n, i) {
            var r = t.points;
            if (r.length && a.isArray(r[0].y)) {
                for (var o = [], u = [], c = 0, l = r.length; c < l; c++) {
                    var h = r[c], f = s.splitPoints(h);
                    u.push(f[0]), o.push(f[1]);
                }
                return t.isInCircle && (o.push(o[0]), u.push(u[0])), t.isStack ? e.addShape("Polyline", {
                    className: "line",
                    attrs: a.mix({
                        points: o,
                        smooth: i
                    }, n)
                }) : [ e.addShape("Polyline", {
                    className: "line",
                    attrs: a.mix({
                        points: o,
                        smooth: i
                    }, n)
                }), e.addShape("Polyline", {
                    className: "line",
                    attrs: a.mix({
                        points: u,
                        smooth: i
                    }, n)
                }) ];
            }
            return t.isInCircle && r.push(r[0]), e.addShape("Polyline", {
                className: "line",
                attrs: a.mix({
                    points: r,
                    smooth: i
                }, n)
            });
        }
        var a = t("../../util/common"), o = t("./shape"), s = t("./util"), u = t("../../global"), c = o.registerFactory("line", {
            defaultShapeType: "line"
        }), l = [ "line", "smooth", "dash" ];
        a.each(l, function(t) {
            o.registerShape("line", t, {
                draw: function(e, n) {
                    var a = "smooth" === t, o = i(e);
                    return "dash" === t && (o.lineDash = u.lineDash), r(e, n, o, a);
                }
            });
        }), e.exports = c;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318,
            "./shape": 1585748419339,
            "./util": 1585748419372,
            "../../global": 1585748419316
        }[t], t);
    }), n(1585748419375, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("./path"), l = t("./base");
        t("./shape/line");
        var h = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            return e.prototype.getDefaultCfg = function() {
                var e = t.prototype.getDefaultCfg.call(this);
                return e.type = "line", e.sortable = !0, e;
            }, e;
        }(c);
        l.Line = h, e.exports = h;
    }, function(t) {
        return i({
            "./path": 1585748419373,
            "./base": 1585748419331,
            "./shape/line": 1585748419374
        }[t], t);
    }), n(1585748419376, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("./base"), l = t("./shape/util"), h = t("../util/common");
        t("./shape/area");
        var f = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n.getDefaultCfg = function() {
                var e = t.prototype.getDefaultCfg.call(this);
                return e.type = "area", e.shapeType = "area", e.generatePoints = !0, e.sortable = !0, 
                e;
            }, n.draw = function(t, e) {
                var n = this, i = n.get("container"), r = this.getDrawCfg(t[0]), a = n.getYScale(), o = n.get("connectNulls"), s = l.splitArray(t, a.field, o);
                r.origin = t, h.each(s, function(a, o) {
                    r.splitedIndex = o;
                    var s = a.map(function(t) {
                        return t.points;
                    });
                    r.points = s, n.drawShape(r.shape, t[0], r, i, e);
                });
            }, e;
        }(c);
        c.Area = f, e.exports = f;
    }, function(t) {
        return i({
            "./base": 1585748419331,
            "./shape/util": 1585748419372,
            "../util/common": 1585748419318,
            "./shape/area": 1585748419377
        }[t], t);
    }), n(1585748419377, function(t, e, n) {
        function i(t, e) {
            return Math.abs(t - e) < 1e-5;
        }
        function r(t) {
            return !isNaN(t) && !c.isNil(t);
        }
        function a(t) {
            for (var e = [], n = 0, i = t.length; n < i; n++) {
                var a = t[n];
                r(a.x) && r(a.y) && e.push(a);
            }
            return e;
        }
        function o(t, e) {
            var n = !0;
            return c.each(t, function(t) {
                if (!i(t.x, e.x) || !i(t.y, e.y)) return n = !1, !1;
            }), n;
        }
        function s(t, e, n, i, r) {
            var o = t.concat(e);
            return r ? n.addShape("Custom", {
                className: "area",
                attrs: c.mix({
                    points: o
                }, i),
                createPath: function(t) {
                    var e = [ [ 0, 0 ], [ 1, 1 ] ], n = a(this._attrs.attrs.points), i = n.length, r = n.slice(0, i / 2), o = n.slice(i / 2, i), s = h.smooth(r, !1, e);
                    t.beginPath(), t.moveTo(r[0].x, r[0].y);
                    for (var u = 0, c = s.length; u < c; u++) {
                        var l = s[u];
                        t.bezierCurveTo(l[1], l[2], l[3], l[4], l[5], l[6]);
                    }
                    if (o.length) {
                        var f = h.smooth(o, !1, e);
                        t.lineTo(o[0].x, o[0].y);
                        for (var p = 0, d = f.length; p < d; p++) {
                            var g = f[p];
                            t.bezierCurveTo(g[1], g[2], g[3], g[4], g[5], g[6]);
                        }
                    }
                    t.closePath();
                },
                calculateBox: function() {
                    var t = a(this._attrs.attrs.points);
                    return f.getBBoxFromPoints(t);
                }
            }) : n.addShape("Polyline", {
                className: "area",
                attrs: c.mix({
                    points: o
                }, i)
            });
        }
        function u(t, e, n) {
            var i = this, r = t.points, a = [], u = [];
            c.each(r, function(t) {
                u.push(t[0]), a.push(t[1]);
            });
            var l = c.mix({
                fillStyle: t.color
            }, p.shape.area, t.style);
            return u.reverse(), a = i.parsePoints(a), u = i.parsePoints(u), t.isInCircle && (a.push(a[0]), 
            u.unshift(u[u.length - 1]), o(u, t.center) && (u = [])), s(a, u, e, l, n);
        }
        var c = t("../../util/common"), l = t("./shape"), h = t("../../graphic/util/smooth"), f = t("../../graphic/util/bbox"), p = t("../../global"), d = l.registerFactory("area", {
            defaultShapeType: "area",
            getDefaultPoints: function(t) {
                var e = t.x, n = t.y, i = t.y0;
                n = c.isArray(n) ? n : [ i, n ];
                var r = [];
                return r.push({
                    x: e,
                    y: n[0]
                }, {
                    x: e,
                    y: n[1]
                }), r;
            }
        }), g = [ "area", "smooth" ];
        c.each(g, function(t) {
            l.registerShape("area", t, {
                draw: function(e, n) {
                    var i = "smooth" === t;
                    return u.call(this, e, n, i);
                }
            });
        }), e.exports = d;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318,
            "./shape": 1585748419339,
            "../../graphic/util/smooth": 1585748419362,
            "../../graphic/util/bbox": 1585748419359,
            "../../global": 1585748419316
        }[t], t);
    }), n(1585748419378, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, u.default)(t);
                if (r()) {
                    var i = (0, u.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, s.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/assertThisInitialized")), s = a(t("@babel/runtime/helpers/possibleConstructorReturn")), u = a(t("@babel/runtime/helpers/getPrototypeOf")), c = a(t("@babel/runtime/helpers/inheritsLoose")), l = t("./base"), h = t("../util/common"), f = t("./mixin/size");
        t("./shape/interval");
        var p = function(t) {
            function e(e) {
                var n;
                return n = t.call(this, e) || this, h.mix((0, o.default)(n), f), n;
            }
            (0, c.default)(e, t);
            i(e);
            var n = e.prototype;
            return n.getDefaultCfg = function() {
                var e = t.prototype.getDefaultCfg.call(this);
                return e.type = "interval", e.shapeType = "interval", e.generatePoints = !0, e;
            }, n.init = function() {
                t.prototype.init.call(this), this.initEvent();
            }, n.createShapePointsCfg = function(e) {
                var n = t.prototype.createShapePointsCfg.call(this, e);
                return n.size = this.getNormalizedSize(e), n;
            }, n.clearInner = function() {
                t.prototype.clearInner.call(this), this.set("defaultSize", null);
            }, e;
        }(l);
        l.Interval = p, e.exports = p;
    }, function(t) {
        return i({
            "./base": 1585748419331,
            "../util/common": 1585748419318,
            "./mixin/size": 1585748419379,
            "./shape/interval": 1585748419380
        }[t], t);
    }), n(1585748419379, function(t, e, n) {
        var i = t("../../chart/const"), r = t("../../global"), a = t("../../util/common"), o = {
            initEvent: function() {
                var t = this, e = this.get("chart");
                e && e.on(i.EVENT_AFTER_SIZE_CHANGE, function() {
                    t.set("_width", null);
                });
            },
            getDefalutSize: function() {
                var t = this.get("defaultSize");
                if (!t) {
                    var e = this.get("coord"), n = this.getXScale(), i = this.get("dataArray"), o = a.uniq(n.values).length, s = n.range, u = 1 / o, c = 1;
                    e && e.isPolar ? c = e.transposed && o > 1 ? r.widthRatio.multiplePie : r.widthRatio.rose : (n.isLinear && (u *= s[1] - s[0]), 
                    c = r.widthRatio.column), u *= c, this.hasAdjust("dodge") && (u /= i.length), t = u, 
                    this.set("defaultSize", t);
                }
                return t;
            },
            getDimWidth: function(t) {
                var e = this.get("coord"), n = e.convertPoint({
                    x: 0,
                    y: 0
                }), i = e.convertPoint({
                    x: "x" === t ? 1 : 0,
                    y: "x" === t ? 0 : 1
                }), r = 0;
                return n && i && (r = Math.sqrt(Math.pow(i.x - n.x, 2) + Math.pow(i.y - n.y, 2))), 
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
                return e = a.isNil(e) ? this.getDefalutSize() : this._toNormalizedSize(e);
            },
            getSize: function(t) {
                var e = this.getAttrValue("size", t);
                if (a.isNil(e)) {
                    var n = this.getDefalutSize();
                    e = this._toCoordSize(n);
                }
                return e;
            }
        };
        e.exports = o;
    }, function(t) {
        return i({
            "../../chart/const": 1585748419322,
            "../../global": 1585748419316,
            "../../util/common": 1585748419318
        }[t], t);
    }), n(1585748419380, function(t, e, n) {
        function i(t) {
            var e = t.x, n = t.y, i = t.y0, r = t.size, a = i, s = n;
            o.isArray(n) && (s = n[1], a = n[0]);
            var u, c;
            return o.isArray(e) ? (u = e[0], c = e[1]) : (u = e - r / 2, c = e + r / 2), [ {
                x: u,
                y: a
            }, {
                x: u,
                y: s
            }, {
                x: c,
                y: s
            }, {
                x: c,
                y: a
            } ];
        }
        function r(t) {
            for (var e = [], n = [], i = 0, r = t.length; i < r; i++) {
                var a = t[i];
                e.push(a.x), n.push(a.y);
            }
            var o = Math.min.apply(null, e), s = Math.min.apply(null, n);
            return {
                x: o,
                y: s,
                width: Math.max.apply(null, e) - o,
                height: Math.max.apply(null, n) - s
            };
        }
        function a(t, e) {
            return {
                x: (t.x - e.x) / 2 + e.x,
                y: (t.y - e.y) / 2 + e.y
            };
        }
        var o = t("../../util/common"), s = t("./shape"), u = t("../../graphic/util/vector2"), c = t("../../global"), l = s.registerFactory("interval", {
            defaultShapeType: "rect",
            getDefaultPoints: function(t) {
                return i(t);
            }
        });
        s.registerShape("interval", "rect", {
            draw: function(t, e) {
                var n = this.parsePoints(t.points), i = o.mix({
                    fill: t.color
                }, c.shape.interval, t.style);
                if (t.isInCircle) {
                    var a = n.slice(0);
                    this._coord.transposed && (a = [ n[0], n[3], n[2], n[1] ]);
                    var s = t.center, l = s.x, h = s.y, f = [ 1, 0 ], p = [ a[0].x - l, a[0].y - h ], d = [ a[1].x - l, a[1].y - h ], g = [ a[2].x - l, a[2].y - h ], v = u.angleTo(f, d), m = u.angleTo(f, g), y = u.length(p), x = u.length(d);
                    return v >= 1.5 * Math.PI && (v -= 2 * Math.PI), m >= 1.5 * Math.PI && (m -= 2 * Math.PI), 
                    e.addShape("Sector", {
                        className: "interval",
                        attrs: o.mix({
                            x: l,
                            y: h,
                            r: x,
                            r0: y,
                            startAngle: v,
                            endAngle: m
                        }, i)
                    });
                }
                var b = r(n);
                return e.addShape("rect", {
                    className: "interval",
                    attrs: o.mix(b, i)
                });
            }
        }), [ "pyramid", "funnel" ].forEach(function(t) {
            s.registerShape("interval", t, {
                getPoints: function(t) {
                    return t.size = 2 * t.size, i(t);
                },
                draw: function(e, n) {
                    var i = this.parsePoints(e.points), r = this.parsePoints(e.nextPoints), s = null;
                    r ? s = [ i[0], i[1], r[1], r[0] ] : (s = [ i[0], i[1] ], "pyramid" === t ? s.push(a(i[2], i[3])) : s.push(i[2], i[3]));
                    var u = o.mix({
                        fill: e.color,
                        points: s
                    }, c.shape.interval, e.style);
                    return n.addShape("polygon", {
                        className: "interval",
                        attrs: u
                    });
                }
            });
        }), e.exports = l;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318,
            "./shape": 1585748419339,
            "../../graphic/util/vector2": 1585748419329,
            "../../global": 1585748419316
        }[t], t);
    }), n(1585748419381, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("./base"), l = t("../util/common");
        t("./shape/polygon");
        var h = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n.getDefaultCfg = function() {
                var e = t.prototype.getDefaultCfg.call(this);
                return e.type = "polygon", e.shapeType = "polygon", e.generatePoints = !0, e;
            }, n.createShapePointsCfg = function(e) {
                var n, i = t.prototype.createShapePointsCfg.call(this, e), r = this, a = i.x, o = i.y;
                if (!l.isArray(a) || !l.isArray(o)) {
                    var s = r.getXScale(), u = r.getYScale(), c = .5 / (s.values ? s.values.length : s.ticks.length), h = .5 / (u.values ? u.values.length : u.ticks.length);
                    s.isCategory && u.isCategory ? (a = [ a - c, a - c, a + c, a + c ], o = [ o - h, o + h, o + h, o - h ]) : l.isArray(a) ? (a = [ (n = a)[0], n[0], n[1], n[1] ], 
                    o = [ o - h / 2, o + h / 2, o + h / 2, o - h / 2 ]) : l.isArray(o) && (o = [ (n = o)[0], n[1], n[1], n[0] ], 
                    a = [ a - c / 2, a - c / 2, a + c / 2, a + c / 2 ]), i.x = a, i.y = o;
                }
                return i;
            }, e;
        }(c);
        c.Polygon = h, e.exports = h;
    }, function(t) {
        return i({
            "./base": 1585748419331,
            "../util/common": 1585748419318,
            "./shape/polygon": 1585748419382
        }[t], t);
    }), n(1585748419382, function(t, e, n) {
        var i = t("./shape"), r = t("../../util/common"), a = i.registerFactory("polygon", {
            defaultShapeType: "polygon",
            getDefaultPoints: function(t) {
                for (var e = [], n = t.x, i = t.y, r = 0, a = n.length; r < a; r++) e.push({
                    x: n[r],
                    y: i[r]
                });
                return e;
            }
        });
        i.registerShape("polygon", "polygon", {
            draw: function(t, e) {
                var n = this.parsePoints(t.points), i = r.mix({
                    fill: t.color,
                    points: n
                }, t.style);
                return e.addShape("Polygon", {
                    className: "polygon",
                    attrs: i
                });
            }
        }), e.exports = a;
    }, function(t) {
        return i({
            "./shape": 1585748419339,
            "../../util/common": 1585748419318
        }[t], t);
    }), n(1585748419383, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, u.default)(t);
                if (r()) {
                    var i = (0, u.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, s.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/assertThisInitialized")), s = a(t("@babel/runtime/helpers/possibleConstructorReturn")), u = a(t("@babel/runtime/helpers/getPrototypeOf")), c = a(t("@babel/runtime/helpers/inheritsLoose")), l = t("./base"), h = t("../util/common"), f = t("./mixin/size");
        t("./shape/schema");
        var p = function(t) {
            function e(e) {
                var n;
                return n = t.call(this, e) || this, h.mix((0, o.default)(n), f), n;
            }
            (0, c.default)(e, t);
            i(e);
            var n = e.prototype;
            return n.getDefaultCfg = function() {
                var e = t.prototype.getDefaultCfg.call(this);
                return e.type = "schema", e.shapeType = "schema", e.generatePoints = !0, e;
            }, n.init = function() {
                t.prototype.init.call(this), this.initEvent();
            }, n.createShapePointsCfg = function(e) {
                var n = t.prototype.createShapePointsCfg.call(this, e);
                return n.size = this.getNormalizedSize(e), n;
            }, n.clearInner = function() {
                t.prototype.clearInner.call(this), this.set("defaultSize", null);
            }, e;
        }(l);
        l.Schema = p, e.exports = p;
    }, function(t) {
        return i({
            "./base": 1585748419331,
            "../util/common": 1585748419318,
            "./mixin/size": 1585748419379,
            "./shape/schema": 1585748419384
        }[t], t);
    }), n(1585748419384, function(t, e, n) {
        function i(t) {
            var e = t.sort(function(t, e) {
                return t < e ? 1 : -1;
            }), n = e.length;
            if (n < 4) for (var i = e[n - 1], r = 0; r < 4 - n; r++) e.push(i);
            return e;
        }
        function r(t, e, n) {
            var r = i(e);
            return [ {
                x: t,
                y: r[0]
            }, {
                x: t,
                y: r[1]
            }, {
                x: t - n / 2,
                y: r[2]
            }, {
                x: t - n / 2,
                y: r[1]
            }, {
                x: t + n / 2,
                y: r[1]
            }, {
                x: t + n / 2,
                y: r[2]
            }, {
                x: t,
                y: r[2]
            }, {
                x: t,
                y: r[3]
            } ];
        }
        var a = t("./shape"), o = t("../../util/common"), s = a.registerFactory("schema", {});
        a.registerShape("schema", "candle", {
            getPoints: function(t) {
                return r(t.x, t.y, t.size);
            },
            draw: function(t, e) {
                var n = this.parsePoints(t.points), i = o.mix({
                    stroke: t.color,
                    fill: t.color,
                    lineWidth: 1
                }, t.style);
                return e.addShape("Custom", {
                    className: "schema",
                    attrs: i,
                    createPath: function(t) {
                        t.beginPath(), t.moveTo(n[0].x, n[0].y), t.lineTo(n[1].x, n[1].y), t.moveTo(n[2].x, n[2].y);
                        for (var e = 3; e < 6; e++) t.lineTo(n[e].x, n[e].y);
                        t.closePath(), t.moveTo(n[6].x, n[6].y), t.lineTo(n[7].x, n[7].y);
                    }
                });
            }
        }), e.exports = s;
    }, function(t) {
        return i({
            "./shape": 1585748419339,
            "../../util/common": 1585748419318
        }[t], t);
    }), n(1585748419385, function(t, e, n) {
        e.exports = {
            Stack: t("./stack"),
            Dodge: t("./dodge"),
            Symmetric: t("./symmetric")
        };
    }, function(t) {
        return i({
            "./stack": 1585748419386,
            "./dodge": 1585748419387,
            "./symmetric": 1585748419388
        }[t], t);
    }), n(1585748419386, function(t, e, n) {
        var i = t("@antv/adjust/lib/stack");
        e.exports = i;
    }, function(t) {
        return i({}[t], t);
    }), n(1585748419387, function(t, e, n) {
        var i = t("@antv/adjust/lib/dodge");
        e.exports = i;
    }, function(t) {
        return i({}[t], t);
    }), n(1585748419388, function(t, e, n) {
        var i = t("@antv/adjust/lib/symmetric");
        e.exports = i;
    }, function(t) {
        return i({}[t], t);
    }), n(1585748419389, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("./base"), l = t("../graphic/util/vector2"), h = t("../graphic/util/matrix"), f = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initDefaultCfg = function() {
                this.type = "polar", this.startAngle = -Math.PI / 2, this.endAngle = 3 * Math.PI / 2, 
                this.inner = 0, this.innerRadius = 0, this.isPolar = !0, this.transposed = !1, this.center = null, 
                this.radius = null;
            }, n.init = function(e, n) {
                t.prototype.init.call(this, e, n);
                var i, r, a = this, o = a.inner || a.innerRadius, s = Math.abs(n.x - e.x), u = Math.abs(n.y - e.y);
                a.startAngle === -Math.PI && 0 === a.endAngle ? (i = Math.min(s / 2, u), r = {
                    x: (e.x + n.x) / 2,
                    y: e.y
                }) : (i = Math.min(s, u) / 2, r = {
                    x: (e.x + n.x) / 2,
                    y: (e.y + n.y) / 2
                });
                var c = a.radius;
                c > 0 && c <= 1 && (i *= c), this.x = {
                    start: a.startAngle,
                    end: a.endAngle
                }, this.y = {
                    start: i * o,
                    end: i
                }, this.center = r, this.circleRadius = i;
            }, n._convertPoint = function(t) {
                var e = this, n = e.center, i = e.transposed, r = i ? "y" : "x", a = i ? "x" : "y", o = e.x, s = e.y, u = o.start + (o.end - o.start) * t[r], c = s.start + (s.end - s.start) * t[a];
                return {
                    x: n.x + Math.cos(u) * c,
                    y: n.y + Math.sin(u) * c
                };
            }, n._invertPoint = function(t) {
                var e = this, n = e.center, i = e.transposed, r = e.x, a = e.y, o = i ? "y" : "x", s = i ? "x" : "y", u = [ 1, 0, 0, 1, 0, 0 ];
                h.rotate(u, u, r.start);
                var c = [ 1, 0 ];
                l.transformMat2d(c, c, u), c = [ c[0], c[1] ];
                var f = [ t.x - n.x, t.y - n.y ];
                if (l.zero(f)) return {
                    x: 0,
                    y: 0
                };
                var p = l.angleTo(c, f, r.end < r.start);
                Math.abs(p - 2 * Math.PI) < .001 && (p = 0);
                var d = l.length(f), g = p / (r.end - r.start);
                g = r.end - r.start > 0 ? g : -g;
                var v = (d - a.start) / (a.end - a.start), m = {};
                return m[o] = g, m[s] = v, m;
            }, e;
        }(c);
        c.Polar = f, e.exports = f;
    }, function(t) {
        return i({
            "./base": 1585748419327,
            "../graphic/util/vector2": 1585748419329,
            "../graphic/util/matrix": 1585748419328
        }[t], t);
    }), n(1585748419390, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("../../util/common"), l = t("./abstract"), h = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initDefaultCfg = function() {
                t.prototype._initDefaultCfg.call(this), this.startAngle = -Math.PI / 2, this.endAngle = 3 * Math.PI / 2, 
                this.radius = null, this.center = null;
            }, n.getOffsetPoint = function(t) {
                var e = this.startAngle, n = e + (this.endAngle - e) * t;
                return this._getCirclePoint(n);
            }, n._getCirclePoint = function(t, e) {
                var n = this, i = n.center;
                return e = e || n.radius, {
                    x: i.x + Math.cos(t) * e,
                    y: i.y + Math.sin(t) * e
                };
            }, n.getTextAlignInfo = function(t, e) {
                var n, i = this.getOffsetVector(t, e), r = "middle";
                return i[0] > 0 ? n = "left" : i[0] < 0 ? n = "right" : (n = "center", i[1] > 0 ? r = "top" : i[1] < 0 && (r = "bottom")), 
                {
                    textAlign: n,
                    textBaseline: r
                };
            }, n.getAxisVector = function(t) {
                var e = this.center, n = this.offsetFactor;
                return [ (t.y - e.y) * n, -1 * (t.x - e.x) * n ];
            }, n.drawLine = function(t) {
                var e = this.center, n = this.radius, i = this.startAngle, r = this.endAngle;
                this.getContainer(t.top).addShape("arc", {
                    className: "axis-line",
                    attrs: c.mix({
                        x: e.x,
                        y: e.y,
                        r: n,
                        startAngle: i,
                        endAngle: r
                    }, t)
                });
            }, e;
        }(l);
        l.Circle = h, e.exports = h;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318,
            "./abstract": 1585748419344
        }[t], t);
    }), n(1585748419391, function(t, e, n) {
        var i = t("@antv/scale/lib/time-cat");
        e.exports = i;
    }, function(t) {
        return i({}[t], t);
    }), n(1585748419392, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("../../util/common"), l = t("./base"), h = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initDefaultCfg = function() {
                this.type = "arc", this.start = [], this.end = [], this.style = {
                    stroke: "#999",
                    lineWidth: 1
                };
            }, n.render = function(t, e) {
                var n = this, i = n.parsePoint(t, n.start), r = n.parsePoint(t, n.end);
                if (i && r) {
                    var a = t.center, o = Math.sqrt((i.x - a.x) * (i.x - a.x) + (i.y - a.y) * (i.y - a.y)), s = Math.atan2(i.y - a.y, i.x - a.x), u = Math.atan2(r.y - a.y, r.x - a.x), l = e.addShape("arc", {
                        className: "guide-arc",
                        attrs: c.mix({
                            x: a.x,
                            y: a.y,
                            r: o,
                            startAngle: s,
                            endAngle: u
                        }, n.style)
                    });
                    return n.element = l, l;
                }
            }, e;
        }(l);
        l.Arc = h, e.exports = h;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318,
            "./base": 1585748419393
        }[t], t);
    }), n(1585748419393, function(t, e, n) {
        var i = t("../../util/common"), r = {
            min: 0,
            median: .5,
            max: 1
        }, a = function() {
            function t(t) {
                this._initDefaultCfg(), i.deepMix(this, t);
            }
            var e = t.prototype;
            return e._initDefaultCfg = function() {}, e._getNormalizedValue = function(t, e) {
                return i.isNil(r[t]) ? e.scale(t) : r[t];
            }, e.parsePercentPoint = function(t, e) {
                var n = parseFloat(e[0]) / 100, i = parseFloat(e[1]) / 100, r = t.start, a = t.end, o = Math.abs(r.x - a.x), s = Math.abs(r.y - a.y);
                return {
                    x: o * n + Math.min(r.x, a.x),
                    y: s * i + Math.min(r.y, a.y)
                };
            }, e.parsePoint = function(t, e) {
                var n = this, r = n.xScale, a = n.yScales;
                if (i.isFunction(e) && (e = e(r, a)), i.isString(e[0]) && -1 !== e[0].indexOf("%") && !isNaN(e[0].slice(0, -1))) return this.parsePercentPoint(t, e);
                var o = n._getNormalizedValue(e[0], r), s = n._getNormalizedValue(e[1], a[0]), u = t.convertPoint({
                    x: o,
                    y: s
                });
                return n.limitInPlot ? o >= 0 && o <= 1 && s >= 0 && s <= 1 ? u : null : u;
            }, e.render = function() {}, e.repaint = function() {
                this.remove();
                var t = this.coord, e = this.container, n = this.canvas;
                e && !e.isDestroyed() && (this.render(t, e), n.draw());
            }, e.remove = function() {
                var t = this.element;
                t && t.remove(!0);
            }, e.changeVisible = function(t) {
                var e = this;
                e.visible = t;
                var n = e.element;
                n && (n.set ? n.set("visible", t) : n.style.display = t ? "" : "none");
            }, t;
        }();
        e.exports = a;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318
        }[t], t);
    }), n(1585748419394, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, l.default)(t);
                if (r()) {
                    var i = (0, l.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, c.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        function a(t, e, n, i) {
            var r = [];
            return "left" === t && "top" === e ? (r[0] = 0, r[1] = 0) : "right" === t && "top" === e ? (r[0] = -n, 
            r[1] = 0) : "left" === t && "bottom" === e ? (r[0] = 0, r[1] = Math.floor(-i)) : "right" === t && "bottom" === e ? (r[0] = Math.floor(-n), 
            r[1] = Math.floor(-i)) : "right" === t && "middle" === e ? (r[0] = Math.floor(-n), 
            r[1] = Math.floor(-i / 2)) : "left" === t && "middle" === e ? (r[0] = 0, r[1] = Math.floor(-i / 2)) : "center" === t && "bottom" === e ? (r[0] = Math.floor(-n / 2), 
            r[1] = Math.floor(-i)) : "center" === t && "top" === e ? (r[0] = Math.floor(-n / 2), 
            r[1] = 0) : (r[0] = Math.floor(-n / 2), r[1] = Math.floor(-i / 2)), r;
        }
        function o(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t.style[n] = e[n]);
            return t;
        }
        function s(t) {
            var e = document.createElement("div");
            return t = t.replace(/(^\s*)|(\s*$)/g, ""), e.innerHTML = "" + t, e.childNodes[0];
        }
        var u = t("@babel/runtime/helpers/interopRequireDefault"), c = u(t("@babel/runtime/helpers/possibleConstructorReturn")), l = u(t("@babel/runtime/helpers/getPrototypeOf")), h = u(t("@babel/runtime/helpers/inheritsLoose")), f = t("../../util/common"), p = t("./base"), d = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, h.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initDefaultCfg = function() {
                this.type = "html", this.position = null, this.alignX = "center", this.alignY = "middle", 
                this.offsetX = null, this.offsetY = null, this.html = null;
            }, n.render = function(t, e) {
                var n = this, i = n.parsePoint(t, n.position);
                if (i) {
                    var r = s(n.html);
                    r = o(r, {
                        position: "absolute",
                        top: Math.floor(i.y) + "px",
                        left: Math.floor(i.x) + "px",
                        visibility: "hidden"
                    });
                    var u = e.get("canvas").get("el"), c = u.parentNode;
                    c = o(c, {
                        position: "relative"
                    });
                    var l = s('<div class="guideWapper" style="position: absolute;top: 0; left: 0;"></div>');
                    c.appendChild(l), l.appendChild(r);
                    var h = u.offsetTop, p = u.offsetLeft, d = n.alignX, g = n.alignY, v = n.offsetX, m = n.offsetY, y = a(d, g, f.getWidth(r), f.getHeight(r));
                    i.x = i.x + y[0] + p, i.y = i.y + y[1] + h, v && (i.x += v), m && (i.y += m), o(r, {
                        top: Math.floor(i.y) + "px",
                        left: Math.floor(i.x) + "px",
                        visibility: "visible"
                    }), n.element = l;
                }
            }, n.remove = function() {
                var t = this.element;
                t && t.parentNode && t.parentNode.removeChild(t);
            }, e;
        }(p);
        p.Html = d, e.exports = d;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318,
            "./base": 1585748419393
        }[t], t);
    }), n(1585748419395, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("../../util/common"), l = t("./base"), h = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initDefaultCfg = function() {
                this.type = "line", this.start = [], this.end = [], this.style = {
                    stroke: "#000",
                    lineWidth: 1
                };
            }, n.render = function(t, e) {
                var n = [];
                if (n[0] = this.parsePoint(t, this.start), n[1] = this.parsePoint(t, this.end), 
                n[0] && n[1]) {
                    var i = e.addShape("Line", {
                        className: "guide-line",
                        attrs: c.mix({
                            x1: n[0].x,
                            y1: n[0].y,
                            x2: n[1].x,
                            y2: n[1].y
                        }, this.style)
                    });
                    return this.element = i, i;
                }
            }, e;
        }(l);
        l.Line = h, e.exports = h;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318,
            "./base": 1585748419393
        }[t], t);
    }), n(1585748419396, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("../../util/common"), l = t("./base"), h = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initDefaultCfg = function() {
                this.type = "rect", this.start = [], this.end = [], this.style = {
                    fill: "#CCD7EB",
                    opacity: .4
                };
            }, n.render = function(t, e) {
                var n = this.parsePoint(t, this.start), i = this.parsePoint(t, this.end);
                if (n && i) {
                    var r = e.addShape("rect", {
                        className: "guide-rect",
                        attrs: c.mix({
                            x: Math.min(n.x, i.x),
                            y: Math.min(n.y, i.y),
                            width: Math.abs(i.x - n.x),
                            height: Math.abs(n.y - i.y)
                        }, this.style)
                    });
                    return this.element = r, r;
                }
            }, e;
        }(l);
        l.Rect = h, e.exports = h;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318,
            "./base": 1585748419393
        }[t], t);
    }), n(1585748419397, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("../../util/common"), l = t("./base"), h = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initDefaultCfg = function() {
                this.type = "text", this.position = null, this.content = null, this.style = {
                    fill: "#000"
                }, this.offsetX = 0, this.offsetY = 0;
            }, n.render = function(t, e) {
                var n = this.position, i = this.parsePoint(t, n);
                if (i) {
                    var r = this.content, a = this.style, o = this.offsetX, s = this.offsetY;
                    o && (i.x += o), s && (i.y += s);
                    var u = e.addShape("text", {
                        className: "guide-text",
                        attrs: c.mix({
                            x: i.x,
                            y: i.y,
                            text: r
                        }, a)
                    });
                    return this.element = u, u;
                }
            }, e;
        }(l);
        l.Text = h, e.exports = h;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318,
            "./base": 1585748419393
        }[t], t);
    }), n(1585748419398, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("../../util/common"), l = t("./base"), h = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initDefaultCfg = function() {
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
            }, n._getDirect = function(t, e, n, i) {
                var r = this.direct, a = this.side, o = t.get("canvas"), s = o.get("width"), u = o.get("height"), c = e.x, l = e.y, h = r[0], f = r[1];
                "t" === h && l - a - i < 0 ? h = "b" : "b" === h && l + a + i > u && (h = "t");
                var p = "c" === h ? a : 0;
                return "l" === f && c - p - n < 0 ? f = "r" : "r" === f && c + p + n > s ? f = "l" : "c" === f && (n / 2 + c + p > s ? f = "l" : c - n / 2 - p < 0 && (f = "r")), 
                r = h + f;
            }, n.render = function(t, e) {
                var n = this.parsePoint(t, this.position);
                if (n && !isNaN(n.x) && !isNaN(n.y)) {
                    var i = this.content, r = this.background, a = this.textStyle, o = [], s = e.addGroup({
                        className: "guide-tag"
                    });
                    if (this.withPoint) {
                        var u = s.addShape("Circle", {
                            className: "guide-tag-point",
                            attrs: c.mix({
                                x: n.x,
                                y: n.y
                            }, this.pointStyle)
                        });
                        o.push(u);
                    }
                    var l = s.addGroup(), h = l.addShape("text", {
                        className: "guide-tag-text",
                        zIndex: 1,
                        attrs: c.mix({
                            x: 0,
                            y: 0,
                            text: i
                        }, a)
                    });
                    o.push(h);
                    var f = h.getBBox(), p = c.parsePadding(r.padding), d = f.width + p[1] + p[3], g = f.height + p[0] + p[2], v = f.minY - p[0], m = f.minX - p[3], y = l.addShape("rect", {
                        className: "guide-tag-bg",
                        zIndex: -1,
                        attrs: c.mix({
                            x: m,
                            y: v,
                            width: d,
                            height: g
                        }, r)
                    });
                    o.push(y);
                    var x, b = this.autoAdjust ? this._getDirect(e, n, d, g) : this.direct, _ = this.side, S = n.x + this.offsetX, P = n.y + this.offsetY, R = c.parsePadding(r.radius);
                    "tl" === b ? (x = [ {
                        x: d + m - _ - 1,
                        y: g + v - 1
                    }, {
                        x: d + m,
                        y: g + v - 1
                    }, {
                        x: d + m,
                        y: g + _ + v
                    } ], R[2] = 0, S -= d, P = P - _ - g) : "cl" === b ? (x = [ {
                        x: d + m - 1,
                        y: (g - _) / 2 + v - 1
                    }, {
                        x: d + m - 1,
                        y: (g + _) / 2 + v + 1
                    }, {
                        x: d + _ + m,
                        y: g / 2 + v
                    } ], S = S - d - _, P -= g / 2) : "bl" === b ? (x = [ {
                        x: d + m,
                        y: -_ + v
                    }, {
                        x: d + m - _ - 1,
                        y: v + 1
                    }, {
                        x: d + m,
                        y: v + 1
                    } ], R[1] = 0, S -= d, P += _) : "bc" === b ? (x = [ {
                        x: d / 2 + m,
                        y: -_ + v
                    }, {
                        x: (d - _) / 2 + m - 1,
                        y: v + 1
                    }, {
                        x: (d + _) / 2 + m + 1,
                        y: v + 1
                    } ], S -= d / 2, P += _) : "br" === b ? (x = [ {
                        x: m,
                        y: v - _
                    }, {
                        x: m,
                        y: v + 1
                    }, {
                        x: m + _ + 1,
                        y: v + 1
                    } ], R[0] = 0, P += _) : "cr" === b ? (x = [ {
                        x: m - _,
                        y: g / 2 + v
                    }, {
                        x: m + 1,
                        y: (g - _) / 2 + v - 1
                    }, {
                        x: m + 1,
                        y: (g + _) / 2 + v + 1
                    } ], S += _, P -= g / 2) : "tr" === b ? (x = [ {
                        x: m,
                        y: g + _ + v
                    }, {
                        x: m,
                        y: g + v - 1
                    }, {
                        x: _ + m + 1,
                        y: g + v - 1
                    } ], R[3] = 0, P = P - g - _) : "tc" === b && (x = [ {
                        x: (d - _) / 2 + m - 1,
                        y: g + v - 1
                    }, {
                        x: (d + _) / 2 + m + 1,
                        y: g + v - 1
                    }, {
                        x: d / 2 + m,
                        y: g + _ + v
                    } ], S -= d / 2, P = P - g - _);
                    var C = l.addShape("Polygon", {
                        className: "guide-tag-side",
                        zIndex: 0,
                        attrs: {
                            points: x,
                            fill: r.fill
                        }
                    });
                    return o.push(C), y.attr("radius", R), l.moveTo(S - m, P - v), l.sort(), this.element = s, 
                    o;
                }
            }, e;
        }(l);
        l.Tag = h, e.exports = h;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318,
            "./base": 1585748419393
        }[t], t);
    }), n(1585748419399, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("../../util/common"), l = t("./base"), h = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initDefaultCfg = function() {
                this.type = "point", this.position = null, this.offsetX = 0, this.offsetY = 0, this.style = {
                    fill: "#1890FF",
                    r: 3,
                    lineWidth: 1,
                    stroke: "#fff"
                };
            }, n.render = function(t, e) {
                var n = this.parsePoint(t, this.position);
                if (!n) return null;
                var i = e.addShape("Circle", {
                    className: "guide-point",
                    attrs: c.mix({
                        x: n.x + this.offsetX,
                        y: n.y + this.offsetY
                    }, this.style)
                });
                return this.element = i, i;
            }, e;
        }(l);
        l.Point = h, e.exports = h;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318,
            "./base": 1585748419393
        }[t], t);
    }), n(1585748419400, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault"), o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = t("../util/common"), l = {
            circle: function(t, e, n, i) {
                i.arc(t, e, n, 0, 2 * Math.PI, !1);
            },
            square: function(t, e, n, i) {
                i.moveTo(t - n, e - n), i.lineTo(t + n, e - n), i.lineTo(t + n, e + n), i.lineTo(t - n, e + n), 
                i.closePath();
            }
        }, h = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n._initProperties = function() {
                t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                this._attrs.type = "marker";
            }, n.getDefaultAttrs = function() {
                return {
                    x: 0,
                    y: 0,
                    lineWidth: 0
                };
            }, n.createPath = function(t) {
                var e, n = this.get("attrs"), i = n.x, r = n.y, a = n.radius, o = n.symbol || "circle";
                e = c.isFunction(o) ? o : l[o], t.beginPath(), e(i, r, a, t, this);
            }, n.calculateBox = function() {
                var t = this.get("attrs"), e = t.x, n = t.y, i = t.radius;
                return {
                    minX: e - i,
                    minY: n - i,
                    maxX: e + i,
                    maxY: n + i
                };
            }, e;
        }(t("../graphic/index").Shape);
        e.exports = h;
    }, function(t) {
        return i({
            "../util/common": 1585748419318,
            "../graphic/index": 1585748419346
        }[t], t);
    }), n(1585748419401, function(t, e, n) {
        function i(t) {
            var e = t.getAttr("color");
            if (e) {
                var n = e.getScale(e.type);
                if (n.isLinear) return n;
            }
            var i = t.getXScale(), r = t.getYScale();
            return r || i;
        }
        function r(t, e) {
            var n, r, a = t._getGroupScales();
            if (a.length && l.each(a, function(t) {
                return r = t, !1;
            }), r) {
                var o = r.field;
                n = r.getText(e[o]);
            } else {
                var s = i(t);
                n = s.alias || s.field;
            }
            return n;
        }
        function a(t, e) {
            var n = i(t);
            return n.getText(e[n.field]);
        }
        function o(t, e) {
            var n = t.getAttr("position").getFields()[0], i = t.get("scales")[n];
            return i.getText(e[i.field]);
        }
        function s(t, e) {
            var n = -1;
            return l.each(t, function(t, i) {
                if (t.title === e.title && t.name === e.name && t.value === e.value && t.color === e.color) return n = i, 
                !1;
            }), n;
        }
        function u(t) {
            var e = [];
            return l.each(t, function(t) {
                var n = s(e, t);
                -1 === n ? e.push(t) : e[n] = t;
            }), e;
        }
        function c(t, e) {
            return JSON.stringify(t) === JSON.stringify(e);
        }
        var l = t("../util/common"), h = t("../global"), f = t("../component/tooltip"), p = t("../util/helper");
        h.tooltip = l.deepMix({
            triggerOn: "press",
            triggerOff: "pressend",
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
        }, h.tooltip || {});
        var d = function() {
            function t(t) {
                var e = this;
                this.handleShowEvent = function(t) {
                    var n = e.chart;
                    if (e.enable) {
                        var i = n.get("plotRange"), r = l.createEvent(t, n);
                        if (p.isPointInPlot(r, i) || e._tooltipCfg.alwaysShow) {
                            var a = e.timeStamp, o = +new Date();
                            o - a > 16 && (e.showTooltip(r), e.timeStamp = o);
                        } else e.hideTooltip();
                    }
                }, this.handleHideEvent = function() {
                    e.enable && e.hideTooltip();
                }, this.enable = !0, this.cfg = {}, this.tooltip = null, this.chart = null, this.timeStamp = 0, 
                l.mix(this, t);
                var n = this.chart.get("canvas");
                this.canvas = n, this.canvasDom = n.get("el");
            }
            var e = t.prototype;
            return e._setCrosshairsCfg = function() {
                var t = this.chart, e = l.mix({}, h.tooltip), n = t.get("geoms"), i = [];
                l.each(n, function(t) {
                    var e = t.get("type");
                    -1 === i.indexOf(e) && i.push(e);
                });
                var r = t.get("coord").type;
                return !n.length || "cartesian" !== r && "rect" !== r || 1 === i.length && -1 !== [ "line", "area", "path", "point" ].indexOf(i[0]) && l.mix(e, {
                    showCrosshairs: !0
                }), e;
            }, e._getMaxLength = function(t) {
                void 0 === t && (t = {});
                var e = t, n = e.layout, i = e.plotRange;
                return "horizontal" === n ? i.br.x - i.bl.x : i.bl.y - i.tr.y;
            }, e.render = function() {
                var t = this;
                if (!t.tooltip) {
                    var e = t.chart, n = e.get("canvas"), i = e.get("frontPlot").addGroup({
                        className: "tooltipContainer",
                        zIndex: 10
                    }), r = e.get("backPlot").addGroup({
                        className: "tooltipContainer"
                    }), a = e.get("plotRange"), o = e.get("coord"), s = t._setCrosshairsCfg(), u = t.cfg, c = l.deepMix({
                        plotRange: a,
                        frontPlot: i,
                        backPlot: r,
                        canvas: n,
                        fixed: o.transposed || o.isPolar
                    }, s, u);
                    c.maxLength = t._getMaxLength(c), this._tooltipCfg = c;
                    var h = new f(c);
                    t.tooltip = h, t.bindEvents();
                }
            }, e.clear = function() {
                var t = this.tooltip;
                t && (t.destroy(), this.unBindEvents()), this.tooltip = null, this.prePoint = null, 
                this._lastActive = null;
            }, e._getTooltipMarkerStyle = function(t) {
                void 0 === t && (t = {});
                var e = t, n = e.type, i = e.items, r = this._tooltipCfg;
                if ("rect" === n) {
                    var a, o, s, u, c = this.chart, h = c.get("plotRange"), f = h.tl, p = h.br, d = c.get("coord"), g = i[0], v = i[i.length - 1], m = g.width;
                    d.transposed ? (a = f.x, o = v.y - .75 * m, s = p.x - f.x, u = g.y - v.y + 1.5 * m) : (a = g.x - .75 * m, 
                    o = f.y, s = v.x - g.x + 1.5 * m, u = p.y - f.y), t.style = l.mix({
                        x: a,
                        y: o,
                        width: s,
                        height: u,
                        fill: "#CCD6EC",
                        opacity: .3
                    }, r.tooltipMarkerStyle);
                } else t.style = l.mix({
                    radius: 4,
                    fill: "#fff",
                    lineWidth: 2
                }, r.tooltipMarkerStyle);
                return t;
            }, e._setTooltip = function(t, e, n) {
                void 0 === n && (n = {});
                var i = this._lastActive, r = this.tooltip, a = this._tooltipCfg;
                e = u(e);
                var o = this.chart, s = o.get("coord"), h = o.getYScales()[0], f = a.snap;
                if (!1 === f && h.isLinear) {
                    var d, g, v = s.invertPoint(t), m = o.get("plotRange");
                    p.isPointInPlot(t, m) && (s.transposed ? (d = h.invert(v.x), g = t.x, r.setXTipContent(d), 
                    r.setXTipPosition(g), r.setYCrosshairPosition(g)) : (d = h.invert(v.y), g = t.y, 
                    r.setYTipContent(d), r.setYTipPosition(g), r.setXCrosshairPosition(g)));
                }
                if (a.onShow && a.onShow({
                    x: t.x,
                    y: t.y,
                    tooltip: r,
                    items: e,
                    tooltipMarkerCfg: n
                }), c(i, e)) !1 === f && (l.directionEnabled(a.crosshairsType, "y") || a.showYTip) && this.chart.get("canvas").draw(); else {
                    this._lastActive = e;
                    var y = a.onChange;
                    y && y({
                        x: t.x,
                        y: t.y,
                        tooltip: r,
                        items: e,
                        tooltipMarkerCfg: n
                    });
                    var x = e[0], b = x.title || x.name, _ = x.x;
                    if (e.length > 1 && (_ = (e[0].x + e[e.length - 1].x) / 2), r.setContent(b, e, s.transposed), 
                    r.setPosition(e, t), s.transposed) {
                        var S = x.y;
                        e.length > 1 && (S = (e[0].y + e[e.length - 1].y) / 2), r.setYTipContent(b), r.setYTipPosition(S), 
                        r.setXCrosshairPosition(S), f && (r.setXTipContent(x.value), r.setXTipPosition(_), 
                        r.setYCrosshairPosition(_));
                    } else r.setXTipContent(b), r.setXTipPosition(_), r.setYCrosshairPosition(_), f && (r.setYTipContent(x.value), 
                    r.setYTipPosition(x.y), r.setXCrosshairPosition(x.y));
                    var P = n.items;
                    a.showTooltipMarker && P.length ? (n = this._getTooltipMarkerStyle(n), r.setMarkers(n)) : r.clearMarkers(), 
                    r.show();
                }
            }, e.showTooltip = function(t) {
                var e, n, i = this, s = i.chart, u = [], c = [], f = i._tooltipCfg;
                f.showItemMarker && (n = f.itemMarkerStyle);
                var p = s.get("geoms"), d = s.get("coord");
                if (l.each(p, function(i) {
                    if (i.get("visible")) {
                        var s = i.get("type"), f = i.getSnapRecords(t), p = i.get("adjust");
                        if ("interval" === s && p && "symmetric" === p.type) return;
                        l.each(f, function(t) {
                            if (t.x && t.y) {
                                var f = t.x, p = t.y, g = t._origin, v = t.color, m = {
                                    x: f,
                                    y: l.isArray(p) ? p[1] : p,
                                    color: v || h.defaultColor,
                                    origin: g,
                                    name: r(i, g),
                                    value: a(i, g),
                                    title: o(i, g)
                                };
                                n && (m.marker = l.mix({
                                    fill: v || h.defaultColor
                                }, n)), c.push(m), -1 !== [ "line", "area", "path" ].indexOf(s) ? (e = "circle", 
                                u.push(m)) : "interval" !== s || "cartesian" !== d.type && "rect" !== d.type || (e = "rect", 
                                m.width = i.getSize(t._origin), u.push(m));
                            }
                        });
                    }
                }), c.length) {
                    var g = {
                        items: u,
                        type: e
                    };
                    i._setTooltip(t, c, g);
                } else i.hideTooltip();
            }, e.hideTooltip = function() {
                var t = this._tooltipCfg;
                this._lastActive = null;
                var e = this.tooltip;
                e && (e.hide(), t.onHide && t.onHide({
                    tooltip: e
                }), this.chart.get("canvas").draw());
            }, e._handleEvent = function(t, e, n) {
                var i = this.canvas;
                l.each([].concat(t), function(t) {
                    "bind" === n ? i.on(t, e) : i.off(t, e);
                });
            }, e.bindEvents = function() {
                var t = this._tooltipCfg, e = t.triggerOn, n = t.triggerOff, i = t.alwaysShow;
                e && this._handleEvent(e, this.handleShowEvent, "bind"), i || this._handleEvent(n, this.handleHideEvent, "bind");
            }, e.unBindEvents = function() {
                var t = this._tooltipCfg, e = t.triggerOn, n = t.triggerOff, i = t.alwaysShow;
                e && this._handleEvent(e, this.handleShowEvent, "unBind"), i || this._handleEvent(n, this.handleHideEvent, "unBind");
            }, t;
        }();
        e.exports = {
            init: function(t) {
                var e = new d({
                    chart: t
                });
                t.set("tooltipController", e), t.tooltip = function(t, n) {
                    return l.isObject(t) && (n = t, t = !0), e.enable = t, n && (e.cfg = n), this;
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
    }, function(t) {
        return i({
            "../util/common": 1585748419318,
            "../global": 1585748419316,
            "../component/tooltip": 1585748419402,
            "../util/helper": 1585748419368
        }[t], t);
    }), n(1585748419402, function(t, e, n) {
        var i = t("../util/common"), r = t("./marker"), a = t("./list"), o = t("./text-box"), s = function() {
            function t(t) {
                i.deepMix(this, this.getDefaultCfg(), t);
                var e = this.frontPlot;
                if (!this.custom) {
                    var n = new a(i.mix({
                        parent: e,
                        zIndex: 3
                    }, t));
                    this.container = n;
                    var r = this.fixed, s = this.background;
                    r || (this.tooltipArrow = e.addShape("Polygon", {
                        className: "tooltip-arrow",
                        visible: !1,
                        zIndex: 2,
                        attrs: i.mix({
                            points: []
                        }, s)
                    }));
                }
                if (this.showXTip) {
                    var u = this.xTipBackground, c = new o({
                        className: "xTip",
                        background: u,
                        visible: !1
                    });
                    e.add(c.container), this.xTipBox = c;
                }
                if (this.showYTip) {
                    var l = this.yTipBackground, h = new o({
                        className: "yTip",
                        background: l,
                        visible: !1
                    });
                    e.add(h.container), this.yTipBox = h;
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
                    var n = this.container;
                    n.setTitle(t), n.setItems(e);
                }
            }, e.setYTipContent = function(t) {
                var e = this.yTip;
                t = i.isFunction(e) ? e(t) : i.mix({
                    text: t
                }, e), this.yTipBox && this.yTipBox.updateContent(t);
            }, e.setYTipPosition = function(t) {
                var e = this.plotRange, n = this.crosshairsShapeX;
                if (this.showYTip) {
                    var i = this.yTipBox, r = i.getHeight(), a = i.getWidth(), o = e.tl.x - a, s = t - r / 2;
                    s <= e.tl.y && (s = e.tl.y), s + r >= e.br.y && (s = e.br.y - r), o < 0 && (o = e.tl.x, 
                    n && n.attr("x1", e.tl.x + a)), i.updatePosition(o, s);
                }
            }, e.setXTipContent = function(t) {
                var e = this.xTip;
                t = i.isFunction(e) ? e(t) : i.mix({
                    text: t
                }, e), this.xTipBox && this.xTipBox.updateContent(t);
            }, e.setXTipPosition = function(t) {
                var e = this.showXTip, n = this.canvas, i = this.plotRange, r = this.xTipBox, a = this.crosshairsShapeY;
                if (e) {
                    var o = n.get("height"), s = r.getWidth(), u = r.getHeight(), c = t - s / 2, l = i.br.y;
                    c <= i.tl.x && (c = i.tl.x), c + s >= i.tr.x && (c = i.tr.x - s), o - l < u && (l -= u), 
                    r.updatePosition(c, l), a && a.attr("y1", l);
                }
            }, e.setXCrosshairPosition = function(t) {
                this.crosshairsShapeX && this.crosshairsShapeX.moveTo(0, t);
            }, e.setYCrosshairPosition = function(t) {
                this.crosshairsShapeY && this.crosshairsShapeY.moveTo(t, 0);
            }, e.setPosition = function(t) {
                var e = this.container, n = this.plotRange, r = this.offsetX, a = this.offsetY, o = this.fixed, s = this.tooltipArrow;
                if (e) {
                    var u = e.container.getBBox(), c = u.minX, l = u.minY, h = u.width, f = u.height, p = n.tl, d = n.tr, g = 0, v = p.y - f - 4 + a;
                    if (o) g = (p.x + d.x) / 2 - h / 2 + r; else {
                        var m;
                        if (m = t.length > 1 ? (t[0].x + t[t.length - 1].x) / 2 : t[0].x, (g = m - h / 2 + r) < p.x && (g = p.x), 
                        g + h > d.x && (g = d.x - h), s) {
                            s.attr("points", [ {
                                x: m - 3,
                                y: p.y - 4 + a
                            }, {
                                x: m + 3,
                                y: p.y - 4 + a
                            }, {
                                x: m,
                                y: p.y + a
                            } ]);
                            var y = e.backShape, x = i.parsePadding(y.attr("radius"));
                            m === p.x ? (x[3] = 0, s.attr("points", [ {
                                x: p.x,
                                y: p.y + a
                            }, {
                                x: p.x,
                                y: p.y - 4 + a
                            }, {
                                x: p.x + 4,
                                y: p.y - 4 + a
                            } ])) : m === d.x && (x[2] = 0, s.attr("points", [ {
                                x: d.x,
                                y: p.y + a
                            }, {
                                x: d.x - 4,
                                y: p.y - 4 + a
                            }, {
                                x: d.x,
                                y: p.y - 4 + a
                            } ])), y.attr("radius", x);
                        }
                    }
                    e.moveTo(g - c, v - l);
                }
            }, e.setMarkers = function(t) {
                void 0 === t && (t = {});
                var e = this, n = t, a = n.items, o = n.style, s = n.type, u = e._getMarkerGroup(s);
                if ("circle" === s) for (var c = 0, l = a.length; c < l; c++) {
                    var h = a[c], f = new r({
                        className: "tooltip-circle-marker",
                        attrs: i.mix({
                            x: h.x,
                            y: h.y,
                            stroke: h.color
                        }, o)
                    });
                    u.add(f);
                } else u.addShape("rect", {
                    className: "tooltip-rect-marker",
                    attrs: o
                });
            }, e.clearMarkers = function() {
                var t = this.markerGroup;
                t && t.clear();
            }, e.show = function() {
                var t = this.crosshairsShapeX, e = this.crosshairsShapeY, n = this.markerGroup, i = this.container, r = this.tooltipArrow, a = this.xTipBox, o = this.yTipBox, s = this.canvas;
                t && t.show(), e && e.show(), n && n.show(), i && i.show(), r && r.show(), a && a.show(), 
                o && o.show(), s.draw();
            }, e.hide = function() {
                var t = this.crosshairsShapeX, e = this.crosshairsShapeY, n = this.markerGroup, i = this.container, r = this.tooltipArrow, a = this.xTipBox, o = this.yTipBox;
                t && t.hide(), e && e.hide(), n && n.hide(), i && i.hide(), r && r.hide(), a && a.hide(), 
                o && o.hide();
            }, e.destroy = function() {
                var t = this.crosshairsShapeX, e = this.crosshairsShapeY, n = this.markerGroup, i = this.container, r = this.tooltipArrow, a = this.xTipBox, o = this.yTipBox;
                t && t.remove(!0), e && e.remove(!0), n && n.remove(!0), r && r.remove(!0), i && i.clear(), 
                a && a.clear(), o && o.clear(), this.destroyed = !0;
            }, e._getMarkerGroup = function(t) {
                var e = this.markerGroup;
                return e ? e.clear() : ("circle" === t ? (e = this.frontPlot.addGroup({
                    zIndex: 1
                }), this.frontPlot.sort()) : e = this.backPlot.addGroup(), this.markerGroup = e), 
                e;
            }, e._renderCrosshairs = function() {
                var t = this.crosshairsType, e = this.crosshairsStyle, n = this.frontPlot, r = this.plotRange, a = r.tl, o = r.br;
                i.directionEnabled(t, "x") && (this.crosshairsShapeX = n.addShape("Line", {
                    className: "tooltip-crosshairs-x",
                    zIndex: 0,
                    visible: !1,
                    attrs: i.mix({
                        x1: a.x,
                        y1: 0,
                        x2: o.x,
                        y2: 0
                    }, e)
                })), i.directionEnabled(t, "y") && (this.crosshairsShapeY = n.addShape("Line", {
                    className: "tooltip-crosshairs-y",
                    zIndex: 0,
                    visible: !1,
                    attrs: i.mix({
                        x1: 0,
                        y1: o.y,
                        x2: 0,
                        y2: a.y
                    }, e)
                }));
            }, t;
        }();
        e.exports = s;
    }, function(t) {
        return i({
            "../util/common": 1585748419318,
            "./marker": 1585748419400,
            "./list": 1585748419403,
            "./text-box": 1585748419404
        }[t], t);
    }), n(1585748419403, function(t, e, n) {
        var i = t("../util/common"), r = t("../graphic/index").Group, a = t("./marker"), o = function() {
            function t(t) {
                i.deepMix(this, this.getDefaultCfg(), t), this._init(), this._renderTitle(), this._renderItems();
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
                var n = e.addGroup({
                    className: "itemsGroup"
                });
                this.itemsGroup = n, this.parent && this.parent.add(t);
            }, e._renderTitle = function(t) {
                t = t || this.title;
                var e = this.titleShape, n = 0;
                if (this.showTitle && t) {
                    if (e && !e.get("destroyed")) e.attr("text", t); else {
                        var r = this.wrapper, a = this.titleStyle;
                        e = r.addShape("text", {
                            className: "title",
                            attrs: i.mix({
                                x: 0,
                                y: 0,
                                text: t
                            }, a)
                        }), this.titleShape = e;
                    }
                    n = e.getBBox().height + this.titleGap;
                }
                this._titleHeight = n;
            }, e._renderItems = function(t) {
                var e = this;
                (t = t || e.items) && (e.reversed && t.reverse(), i.each(t, function(t, n) {
                    e._addItem(t, n);
                }), t.length > 1 && this._adjustItems(), this._renderBackground());
            }, e._renderBackground = function() {
                var t = this.background;
                if (t) {
                    var e = this.container, n = this.wrapper.getBBox(), r = n.minX, a = n.minY, o = n.width, s = n.height, u = t.padding || [ 0, 0, 0, 0 ];
                    u = i.parsePadding(u);
                    var c = i.mix({
                        x: r - u[3],
                        y: a - u[0],
                        width: o + u[1] + u[3],
                        height: s + u[0] + u[2]
                    }, t), l = this.backShape;
                    l ? l.attr(c) : l = e.addShape("Rect", {
                        zIndex: -1,
                        attrs: c
                    }), this.backShape = l, e.sort();
                }
            }, e._addItem = function(t) {
                var e = this.itemsGroup.addGroup({
                    name: t.name,
                    value: t.value,
                    dataValue: t.dataValue,
                    checked: t.checked
                }), n = this.unCheckStyle, r = this.unCheckColor, o = this.nameStyle, s = this.valueStyle, u = this.wordSpace, c = t.marker, l = t.value, h = 0;
                if (r && (n.fill = r), c) {
                    var f = c.radius || 3, p = i.mix({
                        x: f,
                        y: this._titleHeight
                    }, c);
                    !1 === t.checked && i.mix(p, n);
                    var d = new a({
                        className: "item-marker",
                        attrs: p
                    });
                    e.add(d), h += d.getBBox().width + u;
                }
                var g, v = t.name;
                if (v) {
                    var m = this.joinString || "";
                    v = l ? v + m : v, g = e.addShape("text", {
                        className: "name",
                        attrs: i.mix({
                            x: h,
                            y: this._titleHeight,
                            text: this._formatItemValue(v)
                        }, o, !1 === t.checked ? n : null)
                    });
                }
                if (l) {
                    var y = h;
                    g && (y += g.getBBox().width), e.addShape("text", {
                        className: "value",
                        attrs: i.mix({
                            x: y,
                            y: this._titleHeight,
                            text: l
                        }, s, !1 === t.checked ? n : null)
                    });
                }
                return e;
            }, e._formatItemValue = function(t) {
                var e = this.itemFormatter;
                return e && (t = e.call(this, t)), t;
            }, e._getMaxItemWidth = function() {
                var t = this.itemWidth;
                if (i.isNumber(t) || i.isNil(t)) return t;
                if ("auto" === t) {
                    for (var e = this.itemsGroup.get("children"), n = e.length, r = 0, a = 0; a < n; a++) {
                        var o = e[a].getBBox().width;
                        r = Math.max(r, o);
                    }
                    var s = this.maxLength, u = this.itemGap, c = (s - u) / 2, l = (s - 2 * u) / 3;
                    return 2 === n ? Math.max(r, c) : r <= l ? l : r <= c ? c : r;
                }
            }, e._adjustHorizontal = function() {
                for (var t, e, n = this.maxLength, i = this.itemsGroup.get("children"), r = this.itemGap, a = this.itemMarginBottom, o = this._titleHeight, s = 0, u = 0, c = this._getMaxItemWidth(), l = [], h = 0, f = i.length; h < f; h++) {
                    var p = i[h], d = p.getBBox(), g = d.height, v = d.width;
                    e = g + a, (t = c || v) - (n - u) > 1e-4 && (s++, u = 0), p.moveTo(u, s * e), l.push({
                        x: u,
                        y: s * e + o - g / 2,
                        width: 1.375 * v,
                        height: 1.375 * g
                    }), u += t + r;
                }
                this.legendHitBoxes = l;
            }, e._adjustVertical = function() {
                for (var t, e, n = this.maxLength, r = this.itemsGroup, a = this.itemGap, o = this.itemMarginBottom, s = this.itemWidth, u = this._titleHeight, c = r.get("children"), l = 0, h = 0, f = 0, p = [], d = 0, g = c.length; d < g; d++) {
                    var v = c[d], m = v.getBBox();
                    t = m.width, e = m.height, i.isNumber(s) ? h = s + a : t > h && (h = t + a), n - l < e ? (l = 0, 
                    f += h, v.moveTo(f, 0), p.push({
                        x: f,
                        y: u - e / 2,
                        width: 1.375 * t,
                        height: 1.375 * e
                    })) : (v.moveTo(f, l), p.push({
                        x: f,
                        y: l - e / 2 + u,
                        width: 1.375 * t,
                        height: 1.375 * e
                    })), l += e + o;
                }
                this.legendHitBoxes = p;
            }, e._adjustItems = function() {
                "horizontal" === this.layout ? this._adjustHorizontal() : this._adjustVertical();
            }, e.moveTo = function(t, e) {
                this.x = t, this.y = e;
                var n = this.container;
                return n && n.moveTo(t, e), this;
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
        e.exports = o;
    }, function(t) {
        return i({
            "../util/common": 1585748419318,
            "../graphic/index": 1585748419346,
            "./marker": 1585748419400
        }[t], t);
    }), n(1585748419404, function(t, e, n) {
        var i = t("../util/common"), r = t("../graphic/index").Group, a = function() {
            function t(t) {
                i.deepMix(this, this.getDefaultCfg(), t), this._init();
                var e = this.content, n = this.x, r = this.y;
                i.isNil(e) || this.updateContent(e), this.updatePosition(n, r);
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
                var t = this.content, e = this.textStyle, n = this.background, a = this.className, o = this.visible, s = new r({
                    className: a,
                    zIndex: 0,
                    visible: o
                }), u = s.addShape("Text", {
                    className: a + "-text",
                    zIndex: 1,
                    attrs: i.mix({
                        text: t,
                        x: 0,
                        y: 0
                    }, e)
                }), c = s.addShape("Rect", {
                    className: a + "-bg",
                    zIndex: -1,
                    attrs: i.mix({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }, n)
                });
                s.sort(), this.container = s, this.textShape = u, this.backgroundShape = c;
            }, e._getBBox = function() {
                var t = this.textShape, e = this.background, n = t.getBBox(), r = i.parsePadding(e.padding), a = n.width + r[1] + r[3], o = n.height + r[0] + r[2];
                return {
                    x: n.minX - r[3],
                    y: n.minY - r[0],
                    width: a,
                    height: o
                };
            }, e.updateContent = function(t) {
                var e = this.textShape, n = this.backgroundShape;
                if (!i.isNil(t)) {
                    i.isObject(t) || (t = {
                        text: t
                    }), e.attr(t);
                    var r = this._getBBox(), a = r.x, o = r.y, s = r.width, u = r.height, c = this.width || s, l = this.height || u;
                    n.attr({
                        x: a,
                        y: o,
                        width: c,
                        height: l
                    }), this._width = c, this._height = l, this.content = t.text;
                }
            }, e.updatePosition = function(t, e) {
                var n = this.container, i = this._getBBox(), r = i.x, a = i.y;
                n.moveTo(t - r, e - a), this.x = t - r, this.y = e - a;
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
        e.exports = a;
    }, function(t) {
        return i({
            "../util/common": 1585748419318,
            "../graphic/index": 1585748419346
        }[t], t);
    }), n(1585748419405, function(t, e, n) {
        var i = t("../util/common"), r = t("../component/guide/base"), a = t("../global");
        a.guide = i.deepMix({
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
        var o = function() {
            function t(t) {
                this.guides = [], this.xScale = null, this.yScales = null, this.guideShapes = [], 
                i.mix(this, t);
            }
            var e = t.prototype;
            return e._toString = function(t) {
                return i.isFunction(t) && (t = t(this.xScale, this.yScales)), t = t.toString();
            }, e._getId = function(t, e) {
                var n = e.id;
                if (!n) {
                    var i = e.type;
                    n = "arc" === i || "line" === i || "rect" === i ? this._toString(e.start) + "-" + this._toString(e.end) : this._toString(e.position);
                }
                return n;
            }, e.paint = function(t) {
                var e = this, n = e.chart, r = e.guides, a = e.xScale, o = e.yScales, s = [];
                i.each(r, function(i, r) {
                    i.xScale = a, i.yScales = o;
                    var u;
                    "regionFilter" === i.type ? i.chart = n : u = i.top ? e.frontPlot : e.backPlot, 
                    i.coord = t, i.container = u, i.canvas = n.get("canvas");
                    var c = i.render(t, u);
                    if (c) {
                        var l = e._getId(c, i);
                        [].concat(c).forEach(function(t) {
                            t._id = t.get("className") + "-" + l, t.set("index", r), s.push(t);
                        });
                    }
                }), e.guideShapes = s;
            }, e.clear = function() {
                return this.reset(), this.guides = [], this;
            }, e.reset = function() {
                var t = this.guides;
                i.each(t, function(t) {
                    t.remove();
                });
            }, e._createGuide = function(t, e) {
                var n = i.upperFirst(t), o = new r[n](i.deepMix({}, a.guide[t], e));
                return this.guides.push(o), o;
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
        e.exports = {
            init: function(t) {
                var e = new o({
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
                    var n = t.getXScale(), i = t.getYScales(), r = t.get("coord");
                    e.xScale = n, e.yScales = i, e.chart = t, e.paint(r);
                }
            },
            clear: function(t) {
                t.get("guideController").clear();
            },
            repaint: function(t) {
                t.get("guideController").reset();
            }
        };
    }, function(t) {
        return i({
            "../util/common": 1585748419318,
            "../component/guide/base": 1585748419393,
            "../global": 1585748419316
        }[t], t);
    }), n(1585748419406, function(t, e, n) {
        function i(t, e) {
            var n = 0;
            switch (e = r.parsePadding(e), t) {
              case "top":
                n = e[0];
                break;

              case "right":
                n = e[1];
                break;

              case "bottom":
                n = e[2];
                break;

              case "left":
                n = e[3];
            }
            return n;
        }
        var r = t("../util/common"), a = t("../component/list"), o = t("../global"), s = {
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
        o.legend = r.deepMix({
            common: s,
            right: r.mix({
                position: "right",
                layout: "vertical"
            }, s),
            left: r.mix({
                position: "left",
                layout: "vertical"
            }, s),
            top: r.mix({
                position: "top",
                layout: "horizontal"
            }, s),
            bottom: r.mix({
                position: "bottom",
                layout: "horizontal"
            }, s)
        }, o.legend || {});
        var u = function() {
            function t(t) {
                var e = this;
                this.handleEvent = function(t) {
                    var n = e, i = n.chart, a = r.createEvent(t, i), o = function(t, e) {
                        var i = null, a = n.legends;
                        return r.each(a, function(n) {
                            r.each(n, function(n) {
                                var a = n.itemsGroup, o = n.legendHitBoxes, s = a.get("children");
                                if (s.length) {
                                    var u = n.x, c = n.y;
                                    r.each(o, function(r, a) {
                                        if (t >= r.x + u && t <= r.x + r.width + u && e >= r.y + c && e <= r.height + r.y + c) return i = {
                                            clickedItem: s[a],
                                            clickedLegend: n
                                        }, !1;
                                    });
                                }
                            });
                        }), i;
                    }(a.x, a.y);
                    if (o && !1 !== o.clickedLegend.clickable) {
                        var s = o.clickedItem, u = o.clickedLegend;
                        if (u.onClick) t.clickedItem = s, u.onClick(t); else if (!u.custom) {
                            var c = s.get("checked"), l = s.get("dataValue"), h = u.filteredVals, f = u.field;
                            "single" === u.selectedMode ? i.filter(f, function(t) {
                                return t === l;
                            }) : (c ? h.push(l) : r.Array.remove(h, l), i.filter(f, function(t) {
                                return -1 === h.indexOf(t);
                            })), i.repaint();
                        }
                    }
                }, this.legendCfg = {}, this.enable = !0, this.position = "top", r.mix(this, t);
                var n = this.chart;
                this.canvasDom = n.get("canvas").get("el"), this.clear();
            }
            var e = t.prototype;
            return e.addLegend = function(t, e, n) {
                var i = this, r = i.legendCfg, a = t.field, o = r[a];
                if (!1 === o) return null;
                if (o && o.custom) i.addCustomLegend(a); else {
                    var s = r.position || i.position;
                    o && o.position && (s = o.position), t.isCategory && i._addCategoryLegend(t, e, s, n);
                }
            }, e.addCustomLegend = function(t) {
                var e = this, n = e.legendCfg;
                t && n[t] && (n = n[t]);
                var i = n.position || e.position, s = e.legends;
                s[i] = s[i] || [];
                var u = n.items;
                if (!u) return null;
                var c = e.container;
                r.each(u, function(t) {
                    r.isPlainObject(t.marker) ? t.marker.radius = t.marker.radius || 3 : t.marker = {
                        symbol: t.marker || "circle",
                        fill: t.fill,
                        radius: 3
                    }, t.checked = !!r.isNil(t.checked) || t.checked, t.name = t.name || t.value;
                });
                var l = new a(r.deepMix({}, o.legend[i], n, {
                    maxLength: e._getMaxLength(i),
                    items: u,
                    parent: c
                }));
                s[i].push(l);
            }, e.clear = function() {
                var t = this.legends;
                r.each(t, function(t) {
                    r.each(t, function(t) {
                        t.clear();
                    });
                }), this.legends = {}, this.unBindEvents();
            }, e._isFiltered = function(t, e, n) {
                var i = !1;
                return r.each(e, function(e) {
                    if (i = i || t.getText(e) === t.getText(n)) return !1;
                }), i;
            }, e._getMaxLength = function(t) {
                var e = this.chart, n = r.parsePadding(e.get("appendPadding"));
                return "right" === t || "left" === t ? e.get("height") - (n[0] + n[2]) : e.get("width") - (n[1] + n[3]);
            }, e._addCategoryLegend = function(t, e, n, i) {
                var s = this, u = s.legendCfg, c = s.legends, l = s.container, h = s.chart, f = t.field;
                c[n] = c[n] || [];
                var p = "circle";
                u[f] && u[f].marker ? p = u[f].marker : u.marker && (p = u.marker), r.each(e, function(e) {
                    r.isPlainObject(p) ? r.mix(e.marker, p) : e.marker.symbol = p, i && (e.checked = !s._isFiltered(t, i, e.dataValue));
                }), h.get("legendItems")[f] = e;
                var d = r.deepMix({}, o.legend[n], u[f] || u, {
                    maxLength: s._getMaxLength(n),
                    items: e,
                    field: f,
                    filteredVals: i,
                    parent: l
                });
                d.showTitle && r.deepMix(d, {
                    title: t.alias || t.field
                });
                var g = new a(d);
                return c[n].push(g), g;
            }, e._alignLegend = function(t, e, n) {
                var i = this, a = i.plotRange, o = a.tl, s = a.bl, u = i.chart, c = t.offsetX || 0, l = t.offsetY || 0, h = u.get("width"), f = u.get("height"), p = r.parsePadding(u.get("appendPadding")), d = t.getHeight(), g = t.getWidth(), v = 0, m = 0;
                if ("left" === n || "right" === n) {
                    var y = t.verticalAlign || "middle", x = Math.abs(o.y - s.y);
                    v = "left" === n ? p[3] : h - g - p[1], m = (x - d) / 2 + o.y, "top" === y ? m = o.y : "bottom" === y && (m = s.y - d), 
                    e && (m = e.get("y") - d - 12);
                } else {
                    var b = t.align || "left";
                    if (v = p[3], "center" === b ? v = h / 2 - g / 2 : "right" === b && (v = h - (g + p[1])), 
                    m = "top" === n ? p[0] + Math.abs(t.container.getBBox().minY) : f - d, e) {
                        var _ = e.getWidth();
                        v = e.x + _ + 12;
                    }
                }
                "bottom" === n && l > 0 && (l = 0), "right" === n && c > 0 && (c = 0), t.moveTo(v + c, m + l);
            }, e.alignLegends = function() {
                var t = this, e = t.legends;
                return r.each(e, function(e, n) {
                    r.each(e, function(i, r) {
                        var a = e[r - 1];
                        t._alignLegend(i, a, n);
                    });
                }), t;
            }, e.bindEvents = function() {
                var t = this.legendCfg.triggerOn || "touchstart";
                r.addEventListener(this.canvasDom, t, this.handleEvent);
            }, e.unBindEvents = function() {
                var t = this.legendCfg.triggerOn || "touchstart";
                r.removeEventListener(this.canvasDom, t, this.handleEvent);
            }, t;
        }();
        e.exports = {
            init: function(t) {
                var e = new u({
                    container: t.get("backPlot"),
                    plotRange: t.get("plotRange"),
                    chart: t
                });
                t.set("legendController", e), t.legend = function(t, n) {
                    var i = e.legendCfg;
                    return e.enable = !0, r.isBoolean(t) ? (e.enable = t, i = n || {}) : r.isObject(t) ? i = t : i[t] = n, 
                    e.legendCfg = i, this;
                };
            },
            beforeGeomDraw: function(t) {
                var e = t.get("legendController");
                if (!e.enable) return null;
                var n = e.legendCfg;
                if (n && n.custom) e.addCustomLegend(); else {
                    var a = t.getLegendItems(), o = t.get("scales"), s = t.get("filters");
                    r.each(a, function(t, n) {
                        var i, r = o[n], a = r.values;
                        i = s && s[n] ? a.filter(function(t) {
                            return !s[n](t);
                        }) : [], e.addLegend(r, t, i);
                    });
                }
                n && !1 !== n.clickable && e.bindEvents();
                var u = e.legends, c = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                };
                r.each(u, function(e, n) {
                    var a = 0;
                    r.each(e, function(t) {
                        var e = t.getWidth(), i = t.getHeight();
                        "top" === n || "bottom" === n ? (a = Math.max(a, i), t.offsetY > 0 && (a += t.offsetY)) : (a = Math.max(a, e), 
                        t.offsetX > 0 && (a += t.offsetX));
                    }), c[n] = a + i(n, t.get("appendPadding"));
                }), t.set("legendRange", c);
            },
            afterGeomDraw: function(t) {
                t.get("legendController").alignLegends();
            },
            clearInner: function(t) {
                t.get("legendController").clear(), t.set("legendRange", null);
            }
        };
    }, function(t) {
        return i({
            "../util/common": 1585748419318,
            "../component/list": 1585748419403,
            "../global": 1585748419316
        }[t], t);
    }), n(1585748419407, function(t, e, n) {
        function i(t, e) {
            var n = {};
            for (var i in e) f.isNumber(t[i]) && t[i] !== e[i] ? n[i] = e[i] : f.isArray(t[i]) && JSON.stringify(t[i]) !== JSON.stringify(e[i]) && (n[i] = e[i]);
            return n;
        }
        function r(t, e, n) {
            var i, r = t.get("type"), a = "geom" + n + "-" + r, o = t.getXScale(), s = t.getYScale(), u = o.field || "x", c = s.field || "y", l = e[c];
            i = o.isIdentity ? o.value : e[u], a += "interval" === r || "schema" === r ? "-" + i : "line" === r || "area" === r || "path" === r ? "-" + r : o.isCategory ? "-" + i : "-" + i + "-" + l;
            var h = t._getGroupScales();
            return f.each(h, function(t) {
                var n = t.field;
                "identity" !== t.type && (a += "-" + e[n]);
            }), a;
        }
        function a(t, e, n) {
            var i = [];
            return f.each(t, function(t, a) {
                var o = t.get("container").get("children"), s = t.get("type"), u = f.isNil(t.get("animateCfg")) ? l(s, e) : t.get("animateCfg");
                !1 !== u && f.each(o, function(e, o) {
                    e.get("className") === s && (e._id = r(t, e.get("origin")._origin, a), e.set("coord", n), 
                    e.set("animateCfg", u), e.set("index", o), i.push(e));
                }), t.set("shapes", o);
            }), i;
        }
        function o(t) {
            for (var e = {}, n = 0, i = t.length; n < i; n++) {
                var r = t[n];
                if (r._id && !r.isClip) {
                    var a = r._id;
                    e[a] = {
                        _id: a,
                        type: r.get("type"),
                        attrs: f.mix({}, r._attrs.attrs),
                        className: r.get("className"),
                        geomType: r.get("className"),
                        index: r.get("index"),
                        coord: r.get("coord"),
                        animateCfg: r.get("animateCfg")
                    };
                }
            }
            return e;
        }
        function s(t, e, n, i) {
            return f.isFunction(i) ? i : f.isString(i) ? v.Action[i] : v.getAnimation(t, e, n);
        }
        function u(t, e, n) {
            if (!1 === n || f.isObject(n) && !1 === n[e]) return !1;
            var i = v.getAnimateCfg(t, e);
            return n && n[e] ? f.deepMix({}, i, n[e]) : i;
        }
        function c(t, e, n) {
            var r, a, o = [], c = [];
            f.each(e, function(e) {
                var n = t[e._id];
                n ? (e.set("cacheShape", n), o.push(e), delete t[e._id]) : c.push(e);
            }), f.each(t, function(t) {
                var e = t.className, i = t.coord, o = t._id, c = t.attrs, l = t.index, h = t.type;
                if (!1 === (a = u(e, "leave", t.animateCfg))) return !0;
                if (r = s(e, i, "leave", a.animation), f.isFunction(r)) {
                    var p = n.addShape(h, {
                        attrs: c,
                        index: l,
                        canvas: n,
                        className: e
                    });
                    p._id = o, r(p, a, i);
                }
            }), f.each(o, function(t) {
                var e = t.get("className");
                if (!1 === (a = u(e, "update", t.get("animateCfg")))) return !0;
                var n = t.get("coord"), o = t.get("cacheShape").attrs, c = i(o, t._attrs.attrs);
                Object.keys(c).length && (r = s(e, n, "update", a.animation), f.isFunction(r) ? r(t, a, n) : (t.attr(o), 
                t.animate().to({
                    attrs: c,
                    duration: a.duration,
                    easing: a.easing,
                    delay: a.delay
                }).onEnd(function() {
                    t.set("cacheShape", null);
                })));
            }), f.each(c, function(t) {
                var e = t.get("className"), n = t.get("coord");
                if (!1 === (a = u(e, "enter", t.get("animateCfg")))) return !0;
                if (r = s(e, n, "enter", a.animation), f.isFunction(r)) if ("interval" === e && n.isPolar && n.transposed) {
                    var i = t.get("index"), c = o[i - 1];
                    r(t, a, c);
                } else r(t, a, n);
            });
        }
        function l(t, e) {
            if (!t) return null;
            var n = e.get("animate");
            return t.indexOf("guide-tag") > -1 && (t = "guide-tag"), f.isObject(n) ? n[t] : !1 !== n && null;
        }
        var h, f = t("../util/common"), p = t("../graphic/element"), d = t("../graphic/animate/timeline"), g = t("../graphic/animate/animator"), v = t("./animate"), m = t("./shape-action"), y = t("./group-action"), x = t("../chart/chart");
        p.prototype.animate = function() {
            var t = f.mix({}, this.get("attrs"));
            return new g(this, t, h);
        }, x.prototype.animate = function(t) {
            return this.set("animate", t), this;
        }, v.Action = m, v.defaultCfg = {
            interval: {
                enter: function(t) {
                    return t.isPolar && t.transposed ? function(t) {
                        t.set("zIndex", -1), t.get("parent").sort();
                    } : m.fadeIn;
                }
            },
            area: {
                enter: function(t) {
                    return t.isPolar ? null : m.fadeIn;
                }
            },
            line: {
                enter: function(t) {
                    return t.isPolar ? null : m.fadeIn;
                }
            },
            path: {
                enter: function(t) {
                    return t.isPolar ? null : m.fadeIn;
                }
            }
        };
        var b = {
            line: function(t) {
                return t.isPolar ? y.groupScaleInXY : y.groupWaveIn;
            },
            area: function(t) {
                return t.isPolar ? y.groupScaleInXY : y.groupWaveIn;
            },
            path: function(t) {
                return t.isPolar ? y.groupScaleInXY : y.groupWaveIn;
            },
            point: function() {
                return y.shapesScaleInXY;
            },
            interval: function(t) {
                var e;
                return t.isPolar ? (e = y.groupScaleInXY, t.transposed && (e = y.groupWaveIn)) : e = t.transposed ? y.groupScaleInX : y.groupScaleInY, 
                e;
            },
            schema: function() {
                return y.groupWaveIn;
            }
        };
        e.exports = {
            afterCanvasInit: function() {
                (h = new d()).play();
            },
            beforeCanvasDraw: function(t) {
                if (!1 !== t.get("animate")) {
                    var e = t.get("isUpdate"), n = t.get("canvas"), i = t.get("coord"), r = t.get("geoms"), h = n.get("caches") || [];
                    0 === h.length && (e = !1);
                    var p = a(r, t, i), d = t.get("axisController"), g = d.frontPlot, m = d.backPlot, x = g.get("children").concat(m.get("children")), _ = [];
                    t.get("guideController") && (_ = t.get("guideController").guideShapes);
                    var S = [];
                    if (x.concat(_).forEach(function(e) {
                        var n = l(e.get("className"), t);
                        e.set("coord", i), e.set("animateCfg", n), S.push(e), p.push(e);
                    }), n.set("caches", o(p)), e) c(h, p, n); else {
                        var P, R;
                        f.each(r, function(e) {
                            var n = e.get("type"), r = f.isNil(e.get("animateCfg")) ? l(n, t) : e.get("animateCfg");
                            if (!1 !== r) if (P = u(n, "appear", r), R = s(n, i, "appear", P.animation), f.isFunction(R)) {
                                var a = e.get("shapes");
                                f.each(a, function(t) {
                                    R(t, P, i);
                                });
                            } else if (b[n]) {
                                R = y[P.animation] || b[n](i);
                                var o = e.getYScale(), c = i.convertPoint({
                                    x: 0,
                                    y: o.scale(e.getYMinValue())
                                }), h = e.get("container");
                                R && R(h, P, i, c);
                            }
                        }), f.each(S, function(t) {
                            var e = t.get("animateCfg"), n = t.get("className");
                            if (e && e.appear) {
                                var r = v.getAnimateCfg(n, "appear"), a = f.deepMix({}, r, e.appear), o = s(n, i, "appear", a.animation);
                                f.isFunction(o) && o(t, a, i);
                            }
                        });
                    }
                }
            },
            afterCanvasDestroyed: function() {
                h.stop();
            }
        };
    }, function(t) {
        return i({
            "../util/common": 1585748419318,
            "../graphic/element": 1585748419352,
            "../graphic/animate/timeline": 1585748419408,
            "../graphic/animate/animator": 1585748419409,
            "./animate": 1585748419411,
            "./shape-action": 1585748419412,
            "./group-action": 1585748419414,
            "../chart/chart": 1585748419321
        }[t], t);
    }), n(1585748419408, function(e, n, i) {
        var r = e("../util/requestAnimationFrame").requestAnimationFrame, a = "object" === ("undefined" == typeof performance ? "undefined" : t(performance)) && performance.now ? performance : Date, o = function() {
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
                    var n = this.anims[e];
                    if (!(t < n.startTime || n.hasEnded)) {
                        var i = n.shape;
                        if (i.get("destroyed")) this.anims.splice(e, 1), e--; else {
                            var r = n.startState, o = n.endState, s = n.interpolate, u = n.duration;
                            t >= n.startTime && !n.hasStarted && (n.hasStarted = !0, n.onStart && n.onStart());
                            var c = (t - n.startTime) / u;
                            if (c = Math.max(0, Math.min(c, 1)), c = n.easing(c), n.onFrame) n.onFrame(c); else for (var l in s) {
                                var h = (0, s[l])(c), f = void 0;
                                if ("points" === l) {
                                    f = [];
                                    for (var p = Math.max(r.points.length, o.points.length), d = 0; d < p; d += 2) f.push({
                                        x: h[d],
                                        y: h[d + 1]
                                    });
                                } else f = h;
                                i._attrs.attrs[l] = f, i._attrs.bbox = null;
                            }
                            var g = i.get("canvas");
                            -1 === this.canvas.indexOf(g) && this.canvas.push(g), n.onUpdate && n.onUpdate(c), 
                            t >= n.endTime && !n.hasEnded && (n.hasEnded = !0, n.onEnd && n.onEnd()), 1 === c && (this.anims.splice(e, 1), 
                            e--);
                        }
                    }
                }
                this.canvas.map(function(t) {
                    return t.draw(), t;
                }), this.time = a.now();
            }, t;
        }();
        n.exports = o;
    }, function(t) {
        return i({
            "../util/requestAnimationFrame": 1585748419355
        }[t], t);
    }), n(1585748419409, function(t, e, n) {
        function i(t) {
            for (var e = [], n = 0, i = t.length; n < i; n++) t[n] && (e.push(t[n].x), e.push(t[n].y));
            return e;
        }
        function r(t, e) {
            return t = +t, e -= t, function(n) {
                return t + e * n;
            };
        }
        function a(t, e) {
            var n, i = e ? e.length : 0, a = t ? Math.min(i, t.length) : 0, o = new Array(a), s = new Array(i);
            for (n = 0; n < a; ++n) o[n] = r(t[n], e[n]);
            for (;n < i; ++n) s[n] = e[n];
            return function(t) {
                for (n = 0; n < a; ++n) s[n] = o[n](t);
                return s;
            };
        }
        var o = t("./easing"), s = function() {
            function t(t, e, n) {
                this.hasStarted = !1, this.hasEnded = !1, this.shape = t, this.source = e, this.timeline = n, 
                this.animate = null;
            }
            var e = t.prototype;
            return e.to = function(t) {
                void 0 === t && (t = {});
                var e, n = t.delay || 0, s = t.attrs || {}, u = t.duration || 1e3;
                e = "function" == typeof t.easing ? t.easing : o[t.easing] || o.linear;
                var c = {
                    shape: this.shape,
                    startTime: this.timeline.time + n,
                    duration: u,
                    easing: e
                }, l = {};
                for (var h in s) {
                    var f = this.source[h], p = s[h];
                    "points" === h ? (f = i(f), p = i(p), l.points = a(f, p), this.source.points = f, 
                    s.points = p) : "matrix" === h ? l.matrix = a(f, p) : l[h] = r(f, p);
                }
                return c.interpolate = l, c.startState = this.source, c.endState = s, c.endTime = c.startTime + u, 
                this.timeline.anims.push(c), this.animate = c, this;
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
        e.exports = s;
    }, function(t) {
        return i({
            "./easing": 1585748419410
        }[t], t);
    }), n(1585748419410, function(t, e, n) {
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
                var e, n = .1, i = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), !n || n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), 
                -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i));
            },
            elasticOut: function(t) {
                var e, n = .1, i = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), !n || n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), 
                n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1);
            },
            elasticInOut: function(t) {
                var e, n = .1, i = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), !n || n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), 
                (t *= 2) < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1);
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
        e.exports = i;
    }, function(t) {
        return i({}[t], t);
    }), n(1585748419411, function(t, e, n) {
        var i = t("../util/common"), r = {
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
            getAnimation: function(t, e, n) {
                var r = this.defaultCfg[t];
                if (r) {
                    var a = r[n];
                    if (i.isFunction(a)) return a(e);
                }
                return !1;
            },
            getAnimateCfg: function(t, e) {
                var n = r[e], a = this.defaultCfg[t];
                return a && a.cfg && a.cfg[e] ? i.deepMix({}, n, a.cfg[e]) : n;
            },
            registerAnimation: function(t, e) {
                this.Action || (this.Action = {}), this.Action[t] = e;
            }
        };
        e.exports = a;
    }, function(t) {
        return i({
            "../util/common": 1585748419318
        }[t], t);
    }), n(1585748419412, function(t, e, n) {
        var i = t("../util/common"), r = t("./util");
        e.exports = {
            fadeIn: function(t, e) {
                var n = i.isNil(t.attr("fillOpacity")) ? 1 : t.attr("fillOpacity"), a = i.isNil(t.attr("strokeOpacity")) ? 1 : t.attr("strokeOpacity");
                t.attr("fillOpacity", 0), t.attr("strokeOpacity", 0);
                var o = {
                    fillOpacity: n,
                    strokeOpacity: a
                };
                r.doAnimation(t, o, e);
            }
        };
    }, function(t) {
        return i({
            "../util/common": 1585748419318,
            "./util": 1585748419413
        }[t], t);
    }), n(1585748419413, function(t, e, n) {
        var i = t("../graphic/index").Matrix, r = t("../util/common"), a = {
            getCoordInfo: function(t) {
                var e = t.start, n = t.end;
                return {
                    start: e,
                    end: n,
                    width: n.x - e.x,
                    height: Math.abs(n.y - e.y)
                };
            },
            getScaledMatrix: function(t, e, n) {
                var r;
                t.apply(e);
                var a = e[0], o = e[1];
                if ("x" === n) {
                    t.transform([ [ "t", a, o ], [ "s", .01, 1 ], [ "t", -a, -o ] ]);
                    var s = t.getMatrix();
                    r = i.transform(s, [ [ "t", a, o ], [ "s", 100, 1 ], [ "t", -a, -o ] ]);
                } else if ("y" === n) {
                    t.transform([ [ "t", a, o ], [ "s", 1, .01 ], [ "t", -a, -o ] ]);
                    var u = t.getMatrix();
                    r = i.transform(u, [ [ "t", a, o ], [ "s", 1, 100 ], [ "t", -a, -o ] ]);
                } else if ("xy" === n) {
                    t.transform([ [ "t", a, o ], [ "s", .01, .01 ], [ "t", -a, -o ] ]);
                    var c = t.getMatrix();
                    r = i.transform(c, [ [ "t", a, o ], [ "s", 100, 100 ], [ "t", -a, -o ] ]);
                }
                return r;
            },
            getAnimateParam: function(t, e, n) {
                var i = {};
                return t.delay && (i.delay = r.isFunction(t.delay) ? t.delay(e, n) : t.delay), i.easing = t.easing, 
                i.duration = t.duration, i.delay = t.delay, i;
            },
            doAnimation: function(t, e, n, i) {
                var r = t._id, o = t.get("index"), s = a.getAnimateParam(n, o, r), u = s.easing, c = s.delay, l = s.duration, h = t.animate().to({
                    attrs: e,
                    duration: l,
                    delay: c,
                    easing: u
                });
                i && h.onEnd(function() {
                    i();
                });
            }
        };
        e.exports = a;
    }, function(t) {
        return i({
            "../graphic/index": 1585748419346,
            "../util/common": 1585748419318
        }[t], t);
    }), n(1585748419414, function(t, e, n) {
        function i(t, e, n, i, r) {
            var o, u, c = a.getCoordInfo(n), l = c.start, h = c.end, f = c.width, p = c.height, d = new s.Rect({
                attrs: {
                    x: l.x,
                    y: h.y,
                    width: f,
                    height: p
                }
            });
            "y" === r ? (o = l.x + f / 2, u = i.y < l.y ? i.y : l.y) : "x" === r ? (o = i.x > l.x ? i.x : l.x, 
            u = l.y + p / 2) : "xy" === r && (n.isPolar ? (o = n.center.x, u = n.center.y) : (o = (l.x + h.x) / 2, 
            u = (l.y + h.y) / 2));
            var g = a.getScaledMatrix(d, [ o, u ], r);
            d.isClip = !0, d.endState = {
                matrix: g
            }, d.set("canvas", t.get("canvas")), t.attr("clip", d);
            a.doAnimation(d, d.endState, e, function() {
                t.attr("clip", null), d.remove(!0);
            });
        }
        function r(t, e, n) {
            for (var i, r, o, s = t.get("children"), u = 0, c = s.length; u < c; u++) {
                var l = s[u], h = l.getBBox();
                i = (h.minX + h.maxX) / 2, r = (h.minY + h.maxY) / 2, o = a.getScaledMatrix(l, [ i, r ], n), 
                a.doAnimation(l, {
                    matrix: o
                }, e);
            }
        }
        var a = t("./util"), o = t("../util/helper"), s = t("../graphic/index").Shape;
        e.exports = {
            groupWaveIn: function(t, e, n) {
                var i = o.getClip(n);
                i.set("canvas", t.get("canvas")), t.attr("clip", i);
                var r = {};
                if (n.isPolar) {
                    var s = n.startAngle, u = n.endAngle;
                    r.endAngle = u, i.attr("endAngle", s);
                } else {
                    var c = n.start, l = n.end, h = Math.abs(c.x - l.x), f = Math.abs(c.y - l.y);
                    n.isTransposed ? (i.attr("height", 0), r.height = f) : (i.attr("width", 0), r.width = h);
                }
                a.doAnimation(i, r, e, function() {
                    t.attr("clip", null), i.remove(!0);
                });
            },
            groupScaleInX: function(t, e, n, r) {
                i(t, e, n, r, "x");
            },
            groupScaleInY: function(t, e, n, r) {
                i(t, e, n, r, "y");
            },
            groupScaleInXY: function(t, e, n, r) {
                i(t, e, n, r, "xy");
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
    }, function(t) {
        return i({
            "./util": 1585748419413,
            "../util/helper": 1585748419368,
            "../graphic/index": 1585748419346
        }[t], t);
    }), n(1585748419415, function(t, e, n) {
        var i = t("@babel/runtime/helpers/interopRequireDefault"), r = i(t("../register")), a = i(t("./pan")), o = i(t("./pinch"));
        r.default.registerInteraction("pan", a.default), r.default.registerInteraction("pinch", o.default);
    }, function(t) {
        return i({
            "../register": 1585748419416,
            "./pan": 1585748419417,
            "./pinch": 1585748419420
        }[t], t);
    }), n(1585748419416, function(t, e, n) {
        n.__esModule = !0, n.default = void 0;
        var i = t("../util/common"), r = t("../chart/chart");
        r._Interactions = {}, r.registerInteraction = function(t, e) {
            r._Interactions[t] = e;
        }, r.getInteraction = function(t) {
            return r._Interactions[t];
        }, r.prototype.interaction = function(t, e) {
            var n = this._interactions || {};
            n[t] && n[t].destroy();
            var i = new (r.getInteraction(t))(e, this);
            return n[t] = i, this._interactions = n, this;
        }, r.prototype.clearInteraction = function(t) {
            var e = this._interactions;
            if (e) return t ? (e[t] && e[t].destroy(), delete e[t]) : (0, i.each)(e, function(t, n) {
                t.destroy(), delete e[n];
            }), this;
        };
        var a = r;
        n.default = a;
    }, function(t) {
        return i({
            "../util/common": 1585748419318,
            "../chart/chart": 1585748419321
        }[t], t);
    }), n(1585748419417, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, s.default)(t);
                if (r()) {
                    var i = (0, s.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, o.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault");
        n.__esModule = !0, n.default = void 0;
        var o = a(t("@babel/runtime/helpers/possibleConstructorReturn")), s = a(t("@babel/runtime/helpers/getPrototypeOf")), u = a(t("@babel/runtime/helpers/inheritsLoose")), c = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            (0, u.default)(e, t);
            i(e);
            var n = e.prototype;
            return n.getDefaultCfg = function() {
                return {
                    type: "pan",
                    startEvent: "panstart",
                    processEvent: "pan",
                    endEvent: "panend"
                };
            }, n.start = function() {
                this.context.start();
            }, n.process = function(t) {
                var e = t.direction, n = t.deltaX;
                if ("up" !== e && "down" !== e) {
                    t.preventDefault && t.preventDefault();
                    var i = this.context, r = i.chart.get("coord"), a = r.start, o = n / (r.end.x - a.x);
                    i.doMove(o);
                }
            }, e;
        }(a(t("./base")).default);
        n.default = c;
    }, function(t) {
        return i({
            "./base": 1585748419418
        }[t], t);
    }), n(1585748419418, function(t, e, n) {
        var i = t("@babel/runtime/helpers/interopRequireDefault");
        n.__esModule = !0, n.default = void 0;
        var r = t("../../util/common"), a = i(t("./context")), o = function() {
            function t(t, e) {
                var n = this;
                this.type = "", this.startEvent = "touchstart", this.processEvent = "touchmove", 
                this.endEvent = "touchend", this.resetEvent = null, this.context = null, this._start = function(t) {
                    n.start(t);
                }, this._process = function(t) {
                    n.process(t);
                }, this._end = function(t) {
                    n.end(t);
                }, this._reset = function(t) {
                    n.reset(t);
                }, (0, r.mix)(this, this.getDefaultCfg(), t), this.context = this.getInteractionContext(e), 
                this.chart = e;
                var i = this.range;
                i && (this.context.range = i), this._bindEvents(e);
            }
            var e = t.prototype;
            return e.getDefaultCfg = function() {
                return {};
            }, e.getInteractionContext = function(t) {
                var e = t.get("interactionContext");
                return e || (e = new a.default(t), t.set("interactionContext", e), e);
            }, e._bindEvents = function(t) {
                var e = this.startEvent, n = this.processEvent, i = this.endEvent, r = this.resetEvent, a = t.get("canvas");
                a.on(e, this._start), a.on(n, this._process), a.on(i, this._end), a.on(r, this._reset);
            }, e._clearEvents = function() {
                var t = this.chart, e = this.startEvent, n = this.processEvent, i = this.endEvent, r = this.resetEvent, a = t.get("canvas");
                a.off(e, this._start), a.off(n, this._process), a.off(i, this._end), a.off(r, this._start);
            }, e.start = function() {}, e.process = function() {}, e.end = function() {}, e.reset = function() {}, 
            e.destroy = function() {
                this._clearEvents();
            }, t;
        }();
        n.default = o;
    }, function(t) {
        return i({
            "../../util/common": 1585748419318,
            "./context": 1585748419419
        }[t], t);
    }), n(1585748419419, function(t, e, n) {
        function i(t, e) {
            if (t.length !== e.length) return !1;
            var n = t.length - 1;
            return t[0] === e[0] && t[n] === e[n];
        }
        n.__esModule = !0, n.default = void 0;
        var r = t("../../util/array"), a = t("../../chart/const"), o = t("@antv/scale/lib/auto/cat"), s = [ 0, 1 ], u = function() {
            function t(t) {
                this.chart = null, this.values = null, this.range = s, this.startRange = s, this.minCount = 10, 
                this.chart = t, this._initEvent(t);
            }
            var e = t.prototype;
            return e._initEvent = function(t) {
                var e = this;
                t.on(a.EVENT_AFTER_INIT, function() {
                    var t = e.getPinchScale(), n = [].concat(t.values);
                    e.values = n, e.minScale || (e.minScale = e.minCount / n.length), e.range !== s && (e.updateRange(e.range), 
                    e.updateTicks());
                }), t.on(a.EVENT_AFTER_DATA_CHANGE, function() {
                    e.updateRange(e.range);
                });
            }, e.getPinchScale = function() {
                return this.chart.getXScale();
            }, e.getFollowScale = function() {
                return (this.chart.getYScales() || [])[0];
            }, e.start = function() {
                var t = this.range, e = this.getPinchScale(), n = t[0], i = t[1];
                this.startRange = [ n, i ], this.lastTickCount = e.tickCount;
            }, e.doZoom = function(t, e, n) {
                var i = this.startRange, r = this.minScale, a = i[0], o = i[1], s = (o - a) * (1 - n), u = s * t, c = s * e, l = Math.max(0, a - u), h = Math.min(1, o + c), f = [ l, h ];
                h - l < r || this.updateRange(f);
            }, e.doMove = function(t) {
                if (t) {
                    var e, n = this.startRange, i = n[0], r = n[1], a = r - i, o = a * t, s = i - o, u = r - o;
                    e = s < 0 ? [ 0, a ] : u > 1 ? [ 1 - a, 1 ] : [ s, u ], this.updateRange(e);
                }
            }, e.updateRange = function(t) {
                var e = this.values, n = t[0], i = t[1];
                n = Math.max(0, n), i = Math.min(1, i), this.range = [ n, i ];
                var r = e.length, a = n * r, o = i * r, s = e.slice(a, o);
                this.repaint(s);
            }, e.repaint = function(t) {
                var e = this.chart, n = this.getPinchScale(), r = n.values, a = n.ticks;
                i(r, t) || (this.updateScale(n, {
                    ticks: a,
                    values: t
                }), this.updateFollowScale(n, t), e.repaint());
            }, e.updateFollowScale = function(t, e) {
                var n = this.chart, i = this.getFollowScale(), a = t.field, o = t.type, s = i.field, u = [], c = {};
                e.forEach(function(t) {
                    c[t] = !0;
                }), n.get("data").forEach(function(e) {
                    if ("timeCat" === o) {
                        var n = t._toTimeStamp(e[a]);
                        c[n] && u.push(e[s]);
                    }
                });
                var l = (0, r.getRange)(u), h = l.min, f = l.max;
                this.updateScale(i, {
                    min: h,
                    max: f,
                    nice: !0
                });
            }, e.updateScale = function(t, e) {
                t && t.change(e);
            }, e.updateTicks = function() {
                var t = this.chart, e = this.lastTickCount, n = this.values, i = this.getPinchScale(), r = i.values, a = i.tickCount, s = i.isRounding, u = Math.round(a * n.length / r.length);
                if (u !== e) {
                    var c = o({
                        maxCount: u,
                        data: n,
                        isRounding: s
                    }).ticks;
                    this.updateScale(i, {
                        ticks: c,
                        values: r
                    }), t.repaint();
                }
            }, t;
        }();
        n.default = u;
    }, function(t) {
        return i({
            "../../util/array": 1585748419319,
            "../../chart/const": 1585748419322
        }[t], t);
    }), n(1585748419420, function(t, e, n) {
        function i(t) {
            return function() {
                var e, n = (0, u.default)(t);
                if (r()) {
                    var i = (0, u.default)(this).constructor;
                    e = Reflect.construct(n, arguments, i);
                } else e = n.apply(this, arguments);
                return (0, s.default)(this, e);
            };
        }
        function r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        var a = t("@babel/runtime/helpers/interopRequireDefault");
        n.__esModule = !0, n.default = void 0;
        var o = a(t("@babel/runtime/helpers/assertThisInitialized")), s = a(t("@babel/runtime/helpers/possibleConstructorReturn")), u = a(t("@babel/runtime/helpers/getPrototypeOf")), c = a(t("@babel/runtime/helpers/inheritsLoose")), l = a(t("./base")), h = t("../../util/common"), f = function(t) {
            function e(e, n) {
                var i;
                i = t.call(this, e, n) || this;
                var r = (0, o.default)(i).context;
                return (0, h.mix)(r, e), i;
            }
            (0, c.default)(e, t);
            i(e);
            var n = e.prototype;
            return n.getDefaultCfg = function() {
                return {
                    type: "pinch",
                    startEvent: "pinchstart",
                    processEvent: "pinch",
                    endEvent: "pinchend"
                };
            }, n.start = function() {
                this.context.start();
            }, n.process = function(t) {
                t.preventDefault && t.preventDefault();
                var e = t.zoom, n = t.center, i = this.context, r = i.chart.get("coord"), a = r.start, o = r.end, s = o.x - a.x, u = Math.abs(n.x - a.x) / s, c = Math.abs(o.x - n.x) / s;
                i.doZoom(u, c, e);
            }, n.end = function() {
                this.context.updateTicks();
            }, e;
        }(l.default);
        n.default = f;
    }, function(t) {
        return i({
            "./base": 1585748419418,
            "../../util/common": 1585748419318
        }[t], t);
    }), i(1585748419314);
}();