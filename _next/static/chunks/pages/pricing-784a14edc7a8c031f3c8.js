_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [18], {
        "0KWo": function(e, t, c) {
            "use strict";
            var s = c("nKUr");
            c("q1tI");
            t.a = function(e) {
                var t = e.data,
                    c = t.textAlignment,
                    a = t.subText,
                    n = t.title;
                return Object(s.jsxs)("div", {
                    className: "title text-".concat(c),
                    children: [Object(s.jsx)("span", {
                        children: a
                    }), Object(s.jsx)("h2", {
                        children: n
                    })]
                })
            }
        },
        "20a2": function(e, t, c) {
            e.exports = c("nOHt")
        },
        "3Z9Z": function(e, t, c) {
            "use strict";
            var s = c("wx14"),
                a = c("zLVn"),
                n = c("TSYQ"),
                r = c.n(n),
                i = c("q1tI"),
                l = c.n(i),
                o = c("vUet"),
                j = ["xl", "lg", "md", "sm", "xs"],
                d = l.a.forwardRef((function(e, t) {
                    var c = e.bsPrefix,
                        n = e.className,
                        i = e.noGutters,
                        d = e.as,
                        u = void 0 === d ? "div" : d,
                        b = Object(a.a)(e, ["bsPrefix", "className", "noGutters", "as"]),
                        h = Object(o.a)(c, "row"),
                        x = h + "-cols",
                        m = [];
                    return j.forEach((function(e) {
                        var t, c = b[e];
                        delete b[e];
                        var s = "xs" !== e ? "-" + e : "";
                        null != (t = null != c && "object" === typeof c ? c.cols : c) && m.push("" + x + s + "-" + t)
                    })), l.a.createElement(u, Object(s.a)({
                        ref: t
                    }, b, {
                        className: r.a.apply(void 0, [n, h, i && "no-gutters"].concat(m))
                    }))
                }));
            d.displayName = "Row", d.defaultProps = {
                noGutters: !1
            }, t.a = d
        },
        "5B2S": function(e, t, c) {
            "use strict";
            var s = c("nKUr"),
                a = c("q1tI"),
                n = function(e, t) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var c in t) t.hasOwnProperty(c) && (e[c] = t[c])
                        })(e, t)
                };

            function r(e) {
                var t = e.className,
                    c = e.counterClockwise,
                    s = e.dashRatio,
                    n = e.pathRadius,
                    r = e.strokeWidth,
                    o = e.style;
                return Object(a.createElement)("path", {
                    className: t,
                    style: Object.assign({}, o, l({
                        pathRadius: n,
                        dashRatio: s,
                        counterClockwise: c
                    })),
                    d: i({
                        pathRadius: n,
                        counterClockwise: c
                    }),
                    strokeWidth: r,
                    fillOpacity: 0
                })
            }

            function i(e) {
                var t = e.pathRadius,
                    c = e.counterClockwise ? 1 : 0;
                return "\n      M 50,50\n      m 0,-" + t + "\n      a " + t + "," + t + " " + c + " 1 1 0," + 2 * t + "\n      a " + t + "," + t + " " + c + " 1 1 0,-" + 2 * t + "\n    "
            }

            function l(e) {
                var t = e.counterClockwise,
                    c = e.dashRatio,
                    s = e.pathRadius,
                    a = 2 * Math.PI * s,
                    n = (1 - c) * a;
                return {
                    strokeDasharray: a + "px " + a + "px",
                    strokeDashoffset: (t ? -n : n) + "px"
                }
            }
            var o = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return function(e, t) {
                    function c() {
                        this.constructor = e
                    }
                    n(e, t), e.prototype = null === t ? Object.create(t) : (c.prototype = t.prototype, new c)
                }(t, e), t.prototype.getBackgroundPadding = function() {
                    return this.props.background ? this.props.backgroundPadding : 0
                }, t.prototype.getPathRadius = function() {
                    return 50 - this.props.strokeWidth / 2 - this.getBackgroundPadding()
                }, t.prototype.getPathRatio = function() {
                    var e = this.props,
                        t = e.value,
                        c = e.minValue,
                        s = e.maxValue;
                    return (Math.min(Math.max(t, c), s) - c) / (s - c)
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.circleRatio,
                        c = e.className,
                        s = e.classes,
                        n = e.counterClockwise,
                        i = e.styles,
                        l = e.strokeWidth,
                        o = e.text,
                        j = this.getPathRadius(),
                        d = this.getPathRatio();
                    return Object(a.createElement)("svg", {
                        className: s.root + " " + c,
                        style: i.root,
                        viewBox: "0 0 100 100",
                        "data-test-id": "CircularProgressbar"
                    }, this.props.background ? Object(a.createElement)("circle", {
                        className: s.background,
                        style: i.background,
                        cx: 50,
                        cy: 50,
                        r: 50
                    }) : null, Object(a.createElement)(r, {
                        className: s.trail,
                        counterClockwise: n,
                        dashRatio: t,
                        pathRadius: j,
                        strokeWidth: l,
                        style: i.trail
                    }), Object(a.createElement)(r, {
                        className: s.path,
                        counterClockwise: n,
                        dashRatio: d * t,
                        pathRadius: j,
                        strokeWidth: l,
                        style: i.path
                    }), o ? Object(a.createElement)("text", {
                        className: s.text,
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
            }(a.Component);

            function j(e) {
                var t = e.rotation,
                    c = e.strokeLinecap,
                    s = e.textColor,
                    a = e.textSize,
                    n = e.pathColor,
                    r = e.pathTransition,
                    i = e.pathTransitionDuration,
                    l = e.trailColor,
                    o = e.backgroundColor,
                    j = null == t ? void 0 : "rotate(" + t + "turn)",
                    u = null == t ? void 0 : "center center";
                return {
                    root: {},
                    path: d({
                        stroke: n,
                        strokeLinecap: c,
                        transform: j,
                        transformOrigin: u,
                        transition: r,
                        transitionDuration: null == i ? void 0 : i + "s"
                    }),
                    trail: d({
                        stroke: l,
                        strokeLinecap: c,
                        transform: j,
                        transformOrigin: u
                    }),
                    text: d({
                        fill: s,
                        fontSize: a
                    }),
                    background: d({
                        fill: o
                    })
                }
            }

            function d(e) {
                return Object.keys(e).forEach((function(t) {
                    null == e[t] && delete e[t]
                })), e
            }
            var u = c("KSab");
            t.a = function() {
                var e = u.z.sectionImage,
                    t = u.z.sectionContent,
                    c = u.z.posts;
                return Object(s.jsxs)("section", {
                    className: "service-style-two about-page",
                    children: [Object(s.jsx)("div", {
                        className: "overlay"
                    }), Object(s.jsx)("img", {
                        src: e,
                        className: "background-right",
                        alt: "Awesome Image"
                    }), Object(s.jsx)("div", {
                        className: "thm-container",
                        children: Object(s.jsxs)("div", {
                            className: "row",
                            children: [Object(s.jsx)("div", {
                                className: "col-lg-6",
                                children: Object(s.jsxs)("div", {
                                    className: "service-content",
                                    children: [Object(s.jsx)("span", {
                                        children: t.subText
                                    }), Object(s.jsx)("h2", {
                                        children: t.title
                                    }), Object(s.jsx)("p", {
                                        children: t.content
                                    })]
                                })
                            }), Object(s.jsx)("div", {
                                className: "col-lg-6",
                                children: Object(s.jsx)("div", {
                                    className: "price-feature-box",
                                    children: Object(s.jsx)("div", {
                                        className: "row",
                                        children: c.map((function(e, t) {
                                            var c = e.title,
                                                a = e.price,
                                                n = e.percentCount;
                                            return Object(s.jsx)("div", {
                                                className: "col-md-6 text-center",
                                                children: Object(s.jsxs)("div", {
                                                    className: "price-feature",
                                                    children: [Object(s.jsxs)("div", {
                                                        className: "circle-box",
                                                        children: [Object(s.jsx)(o, {
                                                            value: n,
                                                            styles: j({
                                                                textColor: "#2984C4",
                                                                pathColor: "#2984C4",
                                                                trailColor: "rgba(244, 245, 249, 1)"
                                                            })
                                                        }), Object(s.jsx)("div", {
                                                            className: "text-box",
                                                            children: Object(s.jsx)("div", {
                                                                className: "inner",
                                                                children: Object(s.jsx)("div", {
                                                                    className: "content",
                                                                    children: Object(s.jsxs)("p", {
                                                                        children: ["$", a]
                                                                    })
                                                                })
                                                            })
                                                        })]
                                                    }), Object(s.jsx)("h3", {
                                                        children: c
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
        "5CJo": function(e, t, c) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/pricing", function() {
                return c("Tee0")
            }])
        },
        JI6e: function(e, t, c) {
            "use strict";
            var s = c("wx14"),
                a = c("zLVn"),
                n = c("TSYQ"),
                r = c.n(n),
                i = c("q1tI"),
                l = c.n(i),
                o = c("vUet"),
                j = ["xl", "lg", "md", "sm", "xs"],
                d = l.a.forwardRef((function(e, t) {
                    var c = e.bsPrefix,
                        n = e.className,
                        i = e.as,
                        d = void 0 === i ? "div" : i,
                        u = Object(a.a)(e, ["bsPrefix", "className", "as"]),
                        b = Object(o.a)(c, "col"),
                        h = [],
                        x = [];
                    return j.forEach((function(e) {
                        var t, c, s, a = u[e];
                        if (delete u[e], "object" === typeof a && null != a) {
                            var n = a.span;
                            t = void 0 === n || n, c = a.offset, s = a.order
                        } else t = a;
                        var r = "xs" !== e ? "-" + e : "";
                        t && h.push(!0 === t ? "" + b + r : "" + b + r + "-" + t), null != s && x.push("order" + r + "-" + s), null != c && x.push("offset" + r + "-" + c)
                    })), h.length || h.push(b), l.a.createElement(d, Object(s.a)({}, u, {
                        ref: t,
                        className: r.a.apply(void 0, [n].concat(h, x))
                    }))
                }));
            d.displayName = "Col", t.a = d
        },
        LvMP: function(e, t, c) {
            "use strict";
            var s = c("nKUr"),
                a = c("q1tI"),
                n = c("KSab"),
                r = c("YFqc"),
                i = c.n(r),
                l = c("20a2"),
                o = c("5fB9");
            t.a = function() {
                var e = Object(l.useRouter)(),
                    t = Object(a.useState)(!1),
                    c = t[0],
                    r = t[1],
                    j = Object(a.useContext)(o.a),
                    d = j.menuStatus,
                    u = j.updateMenuStatus,
                    b = function() {
                        window.scrollY > 70 ? r(!0) : window.scrollY < 70 && r(!1)
                    };
                return Object(a.useEffect)((function() {
                    return window.addEventListener("scroll", b),
                        function() {
                            window.removeEventListener("scroll", b)
                        }
                }), [c]), Object(s.jsx)("header", {
                    className: "header home-page-one",
                    children: Object(s.jsx)("nav", {
                        className: "navbar navbar-default header-navigation  ".concat(!0 === c ? " stricky stricky-fixed slideInDown animated" : " stricky slideIn animated"),
                        children: Object(s.jsxs)("div", {
                            className: "thm-container clearfix",
                            children: [Object(s.jsxs)("div", {
                                className: "navbar-header",
                                children: [Object(s.jsx)(i.a, {
                                    href: "/",
                                    children: Object(s.jsx)("a", {
                                        className: "navbar-brand",
                                        children: Object(s.jsx)("img", {
                                            src: n.w.dark,
                                            alt: "Awesome Image"
                                        })
                                    })
                                }), Object(s.jsx)("span", {
                                    className: "mobile-menu__toggler",
                                    onClick: function(e) {
                                        e.preventDefault(), u(!d)
                                    },
                                    children: Object(s.jsx)("i", {
                                        className: "fa fa-bars"
                                    })
                                })]
                            }), Object(s.jsx)("div", {
                                className: "collapse show navbar-collapse main-navigation mainmenu ",
                                id: "main-nav-bar",
                                children: Object(s.jsx)("ul", {
                                    className: "nav navbar-nav navigation-box",
                                    children: n.x.map((function(t, c) {
                                        return Object(s.jsxs)("li", {
                                            className: e.pathname == t.url ? "active" : "",
                                            children: [Object(s.jsx)(i.a, {
                                                href: t.url,
                                                children: Object(s.jsx)("a", {
                                                    children: t.name
                                                })
                                            }), void 0 !== t.subItems ? Object(s.jsx)("ul", {
                                                className: "sub-menu",
                                                children: t.subItems.map((function(e, t) {
                                                    return Object(s.jsx)("li", {
                                                        children: Object(s.jsx)(i.a, {
                                                            href: e.url,
                                                            children: Object(s.jsx)("a", {
                                                                children: e.name
                                                            })
                                                        })
                                                    }, t)
                                                }))
                                            }) : null]
                                        }, c)
                                    }))
                                })
                            }), Object(s.jsx)("div", {
                                className: "right-side-box",
                                children: Object(s.jsx)("div", {
                                    className: "social",
                                    children: n.s.social.map((function(e, t) {
                                        var c = e.icon,
                                            a = e.url;
                                        return Object(s.jsx)("a", {
                                            href: a,
                                            className: "".concat(c, " hvr-pulse")
                                        }, t)
                                    }))
                                })
                            })]
                        })
                    })
                })
            }
        },
        TSYQ: function(e, t, c) {
            var s;
            ! function() {
                "use strict";
                var c = {}.hasOwnProperty;

                function a() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var s = arguments[t];
                        if (s) {
                            var n = typeof s;
                            if ("string" === n || "number" === n) e.push(s);
                            else if (Array.isArray(s) && s.length) {
                                var r = a.apply(null, s);
                                r && e.push(r)
                            } else if ("object" === n)
                                for (var i in s) c.call(s, i) && s[i] && e.push(i)
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (a.default = a, e.exports = a) : void 0 === (s = function() {
                    return a
                }.apply(t, [])) || (e.exports = s)
            }()
        },
        Tee0: function(e, t, c) {
            "use strict";
            c.r(t);
            var s = c("nKUr"),
                a = (c("q1tI"), c("CafY")),
                n = c("UaQg"),
                r = c("k+tD"),
                i = c("5B2S"),
                l = c("aIN1"),
                o = c("nR+J"),
                j = c("LvMP"),
                d = c("5fB9");
            t.default = function() {
                return Object(s.jsx)(d.b, {
                    children: Object(s.jsxs)(a.a, {
                        PageTitle: "Pricing Page",
                        children: [Object(s.jsx)(j.a, {}), Object(s.jsx)(n.a, {
                            title: "Our Pricing",
                            name: "Pricing"
                        }), Object(s.jsx)(r.a, {}), Object(s.jsx)(i.a, {}), Object(s.jsx)(o.a, {}), Object(s.jsx)(l.a, {})]
                    })
                })
            }
        },
        UaQg: function(e, t, c) {
            "use strict";
            var s = c("nKUr"),
                a = c("q1tI"),
                n = c("YFqc"),
                r = c.n(n);
            t.a = function(e) {
                var t = e.title,
                    c = e.name;
                return Object(s.jsxs)(a.Fragment, {
                    children: [Object(s.jsx)("section", {
                        className: "page-title",
                        children: Object(s.jsx)("div", {
                            className: "thm-container",
                            children: Object(s.jsx)("h3", {
                                children: t
                            })
                        })
                    }), Object(s.jsx)("div", {
                        className: "breadcumb-wrapper",
                        children: Object(s.jsx)("div", {
                            className: "thm-container",
                            children: Object(s.jsxs)("ul", {
                                className: "breadcumb",
                                children: [Object(s.jsx)("li", {
                                    children: Object(s.jsx)(r.a, {
                                        href: "/",
                                        children: Object(s.jsx)("a", {
                                            children: "Homepage"
                                        })
                                    })
                                }), Object(s.jsx)("li", {
                                    children: Object(s.jsx)("span", {
                                        className: "sep",
                                        children: "-"
                                    })
                                }), Object(s.jsx)("li", {
                                    children: Object(s.jsx)("span", {
                                        children: c
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        },
        aIN1: function(e, t, c) {
            "use strict";
            var s = c("nKUr"),
                a = c("q1tI"),
                n = c("YFqc"),
                r = c.n(n),
                i = c("3Z9Z"),
                l = c("JI6e"),
                o = c("KSab");
            t.a = function() {
                return Object(s.jsxs)(a.Fragment, {
                    children: [Object(s.jsx)("footer", {
                        className: "footer",
                        children: Object(s.jsx)("div", {
                            className: "thm-container",
                            children: Object(s.jsxs)(i.a, {
                                children: [Object(s.jsx)(l.a, {
                                    lg: 4,
                                    children: Object(s.jsxs)("div", {
                                        className: "footer-widget about-widget",
                                        children: [Object(s.jsx)("div", {
                                            className: "title",
                                            children: Object(s.jsx)("h3", {
                                                children: o.r.title
                                            })
                                        }), Object(s.jsx)("p", {
                                            children: o.r.text
                                        }), Object(s.jsxs)("form", {
                                            action: "#",
                                            className: "footer-subscribe",
                                            children: [Object(s.jsx)("input", {
                                                type: "text",
                                                name: "email",
                                                placeholder: "Email address"
                                            }), Object(s.jsx)("button", {
                                                type: "submit",
                                                children: Object(s.jsx)("i", {
                                                    className: "fa fa-angle-right"
                                                })
                                            })]
                                        })]
                                    })
                                }), Object(s.jsx)(l.a, {
                                    lg: 2,
                                    children: Object(s.jsxs)("div", {
                                        className: "footer-widget links-widget explore",
                                        children: [Object(s.jsx)("div", {
                                            className: "title",
                                            children: Object(s.jsx)("h3", {
                                                children: o.u.title
                                            })
                                        }), Object(s.jsx)("ul", {
                                            className: "link-list",
                                            children: o.u.links.map((function(e, t) {
                                                var c = e.url,
                                                    a = e.label;
                                                return Object(s.jsx)("li", {
                                                    children: Object(s.jsx)(r.a, {
                                                        href: c,
                                                        children: Object(s.jsx)("a", {
                                                            children: a
                                                        })
                                                    })
                                                }, t)
                                            }))
                                        })]
                                    })
                                }), Object(s.jsx)(l.a, {
                                    lg: 3,
                                    children: Object(s.jsxs)("div", {
                                        className: "footer-widget post-widget services",
                                        children: [Object(s.jsx)("div", {
                                            className: "title",
                                            children: Object(s.jsx)("h3", {
                                                children: o.v.title
                                            })
                                        }), Object(s.jsx)("div", {
                                            className: "post-widget",
                                            children: o.v.posts.map((function(e, t) {
                                                var c = e.date,
                                                    a = e.title,
                                                    n = e.url;
                                                return Object(s.jsxs)("div", {
                                                    className: "single-post-widget",
                                                    children: [Object(s.jsx)(r.a, {
                                                        href: n,
                                                        children: Object(s.jsx)("a", {
                                                            className: "date",
                                                            children: c
                                                        })
                                                    }), Object(s.jsx)("h3", {
                                                        className: "post-title",
                                                        children: Object(s.jsx)(r.a, {
                                                            href: n,
                                                            children: Object(s.jsx)("a", {
                                                                children: a
                                                            })
                                                        })
                                                    })]
                                                }, t)
                                            }))
                                        })]
                                    })
                                }), Object(s.jsx)(l.a, {
                                    lg: 3,
                                    children: Object(s.jsxs)("div", {
                                        className: "footer-widget contact-widget",
                                        children: [Object(s.jsx)("div", {
                                            className: "title",
                                            children: Object(s.jsx)("h3", {
                                                children: o.t.title
                                            })
                                        }), o.t.infos.map((function(e, t) {
                                            var c = e.text,
                                                a = e.url;
                                            return Object(s.jsx)("p", {
                                                children: Object(s.jsx)("a", {
                                                    href: a,
                                                    children: c
                                                })
                                            }, t)
                                        }))]
                                    })
                                })]
                            })
                        })
                    }), Object(s.jsx)("div", {
                        className: "footer-bottom",
                        children: Object(s.jsxs)("div", {
                            className: "thm-container clearfix",
                            children: [Object(s.jsx)("div", {
                                className: "float-left copy-text",
                                children: Object(s.jsxs)("p", {
                                    children: ["\xa9 Copyright ", (new Date).getFullYear(), " Created by", " ", Object(s.jsx)("a", {
                                        href: "#",
                                        children: "Layerdrops Team"
                                    })]
                                })
                            }), Object(s.jsx)("div", {
                                className: "social-box float-right",
                                children: o.s.social.map((function(e, t) {
                                    var c = e.icon,
                                        a = e.url;
                                    return Object(s.jsx)("a", {
                                        href: a,
                                        className: "".concat(c, " hvr-pulse")
                                    }, t)
                                }))
                            })]
                        })
                    })]
                })
            }
        },
        "k+tD": function(e, t, c) {
            "use strict";
            var s = c("nKUr"),
                a = (c("q1tI"), c("KSab")),
                n = c("3Z9Z"),
                r = c("JI6e"),
                i = c("YFqc"),
                l = c.n(i),
                o = function(e) {
                    var t = e.data,
                        c = t.name,
                        a = t.price,
                        n = t.icon,
                        r = t.lists,
                        i = t.url;
                    return Object(s.jsxs)("div", {
                        className: "single-pricing text-center",
                        children: [Object(s.jsx)("span", {
                            className: "price-label",
                            children: c
                        }), Object(s.jsxs)("h3", {
                            children: [Object(s.jsx)("span", {
                                className: "price-currency",
                                children: "$"
                            }), a]
                        }), Object(s.jsx)("i", {
                            className: n
                        }), Object(s.jsx)("div", {
                            className: "line"
                        }), Object(s.jsx)("ul", {
                            className: "list-box",
                            children: r.map((function(e, t) {
                                var c = e.name;
                                return Object(s.jsx)("li", {
                                    children: c
                                }, t)
                            }))
                        }), Object(s.jsx)(l.a, {
                            href: i,
                            children: Object(s.jsx)("a", {
                                className: "thm-btn yellow-bg",
                                children: "Select Plan"
                            })
                        })]
                    })
                };
            t.a = function() {
                var e = a.y.sectionContent,
                    t = a.y.posts;
                return Object(s.jsx)("section", {
                    className: "pricing-section sec-pad",
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
                        }), Object(s.jsx)(n.a, {
                            children: t.map((function(e, t) {
                                return Object(s.jsx)(r.a, {
                                    md: 12,
                                    lg: 4,
                                    children: Object(s.jsx)(o, {
                                        data: e
                                    })
                                }, t)
                            }))
                        })]
                    })
                })
            }
        },
        "nR+J": function(e, t, c) {
            "use strict";
            var s = c("nKUr"),
                a = (c("q1tI"), c("0KWo")),
                n = c("KSab"),
                r = c("3Z9Z"),
                i = c("JI6e");
            t.a = function() {
                return Object(s.jsx)("section", {
                    className: "contact-section sec-pad",
                    children: Object(s.jsx)("div", {
                        className: "thm-container",
                        children: Object(s.jsxs)(r.a, {
                            children: [Object(s.jsx)(i.a, {
                                lg: 8,
                                children: Object(s.jsxs)("div", {
                                    className: "contact-form-content",
                                    children: [Object(s.jsx)(a.a, {
                                        data: n.l.sectionContent
                                    }), Object(s.jsxs)("form", {
                                        action: "inc/sendemail.php",
                                        className: "contact-form",
                                        children: [Object(s.jsx)("input", {
                                            type: "text",
                                            name: "name",
                                            placeholder: "Your full name"
                                        }), Object(s.jsx)("input", {
                                            type: "text",
                                            name: "email",
                                            placeholder: "Your email address"
                                        }), Object(s.jsx)("textarea", {
                                            name: "message",
                                            placeholder: "What you are looking for?"
                                        }), Object(s.jsx)("button", {
                                            type: "submit",
                                            className: "thm-btn yellow-bg",
                                            children: "Submit Now"
                                        }), Object(s.jsx)("div", {
                                            className: "form-result"
                                        })]
                                    })]
                                })
                            }), Object(s.jsx)(i.a, {
                                lg: 4,
                                children: Object(s.jsxs)("div", {
                                    className: "contact-info text-center",
                                    children: [Object(s.jsx)(a.a, {
                                        data: n.m.sectionContent
                                    }), n.m.posts.map((function(e, t) {
                                        var c = e.title,
                                            a = e.text,
                                            n = e.socials;
                                        return Object(s.jsxs)("div", {
                                            className: "single-contact-info",
                                            children: [Object(s.jsx)("h4", {
                                                children: c
                                            }), void 0 !== a ? Object(s.jsx)("p", {
                                                children: a
                                            }) : null, void 0 !== n ? Object(s.jsx)("div", {
                                                className: "social",
                                                children: n.map((function(e, t) {
                                                    var c = e.icon,
                                                        a = e.url;
                                                    return Object(s.jsx)("a", {
                                                        href: a,
                                                        className: "".concat(c, " hvr-pulse")
                                                    }, t)
                                                }))
                                            }) : null]
                                        }, t)
                                    }))]
                                })
                            })]
                        })
                    })
                })
            }
        },
        vUet: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return r
            }));
            c("wx14");
            var s = c("q1tI"),
                a = c.n(s),
                n = a.a.createContext({});
            n.Consumer, n.Provider;

            function r(e, t) {
                var c = Object(s.useContext)(n);
                return e || c[t] || t
            }
        },
        wx14: function(e, t, c) {
            "use strict";

            function s() {
                return (s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var c = arguments[t];
                        for (var s in c) Object.prototype.hasOwnProperty.call(c, s) && (e[s] = c[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            c.d(t, "a", (function() {
                return s
            }))
        },
        zLVn: function(e, t, c) {
            "use strict";

            function s(e, t) {
                if (null == e) return {};
                var c, s, a = {},
                    n = Object.keys(e);
                for (s = 0; s < n.length; s++) c = n[s], t.indexOf(c) >= 0 || (a[c] = e[c]);
                return a
            }
            c.d(t, "a", (function() {
                return s
            }))
        }
    },
    [
        ["5CJo", 0, 2, 1, 3]
    ]
]);