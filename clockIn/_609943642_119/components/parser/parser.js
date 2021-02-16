function t(t) {
    for (var e = t.length, i = 5381; e--; ) i += (i << 5) + t.charCodeAt(e);
    return i;
}

var e, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, a = getApp().parserCache = {}, s = require("./libs/config.js"), n = require("./libs/CssHandler.js");

try {
    e = require("./libs/document.js");
} catch (t) {}

var o = wx.getFileSystemManager ? wx.getFileSystemManager() : null, r = require("./libs/MpHtmlParser.js"), l = wx.createAnimation({
    timingFunction: "ease"
}).opacity(1).step().export();

Component({
    properties: {
        html: {
            type: null,
            observer: function(t) {
                if (this._refresh) return this._refresh = !1;
                this.setContent(t, !0);
            }
        },
        autosetTitle: {
            type: Boolean,
            value: !0
        },
        autopause: {
            type: Boolean,
            value: !0
        },
        domain: String,
        gestureZoom: Boolean,
        lazyLoad: Boolean,
        selectable: Boolean,
        tagStyle: Object,
        showWithAnimation: Boolean,
        useAnchor: Boolean,
        useCache: Boolean
    },
    relations: {
        "../parser-group/parser-group": {
            type: "ancestor"
        }
    },
    created: function() {
        this.imgList = [], this.imgList.setItem = function(t, e) {
            var i = this;
            if (e.includes("base64")) {
                this[t] = e;
                var a = e.match(/data:image\/(\S+?);base64,(\S+)/);
                if (!a) return;
                var s = wx.env.USER_DATA_PATH + "/" + Date.now() + "." + a[1];
                o && o.writeFile({
                    filePath: s,
                    data: a[2],
                    encoding: "base64",
                    success: function() {
                        return i[t] = s;
                    }
                });
            } else if (this.includes(e)) {
                if ("http" != e.substring(0, 4)) return this[t] = e;
                for (var n = "", r = 0; r < e.length && (n += Math.random() > .5 ? e[r].toUpperCase() : e[r], 
                "/" != e[r] || "/" == e[r - 1] || "/" == e[r + 1]); r++) ;
                n += e.substring(r + 1), this[t] = n;
            } else this[t] = e;
        }, this.imgList.each = function(t) {
            for (var e = 0; e < this.length; e++) {
                var i = t(this[e], e, this);
                i && this.setItem(e, i);
            }
        }, this._refresh = !1;
    },
    detached: function() {
        this.imgList.each(function(t) {
            t && t.includes(wx.env.USER_DATA_PATH) && o && o.unlink({
                filePath: t
            });
        });
    },
    methods: {
        navigateTo: function(t) {
            var e = this;
            if (t.fail = t.fail || function() {}, !this.data.useAnchor) return t.fail({
                errMsg: "Use-anchor attribute is disabled"
            });
            this.createSelectorQuery().select("#root" + (t.id ? ">>>#" + t.id : "")).boundingClientRect().selectViewport().scrollOffset().exec(function(i) {
                if (!i[0]) return e.group ? e.group.navigateTo(e.i, t) : t.fail({
                    errMsg: "Label not found"
                });
                wx.pageScrollTo({
                    scrollTop: i[1].scrollTop + i[0].top,
                    success: t.success,
                    fail: t.fail
                });
            });
        },
        getText: function() {
            function t(i) {
                if (i) for (var a, s = 0; a = i[s++]; ) if ("text" == a.type) e += a.text; else if ("br" == a.type) e += "\n"; else {
                    var n = "p" == a.name || "div" == a.name || "tr" == a.name || "li" == a.name || "h" == a.name[0] && a.name[1] > "0" && a.name[1] < "7";
                    n && e && "\n" != e[e.length - 1] && (e += "\n"), t(a.children), n && "\n" != e[e.length - 1] ? e += "\n" : "td" != a.name && "th" != a.name || (e += "\t");
                }
            }
            var e = "";
            return t(this.data.html), e.replace(/&nbsp;/g, " ");
        },
        getVideoContext: function(t) {
            if (!t) return this.videoContexts;
            for (var e = this.videoContexts.length; e--; ) if (this.videoContexts[e].id == t) return this.videoContexts[e];
            return null;
        },
        setContent: function(o, h) {
            var c = this, u = {
                controls: {}
            };
            if (this.data.showWithAnimation && (u.showAnimation = l), o) if ("string" == typeof o) {
                if (this.data.useCache) {
                    var m = t(o);
                    a[m] ? u.html = a[m] : (u.html = r(o, this.data), a[m] = u.html);
                } else u.html = r(o, this.data);
                this.triggerEvent("parse", u.html);
            } else if (o.constructor == Array) {
                if (o.length && "Parser" != o[0].PoweredBy) {
                    var d = {
                        _imgNum: 0,
                        _videoNum: 0,
                        _audioNum: 0,
                        _domain: this.data.domain,
                        _protocol: this.data.domain && this.data.domain.includes("://") ? this.data.domain.split("://")[0] : "http",
                        _STACK: [],
                        CssHandler: new n(this.data.tagStyle)
                    };
                    !function t(e) {
                        for (var i, a = 0; i = e[a++]; ) if ("text" != i.type) {
                            i.attrs = i.attrs || {};
                            for (var n in i.attrs) s.trustAttrs[n] ? "string" != typeof i.attrs[n] && (i.attrs[n] = i.attrs[n].toString()) : i.attrs[n] = void 0;
                            s.LabelHandler(i, d), s.blockTags[i.name] ? i.name = "div" : s.trustTags[i.name] || (i.name = "span"), 
                            i.children && i.children.length ? (d._STACK.push(i), t(i.children), d._STACK.pop()) : i.children = void 0;
                        }
                    }(o), u.html = o;
                }
                h || (u.html = o);
            } else {
                if ("object" != (void 0 === o ? "undefined" : i(o)) || !o.nodes) return console.warn("错误的 html 类型：" + (void 0 === o ? "undefined" : i(o)));
                u.html = o.nodes, console.warn("错误的 html 类型：object 类型已废弃，请直接将 html 设置为 object.nodes");
            } else {
                if (h) return;
                u.html = "";
            }
            this._refresh = !!u.html, this.setData(u), this.imgList.length = 0, this.videoContexts = [], 
            e && (this.document = new e("html", u.html || o, this));
            for (var f = this.selectAllComponents("#root,#root>>>._node"), p = f.length; p--; ) {
                var g, v, x, b;
                !function() {
                    var t = f[p];
                    for (t._top = c, g = !!t._observer, v = t.data.nodes.length; x = t.data.nodes[--v]; ) x.c || ("img" == x.name ? (x.attrs.src && x.attrs.i && c.imgList.setItem(x.attrs.i, x.attrs.src), 
                    g || (g = !0, c.data.lazyLoad && t.createIntersectionObserver ? (wx.nextTick || setTimeout)(function() {
                        t._observer = t.createIntersectionObserver(), t._observer.relativeToViewport({
                            top: 1e3,
                            bottom: 1e3
                        }).observe("._img", function() {
                            t.setData({
                                imgLoad: !0
                            }), t._observer.disconnect(), t._observer = void 0;
                        });
                    }, 50) : t.setData({
                        imgLoad: !0
                    }))) : "video" == x.name ? ((b = wx.createVideoContext(x.attrs.id, t)).id = x.attrs.id, 
                    c.videoContexts.push(b)) : "audio" == x.name && x.attrs.autoplay ? wx.createAudioContext(x.attrs.id, t).play() : "title" == x.name && c.data.autosetTitle && "text" == x.children[0].type && x.children[0].text && wx.setNavigationBarTitle({
                        title: x.children[0].text
                    }));
                }();
            }
            (wx.nextTick || setTimeout)(function() {
                c.createSelectorQuery().select("#root").boundingClientRect(function(t) {
                    c.width = t.width, c.triggerEvent("ready", t);
                }).exec();
            }, 50);
        },
        _tap: function(t) {
            if (this.data.gestureZoom && t.timeStamp - this.lastTime < 300) {
                if (this.zoomIn) this.animation.translateX(0).scale(1).step(), wx.pageScrollTo({
                    scrollTop: (t.detail.y - t.currentTarget.offsetTop + this.initY) / 2 - t.touches[0].clientY,
                    duration: 400
                }); else {
                    var e = t.detail.x - t.currentTarget.offsetLeft;
                    this.initY = t.detail.y - t.currentTarget.offsetTop, this.animation = wx.createAnimation({
                        transformOrigin: e + "px " + this.initY + "px 0",
                        timingFunction: "ease-in-out"
                    }), this.animation.scale(2).step(), this.translateMax = e / 2, this.translateMin = (e - this.width) / 2, 
                    this.translateX = 0;
                }
                this.zoomIn = !this.zoomIn, this.setData({
                    showAnimation: this.animation.export()
                });
            }
            this.lastTime = t.timeStamp;
        },
        _touchstart: function(t) {
            1 == t.touches.length && (this.initX = this.lastX = t.touches[0].pageX);
        },
        _touchmove: function(t) {
            var e = t.touches[0].pageX - this.lastX;
            if (this.zoomIn && 1 == t.touches.length && Math.abs(e) > 20) {
                if (this.lastX = t.touches[0].pageX, this.translateX <= this.translateMin && e < 0 || this.translateX >= this.translateMax && e > 0) return;
                this.translateX += e * Math.abs(this.lastX - this.initX) * .05, this.translateX < this.translateMin && (this.translateX = this.translateMin), 
                this.translateX > this.translateMax && (this.translateX = this.translateMax), this.animation.translateX(this.translateX).step(), 
                this.setData({
                    showAnimation: this.animation.export()
                });
            }
        }
    }
});