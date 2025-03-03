_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [11], {
        "5B2S": function(e, t, a) {
            "use strict";
            var n = a("nKUr"),
                s = a("q1tI"),
                r = function(e, t) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a])
                        })(e, t)
                };

            function c(e) {
                var t = e.className,
                    a = e.counterClockwise,
                    n = e.dashRatio,
                    r = e.pathRadius,
                    c = e.strokeWidth,
                    o = e.style;
                return Object(s.createElement)("path", {
                    className: t,
                    style: Object.assign({}, o, l({
                        pathRadius: r,
                        dashRatio: n,
                        counterClockwise: a
                    })),
                    d: i({
                        pathRadius: r,
                        counterClockwise: a
                    }),
                    strokeWidth: c,
                    fillOpacity: 0
                })
            }

            function i(e) {
                var t = e.pathRadius,
                    a = e.counterClockwise ? 1 : 0;
                return "\n      M 50,50\n      m 0,-" + t + "\n      a " + t + "," + t + " " + a + " 1 1 0," + 2 * t + "\n      a " + t + "," + t + " " + a + " 1 1 0,-" + 2 * t + "\n    "
            }

            function l(e) {
                var t = e.counterClockwise,
                    a = e.dashRatio,
                    n = e.pathRadius,
                    s = 2 * Math.PI * n,
                    r = (1 - a) * s;
                return {
                    strokeDasharray: s + "px " + s + "px",
                    strokeDashoffset: (t ? -r : r) + "px"
                }
            }
            var o = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return function(e, t) {
                    function a() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
                }(t, e), t.prototype.getBackgroundPadding = function() {
                    return this.props.background ? this.props.backgroundPadding : 0
                }, t.prototype.getPathRadius = function() {
                    return 50 - this.props.strokeWidth / 2 - this.getBackgroundPadding()
                }, t.prototype.getPathRatio = function() {
                    var e = this.props,
                        t = e.value,
                        a = e.minValue,
                        n = e.maxValue;
                    return (Math.min(Math.max(t, a), n) - a) / (n - a)
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.circleRatio,
                        a = e.className,
                        n = e.classes,
                        r = e.counterClockwise,
                        i = e.styles,
                        l = e.strokeWidth,
                        o = e.text,
                        d = this.getPathRadius(),
                        j = this.getPathRatio();
                    return Object(s.createElement)("svg", {
                        className: n.root + " " + a,
                        style: i.root,
                        viewBox: "0 0 100 100",
                        "data-test-id": "CircularProgressbar"
                    }, this.props.background ? Object(s.createElement)("circle", {
                        className: n.background,
                        style: i.background,
                        cx: 50,
                        cy: 50,
                        r: 50
                    }) : null, Object(s.createElement)(c, {
                        className: n.trail,
                        counterClockwise: r,
                        dashRatio: t,
                        pathRadius: d,
                        strokeWidth: l,
                        style: i.trail
                    }), Object(s.createElement)(c, {
                        className: n.path,
                        counterClockwise: r,
                        dashRatio: j * t,
                        pathRadius: d,
                        strokeWidth: l,
                        style: i.path
                    }), o ? Object(s.createElement)("text", {
                        className: n.text,
                        style: i.text,
                        x: 50,
                        y: 50
                    }, o) : null)
                }, t.defaultProps = {
                    background: !1,
                    backgroundPadding: 0,
                    circleRatio: 1,
                    classes: {
                        root: "CircularProgressbar",
                        trail: "CircularProgressbar-trail",
                        path: "CircularProgressbar-path",
                        text: "CircularProgressbar-text",
                        background: "CircularProgressbar-background"
                    },
                    counterClockwise: !1,
                    className: "",
                    maxValue: 100,
                    minValue: 0,
                    strokeWidth: 8,
                    styles: {
                        root: {},
                        trail: {},
                        path: {},
                        text: {},
                        background: {}
                    },
                    text: ""
                }, t
            }(s.Component);

            function d(e) {
                var t = e.rotation,
                    a = e.strokeLinecap,
                    n = e.textColor,
                    s = e.textSize,
                    r = e.pathColor,
                    c = e.pathTransition,
                    i = e.pathTransitionDuration,
                    l = e.trailColor,
                    o = e.backgroundColor,
                    d = null == t ? void 0 : "rotate(" + t + "turn)",
                    b = null == t ? void 0 : "center center";
                return {
                    root: {},
                    path: j({
                        stroke: r,
                        strokeLinecap: a,
                        transform: d,
                        transformOrigin: b,
                        transition: c,
                        transitionDuration: null == i ? void 0 : i + "s"
                    }),
                    trail: j({
                        stroke: l,
                        strokeLinecap: a,
                        transform: d,
                        transformOrigin: b
                    }),
                    text: j({
                        fill: n,
                        fontSize: s
                    }),
                    background: j({
                        fill: o
                    })
                }
            }

            function j(e) {
                return Object.keys(e).forEach((function(t) {
                    null == e[t] && delete e[t]
                })), e
            }
            var b = a("KSab");
            t.a = function() {
                var e = b.z.sectionImage,
                    t = b.z.sectionContent,
                    a = b.z.posts;
                return Object(n.jsxs)("section", {
                    className: "service-style-two about-page",
                    children: [Object(n.jsx)("div", {
                        className: "overlay"
                    }), Object(n.jsx)("img", {
                        src: e,
                        className: "background-right",
                        alt: "Awesome Image"
                    }), Object(n.jsx)("div", {
                        className: "thm-container",
                        children: Object(n.jsxs)("div", {
                            className: "row",
                            children: [Object(n.jsx)("div", {
                                className: "col-lg-6",
                                children: Object(n.jsxs)("div", {
                                    className: "service-content",
                                    children: [Object(n.jsx)("span", {
                                        children: t.subText
                                    }), Object(n.jsx)("h2", {
                                        children: t.title
                                    }), Object(n.jsx)("p", {
                                        children: t.content
                                    })]
                                })
                            }), Object(n.jsx)("div", {
                                className: "col-lg-6",
                                children: Object(n.jsx)("div", {
                                    className: "price-feature-box",
                                    children: Object(n.jsx)("div", {
                                        className: "row",
                                        children: a.map((function(e, t) {
                                            var a = e.title,
                                                s = e.price,
                                                r = e.percentCount;
                                            return Object(n.jsx)("div", {
                                                className: "col-md-6 text-center",
                                                children: Object(n.jsxs)("div", {
                                                    className: "price-feature",
                                                    children: [Object(n.jsxs)("div", {
                                                        className: "circle-box",
                                                        children: [Object(n.jsx)(o, {
                                                            value: r,
                                                            styles: d({
                                                                textColor: "#2984C4",
                                                                pathColor: "#2984C4",
                                                                trailColor: "rgba(244, 245, 249, 1)"
                                                            })
                                                        }), Object(n.jsx)("div", {
                                                            className: "text-box",
                                                            children: Object(n.jsx)("div", {
                                                                className: "inner",
                                                                children: Object(n.jsx)("div", {
                                                                    className: "content",
                                                                    children: Object(n.jsxs)("p", {
                                                                        children: ["$", s]
                                                                    })
                                                                })
                                                            })
                                                        })]
                                                    }), Object(n.jsx)("h3", {
                                                        children: a
                                                    })]
                                                })
                                            }, t)
                                        }))
                                    })
                                })
                            })]
                        })
                    })]
                })
            }
        },
        JlnY: function(e, t, a) {
            "use strict";
            var n = a("nKUr"),
                s = a("q1tI"),
                r = a("3Z9Z"),
                c = a("JI6e"),
                i = a("rePB"),
                l = a("xqva"),
                o = a("Ndxo"),
                d = (a("4l1m"), a("KSab")),
                j = a("YFqc"),
                b = a.n(j),
                u = function(e) {
                    var t = e.data,
                        a = t.image,
                        s = t.title,
                        r = t.text,
                        c = t.url;
                    return Object(n.jsxs)("div", {
                        className: "single-we-believe text-center",
                        children: [Object(n.jsx)("div", {
                            className: "img-box",
                            children: Object(n.jsx)("img", {
                                src: a,
                                alt: s
                            })
                        }), Object(n.jsxs)("div", {
                            className: "text-box",
                            children: [Object(n.jsx)("h3", {
                                children: s
                            }), Object(n.jsx)("p", {
                                children: r
                            }), Object(n.jsx)(b.a, {
                                href: c,
                                children: Object(n.jsx)("a", {
                                    className: "thm-btn yellow-bg",
                                    children: "Learn More"
                                })
                            })]
                        })]
                    })
                },
                h = a("bTu8"),
                p = a("0Xqd"),
                O = a("Xchd");

            function x(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(a), !0).forEach((function(t) {
                        Object(i.a)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : x(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            h.a.use([p.a, O.a]);
            var v = function() {
                    return Object(n.jsxs)("div", {
                        className: "we-believe-carousel",
                        children: [Object(n.jsx)(l.a, m(m({}, {
                            spaceBetween: 0,
                            loop: !0,
                            slidesPerView: 1,
                            pagination: {
                                el: "#belive-carousel-pagination",
                                type: "bullets",
                                clickable: !0
                            },
                            autoplay: {
                                delay: 5e3
                            },
                            breakpoints: {
                                0: {
                                    spaceBetween: 0,
                                    slidesPerView: 1,
                                    slidesPerGroup: 1
                                }
                            }
                        }), {}, {
                            children: d.o.map((function(e, t) {
                                return Object(n.jsx)(o.a, {
                                    className: "item",
                                    children: Object(n.jsx)(u, {
                                        data: e
                                    })
                                }, t)
                            }))
                        })), Object(n.jsx)("div", {
                            className: "swiper-pagination",
                            id: "belive-carousel-pagination"
                        })]
                    })
                },
                g = a("0KWo"),
                f = function() {
                    var e = Object(s.useState)(0),
                        t = e[0],
                        a = e[1],
                        r = d.n.sectionContent,
                        c = d.n.posts;
                    return Object(n.jsxs)("div", {
                        className: "faq-content",
                        children: [Object(n.jsx)(g.a, {
                            data: r
                        }), Object(n.jsx)("div", {
                            className: "accrodion-grp faq-accrodion",
                            children: c.map((function(e, s) {
                                var r = e.title,
                                    c = e.content;
                                return Object(n.jsxs)("div", {
                                    className: "accrodion ".concat(s === t ? "active" : null),
                                    children: [Object(n.jsx)("div", {
                                        className: "accrodion-title",
                                        onClick: function() {
                                            a(s)
                                        },
                                        children: Object(n.jsx)("h4", {
                                            children: r
                                        })
                                    }), s === t ? Object(n.jsx)("div", {
                                        className: "accrodion-content animated fadeIn",
                                        children: Object(n.jsxs)("p", {
                                            children: [c, " "]
                                        })
                                    }) : null]
                                }, s)
                            }))
                        })]
                    })
                };
            t.a = function() {
                return Object(n.jsx)("section", {
                    className: "faq-section",
                    children: Object(n.jsx)("div", {
                        className: "thm-container",
                        children: Object(n.jsxs)(r.a, {
                            children: [Object(n.jsx)(c.a, {
                                lg: 5,
                                children: Object(n.jsx)(v, {})
                            }), Object(n.jsx)(c.a, {
                                lg: 7,
                                children: Object(n.jsx)(f, {})
                            })]
                        })
                    })
                })
            }
        },
        Juyh: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("nKUr"),
                s = (a("q1tI"), a("jX8a")),
                r = a("CafY"),
                c = a("5B2S"),
                i = a("UaQg"),
                l = a("aIN1"),
                o = a("KSab"),
                d = a("3Z9Z"),
                j = a("JI6e"),
                b = a("YFqc"),
                u = a.n(b),
                h = function(e) {
                    var t = e.data,
                        a = t.title,
                        s = t.text,
                        r = t.image,
                        c = t.url;
                    return Object(n.jsxs)("div", {
                        className: "single-about",
                        children: [Object(n.jsx)("div", {
                            className: "img-box",
                            children: Object(n.jsx)("img", {
                                src: r,
                                alt: a
                            })
                        }), Object(n.jsxs)("div", {
                            className: "text-box hvr-bounce-to-bottom",
                            children: [Object(n.jsx)(u.a, {
                                href: c,
                                children: Object(n.jsx)("a", {
                                    children: Object(n.jsx)("h3", {
                                        children: a
                                    })
                                })
                            }), Object(n.jsx)("p", {
                                children: s
                            }), Object(n.jsx)(u.a, {
                                href: c,
                                children: Object(n.jsx)("a", {
                                    className: "read-more fas fa-angle-right"
                                })
                            })]
                        })]
                    })
                },
                p = function() {
                    return Object(n.jsx)("section", {
                        className: "about-section sec-pad",
                        children: Object(n.jsx)("div", {
                            className: "thm-container",
                            children: Object(n.jsx)(d.a, {
                                children: o.a.map((function(e, t) {
                                    return Object(n.jsx)(j.a, {
                                        md: 12,
                                        lg: 4,
                                        children: Object(n.jsx)(h, {
                                            data: e
                                        })
                                    }, t)
                                }))
                            })
                        })
                    })
                },
                O = a("LQGr"),
                x = a("r5dr"),
                m = a("JlnY"),
                v = a("LvMP"),
                g = a("5fB9");
            t.default = function() {
                return Object(n.jsx)(g.b, {
                    children: Object(n.jsxs)(r.a, {
                        PageTitle: "About Us Page",
                        children: [Object(n.jsx)(v.a, {}), Object(n.jsx)(i.a, {
                            title: "About Us",
                            name: "About"
                        }), Object(n.jsx)(p, {}), Object(n.jsx)(O.a, {}), Object(n.jsx)(x.a, {}), Object(n.jsx)(c.a, {}), Object(n.jsx)(m.a, {}), Object(n.jsx)(s.a, {}), Object(n.jsx)(l.a, {})]
                    })
                })
            }
        },
        UaQg: function(e, t, a) {
            "use strict";
            var n = a("nKUr"),
                s = a("q1tI"),
                r = a("YFqc"),
                c = a.n(r);
            t.a = function(e) {
                var t = e.title,
                    a = e.name;
                return Object(n.jsxs)(s.Fragment, {
                    children: [Object(n.jsx)("section", {
                        className: "page-title",
                        children: Object(n.jsx)("div", {
                            className: "thm-container",
                            children: Object(n.jsx)("h3", {
                                children: t
                            })
                        })
                    }), Object(n.jsx)("div", {
                        className: "breadcumb-wrapper",
                        children: Object(n.jsx)("div", {
                            className: "thm-container",
                            children: Object(n.jsxs)("ul", {
                                className: "breadcumb",
                                children: [Object(n.jsx)("li", {
                                    children: Object(n.jsx)(c.a, {
                                        href: "/",
                                        children: Object(n.jsx)("a", {
                                            children: "Homepage"
                                        })
                                    })
                                }), Object(n.jsx)("li", {
                                    children: Object(n.jsx)("span", {
                                        className: "sep",
                                        children: "-"
                                    })
                                }), Object(n.jsx)("li", {
                                    children: Object(n.jsx)("span", {
                                        children: a
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        },
        g0Ox: function(e, t, a) {
            "use strict";
            var n = a("Jq2x"),
                s = a("cKS0");

            function r() {
                return (r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var c = {
                update: function() {
                    var e = this,
                        t = e.params.navigation;
                    if (!e.params.loop) {
                        var a = e.navigation,
                            n = a.$nextEl,
                            s = a.$prevEl;
                        s && s.length > 0 && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), n && n.length > 0 && (e.isEnd ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                    }
                },
                onPrevClick: function(e) {
                    var t = this;
                    e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
                },
                onNextClick: function(e) {
                    var t = this;
                    e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
                },
                init: function() {
                    var e, t, a = this,
                        r = a.params.navigation;
                    (r.nextEl || r.prevEl) && (r.nextEl && (e = Object(n.a)(r.nextEl), a.params.uniqueNavElements && "string" === typeof r.nextEl && e.length > 1 && 1 === a.$el.find(r.nextEl).length && (e = a.$el.find(r.nextEl))), r.prevEl && (t = Object(n.a)(r.prevEl), a.params.uniqueNavElements && "string" === typeof r.prevEl && t.length > 1 && 1 === a.$el.find(r.prevEl).length && (t = a.$el.find(r.prevEl))), e && e.length > 0 && e.on("click", a.navigation.onNextClick), t && t.length > 0 && t.on("click", a.navigation.onPrevClick), Object(s.c)(a.navigation, {
                        $nextEl: e,
                        nextEl: e && e[0],
                        $prevEl: t,
                        prevEl: t && t[0]
                    }))
                },
                destroy: function() {
                    var e = this,
                        t = e.navigation,
                        a = t.$nextEl,
                        n = t.$prevEl;
                    a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), n && n.length && (n.off("click", e.navigation.onPrevClick), n.removeClass(e.params.navigation.disabledClass))
                }
            };
            t.a = {
                name: "navigation",
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock"
                    }
                },
                create: function() {
                    Object(s.a)(this, {
                        navigation: r({}, c)
                    })
                },
                on: {
                    init: function(e) {
                        e.navigation.init(), e.navigation.update()
                    },
                    toEdge: function(e) {
                        e.navigation.update()
                    },
                    fromEdge: function(e) {
                        e.navigation.update()
                    },
                    destroy: function(e) {
                        e.navigation.destroy()
                    },
                    click: function(e, t) {
                        var a, s = e.navigation,
                            r = s.$nextEl,
                            c = s.$prevEl;
                        !e.params.navigation.hideOnClick || Object(n.a)(t.target).is(c) || Object(n.a)(t.target).is(r) || (r ? a = r.hasClass(e.params.navigation.hiddenClass) : c && (a = c.hasClass(e.params.navigation.hiddenClass)), !0 === a ? e.emit("navigationShow") : e.emit("navigationHide"), r && r.toggleClass(e.params.navigation.hiddenClass), c && c.toggleClass(e.params.navigation.hiddenClass))
                    }
                }
            }
        },
        r5dr: function(e, t, a) {
            "use strict";
            var n = a("rePB"),
                s = a("nKUr"),
                r = (a("q1tI"), a("xqva")),
                c = a("Ndxo"),
                i = a("KSab"),
                l = function(e) {
                    var t = e.data,
                        a = t.name,
                        n = t.designation,
                        r = t.image,
                        c = t.content;
                    return Object(s.jsx)("div", {
                        className: "single-team-carousel",
                        children: Object(s.jsxs)("div", {
                            className: "inner",
                            children: [Object(s.jsx)("div", {
                                className: "img-box",
                                children: Object(s.jsx)("img", {
                                    src: r,
                                    alt: a
                                })
                            }), Object(s.jsxs)("div", {
                                className: "team-content",
                                children: [Object(s.jsxs)("div", {
                                    className: "title",
                                    children: [Object(s.jsx)("span", {
                                        children: n
                                    }), Object(s.jsx)("h3", {
                                        children: a
                                    })]
                                }), Object(s.jsx)("p", {
                                    children: c
                                })]
                            })]
                        })
                    })
                },
                o = a("bTu8"),
                d = a("0Xqd"),
                j = a("g0Ox");
            a("4l1m");

            function b(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(a), !0).forEach((function(t) {
                        Object(n.a)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : b(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            o.a.use([d.a, j.a]);
            t.a = function() {
                var e = i.G.sectionContent,
                    t = i.G.posts;
                return Object(s.jsx)("section", {
                    className: "team-section sec-pad",
                    children: Object(s.jsxs)("div", {
                        className: "thm-container",
                        children: [Object(s.jsxs)("div", {
                            className: "sec-title text-center",
                            children: [Object(s.jsx)("span", {
                                children: e.subText
                            }), Object(s.jsx)("h3", {
                                children: e.title
                            }), Object(s.jsx)("p", {
                                children: e.content
                            })]
                        }), Object(s.jsxs)(r.a, u(u({
                            className: "team-carousel"
                        }, {
                            spaceBetween: 0,
                            loop: !0,
                            slidesPerView: 1,
                            navigation: {
                                nextEl: "#team-slider-next",
                                prevEl: "#team-slider-prev"
                            },
                            autoplay: {
                                delay: 5e3
                            },
                            breakpoints: {
                                0: {
                                    spaceBetween: 0,
                                    slidesPerView: 1,
                                    slidesPerGroup: 1
                                }
                            }
                        }), {}, {
                            children: [t.map((function(e, t) {
                                return Object(s.jsx)(c.a, {
                                    children: Object(s.jsx)(l, {
                                        data: e
                                    })
                                }, t)
                            })), Object(s.jsxs)("div", {
                                className: "swiper-carousel-nav",
                                children: [Object(s.jsx)("div", {
                                    className: "swiper-button-prev",
                                    id: "team-slider-prev",
                                    children: Object(s.jsx)("i", {
                                        className: "fa fa-angle-left"
                                    })
                                }), Object(s.jsx)("div", {
                                    className: "swiper-button-next",
                                    id: "team-slider-next",
                                    children: Object(s.jsx)("i", {
                                        className: "fa fa-angle-right"
                                    })
                                })]
                            })]
                        }))]
                    })
                })
            }
        },
        rB5V: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about", function() {
                return a("Juyh")
            }])
        }
    },
    [
        ["rB5V", 0, 2, 1, 3, 4, 5]
    ]
]);