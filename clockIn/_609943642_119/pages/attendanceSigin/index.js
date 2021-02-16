function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("vant-weapp/toast/toast")), e = t(require("../../utils/we-moment-with-locales")), i = getApp();

Page({
    data: {
        actions: [],
        time: (0, e.default)(new Date()).format("YYYY.MM.DD"),
        dayTxt: [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ],
        date: (0, e.default)(new Date()).format("HH:mm")
    },
    onLoad: function(t) {
        console.log(i);
        var a = [], s = {};
        i.globalData.self && i.globalData.self.admins && i.globalData.self.admins.in_groups && i.globalData.self.admins.in_groups.map(function(t) {
            1 != t.type && a.push({
                id: t.id,
                name: t.name
            });
        }), a.length > 0 && (s = a[0]), this.setData({
            self: i.globalData.self,
            day: (0, e.default)().days(),
            actions: a,
            active: s
        }), this.getlog();
    },
    onShow: function() {
        var t = this;
        this.timer = setInterval(function() {
            t.setData({
                second: (0, e.default)(new Date()).format("HH:mm:ss")
            });
        }, 999);
    },
    getlog: function() {
        var t = {
            start: (0, e.default)().subtract(3, "days").format("YYYY-MM-DD HH:mm:ss")
        }, s = this;
        i.services("api/app/community/checkpoint/attendance").get(t).then(function(t) {
            if (t && t.data.Success) {
                t.data.Result.Data.map(function(t) {
                    t.on && (t.on.timeTxt = (0, e.default)(t.on.time).format("MM/DD HH:mm")), t.off && (t.off.timeTxt = (0, 
                    e.default)(t.off.time).format("MM/DD HH:mm"));
                }), s.setData({
                    list: t.data.Result.Data
                });
            } else a.default.fail(t.data.Error);
        });
    },
    setlog: function() {
        var t = this, e = this.data, s = e.list, o = e.active, n = {
            groupid: o.id
        };
        if (o.id) {
            s.length > 0 && !s[0].off && (n.id = s[0].id);
            a.default.loading({
                duration: 0,
                forbidClick: !0,
                message: "打卡中",
                loadingType: "spinner"
            }), i.services("api/app/community/checkpoint/attendance").post(n).then(function(e) {
                e && e.data.Success ? ((0, a.default)("打卡成功！！"), t.getlog()) : a.default.fail(e.data.Error);
            });
        } else (0, a.default)("暂无可执勤点,不可打卡！");
    },
    toggleSheet: function() {
        this.setData({
            sheetshow: !this.data.sheetshow
        });
    },
    onSelect: function(t) {
        console.log(t), this.setData({
            active: t.detail
        });
    }
});