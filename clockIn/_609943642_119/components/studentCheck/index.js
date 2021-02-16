Component({
    properties: {
        show: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    methods: {
        click: function() {
            this.setData({
                show: !1
            }), this.triggerEvent("change", {});
        },
        close: function() {
            this.setData({
                show: !1
            }), this.triggerEvent("close", {});
        },
        onClose: function() {
            this.setData({
                show: !1
            });
        }
    }
});