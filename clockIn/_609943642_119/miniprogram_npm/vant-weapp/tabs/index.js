var t = function() {
    function t(t, e) {
        var n = [], i = !0, r = !1, a = void 0;
        try {
            for (var s, o = t[Symbol.iterator](); !(i = (s = o.next()).done) && (n.push(s.value), 
            !e || n.length !== e); i = !0) ;
        } catch (t) {
            r = !0, a = t;
        } finally {
            try {
                !i && o.return && o.return();
            } finally {
                if (r) throw a;
            }
        }
        return n;
    }
    return function(e, n) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), e = require("../common/component"), n = require("../mixins/touch"), i = require("../common/utils");

(0, e.VantComponent)({
    mixins: [ n.touch ],
    classes: [ "nav-class", "tab-class", "tab-active-class", "line-class" ],
    relation: {
        name: "tab",
        type: "descendant",
        linked: function(t) {
            t.index = this.children.length, this.children.push(t), this.updateTabs();
        },
        unlinked: function(t) {
            this.children = this.children.filter(function(e) {
                return e !== t;
            }).map(function(t, e) {
                return t.index = e, t;
            }), this.updateTabs();
        }
    },
    props: {
        color: {
            type: String,
            observer: "setLine"
        },
        sticky: Boolean,
        animated: {
            type: Boolean,
            observer: "setTrack"
        },
        swipeable: Boolean,
        lineWidth: {
            type: [ String, Number ],
            value: -1,
            observer: "setLine"
        },
        lineHeight: {
            type: [ String, Number ],
            value: -1,
            observer: "setLine"
        },
        titleActiveColor: String,
        titleInactiveColor: String,
        active: {
            type: [ String, Number ],
            value: 0,
            observer: function(t) {
                t !== this.getCurrentName() && this.setCurrentIndexByName(t);
            }
        },
        type: {
            type: String,
            value: "line"
        },
        border: {
            type: Boolean,
            value: !0
        },
        ellipsis: {
            type: Boolean,
            value: !0
        },
        duration: {
            type: Number,
            value: .3
        },
        zIndex: {
            type: Number,
            value: 1
        },
        swipeThreshold: {
            type: Number,
            value: 4,
            observer: function(t) {
                this.setData({
                    scrollable: this.children.length > t || !this.data.ellipsis
                });
            }
        },
        offsetTop: {
            type: Number,
            value: 0
        },
        lazyRender: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        tabs: [],
        lineStyle: "",
        scrollLeft: 0,
        scrollable: !1,
        trackStyle: "",
        currentIndex: null,
        container: null
    },
    beforeCreate: function() {
        this.children = [];
    },
    mounted: function() {
        var t = this;
        this.setData({
            container: function() {
                return t.createSelectorQuery().select(".van-tabs");
            }
        }), this.setLine(!0), this.setTrack(), this.scrollIntoView();
    },
    methods: {
        updateTabs: function() {
            var t = this.children, e = void 0 === t ? [] : t, n = this.data;
            this.setData({
                tabs: e.map(function(t) {
                    return t.data;
                }),
                scrollable: this.children.length > n.swipeThreshold || !n.ellipsis
            }), this.setCurrentIndexByName(this.getCurrentName() || n.active);
        },
        trigger: function(t) {
            var e = this.data.currentIndex, n = this.children[e];
            this.$emit(t, {
                index: e,
                name: n ? n.getComputedName() : null,
                title: n ? n.data.title : null
            });
        },
        onTap: function(t) {
            var e = this, n = t.currentTarget.dataset.index;
            this.children[n].data.disabled ? this.trigger("disabled") : (this.setCurrentIndex(n), 
            wx.nextTick(function() {
                e.trigger("click");
            }));
        },
        setCurrentIndexByName: function(t) {
            var e = this.children, n = void 0 === e ? [] : e, i = n.filter(function(e) {
                return e.getComputedName() === t;
            }), r = (n[0] || {}).index || 0;
            this.setCurrentIndex(i.length ? i[0].index : r);
        },
        setCurrentIndex: function(t) {
            var e = this, n = this.data, r = this.children, a = void 0 === r ? [] : r;
            if (!(!(0, i.isDef)(t) || t >= a.length || t < 0)) {
                var s = null !== n.currentIndex;
                this.setData({
                    currentIndex: t
                }), a.forEach(function(n, i) {
                    var r = i === t;
                    r === n.data.active && n.inited || n.updateRender(r, e);
                }), wx.nextTick(function() {
                    e.setLine(), e.setTrack(), e.scrollIntoView(), e.trigger("input"), s && e.trigger("change");
                });
            }
        },
        getCurrentName: function() {
            var t = this.children[this.data.currentIndex];
            if (t) return t.getComputedName();
        },
        setLine: function(t) {
            var e = this;
            if ("line" === this.data.type) {
                var n = this.data, r = n.color, a = n.duration, s = n.currentIndex, o = n.lineWidth, l = n.lineHeight;
                this.getRect(".van-tab", !0).then(function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], u = n[s];
                    if (null != u) {
                        var c = -1 !== o ? o : u.width / 2, d = -1 !== l ? "height: " + (0, i.addUnit)(l) + "; border-radius: " + (0, 
                        i.addUnit)(l) + ";" : "", h = n.slice(0, s).reduce(function(t, e) {
                            return t + e.width;
                        }, 0);
                        h += (u.width - c) / 2;
                        var f = t ? "" : "transition-duration: " + a + "s; -webkit-transition-duration: " + a + "s;";
                        e.setData({
                            lineStyle: "\n            " + d + "\n            width: " + (0, i.addUnit)(c) + ";\n            background-color: " + r + ";\n            -webkit-transform: translateX(" + h + "px);\n            transform: translateX(" + h + "px);\n            " + f + "\n          "
                        });
                    }
                });
            }
        },
        setTrack: function() {
            var t = this.data, e = t.animated, n = t.duration, i = t.currentIndex;
            this.setData({
                trackStyle: "\n          transform: translate3d(" + -100 * i + "%, 0, 0);\n          -webkit-transition-duration: " + (e ? n : 0) + "s;\n          transition-duration: " + (e ? n : 0) + "s;\n        "
            });
        },
        scrollIntoView: function() {
            var e = this, n = this.data, i = n.currentIndex;
            n.scrollable && Promise.all([ this.getRect(".van-tab", !0), this.getRect(".van-tabs__nav") ]).then(function(n) {
                var r = t(n, 2), a = r[0], s = r[1], o = a[i], l = a.slice(0, i).reduce(function(t, e) {
                    return t + e.width;
                }, 0);
                e.setData({
                    scrollLeft: l - (s.width - o.width) / 2
                });
            });
        },
        onTouchScroll: function(t) {
            this.$emit("scroll", t.detail);
        },
        onTouchStart: function(t) {
            this.data.swipeable && this.touchStart(t);
        },
        onTouchMove: function(t) {
            this.data.swipeable && this.touchMove(t);
        },
        onTouchEnd: function() {
            if (this.data.swipeable) {
                var t = this.data, e = t.tabs, n = t.currentIndex, i = this.direction, r = this.deltaX, a = this.offsetX;
                "horizontal" === i && a >= 50 && (r > 0 && 0 !== n ? this.setCurrentIndex(n - 1) : r < 0 && n !== e.length - 1 && this.setCurrentIndex(n + 1));
            }
        }
    }
});