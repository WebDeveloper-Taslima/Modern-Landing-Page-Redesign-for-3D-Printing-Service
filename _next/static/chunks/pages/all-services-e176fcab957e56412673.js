_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [12], {
        "4g6W": function(e, c, t) {
            "use strict";
            var s = t("nKUr");
            t("q1tI");
            c.a = function(e) {
                var c = e.textAlignment;
                return Object(s.jsx)("nav", {
                    "aria-label": "Page navigation ",
                    className: "text-".concat(c),
                    children: Object(s.jsxs)("ul", {
                        className: "pagination clearfix d-flex justify-content-center align-item-center",
                        children: [Object(s.jsx)("li", {
                            children: Object(s.jsx)("a", {
                                href: "#",
                                "aria-label": "Previous",
                                children: Object(s.jsx)("span", {
                                    "aria-hidden": "true",
                                    children: "\xab"
                                })
                            })
                        }), Object(s.jsx)("li", {
                            className: "active",
                            children: Object(s.jsx)("a", {
                                href: "#",
                                children: "1"
                            })
                        }), Object(s.jsx)("li", {
                            children: Object(s.jsx)("a", {
                                href: "#",
                                children: "2"
                            })
                        }), Object(s.jsx)("li", {
                            children: Object(s.jsx)("a", {
                                href: "#",
                                children: "3"
                            })
                        }), Object(s.jsx)("li", {
                            children: Object(s.jsx)("a", {
                                href: "#",
                                children: "4"
                            })
                        }), Object(s.jsx)("li", {
                            children: Object(s.jsx)("a", {
                                href: "#",
                                children: "5"
                            })
                        }), Object(s.jsx)("li", {
                            children: Object(s.jsx)("a", {
                                href: "#",
                                "aria-label": "Next",
                                children: Object(s.jsx)("span", {
                                    "aria-hidden": "true",
                                    children: "\xbb"
                                })
                            })
                        })]
                    })
                })
            }
        },
        IYbK: function(e, c, t) {
            "use strict";
            var s = t("nKUr"),
                a = t("YFqc"),
                i = t.n(a);
            t("q1tI");
            c.a = function(e) {
                var c = e.data,
                    t = c.image,
                    a = c.title,
                    n = c.count,
                    r = c.price,
                    j = c.text,
                    l = c.url;
                return Object(s.jsxs)("div", {
                    className: "single-service-three",
                    children: [Object(s.jsx)("div", {
                        className: "img-box",
                        children: Object(s.jsx)("img", {
                            src: t,
                            alt: a
                        })
                    }), Object(s.jsxs)("div", {
                        className: "text-box hvr-bounce-to-bottom",
                        children: [Object(s.jsx)(i.a, {
                            href: l,
                            children: Object(s.jsx)("a", {
                                children: Object(s.jsx)("h3", {
                                    children: a
                                })
                            })
                        }), Object(s.jsx)("div", {
                            className: "meta-info",
                            children: Object(s.jsxs)("p", {
                                children: [n, " cards from ", Object(s.jsxs)("span", {
                                    children: ["$", r]
                                })]
                            })
                        }), Object(s.jsx)("p", {
                            children: j
                        }), Object(s.jsx)(i.a, {
                            href: l,
                            children: Object(s.jsx)("a", {
                                className: "read-more fas fa-angle-right"
                            })
                        })]
                    })]
                })
            }
        },
        UaQg: function(e, c, t) {
            "use strict";
            var s = t("nKUr"),
                a = t("q1tI"),
                i = t("YFqc"),
                n = t.n(i);
            c.a = function(e) {
                var c = e.title,
                    t = e.name;
                return Object(s.jsxs)(a.Fragment, {
                    children: [Object(s.jsx)("section", {
                        className: "page-title",
                        children: Object(s.jsx)("div", {
                            className: "thm-container",
                            children: Object(s.jsx)("h3", {
                                children: c
                            })
                        })
                    }), Object(s.jsx)("div", {
                        className: "breadcumb-wrapper",
                        children: Object(s.jsx)("div", {
                            className: "thm-container",
                            children: Object(s.jsxs)("ul", {
                                className: "breadcumb",
                                children: [Object(s.jsx)("li", {
                                    children: Object(s.jsx)(n.a, {
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
                                        children: t
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        },
        p59v: function(e, c, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/all-services", function() {
                return t("yy0t")
            }])
        },
        yy0t: function(e, c, t) {
            "use strict";
            t.r(c);
            var s = t("nKUr"),
                a = (t("q1tI"), t("jX8a")),
                i = t("aIN1"),
                n = t("CafY"),
                r = t("UaQg"),
                j = t("4g6W"),
                l = t("3Z9Z"),
                b = t("JI6e"),
                d = t("KSab"),
                h = t("IYbK"),
                x = function() {
                    return Object(s.jsx)("section", {
                        className: "service-style-three sec-pad",
                        children: Object(s.jsxs)("div", {
                            className: "thm-container",
                            children: [Object(s.jsx)(l.a, {
                                children: d.C.map((function(e, c) {
                                    return Object(s.jsx)(b.a, {
                                        md: 6,
                                        lg: 4,
                                        children: Object(s.jsx)(h.a, {
                                            data: e
                                        })
                                    }, c)
                                }))
                            }), Object(s.jsx)(j.a, {})]
                        })
                    })
                },
                O = t("5fB9"),
                o = t("LvMP");
            c.default = function() {
                return Object(s.jsx)(O.b, {
                    children: Object(s.jsxs)(n.a, {
                        PageTitle: "All Services",
                        children: [Object(s.jsx)(o.a, {}), Object(s.jsx)(r.a, {
                            title: "All Services",
                            name: "Services"
                        }), Object(s.jsx)(x, {}), Object(s.jsx)(a.a, {}), Object(s.jsx)(i.a, {})]
                    })
                })
            }
        }
    },
    [
        ["p59v", 0, 2, 1, 3, 4]
    ]
]);