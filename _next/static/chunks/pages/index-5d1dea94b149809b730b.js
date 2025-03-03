_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [16], {
        JlnY: function(e, t, a) {
            "use strict";
            var s = a("nKUr"),
                c = a("q1tI"),
                n = a("3Z9Z"),
                i = a("JI6e"),
                r = a("rePB"),
                l = a("xqva"),
                o = a("Ndxo"),
                j = (a("4l1m"), a("KSab")),
                d = a("YFqc"),
                b = a.n(d),
                h = function(e) {
                    var t = e.data,
                        a = t.image,
                        c = t.title,
                        n = t.text,
                        i = t.url;
                    return Object(s.jsxs)("div", {
                        className: "single-we-believe text-center",
                        children: [Object(s.jsx)("div", {
                            className: "img-box",
                            children: Object(s.jsx)("img", {
                                src: a,
                                alt: c
                            })
                        }), Object(s.jsxs)("div", {
                            className: "text-box",
                            children: [Object(s.jsx)("h3", {
                                children: c
                            }), Object(s.jsx)("p", {
                                children: n
                            }), Object(s.jsx)(b.a, {
                                href: i,
                                children: Object(s.jsx)("a", {
                                    className: "thm-btn yellow-bg",
                                    children: "Learn More"
                                })
                            })]
                        })]
                    })
                },
                O = a("bTu8"),
                m = a("0Xqd"),
                x = a("Xchd");

            function v(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(a), !0).forEach((function(t) {
                        Object(r.a)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : v(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            O.a.use([m.a, x.a]);
            var f = function() {
                    return Object(s.jsxs)("div", {
                        className: "we-believe-carousel",
                        children: [Object(s.jsx)(l.a, p(p({}, {
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
                            children: j.o.map((function(e, t) {
                                return Object(s.jsx)(o.a, {
                                    className: "item",
                                    children: Object(s.jsx)(h, {
                                        data: e
                                    })
                                }, t)
                            }))
                        })), Object(s.jsx)("div", {
                            className: "swiper-pagination",
                            id: "belive-carousel-pagination"
                        })]
                    })
                },
                u = a("0KWo"),
                g = function() {
                    var e = Object(c.useState)(0),
                        t = e[0],
                        a = e[1],
                        n = j.n.sectionContent,
                        i = j.n.posts;
                    return Object(s.jsxs)("div", {
                        className: "faq-content",
                        children: [Object(s.jsx)(u.a, {
                            data: n
                        }), Object(s.jsx)("div", {
                            className: "accrodion-grp faq-accrodion",
                            children: i.map((function(e, c) {
                                var n = e.title,
                                    i = e.content;
                                return Object(s.jsxs)("div", {
                                    className: "accrodion ".concat(c === t ? "active" : null),
                                    children: [Object(s.jsx)("div", {
                                        className: "accrodion-title",
                                        onClick: function() {
                                            a(c)
                                        },
                                        children: Object(s.jsx)("h4", {
                                            children: n
                                        })
                                    }), c === t ? Object(s.jsx)("div", {
                                        className: "accrodion-content animated fadeIn",
                                        children: Object(s.jsxs)("p", {
                                            children: [i, " "]
                                        })
                                    }) : null]
                                }, c)
                            }))
                        })]
                    })
                };
            t.a = function() {
                return Object(s.jsx)("section", {
                    className: "faq-section",
                    children: Object(s.jsx)("div", {
                        className: "thm-container",
                        children: Object(s.jsxs)(n.a, {
                            children: [Object(s.jsx)(i.a, {
                                lg: 5,
                                children: Object(s.jsx)(f, {})
                            }), Object(s.jsx)(i.a, {
                                lg: 7,
                                children: Object(s.jsx)(g, {})
                            })]
                        })
                    })
                })
            }
        },
        NWz5: function(e, t) {
            e.exports = "/_next/static/images/what-we-do-1-1-5e1145517ff205731251c1d776355c61.jpg"
        },
        RNiq: function(e, t, a) {
            "use strict";
            a.r(t);
            var s = a("nKUr"),
                c = a("q1tI"),
                n = a("CafY"),
                i = a("aIN1"),
                r = a("/ium"),
                l = a("jX8a"),
                o = a("KSab"),
                j = a("3Z9Z"),
                d = a("JI6e"),
                b = a("aGbq"),
                h = function() {
                    return Object(s.jsx)("section", {
                        className: "recent-projects sec-pad",
                        children: Object(s.jsxs)("div", {
                            className: "thm-container",
                            children: [Object(s.jsxs)("div", {
                                className: "sec-title text-center",
                                children: [Object(s.jsx)("span", {
                                    children: "Work showcase"
                                }), Object(s.jsx)("h3", {
                                    children: "Recent Projects"
                                }), Object(s.jsxs)("p", {
                                    children: ["There are many variations of passages of lorem Ipsum available, but", " ", Object(s.jsx)("br", {}), " the majority have suffered alteration in some form."]
                                })]
                            }), Object(s.jsx)(j.a, {
                                children: o.A.slice(0, 3).map((function(e, t) {
                                    return Object(s.jsx)(d.a, {
                                        md: 6,
                                        lg: 4,
                                        children: Object(s.jsx)(b.a, {
                                            data: e
                                        })
                                    }, t)
                                }))
                            })]
                        })
                    })
                },
                O = a("0KWo"),
                m = function() {
                    var e = o.g.sectionContent,
                        t = o.g.lists,
                        a = o.g.button;
                    return Object(s.jsxs)("section", {
                        className: "call-to-action-one",
                        children: [Object(s.jsx)("div", {
                            className: "overlay"
                        }), Object(s.jsx)("div", {
                            className: "inner-wrapper",
                            children: Object(s.jsx)("div", {
                                className: "thm-container",
                                children: Object(s.jsx)(j.a, {
                                    children: Object(s.jsx)(d.a, {
                                        lg: 6,
                                        children: Object(s.jsxs)("div", {
                                            className: "call-to-action-content",
                                            children: [Object(s.jsx)(O.a, {
                                                data: e
                                            }), Object(s.jsx)("ul", {
                                                className: "list-box",
                                                children: t.map((function(e, t) {
                                                    return Object(s.jsxs)("li", {
                                                        children: [Object(s.jsx)("i", {
                                                            className: "fas fa-check-circle"
                                                        }), e]
                                                    }, t)
                                                }))
                                            }), Object(s.jsx)("a", {
                                                href: a.url,
                                                className: "thm-btn yellow-bg",
                                                children: a.label
                                            })]
                                        })
                                    })
                                })
                            })
                        })]
                    })
                },
                x = a("YFqc"),
                v = a.n(x),
                p = function() {
                    var e = o.i.sectionContent,
                        t = o.i.content,
                        a = o.i.button,
                        c = o.i.image;
                    return Object(s.jsx)("section", {
                        className: "cta-style-two",
                        children: Object(s.jsx)("div", {
                            className: "thm-container",
                            children: Object(s.jsxs)("div", {
                                className: "row",
                                children: [Object(s.jsx)("div", {
                                    className: "col-xl-6 col-lg-12",
                                    children: Object(s.jsxs)("div", {
                                        className: "image-block float-right",
                                        children: [Object(s.jsx)("img", {
                                            src: c.name,
                                            alt: "Awesome Image"
                                        }), Object(s.jsx)("div", {
                                            className: "content-block",
                                            children: Object(s.jsx)("h3", {
                                                children: c.caption
                                            })
                                        })]
                                    })
                                }), Object(s.jsx)("div", {
                                    className: "col-xl-6 col-lg-12",
                                    children: Object(s.jsxs)("div", {
                                        className: "cta-style-two-content",
                                        children: [Object(s.jsx)(O.a, {
                                            data: e
                                        }), Object(s.jsx)("p", {
                                            children: t
                                        }), Object(s.jsx)(v.a, {
                                            href: a.url,
                                            children: Object(s.jsx)("a", {
                                                className: "thm-btn yellow-bg",
                                                children: a.label
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                f = function() {
                    var e = o.b.backgroundImage,
                        t = o.b.sectionContent,
                        a = o.b.content,
                        c = o.b.button,
                        n = o.b.phone,
                        i = o.b.posts;
                    return Object(s.jsxs)("section", {
                        className: "service-style-one sec-pad",
                        children: [Object(s.jsx)("img", {
                            src: e,
                            className: "background-right",
                            alt: t.title
                        }), Object(s.jsx)("div", {
                            className: "thm-container",
                            children: Object(s.jsxs)(j.a, {
                                children: [Object(s.jsx)(d.a, {
                                    lg: 6,
                                    children: Object(s.jsxs)("div", {
                                        className: "service-content",
                                        children: [Object(s.jsx)(O.a, {
                                            data: t
                                        }), Object(s.jsx)("p", {
                                            children: a
                                        }), Object(s.jsxs)("div", {
                                            className: "btn-box",
                                            children: [Object(s.jsx)(v.a, {
                                                href: c.url,
                                                children: Object(s.jsx)("a", {
                                                    className: "thm-btn yellow-bg",
                                                    children: c.label
                                                })
                                            }), Object(s.jsxs)("div", {
                                                className: "phone-btn",
                                                children: [Object(s.jsx)("i", {
                                                    className: "fas fa-phone"
                                                }), n]
                                            })]
                                        })]
                                    })
                                }), Object(s.jsx)(d.a, {
                                    lg: 6,
                                    children: Object(s.jsx)("div", {
                                        className: "service-right-content",
                                        children: Object(s.jsxs)("div", {
                                            className: "inner",
                                            children: [Object(s.jsx)("div", {
                                                className: "divider hor"
                                            }), Object(s.jsx)("div", {
                                                className: "divider ver"
                                            }), Object(s.jsx)(j.a, {
                                                children: i.map((function(e, t) {
                                                    var a = e.title,
                                                        c = e.icon,
                                                        n = e.url;
                                                    return Object(s.jsx)(d.a, {
                                                        md: 6,
                                                        children: Object(s.jsxs)("div", {
                                                            className: "single-service-one hvr-bounce-to-bottom",
                                                            children: [Object(s.jsx)("i", {
                                                                className: c
                                                            }), Object(s.jsx)(v.a, {
                                                                href: n,
                                                                children: Object(s.jsx)("a", {
                                                                    children: Object(s.jsx)("h3", {
                                                                        children: a
                                                                    })
                                                                })
                                                            })]
                                                        })
                                                    }, t)
                                                }))
                                            })]
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                },
                u = a("40Y2"),
                g = a("60Bi"),
                N = a.n(g),
                w = (a("HP2+"), function() {
                    var e = Object(c.useState)(!1),
                        t = e[0],
                        a = e[1],
                        n = o.I.image,
                        i = o.I.ID,
                        r = o.I.caption;
                    return Object(s.jsxs)(c.Fragment, {
                        children: [Object(s.jsxs)("div", {
                            className: "video-box",
                            children: [Object(s.jsx)("img", {
                                src: n,
                                alt: "Awesome Image"
                            }), Object(s.jsx)("div", {
                                className: "content",
                                children: Object(s.jsx)("h3", {
                                    children: r
                                })
                            }), Object(s.jsx)("a", {
                                onClick: function(e) {
                                    e.preventDefault(), a(!0)
                                },
                                href: "#",
                                className: "video-btn video-popup",
                                children: Object(s.jsx)("i", {
                                    className: "fas fa-play"
                                })
                            })]
                        }), Object(s.jsx)(N.a, {
                            channel: "youtube",
                            autoplay: !0,
                            isOpen: t,
                            videoId: i,
                            onClose: function() {
                                return a(!1)
                            }
                        })]
                    })
                }),
                y = function() {
                    return Object(s.jsx)("section", {
                        className: "video-box-design-guide sec-pad",
                        children: Object(s.jsx)("div", {
                            className: "thm-container",
                            children: Object(s.jsxs)(j.a, {
                                children: [Object(s.jsx)(d.a, {
                                    lg: 6,
                                    children: Object(s.jsx)(w, {})
                                }), Object(s.jsx)(d.a, {
                                    lg: 6,
                                    children: Object(s.jsx)(u.a, {})
                                })]
                            })
                        })
                    })
                },
                P = a("r5dr"),
                E = a("JlnY"),
                C = a("LQGr"),
                k = a("NWz5"),
                q = a.n(k),
                I = function() {
                    return Object(s.jsx)("section", {
                        className: "what-we-do sec-pad",
                        children: Object(s.jsxs)("div", {
                            className: "thm-container",
                            children: [Object(s.jsxs)("div", {
                                className: "sec-title text-center",
                                children: [Object(s.jsx)("span", {
                                    children: "Our features"
                                }), Object(s.jsx)("h3", {
                                    children: "What We Do"
                                }), Object(s.jsxs)("p", {
                                    children: ["There are many variations of passages of lorem Ipsum available, but", " ", Object(s.jsx)("br", {}), " the majority have suffered alteration in some form."]
                                })]
                            }), Object(s.jsxs)("div", {
                                className: "row",
                                children: [Object(s.jsx)("div", {
                                    className: "col-lg-6 col-md-12",
                                    children: Object(s.jsxs)("div", {
                                        className: "single-what-we-do",
                                        children: [Object(s.jsx)("div", {
                                            className: "img-box",
                                            children: Object(s.jsx)("img", {
                                                src: q.a,
                                                alt: ""
                                            })
                                        }), Object(s.jsxs)("div", {
                                            className: "text-box hvr-bounce-to-bottom",
                                            children: [Object(s.jsx)("a", {
                                                href: "/service-details",
                                                children: Object(s.jsx)("h3", {
                                                    children: "3D Printing"
                                                })
                                            }), Object(s.jsx)("p", {
                                                children: "There are many people variation of passages of lorem Ipsum available in the majority have suffer alteration in some."
                                            }), Object(s.jsx)("a", {
                                                href: "/service-details",
                                                className: "read-more fas fa-angle-right"
                                            })]
                                        })]
                                    })
                                }), Object(s.jsx)("div", {
                                    className: "col-lg-6 col-md-12",
                                    children: Object(s.jsxs)("div", {
                                        className: "row",
                                        children: [Object(s.jsx)("div", {
                                            className: "col-sm-6",
                                            children: Object(s.jsxs)("div", {
                                                className: "single-what-we-do-one hvr-bounce-to-bottom",
                                                children: [Object(s.jsx)("i", {
                                                    className: "printify-icon-paper-drill"
                                                }), Object(s.jsx)("a", {
                                                    href: "/service-details",
                                                    children: Object(s.jsx)("h3", {
                                                        children: "Digital Printing"
                                                    })
                                                }), Object(s.jsx)("p", {
                                                    children: "There are many people variation of passages of lorem Ipsum available in the majority have suffer alteration in some."
                                                }), Object(s.jsx)("a", {
                                                    href: "/service-details",
                                                    className: "read-more fas fa-angle-right"
                                                })]
                                            })
                                        }), Object(s.jsx)("div", {
                                            className: "col-sm-6",
                                            children: Object(s.jsxs)("div", {
                                                className: "single-what-we-do-one hvr-bounce-to-bottom",
                                                children: [Object(s.jsx)("i", {
                                                    className: "printify-icon-printing-text"
                                                }), Object(s.jsx)("a", {
                                                    href: "/service-details",
                                                    children: Object(s.jsx)("h3", {
                                                        children: "Offset Printing"
                                                    })
                                                }), Object(s.jsx)("p", {
                                                    children: "There are many people variation of passages of lorem Ipsum available in the majority have suffer alteration in some."
                                                }), Object(s.jsx)("a", {
                                                    href: "/service-details",
                                                    className: "read-more fas fa-angle-right"
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                T = a("LvMP"),
                D = a("rePB"),
                _ = a("xqva"),
                S = a("Ndxo"),
                $ = a("bTu8"),
                B = a("0Xqd"),
                K = a("g0Ox"),
                G = a("cKS0");

            function J() {
                return (J = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            var M = {
                    setTranslate: function() {
                        for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                            var s = e.slides.eq(a),
                                c = -s[0].swiperSlideOffset;
                            e.params.virtualTranslate || (c -= e.translate);
                            var n = 0;
                            e.isHorizontal() || (n = c, c = 0);
                            var i = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(s[0].progress), 0) : 1 + Math.min(Math.max(s[0].progress, -1), 0);
                            s.css({
                                opacity: i
                            }).transform("translate3d(" + c + "px, " + n + "px, 0px)")
                        }
                    },
                    setTransition: function(e) {
                        var t = this,
                            a = t.slides,
                            s = t.$wrapperEl;
                        if (a.transition(e), t.params.virtualTranslate && 0 !== e) {
                            var c = !1;
                            a.transitionEnd((function() {
                                if (!c && t && !t.destroyed) {
                                    c = !0, t.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) s.trigger(e[a])
                                }
                            }))
                        }
                    }
                },
                W = {
                    name: "effect-fade",
                    params: {
                        fadeEffect: {
                            crossFade: !1
                        }
                    },
                    create: function() {
                        Object(G.a)(this, {
                            fadeEffect: J({}, M)
                        })
                    },
                    on: {
                        beforeInit: function(e) {
                            if ("fade" === e.params.effect) {
                                e.classNames.push(e.params.containerModifierClass + "fade");
                                var t = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    spaceBetween: 0,
                                    virtualTranslate: !0
                                };
                                Object(G.c)(e.params, t), Object(G.c)(e.originalParams, t)
                            }
                        },
                        setTranslate: function(e) {
                            "fade" === e.params.effect && e.fadeEffect.setTranslate()
                        },
                        setTransition: function(e, t) {
                            "fade" === e.params.effect && e.fadeEffect.setTransition(t)
                        }
                    }
                };

            function X(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function Y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? X(Object(a), !0).forEach((function(t) {
                        Object(D.a)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : X(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            $.a.use([B.a, K.a, W]);
            var F = function() {
                    return Object(s.jsx)("section", {
                        className: "main-slider",
                        children: Object(s.jsxs)(_.a, Y(Y({}, {
                            slidesPerView: 1,
                            loop: !0,
                            effect: "fade",
                            navigation: {
                                nextEl: "#main-slider-next",
                                prevEl: "#main-slider-prev"
                            },
                            autoplay: {
                                delay: 5e3
                            }
                        }), {}, {
                            children: [o.E.map((function(e, t) {
                                var a = e.image,
                                    c = e.subText,
                                    n = e.title,
                                    i = e.button;
                                return Object(s.jsxs)(S.a, {
                                    children: [Object(s.jsx)("div", {
                                        className: "image-layer",
                                        style: {
                                            backgroundImage: "url(".concat(a, ")")
                                        }
                                    }), Object(s.jsx)("div", {
                                        className: "thm-container",
                                        children: Object(s.jsx)(j.a, {
                                            children: Object(s.jsxs)(d.a, {
                                                lg: 12,
                                                className: "text-center",
                                                children: [Object(s.jsx)("p", {
                                                    className: "main-slider__subtext",
                                                    children: c
                                                }), Object(s.jsx)("h3", {
                                                    className: "main-slider__title",
                                                    children: n
                                                }), Object(s.jsx)(v.a, {
                                                    href: i.url,
                                                    children: Object(s.jsx)("a", {
                                                        className: "thm-btn",
                                                        children: Object(s.jsx)("span", {
                                                            children: i.label
                                                        })
                                                    })
                                                })]
                                            })
                                        })
                                    })]
                                }, t)
                            })), Object(s.jsx)("div", {
                                className: "swiper-button-prev",
                                id: "main-slider-prev",
                                children: Object(s.jsx)("i", {
                                    className: "fa fa-angle-left"
                                })
                            }), Object(s.jsx)("div", {
                                className: "swiper-button-next",
                                id: "main-slider-next",
                                children: Object(s.jsx)("i", {
                                    className: "fa fa-angle-right"
                                })
                            })]
                        }))
                    })
                },
                V = a("5fB9");
            t.default = function() {
                return Object(s.jsx)(V.b, {
                    children: Object(s.jsxs)(n.a, {
                        PageTitle: "Home Page",
                        children: [Object(s.jsx)(T.a, {}), Object(s.jsx)(F, {}), Object(s.jsx)(r.a, {}), Object(s.jsx)(I, {}), Object(s.jsx)(C.a, {}), Object(s.jsx)(E.a, {}), Object(s.jsx)(m, {}), Object(s.jsx)(P.a, {}), Object(s.jsx)(f, {}), Object(s.jsx)(y, {}), Object(s.jsx)(p, {}), Object(s.jsx)(h, {}), Object(s.jsx)(l.a, {}), Object(s.jsx)(i.a, {})]
                    })
                })
            }
        },
        aGbq: function(e, t, a) {
            "use strict";
            var s = a("nKUr"),
                c = (a("q1tI"), a("YFqc")),
                n = a.n(c);
            t.a = function(e) {
                var t = e.data,
                    a = t.image,
                    c = t.title,
                    i = t.category,
                    r = t.url;
                return Object(s.jsxs)("div", {
                    className: "single-recent-project",
                    children: [Object(s.jsx)("div", {
                        className: "img-box",
                        children: Object(s.jsx)("img", {
                            src: a,
                            alt: "Awesome Image"
                        })
                    }), Object(s.jsxs)("div", {
                        className: "text-box",
                        children: [Object(s.jsx)(n.a, {
                            href: r,
                            children: Object(s.jsx)("a", {
                                className: "more",
                                children: Object(s.jsx)("i", {
                                    className: "fas fa-plus"
                                })
                            })
                        }), Object(s.jsxs)("div", {
                            className: "inner hvr-bounce-to-bottom",
                            children: [Object(s.jsx)("span", {
                                children: i
                            }), Object(s.jsx)(n.a, {
                                href: r,
                                children: Object(s.jsx)("a", {
                                    children: Object(s.jsx)("h3", {
                                        children: c
                                    })
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        g0Ox: function(e, t, a) {
            "use strict";
            var s = a("Jq2x"),
                c = a("cKS0");

            function n() {
                return (n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            var i = {
                update: function() {
                    var e = this,
                        t = e.params.navigation;
                    if (!e.params.loop) {
                        var a = e.navigation,
                            s = a.$nextEl,
                            c = a.$prevEl;
                        c && c.length > 0 && (e.isBeginning ? c.addClass(t.disabledClass) : c.removeClass(t.disabledClass), c[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), s && s.length > 0 && (e.isEnd ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
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
                        n = a.params.navigation;
                    (n.nextEl || n.prevEl) && (n.nextEl && (e = Object(s.a)(n.nextEl), a.params.uniqueNavElements && "string" === typeof n.nextEl && e.length > 1 && 1 === a.$el.find(n.nextEl).length && (e = a.$el.find(n.nextEl))), n.prevEl && (t = Object(s.a)(n.prevEl), a.params.uniqueNavElements && "string" === typeof n.prevEl && t.length > 1 && 1 === a.$el.find(n.prevEl).length && (t = a.$el.find(n.prevEl))), e && e.length > 0 && e.on("click", a.navigation.onNextClick), t && t.length > 0 && t.on("click", a.navigation.onPrevClick), Object(c.c)(a.navigation, {
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
                        s = t.$prevEl;
                    a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), s && s.length && (s.off("click", e.navigation.onPrevClick), s.removeClass(e.params.navigation.disabledClass))
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
                    Object(c.a)(this, {
                        navigation: n({}, i)
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
                        var a, c = e.navigation,
                            n = c.$nextEl,
                            i = c.$prevEl;
                        !e.params.navigation.hideOnClick || Object(s.a)(t.target).is(i) || Object(s.a)(t.target).is(n) || (n ? a = n.hasClass(e.params.navigation.hiddenClass) : i && (a = i.hasClass(e.params.navigation.hiddenClass)), !0 === a ? e.emit("navigationShow") : e.emit("navigationHide"), n && n.toggleClass(e.params.navigation.hiddenClass), i && i.toggleClass(e.params.navigation.hiddenClass))
                    }
                }
            }
        },
        r5dr: function(e, t, a) {
            "use strict";
            var s = a("rePB"),
                c = a("nKUr"),
                n = (a("q1tI"), a("xqva")),
                i = a("Ndxo"),
                r = a("KSab"),
                l = function(e) {
                    var t = e.data,
                        a = t.name,
                        s = t.designation,
                        n = t.image,
                        i = t.content;
                    return Object(c.jsx)("div", {
                        className: "single-team-carousel",
                        children: Object(c.jsxs)("div", {
                            className: "inner",
                            children: [Object(c.jsx)("div", {
                                className: "img-box",
                                children: Object(c.jsx)("img", {
                                    src: n,
                                    alt: a
                                })
                            }), Object(c.jsxs)("div", {
                                className: "team-content",
                                children: [Object(c.jsxs)("div", {
                                    className: "title",
                                    children: [Object(c.jsx)("span", {
                                        children: s
                                    }), Object(c.jsx)("h3", {
                                        children: a
                                    })]
                                }), Object(c.jsx)("p", {
                                    children: i
                                })]
                            })]
                        })
                    })
                },
                o = a("bTu8"),
                j = a("0Xqd"),
                d = a("g0Ox");
            a("4l1m");

            function b(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(a), !0).forEach((function(t) {
                        Object(s.a)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : b(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            o.a.use([j.a, d.a]);
            t.a = function() {
                var e = r.G.sectionContent,
                    t = r.G.posts;
                return Object(c.jsx)("section", {
                    className: "team-section sec-pad",
                    children: Object(c.jsxs)("div", {
                        className: "thm-container",
                        children: [Object(c.jsxs)("div", {
                            className: "sec-title text-center",
                            children: [Object(c.jsx)("span", {
                                children: e.subText
                            }), Object(c.jsx)("h3", {
                                children: e.title
                            }), Object(c.jsx)("p", {
                                children: e.content
                            })]
                        }), Object(c.jsxs)(n.a, h(h({
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
                                return Object(c.jsx)(i.a, {
                                    children: Object(c.jsx)(l, {
                                        data: e
                                    })
                                }, t)
                            })), Object(c.jsxs)("div", {
                                className: "swiper-carousel-nav",
                                children: [Object(c.jsx)("div", {
                                    className: "swiper-button-prev",
                                    id: "team-slider-prev",
                                    children: Object(c.jsx)("i", {
                                        className: "fa fa-angle-left"
                                    })
                                }), Object(c.jsx)("div", {
                                    className: "swiper-button-next",
                                    id: "team-slider-next",
                                    children: Object(c.jsx)("i", {
                                        className: "fa fa-angle-right"
                                    })
                                })]
                            })]
                        }))]
                    })
                })
            }
        },
        vlRD: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return a("RNiq")
            }])
        }
    },
    [
        ["vlRD", 0, 2, 1, 3, 4, 5, 6]
    ]
]);