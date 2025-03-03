_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [19], {
        "4g6W": function(e, c, t) {
            "use strict";
            var a = t("nKUr");
            t("q1tI");
            c.a = function(e) {
                var c = e.textAlignment;
                return Object(a.jsx)("nav", {
                    "aria-label": "Page navigation ",
                    className: "text-".concat(c),
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
        UaQg: function(e, c, t) {
            "use strict";
            var a = t("nKUr"),
                s = t("q1tI"),
                n = t("YFqc"),
                j = t.n(n);
            c.a = function(e) {
                var c = e.title,
                    t = e.name;
                return Object(a.jsxs)(s.Fragment, {
                    children: [Object(a.jsx)("section", {
                        className: "page-title",
                        children: Object(a.jsx)("div", {
                            className: "thm-container",
                            children: Object(a.jsx)("h3", {
                                children: c
                            })
                        })
                    }), Object(a.jsx)("div", {
                        className: "breadcumb-wrapper",
                        children: Object(a.jsx)("div", {
                            className: "thm-container",
                            children: Object(a.jsxs)("ul", {
                                className: "breadcumb",
                                children: [Object(a.jsx)("li", {
                                    children: Object(a.jsx)(j.a, {
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
                                        children: t
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        },
        aGbq: function(e, c, t) {
            "use strict";
            var a = t("nKUr"),
                s = (t("q1tI"), t("YFqc")),
                n = t.n(s);
            c.a = function(e) {
                var c = e.data,
                    t = c.image,
                    s = c.title,
                    j = c.category,
                    r = c.url;
                return Object(a.jsxs)("div", {
                    className: "single-recent-project",
                    children: [Object(a.jsx)("div", {
                        className: "img-box",
                        children: Object(a.jsx)("img", {
                            src: t,
                            alt: "Awesome Image"
                        })
                    }), Object(a.jsxs)("div", {
                        className: "text-box",
                        children: [Object(a.jsx)(n.a, {
                            href: r,
                            children: Object(a.jsx)("a", {
                                className: "more",
                                children: Object(a.jsx)("i", {
                                    className: "fas fa-plus"
                                })
                            })
                        }), Object(a.jsxs)("div", {
                            className: "inner hvr-bounce-to-bottom",
                            children: [Object(a.jsx)("span", {
                                children: j
                            }), Object(a.jsx)(n.a, {
                                href: r,
                                children: Object(a.jsx)("a", {
                                    children: Object(a.jsx)("h3", {
                                        children: s
                                    })
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        b6cx: function(e, c, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/project", function() {
                return t("mI7R")
            }])
        },
        mI7R: function(e, c, t) {
            "use strict";
            t.r(c);
            var a = t("nKUr"),
                s = (t("q1tI"), t("CafY")),
                n = t("UaQg"),
                j = t("4g6W"),
                r = t("3Z9Z"),
                i = t("JI6e"),
                l = t("KSab"),
                b = t("aGbq"),
                d = function() {
                    return Object(a.jsx)("section", {
                        className: "recent-projects project-page sec-pad",
                        children: Object(a.jsxs)("div", {
                            className: "thm-container",
                            children: [Object(a.jsx)(r.a, {
                                children: l.A.map((function(e, c) {
                                    return Object(a.jsx)(i.a, {
                                        md: 6,
                                        lg: 4,
                                        children: Object(a.jsx)(b.a, {
                                            data: e
                                        })
                                    }, c)
                                }))
                            }), Object(a.jsx)(j.a, {})]
                        })
                    })
                },
                h = t("jX8a"),
                x = t("aIN1"),
                O = t("LvMP"),
                o = t("5fB9");
            c.default = function() {
                return Object(a.jsx)(o.b, {
                    children: Object(a.jsxs)(s.a, {
                        PageTitle: "Projects Page",
                        children: [Object(a.jsx)(O.a, {}), Object(a.jsx)(n.a, {
                            title: "All Projects",
                            name: "All Projects"
                        }), Object(a.jsx)(d, {}), Object(a.jsx)(h.a, {}), Object(a.jsx)(x.a, {})]
                    })
                })
            }
        }
    },
    [
        ["b6cx", 0, 2, 1, 3, 4]
    ]
]);