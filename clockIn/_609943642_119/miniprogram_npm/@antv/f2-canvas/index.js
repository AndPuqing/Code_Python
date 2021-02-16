var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function(e) {
    function n(t) {
        if (o[t]) return o[t].exports;
        var r = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }
    var o = {};
    return n.m = e, n.c = o, n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        });
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, n.t = function(e, o) {
        if (1 & o && (e = n(e)), 8 & o) return e;
        if (4 & o && "object" === (void 0 === e ? "undefined" : t(e)) && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & o && "string" != typeof e) for (var a in e) n.d(r, a, function(t) {
            return e[t];
        }.bind(null, a));
        return r;
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return n.d(e, "a", e), e;
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 0);
}([ function(t, e, n) {
    var o = function(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }(n(1));
    Component({
        properties: {
            canvasId: {
                type: String,
                value: "f2-canvas"
            },
            opts: {
                type: Object
            }
        },
        data: {},
        ready: function() {
            this.data.opts ? this.data.opts.lazyLoad || this.init() : console.warn('组件需绑定 opts 变量，例：<ff-canvas id="mychart-dom-bar" canvas-id="mychart-bar" opts="{{ opts }}"></ff-canvas>');
        },
        methods: {
            init: function(t) {
                var e = this, n = wx.version.version.split(".").map(function(t) {
                    return parseInt(t, 10);
                });
                if (n[0] > 1 || 1 === n[0] && n[1] > 9 || 1 === n[0] && 9 === n[1] && n[2] >= 91) {
                    var r = wx.createCanvasContext(this.data.canvasId, this), a = new o.default.Renderer(r);
                    this.canvas = a, wx.createSelectorQuery().in(this).select(".f2-canvas").boundingClientRect(function(n) {
                        "function" == typeof t ? e.chart = t(a, n.width, n.height, o.default) : e.data.opts && e.data.opts.onInit && (e.chart = e.data.opts.onInit(a, n.width, n.height, o.default));
                    }).exec();
                } else console.error("微信基础库版本过低，需大于等于 1.9.91。");
            },
            touchStart: function(t) {
                this.canvas && this.canvas.emitEvent("touchstart", [ t ]);
            },
            touchMove: function(t) {
                this.canvas && this.canvas.emitEvent("touchmove", [ t ]);
            },
            touchEnd: function(t) {
                this.canvas && this.canvas.emitEvent("touchend", [ t ]);
            },
            press: function(t) {
                this.canvas && this.canvas.emitEvent("press", [ t ]);
            }
        }
    });
}, function(t, e) {
    t.exports = require("@antv/wx-f2");
} ]);