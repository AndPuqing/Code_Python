function t(t, i) {
    if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function");
}

var i, s = function() {
    function t(t, i) {
        for (var s = 0; s < i.length; s++) {
            var e = i[s];
            e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), 
            Object.defineProperty(t, e.key, e);
        }
    }
    return function(i, s, e) {
        return s && t(i.prototype, s), e && t(i, e), i;
    };
}(), e = require("./config.js"), a = e.blankChar, h = require("./CssHandler.js");

try {
    i = require("./emoji.js");
} catch (t) {}

var r = function() {
    function r(i) {
        var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        t(this, r), this.CssHandler = new h(s.tagStyle), this.data = i, this.DOM = [], this._attrName = "", 
        this._attrValue = "", this._attrs = {}, this._domain = s.domain, this._i = 0, this._protocol = this._domain && this._domain.includes("://") ? this._domain.split("://")[0] : "http", 
        this._start = 0, this._state = this.Text, this._STACK = [], this._tagName = "", 
        this._audioNum = 0, this._imgNum = 0, this._videoNum = 0, this._useAnchor = s.useAnchor, 
        this._pre = !1;
    }
    return s(r, [ {
        key: "parse",
        value: function() {
            i && (this.data = i.parseEmoji(this.data)), e.highlight && (this.data = this.data.replace(/<[pP][rR][eE]([\s\S]*?)>([\s\S]+?)<\/[pP][rR][eE][\s\S]*?>/g, function(t, i, s) {
                return "<pre" + i + ">" + e.highlight(s, i) + "</pre>";
            })), this.data = this.CssHandler.getStyle(this.data);
            for (var t = this.data.length; this._i < t; this._i++) this._state(this.data[this._i]);
            for (this._state == this.Text && this.setText(); this._STACK.length; ) this.popNode(this._STACK.pop());
            return this.DOM.length && (this.DOM[0].PoweredBy = "Parser"), this.DOM;
        }
    }, {
        key: "setAttr",
        value: function() {
            for (e.trustAttrs[this._attrName] && ("src" == this._attrName && "/" == this._attrValue[0] && ("/" == this._attrValue[1] ? this._attrValue = this._protocol + ":" + this._attrValue : this._domain && (this._attrValue = this._domain + this._attrValue)), 
            this._attrs[this._attrName] = this._attrValue ? this._attrValue : "src" == this._attrName || "alt" == this._attrName ? "" : "T"), 
            this._attrValue = ""; a[this.data[this._i]]; ) this._i++;
            this.checkClose() ? this.setNode() : this._state = this.AttrName;
        }
    }, {
        key: "setText",
        value: function() {
            var t = this.getSelection();
            if (t) {
                if (!this._pre) {
                    for (var i, s = [], e = t.length, h = !1; i = t[--e]; ) (!a[i] && (h = !0) || !a[s[0]] && (i = " ")) && s.unshift(i);
                    if (!h) return;
                    t = s.join("");
                }
                for (var r, n, l, e = t.indexOf("&"); -1 != e && -1 != (r = t.indexOf(";", e + 2)); ) "#" == t[e + 1] ? (n = parseInt(("x" == t[e + 2] ? "0" : "") + t.substring(e + 2, r)), 
                isNaN(n) || (t = t.substring(0, e) + String.fromCharCode(n) + t.substring(r + 1))) : "nbsp" == (n = t.substring(e + 1, r)) ? t = t.substring(0, e) + " " + t.substring(r + 1) : "lt" != n && "gt" != n && "amp" != n && "ensp" != n && "emsp" != n && (l = !0), 
                e = t.indexOf("&", e + 1);
                var _ = this._STACK.length ? this._STACK[this._STACK.length - 1].children : this.DOM;
                _.length && "text" == _[_.length - 1].type ? (_[_.length - 1].text += t, l && (_[_.length - 1].decode = !0)) : _.push({
                    type: "text",
                    text: t,
                    decode: l
                });
            }
        }
    }, {
        key: "setNode",
        value: function() {
            var t = this._STACK.length ? this._STACK[this._STACK.length - 1].children : this.DOM, i = {
                name: this._tagName.toLowerCase(),
                attrs: this._attrs
            };
            if (e.LabelHandler(i, this), this._attrs = {}, !e.selfClosingTags[i.name]) {
                if (e.ignoreTags[i.name]) {
                    for (var s = this._i; this._i < this.data.length; ) {
                        for (-1 == (this._i = this.data.indexOf("</", this._i + 1)) && (this._i = this.data.length), 
                        this._i += 2, this._start = this._i; !a[this.data[this._i]] && ">" != this.data[this._i] && "/" != this.data[this._i]; ) this._i++;
                        if (this.data.substring(this._start, this._i).toLowerCase() == i.name) {
                            if (this._i = this.data.indexOf(">", this._i), -1 == this._i ? this._i = this.data.length : this._start = this._i + 1, 
                            this._state = this.Text, "svg" == i.name) {
                                var h = this.data.substring(s, this._i + 1);
                                for (i.attrs.xmlns || (h = ' xmlns="http://www.w3.org/2000/svg"' + h), this._i = s; "<" != this.data[s]; ) s--;
                                h = this.data.substring(s, this._i) + h, this._i = this._start - 1, i.name = "img", 
                                i.attrs = {
                                    src: "data:image/svg+xml;utf8," + h.replace(/#/g, "%23"),
                                    ignore: "T"
                                }, t.push(i);
                            }
                            break;
                        }
                    }
                    return;
                }
                this._STACK.push(i), i.children = [];
            }
            "/" == this.data[this._i] && this._i++, this._start = this._i + 1, this._state = this.Text, 
            e.ignoreTags[i.name] || (("pre" == i.name || i.attrs.style && i.attrs.style.includes("white-space") && i.attrs.style.includes("pre")) && (this._pre = !0, 
            i.pre = !0), t.push(i));
        }
    }, {
        key: "popNode",
        value: function(t) {
            if (e.blockTags[t.name] ? t.name = "div" : e.trustTags[t.name] || (t.name = "span"), 
            t.pre) {
                this._pre = !1, t.pre = void 0;
                for (s = this._STACK.length; s--; ) this._STACK[s].pre && (this._pre = !0);
            }
            if (t.c) if ("ul" == t.name) {
                for (var i = 1, s = this._STACK.length; s--; ) "ul" == this._STACK[s].name && i++;
                if (1 != i) for (s = t.children.length; s--; ) t.children[s].floor = i;
            } else if ("ol" == t.name) for (var s = 0, a = 1; h = t.children[s++]; ) "li" == h.name && (h.type = "ol", 
            h.num = function(t, i) {
                if ("a" == i) return String.fromCharCode(97 + (t - 1) % 26);
                if ("A" == i) return String.fromCharCode(65 + (t - 1) % 26);
                if ("i" == i || "I" == i) {
                    t = (t - 1) % 99 + 1;
                    var s = [ "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX" ], e = ([ "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC" ][Math.floor(t / 10) - 1] || "") + (s[t % 10 - 1] || "");
                    return "i" == i ? e.toLowerCase() : e;
                }
                return t;
            }(a++, t.attrs.type) + ".");
            if ("table" == t.name) {
                if (t.attrs.border && (t.attrs.style = "border:" + t.attrs.border + "px solid gray;" + (t.attrs.style || "")), 
                t.attrs.hasOwnProperty("cellspacing") && (t.attrs.style = "border-spacing:" + t.attrs.cellspacing + "px;" + (t.attrs.style || "")), 
                t.attrs.border || t.attrs.hasOwnProperty("cellpadding")) for (s = t.children.length; s--; ) !function i(s) {
                    if ("th" == s.name || "td" == s.name) return t.attrs.border && (s.attrs.style = "border:" + t.attrs.border + "px solid gray;" + (s.attrs.style || "")), 
                    void (t.attrs.hasOwnProperty("cellpadding") && (s.attrs.style = "padding:" + t.attrs.cellpadding + "px;" + (s.attrs.style || "")));
                    if ("text" != s.type) for (var e = (s.children || []).length; e--; ) i(s.children[e]);
                }(t.children[s]);
            }
            if (1 == t.children.length && "div" == t.name && "div" == t.children[0].name) {
                var h = t.children[0].attrs;
                t.attrs.style = t.attrs.style || "", h.style = h.style || "", t.attrs.style.includes("padding") || t.attrs.style.includes("margin") && h.style.includes("margin") || t.attrs.style.includes("display") || h.style.includes("display") || t.attrs.id || t.attrs.id || t.attrs.class || h.class ? (t.attrs.style || (t.attrs.style = void 0), 
                h.style || (h.style = void 0)) : (h.style.includes("padding") && (h.style = "box-sizing:border-box;" + h.style), 
                t.attrs.style = t.attrs.style + ";" + h.style, t.attrs.id = (h.id || "") + (t.attrs.id || ""), 
                t.attrs.class = (h.class || "") + (t.attrs.class || ""), t.children = t.children[0].children);
            }
            this.CssHandler.pop && this.CssHandler.pop(t);
        }
    }, {
        key: "checkClose",
        value: function() {
            return ">" == this.data[this._i] || "/" == this.data[this._i] && ">" == this.data[this._i + 1];
        }
    }, {
        key: "getSelection",
        value: function(t) {
            for (var i = this._start == this._i ? "" : this.data.substring(this._start, this._i); t && (a[this.data[++this._i]] || (this._i--, 
            !1)); ) ;
            return this._start = this._i + 1, i;
        }
    }, {
        key: "Text",
        value: function(t) {
            if ("<" == t) {
                var i = this.data[this._i + 1];
                i >= "a" && i <= "z" || i >= "A" && i <= "Z" ? (this.setText(), this._state = this.TagName) : "/" == i ? (this.setText(), 
                this._i++, (i = this.data[this._i + 1]) >= "a" && i <= "z" || i >= "A" && i <= "Z" ? (this._start = this._i + 1, 
                this._state = this.EndTag) : this._state = this.Comment) : "!" == i && (this.setText(), 
                this._state = this.Comment);
            }
        }
    }, {
        key: "Comment",
        value: function() {
            if ("--" == this.data.substring(this._i + 1, this._i + 3) || "[CDATA[" == this.data.substring(this._i + 1, this._i + 7)) {
                if (this._i = this.data.indexOf("--\x3e", this._i + 1), -1 == this._i) return this._i = this.data.length;
                this._i = this._i + 2;
            } else -1 == (this._i = this.data.indexOf(">", this._i + 1)) && (this._i = this.data.length);
            this._start = this._i + 1, this._state = this.Text;
        }
    }, {
        key: "TagName",
        value: function(t) {
            a[t] ? (this._tagName = this.getSelection(!0), this.checkClose() ? this.setNode() : this._state = this.AttrName) : this.checkClose() && (this._tagName = this.getSelection(), 
            this.setNode());
        }
    }, {
        key: "AttrName",
        value: function(t) {
            if (a[t]) if (this._attrName = this.getSelection(!0).toLowerCase(), "=" == this.data[this._i]) {
                for (;a[this.data[++this._i]]; ) ;
                this._start = this._i--, this._state = this.AttrValue;
            } else this.setAttr(); else if ("=" == t) {
                for (this._attrName = this.getSelection().toLowerCase(); a[this.data[++this._i]]; ) ;
                this._start = this._i--, this._state = this.AttrValue;
            } else this.checkClose() && (this._attrName = this.getSelection().toLowerCase(), 
            this.setAttr());
        }
    }, {
        key: "AttrValue",
        value: function(t) {
            if ('"' == t || "'" == t) {
                if (this._start++, -1 == (this._i = this.data.indexOf(t, this._i + 1))) return this._i = this.data.length;
            } else for (;!a[this.data[this._i]] && ">" != this.data[this._i]; this._i++) ;
            for (this._attrValue = this.getSelection(); this._attrValue.includes("&quot;"); ) this._attrValue = this._attrValue.replace("&quot;", "");
            this.setAttr();
        }
    }, {
        key: "EndTag",
        value: function(t) {
            if (a[t] || ">" == t || "/" == t) {
                for (var i = this.getSelection().toLowerCase(), s = !1, e = this._STACK.length; e--; ) if (this._STACK[e].name == i) {
                    s = !0;
                    break;
                }
                if (s) for (var h; s; ) (h = this._STACK.pop()).name == i && (s = !1), this.popNode(h); else "p" != i && "br" != i || (this._STACK.length ? this._STACK[this._STACK.length - 1].children : this.DOM).push({
                    name: i,
                    attrs: {}
                });
                this._i = this.data.indexOf(">", this._i), -1 == this._i ? this._i = this.data.length : this._state = this.Text;
            }
        }
    } ]), r;
}();

module.exports = function(t, i) {
    return new r(t, i).parse();
};