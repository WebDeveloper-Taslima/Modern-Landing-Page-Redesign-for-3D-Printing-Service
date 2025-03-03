_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [14], {
        "20a2": function(e, s, t) {
            e.exports = t("nOHt")
        },
        "3Z9Z": function(e, s, t) {
            "use strict";
            var c = t("wx14"),
                a = t("zLVn"),
                i = t("TSYQ"),
                r = t.n(i),
                n = t("q1tI"),
                l = t.n(n),
                j = t("vUet"),
                d = ["xl", "lg", "md", "sm", "xs"],
                o = l.a.forwardRef((function(e, s) {
                    var t = e.bsPrefix,
                        i = e.className,
                        n = e.noGutters,
                        o = e.as,
                        b = void 0 === o ? "div" : o,
                        h = Object(a.a)(e, ["bsPrefix", "className", "noGutters", "as"]),
                        x = Object(j.a)(t, "row"),
                        m = x + "-cols",
                        u = [];
                    return d.forEach((function(e) {
                        var s, t = h[e];
                        delete h[e];
                        var c = "xs" !== e ? "-" + e : "";
                        null != (s = null != t && "object" === typeof t ? t.cols : t) && u.push("" + m + c + "-" + s)
                    })), l.a.createElement(b, Object(c.a)({
                        ref: s
                    }, h, {
                        className: r.a.apply(void 0, [i, x, n && "no-gutters"].concat(u))
                    }))
                }));
            o.displayName = "Row", o.defaultProps = {
                noGutters: !1
            }, s.a = o
        },
        JI6e: function(e, s, t) {
            "use strict";
            var c = t("wx14"),
                a = t("zLVn"),
                i = t("TSYQ"),
                r = t.n(i),
                n = t("q1tI"),
                l = t.n(n),
                j = t("vUet"),
                d = ["xl", "lg", "md", "sm", "xs"],
                o = l.a.forwardRef((function(e, s) {
                    var t = e.bsPrefix,
                        i = e.className,
                        n = e.as,
                        o = void 0 === n ? "div" : n,
                        b = Object(a.a)(e, ["bsPrefix", "className", "as"]),
                        h = Object(j.a)(t, "col"),
                        x = [],
                        m = [];
                    return d.forEach((function(e) {
                        var s, t, c, a = b[e];
                        if (delete b[e], "object" === typeof a && null != a) {
                            var i = a.span;
                            s = void 0 === i || i, t = a.offset, c = a.order
                        } else s = a;
                        var r = "xs" !== e ? "-" + e : "";
                        s && x.push(!0 === s ? "" + h + r : "" + h + r + "-" + s), null != c && m.push("order" + r + "-" + c), null != t && m.push("offset" + r + "-" + t)
                    })), x.length || x.push(h), l.a.createElement(o, Object(c.a)({}, b, {
                        ref: s,
                        className: r.a.apply(void 0, [i].concat(x, m))
                    }))
                }));
            o.displayName = "Col", s.a = o
        },
        LvMP: function(e, s, t) {
            "use strict";
            var c = t("nKUr"),
                a = t("q1tI"),
                i = t("KSab"),
                r = t("YFqc"),
                n = t.n(r),
                l = t("20a2"),
                j = t("5fB9");
            s.a = function() {
                var e = Object(l.useRouter)(),
                    s = Object(a.useState)(!1),
                    t = s[0],
                    r = s[1],
                    d = Object(a.useContext)(j.a),
                    o = d.menuStatus,
                    b = d.updateMenuStatus,
                    h = function() {
                        window.scrollY > 70 ? r(!0) : window.scrollY < 70 && r(!1)
                    };
                return Object(a.useEffect)((function() {
                    return window.addEventListener("scroll", h),
                        function() {
                            window.removeEventListener("scroll", h)
                        }
                }), [t]), Object(c.jsx)("header", {
                    className: "header home-page-one",
                    children: Object(c.jsx)("nav", {
                        className: "navbar navbar-default header-navigation  ".concat(!0 === t ? " stricky stricky-fixed slideInDown animated" : " stricky slideIn animated"),
                        children: Object(c.jsxs)("div", {
                            className: "thm-container clearfix",
                            children: [Object(c.jsxs)("div", {
                                className: "navbar-header",
                                children: [Object(c.jsx)(n.a, {
                                    href: "/",
                                    children: Object(c.jsx)("a", {
                                        className: "navbar-brand",
                                        children: Object(c.jsx)("img", {
                                            src: i.w.dark,
                                            alt: "Awesome Image"
                                        })
                                    })
                                }), Object(c.jsx)("span", {
                                    className: "mobile-menu__toggler",
                                    onClick: function(e) {
                                        e.preventDefault(), b(!o)
                                    },
                                    children: Object(c.jsx)("i", {
                                        className: "fa fa-bars"
                                    })
                                })]
                            }), Object(c.jsx)("div", {
                                className: "collapse show navbar-collapse main-navigation mainmenu ",
                                id: "main-nav-bar",
                                children: Object(c.jsx)("ul", {
                                    className: "nav navbar-nav navigation-box",
                                    children: i.x.map((function(s, t) {
                                        return Object(c.jsxs)("li", {
                                            className: e.pathname == s.url ? "active" : "",
                                            children: [Object(c.jsx)(n.a, {
                                                href: s.url,
                                                children: Object(c.jsx)("a", {
                                                    children: s.name
                                                })
                                            }), void 0 !== s.subItems ? Object(c.jsx)("ul", {
                                                className: "sub-menu",
                                                children: s.subItems.map((function(e, s) {
                                                    return Object(c.jsx)("li", {
                                                        children: Object(c.jsx)(n.a, {
                                                            href: e.url,
                                                            children: Object(c.jsx)("a", {
                                                                children: e.name
                                                            })
                                                        })
                                                    }, s)
                                                }))
                                            }) : null]
                                        }, t)
                                    }))
                                })
                            }), Object(c.jsx)("div", {
                                className: "right-side-box",
                                children: Object(c.jsx)("div", {
                                    className: "social",
                                    children: i.s.social.map((function(e, s) {
                                        var t = e.icon,
                                            a = e.url;
                                        return Object(c.jsx)("a", {
                                            href: a,
                                            className: "".concat(t, " hvr-pulse")
                                        }, s)
                                    }))
                                })
                            })]
                        })
                    })
                })
            }
        },
        TSYQ: function(e, s, t) {
            var c;
            ! function() {
                "use strict";
                var t = {}.hasOwnProperty;

                function a() {
                    for (var e = [], s = 0; s < arguments.length; s++) {
                        var c = arguments[s];
                        if (c) {
                            var i = typeof c;
                            if ("string" === i || "number" === i) e.push(c);
                            else if (Array.isArray(c) && c.length) {
                                var r = a.apply(null, c);
                                r && e.push(r)
                            } else if ("object" === i)
                                for (var n in c) t.call(c, n) && c[n] && e.push(n)
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (a.default = a, e.exports = a) : void 0 === (c = function() {
                    return a
                }.apply(s, [])) || (e.exports = c)
            }()
        },
        UaQg: function(e, s, t) {
            "use strict";
            var c = t("nKUr"),
                a = t("q1tI"),
                i = t("YFqc"),
                r = t.n(i);
            s.a = function(e) {
                var s = e.title,
                    t = e.name;
                return Object(c.jsxs)(a.Fragment, {
                    children: [Object(c.jsx)("section", {
                        className: "page-title",
                        children: Object(c.jsx)("div", {
                            className: "thm-container",
                            children: Object(c.jsx)("h3", {
                                children: s
                            })
                        })
                    }), Object(c.jsx)("div", {
                        className: "breadcumb-wrapper",
                        children: Object(c.jsx)("div", {
                            className: "thm-container",
                            children: Object(c.jsxs)("ul", {
                                className: "breadcumb",
                                children: [Object(c.jsx)("li", {
                                    children: Object(c.jsx)(r.a, {
                                        href: "/",
                                        children: Object(c.jsx)("a", {
                                            children: "Homepage"
                                        })
                                    })
                                }), Object(c.jsx)("li", {
                                    children: Object(c.jsx)("span", {
                                        className: "sep",
                                        children: "-"
                                    })
                                }), Object(c.jsx)("li", {
                                    children: Object(c.jsx)("span", {
                                        children: t
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        },
        aIN1: function(e, s, t) {
            "use strict";
            var c = t("nKUr"),
                a = t("q1tI"),
                i = t("YFqc"),
                r = t.n(i),
                n = t("3Z9Z"),
                l = t("JI6e"),
                j = t("KSab");
            s.a = function() {
                return Object(c.jsxs)(a.Fragment, {
                    children: [Object(c.jsx)("footer", {
                        className: "footer",
                        children: Object(c.jsx)("div", {
                            className: "thm-container",
                            children: Object(c.jsxs)(n.a, {
                                children: [Object(c.jsx)(l.a, {
                                    lg: 4,
                                    children: Object(c.jsxs)("div", {
                                        className: "footer-widget about-widget",
                                        children: [Object(c.jsx)("div", {
                                            className: "title",
                                            children: Object(c.jsx)("h3", {
                                                children: j.r.title
                                            })
                                        }), Object(c.jsx)("p", {
                                            children: j.r.text
                                        }), Object(c.jsxs)("form", {
                                            action: "#",
                                            className: "footer-subscribe",
                                            children: [Object(c.jsx)("input", {
                                                type: "text",
                                                name: "email",
                                                placeholder: "Email address"
                                            }), Object(c.jsx)("button", {
                                                type: "submit",
                                                children: Object(c.jsx)("i", {
                                                    className: "fa fa-angle-right"
                                                })
                                            })]
                                        })]
                                    })
                                }), Object(c.jsx)(l.a, {
                                    lg: 2,
                                    children: Object(c.jsxs)("div", {
                                        className: "footer-widget links-widget explore",
                                        children: [Object(c.jsx)("div", {
                                            className: "title",
                                            children: Object(c.jsx)("h3", {
                                                children: j.u.title
                                            })
                                        }), Object(c.jsx)("ul", {
                                            className: "link-list",
                                            children: j.u.links.map((function(e, s) {
                                                var t = e.url,
                                                    a = e.label;
                                                return Object(c.jsx)("li", {
                                                    children: Object(c.jsx)(r.a, {
                                                        href: t,
                                                        children: Object(c.jsx)("a", {
                                                            children: a
                                                        })
                                                    })
                                                }, s)
                                            }))
                                        })]
                                    })
                                }), Object(c.jsx)(l.a, {
                                    lg: 3,
                                    children: Object(c.jsxs)("div", {
                                        className: "footer-widget post-widget services",
                                        children: [Object(c.jsx)("div", {
                                            className: "title",
                                            children: Object(c.jsx)("h3", {
                                                children: j.v.title
                                            })
                                        }), Object(c.jsx)("div", {
                                            className: "post-widget",
                                            children: j.v.posts.map((function(e, s) {
                                                var t = e.date,
                                                    a = e.title,
                                                    i = e.url;
                                                return Object(c.jsxs)("div", {
                                                    className: "single-post-widget",
                                                    children: [Object(c.jsx)(r.a, {
                                                        href: i,
                                                        children: Object(c.jsx)("a", {
                                                            className: "date",
                                                            children: t
                                                        })
                                                    }), Object(c.jsx)("h3", {
                                                        className: "post-title",
                                                        children: Object(c.jsx)(r.a, {
                                                            href: i,
                                                            children: Object(c.jsx)("a", {
                                                                children: a
                                                            })
                                                        })
                                                    })]
                                                }, s)
                                            }))
                                        })]
                                    })
                                }), Object(c.jsx)(l.a, {
                                    lg: 3,
                                    children: Object(c.jsxs)("div", {
                                        className: "footer-widget contact-widget",
                                        children: [Object(c.jsx)("div", {
                                            className: "title",
                                            children: Object(c.jsx)("h3", {
                                                children: j.t.title
                                            })
                                        }), j.t.infos.map((function(e, s) {
                                            var t = e.text,
                                                a = e.url;
                                            return Object(c.jsx)("p", {
                                                children: Object(c.jsx)("a", {
                                                    href: a,
                                                    children: t
                                                })
                                            }, s)
                                        }))]
                                    })
                                })]
                            })
                        })
                    }), Object(c.jsx)("div", {
                        className: "footer-bottom",
                        children: Object(c.jsxs)("div", {
                            className: "thm-container clearfix",
                            children: [Object(c.jsx)("div", {
                                className: "float-left copy-text",
                                children: Object(c.jsxs)("p", {
                                    children: ["\xa9 Copyright ", (new Date).getFullYear(), " Created by", " ", Object(c.jsx)("a", {
                                        href: "#",
                                        children: "Layerdrops Team"
                                    })]
                                })
                            }), Object(c.jsx)("div", {
                                className: "social-box float-right",
                                children: j.s.social.map((function(e, s) {
                                    var t = e.icon,
                                        a = e.url;
                                    return Object(c.jsx)("a", {
                                        href: a,
                                        className: "".concat(t, " hvr-pulse")
                                    }, s)
                                }))
                            })]
                        })
                    })]
                })
            }
        },
        iX55: function(e, s, t) {
            "use strict";
            t.r(s);
            var c = t("nKUr"),
                a = t("q1tI"),
                i = t("CafY"),
                r = t("UaQg"),
                n = t("aIN1"),
                l = t("3Z9Z"),
                j = t("JI6e"),
                d = t("KSab"),
                o = function() {
                    return Object(c.jsx)(a.Fragment, {
                        children: Object(c.jsxs)("div", {
                            className: "single-blog-post",
                            children: [Object(c.jsxs)("div", {
                                className: "text-box",
                                children: [Object(c.jsx)("h3", {
                                    children: d.e.title
                                }), Object(c.jsx)("p", {
                                    children: d.e.text
                                })]
                            }), Object(c.jsxs)("div", {
                                className: "img-box",
                                children: [Object(c.jsx)("img", {
                                    src: d.e.image,
                                    alt: d.e.title
                                }), Object(c.jsxs)("div", {
                                    className: "meta-info",
                                    children: [Object(c.jsxs)("a", {
                                        href: "#",
                                        children: [Object(c.jsx)("i", {
                                            className: "fas fa-user"
                                        }), " by ", d.e.author]
                                    }), Object(c.jsxs)("a", {
                                        href: "#",
                                        children: [Object(c.jsx)("i", {
                                            className: "fas fa-calendar"
                                        }), " ", d.e.date]
                                    }), Object(c.jsxs)("a", {
                                        href: "#",
                                        children: [Object(c.jsx)("i", {
                                            className: "fas fa-comments"
                                        }), " ", d.e.commentCount]
                                    })]
                                })]
                            }), Object(c.jsxs)("div", {
                                className: "content-box",
                                children: [Object(c.jsxs)("p", {
                                    children: ["Lorem Ipsum is simply dummy text of the rinting and typesetting industry has been th standard dummy text ever sincer they llam id condimentum purus In non ex at ligula fringilla bortis et mauris auctor aliquet nulla sed, aliquam mauris. Vestibulum sed malesuada dolor. Integer fringilla odio a dolor aliquet eu euismod lectus porttitor. Proin et libero nec eros eleifend commodo Phasellus sodales des volutpat diam, id sagittis purus egestas dapibus. Donec bibendum estcommodo blandit. Maecenas pellentesque massa vitae faucibus consectetur, ante magna gravida magna, ut venenatis massa augue et odio.", " "]
                                }), Object(c.jsx)("br", {}), Object(c.jsxs)("p", {
                                    children: ["Lorem Ipsum is simply dummy text of the rinting and typesetting industry has been th standard dummy text ever sincer they llam id condimentum purus In non ex at ligula fringilla bortis et mauris auctor aliquet nulla sed, aliquam mauris. Vestibulum sed malesuada dolor. Integer fringilla odio a dolor aliquet eu euismod lectus porttitor. Proin et libero nec eros eleifend commodo Phasellus sodales des volutpat diam, id sagittis purus egestas dapibus. Donec bibendum estcommodo blandit. Maecenas pellentesque massa vitae faucibus consectetur, ante magna gravida magna, ut venenatis massa augue et odio.", " "]
                                })]
                            }), Object(c.jsxs)("div", {
                                className: "share-box clearfix",
                                children: [Object(c.jsx)("div", {
                                    className: "left-title float-left",
                                    children: Object(c.jsx)("h4", {
                                        children: "Share this post"
                                    })
                                }), Object(c.jsx)("div", {
                                    className: "right-social float-right",
                                    children: Object(c.jsxs)("div", {
                                        className: "social",
                                        children: [Object(c.jsx)("a", {
                                            href: "#",
                                            className: "fab fa-twitter hvr-pulse"
                                        }), Object(c.jsx)("a", {
                                            href: "#",
                                            className: "fab fa-pinterest hvr-pulse"
                                        }), Object(c.jsx)("a", {
                                            href: "#",
                                            className: "fab fa-facebook-f hvr-pulse"
                                        }), Object(c.jsx)("a", {
                                            href: "#",
                                            className: "fab fa-youtube hvr-pulse"
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                b = function() {
                    var e = d.d.sectionContent,
                        s = d.d.posts;
                    return Object(c.jsxs)("div", {
                        className: "comment-box",
                        children: [Object(c.jsxs)("div", {
                            className: "sec-title",
                            children: [Object(c.jsx)("span", {
                                children: e.title
                            }), Object(c.jsx)("h3", {
                                children: e.text
                            })]
                        }), s.map((function(e, s) {
                            var t = e.image,
                                a = e.title,
                                i = e.date,
                                r = e.time,
                                n = e.content;
                            return Object(c.jsxs)("div", {
                                className: "single-comment-box",
                                children: [Object(c.jsx)("div", {
                                    className: "img-box",
                                    children: Object(c.jsx)("img", {
                                        src: t,
                                        alt: "Awesome Image"
                                    })
                                }), Object(c.jsxs)("div", {
                                    className: "text-box",
                                    children: [Object(c.jsx)("h3", {
                                        children: a
                                    }), Object(c.jsxs)("span", {
                                        className: "date-box",
                                        children: [i, Object(c.jsx)("span", {
                                            className: "sep",
                                            children: "-"
                                        }), r]
                                    }), Object(c.jsx)("p", {
                                        children: n
                                    }), Object(c.jsx)("a", {
                                        href: "#",
                                        className: "reply",
                                        children: "Reply"
                                    })]
                                })]
                            }, s)
                        }))]
                    })
                },
                h = function() {
                    var e = d.k.sectionContent;
                    return Object(c.jsxs)("div", {
                        className: "leave-a-comment",
                        children: [Object(c.jsxs)("div", {
                            className: "sec-title",
                            children: [Object(c.jsx)("span", {
                                children: e.subText
                            }), Object(c.jsx)("h3", {
                                children: e.title
                            })]
                        }), Object(c.jsxs)("form", {
                            action: "#",
                            className: "contact-form row",
                            children: [Object(c.jsx)("div", {
                                className: "col-md-6",
                                children: Object(c.jsx)("input", {
                                    type: "text",
                                    placeholder: "Your full name",
                                    name: "name"
                                })
                            }), Object(c.jsx)("div", {
                                className: "col-md-6",
                                children: Object(c.jsx)("input", {
                                    type: "text",
                                    placeholder: "Your email address",
                                    name: "email"
                                })
                            }), Object(c.jsxs)("div", {
                                className: "col-md-12",
                                children: [Object(c.jsx)("textarea", {
                                    name: "message",
                                    placeholder: "What you are looking for?"
                                }), Object(c.jsx)("button", {
                                    type: "submit",
                                    className: "thm-btn yellow-bg",
                                    children: "Submit Now"
                                })]
                            })]
                        })]
                    })
                },
                x = function() {
                    return Object(c.jsxs)("div", {
                        className: "sidebar right-sidebar",
                        children: [Object(c.jsx)("div", {
                            className: "single-sidebar search-sidebar",
                            children: Object(c.jsx)("form", {
                                action: "#",
                                className: "search-from",
                                children: Object(c.jsx)("input", {
                                    type: "text",
                                    placeholder: "Search here..."
                                })
                            })
                        }), Object(c.jsxs)("div", {
                            className: "single-sidebar recent-post",
                            children: [Object(c.jsx)("div", {
                                className: "title",
                                children: Object(c.jsx)("h3", {
                                    children: "Recent Posts"
                                })
                            }), Object(c.jsxs)("ul", {
                                className: "post-list",
                                children: [Object(c.jsx)("li", {
                                    children: Object(c.jsx)("a", {
                                        href: "#",
                                        children: Object(c.jsx)("h4", {
                                            children: "What file types do you accept for printing cards."
                                        })
                                    })
                                }), Object(c.jsx)("li", {
                                    children: Object(c.jsx)("a", {
                                        href: "#",
                                        children: Object(c.jsx)("h4", {
                                            children: "What are your recommended file sizes for images and photos?"
                                        })
                                    })
                                }), Object(c.jsx)("li", {
                                    children: Object(c.jsx)("a", {
                                        href: "#",
                                        children: Object(c.jsx)("h4", {
                                            children: "What is the difference between vector and bitmap images?"
                                        })
                                    })
                                })]
                            })]
                        }), Object(c.jsxs)("div", {
                            className: "single-sidebar tags-sidebar",
                            children: [Object(c.jsx)("div", {
                                className: "title",
                                children: Object(c.jsx)("h3", {
                                    children: "Tags"
                                })
                            }), Object(c.jsxs)("ul", {
                                className: "tags-list",
                                children: [Object(c.jsx)("li", {
                                    children: Object(c.jsx)("a", {
                                        href: "#",
                                        children: "copying"
                                    })
                                }), Object(c.jsx)("li", {
                                    children: Object(c.jsx)("a", {
                                        href: "#",
                                        children: "printing"
                                    })
                                }), Object(c.jsx)("li", {
                                    children: Object(c.jsx)("a", {
                                        href: "#",
                                        children: "agency"
                                    })
                                }), Object(c.jsx)("li", {
                                    children: Object(c.jsx)("a", {
                                        href: "#",
                                        children: "corporate"
                                    })
                                }), Object(c.jsx)("li", {
                                    children: Object(c.jsx)("a", {
                                        href: "#",
                                        children: "customers"
                                    })
                                }), Object(c.jsx)("li", {
                                    children: Object(c.jsx)("a", {
                                        href: "#",
                                        children: "hello"
                                    })
                                }), Object(c.jsx)("li", {
                                    children: Object(c.jsx)("a", {
                                        href: "#",
                                        children: "businesscard"
                                    })
                                }), Object(c.jsx)("li", {
                                    children: Object(c.jsx)("a", {
                                        href: "#",
                                        children: "professional"
                                    })
                                })]
                            })]
                        }), Object(c.jsxs)("div", {
                            className: "single-sidebar img-sidebar",
                            children: [Object(c.jsx)("div", {
                                className: "img-box",
                                children: Object(c.jsx)("img", {
                                    src: d.K.image,
                                    alt: "Awesome Image"
                                })
                            }), Object(c.jsxs)("div", {
                                className: "text-box",
                                children: [Object(c.jsx)("h4", {
                                    children: d.K.title
                                }), Object(c.jsx)("p", {
                                    children: d.K.text
                                })]
                            })]
                        }), Object(c.jsxs)("div", {
                            className: "single-sidebar category-sidebar",
                            children: [Object(c.jsx)("div", {
                                className: "title",
                                children: Object(c.jsx)("h3", {
                                    children: "Categories"
                                })
                            }), Object(c.jsxs)("ul", {
                                className: "category-list",
                                children: [Object(c.jsx)("li", {
                                    children: Object(c.jsx)("a", {
                                        href: "#",
                                        children: "Business"
                                    })
                                }), Object(c.jsx)("li", {
                                    children: Object(c.jsx)("a", {
                                        href: "#",
                                        children: "Research"
                                    })
                                }), Object(c.jsx)("li", {
                                    children: Object(c.jsx)("a", {
                                        href: "#",
                                        children: "Event Organisation"
                                    })
                                }), Object(c.jsx)("li", {
                                    children: Object(c.jsx)("a", {
                                        href: "#",
                                        children: "Social Media"
                                    })
                                }), Object(c.jsx)("li", {
                                    children: Object(c.jsx)("a", {
                                        href: "#",
                                        children: "Travel"
                                    })
                                }), Object(c.jsx)("li", {
                                    children: Object(c.jsx)("a", {
                                        href: "#",
                                        children: "Personal Life"
                                    })
                                })]
                            })]
                        })]
                    })
                },
                m = function() {
                    return Object(c.jsx)("section", {
                        className: "blog-details-page sec-pad",
                        children: Object(c.jsx)("div", {
                            className: "thm-container",
                            children: Object(c.jsxs)(l.a, {
                                children: [Object(c.jsxs)(j.a, {
                                    lg: 8,
                                    children: [Object(c.jsx)(o, {}), Object(c.jsx)(b, {}), Object(c.jsx)(h, {})]
                                }), Object(c.jsx)(j.a, {
                                    lg: 4,
                                    children: Object(c.jsx)(x, {})
                                })]
                            })
                        })
                    })
                },
                u = t("5fB9"),
                O = t("LvMP");
            s.default = function() {
                return Object(c.jsx)(u.b, {
                    children: Object(c.jsxs)(i.a, {
                        PageTitle: "Blog Details",
                        children: [Object(c.jsx)(O.a, {}), Object(c.jsx)(r.a, {
                            title: "Blog Details",
                            name: "Blog Details"
                        }), Object(c.jsx)(m, {}), Object(c.jsx)(n.a, {})]
                    })
                })
            }
        },
        narT: function(e, s, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/blog-details", function() {
                return t("iX55")
            }])
        },
        vUet: function(e, s, t) {
            "use strict";
            t.d(s, "a", (function() {
                return r
            }));
            t("wx14");
            var c = t("q1tI"),
                a = t.n(c),
                i = a.a.createContext({});
            i.Consumer, i.Provider;

            function r(e, s) {
                var t = Object(c.useContext)(i);
                return e || t[s] || s
            }
        },
        wx14: function(e, s, t) {
            "use strict";

            function c() {
                return (c = Object.assign || function(e) {
                    for (var s = 1; s < arguments.length; s++) {
                        var t = arguments[s];
                        for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c])
                    }
                    return e
                }).apply(this, arguments)
            }
            t.d(s, "a", (function() {
                return c
            }))
        },
        zLVn: function(e, s, t) {
            "use strict";

            function c(e, s) {
                if (null == e) return {};
                var t, c, a = {},
                    i = Object.keys(e);
                for (c = 0; c < i.length; c++) t = i[c], s.indexOf(t) >= 0 || (a[t] = e[t]);
                return a
            }
            t.d(s, "a", (function() {
                return c
            }))
        }
    },
    [
        ["narT", 0, 2, 1, 3]
    ]
]);