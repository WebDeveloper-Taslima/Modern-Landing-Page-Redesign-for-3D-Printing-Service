_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [15], {
        "0KWo": function(e, t, c) {
            "use strict";
            var a = c("nKUr");
            c("q1tI");
            t.a = function(e) {
                var t = e.data,
                    c = t.textAlignment,
                    s = t.subText,
                    n = t.title;
                return Object(a.jsxs)("div", {
                    className: "title text-".concat(c),
                    children: [Object(a.jsx)("span", {
                        children: s
                    }), Object(a.jsx)("h2", {
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
            var a = c("wx14"),
                s = c("zLVn"),
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
                        b = Object(s.a)(e, ["bsPrefix", "className", "noGutters", "as"]),
                        h = Object(o.a)(c, "row"),
                        m = h + "-cols",
                        x = [];
                    return j.forEach((function(e) {
                        var t, c = b[e];
                        delete b[e];
                        var a = "xs" !== e ? "-" + e : "";
                        null != (t = null != c && "object" === typeof c ? c.cols : c) && x.push("" + m + a + "-" + t)
                    })), l.a.createElement(u, Object(a.a)({
                        ref: t
                    }, b, {
                        className: r.a.apply(void 0, [n, h, i && "no-gutters"].concat(x))
                    }))
                }));
            d.displayName = "Row", d.defaultProps = {
                noGutters: !1
            }, t.a = d
        },
        ALdH: function(e, t, c) {
            "use strict";
            c.r(t);
            var a = c("nKUr"),
                s = (c("q1tI"), c("nR+J")),
                n = c("aIN1"),
                r = c("OvZQ"),
                i = c("CafY"),
                l = c("5fB9"),
                o = c("LvMP");
            t.default = function() {
                return Object(a.jsx)(l.b, {
                    children: Object(a.jsxs)(i.a, {
                        PageTitle: "Contact Page",
                        children: [Object(a.jsx)(o.a, {}), Object(a.jsx)(r.a, {
                            extraClassName: "contact-page"
                        }), Object(a.jsx)(s.a, {}), Object(a.jsx)(n.a, {})]
                    })
                })
            }
        },
        JI6e: function(e, t, c) {
            "use strict";
            var a = c("wx14"),
                s = c("zLVn"),
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
                        u = Object(s.a)(e, ["bsPrefix", "className", "as"]),
                        b = Object(o.a)(c, "col"),
                        h = [],
                        m = [];
                    return j.forEach((function(e) {
                        var t, c, a, s = u[e];
                        if (delete u[e], "object" === typeof s && null != s) {
                            var n = s.span;
                            t = void 0 === n || n, c = s.offset, a = s.order
                        } else t = s;
                        var r = "xs" !== e ? "-" + e : "";
                        t && h.push(!0 === t ? "" + b + r : "" + b + r + "-" + t), null != a && m.push("order" + r + "-" + a), null != c && m.push("offset" + r + "-" + c)
                    })), h.length || h.push(b), l.a.createElement(d, Object(a.a)({}, u, {
                        ref: t,
                        className: r.a.apply(void 0, [n].concat(h, m))
                    }))
                }));
            d.displayName = "Col", t.a = d
        },
        LvMP: function(e, t, c) {
            "use strict";
            var a = c("nKUr"),
                s = c("q1tI"),
                n = c("KSab"),
                r = c("YFqc"),
                i = c.n(r),
                l = c("20a2"),
                o = c("5fB9");
            t.a = function() {
                var e = Object(l.useRouter)(),
                    t = Object(s.useState)(!1),
                    c = t[0],
                    r = t[1],
                    j = Object(s.useContext)(o.a),
                    d = j.menuStatus,
                    u = j.updateMenuStatus,
                    b = function() {
                        window.scrollY > 70 ? r(!0) : window.scrollY < 70 && r(!1)
                    };
                return Object(s.useEffect)((function() {
                    return window.addEventListener("scroll", b),
                        function() {
                            window.removeEventListener("scroll", b)
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
                                        e.preventDefault(), u(!d)
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
        OvZQ: function(e, t, c) {
            "use strict";
            var a = c("nKUr");
            c("q1tI");
            t.a = function(e) {
                var t = e.extraClassName;
                return Object(a.jsx)("div", {
                    className: "google-map__".concat(t),
                    children: Object(a.jsx)("iframe", {
                        title: "template google map",
                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd",
                        className: "map__".concat(t),
                        allowFullScreen: !0
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
        aIN1: function(e, t, c) {
            "use strict";
            var a = c("nKUr"),
                s = c("q1tI"),
                n = c("YFqc"),
                r = c.n(n),
                i = c("3Z9Z"),
                l = c("JI6e"),
                o = c("KSab");
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
                                                children: o.r.title
                                            })
                                        }), Object(a.jsx)("p", {
                                            children: o.r.text
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
                                                children: o.u.title
                                            })
                                        }), Object(a.jsx)("ul", {
                                            className: "link-list",
                                            children: o.u.links.map((function(e, t) {
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
                                                children: o.v.title
                                            })
                                        }), Object(a.jsx)("div", {
                                            className: "post-widget",
                                            children: o.v.posts.map((function(e, t) {
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
                                                children: o.t.title
                                            })
                                        }), o.t.infos.map((function(e, t) {
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
                                children: o.s.social.map((function(e, t) {
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
        lqnA: function(e, t, c) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/contact", function() {
                return c("ALdH")
            }])
        },
        "nR+J": function(e, t, c) {
            "use strict";
            var a = c("nKUr"),
                s = (c("q1tI"), c("0KWo")),
                n = c("KSab"),
                r = c("3Z9Z"),
                i = c("JI6e");
            t.a = function() {
                return Object(a.jsx)("section", {
                    className: "contact-section sec-pad",
                    children: Object(a.jsx)("div", {
                        className: "thm-container",
                        children: Object(a.jsxs)(r.a, {
                            children: [Object(a.jsx)(i.a, {
                                lg: 8,
                                children: Object(a.jsxs)("div", {
                                    className: "contact-form-content",
                                    children: [Object(a.jsx)(s.a, {
                                        data: n.l.sectionContent
                                    }), Object(a.jsxs)("form", {
                                        action: "inc/sendemail.php",
                                        className: "contact-form",
                                        children: [Object(a.jsx)("input", {
                                            type: "text",
                                            name: "name",
                                            placeholder: "Your full name"
                                        }), Object(a.jsx)("input", {
                                            type: "text",
                                            name: "email",
                                            placeholder: "Your email address"
                                        }), Object(a.jsx)("textarea", {
                                            name: "message",
                                            placeholder: "What you are looking for?"
                                        }), Object(a.jsx)("button", {
                                            type: "submit",
                                            className: "thm-btn yellow-bg",
                                            children: "Submit Now"
                                        }), Object(a.jsx)("div", {
                                            className: "form-result"
                                        })]
                                    })]
                                })
                            }), Object(a.jsx)(i.a, {
                                lg: 4,
                                children: Object(a.jsxs)("div", {
                                    className: "contact-info text-center",
                                    children: [Object(a.jsx)(s.a, {
                                        data: n.m.sectionContent
                                    }), n.m.posts.map((function(e, t) {
                                        var c = e.title,
                                            s = e.text,
                                            n = e.socials;
                                        return Object(a.jsxs)("div", {
                                            className: "single-contact-info",
                                            children: [Object(a.jsx)("h4", {
                                                children: c
                                            }), void 0 !== s ? Object(a.jsx)("p", {
                                                children: s
                                            }) : null, void 0 !== n ? Object(a.jsx)("div", {
                                                className: "social",
                                                children: n.map((function(e, t) {
                                                    var c = e.icon,
                                                        s = e.url;
                                                    return Object(a.jsx)("a", {
                                                        href: s,
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
        ["lqnA", 0, 2, 1, 3]
    ]
]);