function t(t, s) {
    if (!(t instanceof s)) throw new TypeError("Cannot call a class as a function");
}

var s = function() {
    function t(t, s) {
        for (var i = 0; i < s.length; i++) {
            var e = s[i];
            e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), 
            Object.defineProperty(t, e.key, e);
        }
    }
    return function(s, i, e) {
        return i && t(s.prototype, i), e && t(s, e), s;
    };
}(), i = require("./config.js"), e = function() {
    function i() {
        var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t(this, i), this.styles = Object.assign({}, s);
    }
    return s(i, [ {
        key: "getStyle",
        value: function(t) {
            var s = "";
            return t = t.replace(/<[sS][tT][yY][lL][eE][\s\S]*?>([\s\S]*?)<\/[sS][tT][yY][lL][eE][\s\S]*?>/g, function(t, i) {
                return s += i, "";
            }), this.styles = new h(s, this.styles).parse(), t;
        }
    }, {
        key: "match",
        value: function(t, s) {
            var i, e = (i = this.styles[t]) ? i + ";" : "";
            if (s.class) for (var h = s.class.split(" "), a = 0; a < h.length; a++) (i = this.styles["." + h[a]]) && (e += i + ";");
            return (i = this.styles["#" + s.id]) && (e += i + ";"), e;
        }
    } ]), i;
}();

module.exports = e;

var h = function() {
    function e(s, h) {
        t(this, e), this.data = s, this.res = h;
        for (var a in i.userAgentStyles) h[a] ? h[a] = i.userAgentStyles[a] + ";" + h[a] : h[a] = i.userAgentStyles[a];
        this._comma = !1, this._floor = 0, this._i = 0, this._list = [], this._start = 0, 
        this._state = this.Space;
    }
    return s(e, [ {
        key: "parse",
        value: function() {
            for (var t = this.data.length; this._i < t; this._i++) this._state(this.data[this._i]);
            return this.res;
        }
    }, {
        key: "Space",
        value: function(t) {
            "." == t || "#" == t || t >= "a" && t <= "z" || t >= "A" && t <= "Z" ? (this._start = this._i, 
            this._state = this.StyleName) : "/" == t && "*" == this.data[this._i + 1] ? this.Comment() : i.blankChar[t] || ";" == t || (this._state = this.Ignore);
        }
    }, {
        key: "Comment",
        value: function() {
            this._i = this.data.indexOf("*/", this._i) + 1, this._i || (this._i = this.data.length), 
            this._state = this.Space;
        }
    }, {
        key: "Ignore",
        value: function(t) {
            "{" == t ? this._floor++ : "}" != t || --this._floor || (this._list = [], this._state = this.Space);
        }
    }, {
        key: "StyleName",
        value: function(t) {
            i.blankChar[t] ? (this._start != this._i && this._list.push(this.data.substring(this._start, this._i)), 
            this._state = this.NameSpace) : "{" == t ? (this._list.push(this.data.substring(this._start, this._i)), 
            this._start = this._i + 1, this.Content()) : "," == t ? (this._list.push(this.data.substring(this._start, this._i)), 
            this._start = this._i + 1, this._comma = !0) : (t < "a" || t > "z") && (t < "A" || t > "Z") && (t < "0" || t > "9") && "." != t && "#" != t && "-" != t && "_" != t && (this._state = this.Ignore);
        }
    }, {
        key: "NameSpace",
        value: function(t) {
            "{" == t ? (this._start = this._i + 1, this.Content()) : "," == t ? (this._comma = !0, 
            this._start = this._i + 1, this._state = this.StyleName) : i.blankChar[t] || (this._comma ? (this._state = this.StyleName, 
            this._start = this._i--, this._comma = !1) : this._state = this.Ignore);
        }
    }, {
        key: "Content",
        value: function() {
            this._i = this.data.indexOf("}", this._i), -1 == this._i && (this._i = this.data.length);
            for (var t, s = this.data.substring(this._start, this._i), i = this._list.length; t = this._list[--i]; ) this.res[t] ? this.res[t] += ";" + s : this.res[t] = s;
            this._list = [], this._state = this.Space;
        }
    } ]), e;
}();