Component({
    properties: {
        title: {
            type: String,
            value: ""
        },
        withoutPadding: {
            type: Boolean
        }
    },
    methods: {
        start: function() {
            var t = this, e = 0;
            this.timer = setInterval(function() {
                e += 1, t.setData({
                    second: e
                });
            }, 1e3);
        },
        end: function() {
            var t = this;
            this.endInt(), this.data.second && this.data.second > 5 && wx.login({
                complete: function(e) {
                    e.code && t.setData({
                        code: e.code
                    });
                }
            });
        },
        endInt: function() {
            clearInterval(this.timer);
        },
        clipboar: function() {
            wx.setClipboardData({
                data: this.data.code
            });
        }
    }
});