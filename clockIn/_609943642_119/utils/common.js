function r(r) {
    if (!r) return "";
    (r = r.replace(/广西壮族自治区南宁市/g, "")).length > 18 && (r = r.replace(r.substring(18, r.length), "..."));
    for (var e = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/" ], t = function(r, e) {
        for (var t = 8 - (r + 1) + 6 * (r - 1) - e.length; --t >= 0; ) e.unshift(0);
        for (var a = [], n = r; --n >= 0; ) a.push(1);
        a.push(0);
        for (var o = 0, u = 8 - (r + 1); o < u; ++o) a.push(e[o]);
        for (var f = 0; f < r - 1; ++f) {
            a.push(1), a.push(0);
            for (var s = 6; --s >= 0; ) a.push(e[o++]);
        }
        return a;
    }, a = [], n = [], o = 0, u = r.length; o < u; ++o) {
        var f = r.charCodeAt(o), s = function(r) {
            for (var e = new Array(); r > 0; ) {
                var t = r % 2;
                r = Math.floor(r / 2), e.push(t);
            }
            return e.reverse(), e;
        }(f);
        if (f < 128) {
            for (var c = 8 - s.length; --c >= 0; ) s.unshift(0);
            n = n.concat(s);
        } else f >= 128 && f <= 2047 ? n = n.concat(t(2, s)) : f >= 2048 && f <= 65535 ? n = n.concat(t(3, s)) : f >= 65536 && f <= 2097151 ? n = n.concat(t(4, s)) : f >= 2097152 && f <= 67108863 ? n = n.concat(t(5, s)) : f >= 4e6 && f <= 2147483647 && (n = n.concat(t(6, s)));
    }
    for (var l = 0, o = 0, u = n.length; o < u; o += 6) {
        var h = o + 6 - u;
        2 == h ? l = 2 : 4 == h && (l = 4);
        for (var i = l; --i >= 0; ) n.push(0);
        a.push(function(r) {
            for (var e = 0, t = 0, a = r.length - 1; a >= 0; --a) 1 == r[a] && (e += Math.pow(2, t)), 
            ++t;
            return e;
        }(n.slice(o, o + 6)));
    }
    for (var p = "", o = 0, u = a.length; o < u; ++o) p += e[a[o]];
    for (var o = 0, u = l / 2; o < u; ++o) p += "=";
    return p.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

var e = function(r) {
    return r && r.__esModule ? r : {
        default: r
    };
}(require("./we-moment-with-locales"));

module.exports = {
    base64encode: r,
    setLabeyeParam: function(t, a) {
        var n = r(t), o = "";
        return o = "?x-oss-process=image/resize,w_600,h_1200/watermark,type_ZmFuZ3poZW5naGVpdGk,size_20,g_sw,y_40,text_" + r((0, 
        e.default)(a).format("YYYY-MM-DD HH:mm")) + ",color_ff0000", t && (o = o + "/watermark,type_ZmFuZ3poZW5naGVpdGk,size_20,g_sw,text_" + n + ",color_ff0000"), 
        o;
    },
    getDis: function(r, e) {
        function t(r) {
            return r * a / 180;
        }
        if (!(r && e && r.lat && r.lng && e.lat && e.lng)) return "";
        var a = Math.PI, n = r.lat, o = e.lat, u = r.lng, f = e.lng, s = t(n), c = t(o), l = s - c, h = t(u) - t(f), i = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(l / 2), 2) + Math.cos(s) * Math.cos(c) * Math.pow(Math.sin(h / 2), 2)));
        return i *= 6378137, (i = Math.round(1e4 * i) / 1e4) < 1e3 ? i.toFixed() + "m" : (i / 1e3).toFixed(1) + "km";
    },
    diffdate: function(r, t) {
        var a = "剩";
        return (0, e.default)(r).isAfter(t) && (a = "超"), (a + (0, e.default)(r).locale("zh-cn").from((0, 
        e.default)(t), !0)).replace(/\s*/g, "");
    }
};