(window.webpackJsonp = window.webpackJsonp || []).push([
    [2],
    {
        543: function (e, t, n) {
            "use strict";
            n.r(t);
            var i = n(552),
                a = n(548);
            for (var s in a)
                ["default"].indexOf(s) < 0 &&
                    (function (e) {
                        n.d(t, e, function () {
                            return a[e];
                        });
                    })(s);
            var o = n(188),
                r = Object(o.a)(a.default, i.a, i.b, !1, null, null, null);
            (r.options.__file = "src/main/home/home.vue"), (t.default = r.exports);
        },
        545: function (e, t) {},
        547: function (e, t, n) {
            var i = { "./zh-cn": 542, "./zh-cn.js": 542 };
            function a(e) {
                var t = s(e);
                return n(t);
            }
            function s(e) {
                if (!n.o(i, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw ((t.code = "MODULE_NOT_FOUND"), t);
                }
                return i[e];
            }
            (a.keys = function () {
                return Object.keys(i);
            }),
                (a.resolve = s),
                (e.exports = a),
                (a.id = 547);
        },
        548: function (e, t, n) {
            "use strict";
            n.r(t);
            var i = n(549),
                a = n.n(i);
            for (var s in i)
                ["default"].indexOf(s) < 0 &&
                    (function (e) {
                        n.d(t, e, function () {
                            return i[e];
                        });
                    })(s);
            t.default = a.a;
        },
        549: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(128),
                a = c(n(544)),
                s = c(n(540)),
                o = c(n(541)),
                r = c(n(550));
            function c(e) {
                return e && e.__esModule ? e : { default: e };
            }
            function l(e) {
                return function () {
                    var t = e.apply(this, arguments);
                    return new Promise(function (e, n) {
                        return (function i(a, s) {
                            try {
                                var o = t[a](s),
                                    r = o.value;
                            } catch (e) {
                                return void n(e);
                            }
                            if (!o.done)
                                return Promise.resolve(r).then(
                                    function (e) {
                                        i("next", e);
                                    },
                                    function (e) {
                                        i("throw", e);
                                    }
                                );
                            e(r);
                        })("next");
                    });
                };
            }
            n(551);
            var u = ["switch_task.mp3", "switch_type.mp3", "close_win.mp3", "open_win.mp3"];
            t.default = {
                name: "home",
                data: function () {
                    return {
                        hasClicked: !1,
                        list: [{ list: [] }],
                        type_list: [],
                        curType: 0,
                        curAnn: -1,
                        curLink: -1,
                        activeAnn: 0,
                        tabHeight: 0,
                        btnExchange: !1,
                        direcType: 0,
                        timeLock: !1,
                        count: 0,
                        step: 0,
                        timer: null,
                        hasGamepad: !1,
                        padType: 0,
                        focusMenu: !0,
                        preScrollTop: 0,
                        preStep: 50,
                        preY: 0,
                        seat: 1,
                        scrollBuffer: 0,
                        allowScroll: { up: !1, down: !0 },
                        isPre: "preview" === i.environment,
                        isTest: "test" === i.environment,
                        isAndroid: !1,
                        isIOS: !1,
                        isPc: !1,
                        isPs: !1,
                        lang: "zh-cn",
                        iframe: this.renderIframe(),
                        linkMap: [],
                        deviceType: "mobile",
                        startMove: !1,
                        soundBuf: new Array(u.length),
                        ready: !1,
                        showBanner: !1,
                        bannerLoaded: !1,
                    };
                },
                computed: {
                    annList: function () {
                        return this.list.length ? this.list[this.curType].list : [];
                    },
                    annDetail: function () {
                        return this.annList[this.activeAnn];
                    },
                    typeDetail: function () {
                        return this.type_list[this.curType];
                    },
                    langString: function () {
                        return this.lang.includes("ja") ? "Ja" : "";
                    },
                },
                created: function () {
                    var e = this;
                    this.bindEvents(), (this.deviceType = a.default.getDeviceType());
                    var t = s.default.parse(window.location.search),
                        n = t.lang,
                        c = t.platform;
                    (this.lang = (n instanceof Array ? n[0] : n || "zh-cn").toLowerCase()),
                        (this.isAndroid = c && "android" === c.toLowerCase()),
                        (this.isIOS = c && /ios|mac/i.test(c.toLowerCase())),
                        (this.isPc = c && "pc" === c.toLowerCase()),
                        (this.isPs = c && c.toLowerCase().includes("ps")),
                        this.isPre && (document.title = this.lang),
                        this.isIOS || this.isAndroid
                            ? this.setVolume()
                            : miHoYoGameJSSDK.listenApiReady(this.setVolume),
                        o.default
                            .fetchAudio(
                                Object.assign(
                                    { audioList: u, apiBase: i.webBase },
                                    this.isIOS ? { platform: "ios" } : {}
                                )
                            )
                            .then(function (t) {
                                (e.soundBuf = t), console.log(e.soundBuf);
                            })
                            .catch(function (e) {
                                console.error(e.message);
                            }),
                        r.default
                            .getList({ data: t })
                            .then(function (t) {
                                (e.list = t.list),
                                    (e.type_list = t.type_list),
                                    (e.curType = t.curType),
                                    (e.activeAnn = t.activeAnn),
                                    e.updateRedPoint(e.checkRedPoint(), e.checkExtraRedPoint()),
                                    e.handleRedPoint(),
                                    t.alert &&
                                        (e.handleAlert(),
                                        e.$nextTick(function () {
                                            var t = document.querySelector(".home__menu");
                                            if (t) {
                                                e.getSildeHeight();
                                                var n = Math.floor(e.tabHeight * (e.activeAnn - 0.14)),
                                                    i = t.scrollTop;
                                                e.hasGamepad && (e.curAnn = e.activeAnn), e.smoothDown(i, n, 10, t);
                                            }
                                        })),
                                    (e.ready = !0),
                                    e.preloadBanner(t.bannerArr);
                            })
                            .catch(function (t) {
                                console.error(t.message), (e.ready = !0);
                            });
                },
                mounted: function () {
                    this.handleMounted(),
                        this.getSildeHeight(),
                        "development" === i.environment && this.bindGamepadEvents();
                },
                beforeDestroy: function () {
                    clearTimeout(this.timer),
                        (this.timer = null),
                        o.default.destroyVar(),
                        miHoYoGameJSSDK.clear("jssdk_close"),
                        miHoYoGameJSSDK.clear("jssdk_load_url");
                },
                methods: {
                    render: function () {},
                    bindEvents: function () {
                        var e = this;
                        miHoYoGameJSSDK.on("enable_joypad_control", function (t) {
                            var n = t.data;
                            if (n instanceof Object) {
                                var i = n.num,
                                    a = n.type,
                                    s = n.exchange;
                                i
                                    ? ((e.padType = a), (e.btnExchange = s && 1 === s), e.bindGamepadEvents())
                                    : e.removeGamepadEvents();
                            } else 1 === n ? e.bindGamepadEvents() : 0 === n && e.removeGamepadEvents();
                        }),
                            miHoYoGameJSSDK.on("jssdk_close", this.removeGamepadEvents),
                            miHoYoGameJSSDK.on("jssdk_load_url", this.removeGamepadEvents);
                    },
                    bindGamepadEvents: function () {
                        var e = this;
                        return l(
                            regeneratorRuntime.mark(function t() {
                                return regeneratorRuntime.wrap(
                                    function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        (e.hasGamepad = !0),
                                                        e.$gamepad.off([
                                                            "connect",
                                                            "disconnect",
                                                            "press",
                                                            "release",
                                                            "hold",
                                                        ]),
                                                        (t.next = 4),
                                                        e.$nextTick()
                                                    );
                                                case 4:
                                                    e.$gamepad.on("connect", function (t) {
                                                        var n = t.index;
                                                        "standard" === t.mapping
                                                            ? e.$gamepad.setCustomMapping(
                                                                  "gamepad",
                                                                  {
                                                                      button_1: e.btnExchange ? 1 : 0,
                                                                      button_2: e.btnExchange ? 0 : 1,
                                                                  },
                                                                  n
                                                              )
                                                            : e.$gamepad.setCustomMapping(
                                                                  "gamepad",
                                                                  {
                                                                      button_1: e.btnExchange ? 2 : 1,
                                                                      button_2: e.btnExchange ? 1 : 2,
                                                                      button_3: 0,
                                                                      button_4: 3,
                                                                  },
                                                                  n
                                                              ),
                                                            (e.hasGamepad = !0),
                                                            (e.curAnn = e.activeAnn),
                                                            (e.focusMenu = !0),
                                                            console.log("controller " + t.index + " connected!");
                                                    }),
                                                        e.$gamepad.on(
                                                            "disconnect",
                                                            (function () {
                                                                var t = l(
                                                                    regeneratorRuntime.mark(function t(n) {
                                                                        return regeneratorRuntime.wrap(
                                                                            function (t) {
                                                                                for (;;)
                                                                                    switch ((t.prev = t.next)) {
                                                                                        case 0:
                                                                                            return (
                                                                                                (t.next = 2),
                                                                                                e.$nextTick()
                                                                                            );
                                                                                        case 2:
                                                                                            (e.hasGamepad =
                                                                                                !!e.$gamepad.num),
                                                                                                (e.focusMenu = !1),
                                                                                                e.resetLinks(),
                                                                                                console.log(
                                                                                                    "controller " +
                                                                                                        n.index +
                                                                                                        " disconnected!"
                                                                                                );
                                                                                        case 6:
                                                                                        case "end":
                                                                                            return t.stop();
                                                                                    }
                                                                            },
                                                                            t,
                                                                            e
                                                                        );
                                                                    })
                                                                );
                                                                return function (e) {
                                                                    return t.apply(this, arguments);
                                                                };
                                                            })()
                                                        ),
                                                        e.$gamepad.on("press", "shoulder_top_left", function () {
                                                            e.curType &&
                                                                (e.playAudio(1),
                                                                e.curType--,
                                                                e.resetStatus(),
                                                                e.handleRead(),
                                                                (e.curAnn = 0));
                                                        }),
                                                        e.$gamepad.on("press", "shoulder_top_right", function () {
                                                            e.curType < e.type_list.length - 1 &&
                                                                (e.playAudio(1),
                                                                e.curType++,
                                                                e.resetStatus(),
                                                                e.handleRead(),
                                                                (e.curAnn = 0));
                                                        }),
                                                        e.$gamepad.on("press", "button_2", function () {
                                                            if (e.focusMenu)
                                                                e.playAudio(0),
                                                                    (e.focusMenu = !1),
                                                                    e.$nextTick(e.getLinkMap);
                                                            else if (e.curLink > -1) {
                                                                var t = e.$refs.ann.querySelector(".active");
                                                                t && t.click && t.click();
                                                            }
                                                        }),
                                                        e.$gamepad.on("press", "button_1", function () {
                                                            e.focusMenu
                                                                ? e.handleClose()
                                                                : ((e.focusMenu = !0),
                                                                  (e.curAnn = e.activeAnn),
                                                                  e.resetLinks(),
                                                                  e.resetArticle());
                                                        }),
                                                        e.$gamepad.on("release", "stick_axis_left", function () {
                                                            (e.count = 0),
                                                                e.focusMenu &&
                                                                    ((e.activeAnn = e.curAnn), e.handleRead());
                                                        }),
                                                        e.$gamepad.on("hold", "stick_axis_left", function (t) {
                                                            var n = t.value[0],
                                                                i = t.value[1];
                                                            if (Math.abs(i).toFixed(2) >= Math.abs(n).toFixed(2))
                                                                if (e.focusMenu) {
                                                                    if (e.timeLock) return;
                                                                    -1 === e.curAnn
                                                                        ? ((e.curAnn = e.activeAnn),
                                                                          e.scrollMenu(e.curAnn - 2))
                                                                        : e.curAnn < e.annList.length - 1 && i > 0
                                                                        ? (e.annList.length > 5 &&
                                                                              1 === e.direcType &&
                                                                              e.curAnn > 2 &&
                                                                              e.scrollMenu(e.curAnn - 2),
                                                                          e.curAnn++,
                                                                          (e.direcType = 1))
                                                                        : e.curAnn > 0 &&
                                                                          i < 0 &&
                                                                          (e.annList.length > 5 &&
                                                                              2 === e.direcType &&
                                                                              e.curAnn < e.annList.length - 3 &&
                                                                              e.scrollMenu(e.curAnn - 2),
                                                                          e.curAnn--,
                                                                          (e.direcType = 2));
                                                                    var a = 400 * Math.pow(0.5, e.count) + 50;
                                                                    (e.timeLock = !0),
                                                                        (e.timer = setTimeout(function () {
                                                                            (e.timeLock = !1), e.count++;
                                                                        }, a));
                                                                } else {
                                                                    var s = e.linkMap.length;
                                                                    if (
                                                                        s > 1 &&
                                                                        e.curLink > -1 &&
                                                                        e.curLink < s - 1 &&
                                                                        e.linkMap[e.curLink].min ===
                                                                            e.linkMap[e.curLink + 1].min
                                                                    )
                                                                        return;
                                                                    if (
                                                                        s > 1 &&
                                                                        e.curLink > 0 &&
                                                                        e.curLink < s &&
                                                                        e.linkMap[e.curLink].max ===
                                                                            e.linkMap[e.curLink - 1].max
                                                                    )
                                                                        return;
                                                                    if (e.timeLock) return;
                                                                    e.allowScroll.down && i > 0
                                                                        ? e.scrollAnn(1)
                                                                        : e.allowScroll.up && i < 0 && e.scrollAnn(2);
                                                                }
                                                        }),
                                                        e.$gamepad.on("press", "stick_axis_left", function (t) {
                                                            var n = t.value[0],
                                                                i = t.value[1];
                                                            if (Math.abs(i).toFixed(2) >= Math.abs(n).toFixed(2)) {
                                                                if (
                                                                    !(
                                                                        e.focusMenu ||
                                                                        (e.allowScroll.up && e.allowScroll.down)
                                                                    )
                                                                ) {
                                                                    var a = e.linkMap.length;
                                                                    a &&
                                                                        (e.curLink < a - 1 && i > 0
                                                                            ? e.switchLink(e.curLink + 1)
                                                                            : e.curLink > 0 &&
                                                                              i < 0 &&
                                                                              e.switchLink(e.curLink - 1));
                                                                }
                                                            } else e.focusMenu && n > 0 ? (e.playAudio(0), (e.focusMenu = !1), e.$nextTick(e.getLinkMap)) : !e.focusMenu && n < 0 && ((e.focusMenu = !0), (e.curAnn = e.activeAnn), e.resetLinks());
                                                        });
                                                case 13:
                                                case "end":
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    e
                                );
                            })
                        )();
                    },
                    removeGamepadEvents: function () {
                        (this.hasGamepad = !1),
                            this.$gamepad.off(["connect", "disconnect", "press", "release", "hold"]);
                    },
                    getSildeHeight: function () {
                        if (!this.tabHeight) {
                            var e = document.documentElement.style.fontSize;
                            e && (this.tabHeight = 0.44 * Number(e.split("px")[0]));
                        }
                    },
                    getTips: function (e) {
                        return o.default.getLocalText({ key: e });
                    },
                    checkRedPoint: function () {
                        return (
                            this.type_list.filter(function (e) {
                                return e.remind_num;
                            }).length > 0
                        );
                    },
                    checkExtraRedPoint: function () {
                        return (
                            this.type_list.filter(function (e) {
                                return e.extra_remind_num;
                            }).length > 0
                        );
                    },
                    setVolume: function () {
                        miHoYoGameJSSDK.getGameVolume().then(function (e) {
                            console.log("volume:" + e), o.default.setGain(e);
                        });
                    },
                    playAudio: function (e) {
                        o.default.playAudio(this.soundBuf[e]);
                    },
                    getLinkMap: function () {
                        this.annList.length &&
                            (this.annDetail.linkMap
                                ? ((this.linkMap = this.annDetail.linkMap), this.initImg())
                                : (this.loadImg(), this.initLinks()));
                    },
                    initImg: function () {
                        var e = document.querySelector(".home__article");
                        if (e) {
                            var t = e.getElementsByTagName("img"),
                                n = t.length;
                            if (n) for (var i = 0; i < n; i++) t[i].setAttribute("draggable", "false");
                        }
                    },
                    preloadBanner: function (e) {
                        var t = this,
                            n = [],
                            i = [],
                            a = e.length;
                        if (a) {
                            for (
                                var s = function (a) {
                                        n[a] = new Promise(function (n) {
                                            (i[a] = new Image()),
                                                (i[a].onload = function () {
                                                    n(i[a]);
                                                }),
                                                (i[a].onerror = function () {
                                                    t.bannerLoaded = !0;
                                                }),
                                                (i[a].src = e[a]);
                                        });
                                    },
                                    o = 0;
                                o < a;
                                o++
                            )
                                s(o);
                            Promise.all(n).then(function () {
                                t.bannerLoaded = !0;
                            });
                        } else this.bannerLoaded = !0;
                    },
                    loadImg: function () {
                        var e = this,
                            t = document.querySelector(".home__article");
                        if (t) {
                            var n = t.getElementsByTagName("img"),
                                i = [],
                                a = [],
                                s = n.length;
                            if (s)
                                for (
                                    var o = function (t) {
                                            n[t].setAttribute("draggable", "false"),
                                                (i[t] = new Promise(function (i) {
                                                    (a[t] = new Image()),
                                                        (a[t].onload = function () {
                                                            e.initLinks(), i(a[t]);
                                                        }),
                                                        (a[t].onerror = function () {
                                                            e.initLinks();
                                                        }),
                                                        (a[t].src = n[t].src);
                                                }));
                                        },
                                        r = 0;
                                    r < s;
                                    r++
                                )
                                    o(r);
                        }
                    },
                    updateHeight: function (e) {
                        var t = document.querySelector(e);
                        return t ? Math.floor(t.getClientRects()[0].height) : 0;
                    },
                    calHeight: function () {
                        var e = document.querySelector(".home__article-wrap"),
                            t = document.querySelector(".home__article"),
                            n = Math.ceil(e.getClientRects()[0].height);
                        Math.ceil(t.getClientRects()[0].height) < n &&
                            ((this.allowScroll.up = !1), (this.allowScroll.down = !1), console.log("no scrollbar"));
                    },
                    initLinks: function () {
                        var e = this,
                            t = document.querySelector(".home__article-wrap"),
                            n = document.querySelector(".home__article");
                        if (n && t) {
                            var i = Array.from(n.getElementsByTagName("a")),
                                a = Math.ceil(t.getClientRects()[0].height),
                                s = Math.ceil(n.getClientRects()[0].height);
                            (this.linkMap = []),
                                i.length &&
                                    i.forEach(function (t, o) {
                                        i[o].setAttribute("draggable", "false");
                                        var r = void 0,
                                            c = void 0,
                                            l = t.href,
                                            u = i[o].offsetTop + n.offsetTop + i[o].offsetHeight;
                                        r =
                                            o < i.length - 1 && u > (c = i[o + 1].offsetTop + n.offsetTop - a)
                                                ? c + 0.5 * (u - c)
                                                : u;
                                        var h = o
                                            ? Math.max(e.linkMap[o - 1].max, i[o].offsetTop + n.offsetTop - a)
                                            : i[0].offsetTop + n.offsetTop - a;
                                        (h = Math.max(0, h)),
                                            (r = Math.min(s + 3 * n.offsetTop - a + 3, r)),
                                            e.linkMap.push({ index: o, href: l, min: h, max: Math.max(r, h) });
                                    }),
                                (this.annDetail.linkMap = this.linkMap);
                        }
                    },
                    handleNext: function () {},
                    renderIframe: function () {
                        var e = document.createElement("iframe");
                        return (e.id = "YsSDKIframe"), (e.style.display = "none"), document.body.appendChild(e), e;
                    },
                    updateRedPoint: function (e, t) {
                        o.default.updateRedPoint(e, t), console.log(e, t);
                    },
                    consumeRemind: function () {
                        var e = this.annDetail.ann_id;
                        o.default.consumeRemind(
                            Object.assign({ apiBase: i.apiBase, ann_id: e }, this.isIOS ? { platform: "ios" } : {})
                        );
                    },
                    consumeAlertAnn: function () {
                        var e = this.annDetail.ann_id;
                        o.default.consumeAlertAnn(
                            Object.assign({ apiBase: i.apiBase, ann_id: e }, this.isIOS ? { platform: "ios" } : {})
                        );
                    },
                    handleRead: function () {
                        this.bannerLoaded || (this.showBanner = !1),
                            this.handleRedPoint(),
                            this.handleAlert(),
                            this.resetArticle();
                    },
                    handleRedPoint: function () {
                        this.annList.length &&
                            this.typeDetail.remind_num &&
                            this.annDetail.remind &&
                            ((this.annDetail.remind = 0),
                            this.typeDetail.remind_num--,
                            this.annDetail.extra_remind
                                ? ((this.annDetail.extra_remind = 0),
                                  this.typeDetail.extra_remind_num--,
                                  this.checkExtraRedPoint() || this.updateRedPoint(this.checkRedPoint(), !1))
                                : this.checkRedPoint() || this.updateRedPoint(!1, !1),
                            this.consumeRemind());
                    },
                    handleAlert: function () {
                        this.annList.length &&
                            this.annDetail.alert &&
                            ((this.annDetail.alert = 0), this.consumeAlertAnn());
                    },
                    handleMounted: function () {
                        o.default.removeClose();
                    },
                    handleClose: function () {
                        (document.onkeydown = null), this.playAudio(2), miHoYoGameJSSDK.closeWebview();
                    },
                    requestCmd: function (e) {
                        this.iframe || this.renderIframe(), (this.iframe.src = e);
                    },
                    resetStatus: function () {
                        var e = document.querySelector(".home__menu");
                        e && (e.scrollTop = 0), (this.activeAnn = 0), (this.direcType = 0), (this.focusMenu = !0);
                    },
                    resetArticle: function () {
                        var e = document.querySelector(".home__article-wrap");
                        e && (e.scrollTop = 0),
                            (this.preScrollTop = 0),
                            (this.linkMap = []),
                            (this.curLink = -1),
                            (this.allowScroll.up = !1),
                            (this.allowScroll.down = !0);
                    },
                    scrollMenu: function (e) {
                        var t = document.querySelector(".home__menu");
                        if (t) {
                            this.getSildeHeight();
                            var n = Math.floor(this.tabHeight * (e - 0.14)),
                                i = t.scrollTop;
                            n > i ? this.smoothDown(i, n, 10, t) : this.smoothUp(i, n, 10, t);
                        }
                    },
                    scrollAnn: function (e) {
                        var t = this,
                            n = document.querySelector(".home__article-wrap");
                        if (n) {
                            var i = n.scrollTop,
                                a = Math.floor(50 * (1 - Math.pow(0.97, ++this.count)));
                            i > this.preScrollTop
                                ? ((this.allowScroll.up = !0),
                                  i - this.preScrollTop < this.preStep - 0.1
                                      ? (++this.scrollBuffer > 4 && (this.allowScroll.down = !1),
                                        (a = i - this.preScrollTop))
                                      : (this.scrollBuffer = 0))
                                : i === this.preScrollTop
                                ? ++this.scrollBuffer > 4 &&
                                  (i
                                      ? ((this.allowScroll.up = !0), (this.allowScroll.down = !1))
                                      : ((this.allowScroll.up = !1), (this.allowScroll.down = !0)))
                                : ((this.allowScroll.down = !0),
                                  this.preScrollTop - i < this.preStep - 0.1
                                      ? (++this.scrollBuffer > 4 && (this.allowScroll.up = !1),
                                        (a = this.preScrollTop - i))
                                      : (this.scrollBuffer = 0)),
                                (this.preStep = a),
                                1 === e
                                    ? ((this.preScrollTop = i), this.smoothDown(i, i + a, a, n))
                                    : 2 === e && ((this.preScrollTop = i), this.smoothUp(i, i - a, a, n)),
                                this.$nextTick(function () {
                                    var e = t.linkMap.filter(function (e) {
                                            return (
                                                e.min <= i &&
                                                (e.max > i || (e.max === i && e.min === e.max && e.index === t.curLink))
                                            );
                                        }),
                                        n = e.length ? e[0].index : -1;
                                    t.switchLink(n);
                                });
                        }
                    },
                    switchLink: function (e) {
                        var t = Array.from(document.querySelector(".home__article-wrap").getElementsByTagName("a"));
                        this.curLink !== e &&
                            (this.curLink > -1 && t[this.curLink].classList.remove("active"),
                            e > -1 && t[e].classList.add("active"),
                            (this.curLink = e));
                    },
                    smoothDown: function (e, t, n, i) {
                        var a = this,
                            s = e,
                            o = t;
                        s < o
                            ? ((s += n),
                              (i.scrollTop = s),
                              setTimeout(function () {
                                  return a.smoothDown(s, o, n, i);
                              }, 5))
                            : (i.scrollTop = o);
                    },
                    smoothUp: function (e, t, n, i) {
                        var a = this,
                            s = e,
                            o = t;
                        s > o
                            ? ((s -= n),
                              (i.scrollTop = s),
                              setTimeout(function () {
                                  return a.smoothUp(s, o, n, i);
                              }, 5))
                            : (i.scrollTop = o);
                    },
                    switchType: function (e) {
                        e.target.className.indexOf("home__tab") > -1 &&
                            e.target.dataset.index &&
                            (this.playAudio(1),
                            (this.curType = Number(e.target.dataset.index)),
                            this.resetStatus(),
                            this.handleRead(),
                            (this.curAnn = -1),
                            this.$nextTick(this.getLinkMap));
                    },
                    switchAnn: function (e) {
                        if (
                            !this.startMove &&
                            e.target.className.indexOf("home__intro") > -1 &&
                            e.target.dataset.index
                        ) {
                            this.playAudio(0);
                            var t = Number(e.target.dataset.index);
                            (this.activeAnn = t), this.handleRead(), this.$nextTick(this.getLinkMap);
                        }
                    },
                    resetLinks: function () {
                        var e = document.querySelector(".home__article");
                        if (e) {
                            var t = Array.from(e.getElementsByTagName("a"));
                            t.length &&
                                t.forEach(function (e, n) {
                                    t[n].classList.remove("active");
                                });
                        }
                    },
                    overAnn: function (e) {
                        if (
                            !this.startMove &&
                            ((this.focusMenu = !0),
                            this.resetLinks(),
                            e.target.className.indexOf("home__intro") > -1 && e.target.dataset.index)
                        ) {
                            var t = Number(e.target.dataset.index);
                            this.curAnn = t;
                        }
                    },
                    outAnn: function (e) {
                        e.target.className.indexOf("home__intro") > -1 && e.target.dataset.index && (this.curAnn = -1);
                    },
                    downAnn: function (e) {
                        (this.startMove = !0), (this.preY = e.clientY);
                    },
                    upAnn: function () {
                        (this.startMove = !1), (this.preY = 0), this.resetSeat();
                    },
                    moveAnn: function (e) {
                        if (this.startMove && this.annList.length > 5) {
                            this.curAnn = -1;
                            var t = document.querySelector(".home__menu");
                            if (!t) return;
                            this.getSildeHeight();
                            var n = Math.floor(t.getClientRects()[0].height),
                                i = this.tabHeight * (this.annList.length + 0.18) - n,
                                a = this.preY - e.clientY;
                            a < 0 && 0 === t.scrollTop
                                ? this.seat >= 0.5 * n
                                    ? this.upAnn()
                                    : (this.seat -= a)
                                : a > 0 && t.scrollTop >= i
                                ? this.seat >= 0.5 * n
                                    ? this.upAnn()
                                    : ((this.seat += a), (t.scrollTop += a))
                                : (t.scrollTop += a),
                                (this.preY = e.clientY);
                        }
                    },
                    downArticle: function (e) {
                        (this.startMove = !0), (this.preY = e.clientY);
                    },
                    upArticle: function () {
                        (this.startMove = !1), (this.preY = 0);
                    },
                    moveArticle: function (e) {
                        if (this.startMove) {
                            var t = document.querySelector(".home__article-wrap");
                            if (!t) return;
                            var n = 2 * (this.preY - e.clientY);
                            (t.scrollTop += n), (this.preY = e.clientY);
                        }
                    },
                    resetSeat: function () {
                        this.seat < 10 ? (this.seat = 1) : ((this.seat -= 10), setTimeout(this.resetSeat, 1));
                    },
                    handleLinkClick: function (e) {
                        var t = this;
                        "A" === e.target.nodeName &&
                            ((this.hasClicked = !0),
                            setTimeout(function () {
                                t.hasClicked = !1;
                            }, 1e3));
                    },
                },
            };
        },
        550: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                        }
                        return e;
                    },
                a = n(546),
                s = n(128),
                o = l(n(191)),
                r = l(n(540)),
                c = l(n(541));
            function l(e) {
                return e && e.__esModule ? e : { default: e };
            }
            var u = r.default.parse(window.location.search),
                h = u.from,
                d = u.preview_ann_id;
            t.default = {
                getList: function () {
                    return c.default
                        .fetchAnnouceNew({
                            environment: s.environment,
                            apiBase: s.apiBase,
                            cdnBase: s.cdnBase,
                            useFull: s.useFull,
                        })
                        .then(function (e) {
                            return (
                                (e.curType = 0),
                                (e.activeAnn = 0),
                                (e.bannerArr = []),
                                e.list.forEach(function (t, n) {
                                    var i = 0,
                                        a = 0;
                                    t.list.forEach(function (t, r) {
                                        (e.list[n].list[r].content = t.content.replace(
                                            /(&lt;t class="t_.*?&gt;)(.*?)(&lt;\/t&gt;)/gi,
                                            function (t, n, i) {
                                                var a =
                                                    (n.includes("t_lc") ? 60 * (e.timezone || 8) : 480) -
                                                    (0, o.default)().utcOffset();
                                                return (
                                                    "<span>" +
                                                    (0, o.default)(i).subtract(a, "m").format("YYYY/MM/DD HH:mm") +
                                                    "</span>"
                                                );
                                            }
                                        )),
                                            "production" !== s.environment && "op" === h
                                                ? Number(d) === Number(t.ann_id) &&
                                                  ((e.curType = n), (e.activeAnn = r), (e.alert = !1))
                                                : e.alert &&
                                                  Number(t.ann_id) === Number(e.alert_id) &&
                                                  ((e.curType = n), (e.activeAnn = r)),
                                            t.remind && (i += 1),
                                            t.extra_remind && (a += 1),
                                            t.banner && e.bannerArr.push(t.banner);
                                    }),
                                        (e.type_list[n].remind_num = i),
                                        (e.type_list[n].extra_remind_num = a);
                                }),
                                e
                            );
                        });
                },
                consumeRemind: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = function (e) {
                            return i({ game: "hk4e" }, e);
                        },
                        n = function (e) {
                            return e;
                        };
                    return (0, a.get)("/api/consumeRemind", i({}, e, { loading: !1 }), t, n);
                },
                consumeAlertAnn: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = function (e) {
                            return i({ game: "hk4e" }, e);
                        },
                        n = function (e) {
                            return e;
                        };
                    return (0, a.get)("/api/consumeAlertAnn", i({}, e, { loading: !1 }), t, n);
                },
            };
        },
        551: function (e, t, n) {},
        552: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return i;
            }),
                n.d(t, "b", function () {
                    return a;
                });
            var i = function () {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", { staticClass: "home__bg", class: { home__bg__ps4: e.isPs } }, [
                        n(
                            "div",
                            {
                                staticClass: "home",
                                class: [
                                    e.isPre
                                        ? "use" + e.langString + "WebFont"
                                        : e.isAndroid || e.isPc
                                        ? "use" + e.langString + "Font"
                                        : "use" + e.langString + "IOSFont",
                                    e.annList.length ? "" : "empty",
                                ],
                                style: { pointerEvents: e.hasGamepad ? "none" : "auto" },
                            },
                            [
                                n("div", { staticClass: "home__main" }, [
                                    n("div", { staticClass: "home__header-wrap" }, [
                                        n("div", { staticClass: "home__header" }, [
                                            n(
                                                "ul",
                                                {
                                                    staticClass: "home__tabs",
                                                    class: {
                                                        "home__tabs-gamepad": e.hasGamepad,
                                                        home__tabs__xbox: !e.isPs && 2 === e.padType,
                                                    },
                                                    on: { click: e.switchType },
                                                },
                                                e._l(e.type_list, function (t, i) {
                                                    return n(
                                                        "li",
                                                        {
                                                            key: "type" + t.id,
                                                            staticClass: "home__tab",
                                                            class: { "home__tab--active": e.curType === i },
                                                            attrs: { "data-index": i },
                                                        },
                                                        [
                                                            t.remind_num
                                                                ? n("div", { staticClass: "home__tab__dot" })
                                                                : e._e(),
                                                            e._v(" "),
                                                            n("p", {
                                                                staticClass: "home__tab-text",
                                                                attrs: { "data-index": i },
                                                                domProps: { innerHTML: e._s(t.mi18n_name) },
                                                            }),
                                                        ]
                                                    );
                                                }),
                                                0
                                            ),
                                            e._v(" "),
                                            e.isPs || e.hasGamepad
                                                ? e._e()
                                                : n("button", {
                                                      staticClass: "home__close",
                                                      on: { click: e.handleClose },
                                                  }),
                                        ]),
                                    ]),
                                    e._v(" "),
                                    e.annList.length
                                        ? n("div", { staticClass: "home__content" }, [
                                              n("div", { staticClass: "home__menu-wrap" }, [
                                                  n(
                                                      "ul",
                                                      {
                                                          ref: "menu",
                                                          staticClass: "home__menu home__swiper noScrollBar",
                                                          on: {
                                                              click: e.switchAnn,
                                                              mouseover: e.overAnn,
                                                              mouseout: e.outAnn,
                                                              mouseleave: e.upAnn,
                                                              mousedown: e.downAnn,
                                                              mouseup: e.upAnn,
                                                              mousemove: e.moveAnn,
                                                          },
                                                      },
                                                      [
                                                          n("li", {
                                                              staticClass: "home__slide-seat",
                                                              style: { height: e.seat + "px" },
                                                          }),
                                                          e._v(" "),
                                                          e._l(e.annList, function (t, i) {
                                                              return n(
                                                                  "li",
                                                                  { key: "ann" + t.ann_id, staticClass: "home__slide" },
                                                                  [
                                                                      n(
                                                                          "div",
                                                                          {
                                                                              staticClass: "home__menu-item",
                                                                              class: {
                                                                                  "home__menu-item--unread": t.remind,
                                                                                  "home__menu-item--active":
                                                                                      e.activeAnn === i,
                                                                                  "home__menu-item--current":
                                                                                      "pc" === e.deviceType &&
                                                                                      e.curAnn === i,
                                                                              },
                                                                          },
                                                                          [
                                                                              t.tag_icon
                                                                                  ? n("img", {
                                                                                        staticClass: "home__tag",
                                                                                        attrs: {
                                                                                            src: t.tag_icon,
                                                                                            draggable: "false",
                                                                                        },
                                                                                    })
                                                                                  : e._e(),
                                                                              e._v(" "),
                                                                              n(
                                                                                  "div",
                                                                                  {
                                                                                      staticClass: "home__intro",
                                                                                      class: {
                                                                                          "home__intro--active":
                                                                                              e.activeAnn === i,
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                      n("p", {
                                                                                          domProps: {
                                                                                              innerHTML: e._s(
                                                                                                  t.subtitle
                                                                                              ),
                                                                                          },
                                                                                      }),
                                                                                  ]
                                                                              ),
                                                                              e._v(" "),
                                                                              n("div", {
                                                                                  staticClass: "home__intro--click",
                                                                                  class: {
                                                                                      "home__intro--current":
                                                                                          "pc" === e.deviceType &&
                                                                                          e.curAnn === i &&
                                                                                          e.focusMenu,
                                                                                  },
                                                                                  attrs: { "data-index": i },
                                                                              }),
                                                                          ]
                                                                      ),
                                                                  ]
                                                              );
                                                          }),
                                                          e._v(" "),
                                                          n("li", {
                                                              staticClass: "home__slide-seat",
                                                              style: { height: e.seat + "px" },
                                                          }),
                                                      ],
                                                      2
                                                  ),
                                              ]),
                                              e._v(" "),
                                              n(
                                                  "div",
                                                  {
                                                      staticClass: "home__right",
                                                      class: { "home__right--active": !e.focusMenu && e.curLink < 0 },
                                                  },
                                                  [
                                                      n(
                                                          "div",
                                                          {
                                                              ref: "ann",
                                                              staticClass: "home__article-wrap",
                                                              class: { preventClick: e.hasClicked },
                                                              on: {
                                                                  mousedown: e.downArticle,
                                                                  mouseup: e.upArticle,
                                                                  mouseleave: e.upArticle,
                                                                  mousemove: e.moveArticle,
                                                                  click: e.handleLinkClick,
                                                              },
                                                          },
                                                          [
                                                              e.annList.length
                                                                  ? n("div", { staticClass: "home__article" }, [
                                                                        n("h1", {
                                                                            staticClass: "home__title",
                                                                            domProps: {
                                                                                innerHTML: e._s(
                                                                                    e.activeAnn > -1 &&
                                                                                        e.annDetail.title
                                                                                ),
                                                                            },
                                                                        }),
                                                                        e._v(" "),
                                                                        e.annDetail.banner
                                                                            ? n("img", {
                                                                                  directives: [
                                                                                      {
                                                                                          name: "show",
                                                                                          rawName: "v-show",
                                                                                          value: e.showBanner,
                                                                                          expression: "showBanner",
                                                                                      },
                                                                                  ],
                                                                                  staticClass: "home__banner",
                                                                                  attrs: { src: e.annDetail.banner },
                                                                                  on: {
                                                                                      load: function (t) {
                                                                                          e.showBanner = !0;
                                                                                      },
                                                                                  },
                                                                              })
                                                                            : e._e(),
                                                                        e._v(" "),
                                                                        n("div", {
                                                                            domProps: {
                                                                                innerHTML: e._s(e.annDetail.content),
                                                                            },
                                                                        }),
                                                                    ])
                                                                  : e._e(),
                                                          ]
                                                      ),
                                                      e._v(" "),
                                                      n(
                                                          "div",
                                                          {
                                                              directives: [
                                                                  {
                                                                      name: "show",
                                                                      rawName: "v-show",
                                                                      value: e.hasGamepad,
                                                                      expression: "hasGamepad",
                                                                  },
                                                              ],
                                                              staticClass: "home__control",
                                                              class: {
                                                                  home__control__xbox: !e.isPs && 2 === e.padType,
                                                                  home__control__ps5: 3 === e.padType,
                                                              },
                                                          },
                                                          [
                                                              n(
                                                                  "p",
                                                                  {
                                                                      directives: [
                                                                          {
                                                                              name: "show",
                                                                              rawName: "v-show",
                                                                              value: e.focusMenu || e.curLink > -1,
                                                                              expression: "focusMenu || curLink > -1",
                                                                          },
                                                                      ],
                                                                      class: e.btnExchange ? "last" : "first",
                                                                  },
                                                                  [
                                                                      e._v(
                                                                          e._s(
                                                                              e.focusMenu
                                                                                  ? e.getTips("ok")
                                                                                  : -1 === e.curLink
                                                                                  ? ""
                                                                                  : e.getTips("go")
                                                                          )
                                                                      ),
                                                                  ]
                                                              ),
                                                              e._v(" "),
                                                              n("p", { class: e.btnExchange ? "first" : "last" }, [
                                                                  e._v(
                                                                      e._s(
                                                                          e.focusMenu
                                                                              ? e.getTips("close")
                                                                              : e.getTips("back")
                                                                      )
                                                                  ),
                                                              ]),
                                                          ]
                                                      ),
                                                  ]
                                              ),
                                          ])
                                        : e.ready
                                        ? n("div", { staticClass: "home__empty" }, [
                                              n("h1", [e._v(e._s(e.getTips("nodata")))]),
                                              e._v(" "),
                                              n("p", [e._v(e._s(e.getTips("somewhere")))]),
                                          ])
                                        : e._e(),
                                ]),
                            ]
                        ),
                    ]);
                },
                a = [];
            i._withStripped = !0;
        },
    },
]);
