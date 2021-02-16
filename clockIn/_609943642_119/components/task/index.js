Component({
    properties: {
        steps: {
            type: Array,
            value: [],
            observer: function(t, e) {
                this.formatSteps(), console.log(t);
            }
        },
        active: Number
    },
    data: {},
    methods: {
        formatSteps: function() {
            var t = -1;
            this.data.steps.forEach(function(e, a) {
                e.task || -1 != t || (t = a);
            }), this.setData({
                active: t
            });
        },
        gourl: function(t) {
            wx.navigateTo({
                url: t.currentTarget.dataset.url
            });
        }
    }
});