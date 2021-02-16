function e(e) {
    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = e.split(","), s = a.length; s--; ) t[a[s]] = !0;
    return t;
}

function t(e) {
    for (var t = e._STACK.length; t--; ) {
        if (l[e._STACK[t].name]) return !1;
        e._STACK[t].c = 1;
    }
    return !0;
}

var a = e("align,alt,app-id,appId,author,autoplay,border,cellpadding,cellspacing,class,color,colspan,controls,data-src,dir,face,height,href,id,ignore,loop,muted,name,path,poster,rowspan,size,span,src,start,style,type,unit-id,unitId,width,xmlns"), s = e("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"), r = e("address,article,aside,body,center,cite,footer,header,html,nav,pre,section"), i = e("area,base,basefont,canvas,circle,command,ellipse,embed,frame,head,iframe,input,isindex,keygen,line,link,map,meta,param,path,polygon,rect,script,source,svg,textarea,track,use,wbr"), l = e("a,colgroup,fieldset,legend,sub,sup,table,tbody,td,tfoot,th,thead,tr"), o = e("area,base,basefont,br,col,circle,ellipse,embed,frame,hr,img,input,isindex,keygen,line,link,meta,param,path,polygon,rect,source,track,use,wbr"), n = e(" , ,\t,\r,\n,\f"), c = {
    a: "color:#366092;word-break:break-all;padding:1.5px 0 1.5px 0",
    address: "font-style:italic",
    blockquote: "background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",
    center: "text-align:center",
    cite: "font-style:italic",
    dd: "margin-left:40px",
    img: "max-width:100%",
    mark: "background-color:yellow",
    pre: "font-family:monospace;white-space:pre;overflow:scroll",
    s: "text-decoration:line-through",
    u: "text-decoration:underline"
}, d = wx.getSystemInfoSync().screenWidth;

wx.canIUse("editor") ? (e("bdi,bdo,caption,rt,ruby,big,small,pre", s), e("bdi,bdo,caption,rt,ruby,pre", l), 
i.rp = !0, r.pre = void 0) : (r.caption = !0, c.big = "display:inline;font-size:1.2em", 
c.small = "display:inline;font-size:0.8em");

var g = require("./prism.js");

module.exports = {
    highlight: function(e) {
        var t = e.match(/<code[\s\S]+?language-([a-z\-]+)[\s\S]+?>([\s\S]+)<\/code>/);
        if (!t) return e;
        var a = t[1];
        switch (e = t[2].replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"), 
        a) {
          case "js":
          case "javascript":
            e = g.highlight(e, g.languages.javascript, "javascript");
            break;

          case "html":
          case "html-editor":
          case "wxml":
          case "vue":
            e = g.highlight(e, g.languages.html, "html");
            break;

          case "json":
            e = g.highlight(e, g.languages.json, "json");
            break;

          case "md":
          case "md-editor":
          case "markdown":
            e = g.highlight(e, g.languages.markdown, "markdown");
            break;

          case "c":
          case "cpp":
            e = g.highlight(e, g.languages.clike, "clike");
        }
        return a.includes("editor") || (e = "<span style='position:absolute;top:3px;right:8px;font-size:.6rem;color:#808080;font-weight:bold;user-select:none'>" + a + "</span><div style='overflow:auto;max-width:100%;padding-bottom:1em'>" + e + "</div>"), 
        e;
    },
    LabelHandler: function(e, a) {
        var s = e.attrs;
        switch (s.style = a.CssHandler.match(e.name, s, e) + (s.style || ""), e.name) {
          case "div":
          case "p":
            s.align && (s.style = "text-align:" + s.align + ";" + s.style, s.align = void 0);
            break;

          case "img":
            s["data-src"] && (s.src = s.src || s["data-src"], s["data-src"] = void 0), s.width && parseInt(s.width) > d && (s.style += ";height:auto !important"), 
            s.src && !s.ignore && (t(a) ? s.i = (a._imgNum++).toString() : s.ignore = "T");
            break;

          case "a":
          case "ad":
            t(a);
            break;

          case "font":
            if (s.color && (s.style = "color:" + s.color + ";" + s.style, s.color = void 0), 
            s.face && (s.style = "font-family:" + s.face + ";" + s.style, s.face = void 0), 
            s.size) {
                var r = parseInt(s.size);
                r < 1 ? r = 1 : r > 7 && (r = 7);
                var i = [ "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large" ];
                s.style = "font-size:" + i[r - 1] + ";" + s.style, s.size = void 0;
            }
            break;

          case "video":
          case "audio":
            s.id ? a["_" + e.name + "Num"]++ : s.id = e.name + ++a["_" + e.name + "Num"], "video" == e.name && (s.width && (s.style = "width:" + parseFloat(s.width) + (s.width.includes("%") ? "%" : "px") + ";" + s.style, 
            s.width = void 0), s.height && (s.style = "height:" + parseFloat(s.height) + (s.height.includes("%") ? "%" : "px") + ";" + s.style, 
            s.height = void 0), a._videoNum > 3 && (e.lazyLoad = !0)), s.source = [], s.src && s.source.push(s.src), 
            s.controls || s.autoplay || console.warn("存在没有 controls 属性的 " + e.name + " 标签，可能导致无法播放", e), 
            t(a);
            break;

          case "source":
            var l = a._STACK[a._STACK.length - 1];
            !l || "video" != l.name && "audio" != l.name || (l.attrs.source.push(s.src), l.attrs.src || (l.attrs.src = s.src));
        }
        var o = s.style.toLowerCase().split(";"), c = {};
        s.style = "";
        for (var g = 0, p = o.length; g < p; g++) {
            var h = o[g].split(":");
            if (2 == h.length) {
                var u = h[0].trim(), m = h[1].trim();
                if (m.includes("url")) {
                    var b = m.indexOf("(");
                    if (-1 != b++) {
                        for (;'"' == m[b] || "'" == m[b] || n[m[b]]; ) b++;
                        "/" == m[b] && ("/" == m[b + 1] ? m = m.substring(0, b) + a._protocol + ":" + m.substring(b) : a._domain && (m = m.substring(0, b) + a._domain + m.substring(b)));
                    }
                } else m.includes("rpx") && (m = m.replace(/[0-9.]*rpx/g, function(e) {
                    return parseFloat(e) * d / 750 + "px";
                }));
                m.includes("-webkit") || m.includes("-moz") || m.includes("-ms") || m.includes("-o") || m.includes("safe") ? s.style += ";" + u + ":" + m : c[u] && !m.includes("import") && c[u].includes("import") || (c[u] = m);
            }
        }
        "img" == e.name && c.width && c.width.includes("%") && parseInt(c.width) > d && (c.height = "auto !important");
        for (var u in c) s.style += ";" + u + ":" + c[u];
        s.style = s.style.substr(1), s.style || (s.style = void 0), a._useAnchor && s.id && t(a);
    },
    trustAttrs: a,
    trustTags: s,
    blockTags: r,
    ignoreTags: i,
    selfClosingTags: o,
    blankChar: n,
    userAgentStyles: c,
    screenWidth: d
};