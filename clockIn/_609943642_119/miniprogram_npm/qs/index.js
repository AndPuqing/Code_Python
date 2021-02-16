var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function() {
    var t = {}, r = function(e, r, n) {
        var o = {
            exports: {},
            _tempexports: {}
        };
        t[e] = {
            status: 0,
            func: r,
            req: n,
            m: o
        };
    }, n = function(r, n) {
        if (!t[r]) return require(n);
        if (!t[r].status) {
            var o = t[r].m;
            o._exports = o._tempexports;
            var i = Object.getOwnPropertyDescriptor(o, "exports");
            i && i.configurable && Object.defineProperty(o, "exports", {
                set: function(t) {
                    "object" === (void 0 === t ? "undefined" : e(t)) && t !== o._exports && (o._exports.__proto__ = t.__proto__, 
                    Object.keys(t).forEach(function(e) {
                        o._exports[e] = t[e];
                    })), o._tempexports = t;
                },
                get: function() {
                    return o._tempexports;
                }
            }), t[r].status = 1, t[r].func(t[r].req, o, o.exports);
        }
        return t[r].m.exports;
    };
    return r(1585748419428, function(e, t, r) {
        var n = e("./stringify"), o = e("./parse"), i = e("./formats");
        t.exports = {
            formats: i,
            parse: o,
            stringify: n
        };
    }, function(e) {
        return n({
            "./stringify": 1585748419429,
            "./parse": 1585748419432,
            "./formats": 1585748419431
        }[e], e);
    }), r(1585748419429, function(t, r, n) {
        var o = t("./utils"), i = t("./formats"), a = Object.prototype.hasOwnProperty, c = {
            brackets: function(e) {
                return e + "[]";
            },
            comma: "comma",
            indices: function(e, t) {
                return e + "[" + t + "]";
            },
            repeat: function(e) {
                return e;
            }
        }, l = Array.isArray, s = Array.prototype.push, u = function(e, t) {
            s.apply(e, l(t) ? t : [ t ]);
        }, f = Date.prototype.toISOString, p = i.default, d = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: o.encode,
            encodeValuesOnly: !1,
            format: p,
            formatter: i.formatters[p],
            indices: !1,
            serializeDate: function(e) {
                return f.call(e);
            },
            skipNulls: !1,
            strictNullHandling: !1
        }, y = function(t) {
            return "string" == typeof t || "number" == typeof t || "boolean" == typeof t || "symbol" === (void 0 === t ? "undefined" : e(t)) || "bigint" == typeof t;
        }, m = function e(t, r, n, i, a, c, s, f, p, m, h, b, v) {
            var g = t;
            if ("function" == typeof s ? g = s(r, g) : g instanceof Date ? g = m(g) : "comma" === n && l(g) && (g = g.join(",")), 
            null === g) {
                if (i) return c && !b ? c(r, d.encoder, v, "key") : r;
                g = "";
            }
            if (y(g) || o.isBuffer(g)) return c ? [ h(b ? r : c(r, d.encoder, v, "key")) + "=" + h(c(g, d.encoder, v, "value")) ] : [ h(r) + "=" + h(String(g)) ];
            var j = [];
            if (void 0 === g) return j;
            var O;
            if (l(s)) O = s; else {
                var x = Object.keys(g);
                O = f ? x.sort(f) : x;
            }
            for (var w = 0; w < O.length; ++w) {
                var S = O[w];
                a && null === g[S] || (l(g) ? u(j, e(g[S], "function" == typeof n ? n(r, S) : r, n, i, a, c, s, f, p, m, h, b, v)) : u(j, e(g[S], r + (p ? "." + S : "[" + S + "]"), n, i, a, c, s, f, p, m, h, b, v)));
            }
            return j;
        }, h = function(e) {
            if (!e) return d;
            if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw new TypeError("Encoder has to be a function.");
            var t = e.charset || d.charset;
            if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var r = i.default;
            if (void 0 !== e.format) {
                if (!a.call(i.formatters, e.format)) throw new TypeError("Unknown format option provided.");
                r = e.format;
            }
            var n = i.formatters[r], o = d.filter;
            return ("function" == typeof e.filter || l(e.filter)) && (o = e.filter), {
                addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : d.addQueryPrefix,
                allowDots: void 0 === e.allowDots ? d.allowDots : !!e.allowDots,
                charset: t,
                charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : d.charsetSentinel,
                delimiter: void 0 === e.delimiter ? d.delimiter : e.delimiter,
                encode: "boolean" == typeof e.encode ? e.encode : d.encode,
                encoder: "function" == typeof e.encoder ? e.encoder : d.encoder,
                encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : d.encodeValuesOnly,
                filter: o,
                formatter: n,
                serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : d.serializeDate,
                skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : d.skipNulls,
                sort: "function" == typeof e.sort ? e.sort : null,
                strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : d.strictNullHandling
            };
        };
        r.exports = function(t, r) {
            var n, o = t, i = h(r);
            "function" == typeof i.filter ? o = (0, i.filter)("", o) : l(i.filter) && (n = i.filter);
            var a = [];
            if ("object" !== (void 0 === o ? "undefined" : e(o)) || null === o) return "";
            var s;
            s = r && r.arrayFormat in c ? r.arrayFormat : r && "indices" in r ? r.indices ? "indices" : "repeat" : "indices";
            var f = c[s];
            n || (n = Object.keys(o)), i.sort && n.sort(i.sort);
            for (var p = 0; p < n.length; ++p) {
                var d = n[p];
                i.skipNulls && null === o[d] || u(a, m(o[d], d, f, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.formatter, i.encodeValuesOnly, i.charset));
            }
            var y = a.join(i.delimiter), b = !0 === i.addQueryPrefix ? "?" : "";
            return i.charsetSentinel && ("iso-8859-1" === i.charset ? b += "utf8=%26%2310003%3B&" : b += "utf8=%E2%9C%93&"), 
            y.length > 0 ? b + y : "";
        };
    }, function(e) {
        return n({
            "./utils": 1585748419430,
            "./formats": 1585748419431
        }[e], e);
    }), r(1585748419430, function(t, r, n) {
        var o = Object.prototype.hasOwnProperty, i = Array.isArray, a = function() {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e;
        }(), c = function(e) {
            for (;e.length > 1; ) {
                var t = e.pop(), r = t.obj[t.prop];
                if (i(r)) {
                    for (var n = [], o = 0; o < r.length; ++o) void 0 !== r[o] && n.push(r[o]);
                    t.obj[t.prop] = n;
                }
            }
        }, l = function(e, t) {
            for (var r = t && t.plainObjects ? Object.create(null) : {}, n = 0; n < e.length; ++n) void 0 !== e[n] && (r[n] = e[n]);
            return r;
        };
        r.exports = {
            arrayToObject: l,
            assign: function(e, t) {
                return Object.keys(t).reduce(function(e, r) {
                    return e[r] = t[r], e;
                }, e);
            },
            combine: function(e, t) {
                return [].concat(e, t);
            },
            compact: function(t) {
                for (var r = [ {
                    obj: {
                        o: t
                    },
                    prop: "o"
                } ], n = [], o = 0; o < r.length; ++o) for (var i = r[o], a = i.obj[i.prop], l = Object.keys(a), s = 0; s < l.length; ++s) {
                    var u = l[s], f = a[u];
                    "object" === (void 0 === f ? "undefined" : e(f)) && null !== f && -1 === n.indexOf(f) && (r.push({
                        obj: a,
                        prop: u
                    }), n.push(f));
                }
                return c(r), t;
            },
            decode: function(e, t, r) {
                var n = e.replace(/\+/g, " ");
                if ("iso-8859-1" === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);
                try {
                    return decodeURIComponent(n);
                } catch (e) {
                    return n;
                }
            },
            encode: function(t, r, n) {
                if (0 === t.length) return t;
                var o = t;
                if ("symbol" === (void 0 === t ? "undefined" : e(t)) ? o = Symbol.prototype.toString.call(t) : "string" != typeof t && (o = String(t)), 
                "iso-8859-1" === n) return escape(o).replace(/%u[0-9a-f]{4}/gi, function(e) {
                    return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
                });
                for (var i = "", c = 0; c < o.length; ++c) {
                    var l = o.charCodeAt(c);
                    45 === l || 46 === l || 95 === l || 126 === l || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 ? i += o.charAt(c) : l < 128 ? i += a[l] : l < 2048 ? i += a[192 | l >> 6] + a[128 | 63 & l] : l < 55296 || l >= 57344 ? i += a[224 | l >> 12] + a[128 | l >> 6 & 63] + a[128 | 63 & l] : (c += 1, 
                    l = 65536 + ((1023 & l) << 10 | 1023 & o.charCodeAt(c)), i += a[240 | l >> 18] + a[128 | l >> 12 & 63] + a[128 | l >> 6 & 63] + a[128 | 63 & l]);
                }
                return i;
            },
            isBuffer: function(t) {
                return !(!t || "object" !== (void 0 === t ? "undefined" : e(t)) || !(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t)));
            },
            isRegExp: function(e) {
                return "[object RegExp]" === Object.prototype.toString.call(e);
            },
            merge: function t(r, n, a) {
                if (!n) return r;
                if ("object" !== (void 0 === n ? "undefined" : e(n))) {
                    if (i(r)) r.push(n); else {
                        if (!r || "object" !== (void 0 === r ? "undefined" : e(r))) return [ r, n ];
                        (a && (a.plainObjects || a.allowPrototypes) || !o.call(Object.prototype, n)) && (r[n] = !0);
                    }
                    return r;
                }
                if (!r || "object" !== (void 0 === r ? "undefined" : e(r))) return [ r ].concat(n);
                var c = r;
                return i(r) && !i(n) && (c = l(r, a)), i(r) && i(n) ? (n.forEach(function(n, i) {
                    if (o.call(r, i)) {
                        var c = r[i];
                        c && "object" === (void 0 === c ? "undefined" : e(c)) && n && "object" === (void 0 === n ? "undefined" : e(n)) ? r[i] = t(c, n, a) : r.push(n);
                    } else r[i] = n;
                }), r) : Object.keys(n).reduce(function(e, r) {
                    var i = n[r];
                    return o.call(e, r) ? e[r] = t(e[r], i, a) : e[r] = i, e;
                }, c);
            }
        };
    }, function(e) {
        return n({}[e], e);
    }), r(1585748419431, function(e, t, r) {
        var n = String.prototype.replace, o = /%20/g, i = e("./utils"), a = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        };
        t.exports = i.assign({
            default: a.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return n.call(e, o, "+");
                },
                RFC3986: function(e) {
                    return String(e);
                }
            }
        }, a);
    }, function(e) {
        return n({
            "./utils": 1585748419430
        }[e], e);
    }), r(1585748419432, function(e, t, r) {
        var n = e("./utils"), o = Object.prototype.hasOwnProperty, i = Array.isArray, a = {
            allowDots: !1,
            allowPrototypes: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decoder: n.decode,
            delimiter: "&",
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1
        }, c = function(e) {
            return e.replace(/&#(\d+);/g, function(e, t) {
                return String.fromCharCode(parseInt(t, 10));
            });
        }, l = function(e, t) {
            return e && "string" == typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
        }, s = function(e, t) {
            if (i(e)) {
                for (var r = [], n = 0; n < e.length; n += 1) r.push(t(e[n]));
                return r;
            }
            return t(e);
        }, u = function(e, t) {
            var r, u = {}, f = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, p = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, d = f.split(t.delimiter, p), y = -1, m = t.charset;
            if (t.charsetSentinel) for (r = 0; r < d.length; ++r) 0 === d[r].indexOf("utf8=") && ("utf8=%E2%9C%93" === d[r] ? m = "utf-8" : "utf8=%26%2310003%3B" === d[r] && (m = "iso-8859-1"), 
            y = r, r = d.length);
            for (r = 0; r < d.length; ++r) if (r !== y) {
                var h, b, v = d[r], g = v.indexOf("]="), j = -1 === g ? v.indexOf("=") : g + 1;
                -1 === j ? (h = t.decoder(v, a.decoder, m, "key"), b = t.strictNullHandling ? null : "") : (h = t.decoder(v.slice(0, j), a.decoder, m, "key"), 
                b = s(l(v.slice(j + 1), t), function(e) {
                    return t.decoder(e, a.decoder, m, "value");
                })), b && t.interpretNumericEntities && "iso-8859-1" === m && (b = c(b)), v.indexOf("[]=") > -1 && (b = i(b) ? [ b ] : b), 
                o.call(u, h) ? u[h] = n.combine(u[h], b) : u[h] = b;
            }
            return u;
        }, f = function(e, t, r, n) {
            for (var o = n ? t : l(t, r), i = e.length - 1; i >= 0; --i) {
                var a, c = e[i];
                if ("[]" === c && r.parseArrays) a = [].concat(o); else {
                    a = r.plainObjects ? Object.create(null) : {};
                    var s = "[" === c.charAt(0) && "]" === c.charAt(c.length - 1) ? c.slice(1, -1) : c, u = parseInt(s, 10);
                    r.parseArrays || "" !== s ? !isNaN(u) && c !== s && String(u) === s && u >= 0 && r.parseArrays && u <= r.arrayLimit ? (a = [])[u] = o : a[s] = o : a = {
                        0: o
                    };
                }
                o = a;
            }
            return o;
        }, p = function(e, t, r, n) {
            if (e) {
                var i = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, a = /(\[[^[\]]*])/, c = /(\[[^[\]]*])/g, l = r.depth > 0 && a.exec(i), s = l ? i.slice(0, l.index) : i, u = [];
                if (s) {
                    if (!r.plainObjects && o.call(Object.prototype, s) && !r.allowPrototypes) return;
                    u.push(s);
                }
                for (var p = 0; r.depth > 0 && null !== (l = c.exec(i)) && p < r.depth; ) {
                    if (p += 1, !r.plainObjects && o.call(Object.prototype, l[1].slice(1, -1)) && !r.allowPrototypes) return;
                    u.push(l[1]);
                }
                return l && u.push("[" + i.slice(l.index) + "]"), f(u, t, r, n);
            }
        }, d = function(e) {
            if (!e) return a;
            if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder) throw new TypeError("Decoder has to be a function.");
            if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var t = void 0 === e.charset ? a.charset : e.charset;
            return {
                allowDots: void 0 === e.allowDots ? a.allowDots : !!e.allowDots,
                allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : a.allowPrototypes,
                arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : a.arrayLimit,
                charset: t,
                charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : a.charsetSentinel,
                comma: "boolean" == typeof e.comma ? e.comma : a.comma,
                decoder: "function" == typeof e.decoder ? e.decoder : a.decoder,
                delimiter: "string" == typeof e.delimiter || n.isRegExp(e.delimiter) ? e.delimiter : a.delimiter,
                depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : a.depth,
                ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : a.interpretNumericEntities,
                parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : a.parameterLimit,
                parseArrays: !1 !== e.parseArrays,
                plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : a.plainObjects,
                strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : a.strictNullHandling
            };
        };
        t.exports = function(e, t) {
            var r = d(t);
            if ("" === e || null === e || void 0 === e) return r.plainObjects ? Object.create(null) : {};
            for (var o = "string" == typeof e ? u(e, r) : e, i = r.plainObjects ? Object.create(null) : {}, a = Object.keys(o), c = 0; c < a.length; ++c) {
                var l = a[c], s = p(l, o[l], r, "string" == typeof e);
                i = n.merge(i, s, r);
            }
            return n.compact(i);
        };
    }, function(e) {
        return n({
            "./utils": 1585748419430
        }[e], e);
    }), n(1585748419428);
}();