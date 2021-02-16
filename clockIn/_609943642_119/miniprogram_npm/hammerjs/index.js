var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function() {
    var e = {}, n = function(n, i) {
        if (!e[n]) return require(i);
        if (!e[n].status) {
            var r = e[n].m;
            r._exports = r._tempexports;
            var s = Object.getOwnPropertyDescriptor(r, "exports");
            s && s.configurable && Object.defineProperty(r, "exports", {
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
    return function(t, n, i) {
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
    }(1585748419426, function(e, n, i) {
        !function(e, i, r, s) {
            function o(t, e, n) {
                return setTimeout(l(t, n), e);
            }
            function a(t, e, n) {
                return !!Array.isArray(t) && (u(t, n[e], n), !0);
            }
            function u(t, e, n) {
                var i;
                if (t) if (t.forEach) t.forEach(e, n); else if (t.length !== s) for (i = 0; i < t.length; ) e.call(n, t[i], i, t), 
                i++; else for (i in t) t.hasOwnProperty(i) && e.call(n, t[i], i, t);
            }
            function h(t, n, i) {
                var r = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
                return function() {
                    var n = new Error("get-stack-trace"), i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", s = e.console && (e.console.warn || e.console.log);
                    return s && s.call(e.console, r, i), t.apply(this, arguments);
                };
            }
            function c(t, e, n) {
                var i, r = e.prototype;
                (i = t.prototype = Object.create(r)).constructor = t, i._super = r, n && pt(i, n);
            }
            function l(t, e) {
                return function() {
                    return t.apply(e, arguments);
                };
            }
            function p(e, n) {
                return (void 0 === e ? "undefined" : t(e)) == dt ? e.apply(n ? n[0] || s : s, n) : e;
            }
            function f(t, e) {
                return t === s ? e : t;
            }
            function v(t, e, n) {
                u(y(e), function(e) {
                    t.addEventListener(e, n, !1);
                });
            }
            function d(t, e, n) {
                u(y(e), function(e) {
                    t.removeEventListener(e, n, !1);
                });
            }
            function m(t, e) {
                for (;t; ) {
                    if (t == e) return !0;
                    t = t.parentNode;
                }
                return !1;
            }
            function g(t, e) {
                return t.indexOf(e) > -1;
            }
            function y(t) {
                return t.trim().split(/\s+/g);
            }
            function T(t, e, n) {
                if (t.indexOf && !n) return t.indexOf(e);
                for (var i = 0; i < t.length; ) {
                    if (n && t[i][n] == e || !n && t[i] === e) return i;
                    i++;
                }
                return -1;
            }
            function E(t) {
                return Array.prototype.slice.call(t, 0);
            }
            function _(t, e, n) {
                for (var i = [], r = [], s = 0; s < t.length; ) {
                    var o = e ? t[s][e] : t[s];
                    T(r, o) < 0 && i.push(t[s]), r[s] = o, s++;
                }
                return n && (i = e ? i.sort(function(t, n) {
                    return t[e] > n[e];
                }) : i.sort()), i;
            }
            function b(t, e) {
                for (var n, i, r = e[0].toUpperCase() + e.slice(1), o = 0; o < ft.length; ) {
                    if (n = ft[o], (i = n ? n + r : e) in t) return i;
                    o++;
                }
                return s;
            }
            function x() {
                return _t++;
            }
            function I(t) {
                var n = t.ownerDocument || t;
                return n.defaultView || n.parentWindow || e;
            }
            function A(t, e) {
                var n = this;
                this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, 
                this.domHandler = function(e) {
                    p(t.options.enable, [ t ]) && n.handler(e);
                }, this.init();
            }
            function S(t) {
                var e = t.options.inputClass;
                return new (e || (It ? W : At ? L : xt ? U : q))(t, P);
            }
            function P(t, e, n) {
                var i = n.pointers.length, r = n.changedPointers.length, s = e & Pt && i - r == 0, o = e & (Dt | wt) && i - r == 0;
                n.isFirst = !!s, n.isFinal = !!o, s && (t.session = {}), n.eventType = e, C(t, n), 
                t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n;
            }
            function C(t, e) {
                var n = t.session, i = e.pointers, r = i.length;
                n.firstInput || (n.firstInput = O(e)), r > 1 && !n.firstMultiple ? n.firstMultiple = O(e) : 1 === r && (n.firstMultiple = !1);
                var s = n.firstInput, o = n.firstMultiple, a = o ? o.center : s.center, u = e.center = R(i);
                e.timeStamp = yt(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = X(a, u), 
                e.distance = N(a, u), D(n, e), e.offsetDirection = z(e.deltaX, e.deltaY);
                var h = M(e.deltaTime, e.deltaX, e.deltaY);
                e.overallVelocityX = h.x, e.overallVelocityY = h.y, e.overallVelocity = gt(h.x) > gt(h.y) ? h.x : h.y, 
                e.scale = o ? F(o.pointers, i) : 1, e.rotation = o ? Y(o.pointers, i) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length, 
                w(n, e);
                var c = t.element;
                m(e.srcEvent.target, c) && (c = e.srcEvent.target), e.target = c;
            }
            function D(t, e) {
                var n = e.center, i = t.offsetDelta || {}, r = t.prevDelta || {}, s = t.prevInput || {};
                e.eventType !== Pt && s.eventType !== Dt || (r = t.prevDelta = {
                    x: s.deltaX || 0,
                    y: s.deltaY || 0
                }, i = t.offsetDelta = {
                    x: n.x,
                    y: n.y
                }), e.deltaX = r.x + (n.x - i.x), e.deltaY = r.y + (n.y - i.y);
            }
            function w(t, e) {
                var n, i, r, o, a = t.lastInterval || e, u = e.timeStamp - a.timeStamp;
                if (e.eventType != wt && (u > St || a.velocity === s)) {
                    var h = e.deltaX - a.deltaX, c = e.deltaY - a.deltaY, l = M(u, h, c);
                    i = l.x, r = l.y, n = gt(l.x) > gt(l.y) ? l.x : l.y, o = z(h, c), t.lastInterval = e;
                } else n = a.velocity, i = a.velocityX, r = a.velocityY, o = a.direction;
                e.velocity = n, e.velocityX = i, e.velocityY = r, e.direction = o;
            }
            function O(t) {
                for (var e = [], n = 0; n < t.pointers.length; ) e[n] = {
                    clientX: mt(t.pointers[n].clientX),
                    clientY: mt(t.pointers[n].clientY)
                }, n++;
                return {
                    timeStamp: yt(),
                    pointers: e,
                    center: R(e),
                    deltaX: t.deltaX,
                    deltaY: t.deltaY
                };
            }
            function R(t) {
                var e = t.length;
                if (1 === e) return {
                    x: mt(t[0].clientX),
                    y: mt(t[0].clientY)
                };
                for (var n = 0, i = 0, r = 0; r < e; ) n += t[r].clientX, i += t[r].clientY, r++;
                return {
                    x: mt(n / e),
                    y: mt(i / e)
                };
            }
            function M(t, e, n) {
                return {
                    x: e / t || 0,
                    y: n / t || 0
                };
            }
            function z(t, e) {
                return t === e ? Ot : gt(t) >= gt(e) ? t < 0 ? Rt : Mt : e < 0 ? zt : Nt;
            }
            function N(t, e, n) {
                n || (n = qt);
                var i = e[n[0]] - t[n[0]], r = e[n[1]] - t[n[1]];
                return Math.sqrt(i * i + r * r);
            }
            function X(t, e, n) {
                n || (n = qt);
                var i = e[n[0]] - t[n[0]], r = e[n[1]] - t[n[1]];
                return 180 * Math.atan2(r, i) / Math.PI;
            }
            function Y(t, e) {
                return X(e[1], e[0], Wt) + X(t[1], t[0], Wt);
            }
            function F(t, e) {
                return N(e[0], e[1], Wt) / N(t[0], t[1], Wt);
            }
            function q() {
                this.evEl = Ht, this.evWin = Lt, this.pressed = !1, A.apply(this, arguments);
            }
            function W() {
                this.evEl = Vt, this.evWin = Gt, A.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
            }
            function k() {
                this.evTarget = Bt, this.evWin = $t, this.started = !1, A.apply(this, arguments);
            }
            function H(t, e) {
                var n = E(t.touches), i = E(t.changedTouches);
                return e & (Dt | wt) && (n = _(n.concat(i), "identifier", !0)), [ n, i ];
            }
            function L() {
                this.evTarget = Kt, this.targetIds = {}, A.apply(this, arguments);
            }
            function j(t, e) {
                var n = E(t.touches), i = this.targetIds;
                if (e & (Pt | Ct) && 1 === n.length) return i[n[0].identifier] = !0, [ n, n ];
                var r, s, o = E(t.changedTouches), a = [], u = this.target;
                if (s = n.filter(function(t) {
                    return m(t.target, u);
                }), e === Pt) for (r = 0; r < s.length; ) i[s[r].identifier] = !0, r++;
                for (r = 0; r < o.length; ) i[o[r].identifier] && a.push(o[r]), e & (Dt | wt) && delete i[o[r].identifier], 
                r++;
                return a.length ? [ _(s.concat(a), "identifier", !0), a ] : void 0;
            }
            function U() {
                A.apply(this, arguments);
                var t = l(this.handler, this);
                this.touch = new L(this.manager, t), this.mouse = new q(this.manager, t), this.primaryTouch = null, 
                this.lastTouches = [];
            }
            function V(t, e) {
                t & Pt ? (this.primaryTouch = e.changedPointers[0].identifier, G.call(this, e)) : t & (Dt | wt) && G.call(this, e);
            }
            function G(t) {
                var e = t.changedPointers[0];
                if (e.identifier === this.primaryTouch) {
                    var n = {
                        x: e.clientX,
                        y: e.clientY
                    };
                    this.lastTouches.push(n);
                    var i = this.lastTouches;
                    setTimeout(function() {
                        var t = i.indexOf(n);
                        t > -1 && i.splice(t, 1);
                    }, Qt);
                }
            }
            function Z(t) {
                for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                    var r = this.lastTouches[i], s = Math.abs(e - r.x), o = Math.abs(n - r.y);
                    if (s <= te && o <= te) return !0;
                }
                return !1;
            }
            function B(t, e) {
                this.manager = t, this.set(e);
            }
            function $(t) {
                if (g(t, se)) return se;
                var e = g(t, oe), n = g(t, ae);
                return e && n ? se : e || n ? e ? oe : ae : g(t, re) ? re : ie;
            }
            function J(t) {
                this.options = pt({}, this.defaults, t || {}), this.id = x(), this.manager = null, 
                this.options.enable = f(this.options.enable, !0), this.state = he, this.simultaneous = {}, 
                this.requireFail = [];
            }
            function K(t) {
                return t & ve ? "cancel" : t & pe ? "end" : t & le ? "move" : t & ce ? "start" : "";
            }
            function Q(t) {
                return t == Nt ? "down" : t == zt ? "up" : t == Rt ? "left" : t == Mt ? "right" : "";
            }
            function tt(t, e) {
                var n = e.manager;
                return n ? n.get(t) : t;
            }
            function et() {
                J.apply(this, arguments);
            }
            function nt() {
                et.apply(this, arguments), this.pX = null, this.pY = null;
            }
            function it() {
                et.apply(this, arguments);
            }
            function rt() {
                J.apply(this, arguments), this._timer = null, this._input = null;
            }
            function st() {
                et.apply(this, arguments);
            }
            function ot() {
                et.apply(this, arguments);
            }
            function at() {
                J.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, 
                this._input = null, this.count = 0;
            }
            function ut(t, e) {
                return e = e || {}, e.recognizers = f(e.recognizers, ut.defaults.preset), new ht(t, e);
            }
            function ht(t, e) {
                this.options = pt({}, ut.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, 
                this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, 
                this.element = t, this.input = S(this), this.touchAction = new B(this, this.options.touchAction), 
                ct(this, !0), u(this.options.recognizers, function(t) {
                    var e = this.add(new t[0](t[1]));
                    t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
                }, this);
            }
            function ct(t, e) {
                var n = t.element;
                if (n.style) {
                    var i;
                    u(t.options.cssProps, function(r, s) {
                        i = b(n.style, s), e ? (t.oldCssProps[i] = n.style[i], n.style[i] = r) : n.style[i] = t.oldCssProps[i] || "";
                    }), e || (t.oldCssProps = {});
                }
            }
            function lt(t, e) {
                var n = i.createEvent("Event");
                n.initEvent(t, !0, !0), n.gesture = e, e.target.dispatchEvent(n);
            }
            var pt, ft = [ "", "webkit", "Moz", "MS", "ms", "o" ], vt = i.createElement("div"), dt = "function", mt = Math.round, gt = Math.abs, yt = Date.now;
            pt = "function" != typeof Object.assign ? function(t) {
                if (t === s || null === t) throw new TypeError("Cannot convert undefined or null to object");
                for (var e = Object(t), n = 1; n < arguments.length; n++) {
                    var i = arguments[n];
                    if (i !== s && null !== i) for (var r in i) i.hasOwnProperty(r) && (e[r] = i[r]);
                }
                return e;
            } : Object.assign;
            var Tt = h(function(t, e, n) {
                for (var i = Object.keys(e), r = 0; r < i.length; ) (!n || n && t[i[r]] === s) && (t[i[r]] = e[i[r]]), 
                r++;
                return t;
            }, "extend", "Use `assign`."), Et = h(function(t, e) {
                return Tt(t, e, !0);
            }, "merge", "Use `assign`."), _t = 1, bt = /mobile|tablet|ip(ad|hone|od)|android/i, xt = "ontouchstart" in e, It = b(e, "PointerEvent") !== s, At = xt && bt.test(navigator.userAgent), St = 25, Pt = 1, Ct = 2, Dt = 4, wt = 8, Ot = 1, Rt = 2, Mt = 4, zt = 8, Nt = 16, Xt = Rt | Mt, Yt = zt | Nt, Ft = Xt | Yt, qt = [ "x", "y" ], Wt = [ "clientX", "clientY" ];
            A.prototype = {
                handler: function() {},
                init: function() {
                    this.evEl && v(this.element, this.evEl, this.domHandler), this.evTarget && v(this.target, this.evTarget, this.domHandler), 
                    this.evWin && v(I(this.element), this.evWin, this.domHandler);
                },
                destroy: function() {
                    this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), 
                    this.evWin && d(I(this.element), this.evWin, this.domHandler);
                }
            };
            var kt = {
                mousedown: Pt,
                mousemove: Ct,
                mouseup: Dt
            }, Ht = "mousedown", Lt = "mousemove mouseup";
            c(q, A, {
                handler: function(t) {
                    var e = kt[t.type];
                    e & Pt && 0 === t.button && (this.pressed = !0), e & Ct && 1 !== t.which && (e = Dt), 
                    this.pressed && (e & Dt && (this.pressed = !1), this.callback(this.manager, e, {
                        pointers: [ t ],
                        changedPointers: [ t ],
                        pointerType: "mouse",
                        srcEvent: t
                    }));
                }
            });
            var jt = {
                pointerdown: Pt,
                pointermove: Ct,
                pointerup: Dt,
                pointercancel: wt,
                pointerout: wt
            }, Ut = {
                2: "touch",
                3: "pen",
                4: "mouse",
                5: "kinect"
            }, Vt = "pointerdown", Gt = "pointermove pointerup pointercancel";
            e.MSPointerEvent && !e.PointerEvent && (Vt = "MSPointerDown", Gt = "MSPointerMove MSPointerUp MSPointerCancel"), 
            c(W, A, {
                handler: function(t) {
                    var e = this.store, n = !1, i = t.type.toLowerCase().replace("ms", ""), r = jt[i], s = Ut[t.pointerType] || t.pointerType, o = "touch" == s, a = T(e, t.pointerId, "pointerId");
                    r & Pt && (0 === t.button || o) ? a < 0 && (e.push(t), a = e.length - 1) : r & (Dt | wt) && (n = !0), 
                    a < 0 || (e[a] = t, this.callback(this.manager, r, {
                        pointers: e,
                        changedPointers: [ t ],
                        pointerType: s,
                        srcEvent: t
                    }), n && e.splice(a, 1));
                }
            });
            var Zt = {
                touchstart: Pt,
                touchmove: Ct,
                touchend: Dt,
                touchcancel: wt
            }, Bt = "touchstart", $t = "touchstart touchmove touchend touchcancel";
            c(k, A, {
                handler: function(t) {
                    var e = Zt[t.type];
                    if (e === Pt && (this.started = !0), this.started) {
                        var n = H.call(this, t, e);
                        e & (Dt | wt) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                            pointers: n[0],
                            changedPointers: n[1],
                            pointerType: "touch",
                            srcEvent: t
                        });
                    }
                }
            });
            var Jt = {
                touchstart: Pt,
                touchmove: Ct,
                touchend: Dt,
                touchcancel: wt
            }, Kt = "touchstart touchmove touchend touchcancel";
            c(L, A, {
                handler: function(t) {
                    var e = Jt[t.type], n = j.call(this, t, e);
                    n && this.callback(this.manager, e, {
                        pointers: n[0],
                        changedPointers: n[1],
                        pointerType: "touch",
                        srcEvent: t
                    });
                }
            });
            var Qt = 2500, te = 25;
            c(U, A, {
                handler: function(t, e, n) {
                    var i = "touch" == n.pointerType, r = "mouse" == n.pointerType;
                    if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                        if (i) V.call(this, e, n); else if (r && Z.call(this, n)) return;
                        this.callback(t, e, n);
                    }
                },
                destroy: function() {
                    this.touch.destroy(), this.mouse.destroy();
                }
            });
            var ee = b(vt.style, "touchAction"), ne = ee !== s, ie = "auto", re = "manipulation", se = "none", oe = "pan-x", ae = "pan-y", ue = function() {
                if (!ne) return !1;
                var t = {}, n = e.CSS && e.CSS.supports;
                return [ "auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none" ].forEach(function(i) {
                    t[i] = !n || e.CSS.supports("touch-action", i);
                }), t;
            }();
            B.prototype = {
                set: function(t) {
                    "compute" == t && (t = this.compute()), ne && this.manager.element.style && ue[t] && (this.manager.element.style[ee] = t), 
                    this.actions = t.toLowerCase().trim();
                },
                update: function() {
                    this.set(this.manager.options.touchAction);
                },
                compute: function() {
                    var t = [];
                    return u(this.manager.recognizers, function(e) {
                        p(e.options.enable, [ e ]) && (t = t.concat(e.getTouchAction()));
                    }), $(t.join(" "));
                },
                preventDefaults: function(t) {
                    var e = t.srcEvent, n = t.offsetDirection;
                    if (this.manager.session.prevented) e.preventDefault(); else {
                        var i = this.actions, r = g(i, se) && !ue[se], s = g(i, ae) && !ue[ae], o = g(i, oe) && !ue[oe];
                        if (r) {
                            var a = 1 === t.pointers.length, u = t.distance < 2, h = t.deltaTime < 250;
                            if (a && u && h) return;
                        }
                        if (!o || !s) return r || s && n & Xt || o && n & Yt ? this.preventSrc(e) : void 0;
                    }
                },
                preventSrc: function(t) {
                    this.manager.session.prevented = !0, t.preventDefault();
                }
            };
            var he = 1, ce = 2, le = 4, pe = 8, fe = pe, ve = 16;
            J.prototype = {
                defaults: {},
                set: function(t) {
                    return pt(this.options, t), this.manager && this.manager.touchAction.update(), this;
                },
                recognizeWith: function(t) {
                    if (a(t, "recognizeWith", this)) return this;
                    var e = this.simultaneous;
                    return t = tt(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this;
                },
                dropRecognizeWith: function(t) {
                    return a(t, "dropRecognizeWith", this) ? this : (t = tt(t, this), delete this.simultaneous[t.id], 
                    this);
                },
                requireFailure: function(t) {
                    if (a(t, "requireFailure", this)) return this;
                    var e = this.requireFail;
                    return t = tt(t, this), -1 === T(e, t) && (e.push(t), t.requireFailure(this)), this;
                },
                dropRequireFailure: function(t) {
                    if (a(t, "dropRequireFailure", this)) return this;
                    t = tt(t, this);
                    var e = T(this.requireFail, t);
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
                        n.manager.emit(e, t);
                    }
                    var n = this, i = this.state;
                    i < pe && e(n.options.event + K(i)), e(n.options.event), t.additionalEvent && e(t.additionalEvent), 
                    i >= pe && e(n.options.event + K(i));
                },
                tryEmit: function(t) {
                    if (this.canEmit()) return this.emit(t);
                    this.state = 32;
                },
                canEmit: function() {
                    for (var t = 0; t < this.requireFail.length; ) {
                        if (!(this.requireFail[t].state & (32 | he))) return !1;
                        t++;
                    }
                    return !0;
                },
                recognize: function(t) {
                    var e = pt({}, t);
                    if (!p(this.options.enable, [ this, e ])) return this.reset(), void (this.state = 32);
                    this.state & (fe | ve | 32) && (this.state = he), this.state = this.process(e), 
                    this.state & (ce | le | pe | ve) && this.tryEmit(e);
                },
                process: function(t) {},
                getTouchAction: function() {},
                reset: function() {}
            }, c(et, J, {
                defaults: {
                    pointers: 1
                },
                attrTest: function(t) {
                    var e = this.options.pointers;
                    return 0 === e || t.pointers.length === e;
                },
                process: function(t) {
                    var e = this.state, n = t.eventType, i = e & (ce | le), r = this.attrTest(t);
                    return i && (n & wt || !r) ? e | ve : i || r ? n & Dt ? e | pe : e & ce ? e | le : ce : 32;
                }
            }), c(nt, et, {
                defaults: {
                    event: "pan",
                    threshold: 10,
                    pointers: 1,
                    direction: Ft
                },
                getTouchAction: function() {
                    var t = this.options.direction, e = [];
                    return t & Xt && e.push(ae), t & Yt && e.push(oe), e;
                },
                directionTest: function(t) {
                    var e = this.options, n = !0, i = t.distance, r = t.direction, s = t.deltaX, o = t.deltaY;
                    return r & e.direction || (e.direction & Xt ? (r = 0 === s ? Ot : s < 0 ? Rt : Mt, 
                    n = s != this.pX, i = Math.abs(t.deltaX)) : (r = 0 === o ? Ot : o < 0 ? zt : Nt, 
                    n = o != this.pY, i = Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction;
                },
                attrTest: function(t) {
                    return et.prototype.attrTest.call(this, t) && (this.state & ce || !(this.state & ce) && this.directionTest(t));
                },
                emit: function(t) {
                    this.pX = t.deltaX, this.pY = t.deltaY;
                    var e = Q(t.direction);
                    e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
                }
            }), c(it, et, {
                defaults: {
                    event: "pinch",
                    threshold: 0,
                    pointers: 2
                },
                getTouchAction: function() {
                    return [ se ];
                },
                attrTest: function(t) {
                    return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & ce);
                },
                emit: function(t) {
                    if (1 !== t.scale) {
                        var e = t.scale < 1 ? "in" : "out";
                        t.additionalEvent = this.options.event + e;
                    }
                    this._super.emit.call(this, t);
                }
            }), c(rt, J, {
                defaults: {
                    event: "press",
                    pointers: 1,
                    time: 251,
                    threshold: 9
                },
                getTouchAction: function() {
                    return [ ie ];
                },
                process: function(t) {
                    var e = this.options, n = t.pointers.length === e.pointers, i = t.distance < e.threshold, r = t.deltaTime > e.time;
                    if (this._input = t, !i || !n || t.eventType & (Dt | wt) && !r) this.reset(); else if (t.eventType & Pt) this.reset(), 
                    this._timer = o(function() {
                        this.state = fe, this.tryEmit();
                    }, e.time, this); else if (t.eventType & Dt) return fe;
                    return 32;
                },
                reset: function() {
                    clearTimeout(this._timer);
                },
                emit: function(t) {
                    this.state === fe && (t && t.eventType & Dt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = yt(), 
                    this.manager.emit(this.options.event, this._input)));
                }
            }), c(st, et, {
                defaults: {
                    event: "rotate",
                    threshold: 0,
                    pointers: 2
                },
                getTouchAction: function() {
                    return [ se ];
                },
                attrTest: function(t) {
                    return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & ce);
                }
            }), c(ot, et, {
                defaults: {
                    event: "swipe",
                    threshold: 10,
                    velocity: .3,
                    direction: Xt | Yt,
                    pointers: 1
                },
                getTouchAction: function() {
                    return nt.prototype.getTouchAction.call(this);
                },
                attrTest: function(t) {
                    var e, n = this.options.direction;
                    return n & (Xt | Yt) ? e = t.overallVelocity : n & Xt ? e = t.overallVelocityX : n & Yt && (e = t.overallVelocityY), 
                    this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && gt(e) > this.options.velocity && t.eventType & Dt;
                },
                emit: function(t) {
                    var e = Q(t.offsetDirection);
                    e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
                }
            }), c(at, J, {
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
                    return [ re ];
                },
                process: function(t) {
                    var e = this.options, n = t.pointers.length === e.pointers, i = t.distance < e.threshold, r = t.deltaTime < e.time;
                    if (this.reset(), t.eventType & Pt && 0 === this.count) return this.failTimeout();
                    if (i && r && n) {
                        if (t.eventType != Dt) return this.failTimeout();
                        var s = !this.pTime || t.timeStamp - this.pTime < e.interval, a = !this.pCenter || N(this.pCenter, t.center) < e.posThreshold;
                        if (this.pTime = t.timeStamp, this.pCenter = t.center, a && s ? this.count += 1 : this.count = 1, 
                        this._input = t, 0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = o(function() {
                            this.state = fe, this.tryEmit();
                        }, e.interval, this), ce) : fe;
                    }
                    return 32;
                },
                failTimeout: function() {
                    return this._timer = o(function() {
                        this.state = 32;
                    }, this.options.interval, this), 32;
                },
                reset: function() {
                    clearTimeout(this._timer);
                },
                emit: function() {
                    this.state == fe && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
                }
            }), ut.VERSION = "2.0.7", ut.defaults = {
                domEvents: !1,
                touchAction: "compute",
                enable: !0,
                inputTarget: null,
                inputClass: null,
                preset: [ [ st, {
                    enable: !1
                } ], [ it, {
                    enable: !1
                }, [ "rotate" ] ], [ ot, {
                    direction: Xt
                } ], [ nt, {
                    direction: Xt
                }, [ "swipe" ] ], [ at ], [ at, {
                    event: "doubletap",
                    taps: 2
                }, [ "tap" ] ], [ rt ] ],
                cssProps: {
                    userSelect: "none",
                    touchSelect: "none",
                    touchCallout: "none",
                    contentZooming: "none",
                    userDrag: "none",
                    tapHighlightColor: "rgba(0,0,0,0)"
                }
            };
            ht.prototype = {
                set: function(t) {
                    return pt(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), 
                    this.input.target = t.inputTarget, this.input.init()), this;
                },
                stop: function(t) {
                    this.session.stopped = t ? 2 : 1;
                },
                recognize: function(t) {
                    var e = this.session;
                    if (!e.stopped) {
                        this.touchAction.preventDefaults(t);
                        var n, i = this.recognizers, r = e.curRecognizer;
                        (!r || r && r.state & fe) && (r = e.curRecognizer = null);
                        for (var s = 0; s < i.length; ) n = i[s], 2 === e.stopped || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t), 
                        !r && n.state & (ce | le | pe) && (r = e.curRecognizer = n), s++;
                    }
                },
                get: function(t) {
                    if (t instanceof J) return t;
                    for (var e = this.recognizers, n = 0; n < e.length; n++) if (e[n].options.event == t) return e[n];
                    return null;
                },
                add: function(t) {
                    if (a(t, "add", this)) return this;
                    var e = this.get(t.options.event);
                    return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), 
                    t;
                },
                remove: function(t) {
                    if (a(t, "remove", this)) return this;
                    if (t = this.get(t)) {
                        var e = this.recognizers, n = T(e, t);
                        -1 !== n && (e.splice(n, 1), this.touchAction.update());
                    }
                    return this;
                },
                on: function(t, e) {
                    if (t !== s && e !== s) {
                        var n = this.handlers;
                        return u(y(t), function(t) {
                            n[t] = n[t] || [], n[t].push(e);
                        }), this;
                    }
                },
                off: function(t, e) {
                    if (t !== s) {
                        var n = this.handlers;
                        return u(y(t), function(t) {
                            e ? n[t] && n[t].splice(T(n[t], e), 1) : delete n[t];
                        }), this;
                    }
                },
                emit: function(t, e) {
                    this.options.domEvents && lt(t, e);
                    var n = this.handlers[t] && this.handlers[t].slice();
                    if (n && n.length) {
                        e.type = t, e.preventDefault = function() {
                            e.srcEvent.preventDefault();
                        };
                        for (var i = 0; i < n.length; ) n[i](e), i++;
                    }
                },
                destroy: function() {
                    this.element && ct(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), 
                    this.element = null;
                }
            }, pt(ut, {
                INPUT_START: Pt,
                INPUT_MOVE: Ct,
                INPUT_END: Dt,
                INPUT_CANCEL: wt,
                STATE_POSSIBLE: he,
                STATE_BEGAN: ce,
                STATE_CHANGED: le,
                STATE_ENDED: pe,
                STATE_RECOGNIZED: fe,
                STATE_CANCELLED: ve,
                STATE_FAILED: 32,
                DIRECTION_NONE: Ot,
                DIRECTION_LEFT: Rt,
                DIRECTION_RIGHT: Mt,
                DIRECTION_UP: zt,
                DIRECTION_DOWN: Nt,
                DIRECTION_HORIZONTAL: Xt,
                DIRECTION_VERTICAL: Yt,
                DIRECTION_ALL: Ft,
                Manager: ht,
                Input: A,
                TouchAction: B,
                TouchInput: L,
                MouseInput: q,
                PointerEventInput: W,
                TouchMouseInput: U,
                SingleTouchInput: k,
                Recognizer: J,
                AttrRecognizer: et,
                Tap: at,
                Pan: nt,
                Swipe: ot,
                Pinch: it,
                Rotate: st,
                Press: rt,
                on: v,
                off: d,
                each: u,
                merge: Et,
                extend: Tt,
                assign: pt,
                inherit: c,
                bindFn: l,
                prefixed: b
            }), (void 0 !== e ? e : "undefined" != typeof self ? self : {}).Hammer = ut, "function" == typeof define && define.amd ? define(function() {
                return ut;
            }) : void 0 !== n && n.exports ? n.exports = ut : e.Hammer = ut;
        }(window, document);
    }, function(t) {
        return n({}[t], t);
    }), n(1585748419426);
}();