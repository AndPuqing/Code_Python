(0, require("../common/component").VantComponent)({
    field: !0,
    relation: {
        name: "radio",
        type: "descendant",
        linked: function(e) {
            this.children = this.children || [], this.children.push(e), this.updateChild(e);
        },
        unlinked: function(e) {
            this.children = this.children.filter(function(i) {
                return i !== e;
            });
        }
    },
    props: {
        value: {
            type: null,
            observer: "updateChildren"
        },
        disabled: {
            type: Boolean,
            observer: "updateChildren"
        }
    },
    methods: {
        updateChildren: function() {
            var e = this;
            (this.children || []).forEach(function(i) {
                return e.updateChild(i);
            });
        },
        updateChild: function(e) {
            var i = this.data, t = i.value, n = i.disabled;
            e.setData({
                value: t,
                disabled: n || e.data.disabled
            });
        }
    }
});