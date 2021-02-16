(0, require("../common/component").VantComponent)({
    props: {
        zIndex: {
            type: Number,
            value: 99
        },
        offsetTop: {
            type: Number,
            value: 0,
            observer: "observeContent"
        },
        disabled: {
            type: Boolean,
            observer: function(e) {
                this.mounted && (e ? this.disconnectObserver() : this.initObserver());
            }
        },
        container: {
            type: null,
            observer: function(e) {
                "function" == typeof e && this.data.height && this.observeContainer();
            }
        }
    },
    data: {
        wrapStyle: "",
        containerStyle: ""
    },
    methods: {
        setStyle: function() {
            var e = this.data, t = e.offsetTop, n = e.height, i = e.fixed, s = e.zIndex;
            i ? this.setData({
                wrapStyle: "top: " + t + "px;",
                containerStyle: "height: " + n + "px; z-index: " + s + ";"
            }) : this.setData({
                wrapStyle: "",
                containerStyle: ""
            });
        },
        getContainerRect: function() {
            var e = this.data.container();
            return new Promise(function(t) {
                return e.boundingClientRect(t).exec();
            });
        },
        initObserver: function() {
            var e = this;
            this.disconnectObserver(), this.getRect(".van-sticky").then(function(t) {
                e.setData({
                    height: t.height
                }), wx.nextTick(function() {
                    e.observeContent(), e.observeContainer();
                });
            });
        },
        disconnectObserver: function(e) {
            if (e) {
                var t = this[e];
                t && t.disconnect();
            } else this.contentObserver && this.contentObserver.disconnect(), this.containerObserver && this.containerObserver.disconnect();
        },
        observeContent: function() {
            var e = this, t = this.data.offsetTop;
            this.disconnectObserver("contentObserver");
            var n = this.createIntersectionObserver({
                thresholds: [ 0, 1 ]
            });
            this.contentObserver = n, n.relativeToViewport({
                top: -t
            }), n.observe(".van-sticky", function(t) {
                e.data.disabled || e.setFixed(t.boundingClientRect.top);
            });
        },
        observeContainer: function() {
            var e = this;
            if ("function" == typeof this.data.container) {
                var t = this.data.height;
                this.getContainerRect().then(function(n) {
                    e.containerHeight = n.height, e.disconnectObserver("containerObserver");
                    var i = e.createIntersectionObserver({
                        thresholds: [ 0, 1 ]
                    });
                    e.containerObserver = i, i.relativeToViewport({
                        top: e.containerHeight - t
                    }), i.observe(".van-sticky", function(t) {
                        e.data.disabled || e.setFixed(t.boundingClientRect.top);
                    });
                });
            }
        },
        setFixed: function(e) {
            var t = this, n = this.data, i = n.offsetTop, s = n.height, o = this.containerHeight, r = o && s ? e > s - o && e < i : e < i;
            this.$emit("scroll", {
                scrollTop: e,
                isFixed: r
            }), this.setData({
                fixed: r
            }), wx.nextTick(function() {
                t.setStyle();
            });
        }
    },
    mounted: function() {
        this.mounted = !0, this.data.disabled || this.initObserver();
    },
    destroyed: function() {
        this.disconnectObserver();
    }
});