var e = function(e) {
    function n(e, n, t, a, r) {
        this.type = e, this.content = n, this.alias = t, this.length = 0 | (a || "").length, 
        this.greedy = !!r;
    }
    function t() {
        i.manual || i.highlightAll();
    }
    var a = /\blang(?:uage)?-([\w-]+)\b/i, r = 0, i = {
        manual: e.Prism && e.Prism.manual,
        disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
        util: {
            encode: function e(t) {
                return t instanceof n ? new n(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
            },
            type: function(e) {
                return Object.prototype.toString.call(e).slice(8, -1);
            },
            objId: function(e) {
                return e.__id || Object.defineProperty(e, "__id", {
                    value: ++r
                }), e.__id;
            },
            clone: function e(n, t) {
                var a, r, s = i.util.type(n);
                switch (t = t || {}, s) {
                  case "Object":
                    if (r = i.util.objId(n), t[r]) return t[r];
                    for (var o in a = {}, t[r] = a, n) n.hasOwnProperty(o) && (a[o] = e(n[o], t));
                    return a;

                  case "Array":
                    return r = i.util.objId(n), t[r] ? t[r] : (a = [], t[r] = a, n.forEach(function(n, r) {
                        a[r] = e(n, t);
                    }), a);

                  default:
                    return n;
                }
            },
            getLanguage: function(e) {
                for (;e && !a.test(e.className); ) e = e.parentElement;
                return e ? (e.className.match(a) || [ , "none" ])[1].toLowerCase() : "none";
            },
            currentScript: function() {
                if ("undefined" == typeof document) return null;
                if ("currentScript" in document) return document.currentScript;
                try {
                    throw new Error();
                } catch (a) {
                    var e = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack) || [])[1];
                    if (e) {
                        var n = document.getElementsByTagName("script");
                        for (var t in n) if (n[t].src == e) return n[t];
                    }
                    return null;
                }
            }
        },
        languages: {
            extend: function(e, n) {
                var t = i.util.clone(i.languages[e]);
                for (var a in n) t[a] = n[a];
                return t;
            },
            insertBefore: function(e, n, t, a) {
                var r = (a = a || i.languages)[e], s = {};
                for (var o in r) if (r.hasOwnProperty(o)) {
                    if (o == n) for (var l in t) t.hasOwnProperty(l) && (s[l] = t[l]);
                    t.hasOwnProperty(o) || (s[o] = r[o]);
                }
                var u = a[e];
                return a[e] = s, i.languages.DFS(i.languages, function(n, t) {
                    t === u && n != e && (this[n] = s);
                }), s;
            },
            DFS: function e(n, t, a, r) {
                r = r || {};
                var s = i.util.objId;
                for (var o in n) if (n.hasOwnProperty(o)) {
                    t.call(n, o, n[o], a || o);
                    var l = n[o], u = i.util.type(l);
                    "Object" !== u || r[s(l)] ? "Array" !== u || r[s(l)] || (r[s(l)] = !0, e(l, t, o, r)) : (r[s(l)] = !0, 
                    e(l, t, null, r));
                }
            }
        },
        plugins: {},
        highlightAll: function(e, n) {
            i.highlightAllUnder(document, e, n);
        },
        highlightAllUnder: function(e, n, t) {
            var a = {
                callback: t,
                container: e,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            i.hooks.run("before-highlightall", a), a.elements = Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)), 
            i.hooks.run("before-all-elements-highlight", a);
            for (var r, s = 0; r = a.elements[s++]; ) i.highlightElement(r, !0 === n, a.callback);
        },
        highlightElement: function(n, t, r) {
            function s(e) {
                c.highlightedCode = e, i.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, 
                i.hooks.run("after-highlight", c), i.hooks.run("complete", c), r && r.call(c.element);
            }
            var o = i.util.getLanguage(n), l = i.languages[o];
            n.className = n.className.replace(a, "").replace(/\s+/g, " ") + " language-" + o;
            var u = n.parentNode;
            u && "pre" === u.nodeName.toLowerCase() && (u.className = u.className.replace(a, "").replace(/\s+/g, " ") + " language-" + o);
            var c = {
                element: n,
                language: o,
                grammar: l,
                code: n.textContent
            };
            if (i.hooks.run("before-sanity-check", c), !c.code) return i.hooks.run("complete", c), 
            void (r && r.call(c.element));
            if (i.hooks.run("before-highlight", c), c.grammar) if (t && e.Worker) {
                var g = new Worker(i.filename);
                g.onmessage = function(e) {
                    s(e.data);
                }, g.postMessage(JSON.stringify({
                    language: c.language,
                    code: c.code,
                    immediateClose: !0
                }));
            } else s(i.highlight(c.code, c.grammar, c.language)); else s(i.util.encode(c.code));
        },
        highlight: function(e, t, a) {
            var r = {
                code: e,
                grammar: t,
                language: a
            };
            return i.hooks.run("before-tokenize", r), r.tokens = i.tokenize(r.code, r.grammar), 
            i.hooks.run("after-tokenize", r), n.stringify(i.util.encode(r.tokens), r.language);
        },
        matchGrammar: function(e, t, a, r, s, o, l) {
            for (var u in a) if (a.hasOwnProperty(u) && a[u]) {
                var c = a[u];
                c = Array.isArray(c) ? c : [ c ];
                for (var g = 0; g < c.length; ++g) {
                    if (l && l == u + "," + g) return;
                    var d = c[g], p = d.inside, f = !!d.lookbehind, h = !!d.greedy, m = 0, b = d.alias;
                    if (h && !d.pattern.global) {
                        var k = d.pattern.toString().match(/[imsuy]*$/)[0];
                        d.pattern = RegExp(d.pattern.source, k + "g");
                    }
                    d = d.pattern || d;
                    for (var y = r, v = s; y < t.length; v += t[y].length, ++y) {
                        var F = t[y];
                        if (t.length > e.length) return;
                        if (!(F instanceof n)) {
                            if (h && y != t.length - 1) {
                                if (d.lastIndex = v, !(S = d.exec(e))) break;
                                for (var w = S.index + (f && S[1] ? S[1].length : 0), x = S.index + S[0].length, A = y, _ = v, $ = t.length; A < $ && (_ < x || !t[A].type && !t[A - 1].greedy); ++A) (_ += t[A].length) <= w && (++y, 
                                v = _);
                                if (t[y] instanceof n) continue;
                                E = A - y, F = e.slice(v, _), S.index -= v;
                            } else {
                                d.lastIndex = 0;
                                var S = d.exec(F), E = 1;
                            }
                            if (S) {
                                f && (m = S[1] ? S[1].length : 0), x = (w = S.index + m) + (S = S[0].slice(m)).length;
                                var j = F.slice(0, w), O = F.slice(x), z = [ y, E ];
                                j && (++y, v += j.length, z.push(j));
                                var C = new n(u, p ? i.tokenize(S, p) : S, b, S, h);
                                if (z.push(C), O && z.push(O), Array.prototype.splice.apply(t, z), 1 != E && i.matchGrammar(e, t, a, y, v, !0, u + "," + g), 
                                o) break;
                            } else if (o) break;
                        }
                    }
                }
            }
        },
        tokenize: function(e, n) {
            var t = [ e ], a = n.rest;
            if (a) {
                for (var r in a) n[r] = a[r];
                delete n.rest;
            }
            return i.matchGrammar(e, t, n, 0, 0, !1), t;
        },
        hooks: {
            all: {},
            add: function(e, n) {
                var t = i.hooks.all;
                t[e] = t[e] || [], t[e].push(n);
            },
            run: function(e, n) {
                var t = i.hooks.all[e];
                if (t && t.length) for (var a, r = 0; a = t[r++]; ) a(n);
            }
        },
        Token: n
    };
    if (e.Prism = i, n.stringify = function e(n, t) {
        if ("string" == typeof n) return n;
        if (Array.isArray(n)) {
            var a = "";
            return n.forEach(function(n) {
                a += e(n, t);
            }), a;
        }
        var r = {
            type: n.type,
            content: e(n.content, t),
            tag: "span",
            classes: [ "token", n.type ],
            attributes: {},
            language: t
        }, s = n.alias;
        s && (Array.isArray(s) ? Array.prototype.push.apply(r.classes, s) : r.classes.push(s)), 
        i.hooks.run("wrap", r);
        var o = "";
        for (var l in r.attributes) o += " " + l + '="' + (r.attributes[l] || "").replace(/"/g, "&quot;") + '"';
        return "<" + r.tag + ' class="' + r.classes.join(" ") + '"' + o + ">" + r.content + "</" + r.tag + ">";
    }, !e.document) return e.addEventListener && (i.disableWorkerMessageHandler || e.addEventListener("message", function(n) {
        var t = JSON.parse(n.data), a = t.language, r = t.code, s = t.immediateClose;
        e.postMessage(i.highlight(r, i.languages[a], a)), s && e.close();
    }, !1)), i;
    var s = i.util.currentScript();
    if (s && (i.filename = s.src, s.hasAttribute("data-manual") && (i.manual = !0)), 
    !i.manual) {
        var o = document.readyState;
        "loading" === o || "interactive" === o && s && s.defer ? document.addEventListener("DOMContentLoaded", t) : window.requestAnimationFrame ? window.requestAnimationFrame(t) : window.setTimeout(t, 16);
    }
    return i;
}("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});

"undefined" != typeof module && module.exports && (module.exports = e), "undefined" != typeof global && (global.Prism = e), 
e.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
        greedy: !0
    },
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
                inside: {
                    punctuation: [ /^=/, {
                        pattern: /^(\s*)["']|["']$/,
                        lookbehind: !0
                    } ]
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: /&#?[\da-z]{1,8};/i
}, e.languages.markup.tag.inside["attr-value"].inside.entity = e.languages.markup.entity, 
e.hooks.add("wrap", function(e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Object.defineProperty(e.languages.markup.tag, "addInlined", {
    value: function(n, t) {
        var a = {};
        a["language-" + t] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: e.languages[t]
        }, a.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var r = {
            "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: a
            }
        };
        r["language-" + t] = {
            pattern: /[\s\S]+/,
            inside: e.languages[t]
        };
        var i = {};
        i[n] = {
            pattern: RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g, n), "i"),
            lookbehind: !0,
            greedy: !0,
            inside: r
        }, e.languages.insertBefore("markup", "cdata", i);
    }
}), e.languages.xml = e.languages.extend("markup", {}), e.languages.html = e.languages.markup, 
e.languages.mathml = e.languages.markup, e.languages.svg = e.languages.markup, function(e) {
    var n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    e.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
            inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                    pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
                    lookbehind: !0,
                    alias: "selector"
                }
            }
        },
        url: {
            pattern: RegExp("url\\((?:" + n.source + "|[^\n\r()]*)\\)", "i"),
            inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/
            }
        },
        selector: RegExp("[^{}\\s](?:[^{};\"']|" + n.source + ")*?(?=\\s*\\{)"),
        string: {
            pattern: n,
            greedy: !0
        },
        property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        important: /!important\b/i,
        function: /[-a-z0-9]+(?=\()/i,
        punctuation: /[(){};:,]/
    }, e.languages.css.atrule.inside.rest = e.languages.css;
    var t = e.languages.markup;
    t && (t.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", {
        "style-attr": {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
                "attr-name": {
                    pattern: /^\s*style/i,
                    inside: t.tag.inside
                },
                punctuation: /^\s*=\s*['"]|['"]\s*$/,
                "attr-value": {
                    pattern: /.+/i,
                    inside: e.languages.css
                }
            },
            alias: "language-css"
        }
    }, t.tag));
}(e), e.languages.clike = {
    comment: [ {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
    } ],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /[.\\]/
        }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
}, e.languages.javascript = e.languages.extend("clike", {
    "class-name": [ e.languages.clike["class-name"], {
        pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
        lookbehind: !0
    } ],
    keyword: [ {
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: !0
    }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
    } ],
    number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    operator: /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
}), e.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, 
e.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: !0,
        greedy: !0
    },
    "function-variable": {
        pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
        alias: "function"
    },
    parameter: [ {
        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: !0,
        inside: e.languages.javascript
    }, {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: e.languages.javascript
    }, {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: e.languages.javascript
    }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: e.languages.javascript
    } ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), e.languages.insertBefore("javascript", "string", {
    "template-string": {
        pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
        greedy: !0,
        inside: {
            "template-punctuation": {
                pattern: /^`|`$/,
                alias: "string"
            },
            interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                lookbehind: !0,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\${|}$/,
                        alias: "punctuation"
                    },
                    rest: e.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    }
}), e.languages.markup && e.languages.markup.tag.addInlined("script", "javascript"), 
e.languages.js = e.languages.javascript, e.languages.json = {
    property: {
        pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        greedy: !0
    },
    string: {
        pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        greedy: !0
    },
    comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    number: /-?\d+\.?\d*(?:e[+-]?\d+)?/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:true|false)\b/,
    null: {
        pattern: /\bnull\b/,
        alias: "keyword"
    }
}, function(e) {
    function n(e, n) {
        return e = e.replace(/<inner>/g, "(?:\\\\.|[^\\\\\\n\r]|(?:\r?\n|\r)(?!\r?\n|\r))"), 
        n && (e = e + "|" + e.replace(/_/g, "\\*")), RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + e + ")");
    }
    var t = "(?:\\\\.|``.+?``|`[^`\r\\n]+`|[^\\\\|\r\\n`])+", a = "\\|?__(?:\\|__)+\\|?(?:(?:\r?\n|\r)|$)".replace(/__/g, t), r = "\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\r?\n|\r)";
    e.languages.markdown = e.languages.extend("markup", {}), e.languages.insertBefore("markdown", "prolog", {
        blockquote: {
            pattern: /^>(?:[\t ]*>)*/m,
            alias: "punctuation"
        },
        table: {
            pattern: RegExp("^" + a + r + "(?:" + a + ")*", "m"),
            inside: {
                "table-data-rows": {
                    pattern: RegExp("^(" + a + r + ")(?:" + a + ")*$"),
                    lookbehind: !0,
                    inside: {
                        "table-data": {
                            pattern: RegExp(t),
                            inside: e.languages.markdown
                        },
                        punctuation: /\|/
                    }
                },
                "table-line": {
                    pattern: RegExp("^(" + a + ")" + r + "$"),
                    lookbehind: !0,
                    inside: {
                        punctuation: /\||:?-{3,}:?/
                    }
                },
                "table-header-row": {
                    pattern: RegExp("^" + a + "$"),
                    inside: {
                        "table-header": {
                            pattern: RegExp(t),
                            alias: "important",
                            inside: e.languages.markdown
                        },
                        punctuation: /\|/
                    }
                }
            }
        },
        code: [ {
            pattern: /(^[ \t]*(?:\r?\n|\r))(?: {4}|\t).+(?:(?:\r?\n|\r)(?: {4}|\t).+)*/m,
            lookbehind: !0,
            alias: "keyword"
        }, {
            pattern: /``.+?``|`[^`\r\n]+`/,
            alias: "keyword"
        }, {
            pattern: /^```[\s\S]*?^```$/m,
            greedy: !0,
            inside: {
                "code-block": {
                    pattern: /^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,
                    lookbehind: !0
                },
                "code-language": {
                    pattern: /^(```).+/,
                    lookbehind: !0
                },
                punctuation: /```/
            }
        } ],
        title: [ {
            pattern: /\S.*(?:\r?\n|\r)(?:==+|--+)(?=[ \t]*$)/m,
            alias: "important",
            inside: {
                punctuation: /==+$|--+$/
            }
        }, {
            pattern: /(^\s*)#+.+/m,
            lookbehind: !0,
            alias: "important",
            inside: {
                punctuation: /^#+|#+$/
            }
        } ],
        hr: {
            pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
            lookbehind: !0,
            alias: "punctuation"
        },
        list: {
            pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
            lookbehind: !0,
            alias: "punctuation"
        },
        "url-reference": {
            pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
            inside: {
                variable: {
                    pattern: /^(!?\[)[^\]]+/,
                    lookbehind: !0
                },
                string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                punctuation: /^[\[\]!:]|[<>]/
            },
            alias: "url"
        },
        bold: {
            pattern: n("__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__", !0),
            lookbehind: !0,
            greedy: !0,
            inside: {
                content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {}
                },
                punctuation: /\*\*|__/
            }
        },
        italic: {
            pattern: n("_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_", !0),
            lookbehind: !0,
            greedy: !0,
            inside: {
                content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {}
                },
                punctuation: /[*_]/
            }
        },
        strike: {
            pattern: n("(~~?)(?:(?!~)<inner>)+?\\2", !1),
            lookbehind: !0,
            greedy: !0,
            inside: {
                content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {}
                },
                punctuation: /~~?/
            }
        },
        url: {
            pattern: n('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)| ?\\[(?:(?!\\])<inner>)+\\])', !1),
            lookbehind: !0,
            greedy: !0,
            inside: {
                variable: {
                    pattern: /(\[)[^\]]+(?=\]$)/,
                    lookbehind: !0
                },
                content: {
                    pattern: /(^!?\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {}
                },
                string: {
                    pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
                }
            }
        }
    }), [ "url", "bold", "italic", "strike" ].forEach(function(n) {
        [ "url", "bold", "italic", "strike" ].forEach(function(t) {
            n !== t && (e.languages.markdown[n].inside.content.inside[t] = e.languages.markdown[t]);
        });
    }), e.hooks.add("after-tokenize", function(e) {
        "markdown" !== e.language && "md" !== e.language || function e(n) {
            if (n && "string" != typeof n) for (var t = 0, a = n.length; t < a; t++) {
                var r = n[t];
                if ("code" === r.type) {
                    var i = r.content[1], s = r.content[3];
                    if (i && s && "code-language" === i.type && "code-block" === s.type && "string" == typeof i.content) {
                        var o = i.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"), l = "language-" + (o = (/[a-z][\w-]*/i.exec(o) || [ "" ])[0].toLowerCase());
                        s.alias ? "string" == typeof s.alias ? s.alias = [ s.alias, l ] : s.alias.push(l) : s.alias = [ l ];
                    }
                } else e(r.content);
            }
        }(e.tokens);
    }), e.hooks.add("wrap", function(n) {
        if ("code-block" === n.type) {
            for (var t = "", a = 0, r = n.classes.length; a < r; a++) {
                var i = n.classes[a], s = /language-(.+)/.exec(i);
                if (s) {
                    t = s[1];
                    break;
                }
            }
            var o = e.languages[t];
            if (o) {
                var l = n.content.replace(/&lt;/g, "<").replace(/&amp;/g, "&");
                n.content = e.highlight(l, o, t);
            } else if (t && "none" !== t && e.plugins.autoloader) {
                var u = "md-" + new Date().valueOf() + "-" + Math.floor(1e16 * Math.random());
                n.attributes.id = u, e.plugins.autoloader.loadLanguages(t, function() {
                    var n = document.getElementById(u);
                    n && (n.innerHTML = e.highlight(n.textContent, e.languages[t], t));
                });
            }
        }
    }), e.languages.md = e.languages.markdown;
}(e);