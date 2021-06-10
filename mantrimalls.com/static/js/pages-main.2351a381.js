(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-main"], {
        2564: function(e, t, n) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = {
                    data: function() {
                        return {
                            PageCur: "basics",
                            tabWin: !1,
                            isLogin: !1,
                            handlePayTimer: null
                        }
                    },
                    onLoad: function(e) {
                        var t = this;
                        this.isLogin = t.$queue.getData("isLogin") || !1, this.tabWin = t.$queue.getData("isLogin") || !1, this.PageCur = t.$queue.getData("currentPage") || "basics", uni.$on("userisLogin", (function(e) {
                            t.tabWin = e, t.isLogin = e, t.$queue.setData("isLogin", e), 0 == e && (t.PageCur = "personcenter", t.$queue.setData("currentPage", t.PageCur), this.globalTimer(!1), this.$queue.loginClear())
                        })), this.isLogin && this.refreshUserInfo()
                    },
                    methods: {
                        NavChange: function(e) {
                            this.PageCur = e.currentTarget.dataset.cur, this.$queue.setData("currentPage", this.PageCur), this.isLogin && this.refreshUserInfo()
                        },
                        postOrderList: function() {
                            var t = this;
                            this.$Request.postT("/cash/findRechargeList?pageNum=1&pageSize=10").then((function(n) {
                                e("log", "===postOrderList==res:", JSON.stringify(n), " at pages/main.vue:93");
                                var a = n.obj;
                                if (1 === n.res) {
                                    if (!a.results) return void t.globalTimer(!1);
                                    for (var i = 0; i < a.results.length; i++)
                                        if (0 == a.results[i].orderStatus) return void t.globalTimer(!0);
                                    t.globalTimer(!1)
                                } else 401 === n.res ? uni.$emit("userisLogin", !1) : uni.showModal({
                                    title: "",
                                    content: "加载异常",
                                    showCancel: !1,
                                    cancelText: "",
                                    confirmText: "CLOSE"
                                })
                            }))
                        },
                        refreshUserInfo: function() {
                            var t = this;
                            this.$Request.postT("/user/findUserInfo").then((function(n) {
                                e("log", "===findUserInfo==res:", JSON.stringify(n), " at pages/main.vue:125");
                                var a = n.obj;
                                1 === n.res && (t.$queue.setData("balance", a.money), uni.$emit("refreshUserInfo", a))
                            }))
                        }
                    }
                };
                t.default = n
            }).call(this, n("0de9")["log"])
        },
        5352: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "b", (function() {
                return i
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "a", (function() {
                return a
            }));
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("v-uni-view", ["personcenter" == e.PageCur && 0 == e.isLogin ? n("login") : e._e(), "basics" == e.PageCur ? n("basics") : e._e(), "component" == e.PageCur ? n("components") : e._e(), "plugin" == e.PageCur ? n("plugin") : e._e(), "personcenter" == e.PageCur && 1 == e.isLogin ? n("personcenter") : e._e(), n("v-uni-view", {
                        staticClass: "cu-bar tabbar bg-white shadow foot"
                    }, [n("v-uni-view", {
                        staticClass: "action",
                        attrs: {
                            "data-cur": "basics"
                        },
                        on: {
                            click: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.NavChange.apply(void 0, arguments)
                            }
                        }
                    }, [n("v-uni-view", {
                        staticClass: "cuIcon-cu-image"
                    }, [n("v-uni-image", {
                        attrs: {
                            src: "/static/tabbar/basics" + ["basics" == e.PageCur ? "_cur" : ""] + ".png"
                        }
                    })], 1), n("v-uni-view", {
                        class: "basics" == e.PageCur ? "text-blue" : "text-gray"
                    }, [e._v("Home")])], 1), n("v-uni-view", {
                        staticClass: "action",
                        attrs: {
                            "data-cur": "component"
                        },
                        on: {
                            click: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.NavChange.apply(void 0, arguments)
                            }
                        }
                    }, [n("v-uni-view", {
                        staticClass: "cuIcon-cu-image"
                    }, [n("v-uni-image", {
                        attrs: {
                            src: "/static/tabbar/component" + ["component" == e.PageCur ? "_cur" : ""] + ".png"
                        }
                    })], 1), n("v-uni-view", {
                        class: "component" == e.PageCur ? "text-blue" : "text-gray"
                    }, [e._v("Search")])], 1), e.tabWin ? n("v-uni-view", {
                        staticClass: "action",
                        attrs: {
                            "data-cur": "plugin"
                        },
                        on: {
                            click: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.NavChange.apply(void 0, arguments)
                            }
                        }
                    }, [n("v-uni-view", {
                        staticClass: "cuIcon-cu-image"
                    }, [n("v-uni-image", {
                        attrs: {
                            src: "/static/tabbar/plugin" + ["plugin" == e.PageCur ? "_cur" : ""] + ".png"
                        }
                    })], 1), n("v-uni-view", {
                        class: "plugin" == e.PageCur ? "text-blue" : "text-gray"
                    }, [e._v("Win")])], 1) : e._e(), n("v-uni-view", {
                        staticClass: "action",
                        attrs: {
                            "data-cur": "personcenter"
                        },
                        on: {
                            click: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.NavChange.apply(void 0, arguments)
                            }
                        }
                    }, [n("v-uni-view", {
                        staticClass: "cuIcon-cu-image"
                    }, [n("v-uni-image", {
                        attrs: {
                            src: "/static/tabbar/personcenter" + ["personcenter" == e.PageCur ? "_cur" : ""] + ".png"
                        }
                    })], 1), n("v-uni-view", {
                        class: "personcenter" == e.PageCur ? "text-blue" : "text-gray"
                    }, [e._v("My")])], 1)], 1)], 1)
                },
                s = []
        },
        da0f: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("5352"),
                i = n("df9d");
            for (var s in i) "default" !== s && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }))
            }(s);
            var r, u = n("f0c5"),
                c = Object(u["a"])(i["default"], a["b"], a["c"], !1, null, "5270527f", null, !1, a["a"], r);
            t["default"] = c.exports
        },
        df9d: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("2564"),
                i = n.n(a);
            for (var s in a) "default" !== s && function(e) {
                n.d(t, e, (function() {
                    return a[e]
                }))
            }(s);
            t["default"] = i.a
        }
    }
]);