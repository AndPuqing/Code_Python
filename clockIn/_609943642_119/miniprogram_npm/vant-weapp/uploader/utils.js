function e(e) {
    return t.some(function(t) {
        return -1 !== e.indexOf("." + t);
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isImageUrl = e, exports.isImageFile = function(t) {
    return t.type ? 0 === t.type.indexOf("image") : t.path ? e(t.path) : !!t.url && e(t.url);
};

var t = [ "jpeg", "jpg", "gif", "png", "svg" ];