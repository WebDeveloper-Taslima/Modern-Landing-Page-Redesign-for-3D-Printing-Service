_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [13], {
        "20a2": function(e, t, c) {
            e.exports = c("nOHt")
        },
        "3Z9Z": function(e, t, c) {
            "use strict";
            var a = c("wx14"),
                s = c("zLVn"),
                n = c("TSYQ"),
                r = c.n(n),
                i = c("q1tI"),
                l = c.n(i),
                j = c("vUet"),
                d = ["xl", "lg", "md", "sm", "xs"],
                o = l.a.forwardRef((function(e, t) {
                    var c = e.bsPrefix,
                        n = e.className,
                        i = e.noGutters,
                        o = e.as,
                        b = void 0 === o ? "div" : o,
                        h = Object(s.a)(e, ["bsPrefix", "className", "noGutters", "as"]),
                        x = Object(j.a)(c, "row"),
                        u = x + "-cols",
                        O = [];
                    return d.forEach((function(e) {
                        var t, c = h[e];
                        delete h[e];
                        var a = "xs" !== e ? "-" + e : "";
                        null != (t = null != c && "object" === typeof c ? c.cols : c) && O.push("" + u + a + "-" + t)
                    })), l.a.createElement(b, Object(a.a)({
                        ref: t
                    }, h, {
                        className: r.a.apply(void 0, [n, x, i && "no-gutters"].concat(O))
                    }))
                }));
            o.displayName = "Row", o.defaultProps = {
                noGutters: !1
            }, t.a = o
        },
        "4g6W": function(e, t, c) {
            "use strict";
            var a = c("nKUr");
            c("q1tI");
            t.a = function(e) {
                var t = e.textAlignment;
                return Object(a.jsx)("nav", {
                    "aria-label": "Page navigation ",
                    className: "text-".concat(t),
                    children: Object(a.jsxs)("ul", {
                        className: "pagination clearfix d-flex justify-content-center align-item-center",
                        children: [Object(a.jsx)("li", {
                            children: Object(a.jsx)("a", {
                                href: "#",
                                "aria-label": "Previous",
                                children: Object(a.jsx)("span", {
                                    "aria-hidden": "true",
                                    children: "\xab"
                                })
                            })
                        }), Object(a.jsx)("li", {
                            className: "active",
                            children: Object(a.jsx)("a", {
                                href: "#",
                                children: "1"
                            })
                        }), Object(a.jsx)("li", {
                            children: Object(a.jsx)("a", {
                                href: "#",
                                children: "2"
                            })
                        }), Object(a.jsx)("li", {
                            children: Object(a.jsx)("a", {
                                href: "#",
                                children: "3"
                            })
                        }), Object(a.jsx)("li", {
                            children: Object(a.jsx)("a", {
                                href: "#",
                                children: "4"
                            })
                        }), Object(a.jsx)("li", {
                            children: Object(a.jsx)("a", {
                                href: "#",
                                children: "5"
                            })
                        }), Object(a.jsx)("li", {
                            children: Object(a.jsx)("a", {
                                href: "#",
                                "aria-label": "Next",
                                children: Object(a.jsx)("span", {
                                    "aria-hidden": "true",
                                    children: "\xbb"
                                })
                            })
                        })]
                    })
                })
            }
        },
        BR8T: function(e, t, c) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/blog", function() {
                return c("YbiN")
            }])
        },
        JI6e: function(e, t, c) {
            "use strict";
            var a = c("wx14"),
                s = c("zLVn"),
                n = c("TSYQ"),
                r = c.n(n),
                i = c("q1tI"),
                l = c.n(i),
                j = c("vUet"),
                d = ["xl", "lg", "md", "sm", "xs"],
                o = l.a.forwardRef((function(e, t) {
                    var c = e.bsPrefix,
                        n = e.className,
                        i = e.as,
                        o = void 0 === i ? "div" : i,
                        b = Object(s.a)(e, ["bsPrefix", "className", "as"]),
                        h = Object(j.a)(c, "col"),
                        x = [],
                        u = [];
                    return d.forEach((function(e) {
                        var t, c, a, s = b[e];
                        if (delete b[e], "object" === typeof s && null != s) {
                            var n = s.span;
                            t = void 0 === n || n, c = s.offset, a = s.order
                        } else t = s;
                        var r = "xs" !== e ? "-" + e : "";
                        t && x.push(!0 === t ? "" + h + r : "" + h + r + "-" + t), null != a && u.push("order" + r + "-" + a), null != c && u.push("offset" + r + "-" + c)
                    })), x.length || x.push(h), l.a.createElement(o, Object(a.a)({}, b, {
                        ref: t,
                        className: r.a.apply(void 0, [n].concat(x, u))
                    }))
                }));
            o.displayName = "Col", t.a = o
        },
        LvMP: function(e, t, c) {
            "use strict";
            var a = c("nKUr"),
                s = c("q1tI"),
                n = c("KSab"),
                r = c("YFqc"),
                i = c.n(r),
                l = c("20a2"),
                j = c("5fB9");
            t.a = function() {
                var e = Object(l.useRouter)(),
                    t = Object(s.useState)(!1),
                    c = t[0],
                    r = t[1],
                    d = Object(s.useContext)(j.a),
                    o = d.menuStatus,
                    b = d.updateMenuStatus,
                    h = function() {
                        window.scrollY > 70 ? r(!0) : window.scrollY < 70 && r(!1)
                    };
                return Object(s.useEffect)((function() {
                    return window.addEventListener("scroll", h),
                        function() {
                            window.removeEventListener("scroll", h)
                        }
                }), [c]), Object(a.jsx)("header", {
                    className: "header home-page-one",
                    children: Object(a.jsx)("nav", {
                        className: "navbar navbar-default header-navigation  ".concat(!0 === c ? " stricky stricky-fixed slideInDown animated" : " stricky slideIn animated"),
                        children: Object(a.jsxs)("div", {
                            className: "thm-container clearfix",
                            children: [Object(a.jsxs)("div", {
                                className: "navbar-header",
                                children: [Object(a.jsx)(i.a, {
                                    href: "/",
                                    children: Object(a.jsx)("a", {
                                        className: "navbar-brand",
                                        children: Object(a.jsx)("img", {
                                            src: n.w.dark,
                                            alt: "Awesome Image"
                                        })
                                    })
                                }), Object(a.jsx)("span", {
                                    className: "mobile-menu__toggler",
                                    onClick: function(e) {
                                        e.preventDefault(), b(!o)
                                    },
                                    children: Object(a.jsx)("i", {
                                        className: "fa fa-bars"
                                    })
                                })]
                            }), Object(a.jsx)("div", {
                                className: "collapse show navbar-collapse main-navigation mainmenu ",
                                id: "main-nav-bar",
                                children: Object(a.jsx)("ul", {
                                    className: "nav navbar-nav navigation-box",
                                    children: n.x.map((function(t, c) {
                                        return Object(a.jsxs)("li", {
                                            className: e.pathname == t.url ? "active" : "",
                                            children: [Object(a.jsx)(i.a, {
                                                href: t.url,
                                                children: Object(a.jsx)("a", {
                                                    children: t.name
                                                })
                                            }), void 0 !== t.subItems ? Object(a.jsx)("ul", {
                                                className: "sub-menu",
                                                children: t.subItems.map((function(e, t) {
                                                    return Object(a.jsx)("li", {
                                                        children: Object(a.jsx)(i.a, {
                                                            href: e.url,
                                                            children: Object(a.jsx)("a", {
                                                                children: e.name
                                                            })
                                                        })
                                                    }, t)
                                                }))
                                            }) : null]
                                        }, c)
                                    }))
                                })
                            }), Object(a.jsx)("div", {
                                className: "right-side-box",
                                children: Object(a.jsx)("div", {
                                    className: "social",
                                    children: n.s.social.map((function(e, t) {
                                        var c = e.icon,
                                            s = e.url;
                                        return Object(a.jsx)("a", {
                                            href: s,
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
            var a;
            ! function() {
                "use strict";
                var c = {}.hasOwnProperty;

                function s() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var a = arguments[t];
                        if (a) {
                            var n = typeof a;
                            if ("string" === n || "number" === n) e.push(a);
                            else if (Array.isArray(a) && a.length) {
                                var r = s.apply(null, a);
                                r && e.push(r)
                            } else if ("object" === n)
                                for (var i in a) c.call(a, i) && a[i] && e.push(i)
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (s.default = s, e.exports = s) : void 0 === (a = function() {
                    return s
                }.apply(t, [])) || (e.exports = a)
            }()
        },
        UaQg: function(e, t, c) {
            "use strict";
            var a = c("nKUr"),
                s = c("q1tI"),
                n = c("YFqc"),
                r = c.n(n);
            t.a = function(e) {
                var t = e.title,
                    c = e.name;
                return Object(a.jsxs)(s.Fragment, {
                    children: [Object(a.jsx)("section", {
                        className: "page-title",
                        children: Object(a.jsx)("div", {
                            className: "thm-container",
                            children: Object(a.jsx)("h3", {
                                children: t
                            })
                        })
                    }), Object(a.jsx)("div", {
                        className: "breadcumb-wrapper",
                        children: Object(a.jsx)("div", {
                            className: "thm-container",
                            children: Object(a.jsxs)("ul", {
                                className: "breadcumb",
                                children: [Object(a.jsx)("li", {
                                    children: Object(a.jsx)(r.a, {
                                        href: "/",
                                        children: Object(a.jsx)("a", {
                                            children: "Homepage"
                                        })
                                    })
                                }), Object(a.jsx)("li", {
                                    children: Object(a.jsx)("span", {
                                        className: "sep",
                                        children: "-"
                                    })
                                }), Object(a.jsx)("li", {
                                    children: Object(a.jsx)("span", {
                                        children: c
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        },
        YbiN: function(e, t, c) {
            "use strict";
            c.r(t);
            var a = c("nKUr"),
                s = (c("q1tI"), c("CafY")),
                n = c("UaQg"),
                r = c("aIN1"),
                i = c("3Z9Z"),
                l = c("JI6e"),
                j = c("KSab"),
                d = c("k4Hf"),
                o = c("4g6W"),
                b = function() {
                    return Object(a.jsx)("section", {
                        className: "blog-style-one sec-pad blog-page",
                        children: Object(a.jsxs)("div", {
                            className: "thm-container",
                            children: [Object(a.jsx)(i.a, {
                                children: j.f.map((function(e, t) {
                                    return Object(a.jsx)(l.a, {
                                        md: 6,
                                        children: Object(a.jsx)(d.a, {
                                            data: e
                                        })
                                    }, t)
                                }))
                            }), Object(a.jsx)(o.a, {})]
                        })
                    })
                },
                h = c("LvMP"),
                x = c("5fB9");
            t.default = function() {
                return Object(a.jsx)(x.b, {
                    children: Object(a.jsxs)(s.a, {
                        PageTitle: "Blog Page",
                        children: [Object(a.jsx)(h.a, {}), Object(a.jsx)(n.a, {
                            title: "Latest News",
                            name: "Latest News"
                        }), Object(a.jsx)(b, {}), Object(a.jsx)(r.a, {})]
                    })
                })
            }
        },
        aIN1: function(e, t, c) {
            "use strict";
            var a = c("nKUr"),
                s = c("q1tI"),
                n = c("YFqc"),
                r = c.n(n),
                i = c("3Z9Z"),
                l = c("JI6e"),
                j = c("KSab");
            t.a = function() {
                return Object(a.jsxs)(s.Fragment, {
                    children: [Object(a.jsx)("footer", {
                        className: "footer",
                        children: Object(a.jsx)("div", {
                            className: "thm-container",
                            children: Object(a.jsxs)(i.a, {
                                children: [Object(a.jsx)(l.a, {
                                    lg: 4,
                                    children: Object(a.jsxs)("div", {
                                        className: "footer-widget about-widget",
                                        children: [Object(a.jsx)("div", {
                                            className: "title",
                                            children: Object(a.jsx)("h3", {
                                                children: j.r.title
                                            })
                                        }), Object(a.jsx)("p", {
                                            children: j.r.text
                                        }), Object(a.jsxs)("form", {
                                            action: "#",
                                            className: "footer-subscribe",
                                            children: [Object(a.jsx)("input", {
                                                type: "text",
                                                name: "email",
                                                placeholder: "Email address"
                                            }), Object(a.jsx)("button", {
                                                type: "submit",
                                                children: Object(a.jsx)("i", {
                                                    className: "fa fa-angle-right"
                                                })
                                            })]
                                        })]
                                    })
                                }), Object(a.jsx)(l.a, {
                                    lg: 2,
                                    children: Object(a.jsxs)("div", {
                                        className: "footer-widget links-widget explore",
                                        children: [Object(a.jsx)("div", {
                                            className: "title",
                                            children: Object(a.jsx)("h3", {
                                                children: j.u.title
                                            })
                                        }), Object(a.jsx)("ul", {
                                            className: "link-list",
                                            children: j.u.links.map((function(e, t) {
                                                var c = e.url,
                                                    s = e.label;
                                                return Object(a.jsx)("li", {
                                                    children: Object(a.jsx)(r.a, {
                                                        href: c,
                                                        children: Object(a.jsx)("a", {
                                                            children: s
                                                        })
                                                    })
                                                }, t)
                                            }))
                                        })]
                                    })
                                }), Object(a.jsx)(l.a, {
                                    lg: 3,
                                    children: Object(a.jsxs)("div", {
                                        className: "footer-widget post-widget services",
                                        children: [Object(a.jsx)("div", {
                                            className: "title",
                                            children: Object(a.jsx)("h3", {
                                                children: j.v.title
                                            })
                                        }), Object(a.jsx)("div", {
                                            className: "post-widget",
                                            children: j.v.posts.map((function(e, t) {
                                                var c = e.date,
                                                    s = e.title,
                                                    n = e.url;
                                                return Object(a.jsxs)("div", {
                                                    className: "single-post-widget",
                                                    children: [Object(a.jsx)(r.a, {
                                                        href: n,
                                                        children: Object(a.jsx)("a", {
                                                            className: "date",
                                                            children: c
                                                        })
                                                    }), Object(a.jsx)("h3", {
                                                        className: "post-title",
                                                        children: Object(a.jsx)(r.a, {
                                                            href: n,
                                                            children: Object(a.jsx)("a", {
                                                                children: s
                                                            })
                                                        })
                                                    })]
                                                }, t)
                                            }))
                                        })]
                                    })
                                }), Object(a.jsx)(l.a, {
                                    lg: 3,
                                    children: Object(a.jsxs)("div", {
                                        className: "footer-widget contact-widget",
                                        children: [Object(a.jsx)("div", {
                                            className: "title",
                                            children: Object(a.jsx)("h3", {
                                                children: j.t.title
                                            })
                                        }), j.t.infos.map((function(e, t) {
                                            var c = e.text,
                                                s = e.url;
                                            return Object(a.jsx)("p", {
                                                children: Object(a.jsx)("a", {
                                                    href: s,
                                                    children: c
                                                })
                                            }, t)
                                        }))]
                                    })
                                })]
                            })
                        })
                    }), Object(a.jsx)("div", {
                        className: "footer-bottom",
                        children: Object(a.jsxs)("div", {
                            className: "thm-container clearfix",
                            children: [Object(a.jsx)("div", {
                                className: "float-left copy-text",
                                children: Object(a.jsxs)("p", {
                                    children: ["\xa9 Copyright ", (new Date).getFullYear(), " Created by", " ", Object(a.jsx)("a", {
                                        href: "#",
                                        children: "Layerdrops Team"
                                    })]
                                })
                            }), Object(a.jsx)("div", {
                                className: "social-box float-right",
                                children: j.s.social.map((function(e, t) {
                                    var c = e.icon,
                                        s = e.url;
                                    return Object(a.jsx)("a", {
                                        href: s,
                                        className: "".concat(c, " hvr-pulse")
                                    }, t)
                                }))
                            })]
                        })
                    })]
                })
            }
        },
        k4Hf: function(e, t, c) {
            "use strict";
            var a = c("nKUr"),
                s = (c("q1tI"), c("YFqc")),
                n = c.n(s);
            t.a = function(e) {
                var t = e.data,
                    c = t.title,
                    s = t.text,
                    r = t.image,
                    i = t.author,
                    l = t.date,
                    j = t.commentCount,
                    d = t.url;
                return Object(a.jsxs)("div", {
                    className: "single-blog-post",
                    children: [Object(a.jsxs)("div", {
                        className: "text-box hvr-bounce-to-bottom",
                        children: [Object(a.jsx)(n.a, {
                            href: d,
                            children: Object(a.jsx)("a", {
                                children: Object(a.jsx)("h3", {
                                    children: c
                                })
                            })
                        }), Object(a.jsx)("p", {
                            children: s
                        })]
                    }), Object(a.jsxs)("div", {
                        className: "img-box",
                        children: [Object(a.jsx)("img", {
                            src: r,
                            alt: c
                        }), Object(a.jsxs)("div", {
                            className: "meta-info",
                            children: [Object(a.jsx)(n.a, {
                                href: d,
                                children: Object(a.jsxs)("a", {
                                    children: [Object(a.jsx)("i", {
                                        className: "fas fa-user"
                                    }), " by ", i]
                                })
                            }), Object(a.jsx)(n.a, {
                                href: d,
                                children: Object(a.jsxs)("a", {
                                    children: [Object(a.jsx)("i", {
                                        className: "fas fa-calendar"
                                    }), " ", l]
                                })
                            }), Object(a.jsx)(n.a, {
                                href: d,
                                children: Object(a.jsxs)("a", {
                                    children: [Object(a.jsx)("i", {
                                        className: "fas fa-comments"
                                    }), " ", j]
                                })
                            })]
                        }), Object(a.jsx)(n.a, {
                            href: d,
                            children: Object(a.jsx)("a", {
                                className: "read-more fas fa-angle-right"
                            })
                        })]
                    })]
                })
            }
        },
        vUet: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return r
            }));
            c("wx14");
            var a = c("q1tI"),
                s = c.n(a),
                n = s.a.createContext({});
            n.Consumer, n.Provider;

            function r(e, t) {
                var c = Object(a.useContext)(n);
                return e || c[t] || t
            }
        },
        wx14: function(e, t, c) {
            "use strict";

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var c = arguments[t];
                        for (var a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            c.d(t, "a", (function() {
                return a
            }))
        },
        zLVn: function(e, t, c) {
            "use strict";

            function a(e, t) {
                if (null == e) return {};
                var c, a, s = {},
                    n = Object.keys(e);
                for (a = 0; a < n.length; a++) c = n[a], t.indexOf(c) >= 0 || (s[c] = e[c]);
                return s
            }
            c.d(t, "a", (function() {
                return a
            }))
        }
    },
    [
        ["BR8T", 0, 2, 1, 3]
    ]
]);