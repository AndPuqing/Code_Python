function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
}, a = (e(require("../../utils/we-moment-with-locales")), e(require("vant-weapp/toast/toast"))), n = e(require("vant-weapp/dialog/dialog")), r = (e(require("../../utils/config")), 
getApp());

Page({
    data: {
        zjzldm: [ {
            name: "身份证",
            type: 1
        }, {
            name: "护照",
            type: 2
        }, {
            name: "台湾回乡证",
            type: 3
        }, {
            name: "台湾居民来往内地通行证",
            type: 4
        }, {
            name: "台湾居民居住证",
            type: 5
        }, {
            name: "港澳当地政府颁发的身份证号码",
            type: 6
        }, {
            name: "港澳居民来往内地通行证（回乡证，大陆政府颁发）",
            type: 7
        }, {
            name: "港澳居民居住证（大陆政府颁发）",
            type: 8
        } ],
        gx: [ {
            name: "其他关系",
            type: 0
        }, {
            name: "父子（女）关系",
            type: 1
        }, {
            name: "母子（女）关系",
            type: 2
        }, {
            name: "祖孙关系",
            type: 3
        }, {
            name: "夫妻关系",
            type: 4
        }, {
            name: "师生关系",
            type: 5
        }, {
            name: "同事关系",
            type: 6
        }, {
            name: "朋友关系",
            type: 7
        } ]
    },
    onLoad: function(e) {},
    onShow: function() {
        this.getMembers();
    },
    getMembers: function() {
        var e = this, a = {};
        r.globalData.self && (a = {
            uid: r.globalData.self.id
        }), getApp().services("api/app/community/healthcode/member").get(a).then(function(a) {
            if (a && a.data.Success) {
                var n = [];
                a.data.Result.Data.map(function(e) {
                    var a = t({
                        uid: e.id
                    }, e.person, {
                        jkmid: e.code.jkmid
                    });
                    a.bcid = a.cid.replace(/^(.{3})(?:\d+)(.{4})$/, "$1********$2"), n.push(a);
                }), e.setData({
                    members: n
                });
            }
        });
    },
    addMember: function() {
        wx.navigateTo({
            url: "/pages/healthCodeMembersAdd/index"
        });
    },
    goAddHealth: function(e) {
        wx.navigateTo({
            url: "/pages/healthCodeMembersAdd/index?uid=" + e.currentTarget.dataset.id
        });
    },
    deleteMember: function(e) {
        var t = this, i = e.currentTarget.dataset.item;
        n.default.alert({
            title: "提示",
            message: "删除成员信息将不可恢复，您确定删除该成员吗？",
            showCancelButton: !0
        }).then(function(e) {
            r.services("api/app/community/healthcode/member/unbind").get({
                jkmid: i.jkmid
            }).then(function(e) {
                e && e.data.Success ? (a.default.success("删除成功"), t.getMembers()) : e.data.Error ? (0, 
                a.default)(e.data.Error) : (0, a.default)("服务器繁忙，请稍后重试！");
            });
        });
    }
});