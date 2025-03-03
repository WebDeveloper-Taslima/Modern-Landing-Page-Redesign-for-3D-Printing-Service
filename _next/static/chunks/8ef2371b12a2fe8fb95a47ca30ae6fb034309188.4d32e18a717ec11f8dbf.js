(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [5], {
        "0KWo": function(a, e, t) {
            "use strict";
            var n = t("nKUr");
            t("q1tI");
            e.a = function(a) {
                var e = a.data,
                    t = e.textAlignment,
                    i = e.subText,
                    l = e.title;
                return Object(n.jsxs)("div", {
                    className: "title text-".concat(t),
                    children: [Object(n.jsx)("span", {
                        children: i
                    }), Object(n.jsx)("h2", {
                        children: l
                    })]
                })
            }
        },
        "0Xqd": function(a, e, t) {
            "use strict";
            var n = t("/xfr"),
                i = t("cKS0");

            function l() {
                return (l = Object.assign || function(a) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (a[n] = t[n])
                    }
                    return a
                }).apply(this, arguments)
            }
            var s = {
                run: function() {
                    var a = this,
                        e = a.slides.eq(a.activeIndex),
                        t = a.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (t = e.attr("data-swiper-autoplay") || a.params.autoplay.delay), clearTimeout(a.autoplay.timeout), a.autoplay.timeout = Object(i.e)((function() {
                        var e;
                        a.params.autoplay.reverseDirection ? a.params.loop ? (a.loopFix(), e = a.slidePrev(a.params.speed, !0, !0), a.emit("autoplay")) : a.isBeginning ? a.params.autoplay.stopOnLastSlide ? a.autoplay.stop() : (e = a.slideTo(a.slides.length - 1, a.params.speed, !0, !0), a.emit("autoplay")) : (e = a.slidePrev(a.params.speed, !0, !0), a.emit("autoplay")) : a.params.loop ? (a.loopFix(), e = a.slideNext(a.params.speed, !0, !0), a.emit("autoplay")) : a.isEnd ? a.params.autoplay.stopOnLastSlide ? a.autoplay.stop() : (e = a.slideTo(0, a.params.speed, !0, !0), a.emit("autoplay")) : (e = a.slideNext(a.params.speed, !0, !0), a.emit("autoplay")), (a.params.cssMode && a.autoplay.running || !1 === e) && a.autoplay.run()
                    }), t)
                },
                start: function() {
                    var a = this;
                    return "undefined" === typeof a.autoplay.timeout && (!a.autoplay.running && (a.autoplay.running = !0, a.emit("autoplayStart"), a.autoplay.run(), !0))
                },
                stop: function() {
                    var a = this;
                    return !!a.autoplay.running && ("undefined" !== typeof a.autoplay.timeout && (a.autoplay.timeout && (clearTimeout(a.autoplay.timeout), a.autoplay.timeout = void 0), a.autoplay.running = !1, a.emit("autoplayStop"), !0))
                },
                pause: function(a) {
                    var e = this;
                    e.autoplay.running && (e.autoplay.paused || (e.autoplay.timeout && clearTimeout(e.autoplay.timeout), e.autoplay.paused = !0, 0 !== a && e.params.autoplay.waitForTransition ? (e.$wrapperEl[0].addEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].addEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd)) : (e.autoplay.paused = !1, e.autoplay.run())))
                },
                onVisibilityChange: function() {
                    var a = this,
                        e = Object(n.a)();
                    "hidden" === e.visibilityState && a.autoplay.running && a.autoplay.pause(), "visible" === e.visibilityState && a.autoplay.paused && (a.autoplay.run(), a.autoplay.paused = !1)
                },
                onTransitionEnd: function(a) {
                    var e = this;
                    e && !e.destroyed && e.$wrapperEl && a.target === e.$wrapperEl[0] && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                }
            };
            e.a = {
                name: "autoplay",
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1
                    }
                },
                create: function() {
                    Object(i.a)(this, {
                        autoplay: l({}, s, {
                            running: !1,
                            paused: !1
                        })
                    })
                },
                on: {
                    init: function(a) {
                        a.params.autoplay.enabled && (a.autoplay.start(), Object(n.a)().addEventListener("visibilitychange", a.autoplay.onVisibilityChange))
                    },
                    beforeTransitionStart: function(a, e, t) {
                        a.autoplay.running && (t || !a.params.autoplay.disableOnInteraction ? a.autoplay.pause(e) : a.autoplay.stop())
                    },
                    sliderFirstMove: function(a) {
                        a.autoplay.running && (a.params.autoplay.disableOnInteraction ? a.autoplay.stop() : a.autoplay.pause())
                    },
                    touchEnd: function(a) {
                        a.params.cssMode && a.autoplay.paused && !a.params.autoplay.disableOnInteraction && a.autoplay.run()
                    },
                    destroy: function(a) {
                        a.autoplay.running && a.autoplay.stop(), Object(n.a)().removeEventListener("visibilitychange", a.autoplay.onVisibilityChange)
                    }
                }
            }
        },
        LQGr: function(a, e, t) {
            "use strict";
            var n = t("rePB"),
                i = t("nKUr"),
                l = (t("q1tI"), t("xqva")),
                s = t("Ndxo"),
                r = t("KSab"),
                o = function(a) {
                    var e = a.data,
                        t = e.image,
                        n = e.content,
                        l = e.name;
                    return Object(i.jsxs)("div", {
                        className: "item single-testimonials",
                        children: [Object(i.jsx)("div", {
                            className: "img-box",
                            children: Object(i.jsx)("img", {
                                src: t,
                                alt: "Awesome Image"
                            })
                        }), Object(i.jsxs)("div", {
                            className: "text-box",
                            children: [Object(i.jsx)("h3", {
                                children: n
                            }), Object(i.jsx)("p", {
                                children: l
                            })]
                        })]
                    })
                },
                p = (t("4l1m"), t("bTu8")),
                u = t("0Xqd"),
                d = t("Xchd");

            function c(a, e) {
                var t = Object.keys(a);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(a);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(a, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function m(a) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(t), !0).forEach((function(e) {
                        Object(n.a)(a, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach((function(e) {
                        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return a
            }
            p.a.use([u.a, d.a]);
            e.a = function() {
                return Object(i.jsxs)("section", {
                    className: "testi-carousel-wrapper",
                    children: [Object(i.jsx)("div", {
                        className: "overlay"
                    }), Object(i.jsx)("div", {
                        className: "thm-container",
                        children: Object(i.jsxs)(l.a, m(m({
                            className: "testi-carousel"
                        }, {
                            spaceBetween: 0,
                            loop: !0,
                            slidesPerView: 1,
                            pagination: {
                                el: "#testimonials-carousel-pagination",
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
                            children: [r.H.map((function(a, e) {
                                return Object(i.jsx)(s.a, {
                                    children: Object(i.jsx)(o, {
                                        data: a
                                    })
                                }, e)
                            })), Object(i.jsx)("div", {
                                className: "swiper-pagination",
                                id: "testimonials-carousel-pagination"
                            })]
                        }))
                    })]
                })
            }
        },
        Xchd: function(a, e, t) {
            "use strict";
            var n = t("Jq2x"),
                i = t("cKS0");

            function l() {
                return (l = Object.assign || function(a) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (a[n] = t[n])
                    }
                    return a
                }).apply(this, arguments)
            }
            var s = {
                update: function() {
                    var a = this,
                        e = a.rtl,
                        t = a.params.pagination;
                    if (t.el && a.pagination.el && a.pagination.$el && 0 !== a.pagination.$el.length) {
                        var i, l = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.slides.length,
                            s = a.pagination.$el,
                            r = a.params.loop ? Math.ceil((l - 2 * a.loopedSlides) / a.params.slidesPerGroup) : a.snapGrid.length;
                        if (a.params.loop ? ((i = Math.ceil((a.activeIndex - a.loopedSlides) / a.params.slidesPerGroup)) > l - 1 - 2 * a.loopedSlides && (i -= l - 2 * a.loopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== a.params.paginationType && (i = r + i)) : i = "undefined" !== typeof a.snapIndex ? a.snapIndex : a.activeIndex || 0, "bullets" === t.type && a.pagination.bullets && a.pagination.bullets.length > 0) {
                            var o, p, u, d = a.pagination.bullets;
                            if (t.dynamicBullets && (a.pagination.bulletSize = d.eq(0)[a.isHorizontal() ? "outerWidth" : "outerHeight"](!0), s.css(a.isHorizontal() ? "width" : "height", a.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== a.previousIndex && (a.pagination.dynamicBulletIndex += i - a.previousIndex, a.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? a.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : a.pagination.dynamicBulletIndex < 0 && (a.pagination.dynamicBulletIndex = 0)), o = i - a.pagination.dynamicBulletIndex, u = ((p = o + (Math.min(d.length, t.dynamicMainBullets) - 1)) + o) / 2), d.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), s.length > 1) d.each((function(a) {
                                var e = Object(n.a)(a),
                                    l = e.index();
                                l === i && e.addClass(t.bulletActiveClass), t.dynamicBullets && (l >= o && l <= p && e.addClass(t.bulletActiveClass + "-main"), l === o && e.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), l === p && e.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                            }));
                            else {
                                var c = d.eq(i),
                                    m = c.index();
                                if (c.addClass(t.bulletActiveClass), t.dynamicBullets) {
                                    for (var g = d.eq(o), y = d.eq(p), b = o; b <= p; b += 1) d.eq(b).addClass(t.bulletActiveClass + "-main");
                                    if (a.params.loop)
                                        if (m >= d.length - t.dynamicMainBullets) {
                                            for (var v = t.dynamicMainBullets; v >= 0; v -= 1) d.eq(d.length - v).addClass(t.bulletActiveClass + "-main");
                                            d.eq(d.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
                                        } else g.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), y.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                                    else g.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), y.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                                }
                            }
                            if (t.dynamicBullets) {
                                var f = Math.min(d.length, t.dynamicMainBullets + 4),
                                    h = (a.pagination.bulletSize * f - a.pagination.bulletSize) / 2 - u * a.pagination.bulletSize,
                                    C = e ? "right" : "left";
                                d.css(a.isHorizontal() ? C : "top", h + "px")
                            }
                        }
                        if ("fraction" === t.type && (s.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), s.find("." + t.totalClass).text(t.formatFractionTotal(r))), "progressbar" === t.type) {
                            var x;
                            x = t.progressbarOpposite ? a.isHorizontal() ? "vertical" : "horizontal" : a.isHorizontal() ? "horizontal" : "vertical";
                            var O = (i + 1) / r,
                                j = 1,
                                w = 1;
                            "horizontal" === x ? j = O : w = O, s.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + j + ") scaleY(" + w + ")").transition(a.params.speed)
                        }
                        "custom" === t.type && t.renderCustom ? (s.html(t.renderCustom(a, i + 1, r)), a.emit("paginationRender", s[0])) : a.emit("paginationUpdate", s[0]), s[a.params.watchOverflow && a.isLocked ? "addClass" : "removeClass"](t.lockClass)
                    }
                },
                render: function() {
                    var a = this,
                        e = a.params.pagination;
                    if (e.el && a.pagination.el && a.pagination.$el && 0 !== a.pagination.$el.length) {
                        var t = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.slides.length,
                            n = a.pagination.$el,
                            i = "";
                        if ("bullets" === e.type) {
                            var l = a.params.loop ? Math.ceil((t - 2 * a.loopedSlides) / a.params.slidesPerGroup) : a.snapGrid.length;
                            a.params.freeMode && !a.params.loop && l > t && (l = t);
                            for (var s = 0; s < l; s += 1) e.renderBullet ? i += e.renderBullet.call(a, s, e.bulletClass) : i += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                            n.html(i), a.pagination.bullets = n.find("." + e.bulletClass.replace(/ /g, "."))
                        }
                        "fraction" === e.type && (i = e.renderFraction ? e.renderFraction.call(a, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', n.html(i)), "progressbar" === e.type && (i = e.renderProgressbar ? e.renderProgressbar.call(a, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', n.html(i)), "custom" !== e.type && a.emit("paginationRender", a.pagination.$el[0])
                    }
                },
                init: function() {
                    var a = this,
                        e = a.params.pagination;
                    if (e.el) {
                        var t = Object(n.a)(e.el);
                        0 !== t.length && (a.params.uniqueNavElements && "string" === typeof e.el && t.length > 1 && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass.replace(/ /g, "."), (function(e) {
                            e.preventDefault();
                            var t = Object(n.a)(this).index() * a.params.slidesPerGroup;
                            a.params.loop && (t += a.loopedSlides), a.slideTo(t)
                        })), Object(i.c)(a.pagination, {
                            $el: t,
                            el: t[0]
                        }))
                    }
                },
                destroy: function() {
                    var a = this,
                        e = a.params.pagination;
                    if (e.el && a.pagination.el && a.pagination.$el && 0 !== a.pagination.$el.length) {
                        var t = a.pagination.$el;
                        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), a.pagination.bullets && a.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass.replace(/ /g, "."))
                    }
                }
            };
            e.a = {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function(a) {
                            return a
                        },
                        formatFractionTotal: function(a) {
                            return a
                        },
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock"
                    }
                },
                create: function() {
                    Object(i.a)(this, {
                        pagination: l({
                            dynamicBulletIndex: 0
                        }, s)
                    })
                },
                on: {
                    init: function(a) {
                        a.pagination.init(), a.pagination.render(), a.pagination.update()
                    },
                    activeIndexChange: function(a) {
                        (a.params.loop || "undefined" === typeof a.snapIndex) && a.pagination.update()
                    },
                    snapIndexChange: function(a) {
                        a.params.loop || a.pagination.update()
                    },
                    slidesLengthChange: function(a) {
                        a.params.loop && (a.pagination.render(), a.pagination.update())
                    },
                    snapGridLengthChange: function(a) {
                        a.params.loop || (a.pagination.render(), a.pagination.update())
                    },
                    destroy: function(a) {
                        a.pagination.destroy()
                    },
                    click: function(a, e) {
                        a.params.pagination.el && a.params.pagination.hideOnClick && a.pagination.$el.length > 0 && !Object(n.a)(e.target).hasClass(a.params.pagination.bulletClass) && (!0 === a.pagination.$el.hasClass(a.params.pagination.hiddenClass) ? a.emit("paginationShow") : a.emit("paginationHide"), a.pagination.$el.toggleClass(a.params.pagination.hiddenClass))
                    }
                }
            }
        }
    }
]);