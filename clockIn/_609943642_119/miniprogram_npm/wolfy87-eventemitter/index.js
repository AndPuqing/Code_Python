var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function() {
    var t = {}, n = function(n, r) {
        if (!t[n]) return require(r);
        if (!t[n].status) {
            var i = t[n].m;
            i._exports = i._tempexports;
            var s = Object.getOwnPropertyDescriptor(i, "exports");
            s && s.configurable && Object.defineProperty(i, "exports", {
                set: function(t) {
                    "object" === (void 0 === t ? "undefined" : e(t)) && t !== i._exports && (i._exports.__proto__ = t.__proto__, 
                    Object.keys(t).forEach(function(e) {
                        i._exports[e] = t[e];
                    })), i._tempexports = t;
                },
                get: function() {
                    return i._tempexports;
                }
            }), t[n].status = 1, t[n].func(t[n].req, i, i.exports);
        }
        return t[n].m.exports;
    };
    return function(e, n, r) {
        var i = {
            exports: {},
            _tempexports: {}
        };
        t[e] = {
            status: 0,
            func: n,
            req: r,
            m: i
        };
    }(1585748419435, function(t, n, r) {
        !function(t) {
            function r() {}
            function i(e, t) {
                for (var n = e.length; n--; ) if (e[n].listener === t) return n;
                return -1;
            }
            function s(e) {
                return function() {
                    return this[e].apply(this, arguments);
                };
            }
            function o(t) {
                return "function" == typeof t || t instanceof RegExp || !(!t || "object" !== (void 0 === t ? "undefined" : e(t))) && o(t.listener);
            }
            var u = r.prototype, f = t.EventEmitter;
            u.getListeners = function(e) {
                var t, n, r = this._getEvents();
                if (e instanceof RegExp) {
                    t = {};
                    for (n in r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n]);
                } else t = r[e] || (r[e] = []);
                return t;
            }, u.flattenListeners = function(e) {
                var t, n = [];
                for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
                return n;
            }, u.getListenersAsObject = function(e) {
                var t, n = this.getListeners(e);
                return n instanceof Array && ((t = {})[e] = n), t || n;
            }, u.addListener = function(t, n) {
                if (!o(n)) throw new TypeError("listener must be a function");
                var r, s = this.getListenersAsObject(t), u = "object" === (void 0 === n ? "undefined" : e(n));
                for (r in s) s.hasOwnProperty(r) && -1 === i(s[r], n) && s[r].push(u ? n : {
                    listener: n,
                    once: !1
                });
                return this;
            }, u.on = s("addListener"), u.addOnceListener = function(e, t) {
                return this.addListener(e, {
                    listener: t,
                    once: !0
                });
            }, u.once = s("addOnceListener"), u.defineEvent = function(e) {
                return this.getListeners(e), this;
            }, u.defineEvents = function(e) {
                for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
                return this;
            }, u.removeListener = function(e, t) {
                var n, r, s = this.getListenersAsObject(e);
                for (r in s) s.hasOwnProperty(r) && -1 !== (n = i(s[r], t)) && s[r].splice(n, 1);
                return this;
            }, u.off = s("removeListener"), u.addListeners = function(e, t) {
                return this.manipulateListeners(!1, e, t);
            }, u.removeListeners = function(e, t) {
                return this.manipulateListeners(!0, e, t);
            }, u.manipulateListeners = function(t, n, r) {
                var i, s, o = t ? this.removeListener : this.addListener, u = t ? this.removeListeners : this.addListeners;
                if ("object" !== (void 0 === n ? "undefined" : e(n)) || n instanceof RegExp) for (i = r.length; i--; ) o.call(this, n, r[i]); else for (i in n) n.hasOwnProperty(i) && (s = n[i]) && ("function" == typeof s ? o.call(this, i, s) : u.call(this, i, s));
                return this;
            }, u.removeEvent = function(t) {
                var n, r = void 0 === t ? "undefined" : e(t), i = this._getEvents();
                if ("string" === r) delete i[t]; else if (t instanceof RegExp) for (n in i) i.hasOwnProperty(n) && t.test(n) && delete i[n]; else delete this._events;
                return this;
            }, u.removeAllListeners = s("removeEvent"), u.emitEvent = function(e, t) {
                var n, r, i, s, o = this.getListenersAsObject(e);
                for (s in o) if (o.hasOwnProperty(s)) for (n = o[s].slice(0), i = 0; i < n.length; i++) !0 === (r = n[i]).once && this.removeListener(e, r.listener), 
                r.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, r.listener);
                return this;
            }, u.trigger = s("emitEvent"), u.emit = function(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(e, t);
            }, u.setOnceReturnValue = function(e) {
                return this._onceReturnValue = e, this;
            }, u._getOnceReturnValue = function() {
                return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
            }, u._getEvents = function() {
                return this._events || (this._events = {});
            }, r.noConflict = function() {
                return t.EventEmitter = f, r;
            }, "function" == typeof define && define.amd ? define(function() {
                return r;
            }) : "object" === (void 0 === n ? "undefined" : e(n)) && n.exports ? n.exports = r : t.EventEmitter = r;
        }("undefined" != typeof window ? window : this || {});
    }, function(e) {
        return n({}[e], e);
    }), n(1585748419435);
}();