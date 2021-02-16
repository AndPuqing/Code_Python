function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function e(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t;
}

var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, s = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var s = e[n];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
            Object.defineProperty(t, s.key, s);
        }
    }
    return function(e, n, s) {
        return n && t(e.prototype, n), s && t(e, s), e;
    };
}(), i = function(t, n, s) {
    t._refresh = !0, t.setData(e({}, n, s));
}, r = function t(e, n, s, i) {
    if (!e || !e.length) return null;
    for (var r = e.length; r--; ) if ("text" != e[r].type) {
        if (s += "[" + r + "]", e[r].attrs && e[r].attrs.id == n) return new o(e[r], s, i);
        s += ".children";
        var h = t(e[r].children, n, s, i);
        if (null != h) return h;
        s = (s = s.substring(0, s.length - 9)).substring(0, s.length - ("[" + r + "]").length);
    }
    return null;
}, o = function() {
    function e(n, s, i) {
        t(this, e), this.id = "text" == n.type ? "" : n.attrs.id, this.nodes = n, this.styles = {};
        for (var r = (n.attrs.style || "").split(";"), o = r.length; o--; ) if (r[o].includes(":")) {
            var h = r[o].split(":");
            this.styles[h[0]] = h[1];
        }
        this._site = s, this._Component = i, this.nodes.attrs = this.nodes.attrs || {}, 
        this.nodes.children = this.nodes.children || [], "text" == n.children[0].type && (this._text = !0);
    }
    return s(e, [ {
        key: "setText",
        value: function(t) {
            return !(!this._text || "string" != typeof t) && (this.nodes.children[0].text = t, 
            i(this._Component, this._site, this.nodes), !0);
        }
    }, {
        key: "getText",
        value: function() {
            return this._text ? this.nodes.children[0].text : null;
        }
    }, {
        key: "addChildren",
        value: function(t, e) {
            return "object" == (void 0 === t ? "undefined" : n(t)) && e >= 0 && e <= this.nodes.children.length && (this.nodes.children.splice(e, 0, t), 
            i(this._Component, this._site, this.nodes), !0);
        }
    }, {
        key: "removeChildren",
        value: function(t) {
            return t >= 0 && t < this.nodes.children.length && (this.nodes.children.splice(t, 1), 
            i(this._Component, this._site, this.nodes), !0);
        }
    }, {
        key: "getChildren",
        value: function(t) {
            return t >= 0 && t < this.nodes.children.length ? new e(this.nodes.childrens[t], this._site + ".children[" + t + "]", this._Component) : null;
        }
    }, {
        key: "getAttr",
        value: function(t) {
            return this.nodes.attrs.hasOwnProperty(t) ? this.nodes.attrs[t] : null;
        }
    }, {
        key: "setAttr",
        value: function(t, e) {
            return this.nodes.attrs[t] = e, i(this._Component, this._site, this.nodes), !0;
        }
    }, {
        key: "getStyle",
        value: function(t) {
            return t = t.replace(/(A-Z)/g, "-$1").toLowerCase(), this.styles.hasOwnProperty(t) ? this.styles[t] : null;
        }
    }, {
        key: "setStyle",
        value: function(t, e) {
            if ("string" == typeof t) {
                if (t = t.replace(/(A-Z)/g, "-$1").toLowerCase(), this.styles.hasOwnProperty(t)) {
                    this.styles[t] = e;
                    var n = "";
                    for (var s in this.styles) n += s + ":" + this.styles[s] + ";";
                    this.nodes.attrs.style = n;
                } else this.nodes.attrs.style = (this.nodes.attrs.style || "") + ";" + t + ":" + e;
                i(this._Component, this._site, this.nodes);
            }
            return !1;
        }
    }, {
        key: "removeAttr",
        value: function(t) {
            return this.nodes.attrs[t] = void 0, i(this._Component, this._site, this.nodes), 
            !0;
        }
    }, {
        key: "getElementById",
        value: function(t) {
            return r(this.nodes, t, this._site, this._Component);
        }
    }, {
        key: "update",
        value: function() {
            return i(this._Component, this._site, this.nodes), !0;
        }
    } ]), e;
}(), h = function() {
    function e(n, s, i) {
        t(this, e), this._root = n, this.nodes = s, this._Component = i;
    }
    return s(e, [ {
        key: "getElementById",
        value: function(t) {
            return r(this.nodes, t, this._root, this._Component);
        }
    }, {
        key: "getChildren",
        value: function(t) {
            return t >= 0 && t < (this.nodes.children || []).length ? new o(this.nodes.childrens[t], this._root + ".children[" + t + "]", this._Component) : null;
        }
    } ]), e;
}();

module.exports = h;