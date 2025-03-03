_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [22], {
        Am4Y: function(e, c, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/services", function() {
                return t("eefG")
            }])
        },
        UaQg: function(e, c, t) {
            "use strict";
            var s = t("nKUr"),
                n = t("q1tI"),
                a = t("YFqc"),
                i = t.n(a);
            c.a = function(e) {
                var c = e.title,
                    t = e.name;
                return Object(s.jsxs)(n.Fragment, {
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
                                    children: Object(s.jsx)(i.a, {
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
        dZFG: function(e, c) {
            e.exports = "/_next/static/images/unique-feature-hand-fe4580e4091920b65c959c9c2fd4bd62.png"
        },
        eefG: function(e, c, t) {
            "use strict";
            t.r(c);
            var s = t("nKUr"),
                n = t("q1tI"),
                a = t("CafY"),
                i = t("aIN1"),
                j = t("jX8a"),
                r = t("UaQg"),
                l = t("KSab"),
                d = t("YFqc"),
                b = t.n(d),
                x = t("3Z9Z"),
                h = t("JI6e"),
                O = function() {
                    var e = l.p.sectionContent,
                        c = l.p.posts;
                    return Object(s.jsx)("section", {
                        className: "what-we-do sec-pad service-page",
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
                            }), Object(s.jsxs)(x.a, {
                                children: [Object(s.jsx)(h.a, {
                                    md: 6,
                                    children: Object(s.jsxs)("div", {
                                        className: "single-what-we-do",
                                        children: [Object(s.jsx)("div", {
                                            className: "img-box",
                                            children: Object(s.jsx)("img", {
                                                src: c[0].image,
                                                alt: ""
                                            })
                                        }), Object(s.jsxs)("div", {
                                            className: "text-box hvr-bounce-to-bottom",
                                            children: [Object(s.jsx)(b.a, {
                                                href: c[0].url,
                                                children: Object(s.jsx)("a", {
                                                    children: Object(s.jsx)("h3", {
                                                        children: c[0].title
                                                    })
                                                })
                                            }), Object(s.jsx)("p", {
                                                children: c[0].content
                                            }), Object(s.jsx)(b.a, {
                                                href: c[0].url,
                                                children: Object(s.jsx)("a", {
                                                    className: "read-more fas fa-angle-right"
                                                })
                                            })]
                                        })]
                                    })
                                }), Object(s.jsx)(h.a, {
                                    md: 6,
                                    children: c.slice(1, c.length).map((function(e, c) {
                                        var t = e.image,
                                            n = e.url,
                                            a = e.title,
                                            i = e.content;
                                        return Object(s.jsxs)("div", {
                                            className: "single-what-we-do-two clearfix",
                                            children: [Object(s.jsx)("div", {
                                                className: "img-box",
                                                children: Object(s.jsx)("img", {
                                                    src: t,
                                                    alt: "Awesome Image"
                                                })
                                            }), Object(s.jsxs)("div", {
                                                className: "text-box",
                                                children: [Object(s.jsx)("h3", {
                                                    children: Object(s.jsx)(b.a, {
                                                        href: n,
                                                        children: Object(s.jsx)("a", {
                                                            children: a
                                                        })
                                                    })
                                                }), Object(s.jsx)("p", {
                                                    children: i
                                                })]
                                            })]
                                        }, c)
                                    }))
                                })]
                            })]
                        })
                    })
                },
                o = t("v3ax"),
                m = function() {
                    var e = Object(n.useState)(1),
                        c = e[0],
                        t = e[1];
                    return Object(s.jsx)("section", {
                        className: "video-box-design-guide sec-pad service-tab-box",
                        children: Object(s.jsxs)("div", {
                            className: "thm-container",
                            children: [Object(s.jsx)("div", {
                                className: "tab-title",
                                children: Object(s.jsx)("ul", {
                                    className: "list-inline",
                                    children: l.D.map((function(e, n) {
                                        var a = e.title,
                                            i = e.icon;
                                        return Object(s.jsx)("li", {
                                            className: "".concat(c === n ? "active" : " "),
                                            children: Object(s.jsxs)("a", {
                                                className: "hvr-bounce-to-bottom",
                                                href: "service-tab-".concat(n),
                                                onClick: function(e) {
                                                    e.preventDefault(), t(n)
                                                },
                                                children: [Object(s.jsx)("i", {
                                                    className: i
                                                }), Object(s.jsx)("h3", {
                                                    children: a
                                                })]
                                            })
                                        }, n)
                                    }))
                                })
                            }), Object(s.jsx)("div", {
                                className: "tab-content",
                                children: l.D.map((function(e, t) {
                                    var n = e.content;
                                    return t === c ? Object(s.jsx)("div", {
                                        className: "single-tab-content tab-pane show fade in active animated fadeIn",
                                        children: Object(s.jsxs)("div", {
                                            className: "sec-title text-center mb0",
                                            children: [Object(s.jsx)("span", {
                                                children: n.subText
                                            }), Object(s.jsx)("h3", {
                                                children: n.title
                                            }), Object(s.jsx)("p", {
                                                children: n.content
                                            })]
                                        })
                                    }, t) : null
                                }))
                            })]
                        })
                    })
                },
                u = t("5fB9"),
                v = t("LvMP");
            c.default = function() {
                return Object(s.jsx)(u.b, {
                    children: Object(s.jsxs)(a.a, {
                        PageTitle: "Service Page",
                        children: [Object(s.jsx)(v.a, {}), Object(s.jsx)(r.a, {
                            title: "Services",
                            name: "Services"
                        }), Object(s.jsx)(m, {}), Object(s.jsx)(o.a, {}), Object(s.jsx)(O, {}), Object(s.jsx)(j.a, {}), Object(s.jsx)(i.a, {})]
                    })
                })
            }
        },
        v3ax: function(e, c, t) {
            "use strict";
            var s = t("nKUr"),
                n = (t("q1tI"), t("dZFG")),
                a = t.n(n),
                i = t("KSab"),
                j = t("3Z9Z"),
                r = t("JI6e"),
                l = t("YFqc"),
                d = t.n(l);
            c.a = function() {
                var e = i.q.sectionContent,
                    c = i.q.posts,
                    t = e.title,
                    n = e.subText,
                    l = e.content;
                return Object(s.jsxs)("section", {
                    className: "service-style-two",
                    children: [Object(s.jsx)("div", {
                        className: "overlay"
                    }), Object(s.jsx)("div", {
                        className: "thm-container",
                        children: Object(s.jsxs)(j.a, {
                            children: [Object(s.jsx)(r.a, {
                                lg: 6,
                                children: Object(s.jsxs)("div", {
                                    className: "service-content",
                                    children: [Object(s.jsx)("span", {
                                        children: n
                                    }), Object(s.jsx)("h2", {
                                        children: t
                                    }), Object(s.jsx)("p", {
                                        children: l
                                    })]
                                })
                            }), Object(s.jsx)(r.a, {
                                lg: 6,
                                children: Object(s.jsx)(j.a, {
                                    children: c.map((function(e, c) {
                                        var t = e.name,
                                            n = e.url,
                                            i = e.icon;
                                        return Object(s.jsx)(r.a, {
                                            md: 4,
                                            className: "text-center",
                                            children: Object(s.jsxs)("div", {
                                                className: "unique-feature",
                                                children: [Object(s.jsx)("img", {
                                                    src: a.a,
                                                    alt: t
                                                }), Object(s.jsxs)("div", {
                                                    className: "content",
                                                    children: [Object(s.jsx)("i", {
                                                        className: i
                                                    }), Object(s.jsx)(d.a, {
                                                        href: n,
                                                        children: Object(s.jsx)("a", {
                                                            children: Object(s.jsx)("h3", {
                                                                children: t
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })
                                        }, c)
                                    }))
                                })
                            })]
                        })
                    })]
                })
            }
        }
    },
    [
        ["Am4Y", 0, 2, 1, 3, 4]
    ]
]);