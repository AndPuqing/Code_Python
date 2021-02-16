function e(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

function t(e) {
    return (0, s.isDef)(e) && !isNaN(new Date(e).getTime());
}

function n(e, t, n) {
    return Math.min(Math.max(e, t), n);
}

function a(e) {
    return ("00" + e).slice(-2);
}

function r(e, t) {
    for (var n = -1, a = Array(e < 0 ? 0 : e); ++n < e; ) a[n] = t(n);
    return a;
}

function u(e) {
    if (e) {
        for (;isNaN(parseInt(e, 10)); ) e = e.slice(1);
        return parseInt(e, 10);
    }
}

function i(e, t) {
    return 32 - new Date(e, t - 1, 32).getDate();
}

var o = function() {
    function e(e, t) {
        var n = [], a = !0, r = !1, u = void 0;
        try {
            for (var i, o = e[Symbol.iterator](); !(a = (i = o.next()).done) && (n.push(i.value), 
            !t || n.length !== t); a = !0) ;
        } catch (e) {
            r = !0, u = e;
        } finally {
            try {
                !a && o.return && o.return();
            } finally {
                if (r) throw u;
            }
        }
        return n;
    }
    return function(t, n) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), l = require("../common/component"), s = require("../common/utils"), m = require("../picker/shared"), c = new Date().getFullYear(), p = function(e, t) {
    return t;
};

(0, l.VantComponent)({
    classes: [ "active-class", "toolbar-class", "column-class" ],
    props: Object.assign(Object.assign({}, m.pickerProps), {
        value: null,
        filter: null,
        type: {
            type: String,
            value: "datetime"
        },
        showToolbar: {
            type: Boolean,
            value: !0
        },
        formatter: {
            type: null,
            value: p
        },
        minDate: {
            type: Number,
            value: new Date(c - 10, 0, 1).getTime()
        },
        maxDate: {
            type: Number,
            value: new Date(c + 10, 11, 31).getTime()
        },
        minHour: {
            type: Number,
            value: 0
        },
        maxHour: {
            type: Number,
            value: 23
        },
        minMinute: {
            type: Number,
            value: 0
        },
        maxMinute: {
            type: Number,
            value: 59
        }
    }),
    data: {
        innerValue: Date.now(),
        columns: []
    },
    watch: {
        value: "updateValue",
        type: "updateValue",
        minDate: "updateValue",
        maxDate: "updateValue",
        minHour: "updateValue",
        maxHour: "updateValue",
        minMinute: "updateValue",
        maxMinute: "updateValue"
    },
    methods: {
        updateValue: function() {
            var e = this, t = this.data, n = this.correctValue(this.data.value);
            n === t.innerValue ? this.updateColumns() : this.updateColumnValue(n).then(function() {
                e.$emit("input", n);
            });
        },
        getPicker: function() {
            if (null == this.picker) {
                this.picker = this.selectComponent(".van-datetime-picker");
                var e = this.picker, t = e.setColumnValues;
                e.setColumnValues = function() {
                    for (var n = arguments.length, a = Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                    return t.apply(e, [].concat(a, [ !1 ]));
                };
            }
            return this.picker;
        },
        updateColumns: function() {
            var e = this.data.formatter, t = void 0 === e ? p : e, n = this.getOriginColumns().map(function(e) {
                return {
                    values: e.values.map(function(n) {
                        return t(e.type, n);
                    })
                };
            });
            return this.set({
                columns: n
            });
        },
        getOriginColumns: function() {
            var e = this.data.filter;
            return this.getRanges().map(function(t) {
                var n = t.type, u = t.range, i = r(u[1] - u[0] + 1, function(e) {
                    var t = u[0] + e;
                    return t = "year" === n ? "" + t : a(t);
                });
                return e && (i = e(n, i)), {
                    type: n,
                    values: i
                };
            });
        },
        getRanges: function() {
            var e = this.data;
            if ("time" === e.type) return [ {
                type: "hour",
                range: [ e.minHour, e.maxHour ]
            }, {
                type: "minute",
                range: [ e.minMinute, e.maxMinute ]
            } ];
            var t = this.getBoundary("max", e.innerValue), n = t.maxYear, a = t.maxDate, r = t.maxMonth, u = t.maxHour, i = t.maxMinute, o = this.getBoundary("min", e.innerValue), l = o.minYear, s = o.minDate, m = [ {
                type: "year",
                range: [ l, n ]
            }, {
                type: "month",
                range: [ o.minMonth, r ]
            }, {
                type: "day",
                range: [ s, a ]
            }, {
                type: "hour",
                range: [ o.minHour, u ]
            }, {
                type: "minute",
                range: [ o.minMinute, i ]
            } ];
            return "date" === e.type && m.splice(3, 2), "year-month" === e.type && m.splice(2, 3), 
            m;
        },
        correctValue: function(e) {
            var r = this.data, u = "time" !== r.type;
            if (u && !t(e) ? e = r.minDate : u || e || (e = a(r.minHour) + ":00"), !u) {
                var i = e.split(":"), l = o(i, 2), s = l[0], m = l[1];
                return s = a(n(s, r.minHour, r.maxHour)), m = a(n(m, r.minMinute, r.maxMinute)), 
                s + ":" + m;
            }
            return e = Math.max(e, r.minDate), e = Math.min(e, r.maxDate);
        },
        getBoundary: function(t, n) {
            var a, r = new Date(n), u = new Date(this.data[t + "Date"]), o = u.getFullYear(), l = 1, s = 1, m = 0, c = 0;
            return "max" === t && (l = 12, s = i(r.getFullYear(), r.getMonth() + 1), m = 23, 
            c = 59), r.getFullYear() === o && (l = u.getMonth() + 1, r.getMonth() + 1 === l && (s = u.getDate(), 
            r.getDate() === s && (m = u.getHours(), r.getHours() === m && (c = u.getMinutes())))), 
            a = {}, e(a, t + "Year", o), e(a, t + "Month", l), e(a, t + "Date", s), e(a, t + "Hour", m), 
            e(a, t + "Minute", c), a;
        },
        onCancel: function() {
            this.$emit("cancel");
        },
        onConfirm: function() {
            this.$emit("confirm", this.data.innerValue);
        },
        onChange: function() {
            var e = this, t = this.data, n = void 0, a = this.getPicker();
            if ("time" === t.type) {
                var r = a.getIndexes();
                n = +t.columns[0].values[r[0]] + ":" + +t.columns[1].values[r[1]];
            } else {
                var o = a.getValues(), l = u(o[0]), s = u(o[1]), m = i(l, s), c = u(o[2]);
                "year-month" === t.type && (c = 1), c = c > m ? m : c;
                var p = 0, h = 0;
                "datetime" === t.type && (p = u(o[3]), h = u(o[4])), n = new Date(l, s - 1, c, p, h);
            }
            n = this.correctValue(n), this.updateColumnValue(n).then(function() {
                e.$emit("input", n), e.$emit("change", a);
            });
        },
        updateColumnValue: function(e) {
            var t = this, n = [], r = this.data, u = r.type, i = r.formatter, o = void 0 === i ? p : i, l = this.getPicker();
            if ("time" === u) {
                var s = e.split(":");
                n = [ o("hour", s[0]), o("minute", s[1]) ];
            } else {
                var m = new Date(e);
                n = [ o("year", "" + m.getFullYear()), o("month", a(m.getMonth() + 1)) ], "date" === u && n.push(o("day", a(m.getDate()))), 
                "datetime" === u && n.push(o("day", a(m.getDate())), o("hour", a(m.getHours())), o("minute", a(m.getMinutes())));
            }
            return this.set({
                innerValue: e
            }).then(function() {
                return t.updateColumns();
            }).then(function() {
                return l.setValues(n);
            });
        }
    },
    created: function() {
        var e = this, t = this.correctValue(this.data.value);
        this.updateColumnValue(t).then(function() {
            e.$emit("input", t);
        });
    }
});