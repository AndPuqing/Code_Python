var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function() {
    var n = {}, r = function(r, a) {
        if (!n[r]) return require(a);
        if (!n[r].status) {
            var e = n[r].m;
            e._exports = e._tempexports;
            var u = Object.getOwnPropertyDescriptor(e, "exports");
            u && u.configurable && Object.defineProperty(e, "exports", {
                set: function(n) {
                    "object" === (void 0 === n ? "undefined" : t(n)) && n !== e._exports && (e._exports.__proto__ = n.__proto__, 
                    Object.keys(n).forEach(function(t) {
                        e._exports[t] = n[t];
                    })), e._tempexports = n;
                },
                get: function() {
                    return e._tempexports;
                }
            }), n[r].status = 1, n[r].func(n[r].req, e, e.exports);
        }
        return n[r].m.exports;
    };
    return function(t, r, a) {
        var e = {
            exports: {},
            _tempexports: {}
        };
        n[t] = {
            status: 0,
            func: r,
            req: a,
            m: e
        };
    }(1585748419421, function(n, r, a) {
        !function(n, e) {
            if ("object" == (void 0 === a ? "undefined" : t(a)) && "object" == (void 0 === r ? "undefined" : t(r))) r.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
                var u = e();
                for (var o in u) ("object" == (void 0 === a ? "undefined" : t(a)) ? a : n)[o] = u[o];
            }
        }("undefined" != typeof self ? self : this, function() {
            return function(n) {
                function r(t) {
                    if (a[t]) return a[t].exports;
                    var e = a[t] = {
                        i: t,
                        l: !1,
                        exports: {}
                    };
                    return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports;
                }
                var a = {};
                return r.m = n, r.c = a, r.d = function(t, n, a) {
                    r.o(t, n) || Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: a
                    });
                }, r.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                }, r.t = function(n, a) {
                    if (1 & a && (n = r(n)), 8 & a) return n;
                    if (4 & a && "object" == (void 0 === n ? "undefined" : t(n)) && n && n.__esModule) return n;
                    var e = Object.create(null);
                    if (r.r(e), Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: n
                    }), 2 & a && "string" != typeof n) for (var u in n) r.d(e, u, function(t) {
                        return n[t];
                    }.bind(null, u));
                    return e;
                }, r.n = function(t) {
                    var n = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return r.d(n, "a", n), n;
                }, r.o = function(t, n) {
                    return Object.prototype.hasOwnProperty.call(t, n);
                }, r.p = "", r(r.s = 10);
            }([ function(t, n, r) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.setMatrixArrayType = function(t) {
                    n.ARRAY_TYPE = t;
                }, n.toRadian = function(t) {
                    return t * e;
                }, n.equals = function(t, n) {
                    return Math.abs(t - n) <= a * Math.max(1, Math.abs(t), Math.abs(n));
                };
                var a = n.EPSILON = 1e-6;
                n.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, n.RANDOM = Math.random;
                var e = Math.PI / 180;
            }, function(t, n, r) {
                function a() {
                    var t = new M.ARRAY_TYPE(4);
                    return M.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0), 
                    t;
                }
                function e(t, n, r) {
                    return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], 
                    t;
                }
                function u(t, n, r) {
                    return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t[2] = n[2] * r[2], t[3] = n[3] * r[3], 
                    t;
                }
                function o(t, n, r) {
                    return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t[2] = n[2] / r[2], t[3] = n[3] / r[3], 
                    t;
                }
                function i(t, n) {
                    var r = n[0] - t[0], a = n[1] - t[1], e = n[2] - t[2], u = n[3] - t[3];
                    return Math.sqrt(r * r + a * a + e * e + u * u);
                }
                function s(t, n) {
                    var r = n[0] - t[0], a = n[1] - t[1], e = n[2] - t[2], u = n[3] - t[3];
                    return r * r + a * a + e * e + u * u;
                }
                function c(t) {
                    var n = t[0], r = t[1], a = t[2], e = t[3];
                    return Math.sqrt(n * n + r * r + a * a + e * e);
                }
                function f(t) {
                    var n = t[0], r = t[1], a = t[2], e = t[3];
                    return n * n + r * r + a * a + e * e;
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.forEach = n.sqrLen = n.len = n.sqrDist = n.dist = n.div = n.mul = n.sub = void 0, 
                n.create = a, n.clone = function(t) {
                    var n = new M.ARRAY_TYPE(4);
                    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n;
                }, n.fromValues = function(t, n, r, a) {
                    var e = new M.ARRAY_TYPE(4);
                    return e[0] = t, e[1] = n, e[2] = r, e[3] = a, e;
                }, n.copy = function(t, n) {
                    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t;
                }, n.set = function(t, n, r, a, e) {
                    return t[0] = n, t[1] = r, t[2] = a, t[3] = e, t;
                }, n.add = function(t, n, r) {
                    return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], 
                    t;
                }, n.subtract = e, n.multiply = u, n.divide = o, n.ceil = function(t, n) {
                    return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t[3] = Math.ceil(n[3]), 
                    t;
                }, n.floor = function(t, n) {
                    return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), 
                    t[3] = Math.floor(n[3]), t;
                }, n.min = function(t, n, r) {
                    return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t[2] = Math.min(n[2], r[2]), 
                    t[3] = Math.min(n[3], r[3]), t;
                }, n.max = function(t, n, r) {
                    return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t[2] = Math.max(n[2], r[2]), 
                    t[3] = Math.max(n[3], r[3]), t;
                }, n.round = function(t, n) {
                    return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), 
                    t[3] = Math.round(n[3]), t;
                }, n.scale = function(t, n, r) {
                    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t;
                }, n.scaleAndAdd = function(t, n, r, a) {
                    return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t[2] = n[2] + r[2] * a, t[3] = n[3] + r[3] * a, 
                    t;
                }, n.distance = i, n.squaredDistance = s, n.length = c, n.squaredLength = f, n.negate = function(t, n) {
                    return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = -n[3], t;
                }, n.inverse = function(t, n) {
                    return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t[3] = 1 / n[3], t;
                }, n.normalize = function(t, n) {
                    var r = n[0], a = n[1], e = n[2], u = n[3], o = r * r + a * a + e * e + u * u;
                    return o > 0 && (o = 1 / Math.sqrt(o), t[0] = r * o, t[1] = a * o, t[2] = e * o, 
                    t[3] = u * o), t;
                }, n.dot = function(t, n) {
                    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3];
                }, n.lerp = function(t, n, r, a) {
                    var e = n[0], u = n[1], o = n[2], i = n[3];
                    return t[0] = e + a * (r[0] - e), t[1] = u + a * (r[1] - u), t[2] = o + a * (r[2] - o), 
                    t[3] = i + a * (r[3] - i), t;
                }, n.random = function(t, n) {
                    var r, a, e, u, o, i;
                    n = n || 1;
                    do {
                        o = (r = 2 * M.RANDOM() - 1) * r + (a = 2 * M.RANDOM() - 1) * a;
                    } while (o >= 1);
                    do {
                        i = (e = 2 * M.RANDOM() - 1) * e + (u = 2 * M.RANDOM() - 1) * u;
                    } while (i >= 1);
                    var s = Math.sqrt((1 - o) / i);
                    return t[0] = n * r, t[1] = n * a, t[2] = n * e * s, t[3] = n * u * s, t;
                }, n.transformMat4 = function(t, n, r) {
                    var a = n[0], e = n[1], u = n[2], o = n[3];
                    return t[0] = r[0] * a + r[4] * e + r[8] * u + r[12] * o, t[1] = r[1] * a + r[5] * e + r[9] * u + r[13] * o, 
                    t[2] = r[2] * a + r[6] * e + r[10] * u + r[14] * o, t[3] = r[3] * a + r[7] * e + r[11] * u + r[15] * o, 
                    t;
                }, n.transformQuat = function(t, n, r) {
                    var a = n[0], e = n[1], u = n[2], o = r[0], i = r[1], s = r[2], c = r[3], f = c * a + i * u - s * e, M = c * e + s * a - o * u, h = c * u + o * e - i * a, l = -o * a - i * e - s * u;
                    return t[0] = f * c + l * -o + M * -s - h * -i, t[1] = M * c + l * -i + h * -o - f * -s, 
                    t[2] = h * c + l * -s + f * -i - M * -o, t[3] = n[3], t;
                }, n.str = function(t) {
                    return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
                }, n.exactEquals = function(t, n) {
                    return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3];
                }, n.equals = function(t, n) {
                    var r = t[0], a = t[1], e = t[2], u = t[3], o = n[0], i = n[1], s = n[2], c = n[3];
                    return Math.abs(r - o) <= M.EPSILON * Math.max(1, Math.abs(r), Math.abs(o)) && Math.abs(a - i) <= M.EPSILON * Math.max(1, Math.abs(a), Math.abs(i)) && Math.abs(e - s) <= M.EPSILON * Math.max(1, Math.abs(e), Math.abs(s)) && Math.abs(u - c) <= M.EPSILON * Math.max(1, Math.abs(u), Math.abs(c));
                };
                var M = function(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n.default = t, n;
                }(r(0));
                n.sub = e, n.mul = u, n.div = o, n.dist = i, n.sqrDist = s, n.len = c, n.sqrLen = f, 
                n.forEach = function() {
                    var t = a();
                    return function(n, r, a, e, u, o) {
                        var i = void 0, s = void 0;
                        for (r || (r = 4), a || (a = 0), s = e ? Math.min(e * r + a, n.length) : n.length, 
                        i = a; i < s; i += r) t[0] = n[i], t[1] = n[i + 1], t[2] = n[i + 2], t[3] = n[i + 3], 
                        u(t, t, o), n[i] = t[0], n[i + 1] = t[1], n[i + 2] = t[2], n[i + 3] = t[3];
                        return n;
                    };
                }();
            }, function(t, n, r) {
                function a() {
                    var t = new v.ARRAY_TYPE(3);
                    return v.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t;
                }
                function e(t) {
                    var n = t[0], r = t[1], a = t[2];
                    return Math.sqrt(n * n + r * r + a * a);
                }
                function u(t, n, r) {
                    var a = new v.ARRAY_TYPE(3);
                    return a[0] = t, a[1] = n, a[2] = r, a;
                }
                function o(t, n, r) {
                    return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t;
                }
                function i(t, n, r) {
                    return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t[2] = n[2] * r[2], t;
                }
                function s(t, n, r) {
                    return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t[2] = n[2] / r[2], t;
                }
                function c(t, n) {
                    var r = n[0] - t[0], a = n[1] - t[1], e = n[2] - t[2];
                    return Math.sqrt(r * r + a * a + e * e);
                }
                function f(t, n) {
                    var r = n[0] - t[0], a = n[1] - t[1], e = n[2] - t[2];
                    return r * r + a * a + e * e;
                }
                function M(t) {
                    var n = t[0], r = t[1], a = t[2];
                    return n * n + r * r + a * a;
                }
                function h(t, n) {
                    var r = n[0], a = n[1], e = n[2], u = r * r + a * a + e * e;
                    return u > 0 && (u = 1 / Math.sqrt(u), t[0] = n[0] * u, t[1] = n[1] * u, t[2] = n[2] * u), 
                    t;
                }
                function l(t, n) {
                    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.forEach = n.sqrLen = n.len = n.sqrDist = n.dist = n.div = n.mul = n.sub = void 0, 
                n.create = a, n.clone = function(t) {
                    var n = new v.ARRAY_TYPE(3);
                    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n;
                }, n.length = e, n.fromValues = u, n.copy = function(t, n) {
                    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t;
                }, n.set = function(t, n, r, a) {
                    return t[0] = n, t[1] = r, t[2] = a, t;
                }, n.add = function(t, n, r) {
                    return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t;
                }, n.subtract = o, n.multiply = i, n.divide = s, n.ceil = function(t, n) {
                    return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t;
                }, n.floor = function(t, n) {
                    return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), 
                    t;
                }, n.min = function(t, n, r) {
                    return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t[2] = Math.min(n[2], r[2]), 
                    t;
                }, n.max = function(t, n, r) {
                    return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t[2] = Math.max(n[2], r[2]), 
                    t;
                }, n.round = function(t, n) {
                    return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), 
                    t;
                }, n.scale = function(t, n, r) {
                    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t;
                }, n.scaleAndAdd = function(t, n, r, a) {
                    return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t[2] = n[2] + r[2] * a, t;
                }, n.distance = c, n.squaredDistance = f, n.squaredLength = M, n.negate = function(t, n) {
                    return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t;
                }, n.inverse = function(t, n) {
                    return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t;
                }, n.normalize = h, n.dot = l, n.cross = function(t, n, r) {
                    var a = n[0], e = n[1], u = n[2], o = r[0], i = r[1], s = r[2];
                    return t[0] = e * s - u * i, t[1] = u * o - a * s, t[2] = a * i - e * o, t;
                }, n.lerp = function(t, n, r, a) {
                    var e = n[0], u = n[1], o = n[2];
                    return t[0] = e + a * (r[0] - e), t[1] = u + a * (r[1] - u), t[2] = o + a * (r[2] - o), 
                    t;
                }, n.hermite = function(t, n, r, a, e, u) {
                    var o = u * u, i = o * (2 * u - 3) + 1, s = o * (u - 2) + u, c = o * (u - 1), f = o * (3 - 2 * u);
                    return t[0] = n[0] * i + r[0] * s + a[0] * c + e[0] * f, t[1] = n[1] * i + r[1] * s + a[1] * c + e[1] * f, 
                    t[2] = n[2] * i + r[2] * s + a[2] * c + e[2] * f, t;
                }, n.bezier = function(t, n, r, a, e, u) {
                    var o = 1 - u, i = o * o, s = u * u, c = i * o, f = 3 * u * i, M = 3 * s * o, h = s * u;
                    return t[0] = n[0] * c + r[0] * f + a[0] * M + e[0] * h, t[1] = n[1] * c + r[1] * f + a[1] * M + e[1] * h, 
                    t[2] = n[2] * c + r[2] * f + a[2] * M + e[2] * h, t;
                }, n.random = function(t, n) {
                    n = n || 1;
                    var r = 2 * v.RANDOM() * Math.PI, a = 2 * v.RANDOM() - 1, e = Math.sqrt(1 - a * a) * n;
                    return t[0] = Math.cos(r) * e, t[1] = Math.sin(r) * e, t[2] = a * n, t;
                }, n.transformMat4 = function(t, n, r) {
                    var a = n[0], e = n[1], u = n[2], o = r[3] * a + r[7] * e + r[11] * u + r[15];
                    return o = o || 1, t[0] = (r[0] * a + r[4] * e + r[8] * u + r[12]) / o, t[1] = (r[1] * a + r[5] * e + r[9] * u + r[13]) / o, 
                    t[2] = (r[2] * a + r[6] * e + r[10] * u + r[14]) / o, t;
                }, n.transformMat3 = function(t, n, r) {
                    var a = n[0], e = n[1], u = n[2];
                    return t[0] = a * r[0] + e * r[3] + u * r[6], t[1] = a * r[1] + e * r[4] + u * r[7], 
                    t[2] = a * r[2] + e * r[5] + u * r[8], t;
                }, n.transformQuat = function(t, n, r) {
                    var a = r[0], e = r[1], u = r[2], o = r[3], i = n[0], s = n[1], c = n[2], f = e * c - u * s, M = u * i - a * c, h = a * s - e * i, l = e * h - u * M, v = u * f - a * h, d = a * M - e * f, b = 2 * o;
                    return f *= b, M *= b, h *= b, l *= 2, v *= 2, d *= 2, t[0] = i + f + l, t[1] = s + M + v, 
                    t[2] = c + h + d, t;
                }, n.rotateX = function(t, n, r, a) {
                    var e = [], u = [];
                    return e[0] = n[0] - r[0], e[1] = n[1] - r[1], e[2] = n[2] - r[2], u[0] = e[0], 
                    u[1] = e[1] * Math.cos(a) - e[2] * Math.sin(a), u[2] = e[1] * Math.sin(a) + e[2] * Math.cos(a), 
                    t[0] = u[0] + r[0], t[1] = u[1] + r[1], t[2] = u[2] + r[2], t;
                }, n.rotateY = function(t, n, r, a) {
                    var e = [], u = [];
                    return e[0] = n[0] - r[0], e[1] = n[1] - r[1], e[2] = n[2] - r[2], u[0] = e[2] * Math.sin(a) + e[0] * Math.cos(a), 
                    u[1] = e[1], u[2] = e[2] * Math.cos(a) - e[0] * Math.sin(a), t[0] = u[0] + r[0], 
                    t[1] = u[1] + r[1], t[2] = u[2] + r[2], t;
                }, n.rotateZ = function(t, n, r, a) {
                    var e = [], u = [];
                    return e[0] = n[0] - r[0], e[1] = n[1] - r[1], e[2] = n[2] - r[2], u[0] = e[0] * Math.cos(a) - e[1] * Math.sin(a), 
                    u[1] = e[0] * Math.sin(a) + e[1] * Math.cos(a), u[2] = e[2], t[0] = u[0] + r[0], 
                    t[1] = u[1] + r[1], t[2] = u[2] + r[2], t;
                }, n.angle = function(t, n) {
                    var r = u(t[0], t[1], t[2]), a = u(n[0], n[1], n[2]);
                    h(r, r), h(a, a);
                    var e = l(r, a);
                    return e > 1 ? 0 : e < -1 ? Math.PI : Math.acos(e);
                }, n.str = function(t) {
                    return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
                }, n.exactEquals = function(t, n) {
                    return t[0] === n[0] && t[1] === n[1] && t[2] === n[2];
                }, n.equals = function(t, n) {
                    var r = t[0], a = t[1], e = t[2], u = n[0], o = n[1], i = n[2];
                    return Math.abs(r - u) <= v.EPSILON * Math.max(1, Math.abs(r), Math.abs(u)) && Math.abs(a - o) <= v.EPSILON * Math.max(1, Math.abs(a), Math.abs(o)) && Math.abs(e - i) <= v.EPSILON * Math.max(1, Math.abs(e), Math.abs(i));
                };
                var v = function(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n.default = t, n;
                }(r(0));
                n.sub = o, n.mul = i, n.div = s, n.dist = c, n.sqrDist = f, n.len = e, n.sqrLen = M, 
                n.forEach = function() {
                    var t = a();
                    return function(n, r, a, e, u, o) {
                        var i = void 0, s = void 0;
                        for (r || (r = 3), a || (a = 0), s = e ? Math.min(e * r + a, n.length) : n.length, 
                        i = a; i < s; i += r) t[0] = n[i], t[1] = n[i + 1], t[2] = n[i + 2], u(t, t, o), 
                        n[i] = t[0], n[i + 1] = t[1], n[i + 2] = t[2];
                        return n;
                    };
                }();
            }, function(t, n, r) {
                function a(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n.default = t, n;
                }
                function e() {
                    var t = new c.ARRAY_TYPE(4);
                    return c.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t[3] = 1, 
                    t;
                }
                function u(t, n, r) {
                    r *= .5;
                    var a = Math.sin(r);
                    return t[0] = a * n[0], t[1] = a * n[1], t[2] = a * n[2], t[3] = Math.cos(r), t;
                }
                function o(t, n, r) {
                    var a = n[0], e = n[1], u = n[2], o = n[3], i = r[0], s = r[1], c = r[2], f = r[3];
                    return t[0] = a * f + o * i + e * c - u * s, t[1] = e * f + o * s + u * i - a * c, 
                    t[2] = u * f + o * c + a * s - e * i, t[3] = o * f - a * i - e * s - u * c, t;
                }
                function i(t, n, r, a) {
                    var e = n[0], u = n[1], o = n[2], i = n[3], s = r[0], f = r[1], M = r[2], h = r[3], l = void 0, v = void 0, d = void 0, b = void 0, m = void 0;
                    return (v = e * s + u * f + o * M + i * h) < 0 && (v = -v, s = -s, f = -f, M = -M, 
                    h = -h), 1 - v > c.EPSILON ? (l = Math.acos(v), d = Math.sin(l), b = Math.sin((1 - a) * l) / d, 
                    m = Math.sin(a * l) / d) : (b = 1 - a, m = a), t[0] = b * e + m * s, t[1] = b * u + m * f, 
                    t[2] = b * o + m * M, t[3] = b * i + m * h, t;
                }
                function s(t, n) {
                    var r = n[0] + n[4] + n[8], a = void 0;
                    if (r > 0) a = Math.sqrt(r + 1), t[3] = .5 * a, a = .5 / a, t[0] = (n[5] - n[7]) * a, 
                    t[1] = (n[6] - n[2]) * a, t[2] = (n[1] - n[3]) * a; else {
                        var e = 0;
                        n[4] > n[0] && (e = 1), n[8] > n[3 * e + e] && (e = 2);
                        var u = (e + 1) % 3, o = (e + 2) % 3;
                        a = Math.sqrt(n[3 * e + e] - n[3 * u + u] - n[3 * o + o] + 1), t[e] = .5 * a, a = .5 / a, 
                        t[3] = (n[3 * u + o] - n[3 * o + u]) * a, t[u] = (n[3 * u + e] + n[3 * e + u]) * a, 
                        t[o] = (n[3 * o + e] + n[3 * e + o]) * a;
                    }
                    return t;
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.setAxes = n.sqlerp = n.rotationTo = n.equals = n.exactEquals = n.normalize = n.sqrLen = n.squaredLength = n.len = n.length = n.lerp = n.dot = n.scale = n.mul = n.add = n.set = n.copy = n.fromValues = n.clone = void 0, 
                n.create = e, n.identity = function(t) {
                    return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
                }, n.setAxisAngle = u, n.getAxisAngle = function(t, n) {
                    var r = 2 * Math.acos(n[3]), a = Math.sin(r / 2);
                    return a > c.EPSILON ? (t[0] = n[0] / a, t[1] = n[1] / a, t[2] = n[2] / a) : (t[0] = 1, 
                    t[1] = 0, t[2] = 0), r;
                }, n.multiply = o, n.rotateX = function(t, n, r) {
                    r *= .5;
                    var a = n[0], e = n[1], u = n[2], o = n[3], i = Math.sin(r), s = Math.cos(r);
                    return t[0] = a * s + o * i, t[1] = e * s + u * i, t[2] = u * s - e * i, t[3] = o * s - a * i, 
                    t;
                }, n.rotateY = function(t, n, r) {
                    r *= .5;
                    var a = n[0], e = n[1], u = n[2], o = n[3], i = Math.sin(r), s = Math.cos(r);
                    return t[0] = a * s - u * i, t[1] = e * s + o * i, t[2] = u * s + a * i, t[3] = o * s - e * i, 
                    t;
                }, n.rotateZ = function(t, n, r) {
                    r *= .5;
                    var a = n[0], e = n[1], u = n[2], o = n[3], i = Math.sin(r), s = Math.cos(r);
                    return t[0] = a * s + e * i, t[1] = e * s - a * i, t[2] = u * s + o * i, t[3] = o * s - u * i, 
                    t;
                }, n.calculateW = function(t, n) {
                    var r = n[0], a = n[1], e = n[2];
                    return t[0] = r, t[1] = a, t[2] = e, t[3] = Math.sqrt(Math.abs(1 - r * r - a * a - e * e)), 
                    t;
                }, n.slerp = i, n.random = function(t) {
                    var n = c.RANDOM(), r = c.RANDOM(), a = c.RANDOM(), e = Math.sqrt(1 - n), u = Math.sqrt(n);
                    return t[0] = e * Math.sin(2 * Math.PI * r), t[1] = e * Math.cos(2 * Math.PI * r), 
                    t[2] = u * Math.sin(2 * Math.PI * a), t[3] = u * Math.cos(2 * Math.PI * a), t;
                }, n.invert = function(t, n) {
                    var r = n[0], a = n[1], e = n[2], u = n[3], o = r * r + a * a + e * e + u * u, i = o ? 1 / o : 0;
                    return t[0] = -r * i, t[1] = -a * i, t[2] = -e * i, t[3] = u * i, t;
                }, n.conjugate = function(t, n) {
                    return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = n[3], t;
                }, n.fromMat3 = s, n.fromEuler = function(t, n, r, a) {
                    var e = .5 * Math.PI / 180;
                    n *= e, r *= e, a *= e;
                    var u = Math.sin(n), o = Math.cos(n), i = Math.sin(r), s = Math.cos(r), c = Math.sin(a), f = Math.cos(a);
                    return t[0] = u * s * f - o * i * c, t[1] = o * i * f + u * s * c, t[2] = o * s * c - u * i * f, 
                    t[3] = o * s * f + u * i * c, t;
                }, n.str = function(t) {
                    return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
                };
                var c = a(r(0)), f = a(r(5)), M = a(r(2)), h = a(r(1));
                n.clone = h.clone, n.fromValues = h.fromValues, n.copy = h.copy, n.set = h.set, 
                n.add = h.add, n.mul = o, n.scale = h.scale, n.dot = h.dot, n.lerp = h.lerp;
                var l = n.length = h.length, v = (n.len = l, n.squaredLength = h.squaredLength), d = (n.sqrLen = v, 
                n.normalize = h.normalize);
                n.exactEquals = h.exactEquals, n.equals = h.equals, n.rotationTo = function() {
                    var t = M.create(), n = M.fromValues(1, 0, 0), r = M.fromValues(0, 1, 0);
                    return function(a, e, o) {
                        var i = M.dot(e, o);
                        return i < -.999999 ? (M.cross(t, n, e), M.len(t) < 1e-6 && M.cross(t, r, e), M.normalize(t, t), 
                        u(a, t, Math.PI), a) : i > .999999 ? (a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a) : (M.cross(t, e, o), 
                        a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = 1 + i, d(a, a));
                    };
                }(), n.sqlerp = function() {
                    var t = e(), n = e();
                    return function(r, a, e, u, o, s) {
                        return i(t, a, o, s), i(n, e, u, s), i(r, t, n, 2 * s * (1 - s)), r;
                    };
                }(), n.setAxes = function() {
                    var t = f.create();
                    return function(n, r, a, e) {
                        return t[0] = a[0], t[3] = a[1], t[6] = a[2], t[1] = e[0], t[4] = e[1], t[7] = e[2], 
                        t[2] = -r[0], t[5] = -r[1], t[8] = -r[2], d(n, s(n, t));
                    };
                }();
            }, function(t, n, r) {
                function a(t) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
                    t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
                    t;
                }
                function e(t, n, r) {
                    var a = n[0], e = n[1], u = n[2], o = n[3], i = n[4], s = n[5], c = n[6], f = n[7], M = n[8], h = n[9], l = n[10], v = n[11], d = n[12], b = n[13], m = n[14], p = n[15], P = r[0], A = r[1], E = r[2], O = r[3];
                    return t[0] = P * a + A * i + E * M + O * d, t[1] = P * e + A * s + E * h + O * b, 
                    t[2] = P * u + A * c + E * l + O * m, t[3] = P * o + A * f + E * v + O * p, P = r[4], 
                    A = r[5], E = r[6], O = r[7], t[4] = P * a + A * i + E * M + O * d, t[5] = P * e + A * s + E * h + O * b, 
                    t[6] = P * u + A * c + E * l + O * m, t[7] = P * o + A * f + E * v + O * p, P = r[8], 
                    A = r[9], E = r[10], O = r[11], t[8] = P * a + A * i + E * M + O * d, t[9] = P * e + A * s + E * h + O * b, 
                    t[10] = P * u + A * c + E * l + O * m, t[11] = P * o + A * f + E * v + O * p, P = r[12], 
                    A = r[13], E = r[14], O = r[15], t[12] = P * a + A * i + E * M + O * d, t[13] = P * e + A * s + E * h + O * b, 
                    t[14] = P * u + A * c + E * l + O * m, t[15] = P * o + A * f + E * v + O * p, t;
                }
                function u(t, n, r) {
                    var a = n[0], e = n[1], u = n[2], o = n[3], i = a + a, s = e + e, c = u + u, f = a * i, M = a * s, h = a * c, l = e * s, v = e * c, d = u * c, b = o * i, m = o * s, p = o * c;
                    return t[0] = 1 - (l + d), t[1] = M + p, t[2] = h - m, t[3] = 0, t[4] = M - p, t[5] = 1 - (f + d), 
                    t[6] = v + b, t[7] = 0, t[8] = h + m, t[9] = v - b, t[10] = 1 - (f + l), t[11] = 0, 
                    t[12] = r[0], t[13] = r[1], t[14] = r[2], t[15] = 1, t;
                }
                function o(t, n, r) {
                    return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], 
                    t[4] = n[4] - r[4], t[5] = n[5] - r[5], t[6] = n[6] - r[6], t[7] = n[7] - r[7], 
                    t[8] = n[8] - r[8], t[9] = n[9] - r[9], t[10] = n[10] - r[10], t[11] = n[11] - r[11], 
                    t[12] = n[12] - r[12], t[13] = n[13] - r[13], t[14] = n[14] - r[14], t[15] = n[15] - r[15], 
                    t;
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.sub = n.mul = void 0, n.create = function() {
                    var t = new i.ARRAY_TYPE(16);
                    return i.ARRAY_TYPE != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, 
                    t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0), 
                    t[0] = 1, t[5] = 1, t[10] = 1, t[15] = 1, t;
                }, n.clone = function(t) {
                    var n = new i.ARRAY_TYPE(16);
                    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], 
                    n[6] = t[6], n[7] = t[7], n[8] = t[8], n[9] = t[9], n[10] = t[10], n[11] = t[11], 
                    n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15], n;
                }, n.copy = function(t, n) {
                    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], 
                    t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], 
                    t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t;
                }, n.fromValues = function(t, n, r, a, e, u, o, s, c, f, M, h, l, v, d, b) {
                    var m = new i.ARRAY_TYPE(16);
                    return m[0] = t, m[1] = n, m[2] = r, m[3] = a, m[4] = e, m[5] = u, m[6] = o, m[7] = s, 
                    m[8] = c, m[9] = f, m[10] = M, m[11] = h, m[12] = l, m[13] = v, m[14] = d, m[15] = b, 
                    m;
                }, n.set = function(t, n, r, a, e, u, o, i, s, c, f, M, h, l, v, d, b) {
                    return t[0] = n, t[1] = r, t[2] = a, t[3] = e, t[4] = u, t[5] = o, t[6] = i, t[7] = s, 
                    t[8] = c, t[9] = f, t[10] = M, t[11] = h, t[12] = l, t[13] = v, t[14] = d, t[15] = b, 
                    t;
                }, n.identity = a, n.transpose = function(t, n) {
                    if (t === n) {
                        var r = n[1], a = n[2], e = n[3], u = n[6], o = n[7], i = n[11];
                        t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = r, t[6] = n[9], t[7] = n[13], t[8] = a, 
                        t[9] = u, t[11] = n[14], t[12] = e, t[13] = o, t[14] = i;
                    } else t[0] = n[0], t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = n[1], t[5] = n[5], 
                    t[6] = n[9], t[7] = n[13], t[8] = n[2], t[9] = n[6], t[10] = n[10], t[11] = n[14], 
                    t[12] = n[3], t[13] = n[7], t[14] = n[11], t[15] = n[15];
                    return t;
                }, n.invert = function(t, n) {
                    var r = n[0], a = n[1], e = n[2], u = n[3], o = n[4], i = n[5], s = n[6], c = n[7], f = n[8], M = n[9], h = n[10], l = n[11], v = n[12], d = n[13], b = n[14], m = n[15], p = r * i - a * o, P = r * s - e * o, A = r * c - u * o, E = a * s - e * i, O = a * c - u * i, y = e * c - u * s, R = f * d - M * v, x = f * b - h * v, _ = f * m - l * v, q = M * b - h * d, S = M * m - l * d, Y = h * m - l * b, L = p * Y - P * S + A * q + E * _ - O * x + y * R;
                    return L ? (L = 1 / L, t[0] = (i * Y - s * S + c * q) * L, t[1] = (e * S - a * Y - u * q) * L, 
                    t[2] = (d * y - b * O + m * E) * L, t[3] = (h * O - M * y - l * E) * L, t[4] = (s * _ - o * Y - c * x) * L, 
                    t[5] = (r * Y - e * _ + u * x) * L, t[6] = (b * A - v * y - m * P) * L, t[7] = (f * y - h * A + l * P) * L, 
                    t[8] = (o * S - i * _ + c * R) * L, t[9] = (a * _ - r * S - u * R) * L, t[10] = (v * O - d * A + m * p) * L, 
                    t[11] = (M * A - f * O - l * p) * L, t[12] = (i * x - o * q - s * R) * L, t[13] = (r * q - a * x + e * R) * L, 
                    t[14] = (d * P - v * E - b * p) * L, t[15] = (f * E - M * P + h * p) * L, t) : null;
                }, n.adjoint = function(t, n) {
                    var r = n[0], a = n[1], e = n[2], u = n[3], o = n[4], i = n[5], s = n[6], c = n[7], f = n[8], M = n[9], h = n[10], l = n[11], v = n[12], d = n[13], b = n[14], m = n[15];
                    return t[0] = i * (h * m - l * b) - M * (s * m - c * b) + d * (s * l - c * h), t[1] = -(a * (h * m - l * b) - M * (e * m - u * b) + d * (e * l - u * h)), 
                    t[2] = a * (s * m - c * b) - i * (e * m - u * b) + d * (e * c - u * s), t[3] = -(a * (s * l - c * h) - i * (e * l - u * h) + M * (e * c - u * s)), 
                    t[4] = -(o * (h * m - l * b) - f * (s * m - c * b) + v * (s * l - c * h)), t[5] = r * (h * m - l * b) - f * (e * m - u * b) + v * (e * l - u * h), 
                    t[6] = -(r * (s * m - c * b) - o * (e * m - u * b) + v * (e * c - u * s)), t[7] = r * (s * l - c * h) - o * (e * l - u * h) + f * (e * c - u * s), 
                    t[8] = o * (M * m - l * d) - f * (i * m - c * d) + v * (i * l - c * M), t[9] = -(r * (M * m - l * d) - f * (a * m - u * d) + v * (a * l - u * M)), 
                    t[10] = r * (i * m - c * d) - o * (a * m - u * d) + v * (a * c - u * i), t[11] = -(r * (i * l - c * M) - o * (a * l - u * M) + f * (a * c - u * i)), 
                    t[12] = -(o * (M * b - h * d) - f * (i * b - s * d) + v * (i * h - s * M)), t[13] = r * (M * b - h * d) - f * (a * b - e * d) + v * (a * h - e * M), 
                    t[14] = -(r * (i * b - s * d) - o * (a * b - e * d) + v * (a * s - e * i)), t[15] = r * (i * h - s * M) - o * (a * h - e * M) + f * (a * s - e * i), 
                    t;
                }, n.determinant = function(t) {
                    var n = t[0], r = t[1], a = t[2], e = t[3], u = t[4], o = t[5], i = t[6], s = t[7], c = t[8], f = t[9], M = t[10], h = t[11], l = t[12], v = t[13], d = t[14], b = t[15];
                    return (n * o - r * u) * (M * b - h * d) - (n * i - a * u) * (f * b - h * v) + (n * s - e * u) * (f * d - M * v) + (r * i - a * o) * (c * b - h * l) - (r * s - e * o) * (c * d - M * l) + (a * s - e * i) * (c * v - f * l);
                }, n.multiply = e, n.translate = function(t, n, r) {
                    var a = r[0], e = r[1], u = r[2], o = void 0, i = void 0, s = void 0, c = void 0, f = void 0, M = void 0, h = void 0, l = void 0, v = void 0, d = void 0, b = void 0, m = void 0;
                    return n === t ? (t[12] = n[0] * a + n[4] * e + n[8] * u + n[12], t[13] = n[1] * a + n[5] * e + n[9] * u + n[13], 
                    t[14] = n[2] * a + n[6] * e + n[10] * u + n[14], t[15] = n[3] * a + n[7] * e + n[11] * u + n[15]) : (o = n[0], 
                    i = n[1], s = n[2], c = n[3], f = n[4], M = n[5], h = n[6], l = n[7], v = n[8], 
                    d = n[9], b = n[10], m = n[11], t[0] = o, t[1] = i, t[2] = s, t[3] = c, t[4] = f, 
                    t[5] = M, t[6] = h, t[7] = l, t[8] = v, t[9] = d, t[10] = b, t[11] = m, t[12] = o * a + f * e + v * u + n[12], 
                    t[13] = i * a + M * e + d * u + n[13], t[14] = s * a + h * e + b * u + n[14], t[15] = c * a + l * e + m * u + n[15]), 
                    t;
                }, n.scale = function(t, n, r) {
                    var a = r[0], e = r[1], u = r[2];
                    return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * e, 
                    t[5] = n[5] * e, t[6] = n[6] * e, t[7] = n[7] * e, t[8] = n[8] * u, t[9] = n[9] * u, 
                    t[10] = n[10] * u, t[11] = n[11] * u, t[12] = n[12], t[13] = n[13], t[14] = n[14], 
                    t[15] = n[15], t;
                }, n.rotate = function(t, n, r, a) {
                    var e = a[0], u = a[1], o = a[2], s = Math.sqrt(e * e + u * u + o * o), c = void 0, f = void 0, M = void 0, h = void 0, l = void 0, v = void 0, d = void 0, b = void 0, m = void 0, p = void 0, P = void 0, A = void 0, E = void 0, O = void 0, y = void 0, R = void 0, x = void 0, _ = void 0, q = void 0, S = void 0, Y = void 0, L = void 0, w = void 0, I = void 0;
                    return s < i.EPSILON ? null : (e *= s = 1 / s, u *= s, o *= s, c = Math.sin(r), 
                    f = Math.cos(r), M = 1 - f, h = n[0], l = n[1], v = n[2], d = n[3], b = n[4], m = n[5], 
                    p = n[6], P = n[7], A = n[8], E = n[9], O = n[10], y = n[11], R = e * e * M + f, 
                    x = u * e * M + o * c, _ = o * e * M - u * c, q = e * u * M - o * c, S = u * u * M + f, 
                    Y = o * u * M + e * c, L = e * o * M + u * c, w = u * o * M - e * c, I = o * o * M + f, 
                    t[0] = h * R + b * x + A * _, t[1] = l * R + m * x + E * _, t[2] = v * R + p * x + O * _, 
                    t[3] = d * R + P * x + y * _, t[4] = h * q + b * S + A * Y, t[5] = l * q + m * S + E * Y, 
                    t[6] = v * q + p * S + O * Y, t[7] = d * q + P * S + y * Y, t[8] = h * L + b * w + A * I, 
                    t[9] = l * L + m * w + E * I, t[10] = v * L + p * w + O * I, t[11] = d * L + P * w + y * I, 
                    n !== t && (t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t);
                }, n.rotateX = function(t, n, r) {
                    var a = Math.sin(r), e = Math.cos(r), u = n[4], o = n[5], i = n[6], s = n[7], c = n[8], f = n[9], M = n[10], h = n[11];
                    return n !== t && (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[12] = n[12], 
                    t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[4] = u * e + c * a, t[5] = o * e + f * a, 
                    t[6] = i * e + M * a, t[7] = s * e + h * a, t[8] = c * e - u * a, t[9] = f * e - o * a, 
                    t[10] = M * e - i * a, t[11] = h * e - s * a, t;
                }, n.rotateY = function(t, n, r) {
                    var a = Math.sin(r), e = Math.cos(r), u = n[0], o = n[1], i = n[2], s = n[3], c = n[8], f = n[9], M = n[10], h = n[11];
                    return n !== t && (t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[12] = n[12], 
                    t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = u * e - c * a, t[1] = o * e - f * a, 
                    t[2] = i * e - M * a, t[3] = s * e - h * a, t[8] = u * a + c * e, t[9] = o * a + f * e, 
                    t[10] = i * a + M * e, t[11] = s * a + h * e, t;
                }, n.rotateZ = function(t, n, r) {
                    var a = Math.sin(r), e = Math.cos(r), u = n[0], o = n[1], i = n[2], s = n[3], c = n[4], f = n[5], M = n[6], h = n[7];
                    return n !== t && (t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], 
                    t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = u * e + c * a, t[1] = o * e + f * a, 
                    t[2] = i * e + M * a, t[3] = s * e + h * a, t[4] = c * e - u * a, t[5] = f * e - o * a, 
                    t[6] = M * e - i * a, t[7] = h * e - s * a, t;
                }, n.fromTranslation = function(t, n) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
                    t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], 
                    t[15] = 1, t;
                }, n.fromScaling = function(t, n) {
                    return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n[1], t[6] = 0, 
                    t[7] = 0, t[8] = 0, t[9] = 0, t[10] = n[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, 
                    t[15] = 1, t;
                }, n.fromRotation = function(t, n, r) {
                    var a = r[0], e = r[1], u = r[2], o = Math.sqrt(a * a + e * e + u * u), s = void 0, c = void 0, f = void 0;
                    return o < i.EPSILON ? null : (a *= o = 1 / o, e *= o, u *= o, s = Math.sin(n), 
                    c = Math.cos(n), f = 1 - c, t[0] = a * a * f + c, t[1] = e * a * f + u * s, t[2] = u * a * f - e * s, 
                    t[3] = 0, t[4] = a * e * f - u * s, t[5] = e * e * f + c, t[6] = u * e * f + a * s, 
                    t[7] = 0, t[8] = a * u * f + e * s, t[9] = e * u * f - a * s, t[10] = u * u * f + c, 
                    t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t);
                }, n.fromXRotation = function(t, n) {
                    var r = Math.sin(n), a = Math.cos(n);
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = a, t[6] = r, t[7] = 0, 
                    t[8] = 0, t[9] = -r, t[10] = a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
                    t;
                }, n.fromYRotation = function(t, n) {
                    var r = Math.sin(n), a = Math.cos(n);
                    return t[0] = a, t[1] = 0, t[2] = -r, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, 
                    t[8] = r, t[9] = 0, t[10] = a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
                    t;
                }, n.fromZRotation = function(t, n) {
                    var r = Math.sin(n), a = Math.cos(n);
                    return t[0] = a, t[1] = r, t[2] = 0, t[3] = 0, t[4] = -r, t[5] = a, t[6] = 0, t[7] = 0, 
                    t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, 
                    t;
                }, n.fromRotationTranslation = u, n.fromQuat2 = function(t, n) {
                    var r = new i.ARRAY_TYPE(3), a = -n[0], e = -n[1], o = -n[2], s = n[3], c = n[4], f = n[5], M = n[6], h = n[7], l = a * a + e * e + o * o + s * s;
                    return l > 0 ? (r[0] = 2 * (c * s + h * a + f * o - M * e) / l, r[1] = 2 * (f * s + h * e + M * a - c * o) / l, 
                    r[2] = 2 * (M * s + h * o + c * e - f * a) / l) : (r[0] = 2 * (c * s + h * a + f * o - M * e), 
                    r[1] = 2 * (f * s + h * e + M * a - c * o), r[2] = 2 * (M * s + h * o + c * e - f * a)), 
                    u(t, n, r), t;
                }, n.getTranslation = function(t, n) {
                    return t[0] = n[12], t[1] = n[13], t[2] = n[14], t;
                }, n.getScaling = function(t, n) {
                    var r = n[0], a = n[1], e = n[2], u = n[4], o = n[5], i = n[6], s = n[8], c = n[9], f = n[10];
                    return t[0] = Math.sqrt(r * r + a * a + e * e), t[1] = Math.sqrt(u * u + o * o + i * i), 
                    t[2] = Math.sqrt(s * s + c * c + f * f), t;
                }, n.getRotation = function(t, n) {
                    var r = n[0] + n[5] + n[10], a = 0;
                    return r > 0 ? (a = 2 * Math.sqrt(r + 1), t[3] = .25 * a, t[0] = (n[6] - n[9]) / a, 
                    t[1] = (n[8] - n[2]) / a, t[2] = (n[1] - n[4]) / a) : n[0] > n[5] && n[0] > n[10] ? (a = 2 * Math.sqrt(1 + n[0] - n[5] - n[10]), 
                    t[3] = (n[6] - n[9]) / a, t[0] = .25 * a, t[1] = (n[1] + n[4]) / a, t[2] = (n[8] + n[2]) / a) : n[5] > n[10] ? (a = 2 * Math.sqrt(1 + n[5] - n[0] - n[10]), 
                    t[3] = (n[8] - n[2]) / a, t[0] = (n[1] + n[4]) / a, t[1] = .25 * a, t[2] = (n[6] + n[9]) / a) : (a = 2 * Math.sqrt(1 + n[10] - n[0] - n[5]), 
                    t[3] = (n[1] - n[4]) / a, t[0] = (n[8] + n[2]) / a, t[1] = (n[6] + n[9]) / a, t[2] = .25 * a), 
                    t;
                }, n.fromRotationTranslationScale = function(t, n, r, a) {
                    var e = n[0], u = n[1], o = n[2], i = n[3], s = e + e, c = u + u, f = o + o, M = e * s, h = e * c, l = e * f, v = u * c, d = u * f, b = o * f, m = i * s, p = i * c, P = i * f, A = a[0], E = a[1], O = a[2];
                    return t[0] = (1 - (v + b)) * A, t[1] = (h + P) * A, t[2] = (l - p) * A, t[3] = 0, 
                    t[4] = (h - P) * E, t[5] = (1 - (M + b)) * E, t[6] = (d + m) * E, t[7] = 0, t[8] = (l + p) * O, 
                    t[9] = (d - m) * O, t[10] = (1 - (M + v)) * O, t[11] = 0, t[12] = r[0], t[13] = r[1], 
                    t[14] = r[2], t[15] = 1, t;
                }, n.fromRotationTranslationScaleOrigin = function(t, n, r, a, e) {
                    var u = n[0], o = n[1], i = n[2], s = n[3], c = u + u, f = o + o, M = i + i, h = u * c, l = u * f, v = u * M, d = o * f, b = o * M, m = i * M, p = s * c, P = s * f, A = s * M, E = a[0], O = a[1], y = a[2], R = e[0], x = e[1], _ = e[2], q = (1 - (d + m)) * E, S = (l + A) * E, Y = (v - P) * E, L = (l - A) * O, w = (1 - (h + m)) * O, I = (b + p) * O, N = (v + P) * y, g = (b - p) * y, T = (1 - (h + d)) * y;
                    return t[0] = q, t[1] = S, t[2] = Y, t[3] = 0, t[4] = L, t[5] = w, t[6] = I, t[7] = 0, 
                    t[8] = N, t[9] = g, t[10] = T, t[11] = 0, t[12] = r[0] + R - (q * R + L * x + N * _), 
                    t[13] = r[1] + x - (S * R + w * x + g * _), t[14] = r[2] + _ - (Y * R + I * x + T * _), 
                    t[15] = 1, t;
                }, n.fromQuat = function(t, n) {
                    var r = n[0], a = n[1], e = n[2], u = n[3], o = r + r, i = a + a, s = e + e, c = r * o, f = a * o, M = a * i, h = e * o, l = e * i, v = e * s, d = u * o, b = u * i, m = u * s;
                    return t[0] = 1 - M - v, t[1] = f + m, t[2] = h - b, t[3] = 0, t[4] = f - m, t[5] = 1 - c - v, 
                    t[6] = l + d, t[7] = 0, t[8] = h + b, t[9] = l - d, t[10] = 1 - c - M, t[11] = 0, 
                    t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
                }, n.frustum = function(t, n, r, a, e, u, o) {
                    var i = 1 / (r - n), s = 1 / (e - a), c = 1 / (u - o);
                    return t[0] = 2 * u * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * u * s, 
                    t[6] = 0, t[7] = 0, t[8] = (r + n) * i, t[9] = (e + a) * s, t[10] = (o + u) * c, 
                    t[11] = -1, t[12] = 0, t[13] = 0, t[14] = o * u * 2 * c, t[15] = 0, t;
                }, n.perspective = function(t, n, r, a, e) {
                    var u = 1 / Math.tan(n / 2), o = void 0;
                    return t[0] = u / r, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = u, t[6] = 0, 
                    t[7] = 0, t[8] = 0, t[9] = 0, t[11] = -1, t[12] = 0, t[13] = 0, t[15] = 0, null != e && e !== 1 / 0 ? (o = 1 / (a - e), 
                    t[10] = (e + a) * o, t[14] = 2 * e * a * o) : (t[10] = -1, t[14] = -2 * a), t;
                }, n.perspectiveFromFieldOfView = function(t, n, r, a) {
                    var e = Math.tan(n.upDegrees * Math.PI / 180), u = Math.tan(n.downDegrees * Math.PI / 180), o = Math.tan(n.leftDegrees * Math.PI / 180), i = Math.tan(n.rightDegrees * Math.PI / 180), s = 2 / (o + i), c = 2 / (e + u);
                    return t[0] = s, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = c, t[6] = 0, t[7] = 0, 
                    t[8] = -(o - i) * s * .5, t[9] = (e - u) * c * .5, t[10] = a / (r - a), t[11] = -1, 
                    t[12] = 0, t[13] = 0, t[14] = a * r / (r - a), t[15] = 0, t;
                }, n.ortho = function(t, n, r, a, e, u, o) {
                    var i = 1 / (n - r), s = 1 / (a - e), c = 1 / (u - o);
                    return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * s, t[6] = 0, 
                    t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * c, t[11] = 0, t[12] = (n + r) * i, t[13] = (e + a) * s, 
                    t[14] = (o + u) * c, t[15] = 1, t;
                }, n.lookAt = function(t, n, r, e) {
                    var u = void 0, o = void 0, s = void 0, c = void 0, f = void 0, M = void 0, h = void 0, l = void 0, v = void 0, d = void 0, b = n[0], m = n[1], p = n[2], P = e[0], A = e[1], E = e[2], O = r[0], y = r[1], R = r[2];
                    return Math.abs(b - O) < i.EPSILON && Math.abs(m - y) < i.EPSILON && Math.abs(p - R) < i.EPSILON ? a(t) : (h = b - O, 
                    l = m - y, v = p - R, d = 1 / Math.sqrt(h * h + l * l + v * v), u = A * (v *= d) - E * (l *= d), 
                    o = E * (h *= d) - P * v, s = P * l - A * h, (d = Math.sqrt(u * u + o * o + s * s)) ? (u *= d = 1 / d, 
                    o *= d, s *= d) : (u = 0, o = 0, s = 0), c = l * s - v * o, f = v * u - h * s, M = h * o - l * u, 
                    (d = Math.sqrt(c * c + f * f + M * M)) ? (c *= d = 1 / d, f *= d, M *= d) : (c = 0, 
                    f = 0, M = 0), t[0] = u, t[1] = c, t[2] = h, t[3] = 0, t[4] = o, t[5] = f, t[6] = l, 
                    t[7] = 0, t[8] = s, t[9] = M, t[10] = v, t[11] = 0, t[12] = -(u * b + o * m + s * p), 
                    t[13] = -(c * b + f * m + M * p), t[14] = -(h * b + l * m + v * p), t[15] = 1, t);
                }, n.targetTo = function(t, n, r, a) {
                    var e = n[0], u = n[1], o = n[2], i = a[0], s = a[1], c = a[2], f = e - r[0], M = u - r[1], h = o - r[2], l = f * f + M * M + h * h;
                    l > 0 && (l = 1 / Math.sqrt(l), f *= l, M *= l, h *= l);
                    var v = s * h - c * M, d = c * f - i * h, b = i * M - s * f;
                    return (l = v * v + d * d + b * b) > 0 && (l = 1 / Math.sqrt(l), v *= l, d *= l, 
                    b *= l), t[0] = v, t[1] = d, t[2] = b, t[3] = 0, t[4] = M * b - h * d, t[5] = h * v - f * b, 
                    t[6] = f * d - M * v, t[7] = 0, t[8] = f, t[9] = M, t[10] = h, t[11] = 0, t[12] = e, 
                    t[13] = u, t[14] = o, t[15] = 1, t;
                }, n.str = function(t) {
                    return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")";
                }, n.frob = function(t) {
                    return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2));
                }, n.add = function(t, n, r) {
                    return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], 
                    t[4] = n[4] + r[4], t[5] = n[5] + r[5], t[6] = n[6] + r[6], t[7] = n[7] + r[7], 
                    t[8] = n[8] + r[8], t[9] = n[9] + r[9], t[10] = n[10] + r[10], t[11] = n[11] + r[11], 
                    t[12] = n[12] + r[12], t[13] = n[13] + r[13], t[14] = n[14] + r[14], t[15] = n[15] + r[15], 
                    t;
                }, n.subtract = o, n.multiplyScalar = function(t, n, r) {
                    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t[4] = n[4] * r, 
                    t[5] = n[5] * r, t[6] = n[6] * r, t[7] = n[7] * r, t[8] = n[8] * r, t[9] = n[9] * r, 
                    t[10] = n[10] * r, t[11] = n[11] * r, t[12] = n[12] * r, t[13] = n[13] * r, t[14] = n[14] * r, 
                    t[15] = n[15] * r, t;
                }, n.multiplyScalarAndAdd = function(t, n, r, a) {
                    return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t[2] = n[2] + r[2] * a, t[3] = n[3] + r[3] * a, 
                    t[4] = n[4] + r[4] * a, t[5] = n[5] + r[5] * a, t[6] = n[6] + r[6] * a, t[7] = n[7] + r[7] * a, 
                    t[8] = n[8] + r[8] * a, t[9] = n[9] + r[9] * a, t[10] = n[10] + r[10] * a, t[11] = n[11] + r[11] * a, 
                    t[12] = n[12] + r[12] * a, t[13] = n[13] + r[13] * a, t[14] = n[14] + r[14] * a, 
                    t[15] = n[15] + r[15] * a, t;
                }, n.exactEquals = function(t, n) {
                    return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8] && t[9] === n[9] && t[10] === n[10] && t[11] === n[11] && t[12] === n[12] && t[13] === n[13] && t[14] === n[14] && t[15] === n[15];
                }, n.equals = function(t, n) {
                    var r = t[0], a = t[1], e = t[2], u = t[3], o = t[4], s = t[5], c = t[6], f = t[7], M = t[8], h = t[9], l = t[10], v = t[11], d = t[12], b = t[13], m = t[14], p = t[15], P = n[0], A = n[1], E = n[2], O = n[3], y = n[4], R = n[5], x = n[6], _ = n[7], q = n[8], S = n[9], Y = n[10], L = n[11], w = n[12], I = n[13], N = n[14], g = n[15];
                    return Math.abs(r - P) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(P)) && Math.abs(a - A) <= i.EPSILON * Math.max(1, Math.abs(a), Math.abs(A)) && Math.abs(e - E) <= i.EPSILON * Math.max(1, Math.abs(e), Math.abs(E)) && Math.abs(u - O) <= i.EPSILON * Math.max(1, Math.abs(u), Math.abs(O)) && Math.abs(o - y) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(y)) && Math.abs(s - R) <= i.EPSILON * Math.max(1, Math.abs(s), Math.abs(R)) && Math.abs(c - x) <= i.EPSILON * Math.max(1, Math.abs(c), Math.abs(x)) && Math.abs(f - _) <= i.EPSILON * Math.max(1, Math.abs(f), Math.abs(_)) && Math.abs(M - q) <= i.EPSILON * Math.max(1, Math.abs(M), Math.abs(q)) && Math.abs(h - S) <= i.EPSILON * Math.max(1, Math.abs(h), Math.abs(S)) && Math.abs(l - Y) <= i.EPSILON * Math.max(1, Math.abs(l), Math.abs(Y)) && Math.abs(v - L) <= i.EPSILON * Math.max(1, Math.abs(v), Math.abs(L)) && Math.abs(d - w) <= i.EPSILON * Math.max(1, Math.abs(d), Math.abs(w)) && Math.abs(b - I) <= i.EPSILON * Math.max(1, Math.abs(b), Math.abs(I)) && Math.abs(m - N) <= i.EPSILON * Math.max(1, Math.abs(m), Math.abs(N)) && Math.abs(p - g) <= i.EPSILON * Math.max(1, Math.abs(p), Math.abs(g));
                };
                var i = function(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n.default = t, n;
                }(r(0));
                n.mul = e, n.sub = o;
            }, function(t, n, r) {
                function a(t, n, r) {
                    var a = n[0], e = n[1], u = n[2], o = n[3], i = n[4], s = n[5], c = n[6], f = n[7], M = n[8], h = r[0], l = r[1], v = r[2], d = r[3], b = r[4], m = r[5], p = r[6], P = r[7], A = r[8];
                    return t[0] = h * a + l * o + v * c, t[1] = h * e + l * i + v * f, t[2] = h * u + l * s + v * M, 
                    t[3] = d * a + b * o + m * c, t[4] = d * e + b * i + m * f, t[5] = d * u + b * s + m * M, 
                    t[6] = p * a + P * o + A * c, t[7] = p * e + P * i + A * f, t[8] = p * u + P * s + A * M, 
                    t;
                }
                function e(t, n, r) {
                    return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], 
                    t[4] = n[4] - r[4], t[5] = n[5] - r[5], t[6] = n[6] - r[6], t[7] = n[7] - r[7], 
                    t[8] = n[8] - r[8], t;
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.sub = n.mul = void 0, n.create = function() {
                    var t = new u.ARRAY_TYPE(9);
                    return u.ARRAY_TYPE != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[5] = 0, 
                    t[6] = 0, t[7] = 0), t[0] = 1, t[4] = 1, t[8] = 1, t;
                }, n.fromMat4 = function(t, n) {
                    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[4], t[4] = n[5], t[5] = n[6], 
                    t[6] = n[8], t[7] = n[9], t[8] = n[10], t;
                }, n.clone = function(t) {
                    var n = new u.ARRAY_TYPE(9);
                    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], 
                    n[6] = t[6], n[7] = t[7], n[8] = t[8], n;
                }, n.copy = function(t, n) {
                    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], 
                    t[6] = n[6], t[7] = n[7], t[8] = n[8], t;
                }, n.fromValues = function(t, n, r, a, e, o, i, s, c) {
                    var f = new u.ARRAY_TYPE(9);
                    return f[0] = t, f[1] = n, f[2] = r, f[3] = a, f[4] = e, f[5] = o, f[6] = i, f[7] = s, 
                    f[8] = c, f;
                }, n.set = function(t, n, r, a, e, u, o, i, s, c) {
                    return t[0] = n, t[1] = r, t[2] = a, t[3] = e, t[4] = u, t[5] = o, t[6] = i, t[7] = s, 
                    t[8] = c, t;
                }, n.identity = function(t) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, 
                    t[8] = 1, t;
                }, n.transpose = function(t, n) {
                    if (t === n) {
                        var r = n[1], a = n[2], e = n[5];
                        t[1] = n[3], t[2] = n[6], t[3] = r, t[5] = n[7], t[6] = a, t[7] = e;
                    } else t[0] = n[0], t[1] = n[3], t[2] = n[6], t[3] = n[1], t[4] = n[4], t[5] = n[7], 
                    t[6] = n[2], t[7] = n[5], t[8] = n[8];
                    return t;
                }, n.invert = function(t, n) {
                    var r = n[0], a = n[1], e = n[2], u = n[3], o = n[4], i = n[5], s = n[6], c = n[7], f = n[8], M = f * o - i * c, h = -f * u + i * s, l = c * u - o * s, v = r * M + a * h + e * l;
                    return v ? (v = 1 / v, t[0] = M * v, t[1] = (-f * a + e * c) * v, t[2] = (i * a - e * o) * v, 
                    t[3] = h * v, t[4] = (f * r - e * s) * v, t[5] = (-i * r + e * u) * v, t[6] = l * v, 
                    t[7] = (-c * r + a * s) * v, t[8] = (o * r - a * u) * v, t) : null;
                }, n.adjoint = function(t, n) {
                    var r = n[0], a = n[1], e = n[2], u = n[3], o = n[4], i = n[5], s = n[6], c = n[7], f = n[8];
                    return t[0] = o * f - i * c, t[1] = e * c - a * f, t[2] = a * i - e * o, t[3] = i * s - u * f, 
                    t[4] = r * f - e * s, t[5] = e * u - r * i, t[6] = u * c - o * s, t[7] = a * s - r * c, 
                    t[8] = r * o - a * u, t;
                }, n.determinant = function(t) {
                    var n = t[0], r = t[1], a = t[2], e = t[3], u = t[4], o = t[5], i = t[6], s = t[7], c = t[8];
                    return n * (c * u - o * s) + r * (-c * e + o * i) + a * (s * e - u * i);
                }, n.multiply = a, n.translate = function(t, n, r) {
                    var a = n[0], e = n[1], u = n[2], o = n[3], i = n[4], s = n[5], c = n[6], f = n[7], M = n[8], h = r[0], l = r[1];
                    return t[0] = a, t[1] = e, t[2] = u, t[3] = o, t[4] = i, t[5] = s, t[6] = h * a + l * o + c, 
                    t[7] = h * e + l * i + f, t[8] = h * u + l * s + M, t;
                }, n.rotate = function(t, n, r) {
                    var a = n[0], e = n[1], u = n[2], o = n[3], i = n[4], s = n[5], c = n[6], f = n[7], M = n[8], h = Math.sin(r), l = Math.cos(r);
                    return t[0] = l * a + h * o, t[1] = l * e + h * i, t[2] = l * u + h * s, t[3] = l * o - h * a, 
                    t[4] = l * i - h * e, t[5] = l * s - h * u, t[6] = c, t[7] = f, t[8] = M, t;
                }, n.scale = function(t, n, r) {
                    var a = r[0], e = r[1];
                    return t[0] = a * n[0], t[1] = a * n[1], t[2] = a * n[2], t[3] = e * n[3], t[4] = e * n[4], 
                    t[5] = e * n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t;
                }, n.fromTranslation = function(t, n) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = n[0], 
                    t[7] = n[1], t[8] = 1, t;
                }, n.fromRotation = function(t, n) {
                    var r = Math.sin(n), a = Math.cos(n);
                    return t[0] = a, t[1] = r, t[2] = 0, t[3] = -r, t[4] = a, t[5] = 0, t[6] = 0, t[7] = 0, 
                    t[8] = 1, t;
                }, n.fromScaling = function(t, n) {
                    return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = n[1], t[5] = 0, t[6] = 0, 
                    t[7] = 0, t[8] = 1, t;
                }, n.fromMat2d = function(t, n) {
                    return t[0] = n[0], t[1] = n[1], t[2] = 0, t[3] = n[2], t[4] = n[3], t[5] = 0, t[6] = n[4], 
                    t[7] = n[5], t[8] = 1, t;
                }, n.fromQuat = function(t, n) {
                    var r = n[0], a = n[1], e = n[2], u = n[3], o = r + r, i = a + a, s = e + e, c = r * o, f = a * o, M = a * i, h = e * o, l = e * i, v = e * s, d = u * o, b = u * i, m = u * s;
                    return t[0] = 1 - M - v, t[3] = f - m, t[6] = h + b, t[1] = f + m, t[4] = 1 - c - v, 
                    t[7] = l - d, t[2] = h - b, t[5] = l + d, t[8] = 1 - c - M, t;
                }, n.normalFromMat4 = function(t, n) {
                    var r = n[0], a = n[1], e = n[2], u = n[3], o = n[4], i = n[5], s = n[6], c = n[7], f = n[8], M = n[9], h = n[10], l = n[11], v = n[12], d = n[13], b = n[14], m = n[15], p = r * i - a * o, P = r * s - e * o, A = r * c - u * o, E = a * s - e * i, O = a * c - u * i, y = e * c - u * s, R = f * d - M * v, x = f * b - h * v, _ = f * m - l * v, q = M * b - h * d, S = M * m - l * d, Y = h * m - l * b, L = p * Y - P * S + A * q + E * _ - O * x + y * R;
                    return L ? (L = 1 / L, t[0] = (i * Y - s * S + c * q) * L, t[1] = (s * _ - o * Y - c * x) * L, 
                    t[2] = (o * S - i * _ + c * R) * L, t[3] = (e * S - a * Y - u * q) * L, t[4] = (r * Y - e * _ + u * x) * L, 
                    t[5] = (a * _ - r * S - u * R) * L, t[6] = (d * y - b * O + m * E) * L, t[7] = (b * A - v * y - m * P) * L, 
                    t[8] = (v * O - d * A + m * p) * L, t) : null;
                }, n.projection = function(t, n, r) {
                    return t[0] = 2 / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = -2 / r, t[5] = 0, t[6] = -1, 
                    t[7] = 1, t[8] = 1, t;
                }, n.str = function(t) {
                    return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")";
                }, n.frob = function(t) {
                    return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2));
                }, n.add = function(t, n, r) {
                    return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], 
                    t[4] = n[4] + r[4], t[5] = n[5] + r[5], t[6] = n[6] + r[6], t[7] = n[7] + r[7], 
                    t[8] = n[8] + r[8], t;
                }, n.subtract = e, n.multiplyScalar = function(t, n, r) {
                    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t[4] = n[4] * r, 
                    t[5] = n[5] * r, t[6] = n[6] * r, t[7] = n[7] * r, t[8] = n[8] * r, t;
                }, n.multiplyScalarAndAdd = function(t, n, r, a) {
                    return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t[2] = n[2] + r[2] * a, t[3] = n[3] + r[3] * a, 
                    t[4] = n[4] + r[4] * a, t[5] = n[5] + r[5] * a, t[6] = n[6] + r[6] * a, t[7] = n[7] + r[7] * a, 
                    t[8] = n[8] + r[8] * a, t;
                }, n.exactEquals = function(t, n) {
                    return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8];
                }, n.equals = function(t, n) {
                    var r = t[0], a = t[1], e = t[2], o = t[3], i = t[4], s = t[5], c = t[6], f = t[7], M = t[8], h = n[0], l = n[1], v = n[2], d = n[3], b = n[4], m = n[5], p = n[6], P = n[7], A = n[8];
                    return Math.abs(r - h) <= u.EPSILON * Math.max(1, Math.abs(r), Math.abs(h)) && Math.abs(a - l) <= u.EPSILON * Math.max(1, Math.abs(a), Math.abs(l)) && Math.abs(e - v) <= u.EPSILON * Math.max(1, Math.abs(e), Math.abs(v)) && Math.abs(o - d) <= u.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) && Math.abs(i - b) <= u.EPSILON * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(s - m) <= u.EPSILON * Math.max(1, Math.abs(s), Math.abs(m)) && Math.abs(c - p) <= u.EPSILON * Math.max(1, Math.abs(c), Math.abs(p)) && Math.abs(f - P) <= u.EPSILON * Math.max(1, Math.abs(f), Math.abs(P)) && Math.abs(M - A) <= u.EPSILON * Math.max(1, Math.abs(M), Math.abs(A));
                };
                var u = function(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n.default = t, n;
                }(r(0));
                n.mul = a, n.sub = e;
            }, function(t, n, r) {
                function a() {
                    var t = new M.ARRAY_TYPE(2);
                    return M.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0), t;
                }
                function e(t, n, r) {
                    return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t;
                }
                function u(t, n, r) {
                    return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t;
                }
                function o(t, n, r) {
                    return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t;
                }
                function i(t, n) {
                    var r = n[0] - t[0], a = n[1] - t[1];
                    return Math.sqrt(r * r + a * a);
                }
                function s(t, n) {
                    var r = n[0] - t[0], a = n[1] - t[1];
                    return r * r + a * a;
                }
                function c(t) {
                    var n = t[0], r = t[1];
                    return Math.sqrt(n * n + r * r);
                }
                function f(t) {
                    var n = t[0], r = t[1];
                    return n * n + r * r;
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.forEach = n.sqrLen = n.sqrDist = n.dist = n.div = n.mul = n.sub = n.len = void 0, 
                n.create = a, n.clone = function(t) {
                    var n = new M.ARRAY_TYPE(2);
                    return n[0] = t[0], n[1] = t[1], n;
                }, n.fromValues = function(t, n) {
                    var r = new M.ARRAY_TYPE(2);
                    return r[0] = t, r[1] = n, r;
                }, n.copy = function(t, n) {
                    return t[0] = n[0], t[1] = n[1], t;
                }, n.set = function(t, n, r) {
                    return t[0] = n, t[1] = r, t;
                }, n.add = function(t, n, r) {
                    return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t;
                }, n.subtract = e, n.multiply = u, n.divide = o, n.ceil = function(t, n) {
                    return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t;
                }, n.floor = function(t, n) {
                    return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t;
                }, n.min = function(t, n, r) {
                    return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t;
                }, n.max = function(t, n, r) {
                    return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t;
                }, n.round = function(t, n) {
                    return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t;
                }, n.scale = function(t, n, r) {
                    return t[0] = n[0] * r, t[1] = n[1] * r, t;
                }, n.scaleAndAdd = function(t, n, r, a) {
                    return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t;
                }, n.distance = i, n.squaredDistance = s, n.length = c, n.squaredLength = f, n.negate = function(t, n) {
                    return t[0] = -n[0], t[1] = -n[1], t;
                }, n.inverse = function(t, n) {
                    return t[0] = 1 / n[0], t[1] = 1 / n[1], t;
                }, n.normalize = function(t, n) {
                    var r = n[0], a = n[1], e = r * r + a * a;
                    return e > 0 && (e = 1 / Math.sqrt(e), t[0] = n[0] * e, t[1] = n[1] * e), t;
                }, n.dot = function(t, n) {
                    return t[0] * n[0] + t[1] * n[1];
                }, n.cross = function(t, n, r) {
                    var a = n[0] * r[1] - n[1] * r[0];
                    return t[0] = t[1] = 0, t[2] = a, t;
                }, n.lerp = function(t, n, r, a) {
                    var e = n[0], u = n[1];
                    return t[0] = e + a * (r[0] - e), t[1] = u + a * (r[1] - u), t;
                }, n.random = function(t, n) {
                    n = n || 1;
                    var r = 2 * M.RANDOM() * Math.PI;
                    return t[0] = Math.cos(r) * n, t[1] = Math.sin(r) * n, t;
                }, n.transformMat2 = function(t, n, r) {
                    var a = n[0], e = n[1];
                    return t[0] = r[0] * a + r[2] * e, t[1] = r[1] * a + r[3] * e, t;
                }, n.transformMat2d = function(t, n, r) {
                    var a = n[0], e = n[1];
                    return t[0] = r[0] * a + r[2] * e + r[4], t[1] = r[1] * a + r[3] * e + r[5], t;
                }, n.transformMat3 = function(t, n, r) {
                    var a = n[0], e = n[1];
                    return t[0] = r[0] * a + r[3] * e + r[6], t[1] = r[1] * a + r[4] * e + r[7], t;
                }, n.transformMat4 = function(t, n, r) {
                    var a = n[0], e = n[1];
                    return t[0] = r[0] * a + r[4] * e + r[12], t[1] = r[1] * a + r[5] * e + r[13], t;
                }, n.rotate = function(t, n, r, a) {
                    var e = n[0] - r[0], u = n[1] - r[1], o = Math.sin(a), i = Math.cos(a);
                    return t[0] = e * i - u * o + r[0], t[1] = e * o + u * i + r[1], t;
                }, n.angle = function(t, n) {
                    var r = t[0], a = t[1], e = n[0], u = n[1], o = r * r + a * a;
                    o > 0 && (o = 1 / Math.sqrt(o));
                    var i = e * e + u * u;
                    i > 0 && (i = 1 / Math.sqrt(i));
                    var s = (r * e + a * u) * o * i;
                    return s > 1 ? 0 : s < -1 ? Math.PI : Math.acos(s);
                }, n.str = function(t) {
                    return "vec2(" + t[0] + ", " + t[1] + ")";
                }, n.exactEquals = function(t, n) {
                    return t[0] === n[0] && t[1] === n[1];
                }, n.equals = function(t, n) {
                    var r = t[0], a = t[1], e = n[0], u = n[1];
                    return Math.abs(r - e) <= M.EPSILON * Math.max(1, Math.abs(r), Math.abs(e)) && Math.abs(a - u) <= M.EPSILON * Math.max(1, Math.abs(a), Math.abs(u));
                };
                var M = function(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n.default = t, n;
                }(r(0));
                n.len = c, n.sub = e, n.mul = u, n.div = o, n.dist = i, n.sqrDist = s, n.sqrLen = f, 
                n.forEach = function() {
                    var t = a();
                    return function(n, r, a, e, u, o) {
                        var i = void 0, s = void 0;
                        for (r || (r = 2), a || (a = 0), s = e ? Math.min(e * r + a, n.length) : n.length, 
                        i = a; i < s; i += r) t[0] = n[i], t[1] = n[i + 1], u(t, t, o), n[i] = t[0], n[i + 1] = t[1];
                        return n;
                    };
                }();
            }, function(t, n, r) {
                function a(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n.default = t, n;
                }
                function e(t, n, r) {
                    var a = .5 * r[0], e = .5 * r[1], u = .5 * r[2], o = n[0], i = n[1], s = n[2], c = n[3];
                    return t[0] = o, t[1] = i, t[2] = s, t[3] = c, t[4] = a * c + e * s - u * i, t[5] = e * c + u * o - a * s, 
                    t[6] = u * c + a * i - e * o, t[7] = -a * o - e * i - u * s, t;
                }
                function u(t, n) {
                    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], 
                    t[6] = n[6], t[7] = n[7], t;
                }
                function o(t, n, r) {
                    var a = n[0], e = n[1], u = n[2], o = n[3], i = r[4], s = r[5], c = r[6], f = r[7], M = n[4], h = n[5], l = n[6], v = n[7], d = r[0], b = r[1], m = r[2], p = r[3];
                    return t[0] = a * p + o * d + e * m - u * b, t[1] = e * p + o * b + u * d - a * m, 
                    t[2] = u * p + o * m + a * b - e * d, t[3] = o * p - a * d - e * b - u * m, t[4] = a * f + o * i + e * c - u * s + M * p + v * d + h * m - l * b, 
                    t[5] = e * f + o * s + u * i - a * c + h * p + v * b + l * d - M * m, t[6] = u * f + o * c + a * s - e * i + l * p + v * m + M * b - h * d, 
                    t[7] = o * f - a * i - e * s - u * c + v * p - M * d - h * b - l * m, t;
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.sqrLen = n.squaredLength = n.len = n.length = n.dot = n.mul = n.setReal = n.getReal = void 0, 
                n.create = function() {
                    var t = new i.ARRAY_TYPE(8);
                    return i.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0, t[4] = 0, 
                    t[5] = 0, t[6] = 0, t[7] = 0), t[3] = 1, t;
                }, n.clone = function(t) {
                    var n = new i.ARRAY_TYPE(8);
                    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], 
                    n[6] = t[6], n[7] = t[7], n;
                }, n.fromValues = function(t, n, r, a, e, u, o, s) {
                    var c = new i.ARRAY_TYPE(8);
                    return c[0] = t, c[1] = n, c[2] = r, c[3] = a, c[4] = e, c[5] = u, c[6] = o, c[7] = s, 
                    c;
                }, n.fromRotationTranslationValues = function(t, n, r, a, e, u, o) {
                    var s = new i.ARRAY_TYPE(8);
                    s[0] = t, s[1] = n, s[2] = r, s[3] = a;
                    var c = .5 * e, f = .5 * u, M = .5 * o;
                    return s[4] = c * a + f * r - M * n, s[5] = f * a + M * t - c * r, s[6] = M * a + c * n - f * t, 
                    s[7] = -c * t - f * n - M * r, s;
                }, n.fromRotationTranslation = e, n.fromTranslation = function(t, n) {
                    return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = .5 * n[0], t[5] = .5 * n[1], 
                    t[6] = .5 * n[2], t[7] = 0, t;
                }, n.fromRotation = function(t, n) {
                    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = 0, t[5] = 0, t[6] = 0, 
                    t[7] = 0, t;
                }, n.fromMat4 = function(t, n) {
                    var r = s.create();
                    c.getRotation(r, n);
                    var a = new i.ARRAY_TYPE(3);
                    return c.getTranslation(a, n), e(t, r, a), t;
                }, n.copy = u, n.identity = function(t) {
                    return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, 
                    t;
                }, n.set = function(t, n, r, a, e, u, o, i, s) {
                    return t[0] = n, t[1] = r, t[2] = a, t[3] = e, t[4] = u, t[5] = o, t[6] = i, t[7] = s, 
                    t;
                }, n.getDual = function(t, n) {
                    return t[0] = n[4], t[1] = n[5], t[2] = n[6], t[3] = n[7], t;
                }, n.setDual = function(t, n) {
                    return t[4] = n[0], t[5] = n[1], t[6] = n[2], t[7] = n[3], t;
                }, n.getTranslation = function(t, n) {
                    var r = n[4], a = n[5], e = n[6], u = n[7], o = -n[0], i = -n[1], s = -n[2], c = n[3];
                    return t[0] = 2 * (r * c + u * o + a * s - e * i), t[1] = 2 * (a * c + u * i + e * o - r * s), 
                    t[2] = 2 * (e * c + u * s + r * i - a * o), t;
                }, n.translate = function(t, n, r) {
                    var a = n[0], e = n[1], u = n[2], o = n[3], i = .5 * r[0], s = .5 * r[1], c = .5 * r[2], f = n[4], M = n[5], h = n[6], l = n[7];
                    return t[0] = a, t[1] = e, t[2] = u, t[3] = o, t[4] = o * i + e * c - u * s + f, 
                    t[5] = o * s + u * i - a * c + M, t[6] = o * c + a * s - e * i + h, t[7] = -a * i - e * s - u * c + l, 
                    t;
                }, n.rotateX = function(t, n, r) {
                    var a = -n[0], e = -n[1], u = -n[2], o = n[3], i = n[4], c = n[5], f = n[6], M = n[7], h = i * o + M * a + c * u - f * e, l = c * o + M * e + f * a - i * u, v = f * o + M * u + i * e - c * a, d = M * o - i * a - c * e - f * u;
                    return s.rotateX(t, n, r), a = t[0], e = t[1], u = t[2], o = t[3], t[4] = h * o + d * a + l * u - v * e, 
                    t[5] = l * o + d * e + v * a - h * u, t[6] = v * o + d * u + h * e - l * a, t[7] = d * o - h * a - l * e - v * u, 
                    t;
                }, n.rotateY = function(t, n, r) {
                    var a = -n[0], e = -n[1], u = -n[2], o = n[3], i = n[4], c = n[5], f = n[6], M = n[7], h = i * o + M * a + c * u - f * e, l = c * o + M * e + f * a - i * u, v = f * o + M * u + i * e - c * a, d = M * o - i * a - c * e - f * u;
                    return s.rotateY(t, n, r), a = t[0], e = t[1], u = t[2], o = t[3], t[4] = h * o + d * a + l * u - v * e, 
                    t[5] = l * o + d * e + v * a - h * u, t[6] = v * o + d * u + h * e - l * a, t[7] = d * o - h * a - l * e - v * u, 
                    t;
                }, n.rotateZ = function(t, n, r) {
                    var a = -n[0], e = -n[1], u = -n[2], o = n[3], i = n[4], c = n[5], f = n[6], M = n[7], h = i * o + M * a + c * u - f * e, l = c * o + M * e + f * a - i * u, v = f * o + M * u + i * e - c * a, d = M * o - i * a - c * e - f * u;
                    return s.rotateZ(t, n, r), a = t[0], e = t[1], u = t[2], o = t[3], t[4] = h * o + d * a + l * u - v * e, 
                    t[5] = l * o + d * e + v * a - h * u, t[6] = v * o + d * u + h * e - l * a, t[7] = d * o - h * a - l * e - v * u, 
                    t;
                }, n.rotateByQuatAppend = function(t, n, r) {
                    var a = r[0], e = r[1], u = r[2], o = r[3], i = n[0], s = n[1], c = n[2], f = n[3];
                    return t[0] = i * o + f * a + s * u - c * e, t[1] = s * o + f * e + c * a - i * u, 
                    t[2] = c * o + f * u + i * e - s * a, t[3] = f * o - i * a - s * e - c * u, i = n[4], 
                    s = n[5], c = n[6], f = n[7], t[4] = i * o + f * a + s * u - c * e, t[5] = s * o + f * e + c * a - i * u, 
                    t[6] = c * o + f * u + i * e - s * a, t[7] = f * o - i * a - s * e - c * u, t;
                }, n.rotateByQuatPrepend = function(t, n, r) {
                    var a = n[0], e = n[1], u = n[2], o = n[3], i = r[0], s = r[1], c = r[2], f = r[3];
                    return t[0] = a * f + o * i + e * c - u * s, t[1] = e * f + o * s + u * i - a * c, 
                    t[2] = u * f + o * c + a * s - e * i, t[3] = o * f - a * i - e * s - u * c, i = r[4], 
                    s = r[5], c = r[6], f = r[7], t[4] = a * f + o * i + e * c - u * s, t[5] = e * f + o * s + u * i - a * c, 
                    t[6] = u * f + o * c + a * s - e * i, t[7] = o * f - a * i - e * s - u * c, t;
                }, n.rotateAroundAxis = function(t, n, r, a) {
                    if (Math.abs(a) < i.EPSILON) return u(t, n);
                    var e = Math.sqrt(r[0] * r[0] + r[1] * r[1] + r[2] * r[2]);
                    a *= .5;
                    var o = Math.sin(a), s = o * r[0] / e, c = o * r[1] / e, f = o * r[2] / e, M = Math.cos(a), h = n[0], l = n[1], v = n[2], d = n[3];
                    t[0] = h * M + d * s + l * f - v * c, t[1] = l * M + d * c + v * s - h * f, t[2] = v * M + d * f + h * c - l * s, 
                    t[3] = d * M - h * s - l * c - v * f;
                    var b = n[4], m = n[5], p = n[6], P = n[7];
                    return t[4] = b * M + P * s + m * f - p * c, t[5] = m * M + P * c + p * s - b * f, 
                    t[6] = p * M + P * f + b * c - m * s, t[7] = P * M - b * s - m * c - p * f, t;
                }, n.add = function(t, n, r) {
                    return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], 
                    t[4] = n[4] + r[4], t[5] = n[5] + r[5], t[6] = n[6] + r[6], t[7] = n[7] + r[7], 
                    t;
                }, n.multiply = o, n.scale = function(t, n, r) {
                    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t[4] = n[4] * r, 
                    t[5] = n[5] * r, t[6] = n[6] * r, t[7] = n[7] * r, t;
                }, n.lerp = function(t, n, r, a) {
                    var e = 1 - a;
                    return f(n, r) < 0 && (a = -a), t[0] = n[0] * e + r[0] * a, t[1] = n[1] * e + r[1] * a, 
                    t[2] = n[2] * e + r[2] * a, t[3] = n[3] * e + r[3] * a, t[4] = n[4] * e + r[4] * a, 
                    t[5] = n[5] * e + r[5] * a, t[6] = n[6] * e + r[6] * a, t[7] = n[7] * e + r[7] * a, 
                    t;
                }, n.invert = function(t, n) {
                    var r = h(n);
                    return t[0] = -n[0] / r, t[1] = -n[1] / r, t[2] = -n[2] / r, t[3] = n[3] / r, t[4] = -n[4] / r, 
                    t[5] = -n[5] / r, t[6] = -n[6] / r, t[7] = n[7] / r, t;
                }, n.conjugate = function(t, n) {
                    return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = n[3], t[4] = -n[4], t[5] = -n[5], 
                    t[6] = -n[6], t[7] = n[7], t;
                }, n.normalize = function(t, n) {
                    var r = h(n);
                    if (r > 0) {
                        r = Math.sqrt(r);
                        var a = n[0] / r, e = n[1] / r, u = n[2] / r, o = n[3] / r, i = n[4], s = n[5], c = n[6], f = n[7], M = a * i + e * s + u * c + o * f;
                        t[0] = a, t[1] = e, t[2] = u, t[3] = o, t[4] = (i - a * M) / r, t[5] = (s - e * M) / r, 
                        t[6] = (c - u * M) / r, t[7] = (f - o * M) / r;
                    }
                    return t;
                }, n.str = function(t) {
                    return "quat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ")";
                }, n.exactEquals = function(t, n) {
                    return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7];
                }, n.equals = function(t, n) {
                    var r = t[0], a = t[1], e = t[2], u = t[3], o = t[4], s = t[5], c = t[6], f = t[7], M = n[0], h = n[1], l = n[2], v = n[3], d = n[4], b = n[5], m = n[6], p = n[7];
                    return Math.abs(r - M) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(M)) && Math.abs(a - h) <= i.EPSILON * Math.max(1, Math.abs(a), Math.abs(h)) && Math.abs(e - l) <= i.EPSILON * Math.max(1, Math.abs(e), Math.abs(l)) && Math.abs(u - v) <= i.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) && Math.abs(o - d) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) && Math.abs(s - b) <= i.EPSILON * Math.max(1, Math.abs(s), Math.abs(b)) && Math.abs(c - m) <= i.EPSILON * Math.max(1, Math.abs(c), Math.abs(m)) && Math.abs(f - p) <= i.EPSILON * Math.max(1, Math.abs(f), Math.abs(p));
                };
                var i = a(r(0)), s = a(r(3)), c = a(r(4));
                n.getReal = s.copy, n.setReal = s.copy, n.mul = o;
                var f = n.dot = s.dot, M = n.length = s.length, h = (n.len = M, n.squaredLength = s.squaredLength);
                n.sqrLen = h;
            }, function(t, n, r) {
                function a(t, n, r) {
                    var a = n[0], e = n[1], u = n[2], o = n[3], i = n[4], s = n[5], c = r[0], f = r[1], M = r[2], h = r[3], l = r[4], v = r[5];
                    return t[0] = a * c + u * f, t[1] = e * c + o * f, t[2] = a * M + u * h, t[3] = e * M + o * h, 
                    t[4] = a * l + u * v + i, t[5] = e * l + o * v + s, t;
                }
                function e(t, n, r) {
                    return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], 
                    t[4] = n[4] - r[4], t[5] = n[5] - r[5], t;
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.sub = n.mul = void 0, n.create = function() {
                    var t = new u.ARRAY_TYPE(6);
                    return u.ARRAY_TYPE != Float32Array && (t[1] = 0, t[2] = 0, t[4] = 0, t[5] = 0), 
                    t[0] = 1, t[3] = 1, t;
                }, n.clone = function(t) {
                    var n = new u.ARRAY_TYPE(6);
                    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], 
                    n;
                }, n.copy = function(t, n) {
                    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], 
                    t;
                }, n.identity = function(t) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
                }, n.fromValues = function(t, n, r, a, e, o) {
                    var i = new u.ARRAY_TYPE(6);
                    return i[0] = t, i[1] = n, i[2] = r, i[3] = a, i[4] = e, i[5] = o, i;
                }, n.set = function(t, n, r, a, e, u, o) {
                    return t[0] = n, t[1] = r, t[2] = a, t[3] = e, t[4] = u, t[5] = o, t;
                }, n.invert = function(t, n) {
                    var r = n[0], a = n[1], e = n[2], u = n[3], o = n[4], i = n[5], s = r * u - a * e;
                    return s ? (s = 1 / s, t[0] = u * s, t[1] = -a * s, t[2] = -e * s, t[3] = r * s, 
                    t[4] = (e * i - u * o) * s, t[5] = (a * o - r * i) * s, t) : null;
                }, n.determinant = function(t) {
                    return t[0] * t[3] - t[1] * t[2];
                }, n.multiply = a, n.rotate = function(t, n, r) {
                    var a = n[0], e = n[1], u = n[2], o = n[3], i = n[4], s = n[5], c = Math.sin(r), f = Math.cos(r);
                    return t[0] = a * f + u * c, t[1] = e * f + o * c, t[2] = a * -c + u * f, t[3] = e * -c + o * f, 
                    t[4] = i, t[5] = s, t;
                }, n.scale = function(t, n, r) {
                    var a = n[0], e = n[1], u = n[2], o = n[3], i = n[4], s = n[5], c = r[0], f = r[1];
                    return t[0] = a * c, t[1] = e * c, t[2] = u * f, t[3] = o * f, t[4] = i, t[5] = s, 
                    t;
                }, n.translate = function(t, n, r) {
                    var a = n[0], e = n[1], u = n[2], o = n[3], i = n[4], s = n[5], c = r[0], f = r[1];
                    return t[0] = a, t[1] = e, t[2] = u, t[3] = o, t[4] = a * c + u * f + i, t[5] = e * c + o * f + s, 
                    t;
                }, n.fromRotation = function(t, n) {
                    var r = Math.sin(n), a = Math.cos(n);
                    return t[0] = a, t[1] = r, t[2] = -r, t[3] = a, t[4] = 0, t[5] = 0, t;
                }, n.fromScaling = function(t, n) {
                    return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t[4] = 0, t[5] = 0, t;
                }, n.fromTranslation = function(t, n) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = n[0], t[5] = n[1], t;
                }, n.str = function(t) {
                    return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")";
                }, n.frob = function(t) {
                    return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1);
                }, n.add = function(t, n, r) {
                    return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], 
                    t[4] = n[4] + r[4], t[5] = n[5] + r[5], t;
                }, n.subtract = e, n.multiplyScalar = function(t, n, r) {
                    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t[4] = n[4] * r, 
                    t[5] = n[5] * r, t;
                }, n.multiplyScalarAndAdd = function(t, n, r, a) {
                    return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t[2] = n[2] + r[2] * a, t[3] = n[3] + r[3] * a, 
                    t[4] = n[4] + r[4] * a, t[5] = n[5] + r[5] * a, t;
                }, n.exactEquals = function(t, n) {
                    return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5];
                }, n.equals = function(t, n) {
                    var r = t[0], a = t[1], e = t[2], o = t[3], i = t[4], s = t[5], c = n[0], f = n[1], M = n[2], h = n[3], l = n[4], v = n[5];
                    return Math.abs(r - c) <= u.EPSILON * Math.max(1, Math.abs(r), Math.abs(c)) && Math.abs(a - f) <= u.EPSILON * Math.max(1, Math.abs(a), Math.abs(f)) && Math.abs(e - M) <= u.EPSILON * Math.max(1, Math.abs(e), Math.abs(M)) && Math.abs(o - h) <= u.EPSILON * Math.max(1, Math.abs(o), Math.abs(h)) && Math.abs(i - l) <= u.EPSILON * Math.max(1, Math.abs(i), Math.abs(l)) && Math.abs(s - v) <= u.EPSILON * Math.max(1, Math.abs(s), Math.abs(v));
                };
                var u = function(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n.default = t, n;
                }(r(0));
                n.mul = a, n.sub = e;
            }, function(t, n, r) {
                function a(t, n, r) {
                    var a = n[0], e = n[1], u = n[2], o = n[3], i = r[0], s = r[1], c = r[2], f = r[3];
                    return t[0] = a * i + u * s, t[1] = e * i + o * s, t[2] = a * c + u * f, t[3] = e * c + o * f, 
                    t;
                }
                function e(t, n, r) {
                    return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], 
                    t;
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.sub = n.mul = void 0, n.create = function() {
                    var t = new u.ARRAY_TYPE(4);
                    return u.ARRAY_TYPE != Float32Array && (t[1] = 0, t[2] = 0), t[0] = 1, t[3] = 1, 
                    t;
                }, n.clone = function(t) {
                    var n = new u.ARRAY_TYPE(4);
                    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n;
                }, n.copy = function(t, n) {
                    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t;
                }, n.identity = function(t) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
                }, n.fromValues = function(t, n, r, a) {
                    var e = new u.ARRAY_TYPE(4);
                    return e[0] = t, e[1] = n, e[2] = r, e[3] = a, e;
                }, n.set = function(t, n, r, a, e) {
                    return t[0] = n, t[1] = r, t[2] = a, t[3] = e, t;
                }, n.transpose = function(t, n) {
                    if (t === n) {
                        var r = n[1];
                        t[1] = n[2], t[2] = r;
                    } else t[0] = n[0], t[1] = n[2], t[2] = n[1], t[3] = n[3];
                    return t;
                }, n.invert = function(t, n) {
                    var r = n[0], a = n[1], e = n[2], u = n[3], o = r * u - e * a;
                    return o ? (o = 1 / o, t[0] = u * o, t[1] = -a * o, t[2] = -e * o, t[3] = r * o, 
                    t) : null;
                }, n.adjoint = function(t, n) {
                    var r = n[0];
                    return t[0] = n[3], t[1] = -n[1], t[2] = -n[2], t[3] = r, t;
                }, n.determinant = function(t) {
                    return t[0] * t[3] - t[2] * t[1];
                }, n.multiply = a, n.rotate = function(t, n, r) {
                    var a = n[0], e = n[1], u = n[2], o = n[3], i = Math.sin(r), s = Math.cos(r);
                    return t[0] = a * s + u * i, t[1] = e * s + o * i, t[2] = a * -i + u * s, t[3] = e * -i + o * s, 
                    t;
                }, n.scale = function(t, n, r) {
                    var a = n[0], e = n[1], u = n[2], o = n[3], i = r[0], s = r[1];
                    return t[0] = a * i, t[1] = e * i, t[2] = u * s, t[3] = o * s, t;
                }, n.fromRotation = function(t, n) {
                    var r = Math.sin(n), a = Math.cos(n);
                    return t[0] = a, t[1] = r, t[2] = -r, t[3] = a, t;
                }, n.fromScaling = function(t, n) {
                    return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t;
                }, n.str = function(t) {
                    return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
                }, n.frob = function(t) {
                    return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2));
                }, n.LDU = function(t, n, r, a) {
                    return t[2] = a[2] / a[0], r[0] = a[0], r[1] = a[1], r[3] = a[3] - t[2] * r[1], 
                    [ t, n, r ];
                }, n.add = function(t, n, r) {
                    return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], 
                    t;
                }, n.subtract = e, n.exactEquals = function(t, n) {
                    return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3];
                }, n.equals = function(t, n) {
                    var r = t[0], a = t[1], e = t[2], o = t[3], i = n[0], s = n[1], c = n[2], f = n[3];
                    return Math.abs(r - i) <= u.EPSILON * Math.max(1, Math.abs(r), Math.abs(i)) && Math.abs(a - s) <= u.EPSILON * Math.max(1, Math.abs(a), Math.abs(s)) && Math.abs(e - c) <= u.EPSILON * Math.max(1, Math.abs(e), Math.abs(c)) && Math.abs(o - f) <= u.EPSILON * Math.max(1, Math.abs(o), Math.abs(f));
                }, n.multiplyScalar = function(t, n, r) {
                    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t;
                }, n.multiplyScalarAndAdd = function(t, n, r, a) {
                    return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t[2] = n[2] + r[2] * a, t[3] = n[3] + r[3] * a, 
                    t;
                };
                var u = function(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n.default = t, n;
                }(r(0));
                n.mul = a, n.sub = e;
            }, function(t, n, r) {
                function a(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n.default = t, n;
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.vec4 = n.vec3 = n.vec2 = n.quat2 = n.quat = n.mat4 = n.mat3 = n.mat2d = n.mat2 = n.glMatrix = void 0;
                var e = a(r(0)), u = a(r(9)), o = a(r(8)), i = a(r(5)), s = a(r(4)), c = a(r(3)), f = a(r(7)), M = a(r(6)), h = a(r(2)), l = a(r(1));
                n.glMatrix = e, n.mat2 = u, n.mat2d = o, n.mat3 = i, n.mat4 = s, n.quat = c, n.quat2 = f, 
                n.vec2 = M, n.vec3 = h, n.vec4 = l;
            } ]);
        });
    }, function(t) {
        return r({}[t], t);
    }), r(1585748419421);
}();