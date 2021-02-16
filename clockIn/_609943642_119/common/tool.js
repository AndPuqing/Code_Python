function o(o, e) {
    if (!(o instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Location = void 0;

var e = function() {
    function o(o, e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(o, n.key, n);
        }
    }
    return function(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e;
    };
}(), t = function(o) {
    return o && o.__esModule ? o : {
        default: o
    };
}(require("../utils/config")), n = getApp();

exports.Location = function() {
    function a() {
        o(this, a);
    }
    return e(a, [ {
        key: "startgetlocation",
        value: function(o, e) {
            var a = function a() {
                wx.getLocation({
                    type: "gcj02",
                    success: function(o) {
                        console.log(o), n.globalData.location = o, e && e(o), n.qqmapsdk.reverseGeocoder({
                            location: {
                                latitude: o.latitude,
                                longitude: o.longitude
                            },
                            success: function(o) {
                                n.globalData.position = {
                                    areaid: o.result.ad_info.adcode + "000000",
                                    location: o.result.ad_info.city + o.result.ad_info.district
                                };
                            },
                            fail: function(o) {
                                console.log(o), n.services("api/app/amap/v3/geocode/regeo").get({
                                    key: "1a4d5e12e65cacc7b6987bc7ea246262",
                                    location: n.globalData.location.longitude + "," + n.globalData.location.latitude
                                }).then(function(o) {
                                    "OK" == o.data.info && (n.globalData.position = {
                                        areaid: o.data.regeocode.addressComponent.adcode + "000000",
                                        location: o.data.regeocode.formatted_address
                                    });
                                });
                            },
                            complete: function(o) {}
                        });
                    },
                    fail: function(e) {
                        "guet" == t.default.key && o && wx.showModal({
                            title: "定位失败",
                            confirmText: "重新定位",
                            content: "请检查您的GPS开关是否开启后,点击重新定位",
                            showCancel: !1,
                            success: function(o) {
                                o.confirm && a();
                            }
                        });
                    }
                });
            };
            wx.getSetting({
                success: function(o) {
                    console.log(o), o && o.authSetting && o.authSetting["scope.userLocation"] ? a() : wx.authorize({
                        scope: "scope.userLocation",
                        success: function() {
                            a();
                        },
                        fail: function(o) {
                            wx.showModal({
                                title: "授权提醒",
                                content: "小程序需要获取您的位置,请授权！",
                                showCancel: "guet" != t.default.key,
                                success: function(o) {
                                    o.confirm && wx.openSetting({
                                        success: function(o) {},
                                        fail: function(o) {
                                            console.log(o);
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    } ]), a;
}();