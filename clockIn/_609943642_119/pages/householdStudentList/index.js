function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../utils/we-moment-with-locales")), e = t(require("vant-weapp/toast/toast")), s = (t(require("vant-weapp/dialog/dialog")), 
getApp()), n = null;

Page({
    data: {
        colorType: {
            1: "红色",
            2: "黄色",
            3: "绿色"
        }
    },
    onLoad: function(t) {
        console.log(t), n = t.id, this.setData({
            university: !!t.university && t.university
        }), this.getmembers();
    },
    onChange: function(t) {
        this.setData({
            activeNames: t.detail
        });
    },
    onPageScroll: function(t) {
        this.setData({
            scrollTop: t.scrollTop
        });
    },
    getmembers: function() {
        var t = this;
        s.services("api/app/community/household/details").get({
            id: n,
            include_health_code: !0,
            include_pass_stat: !0
        }).then(function(s) {
            if (s && s.data.Success) {
                var n = s.data.Result.members ? s.data.Result.members : [], u = s.data.Result;
                u.data.person_bound_count = 0, u.data.person_unbound_count = 0, u.data.person_back_count = 0, 
                n.map(function(t) {
                    t.user ? u.data.person_bound_count += 1 : u.data.person_unbound_count += 1, t.pass_stat && (u.data.person_back_count += 1, 
                    t.pass_stat.first_timeTxt = (0, a.default)(t.pass_stat.first_time).format("MM-DD HH:mm"), 
                    t.pass_stat.last_timeTxt = (0, a.default)(t.pass_stat.last_time).format("MM-DD HH:mm"));
                });
                var r = n.sort(function(t, a) {
                    return Number(t.student_id) - Number(a.student_id);
                });
                t.setData({
                    house: s.data.Result,
                    members: r,
                    sorucedata: r
                });
            } else s.data.Error ? e.default.fail(s.data.Error) : e.default.fail("服务器繁忙，请稍后重试");
        });
    },
    bindFiltertap: function(t) {
        var a = t.currentTarget.dataset.type, s = this.data.sorucedata, n = [];
        e.default.loading({
            duration: 0,
            message: "加载中.",
            loadingType: "spinner"
        }), "all" == a && (n = s), "pass" == a && (n = s.filter(function(t) {
            return t.pass_stat;
        })), "uid_true" == a && (n = s.filter(function(t) {
            return t.uid;
        })), "uid_false" == a && (n = s.filter(function(t) {
            return !t.pass_stat;
        })), this.setData({
            members: n
        }, function() {
            e.default.clear();
        });
    }
});