function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

t(require("../../utils/we-moment-with-locales")), t(require("../../utils/common"));

var e = require("qs");

getApp();

Component({
    properties: {
        icon: String,
        steps: {
            type: Array,
            value: [],
            observer: function(t, e) {}
        },
        show: {
            type: Boolean,
            observer: function(t, e) {
                this.getTask();
            }
        },
        active: Number,
        direction: {
            type: String,
            value: "vertical"
        }
    },
    watch: {
        steps: "formatSteps",
        active: "formatSteps"
    },
    created: function() {
        this.formatSteps();
    },
    data: {},
    ready: function() {
        getApp().services() && this.getTask();
    },
    methods: {
        formatSteps: function() {
            var t = this, e = this.data.steps;
            e.forEach(function(e, s) {
                e.status2 = t.getStatus(s);
            }), this.setData({
                steps: e
            });
        },
        getStatus: function(t) {
            return t <= this.data.active ? "finish" : "";
        },
        gourl: function(t) {
            wx.navigateTo({
                url: t.currentTarget.dataset.url
            });
        },
        getTask: function() {
            var t = this, s = this.data.stepDate;
            s = [], getApp().services("api/app/community/pass/task").get().then(function(a) {
                wx.stopPullDownRefresh(), a && a.data.Success && (a.data.Result.map(function(t) {
                    var a = {
                        task: t.pass,
                        title: t.title,
                        subtitle: t.desc
                    };
                    if (t.btns && t.btns.length > 0) {
                        t.btns[0].param;
                        switch (t.btns[0].router) {
                          case "/shangbao":
                            t.btns[0].router = "/pages/healthLineAdd/index", t.btns[0].param = {
                                id: getApp().globalData.self.id
                            };
                            break;

                          case "/dengji":
                            t.btns[0].router = "/pages/itineraryAdd/index", t.btns[0].param = {
                                uid: getApp().globalData.self.id
                            };
                            break;

                          case "/household/select":
                            t.btns[0].router = "/pages/householdAddUser/index", t.btns[0].param = t.btns[0].param || {}, 
                            t.btns[0].param.reset = "true";
                        }
                        a.url = t.btns[0].router + "?" + (0, e.stringify)(t.btns[0].param), a.btnName = t.btns[0].name;
                    }
                    s.push(a);
                }), t.setData({
                    steps: s,
                    tasks: a.data.Result
                }));
            });
        }
    }
});