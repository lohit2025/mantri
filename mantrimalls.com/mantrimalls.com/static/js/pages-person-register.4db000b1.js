(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-person-register"], {
        "39b1": function(e, t, i) {
            "use strict";
            i.r(t);
            var n = i("ceff"),
                a = i("bb5c");
            for (var s in a) "default" !== s && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(s);
            i("7088");
            var o, c = i("f0c5"),
                u = Object(c["a"])(a["default"], n["b"], n["c"], !1, null, "79806f7c", null, !1, n["a"], o);
            t["default"] = u.exports
        },
        "5e0c": function(e, t, i) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = {
                    data: function() {
                        return {
                            checkbox: [{
                                value: "A",
                                checked: !0
                            }, {
                                value: "B",
                                checked: !0
                            }, {
                                value: "C",
                                checked: !1
                            }],
                            sendTime: "OTP",
                            count: 60,
                            code: "",
                            mobile: "",
                            password: "",
                            recommendation: "",
                            sending: !1,
                            isFirstInput: !0,
                            otpDisabled: !1,
                            PageCur: "",
                            menubg: "./static/tabbar/menubg.png",
                            Registerbtn: !1
                        }
                    },
                    onShow: function() {},
                    onLoad: function(t) {
                        this.tabWin = this.$queue.getData("isLogin") || !1, t.r_code ? (e("log", "=====rCode=====", t.r_code, " at pages/person/register.vue:146"), this.recommendation = t.r_code, this["recommendation"] = this.recommendation, this.$queue.setData("recommendation", this.recommendation)) : this.$queue.getData("recommendation") && (this.recommendation = this.$queue.getData("recommendation"), this["recommendation"] = this.recommendation, this.$queue.setData("recommendation", this.recommendation))
                    },
                    methods: {
                        NavChange: function(e) {
                            this.PageCur = e.currentTarget.dataset.cur, this.$queue.setData("currentPage", this.PageCur), uni.navigateTo({
                                url: "/pages/main?PageCur=" + this.PageCur
                            })
                        },
                        countDown: function() {
                            var e = this.count;
                            1 === e ? (this.count = 60, this.sending = !1, this.sendTime = "OTP", this.otpDisabled = !1) : (this.count = e - 1, this.sending = !0, this.sendTime = "WAIT " + (e - 1) + "S", setTimeout(this.countDown.bind(this), 1e3))
                        },
                        CheckboxChange: function(e) {
                            this.checkbox[0].checked = !this.checkbox[0].checked
                        },
                        clickPrivacy: function() {
                            e("log", "===========clicl privacy======", " at pages/person/register.vue:200"), this.$queue.enterPage("/pages/person/register", "/pages/person/privacy")
                        },
                        sendMsg: function() {
                            var t = this,
                                i = this.mobile;
                            e("log", "===========sendMsg======", i, " at pages/person/register.vue:213"), i && this.$util.isAccount(i) ? (this.otpDisabled = !0, this.$queue.showLoading("senging code..."), this.$Request.postT("/smsserver/getCode?mobile=" + encodeURIComponent(i)).then((function(i) {
                                t.countDown(), uni.hideLoading(), e("log", "==========res====", JSON.stringify(i), " at pages/person/register.vue:227"), 1 === i.res ? (t.sending = !0, t.$queue.showToast("code had received")) : uni.showModal({
                                    showCancel: !1,
                                    title: "code send fail",
                                    content: i.msg ? i.msg : "Please wait one minute"
                                })
                            }))) : this.$queue.showToast("Please check mobile number")
                        },
                        toLogin: function() {
                            var t = this,
                                i = this.code,
                                n = this.password,
                                a = this.mobile,
                                s = this.recommendation;
                            a ? i ? n ? s ? this.checkbox[0].checked ? (e("log", "===========toLogin======code=", i, " at pages/person/register.vue:278"), e("log", "===========toLogin======password=", n, " at pages/person/register.vue:279"), this.Registerbtn = !0, this.$Request.postT("/user/regist?mobile=" + encodeURIComponent(a) + "&code=" + i + "&password=" + this.$md5(n) + "&recommendation=" + s).then((function(i) {
                                e("log", "==========res====", JSON.stringify(i), " at pages/person/register.vue:286"), 1 === i.res ? t.toLogin2() : uni.showModal({
                                    showCancel: !1,
                                    title: "register fail",
                                    content: i.res.resMsg ? i.res.resMsg : "Please wait one minute"
                                }), t.Registerbtn = !1
                            }))) : this.$queue.showToast("Please agree Provacy policy") : this.$queue.showToast("Please input recommendation") : this.$queue.showToast("Please input password") : this.$queue.showToast("Please input verification code") : this.$queue.showToast("Please input mobile number")
                        },
                        toLogin2: function() {
                            var e = this;
                            this.$queue.loginClear();
                            var t = this.mobile,
                                i = this.password;
                            this.$queue.showLoading("Logining...");
                            var n = this.$md5(i);
                            this.$Request.postT("/user/login?mobile=" + encodeURIComponent(t) + "&password=" + n).then((function(i) {
                                1 === i.res ? (uni.hideLoading(), e.$queue.setData("username", i.obj.user), e.$queue.setData("promotoId", i.obj.promotoId), e.$queue.setData("balance", "" + i.obj.balance), e.$queue.setData("mobile", t), uni.$emit("userisLogin", !0), uni.reLaunch({
                                    url: "/pages/main"
                                })) : (uni.hideLoading(), uni.showModal({
                                    showCancel: !1,
                                    title: "login fail",
                                    content: "Mobile number or password wrong"
                                }))
                            }))
                        },
                        inputChange: function(t) {
                            var i = t.currentTarget.dataset.key;
                            this[i] = t.detail.value, e("log", "==========", t.detail.value, " at pages/person/register.vue:341")
                        },
                        inputFocus: function(e) {
                            this.isFirstInput && (this.isFirstInput = !1, this.mobile = "+91")
                        }
                    }
                };
                t.default = i
            }).call(this, i("0de9")["log"])
        },
        7088: function(e, t, i) {
            "use strict";
            var n = i("bc00"),
                a = i.n(n);
            a.a
        },
        "7b01": function(e, t, i) {
            var n = i("24fb");
            t = n(!1), t.push([e.i, ".cb-title[data-v-79806f7c]{padding-left:inherit;position:absolute}.cb-title2[data-v-79806f7c]{\r\n\t/* padding: inherit; */\r\n\t/* position: absolute; */color:#09f}.btn-login[data-v-79806f7c]{width:%?400?%}", ""]), e.exports = t
        },
        bb5c: function(e, t, i) {
            "use strict";
            i.r(t);
            var n = i("5e0c"),
                a = i.n(n);
            for (var s in n) "default" !== s && function(e) {
                i.d(t, e, (function() {
                    return n[e]
                }))
            }(s);
            t["default"] = a.a
        },
        bc00: function(e, t, i) {
            var n = i("7b01");
            "string" === typeof n && (n = [
                [e.i, n, ""]
            ]), n.locals && (e.exports = n.locals);
            var a = i("4f06").default;
            a("7e3c83c2", n, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        ceff: function(e, t, i) {
            "use strict";
            var n;
            i.d(t, "b", (function() {
                return a
            })), i.d(t, "c", (function() {
                return s
            })), i.d(t, "a", (function() {
                return n
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("v-uni-view", [i("cu-custom", {
                        attrs: {
                            bgColor: "bg-blue",
                            isBack: !0
                        }
                    }, [i("template", {
                        attrs: {
                            slot: "backText"
                        },
                        slot: "backText"
                    }, [e._v("Register")])], 2), i("v-uni-view", {
                        staticClass: "input-content"
                    }, [i("v-uni-view", {
                        staticClass: "cu-form-group",
                        staticStyle: {
                            border: "1px solid whitesmoke",
                            "margin-bottom": "20px",
                            "border-radius": "30px"
                        }
                    }, [i("v-uni-view", {
                        staticClass: "mobile lg",
                        class: "cuIcon-mobilefill"
                    }), i("v-uni-input", {
                        attrs: {
                            type: "any",
                            value: e.mobile,
                            placeholder: "Mobile Numer",
                            "data-key": "mobile"
                        },
                        on: {
                            input: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.inputChange.apply(void 0, arguments)
                            },
                            confirm: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.sendMsg.apply(void 0, arguments)
                            },
                            focus: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.inputFocus.apply(void 0, arguments)
                            }
                        }
                    })], 1), i("v-uni-view", {
                        staticClass: "cu-form-group",
                        staticStyle: {
                            border: "1px solid whitesmoke",
                            "margin-bottom": "20px",
                            "border-radius": "30px"
                        }
                    }, [i("v-uni-text", {
                        staticClass: "password lg",
                        class: "cuIcon-commentfill"
                    }), i("v-uni-input", {
                        attrs: {
                            type: "number",
                            value: e.code,
                            placeholder: "Verification Code",
                            "data-key": "code"
                        },
                        on: {
                            input: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.inputChange.apply(void 0, arguments)
                            },
                            confirm: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.toLogin.apply(void 0, arguments)
                            }
                        }
                    }), i("v-uni-button", {
                        staticClass: "cu-btn shadow",
                        class: 0 == e.otpDisabled ? "bg-blue" : "bg-gray",
                        attrs: {
                            disabled: e.otpDisabled
                        },
                        on: {
                            click: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.sendMsg.apply(void 0, arguments)
                            }
                        }
                    }, [e._v(e._s(e.sendTime))])], 1), i("v-uni-view", {
                        staticClass: "cu-form-group",
                        staticStyle: {
                            border: "1px solid whitesmoke",
                            "margin-bottom": "20px",
                            "border-radius": "30px"
                        }
                    }, [i("v-uni-text", {
                        staticClass: "password lg",
                        class: "cuIcon-command"
                    }), i("v-uni-input", {
                        attrs: {
                            type: "password",
                            value: e.password,
                            placeholder: "Password",
                            "placeholder-class": "input-empty",
                            maxlength: "20",
                            minlength: "6",
                            "data-key": "password"
                        },
                        on: {
                            input: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.inputChange.apply(void 0, arguments)
                            },
                            confirm: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.toLogin.apply(void 0, arguments)
                            }
                        }
                    })], 1), i("v-uni-view", {
                        staticClass: "cu-form-group",
                        staticStyle: {
                            border: "1px solid whitesmoke",
                            "margin-bottom": "20px",
                            "border-radius": "30px"
                        }
                    }, [i("v-uni-text", {
                        staticClass: "password lg",
                        class: "cuIcon-goods"
                    }), i("v-uni-input", {
                        attrs: {
                            type: "number",
                            value: e.recommendation,
                            placeholder: "Recommendation Code",
                            "placeholder-class": "input-empty",
                            "data-key": "recommendation"
                        },
                        on: {
                            input: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.inputChange.apply(void 0, arguments)
                            },
                            confirm: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.toLogin.apply(void 0, arguments)
                            }
                        }
                    })], 1)], 1), i("v-uni-checkbox-group", {
                        staticClass: "block",
                        on: {
                            change: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.CheckboxChange.apply(void 0, arguments)
                            }
                        }
                    }, [i("v-uni-view", {
                        staticClass: "cu-form-group margin-top"
                    }, [i("v-uni-checkbox", {
                        class: e.checkbox[0].checked ? "checked" : "",
                        attrs: {
                            checked: !!e.checkbox[0].checked,
                            value: "A"
                        }
                    }), i("v-uni-view", {
                        staticClass: "cb-title margin-left"
                    }, [e._v("|agree"), i("v-uni-text", {
                        staticClass: "cb-title2 margin-left",
                        on: {
                            click: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.clickPrivacy.apply(void 0, arguments)
                            }
                        }
                    }, [e._v("PRIVACY POLICY")])], 1)], 1)], 1), i("v-uni-button", {
                        staticClass: "btn-login bg-blue margin-tb-sm lg",
                        attrs: {
                            disabled: e.Registerbtn
                        },
                        on: {
                            click: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.toLogin.apply(void 0, arguments)
                            }
                        }
                    }, [e._v("Register")]), i("v-uni-view", {
                        staticClass: "cu-bar tabbar bg-white shadow foot",
                        style: "background-image:url(" + e.menubg + ") ;"
                    }, [i("v-uni-view", {
                        staticClass: "action",
                        attrs: {
                            "data-cur": "basics"
                        },
                        on: {
                            click: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.NavChange.apply(void 0, arguments)
                            }
                        }
                    }, [i("v-uni-view", {
                        staticClass: "cuIcon-cu-image"
                    }, [i("v-uni-image", {
                        attrs: {
                            src: "/static/tabbar/basics" + ["basics" == e.PageCur ? "_cur" : ""] + ".png"
                        }
                    })], 1), i("v-uni-view", {
                        class: "basics" == e.PageCur ? "text-blue" : "text-gray"
                    }, [e._v("Home")])], 1), i("v-uni-view", {
                        staticClass: "action",
                        attrs: {
                            "data-cur": "component"
                        },
                        on: {
                            click: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.NavChange.apply(void 0, arguments)
                            }
                        }
                    }, [i("v-uni-view", {
                        staticClass: "cuIcon-cu-image"
                    }, [i("v-uni-image", {
                        attrs: {
                            src: "/static/tabbar/component" + ["component" == e.PageCur ? "_cur" : ""] + ".png"
                        }
                    })], 1), i("v-uni-view", {
                        class: "component" == e.PageCur ? "text-blue" : "text-gray"
                    }, [e._v("Games")])], 1), e.tabWin ? i("v-uni-view", {
                        staticClass: "action",
                        attrs: {
                            "data-cur": "plugin"
                        },
                        on: {
                            click: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.NavChange.apply(void 0, arguments)
                            }
                        }
                    }, [i("v-uni-view", {
                        staticClass: "cuIcon-cu-image"
                    }, [i("v-uni-image", {
                        attrs: {
                            src: "/static/tabbar/plugin" + ["plugin" == e.PageCur ? "_cur" : ""] + ".png"
                        }
                    })], 1), i("v-uni-view", {
                        class: "plugin" == e.PageCur ? "text-blue" : "text-gray"
                    }, [e._v("Win")])], 1) : e._e(), i("v-uni-view", {
                        staticClass: "action",
                        attrs: {
                            "data-cur": "personcenter"
                        },
                        on: {
                            click: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.NavChange.apply(void 0, arguments)
                            }
                        }
                    }, [i("v-uni-view", {
                        staticClass: "cuIcon-cu-image"
                    }, [i("v-uni-image", {
                        attrs: {
                            src: "/static/tabbar/personcenter" + ["personcenter" == e.PageCur ? "_cur" : ""] + ".png"
                        }
                    })], 1), i("v-uni-view", {
                        class: "personcenter" == e.PageCur ? "text-blue" : "text-gray"
                    }, [e._v("My")])], 1)], 1)], 1)
                },
                s = []
        }
    }
]);