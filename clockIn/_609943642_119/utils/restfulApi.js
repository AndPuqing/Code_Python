Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
};

exports.addRequestKey = function(e) {
    n[e] = !0;
}, exports.removeRequestKey = function(e) {
    delete n[e];
}, exports.hitRequestKey = function(e) {
    return n[e];
};

var t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./config.js")), n = {}, r = function() {
    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments[1], o = {};
    return getApp() && getApp().deviceId && (o["X-Client-DeviceId"] = getApp().deviceId), 
    e({
        header: e({
            "Geo-Coordinate": "GCJ02",
            "X-Client-AppName": t.default.appName,
            Authorization: "Bearer " + r
        }, o, n || {})
    }, n);
}, o = function(e) {
    return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/.test(e) ? e : t.default.host + "/" + e;
};

exports.default = function(t) {
    return function(n) {
        var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = function() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u, c = arguments[2], s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n, d = r(a, t);
            return new Promise(function(t, n) {
                wx.request(e({
                    url: o(s),
                    data: i
                }, d, {
                    method: c,
                    success: function(e) {
                        t(e);
                    },
                    fail: function() {
                        t({
                            data: {
                                Success: !1,
                                Error: "服务器开了小差，请稍后重试！!"
                            }
                        });
                    }
                }));
            });
        };
        return {
            get: function(e, t) {
                return i(e, t, "GET");
            },
            post: function(e, t) {
                return i(e, t, "POST");
            },
            delete: function(e, t) {
                return i(e, t, "DELETE");
            }
        };
    };
};