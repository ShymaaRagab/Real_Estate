!(function (c, a, h) {
    "use strict";
    function n(t, e) {
        var n,
            o,
            i,
            s = [],
            a = 0;
        (t && t.isDefaultPrevented()) ||
            (t.preventDefault(), (e = e || {}), (n = (e = t && t.data ? u(t.data.options, e) : e).$target || h(t.currentTarget).trigger("blur")), (i = h.fancybox.getInstance()) && i.$trigger && i.$trigger.is(n)) ||
            ((s = e.selector ? h(e.selector) : (o = n.attr("data-fancybox") || "") ? ((s = t.data ? t.data.items : []).length ? s.filter('[data-fancybox="' + o + '"]') : h('[data-fancybox="' + o + '"]')) : [n]),
            (a = h(s).index(n)),
            ((i = h.fancybox.open(s, e, (a = a < 0 ? 0 : a))).$trigger = n));
    }
    if (((c.console = c.console || { info: function (t) {} }), h)) {
        if (h.fn.fancybox) return console.info("fancyBox already initialized");
        var t = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "slideShow", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: { preload: !1 },
                ajax: { settings: { data: { fancybox: !0 } } },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: { scrolling: "auto" },
                },
                video: {
                    tpl:
                        '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                    format: "",
                    autoStart: !0,
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl:
                    '<div class="fancybox-container" role="dialog" tabIndex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download:
                        '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                    zoom:
                        '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                    close:
                        '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                    arrowLeft:
                        '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                    arrowRight:
                        '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                    smallBtn:
                        '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: { autoStart: !1 },
                touch: { vertical: !0, momentum: !0 },
                hash: null,
                media: {},
                slideShow: { autoStart: !1, speed: 3e3 },
                thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" },
                wheel: "auto",
                onInit: h.noop,
                beforeLoad: h.noop,
                afterLoad: h.noop,
                beforeShow: h.noop,
                afterShow: h.noop,
                beforeClose: h.noop,
                afterClose: h.noop,
                onActivate: h.noop,
                onDeactivate: h.noop,
                clickContent: function (t, e) {
                    return "image" === t.type && "zoom";
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1,
                    idleTime: !1,
                    clickContent: function (t, e) {
                        return "image" === t.type && "toggleControls";
                    },
                    clickSlide: function (t, e) {
                        return "image" === t.type ? "toggleControls" : "close";
                    },
                    dblclickContent: function (t, e) {
                        return "image" === t.type && "zoom";
                    },
                    dblclickSlide: function (t, e) {
                        return "image" === t.type && "zoom";
                    },
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom",
                    },
                    de: {
                        CLOSE: "Schlie&szlig;en",
                        NEXT: "Weiter",
                        PREV: "Zur&uuml;ck",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Vergr&ouml;&szlig;ern",
                    },
                },
            },
            i = h(c),
            s = h(a),
            r = 0,
            d =
                c.requestAnimationFrame ||
                c.webkitRequestAnimationFrame ||
                c.mozRequestAnimationFrame ||
                c.oRequestAnimationFrame ||
                function (t) {
                    return c.setTimeout(t, 1e3 / 60);
                },
            e =
                c.cancelAnimationFrame ||
                c.webkitCancelAnimationFrame ||
                c.mozCancelAnimationFrame ||
                c.oCancelAnimationFrame ||
                function (t) {
                    c.clearTimeout(t);
                },
            l = (function () {
                var t,
                    e = a.createElement("fakeelement"),
                    n = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
                for (t in n) if (void 0 !== e.style[t]) return n[t];
                return "transitionend";
            })(),
            f = function (t) {
                return t && t.length && t[0].offsetHeight;
            },
            u = function (t, e) {
                var n = h.extend(!0, {}, t, e);
                return (
                    h.each(e, function (t, e) {
                        h.isArray(e) && (n[t] = e);
                    }),
                    n
                );
            },
            o = function (t, e, n) {
                var o = this;
                (o.opts = u({ index: n }, h.fancybox.defaults)),
                    h.isPlainObject(e) && (o.opts = u(o.opts, e)),
                    h.fancybox.isMobile && (o.opts = u(o.opts, o.opts.mobile)),
                    (o.id = o.opts.id || ++r),
                    (o.currIndex = parseInt(o.opts.index, 10) || 0),
                    (o.prevIndex = null),
                    (o.prevPos = null),
                    (o.currPos = 0),
                    (o.firstRun = !0),
                    (o.group = []),
                    (o.slides = {}),
                    o.addContent(t),
                    o.group.length && o.init();
            };
        h.extend(o.prototype, {
            init: function () {
                var e,
                    n,
                    o = this,
                    i = o.group[o.currIndex].opts;
                i.closeExisting && h.fancybox.close(!0),
                    h("body").addClass("fancybox-active"),
                    !h.fancybox.getInstance() &&
                        !1 !== i.hideScrollbar &&
                        !h.fancybox.isMobile &&
                        a.body.scrollHeight > c.innerHeight &&
                        (h("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (c.innerWidth - a.documentElement.clientWidth) + "px;}</style>"),
                        h("body").addClass("compensate-for-scrollbar")),
                    (n = ""),
                    h.each(i.buttons, function (t, e) {
                        n += i.btnTpl[e] || "";
                    }),
                    (e = h(o.translate(o, i.baseTpl.replace("{{buttons}}", n).replace("{{arrows}}", i.btnTpl.arrowLeft + i.btnTpl.arrowRight)))
                        .attr("id", "fancybox-container-" + o.id)
                        .addClass(i.baseClass)
                        .data("FancyBox", o)
                        .appendTo(i.parentEl)),
                    (o.$refs = { container: e }),
                    ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
                        o.$refs[t] = e.find(".fancybox-" + t);
                    }),
                    o.trigger("onInit"),
                    o.activate(),
                    o.jumpTo(o.currIndex);
            },
            translate: function (t, e) {
                var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                    return void 0 === n[e] ? t : n[e];
                });
            },
            addContent: function (t) {
                var a = this,
                    t = h.makeArray(t);
                h.each(t, function (t, e) {
                    var n,
                        o,
                        i = {},
                        s = {};
                    h.isPlainObject(e)
                        ? (s = (i = e).opts || e)
                        : "object" === h.type(e) && h(e).length
                        ? ((s = (n = h(e)).data() || {}), ((s = h.extend(!0, {}, s, s.options)).$orig = n), (i.src = a.opts.src || s.src || n.attr("href")), i.type || i.src || ((i.type = "inline"), (i.src = e)))
                        : (i = { type: "html", src: e + "" }),
                        (i.opts = h.extend(!0, {}, a.opts, s)),
                        h.isArray(s.buttons) && (i.opts.buttons = s.buttons),
                        h.fancybox.isMobile && i.opts.mobile && (i.opts = u(i.opts, i.opts.mobile)),
                        (n = i.type || i.opts.type),
                        (s = i.src || ""),
                        !n &&
                            s &&
                            ((o = s.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                                ? ((n = "video"), i.opts.video.format || (i.opts.video.format = "video/" + ("ogv" === o[1] ? "ogg" : o[1])))
                                : s.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)
                                ? (n = "image")
                                : s.match(/\.(pdf)((\?|#).*)?$/i)
                                ? (i = h.extend(!0, i, { contentType: "pdf", opts: { iframe: { preload: !(n = "iframe") } } }))
                                : "#" === s.charAt(0) && (n = "inline")),
                        n ? (i.type = n) : a.trigger("objectNeedsType", i),
                        i.contentType || (i.contentType = -1 < h.inArray(i.type, ["html", "inline", "ajax"]) ? "html" : i.type),
                        (i.index = a.group.length),
                        "auto" == i.opts.smallBtn && (i.opts.smallBtn = -1 < h.inArray(i.type, ["html", "inline", "ajax"])),
                        "auto" === i.opts.toolbar && (i.opts.toolbar = !i.opts.smallBtn),
                        (i.$thumb = i.opts.$thumb || null),
                        i.opts.$trigger && i.index === a.opts.index && ((i.$thumb = i.opts.$trigger.find("img:first")), i.$thumb.length) && (i.opts.$orig = i.opts.$trigger),
                        (i.$thumb && i.$thumb.length) || !i.opts.$orig || (i.$thumb = i.opts.$orig.find("img:first")),
                        i.$thumb && !i.$thumb.length && (i.$thumb = null),
                        (i.thumb = i.opts.thumb || (i.$thumb ? i.$thumb[0].src : null)),
                        "function" === h.type(i.opts.caption) && (i.opts.caption = i.opts.caption.apply(e, [a, i])),
                        "function" === h.type(a.opts.caption) && (i.opts.caption = a.opts.caption.apply(e, [a, i])),
                        i.opts.caption instanceof h || (i.opts.caption = void 0 === i.opts.caption ? "" : i.opts.caption + ""),
                        "ajax" === i.type && 1 < (o = s.split(/\s+/, 2)).length && ((i.src = o.shift()), (i.opts.filter = o.shift())),
                        i.opts.modal &&
                            (i.opts = h.extend(!0, i.opts, {
                                trapFocus: !0,
                                infobar: 0,
                                toolbar: 0,
                                smallBtn: 0,
                                keyboard: 0,
                                slideShow: 0,
                                fullScreen: 0,
                                thumbs: 0,
                                touch: 0,
                                clickContent: !1,
                                clickSlide: !1,
                                clickOutside: !1,
                                dblclickContent: !1,
                                dblclickSlide: !1,
                                dblclickOutside: !1,
                            })),
                        a.group.push(i);
                }),
                    Object.keys(a.slides).length && (a.updateControls(), (t = a.Thumbs)) && t.isActive && (t.create(), t.focus());
            },
            addEvents: function () {
                var o = this;
                o.removeEvents(),
                    o.$refs.container
                        .on("click.fb-close", "[data-fancybox-close]", function (t) {
                            t.stopPropagation(), t.preventDefault(), o.close(t);
                        })
                        .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
                            t.stopPropagation(), t.preventDefault(), o.previous();
                        })
                        .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
                            t.stopPropagation(), t.preventDefault(), o.next();
                        })
                        .on("click.fb", "[data-fancybox-zoom]", function (t) {
                            o[o.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
                        }),
                    i.on("orientationchange.fb resize.fb", function (t) {
                        t && t.originalEvent && "resize" === t.originalEvent.type
                            ? (o.requestId && e(o.requestId),
                              (o.requestId = d(function () {
                                  o.update(t);
                              })))
                            : (o.current && "iframe" === o.current.type && o.$refs.stage.hide(),
                              setTimeout(
                                  function () {
                                      o.$refs.stage.show(), o.update(t);
                                  },
                                  h.fancybox.isMobile ? 600 : 250
                              ));
                    }),
                    s.on("keydown.fb", function (t) {
                        var e = (h.fancybox ? h.fancybox.getInstance() : null).current,
                            n = t.keyCode || t.which;
                        if (9 != n)
                            return !e.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || h(t.target).is("input,textarea,video,audio,select")
                                ? void 0
                                : 8 === n || 27 === n
                                ? (t.preventDefault(), void o.close(t))
                                : 37 === n || 38 === n
                                ? (t.preventDefault(), void o.previous())
                                : 39 === n || 40 === n
                                ? (t.preventDefault(), void o.next())
                                : void o.trigger("afterKeydown", t, n);
                        e.opts.trapFocus && o.focus(t);
                    }),
                    o.group[o.currIndex].opts.idleTime &&
                        ((o.idleSecondsCounter = 0),
                        s.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
                            (o.idleSecondsCounter = 0), o.isIdle && o.showControls(), (o.isIdle = !1);
                        }),
                        (o.idleInterval = c.setInterval(function () {
                            ++o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime && !o.isDragging && ((o.isIdle = !0), (o.idleSecondsCounter = 0), o.hideControls());
                        }, 1e3)));
            },
            removeEvents: function () {
                i.off("orientationchange.fb resize.fb"), s.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (c.clearInterval(this.idleInterval), (this.idleInterval = null));
            },
            previous: function (t) {
                return this.jumpTo(this.currPos - 1, t);
            },
            next: function (t) {
                return this.jumpTo(this.currPos + 1, t);
            },
            jumpTo: function (t, o) {
                var e,
                    n,
                    i,
                    s,
                    a,
                    r,
                    c,
                    l,
                    d = this,
                    u = d.group.length;
                if (!(d.isDragging || d.isClosing || (d.isAnimating && d.firstRun))) {
                    if (((t = parseInt(t, 10)), !(n = (d.current || d).opts.loop) && (t < 0 || u <= t))) return !1;
                    ((e = d.firstRun = !Object.keys(d.slides).length),
                    (s = d.current),
                    (d.prevIndex = d.currIndex),
                    (d.prevPos = d.currPos),
                    (i = d.createSlide(t)),
                    1 < u && ((n || i.index < u - 1) && d.createSlide(t + 1), n || 0 < i.index) && d.createSlide(t - 1),
                    (d.current = i),
                    (d.currIndex = i.index),
                    (d.currPos = i.pos),
                    d.trigger("beforeShow", e),
                    d.updateControls(),
                    (i.forcedDuration = void 0),
                    h.isNumeric(o) ? (i.forcedDuration = o) : (o = i.opts[e ? "animationDuration" : "transitionDuration"]),
                    (o = parseInt(o, 10)),
                    (u = d.isMoved(i)),
                    i.$slide.addClass("fancybox-slide--current"),
                    e)
                        ? (i.opts.animationEffect && o && d.$refs.container.css("transition-duration", o + "ms"), d.$refs.container.addClass("fancybox-is-open").trigger("focus"), d.loadSlide(i), d.preload("image"))
                        : ((a = h.fancybox.getTranslate(s.$slide)),
                          (r = h.fancybox.getTranslate(d.$refs.stage)),
                          h.each(d.slides, function (t, e) {
                              h.fancybox.stop(e.$slide, !0);
                          }),
                          s.pos !== i.pos && (s.isComplete = !1),
                          s.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),
                          u
                              ? ((l = a.left - (s.pos * a.width + s.pos * s.opts.gutter)),
                                h.each(d.slides, function (t, e) {
                                    e.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
                                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                                    });
                                    var n = e.pos * a.width + e.pos * e.opts.gutter;
                                    h.fancybox.setTranslate(e.$slide, { top: 0, left: n - r.left + l }),
                                        e.pos !== i.pos && e.$slide.addClass("fancybox-slide--" + (e.pos > i.pos ? "next" : "previous")),
                                        f(e.$slide),
                                        h.fancybox.animate(e.$slide, { top: 0, left: (e.pos - i.pos) * a.width + (e.pos - i.pos) * e.opts.gutter }, o, function () {
                                            e.$slide.css({ transform: "", opacity: "" }).removeClass("fancybox-slide--next fancybox-slide--previous"), e.pos === d.currPos && d.complete();
                                        });
                                }))
                              : o &&
                                i.opts.transitionEffect &&
                                ((c = "fancybox-animated fancybox-fx-" + i.opts.transitionEffect),
                                s.$slide.addClass("fancybox-slide--" + (s.pos > i.pos ? "next" : "previous")),
                                h.fancybox.animate(
                                    s.$slide,
                                    c,
                                    o,
                                    function () {
                                        s.$slide.removeClass(c).removeClass("fancybox-slide--next fancybox-slide--previous");
                                    },
                                    !1
                                )),
                          i.isLoaded ? d.revealContent(i) : d.loadSlide(i),
                          d.preload("image"));
                }
            },
            createSlide: function (t) {
                var e,
                    n = this,
                    o = t % n.group.length;
                return (
                    (o = o < 0 ? n.group.length + o : o),
                    !n.slides[t] && n.group[o] && ((e = h('<div class="fancybox-slide"></div>').appendTo(n.$refs.stage)), (n.slides[t] = h.extend(!0, {}, n.group[o], { pos: t, $slide: e, isLoaded: !1 })), n.updateSlide(n.slides[t])),
                    n.slides[t]
                );
            },
            scaleToActual: function (t, e, n) {
                var o,
                    i,
                    s,
                    a,
                    r = this,
                    c = r.current,
                    l = c.$content,
                    d = h.fancybox.getTranslate(c.$slide).width,
                    u = h.fancybox.getTranslate(c.$slide).height,
                    f = c.width,
                    p = c.height;
                r.isAnimating ||
                    r.isMoved() ||
                    !l ||
                    "image" != c.type ||
                    !c.isLoaded ||
                    c.hasError ||
                    ((r.isAnimating = !0),
                    h.fancybox.stop(l),
                    (t = void 0 === t ? 0.5 * d : t),
                    (e = void 0 === e ? 0.5 * u : e),
                    ((o = h.fancybox.getTranslate(l)).top -= h.fancybox.getTranslate(c.$slide).top),
                    (o.left -= h.fancybox.getTranslate(c.$slide).left),
                    (c = f / o.width),
                    (a = p / o.height),
                    (i = 0.5 * d - 0.5 * f),
                    (s = 0.5 * u - 0.5 * p),
                    d < f && (i = 0 < (i = o.left * c - (t * c - t)) ? 0 : i) < d - f && (i = d - f),
                    u < p && (s = 0 < (s = o.top * a - (e * a - e)) ? 0 : s) < u - p && (s = u - p),
                    r.updateCursor(f, p),
                    h.fancybox.animate(l, { top: s, left: i, scaleX: c, scaleY: a }, n || 366, function () {
                        r.isAnimating = !1;
                    }),
                    r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop());
            },
            scaleToFit: function (t) {
                var e = this,
                    n = e.current,
                    o = n.$content;
                e.isAnimating ||
                    e.isMoved() ||
                    !o ||
                    "image" != n.type ||
                    !n.isLoaded ||
                    n.hasError ||
                    ((e.isAnimating = !0),
                    h.fancybox.stop(o),
                    (n = e.getFitPos(n)),
                    e.updateCursor(n.width, n.height),
                    h.fancybox.animate(o, { top: n.top, left: n.left, scaleX: n.width / o.width(), scaleY: n.height / o.height() }, t || 366, function () {
                        e.isAnimating = !1;
                    }));
            },
            getFitPos: function (t) {
                var e,
                    n,
                    o = t.$content,
                    i = t.$slide,
                    s = t.width || t.opts.width,
                    a = t.height || t.opts.height,
                    r = {};
                return (
                    !!(t.isLoaded && o && o.length) &&
                    ((e = h.fancybox.getTranslate(this.$refs.stage).width),
                    (n = h.fancybox.getTranslate(this.$refs.stage).height),
                    (e -= parseFloat(i.css("paddingLeft")) + parseFloat(i.css("paddingRight")) + parseFloat(o.css("marginLeft")) + parseFloat(o.css("marginRight"))),
                    (n -= parseFloat(i.css("paddingTop")) + parseFloat(i.css("paddingBottom")) + parseFloat(o.css("marginTop")) + parseFloat(o.css("marginBottom"))),
                    (s && a) || ((s = e), (a = n)),
                    e - 0.5 < (s *= o = Math.min(1, e / s, n / a)) && (s = e),
                    n - 0.5 < (a *= o) && (a = n),
                    "image" === t.type
                        ? ((r.top = Math.floor(0.5 * (n - a)) + parseFloat(i.css("paddingTop"))), (r.left = Math.floor(0.5 * (e - s)) + parseFloat(i.css("paddingLeft"))))
                        : "video" === t.contentType && (s / (o = t.opts.width && t.opts.height ? s / a : t.opts.ratio || 16 / 9) < a ? (a = s / o) : a * o < s && (s = a * o)),
                    (r.width = s),
                    (r.height = a),
                    r)
                );
            },
            update: function (n) {
                var o = this;
                h.each(o.slides, function (t, e) {
                    o.updateSlide(e, n);
                });
            },
            updateSlide: function (t, e) {
                var n = this,
                    o = t && t.$content,
                    i = t.width || t.opts.width,
                    s = t.height || t.opts.height,
                    a = t.$slide;
                n.adjustCaption(t),
                    o && (i || s || "video" === t.contentType) && !t.hasError && (h.fancybox.stop(o), h.fancybox.setTranslate(o, n.getFitPos(t)), t.pos === n.currPos) && ((n.isAnimating = !1), n.updateCursor()),
                    n.adjustLayout(t),
                    a.length &&
                        (a.trigger("refresh"), t.pos === n.currPos) &&
                        n.$refs.toolbar.add(n.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", a.get(0).scrollHeight > a.get(0).clientHeight),
                    n.trigger("onUpdate", t, e);
            },
            centerSlide: function (t) {
                var e = this,
                    n = e.current,
                    o = n.$slide;
                !e.isClosing &&
                    n &&
                    (o.siblings().css({ transform: "", opacity: "" }),
                    o.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),
                    h.fancybox.animate(
                        o,
                        { top: 0, left: 0, opacity: 1 },
                        void 0 === t ? 0 : t,
                        function () {
                            o.css({ transform: "", opacity: "" }), n.isComplete || e.complete();
                        },
                        !1
                    ));
            },
            isMoved: function (t) {
                var e,
                    n,
                    t = t || this.current;
                return !!t && ((n = h.fancybox.getTranslate(this.$refs.stage)), (e = h.fancybox.getTranslate(t.$slide)), !t.$slide.hasClass("fancybox-animated")) && (0.5 < Math.abs(e.top - n.top) || 0.5 < Math.abs(e.left - n.left));
            },
            updateCursor: function (t, e) {
                var n = this,
                    o = n.current,
                    i = n.$refs.container;
                o &&
                    !n.isClosing &&
                    n.Guestures &&
                    (i.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),
                    (e = !!(t = n.canPan(t, e)) || n.isZoomable()),
                    i.toggleClass("fancybox-is-zoomable", e),
                    h("[data-fancybox-zoom]").prop("disabled", !e),
                    t
                        ? i.addClass("fancybox-can-pan")
                        : e && ("zoom" === o.opts.clickContent || (h.isFunction(o.opts.clickContent) && "zoom" == o.opts.clickContent(o)))
                        ? i.addClass("fancybox-can-zoomIn")
                        : o.opts.touch && (o.opts.touch.vertical || 1 < n.group.length) && "video" !== o.contentType && i.addClass("fancybox-can-swipe"));
            },
            isZoomable: function () {
                var t,
                    e = this.current;
                if (e && !this.isClosing && "image" === e.type && !e.hasError) {
                    if (!e.isLoaded) return !0;
                    if ((t = this.getFitPos(e)) && (e.width > t.width || e.height > t.height)) return !0;
                }
                return !1;
            },
            isScaledDown: function (t, e) {
                var n = !1,
                    o = this.current,
                    i = o.$content;
                return void 0 !== t && void 0 !== e ? (n = t < o.width && e < o.height) : i && (n = (n = h.fancybox.getTranslate(i)).width < o.width && n.height < o.height), n;
            },
            canPan: function (t, e) {
                var n = this.current,
                    o = null,
                    i = !1;
                return (i =
                    "image" === n.type && (n.isComplete || (t && e)) && !n.hasError && ((i = this.getFitPos(n)), void 0 !== t && void 0 !== e ? (o = { width: t, height: e }) : n.isComplete && (o = h.fancybox.getTranslate(n.$content)), o)
                        ? i && (1.5 < Math.abs(o.width - i.width) || 1.5 < Math.abs(o.height - i.height))
                        : i);
            },
            loadSlide: function (n) {
                var t,
                    e,
                    o,
                    i = this;
                if (!n.isLoading && !n.isLoaded) {
                    if (!(n.isLoading = !0) === i.trigger("beforeLoad", n)) return (n.isLoading = !1);
                    switch (((t = n.type), (e = n.$slide).off("refresh").trigger("onReset").addClass(n.opts.slideClass), t)) {
                        case "image":
                            i.setImage(n);
                            break;
                        case "iframe":
                            i.setIframe(n);
                            break;
                        case "html":
                            i.setContent(n, n.src || n.content);
                            break;
                        case "video":
                            i.setContent(
                                n,
                                n.opts.video.tpl
                                    .replace(/\{\{src\}\}/gi, n.src)
                                    .replace("{{format}}", n.opts.videoFormat || n.opts.video.format || "")
                                    .replace("{{poster}}", n.thumb || "")
                            );
                            break;
                        case "inline":
                            h(n.src).length ? i.setContent(n, h(n.src)) : i.setError(n);
                            break;
                        case "ajax":
                            i.showLoading(n),
                                (o = h.ajax(
                                    h.extend({}, n.opts.ajax.settings, {
                                        url: n.src,
                                        success: function (t, e) {
                                            "success" === e && i.setContent(n, t);
                                        },
                                        error: function (t, e) {
                                            t && "abort" !== e && i.setError(n);
                                        },
                                    })
                                )),
                                e.one("onReset", function () {
                                    o.abort();
                                });
                            break;
                        default:
                            i.setError(n);
                    }
                    return !0;
                }
            },
            setImage: function (e) {
                var t,
                    n = this;
                setTimeout(function () {
                    var t = e.$image;
                    n.isClosing || !e.isLoading || (t && t.length && t[0].complete) || e.hasError || n.showLoading(e);
                }, 50),
                    n.checkSrcset(e),
                    (e.$content = h('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image"))),
                    !1 !== e.opts.preload &&
                        e.opts.width &&
                        e.opts.height &&
                        e.thumb &&
                        ((e.width = e.opts.width),
                        (e.height = e.opts.height),
                        ((t = a.createElement("img")).onerror = function () {
                            h(this).remove(), (e.$ghost = null);
                        }),
                        (t.onload = function () {
                            n.afterLoad(e);
                        }),
                        (e.$ghost = h(t).addClass("fancybox-image").appendTo(e.$content).attr("src", e.thumb))),
                    n.setBigImage(e);
            },
            checkSrcset: function (t) {
                var e,
                    n,
                    o,
                    i,
                    s = t.opts.srcset || t.opts.image.srcset;
                if (s) {
                    (o = c.devicePixelRatio || 1),
                        (i = c.innerWidth * o),
                        (n = s.split(",").map(function (t) {
                            var o = {};
                            return (
                                t
                                    .trim()
                                    .split(/\s+/)
                                    .forEach(function (t, e) {
                                        var n = parseInt(t.substring(0, t.length - 1), 10);
                                        if (0 === e) return (o.url = t);
                                        n && ((o.value = n), (o.postfix = t[t.length - 1]));
                                    }),
                                o
                            );
                        })).sort(function (t, e) {
                            return t.value - e.value;
                        });
                    for (var a = 0; a < n.length; a++) {
                        var r = n[a];
                        if (("w" === r.postfix && r.value >= i) || ("x" === r.postfix && r.value >= o)) {
                            e = r;
                            break;
                        }
                    }
                    (e = !e && n.length ? n[n.length - 1] : e) && ((t.src = e.url), t.width && t.height && "w" == e.postfix && ((t.height = (t.width / t.height) * e.value), (t.width = e.value)), (t.opts.srcset = s));
                }
            },
            setBigImage: function (e) {
                var n = this,
                    t = a.createElement("img"),
                    o = h(t);
                (e.$image = o
                    .one("error", function () {
                        n.setError(e);
                    })
                    .one("load", function () {
                        var t;
                        e.$ghost || (n.resolveImageSlideSize(e, this.naturalWidth, this.naturalHeight), n.afterLoad(e)),
                            n.isClosing ||
                                (e.opts.srcset &&
                                    (((t = e.opts.sizes) && "auto" !== t) || (t = (1 < e.width / e.height && 1 < i.width() / i.height() ? "100" : Math.round((e.width / e.height) * 100)) + "vw"),
                                    o.attr("sizes", t).attr("srcset", e.opts.srcset)),
                                e.$ghost &&
                                    setTimeout(function () {
                                        e.$ghost && !n.isClosing && e.$ghost.hide();
                                    }, Math.min(300, Math.max(1e3, e.height / 1600))),
                                n.hideLoading(e));
                    })
                    .addClass("fancybox-image")
                    .attr("src", e.src)
                    .appendTo(e.$content)),
                    (t.complete || "complete" == t.readyState) && o.naturalWidth && o.naturalHeight ? o.trigger("load") : t.error && o.trigger("error");
            },
            resolveImageSlideSize: function (t, e, n) {
                var o = parseInt(t.opts.width, 10),
                    i = parseInt(t.opts.height, 10);
                (t.width = e), (t.height = n), 0 < o && ((t.width = o), (t.height = Math.floor((o * n) / e))), 0 < i && ((t.width = Math.floor((i * e) / n)), (t.height = i));
            },
            setIframe: function (i) {
                var s,
                    e = this,
                    a = i.opts.iframe,
                    r = i.$slide;
                (i.$content = h('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>')
                    .css(a.css)
                    .appendTo(r)),
                    r.addClass("fancybox-slide--" + i.contentType),
                    (i.$iframe = s = h(a.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                        .attr(a.attr)
                        .appendTo(i.$content)),
                    a.preload
                        ? (e.showLoading(i),
                          s.on("load.fb error.fb", function (t) {
                              (this.isReady = 1), i.$slide.trigger("refresh"), e.afterLoad(i);
                          }),
                          r.on("refresh.fb", function () {
                              var t,
                                  e = i.$content,
                                  n = a.css.width,
                                  o = a.css.height;
                              if (1 === s[0].isReady) {
                                  try {
                                      t = s.contents().find("body");
                                  } catch (t) {}
                                  t &&
                                      t.length &&
                                      t.children().length &&
                                      (r.css("overflow", "visible"),
                                      e.css({ width: "100%", "max-width": "100%", height: "9999px" }),
                                      void 0 === n && (n = Math.ceil(Math.max(t[0].clientWidth, t.outerWidth(!0)))),
                                      e.css("width", n || "").css("max-width", ""),
                                      void 0 === o && (o = Math.ceil(Math.max(t[0].clientHeight, t.outerHeight(!0)))),
                                      e.css("height", o || ""),
                                      r.css("overflow", "auto")),
                                      e.removeClass("fancybox-is-hidden");
                              }
                          }))
                        : e.afterLoad(i),
                    s.attr("src", i.src),
                    r.one("onReset", function () {
                        try {
                            h(this).find("iframe").hide().unbind().attr("src", "//about:blank");
                        } catch (t) {}
                        h(this).off("refresh.fb").empty(), (i.isLoaded = !1), (i.isRevealed = !1);
                    });
            },
            setContent: function (t, e) {
                var n;
                this.isClosing ||
                    (this.hideLoading(t),
                    t.$content && h.fancybox.stop(t.$content),
                    t.$slide.empty(),
                    (n = e) && n.hasOwnProperty && n instanceof h && e.parent().length
                        ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"),
                          (t.$placeholder = h("<div>").hide().insertAfter(e)),
                          e.css("display", "inline-block"))
                        : t.hasError || ("string" === h.type(e) && (e = h("<div>").append(h.trim(e)).contents()), t.opts.filter && (e = h("<div>").html(e).find(t.opts.filter))),
                    t.$slide.one("onReset", function () {
                        h(this).find("video,audio").trigger("pause"),
                            t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), (t.$placeholder = null)),
                            t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
                            t.hasError || (h(this).empty(), (t.isLoaded = !1), (t.isRevealed = !1));
                    }),
                    h(e).appendTo(t.$slide),
                    h(e).is("video,audio") &&
                        (h(e).addClass("fancybox-video"), h(e).wrap("<div></div>"), (t.contentType = "video"), (t.opts.width = t.opts.width || h(e).attr("width")), (t.opts.height = t.opts.height || h(e).attr("height"))),
                    (t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first()),
                    t.$content.siblings().hide(),
                    t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()),
                    t.$content.addClass("fancybox-content"),
                    t.$slide.addClass("fancybox-slide--" + t.contentType),
                    this.afterLoad(t));
            },
            setError: function (t) {
                (t.hasError = !0),
                    t.$slide
                        .trigger("onReset")
                        .removeClass("fancybox-slide--" + t.contentType)
                        .addClass("fancybox-slide--error"),
                    (t.contentType = "html"),
                    this.setContent(t, this.translate(t, t.opts.errorTpl)),
                    t.pos === this.currPos && (this.isAnimating = !1);
            },
            showLoading: function (t) {
                (t = t || this.current) && !t.$spinner && (t.$spinner = h(this.translate(this, this.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"));
            },
            hideLoading: function (t) {
                (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner);
            },
            afterLoad: function (t) {
                var e = this;
                e.isClosing ||
                    ((t.isLoading = !1),
                    (t.isLoaded = !0),
                    e.trigger("afterLoad", t),
                    e.hideLoading(t),
                    !t.opts.smallBtn || (t.$smallBtn && t.$smallBtn.length) || (t.$smallBtn = h(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)),
                    t.opts.protect &&
                        t.$content &&
                        !t.hasError &&
                        (t.$content.on("contextmenu.fb", function (t) {
                            return 2 == t.button && t.preventDefault(), !0;
                        }),
                        "image" === t.type) &&
                        h('<div class="fancybox-spaceball"></div>').appendTo(t.$content),
                    e.adjustCaption(t),
                    e.adjustLayout(t),
                    t.pos === e.currPos && e.updateCursor(),
                    e.revealContent(t));
            },
            adjustCaption: function (t) {
                var e = this,
                    t = t || e.current,
                    n = t.opts.caption,
                    o = t.opts.preventCaptionOverlap,
                    i = e.$refs.caption,
                    s = !1;
                i.toggleClass("fancybox-caption--separate", o),
                    o &&
                        n &&
                        n.length &&
                        (t.pos !== e.currPos ? ((o = i.clone().appendTo(i.parent())).children().eq(0).empty().html(n), (s = o.outerHeight(!0)), o.empty().remove()) : e.$caption && (s = e.$caption.outerHeight(!0)),
                        t.$slide.css("padding-bottom", s || ""));
            },
            adjustLayout: function (t) {
                var e,
                    n,
                    o,
                    i,
                    t = t || this.current;
                t.isLoaded &&
                    !0 !== t.opts.disableLayoutFix &&
                    (t.$content.css("margin-bottom", ""),
                    t.$content.outerHeight() > t.$slide.height() + 0.5 &&
                        ((o = t.$slide[0].style["padding-bottom"]), (i = t.$slide.css("padding-bottom")), 0 < parseFloat(i)) &&
                        ((e = t.$slide[0].scrollHeight), t.$slide.css("padding-bottom", 0), Math.abs(e - t.$slide[0].scrollHeight) < 1 && (n = i), t.$slide.css("padding-bottom", o)),
                    t.$content.css("margin-bottom", n));
            },
            revealContent: function (t) {
                var e,
                    n,
                    o,
                    i,
                    s = this,
                    a = t.$slide,
                    r = !1,
                    c = !1,
                    l = s.isMoved(t),
                    d = t.isRevealed;
                return (
                    (t.isRevealed = !0),
                    (e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"]),
                    (o = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"]),
                    (o = parseInt(void 0 === t.forcedDuration ? o : t.forcedDuration, 10)),
                    "zoom" === (e = !l && t.pos === s.currPos && o ? e : !1) && (t.pos === s.currPos && o && "image" === t.type && !t.hasError && (c = s.getThumbPos(t)) ? (r = s.getFitPos(t)) : (e = "fade")),
                    "zoom" === e
                        ? ((s.isAnimating = !0),
                          (r.scaleX = r.width / c.width),
                          (r.scaleY = r.height / c.height),
                          (i = "auto" == (i = t.opts.zoomOpacity) ? 0.1 < Math.abs(t.width / t.height - c.width / c.height) : i) && ((c.opacity = 0.1), (r.opacity = 1)),
                          h.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), c),
                          f(t.$content),
                          void h.fancybox.animate(t.$content, r, o, function () {
                              (s.isAnimating = !1), s.complete();
                          }))
                        : (s.updateSlide(t),
                          e
                              ? (h.fancybox.stop(a),
                                (n = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e),
                                a.addClass(n).removeClass("fancybox-slide--current"),
                                t.$content.removeClass("fancybox-is-hidden"),
                                f(a),
                                "image" !== t.type && t.$content.hide().show(0),
                                void h.fancybox.animate(
                                    a,
                                    "fancybox-slide--current",
                                    o,
                                    function () {
                                        a.removeClass(n).css({ transform: "", opacity: "" }), t.pos === s.currPos && s.complete();
                                    },
                                    !0
                                ))
                              : (t.$content.removeClass("fancybox-is-hidden"), d || !l || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void (t.pos === s.currPos && s.complete())))
                );
            },
            getThumbPos: function (t) {
                var e,
                    n,
                    o,
                    i,
                    t = t.$thumb;
                return (
                    !(
                        !t ||
                        !(o = t[0]) ||
                        o.ownerDocument !== a ||
                        (h(".fancybox-container").css("pointer-events", "none"),
                        (i = { x: o.getBoundingClientRect().left + o.offsetWidth / 2, y: o.getBoundingClientRect().top + o.offsetHeight / 2 }),
                        (i = a.elementFromPoint(i.x, i.y) === o),
                        h(".fancybox-container").css("pointer-events", ""),
                        !i)
                    ) &&
                    ((o = h.fancybox.getTranslate(t)),
                    (i = parseFloat(t.css("border-top-width") || 0)),
                    (n = parseFloat(t.css("border-right-width") || 0)),
                    (e = parseFloat(t.css("border-bottom-width") || 0)),
                    (t = parseFloat(t.css("border-left-width") || 0)),
                    (n = { top: o.top + i, left: o.left + t, width: o.width - n - t, height: o.height - i - e, scaleX: 1, scaleY: 1 }),
                    0 < o.width) &&
                    0 < o.height &&
                    n
                );
            },
            complete: function () {
                var t,
                    n = this,
                    e = n.current,
                    o = {};
                !n.isMoved() &&
                    e.isLoaded &&
                    (e.isComplete ||
                        ((e.isComplete = !0),
                        e.$slide.siblings().trigger("onReset"),
                        n.preload("inline"),
                        f(e.$slide),
                        e.$slide.addClass("fancybox-slide--complete"),
                        h.each(n.slides, function (t, e) {
                            e.pos >= n.currPos - 1 && e.pos <= n.currPos + 1 ? (o[e.pos] = e) : e && (h.fancybox.stop(e.$slide), e.$slide.off().remove());
                        }),
                        (n.slides = o)),
                    (n.isAnimating = !1),
                    n.updateCursor(),
                    n.trigger("afterShow"),
                    e.opts.video.autoStart &&
                        e.$slide
                            .find("video,audio")
                            .filter(":visible:first")
                            .trigger("play")
                            .one("ended", function () {
                                Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), n.next();
                            }),
                    e.opts.autoFocus && "html" === e.contentType && ((t = e.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : n.focus(null, !0)),
                    e.$slide.scrollTop(0).scrollLeft(0));
            },
            preload: function (t) {
                var e,
                    n,
                    o = this;
                o.group.length < 2 || ((n = o.slides[o.currPos + 1]), (e = o.slides[o.currPos - 1]) && e.type === t && o.loadSlide(e), n && n.type === t && o.loadSlide(n));
            },
            focus: function (t, e) {
                var n = this,
                    o = [
                        "a[href]",
                        "area[href]",
                        'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
                        "select:not([disabled]):not([aria-hidden])",
                        "textarea:not([disabled]):not([aria-hidden])",
                        "button:not([disabled]):not([aria-hidden])",
                        "iframe",
                        "object",
                        "embed",
                        "video",
                        "audio",
                        "[contenteditable]",
                        '[tabIndex]:not([tabIndex^="-"])',
                    ].join(",");
                n.isClosing ||
                    ((e = (e = !t && n.current && n.current.isComplete ? n.current.$slide.find("*:visible" + (e ? ":not(.fancybox-close-small)" : "")) : n.$refs.container.find("*:visible")).filter(o).filter(function () {
                        return "hidden" !== h(this).css("visibility") && !h(this).hasClass("disabled");
                    })).length
                        ? ((o = e.index(a.activeElement)),
                          t && t.shiftKey ? (o < 0 || 0 == o) && (t.preventDefault(), e.eq(e.length - 1).trigger("focus")) : (o < 0 || o == e.length - 1) && (t && t.preventDefault(), e.eq(0).trigger("focus")))
                        : n.$refs.container.trigger("focus"));
            },
            activate: function () {
                var e = this;
                h(".fancybox-container").each(function () {
                    var t = h(this).data("FancyBox");
                    t && t.id !== e.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), (t.isVisible = !1));
                }),
                    (e.isVisible = !0),
                    (e.current || e.isIdle) && (e.update(), e.updateControls()),
                    e.trigger("onActivate"),
                    e.addEvents();
            },
            close: function (t, e) {
                function n() {
                    c.cleanUp(t);
                }
                var o,
                    i,
                    s,
                    a,
                    r,
                    c = this,
                    l = c.current;
                return (
                    !c.isClosing &&
                    (!(c.isClosing = !0) === c.trigger("beforeClose", t)
                        ? ((c.isClosing = !1),
                          d(function () {
                              c.update();
                          }),
                          !1)
                        : (c.removeEvents(),
                          (i = l.$content),
                          (o = l.opts.animationEffect),
                          (e = h.isNumeric(e) ? e : o ? l.opts.animationDuration : 0),
                          l.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                          !0 !== t ? h.fancybox.stop(l.$slide) : (o = !1),
                          l.$slide.siblings().trigger("onReset").remove(),
                          e &&
                              c.$refs.container
                                  .removeClass("fancybox-is-open")
                                  .addClass("fancybox-is-closing")
                                  .css("transition-duration", e + "ms"),
                          c.hideLoading(l),
                          c.hideControls(!0),
                          c.updateCursor(),
                          "zoom" === (o = "zoom" !== o || (i && e && "image" === l.type && !c.isMoved() && !l.hasError && (r = c.getThumbPos(l))) ? o : "fade")
                              ? (h.fancybox.stop(i),
                                (a = { top: (a = h.fancybox.getTranslate(i)).top, left: a.left, scaleX: a.width / r.width, scaleY: a.height / r.height, width: r.width, height: r.height }),
                                (s = "auto" == (s = l.opts.zoomOpacity) ? 0.1 < Math.abs(l.width / l.height - r.width / r.height) : s) && (r.opacity = 0),
                                h.fancybox.setTranslate(i, a),
                                f(i),
                                h.fancybox.animate(i, r, e, n))
                              : o && e
                              ? h.fancybox.animate(l.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, e, n)
                              : !0 === t
                              ? setTimeout(n, e)
                              : n(),
                          !0))
                );
            },
            cleanUp: function (t) {
                var e,
                    n = this,
                    o = n.current.opts.$orig;
                n.current.$slide.trigger("onReset"),
                    n.$refs.container.empty().remove(),
                    n.trigger("afterClose", t),
                    n.current.opts.backFocus && (o = o && o.length && o.is(":visible") ? o : n.$trigger) && o.length && ((t = c.scrollX), (e = c.scrollY), o.trigger("focus"), h("html, body").scrollTop(e).scrollLeft(t)),
                    (n.current = null),
                    (o = h.fancybox.getInstance()) ? o.activate() : (h("body").removeClass("fancybox-active compensate-for-scrollbar"), h("#fancybox-style-noscroll").remove());
            },
            trigger: function (t, e) {
                var n,
                    o = Array.prototype.slice.call(arguments, 1),
                    i = this,
                    e = e && e.opts ? e : i.current;
                if ((e ? o.unshift(e) : (e = i), o.unshift(i), !1 === (n = h.isFunction(e.opts[t]) ? e.opts[t].apply(e, o) : n))) return n;
                ("afterClose" !== t && i.$refs ? i.$refs.container : s).trigger(t + ".fb", o);
            },
            updateControls: function () {
                var t = this,
                    e = t.current,
                    n = e.index,
                    o = t.$refs.container,
                    i = t.$refs.caption,
                    s = e.opts.caption;
                e.$slide.trigger("refresh"),
                    s && s.length ? (t.$caption = i).children().eq(0).html(s) : (t.$caption = null),
                    t.hasHiddenControls || t.isIdle || t.showControls(),
                    o.find("[data-fancybox-count]").html(t.group.length),
                    o.find("[data-fancybox-index]").html(n + 1),
                    o.find("[data-fancybox-prev]").prop("disabled", !e.opts.loop && n <= 0),
                    o.find("[data-fancybox-next]").prop("disabled", !e.opts.loop && n >= t.group.length - 1),
                    "image" === e.type
                        ? o
                              .find("[data-fancybox-zoom]")
                              .show()
                              .end()
                              .find("[data-fancybox-download]")
                              .attr("href", e.opts.image.src || e.src)
                              .show()
                        : e.opts.toolbar && o.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
                    h(a.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus");
            },
            hideControls: function (t) {
                var e = ["infobar", "toolbar", "nav"];
                (!t && this.current.opts.preventCaptionOverlap) || e.push("caption"),
                    this.$refs.container.removeClass(
                        e
                            .map(function (t) {
                                return "fancybox-show-" + t;
                            })
                            .join(" ")
                    ),
                    (this.hasHiddenControls = !0);
            },
            showControls: function () {
                var t = this,
                    e = (t.current || t).opts,
                    n = t.$refs.container;
                (t.hasHiddenControls = !1),
                    (t.idleSecondsCounter = 0),
                    n
                        .toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons))
                        .toggleClass("fancybox-show-infobar", !!(e.infobar && 1 < t.group.length))
                        .toggleClass("fancybox-show-caption", !!t.$caption)
                        .toggleClass("fancybox-show-nav", !!(e.arrows && 1 < t.group.length))
                        .toggleClass("fancybox-is-modal", !!e.modal);
            },
            toggleControls: function () {
                this.hasHiddenControls ? this.showControls() : this.hideControls();
            },
        }),
            (h.fancybox = {
                version: "3.5.7",
                defaults: t,
                getInstance: function (t) {
                    var e = h('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                        n = Array.prototype.slice.call(arguments, 1);
                    return e instanceof o && ("string" === h.type(t) ? e[t].apply(e, n) : "function" === h.type(t) && t.apply(e, n), e);
                },
                open: function (t, e, n) {
                    return new o(t, e, n);
                },
                close: function (t) {
                    var e = this.getInstance();
                    e && (e.close(), !0 === t) && this.close(t);
                },
                destroy: function () {
                    this.close(!0), s.add("body").off("click.fb-start", "**");
                },
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                use3d: ((t = a.createElement("div")), c.getComputedStyle && c.getComputedStyle(t) && c.getComputedStyle(t).getPropertyValue("transform") && !(a.documentMode && a.documentMode < 11)),
                getTranslate: function (t) {
                    var e;
                    return !(!t || !t.length) && { top: (e = t[0].getBoundingClientRect()).top || 0, left: e.left || 0, width: e.width, height: e.height, opacity: parseFloat(t.css("opacity")) };
                },
                setTranslate: function (t, e) {
                    var n = "",
                        o = {};
                    if (t && e)
                        return (
                            (void 0 === e.left && void 0 === e.top) ||
                                ((n = (void 0 === e.left ? t.position() : e).left + "px, " + (void 0 === e.top ? t.position() : e).top + "px"), (n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")")),
                            void 0 !== e.scaleX && void 0 !== e.scaleY ? (n += " scale(" + e.scaleX + ", " + e.scaleY + ")") : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"),
                            n.length && (o.transform = n),
                            void 0 !== e.opacity && (o.opacity = e.opacity),
                            void 0 !== e.width && (o.width = e.width),
                            void 0 !== e.height && (o.height = e.height),
                            t.css(o)
                        );
                },
                animate: function (e, n, o, i, s) {
                    var a,
                        r = this;
                    h.isFunction(o) && ((i = o), (o = null)),
                        r.stop(e),
                        (a = r.getTranslate(e)),
                        e.on(l, function (t) {
                            (!t || !t.originalEvent || (e.is(t.originalEvent.target) && "z-index" != t.originalEvent.propertyName)) &&
                                (r.stop(e),
                                h.isNumeric(o) && e.css("transition-duration", ""),
                                h.isPlainObject(n)
                                    ? void 0 !== n.scaleX && void 0 !== n.scaleY && r.setTranslate(e, { top: n.top, left: n.left, width: a.width * n.scaleX, height: a.height * n.scaleY, scaleX: 1, scaleY: 1 })
                                    : !0 !== s && e.removeClass(n),
                                h.isFunction(i)) &&
                                i(t);
                        }),
                        h.isNumeric(o) && e.css("transition-duration", o + "ms"),
                        h.isPlainObject(n)
                            ? (void 0 !== n.scaleX && void 0 !== n.scaleY && (delete n.width, delete n.height, e.parent().hasClass("fancybox-slide--image")) && e.parent().addClass("fancybox-is-scaling"), h.fancybox.setTranslate(e, n))
                            : e.addClass(n),
                        e.data(
                            "timer",
                            setTimeout(function () {
                                e.trigger(l);
                            }, o + 33)
                        );
                },
                stop: function (t, e) {
                    t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(l), t.off(l).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"));
                },
            }),
            (h.fn.fancybox = function (t) {
                var e;
                return (e = (t = t || {}).selector || !1) ? h("body").off("click.fb-start", e).on("click.fb-start", e, { options: t }, n) : this.off("click.fb-start").on("click.fb-start", { items: this, options: t }, n), this;
            }),
            s.on("click.fb-start", "[data-fancybox]", n),
            s.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
                h('[data-fancybox="' + h(this).attr("data-fancybox-trigger") + '"]')
                    .eq(h(this).attr("data-fancybox-index") || 0)
                    .trigger("click.fb-start", { $trigger: h(this) });
            }),
            (p = null),
            s.on("mousedown mouseup focus blur", ".fancybox-button", function (t) {
                switch (t.type) {
                    case "mousedown":
                        p = h(this);
                        break;
                    case "mouseup":
                        p = null;
                        break;
                    case "focusin":
                        h(".fancybox-button").removeClass("fancybox-focus"), h(this).is(p) || h(this).is("[disabled]") || h(this).addClass("fancybox-focus");
                        break;
                    case "focusout":
                        h(".fancybox-button").removeClass("fancybox-focus");
                }
            });
    }
    var p;
})(window, document, jQuery),
    (function (p) {
        "use strict";
        function h(n, t, e) {
            if (n)
                return (
                    "object" === p.type((e = e || "")) && (e = p.param(e, !0)),
                    p.each(t, function (t, e) {
                        n = n.replace("$" + t, e || "");
                    }),
                    e.length && (n += (0 < n.indexOf("?") ? "&" : "?") + e),
                    n
                );
        }
        var o = {
                youtube: {
                    matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                    params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 },
                    paramPlace: 8,
                    type: "iframe",
                    url: "https://www.youtube-nocookie.com/embed/$4",
                    thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
                },
                vimeo: { matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 }, paramPlace: 3, type: "iframe", url: "//player.vimeo.com/video/$2" },
                instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" },
                gmap_place: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                    type: "iframe",
                    url: function (t) {
                        return (
                            "//maps.google." +
                            t[2] +
                            "/?ll=" +
                            (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") +
                            "&output=" +
                            (t[12] && 0 < t[12].indexOf("layer=c") ? "svembed" : "embed")
                        );
                    },
                },
                gmap_search: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                    type: "iframe",
                    url: function (t) {
                        return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
                    },
                },
            },
            i =
                (p(document).on("objectNeedsType.fb", function (t, e, i) {
                    var s,
                        a,
                        r,
                        c,
                        l,
                        d,
                        u = i.src || "",
                        f = !1,
                        n = p.extend(!0, {}, o, i.opts.media);
                    p.each(n, function (t, e) {
                        if ((a = u.match(e.matcher))) {
                            if (((f = e.type), (d = t), (l = {}), e.paramPlace && a[e.paramPlace])) {
                                c = (c = "?" == (c = a[e.paramPlace])[0] ? c.substring(1) : c).split("&");
                                for (var n = 0; n < c.length; ++n) {
                                    var o = c[n].split("=", 2);
                                    2 == o.length && (l[o[0]] = decodeURIComponent(o[1].replace(/\+/g, " ")));
                                }
                            }
                            return (
                                (r = p.extend(!0, {}, e.params, i.opts[t], l)),
                                (u = "function" === p.type(e.url) ? e.url.call(this, a, r, i) : h(e.url, a, r)),
                                (s = "function" === p.type(e.thumb) ? e.thumb.call(this, a, r, i) : h(e.thumb, a)),
                                "youtube" === t
                                    ? (u = u.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
                                          return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10));
                                      }))
                                    : "vimeo" === t && (u = u.replace("&%23", "#")),
                                !1
                            );
                        }
                    }),
                        f
                            ? (i.opts.thumb || (i.opts.$thumb && i.opts.$thumb.length) || (i.opts.thumb = s),
                              "iframe" === f && (i.opts = p.extend(!0, i.opts, { iframe: { preload: !1, attr: { scrolling: "no" } } })),
                              p.extend(i, { type: f, src: u, origSrc: i.src, contentSource: d, contentType: "image" === f ? "image" : "gmap_place" == d || "gmap_search" == d ? "map" : "video" }))
                            : u && (i.type = i.opts.defaultType);
                }),
                {
                    youtube: { src: "https://www.youtube.com/iframe_api", class: "YT", loading: !1, loaded: !1 },
                    vimeo: { src: "https://player.vimeo.com/api/player.js", class: "Vimeo", loading: !1, loaded: !1 },
                    load: function (t) {
                        var e,
                            n = this;
                        this[t].loaded
                            ? setTimeout(function () {
                                  n.done(t);
                              })
                            : this[t].loading ||
                              ((this[t].loading = !0),
                              ((e = document.createElement("script")).type = "text/javascript"),
                              (e.src = this[t].src),
                              "youtube" === t
                                  ? (window.onYouTubeIframeAPIReady = function () {
                                        (n[t].loaded = !0), n.done(t);
                                    })
                                  : (e.onload = function () {
                                        (n[t].loaded = !0), n.done(t);
                                    }),
                              document.body.appendChild(e));
                    },
                    done: function (t) {
                        var e, n;
                        "youtube" === t && delete window.onYouTubeIframeAPIReady,
                            (e = p.fancybox.getInstance()) &&
                                ((n = e.current.$content.find("iframe")),
                                "youtube" === t && void 0 !== YT && YT
                                    ? new YT.Player(n.attr("id"), {
                                          events: {
                                              onStateChange: function (t) {
                                                  0 == t.data && e.next();
                                              },
                                          },
                                      })
                                    : "vimeo" === t &&
                                      void 0 !== Vimeo &&
                                      Vimeo &&
                                      new Vimeo.Player(n).on("ended", function () {
                                          e.next();
                                      }));
                    },
                });
        p(document).on({
            "afterShow.fb": function (t, e, n) {
                1 < e.group.length && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && i.load(n.contentSource);
            },
        });
    })(jQuery),
    (function (d, c, u) {
        "use strict";
        function f(t) {
            var e,
                n = [];
            for (e in (t = (t = t.originalEvent || t || d.e).touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t]))
                t[e].pageX ? n.push({ x: t[e].pageX, y: t[e].pageY }) : t[e].clientX && n.push({ x: t[e].clientX, y: t[e].clientY });
            return n;
        }
        function p(t, e, n) {
            return e && t ? ("x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))) : 0;
        }
        function l(t) {
            if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || u.isFunction(t.get(0).onclick) || t.data("selectable")) return 1;
            for (var e = 0, n = t[0].attributes, o = n.length; e < o; e++) if ("data-fancybox-" === n[e].nodeName.substr(0, 14)) return 1;
        }
        function h(t) {
            for (
                var e, n, o, i = !1;
                ((e = t.get(0)),
                (o = n = o = n = void 0),
                (n = d.getComputedStyle(e)["overflow-y"]),
                (o = d.getComputedStyle(e)["overflow-x"]),
                (n = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight),
                (o = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth),
                !(i = n || o)) &&
                (t = t.parent()).length &&
                !t.hasClass("fancybox-stage") &&
                !t.is("body");

            );
            return i;
        }
        function n(t) {
            var e = this;
            (e.instance = t), (e.$bg = t.$refs.bg), (e.$stage = t.$refs.stage), (e.$container = t.$refs.container), e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", u.proxy(e, "ontouchstart"));
        }
        var g =
                d.requestAnimationFrame ||
                d.webkitRequestAnimationFrame ||
                d.mozRequestAnimationFrame ||
                d.oRequestAnimationFrame ||
                function (t) {
                    return d.setTimeout(t, 1e3 / 60);
                },
            b =
                d.cancelAnimationFrame ||
                d.webkitCancelAnimationFrame ||
                d.mozCancelAnimationFrame ||
                d.oCancelAnimationFrame ||
                function (t) {
                    d.clearTimeout(t);
                };
        (n.prototype.destroy = function () {
            var t = this;
            t.$container.off(".fb.touch"), u(c).off(".fb.touch"), t.requestId && (b(t.requestId), (t.requestId = null)), t.tapped && (clearTimeout(t.tapped), (t.tapped = null));
        }),
            (n.prototype.ontouchstart = function (t) {
                var e = this,
                    n = u(t.target),
                    o = e.instance,
                    i = o.current,
                    s = i.$slide,
                    a = i.$content,
                    r = "touchstart" == t.type;
                r && e.$container.off("mousedown.fb.touch"),
                    (t.originalEvent && 2 == t.originalEvent.button) ||
                        !s.length ||
                        !n.length ||
                        l(n) ||
                        l(n.parent()) ||
                        (!n.is("img") && t.originalEvent.clientX > n[0].clientWidth + n.offset().left) ||
                        (!i || o.isAnimating || i.$slide.hasClass("fancybox-animated")
                            ? (t.stopPropagation(), t.preventDefault())
                            : ((e.realPoints = e.startPoints = f(t)),
                              e.startPoints.length &&
                                  (i.touch && t.stopPropagation(),
                                  (e.startEvent = t),
                                  (e.canTap = !0),
                                  (e.$target = n),
                                  (e.$content = a),
                                  (e.opts = i.opts.touch),
                                  (e.isPanning = !1),
                                  (e.isSwiping = !1),
                                  (e.isZooming = !1),
                                  (e.isScrolling = !1),
                                  (e.canPan = o.canPan()),
                                  (e.startTime = new Date().getTime()),
                                  (e.distanceX = e.distanceY = e.distance = 0),
                                  (e.canvasWidth = Math.round(s[0].clientWidth)),
                                  (e.canvasHeight = Math.round(s[0].clientHeight)),
                                  (e.contentLastPos = null),
                                  (e.contentStartPos = u.fancybox.getTranslate(e.$content) || { top: 0, left: 0 }),
                                  (e.sliderStartPos = u.fancybox.getTranslate(s)),
                                  (e.stagePos = u.fancybox.getTranslate(o.$refs.stage)),
                                  (e.sliderStartPos.top -= e.stagePos.top),
                                  (e.sliderStartPos.left -= e.stagePos.left),
                                  (e.contentStartPos.top -= e.stagePos.top),
                                  (e.contentStartPos.left -= e.stagePos.left),
                                  u(c)
                                      .off(".fb.touch")
                                      .on(r ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", u.proxy(e, "ontouchend"))
                                      .on(r ? "touchmove.fb.touch" : "mousemove.fb.touch", u.proxy(e, "ontouchmove")),
                                  u.fancybox.isMobile && c.addEventListener("scroll", e.onscroll, !0),
                                  ((e.opts || e.canPan) && (n.is(e.$stage) || e.$stage.find(n).length)) || (n.is(".fancybox-image") && t.preventDefault(), u.fancybox.isMobile && n.parents(".fancybox-caption").length)) &&
                                  ((e.isScrollable = h(n) || h(n.parent())),
                                  (u.fancybox.isMobile && e.isScrollable) || t.preventDefault(),
                                  (1 !== e.startPoints.length && !i.hasError) || (e.canPan ? (u.fancybox.stop(e.$content), (e.isPanning = !0)) : (e.isSwiping = !0), e.$container.addClass("fancybox-is-grabbing")),
                                  2 === e.startPoints.length) &&
                                  "image" === i.type &&
                                  (i.isLoaded || i.$ghost) &&
                                  ((e.canTap = !1),
                                  (e.isSwiping = !1),
                                  (e.isPanning = !1),
                                  (e.isZooming = !0),
                                  u.fancybox.stop(e.$content),
                                  (e.centerPointStartX = 0.5 * (e.startPoints[0].x + e.startPoints[1].x) - u(d).scrollLeft()),
                                  (e.centerPointStartY = 0.5 * (e.startPoints[0].y + e.startPoints[1].y) - u(d).scrollTop()),
                                  (e.percentageOfImageAtPinchPointX = (e.centerPointStartX - e.contentStartPos.left) / e.contentStartPos.width),
                                  (e.percentageOfImageAtPinchPointY = (e.centerPointStartY - e.contentStartPos.top) / e.contentStartPos.height),
                                  (e.startDistanceBetweenFingers = p(e.startPoints[0], e.startPoints[1])))));
            }),
            (n.prototype.onscroll = function (t) {
                (this.isScrolling = !0), c.removeEventListener("scroll", this.onscroll, !0);
            }),
            (n.prototype.ontouchmove = function (t) {
                var e = this;
                return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons
                    ? void e.ontouchend(t)
                    : e.isScrolling
                    ? void (e.canTap = !1)
                    : ((e.newPoints = f(t)),
                      void (
                          (e.opts || e.canPan) &&
                          e.newPoints.length &&
                          e.newPoints.length &&
                          ((e.isSwiping && !0 === e.isSwiping) || t.preventDefault(),
                          (e.distanceX = p(e.newPoints[0], e.startPoints[0], "x")),
                          (e.distanceY = p(e.newPoints[0], e.startPoints[0], "y")),
                          (e.distance = p(e.newPoints[0], e.startPoints[0])),
                          0 < e.distance) &&
                          (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom())
                      ));
            }),
            (n.prototype.onSwipe = function (t) {
                var i = this,
                    s = i.instance,
                    e = i.isSwiping,
                    n = i.sliderStartPos.left || 0;
                !0 !== e
                    ? ("x" == e &&
                          (0 < i.distanceX && (i.instance.group.length < 2 || (0 === i.instance.current.index && !i.instance.current.opts.loop))
                              ? (n += Math.pow(i.distanceX, 0.8))
                              : i.distanceX < 0 && (i.instance.group.length < 2 || (i.instance.current.index === i.instance.group.length - 1 && !i.instance.current.opts.loop))
                              ? (n -= Math.pow(-i.distanceX, 0.8))
                              : (n += i.distanceX)),
                      (i.sliderLastPos = { top: "x" == e ? 0 : i.sliderStartPos.top + i.distanceY, left: n }),
                      i.requestId && (b(i.requestId), (i.requestId = null)),
                      (i.requestId = g(function () {
                          i.sliderLastPos &&
                              (u.each(i.instance.slides, function (t, e) {
                                  var n = e.pos - i.instance.currPos;
                                  u.fancybox.setTranslate(e.$slide, { top: i.sliderLastPos.top, left: i.sliderLastPos.left + n * i.canvasWidth + n * e.opts.gutter });
                              }),
                              i.$container.addClass("fancybox-is-sliding"));
                      })))
                    : 10 < Math.abs(i.distance) &&
                      ((i.canTap = !1),
                      s.group.length < 2 && i.opts.vertical
                          ? (i.isSwiping = "y")
                          : s.isDragging || !1 === i.opts.vertical || ("auto" === i.opts.vertical && 800 < u(d).width())
                          ? (i.isSwiping = "x")
                          : ((e = Math.abs((180 * Math.atan2(i.distanceY, i.distanceX)) / Math.PI)), (i.isSwiping = 45 < e && e < 135 ? "y" : "x")),
                      "y" === i.isSwiping && u.fancybox.isMobile && i.isScrollable
                          ? (i.isScrolling = !0)
                          : ((s.isDragging = i.isSwiping),
                            (i.startPoints = i.newPoints),
                            u.each(s.slides, function (t, e) {
                                var n, o;
                                u.fancybox.stop(e.$slide),
                                    (n = u.fancybox.getTranslate(e.$slide)),
                                    (o = u.fancybox.getTranslate(s.$refs.stage)),
                                    e.$slide
                                        .css({ transform: "", opacity: "", "transition-duration": "" })
                                        .removeClass("fancybox-animated")
                                        .removeClass(function (t, e) {
                                            return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                                        }),
                                    e.pos === s.current.pos && ((i.sliderStartPos.top = n.top - o.top), (i.sliderStartPos.left = n.left - o.left)),
                                    u.fancybox.setTranslate(e.$slide, { top: n.top - o.top, left: n.left - o.left });
                            }),
                            s.SlideShow && s.SlideShow.isActive && s.SlideShow.stop()));
            }),
            (n.prototype.onPan = function () {
                var t = this;
                p(t.newPoints[0], t.realPoints[0]) < (u.fancybox.isMobile ? 10 : 5)
                    ? (t.startPoints = t.newPoints)
                    : ((t.canTap = !1),
                      (t.contentLastPos = t.limitMovement()),
                      t.requestId && b(t.requestId),
                      (t.requestId = g(function () {
                          u.fancybox.setTranslate(t.$content, t.contentLastPos);
                      })));
            }),
            (n.prototype.limitMovement = function () {
                var t = this,
                    e = t.canvasWidth,
                    n = t.canvasHeight,
                    o = t.distanceX,
                    i = t.distanceY,
                    t = t.contentStartPos,
                    s = t.left,
                    a = t.top,
                    r = t.width,
                    t = t.height,
                    c = e < r ? s + o : s,
                    l = a + i,
                    d = Math.max(0, 0.5 * e - 0.5 * r),
                    u = Math.max(0, 0.5 * n - 0.5 * t),
                    e = Math.min(e - r, 0.5 * e - 0.5 * r),
                    r = Math.min(n - t, 0.5 * n - 0.5 * t);
                return (
                    0 < o && d < c && (c = d - 1 + Math.pow(-d + s + o, 0.8) || 0),
                    o < 0 && c < e && (c = e + 1 - Math.pow(e - s - o, 0.8) || 0),
                    0 < i && u < l && (l = u - 1 + Math.pow(-u + a + i, 0.8) || 0),
                    { top: (l = i < 0 && l < r ? r + 1 - Math.pow(r - a - i, 0.8) || 0 : l), left: c }
                );
            }),
            (n.prototype.limitPosition = function (t, e, n, o) {
                var i = this.canvasWidth,
                    s = this.canvasHeight;
                return (t = i < n ? ((t = 0 < t ? 0 : t) < i - n ? i - n : t) : Math.max(0, i / 2 - n / 2)), { top: (e = s < o ? ((e = 0 < e ? 0 : e) < s - o ? s - o : e) : Math.max(0, s / 2 - o / 2)), left: t };
            }),
            (n.prototype.onZoom = function () {
                var t = this,
                    e = t.contentStartPos,
                    n = e.width,
                    o = e.height,
                    i = e.left,
                    e = e.top,
                    s = p(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers,
                    a = Math.floor(n * s),
                    r = Math.floor(o * s),
                    n = (n - a) * t.percentageOfImageAtPinchPointX,
                    o = (o - r) * t.percentageOfImageAtPinchPointY,
                    c = (t.newPoints[0].x + t.newPoints[1].x) / 2 - u(d).scrollLeft(),
                    l = (t.newPoints[0].y + t.newPoints[1].y) / 2 - u(d).scrollTop(),
                    c = c - t.centerPointStartX,
                    e = { top: e + (o + (l - t.centerPointStartY)), left: i + (n + c), scaleX: s, scaleY: s };
                (t.canTap = !1),
                    (t.newWidth = a),
                    (t.newHeight = r),
                    (t.contentLastPos = e),
                    t.requestId && b(t.requestId),
                    (t.requestId = g(function () {
                        u.fancybox.setTranslate(t.$content, t.contentLastPos);
                    }));
            }),
            (n.prototype.ontouchend = function (t) {
                var e = this,
                    n = e.isSwiping,
                    o = e.isPanning,
                    i = e.isZooming,
                    s = e.isScrolling;
                if (
                    ((e.endPoints = f(t)),
                    (e.dMs = Math.max(new Date().getTime() - e.startTime, 1)),
                    e.$container.removeClass("fancybox-is-grabbing"),
                    u(c).off(".fb.touch"),
                    c.removeEventListener("scroll", e.onscroll, !0),
                    e.requestId && (b(e.requestId), (e.requestId = null)),
                    (e.isSwiping = !1),
                    (e.isPanning = !1),
                    (e.isZooming = !1),
                    (e.isScrolling = !1),
                    (e.instance.isDragging = !1),
                    e.canTap)
                )
                    return e.onTap(t);
                (e.speed = 100), (e.velocityX = (e.distanceX / e.dMs) * 0.5), (e.velocityY = (e.distanceY / e.dMs) * 0.5), o ? e.endPanning() : i ? e.endZooming() : e.endSwiping(n, s);
            }),
            (n.prototype.endSwiping = function (t, e) {
                var n = this,
                    o = !1,
                    i = n.instance.group.length,
                    s = Math.abs(n.distanceX),
                    i = "x" == t && 1 < i && ((130 < n.dMs && 10 < s) || 50 < s);
                (n.sliderLastPos = null),
                    "y" == t && !e && 50 < Math.abs(n.distanceY)
                        ? (u.fancybox.animate(n.instance.current.$slide, { top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY, opacity: 0 }, 200), (o = n.instance.close(!0, 250)))
                        : i && 0 < n.distanceX
                        ? (o = n.instance.previous(300))
                        : i && n.distanceX < 0 && (o = n.instance.next(300)),
                    !1 !== o || ("x" != t && "y" != t) || n.instance.centerSlide(200),
                    n.$container.removeClass("fancybox-is-sliding");
            }),
            (n.prototype.endPanning = function () {
                var t,
                    e,
                    n = this;
                n.contentLastPos &&
                    ((t = !1 === n.opts.momentum || 350 < n.dMs ? ((e = n.contentLastPos.left), n.contentLastPos.top) : ((e = n.contentLastPos.left + 500 * n.velocityX), n.contentLastPos.top + 500 * n.velocityY)),
                    ((e = n.limitPosition(e, t, n.contentStartPos.width, n.contentStartPos.height)).width = n.contentStartPos.width),
                    (e.height = n.contentStartPos.height),
                    u.fancybox.animate(n.$content, e, 366));
            }),
            (n.prototype.endZooming = function () {
                var t,
                    e,
                    n = this,
                    o = n.instance.current,
                    i = n.newWidth,
                    s = n.newHeight;
                n.contentLastPos &&
                    ((t = n.contentLastPos.left),
                    (e = n.contentLastPos.top),
                    u.fancybox.setTranslate(n.$content, { top: e, left: t, width: i, height: s, scaleX: 1, scaleY: 1 }),
                    i < n.canvasWidth && s < n.canvasHeight
                        ? n.instance.scaleToFit(150)
                        : i > o.width || s > o.height
                        ? n.instance.scaleToActual(n.centerPointStartX, n.centerPointStartY, 150)
                        : ((o = n.limitPosition(t, e, i, s)), u.fancybox.animate(n.$content, o, 150)));
            }),
            (n.prototype.onTap = function (e) {
                function t(t) {
                    if (((t = a.opts[t]), (t = u.isFunction(t) ? t.apply(s, [a, e]) : t)))
                        switch (t) {
                            case "close":
                                s.close(o.startEvent);
                                break;
                            case "toggleControls":
                                s.toggleControls();
                                break;
                            case "next":
                                s.next();
                                break;
                            case "nextOrClose":
                                1 < s.group.length ? s.next() : s.close(o.startEvent);
                                break;
                            case "zoom":
                                "image" == a.type && (a.isLoaded || a.$ghost) && (s.canPan() ? s.scaleToFit() : s.isScaledDown() ? s.scaleToActual(c, l) : s.group.length < 2 && s.close(o.startEvent));
                        }
                }
                var n,
                    o = this,
                    i = u(e.target),
                    s = o.instance,
                    a = s.current,
                    r = (e && f(e)) || o.startPoints,
                    c = r[0] ? r[0].x - u(d).scrollLeft() - o.stagePos.left : 0,
                    l = r[0] ? r[0].y - u(d).scrollTop() - o.stagePos.top : 0;
                if ((!e.originalEvent || 2 != e.originalEvent.button) && (i.is("img") || !(c > i[0].clientWidth + i.offset().left))) {
                    if (i.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) n = "Outside";
                    else if (i.is(".fancybox-slide")) n = "Slide";
                    else {
                        if (!s.current.$content || !s.current.$content.find(i).addBack().filter(i).length) return;
                        n = "Content";
                    }
                    if (o.tapped) {
                        if ((clearTimeout(o.tapped), (o.tapped = null), 50 < Math.abs(c - o.tapX) || 50 < Math.abs(l - o.tapY))) return this;
                        t("dblclick" + n);
                    } else
                        (o.tapX = c),
                            (o.tapY = l),
                            a.opts["dblclick" + n] && a.opts["dblclick" + n] !== a.opts["click" + n]
                                ? (o.tapped = setTimeout(function () {
                                      (o.tapped = null), s.isAnimating || t("click" + n);
                                  }, 500))
                                : t("click" + n);
                    return this;
                }
            }),
            u(c)
                .on("onActivate.fb", function (t, e) {
                    e && !e.Guestures && (e.Guestures = new n(e));
                })
                .on("beforeClose.fb", function (t, e) {
                    e && e.Guestures && e.Guestures.destroy();
                });
    })(window, document, jQuery),
    (function (s, a) {
        "use strict";
        a.extend(!0, a.fancybox.defaults, {
            btnTpl: {
                slideShow:
                    '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
            },
            slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
        });
        function n(t) {
            (this.instance = t), this.init();
        }
        a.extend(n.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            init: function () {
                var t = this,
                    e = t.instance,
                    n = e.group[e.currIndex].opts.slideShow;
                (t.$button = e.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                    t.toggle();
                })),
                    e.group.length < 2 || !n ? t.$button.hide() : n.progress && (t.$progress = a('<div class="fancybox-progress"></div>').appendTo(e.$refs.inner));
            },
            set: function (t) {
                var e = this,
                    n = e.instance,
                    o = n.current;
                o && (!0 === t || o.opts.loop || n.currIndex < n.group.length - 1)
                    ? e.isActive &&
                      "video" !== o.contentType &&
                      (e.$progress && a.fancybox.animate(e.$progress.show(), { scaleX: 1 }, o.opts.slideShow.speed),
                      (e.timer = setTimeout(function () {
                          n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0);
                      }, o.opts.slideShow.speed)))
                    : (e.stop(), (n.idleSecondsCounter = 0), n.showControls());
            },
            clear: function () {
                clearTimeout(this.timer), (this.timer = null), this.$progress && this.$progress.removeAttr("style").hide();
            },
            start: function () {
                var t = this,
                    e = t.instance.current;
                e &&
                    (t.$button
                        .attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP)
                        .removeClass("fancybox-button--play")
                        .addClass("fancybox-button--pause"),
                    (t.isActive = !0),
                    e.isComplete && t.set(!0),
                    t.instance.trigger("onSlideShowChange", !0));
            },
            stop: function () {
                var t = this,
                    e = t.instance.current;
                t.clear(),
                    t.$button
                        .attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START)
                        .removeClass("fancybox-button--pause")
                        .addClass("fancybox-button--play"),
                    (t.isActive = !1),
                    t.instance.trigger("onSlideShowChange", !1),
                    t.$progress && t.$progress.removeAttr("style").hide();
            },
            toggle: function () {
                this.isActive ? this.stop() : this.start();
            },
        }),
            a(s).on({
                "onInit.fb": function (t, e) {
                    e && !e.SlideShow && (e.SlideShow = new n(e));
                },
                "beforeShow.fb": function (t, e, n, o) {
                    e = e && e.SlideShow;
                    o ? e && n.opts.slideShow.autoStart && e.start() : e && e.isActive && e.clear();
                },
                "afterShow.fb": function (t, e, n) {
                    e = e && e.SlideShow;
                    e && e.isActive && e.set();
                },
                "afterKeydown.fb": function (t, e, n, o, i) {
                    e = e && e.SlideShow;
                    !e || !n.opts.slideShow || (80 !== i && 32 !== i) || a(s.activeElement).is("button,a,input") || (o.preventDefault(), e.toggle());
                },
                "beforeClose.fb onDeactivate.fb": function (t, e) {
                    e = e && e.SlideShow;
                    e && e.stop();
                },
            }),
            a(s).on("visibilitychange", function () {
                var t = a.fancybox.getInstance(),
                    t = t && t.SlideShow;
                t && t.isActive && (s.hidden ? t.clear() : t.set());
            });
    })(document, jQuery),
    (function (s, n) {
        "use strict";
        var o,
            i = (function () {
                for (
                    var t = [
                            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                            ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                            ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                            ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"],
                        ],
                        e = {},
                        n = 0;
                    n < t.length;
                    n++
                ) {
                    var o = t[n];
                    if (o && o[1] in s) {
                        for (var i = 0; i < o.length; i++) e[t[0][i]] = o[i];
                        return e;
                    }
                }
                return !1;
            })();
        i &&
            ((o = {
                request: function (t) {
                    (t = t || s.documentElement)[i.requestFullscreen](t.ALLOW_KEYBOARD_INPUT);
                },
                exit: function () {
                    s[i.exitFullscreen]();
                },
                toggle: function (t) {
                    (t = t || s.documentElement), this.isFullscreen() ? this.exit() : this.request(t);
                },
                isFullscreen: function () {
                    return Boolean(s[i.fullscreenElement]);
                },
                enabled: function () {
                    return Boolean(s[i.fullscreenEnabled]);
                },
            }),
            n.extend(!0, n.fancybox.defaults, {
                btnTpl: {
                    fullScreen:
                        '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
                },
                fullScreen: { autoStart: !1 },
            }),
            n(s).on(i.fullscreenchange, function () {
                var t = o.isFullscreen(),
                    e = n.fancybox.getInstance();
                e &&
                    (e.current && "image" === e.current.type && e.isAnimating && ((e.isAnimating = !1), e.update(!0, !0, 0), e.isComplete || e.complete()),
                    e.trigger("onFullscreenChange", t),
                    e.$refs.container.toggleClass("fancybox-is-fullscreen", t),
                    e.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t));
            })),
            n(s).on({
                "onInit.fb": function (t, e) {
                    i
                        ? e && e.group[e.currIndex].opts.fullScreen
                            ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
                                  t.stopPropagation(), t.preventDefault(), o.toggle();
                              }),
                              e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(),
                              (e.FullScreen = o))
                            : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
                        : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
                },
                "afterKeydown.fb": function (t, e, n, o, i) {
                    e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle());
                },
                "beforeClose.fb": function (t, e) {
                    e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit();
                },
            });
    })(document, jQuery),
    (function (t, s) {
        "use strict";
        function n(t) {
            this.init(t);
        }
        var a = "fancybox-thumbs";
        s.fancybox.defaults = s.extend(
            !0,
            {
                btnTpl: {
                    thumbs:
                        '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
                },
                thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" },
            },
            s.fancybox.defaults
        );
        s.extend(n.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            isActive: !1,
            init: function (t) {
                var e = this,
                    n = t.group,
                    o = 0;
                (e.instance = t), (e.opts = n[t.currIndex].opts.thumbs), ((t.Thumbs = e).$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"));
                for (var i = 0, s = n.length; i < s && (n[i].thumb && o++, !(1 < o)); i++);
                1 < o && e.opts
                    ? (e.$button.removeAttr("style").on("click", function () {
                          e.toggle();
                      }),
                      (e.isActive = !0))
                    : e.$button.hide();
            },
            create: function () {
                var n,
                    t = this,
                    e = t.instance,
                    o = t.opts.parentEl,
                    i = [];
                t.$grid ||
                    ((t.$grid = s('<div class="' + a + " " + a + "-" + t.opts.axis + '"></div>').appendTo(e.$refs.container.find(o).addBack().filter(o))),
                    t.$grid.on("click", "a", function () {
                        e.jumpTo(s(this).attr("data-index"));
                    })),
                    t.$list || (t.$list = s('<div class="' + a + '__list">').appendTo(t.$grid)),
                    s.each(e.group, function (t, e) {
                        (n = e.thumb) || "image" !== e.type || (n = e.src),
                            i.push('<a href="javascript:;" tabIndex="0" data-index="' + t + '"' + (n && n.length ? ' style="background-image:url(' + n + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
                    }),
                    (t.$list[0].innerHTML = i.join("")),
                    "x" === t.opts.axis && t.$list.width(parseInt(t.$grid.css("padding-right"), 10) + e.group.length * t.$list.children().eq(0).outerWidth(!0));
            },
            focus: function (t) {
                var e,
                    n,
                    o = this,
                    i = o.$list,
                    s = o.$grid;
                o.instance.current &&
                    ((n = (e = i
                        .children()
                        .removeClass("fancybox-thumbs-active")
                        .filter('[data-index="' + o.instance.current.index + '"]')
                        .addClass("fancybox-thumbs-active")).position()),
                    "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight())
                        ? i.stop().animate({ scrollTop: i.scrollTop() + n.top }, t)
                        : "x" === o.opts.axis && (n.left < s.scrollLeft() || n.left > s.scrollLeft() + (s.width() - e.outerWidth())) && i.parent().stop().animate({ scrollLeft: n.left }, t));
            },
            update: function () {
                var t = this;
                t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible),
                    t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"),
                    t.instance.update();
            },
            hide: function () {
                (this.isVisible = !1), this.update();
            },
            show: function () {
                (this.isVisible = !0), this.update();
            },
            toggle: function () {
                (this.isVisible = !this.isVisible), this.update();
            },
        }),
            s(t).on({
                "onInit.fb": function (t, e) {
                    e && !e.Thumbs && (e = new n(e)).isActive && !0 === e.opts.autoStart && e.show();
                },
                "beforeShow.fb": function (t, e, n, o) {
                    e = e && e.Thumbs;
                    e && e.isVisible && e.focus(o ? 0 : 250);
                },
                "afterKeydown.fb": function (t, e, n, o, i) {
                    e = e && e.Thumbs;
                    e && e.isActive && 71 === i && (o.preventDefault(), e.toggle());
                },
                "beforeClose.fb": function (t, e) {
                    e = e && e.Thumbs;
                    e && e.isVisible && !1 !== e.opts.hideOnClose && e.$grid.hide();
                },
            });
    })(document, jQuery),
    (function (t, i) {
        "use strict";
        i.extend(!0, i.fancybox.defaults, {
            btnTpl: {
                share:
                    '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
            },
            share: {
                url: function (t, e) {
                    return (!t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src)) || window.location;
                },
                tpl:
                    '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
            },
        }),
            i(t).on("click", "[data-fancybox-share]", function () {
                var t,
                    e,
                    n = i.fancybox.getInstance(),
                    o = n.current || null;
                o &&
                    ("function" === i.type(o.opts.share.url) && (t = o.opts.share.url.apply(o, [n, o])),
                    (o = o.opts.share.tpl
                        .replace(/\{\{media\}\}/g, "image" === o.type ? encodeURIComponent(o.src) : "")
                        .replace(/\{\{url\}\}/g, encodeURIComponent(t))
                        .replace(
                            /\{\{url_raw\}\}/g,
                            ((e = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" }),
                            String(t).replace(/[&<>"'`=\/]/g, function (t) {
                                return e[t];
                            }))
                        )
                        .replace(/\{\{descr\}\}/g, n.$caption ? encodeURIComponent(n.$caption.text()) : "")),
                    i.fancybox.open({
                        src: n.translate(n, o),
                        type: "html",
                        opts: {
                            touch: !1,
                            animationEffect: !1,
                            afterLoad: function (t, e) {
                                n.$refs.container.one("beforeClose.fb", function () {
                                    t.close(null, 0);
                                }),
                                    e.$content.find(".fancybox-share__button").click(function () {
                                        return window.open(this.href, "Share", "width=550, height=450"), !1;
                                    });
                            },
                            mobile: { autoFocus: !1 },
                        },
                    }));
            });
    })(document, jQuery),
    (function (s, a, o) {
        "use strict";
        function i() {
            var t = s.location.hash.substr(1),
                e = t.split("-"),
                n = (1 < e.length && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10)) || 1;
            return { hash: t, index: n < 1 ? 1 : n, gallery: e.join("-") };
        }
        function e(t) {
            "" !== t.gallery &&
                o("[data-fancybox='" + o.escapeSelector(t.gallery) + "']")
                    .eq(t.index - 1)
                    .focus()
                    .trigger("click.fb-start");
        }
        function r(t) {
            return !!t && "" !== (t = (t = (t.current || t).opts).hash || (t.$orig ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger") : "")) && t;
        }
        o.escapeSelector ||
            (o.escapeSelector = function (t) {
                return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
                    return e ? ("\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ") : "\\" + t;
                });
            }),
            o(function () {
                !1 !== o.fancybox.defaults.hash &&
                    (o(a).on({
                        "onInit.fb": function (t, e) {
                            var n, o;
                            !1 !== e.group[e.currIndex].opts.hash && ((n = i()), (o = r(e))) && n.gallery && o == n.gallery && (e.currIndex = n.index - 1);
                        },
                        "beforeShow.fb": function (t, e, n, o) {
                            var i;
                            n &&
                                !1 !== n.opts.hash &&
                                (i = r(e)) &&
                                ((e.currentHash = i + (1 < e.group.length ? "-" + (n.index + 1) : "")), s.location.hash !== "#" + e.currentHash) &&
                                (o && !e.origHash && (e.origHash = s.location.hash),
                                e.hashTimer && clearTimeout(e.hashTimer),
                                (e.hashTimer = setTimeout(function () {
                                    "replaceState" in s.history
                                        ? (s.history[o ? "pushState" : "replaceState"]({}, a.title, s.location.pathname + s.location.search + "#" + e.currentHash), o && (e.hasCreatedHistory = !0))
                                        : (s.location.hash = e.currentHash),
                                        (e.hashTimer = null);
                                }, 300)));
                        },
                        "beforeClose.fb": function (t, e, n) {
                            n &&
                                !1 !== n.opts.hash &&
                                (clearTimeout(e.hashTimer),
                                e.currentHash && e.hasCreatedHistory
                                    ? s.history.back()
                                    : e.currentHash && ("replaceState" in s.history ? s.history.replaceState({}, a.title, s.location.pathname + s.location.search + (e.origHash || "")) : (s.location.hash = e.origHash)),
                                (e.currentHash = null));
                        },
                    }),
                    o(s).on("hashchange.fb", function () {
                        var t = i(),
                            n = null;
                        o.each(o(".fancybox-container").get().reverse(), function (t, e) {
                            e = o(e).data("FancyBox");
                            if (e && e.currentHash) return (n = e), !1;
                        }),
                            n ? n.currentHash === t.gallery + "-" + t.index || (1 === t.index && n.currentHash == t.gallery) || ((n.currentHash = null), n.close()) : "" !== t.gallery && e(t);
                    }),
                    setTimeout(function () {
                        o.fancybox.getInstance() || e(i());
                    }, 50));
            });
    })(window, document, jQuery),
    (function (t, e) {
        "use strict";
        var i = new Date().getTime();
        e(t).on({
            "onInit.fb": function (t, o, e) {
                o.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
                    var e = o.current,
                        n = new Date().getTime();
                    o.group.length < 2 ||
                        !1 === e.opts.wheel ||
                        ("auto" === e.opts.wheel && "image" !== e.type) ||
                        (t.preventDefault(), t.stopPropagation(), e.$slide.hasClass("fancybox-animated")) ||
                        ((t = t.originalEvent || t), n - i < 250) ||
                        ((i = n), o[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]());
                });
            },
        });
    })(document, jQuery);
!(function (e, i) {
    "function" == typeof define && define.amd
        ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
              return i(e, t);
          })
        : "object" == typeof module && module.exports
        ? (module.exports = i(e, require("jquery")))
        : (e.jQueryBridget = i(e, e.jQuery));
})(window, function (t, e) {
    "use strict";
    function i(u, h, d) {
        (d = d || e || t.jQuery) &&
            (h.prototype.option ||
                (h.prototype.option = function (t) {
                    d.isPlainObject(t) && (this.options = d.extend(!0, this.options, t));
                }),
            (d.fn[u] = function (t) {
                var e, o, n, s, r, a;
                return "string" == typeof t
                    ? ((e = l.call(arguments, 1)),
                      (n = e),
                      (r = "$()." + u + '("' + (o = t) + '")'),
                      (e = this).each(function (t, e) {
                          var i,
                              e = d.data(e, u);
                          e ? ((i = e[o]) && "_" != o.charAt(0) ? ((i = i.apply(e, n)), (s = void 0 === s ? i : s)) : c(r + " is not a valid method")) : c(u + " not initialized. Cannot call methods, i.e. " + r);
                      }),
                      void 0 !== s ? s : e)
                    : ((a = t),
                      this.each(function (t, e) {
                          var i = d.data(e, u);
                          i ? (i.option(a), i._init()) : ((i = new h(e, a)), d.data(e, u, i));
                      }),
                      this);
            }),
            o(d));
    }
    function o(t) {
        t && !t.bridget && (t.bridget = i);
    }
    var l = Array.prototype.slice,
        n = t.console,
        c =
            void 0 === n
                ? function () {}
                : function (t) {
                      n.error(t);
                  };
    return o(e || t.jQuery), i;
}),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.EvEmitter = e());
    })("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return (
            (e.on = function (t, e) {
                var i;
                if (t && e) return -1 == (i = (i = this._events = this._events || {})[t] = i[t] || []).indexOf(e) && i.push(e), this;
            }),
            (e.once = function (t, e) {
                var i;
                if (t && e) return this.on(t, e), (((i = this._onceEvents = this._onceEvents || {})[t] = i[t] || {})[e] = !0), this;
            }),
            (e.off = function (t, e) {
                t = this._events && this._events[t];
                if (t && t.length) return -1 != (e = t.indexOf(e)) && t.splice(e, 1), this;
            }),
            (e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    (i = i.slice(0)), (e = e || []);
                    for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                        var s = i[n];
                        o && o[s] && (this.off(t, s), delete o[s]), s.apply(this, e);
                    }
                    return this;
                }
            }),
            (e.allOff = function () {
                delete this._events, delete this._onceEvents;
            }),
            t
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.getSize = e());
    })(window, function () {
        "use strict";
        function y(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e;
        }
        function g(t) {
            t = getComputedStyle(t);
            return t || e("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), t;
        }
        function v(t) {
            if (
                (x ||
                    ((x = !0),
                    ((d = document.createElement("div")).style.width = "200px"),
                    (d.style.padding = "1px 2px 3px 4px"),
                    (d.style.borderStyle = "solid"),
                    (d.style.borderWidth = "1px 2px 3px 4px"),
                    (d.style.boxSizing = "border-box"),
                    (h = document.body || document.documentElement).appendChild(d),
                    (s = g(d)),
                    (_ = 200 == Math.round(y(s.width))),
                    (v.isBoxSizeOuter = _),
                    h.removeChild(d)),
                (t = "string" == typeof t ? document.querySelector(t) : t) && "object" == typeof t && t.nodeType)
            ) {
                var e = g(t);
                if ("none" == e.display) {
                    for (var i = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, o = 0; o < I; o++) i[z[o]] = 0;
                    return i;
                }
                var n = {};
                (n.width = t.offsetWidth), (n.height = t.offsetHeight);
                for (var s = (n.isBorderBox = "border-box" == e.boxSizing), r = 0; r < I; r++) {
                    var a = z[r],
                        u = e[a],
                        u = parseFloat(u);
                    n[a] = isNaN(u) ? 0 : u;
                }
                var h = n.paddingLeft + n.paddingRight,
                    d = n.paddingTop + n.paddingBottom,
                    t = n.marginLeft + n.marginRight,
                    l = n.marginTop + n.marginBottom,
                    c = n.borderLeftWidth + n.borderRightWidth,
                    m = n.borderTopWidth + n.borderBottomWidth,
                    f = s && _,
                    p = y(e.width),
                    p = (!1 !== p && (n.width = p + (f ? 0 : h + c)), y(e.height));
                return !1 !== p && (n.height = p + (f ? 0 : d + m)), (n.innerWidth = n.width - (h + c)), (n.innerHeight = n.height - (d + m)), (n.outerWidth = n.width + t), (n.outerHeight = n.height + l), n;
            }
            var d, h, s;
        }
        var _,
            e =
                "undefined" == typeof console
                    ? function () {}
                    : function (t) {
                          console.error(t);
                      },
            z = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            I = z.length,
            x = !1;
        return v;
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.matchesSelector = e());
    })(window, function () {
        "use strict";
        var i = (function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var o = e[i] + "MatchesSelector";
                if (t[o]) return o;
            }
        })();
        return function (t, e) {
            return t[i](e);
        };
    }),
    (function (e, i) {
        "function" == typeof define && define.amd
            ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (t) {
                  return i(e, t);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = i(e, require("desandro-matches-selector")))
            : (e.fizzyUIUtils = i(e, e.matchesSelector));
    })(window, function (i, s) {
        var u = {
                extend: function (t, e) {
                    for (var i in e) t[i] = e[i];
                    return t;
                },
                modulo: function (t, e) {
                    return ((t % e) + e) % e;
                },
            },
            e = Array.prototype.slice,
            h =
                ((u.makeArray = function (t) {
                    return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t];
                }),
                (u.removeFrom = function (t, e) {
                    e = t.indexOf(e);
                    -1 != e && t.splice(e, 1);
                }),
                (u.getParent = function (t, e) {
                    for (; t.parentNode && t != document.body; ) if (((t = t.parentNode), s(t, e))) return t;
                }),
                (u.getQueryElement = function (t) {
                    return "string" == typeof t ? document.querySelector(t) : t;
                }),
                (u.handleEvent = function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t);
                }),
                (u.filterFindElements = function (t, o) {
                    t = u.makeArray(t);
                    var n = [];
                    return (
                        t.forEach(function (t) {
                            if (t instanceof HTMLElement)
                                if (o) {
                                    s(t, o) && n.push(t);
                                    for (var e = t.querySelectorAll(o), i = 0; i < e.length; i++) n.push(e[i]);
                                } else n.push(t);
                        }),
                        n
                    );
                }),
                (u.debounceMethod = function (t, e, o) {
                    o = o || 100;
                    var n = t.prototype[e],
                        s = e + "Timeout";
                    t.prototype[e] = function () {
                        var t = this[s],
                            e = (clearTimeout(t), arguments),
                            i = this;
                        this[s] = setTimeout(function () {
                            n.apply(i, e), delete i[s];
                        }, o);
                    };
                }),
                (u.docReady = function (t) {
                    var e = document.readyState;
                    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
                }),
                (u.toDashed = function (t) {
                    return t
                        .replace(/(.)([A-Z])/g, function (t, e, i) {
                            return e + "-" + i;
                        })
                        .toLowerCase();
                }),
                i.console);
        return (
            (u.htmlInit = function (r, a) {
                u.docReady(function () {
                    var t = u.toDashed(a),
                        o = "data-" + t,
                        e = document.querySelectorAll("[" + o + "]"),
                        t = document.querySelectorAll(".js-" + t),
                        e = u.makeArray(e).concat(u.makeArray(t)),
                        n = o + "-options",
                        s = i.jQuery;
                    e.forEach(function (e) {
                        var t,
                            i = e.getAttribute(o) || e.getAttribute(n);
                        try {
                            t = i && JSON.parse(i);
                        } catch (t) {
                            return void (h && h.error("Error parsing " + o + " on " + e.className + ": " + t));
                        }
                        i = new r(e, t);
                        s && s.data(e, a, i);
                    });
                });
            }),
            u
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("ev-emitter"), require("get-size")))
            : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
    })(window, function (t, e) {
        "use strict";
        function i(t, e) {
            t && ((this.element = t), (this.layout = e), (this.position = { x: 0, y: 0 }), this._create());
        }
        var o = document.documentElement.style,
            n = "string" == typeof o.transition ? "transition" : "WebkitTransition",
            o = "string" == typeof o.transform ? "transform" : "WebkitTransform",
            s = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[n],
            r = { transform: o, transition: n, transitionDuration: n + "Duration", transitionProperty: n + "Property", transitionDelay: n + "Delay" },
            t = (i.prototype = Object.create(t.prototype)),
            a =
                ((t.constructor = i),
                (t._create = function () {
                    (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
                }),
                (t.handleEvent = function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t);
                }),
                (t.getSize = function () {
                    this.size = e(this.element);
                }),
                (t.css = function (t) {
                    var e,
                        i = this.element.style;
                    for (e in t) i[r[e] || e] = t[e];
                }),
                (t.getPosition = function () {
                    var t = getComputedStyle(this.element),
                        e = this.layout._getOption("originLeft"),
                        i = this.layout._getOption("originTop"),
                        o = t[e ? "left" : "right"],
                        t = t[i ? "top" : "bottom"],
                        n = parseFloat(o),
                        s = parseFloat(t),
                        r = this.layout.size;
                    -1 != o.indexOf("%") && (n = (n / 100) * r.width),
                        -1 != t.indexOf("%") && (s = (s / 100) * r.height),
                        (n = isNaN(n) ? 0 : n),
                        (s = isNaN(s) ? 0 : s),
                        (n -= e ? r.paddingLeft : r.paddingRight),
                        (s -= i ? r.paddingTop : r.paddingBottom),
                        (this.position.x = n),
                        (this.position.y = s);
                }),
                (t.layoutPosition = function () {
                    var t = this.layout.size,
                        e = {},
                        i = this.layout._getOption("originLeft"),
                        o = this.layout._getOption("originTop"),
                        n = i ? "right" : "left",
                        s = this.position.x + t[i ? "paddingLeft" : "paddingRight"],
                        i = ((e[i ? "left" : "right"] = this.getXValue(s)), (e[n] = ""), o ? "paddingTop" : "paddingBottom"),
                        s = o ? "bottom" : "top",
                        n = this.position.y + t[i];
                    (e[o ? "top" : "bottom"] = this.getYValue(n)), (e[s] = ""), this.css(e), this.emitEvent("layout", [this]);
                }),
                (t.getXValue = function (t) {
                    var e = this.layout._getOption("horizontal");
                    return this.layout.options.percentPosition && !e ? (t / this.layout.size.width) * 100 + "%" : t + "px";
                }),
                (t.getYValue = function (t) {
                    var e = this.layout._getOption("horizontal");
                    return this.layout.options.percentPosition && e ? (t / this.layout.size.height) * 100 + "%" : t + "px";
                }),
                (t._transitionTo = function (t, e) {
                    this.getPosition();
                    var i = this.position.x,
                        o = this.position.y,
                        n = t == this.position.x && e == this.position.y;
                    this.setPosition(t, e),
                        n && !this.isTransitioning ? this.layoutPosition() : (((n = {}).transform = this.getTranslate(t - i, e - o)), this.transition({ to: n, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }));
                }),
                (t.getTranslate = function (t, e) {
                    return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)";
                }),
                (t.goTo = function (t, e) {
                    this.setPosition(t, e), this.layoutPosition();
                }),
                (t.moveTo = t._transitionTo),
                (t.setPosition = function (t, e) {
                    (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
                }),
                (t._nonTransition = function (t) {
                    for (var e in (this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd)) t.onTransitionEnd[e].call(this);
                }),
                (t.transition = function (t) {
                    if (parseFloat(this.layout.options.transitionDuration)) {
                        var e,
                            i = this._transn;
                        for (e in t.onTransitionEnd) i.onEnd[e] = t.onTransitionEnd[e];
                        for (e in t.to) (i.ingProperties[e] = !0), t.isCleaning && (i.clean[e] = !0);
                        t.from && (this.css(t.from), this.element.offsetHeight, 0), this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
                    } else this._nonTransition(t);
                }),
                "opacity," +
                    o.replace(/([A-Z])/g, function (t) {
                        return "-" + t.toLowerCase();
                    })),
            u =
                ((t.enableTransition = function () {
                    var t;
                    this.isTransitioning ||
                        ((t = this.layout.options.transitionDuration),
                        this.css({ transitionProperty: a, transitionDuration: (t = "number" == typeof t ? t + "ms" : t), transitionDelay: this.staggerDelay || 0 }),
                        this.element.addEventListener(s, this, !1));
                }),
                (t.onwebkitTransitionEnd = function (t) {
                    this.ontransitionend(t);
                }),
                (t.onotransitionend = function (t) {
                    this.ontransitionend(t);
                }),
                { "-webkit-transform": "transform" }),
            h =
                ((t.ontransitionend = function (t) {
                    var e, i;
                    t.target === this.element &&
                        ((e = this._transn),
                        (i = u[t.propertyName] || t.propertyName),
                        delete e.ingProperties[i],
                        (function (t) {
                            for (var e in t) return;
                            return 1;
                        })(e.ingProperties) && this.disableTransition(),
                        i in e.clean && ((this.element.style[t.propertyName] = ""), delete e.clean[i]),
                        i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]),
                        this.emitEvent("transitionEnd", [this]));
                }),
                (t.disableTransition = function () {
                    this.removeTransitionStyles(), this.element.removeEventListener(s, this, !1), (this.isTransitioning = !1);
                }),
                (t._removeStyles = function (t) {
                    var e,
                        i = {};
                    for (e in t) i[e] = "";
                    this.css(i);
                }),
                { transitionProperty: "", transitionDuration: "", transitionDelay: "" });
        return (
            (t.removeTransitionStyles = function () {
                this.css(h);
            }),
            (t.stagger = function (t) {
                (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
            }),
            (t.removeElem = function () {
                this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
            }),
            (t.remove = function () {
                return n && parseFloat(this.layout.options.transitionDuration)
                    ? (this.once("transitionEnd", function () {
                          this.removeElem();
                      }),
                      void this.hide())
                    : void this.removeElem();
            }),
            (t.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var t = this.layout.options,
                    e = {};
                (e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd), this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
            }),
            (t.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }),
            (t.getHideRevealTransitionEndProperty = function (t) {
                var e,
                    t = this.layout.options[t];
                if (t.opacity) return "opacity";
                for (e in t) return e;
            }),
            (t.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var t = this.layout.options,
                    e = {};
                (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd), this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
            }),
            (t.onHideTransitionEnd = function () {
                this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (t.destroy = function () {
                this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
            }),
            i
        );
    }),
    (function (n, s) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (t, e, i, o) {
                  return s(n, t, e, i, o);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = s(n, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")))
            : (n.Outlayer = s(n, n.EvEmitter, n.getSize, n.fizzyUIUtils, n.Outlayer.Item));
    })(window, function (t, e, n, o, s) {
        "use strict";
        function r(t, e) {
            var i = o.getQueryElement(t);
            i
                ? ((this.element = i),
                  h && (this.$element = h(this.element)),
                  (this.options = o.extend({}, this.constructor.defaults)),
                  this.option(e),
                  (e = ++d),
                  (this.element.outlayerGUID = e),
                  (l[e] = this)._create(),
                  this._getOption("initLayout") && this.layout())
                : u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t));
        }
        function a(t) {
            function e() {
                t.apply(this, arguments);
            }
            return ((e.prototype = Object.create(t.prototype)).constructor = e);
        }
        function i() {}
        var u = t.console,
            h = t.jQuery,
            d = 0,
            l = {},
            c =
                ((r.namespace = "outlayer"),
                (r.Item = s),
                (r.defaults = {
                    containerStyle: { position: "relative" },
                    initLayout: !0,
                    originLeft: !0,
                    originTop: !0,
                    resize: !0,
                    resizeContainer: !0,
                    transitionDuration: "0.4s",
                    hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                    visibleStyle: { opacity: 1, transform: "scale(1)" },
                }),
                r.prototype),
            m =
                (o.extend(c, e.prototype),
                (c.option = function (t) {
                    o.extend(this.options, t);
                }),
                (c._getOption = function (t) {
                    var e = this.constructor.compatOptions[t];
                    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
                }),
                (r.compatOptions = {
                    initLayout: "isInitLayout",
                    horizontal: "isHorizontal",
                    layoutInstant: "isLayoutInstant",
                    originLeft: "isOriginLeft",
                    originTop: "isOriginTop",
                    resize: "isResizeBound",
                    resizeContainer: "isResizingContainer",
                }),
                (c._create = function () {
                    this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize();
                }),
                (c.reloadItems = function () {
                    this.items = this._itemize(this.element.children);
                }),
                (c._itemize = function (t) {
                    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
                        var s = new i(e[n], this);
                        o.push(s);
                    }
                    return o;
                }),
                (c._filterFindItemElements = function (t) {
                    return o.filterFindElements(t, this.options.itemSelector);
                }),
                (c.getItemElements = function () {
                    return this.items.map(function (t) {
                        return t.element;
                    });
                }),
                (c.layout = function () {
                    this._resetLayout(), this._manageStamps();
                    var t = this._getOption("layoutInstant"),
                        t = void 0 !== t ? t : !this._isLayoutInited;
                    this.layoutItems(this.items, t), (this._isLayoutInited = !0);
                }),
                (c._init = c.layout),
                (c._resetLayout = function () {
                    this.getSize();
                }),
                (c.getSize = function () {
                    this.size = n(this.element);
                }),
                (c._getMeasurement = function (t, e) {
                    var i,
                        o = this.options[t];
                    o ? ("string" == typeof o ? (i = this.element.querySelector(o)) : o instanceof HTMLElement && (i = o), (this[t] = i ? n(i)[e] : o)) : (this[t] = 0);
                }),
                (c.layoutItems = function (t, e) {
                    (t = this._getItemsForLayout(t)), this._layoutItems(t, e), this._postLayout();
                }),
                (c._getItemsForLayout = function (t) {
                    return t.filter(function (t) {
                        return !t.isIgnored;
                    });
                }),
                (c._layoutItems = function (t, i) {
                    var o;
                    this._emitCompleteOnItems("layout", t),
                        t &&
                            t.length &&
                            ((o = []),
                            t.forEach(function (t) {
                                var e = this._getItemLayoutPosition(t);
                                (e.item = t), (e.isInstant = i || t.isLayoutInstant), o.push(e);
                            }, this),
                            this._processLayoutQueue(o));
                }),
                (c._getItemLayoutPosition = function () {
                    return { x: 0, y: 0 };
                }),
                (c._processLayoutQueue = function (t) {
                    this.updateStagger(),
                        t.forEach(function (t, e) {
                            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                        }, this);
                }),
                (c.updateStagger = function () {
                    var t,
                        e = this.options.stagger;
                    return null == e
                        ? void (this.stagger = 0)
                        : ((this.stagger = "number" == typeof (e = e) ? e : ((t = (e = e.match(/(^\d*\.?\d*)(\w*)/)) && e[1]), (e = e && e[2]), t.length ? (t = parseFloat(t)) * (m[e] || 1) : 0)), this.stagger);
                }),
                (c._positionItem = function (t, e, i, o, n) {
                    o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
                }),
                (c._postLayout = function () {
                    this.resizeContainer();
                }),
                (c.resizeContainer = function () {
                    var t;
                    this._getOption("resizeContainer") && (t = this._getContainerSize()) && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1));
                }),
                (c._getContainerSize = i),
                (c._setContainerMeasure = function (t, e) {
                    var i;
                    void 0 !== t &&
                        ((i = this.size).isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                        (t = Math.max(t, 0)),
                        (this.element.style[e ? "width" : "height"] = t + "px"));
                }),
                (c._emitCompleteOnItems = function (e, t) {
                    function i() {
                        s.dispatchEvent(e + "Complete", null, [t]);
                    }
                    function o() {
                        ++n == r && i();
                    }
                    var n,
                        s = this,
                        r = t.length;
                    t && r
                        ? ((n = 0),
                          t.forEach(function (t) {
                              t.once(e, o);
                          }))
                        : i();
                }),
                (c.dispatchEvent = function (t, e, i) {
                    var o = e ? [e].concat(i) : i;
                    this.emitEvent(t, o), h && ((this.$element = this.$element || h(this.element)), e ? (((o = h.Event(e)).type = t), this.$element.trigger(o, i)) : this.$element.trigger(t, i));
                }),
                (c.ignore = function (t) {
                    t = this.getItem(t);
                    t && (t.isIgnored = !0);
                }),
                (c.unignore = function (t) {
                    t = this.getItem(t);
                    t && delete t.isIgnored;
                }),
                (c.stamp = function (t) {
                    (t = this._find(t)) && ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
                }),
                (c.unstamp = function (t) {
                    (t = this._find(t)) &&
                        t.forEach(function (t) {
                            o.removeFrom(this.stamps, t), this.unignore(t);
                        }, this);
                }),
                (c._find = function (t) {
                    if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), o.makeArray(t);
                }),
                (c._manageStamps = function () {
                    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
                }),
                (c._getBoundingRect = function () {
                    var t = this.element.getBoundingClientRect(),
                        e = this.size;
                    this._boundingRect = {
                        left: t.left + e.paddingLeft + e.borderLeftWidth,
                        top: t.top + e.paddingTop + e.borderTopWidth,
                        right: t.right - (e.paddingRight + e.borderRightWidth),
                        bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                    };
                }),
                (c._manageStamp = i),
                (c._getElementOffset = function (t) {
                    var e = t.getBoundingClientRect(),
                        i = this._boundingRect,
                        t = n(t);
                    return { left: e.left - i.left - t.marginLeft, top: e.top - i.top - t.marginTop, right: i.right - e.right - t.marginRight, bottom: i.bottom - e.bottom - t.marginBottom };
                }),
                (c.handleEvent = o.handleEvent),
                (c.bindResize = function () {
                    t.addEventListener("resize", this), (this.isResizeBound = !0);
                }),
                (c.unbindResize = function () {
                    t.removeEventListener("resize", this), (this.isResizeBound = !1);
                }),
                (c.onresize = function () {
                    this.resize();
                }),
                o.debounceMethod(r, "onresize", 100),
                (c.resize = function () {
                    this.isResizeBound && this.needsResizeLayout() && this.layout();
                }),
                (c.needsResizeLayout = function () {
                    var t = n(this.element);
                    return this.size && t && t.innerWidth !== this.size.innerWidth;
                }),
                (c.addItems = function (t) {
                    t = this._itemize(t);
                    return t.length && (this.items = this.items.concat(t)), t;
                }),
                (c.appended = function (t) {
                    t = this.addItems(t);
                    t.length && (this.layoutItems(t, !0), this.reveal(t));
                }),
                (c.prepended = function (t) {
                    var e,
                        t = this._itemize(t);
                    t.length && ((e = this.items.slice(0)), (this.items = t.concat(e)), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(e));
                }),
                (c.reveal = function (t) {
                    var i;
                    this._emitCompleteOnItems("reveal", t),
                        t &&
                            t.length &&
                            ((i = this.updateStagger()),
                            t.forEach(function (t, e) {
                                t.stagger(e * i), t.reveal();
                            }));
                }),
                (c.hide = function (t) {
                    var i;
                    this._emitCompleteOnItems("hide", t),
                        t &&
                            t.length &&
                            ((i = this.updateStagger()),
                            t.forEach(function (t, e) {
                                t.stagger(e * i), t.hide();
                            }));
                }),
                (c.revealItemElements = function (t) {
                    t = this.getItems(t);
                    this.reveal(t);
                }),
                (c.hideItemElements = function (t) {
                    t = this.getItems(t);
                    this.hide(t);
                }),
                (c.getItem = function (t) {
                    for (var e = 0; e < this.items.length; e++) {
                        var i = this.items[e];
                        if (i.element == t) return i;
                    }
                }),
                (c.getItems = function (t) {
                    t = o.makeArray(t);
                    var e = [];
                    return (
                        t.forEach(function (t) {
                            t = this.getItem(t);
                            t && e.push(t);
                        }, this),
                        e
                    );
                }),
                (c.remove = function (t) {
                    t = this.getItems(t);
                    this._emitCompleteOnItems("remove", t),
                        t &&
                            t.length &&
                            t.forEach(function (t) {
                                t.remove(), o.removeFrom(this.items, t);
                            }, this);
                }),
                (c.destroy = function () {
                    var t = this.element.style,
                        t =
                            ((t.height = ""),
                            (t.position = ""),
                            (t.width = ""),
                            this.items.forEach(function (t) {
                                t.destroy();
                            }),
                            this.unbindResize(),
                            this.element.outlayerGUID);
                    delete l[t], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
                }),
                (r.data = function (t) {
                    t = (t = o.getQueryElement(t)) && t.outlayerGUID;
                    return t && l[t];
                }),
                (r.create = function (t, e) {
                    var i = a(r);
                    return (
                        (i.defaults = o.extend({}, r.defaults)),
                        o.extend(i.defaults, e),
                        (i.compatOptions = o.extend({}, r.compatOptions)),
                        (i.namespace = t),
                        (i.data = r.data),
                        (i.Item = a(s)),
                        o.htmlInit(i, t),
                        h && h.bridget && h.bridget(t, i),
                        i
                    );
                }),
                { ms: 1, s: 1e3 });
        return (r.Item = s), r;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer")))
            : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
    })(window, function (t) {
        "use strict";
        function e() {
            t.Item.apply(this, arguments);
        }
        var i = (e.prototype = Object.create(t.Item.prototype)),
            o = i._create,
            n =
                ((i._create = function () {
                    (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
                }),
                (i.updateSortData = function () {
                    if (!this.isIgnored) {
                        (this.sortData.id = this.id), (this.sortData["original-order"] = this.id), (this.sortData.random = Math.random());
                        var t,
                            e = this.layout.options.getSortData,
                            i = this.layout._sorters;
                        for (t in e) {
                            var o = i[t];
                            this.sortData[t] = o(this.element, this);
                        }
                    }
                }),
                i.destroy);
        return (
            (i.destroy = function () {
                n.apply(this, arguments), this.css({ display: "" });
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("get-size"), require("outlayer")))
            : ((t.Isotope = t.Isotope || {}), (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
    })(window, function (e, i) {
        "use strict";
        function o(t) {
            (this.isotope = t) && ((this.options = t.options[this.namespace]), (this.element = t.element), (this.items = t.filteredItems), (this.size = t.size));
        }
        var n = o.prototype;
        return (
            ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function (t) {
                n[t] = function () {
                    return i.prototype[t].apply(this.isotope, arguments);
                };
            }),
            (n.needsVerticalResizeLayout = function () {
                var t = e(this.isotope.element);
                return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight;
            }),
            (n._getMeasurement = function () {
                this.isotope._getMeasurement.apply(this, arguments);
            }),
            (n.getColumnWidth = function () {
                this.getSegmentSize("column", "Width");
            }),
            (n.getRowHeight = function () {
                this.getSegmentSize("row", "Height");
            }),
            (n.getSegmentSize = function (t, e) {
                var i,
                    t = t + e,
                    o = "outer" + e;
                this._getMeasurement(t, o), this[t] || ((i = this.getFirstItemSize()), (this[t] = (i && i[o]) || this.isotope.size["inner" + e]));
            }),
            (n.getFirstItemSize = function () {
                var t = this.isotope.filteredItems[0];
                return t && t.element && e(t.element);
            }),
            (n.layout = function () {
                this.isotope.layout.apply(this.isotope, arguments);
            }),
            (n.getSize = function () {
                this.isotope.getSize(), (this.size = this.isotope.size);
            }),
            (o.modes = {}),
            (o.create = function (t, e) {
                function i() {
                    o.apply(this, arguments);
                }
                return ((i.prototype = Object.create(n)).constructor = i), e && (i.options = e), (o.modes[(i.prototype.namespace = t)] = i);
            }),
            o
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer"), require("get-size")))
            : (t.Masonry = e(t.Outlayer, t.getSize));
    })(window, function (t, a) {
        var t = t.create("masonry"),
            e = ((t.compatOptions.fitWidth = "isFitWidth"), t.prototype);
        return (
            (e._resetLayout = function () {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), (this.colYs = []);
                for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                (this.maxY = 0), (this.horizontalColIndex = 0);
            }),
            (e.measureColumns = function () {
                this.getContainerWidth(), this.columnWidth || ((t = (t = this.items[0]) && t.element), (this.columnWidth = (t && a(t).outerWidth) || this.containerWidth));
                var t = (this.columnWidth += this.gutter),
                    e = this.containerWidth + this.gutter,
                    i = e / t,
                    e = t - (e % t),
                    i = Math[e && e < 1 ? "round" : "floor"](i);
                this.cols = Math.max(i, 1);
            }),
            (e.getContainerWidth = function () {
                var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                    t = a(t);
                this.containerWidth = t && t.innerWidth;
            }),
            (e._getItemLayoutPosition = function (t) {
                t.getSize();
                for (
                    var e = t.size.outerWidth % this.columnWidth,
                        e = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth),
                        e = Math.min(e, this.cols),
                        i = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](e, t),
                        o = { x: this.columnWidth * i.col, y: i.y },
                        n = i.y + t.size.outerHeight,
                        s = e + i.col,
                        r = i.col;
                    r < s;
                    r++
                )
                    this.colYs[r] = n;
                return o;
            }),
            (e._getTopColPosition = function (t) {
                var t = this._getTopColGroup(t),
                    e = Math.min.apply(Math, t);
                return { col: t.indexOf(e), y: e };
            }),
            (e._getTopColGroup = function (t) {
                if (t < 2) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
                return e;
            }),
            (e._getColGroupY = function (t, e) {
                return e < 2 ? this.colYs[t] : ((t = this.colYs.slice(t, t + e)), Math.max.apply(Math, t));
            }),
            (e._getHorizontalColPosition = function (t, e) {
                var i = this.horizontalColIndex % this.cols,
                    i = 1 < t && i + t > this.cols ? 0 : i,
                    e = e.size.outerWidth && e.size.outerHeight;
                return (this.horizontalColIndex = e ? i + t : this.horizontalColIndex), { col: i, y: this._getColGroupY(i, t) };
            }),
            (e._manageStamp = function (t) {
                var e = a(t),
                    t = this._getElementOffset(t),
                    i = this._getOption("originLeft") ? t.left : t.right,
                    o = i + e.outerWidth,
                    i = Math.floor(i / this.columnWidth),
                    i = Math.max(0, i),
                    n = Math.floor(o / this.columnWidth);
                n -= o % this.columnWidth ? 0 : 1;
                for (var n = Math.min(this.cols - 1, n), s = (this._getOption("originTop") ? t.top : t.bottom) + e.outerHeight, r = i; r <= n; r++) this.colYs[r] = Math.max(s, this.colYs[r]);
            }),
            (e._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = { height: this.maxY };
                return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
            }),
            (e._getContainerFitWidth = function () {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
                return (this.cols - t) * this.columnWidth - this.gutter;
            }),
            (e.needsResizeLayout = function () {
                var t = this.containerWidth;
                return this.getContainerWidth(), t != this.containerWidth;
            }),
            t
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("../layout-mode"), require("masonry-layout")))
            : e(t.Isotope.LayoutMode, t.Masonry);
    })(window, function (t, e) {
        "use strict";
        var i,
            t = t.create("masonry"),
            o = t.prototype,
            n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
        for (i in e.prototype) n[i] || (o[i] = e.prototype[i]);
        var s = o.measureColumns,
            r =
                ((o.measureColumns = function () {
                    (this.items = this.isotope.filteredItems), s.call(this);
                }),
                o._getOption);
        return (
            (o._getOption = function (t) {
                return "fitWidth" == t ? (void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth) : r.apply(this.isotope, arguments);
            }),
            t
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? (module.exports = e(require("../layout-mode"))) : e(t.Isotope.LayoutMode);
    })(window, function (t) {
        "use strict";
        var t = t.create("fitRows"),
            e = t.prototype;
        return (
            (e._resetLayout = function () {
                (this.x = 0), (this.y = 0), (this.maxY = 0), this._getMeasurement("gutter", "outerWidth");
            }),
            (e._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth + this.gutter,
                    i = this.isotope.size.innerWidth + this.gutter,
                    i = (0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY)), { x: this.x, y: this.y });
                return (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)), (this.x += e), i;
            }),
            (e._getContainerSize = function () {
                return { height: this.maxY };
            }),
            t
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("../layout-mode")))
            : e(t.Isotope.LayoutMode);
    })(window, function (t) {
        "use strict";
        var t = t.create("vertical", { horizontalAlignment: 0 }),
            e = t.prototype;
        return (
            (e._resetLayout = function () {
                this.y = 0;
            }),
            (e._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                    i = this.y;
                return (this.y += t.size.outerHeight), { x: e, y: i };
            }),
            (e._getContainerSize = function () {
                return { height: this.y };
            }),
            t
        );
    }),
    (function (r, a) {
        "function" == typeof define && define.amd
            ? define([
                  "outlayer/outlayer",
                  "get-size/get-size",
                  "desandro-matches-selector/matches-selector",
                  "fizzy-ui-utils/utils",
                  "isotope-layout/js/item",
                  "isotope-layout/js/layout-mode",
                  "isotope-layout/js/layout-modes/masonry",
                  "isotope-layout/js/layout-modes/fit-rows",
                  "isotope-layout/js/layout-modes/vertical",
              ], function (t, e, i, o, n, s) {
                  return a(r, t, 0, i, o, n, s);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = a(
                  r,
                  require("outlayer"),
                  require("get-size"),
                  require("desandro-matches-selector"),
                  require("fizzy-ui-utils"),
                  require("isotope-layout/js/item"),
                  require("isotope-layout/js/layout-mode"),
                  require("isotope-layout/js/layout-modes/masonry"),
                  require("isotope-layout/js/layout-modes/fit-rows"),
                  require("isotope-layout/js/layout-modes/vertical")
              ))
            : (r.Isotope = a(r, r.Outlayer, r.getSize, r.matchesSelector, r.fizzyUIUtils, r.Isotope.Item, r.Isotope.LayoutMode));
    })(window, function (t, i, e, o, s, n, r) {
        var a = t.jQuery,
            u = String.prototype.trim
                ? function (t) {
                      return t.trim();
                  }
                : function (t) {
                      return t.replace(/^\s+|\s+$/g, "");
                  },
            h = i.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 }),
            t = ((h.Item = n), (h.LayoutMode = r), h.prototype),
            d =
                ((t._create = function () {
                    for (var t in ((this.itemGUID = 0), (this._sorters = {}), this._getSorters(), i.prototype._create.call(this), (this.modes = {}), (this.filteredItems = this.items), (this.sortHistory = ["original-order"]), r.modes))
                        this._initLayoutMode(t);
                }),
                (t.reloadItems = function () {
                    (this.itemGUID = 0), i.prototype.reloadItems.call(this);
                }),
                (t._itemize = function () {
                    for (var t = i.prototype._itemize.apply(this, arguments), e = 0; e < t.length; e++) t[e].id = this.itemGUID++;
                    return this._updateItemsSortData(t), t;
                }),
                (t._initLayoutMode = function (t) {
                    var e = r.modes[t],
                        i = this.options[t] || {};
                    (this.options[t] = e.options ? s.extend(e.options, i) : i), (this.modes[t] = new e(this));
                }),
                (t.layout = function () {
                    return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
                }),
                (t._layout = function () {
                    var t = this._getIsInstant();
                    this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), (this._isLayoutInited = !0);
                }),
                (t.arrange = function (t) {
                    this.option(t), this._getIsInstant();
                    t = this._filter(this.items);
                    (this.filteredItems = t.matches), this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t), this._sort(), this._layout();
                }),
                (t._init = t.arrange),
                (t._hideReveal = function (t) {
                    this.reveal(t.needReveal), this.hide(t.needHide);
                }),
                (t._getIsInstant = function () {
                    var t = this._getOption("layoutInstant"),
                        t = void 0 !== t ? t : !this._isLayoutInited;
                    return (this._isInstant = t);
                }),
                (t._bindArrangeComplete = function () {
                    function t() {
                        e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
                    }
                    var e,
                        i,
                        o,
                        n = this;
                    this.once("layoutComplete", function () {
                        (e = !0), t();
                    }),
                        this.once("hideComplete", function () {
                            (i = !0), t();
                        }),
                        this.once("revealComplete", function () {
                            (o = !0), t();
                        });
                }),
                (t._filter = function (t) {
                    for (var e = this.options.filter, i = [], o = [], n = [], s = this._getFilterTest(e || "*"), r = 0; r < t.length; r++) {
                        var a,
                            u = t[r];
                        u.isIgnored || ((a = s(u)) && i.push(u), a && u.isHidden ? o.push(u) : a || u.isHidden || n.push(u));
                    }
                    return { matches: i, needReveal: o, needHide: n };
                }),
                (t._getFilterTest = function (e) {
                    return a && this.options.isJQueryFiltering
                        ? function (t) {
                              return a(t.element).is(e);
                          }
                        : "function" == typeof e
                        ? function (t) {
                              return e(t.element);
                          }
                        : function (t) {
                              return o(t.element, e);
                          };
                }),
                (t.updateSortData = function (t) {
                    t = t ? ((t = s.makeArray(t)), this.getItems(t)) : this.items;
                    this._getSorters(), this._updateItemsSortData(t);
                }),
                (t._getSorters = function () {
                    var t,
                        e = this.options.getSortData;
                    for (t in e) {
                        var i = e[t];
                        this._sorters[t] = d(i);
                    }
                }),
                (t._updateItemsSortData = function (t) {
                    for (var e = t && t.length, i = 0; e && i < e; i++) t[i].updateSortData();
                }),
                function (t) {
                    var e, i, o, n, s, r;
                    return "string" != typeof t
                        ? t
                        : ((i = (i = (e = (t = u(t).split(" "))[0]).match(/^\[(.+)\]$/)) && i[1]),
                          (r = e),
                          (o = (s = i)
                              ? function (t) {
                                    return t.getAttribute(s);
                                }
                              : function (t) {
                                    t = t.querySelector(r);
                                    return t && t.textContent;
                                }),
                          (n = h.sortDataParsers[t[1]])
                              ? function (t) {
                                    return t && n(o(t));
                                }
                              : function (t) {
                                    return t && o(t);
                                });
                }),
            l =
                ((h.sortDataParsers = {
                    parseInt: function (t) {
                        return parseInt(t, 10);
                    },
                    parseFloat: function (t) {
                        return parseFloat(t);
                    },
                }),
                (t._sort = function () {
                    var t, r, a;
                    this.options.sortBy &&
                        ((t = s.makeArray(this.options.sortBy)),
                        this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory)),
                        (r = this.sortHistory),
                        (a = this.options.sortAscending),
                        this.filteredItems.sort(function (t, e) {
                            for (var i = 0; i < r.length; i++) {
                                var o = r[i],
                                    n = t.sortData[o],
                                    s = e.sortData[o];
                                if (s < n || n < s) return (s < n ? 1 : -1) * ((void 0 !== a[o] ? a[o] : a) ? 1 : -1);
                            }
                            return 0;
                        }));
                }),
                (t._getIsSameSortBy = function (t) {
                    for (var e = 0; e < t.length; e++) if (t[e] != this.sortHistory[e]) return !1;
                    return !0;
                }),
                (t._mode = function () {
                    var t = this.options.layoutMode,
                        e = this.modes[t];
                    if (e) return (e.options = this.options[t]), e;
                    throw new Error("No layout mode: " + t);
                }),
                (t._resetLayout = function () {
                    i.prototype._resetLayout.call(this), this._mode()._resetLayout();
                }),
                (t._getItemLayoutPosition = function (t) {
                    return this._mode()._getItemLayoutPosition(t);
                }),
                (t._manageStamp = function (t) {
                    this._mode()._manageStamp(t);
                }),
                (t._getContainerSize = function () {
                    return this._mode()._getContainerSize();
                }),
                (t.needsResizeLayout = function () {
                    return this._mode().needsResizeLayout();
                }),
                (t.appended = function (t) {
                    var t = this.addItems(t);
                    t.length && ((t = this._filterRevealAdded(t)), (this.filteredItems = this.filteredItems.concat(t)));
                }),
                (t.prepended = function (t) {
                    var e,
                        t = this._itemize(t);
                    t.length && (this._resetLayout(), this._manageStamps(), (e = this._filterRevealAdded(t)), this.layoutItems(this.filteredItems), (this.filteredItems = e.concat(this.filteredItems)), (this.items = t.concat(this.items)));
                }),
                (t._filterRevealAdded = function (t) {
                    t = this._filter(t);
                    return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches;
                }),
                (t.insert = function (t) {
                    var e = this.addItems(t);
                    if (e.length) {
                        for (var i, o = e.length, n = 0; n < o; n++) (i = e[n]), this.element.appendChild(i.element);
                        t = this._filter(e).matches;
                        for (n = 0; n < o; n++) e[n].isLayoutInstant = !0;
                        for (this.arrange(), n = 0; n < o; n++) delete e[n].isLayoutInstant;
                        this.reveal(t);
                    }
                }),
                t.remove);
        return (
            (t.remove = function (t) {
                t = s.makeArray(t);
                var e = this.getItems(t);
                l.call(this, t);
                for (var i = e && e.length, o = 0; i && o < i; o++) {
                    var n = e[o];
                    s.removeFrom(this.filteredItems, n);
                }
            }),
            (t.shuffle = function () {
                for (var t = 0; t < this.items.length; t++) this.items[t].sortData.random = Math.random();
                (this.options.sortBy = "random"), this._sort(), this._layout();
            }),
            (t._noTransition = function (t, e) {
                var i = this.options.transitionDuration,
                    t = ((this.options.transitionDuration = 0), t.apply(this, e));
                return (this.options.transitionDuration = i), t;
            }),
            (t.getFilteredItemElements = function () {
                return this.filteredItems.map(function (t) {
                    return t.element;
                });
            }),
            h
        );
    });
(function (u) {
    u.extend(u.fn, {
        validate: function (t) {
            var i;
            if (this.length)
                return (
                    (i = u.data(this[0], "validator")) ||
                    (this.attr("novalidate", "novalidate"),
                    (i = new u.validator(t, this[0])),
                    u.data(this[0], "validator", i),
                    i.settings.onsubmit &&
                        (this.validateDelegate(":submit", "click", function (t) {
                            i.settings.submitHandler && (i.submitButton = t.target), u(t.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== u(t.target).attr("formnovalidate") && (i.cancelSubmit = !0);
                        }),
                        this.submit(function (e) {
                            function t() {
                                var t;
                                return (
                                    !i.settings.submitHandler ||
                                    (i.submitButton && (t = u("<input type='hidden'/>").attr("name", i.submitButton.name).val(u(i.submitButton).val()).appendTo(i.currentForm)),
                                    i.settings.submitHandler.call(i, i.currentForm, e),
                                    i.submitButton && t.remove(),
                                    !1)
                                );
                            }
                            return i.settings.debug && e.preventDefault(), i.cancelSubmit ? ((i.cancelSubmit = !1), t()) : i.form() ? (i.pendingRequest ? !(i.formSubmitted = !0) : t()) : (i.focusInvalid(), !1);
                        })),
                    i)
                );
            t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
        },
        valid: function () {
            var t, e;
            return u(this[0]).is("form")
                ? this.validate().form()
                : ((t = !0),
                  (e = u(this[0].form).validate()),
                  this.each(function () {
                      t = t && e.element(this);
                  }),
                  t);
        },
        removeAttrs: function (t) {
            var i = {},
                s = this;
            return (
                u.each(t.split(/\s/), function (t, e) {
                    (i[e] = s.attr(e)), s.removeAttr(e);
                }),
                i
            );
        },
        rules: function (t, e) {
            var i = this[0];
            if (t) {
                var s,
                    n = u.data(i.form, "validator").settings,
                    r = n.rules,
                    a = u.validator.staticRules(i);
                switch (t) {
                    case "add":
                        u.extend(a, u.validator.normalizeRule(e)), delete a.messages, (r[i.name] = a), e.messages && (n.messages[i.name] = u.extend(n.messages[i.name], e.messages));
                        break;
                    case "remove":
                        return e
                            ? ((s = {}),
                              u.each(e.split(/\s/), function (t, e) {
                                  (s[e] = a[e]), delete a[e];
                              }),
                              s)
                            : (delete r[i.name], a);
                }
            }
            var o,
                t = u.validator.normalizeRules(u.extend({}, u.validator.classRules(i), u.validator.attributeRules(i), u.validator.dataRules(i), u.validator.staticRules(i)), i);
            return t.required && ((o = t.required), delete t.required, (t = u.extend({ required: o }, t))), t;
        },
    }),
        u.extend(u.expr[":"], {
            blank: function (t) {
                return !u.trim("" + u(t).val());
            },
            filled: function (t) {
                return !!u.trim("" + u(t).val());
            },
            unchecked: function (t) {
                return !u(t).prop("checked");
            },
        }),
        (u.validator = function (t, e) {
            (this.settings = u.extend(!0, {}, u.validator.defaults, t)), (this.currentForm = e), this.init();
        }),
        (u.validator.format = function (i, t) {
            return 1 === arguments.length
                ? function () {
                      var t = u.makeArray(arguments);
                      return t.unshift(i), u.validator.format.apply(this, t);
                  }
                : ((t = 2 < arguments.length && t.constructor !== Array ? u.makeArray(arguments).slice(1) : t).constructor !== Array && (t = [t]),
                  u.each(t, function (t, e) {
                      i = i.replace(RegExp("\\{" + t + "\\}", "g"), function () {
                          return e;
                      });
                  }),
                  i);
        }),
        u.extend(u.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusInvalid: !0,
                errorContainer: u([]),
                errorLabelContainer: u([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function (t) {
                    (this.lastActive = t),
                        this.settings.focusCleanup &&
                            !this.blockFocusCleanup &&
                            (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide());
                },
                onfocusout: function (t) {
                    this.checkable(t) || (!(t.name in this.submitted) && this.optional(t)) || this.element(t);
                },
                onkeyup: function (t, e) {
                    (9 === e.which && "" === this.elementValue(t)) || !(t.name in this.submitted || t === this.lastElement) || this.element(t);
                },
                onclick: function (t) {
                    t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode);
                },
                highlight: function (t, e, i) {
                    ("radio" === t.type ? this.findByName(t.name) : u(t)).addClass(e).removeClass(i);
                },
                unhighlight: function (t, e, i) {
                    ("radio" === t.type ? this.findByName(t.name) : u(t)).removeClass(e).addClass(i);
                },
            },
            setDefaults: function (t) {
                u.extend(u.validator.defaults, t);
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: u.validator.format("Please enter no more than {0} characters."),
                minlength: u.validator.format("Please enter at least {0} characters."),
                rangelength: u.validator.format("Please enter a value between {0} and {1} characters long."),
                range: u.validator.format("Please enter a value between {0} and {1}."),
                max: u.validator.format("Please enter a value less than or equal to {0}."),
                min: u.validator.format("Please enter a value greater than or equal to {0}."),
            },
            autoCreateRanges: !1,
            prototype: {
                init: function () {
                    function t(t) {
                        var e = u.data(this[0].form, "validator"),
                            i = "on" + t.type.replace(/^validate/, "");
                        e.settings[i] && e.settings[i].call(e, this[0], t);
                    }
                    (this.labelContainer = u(this.settings.errorLabelContainer)),
                        (this.errorContext = (this.labelContainer.length && this.labelContainer) || u(this.currentForm)),
                        (this.containers = u(this.settings.errorContainer).add(this.settings.errorLabelContainer)),
                        (this.submitted = {}),
                        (this.valueCache = {}),
                        (this.pendingRequest = 0),
                        (this.pending = {}),
                        (this.invalid = {}),
                        this.reset();
                    var s = (this.groups = {}),
                        i =
                            (u.each(this.settings.groups, function (i, t) {
                                "string" == typeof t && (t = t.split(/\s/)),
                                    u.each(t, function (t, e) {
                                        s[e] = i;
                                    });
                            }),
                            this.settings.rules);
                    u.each(i, function (t, e) {
                        i[t] = u.validator.normalizeRule(e);
                    }),
                        u(this.currentForm)
                            .validateDelegate(
                                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ",
                                "focusin focusout keyup",
                                t
                            )
                            .validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t),
                        this.settings.invalidHandler && u(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
                },
                form: function () {
                    return this.checkForm(), u.extend(this.submitted, this.errorMap), (this.invalid = u.extend({}, this.errorMap)), this.valid() || u(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
                },
                checkForm: function () {
                    this.prepareForm();
                    for (var t = 0, e = (this.currentElements = this.elements()); e[t]; t++) this.check(e[t]);
                    return this.valid();
                },
                element: function (t) {
                    (t = this.validationTargetFor(this.clean(t))), (this.lastElement = t), this.prepareElement(t), (this.currentElements = u(t));
                    var e = !1 !== this.check(t);
                    return e ? delete this.invalid[t.name] : (this.invalid[t.name] = !0), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e;
                },
                showErrors: function (e) {
                    if (e) {
                        for (var t in (u.extend(this.errorMap, e), (this.errorList = []), e)) this.errorList.push({ message: e[t], element: this.findByName(t)[0] });
                        this.successList = u.grep(this.successList, function (t) {
                            return !(t.name in e);
                        });
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
                },
                resetForm: function () {
                    u.fn.resetForm && u(this.currentForm).resetForm(),
                        (this.submitted = {}),
                        (this.lastElement = null),
                        this.prepareForm(),
                        this.hideErrors(),
                        this.elements().removeClass(this.settings.errorClass).removeData("previousValue");
                },
                numberOfInvalids: function () {
                    return this.objectLength(this.invalid);
                },
                objectLength: function (t) {
                    var e,
                        i = 0;
                    for (e in t) i++;
                    return i;
                },
                hideErrors: function () {
                    this.addWrapper(this.toHide).hide();
                },
                valid: function () {
                    return 0 === this.size();
                },
                size: function () {
                    return this.errorList.length;
                },
                focusInvalid: function () {
                    if (this.settings.focusInvalid)
                        try {
                            u(this.findLastActive() || (this.errorList.length && this.errorList[0].element) || [])
                                .filter(":visible")
                                .focus()
                                .trigger("focusin");
                        } catch (t) {}
                },
                findLastActive: function () {
                    var e = this.lastActive;
                    return (
                        e &&
                        1 ===
                            u.grep(this.errorList, function (t) {
                                return t.element.name === e.name;
                            }).length &&
                        e
                    );
                },
                elements: function () {
                    var t = this,
                        e = {};
                    return u(this.currentForm)
                        .find("input, select, textarea")
                        .not(":submit, :reset, :image, [disabled]")
                        .not(this.settings.ignore)
                        .filter(function () {
                            return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in e || !t.objectLength(u(this).rules()) || ((e[this.name] = !0), 0));
                        });
                },
                clean: function (t) {
                    return u(t)[0];
                },
                errors: function () {
                    var t = this.settings.errorClass.replace(" ", ".");
                    return u(this.settings.errorElement + "." + t, this.errorContext);
                },
                reset: function () {
                    (this.successList = []), (this.errorList = []), (this.errorMap = {}), (this.toShow = u([])), (this.toHide = u([])), (this.currentElements = u([]));
                },
                prepareForm: function () {
                    this.reset(), (this.toHide = this.errors().add(this.containers));
                },
                prepareElement: function (t) {
                    this.reset(), (this.toHide = this.errorsFor(t));
                },
                elementValue: function (t) {
                    var e = u(t).attr("type"),
                        i = u(t).val();
                    return "radio" === e || "checkbox" === e ? u("input[name='" + u(t).attr("name") + "']:checked").val() : "string" == typeof i ? i.replace(/\r/g, "") : i;
                },
                check: function (e) {
                    e = this.validationTargetFor(this.clean(e));
                    var t,
                        i,
                        s = u(e).rules(),
                        n = !1,
                        r = this.elementValue(e);
                    for (i in s) {
                        var a = { method: i, parameters: s[i] };
                        try {
                            if ("dependency-mismatch" === (t = u.validator.methods[i].call(this, r, e, a.parameters))) n = !0;
                            else {
                                if (((n = !1), "pending" === t)) return void (this.toHide = this.toHide.not(this.errorsFor(e)));
                                if (!t) return this.formatAndAdd(e, a), !1;
                            }
                        } catch (t) {
                            throw (this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + a.method + "' method.", t), t);
                        }
                    }
                    return n ? void 0 : (this.objectLength(s) && this.successList.push(e), !0);
                },
                customDataMessage: function (t, e) {
                    return u(t).data("msg-" + e.toLowerCase()) || (t.attributes && u(t).attr("data-msg-" + e.toLowerCase()));
                },
                customMessage: function (t, e) {
                    t = this.settings.messages[t];
                    return t && (t.constructor === String ? t : t[e]);
                },
                findDefined: function () {
                    for (var t = 0; t < arguments.length; t++) if (void 0 !== arguments[t]) return arguments[t];
                },
                defaultMessage: function (t, e) {
                    return this.findDefined(
                        this.customMessage(t.name, e),
                        this.customDataMessage(t, e),
                        (!this.settings.ignoreTitle && t.title) || void 0,
                        u.validator.messages[e],
                        "<strong>Warning: No message defined for " + t.name + "</strong>"
                    );
                },
                formatAndAdd: function (t, e) {
                    var i = this.defaultMessage(t, e.method),
                        s = /\$?\{(\d+)\}/g;
                    "function" == typeof i ? (i = i.call(this, e.parameters, t)) : s.test(i) && (i = u.validator.format(i.replace(s, "{$1}"), e.parameters)),
                        this.errorList.push({ message: i, element: t }),
                        (this.errorMap[t.name] = i),
                        (this.submitted[t.name] = i);
                },
                addWrapper: function (t) {
                    return (t = this.settings.wrapper ? t.add(t.parent(this.settings.wrapper)) : t);
                },
                defaultShowErrors: function () {
                    for (var t, e = 0; this.errorList[e]; e++) {
                        var i = this.errorList[e];
                        this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                    }
                    if ((this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)) for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                    if (this.settings.unhighlight) for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                    (this.toHide = this.toHide.not(this.toShow)), this.hideErrors(), this.addWrapper(this.toShow).show();
                },
                validElements: function () {
                    return this.currentElements.not(this.invalidElements());
                },
                invalidElements: function () {
                    return u(this.errorList).map(function () {
                        return this.element;
                    });
                },
                showLabel: function (t, e) {
                    var i = this.errorsFor(t);
                    i.length
                        ? (i.removeClass(this.settings.validClass).addClass(this.settings.errorClass), i.html(e))
                        : ((i = u("<" + this.settings.errorElement + ">")
                              .attr("for", this.idOrName(t))
                              .addClass(this.settings.errorClass)
                              .html(e || "")),
                          this.settings.wrapper &&
                              (i = i
                                  .hide()
                                  .show()
                                  .wrap("<" + this.settings.wrapper + "/>")
                                  .parent()),
                          this.labelContainer.append(i).length || (this.settings.errorPlacement ? this.settings.errorPlacement(i, u(t)) : i.insertAfter(t))),
                        !e && this.settings.success && (i.text(""), "string" == typeof this.settings.success ? i.addClass(this.settings.success) : this.settings.success(i, t)),
                        (this.toShow = this.toShow.add(i));
                },
                errorsFor: function (t) {
                    var e = this.idOrName(t);
                    return this.errors().filter(function () {
                        return u(this).attr("for") === e;
                    });
                },
                idOrName: function (t) {
                    return this.groups[t.name] || (!this.checkable(t) && t.id) || t.name;
                },
                validationTargetFor: function (t) {
                    return (t = this.checkable(t) ? this.findByName(t.name).not(this.settings.ignore)[0] : t);
                },
                checkable: function (t) {
                    return /radio|checkbox/i.test(t.type);
                },
                findByName: function (t) {
                    return u(this.currentForm).find("[name='" + t + "']");
                },
                getLength: function (t, e) {
                    switch (e.nodeName.toLowerCase()) {
                        case "select":
                            return u("option:selected", e).length;
                        case "input":
                            if (this.checkable(e)) return this.findByName(e.name).filter(":checked").length;
                    }
                    return t.length;
                },
                depend: function (t, e) {
                    return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e);
                },
                dependTypes: {
                    boolean: function (t) {
                        return t;
                    },
                    string: function (t, e) {
                        return !!u(t, e.form).length;
                    },
                    function: function (t, e) {
                        return t(e);
                    },
                },
                optional: function (t) {
                    var e = this.elementValue(t);
                    return !u.validator.methods.required.call(this, e, t) && "dependency-mismatch";
                },
                startRequest: function (t) {
                    this.pending[t.name] || (this.pendingRequest++, (this.pending[t.name] = !0));
                },
                stopRequest: function (t, e) {
                    this.pendingRequest--,
                        this.pendingRequest < 0 && (this.pendingRequest = 0),
                        delete this.pending[t.name],
                        e && 0 === this.pendingRequest && this.formSubmitted && this.form()
                            ? (u(this.currentForm).submit(), (this.formSubmitted = !1))
                            : !e && 0 === this.pendingRequest && this.formSubmitted && (u(this.currentForm).triggerHandler("invalid-form", [this]), (this.formSubmitted = !1));
                },
                previousValue: function (t) {
                    return u.data(t, "previousValue") || u.data(t, "previousValue", { old: null, valid: !0, message: this.defaultMessage(t, "remote") });
                },
            },
            classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } },
            addClassRules: function (t, e) {
                t.constructor === String ? (this.classRuleSettings[t] = e) : u.extend(this.classRuleSettings, t);
            },
            classRules: function (t) {
                var e = {},
                    t = u(t).attr("class");
                return (
                    t &&
                        u.each(t.split(" "), function () {
                            this in u.validator.classRuleSettings && u.extend(e, u.validator.classRuleSettings[this]);
                        }),
                    e
                );
            },
            attributeRules: function (t) {
                var e,
                    i = {},
                    s = u(t),
                    n = s[0].getAttribute("type");
                for (e in u.validator.methods) {
                    var r = "required" === e ? !!(r = "" === (r = s.get(0).getAttribute(e)) ? !0 : r) : s.attr(e);
                    (r = /min|max/.test(e) && (null === n || /number|range|text/.test(n)) ? Number(r) : r) ? (i[e] = r) : n === e && "range" !== n && (i[e] = !0);
                }
                return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i;
            },
            dataRules: function (t) {
                var e,
                    i,
                    s = {},
                    n = u(t);
                for (e in u.validator.methods) (i = n.data("rule-" + e.toLowerCase())), void 0 !== i && (s[e] = i);
                return s;
            },
            staticRules: function (t) {
                var e = {},
                    i = u.data(t.form, "validator");
                return (e = i.settings.rules ? u.validator.normalizeRule(i.settings.rules[t.name]) || {} : e);
            },
            normalizeRules: function (s, n) {
                return (
                    u.each(s, function (t, e) {
                        if (!1 === e) delete s[t];
                        else if (e.param || e.depends) {
                            var i = !0;
                            switch (typeof e.depends) {
                                case "string":
                                    i = !!u(e.depends, n.form).length;
                                    break;
                                case "function":
                                    i = e.depends.call(n, n);
                            }
                            i ? (s[t] = void 0 === e.param || e.param) : delete s[t];
                        }
                    }),
                    u.each(s, function (t, e) {
                        s[t] = u.isFunction(e) ? e(n) : e;
                    }),
                    u.each(["minlength", "maxlength"], function () {
                        s[this] && (s[this] = Number(s[this]));
                    }),
                    u.each(["rangelength", "range"], function () {
                        var t;
                        s[this] && (u.isArray(s[this]) ? (s[this] = [Number(s[this][0]), Number(s[this][1])]) : "string" == typeof s[this] && ((t = s[this].split(/[\s,]+/)), (s[this] = [Number(t[0]), Number(t[1])])));
                    }),
                    u.validator.autoCreateRanges &&
                        (s.min && s.max && ((s.range = [s.min, s.max]), delete s.min, delete s.max), s.minlength) &&
                        s.maxlength &&
                        ((s.rangelength = [s.minlength, s.maxlength]), delete s.minlength, delete s.maxlength),
                    s
                );
            },
            normalizeRule: function (t) {
                var e;
                return (
                    "string" == typeof t &&
                        ((e = {}),
                        u.each(t.split(/\s/), function () {
                            e[this] = !0;
                        }),
                        (t = e)),
                    t
                );
            },
            addMethod: function (t, e, i) {
                (u.validator.methods[t] = e), (u.validator.messages[t] = void 0 !== i ? i : u.validator.messages[t]), e.length < 3 && u.validator.addClassRules(t, u.validator.normalizeRule(t));
            },
            methods: {
                required: function (t, e, i) {
                    return this.depend(i, e) ? ("select" === e.nodeName.toLowerCase() ? (i = u(e).val()) && 0 < i.length : this.checkable(e) ? 0 < this.getLength(t, e) : 0 < u.trim(t).length) : "dependency-mismatch";
                },
                email: function (t, e) {
                    return (
                        this.optional(e) ||
                        /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
                            t
                        )
                    );
                },
                url: function (t, e) {
                    return (
                        this.optional(e) ||
                        /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
                            t
                        )
                    );
                },
                date: function (t, e) {
                    return this.optional(e) || !/Invalid|NaN/.test("" + new Date(t));
                },
                dateISO: function (t, e) {
                    return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t);
                },
                number: function (t, e) {
                    return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t);
                },
                digits: function (t, e) {
                    return this.optional(e) || /^\d+$/.test(t);
                },
                creditcard: function (t, e) {
                    if (this.optional(e)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(t)) return !1;
                    for (var i = 0, s = 0, n = !1, r = (t = t.replace(/\D/g, "")).length - 1; 0 <= r; r--) {
                        var a = t.charAt(r),
                            s = parseInt(a, 10);
                        n && 9 < (s *= 2) && (s -= 9), (i += s), (n = !n);
                    }
                    return 0 == i % 10;
                },
                minlength: function (t, e, i) {
                    t = u.isArray(t) ? t.length : this.getLength(u.trim(t), e);
                    return this.optional(e) || i <= t;
                },
                maxlength: function (t, e, i) {
                    t = u.isArray(t) ? t.length : this.getLength(u.trim(t), e);
                    return this.optional(e) || t <= i;
                },
                rangelength: function (t, e, i) {
                    t = u.isArray(t) ? t.length : this.getLength(u.trim(t), e);
                    return this.optional(e) || (t >= i[0] && i[1] >= t);
                },
                min: function (t, e, i) {
                    return this.optional(e) || i <= t;
                },
                max: function (t, e, i) {
                    return this.optional(e) || t <= i;
                },
                range: function (t, e, i) {
                    return this.optional(e) || (t >= i[0] && i[1] >= t);
                },
                equalTo: function (t, e, i) {
                    i = u(i);
                    return (
                        this.settings.onfocusout &&
                            i.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                                u(e).valid();
                            }),
                        t === i.val()
                    );
                },
                remote: function (s, n, t) {
                    if (this.optional(n)) return "dependency-mismatch";
                    var r = this.previousValue(n);
                    if (
                        (this.settings.messages[n.name] || (this.settings.messages[n.name] = {}),
                        (r.originalMessage = this.settings.messages[n.name].remote),
                        (this.settings.messages[n.name].remote = r.message),
                        (t = "string" == typeof t ? { url: t } : t),
                        r.old === s)
                    )
                        return r.valid;
                    r.old = s;
                    var a = this,
                        e = (this.startRequest(n), {});
                    return (
                        (e[n.name] = s),
                        u.ajax(
                            u.extend(
                                !0,
                                {
                                    url: t,
                                    mode: "abort",
                                    port: "validate" + n.name,
                                    dataType: "json",
                                    data: e,
                                    success: function (t) {
                                        a.settings.messages[n.name].remote = r.originalMessage;
                                        var e,
                                            i = !0 === t || "true" === t;
                                        i
                                            ? ((e = a.formSubmitted), a.prepareElement(n), (a.formSubmitted = e), a.successList.push(n), delete a.invalid[n.name], a.showErrors())
                                            : ((e = {}), (t = t || a.defaultMessage(n, "remote")), (e[n.name] = r.message = u.isFunction(t) ? t(s) : t), (a.invalid[n.name] = !0), a.showErrors(e)),
                                            (r.valid = i),
                                            a.stopRequest(n, i);
                                    },
                                },
                                t
                            )
                        ),
                        "pending"
                    );
                },
            },
        }),
        (u.format = u.validator.format);
})(jQuery),
    (function (s) {
        var n,
            r = {};
        s.ajaxPrefilter
            ? s.ajaxPrefilter(function (t, e, i) {
                  var s = t.port;
                  "abort" === t.mode && (r[s] && r[s].abort(), (r[s] = i));
              })
            : ((n = s.ajax),
              (s.ajax = function (t) {
                  var e = ("mode" in t ? t : s.ajaxSettings).mode,
                      i = ("port" in t ? t : s.ajaxSettings).port;
                  return "abort" === e ? (r[i] && r[i].abort(), (r[i] = n.apply(this, arguments)), r[i]) : n.apply(this, arguments);
              }));
    })(jQuery),
    (function (n) {
        n.extend(n.fn, {
            validateDelegate: function (i, t, s) {
                return this.bind(t, function (t) {
                    var e = n(t.target);
                    return e.is(i) ? s.apply(e, arguments) : void 0;
                });
            },
        });
    })(jQuery);
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : (t.retinajs = e());
})(this, function () {
    "use strict";
    function e(t) {
        return Array.prototype.slice.call(t);
    }
    function r(e, i) {
        var n = e.nodeName.toLowerCase(),
            t = document.createElement("img");
        t.addEventListener("load", function () {
            var t;
            "img" === n
                ? ((t = e).hasAttribute("data-no-resize") ||
                      (0 === t.offsetWidth && 0 === t.offsetHeight ? (t.setAttribute("width", t.naturalWidth), t.setAttribute("height", t.naturalHeight)) : (t.setAttribute("width", t.offsetWidth), t.setAttribute("height", t.offsetHeight))),
                  t.setAttribute("src", i))
                : (e.style.backgroundImage = "url(" + i + ")");
        }),
            t.setAttribute("src", i),
            e.setAttribute(s, !0);
    }
    function o(t, e, i) {
        (i = 2 < arguments.length && void 0 !== i ? i : 1), (i = parseInt(i, 10));
        i = a < i ? a : i;
        e && 1 < i && r(t, e.replace(n, "@" + i + "x$1"));
    }
    function t(t) {
        ((t = t) ? ("function" == typeof t.forEach ? t : e(t)) : "undefined" == typeof document ? [] : e(document.querySelectorAll(u))).forEach(function (t) {
            var e, i, n;
            t.getAttribute(s) ||
                ((n = "img" === t.nodeName.toLowerCase() ? t.getAttribute("src") : t.style.backgroundImage.replace(d, "$2")),
                (e = t.getAttribute("data-rjs")),
                (i = !isNaN(parseInt(e, 10))),
                null !== e && (i ? o(t, n, e) : ((i = t), (n = e), 1 < a && r(i, n))));
        });
    }
    var i = "undefined" != typeof window,
        a = Math.round((i && window.devicePixelRatio) || 1),
        n = /(\.[A-z]{3,4}\/?(\?.*)?)$/,
        d = /url\(('|")?([^)'"]+)('|")?\)/i,
        u = "[data-rjs]",
        s = "data-rjs-processed";
    return (
        i &&
            (window.addEventListener("load", function () {
                t();
            }),
            (window.retinajs = t)),
        t
    );
});
!(function () {
    var t = (function (d, h) {
        "use strict";
        function t(t, i) {
            for (var e = 0; e < i.length; e++) {
                var a = i[e];
                (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
            }
        }
        for (
            var s = [
                    ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
                    ["Albania (Shqipëri)", "al", "355"],
                    ["Algeria (‫الجزائر‬‎)", "dz", "213"],
                    ["American Samoa", "as", "1", 5, ["684"]],
                    ["Andorra", "ad", "376"],
                    ["Angola", "ao", "244"],
                    ["Anguilla", "ai", "1", 6, ["264"]],
                    ["Antigua and Barbuda", "ag", "1", 7, ["268"]],
                    ["Argentina", "ar", "54"],
                    ["Armenia (Հայաստան)", "am", "374"],
                    ["Aruba", "aw", "297"],
                    ["Australia", "au", "61", 0],
                    ["Austria (Österreich)", "at", "43"],
                    ["Azerbaijan (Azərbaycan)", "az", "994"],
                    ["Bahamas", "bs", "1", 8, ["242"]],
                    ["Bahrain (‫البحرين‬‎)", "bh", "973"],
                    ["Bangladesh (বাংলাদেশ)", "bd", "880"],
                    ["Barbados", "bb", "1", 9, ["246"]],
                    ["Belarus (Беларусь)", "by", "375"],
                    ["Belgium (België)", "be", "32"],
                    ["Belize", "bz", "501"],
                    ["Benin (Bénin)", "bj", "229"],
                    ["Bermuda", "bm", "1", 10, ["441"]],
                    ["Bhutan (འབྲུག)", "bt", "975"],
                    ["Bolivia", "bo", "591"],
                    ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
                    ["Botswana", "bw", "267"],
                    ["Brazil (Brasil)", "br", "55"],
                    ["British Indian Ocean Territory", "io", "246"],
                    ["British Virgin Islands", "vg", "1", 11, ["284"]],
                    ["Brunei", "bn", "673"],
                    ["Bulgaria (България)", "bg", "359"],
                    ["Burkina Faso", "bf", "226"],
                    ["Burundi (Uburundi)", "bi", "257"],
                    ["Cambodia (កម្ពុជា)", "kh", "855"],
                    ["Cameroon (Cameroun)", "cm", "237"],
                    [
                        "Canada",
                        "ca",
                        "1",
                        1,
                        [
                            "204",
                            "226",
                            "236",
                            "249",
                            "250",
                            "289",
                            "306",
                            "343",
                            "365",
                            "387",
                            "403",
                            "416",
                            "418",
                            "431",
                            "437",
                            "438",
                            "450",
                            "506",
                            "514",
                            "519",
                            "548",
                            "579",
                            "581",
                            "587",
                            "604",
                            "613",
                            "639",
                            "647",
                            "672",
                            "705",
                            "709",
                            "742",
                            "778",
                            "780",
                            "782",
                            "807",
                            "819",
                            "825",
                            "867",
                            "873",
                            "902",
                            "905",
                        ],
                    ],
                    ["Cape Verde (Kabu Verdi)", "cv", "238"],
                    ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]],
                    ["Cayman Islands", "ky", "1", 12, ["345"]],
                    ["Central African Republic (République centrafricaine)", "cf", "236"],
                    ["Chad (Tchad)", "td", "235"],
                    ["Chile", "cl", "56"],
                    ["China (中国)", "cn", "86"],
                    ["Christmas Island", "cx", "61", 2],
                    ["Cocos (Keeling) Islands", "cc", "61", 1],
                    ["Colombia", "co", "57"],
                    ["Comoros (‫جزر القمر‬‎)", "km", "269"],
                    ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
                    ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
                    ["Cook Islands", "ck", "682"],
                    ["Costa Rica", "cr", "506"],
                    ["Côte d’Ivoire", "ci", "225"],
                    ["Croatia (Hrvatska)", "hr", "385"],
                    ["Cuba", "cu", "53"],
                    ["Curaçao", "cw", "599", 0],
                    ["Cyprus (Κύπρος)", "cy", "357"],
                    ["Czech Republic (Česká republika)", "cz", "420"],
                    ["Denmark (Danmark)", "dk", "45"],
                    ["Djibouti", "dj", "253"],
                    ["Dominica", "dm", "1", 13, ["767"]],
                    ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]],
                    ["Ecuador", "ec", "593"],
                    ["Egypt (‫مصر‬‎)", "eg", "20"],
                    ["El Salvador", "sv", "503"],
                    ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
                    ["Eritrea", "er", "291"],
                    ["Estonia (Eesti)", "ee", "372"],
                    ["Ethiopia", "et", "251"],
                    ["Falkland Islands (Islas Malvinas)", "fk", "500"],
                    ["Faroe Islands (Føroyar)", "fo", "298"],
                    ["Fiji", "fj", "679"],
                    ["Finland (Suomi)", "fi", "358", 0],
                    ["France", "fr", "33"],
                    ["French Guiana (Guyane française)", "gf", "594"],
                    ["French Polynesia (Polynésie française)", "pf", "689"],
                    ["Gabon", "ga", "241"],
                    ["Gambia", "gm", "220"],
                    ["Georgia (საქართველო)", "ge", "995"],
                    ["Germany (Deutschland)", "de", "49"],
                    ["Ghana (Gaana)", "gh", "233"],
                    ["Gibraltar", "gi", "350"],
                    ["Greece (Ελλάδα)", "gr", "30"],
                    ["Greenland (Kalaallit Nunaat)", "gl", "299"],
                    ["Grenada", "gd", "1", 14, ["473"]],
                    ["Guadeloupe", "gp", "590", 0],
                    ["Guam", "gu", "1", 15, ["671"]],
                    ["Guatemala", "gt", "502"],
                    ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]],
                    ["Guinea (Guinée)", "gn", "224"],
                    ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
                    ["Guyana", "gy", "592"],
                    ["Haiti", "ht", "509"],
                    ["Honduras", "hn", "504"],
                    ["Hong Kong (香港)", "hk", "852"],
                    ["Hungary (Magyarország)", "hu", "36"],
                    ["Iceland (Ísland)", "is", "354"],
                    ["India (भारत)", "in", "91"],
                    ["Indonesia", "id", "62"],
                    ["Iran (‫ایران‬‎)", "ir", "98"],
                    ["Iraq (‫العراق‬‎)", "iq", "964"],
                    ["Ireland", "ie", "353"],
                    ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]],
                    ["Israel (‫ישראל‬‎)", "il", "972"],
                    ["Italy (Italia)", "it", "39", 0],
                    ["Jamaica", "jm", "1", 4, ["876", "658"]],
                    ["Japan (日本)", "jp", "81"],
                    ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]],
                    ["Jordan (‫الأردن‬‎)", "jo", "962"],
                    ["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]],
                    ["Kenya", "ke", "254"],
                    ["Kiribati", "ki", "686"],
                    ["Kosovo", "xk", "383"],
                    ["Kuwait (‫الكويت‬‎)", "kw", "965"],
                    ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
                    ["Laos (ລາວ)", "la", "856"],
                    ["Latvia (Latvija)", "lv", "371"],
                    ["Lebanon (‫لبنان‬‎)", "lb", "961"],
                    ["Lesotho", "ls", "266"],
                    ["Liberia", "lr", "231"],
                    ["Libya (‫ليبيا‬‎)", "ly", "218"],
                    ["Liechtenstein", "li", "423"],
                    ["Lithuania (Lietuva)", "lt", "370"],
                    ["Luxembourg", "lu", "352"],
                    ["Macau (澳門)", "mo", "853"],
                    ["Macedonia (FYROM) (Македонија)", "mk", "389"],
                    ["Madagascar (Madagasikara)", "mg", "261"],
                    ["Malawi", "mw", "265"],
                    ["Malaysia", "my", "60"],
                    ["Maldives", "mv", "960"],
                    ["Mali", "ml", "223"],
                    ["Malta", "mt", "356"],
                    ["Marshall Islands", "mh", "692"],
                    ["Martinique", "mq", "596"],
                    ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
                    ["Mauritius (Moris)", "mu", "230"],
                    ["Mayotte", "yt", "262", 1, ["269", "639"]],
                    ["Mexico (México)", "mx", "52"],
                    ["Micronesia", "fm", "691"],
                    ["Moldova (Republica Moldova)", "md", "373"],
                    ["Monaco", "mc", "377"],
                    ["Mongolia (Монгол)", "mn", "976"],
                    ["Montenegro (Crna Gora)", "me", "382"],
                    ["Montserrat", "ms", "1", 16, ["664"]],
                    ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
                    ["Mozambique (Moçambique)", "mz", "258"],
                    ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
                    ["Namibia (Namibië)", "na", "264"],
                    ["Nauru", "nr", "674"],
                    ["Nepal (नेपाल)", "np", "977"],
                    ["Netherlands (Nederland)", "nl", "31"],
                    ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
                    ["New Zealand", "nz", "64"],
                    ["Nicaragua", "ni", "505"],
                    ["Niger (Nijar)", "ne", "227"],
                    ["Nigeria", "ng", "234"],
                    ["Niue", "nu", "683"],
                    ["Norfolk Island", "nf", "672"],
                    ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
                    ["Northern Mariana Islands", "mp", "1", 17, ["670"]],
                    ["Norway (Norge)", "no", "47", 0],
                    ["Oman (‫عُمان‬‎)", "om", "968"],
                    ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
                    ["Palau", "pw", "680"],
                    ["Palestine (‫فلسطين‬‎)", "ps", "970"],
                    ["Panama (Panamá)", "pa", "507"],
                    ["Papua New Guinea", "pg", "675"],
                    ["Paraguay", "py", "595"],
                    ["Peru (Perú)", "pe", "51"],
                    ["Philippines", "ph", "63"],
                    ["Poland (Polska)", "pl", "48"],
                    ["Portugal", "pt", "351"],
                    ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
                    ["Qatar (‫قطر‬‎)", "qa", "974"],
                    ["Réunion (La Réunion)", "re", "262", 0],
                    ["Romania (România)", "ro", "40"],
                    ["Russia (Россия)", "ru", "7", 0],
                    ["Rwanda", "rw", "250"],
                    ["Saint Barthélemy", "bl", "590", 1],
                    ["Saint Helena", "sh", "290"],
                    ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]],
                    ["Saint Lucia", "lc", "1", 19, ["758"]],
                    ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
                    ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
                    ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]],
                    ["Samoa", "ws", "685"],
                    ["San Marino", "sm", "378"],
                    ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
                    ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
                    ["Senegal (Sénégal)", "sn", "221"],
                    ["Serbia (Србија)", "rs", "381"],
                    ["Seychelles", "sc", "248"],
                    ["Sierra Leone", "sl", "232"],
                    ["Singapore", "sg", "65"],
                    ["Sint Maarten", "sx", "1", 21, ["721"]],
                    ["Slovakia (Slovensko)", "sk", "421"],
                    ["Slovenia (Slovenija)", "si", "386"],
                    ["Solomon Islands", "sb", "677"],
                    ["Somalia (Soomaaliya)", "so", "252"],
                    ["South Africa", "za", "27"],
                    ["South Korea (대한민국)", "kr", "82"],
                    ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
                    ["Spain (España)", "es", "34"],
                    ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
                    ["Sudan (‫السودان‬‎)", "sd", "249"],
                    ["Suriname", "sr", "597"],
                    ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]],
                    ["Swaziland", "sz", "268"],
                    ["Sweden (Sverige)", "se", "46"],
                    ["Switzerland (Schweiz)", "ch", "41"],
                    ["Syria (‫سوريا‬‎)", "sy", "963"],
                    ["Taiwan (台灣)", "tw", "886"],
                    ["Tajikistan", "tj", "992"],
                    ["Tanzania", "tz", "255"],
                    ["Thailand (ไทย)", "th", "66"],
                    ["Timor-Leste", "tl", "670"],
                    ["Togo", "tg", "228"],
                    ["Tokelau", "tk", "690"],
                    ["Tonga", "to", "676"],
                    ["Trinidad and Tobago", "tt", "1", 22, ["868"]],
                    ["Tunisia (‫تونس‬‎)", "tn", "216"],
                    ["Turkey (Türkiye)", "tr", "90"],
                    ["Turkmenistan", "tm", "993"],
                    ["Turks and Caicos Islands", "tc", "1", 23, ["649"]],
                    ["Tuvalu", "tv", "688"],
                    ["U.S. Virgin Islands", "vi", "1", 24, ["340"]],
                    ["Uganda", "ug", "256"],
                    ["Ukraine (Україна)", "ua", "380"],
                    ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
                    ["United Kingdom", "gb", "44", 0],
                    ["United States", "us", "1", 0],
                    ["Uruguay", "uy", "598"],
                    ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
                    ["Vanuatu", "vu", "678"],
                    ["Vatican City (Città del Vaticano)", "va", "39", 1, ["06698"]],
                    ["Venezuela", "ve", "58"],
                    ["Vietnam (Việt Nam)", "vn", "84"],
                    ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
                    ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, ["5288", "5289"]],
                    ["Yemen (‫اليمن‬‎)", "ye", "967"],
                    ["Zambia", "zm", "260"],
                    ["Zimbabwe", "zw", "263"],
                    ["Åland Islands", "ax", "358", 1, ["18"]],
                ],
                i = 0;
            i < s.length;
            i++
        ) {
            var e = s[i];
            s[i] = { name: e[0], iso2: e[1], dialCode: e[2], priority: e[3] || 0, areaCodes: e[4] || null };
        }
        function n(t, i) {
            for (var e = Object.keys(t), a = 0; a < e.length; a++) i(e[a], t[e[a]]);
        }
        function o(i) {
            n(d.intlTelInputGlobals.instances, function (t) {
                d.intlTelInputGlobals.instances[t][i]();
            });
        }
        d.intlTelInputGlobals = {
            getInstance: function (t) {
                t = t.getAttribute("data-intl-tel-input-id");
                return d.intlTelInputGlobals.instances[t];
            },
            instances: {},
        };
        var a,
            r,
            l,
            u = 0,
            c = {
                allowDropdown: !0,
                autoHideDialCode: !0,
                autoPlaceholder: "polite",
                customContainer: "",
                customPlaceholder: null,
                dropdownContainer: null,
                excludeCountries: [],
                formatOnDisplay: !0,
                geoIpLookup: null,
                hiddenInput: "",
                initialCountry: "",
                localizedCountries: null,
                nationalMode: !0,
                onlyCountries: [],
                placeholderNumberType: "MOBILE",
                preferredCountries: ["us", "gb"],
                separateDialCode: !1,
                utilsScript: "",
            },
            p = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"],
            v =
                (d.addEventListener("load", function () {
                    d.intlTelInputGlobals.windowLoaded = !0;
                }),
                (a = _),
                (r = [
                    {
                        key: "_init",
                        value: function () {
                            var t,
                                i,
                                e = this;
                            this.d.nationalMode && (this.d.autoHideDialCode = !1),
                                this.d.separateDialCode && (this.d.autoHideDialCode = this.d.nationalMode = !1),
                                (this.g = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)),
                                this.g && (h.body.classList.add("iti-mobile"), this.d.dropdownContainer || (this.d.dropdownContainer = h.body)),
                                "undefined" != typeof Promise
                                    ? ((t = new Promise(function (t, i) {
                                          (e.h = t), (e.i = i);
                                      })),
                                      (i = new Promise(function (t, i) {
                                          (e.i0 = t), (e.i1 = i);
                                      })),
                                      (this.promise = Promise.all([t, i])))
                                    : ((this.h = this.i = function () {}), (this.i0 = this.i1 = function () {})),
                                (this.s = {}),
                                this._b(),
                                this._f(),
                                this._h(),
                                this._i(),
                                this._i3();
                        },
                    },
                    {
                        key: "_b",
                        value: function () {
                            this._d(), this._d2(), this._e(), this.d.localizedCountries && this._d0(), (this.d.onlyCountries.length || this.d.localizedCountries) && this.p.sort(this._d1);
                        },
                    },
                    {
                        key: "_c",
                        value: function (t, i, e) {
                            i.length > this.dialCodeMaxLen && (this.dialCodeMaxLen = i.length), this.q.hasOwnProperty(i) || (this.q[i] = []);
                            for (var a = 0; a < this.q[i].length; a++) if (this.q[i][a] === t) return;
                            e = void 0 !== e ? e : this.q[i].length;
                            this.q[i][e] = t;
                        },
                    },
                    {
                        key: "_d",
                        value: function () {
                            var i, e;
                            this.d.onlyCountries.length
                                ? ((i = this.d.onlyCountries.map(function (t) {
                                      return t.toLowerCase();
                                  })),
                                  (this.p = s.filter(function (t) {
                                      return -1 < i.indexOf(t.iso2);
                                  })))
                                : this.d.excludeCountries.length
                                ? ((e = this.d.excludeCountries.map(function (t) {
                                      return t.toLowerCase();
                                  })),
                                  (this.p = s.filter(function (t) {
                                      return -1 === e.indexOf(t.iso2);
                                  })))
                                : (this.p = s);
                        },
                    },
                    {
                        key: "_d0",
                        value: function () {
                            for (var t = 0; t < this.p.length; t++) {
                                var i = this.p[t].iso2.toLowerCase();
                                this.d.localizedCountries.hasOwnProperty(i) && (this.p[t].name = this.d.localizedCountries[i]);
                            }
                        },
                    },
                    {
                        key: "_d1",
                        value: function (t, i) {
                            return t.name.localeCompare(i.name);
                        },
                    },
                    {
                        key: "_d2",
                        value: function () {
                            (this.dialCodeMaxLen = 0), (this.q = {});
                            for (var t = 0; t < this.p.length; t++) {
                                var i = this.p[t];
                                this._c(i.iso2, i.dialCode, i.priority);
                            }
                            for (var e = 0; e < this.p.length; e++) {
                                var a = this.p[e];
                                if (a.areaCodes)
                                    for (var n = this.q[a.dialCode][0], s = 0; s < a.areaCodes.length; s++) {
                                        for (var o = a.areaCodes[s], r = 1; r < o.length; r++) {
                                            var l = a.dialCode + o.substr(0, r);
                                            this._c(n, l), this._c(a.iso2, l);
                                        }
                                        this._c(a.iso2, a.dialCode + o);
                                    }
                            }
                        },
                    },
                    {
                        key: "_e",
                        value: function () {
                            this.preferredCountries = [];
                            for (var t = 0; t < this.d.preferredCountries.length; t++) {
                                var i = this.d.preferredCountries[t].toLowerCase(),
                                    i = this._y(i, !1, !0);
                                i && this.preferredCountries.push(i);
                            }
                        },
                    },
                    {
                        key: "_e2",
                        value: function (t, i, e) {
                            var a = h.createElement(t);
                            return (
                                i &&
                                    n(i, function (t, i) {
                                        a.setAttribute(t, i);
                                    }),
                                e && e.appendChild(a),
                                a
                            );
                        },
                    },
                    {
                        key: "_f",
                        value: function () {
                            this.a.setAttribute("autocomplete", "off");
                            var t,
                                i,
                                e,
                                a = "iti",
                                a =
                                    (this.d.allowDropdown && (a += " iti--allow-dropdown"),
                                    this.d.separateDialCode && (a += " iti--separate-dial-code"),
                                    this.d.customContainer && (a = a + " " + this.d.customContainer),
                                    this._e2("div", { class: a }));
                            this.a.parentNode.insertBefore(a, this.a),
                                (this.k = this._e2("div", { class: "iti__flag-container" }, a)),
                                a.appendChild(this.a),
                                (this.selectedFlag = this._e2("div", { class: "iti__selected-flag", role: "combobox", "aria-owns": "country-listbox" }, this.k)),
                                (this.l = this._e2("div", { class: "iti__flag" }, this.selectedFlag)),
                                this.d.separateDialCode && (this.t = this._e2("div", { class: "iti__selected-dial-code" }, this.selectedFlag)),
                                this.d.allowDropdown &&
                                    (this.selectedFlag.setAttribute("tabIndex", "0"),
                                    (this.u = this._e2("div", { class: "iti__arrow" }, this.selectedFlag)),
                                    (this.m = this._e2("ul", { class: "iti__country-list iti__hide", id: "country-listbox", "aria-expanded": "false", role: "listbox" })),
                                    this.preferredCountries.length && (this._g(this.preferredCountries, "iti__preferred"), this._e2("li", { class: "iti__divider", role: "separator", "aria-disabled": "true" }, this.m)),
                                    this._g(this.p, "iti__standard"),
                                    (this.d.dropdownContainer ? ((this.dropdown = this._e2("div", { class: "iti iti--container" })), this.dropdown) : this.k).appendChild(this.m)),
                                this.d.hiddenInput &&
                                    ((t = this.d.hiddenInput),
                                    (i = this.a.getAttribute("name")) && -1 !== (e = i.lastIndexOf("[")) && (t = "".concat(i.substr(0, e), "[").concat(t, "]")),
                                    (this.hiddenInput = this._e2("input", { type: "hidden", name: t })),
                                    a.appendChild(this.hiddenInput));
                        },
                    },
                    {
                        key: "_g",
                        value: function (t, i) {
                            for (var e = "", a = 0; a < t.length; a++)
                                var n = t[a],
                                    e =
                                        (e =
                                            (e =
                                                (e += "<li class='iti__country "
                                                    .concat(i, "' tabIndex='-1' id='iti-item-")
                                                    .concat(n.iso2, "' role='option' data-dial-code='")
                                                    .concat(n.dialCode, "' data-country-code='")
                                                    .concat(n.iso2, "'>")) + "<div class='iti__flag-box'><div class='iti__flag iti__".concat(n.iso2, "'></div></div>")) + "<span class='iti__country-name'>".concat(n.name, "</span>")) +
                                        "<span class='iti__dial-code'>+".concat(n.dialCode, "</span>") +
                                        "</li>";
                            this.m.insertAdjacentHTML("beforeend", e);
                        },
                    },
                    {
                        key: "_h",
                        value: function () {
                            var t = this.a.value,
                                i = this._5(t),
                                e = this._w(t),
                                a = this.d,
                                n = a.initialCountry,
                                s = a.nationalMode,
                                o = a.autoHideDialCode,
                                a = a.separateDialCode;
                            i && !e
                                ? this._v(t)
                                : "auto" !== n &&
                                  (n ? this._z(n.toLowerCase()) : i && e ? this._z("us") : ((this.j = (this.preferredCountries.length ? this.preferredCountries : this.p)[0].iso2), t || this._z(this.j)),
                                  t || s || o || a || (this.a.value = "+".concat(this.s.dialCode))),
                                t && this._u(t);
                        },
                    },
                    {
                        key: "_i",
                        value: function () {
                            this._j(), this.d.autoHideDialCode && this._l(), this.d.allowDropdown && this._i2(), this.hiddenInput && this._i0();
                        },
                    },
                    {
                        key: "_i0",
                        value: function () {
                            var t = this;
                            (this._a14 = function () {
                                t.hiddenInput.value = t.getNumber();
                            }),
                                this.a.form && this.a.form.addEventListener("submit", this._a14);
                        },
                    },
                    {
                        key: "_i1",
                        value: function () {
                            for (var t = this.a; t && "LABEL" !== t.tagName; ) t = t.parentNode;
                            return t;
                        },
                    },
                    {
                        key: "_i2",
                        value: function () {
                            var i = this,
                                t =
                                    ((this._a9 = function (t) {
                                        i.m.classList.contains("iti__hide") ? i.a.focus() : t.preventDefault();
                                    }),
                                    this._i1());
                            t && t.addEventListener("click", this._a9),
                                (this._a10 = function () {
                                    !i.m.classList.contains("iti__hide") || i.a.disabled || i.a.readOnly || i._n();
                                }),
                                this.selectedFlag.addEventListener("click", this._a10),
                                (this._a11 = function (t) {
                                    i.m.classList.contains("iti__hide") && -1 !== ["ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter"].indexOf(t.key) && (t.preventDefault(), t.stopPropagation(), i._n()), "Tab" === t.key && i._2();
                                }),
                                this.k.addEventListener("keydown", this._a11);
                        },
                    },
                    {
                        key: "_i3",
                        value: function () {
                            var t = this;
                            this.d.utilsScript && !d.intlTelInputUtils
                                ? d.intlTelInputGlobals.windowLoaded
                                    ? d.intlTelInputGlobals.loadUtils(this.d.utilsScript)
                                    : d.addEventListener("load", function () {
                                          d.intlTelInputGlobals.loadUtils(t.d.utilsScript);
                                      })
                                : this.i0(),
                                "auto" === this.d.initialCountry ? this._i4() : this.h();
                        },
                    },
                    {
                        key: "_i4",
                        value: function () {
                            d.intlTelInputGlobals.autoCountry
                                ? this.handleAutoCountry()
                                : d.intlTelInputGlobals.startedLoadingAutoCountry ||
                                  ((d.intlTelInputGlobals.startedLoadingAutoCountry = !0),
                                  "function" == typeof this.d.geoIpLookup &&
                                      this.d.geoIpLookup(
                                          function (t) {
                                              (d.intlTelInputGlobals.autoCountry = t.toLowerCase()),
                                                  setTimeout(function () {
                                                      return o("handleAutoCountry");
                                                  });
                                          },
                                          function () {
                                              return o("rejectAutoCountryPromise");
                                          }
                                      ));
                        },
                    },
                    {
                        key: "_j",
                        value: function () {
                            var t = this;
                            (this._a12 = function () {
                                t._v(t.a.value) && t._8();
                            }),
                                this.a.addEventListener("keyup", this._a12),
                                (this._a13 = function () {
                                    setTimeout(t._a12);
                                }),
                                this.a.addEventListener("cut", this._a13),
                                this.a.addEventListener("paste", this._a13);
                        },
                    },
                    {
                        key: "_j2",
                        value: function (t) {
                            var i = this.a.getAttribute("maxlength");
                            return i && t.length > i ? t.substr(0, i) : t;
                        },
                    },
                    {
                        key: "_l",
                        value: function () {
                            var t = this;
                            (this._a8 = function () {
                                t._l2();
                            }),
                                this.a.form && this.a.form.addEventListener("submit", this._a8),
                                this.a.addEventListener("blur", this._a8);
                        },
                    },
                    {
                        key: "_l2",
                        value: function () {
                            var t;
                            "+" !== this.a.value.charAt(0) || ((t = this._m(this.a.value)) && this.s.dialCode !== t) || (this.a.value = "");
                        },
                    },
                    {
                        key: "_m",
                        value: function (t) {
                            return t.replace(/\D/g, "");
                        },
                    },
                    {
                        key: "_m2",
                        value: function (t) {
                            var i = h.createEvent("Event");
                            i.initEvent(t, !0, !0), this.a.dispatchEvent(i);
                        },
                    },
                    {
                        key: "_n",
                        value: function () {
                            this.m.classList.remove("iti__hide"),
                                this.m.setAttribute("aria-expanded", "true"),
                                this._o(),
                                this.b && (this._x(this.b, !1), this._3(this.b, !0)),
                                this._p(),
                                this.u.classList.add("iti__arrow--up"),
                                this._m2("open:countrydropdown");
                        },
                    },
                    {
                        key: "_n2",
                        value: function (t, i, e) {
                            e && !t.classList.contains(i) ? t.classList.add(i) : !e && t.classList.contains(i) && t.classList.remove(i);
                        },
                    },
                    {
                        key: "_o",
                        value: function () {
                            var t,
                                i,
                                e,
                                a,
                                n,
                                s = this;
                            this.d.dropdownContainer && this.d.dropdownContainer.appendChild(this.dropdown),
                                this.g ||
                                    ((t = this.a.getBoundingClientRect()),
                                    (a = d.pageYOffset || h.documentElement.scrollTop),
                                    (i = t.top + a),
                                    (n = this.m.offsetHeight),
                                    (e = i + this.a.offsetHeight + n < a + d.innerHeight),
                                    (a = a < i - n),
                                    this._n2(this.m, "iti__country-list--dropup", !e && a),
                                    this.d.dropdownContainer &&
                                        ((n = !e && a ? 0 : this.a.offsetHeight),
                                        (this.dropdown.style.top = "".concat(i + n, "px")),
                                        (this.dropdown.style.left = "".concat(t.left + h.body.scrollLeft, "px")),
                                        (this._a4 = function () {
                                            return s._2();
                                        }),
                                        d.addEventListener("scroll", this._a4)));
                        },
                    },
                    {
                        key: "_o2",
                        value: function (t) {
                            for (var i = t; i && i !== this.m && !i.classList.contains("iti__country"); ) i = i.parentNode;
                            return i === this.m ? null : i;
                        },
                    },
                    {
                        key: "_p",
                        value: function () {
                            var i = this,
                                t =
                                    ((this._a0 = function (t) {
                                        t = i._o2(t.target);
                                        t && i._x(t, !1);
                                    }),
                                    this.m.addEventListener("mouseover", this._a0),
                                    (this._a1 = function (t) {
                                        t = i._o2(t.target);
                                        t && i._1(t);
                                    }),
                                    this.m.addEventListener("click", this._a1),
                                    !0),
                                e =
                                    ((this._a2 = function () {
                                        t || i._2(), (t = !1);
                                    }),
                                    h.documentElement.addEventListener("click", this._a2),
                                    ""),
                                a = null;
                            (this._a3 = function (t) {
                                t.preventDefault(),
                                    "ArrowUp" === t.key || "Up" === t.key || "ArrowDown" === t.key || "Down" === t.key
                                        ? i._q(t.key)
                                        : "Enter" === t.key
                                        ? i._r()
                                        : "Escape" === t.key
                                        ? i._2()
                                        : /^[a-zA-ZÀ-ÿ ]$/.test(t.key) &&
                                          (a && clearTimeout(a),
                                          (e += t.key.toLowerCase()),
                                          i._s(e),
                                          (a = setTimeout(function () {
                                              e = "";
                                          }, 1e3)));
                            }),
                                h.addEventListener("keydown", this._a3);
                        },
                    },
                    {
                        key: "_q",
                        value: function (t) {
                            var i = "ArrowUp" === t || "Up" === t ? this.c.previousElementSibling : this.c.nextElementSibling;
                            i && (i.classList.contains("iti__divider") && (i = "ArrowUp" === t || "Up" === t ? i.previousElementSibling : i.nextElementSibling), this._x(i, !0));
                        },
                    },
                    {
                        key: "_r",
                        value: function () {
                            this.c && this._1(this.c);
                        },
                    },
                    {
                        key: "_s",
                        value: function (t) {
                            for (var i = 0; i < this.p.length; i++)
                                if (this._t(this.p[i].name, t)) {
                                    var e = this.m.querySelector("#iti-item-".concat(this.p[i].iso2));
                                    this._x(e, !1), this._3(e, !0);
                                    break;
                                }
                        },
                    },
                    {
                        key: "_t",
                        value: function (t, i) {
                            return t.substr(0, i.length).toLowerCase() === i;
                        },
                    },
                    {
                        key: "_u",
                        value: function (t) {
                            var i, e, a;
                            this.d.formatOnDisplay &&
                                d.intlTelInputUtils &&
                                this.s &&
                                ((i = !this.d.separateDialCode && (this.d.nationalMode || "+" !== t.charAt(0))),
                                (e = (a = intlTelInputUtils.numberFormat).NATIONAL),
                                (a = a.INTERNATIONAL),
                                (t = intlTelInputUtils.formatNumber(t, this.s.iso2, i ? e : a))),
                                (t = this._7(t)),
                                (this.a.value = t);
                        },
                    },
                    {
                        key: "_v",
                        value: function (t) {
                            var i = this.s.dialCode,
                                e =
                                    (t && this.d.nationalMode && "1" === i && "+" !== t.charAt(0) && ("1" !== t.charAt(0) && (t = "1".concat(t)), (t = "+".concat(t))),
                                    this.d.separateDialCode && i && "+" !== t.charAt(0) && (t = "+".concat(i).concat(t)),
                                    this._5(t)),
                                a = this._m(t),
                                n = null;
                            if (e) {
                                var s = this.q[this._m(e)],
                                    e = -1 !== s.indexOf(this.s.iso2) && a.length <= e.length - 1;
                                if (!(("1" === i && this._w(a)) || e))
                                    for (var o = 0; o < s.length; o++)
                                        if (s[o]) {
                                            n = s[o];
                                            break;
                                        }
                            } else "+" === t.charAt(0) && a.length ? (n = "") : (t && "+" !== t) || (n = this.j);
                            return null !== n && this._z(n);
                        },
                    },
                    {
                        key: "_w",
                        value: function (t) {
                            var t = this._m(t);
                            return "1" === t.charAt(0) && ((t = t.substr(1, 3)), -1 !== p.indexOf(t));
                        },
                    },
                    {
                        key: "_x",
                        value: function (t, i) {
                            var e = this.c;
                            e && e.classList.remove("iti__highlight"), (this.c = t), this.c.classList.add("iti__highlight"), i && this.c.focus();
                        },
                    },
                    {
                        key: "_y",
                        value: function (t, i, e) {
                            for (var a = i ? s : this.p, n = 0; n < a.length; n++) if (a[n].iso2 === t) return a[n];
                            if (e) return null;
                            throw new Error("No country data for '".concat(t, "'"));
                        },
                    },
                    {
                        key: "_z",
                        value: function (t) {
                            var i = this.s.iso2 ? this.s : {},
                                e =
                                    ((this.s = t ? this._y(t, !1, !1) : {}),
                                    this.s.iso2 && (this.j = this.s.iso2),
                                    this.l.setAttribute("class", "iti__flag iti__".concat(t)),
                                    t ? "".concat(this.s.name, ": +").concat(this.s.dialCode) : "Unknown");
                            return (
                                this.selectedFlag.setAttribute("title", e),
                                this.d.separateDialCode &&
                                    ((e = this.s.dialCode ? "+".concat(this.s.dialCode) : ""),
                                    (this.t.innerHTML = e),
                                    (e = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth()),
                                    (this.a.style.paddingLeft = "".concat(e + 6, "px"))),
                                this._0(),
                                this.d.allowDropdown &&
                                    ((e = this.b) && (e.classList.remove("iti__active"), e.setAttribute("aria-selected", "false")), t) &&
                                    ((e = this.m.querySelector("#iti-item-".concat(t))).setAttribute("aria-selected", "true"),
                                    e.classList.add("iti__active"),
                                    (this.b = e),
                                    this.m.setAttribute("aria-activedescendant", e.getAttribute("id"))),
                                i.iso2 !== t
                            );
                        },
                    },
                    {
                        key: "_getHiddenSelectedFlagWidth",
                        value: function () {
                            var t = this.a.parentNode.cloneNode(),
                                i = ((t.style.visibility = "hidden"), h.body.appendChild(t), this.selectedFlag.cloneNode(!0)),
                                i = (t.appendChild(i), i.offsetWidth);
                            return t.parentNode.removeChild(t), i;
                        },
                    },
                    {
                        key: "_0",
                        value: function () {
                            var t = "aggressive" === this.d.autoPlaceholder || (!this.e && "polite" === this.d.autoPlaceholder);
                            d.intlTelInputUtils &&
                                t &&
                                ((t = intlTelInputUtils.numberType[this.d.placeholderNumberType]),
                                (t = this.s.iso2 ? intlTelInputUtils.getExampleNumber(this.s.iso2, this.d.nationalMode, t) : ""),
                                (t = this._7(t)),
                                "function" == typeof this.d.customPlaceholder && (t = this.d.customPlaceholder(t, this.s)),
                                this.a.setAttribute("placeholder", t));
                        },
                    },
                    {
                        key: "_1",
                        value: function (t) {
                            var i = this._z(t.getAttribute("data-country-code")),
                                t = (this._2(), this._4(t.getAttribute("data-dial-code"), !0), this.a.focus(), this.a.value.length);
                            this.a.setSelectionRange(t, t), i && this._8();
                        },
                    },
                    {
                        key: "_2",
                        value: function () {
                            this.m.classList.add("iti__hide"),
                                this.m.setAttribute("aria-expanded", "false"),
                                this.u.classList.remove("iti__arrow--up"),
                                h.removeEventListener("keydown", this._a3),
                                h.documentElement.removeEventListener("click", this._a2),
                                this.m.removeEventListener("mouseover", this._a0),
                                this.m.removeEventListener("click", this._a1),
                                this.d.dropdownContainer && (this.g || d.removeEventListener("scroll", this._a4), this.dropdown.parentNode) && this.dropdown.parentNode.removeChild(this.dropdown),
                                this._m2("close:countrydropdown");
                        },
                    },
                    {
                        key: "_3",
                        value: function (t, i) {
                            var e = this.m,
                                a = d.pageYOffset || h.documentElement.scrollTop,
                                n = e.offsetHeight,
                                s = e.getBoundingClientRect().top + a,
                                o = s + n,
                                r = t.offsetHeight,
                                t = t.getBoundingClientRect().top + a,
                                a = t + r,
                                l = t - s + e.scrollTop,
                                u = n / 2 - r / 2;
                            t < s ? (i && (l -= u), (e.scrollTop = l)) : o < a && (i && (l += u), (e.scrollTop = l - (n - r)));
                        },
                    },
                    {
                        key: "_4",
                        value: function (t, i) {
                            var e = this.a.value,
                                t = "+".concat(t);
                            if ("+" === e.charAt(0))
                                var a = this._5(e),
                                    a = a ? e.replace(a, t) : t;
                            else {
                                if (this.d.nationalMode || this.d.separateDialCode) return;
                                if (e) a = t + e;
                                else {
                                    if (!i && this.d.autoHideDialCode) return;
                                    a = t;
                                }
                            }
                            this.a.value = a;
                        },
                    },
                    {
                        key: "_5",
                        value: function (t) {
                            var i = "";
                            if ("+" === t.charAt(0))
                                for (var e = "", a = 0; a < t.length; a++) {
                                    var n = t.charAt(a);
                                    if (!isNaN(parseInt(n, 10)) && ((e += n), this.q[e] && (i = t.substr(0, a + 1)), e.length === this.dialCodeMaxLen)) break;
                                }
                            return i;
                        },
                    },
                    {
                        key: "_6",
                        value: function () {
                            var t = this.a.value.trim(),
                                i = this.s.dialCode,
                                e = this._m(t);
                            return (this.d.separateDialCode && "+" !== t.charAt(0) && i && e ? "+".concat(i) : "") + t;
                        },
                    },
                    {
                        key: "_7",
                        value: function (t) {
                            var i;
                            return this.d.separateDialCode && this._5(t) && ((i = " " === t[(i = "+".concat(this.s.dialCode)).length] || "-" === t[i.length] ? i.length + 1 : i.length), (t = t.substr(i))), this._j2(t);
                        },
                    },
                    {
                        key: "_8",
                        value: function () {
                            this._m2("countrychange");
                        },
                    },
                    {
                        key: "handleAutoCountry",
                        value: function () {
                            "auto" === this.d.initialCountry && ((this.j = d.intlTelInputGlobals.autoCountry), this.a.value || this.setCountry(this.j), this.h());
                        },
                    },
                    {
                        key: "handleUtils",
                        value: function () {
                            d.intlTelInputUtils && (this.a.value && this._u(this.a.value), this._0()), this.i0();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            var t = this.a.form,
                                i =
                                    (this.d.allowDropdown &&
                                        (this._2(), this.selectedFlag.removeEventListener("click", this._a10), this.k.removeEventListener("keydown", this._a11), (i = this._i1())) &&
                                        i.removeEventListener("click", this._a9),
                                    this.hiddenInput && t && t.removeEventListener("submit", this._a14),
                                    this.d.autoHideDialCode && (t && t.removeEventListener("submit", this._a8), this.a.removeEventListener("blur", this._a8)),
                                    this.a.removeEventListener("keyup", this._a12),
                                    this.a.removeEventListener("cut", this._a13),
                                    this.a.removeEventListener("paste", this._a13),
                                    this.a.removeAttribute("data-intl-tel-input-id"),
                                    this.a.parentNode);
                            i.parentNode.insertBefore(this.a, i), i.parentNode.removeChild(i), delete d.intlTelInputGlobals.instances[this.id];
                        },
                    },
                    {
                        key: "getExtension",
                        value: function () {
                            return d.intlTelInputUtils ? intlTelInputUtils.getExtension(this._6(), this.s.iso2) : "";
                        },
                    },
                    {
                        key: "getNumber",
                        value: function (t) {
                            var i;
                            return d.intlTelInputUtils ? ((i = this.s.iso2), intlTelInputUtils.formatNumber(this._6(), i, t)) : "";
                        },
                    },
                    {
                        key: "getNumberType",
                        value: function () {
                            return d.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._6(), this.s.iso2) : -99;
                        },
                    },
                    {
                        key: "getSelectedCountryData",
                        value: function () {
                            return this.s;
                        },
                    },
                    {
                        key: "getValidationError",
                        value: function () {
                            var t;
                            return d.intlTelInputUtils ? ((t = this.s.iso2), intlTelInputUtils.getValidationError(this._6(), t)) : -99;
                        },
                    },
                    {
                        key: "isValidNumber",
                        value: function () {
                            var t = this._6().trim(),
                                i = this.d.nationalMode ? this.s.iso2 : "";
                            return d.intlTelInputUtils ? intlTelInputUtils.isValidNumber(t, i) : null;
                        },
                    },
                    {
                        key: "setCountry",
                        value: function (t) {
                            t = t.toLowerCase();
                            this.l.classList.contains("iti__".concat(t)) || (this._z(t), this._4(this.s.dialCode, !1), this._8());
                        },
                    },
                    {
                        key: "setNumber",
                        value: function (t) {
                            var i = this._v(t);
                            this._u(t), i && this._8();
                        },
                    },
                    {
                        key: "setPlaceholderNumberType",
                        value: function (t) {
                            (this.d.placeholderNumberType = t), this._0();
                        },
                    },
                ]) && t(a.prototype, r),
                l && t(a, l),
                _);
        function _(t, i) {
            var e = this;
            if (!(this instanceof _)) throw new TypeError("Cannot call a class as a function");
            (this.id = u++), (this.a = t), (this.b = null), (this.c = null);
            var a = i || {};
            (this.d = {}),
                n(c, function (t, i) {
                    e.d[t] = a.hasOwnProperty(t) ? a[t] : i;
                }),
                (this.e = Boolean(t.getAttribute("placeholder")));
        }
        function f(t, i, e) {
            var a = h.createElement("script");
            (a.onload = function () {
                o("handleUtils"), i && i();
            }),
                (a.onerror = function () {
                    o("rejectUtilsScriptPromise"), e && e();
                }),
                (a.className = "iti-load-utils"),
                (a.async = !0),
                (a.src = t),
                h.body.appendChild(a);
        }
        return (
            (d.intlTelInputGlobals.getCountryData = function () {
                return s;
            }),
            (d.intlTelInputGlobals.loadUtils = function (e) {
                if (!d.intlTelInputUtils && !d.intlTelInputGlobals.startedLoadingUtilsScript) {
                    if (((d.intlTelInputGlobals.startedLoadingUtilsScript = !0), "undefined" != typeof Promise))
                        return new Promise(function (t, i) {
                            return f(e, t, i);
                        });
                    f(e);
                }
                return null;
            }),
            (d.intlTelInputGlobals.defaults = c),
            (d.intlTelInputGlobals.version = "16.0.8"),
            function (t, i) {
                i = new v(t, i);
                return i._init(), t.setAttribute("data-intl-tel-input-id", i.id), (d.intlTelInputGlobals.instances[i.id] = i);
            }
        );
    })(window, document);
    "object" == typeof module && module.exports ? (module.exports = t) : (window.intlTelInput = t);
})();
!(function (u) {
    var a = !0;
    (u.flexslider = function (p, e) {
        var t,
            m = u(p),
            s = (void 0 === e.rtl && "rtl" == u("html").attr("dir") && (e.rtl = !0), (m.vars = u.extend({}, u.flexslider.defaults, e)), m.vars.namespace),
            f = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            o = ("ontouchstart" in window || f || (window.DocumentTouch && document instanceof DocumentTouch)) && m.vars.touch,
            r = "click touchend MSPointerUp keyup",
            l = "",
            g = "vertical" === m.vars.direction,
            h = m.vars.reverse,
            x = 0 < m.vars.itemWidth,
            S = "fade" === m.vars.animation,
            c = "" !== m.vars.asNavFor,
            d = {};
        u.data(p, "flexslider", m),
            (d = {
                init: function () {
                    (m.animating = !1),
                        (m.currentSlide = parseInt(m.vars.startAt || 0, 10)),
                        isNaN(m.currentSlide) && (m.currentSlide = 0),
                        (m.animatingTo = m.currentSlide),
                        (m.atEnd = 0 === m.currentSlide || m.currentSlide === m.last),
                        (m.containerSelector = m.vars.selector.substr(0, m.vars.selector.search(" "))),
                        (m.slides = u(m.vars.selector, m)),
                        (m.container = u(m.containerSelector, m)),
                        (m.count = m.slides.length),
                        (m.syncExists = 0 < u(m.vars.sync).length),
                        "slide" === m.vars.animation && (m.vars.animation = "swing"),
                        (m.prop = g ? "top" : m.vars.rtl ? "marginRight" : "marginLeft"),
                        (m.args = {}),
                        (m.manualPause = !1),
                        (m.stopped = !1),
                        (m.started = !1),
                        (m.startTimeout = null),
                        (m.transitions =
                            !m.vars.video &&
                            !S &&
                            m.vars.useCSS &&
                            (function () {
                                var e,
                                    t = document.createElement("div"),
                                    a = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                                for (e in a) if (void 0 !== t.style[a[e]]) return (m.pfx = a[e].replace("Perspective", "").toLowerCase()), (m.prop = "-" + m.pfx + "-transform"), !0;
                                return !1;
                            })()),
                        (m.isFirefox = -1 < navigator.userAgent.toLowerCase().indexOf("firefox")),
                        (m.ensureAnimationEnd = "") !== m.vars.controlsContainer && (m.controlsContainer = 0 < u(m.vars.controlsContainer).length && u(m.vars.controlsContainer)),
                        "" !== m.vars.manualControls && (m.manualControls = 0 < u(m.vars.manualControls).length && u(m.vars.manualControls)),
                        "" !== m.vars.customDirectionNav && (m.customDirectionNav = 2 === u(m.vars.customDirectionNav).length && u(m.vars.customDirectionNav)),
                        m.vars.randomize &&
                            (m.slides.sort(function () {
                                return Math.round(Math.random()) - 0.5;
                            }),
                            m.container.empty().append(m.slides)),
                        m.doMath(),
                        m.setup("init"),
                        m.vars.controlNav && d.controlNav.setup(),
                        m.vars.directionNav && d.directionNav.setup(),
                        m.vars.keyboard &&
                            (1 === u(m.containerSelector).length || m.vars.multipleKeyboard) &&
                            u(document).bind("keyup", function (e) {
                                var e = e.keyCode;
                                m.animating ||
                                    (39 !== e && 37 !== e) ||
                                    ((e = m.vars.rtl ? (37 === e ? m.getTarget("next") : 39 === e && m.getTarget("prev")) : 39 === e ? m.getTarget("next") : 37 === e && m.getTarget("prev")), m.flexAnimate(e, m.vars.pauseOnAction));
                            }),
                        m.vars.mousewheel &&
                            m.bind("mousewheel", function (e, t, a, n) {
                                e.preventDefault();
                                e = t < 0 ? m.getTarget("next") : m.getTarget("prev");
                                m.flexAnimate(e, m.vars.pauseOnAction);
                            }),
                        m.vars.pausePlay && d.pausePlay.setup(),
                        m.vars.slideshow && m.vars.pauseInvisible && d.pauseInvisible.init(),
                        m.vars.slideshow &&
                            (m.vars.pauseOnHover &&
                                m.hover(
                                    function () {
                                        m.manualPlay || m.manualPause || m.pause();
                                    },
                                    function () {
                                        m.manualPause || m.manualPlay || m.stopped || m.play();
                                    }
                                ),
                            (m.vars.pauseInvisible && d.pauseInvisible.isHidden()) || (0 < m.vars.initDelay ? (m.startTimeout = setTimeout(m.play, m.vars.initDelay)) : m.play())),
                        c && d.asNav.setup(),
                        o && m.vars.touch && d.touch(),
                        (S && !m.vars.smoothHeight) || u(window).bind("resize orientationchange focus", d.resize),
                        m.find("img").attr("draggable", "false"),
                        setTimeout(function () {
                            m.vars.start(m);
                        }, 200);
                },
                asNav: {
                    setup: function () {
                        (m.asNav = !0),
                            (m.animatingTo = Math.floor(m.currentSlide / m.move)),
                            (m.currentItem = m.currentSlide),
                            m.slides
                                .removeClass(s + "active-slide")
                                .eq(m.currentItem)
                                .addClass(s + "active-slide"),
                            f
                                ? (p._slider = m).slides.each(function () {
                                      var e = this;
                                      (e._gesture = new MSGesture()),
                                          (e._gesture.target = e).addEventListener(
                                              "MSPointerDown",
                                              function (e) {
                                                  e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId);
                                              },
                                              !1
                                          ),
                                          e.addEventListener("MSGestureTap", function (e) {
                                              e.preventDefault();
                                              var e = u(this),
                                                  t = e.index();
                                              u(m.vars.asNavFor).data("flexslider").animating || e.hasClass("active") || ((m.direction = m.currentItem < t ? "next" : "prev"), m.flexAnimate(t, m.vars.pauseOnAction, !1, !0, !0));
                                          });
                                  })
                                : m.slides.on(r, function (e) {
                                      e.preventDefault();
                                      var e = u(this),
                                          t = e.index();
                                      (m.vars.rtl ? -1 * (e.offset().right - u(m).scrollLeft()) : e.offset().left - u(m).scrollLeft()) <= 0 && e.hasClass(s + "active-slide")
                                          ? m.flexAnimate(m.getTarget("prev"), !0)
                                          : u(m.vars.asNavFor).data("flexslider").animating || e.hasClass(s + "active-slide") || ((m.direction = m.currentItem < t ? "next" : "prev"), m.flexAnimate(t, m.vars.pauseOnAction, !1, !0, !0));
                                  });
                    },
                },
                controlNav: {
                    setup: function () {
                        m.manualControls ? d.controlNav.setupManual() : d.controlNav.setupPaging();
                    },
                    setupPaging: function () {
                        var e,
                            t = "thumbnails" === m.vars.controlNav ? "control-thumbs" : "control-paging",
                            a = 1;
                        if (((m.controlNavScaffold = u('<ol class="' + s + "control-nav " + s + t + '"></ol>')), 1 < m.pagingCount))
                            for (var n = 0; n < m.pagingCount; n++) {
                                void 0 === (i = m.slides.eq(n)).attr("data-thumb-alt") && i.attr("data-thumb-alt", ""),
                                    (e = u("<a></a>").attr("href", "#").text(a)),
                                    "thumbnails" === m.vars.controlNav && (e = u("<img/>").attr("src", i.attr("data-thumb"))),
                                    "" !== i.attr("data-thumb-alt") && e.attr("alt", i.attr("data-thumb-alt")),
                                    "thumbnails" === m.vars.controlNav &&
                                        !0 === m.vars.thumbCaptions &&
                                        "" !== (i = i.attr("data-thumbcaption")) &&
                                        void 0 !== i &&
                                        ((i = u("<span></span>")
                                            .addClass(s + "caption")
                                            .text(i)),
                                        e.append(i));
                                var i = u("<li>");
                                e.appendTo(i), i.append("</li>"), m.controlNavScaffold.append(i), a++;
                            }
                        (m.controlsContainer ? u(m.controlsContainer) : m).append(m.controlNavScaffold),
                            d.controlNav.set(),
                            d.controlNav.active(),
                            m.controlNavScaffold.delegate("a, img", r, function (e) {
                                var t, a;
                                e.preventDefault(),
                                    ("" !== l && l !== e.type) || ((t = u(this)), (a = m.controlNav.index(t)), t.hasClass(s + "active")) || ((m.direction = a > m.currentSlide ? "next" : "prev"), m.flexAnimate(a, m.vars.pauseOnAction)),
                                    "" === l && (l = e.type),
                                    d.setToClearWatchedEvent();
                            });
                    },
                    setupManual: function () {
                        (m.controlNav = m.manualControls),
                            d.controlNav.active(),
                            m.controlNav.bind(r, function (e) {
                                var t, a;
                                e.preventDefault(),
                                    ("" !== l && l !== e.type) ||
                                        ((t = u(this)), (a = m.controlNav.index(t)), t.hasClass(s + "active")) ||
                                        (a > m.currentSlide ? (m.direction = "next") : (m.direction = "prev"), m.flexAnimate(a, m.vars.pauseOnAction)),
                                    "" === l && (l = e.type),
                                    d.setToClearWatchedEvent();
                            });
                    },
                    set: function () {
                        var e = "thumbnails" === m.vars.controlNav ? "img" : "a";
                        m.controlNav = u("." + s + "control-nav li " + e, m.controlsContainer || m);
                    },
                    active: function () {
                        m.controlNav
                            .removeClass(s + "active")
                            .eq(m.animatingTo)
                            .addClass(s + "active");
                    },
                    update: function (e, t) {
                        1 < m.pagingCount && "add" === e ? m.controlNavScaffold.append(u('<li><a href="#">' + m.count + "</a></li>")) : (1 === m.pagingCount ? m.controlNavScaffold.find("li") : m.controlNav.eq(t).closest("li")).remove(),
                            d.controlNav.set(),
                            1 < m.pagingCount && m.pagingCount !== m.controlNav.length ? m.update(t, e) : d.controlNav.active();
                    },
                },
                directionNav: {
                    setup: function () {
                        var e = u(
                            '<ul class="' +
                                s +
                                'direction-nav"><li class="' +
                                s +
                                'nav-prev"><a class="' +
                                s +
                                'prev" href="#">' +
                                m.vars.prevText +
                                '</a></li><li class="' +
                                s +
                                'nav-next"><a class="' +
                                s +
                                'next" href="#">' +
                                m.vars.nextText +
                                "</a></li></ul>"
                        );
                        m.customDirectionNav
                            ? (m.directionNav = m.customDirectionNav)
                            : m.controlsContainer
                            ? (u(m.controlsContainer).append(e), (m.directionNav = u("." + s + "direction-nav li a", m.controlsContainer)))
                            : (m.append(e), (m.directionNav = u("." + s + "direction-nav li a", m))),
                            d.directionNav.update(),
                            m.directionNav.bind(r, function (e) {
                                var t;
                                e.preventDefault(),
                                    ("" !== l && l !== e.type) || ((t = u(this).hasClass(s + "next") ? m.getTarget("next") : m.getTarget("prev")), m.flexAnimate(t, m.vars.pauseOnAction)),
                                    "" === l && (l = e.type),
                                    d.setToClearWatchedEvent();
                            });
                    },
                    update: function () {
                        var e = s + "disabled";
                        1 === m.pagingCount
                            ? m.directionNav.addClass(e).attr("tabIndex", "-1")
                            : m.vars.animationLoop
                            ? m.directionNav.removeClass(e).removeAttr("tabIndex")
                            : 0 === m.animatingTo
                            ? m.directionNav
                                  .removeClass(e)
                                  .filter("." + s + "prev")
                                  .addClass(e)
                                  .attr("tabIndex", "-1")
                            : m.animatingTo === m.last
                            ? m.directionNav
                                  .removeClass(e)
                                  .filter("." + s + "next")
                                  .addClass(e)
                                  .attr("tabIndex", "-1")
                            : m.directionNav.removeClass(e).removeAttr("tabIndex");
                    },
                },
                pausePlay: {
                    setup: function () {
                        var e = u('<div class="' + s + 'pauseplay"><a href="#"></a></div>');
                        m.controlsContainer ? (m.controlsContainer.append(e), (m.pausePlay = u("." + s + "pauseplay a", m.controlsContainer))) : (m.append(e), (m.pausePlay = u("." + s + "pauseplay a", m))),
                            d.pausePlay.update(m.vars.slideshow ? s + "pause" : s + "play"),
                            m.pausePlay.bind(r, function (e) {
                                e.preventDefault(),
                                    ("" !== l && l !== e.type) || (u(this).hasClass(s + "pause") ? ((m.manualPause = !0), (m.manualPlay = !1), m.pause()) : ((m.manualPause = !1), (m.manualPlay = !0), m.play())),
                                    "" === l && (l = e.type),
                                    d.setToClearWatchedEvent();
                            });
                    },
                    update: function (e) {
                        "play" === e
                            ? m.pausePlay
                                  .removeClass(s + "pause")
                                  .addClass(s + "play")
                                  .html(m.vars.playText)
                            : m.pausePlay
                                  .removeClass(s + "play")
                                  .addClass(s + "pause")
                                  .html(m.vars.pauseText);
                    },
                },
                touch: function () {
                    var n,
                        i,
                        r,
                        s,
                        o,
                        l,
                        c,
                        d,
                        u = !1,
                        t = 0,
                        a = 0,
                        v = 0;
                    f
                        ? ((p.style.msTouchAction = "none"),
                          (p._gesture = new MSGesture()),
                          (p._gesture.target = p).addEventListener(
                              "MSPointerDown",
                              function (e) {
                                  e.stopPropagation(),
                                      m.animating
                                          ? e.preventDefault()
                                          : (m.pause(),
                                            p._gesture.addPointer(e.pointerId),
                                            (v = 0),
                                            (s = g ? m.h : m.w),
                                            (l = Number(new Date())),
                                            (r =
                                                x && h && m.animatingTo === m.last
                                                    ? 0
                                                    : x && h
                                                    ? m.limit - (m.itemW + m.vars.itemMargin) * m.move * m.animatingTo
                                                    : x && m.currentSlide === m.last
                                                    ? m.limit
                                                    : x
                                                    ? (m.itemW + m.vars.itemMargin) * m.move * m.currentSlide
                                                    : h
                                                    ? (m.last - m.currentSlide + m.cloneOffset) * s
                                                    : (m.currentSlide + m.cloneOffset) * s));
                              },
                              !1
                          ),
                          (p._slider = m),
                          p.addEventListener(
                              "MSGestureChange",
                              function (e) {
                                  e.stopPropagation();
                                  var t,
                                      a,
                                      n = e.target._slider;
                                  n &&
                                      ((t = -e.translationX),
                                      (a = -e.translationY),
                                      (v += g ? a : t),
                                      (o = (n.vars.rtl ? -1 : 1) * v),
                                      (u = g ? Math.abs(v) < Math.abs(-t) : Math.abs(v) < Math.abs(-a)),
                                      e.detail === e.MSGESTURE_FLAG_INERTIA
                                          ? setImmediate(function () {
                                                p._gesture.stop();
                                            })
                                          : (!u || 500 < Number(new Date()) - l) &&
                                            (e.preventDefault(), !S) &&
                                            n.transitions &&
                                            (n.vars.animationLoop || (o = v / ((0 === n.currentSlide && v < 0) || (n.currentSlide === n.last && 0 < v) ? Math.abs(v) / s + 2 : 1)), n.setProps(r + o, "setTouch")));
                              },
                              !1
                          ),
                          p.addEventListener(
                              "MSGestureEnd",
                              function (e) {
                                  var t, a;
                                  e.stopPropagation(),
                                      (e = e.target._slider) &&
                                          (e.animatingTo !== e.currentSlide ||
                                              u ||
                                              null === o ||
                                              ((a = 0 < (t = h ? -o : o) ? e.getTarget("next") : e.getTarget("prev")),
                                              e.canAdvance(a) && ((Number(new Date()) - l < 550 && 50 < Math.abs(t)) || Math.abs(t) > s / 2)
                                                  ? e.flexAnimate(a, e.vars.pauseOnAction)
                                                  : S || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)),
                                          (r = o = i = n = null),
                                          (v = 0));
                              },
                              !1
                          ))
                        : ((c = function (e) {
                              (t = e.touches[0].pageX), (a = e.touches[0].pageY), (o = g ? n - a : (m.vars.rtl ? -1 : 1) * (n - t));
                              (!(u = g ? Math.abs(o) < Math.abs(t - i) : Math.abs(o) < Math.abs(a - i)) || 500 < Number(new Date()) - l) &&
                                  (e.preventDefault(), !S) &&
                                  m.transitions &&
                                  (m.vars.animationLoop || (o /= (0 === m.currentSlide && o < 0) || (m.currentSlide === m.last && 0 < o) ? Math.abs(o) / s + 2 : 1), m.setProps(r + o, "setTouch"));
                          }),
                          (d = function (e) {
                              var t, a;
                              p.removeEventListener("touchmove", c, !1),
                                  m.animatingTo !== m.currentSlide ||
                                      u ||
                                      null === o ||
                                      ((a = 0 < (t = h ? -o : o) ? m.getTarget("next") : m.getTarget("prev")),
                                      m.canAdvance(a) && ((Number(new Date()) - l < 550 && 50 < Math.abs(t)) || Math.abs(t) > s / 2) ? m.flexAnimate(a, m.vars.pauseOnAction) : S || m.flexAnimate(m.currentSlide, m.vars.pauseOnAction, !0)),
                                  p.removeEventListener("touchend", d, !1),
                                  (r = o = i = n = null);
                          }),
                          p.addEventListener(
                              "touchstart",
                              function (e) {
                                  m.animating
                                      ? e.preventDefault()
                                      : (!window.navigator.msPointerEnabled && 1 !== e.touches.length) ||
                                        (m.pause(),
                                        (s = g ? m.h : m.w),
                                        (l = Number(new Date())),
                                        (t = e.touches[0].pageX),
                                        (a = e.touches[0].pageY),
                                        (r =
                                            x && h && m.animatingTo === m.last
                                                ? 0
                                                : x && h
                                                ? m.limit - (m.itemW + m.vars.itemMargin) * m.move * m.animatingTo
                                                : x && m.currentSlide === m.last
                                                ? m.limit
                                                : x
                                                ? (m.itemW + m.vars.itemMargin) * m.move * m.currentSlide
                                                : h
                                                ? (m.last - m.currentSlide + m.cloneOffset) * s
                                                : (m.currentSlide + m.cloneOffset) * s),
                                        (n = g ? a : t),
                                        (i = g ? t : a),
                                        p.addEventListener("touchmove", c, !1),
                                        p.addEventListener("touchend", d, !1));
                              },
                              !1
                          ));
                },
                resize: function () {
                    !m.animating &&
                        m.is(":visible") &&
                        (x || m.doMath(),
                        S
                            ? d.smoothHeight()
                            : x
                            ? (m.slides.width(m.computedW), m.update(m.pagingCount), m.setProps())
                            : g
                            ? (m.viewport.height(m.h), m.setProps(m.h, "setTotal"))
                            : (m.vars.smoothHeight && d.smoothHeight(), m.newSlides.width(m.computedW), m.setProps(m.computedW, "setTotal")));
                },
                smoothHeight: function (e) {
                    var t;
                    (g && !S) || ((t = S ? m : m.viewport), e ? t.animate({ height: m.slides.eq(m.animatingTo).innerHeight() }, e) : t.innerHeight(m.slides.eq(m.animatingTo).innerHeight()));
                },
                sync: function (e) {
                    var t = u(m.vars.sync).data("flexslider"),
                        a = m.animatingTo;
                    switch (e) {
                        case "animate":
                            t.flexAnimate(a, m.vars.pauseOnAction, !1, !0);
                            break;
                        case "play":
                            t.playing || t.asNav || t.play();
                            break;
                        case "pause":
                            t.pause();
                    }
                },
                uniqueID: function (e) {
                    return (
                        e
                            .filter("[id]")
                            .add(e.find("[id]"))
                            .each(function () {
                                var e = u(this);
                                e.attr("id", e.attr("id") + "_clone");
                            }),
                        e
                    );
                },
                pauseInvisible: {
                    visProp: null,
                    init: function () {
                        var e = d.pauseInvisible.getHiddenProp();
                        e &&
                            ((e = e.replace(/[H|h]idden/, "") + "visibilitychange"),
                            document.addEventListener(e, function () {
                                d.pauseInvisible.isHidden() ? (m.startTimeout ? clearTimeout(m.startTimeout) : m.pause()) : !m.started && 0 < m.vars.initDelay ? setTimeout(m.play, m.vars.initDelay) : m.play();
                            }));
                    },
                    isHidden: function () {
                        var e = d.pauseInvisible.getHiddenProp();
                        return !!e && document[e];
                    },
                    getHiddenProp: function () {
                        var e = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var t = 0; t < e.length; t++) if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                        return null;
                    },
                },
                setToClearWatchedEvent: function () {
                    clearTimeout(t),
                        (t = setTimeout(function () {
                            l = "";
                        }, 3e3));
                },
            }),
            (m.flexAnimate = function (e, t, a, n, i) {
                if (
                    (m.vars.animationLoop || e === m.currentSlide || (m.direction = e > m.currentSlide ? "next" : "prev"),
                    c && 1 === m.pagingCount && (m.direction = m.currentItem < e ? "next" : "prev"),
                    !m.animating && (m.canAdvance(e, i) || a) && m.is(":visible"))
                ) {
                    if (c && n) {
                        a = u(m.vars.asNavFor).data("flexslider");
                        if (
                            ((m.atEnd = 0 === e || e === m.count - 1),
                            a.flexAnimate(e, !0, !1, !0, i),
                            (m.direction = m.currentItem < e ? "next" : "prev"),
                            (a.direction = m.direction),
                            Math.ceil((e + 1) / m.visible) - 1 === m.currentSlide || 0 === e)
                        )
                            return (
                                (m.currentItem = e),
                                m.slides
                                    .removeClass(s + "active-slide")
                                    .eq(e)
                                    .addClass(s + "active-slide"),
                                !1
                            );
                        (m.currentItem = e),
                            m.slides
                                .removeClass(s + "active-slide")
                                .eq(e)
                                .addClass(s + "active-slide"),
                            (e = Math.floor(e / m.visible));
                    }
                    var r;
                    (m.animating = !0),
                        (m.animatingTo = e),
                        t && m.pause(),
                        m.vars.before(m),
                        m.syncExists && !i && d.sync("animate"),
                        m.vars.controlNav && d.controlNav.active(),
                        x ||
                            m.slides
                                .removeClass(s + "active-slide")
                                .eq(e)
                                .addClass(s + "active-slide"),
                        (m.atEnd = 0 === e || e === m.last),
                        m.vars.directionNav && d.directionNav.update(),
                        e === m.last && (m.vars.end(m), m.vars.animationLoop || m.pause()),
                        S
                            ? o
                                ? (m.slides.eq(m.currentSlide).css({ opacity: 0, zIndex: 1 }), m.slides.eq(e).css({ opacity: 1, zIndex: 2 }), m.wrapup(r))
                                : (m.slides.eq(m.currentSlide).css({ zIndex: 1 }).animate({ opacity: 0 }, m.vars.animationSpeed, m.vars.easing),
                                  m.slides.eq(e).css({ zIndex: 2 }).animate({ opacity: 1 }, m.vars.animationSpeed, m.vars.easing, m.wrapup))
                            : ((r = g ? m.slides.filter(":first").height() : m.computedW),
                              (t = x
                                  ? ((n = m.vars.itemMargin), (a = (m.itemW + n) * m.move * m.animatingTo) > m.limit && 1 !== m.visible ? m.limit : a)
                                  : 0 === m.currentSlide && e === m.count - 1 && m.vars.animationLoop && "next" !== m.direction
                                  ? h
                                      ? (m.count + m.cloneOffset) * r
                                      : 0
                                  : m.currentSlide === m.last && 0 === e && m.vars.animationLoop && "prev" !== m.direction
                                  ? h
                                      ? 0
                                      : (m.count + 1) * r
                                  : h
                                  ? (m.count - 1 - e + m.cloneOffset) * r
                                  : (e + m.cloneOffset) * r),
                              m.setProps(t, "", m.vars.animationSpeed),
                              m.transitions
                                  ? ((m.vars.animationLoop && m.atEnd) || ((m.animating = !1), (m.currentSlide = m.animatingTo)),
                                    m.container.unbind("webkitTransitionEnd transitionend"),
                                    m.container.bind("webkitTransitionEnd transitionend", function () {
                                        clearTimeout(m.ensureAnimationEnd), m.wrapup(r);
                                    }),
                                    clearTimeout(m.ensureAnimationEnd),
                                    (m.ensureAnimationEnd = setTimeout(function () {
                                        m.wrapup(r);
                                    }, m.vars.animationSpeed + 100)))
                                  : m.container.animate(m.args, m.vars.animationSpeed, m.vars.easing, function () {
                                        m.wrapup(r);
                                    })),
                        m.vars.smoothHeight && d.smoothHeight(m.vars.animationSpeed);
                }
            }),
            (m.wrapup = function (e) {
                S || x || (0 === m.currentSlide && m.animatingTo === m.last && m.vars.animationLoop ? m.setProps(e, "jumpEnd") : m.currentSlide === m.last && 0 === m.animatingTo && m.vars.animationLoop && m.setProps(e, "jumpStart")),
                    (m.animating = !1),
                    (m.currentSlide = m.animatingTo),
                    m.vars.after(m);
            }),
            (m.animateSlides = function () {
                !m.animating && a && m.flexAnimate(m.getTarget("next"));
            }),
            (m.pause = function () {
                clearInterval(m.animatedSlides), (m.animatedSlides = null), (m.playing = !1), m.vars.pausePlay && d.pausePlay.update("play"), m.syncExists && d.sync("pause");
            }),
            (m.play = function () {
                m.playing && clearInterval(m.animatedSlides),
                    (m.animatedSlides = m.animatedSlides || setInterval(m.animateSlides, m.vars.slideshowSpeed)),
                    (m.started = m.playing = !0),
                    m.vars.pausePlay && d.pausePlay.update("pause"),
                    m.syncExists && d.sync("play");
            }),
            (m.stop = function () {
                m.pause(), (m.stopped = !0);
            }),
            (m.canAdvance = function (e, t) {
                var a = c ? m.pagingCount - 1 : m.last;
                return !(
                    !t &&
                    (!c || m.currentItem !== m.count - 1 || 0 !== e || "prev" !== m.direction) &&
                    ((c && 0 === m.currentItem && e === m.pagingCount - 1 && "next" !== m.direction) ||
                        (e === m.currentSlide && !c) ||
                        (!m.vars.animationLoop && ((m.atEnd && 0 === m.currentSlide && e === a && "next" !== m.direction) || (m.atEnd && m.currentSlide === a && 0 === e && "next" === m.direction))))
                );
            }),
            (m.getTarget = function (e) {
                return "next" === (m.direction = e) ? (m.currentSlide === m.last ? 0 : m.currentSlide + 1) : 0 === m.currentSlide ? m.last : m.currentSlide - 1;
            }),
            (m.setProps = function (e, t, a) {
                n = e || (m.itemW + m.vars.itemMargin) * m.move * m.animatingTo;
                var n,
                    i =
                        (function () {
                            if (x) return "setTouch" === t ? e : h && m.animatingTo === m.last ? 0 : h ? m.limit - (m.itemW + m.vars.itemMargin) * m.move * m.animatingTo : m.animatingTo === m.last ? m.limit : n;
                            switch (t) {
                                case "setTotal":
                                    return h ? (m.count - 1 - m.currentSlide + m.cloneOffset) * e : (m.currentSlide + m.cloneOffset) * e;
                                case "setTouch":
                                    return e;
                                case "jumpEnd":
                                    return h ? e : m.count * e;
                                case "jumpStart":
                                    return h ? m.count * e : e;
                                default:
                                    return e;
                            }
                        })() *
                            (m.vars.rtl ? 1 : -1) +
                        "px";
                m.transitions &&
                    ((i = m.isFirefox ? (g ? "translate3d(0," + i + ",0)" : "translate3d(" + parseInt(i) + "px,0,0)") : g ? "translate3d(0," + i + ",0)" : "translate3d(" + (m.vars.rtl ? -1 : 1) * parseInt(i) + "px,0,0)"),
                    m.container.css("-" + m.pfx + "-transition-duration", (a = void 0 !== a ? a / 1e3 + "s" : "0s")),
                    m.container.css("transition-duration", a)),
                    (m.args[m.prop] = i),
                    (!m.transitions && void 0 !== a) || m.container.css(m.args),
                    m.container.css("transform", i);
            }),
            (m.setup = function (e) {
                var t, a;
                S
                    ? (m.vars.rtl ? m.slides.css({ width: "100%", float: "right", marginLeft: "-100%", position: "relative" }) : m.slides.css({ width: "100%", float: "left", marginRight: "-100%", position: "relative" }),
                      "init" === e &&
                          (o
                              ? m.slides
                                    .css({ opacity: 0, display: "block", webkitTransition: "opacity " + m.vars.animationSpeed / 1e3 + "s ease", zIndex: 1 })
                                    .eq(m.currentSlide)
                                    .css({ opacity: 1, zIndex: 2 })
                              : 0 == m.vars.fadeFirstSlide
                              ? m.slides.css({ opacity: 0, display: "block", zIndex: 1 }).eq(m.currentSlide).css({ zIndex: 2 }).css({ opacity: 1 })
                              : m.slides.css({ opacity: 0, display: "block", zIndex: 1 }).eq(m.currentSlide).css({ zIndex: 2 }).animate({ opacity: 1 }, m.vars.animationSpeed, m.vars.easing)),
                      m.vars.smoothHeight && d.smoothHeight())
                    : ("init" === e &&
                          ((m.viewport = u('<div class="' + s + 'viewport"></div>')
                              .css({ overflow: "hidden", position: "relative" })
                              .appendTo(m)
                              .append(m.container)),
                          (m.cloneCount = 0),
                          (m.cloneOffset = 0),
                          h) &&
                          ((a = u.makeArray(m.slides).reverse()), (m.slides = u(a)), m.container.empty().append(m.slides)),
                      m.vars.animationLoop &&
                          !x &&
                          ((m.cloneCount = 2),
                          (m.cloneOffset = 1),
                          "init" !== e && m.container.find(".clone").remove(),
                          m.container.append(d.uniqueID(m.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(d.uniqueID(m.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))),
                      (m.newSlides = u(m.vars.selector, m)),
                      (t = h ? m.count - 1 - m.currentSlide + m.cloneOffset : m.currentSlide + m.cloneOffset),
                      g && !x
                          ? (m.container
                                .height(200 * (m.count + m.cloneCount) + "%")
                                .css("position", "absolute")
                                .width("100%"),
                            setTimeout(
                                function () {
                                    m.newSlides.css({ display: "block" }), m.doMath(), m.viewport.height(m.h), m.setProps(t * m.h, "init");
                                },
                                "init" === e ? 100 : 0
                            ))
                          : (m.container.width(200 * (m.count + m.cloneCount) + "%"),
                            m.setProps(t * m.computedW, "init"),
                            setTimeout(
                                function () {
                                    m.doMath(),
                                        m.vars.rtl && m.isFirefox
                                            ? m.newSlides.css({ width: m.computedW, marginRight: m.computedM, float: "right", display: "block" })
                                            : m.newSlides.css({ width: m.computedW, marginRight: m.computedM, float: "left", display: "block" }),
                                        m.vars.smoothHeight && d.smoothHeight();
                                },
                                "init" === e ? 100 : 0
                            ))),
                    x ||
                        m.slides
                            .removeClass(s + "active-slide")
                            .eq(m.currentSlide)
                            .addClass(s + "active-slide"),
                    m.vars.init(m);
            }),
            (m.doMath = function () {
                var e = m.slides.first(),
                    t = m.vars.itemMargin,
                    a = m.vars.minItems,
                    n = m.vars.maxItems;
                (m.w = (void 0 === m.viewport ? m : m.viewport).width()),
                    m.isFirefox && (m.w = m.width()),
                    (m.h = e.height()),
                    (m.boxPadding = e.outerWidth() - e.width()),
                    x
                        ? ((m.itemT = m.vars.itemWidth + t),
                          (m.itemM = t),
                          (m.minW = a ? a * m.itemT : m.w),
                          (m.maxW = n ? n * m.itemT - t : m.w),
                          (m.itemW = m.minW > m.w ? (m.w - t * (a - 1)) / a : m.maxW < m.w ? (m.w - t * (n - 1)) / n : m.vars.itemWidth > m.w ? m.w : m.vars.itemWidth),
                          (m.visible = Math.floor(m.w / m.itemW)),
                          (m.move = 0 < m.vars.move && m.vars.move < m.visible ? m.vars.move : m.visible),
                          (m.pagingCount = Math.ceil((m.count - m.visible) / m.move + 1)),
                          (m.last = m.pagingCount - 1),
                          (m.limit = 1 === m.pagingCount ? 0 : m.vars.itemWidth > m.w ? m.itemW * (m.count - 1) + t * (m.count - 1) : (m.itemW + t) * m.count - m.w - t))
                        : ((m.itemW = m.w), (m.itemM = t), (m.pagingCount = m.count), (m.last = m.count - 1)),
                    (m.computedW = m.itemW - m.boxPadding),
                    (m.computedM = m.itemM);
            }),
            (m.update = function (e, t) {
                m.doMath(),
                    x || (e < m.currentSlide ? (m.currentSlide += 1) : e <= m.currentSlide && 0 !== e && --m.currentSlide, (m.animatingTo = m.currentSlide)),
                    m.vars.controlNav &&
                        !m.manualControls &&
                        (("add" === t && !x) || m.pagingCount > m.controlNav.length
                            ? d.controlNav.update("add")
                            : (("remove" === t && !x) || m.pagingCount < m.controlNav.length) && (x && m.currentSlide > m.last && (--m.currentSlide, --m.animatingTo), d.controlNav.update("remove", m.last))),
                    m.vars.directionNav && d.directionNav.update();
            }),
            (m.addSlide = function (e, t) {
                e = u(e);
                (m.count += 1),
                    (m.last = m.count - 1),
                    g && h ? (void 0 !== t ? m.slides.eq(m.count - t).after(e) : m.container.prepend(e)) : void 0 !== t ? m.slides.eq(t).before(e) : m.container.append(e),
                    m.update(t, "add"),
                    (m.slides = u(m.vars.selector + ":not(.clone)", m)),
                    m.setup(),
                    m.vars.added(m);
            }),
            (m.removeSlide = function (e) {
                var t = isNaN(e) ? m.slides.index(u(e)) : e;
                --m.count,
                    (m.last = m.count - 1),
                    (isNaN(e) ? u(e, m.slides) : g && h ? m.slides.eq(m.last) : m.slides.eq(e)).remove(),
                    m.doMath(),
                    m.update(t, "remove"),
                    (m.slides = u(m.vars.selector + ":not(.clone)", m)),
                    m.setup(),
                    m.vars.removed(m);
            }),
            d.init();
    }),
        u(window)
            .blur(function (e) {
                a = !1;
            })
            .focus(function (e) {
                a = !0;
            }),
        (u.flexslider.defaults = {
            namespace: "flex-",
            selector: ".slides > li",
            animation: "fade",
            easing: "swing",
            direction: "horizontal",
            reverse: !1,
            animationLoop: !0,
            smoothHeight: !1,
            startAt: 0,
            slideshow: !0,
            slideshowSpeed: 7e3,
            animationSpeed: 600,
            initDelay: 0,
            randomize: !1,
            fadeFirstSlide: !0,
            thumbCaptions: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            pauseInvisible: !0,
            useCSS: !0,
            touch: !0,
            video: !1,
            controlNav: !0,
            directionNav: !0,
            prevText: "Previous",
            nextText: "Next",
            keyboard: !0,
            multipleKeyboard: !1,
            mousewheel: !1,
            pausePlay: !1,
            pauseText: "Pause",
            playText: "Play",
            controlsContainer: "",
            manualControls: "",
            customDirectionNav: "",
            sync: "",
            asNavFor: "",
            itemWidth: 0,
            itemMargin: 0,
            minItems: 1,
            maxItems: 0,
            move: 0,
            allowOneSlide: !0,
            isFirefox: !1,
            start: function () {},
            before: function () {},
            after: function () {},
            end: function () {},
            added: function () {},
            removed: function () {},
            init: function () {},
            rtl: !1,
        }),
        (u.fn.flexslider = function (a) {
            if ("object" == typeof (a = void 0 === a ? {} : a))
                return this.each(function () {
                    var e = u(this),
                        t = a.selector || ".slides > li",
                        t = e.find(t);
                    (1 === t.length && !1 === a.allowOneSlide) || 0 === t.length ? (t.fadeIn(400), a.start && a.start(e)) : void 0 === e.data("flexslider") && new u.flexslider(this, a);
                });
            var e = u(this).data("flexslider");
            switch (a) {
                case "play":
                    e.play();
                    break;
                case "pause":
                    e.pause();
                    break;
                case "stop":
                    e.stop();
                    break;
                case "next":
                    e.flexAnimate(e.getTarget("next"), !0);
                    break;
                case "prev":
                case "previous":
                    e.flexAnimate(e.getTarget("prev"), !0);
                    break;
                default:
                    "number" == typeof a && e.flexAnimate(a, !0);
            }
        });
})(jQuery);
!function () {
    var M = this.jQuery || window.jQuery,
        Q = M(window);
    M.fn.stick_in_parent = function (t) {
        var b,
            i,
            o,
            s,
            w = (t = null == t ? {} : t).sticky_class,
            x = t.inner_scrolling,
            C = t.recalc_every,
            I = t.parent,
            z = t.offset_top,
            A = t.spacer,
            j = t.bottoming;
        for (
            null == z && (z = 0),
                null == I && (I = void 0),
                null == x && (x = !0),
                null == w && (w = "is_stuck"),
                b = M(document),
                null == j && (j = !0),
                i = function (e, n, r, c, l, a, f, p) {
                    var u, t, h, d, g, k, m, v, i, y, _, s;
                    if (!e.data("sticky_kit")) {
                        if ((e.data("sticky_kit", !0), (g = b.height()), (m = e.parent()), !(m = null != I ? m.closest(I) : m).length)) throw "failed to find stick parent";
                        if (
                            ((u = h = !1),
                            (_ = null != A ? A && e.closest(A) : M("<div />")) && _.css("position", e.css("position")),
                            (v = function () {
                                var t, i, o;
                                if (
                                    !p &&
                                    ((g = b.height()),
                                    (t = parseInt(m.css("border-top-width"), 10)),
                                    (i = parseInt(m.css("padding-top"), 10)),
                                    (n = parseInt(m.css("padding-bottom"), 10)),
                                    (r = m.offset().top + t + i),
                                    (c = m.height()),
                                    h && ((u = h = !1), null == A && (e.insertAfter(_), _.detach()), e.css({ position: "", top: "", width: "", bottom: "" }).removeClass(w), (o = !0)),
                                    (l = e.offset().top - (parseInt(e.css("margin-top"), 10) || 0) - z),
                                    (a = e.outerHeight(!0)),
                                    (f = e.css("float")),
                                    _ && _.css({ width: e.outerWidth(!0), height: a, display: e.css("display"), "vertical-align": e.css("vertical-align"), float: f }),
                                    o)
                                )
                                    return s();
                            })(),
                            a !== c)
                        )
                            return (
                                (d = void 0),
                                (k = z),
                                (y = C),
                                (s = function () {
                                    var t, i, o, s;
                                    if (
                                        !p &&
                                        ((o = !1),
                                        null != y && --y <= 0 && ((y = C), v(), (o = !0)),
                                        o || b.height() === g || v(),
                                        (o = Q.scrollTop()),
                                        null != d && (i = o - d),
                                        (d = o),
                                        h
                                            ? (j && ((s = c + r < o + a + k), u) && !s && ((u = !1), e.css({ position: "fixed", bottom: "", top: k }).trigger("sticky_kit:unbottom")),
                                              o < l &&
                                                  ((h = !1),
                                                  (k = z),
                                                  null == A && (("left" !== f && "right" !== f) || e.insertAfter(_), _.detach()),
                                                  e
                                                      .css((t = { position: "", width: "", top: "" }))
                                                      .removeClass(w)
                                                      .trigger("sticky_kit:unstick")),
                                              x && (t = Q.height()) < a + z && !u && ((k -= i), (k = Math.max(t - a, k)), (k = Math.min(z, k)), h) && e.css({ top: k + "px" }))
                                            : l < o &&
                                              ((h = !0),
                                              ((t = { position: "fixed", top: k }).width = "border-box" === e.css("box-sizing") ? e.outerWidth() + "px" : e.width() + "px"),
                                              e.css(t).addClass(w),
                                              null == A && (e.after(_), ("left" !== f && "right" !== f) || _.append(e)),
                                              e.trigger("sticky_kit:stick")),
                                        h) &&
                                        j &&
                                        (null == s && (s = c + r < o + a + k), !u) &&
                                        s
                                    )
                                        return (u = !0), "static" === m.css("position") && m.css({ position: "relative" }), e.css({ position: "absolute", bottom: n, top: "auto" }).trigger("sticky_kit:bottom");
                                }),
                                (i = function () {
                                    return v(), s();
                                }),
                                (t = function () {
                                    if (
                                        ((p = !0),
                                        Q.off("touchmove", s),
                                        Q.off("scroll", s),
                                        Q.off("resize", i),
                                        M(document.body).off("sticky_kit:recalc", i),
                                        e.off("sticky_kit:detach", t),
                                        e.removeData("sticky_kit"),
                                        e.css({ position: "", bottom: "", top: "", width: "" }),
                                        m.position("position", ""),
                                        h)
                                    )
                                        return null == A && (("left" !== f && "right" !== f) || e.insertAfter(_), _.remove()), e.removeClass(w);
                                }),
                                Q.on("touchmove", s),
                                Q.on("scroll", s),
                                Q.on("resize", i),
                                M(document.body).on("sticky_kit:recalc", i),
                                e.on("sticky_kit:detach", t),
                                setTimeout(s, 0)
                            );
                    }
                },
                o = 0,
                s = this.length;
            o < s;
            o++
        )
            (t = this[o]), i(M(t));
        return this;
    };
}.call(this);
!(function (i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? (module.exports = i(require("jquery"))) : i(jQuery);
})(function (a) {
    "use strict";
    var o,
        r = window.Slick || {};
    (o = 0),
        ((r = function (i, e) {
            var t = this;
            (t.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(i),
                appendDots: a(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (i, e) {
                    return a('<button type="button" />').text(e + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3,
            }),
                (t.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1,
                }),
                a.extend(t, t.initials),
                (t.activeBreakpoint = null),
                (t.animType = null),
                (t.animProp = null),
                (t.breakpoints = []),
                (t.breakpointSettings = []),
                (t.cssTransitions = !1),
                (t.focussed = !1),
                (t.interrupted = !1),
                (t.hidden = "hidden"),
                (t.paused = !0),
                (t.positionProp = null),
                (t.respondTo = null),
                (t.rowCount = 1),
                (t.shouldClick = !0),
                (t.$slider = a(i)),
                (t.$slidesCache = null),
                (t.transformType = null),
                (t.transitionType = null),
                (t.visibilityChange = "visibilitychange"),
                (t.windowWidth = 0),
                (t.windowTimer = null),
                (i = a(i).data("slick") || {}),
                (t.options = a.extend({}, t.defaults, e, i)),
                (t.currentSlide = t.options.initialSlide),
                (t.originalSettings = t.options),
                void 0 !== document.mozHidden ? ((t.hidden = "mozHidden"), (t.visibilityChange = "mozvisibilitychange")) : void 0 !== document.webkitHidden && ((t.hidden = "webkitHidden"), (t.visibilityChange = "webkitvisibilitychange")),
                (t.autoPlay = a.proxy(t.autoPlay, t)),
                (t.autoPlayClear = a.proxy(t.autoPlayClear, t)),
                (t.autoPlayIterator = a.proxy(t.autoPlayIterator, t)),
                (t.changeSlide = a.proxy(t.changeSlide, t)),
                (t.clickHandler = a.proxy(t.clickHandler, t)),
                (t.selectHandler = a.proxy(t.selectHandler, t)),
                (t.setPosition = a.proxy(t.setPosition, t)),
                (t.swipeHandler = a.proxy(t.swipeHandler, t)),
                (t.dragHandler = a.proxy(t.dragHandler, t)),
                (t.keyHandler = a.proxy(t.keyHandler, t)),
                (t.instanceUid = o++),
                (t.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                t.registerBreakpoints(),
                t.init(!0);
        }).prototype.activateADA = function () {
            this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabIndex: "0" });
        }),
        (r.prototype.addSlide = r.prototype.slickAdd = function (i, e, t) {
            var o = this;
            if ("boolean" == typeof e) (t = e), (e = null);
            else if (e < 0 || e >= o.slideCount) return !1;
            o.unload(),
                "number" == typeof e
                    ? 0 === e && 0 === o.$slides.length
                        ? a(i).appendTo(o.$slideTrack)
                        : t
                        ? a(i).insertBefore(o.$slides.eq(e))
                        : a(i).insertAfter(o.$slides.eq(e))
                    : !0 === t
                    ? a(i).prependTo(o.$slideTrack)
                    : a(i).appendTo(o.$slideTrack),
                (o.$slides = o.$slideTrack.children(this.options.slide)),
                o.$slideTrack.children(this.options.slide).detach(),
                o.$slideTrack.append(o.$slides),
                o.$slides.each(function (i, e) {
                    a(e).attr("data-slick-index", i);
                }),
                (o.$slidesCache = o.$slides),
                o.reinit();
        }),
        (r.prototype.animateHeight = function () {
            var i,
                e = this;
            1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical && ((i = e.$slides.eq(e.currentSlide).outerHeight(!0)), e.$list.animate({ height: i }, e.options.speed));
        }),
        (r.prototype.animateSlide = function (i, e) {
            var t = {},
                o = this;
            o.animateHeight(),
                !0 === o.options.rtl && !1 === o.options.vertical && (i = -i),
                !1 === o.transformsEnabled
                    ? !1 === o.options.vertical
                        ? o.$slideTrack.animate({ left: i }, o.options.speed, o.options.easing, e)
                        : o.$slideTrack.animate({ top: i }, o.options.speed, o.options.easing, e)
                    : !1 === o.cssTransitions
                    ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
                      a({ animStart: o.currentLeft }).animate(
                          { animStart: i },
                          {
                              duration: o.options.speed,
                              easing: o.options.easing,
                              step: function (i) {
                                  (i = Math.ceil(i)), !1 === o.options.vertical ? (t[o.animType] = "translate(" + i + "px, 0px)") : (t[o.animType] = "translate(0px," + i + "px)"), o.$slideTrack.css(t);
                              },
                              complete: function () {
                                  e && e.call();
                              },
                          }
                      ))
                    : (o.applyTransition(),
                      (i = Math.ceil(i)),
                      !1 === o.options.vertical ? (t[o.animType] = "translate3d(" + i + "px, 0px, 0px)") : (t[o.animType] = "translate3d(0px," + i + "px, 0px)"),
                      o.$slideTrack.css(t),
                      e &&
                          setTimeout(function () {
                              o.disableTransition(), e.call();
                          }, o.options.speed));
        }),
        (r.prototype.getNavTarget = function () {
            var i = this.options.asNavFor;
            return (i = i && null !== i ? a(i).not(this.$slider) : i);
        }),
        (r.prototype.asNavFor = function (e) {
            var i = this.getNavTarget();
            null !== i &&
                "object" == typeof i &&
                i.each(function () {
                    var i = a(this).slick("getSlick");
                    i.unslicked || i.slideHandler(e, !0);
                });
        }),
        (r.prototype.applyTransition = function (i) {
            var e = this,
                t = {};
            !1 === e.options.fade ? (t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase) : (t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase),
                (!1 === e.options.fade ? e.$slideTrack : e.$slides.eq(i)).css(t);
        }),
        (r.prototype.autoPlay = function () {
            var i = this;
            i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
        }),
        (r.prototype.autoPlayClear = function () {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer);
        }),
        (r.prototype.autoPlayIterator = function () {
            var i = this,
                e = i.currentSlide + i.options.slidesToScroll;
            i.paused ||
                i.interrupted ||
                i.focussed ||
                (!1 === i.options.infinite &&
                    (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? (i.direction = 0) : 0 === i.direction && ((e = i.currentSlide - i.options.slidesToScroll), i.currentSlide - 1 == 0) && (i.direction = 1)),
                i.slideHandler(e));
        }),
        (r.prototype.buildArrows = function () {
            var i = this;
            !0 === i.options.arrows &&
                ((i.$prevArrow = a(i.options.prevArrow).addClass("slick-arrow")),
                (i.$nextArrow = a(i.options.nextArrow).addClass("slick-arrow")),
                i.slideCount > i.options.slidesToShow
                    ? (i.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabIndex"),
                      i.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabIndex"),
                      i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.prependTo(i.options.appendArrows),
                      i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.appendTo(i.options.appendArrows),
                      !0 !== i.options.infinite && i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                    : i.$prevArrow.add(i.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabIndex: "-1" }));
        }),
        (r.prototype.buildDots = function () {
            var i,
                e,
                t = this;
            if (!0 === t.options.dots) {
                for (t.$slider.addClass("slick-dotted"), e = a("<ul />").addClass(t.options.dotsClass), i = 0; i <= t.getDotCount(); i += 1) e.append(a("<li />").append(t.options.customPaging.call(this, t, i)));
                (t.$dots = e.appendTo(t.options.appendDots)), t.$dots.find("li").first().addClass("slick-active");
            }
        }),
        (r.prototype.buildOut = function () {
            var i = this;
            (i.$slides = i.$slider.children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                (i.slideCount = i.$slides.length),
                i.$slides.each(function (i, e) {
                    a(e)
                        .attr("data-slick-index", i)
                        .data("originalStyling", a(e).attr("style") || "");
                }),
                i.$slider.addClass("slick-slider"),
                (i.$slideTrack = 0 === i.slideCount ? a('<div class="slick-track"/>').appendTo(i.$slider) : i.$slides.wrapAll('<div class="slick-track"/>').parent()),
                (i.$list = i.$slideTrack.wrap('<div class="slick-list"/>').parent()),
                i.$slideTrack.css("opacity", 0),
                (!0 !== i.options.centerMode && !0 !== i.options.swipeToSlide) || (i.options.slidesToScroll = 1),
                a("img[data-lazy]", i.$slider).not("[src]").addClass("slick-loading"),
                i.setupInfinite(),
                i.buildArrows(),
                i.buildDots(),
                i.updateDots(),
                i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0),
                !0 === i.options.draggable && i.$list.addClass("draggable");
        }),
        (r.prototype.buildRows = function () {
            var i,
                e,
                t,
                o = this,
                s = document.createDocumentFragment(),
                n = o.$slider.children();
            if (1 < o.options.rows) {
                for (t = o.options.slidesPerRow * o.options.rows, e = Math.ceil(n.length / t), i = 0; i < e; i++) {
                    for (var r = document.createElement("div"), l = 0; l < o.options.rows; l++) {
                        for (var d = document.createElement("div"), a = 0; a < o.options.slidesPerRow; a++) {
                            var c = i * t + (l * o.options.slidesPerRow + a);
                            n.get(c) && d.appendChild(n.get(c));
                        }
                        r.appendChild(d);
                    }
                    s.appendChild(r);
                }
                o.$slider.empty().append(s),
                    o.$slider
                        .children()
                        .children()
                        .children()
                        .css({ width: 100 / o.options.slidesPerRow + "%", display: "inline-block" });
            }
        }),
        (r.prototype.checkResponsive = function (i, e) {
            var t,
                o,
                s,
                n = this,
                r = !1,
                l = n.$slider.width(),
                d = window.innerWidth || a(window).width();
            if (("window" === n.respondTo ? (s = d) : "slider" === n.respondTo ? (s = l) : "min" === n.respondTo && (s = Math.min(d, l)), n.options.responsive && n.options.responsive.length && null !== n.options.responsive)) {
                for (t in ((o = null), n.breakpoints)) n.breakpoints.hasOwnProperty(t) && (!1 === n.originalSettings.mobileFirst ? s < n.breakpoints[t] && (o = n.breakpoints[t]) : s > n.breakpoints[t] && (o = n.breakpoints[t]));
                null !== o
                    ? (null !== n.activeBreakpoint && o === n.activeBreakpoint && !e) ||
                      ((n.activeBreakpoint = o),
                      "unslick" === n.breakpointSettings[o] ? n.unslick(o) : ((n.options = a.extend({}, n.originalSettings, n.breakpointSettings[o])), !0 === i && (n.currentSlide = n.options.initialSlide), n.refresh(i)),
                      (r = o))
                    : null !== n.activeBreakpoint && ((n.activeBreakpoint = null), (n.options = n.originalSettings), !0 === i && (n.currentSlide = n.options.initialSlide), n.refresh(i), (r = o)),
                    i || !1 === r || n.$slider.trigger("breakpoint", [n, r]);
            }
        }),
        (r.prototype.changeSlide = function (i, e) {
            var t,
                o = this,
                s = a(i.currentTarget);
            switch ((s.is("a") && i.preventDefault(), s.is("li") || (s = s.closest("li")), (t = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll), i.data.message)) {
                case "previous":
                    (n = 0 == t ? o.options.slidesToScroll : o.options.slidesToShow - t), o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - n, !1, e);
                    break;
                case "next":
                    (n = 0 == t ? o.options.slidesToScroll : t), o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + n, !1, e);
                    break;
                case "index":
                    var n = 0 === i.data.index ? 0 : i.data.index || s.index() * o.options.slidesToScroll;
                    o.slideHandler(o.checkNavigable(n), !1, e), s.children().trigger("focus");
                    break;
                default:
                    return;
            }
        }),
        (r.prototype.checkNavigable = function (i) {
            var e = this.getNavigableIndexes(),
                t = 0;
            if (i > e[e.length - 1]) i = e[e.length - 1];
            else
                for (var o in e) {
                    if (i < e[o]) {
                        i = t;
                        break;
                    }
                    t = e[o];
                }
            return i;
        }),
        (r.prototype.cleanUpEvents = function () {
            var i = this;
            i.options.dots &&
                null !== i.$dots &&
                (a("li", i.$dots).off("click.slick", i.changeSlide).off("mouseenter.slick", a.proxy(i.interrupt, i, !0)).off("mouseleave.slick", a.proxy(i.interrupt, i, !1)), !0 === i.options.accessibility) &&
                i.$dots.off("keydown.slick", i.keyHandler),
                i.$slider.off("focus.slick blur.slick"),
                !0 === i.options.arrows &&
                    i.slideCount > i.options.slidesToShow &&
                    (i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide), i.$nextArrow && i.$nextArrow.off("click.slick", i.changeSlide), !0 === i.options.accessibility) &&
                    (i.$prevArrow && i.$prevArrow.off("keydown.slick", i.keyHandler), i.$nextArrow) &&
                    i.$nextArrow.off("keydown.slick", i.keyHandler),
                i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler),
                i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler),
                i.$list.off("touchend.slick mouseup.slick", i.swipeHandler),
                i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler),
                i.$list.off("click.slick", i.clickHandler),
                a(document).off(i.visibilityChange, i.visibility),
                i.cleanUpSlideEvents(),
                !0 === i.options.accessibility && i.$list.off("keydown.slick", i.keyHandler),
                !0 === i.options.focusOnSelect && a(i.$slideTrack).children().off("click.slick", i.selectHandler),
                a(window).off("orientationchange.slick.slick-" + i.instanceUid, i.orientationChange),
                a(window).off("resize.slick.slick-" + i.instanceUid, i.resize),
                a("[draggable!=true]", i.$slideTrack).off("dragstart", i.preventDefault),
                a(window).off("load.slick.slick-" + i.instanceUid, i.setPosition);
        }),
        (r.prototype.cleanUpSlideEvents = function () {
            var i = this;
            i.$list.off("mouseenter.slick", a.proxy(i.interrupt, i, !0)), i.$list.off("mouseleave.slick", a.proxy(i.interrupt, i, !1));
        }),
        (r.prototype.cleanUpRows = function () {
            var i;
            1 < this.options.rows && ((i = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(i));
        }),
        (r.prototype.clickHandler = function (i) {
            !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
        }),
        (r.prototype.destroy = function (i) {
            var e = this;
            e.autoPlayClear(),
                (e.touchObject = {}),
                e.cleanUpEvents(),
                a(".slick-cloned", e.$slider).detach(),
                e.$dots && e.$dots.remove(),
                e.$prevArrow &&
                    e.$prevArrow.length &&
                    (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabIndex").css("display", ""), e.htmlExpr.test(e.options.prevArrow)) &&
                    e.$prevArrow.remove(),
                e.$nextArrow &&
                    e.$nextArrow.length &&
                    (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabIndex").css("display", ""), e.htmlExpr.test(e.options.nextArrow)) &&
                    e.$nextArrow.remove(),
                e.$slides &&
                    (e.$slides
                        .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                        .removeAttr("aria-hidden")
                        .removeAttr("data-slick-index")
                        .each(function () {
                            a(this).attr("style", a(this).data("originalStyling"));
                        }),
                    e.$slideTrack.children(this.options.slide).detach(),
                    e.$slideTrack.detach(),
                    e.$list.detach(),
                    e.$slider.append(e.$slides)),
                e.cleanUpRows(),
                e.$slider.removeClass("slick-slider"),
                e.$slider.removeClass("slick-initialized"),
                e.$slider.removeClass("slick-dotted"),
                (e.unslicked = !0),
                i || e.$slider.trigger("destroy", [e]);
        }),
        (r.prototype.disableTransition = function (i) {
            var e = {};
            (e[this.transitionType] = ""), (!1 === this.options.fade ? this.$slideTrack : this.$slides.eq(i)).css(e);
        }),
        (r.prototype.fadeSlide = function (i, e) {
            var t = this;
            !1 === t.cssTransitions
                ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }), t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
                : (t.applyTransition(i),
                  t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
                  e &&
                      setTimeout(function () {
                          t.disableTransition(i), e.call();
                      }, t.options.speed));
        }),
        (r.prototype.fadeSlideOut = function (i) {
            var e = this;
            !1 === e.cssTransitions ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
        }),
        (r.prototype.filterSlides = r.prototype.slickFilter = function (i) {
            var e = this;
            null !== i && ((e.$slidesCache = e.$slides), e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
        }),
        (r.prototype.focusHandler = function () {
            var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (i) {
                i.stopImmediatePropagation();
                var e = a(this);
                setTimeout(function () {
                    t.options.pauseOnFocus && ((t.focussed = e.is(":focus")), t.autoPlay());
                }, 0);
            });
        }),
        (r.prototype.getCurrent = r.prototype.slickCurrentSlide = function () {
            return this.currentSlide;
        }),
        (r.prototype.getDotCount = function () {
            var i = this,
                e = 0,
                t = 0,
                o = 0;
            if (!0 === i.options.infinite)
                if (i.slideCount <= i.options.slidesToShow) ++o;
                else for (; e < i.slideCount; ) ++o, (e = t + i.options.slidesToScroll), (t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow);
            else if (!0 === i.options.centerMode) o = i.slideCount;
            else if (i.options.asNavFor) for (; e < i.slideCount; ) ++o, (e = t + i.options.slidesToScroll), (t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow);
            else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
            return o - 1;
        }),
        (r.prototype.getLeft = function (i) {
            var e,
                t,
                o = this,
                s = 0;
            return (
                (o.slideOffset = 0),
                (e = o.$slides.first().outerHeight(!0)),
                !0 === o.options.infinite
                    ? (o.slideCount > o.options.slidesToShow &&
                          ((o.slideOffset = o.slideWidth * o.options.slidesToShow * -1),
                          (t = -1),
                          !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? (t = -1.5) : 1 === o.options.slidesToShow && (t = -2)),
                          (s = e * o.options.slidesToShow * t)),
                      o.slideCount % o.options.slidesToScroll != 0 &&
                          i + o.options.slidesToScroll > o.slideCount &&
                          o.slideCount > o.options.slidesToShow &&
                          (s =
                              i > o.slideCount
                                  ? ((o.slideOffset = (o.options.slidesToShow - (i - o.slideCount)) * o.slideWidth * -1), (o.options.slidesToShow - (i - o.slideCount)) * e * -1)
                                  : ((o.slideOffset = (o.slideCount % o.options.slidesToScroll) * o.slideWidth * -1), (o.slideCount % o.options.slidesToScroll) * e * -1)))
                    : i + o.options.slidesToShow > o.slideCount && ((o.slideOffset = (i + o.options.slidesToShow - o.slideCount) * o.slideWidth), (s = (i + o.options.slidesToShow - o.slideCount) * e)),
                o.slideCount <= o.options.slidesToShow && (s = o.slideOffset = 0),
                !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow
                    ? (o.slideOffset = (o.slideWidth * Math.floor(o.options.slidesToShow)) / 2 - (o.slideWidth * o.slideCount) / 2)
                    : !0 === o.options.centerMode && !0 === o.options.infinite
                    ? (o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth)
                    : !0 === o.options.centerMode && ((o.slideOffset = 0), (o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2))),
                (t = !1 === o.options.vertical ? i * o.slideWidth * -1 + o.slideOffset : i * e * -1 + s),
                !0 === o.options.variableWidth &&
                    ((e = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(i) : o.$slideTrack.children(".slick-slide").eq(i + o.options.slidesToShow)),
                    (t = !0 === o.options.rtl ? (e[0] ? -1 * (o.$slideTrack.width() - e[0].offsetLeft - e.width()) : 0) : e[0] ? -1 * e[0].offsetLeft : 0),
                    !0 === o.options.centerMode) &&
                    ((e = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(i) : o.$slideTrack.children(".slick-slide").eq(i + o.options.slidesToShow + 1)),
                    (t = !0 === o.options.rtl ? (e[0] ? -1 * (o.$slideTrack.width() - e[0].offsetLeft - e.width()) : 0) : e[0] ? -1 * e[0].offsetLeft : 0),
                    (t += (o.$list.width() - e.outerWidth()) / 2)),
                t
            );
        }),
        (r.prototype.getOption = r.prototype.slickGetOption = function (i) {
            return this.options[i];
        }),
        (r.prototype.getNavigableIndexes = function () {
            for (var i = this, e = 0, t = 0, o = [], s = !1 === i.options.infinite ? i.slideCount : ((e = -1 * i.options.slidesToScroll), (t = -1 * i.options.slidesToScroll), 2 * i.slideCount); e < s; )
                o.push(e), (e = t + i.options.slidesToScroll), (t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow);
            return o;
        }),
        (r.prototype.getSlick = function () {
            return this;
        }),
        (r.prototype.getSlideCount = function () {
            var t,
                o = this,
                s = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0;
            return !0 === o.options.swipeToSlide
                ? (o.$slideTrack.find(".slick-slide").each(function (i, e) {
                      if (e.offsetLeft - s + a(e).outerWidth() / 2 > -1 * o.swipeLeft) return (t = e), !1;
                  }),
                  Math.abs(a(t).attr("data-slick-index") - o.currentSlide) || 1)
                : o.options.slidesToScroll;
        }),
        (r.prototype.goTo = r.prototype.slickGoTo = function (i, e) {
            this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
        }),
        (r.prototype.init = function (i) {
            var e = this;
            a(e.$slider).hasClass("slick-initialized") ||
                (a(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots(), e.checkResponsive(!0), e.focusHandler()),
                i && e.$slider.trigger("init", [e]),
                !0 === e.options.accessibility && e.initADA(),
                e.options.autoplay && ((e.paused = !1), e.autoPlay());
        }),
        (r.prototype.initADA = function () {
            var t = this,
                o = Math.ceil(t.slideCount / t.options.slidesToShow),
                s = t.getNavigableIndexes().filter(function (i) {
                    return 0 <= i && i < t.slideCount;
                });
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabIndex: "-1" }).find("a, input, button, select").attr({ tabIndex: "-1" }),
                null !== t.$dots &&
                    (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (i) {
                        var e = s.indexOf(i);
                        a(this).attr({ role: "tabpanel", id: "slick-slide" + t.instanceUid + i, tabIndex: -1 }), -1 !== e && a(this).attr({ "aria-describedby": "slick-slide-control" + t.instanceUid + e });
                    }),
                    t.$dots
                        .attr("role", "tablist")
                        .find("li")
                        .each(function (i) {
                            var e = s[i];
                            a(this).attr({ role: "presentation" }),
                                a(this)
                                    .find("button")
                                    .first()
                                    .attr({ role: "tab", id: "slick-slide-control" + t.instanceUid + i, "aria-controls": "slick-slide" + t.instanceUid + e, "aria-label": i + 1 + " of " + o, "aria-selected": null, tabIndex: "-1" });
                        })
                        .eq(t.currentSlide)
                        .find("button")
                        .attr({ "aria-selected": "true", tabIndex: "0" })
                        .end());
            for (var i = t.currentSlide, e = i + t.options.slidesToShow; i < e; i++) t.$slides.eq(i).attr("tabIndex", 0);
            t.activateADA();
        }),
        (r.prototype.initArrowEvents = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide), !0 === i.options.accessibility) &&
                (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler));
        }),
        (r.prototype.initDotEvents = function () {
            var i = this;
            !0 === i.options.dots && (a("li", i.$dots).on("click.slick", { message: "index" }, i.changeSlide), !0 === i.options.accessibility) && i.$dots.on("keydown.slick", i.keyHandler),
                !0 === i.options.dots && !0 === i.options.pauseOnDotsHover && a("li", i.$dots).on("mouseenter.slick", a.proxy(i.interrupt, i, !0)).on("mouseleave.slick", a.proxy(i.interrupt, i, !1));
        }),
        (r.prototype.initSlideEvents = function () {
            var i = this;
            i.options.pauseOnHover && (i.$list.on("mouseenter.slick", a.proxy(i.interrupt, i, !0)), i.$list.on("mouseleave.slick", a.proxy(i.interrupt, i, !1)));
        }),
        (r.prototype.initializeEvents = function () {
            var i = this;
            i.initArrowEvents(),
                i.initDotEvents(),
                i.initSlideEvents(),
                i.$list.on("touchstart.slick mousedown.slick", { action: "start" }, i.swipeHandler),
                i.$list.on("touchmove.slick mousemove.slick", { action: "move" }, i.swipeHandler),
                i.$list.on("touchend.slick mouseup.slick", { action: "end" }, i.swipeHandler),
                i.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, i.swipeHandler),
                i.$list.on("click.slick", i.clickHandler),
                a(document).on(i.visibilityChange, a.proxy(i.visibility, i)),
                !0 === i.options.accessibility && i.$list.on("keydown.slick", i.keyHandler),
                !0 === i.options.focusOnSelect && a(i.$slideTrack).children().on("click.slick", i.selectHandler),
                a(window).on("orientationchange.slick.slick-" + i.instanceUid, a.proxy(i.orientationChange, i)),
                a(window).on("resize.slick.slick-" + i.instanceUid, a.proxy(i.resize, i)),
                a("[draggable!=true]", i.$slideTrack).on("dragstart", i.preventDefault),
                a(window).on("load.slick.slick-" + i.instanceUid, i.setPosition),
                a(i.setPosition);
        }),
        (r.prototype.initUI = function () {
            var i = this;
            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
        }),
        (r.prototype.keyHandler = function (i) {
            var e = this;
            i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                (37 === i.keyCode && !0 === e.options.accessibility
                    ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } })
                    : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }));
        }),
        (r.prototype.lazyLoad = function () {
            function i(i) {
                a("img[data-lazy]", i).each(function () {
                    var i = a(this),
                        e = a(this).attr("data-lazy"),
                        t = a(this).attr("data-srcset"),
                        o = a(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                        s = document.createElement("img");
                    (s.onload = function () {
                        i.animate({ opacity: 0 }, 100, function () {
                            t && (i.attr("srcset", t), o) && i.attr("sizes", o),
                                i.attr("src", e).animate({ opacity: 1 }, 200, function () {
                                    i.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                                }),
                                n.$slider.trigger("lazyLoaded", [n, i, e]);
                        });
                    }),
                        (s.onerror = function () {
                            i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, i, e]);
                        }),
                        (s.src = e);
                });
            }
            var e,
                t,
                o,
                n = this;
            if (
                (!0 === n.options.centerMode
                    ? (o =
                          !0 === n.options.infinite
                              ? (t = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2
                              : ((t = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1))), n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
                    : ((t = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide), (o = Math.ceil(t + n.options.slidesToShow)), !0 === n.options.fade && (0 < t && t--, o <= n.slideCount) && o++),
                (e = n.$slider.find(".slick-slide").slice(t, o)),
                "anticipated" === n.options.lazyLoad)
            )
                for (var s = t - 1, r = o, l = n.$slider.find(".slick-slide"), d = 0; d < n.options.slidesToScroll; d++) s < 0 && (s = n.slideCount - 1), (e = (e = e.add(l.eq(s))).add(l.eq(r))), s--, r++;
            i(e),
                n.slideCount <= n.options.slidesToShow
                    ? i(n.$slider.find(".slick-slide"))
                    : n.currentSlide >= n.slideCount - n.options.slidesToShow
                    ? i(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
                    : 0 === n.currentSlide && i(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
        }),
        (r.prototype.loadSlider = function () {
            var i = this;
            i.setPosition(), i.$slideTrack.css({ opacity: 1 }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
        }),
        (r.prototype.next = r.prototype.slickNext = function () {
            this.changeSlide({ data: { message: "next" } });
        }),
        (r.prototype.orientationChange = function () {
            this.checkResponsive(), this.setPosition();
        }),
        (r.prototype.pause = r.prototype.slickPause = function () {
            this.autoPlayClear(), (this.paused = !0);
        }),
        (r.prototype.play = r.prototype.slickPlay = function () {
            var i = this;
            i.autoPlay(), (i.options.autoplay = !0), (i.paused = !1), (i.focussed = !1), (i.interrupted = !1);
        }),
        (r.prototype.postSlide = function (i) {
            var e = this;
            e.unslicked ||
                (e.$slider.trigger("afterChange", [e, i]),
                (e.animating = !1),
                e.slideCount > e.options.slidesToShow && e.setPosition(),
                (e.swipeLeft = null),
                e.options.autoplay && e.autoPlay(),
                !0 === e.options.accessibility && (e.initADA(), e.options.focusOnChange) && a(e.$slides.get(e.currentSlide)).attr("tabIndex", 0).focus());
        }),
        (r.prototype.prev = r.prototype.slickPrev = function () {
            this.changeSlide({ data: { message: "previous" } });
        }),
        (r.prototype.preventDefault = function (i) {
            i.preventDefault();
        }),
        (r.prototype.progressiveLazyLoad = function (i) {
            i = i || 1;
            var e,
                t,
                o,
                s,
                n = this,
                r = a("img[data-lazy]", n.$slider);
            r.length
                ? ((e = r.first()),
                  (t = e.attr("data-lazy")),
                  (o = e.attr("data-srcset")),
                  (s = e.attr("data-sizes") || n.$slider.attr("data-sizes")),
                  ((r = document.createElement("img")).onload = function () {
                      o && (e.attr("srcset", o), s) && e.attr("sizes", s),
                          e.attr("src", t).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                          !0 === n.options.adaptiveHeight && n.setPosition(),
                          n.$slider.trigger("lazyLoaded", [n, e, t]),
                          n.progressiveLazyLoad();
                  }),
                  (r.onerror = function () {
                      i < 3
                          ? setTimeout(function () {
                                n.progressiveLazyLoad(i + 1);
                            }, 500)
                          : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]), n.progressiveLazyLoad());
                  }),
                  (r.src = t))
                : n.$slider.trigger("allImagesLoaded", [n]);
        }),
        (r.prototype.refresh = function (i) {
            var e = this,
                t = e.slideCount - e.options.slidesToShow;
            !e.options.infinite && e.currentSlide > t && (e.currentSlide = t),
                e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                (t = e.currentSlide),
                e.destroy(!0),
                a.extend(e, e.initials, { currentSlide: t }),
                e.init(),
                i || e.changeSlide({ data: { message: "index", index: t } }, !1);
        }),
        (r.prototype.registerBreakpoints = function () {
            var i,
                e,
                t,
                o = this,
                s = o.options.responsive || null;
            if ("array" === a.type(s) && s.length) {
                for (i in ((o.respondTo = o.options.respondTo || "window"), s))
                    if (((t = o.breakpoints.length - 1), s.hasOwnProperty(i))) {
                        for (e = s[i].breakpoint; 0 <= t; ) o.breakpoints[t] && o.breakpoints[t] === e && o.breakpoints.splice(t, 1), t--;
                        o.breakpoints.push(e), (o.breakpointSettings[e] = s[i].settings);
                    }
                o.breakpoints.sort(function (i, e) {
                    return o.options.mobileFirst ? i - e : e - i;
                });
            }
        }),
        (r.prototype.reinit = function () {
            var i = this;
            (i.$slides = i.$slideTrack.children(i.options.slide).addClass("slick-slide")),
                (i.slideCount = i.$slides.length),
                i.currentSlide >= i.slideCount && 0 !== i.currentSlide && (i.currentSlide = i.currentSlide - i.options.slidesToScroll),
                i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0),
                i.registerBreakpoints(),
                i.setProps(),
                i.setupInfinite(),
                i.buildArrows(),
                i.updateArrows(),
                i.initArrowEvents(),
                i.buildDots(),
                i.updateDots(),
                i.initDotEvents(),
                i.cleanUpSlideEvents(),
                i.initSlideEvents(),
                i.checkResponsive(!1, !0),
                !0 === i.options.focusOnSelect && a(i.$slideTrack).children().on("click.slick", i.selectHandler),
                i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0),
                i.setPosition(),
                i.focusHandler(),
                (i.paused = !i.options.autoplay),
                i.autoPlay(),
                i.$slider.trigger("reInit", [i]);
        }),
        (r.prototype.resize = function () {
            var i = this;
            a(window).width() !== i.windowWidth &&
                (clearTimeout(i.windowDelay),
                (i.windowDelay = window.setTimeout(function () {
                    (i.windowWidth = a(window).width()), i.checkResponsive(), i.unslicked || i.setPosition();
                }, 50)));
        }),
        (r.prototype.removeSlide = r.prototype.slickRemove = function (i, e, t) {
            var o = this;
            if (((i = "boolean" == typeof i ? (!0 === (e = i) ? 0 : o.slideCount - 1) : !0 === e ? --i : i), o.slideCount < 1 || i < 0 || i > o.slideCount - 1)) return !1;
            o.unload(),
                (!0 === t ? o.$slideTrack.children() : o.$slideTrack.children(this.options.slide).eq(i)).remove(),
                (o.$slides = o.$slideTrack.children(this.options.slide)),
                o.$slideTrack.children(this.options.slide).detach(),
                o.$slideTrack.append(o.$slides),
                (o.$slidesCache = o.$slides),
                o.reinit();
        }),
        (r.prototype.setCSS = function (i) {
            var e,
                t,
                o = this,
                s = {};
            !0 === o.options.rtl && (i = -i),
                (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (s[o.positionProp] = i),
                !1 !== o.transformsEnabled && (!(s = {}) === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")") : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)")),
                o.$slideTrack.css(s);
        }),
        (r.prototype.setDimensions = function () {
            var i = this,
                e =
                    (!1 === i.options.vertical
                        ? !0 === i.options.centerMode && i.$list.css({ padding: "0px " + i.options.centerPadding })
                        : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({ padding: i.options.centerPadding + " 0px" })),
                    (i.listWidth = i.$list.width()),
                    (i.listHeight = i.$list.height()),
                    !1 === i.options.vertical && !1 === i.options.variableWidth
                        ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length)))
                        : !0 === i.options.variableWidth
                        ? i.$slideTrack.width(5e3 * i.slideCount)
                        : ((i.slideWidth = Math.ceil(i.listWidth)), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length))),
                    i.$slides.first().outerWidth(!0) - i.$slides.first().width());
            !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
        }),
        (r.prototype.setFade = function () {
            var t,
                o = this;
            o.$slides.each(function (i, e) {
                (t = o.slideWidth * i * -1),
                    !0 === o.options.rtl ? a(e).css({ position: "relative", right: t, top: 0, zIndex: o.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: t, top: 0, zIndex: o.options.zIndex - 2, opacity: 0 });
            }),
                o.$slides.eq(o.currentSlide).css({ zIndex: o.options.zIndex - 1, opacity: 1 });
        }),
        (r.prototype.setHeight = function () {
            var i,
                e = this;
            1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical && ((i = e.$slides.eq(e.currentSlide).outerHeight(!0)), e.$list.css("height", i));
        }),
        (r.prototype.setOption = r.prototype.slickSetOption = function () {
            var i,
                e,
                t,
                o,
                s,
                n = this,
                r = !1;
            if (
                ("object" === a.type(arguments[0])
                    ? ((t = arguments[0]), (r = arguments[1]), (s = "multiple"))
                    : "string" === a.type(arguments[0]) &&
                      ((t = arguments[0]), (o = arguments[1]), (r = arguments[2]), "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? (s = "responsive") : void 0 !== arguments[1] && (s = "single")),
                "single" === s)
            )
                n.options[t] = o;
            else if ("multiple" === s)
                a.each(t, function (i, e) {
                    n.options[i] = e;
                });
            else if ("responsive" === s)
                for (e in o)
                    if ("array" !== a.type(n.options.responsive)) n.options.responsive = [o[e]];
                    else {
                        for (i = n.options.responsive.length - 1; 0 <= i; ) n.options.responsive[i].breakpoint === o[e].breakpoint && n.options.responsive.splice(i, 1), i--;
                        n.options.responsive.push(o[e]);
                    }
            r && (n.unload(), n.reinit());
        }),
        (r.prototype.setPosition = function () {
            var i = this;
            i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
        }),
        (r.prototype.setProps = function () {
            var i = this,
                e = document.body.style;
            (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
                "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
                (void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition) || (!0 === i.options.useCSS && (i.cssTransitions = !0)),
                i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : (i.options.zIndex = i.defaults.zIndex)),
                void 0 !== e.OTransform && ((i.animType = "OTransform"), (i.transformType = "-o-transform"), (i.transitionType = "OTransition"), void 0 === e.perspectiveProperty) && void 0 === e.webkitPerspective && (i.animType = !1),
                void 0 !== e.MozTransform && ((i.animType = "MozTransform"), (i.transformType = "-moz-transform"), (i.transitionType = "MozTransition"), void 0 === e.perspectiveProperty) && void 0 === e.MozPerspective && (i.animType = !1),
                void 0 !== e.webkitTransform &&
                    ((i.animType = "webkitTransform"), (i.transformType = "-webkit-transform"), (i.transitionType = "webkitTransition"), void 0 === e.perspectiveProperty) &&
                    void 0 === e.webkitPerspective &&
                    (i.animType = !1),
                void 0 !== e.msTransform && ((i.animType = "msTransform"), (i.transformType = "-ms-transform"), (i.transitionType = "msTransition"), void 0 === e.msTransform) && (i.animType = !1),
                void 0 !== e.transform && !1 !== i.animType && ((i.animType = "transform"), (i.transformType = "transform"), (i.transitionType = "transition")),
                (i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType);
        }),
        (r.prototype.setSlideClasses = function (i) {
            var e,
                t,
                o,
                s = this,
                n = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
            s.$slides.eq(i).addClass("slick-current"),
                !0 === s.options.centerMode
                    ? ((t = s.options.slidesToShow % 2 == 0 ? 1 : 0),
                      (o = Math.floor(s.options.slidesToShow / 2)),
                      !0 === s.options.infinite &&
                          ((o <= i && i <= s.slideCount - 1 - o ? s.$slides.slice(i - o + t, i + o + 1) : ((e = s.options.slidesToShow + i), n.slice(e - o + 1 + t, e + o + 2))).addClass("slick-active").attr("aria-hidden", "false"),
                          0 === i ? n.eq(n.length - 1 - s.options.slidesToShow).addClass("slick-center") : i === s.slideCount - 1 && n.eq(s.options.slidesToShow).addClass("slick-center")),
                      s.$slides.eq(i).addClass("slick-center"))
                    : (0 <= i && i <= s.slideCount - s.options.slidesToShow
                          ? s.$slides.slice(i, i + s.options.slidesToShow)
                          : n.length <= s.options.slidesToShow
                          ? n
                          : ((t = s.slideCount % s.options.slidesToShow),
                            (e = !0 === s.options.infinite ? s.options.slidesToShow + i : i),
                            s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - i < s.options.slidesToShow ? n.slice(e - (s.options.slidesToShow - t), e + t) : n.slice(e, e + s.options.slidesToShow))
                      )
                          .addClass("slick-active")
                          .attr("aria-hidden", "false"),
                ("ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad) || s.lazyLoad();
        }),
        (r.prototype.setupInfinite = function () {
            var i,
                e,
                t,
                o = this;
            if ((!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && ((e = null), o.slideCount > o.options.slidesToShow))) {
                for (t = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, i = o.slideCount; i > o.slideCount - t; --i)
                    a(o.$slides[(e = i - 1)])
                        .clone(!0)
                        .attr("id", "")
                        .attr("data-slick-index", e - o.slideCount)
                        .prependTo(o.$slideTrack)
                        .addClass("slick-cloned");
                for (i = 0; i < t + o.slideCount; i += 1)
                    (e = i),
                        a(o.$slides[e])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", e + o.slideCount)
                            .appendTo(o.$slideTrack)
                            .addClass("slick-cloned");
                o.$slideTrack
                    .find(".slick-cloned")
                    .find("[id]")
                    .each(function () {
                        a(this).attr("id", "");
                    });
            }
        }),
        (r.prototype.interrupt = function (i) {
            i || this.autoPlay(), (this.interrupted = i);
        }),
        (r.prototype.selectHandler = function (i) {
            (i = a(i.target).is(".slick-slide") ? a(i.target) : a(i.target).parents(".slick-slide")), (i = (i = parseInt(i.attr("data-slick-index"))) || 0);
            this.slideCount <= this.options.slidesToShow ? this.slideHandler(i, !1, !0) : this.slideHandler(i);
        }),
        (r.prototype.slideHandler = function (i, e, t) {
            var o,
                s,
                n,
                r = this;
            (e = e || !1),
                (!0 === r.animating && !0 === r.options.waitForAnimate) ||
                    (!0 === r.options.fade && r.currentSlide === i) ||
                    (!1 === e && r.asNavFor(i),
                    (o = i),
                    (e = r.getLeft(o)),
                    (n = r.getLeft(r.currentSlide)),
                    (r.currentLeft = null === r.swipeLeft ? n : r.swipeLeft),
                    (!1 === r.options.infinite && !1 === r.options.centerMode && (i < 0 || i > r.getDotCount() * r.options.slidesToScroll)) ||
                    (!1 === r.options.infinite && !0 === r.options.centerMode && (i < 0 || i > r.slideCount - r.options.slidesToScroll))
                        ? !1 === r.options.fade &&
                          ((o = r.currentSlide),
                          !0 !== t
                              ? r.animateSlide(n, function () {
                                    r.postSlide(o);
                                })
                              : r.postSlide(o))
                        : (r.options.autoplay && clearInterval(r.autoPlayTimer),
                          (s =
                              o < 0
                                  ? r.slideCount % r.options.slidesToScroll != 0
                                      ? r.slideCount - (r.slideCount % r.options.slidesToScroll)
                                      : r.slideCount + o
                                  : o >= r.slideCount
                                  ? r.slideCount % r.options.slidesToScroll != 0
                                      ? 0
                                      : o - r.slideCount
                                  : o),
                          (r.animating = !0),
                          r.$slider.trigger("beforeChange", [r, r.currentSlide, s]),
                          (i = r.currentSlide),
                          (r.currentSlide = s),
                          r.setSlideClasses(r.currentSlide),
                          r.options.asNavFor && (n = (n = r.getNavTarget()).slick("getSlick")).slideCount <= n.options.slidesToShow && n.setSlideClasses(r.currentSlide),
                          r.updateDots(),
                          r.updateArrows(),
                          !0 === r.options.fade
                              ? (!0 !== t
                                    ? (r.fadeSlideOut(i),
                                      r.fadeSlide(s, function () {
                                          r.postSlide(s);
                                      }))
                                    : r.postSlide(s),
                                r.animateHeight())
                              : !0 !== t
                              ? r.animateSlide(e, function () {
                                    r.postSlide(s);
                                })
                              : r.postSlide(s)));
        }),
        (r.prototype.startLoad = function () {
            var i = this;
            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()),
                !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
                i.$slider.addClass("slick-loading");
        }),
        (r.prototype.swipeDirection = function () {
            var i = this,
                e = i.touchObject.startX - i.touchObject.curX,
                t = i.touchObject.startY - i.touchObject.curY,
                t = Math.atan2(t, e);
            return ((e = (e = Math.round((180 * t) / Math.PI)) < 0 ? 360 - Math.abs(e) : e) <= 45 && 0 <= e) || (e <= 360 && 315 <= e)
                ? !1 === i.options.rtl
                    ? "left"
                    : "right"
                : 135 <= e && e <= 225
                ? !1 === i.options.rtl
                    ? "right"
                    : "left"
                : !0 === i.options.verticalSwiping
                ? 35 <= e && e <= 135
                    ? "down"
                    : "up"
                : "vertical";
        }),
        (r.prototype.swipeEnd = function (i) {
            var e,
                t,
                o = this;
            if (((o.dragging = !1), (o.swiping = !1), o.scrolling)) return (o.scrolling = !1);
            if (((o.interrupted = !1), (o.shouldClick = !(10 < o.touchObject.swipeLength)), void 0 === o.touchObject.curX)) return !1;
            if ((!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe)) {
                switch ((t = o.swipeDirection())) {
                    case "left":
                    case "down":
                        (e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount()), (o.currentDirection = 0);
                        break;
                    case "right":
                    case "up":
                        (e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount()), (o.currentDirection = 1);
                }
                "vertical" != t && (o.slideHandler(e), (o.touchObject = {}), o.$slider.trigger("swipe", [o, t]));
            } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), (o.touchObject = {}));
        }),
        (r.prototype.swipeHandler = function (i) {
            var e = this;
            if (!(!1 === e.options.swipe || ("ontouchend" in document && !1 === e.options.swipe) || (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))))
                switch (
                    ((e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1),
                    (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
                    !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                    i.data.action)
                ) {
                    case "start":
                        e.swipeStart(i);
                        break;
                    case "move":
                        e.swipeMove(i);
                        break;
                    case "end":
                        e.swipeEnd(i);
                }
        }),
        (r.prototype.swipeMove = function (i) {
            var e,
                t,
                o = this,
                s = void 0 !== i.originalEvent ? i.originalEvent.touches : null;
            return (
                !(!o.dragging || o.scrolling || (s && 1 !== s.length)) &&
                ((e = o.getLeft(o.currentSlide)),
                (o.touchObject.curX = void 0 !== s ? s[0].pageX : i.clientX),
                (o.touchObject.curY = void 0 !== s ? s[0].pageY : i.clientY),
                (o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2)))),
                (s = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2)))),
                !o.options.verticalSwiping && !o.swiping && 4 < s
                    ? !(o.scrolling = !0)
                    : (!0 === o.options.verticalSwiping && (o.touchObject.swipeLength = s),
                      (s = o.swipeDirection()),
                      void 0 !== i.originalEvent && 4 < o.touchObject.swipeLength && ((o.swiping = !0), i.preventDefault()),
                      (i = (!1 === o.options.rtl ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1)),
                      !0 === o.options.verticalSwiping && (i = o.touchObject.curY > o.touchObject.startY ? 1 : -1),
                      (t = o.touchObject.swipeLength),
                      (o.touchObject.edgeHit = !1) === o.options.infinite &&
                          ((0 === o.currentSlide && "right" === s) || (o.currentSlide >= o.getDotCount() && "left" === s)) &&
                          ((t = o.touchObject.swipeLength * o.options.edgeFriction), (o.touchObject.edgeHit = !0)),
                      !1 === o.options.vertical ? (o.swipeLeft = e + t * i) : (o.swipeLeft = e + t * (o.$list.height() / o.listWidth) * i),
                      !0 === o.options.verticalSwiping && (o.swipeLeft = e + t * i),
                      !0 !== o.options.fade && !1 !== o.options.touchMove && (!0 === o.animating ? ((o.swipeLeft = null), !1) : void o.setCSS(o.swipeLeft))))
            );
        }),
        (r.prototype.swipeStart = function (i) {
            var e,
                t = this;
            if (((t.interrupted = !0), 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow)) return !(t.touchObject = {});
            void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
                (t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX),
                (t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY),
                (t.dragging = !0);
        }),
        (r.prototype.unfilterSlides = r.prototype.slickUnfilter = function () {
            var i = this;
            null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
        }),
        (r.prototype.unload = function () {
            var i = this;
            a(".slick-cloned", i.$slider).remove(),
                i.$dots && i.$dots.remove(),
                i.$prevArrow && i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove(),
                i.$nextArrow && i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove(),
                i.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
        }),
        (r.prototype.unslick = function (i) {
            this.$slider.trigger("unslick", [this, i]), this.destroy();
        }),
        (r.prototype.updateArrows = function () {
            var i = this;
            Math.floor(i.options.slidesToShow / 2),
                !0 === i.options.arrows &&
                    i.slideCount > i.options.slidesToShow &&
                    !i.options.infinite &&
                    (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                    i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                    0 === i.currentSlide
                        ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                        : ((i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode) || (i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode)) &&
                          (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
        }),
        (r.prototype.updateDots = function () {
            var i = this;
            null !== i.$dots &&
                (i.$dots.find("li").removeClass("slick-active").end(),
                i.$dots
                    .find("li")
                    .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
                    .addClass("slick-active"));
        }),
        (r.prototype.visibility = function () {
            this.options.autoplay && (document[this.hidden] ? (this.interrupted = !0) : (this.interrupted = !1));
        }),
        (a.fn.slick = function () {
            for (var i, e = this, t = arguments[0], o = Array.prototype.slice.call(arguments, 1), s = e.length, n = 0; n < s; n++)
                if (("object" == typeof t || void 0 === t ? (e[n].slick = new r(e[n], t)) : (i = e[n].slick[t].apply(e[n].slick, o)), void 0 !== i)) return i;
            return e;
        });
});
!(function (h, i, s, a) {
    function l(t, e) {
        (this.settings = null),
            (this.options = h.extend({}, l.Defaults, e)),
            (this.$element = h(t)),
            (this._handlers = {}),
            (this._plugins = {}),
            (this._supress = {}),
            (this._current = null),
            (this._speed = null),
            (this._coordinates = []),
            (this._breakpoint = null),
            (this._width = null),
            (this._items = []),
            (this._clones = []),
            (this._mergers = []),
            (this._widths = []),
            (this._invalidated = {}),
            (this._pipe = []),
            (this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }),
            (this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }),
            h.each(
                ["onResize", "onThrottledResize"],
                h.proxy(function (t, e) {
                    this._handlers[e] = h.proxy(this[e], this);
                }, this)
            ),
            h.each(
                l.Plugins,
                h.proxy(function (t, e) {
                    this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
                }, this)
            ),
            h.each(
                l.Workers,
                h.proxy(function (t, e) {
                    this._pipe.push({ filter: e.filter, run: h.proxy(e.run, this) });
                }, this)
            ),
            this.setup(),
            this.initialize();
    }
    (l.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: i,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab",
    }),
        (l.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
        (l.Type = { Event: "event", State: "state" }),
        (l.Plugins = {}),
        (l.Workers = [
            {
                filter: ["width", "settings"],
                run: function () {
                    this._width = this.$element.width();
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (t) {
                    t.current = this._items && this._items[this.relative(this._current)];
                },
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    this.$stage.children(".cloned").remove();
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (t) {
                    var e = this.settings.margin || "",
                        i = !this.settings.autoWidth,
                        s = this.settings.rtl,
                        s = { width: "auto", "margin-left": s ? e : "", "margin-right": s ? "" : e };
                    i || this.$stage.children().css(s), (t.css = s);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (t) {
                    var e,
                        i = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                        s = this._items.length,
                        n = !this.settings.autoWidth,
                        o = [];
                    for (t.items = { merge: !1, width: i }; s--; )
                        (e = this._mergers[s]), (e = (this.settings.mergeFit && Math.min(e, this.settings.items)) || e), (t.items.merge = 1 < e || t.items.merge), (o[s] = n ? i * e : this._items[s].width());
                    this._widths = o;
                },
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    var t = [],
                        e = this._items,
                        i = this.settings,
                        s = Math.max(2 * i.items, 4),
                        n = 2 * Math.ceil(e.length / 2),
                        o = i.loop && e.length ? (i.rewind ? s : Math.max(s, n)) : 0,
                        r = "",
                        a = "";
                    for (o /= 2; 0 < o; ) t.push(this.normalize(t.length / 2, !0)), (r += e[t[t.length - 1]][0].outerHTML), t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), (a = e[t[t.length - 1]][0].outerHTML + a), --o;
                    (this._clones = t), h(r).addClass("cloned").appendTo(this.$stage), h(a).addClass("cloned").prependTo(this.$stage);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    for (var t, e, i = this.settings.rtl ? 1 : -1, s = this._clones.length + this._items.length, n = -1, o = []; ++n < s; ) (t = o[n - 1] || 0), (e = this._widths[this.relative(n)] + this.settings.margin), o.push(t + e * i);
                    this._coordinates = o;
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    var t = this.settings.stagePadding,
                        e = this._coordinates,
                        e = { width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t, "padding-left": t || "", "padding-right": t || "" };
                    this.$stage.css(e);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (t) {
                    var e = this._coordinates.length,
                        i = !this.settings.autoWidth,
                        s = this.$stage.children();
                    if (i && t.items.merge) for (; e--; ) (t.css.width = this._widths[this.relative(e)]), s.eq(e).css(t.css);
                    else i && ((t.css.width = t.items.width), s.css(t.css));
                },
            },
            {
                filter: ["items"],
                run: function () {
                    this._coordinates.length < 1 && this.$stage.removeAttr("style");
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (t) {
                    (t.current = t.current ? this.$stage.children().index(t.current) : 0), (t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current))), this.reset(t.current);
                },
            },
            {
                filter: ["position"],
                run: function () {
                    this.animate(this.coordinates(this._current));
                },
            },
            {
                filter: ["width", "position", "items", "settings"],
                run: function () {
                    for (var t, e, i = this.settings.rtl ? 1 : -1, s = 2 * this.settings.stagePadding, n = this.coordinates(this.current()) + s, o = n + this.width() * i, r = [], a = 0, h = this._coordinates.length; a < h; a++)
                        (t = this._coordinates[a - 1] || 0), (e = Math.abs(this._coordinates[a]) + s * i), ((this.op(t, "<=", n) && this.op(t, ">", o)) || (this.op(e, "<", n) && this.op(e, ">", o))) && r.push(a);
                    this.$stage.children(".active").removeClass("active"),
                        this.$stage.children(":eq(" + r.join("), :eq(") + ")").addClass("active"),
                        this.$stage.children(".center").removeClass("center"),
                        this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
                },
            },
        ]),
        (l.prototype.initializeStage = function () {
            (this.$stage = this.$element.find("." + this.settings.stageClass)),
                this.$stage.length ||
                    (this.$element.addClass(this.options.loadingClass),
                    (this.$stage = h("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(h("<div/>", { class: this.settings.stageOuterClass }))),
                    this.$element.append(this.$stage.parent()));
        }),
        (l.prototype.initializeItems = function () {
            var t = this.$element.find(".owl-item");
            t.length
                ? ((this._items = t.get().map(function (t) {
                      return h(t);
                  })),
                  (this._mergers = this._items.map(function () {
                      return 1;
                  })),
                  this.refresh())
                : (this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass));
        }),
        (l.prototype.initialize = function () {
            var t, e;
            this.enter("initializing"),
                this.trigger("initialize"),
                this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
                this.settings.autoWidth &&
                    !this.is("pre-loading") &&
                    ((t = this.$element.find("img")), (e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : a), (e = this.$element.children(e).width()), t.length) &&
                    e <= 0 &&
                    this.preloadAutoWidthImages(t),
                this.initializeStage(),
                this.initializeItems(),
                this.registerEventHandlers(),
                this.leave("initializing"),
                this.trigger("initialized");
        }),
        (l.prototype.isVisible = function () {
            return !this.settings.checkVisibility || this.$element.is(":visible");
        }),
        (l.prototype.setup = function () {
            var e = this.viewport(),
                t = this.options.responsive,
                i = -1,
                s = null;
            t
                ? (h.each(t, function (t) {
                      t <= e && i < t && (i = Number(t));
                  }),
                  "function" == typeof (s = h.extend({}, this.options, t[i])).stagePadding && (s.stagePadding = s.stagePadding()),
                  delete s.responsive,
                  s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i)))
                : (s = h.extend({}, this.options)),
                this.trigger("change", { property: { name: "settings", value: s } }),
                (this._breakpoint = i),
                (this.settings = s),
                this.invalidate("settings"),
                this.trigger("changed", { property: { name: "settings", value: this.settings } });
        }),
        (l.prototype.optionsLogic = function () {
            this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
        }),
        (l.prototype.prepare = function (t) {
            var e = this.trigger("prepare", { content: t });
            return (
                e.data ||
                    (e.data = h("<" + this.settings.itemElement + "/>")
                        .addClass(this.options.itemClass)
                        .append(t)),
                this.trigger("prepared", { content: e.data }),
                e.data
            );
        }),
        (l.prototype.update = function () {
            for (
                var t = 0,
                    e = this._pipe.length,
                    i = h.proxy(function (t) {
                        return this[t];
                    }, this._invalidated),
                    s = {};
                t < e;

            )
                (this._invalidated.all || 0 < h.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(s), t++;
            (this._invalidated = {}), this.is("valid") || this.enter("valid");
        }),
        (l.prototype.width = function (t) {
            switch ((t = t || l.Width.Default)) {
                case l.Width.Inner:
                case l.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin;
            }
        }),
        (l.prototype.refresh = function () {
            this.enter("refreshing"),
                this.trigger("refresh"),
                this.setup(),
                this.optionsLogic(),
                this.$element.addClass(this.options.refreshClass),
                this.update(),
                this.$element.removeClass(this.options.refreshClass),
                this.leave("refreshing"),
                this.trigger("refreshed");
        }),
        (l.prototype.onThrottledResize = function () {
            i.clearTimeout(this.resizeTimer), (this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
        }),
        (l.prototype.onResize = function () {
            return (
                !!this._items.length &&
                this._width !== this.$element.width() &&
                !!this.isVisible() &&
                (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
            );
        }),
        (l.prototype.registerEventHandlers = function () {
            h.support.transition && this.$stage.on(h.support.transition.end + ".owl.core", h.proxy(this.onTransitionEnd, this)),
                !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize),
                this.settings.mouseDrag &&
                    (this.$element.addClass(this.options.dragClass),
                    this.$stage.on("mousedown.owl.core", h.proxy(this.onDragStart, this)),
                    this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                        return !1;
                    })),
                this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", h.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", h.proxy(this.onDragEnd, this)));
        }),
        (l.prototype.onDragStart = function (t) {
            var e = null;
            3 !== t.which &&
                ((e = h.support.transform
                    ? {
                          x: (e = this.$stage
                              .css("transform")
                              .replace(/.*\(|\)| /g, "")
                              .split(","))[16 === e.length ? 12 : 4],
                          y: e[16 === e.length ? 13 : 5],
                      }
                    : ((e = this.$stage.position()), { x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left, y: e.top })),
                this.is("animating") && (h.support.transform ? this.animate(e.x) : this.$stage.stop(), this.invalidate("position")),
                this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type),
                this.speed(0),
                (this._drag.time = new Date().getTime()),
                (this._drag.target = h(t.target)),
                (this._drag.stage.start = e),
                (this._drag.stage.current = e),
                (this._drag.pointer = this.pointer(t)),
                h(s).on("mouseup.owl.core touchend.owl.core", h.proxy(this.onDragEnd, this)),
                h(s).one(
                    "mousemove.owl.core touchmove.owl.core",
                    h.proxy(function (t) {
                        var e = this.difference(this._drag.pointer, this.pointer(t));
                        h(s).on("mousemove.owl.core touchmove.owl.core", h.proxy(this.onDragMove, this)), (Math.abs(e.x) < Math.abs(e.y) && this.is("valid")) || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"));
                    }, this)
                ));
        }),
        (l.prototype.onDragMove = function (t) {
            var e = null,
                i = null,
                s = this.difference(this._drag.pointer, this.pointer(t)),
                n = this.difference(this._drag.stage.start, s);
            this.is("dragging") &&
                (t.preventDefault(),
                this.settings.loop
                    ? ((e = this.coordinates(this.minimum())), (i = this.coordinates(this.maximum() + 1) - e), (n.x = ((((n.x - e) % i) + i) % i) + e))
                    : ((e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
                      (i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
                      (t = this.settings.pullDrag ? (-1 * s.x) / 5 : 0),
                      (n.x = Math.max(Math.min(n.x, e + t), i + t))),
                (this._drag.stage.current = n),
                this.animate(n.x));
        }),
        (l.prototype.onDragEnd = function (t) {
            var t = this.difference(this._drag.pointer, this.pointer(t)),
                e = this._drag.stage.current,
                i = (0 < t.x) ^ this.settings.rtl ? "left" : "right";
            h(s).off(".owl.core"),
                this.$element.removeClass(this.options.grabClass),
                ((0 !== t.x && this.is("dragging")) || !this.is("valid")) &&
                    (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                    this.current(this.closest(e.x, 0 !== t.x ? i : this._drag.direction)),
                    this.invalidate("position"),
                    this.update(),
                    (this._drag.direction = i),
                    3 < Math.abs(t.x) || 300 < new Date().getTime() - this._drag.time) &&
                    this._drag.target.one("click.owl.core", function () {
                        return !1;
                    }),
                this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
        }),
        (l.prototype.closest = function (i, s) {
            var n = -1,
                o = this.width(),
                r = this.coordinates();
            return (
                this.settings.freeDrag ||
                    h.each(
                        r,
                        h.proxy(function (t, e) {
                            return (
                                "left" === s && e - 30 < i && i < e + 30
                                    ? (n = t)
                                    : "right" === s && e - o - 30 < i && i < e - o + 30
                                    ? (n = t + 1)
                                    : this.op(i, "<", e) && this.op(i, ">", r[t + 1] !== a ? r[t + 1] : e - o) && (n = "left" === s ? t + 1 : t),
                                -1 === n
                            );
                        }, this)
                    ),
                this.settings.loop || (this.op(i, ">", r[this.minimum()]) ? (n = i = this.minimum()) : this.op(i, "<", r[this.maximum()]) && (n = i = this.maximum())),
                n
            );
        }),
        (l.prototype.animate = function (t) {
            var e = 0 < this.speed();
            this.is("animating") && this.onTransitionEnd(),
                e && (this.enter("animating"), this.trigger("translate")),
                h.support.transform3d && h.support.transition
                    ? this.$stage.css({ transform: "translate3d(" + t + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") })
                    : e
                    ? this.$stage.animate({ left: t + "px" }, this.speed(), this.settings.fallbackEasing, h.proxy(this.onTransitionEnd, this))
                    : this.$stage.css({ left: t + "px" });
        }),
        (l.prototype.is = function (t) {
            return this._states.current[t] && 0 < this._states.current[t];
        }),
        (l.prototype.current = function (t) {
            if (t !== a) {
                if (0 === this._items.length) return a;
                var e;
                (t = this.normalize(t)),
                    this._current !== t &&
                        ((e = this.trigger("change", { property: { name: "position", value: t } })).data !== a && (t = this.normalize(e.data)),
                        (this._current = t),
                        this.invalidate("position"),
                        this.trigger("changed", { property: { name: "position", value: this._current } }));
            }
            return this._current;
        }),
        (l.prototype.invalidate = function (t) {
            return (
                "string" === h.type(t) && ((this._invalidated[t] = !0), this.is("valid")) && this.leave("valid"),
                h.map(this._invalidated, function (t, e) {
                    return e;
                })
            );
        }),
        (l.prototype.reset = function (t) {
            (t = this.normalize(t)) !== a && ((this._speed = 0), (this._current = t), this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]));
        }),
        (l.prototype.normalize = function (t, e) {
            var i = this._items.length,
                e = e ? 0 : this._clones.length;
            return !this.isNumeric(t) || i < 1 ? (t = a) : (t < 0 || i + e <= t) && (t = ((((t - e / 2) % i) + i) % i) + e / 2), t;
        }),
        (l.prototype.relative = function (t) {
            return (t -= this._clones.length / 2), this.normalize(t, !0);
        }),
        (l.prototype.maximum = function (t) {
            var e,
                i,
                s,
                n = this.settings,
                o = this._coordinates.length;
            if (n.loop) o = this._clones.length / 2 + this._items.length - 1;
            else if (n.autoWidth || n.merge) {
                if ((e = this._items.length)) for (i = this._items[--e].width(), s = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > s); );
                o = e + 1;
            } else o = n.center ? this._items.length - 1 : this._items.length - n.items;
            return t && (o -= this._clones.length / 2), Math.max(o, 0);
        }),
        (l.prototype.minimum = function (t) {
            return t ? 0 : this._clones.length / 2;
        }),
        (l.prototype.items = function (t) {
            return t === a ? this._items.slice() : ((t = this.normalize(t, !0)), this._items[t]);
        }),
        (l.prototype.mergers = function (t) {
            return t === a ? this._mergers.slice() : ((t = this.normalize(t, !0)), this._mergers[t]);
        }),
        (l.prototype.clones = function (i) {
            function s(t) {
                return t % 2 == 0 ? n + t / 2 : e - (t + 1) / 2;
            }
            var e = this._clones.length / 2,
                n = e + this._items.length;
            return i === a
                ? h.map(this._clones, function (t, e) {
                      return s(e);
                  })
                : h.map(this._clones, function (t, e) {
                      return t === i ? s(e) : null;
                  });
        }),
        (l.prototype.speed = function (t) {
            return t !== a && (this._speed = t), this._speed;
        }),
        (l.prototype.coordinates = function (t) {
            var e,
                i = 1,
                s = t - 1;
            return t === a
                ? h.map(
                      this._coordinates,
                      h.proxy(function (t, e) {
                          return this.coordinates(e);
                      }, this)
                  )
                : (this.settings.center ? (this.settings.rtl && ((i = -1), (s = t + 1)), (e = this._coordinates[t]), (e += ((this.width() - e + (this._coordinates[s] || 0)) / 2) * i)) : (e = this._coordinates[s] || 0), Math.ceil(e));
        }),
        (l.prototype.duration = function (t, e, i) {
            return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed);
        }),
        (l.prototype.to = function (t, e) {
            var i = this.current(),
                s = t - this.relative(i),
                n = (0 < s) - (s < 0),
                o = this._items.length,
                r = this.minimum(),
                a = this.maximum();
            this.settings.loop
                ? (!this.settings.rewind && Math.abs(s) > o / 2 && (s += -1 * n * o), (n = (((((t = i + s) - r) % o) + o) % o) + r) !== t && n - s <= a && 0 < n - s && this.reset((i = (t = n) - s)))
                : (t = this.settings.rewind ? ((t % (a += 1)) + a) % a : Math.max(r, Math.min(a, t))),
                this.speed(this.duration(i, t, e)),
                this.current(t),
                this.isVisible() && this.update();
        }),
        (l.prototype.next = function (t) {
            (t = t || !1), this.to(this.relative(this.current()) + 1, t);
        }),
        (l.prototype.prev = function (t) {
            (t = t || !1), this.to(this.relative(this.current()) - 1, t);
        }),
        (l.prototype.onTransitionEnd = function (t) {
            if (t !== a && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated");
        }),
        (l.prototype.viewport = function () {
            var t;
            return (
                this.options.responsiveBaseElement !== i
                    ? (t = h(this.options.responsiveBaseElement).width())
                    : i.innerWidth
                    ? (t = i.innerWidth)
                    : s.documentElement && s.documentElement.clientWidth
                    ? (t = s.documentElement.clientWidth)
                    : console.warn("Can not detect viewport width."),
                t
            );
        }),
        (l.prototype.replace = function (t) {
            this.$stage.empty(),
                (this._items = []),
                (t = t && (t instanceof jQuery ? t : h(t))),
                (t = this.settings.nestedItemSelector ? t.find("." + this.settings.nestedItemSelector) : t)
                    .filter(function () {
                        return 1 === this.nodeType;
                    })
                    .each(
                        h.proxy(function (t, e) {
                            (e = this.prepare(e)), this.$stage.append(e), this._items.push(e), this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
                        }, this)
                    ),
                this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                this.invalidate("items");
        }),
        (l.prototype.add = function (t, e) {
            var i = this.relative(this._current);
            (e = e === a ? this._items.length : this.normalize(e, !0)),
                (t = t instanceof jQuery ? t : h(t)),
                this.trigger("add", { content: t, position: e }),
                (t = this.prepare(t)),
                0 === this._items.length || e === this._items.length
                    ? (0 === this._items.length && this.$stage.append(t),
                      0 !== this._items.length && this._items[e - 1].after(t),
                      this._items.push(t),
                      this._mergers.push(+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1))
                    : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, +t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
                this._items[i] && this.reset(this._items[i].index()),
                this.invalidate("items"),
                this.trigger("added", { content: t, position: e });
        }),
        (l.prototype.remove = function (t) {
            (t = this.normalize(t, !0)) !== a &&
                (this.trigger("remove", { content: this._items[t], position: t }),
                this._items[t].remove(),
                this._items.splice(t, 1),
                this._mergers.splice(t, 1),
                this.invalidate("items"),
                this.trigger("removed", { content: null, position: t }));
        }),
        (l.prototype.preloadAutoWidthImages = function (t) {
            t.each(
                h.proxy(function (t, e) {
                    this.enter("pre-loading"),
                        (e = h(e)),
                        h(new Image())
                            .one(
                                "load",
                                h.proxy(function (t) {
                                    e.attr("src", t.target.src), e.css("opacity", 1), this.leave("pre-loading"), this.is("pre-loading") || this.is("initializing") || this.refresh();
                                }, this)
                            )
                            .attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"));
                }, this)
            );
        }),
        (l.prototype.destroy = function () {
            for (var t in (this.$element.off(".owl.core"),
            this.$stage.off(".owl.core"),
            h(s).off(".owl.core"),
            !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer), this.off(i, "resize", this._handlers.onThrottledResize)),
            this._plugins))
                this._plugins[t].destroy();
            this.$stage.children(".cloned").remove(),
                this.$stage.unwrap(),
                this.$stage.children().contents().unwrap(),
                this.$stage.children().unwrap(),
                this.$stage.remove(),
                this.$element
                    .removeClass(this.options.refreshClass)
                    .removeClass(this.options.loadingClass)
                    .removeClass(this.options.loadedClass)
                    .removeClass(this.options.rtlClass)
                    .removeClass(this.options.dragClass)
                    .removeClass(this.options.grabClass)
                    .attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), ""))
                    .removeData("owl.carousel");
        }),
        (l.prototype.op = function (t, e, i) {
            var s = this.settings.rtl;
            switch (e) {
                case "<":
                    return s ? i < t : t < i;
                case ">":
                    return s ? t < i : i < t;
                case ">=":
                    return s ? t <= i : i <= t;
                case "<=":
                    return s ? i <= t : t <= i;
            }
        }),
        (l.prototype.on = function (t, e, i, s) {
            t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i);
        }),
        (l.prototype.off = function (t, e, i, s) {
            t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i);
        }),
        (l.prototype.trigger = function (t, e, i, s, n) {
            var o = { item: { count: this._items.length, index: this.current() } },
                r = h.camelCase(
                    h
                        .grep(["on", t, i], function (t) {
                            return t;
                        })
                        .join("-")
                        .toLowerCase()
                ),
                a = h.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), h.extend({ relatedTarget: this }, o, e));
            return (
                this._supress[t] ||
                    (h.each(this._plugins, function (t, e) {
                        e.onTrigger && e.onTrigger(a);
                    }),
                    this.register({ type: l.Type.Event, name: t }),
                    this.$element.trigger(a),
                    this.settings && "function" == typeof this.settings[r] && this.settings[r].call(this, a)),
                a
            );
        }),
        (l.prototype.enter = function (t) {
            h.each(
                [t].concat(this._states.tags[t] || []),
                h.proxy(function (t, e) {
                    this._states.current[e] === a && (this._states.current[e] = 0), this._states.current[e]++;
                }, this)
            );
        }),
        (l.prototype.leave = function (t) {
            h.each(
                [t].concat(this._states.tags[t] || []),
                h.proxy(function (t, e) {
                    this._states.current[e]--;
                }, this)
            );
        }),
        (l.prototype.register = function (i) {
            var e;
            i.type === l.Type.Event
                ? (h.event.special[i.name] || (h.event.special[i.name] = {}),
                  h.event.special[i.name].owl ||
                      ((e = h.event.special[i.name]._default),
                      (h.event.special[i.name]._default = function (t) {
                          return !e || !e.apply || (t.namespace && -1 !== t.namespace.indexOf("owl")) ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments);
                      }),
                      (h.event.special[i.name].owl = !0)))
                : i.type === l.Type.State &&
                  (this._states.tags[i.name] ? (this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags)) : (this._states.tags[i.name] = i.tags),
                  (this._states.tags[i.name] = h.grep(
                      this._states.tags[i.name],
                      h.proxy(function (t, e) {
                          return h.inArray(t, this._states.tags[i.name]) === e;
                      }, this)
                  )));
        }),
        (l.prototype.suppress = function (t) {
            h.each(
                t,
                h.proxy(function (t, e) {
                    this._supress[e] = !0;
                }, this)
            );
        }),
        (l.prototype.release = function (t) {
            h.each(
                t,
                h.proxy(function (t, e) {
                    delete this._supress[e];
                }, this)
            );
        }),
        (l.prototype.pointer = function (t) {
            var e = { x: null, y: null };
            return (
                (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX
                    ? ((e.x = t.pageX), (e.y = t.pageY))
                    : ((e.x = t.clientX), (e.y = t.clientY)),
                e
            );
        }),
        (l.prototype.isNumeric = function (t) {
            return !isNaN(parseFloat(t));
        }),
        (l.prototype.difference = function (t, e) {
            return { x: t.x - e.x, y: t.y - e.y };
        }),
        (h.fn.owlCarousel = function (e) {
            var s = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var t = h(this),
                    i = t.data("owl.carousel");
                i ||
                    ((i = new l(this, "object" == typeof e && e)),
                    t.data("owl.carousel", i),
                    h.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (t, e) {
                        i.register({ type: l.Type.Event, name: e }),
                            i.$element.on(
                                e + ".owl.carousel.core",
                                h.proxy(function (t) {
                                    t.namespace && t.relatedTarget !== this && (this.suppress([e]), i[e].apply(this, [].slice.call(arguments, 1)), this.release([e]));
                                }, i)
                            );
                    })),
                    "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, s);
            });
        }),
        (h.fn.owlCarousel.Constructor = l);
})(window.Zepto || window.jQuery, window, document),
    (function (e, i) {
        function s(t) {
            (this._core = t),
                (this._interval = null),
                (this._visible = null),
                (this._handlers = {
                    "initialized.owl.carousel": e.proxy(function (t) {
                        t.namespace && this._core.settings.autoRefresh && this.watch();
                    }, this),
                }),
                (this._core.options = e.extend({}, s.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        }
        (s.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
            (s.prototype.watch = function () {
                this._interval || ((this._visible = this._core.isVisible()), (this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
            }),
            (s.prototype.refresh = function () {
                this._core.isVisible() !== this._visible && ((this._visible = !this._visible), this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible) && this._core.invalidate("width") && this._core.refresh();
            }),
            (s.prototype.destroy = function () {
                var t, e;
                for (t in (i.clearInterval(this._interval), this._handlers)) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, n) {
        function e(t) {
            (this._core = t),
                (this._loaded = []),
                (this._handlers = {
                    "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (t) {
                        if (t.namespace && this._core.settings && this._core.settings.lazyLoad && ((t.property && "position" == t.property.name) || "initialized" == t.type)) {
                            var e = this._core.settings,
                                i = (e.center && Math.ceil(e.items / 2)) || e.items,
                                s = (e.center && -1 * i) || 0,
                                n = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + s,
                                o = this._core.clones().length,
                                r = a.proxy(function (t, e) {
                                    this.load(e);
                                }, this);
                            for (0 < e.lazyLoadEager && ((i += e.lazyLoadEager), e.loop) && ((n -= e.lazyLoadEager), i++); s++ < i; ) this.load(o / 2 + this._core.relative(n)), o && a.each(this._core.clones(this._core.relative(n)), r), n++;
                        }
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        }
        (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
            (e.prototype.load = function (t) {
                var t = this._core.$stage.children().eq(t),
                    e = t && t.find(".owl-lazy");
                !e ||
                    -1 < a.inArray(t.get(0), this._loaded) ||
                    (e.each(
                        a.proxy(function (t, e) {
                            var i = a(e),
                                s = (1 < n.devicePixelRatio && i.attr("data-src-retina")) || i.attr("data-src") || i.attr("data-srcset");
                            this._core.trigger("load", { element: i, url: s }, "lazy"),
                                i.is("img")
                                    ? i
                                          .one(
                                              "load.owl.lazy",
                                              a.proxy(function () {
                                                  i.css("opacity", 1), this._core.trigger("loaded", { element: i, url: s }, "lazy");
                                              }, this)
                                          )
                                          .attr("src", s)
                                    : i.is("source")
                                    ? i
                                          .one(
                                              "load.owl.lazy",
                                              a.proxy(function () {
                                                  this._core.trigger("loaded", { element: i, url: s }, "lazy");
                                              }, this)
                                          )
                                          .attr("srcset", s)
                                    : (((e = new Image()).onload = a.proxy(function () {
                                          i.css({ "background-image": 'url("' + s + '")', opacity: "1" }), this._core.trigger("loaded", { element: i, url: s }, "lazy");
                                      }, this)),
                                      (e.src = s));
                        }, this)
                    ),
                    this._loaded.push(t.get(0)));
            }),
            (e.prototype.destroy = function () {
                var t, e;
                for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (n, i) {
        function s(t) {
            (this._core = t),
                (this._previousHeight = null),
                (this._handlers = {
                    "initialized.owl.carousel refreshed.owl.carousel": n.proxy(function (t) {
                        t.namespace && this._core.settings.autoHeight && this.update();
                    }, this),
                    "changed.owl.carousel": n.proxy(function (t) {
                        t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update();
                    }, this),
                    "loaded.owl.lazy": n.proxy(function (t) {
                        t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
                    }, this),
                }),
                (this._core.options = n.extend({}, s.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                (this._intervalId = null);
            var e = this;
            n(i).on("load", function () {
                e._core.settings.autoHeight && e.update();
            }),
                n(i).resize(function () {
                    e._core.settings.autoHeight &&
                        (null != e._intervalId && clearTimeout(e._intervalId),
                        (e._intervalId = setTimeout(function () {
                            e.update();
                        }, 250)));
                });
        }
        (s.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
            (s.prototype.update = function () {
                var t = this._core._current,
                    e = t + this._core.settings.items,
                    i = this._core.settings.lazyLoad,
                    t = this._core.$stage.children().toArray().slice(t, e),
                    s = [],
                    e = 0;
                n.each(t, function (t, e) {
                    s.push(n(e).height());
                }),
                    (e = Math.max.apply(null, s)) <= 1 && i && this._previousHeight && (e = this._previousHeight),
                    (this._previousHeight = e),
                    this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass);
            }),
            (s.prototype.destroy = function () {
                var t, e;
                for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (n.fn.owlCarousel.Constructor.Plugins.AutoHeight = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (c, e) {
        function i(t) {
            (this._core = t),
                (this._videos = {}),
                (this._playing = null),
                (this._handlers = {
                    "initialized.owl.carousel": c.proxy(function (t) {
                        t.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
                    }, this),
                    "resize.owl.carousel": c.proxy(function (t) {
                        t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault();
                    }, this),
                    "refreshed.owl.carousel": c.proxy(function (t) {
                        t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
                    }, this),
                    "changed.owl.carousel": c.proxy(function (t) {
                        t.namespace && "position" === t.property.name && this._playing && this.stop();
                    }, this),
                    "prepared.owl.carousel": c.proxy(function (t) {
                        var e;
                        t.namespace && (e = c(t.content).find(".owl-video")).length && (e.css("display", "none"), this.fetch(e, c(t.content)));
                    }, this),
                }),
                (this._core.options = c.extend({}, i.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                this._core.$element.on(
                    "click.owl.video",
                    ".owl-video-play-icon",
                    c.proxy(function (t) {
                        this.play(t);
                    }, this)
                );
        }
        (i.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (i.prototype.fetch = function (t, e) {
                var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
                    s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                    n = t.attr("data-width") || this._core.settings.videoWidth,
                    o = t.attr("data-height") || this._core.settings.videoHeight,
                    r = t.attr("href");
                if (!r) throw new Error("Missing video URL.");
                if (
                    -1 <
                    (s = r.match(
                        /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                    ))[3].indexOf("youtu")
                )
                    i = "youtube";
                else if (-1 < s[3].indexOf("vimeo")) i = "vimeo";
                else {
                    if (!(-1 < s[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
                    i = "vzaar";
                }
                (s = s[6]), (this._videos[r] = { type: i, id: s, width: n, height: o }), e.attr("data-video", r), this.thumbnail(t, this._videos[r]);
            }),
            (i.prototype.thumbnail = function (e, t) {
                function i(t) {
                    (s = l.lazyLoad ? c("<div/>", { class: "owl-video-tn " + h, srcType: t }) : c("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + t + ")" })),
                        e.after(s),
                        e.after('<div class="owl-video-play-icon"></div>');
                }
                var s,
                    n,
                    o = t.width && t.height ? "width:" + t.width + "px;height:" + t.height + "px;" : "",
                    r = e.find("img"),
                    a = "src",
                    h = "",
                    l = this._core.settings;
                if ((e.wrap(c("<div/>", { class: "owl-video-wrapper", style: o })), this._core.settings.lazyLoad && ((a = "data-src"), (h = "owl-lazy")), r.length)) return i(r.attr(a)), r.remove(), !1;
                "youtube" === t.type
                    ? ((n = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg"), i(n))
                    : "vimeo" === t.type
                    ? c.ajax({
                          type: "GET",
                          url: "//vimeo.com/api/v2/video/" + t.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (t) {
                              (n = t[0].thumbnail_large), i(n);
                          },
                      })
                    : "vzaar" === t.type &&
                      c.ajax({
                          type: "GET",
                          url: "//vzaar.com/api/videos/" + t.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (t) {
                              (n = t.framegrab_url), i(n);
                          },
                      });
            }),
            (i.prototype.stop = function () {
                this._core.trigger("stop", null, "video"),
                    this._playing.find(".owl-video-frame").remove(),
                    this._playing.removeClass("owl-video-playing"),
                    (this._playing = null),
                    this._core.leave("playing"),
                    this._core.trigger("stopped", null, "video");
            }),
            (i.prototype.play = function (t) {
                var e,
                    t = c(t.target).closest("." + this._core.settings.itemClass),
                    i = this._videos[t.attr("data-video")],
                    s = i.width || "100%",
                    n = i.height || this._core.$stage.height();
                this._playing ||
                    (this._core.enter("playing"),
                    this._core.trigger("play", null, "video"),
                    (t = this._core.items(this._core.relative(t.index()))),
                    this._core.reset(t.index()),
                    (e = c('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", n),
                    e.attr("width", s),
                    "youtube" === i.type
                        ? e.attr("src", "//www.youtube.com/embed/" + i.id + "?autoplay=1&rel=0&v=" + i.id)
                        : "vimeo" === i.type
                        ? e.attr("src", "//player.vimeo.com/video/" + i.id + "?autoplay=1")
                        : "vzaar" === i.type && e.attr("src", "//view.vzaar.com/" + i.id + "/player?autoplay=true"),
                    c(e).wrap('<div class="owl-video-frame" />').insertAfter(t.find(".owl-video")),
                    (this._playing = t.addClass("owl-video-playing")));
            }),
            (i.prototype.isInFullScreen = function () {
                var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
                return t && c(t).parent().hasClass("owl-video-frame");
            }),
            (i.prototype.destroy = function () {
                var t, e;
                for (t in (this._core.$element.off("click.owl.video"), this._handlers)) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (c.fn.owlCarousel.Constructor.Plugins.Video = i);
    })(window.Zepto || window.jQuery, (window, document)),
    (function (r) {
        function e(t) {
            (this.core = t),
                (this.core.options = r.extend({}, e.Defaults, this.core.options)),
                (this.swapping = !0),
                (this.previous = void 0),
                (this.next = void 0),
                (this.handlers = {
                    "change.owl.carousel": r.proxy(function (t) {
                        t.namespace && "position" == t.property.name && ((this.previous = this.core.current()), (this.next = t.property.value));
                    }, this),
                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": r.proxy(function (t) {
                        t.namespace && (this.swapping = "translated" == t.type);
                    }, this),
                    "translate.owl.carousel": r.proxy(function (t) {
                        t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
                    }, this),
                }),
                this.core.$element.on(this.handlers);
        }
        (e.Defaults = { animateOut: !1, animateIn: !1 }),
            (e.prototype.swap = function () {
                var t, e, i, s, n, o;
                1 === this.core.settings.items &&
                    r.support.animation &&
                    r.support.transition &&
                    (this.core.speed(0),
                    (e = r.proxy(this.clear, this)),
                    (i = this.core.$stage.children().eq(this.previous)),
                    (s = this.core.$stage.children().eq(this.next)),
                    (n = this.core.settings.animateIn),
                    (o = this.core.settings.animateOut),
                    this.core.current() !== this.previous) &&
                    (o &&
                        ((t = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
                        i
                            .one(r.support.animation.end, e)
                            .css({ left: t + "px" })
                            .addClass("animated owl-animated-out")
                            .addClass(o)),
                    n) &&
                    s.one(r.support.animation.end, e).addClass("animated owl-animated-in").addClass(n);
            }),
            (e.prototype.clear = function (t) {
                r(t.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
            }),
            (e.prototype.destroy = function () {
                var t, e;
                for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (r.fn.owlCarousel.Constructor.Plugins.Animate = e);
    })(window.Zepto || window.jQuery, (window, document)),
    (function (s, n, e) {
        function i(t) {
            (this._core = t),
                (this._call = null),
                (this._time = 0),
                (this._timeout = 0),
                (this._paused = !0),
                (this._handlers = {
                    "changed.owl.carousel": s.proxy(function (t) {
                        t.namespace && "settings" === t.property.name ? (this._core.settings.autoplay ? this.play() : this.stop()) : t.namespace && "position" === t.property.name && this._paused && (this._time = 0);
                    }, this),
                    "initialized.owl.carousel": s.proxy(function (t) {
                        t.namespace && this._core.settings.autoplay && this.play();
                    }, this),
                    "play.owl.autoplay": s.proxy(function (t, e, i) {
                        t.namespace && this.play(e, i);
                    }, this),
                    "stop.owl.autoplay": s.proxy(function (t) {
                        t.namespace && this.stop();
                    }, this),
                    "mouseover.owl.autoplay": s.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "mouseleave.owl.autoplay": s.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
                    }, this),
                    "touchstart.owl.core": s.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "touchend.owl.core": s.proxy(function () {
                        this._core.settings.autoplayHoverPause && this.play();
                    }, this),
                }),
                this._core.$element.on(this._handlers),
                (this._core.options = s.extend({}, i.Defaults, this._core.options));
        }
        (i.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
            (i.prototype._next = function (t) {
                (this._call = n.setTimeout(s.proxy(this._next, this, t), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read())),
                    this._core.is("interacting") || e.hidden || this._core.next(t || this._core.settings.autoplaySpeed);
            }),
            (i.prototype.read = function () {
                return new Date().getTime() - this._time;
            }),
            (i.prototype.play = function (t, e) {
                var i;
                this._core.is("rotating") || this._core.enter("rotating"),
                    (t = t || this._core.settings.autoplayTimeout),
                    (i = Math.min(this._time % (this._timeout || t), t)),
                    this._paused ? ((this._time = this.read()), (this._paused = !1)) : n.clearTimeout(this._call),
                    (this._time += (this.read() % t) - i),
                    (this._timeout = t),
                    (this._call = n.setTimeout(s.proxy(this._next, this, e), t - i));
            }),
            (i.prototype.stop = function () {
                this._core.is("rotating") && ((this._time = 0), (this._paused = !0), n.clearTimeout(this._call), this._core.leave("rotating"));
            }),
            (i.prototype.pause = function () {
                this._core.is("rotating") && !this._paused && ((this._time = this.read()), (this._paused = !0), n.clearTimeout(this._call));
            }),
            (i.prototype.destroy = function () {
                var t, e;
                for (t in (this.stop(), this._handlers)) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (s.fn.owlCarousel.Constructor.Plugins.autoplay = i);
    })(window.Zepto || window.jQuery, window, document),
    (function (n) {
        "use strict";
        function e(t) {
            (this._core = t),
                (this._initialized = !1),
                (this._pages = []),
                (this._controls = {}),
                (this._templates = []),
                (this.$element = this._core.$element),
                (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
                (this._handlers = {
                    "prepared.owl.carousel": n.proxy(function (t) {
                        t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + n(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
                    }, this),
                    "added.owl.carousel": n.proxy(function (t) {
                        t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop());
                    }, this),
                    "remove.owl.carousel": n.proxy(function (t) {
                        t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1);
                    }, this),
                    "changed.owl.carousel": n.proxy(function (t) {
                        t.namespace && "position" == t.property.name && this.draw();
                    }, this),
                    "initialized.owl.carousel": n.proxy(function (t) {
                        t.namespace &&
                            !this._initialized &&
                            (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), (this._initialized = !0), this._core.trigger("initialized", null, "navigation"));
                    }, this),
                    "refreshed.owl.carousel": n.proxy(function (t) {
                        t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
                    }, this),
                }),
                (this._core.options = n.extend({}, e.Defaults, this._core.options)),
                this.$element.on(this._handlers);
        }
        (e.Defaults = {
            nav: !1,
            navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
        }),
            (e.prototype.initialize = function () {
                var t,
                    i = this._core.settings;
                for (t in ((this._controls.$relative = (i.navContainer ? n(i.navContainer) : n("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled")),
                (this._controls.$previous = n("<" + i.navElement + ">")
                    .addClass(i.navClass[0])
                    .html(i.navText[0])
                    .prependTo(this._controls.$relative)
                    .on(
                        "click",
                        n.proxy(function (t) {
                            this.prev(i.navSpeed);
                        }, this)
                    )),
                (this._controls.$next = n("<" + i.navElement + ">")
                    .addClass(i.navClass[1])
                    .html(i.navText[1])
                    .appendTo(this._controls.$relative)
                    .on(
                        "click",
                        n.proxy(function (t) {
                            this.next(i.navSpeed);
                        }, this)
                    )),
                i.dotsData || (this._templates = [n('<button role="button">').addClass(i.dotClass).append(n("<span>")).prop("outerHTML")]),
                (this._controls.$absolute = (i.dotsContainer ? n(i.dotsContainer) : n("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled")),
                this._controls.$absolute.on(
                    "click",
                    "button",
                    n.proxy(function (t) {
                        var e = (n(t.target).parent().is(this._controls.$absolute) ? n(t.target) : n(t.target).parent()).index();
                        t.preventDefault(), this.to(e, i.dotsSpeed);
                    }, this)
                ),
                this._overrides))
                    this._core[t] = n.proxy(this[t], this);
            }),
            (e.prototype.destroy = function () {
                var t,
                    e,
                    i,
                    s,
                    n = this._core.settings;
                for (t in this._handlers) this.$element.off(t, this._handlers[t]);
                for (e in this._controls) "$relative" === e && n.navContainer ? this._controls[e].html("") : this._controls[e].remove();
                for (s in this.overides) this._core[s] = this._overrides[s];
                for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null);
            }),
            (e.prototype.update = function () {
                var t,
                    e,
                    i = this._core.clones().length / 2,
                    s = i + this._core.items().length,
                    n = this._core.maximum(!0),
                    o = this._core.settings,
                    r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
                if (("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy))
                    for (this._pages = [], t = i, e = 0; t < s; t++) {
                        if (r <= e || 0 === e) {
                            if ((this._pages.push({ start: Math.min(n, t - i), end: t - i + r - 1 }), Math.min(n, t - i) === n)) break;
                            (e = 0), 0;
                        }
                        e += this._core.mergers(this._core.relative(t));
                    }
            }),
            (e.prototype.draw = function () {
                var t = this._core.settings,
                    e = this._core.items().length <= t.items,
                    i = this._core.relative(this._core.current()),
                    s = t.loop || t.rewind;
                this._controls.$relative.toggleClass("disabled", !t.nav || e),
                    t.nav && (this._controls.$previous.toggleClass("disabled", !s && i <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && i >= this._core.maximum(!0))),
                    this._controls.$absolute.toggleClass("disabled", !t.dots || e),
                    t.dots &&
                        ((s = this._pages.length - this._controls.$absolute.children().length),
                        t.dotsData && 0 != s
                            ? this._controls.$absolute.html(this._templates.join(""))
                            : 0 < s
                            ? this._controls.$absolute.append(new Array(1 + s).join(this._templates[0]))
                            : s < 0 && this._controls.$absolute.children().slice(s).remove(),
                        this._controls.$absolute.find(".active").removeClass("active"),
                        this._controls.$absolute.children().eq(n.inArray(this.current(), this._pages)).addClass("active"));
            }),
            (e.prototype.onTrigger = function (t) {
                var e = this._core.settings;
                t.page = { index: n.inArray(this.current(), this._pages), count: this._pages.length, size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items) };
            }),
            (e.prototype.current = function () {
                var i = this._core.relative(this._core.current());
                return n
                    .grep(
                        this._pages,
                        n.proxy(function (t, e) {
                            return t.start <= i && t.end >= i;
                        }, this)
                    )
                    .pop();
            }),
            (e.prototype.getPosition = function (t) {
                var e,
                    i,
                    s = this._core.settings;
                return (
                    "page" == s.slideBy
                        ? ((e = n.inArray(this.current(), this._pages)), (i = this._pages.length), t ? ++e : --e, (e = this._pages[((e % i) + i) % i].start))
                        : ((e = this._core.relative(this._core.current())), (i = this._core.items().length), t ? (e += s.slideBy) : (e -= s.slideBy)),
                    e
                );
            }),
            (e.prototype.next = function (t) {
                n.proxy(this._overrides.to, this._core)(this.getPosition(!0), t);
            }),
            (e.prototype.prev = function (t) {
                n.proxy(this._overrides.to, this._core)(this.getPosition(!1), t);
            }),
            (e.prototype.to = function (t, e, i) {
                !i && this._pages.length ? ((i = this._pages.length), n.proxy(this._overrides.to, this._core)(this._pages[((t % i) + i) % i].start, e)) : n.proxy(this._overrides.to, this._core)(t, e);
            }),
            (n.fn.owlCarousel.Constructor.Plugins.Navigation = e);
    })(window.Zepto || window.jQuery, (window, document)),
    (function (s, n) {
        "use strict";
        function e(t) {
            (this._core = t),
                (this._hashes = {}),
                (this.$element = this._core.$element),
                (this._handlers = {
                    "initialized.owl.carousel": s.proxy(function (t) {
                        t.namespace && "URLHash" === this._core.settings.startPosition && s(n).trigger("hashchange.owl.navigation");
                    }, this),
                    "prepared.owl.carousel": s.proxy(function (t) {
                        var e;
                        t.namespace && (e = s(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash")) && (this._hashes[e] = t.content);
                    }, this),
                    "changed.owl.carousel": s.proxy(function (t) {
                        var i;
                        t.namespace &&
                            "position" === t.property.name &&
                            ((i = this._core.items(this._core.relative(this._core.current()))),
                            (t = s
                                .map(this._hashes, function (t, e) {
                                    return t === i ? e : null;
                                })
                                .join())) &&
                            n.location.hash.slice(1) !== t &&
                            (n.location.hash = t);
                    }, this),
                }),
                (this._core.options = s.extend({}, e.Defaults, this._core.options)),
                this.$element.on(this._handlers),
                s(n).on(
                    "hashchange.owl.navigation",
                    s.proxy(function (t) {
                        var e = n.location.hash.substring(1),
                            i = this._core.$stage.children(),
                            i = this._hashes[e] && i.index(this._hashes[e]);
                        void 0 !== i && i !== this._core.current() && this._core.to(this._core.relative(i), !1, !0);
                    }, this)
                );
        }
        (e.Defaults = { URLhashListener: !1 }),
            (e.prototype.destroy = function () {
                var t, e;
                for (t in (s(n).off("hashchange.owl.navigation"), this._handlers)) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (s.fn.owlCarousel.Constructor.Plugins.Hash = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (n) {
        function e(t, i) {
            var s = !1,
                e = t.charAt(0).toUpperCase() + t.slice(1);
            return (
                n.each((t + " " + r.join(e + " ") + e).split(" "), function (t, e) {
                    if (void 0 !== o[e]) return (s = !i || e), !1;
                }),
                s
            );
        }
        function t(t) {
            return e(t, !0);
        }
        var o = n("<support>").get(0).style,
            r = "Webkit Moz O ms".split(" "),
            i = {
                transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } },
                animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } },
            },
            s = function () {
                return !!e("transform");
            },
            a = function () {
                return !!e("perspective");
            },
            h = function () {
                return !!e("animation");
            };
        !(function () {
            return !!e("transition");
        })() || ((n.support.transition = new String(t("transition"))), (n.support.transition.end = i.transition.end[n.support.transition])),
            h() && ((n.support.animation = new String(t("animation"))), (n.support.animation.end = i.animation.end[n.support.animation])),
            s() && ((n.support.transform = new String(t("transform"))), (n.support.transform3d = a()));
    })(window.Zepto || window.jQuery, (window, document));
("use strict");
!(function (e, t) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        if (!e.document) throw new Error("HC Off-canvas Nav requires a browser to run.");
        module.exports = t(e);
    } else "function" == typeof define && define.amd ? define("hcOffcanvasNav", [], t(e)) : t(e);
})("undefined" != typeof window ? window : this, function (ae) {
    function r(e, t) {
        if (((t = t || {}), !(e = "string" == typeof e ? ("#" === e.charAt(0) && -1 === e.indexOf(" ") ? ie.querySelector(e) : ie.querySelectorAll(e)) : e))) return !1;
        var Z = r.Helpers,
            ee =
                (void 0 !== t.maxWidth && (Z.deprecated("maxWidth", "disableAt", "option"), (t.disableAt = t.maxWidth)),
                Object.assign(
                    {},
                    {
                        width: 280,
                        height: "auto",
                        disableAt: !1,
                        pushContent: null,
                        swipeGestures: !0,
                        expanded: !1,
                        position: "left",
                        levelOpen: "overlap",
                        levelSpacing: 40,
                        levelTitles: !0,
                        closeOpenLevels: !0,
                        closeActiveLevel: !1,
                        navTitle: null,
                        navClass: "",
                        disableBody: !0,
                        closeOnClick: !0,
                        closeOnEsc: !0,
                        customToggle: null,
                        activeToggleClass: null,
                        bodyInsert: "prepend",
                        keepClasses: !0,
                        removeOriginalNav: !1,
                        rtl: !1,
                        insertClose: !0,
                        insertBack: !0,
                        levelTitleAsBack: !0,
                        labelClose: "",
                        labelBack: "Back",
                    },
                    t
                ));
        function te(e) {
            if (ne.length) {
                for (var t = !1, n = (e = "string" == typeof e ? [e] : e).length, a = 0; a < n; a++) -1 !== ne.indexOf(e[a]) && (t = !0);
                return t;
            }
        }
        function n(e) {
            var b, s, o, v, d, u, n, p, H, f, h, m, D, g, y, E, L, A, x, C, O, k, N, T, i, r, l, c, w, U, S, z, I, a, t, X, M, Q, V, W, F, Y;
            if (e.querySelector("ul") || "UL" === e.tagName)
                return (
                    (b = "hc-nav-" + ++se),
                    (s = Z.printStyle("hc-offcanvas-" + se + "-style")),
                    (o = "keydown.hcOffcanvasNav"),
                    (v = ee.activeToggleClass || "toggle-open"),
                    (d = Z.createElement("nav", { id: b })),
                    (u = Z.createElement("div", { class: "nav-container" })),
                    d.addEventListener("click", Z.stopPropagation),
                    d.appendChild(u),
                    (y = g = !(D = {})),
                    (x = A = L = 0),
                    (O = {}),
                    (N = !(k = [])),
                    (r = i = C = E = m = h = f = null),
                    (c = l = !(T = [])),
                    ee.customToggle ? (f = Z.getElements(ee.customToggle)) : ((f = [Z.createElement("a", { href: "#" }, Z.createElement("span"))]), e.insertAdjacentElement("afterend", f[0])),
                    f &&
                        f.length &&
                        f.forEach(function (e) {
                            e.addEventListener("click", J(e)),
                                e.classList.add("hc-nav-trigger", b),
                                e.setAttribute("role", "button"),
                                e.setAttribute("aria-label", (ee.ariaLabels || {}).open),
                                e.setAttribute("aria-controls", b),
                                e.setAttribute("aria-expanded", !1),
                                e.addEventListener("keydown", function (e) {
                                    ("Enter" !== e.key && 13 !== e.keyCode) ||
                                        setTimeout(function () {
                                            w(0, 0);
                                        }, 0);
                                });
                        }),
                    (w = function (e, t, n) {
                        var a, i, r, s;
                        "number" == typeof t &&
                            ("number" == typeof e || T.length) &&
                            ((a = Array.prototype.filter.call(u.querySelectorAll(".nav-wrapper"), function (e) {
                                return e.getAttribute("data-level") == t && ("number" != typeof n || ("number" == typeof n && e.getAttribute("data-index") == n));
                            })[0]),
                            (a = Z.children(a, ".nav-content")[0]),
                            (i = Z.children(a, ".nav-close, .nav-back")),
                            (a = Z.children(a, "ul")),
                            (a = Z.children(a, "li")),
                            (a = Z.children(a, ":not(.nav-wrapper)")),
                            (a = [].concat(i, a)),
                            (a = Array.prototype.map
                                .call(a, function (e) {
                                    return Array.prototype.slice.call(e.querySelectorAll('[tabIndex="0"], a[role="menuitem"], a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'));
                                })
                                .flat()),
                            (a = Array.prototype.filter.call(a, function (e) {
                                return "-1" !== e.getAttribute("tabIndex");
                            }))) &&
                            (d.classList.add("user-is-tabbing"),
                            (r = a[0]),
                            (s = a[a.length - 1]),
                            "number" == typeof e ? a[e].focus() : (T[T.length - 1].focus(), T.pop()),
                            ie.removeEventListener(o),
                            ie.addEventListener(o, function (e) {
                                ("Tab" !== e.key && 9 !== e.keyCode) || (e.shiftKey ? ie.activeElement === r && (e.preventDefault(), s.focus()) : ie.activeElement === s && (e.preventDefault(), r.focus()));
                            }));
                    }),
                    (U = function () {
                        ie.removeEventListener(o),
                            h &&
                                setTimeout(function () {
                                    h.focus();
                                }, p);
                    }),
                    (S = function () {
                        (u.style.transition = "none"), (d.style.display = "block");
                        var e = Z.formatSizeVal((A = u.offsetWidth)),
                            t = Z.formatSizeVal((x = u.offsetHeight));
                        s.add(".hc-offcanvas-nav." + b + ".nav-position-left .nav-container", "transform: translate3d(-" + e + ", 0, 0)"),
                            s.add(".hc-offcanvas-nav." + b + ".nav-position-right .nav-container", "transform: translate3d(" + e + ", 0, 0)"),
                            s.add(".hc-offcanvas-nav." + b + ".nav-position-top .nav-container", "transform: translate3d(0, -" + t + ", 0)"),
                            s.add(".hc-offcanvas-nav." + b + ".nav-position-bottom .nav-container", "transform: translate3d(0, " + t + ", 0)"),
                            s.insert(),
                            (d.style.display = ""),
                            (u.style.transition = ""),
                            (n = ae.getComputedStyle(u).transitionProperty),
                            (p = Z.toMs(ae.getComputedStyle(u).transitionDuration)),
                            (H = ae.getComputedStyle(u).transitionTimingFunction),
                            ee.pushContent && m && n && s.add(Z.getElementCssTag(m), "transition: " + n + " " + p + "ms " + H),
                            s.insert();
                    }),
                    (I = function () {
                        D = (function l(e, t) {
                            var n = [];
                            return (
                                Array.prototype.forEach.call(e, function (e) {
                                    var o;
                                    ("UL" === e.tagName || e instanceof HTMLHeadingElement) &&
                                        ((o = { tagName: e.tagName, id: t, htmlClass: e.getAttribute("class") || null, items: [] }),
                                        e instanceof HTMLHeadingElement
                                            ? (o.content = Z.clone(e, !1, !0))
                                            : (null !== e.getAttribute("data-nav-active") && ((E = t), e.removeAttribute("data-nav-active")),
                                              Array.prototype.forEach.call(e.children, function (e) {
                                                  var t = null !== e.getAttribute("data-nav-custom-content"),
                                                      n = t
                                                          ? e.childNodes
                                                          : Array.prototype.filter
                                                                .call(e.children, function (e) {
                                                                    return "UL" !== e.tagName && !e.querySelector("ul");
                                                                })
                                                                .concat(e.children.length ? [] : [e.firstChild]),
                                                      a = (i = t ? [] : Array.prototype.slice.call(e.querySelectorAll("ul"))).length
                                                          ? [].concat(
                                                                Array.prototype.filter.call(i[0].parentNode.children, function (e) {
                                                                    return "UL" === e.tagName || e instanceof HTMLHeadingElement;
                                                                })
                                                            )
                                                          : [],
                                                      i = null;
                                                  if (!n.length) {
                                                      for (var r = "", s = 0; s < e.childNodes.length; s++) e.childNodes[s].nodeType === Node.TEXT_NODE && (r += e.childNodes[s].textContent.trim());
                                                      n = [ie.createTextNode(r)];
                                                  }
                                                  a.length && (Z.data(e, "hc-uniqid") ? (i = Z.data(e, "hc-uniqid")) : ((i = Math.random().toString(36).substr(2)), Z.data(e, "hc-uniqid", i))),
                                                      null !== e.getAttribute("data-nav-active") && ((E = i), e.removeAttribute("data-nav-active")),
                                                      o.items.push({ id: i, htmlClass: e.getAttribute("class") || "", content: n, custom: t, subnav: a.length ? l(a, i) : [], highlight: null !== e.getAttribute("data-nav-highlight") });
                                              })),
                                        n.push(o));
                                }),
                                n
                            );
                        })(
                            "UL" === e.tagName
                                ? [e]
                                : Array.prototype.filter.call(e.children, function (e) {
                                      return "UL" === e.tagName || e instanceof HTMLHeadingElement;
                                  }),
                            null
                        );
                    }),
                    (a = function (e) {
                        if (e) {
                            for (; u.firstChild; ) u.removeChild(u.firstChild);
                            O = {};
                        }
                        !(function p(n, e, f, h, t, a) {
                            var i,
                                r,
                                s,
                                m = Z.createElement("div", { class: "nav-wrapper nav-wrapper-" + f, "data-level": f, "data-index": t || 0 }),
                                o = Z.createElement("div", { class: "nav-content" }),
                                l =
                                    (m.addEventListener("click", Z.stopPropagation),
                                    m.appendChild(o),
                                    e.appendChild(m),
                                    h &&
                                        (0 === f || (0 < f && "overlap" === ee.levelOpen)) &&
                                        ((e = "string" == typeof h ? h : Z.clone(ae.jQuery && h instanceof ae.jQuery && h.length ? h[0] : h, !0, !0)),
                                        o.insertBefore(Z.createElement("h2", { id: 0 === f ? b + "-nav-title" : null, class: 0 === f ? "nav-title" : "level-title" }, e), o.firstChild),
                                        0 === f) &&
                                        "string" == typeof h &&
                                        d.setAttribute("aria-labelledby", b + "-nav-title"),
                                    -1);
                            n.forEach(function (e, t) {
                                var u;
                                "UL" === e.tagName
                                    ? (l++,
                                      (u = Z.createElement("ul", { id: e.id ? (1 < n.length ? "menu-" + e.id + "-" + l : "menu-" + e.id) : null, role: "menu", "aria-level": f + 1 })),
                                      o.appendChild(u),
                                      ee.keepClasses && e.htmlClass && u.classList.add.apply(u.classList, e.htmlClass.split(" ")),
                                      e.items.forEach(function (t, e) {
                                          var n,
                                              a,
                                              i,
                                              r,
                                              s,
                                              o,
                                              l,
                                              c,
                                              v,
                                              d = t.content;
                                          t.custom
                                              ? ((n = Z.createElement(
                                                    "li",
                                                    { class: "nav-item nav-item-custom" },
                                                    Z.createElement(
                                                        "div",
                                                        { class: "nav-custom-content" },
                                                        Array.prototype.map.call(d, function (e) {
                                                            return Z.clone(e, !0, !0);
                                                        })
                                                    )
                                                )),
                                                ee.keepClasses && t.htmlClass && n.classList.add.apply(n.classList, t.htmlClass.split(" ")),
                                                u.appendChild(n))
                                              : ((i = Array.prototype.filter.call(d, function (e) {
                                                    return "A" === e.tagName || (e.nodeType !== Node.TEXT_NODE && e.querySelector("a"));
                                                })[0])
                                                    ? (a = Z.clone(i, !1, !0)).classList.add("nav-item-link")
                                                    : (a = Z.createElement(
                                                          t.subnav.length ? "a" : "span",
                                                          { class: "nav-item-link" },
                                                          Array.prototype.map.call(d, function (e) {
                                                              return Z.clone(e, !0, !0);
                                                          })
                                                      )),
                                                "A" === a.tagName && (a.setAttribute("tabIndex", "0"), a.setAttribute("role", "menuitem"), a.getAttribute("href") || a.setAttribute("href", "#")),
                                                i &&
                                                    a.addEventListener("click", function (e) {
                                                        e.stopPropagation(), Z.hasListener(i, "click") && i.click();
                                                    }),
                                                "#" === a.getAttribute("href") && a.addEventListener("click", Z.preventDefault),
                                                ee.closeOnClick &&
                                                    (j()
                                                        ? "A" !== a.tagName ||
                                                          "false" === a.dataset.navClose ||
                                                          (null !== a.getAttribute("disabled") && "false" !== a.getAttribute("disabled")) ||
                                                          (t.subnav.length && (!a.getAttribute("href") || "#" === a.getAttribute("href").charAt(0))) ||
                                                          a.addEventListener("click", B)
                                                        : "A" !== a.tagName || "false" === a.dataset.navClose || (null !== a.getAttribute("disabled") && "false" !== a.getAttribute("disabled")) || a.addEventListener("click", B)),
                                                (v = Z.createElement("li", { class: "nav-item" })).appendChild(a),
                                                u.appendChild(v),
                                                ee.keepClasses && t.htmlClass && v.classList.add.apply(v.classList, t.htmlClass.split(" ")),
                                                t.highlight && v.classList.add("nav-highlight"),
                                                Z.wrap(a, Z.createElement("div", { class: "nav-item-wrapper" })),
                                                t.subnav.length &&
                                                    ((s = t.id),
                                                    (o = ""),
                                                    O[(r = f + 1)] || (O[r] = 0),
                                                    v.classList.add("nav-parent"),
                                                    j()
                                                        ? ((l = O[r]),
                                                          (c = Z.createElement("input", { type: "checkbox", id: b + "-" + r + "-" + l, class: "hc-chk", tabIndex: -1, "data-level": r, "data-index": l, value: s })).addEventListener(
                                                              "click",
                                                              Z.stopPropagation
                                                          ),
                                                          c.addEventListener("change", G),
                                                          v.insertBefore(c, v.firstChild),
                                                          (n = function (e) {
                                                              e.addEventListener("click", function (e) {
                                                                  e.stopPropagation(),
                                                                      c.setAttribute("checked", "true" !== c.getAttribute("checked")),
                                                                      "createEvent" in ie && ((e = ie.createEvent("HTMLEvents")).initEvent("change", !1, !0), c.dispatchEvent(e));
                                                              }),
                                                                  e.addEventListener("keydown", function (e) {
                                                                      ("Enter" !== e.key && 13 !== e.keyCode) || ((N = !0), T.push(this));
                                                                  }),
                                                                  e.setAttribute(
                                                                      "aria-controls",
                                                                      1 < t.subnav.length
                                                                          ? t.subnav
                                                                                .filter(function (e) {
                                                                                    return "UL" === e.tagName;
                                                                                })
                                                                                .map(function (e, t) {
                                                                                    return "menu-" + e.id + "-" + t;
                                                                                })
                                                                                .join(" ")
                                                                          : "menu-" + s
                                                                  ),
                                                                  e.setAttribute("aria-haspopup", "overlap" === ee.levelOpen),
                                                                  e.setAttribute("aria-expanded", !1);
                                                          }),
                                                          -1 !== k.indexOf(s) &&
                                                              (m.classList.add("sub-level-open"),
                                                              m.addEventListener("click", function () {
                                                                  return q(r, l);
                                                              }),
                                                              v.classList.add("level-open"),
                                                              c.setAttribute("checked", !0)),
                                                          (o = !0 === ee.levelTitles ? d[0].textContent.trim() : ""),
                                                          a.getAttribute("href") && "#" !== a.getAttribute("href")
                                                              ? ((d = Z.createElement(
                                                                    "a",
                                                                    { href: "#", class: "nav-next", "aria-label": (ee.ariaLabels || {}).submenu + ": " + o, role: "menuitem", tabIndex: 0 },
                                                                    Z.createElement("span")
                                                                )).addEventListener("click", Z.preventClick()),
                                                                n(d),
                                                                ee.rtl ? a.parentNode.appendChild(d) : a.parentNode.insertBefore(d, a.nextSibling))
                                                              : (a.appendChild(Z.createElement("span", { class: "nav-next" }, Z.createElement("span"))), n(a)))
                                                        : a.setAttribute("aria-expanded", !0),
                                                    O[r]++,
                                                    p(t.subnav, v, r, o, O[r] - 1, "string" == typeof h ? h : "")));
                                      }))
                                    : o.appendChild(e.content);
                            }),
                                f &&
                                    void 0 !== t &&
                                    !1 !== ee.insertBack &&
                                    "overlap" === ee.levelOpen &&
                                    ((i = Z.children(o, "ul")),
                                    (a = (ee.levelTitleAsBack && a) || ee.labelBack || ""),
                                    (s = Z.createElement("a", { href: "#", class: "nav-back-button", role: "menuitem", tabIndex: 0 }, [a, Z.createElement("span")])),
                                    !0 === ee.insertBack || 0 === ee.insertBack
                                        ? ((a = Z.createElement("div", { class: "nav-back" }, s)), o.insertBefore(a, Z.children(o, ":not(.level-title)")[0]))
                                        : ((r = Z.createElement("li", { class: "nav-item nav-back" }, s)), Z.insertAt(r, !0 === ee.insertBack ? 0 : ee.insertBack, i)),
                                    (r = function () {
                                        return q(f, t);
                                    }),
                                    Z.wrap(s, Z.createElement("div", { class: "nav-item-wrapper" })),
                                    s.addEventListener("click", Z.preventClick(r)),
                                    s.addEventListener("keydown", function (e) {
                                        ("Enter" !== e.key && 13 !== e.keyCode) || (N = !0);
                                    })),
                                0 === f &&
                                    !1 !== ee.insertClose &&
                                    ((i = Z.createElement("a", { href: "#", class: "nav-close-button" + (ee.labelClose ? " has-label" : ""), role: "menuitem", tabIndex: 0, "aria-label": ee.labelClose ? "" : (ee.ariaLabels || {}).close }, [
                                        ee.labelClose || "",
                                        Z.createElement("span"),
                                    ])).addEventListener("click", Z.preventClick(B)),
                                    i.addEventListener("keydown", function (e) {
                                        ("Enter" !== e.key && 13 !== e.keyCode) || U();
                                    }),
                                    h && !0 === ee.insertClose
                                        ? o.insertBefore(Z.createElement("div", { class: "nav-close" }, i), o.children[1])
                                        : !0 === ee.insertClose
                                        ? o.insertBefore(Z.createElement("div", { class: "nav-close" }, i), o.firstChild)
                                        : ((r = Z.children(o, "ul")), (s = Z.createElement("li", { class: "nav-item nav-close" }, i)), Z.wrap(i, Z.createElement("div", { class: "nav-item-wrapper" })), Z.insertAt(s, ee.insertClose, r)));
                        })(D, u, 0, ee.navTitle);
                    }),
                    (t = function (t) {
                        return function (e) {
                            ("left" !== ee.position && "right" !== ee.position) ||
                                ((i = e.touches[0].clientX),
                                (r = e.touches[0].clientY),
                                "doc" === t
                                    ? c || (ie.addEventListener("touchmove", Q, Z.supportsPassive), ie.addEventListener("touchend", V, Z.supportsPassive))
                                    : ((c = !0), u.addEventListener("touchmove", W, Z.supportsPassive), u.addEventListener("touchend", F, Z.supportsPassive)));
                        };
                    }),
                    (X = function (e, t) {
                        ae.addEventListener("touchmove", Z.preventDefault, Z.supportsPassive),
                            (d.style.visibility = "visible"),
                            (u.style[Z.browserPrefix("transition")] = "none"),
                            Z.setTransform(u, e, ee.position),
                            m && ((m.style[Z.browserPrefix("transition")] = "none"), Z.setTransform(m, t, ee.position));
                    }),
                    (M = function (e, t, n, a) {
                        void 0 === t && (t = !0),
                            void 0 === n && (n = !1),
                            void 0 === a && (a = !1),
                            ae.removeEventListener("touchmove", Z.preventDefault, Z.supportsPassive),
                            (u.style[Z.browserPrefix("transition")] = ""),
                            Z.setTransform(u, n, ee.position),
                            m && ((m.style[Z.browserPrefix("transition")] = ""), Z.setTransform(m, a, ee.position)),
                            "open" === e
                                ? _()
                                : (B(),
                                  t
                                      ? setTimeout(function () {
                                            d.style.visibility = "";
                                        }, p)
                                      : (d.style.visibility = ""));
                    }),
                    (Q = function (e) {
                        var t = 0 - (i - e.touches[0].clientX),
                            e = "overlap" === ee.levelOpen ? P() * ee.levelSpacing : 0,
                            e = A + e,
                            t = "left" === ee.position ? Math.min(Math.max(t, 0), e) : Math.abs(Math.min(Math.max(t, -e), 0));
                        (("left" === ee.position && i < 50) || ("right" === ee.position && i > ie.body.clientWidth - 50)) && ((l = !0), X(0 - (A - t), Math.abs(t)));
                    }),
                    (V = function e(t) {
                        var n;
                        ie.removeEventListener("touchmove", Q),
                            ie.removeEventListener("touchend", e),
                            l &&
                                ((n = t.changedTouches[t.changedTouches.length - 1]),
                                (t = 0 - (i - n.clientX)),
                                (n = "overlap" === ee.levelOpen ? P() * ee.levelSpacing : 0),
                                (n = A + n),
                                (t = "left" === ee.position ? Math.min(Math.max(t, 0), n) : Math.abs(Math.min(Math.max(t, -n), 0))) ? M(70 < t ? "open" : "close") : M("close", !1),
                                (r = i = null),
                                (l = !1));
                    }),
                    (W = function (e) {
                        var t = 0 - (i - e.touches[0].clientX),
                            n = 0 - (r - e.touches[0].clientY);
                        Math.abs(t) < Math.abs(n) ||
                            ((e = "overlap" === ee.levelOpen ? P() * ee.levelSpacing : 0),
                            (n = A + e),
                            (t = "left" === ee.position ? Math.min(Math.max(t, -n), 0) : Math.min(Math.max(t, 0), n)),
                            (("left" === ee.position && t < 0) || ("right" === ee.position && 0 < t)) && ((l = !0), X(-Math.abs(t) + e, n - Math.abs(t))));
                    }),
                    (F = function e(t) {
                        var n, a;
                        u.removeEventListener("touchmove", W),
                            u.removeEventListener("touchend", e),
                            (c = !1),
                            l &&
                                ((n = t.changedTouches[t.changedTouches.length - 1]),
                                (a = 0 - (i - n.clientX)),
                                (t = "overlap" === ee.levelOpen ? P() * ee.levelSpacing : 0),
                                (n = A + t),
                                (a = "left" === ee.position ? Math.abs(Math.min(Math.max(a, -n), 0)) : Math.abs(Math.min(Math.max(a, 0), n))) === n ? M("close", !1) : 50 < a ? M("close") : M("open", !0, t, n),
                                (r = i = null),
                                (l = !1));
                    }),
                    (z = function (e) {
                        var t = !!f && ae.getComputedStyle(f[0]).display,
                            n = !!ee.disableAt && "max-width: " + (ee.disableAt - 1) + "px",
                            a = Z.formatSizeVal(ee.width),
                            i = Z.formatSizeVal(ee.height),
                            r = Z.formatSizeVal(ee.levelSpacing);
                        (!Z.isNumeric(a) && -1 === a.indexOf("px")) || (A = parseInt(a)),
                            (!Z.isNumeric(i) && -1 === i.indexOf("px")) || (x = parseInt(i)),
                            te(["disableAt", "position"]) && s.reset(),
                            s.add(".hc-offcanvas-nav." + b, "display: block", n),
                            s.add(".hc-nav-original." + b, "display: none", n),
                            t && s.add(".hc-nav-trigger." + b, "display: " + (t && "none" !== t ? t : "block"), n),
                            -1 !== ["left", "right"].indexOf(ee.position) ? s.add(".hc-offcanvas-nav." + b + " .nav-container", "width: " + a) : s.add(".hc-offcanvas-nav." + b + " .nav-container", "height: " + i),
                            s.add(".hc-offcanvas-nav." + b + ".nav-position-left .nav-container", "transform: translate3d(-" + a + ", 0, 0);"),
                            s.add(".hc-offcanvas-nav." + b + ".nav-position-right .nav-container", "transform: translate3d(" + a + ", 0, 0);"),
                            s.add(".hc-offcanvas-nav." + b + ".nav-position-top .nav-container", "transform: translate3d(0, -" + i + ", 0);"),
                            s.add(".hc-offcanvas-nav." + b + ".nav-position-bottom .nav-container", "transform: translate3d(0, " + i + ", 0);"),
                            s.add(".hc-offcanvas-nav." + b + ".nav-levels-overlap.nav-position-left li.level-open > .nav-wrapper", "transform: translate3d(-" + r + ", 0, 0)", n),
                            s.add(".hc-offcanvas-nav." + b + ".nav-levels-overlap.nav-position-right li.level-open > .nav-wrapper", "transform: translate3d(" + r + ", 0, 0)", n),
                            s.add(".hc-offcanvas-nav." + b + ".nav-levels-overlap.nav-position-top li.level-open > .nav-wrapper", "transform: translate3d(0, -" + r + ", 0)", n),
                            s.add(".hc-offcanvas-nav." + b + ".nav-levels-overlap.nav-position-bottom li.level-open > .nav-wrapper", "transform: translate3d(0, " + r + ", 0)", n),
                            s.insert(),
                            (e && !te("pushContent")) || (m = ee.pushContent ? Z.getElements(ee.pushContent)[0] : null),
                            (u.style.transition = "none"),
                            (n = d.classList.contains(oe)),
                            (n = [
                                "hc-offcanvas-nav",
                                ee.navClass || "",
                                b,
                                "nav-levels-" + (ee.levelOpen || "none"),
                                "nav-position-" + ee.position,
                                ee.disableBody ? "disable-body" : "",
                                Z.isIos ? "is-ios" : "",
                                Z.isTouchDevice ? "touch-device" : "",
                                n ? oe : "",
                                ee.rtl ? "rtl" : "",
                                !0 !== ee.insertClose || ee.labelClose ? "" : "nav-close-button-empty",
                            ]
                                .join(" ")
                                .trim()
                                .replace(/  +/g, " ")),
                            d.removeEventListener("click"),
                            (d.className = n),
                            d.setAttribute("aria-hidden", !0),
                            ie.documentElement.style.setProperty("--nav-level-spacing", ee.levelSpacing + "px"),
                            ee.disableBody && d.addEventListener("click", B),
                            e ? S() : setTimeout(S, 0);
                    })(),
                    I(),
                    a(),
                    !0 === ee.removeOriginalNav ? e.parentNode.removeChild(e) : e.classList.add("hc-nav-original", b),
                    "prepend" === ee.bodyInsert ? ie.body.insertBefore(d, ie.body.firstChild) : "append" === ee.bodyInsert && ie.body.appendChild(d),
                    !0 === ee.expanded && ((y = !0), _()),
                    ee.swipeGestures && (u.addEventListener("touchstart", t("nav"), Z.supportsPassive), ie.addEventListener("touchstart", t("doc"), Z.supportsPassive)),
                    ee.closeOnEsc &&
                        ie.addEventListener("keydown", function (e) {
                            !g || ("Escape" !== e.key && 27 !== e.keyCode) || (0 === (e = P()) ? (B(), U()) : (q(e, $()), w(null, e - 1)));
                        }),
                    (t = Z.debounce(S, 500)),
                    ae.addEventListener("resize", t, Z.supportsPassive),
                    (Y = function (e, t, n) {
                        var a,
                            i,
                            r = ie.querySelector("#" + b + "-" + e + "-" + t);
                        r &&
                            ((a = r.value),
                            (t = (i = r.parentNode).closest(".nav-wrapper")),
                            r.setAttribute("checked", !1),
                            t.classList.remove("sub-level-open"),
                            i.classList.remove("level-open"),
                            i.querySelectorAll("[aria-controls]")[0].setAttribute("aria-expanded", !1),
                            -1 !== k.indexOf(a) && k.splice(k.indexOf(a), 1),
                            n) &&
                            "overlap" === ee.levelOpen &&
                            (t.removeEventListener("click"), t.addEventListener("click", Z.stopPropagation), Z.setTransform(u, (e - 1) * ee.levelSpacing, ee.position), m) &&
                            ((t = "x" === Z.getAxis(ee.position) ? A : x), Z.setTransform(m, t + (e - 1) * ee.levelSpacing, ee.position));
                    }),
                    (d.on = function (e, t) {
                        d.addEventListener(e, t);
                    }),
                    (d.off = function (e, t) {
                        d.removeEventListener(e, t);
                    }),
                    (d.getSettings = function () {
                        return Object.assign({}, ee);
                    }),
                    (d.isOpen = function () {
                        return g;
                    }),
                    (d.open = _),
                    (d.close = B),
                    (d.toggle = J(null)),
                    (d.update = function (e, t) {
                        if (((ne = []), "object" == typeof e)) {
                            for (var n in e) ee[n] !== e[n] && ne.push(n);
                            ee = Object.assign({}, ee, e);
                        }
                        !0 === e || !0 === t
                            ? ee.removeOriginalNav
                                ? console.warn("%c! HC Offcanvas Nav:%c Can't update because original navigation has been removed. Disable `removeOriginalNav` option.", "color: #fa253b", "color: default")
                                : (z(!0), I(), a(!0))
                            : (z(!0), a(!0));
                    }),
                    d
                );
            function G() {
                var e = Number(this.dataset.level),
                    t = Number(this.dataset.index);
                ("true" === this.getAttribute("checked") ? R : q)(e, t);
            }
            function K(e) {
                e.classList.remove(v), e.setAttribute("aria-expanded", !1);
            }
            function j() {
                return !1 !== ee.levelOpen && "none" !== ee.levelOpen;
            }
            function P() {
                return k.length
                    ? Number(
                          Array.prototype.filter.call(u.querySelectorAll(".hc-chk"), function (e) {
                              return e.value == k[k.length - 1];
                          })[0].dataset.level
                      )
                    : 0;
            }
            function $() {
                return k.length
                    ? Number(
                          Array.prototype.filter.call(u.querySelectorAll(".hc-chk"), function (e) {
                              return e.value == k[k.length - 1];
                          })[0].dataset.index
                      )
                    : 0;
            }
            function _(e, t) {
                var n, a;
                if (
                    (!g || void 0 !== t) &&
                    (g ||
                        ((g = !0),
                        (d.style.visibility = "visible"),
                        d.setAttribute("aria-hidden", !1),
                        d.classList.add(oe),
                        f && (f.forEach(K), h) && (h.classList.add(v), h.setAttribute("aria-expanded", !0)),
                        "expand" === ee.levelOpen && C && clearTimeout(C),
                        ee.disableBody &&
                            ((L = ae.pageYOffset || re.scrollTop || ie.documentElement.scrollTop || ie.body.scrollTop),
                            ie.documentElement.scrollHeight > ie.documentElement.clientHeight && re.classList.add("hc-nav-yscroll"),
                            ie.body.classList.add("hc-nav-open"),
                            L) &&
                            (ie.body.style.top = -L + "px"),
                        m && ((n = "x" === Z.getAxis(ee.position) ? A : x), Z.setTransform(m, n, ee.position)),
                        y
                            ? (y = !1)
                            : (d._eventListeners.toggle &&
                                  d._eventListeners.toggle.forEach(function (e) {
                                      e.fn(Z.customEventObject("toggle", d, d, { action: "open" }), Object.assign({}, ee));
                                  }),
                              setTimeout(function () {
                                  d._eventListeners.open &&
                                      d._eventListeners.open.forEach(function (e) {
                                          e.fn(Z.customEventObject("open", d, d), Object.assign({}, ee));
                                      });
                              }, p))),
                    j())
                ) {
                    if (("number" != typeof e && !Z.isNumeric(e)) || ("number" != typeof t && !Z.isNumeric(t)))
                        E
                            ? ((a = Array.prototype.filter.call(u.querySelectorAll(".hc-chk"), function (e) {
                                  return e.value == E;
                              })[0]),
                              (!ee.closeActiveLevel && ee.closeOpenLevels) || (E = null))
                            : !1 === ee.closeOpenLevels &&
                              (a = (a = Array.prototype.filter.call(u.querySelectorAll(".hc-chk"), function (e) {
                                  return "true" === e.getAttribute("checked");
                              }))[a.length - 1]);
                    else if (!(a = ie.querySelector("#" + b + "-" + e + "-" + t))) return void console.warn("HC Offcanvas Nav: level " + e + " doesn't have index " + t);
                    if (a) {
                        var i = [];
                        if (((e = Number(a.dataset.level)), (t = Number(a.dataset.index)), 1 < e)) {
                            for (var r = []; a && a !== ie; a = a.parentNode) a.matches(".nav-wrapper") && r.push(a);
                            for (var s = 0; s < r.length; s++) {
                                var o = r[s],
                                    l = Number(o.dataset.level);
                                0 < l && i.push({ level: l, index: Number(o.dataset.index) });
                            }
                            i = i.reverse();
                        }
                        i.push({ level: e, index: t });
                        for (var c = 0; c < i.length; c++) R(i[c].level, i[c].index, !1);
                    }
                }
            }
            function B() {
                var e;
                g &&
                    ((g = !1),
                    m && Z.setTransform(m, !1),
                    d.classList.remove(oe),
                    d.classList.remove("user-is-tabbing"),
                    d.setAttribute("aria-hidden", !0),
                    u.removeAttribute("style"),
                    f && f.forEach(K),
                    "expand" === ee.levelOpen && -1 !== ["top", "bottom"].indexOf(ee.position)
                        ? q(0)
                        : j() &&
                          (C = setTimeout(
                              function () {
                                  q(0);
                              },
                              "expand" === ee.levelOpen ? p : 0
                          )),
                    ee.disableBody &&
                        (ie.body.classList.remove("hc-nav-open"), re.classList.remove("hc-nav-yscroll"), L) &&
                        ((ie.body.style.top = ""),
                        (ie.body.scrollTop = L),
                        (re.scrollTop = L),
                        "bottom" === ee.position &&
                            ((e = L),
                            setTimeout(function () {
                                (ie.body.scrollTop = e), (re.scrollTop = e);
                            }, 0)),
                        (L = 0)),
                    d._eventListeners.toggle &&
                        d._eventListeners.toggle.forEach(function (e) {
                            e.fn(Z.customEventObject("toggle", d, d, { action: "close" }), Object.assign({}, ee));
                        }),
                    setTimeout(function () {
                        (d.style.visibility = ""),
                            d._eventListeners.close &&
                                d._eventListeners.close.forEach(function (e) {
                                    e.fn(Z.customEventObject("close", d, d), Object.assign({}, ee));
                                }),
                            d._eventListeners["close.once"] &&
                                d._eventListeners["close.once"].forEach(function (e) {
                                    e.fn(Z.customEventObject("close.once", d, d), Object.assign({}, ee));
                                }),
                            d.removeEventListener("close.once");
                    }, p));
            }
            function J(t) {
                return function (e) {
                    e && (e.preventDefault(), e.stopPropagation()), t && (h = t), (g ? B : _)();
                };
            }
            function R(t, n, e) {
                void 0 === e && (e = !0);
                var a = ie.querySelector("#" + b + "-" + t + "-" + n),
                    i = a.value,
                    r = a.parentNode,
                    s = r.closest(".nav-wrapper"),
                    o = Z.children(r, ".nav-wrapper")[0];
                !1 === e && (o.style.transition = "none"),
                    a.setAttribute("checked", !0),
                    s.classList.add("sub-level-open"),
                    r.classList.add("level-open"),
                    r.querySelectorAll("[aria-controls]")[0].setAttribute("aria-expanded", !0),
                    !1 === e &&
                        setTimeout(function () {
                            o.style.transition = "";
                        }, p),
                    -1 === k.indexOf(i) && k.push(i),
                    "overlap" === ee.levelOpen &&
                        (s.addEventListener("click", function () {
                            return q(t, n);
                        }),
                        Z.setTransform(u, t * ee.levelSpacing, ee.position),
                        m) &&
                        ((s = "x" === Z.getAxis(ee.position) ? A : x), Z.setTransform(m, s + t * ee.levelSpacing, ee.position)),
                    d._eventListeners["open.level"] &&
                        d._eventListeners["open.level"].forEach(function (e) {
                            e.fn(Z.customEventObject("open.level", d, o, { currentLevel: t, currentIndex: n }), Object.assign({}, ee));
                        }),
                    N && (w(0, t, n), (N = !1));
            }
            function q(t, e) {
                for (var n, a = t; a <= Object.keys(O).length; a++)
                    if (a === t && void 0 !== e) Y(t, e, !0);
                    else if (0 !== t || ee.closeOpenLevels) for (var i = 0; i < O[a]; i++) Y(a, i, a === t);
                0 < t &&
                    d._eventListeners["close.level"] &&
                    ((n = ie.querySelector("#" + b + "-" + t + "-" + e).closest(".nav-wrapper")),
                    d._eventListeners["close.level"].forEach(function (e) {
                        e.fn(Z.customEventObject("close.level", d, n, { currentLevel: t - 1, currentIndex: $() }), Object.assign({}, ee));
                    })),
                    N && (w(null, t - 1), (N = !1));
            }
            console.error("%c! HC Offcanvas Nav:%c Navigation must contain <ul> element.", "color: #fa253b", "color: default");
        }
        ee.ariaLabels = Object.assign({}, { open: "Open Menu", close: "Close Menu", submenu: "Submenu" }, t.ariaLabels);
        var ne = [];
        if (Array.isArray(e) || e instanceof NodeList) {
            for (var a = [], i = 0; i < e.length; i++) a.push(n(e[i]));
            return 1 < a.length ? a : a[0];
        }
        return n(e);
    }
    var n,
        a,
        ie = ae.document,
        re = ie.getElementsByTagName("html")[0],
        se = 0,
        oe = "nav-open";
    return (
        void 0 !== ae.jQuery &&
            ((n = ae.jQuery),
            (a = "hcOffcanvasNav"),
            n.fn.extend({
                hcOffcanvasNav: function (t) {
                    return this.length
                        ? this.each(function () {
                              var e = n.data(this, a);
                              e ? e.update(t) : ((e = new r(this, t)), n.data(this, a, e));
                          })
                        : this;
                },
            })),
        (ae.hcOffcanvasNav = ae.hcOffcanvasNav || r),
        r
    );
}),
    (function (n) {
        var e = n.hcOffcanvasNav,
            o = n.document,
            t =
                ("function" != typeof Object.assign &&
                    Object.defineProperty(Object, "assign", {
                        value: function (e, t) {
                            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                            for (var n = Object(e), a = 1; a < arguments.length; a++) {
                                var i = arguments[a];
                                if (null != i) for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
                            }
                            return n;
                        },
                        writable: !0,
                        configurable: !0,
                    }),
                Element.prototype.closest ||
                    (Element.prototype.closest = function (e) {
                        var t = this;
                        do {
                            if (Element.prototype.matches.call(t, e)) return t;
                        } while (null !== (t = t.parentElement || t.parentNode) && 1 === t.nodeType);
                        return null;
                    }),
                Array.prototype.flat ||
                    Object.defineProperty(Array.prototype, "flat", {
                        configurable: !0,
                        value: function n() {
                            var a = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
                            return a
                                ? Array.prototype.reduce.call(
                                      this,
                                      function (e, t) {
                                          return Array.isArray(t) ? e.push.apply(e, n.call(t, a - 1)) : e.push(t), e;
                                      },
                                      []
                                  )
                                : Array.prototype.slice.call(this);
                        },
                        writable: !0,
                    }),
                Element.prototype.matches ||
                    (Element.prototype.matches =
                        Element.prototype.msMatchesSelector || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector),
                !1);
        try {
            var a = Object.defineProperty({}, "passive", {
                get: function () {
                    t = { passive: !1 };
                },
            });
            n.addEventListener("testPassive", null, a), n.removeEventListener("testPassive", null, a);
        } catch (e) {}
        function i(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        }
        function r(e) {
            return "auto" === e ? "100%" : i(e) && 0 !== e ? e + "px" : e;
        }
        function s(e) {
            var t = ["Webkit", "Moz", "Ms", "O"],
                n = (o.body || o.documentElement).style,
                a = e.charAt(0).toUpperCase() + e.slice(1);
            if (void 0 !== n[e]) return e;
            for (var i = 0; i < t.length; i++) if (void 0 !== n[t[i] + a]) return t[i] + a;
            return !1;
        }
        function l(e, t) {
            var n;
            return e instanceof Element
                ? t
                    ? Array.prototype.filter.call(e.children, function (e) {
                          return e.matches(t);
                      })
                    : e.children
                : ((n = []),
                  Array.prototype.forEach.call(e, function (e) {
                      n = t
                          ? n.concat(
                                Array.prototype.filter.call(e.children, function (e) {
                                    return e.matches(t);
                                })
                            )
                          : n.concat(Array.prototype.slice.call(e.children));
                  }),
                  n);
        }
        var c = (/iPad|iPhone|iPod/.test(navigator.userAgent) || (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))) && !n.MSStream,
            v = "ontouchstart" in n || navigator.maxTouchPoints || (n.DocumentTouch && o instanceof DocumentTouch),
            d = function (o) {
                var l = Node.prototype[o + "EventListener"];
                return function (e, t, n) {
                    if (this) {
                        var a = e.split(".")[0];
                        if (((this._eventListeners = this._eventListeners || {}), "add" === o)) {
                            this._eventListeners[e] = this._eventListeners[e] || [];
                            var i = { fn: t };
                            n && (i.options = n), this._eventListeners[e].push(i), l.call(this, a, t, n);
                        } else if ("function" == typeof t)
                            for (var r in (l.call(this, a, t, n), this._eventListeners))
                                (this._eventListeners[r] = this._eventListeners[r].filter(function (e) {
                                    return e.fn !== t;
                                })),
                                    this._eventListeners[r].length || delete this._eventListeners[r];
                        else if (this._eventListeners[e]) {
                            for (var s = this._eventListeners[e].length; s--; ) l.call(this, a, this._eventListeners[e][s].fn, this._eventListeners[e][s].options), this._eventListeners[e].splice(s, 1);
                            this._eventListeners[e].length || delete this._eventListeners[e];
                        }
                    }
                };
            };
        function u(e, t, n) {
            void 0 === t && (t = {});
            var a,
                i = o.createElement(e);
            for (a in t) "class" !== a ? (!t[a] && 0 !== t[a]) || i.setAttribute(a, t[a]) : (i.className = t[a]);
            if (n) {
                Array.isArray(n) || (n = [n]);
                for (var r = 0; r < n.length; r++)
                    if ("object" == typeof n[r] && n[r].length && !n[r].nodeType) for (var s = 0; s < n[r].length; s++) i.appendChild(n[r][s]);
                    else i.appendChild("string" == typeof n[r] ? o.createTextNode(n[r]) : n[r]);
            }
            return i;
        }
        function p(e) {
            return -1 !== ["left", "right"].indexOf(e) ? "x" : "y";
        }
        (Node.prototype.addEventListener = d("add")),
            (Node.prototype.removeEventListener = d("remove")),
            (a = function e(t) {
                return "string" == typeof t
                    ? t
                    : t.getAttribute("id")
                    ? "#" + t.getAttribute("id")
                    : t.getAttribute("class")
                    ? t.tagName.toLowerCase() + "." + t.getAttribute("class").replace(/\s+/g, ".")
                    : e(t.parentNode) + " > " + t.tagName.toLowerCase();
            }),
            s("transform"),
            (e.Helpers = {
                supportsPassive: t,
                isIos: c,
                isTouchDevice: v,
                isNumeric: i,
                formatSizeVal: r,
                toMs: function (e) {
                    return parseFloat(e) * (/\ds$/.test(e) ? 1e3 : 1);
                },
                stopPropagation: function (e) {
                    return e.stopPropagation();
                },
                preventDefault: function (e) {
                    return e.preventDefault();
                },
                preventClick: function (t) {
                    return function (e) {
                        e.preventDefault(), e.stopPropagation(), "function" == typeof t && t();
                    };
                },
                browserPrefix: s,
                children: l,
                wrap: function (e, t) {
                    e.parentNode.insertBefore(t, e), t.appendChild(e);
                },
                data: function (e, t, n) {
                    if (((e.hcOffcanvasNav = e.hcOffcanvasNav || {}), void 0 === n)) return e.hcOffcanvasNav[t];
                    e.hcOffcanvasNav[t] = n;
                },
                clone: function (e, t, n) {
                    var a = e.cloneNode(n || !1),
                        i = e instanceof Element ? [e].concat(Array.prototype.slice.call(e.getElementsByTagName("*"))) : [],
                        e = a instanceof Element ? [a].concat(Array.prototype.slice.call(a.getElementsByTagName("*"))) : [];
                    if ((t || (i.shift(), e.shift()), n))
                        for (var r = i, s = e, o = 0; o < r.length; o++)
                            if (r[o]._eventListeners) for (var l in r[o]._eventListeners) for (var c = 0; c < r[o]._eventListeners[l].length; c++) s[c].addEventListener(l, r[o]._eventListeners[l][c].fn, r[o]._eventListeners[l][c].options);
                    return a;
                },
                customEventObject: function (e, n, a, i) {
                    return new (function (e) {
                        for (var t in ((this.bubbles = !1),
                        (this.cancelable = !1),
                        (this.composed = !1),
                        (this.currentTarget = a),
                        (this.data = i ? {} : null),
                        (this.defaultPrevented = !1),
                        (this.eventPhase = 0),
                        (this.isTrusted = !1),
                        (this.target = n),
                        (this.timeStamp = Date.now()),
                        (this.type = e),
                        i))
                            this.data[t] = i[t];
                    })(e);
                },
                hasListener: function (e, t) {
                    return (t ? (e._eventListeners || {})[t] : e._eventListeners) || !1;
                },
                debounce: function (a, i, r) {
                    var s;
                    return function () {
                        var e = this,
                            t = arguments,
                            n = r && !s;
                        clearTimeout(s),
                            (s = setTimeout(function () {
                                (s = null), r || a.apply(e, t);
                            }, i)),
                            n && a.apply(e, t);
                    };
                },
                createElement: u,
                getElements: function (e) {
                    var t = null;
                    return "string" == typeof e ? (t = o.querySelectorAll(e)) : n.jQuery && e instanceof n.jQuery && e.length ? (t = e.toArray()) : e instanceof Element && (t = [e]), t;
                },
                getElementCssTag: a,
                printStyle: function (e) {
                    var i = u("style", { id: e }),
                        r = {},
                        s = {};
                    function a(e) {
                        return ";" !== e.substr(-1) && (e += ";" !== e.substr(-1) ? ";" : ""), e;
                    }
                    return (
                        o.head.appendChild(i),
                        {
                            reset: function () {
                                (r = {}), (s = {});
                            },
                            add: function (e, t, n) {
                                (e = e.trim()), (t = t.trim()), n ? ((n = n.trim()), (s[n] = s[n] || {}), (s[n][e] = a(t))) : (r[e] = a(t));
                            },
                            remove: function (e, t) {
                                (e = e.trim()), t ? ((t = t.trim()), void 0 !== s[t][e] && delete s[t][e]) : void 0 !== r[e] && delete r[e];
                            },
                            insert: function () {
                                var e,
                                    t,
                                    n = "";
                                for (e in s) {
                                    for (var a in ((n += "@media screen and (" + e + ") {\n"), s[e])) n += "  " + a + " { " + s[e][a] + " }\n";
                                    n += "}\n";
                                }
                                for (t in r) n += t + " { " + r[t] + " }\n";
                                i.innerHTML = n;
                            },
                        }
                    );
                },
                insertAt: function (e, t, n) {
                    var a = l(n),
                        i = a.length;
                    0 === (i = -1 < (t = "last" === (t = "first" === t ? 0 : t) ? i : t) ? Math.max(0, Math.min(t, i)) : Math.max(0, Math.min(i + t, i)))
                        ? n[0].insertBefore(e, n[0].firstChild)
                        : a[i - 1].insertAdjacentElement("afterend", e);
                },
                getAxis: p,
                setTransform: function (e, t, n) {
                    !1 === t || "" === t ? (e.style.transform = "") : "x" === p(n) ? (e.style.transform = "translate3d(" + r("left" === n ? t : -t) + ",0,0)") : (e.style.transform = "translate3d(0," + r("top" === n ? t : -t) + ",0)");
                },
                deprecated: function (e, t, n) {
                    console.warn(
                        "%cHC Off-canvas Nav:%c " +
                            n +
                            "%c '" +
                            e +
                            "'%c is now deprecated and will be removed in the future. Use%c '" +
                            t +
                            "'%c option instead. See details about plugin usage at https://github.com/somewebmedia/hc-offcanvas-nav.",
                        "color: #fa253b",
                        "color: default",
                        "color: #5595c6",
                        "color: default",
                        "color: #5595c6",
                        "color: default"
                    );
                },
            });
    })(window);
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
!(function () {
    "use strict";
    var t = jQuery.fn.jquery.split(" ")[0].split(".");
    if ((t[0] < 2 && t[1] < 9) || (1 == t[0] && 9 == t[1] && t[2] < 1) || 3 < t[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
})(),
    (function (n) {
        "use strict";
        function a(t) {
            var e = t.attr("data-target"),
                e = "#" !== (e = e ? e : (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, "")) ? n(document).find(e) : null;
            return e && e.length ? e : t.parent();
        }
        function i(r) {
            (r && 3 === r.which) ||
                (n(".dropdown-backdrop").remove(),
                n(d).each(function () {
                    var t = n(this),
                        e = a(t),
                        o = { relatedTarget: this };
                    !e.hasClass("open") ||
                        (r && "click" == r.type && /input|textarea/i.test(r.target.tagName) && n.contains(e[0], r.target)) ||
                        (e.trigger((r = n.Event("hide.bs.dropdown", o))), r.isDefaultPrevented()) ||
                        (t.attr("aria-expanded", "false"), e.removeClass("open").trigger(n.Event("hidden.bs.dropdown", o)));
                }));
        }
        function r(t) {
            n(t).on("click.bs.dropdown", this.toggle);
        }
        var d = '[data-toggle="dropdown"]',
            t =
                ((r.VERSION = "3.4.1"),
                (r.prototype.toggle = function (t) {
                    var e = n(this);
                    if (!e.is(".disabled, :disabled")) {
                        var o = a(e),
                            r = o.hasClass("open");
                        if ((i(), !r)) {
                            "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", i);
                            r = { relatedTarget: this };
                            if ((o.trigger((t = n.Event("show.bs.dropdown", r))), t.isDefaultPrevented())) return;
                            e.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(n.Event("shown.bs.dropdown", r));
                        }
                        return !1;
                    }
                }),
                (r.prototype.keydown = function (t) {
                    if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
                        var e = n(this);
                        if ((t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
                            var o = a(e),
                                r = o.hasClass("open");
                            if ((!r && 27 != t.which) || (r && 27 == t.which)) return 27 == t.which && o.find(d).trigger("focus"), e.trigger("click");
                            r = o.find(".dropdown-menu li:not(.disabled):visible a");
                            r.length && ((e = r.index(t.target)), 38 == t.which && 0 < e && e--, 40 == t.which && e < r.length - 1 && e++, r.eq((e = ~e ? e : 0)).trigger("focus"));
                        }
                    }
                }),
                n.fn.dropdown);
        (n.fn.dropdown = function (o) {
            return this.each(function () {
                var t = n(this),
                    e = t.data("bs.dropdown");
                e || t.data("bs.dropdown", (e = new r(this))), "string" == typeof o && e[o].call(t);
            });
        }),
            (n.fn.dropdown.Constructor = r),
            (n.fn.dropdown.noConflict = function () {
                return (n.fn.dropdown = t), this;
            }),
            n(document)
                .on("click.bs.dropdown.data-api", i)
                .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
                    t.stopPropagation();
                })
                .on("click.bs.dropdown.data-api", d, r.prototype.toggle)
                .on("keydown.bs.dropdown.data-api", d, r.prototype.keydown)
                .on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown);
    })(jQuery);
!(function (e, t) {
    void 0 === e && void 0 !== window && (e = window), "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? (module.exports = t(require("jquery"))) : t(e.jQuery);
})(this, function (e) {
    !(function (I) {
        "use strict";
        var d = ["sanitize", "whiteList", "sanitizeFn"],
            v = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            P = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            W = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
        function C(e, t, i) {
            if (i && "function" == typeof i) return i(e);
            for (var s = Object.keys(t), n = 0, o = e.length; n < o; n++)
                for (var l = e[n].querySelectorAll("*"), r = 0, a = l.length; r < a; r++) {
                    var c = l[r],
                        d = c.nodeName.toLowerCase();
                    if (-1 !== s.indexOf(d))
                        for (var h = [].slice.call(c.attributes), p = [].concat(t["*"] || [], t[d] || []), u = 0, f = h.length; u < f; u++) {
                            var m = h[u];
                            !(function (e, t) {
                                var i = e.nodeName.toLowerCase();
                                if (-1 !== I.inArray(i, t)) return -1 === I.inArray(i, v) || Boolean(e.nodeValue.match(P) || e.nodeValue.match(W));
                                for (
                                    var s = I(t).filter(function (e, t) {
                                            return t instanceof RegExp;
                                        }),
                                        n = 0,
                                        o = s.length;
                                    n < o;
                                    n++
                                )
                                    if (i.match(s[n])) return 1;
                            })(m, p) && c.removeAttribute(m.nodeName);
                        }
                    else c.parentNode.removeChild(c);
                }
        }
        if (!("classList" in document.createElement("_"))) {
            var e = window;
            if ("Element" in e) {
                var t = "classList",
                    i = "prototype",
                    s = e.Element[i],
                    n = Object,
                    o = function () {
                        var i = I(this);
                        return {
                            add: function (e) {
                                return (e = Array.prototype.slice.call(arguments).join(" ")), i.addClass(e);
                            },
                            remove: function (e) {
                                return (e = Array.prototype.slice.call(arguments).join(" ")), i.removeClass(e);
                            },
                            toggle: function (e, t) {
                                return i.toggleClass(e, t);
                            },
                            contains: function (e) {
                                return i.hasClass(e);
                            },
                        };
                    };
                if (n.defineProperty) {
                    var l = { get: o, enumerable: !0, configurable: !0 };
                    try {
                        n.defineProperty(s, t, l);
                    } catch (e) {
                        (void 0 !== e.number && -2146823252 !== e.number) || ((l.enumerable = !1), n.defineProperty(s, t, l));
                    }
                } else n[i].__defineGetter__ && s.__defineGetter__(t, o);
            }
        }
        var r,
            a,
            c,
            h,
            l = document.createElement("_");
        function p(e) {
            if (null == this) throw new TypeError();
            var t = String(this);
            if (e && "[object RegExp]" == r.call(e)) throw new TypeError();
            var i = t.length,
                s = String(e),
                n = s.length,
                e = 1 < arguments.length ? arguments[1] : void 0,
                e = e ? Number(e) : 0,
                o = (e != e && (e = 0), Math.min(Math.max(e, 0), i));
            if (i < n + o) return !1;
            for (var l = -1; ++l < n; ) if (t.charCodeAt(o + l) != s.charCodeAt(l)) return !1;
            return !0;
        }
        function x(e, t) {
            var i,
                s = e.selectedOptions,
                n = [];
            if (t) {
                for (var o = 0, l = s.length; o < l; o++) (i = s[o]).disabled || ("OPTGROUP" === i.parentNode.tagName && i.parentNode.disabled) || n.push(i);
                return n;
            }
            return s;
        }
        function k(e, t) {
            for (var i, s = [], n = t || e.selectedOptions, o = 0, l = n.length; o < l; o++) (i = n[o]).disabled || ("OPTGROUP" === i.parentNode.tagName && i.parentNode.disabled) || s.push(i.value);
            return e.multiple ? s : s.length ? s[0] : null;
        }
        l.classList.add("c1", "c2"),
            l.classList.contains("c2") ||
                ((a = DOMTokenList.prototype.add),
                (c = DOMTokenList.prototype.remove),
                (DOMTokenList.prototype.add = function () {
                    Array.prototype.forEach.call(arguments, a.bind(this));
                }),
                (DOMTokenList.prototype.remove = function () {
                    Array.prototype.forEach.call(arguments, c.bind(this));
                })),
            l.classList.toggle("c3", !1),
            l.classList.contains("c3") &&
                ((h = DOMTokenList.prototype.toggle),
                (DOMTokenList.prototype.toggle = function (e, t) {
                    return 1 in arguments && !this.contains(e) == !t ? t : h.call(this, e);
                })),
            (l = null),
            String.prototype.startsWith ||
                ((n = (function () {
                    try {
                        var e = {},
                            t = Object.defineProperty,
                            i = t(e, e, e) && t;
                    } catch (e) {}
                    return i;
                })()),
                (r = {}.toString),
                n ? n(String.prototype, "startsWith", { value: p, configurable: !0, writable: !0 }) : (String.prototype.startsWith = p)),
            Object.keys ||
                (Object.keys = function (e, t, i) {
                    for (t in ((i = []), e)) i.hasOwnProperty.call(e, t) && i.push(t);
                    return i;
                }),
            HTMLSelectElement &&
                !HTMLSelectElement.prototype.hasOwnProperty("selectedOptions") &&
                Object.defineProperty(HTMLSelectElement.prototype, "selectedOptions", {
                    get: function () {
                        return this.querySelectorAll(":checked");
                    },
                });
        var u = { useDefault: !1, _set: I.valHooks.select.set },
            y =
                ((I.valHooks.select.set = function (e, t) {
                    return t && !u.useDefault && I(e).data("selected", !0), u._set.apply(this, arguments);
                }),
                null),
            B = (function () {
                try {
                    return new Event("change"), !0;
                } catch (e) {
                    return !1;
                }
            })();
        function b(e, t, i, s) {
            for (var n = ["display", "subtext", "tokens"], o = !1, l = 0; l < n.length; l++) {
                var r = n[l],
                    a = e[r];
                if (a && ((a = a.toString()), "display" === r && (a = a.replace(/<[^>]+>/g, "")), (a = (a = s ? m(a) : a).toUpperCase()), (o = "contains" === i ? 0 <= a.indexOf(t) : a.startsWith(t)))) break;
            }
            return o;
        }
        function f(e) {
            return parseInt(e, 10) || 0;
        }
        I.fn.triggerNative = function (e) {
            var t,
                i = this[0];
            i.dispatchEvent
                ? (B ? (t = new Event(e, { bubbles: !0 })) : (t = document.createEvent("Event")).initEvent(e, !0, !1), i.dispatchEvent(t))
                : i.fireEvent
                ? (((t = document.createEventObject()).eventType = e), i.fireEvent("on" + e, t))
                : this.trigger(e);
        };
        var M = {
                À: "A",
                Á: "A",
                Â: "A",
                Ã: "A",
                Ä: "A",
                Å: "A",
                à: "a",
                á: "a",
                â: "a",
                ã: "a",
                ä: "a",
                å: "a",
                Ç: "C",
                ç: "c",
                Ð: "D",
                ð: "d",
                È: "E",
                É: "E",
                Ê: "E",
                Ë: "E",
                è: "e",
                é: "e",
                ê: "e",
                ë: "e",
                Ì: "I",
                Í: "I",
                Î: "I",
                Ï: "I",
                ì: "i",
                í: "i",
                î: "i",
                ï: "i",
                Ñ: "N",
                ñ: "n",
                Ò: "O",
                Ó: "O",
                Ô: "O",
                Õ: "O",
                Ö: "O",
                Ø: "O",
                ò: "o",
                ó: "o",
                ô: "o",
                õ: "o",
                ö: "o",
                ø: "o",
                Ù: "U",
                Ú: "U",
                Û: "U",
                Ü: "U",
                ù: "u",
                ú: "u",
                û: "u",
                ü: "u",
                Ý: "Y",
                ý: "y",
                ÿ: "y",
                Æ: "Ae",
                æ: "ae",
                Þ: "Th",
                þ: "th",
                ß: "ss",
                Ā: "A",
                Ă: "A",
                Ą: "A",
                ā: "a",
                ă: "a",
                ą: "a",
                Ć: "C",
                Ĉ: "C",
                Ċ: "C",
                Č: "C",
                ć: "c",
                ĉ: "c",
                ċ: "c",
                č: "c",
                Ď: "D",
                Đ: "D",
                ď: "d",
                đ: "d",
                Ē: "E",
                Ĕ: "E",
                Ė: "E",
                Ę: "E",
                Ě: "E",
                ē: "e",
                ĕ: "e",
                ė: "e",
                ę: "e",
                ě: "e",
                Ĝ: "G",
                Ğ: "G",
                Ġ: "G",
                Ģ: "G",
                ĝ: "g",
                ğ: "g",
                ġ: "g",
                ģ: "g",
                Ĥ: "H",
                Ħ: "H",
                ĥ: "h",
                ħ: "h",
                Ĩ: "I",
                Ī: "I",
                Ĭ: "I",
                Į: "I",
                İ: "I",
                ĩ: "i",
                ī: "i",
                ĭ: "i",
                į: "i",
                ı: "i",
                Ĵ: "J",
                ĵ: "j",
                Ķ: "K",
                ķ: "k",
                ĸ: "k",
                Ĺ: "L",
                Ļ: "L",
                Ľ: "L",
                Ŀ: "L",
                Ł: "L",
                ĺ: "l",
                ļ: "l",
                ľ: "l",
                ŀ: "l",
                ł: "l",
                Ń: "N",
                Ņ: "N",
                Ň: "N",
                Ŋ: "N",
                ń: "n",
                ņ: "n",
                ň: "n",
                ŋ: "n",
                Ō: "O",
                Ŏ: "O",
                Ő: "O",
                ō: "o",
                ŏ: "o",
                ő: "o",
                Ŕ: "R",
                Ŗ: "R",
                Ř: "R",
                ŕ: "r",
                ŗ: "r",
                ř: "r",
                Ś: "S",
                Ŝ: "S",
                Ş: "S",
                Š: "S",
                ś: "s",
                ŝ: "s",
                ş: "s",
                š: "s",
                Ţ: "T",
                Ť: "T",
                Ŧ: "T",
                ţ: "t",
                ť: "t",
                ŧ: "t",
                Ũ: "U",
                Ū: "U",
                Ŭ: "U",
                Ů: "U",
                Ű: "U",
                Ų: "U",
                ũ: "u",
                ū: "u",
                ŭ: "u",
                ů: "u",
                ű: "u",
                ų: "u",
                Ŵ: "W",
                ŵ: "w",
                Ŷ: "Y",
                ŷ: "y",
                Ÿ: "Y",
                Ź: "Z",
                Ż: "Z",
                Ž: "Z",
                ź: "z",
                ż: "z",
                ž: "z",
                Ĳ: "IJ",
                ĳ: "ij",
                Œ: "Oe",
                œ: "oe",
                ŉ: "'n",
                ſ: "s",
            },
            R = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            U = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]", "g");
        function j(e) {
            return M[e];
        }
        function m(e) {
            return (e = e.toString()) && e.replace(R, j).replace(U, "");
        }
        function w(e) {
            return $.test((e = null == e ? "" : "" + e)) ? e.replace(S, V) : e;
        }
        var g, $, S;
        (g = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }), (i = "(?:" + Object.keys(g).join("|") + ")"), ($ = RegExp(i)), (S = RegExp(i, "g"));
        function V(e) {
            return g[e];
        }
        var F = {
                32: " ",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                65: "A",
                66: "B",
                67: "C",
                68: "D",
                69: "E",
                70: "F",
                71: "G",
                72: "H",
                73: "I",
                74: "J",
                75: "K",
                76: "L",
                77: "M",
                78: "N",
                79: "O",
                80: "P",
                81: "Q",
                82: "R",
                83: "S",
                84: "T",
                85: "U",
                86: "V",
                87: "W",
                88: "X",
                89: "Y",
                90: "Z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9",
            },
            E = { success: !1, major: "3" };
        try {
            (E.full = (I.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split(".")), (E.major = E.full[0]), (E.success = !0);
        } catch (e) {}
        function O(e, t) {
            var i = this;
            u.useDefault || ((I.valHooks.select.set = u._set), (u.useDefault = !0)),
                (this.$element = I(e)),
                (this.$newElement = null),
                (this.$button = null),
                (this.$menu = null),
                (this.options = t),
                (this.selectpicker = {
                    main: {},
                    search: {},
                    current: {},
                    view: {},
                    isSearching: !1,
                    keydown: {
                        keyHistory: "",
                        resetKeyHistory: {
                            start: function () {
                                return setTimeout(function () {
                                    i.selectpicker.keydown.keyHistory = "";
                                }, 800);
                            },
                        },
                    },
                }),
                (this.sizeInfo = {}),
                null === this.options.title && (this.options.title = this.$element.attr("title")),
                "number" == typeof (e = this.options.windowPadding) && (this.options.windowPadding = [e, e, e, e]),
                (this.val = O.prototype.val),
                (this.render = O.prototype.render),
                (this.refresh = O.prototype.refresh),
                (this.setStyle = O.prototype.setStyle),
                (this.selectAll = O.prototype.selectAll),
                (this.deselectAll = O.prototype.deselectAll),
                (this.destroy = O.prototype.destroy),
                (this.remove = O.prototype.remove),
                (this.show = O.prototype.show),
                (this.hide = O.prototype.hide),
                this.init();
        }
        var z = 0,
            T = ".bs.select",
            A = {
                DISABLED: "disabled",
                DIVIDER: "divider",
                SHOW: "open",
                DROPUP: "dropup",
                MENU: "dropdown-menu",
                MENURIGHT: "dropdown-menu-right",
                MENULEFT: "dropdown-menu-left",
                BUTTONCLASS: "btn-default",
                POPOVERHEADER: "popover-title",
                ICONBASE: "glyphicon",
                TICKICON: "glyphicon-ok",
            },
            L = { MENU: "." + A.MENU },
            N = {
                span: document.createElement("span"),
                i: document.createElement("i"),
                subtext: document.createElement("small"),
                a: document.createElement("a"),
                li: document.createElement("li"),
                whitespace: document.createTextNode(" "),
                fragment: document.createDocumentFragment(),
            },
            _ =
                (N.a.setAttribute("role", "option"),
                "4" === E.major && (N.a.className = "dropdown-item"),
                (N.subtext.className = "text-muted"),
                (N.text = N.span.cloneNode(!1)),
                (N.text.className = "text"),
                (N.checkMark = N.span.cloneNode(!1)),
                new RegExp("38|40")),
            G = new RegExp("^9$|27"),
            D = {
                li: function (e, t, i) {
                    var s = N.li.cloneNode(!1);
                    return e && (1 === e.nodeType || 11 === e.nodeType ? s.appendChild(e) : (s.innerHTML = e)), void 0 !== t && "" !== t && (s.className = t), null != i && s.classList.add("optgroup-" + i), s;
                },
                a: function (e, t, i) {
                    var s = N.a.cloneNode(!0);
                    return e && (11 === e.nodeType ? s.appendChild(e) : s.insertAdjacentHTML("beforeend", e)), void 0 !== t && "" !== t && s.classList.add.apply(s.classList, t.split(" ")), i && s.setAttribute("style", i), s;
                },
                text: function (e, t) {
                    var i,
                        s,
                        n = N.text.cloneNode(!1);
                    if (
                        (e.content
                            ? (n.innerHTML = e.content)
                            : ((n.textContent = e.text),
                              e.icon && ((s = N.whitespace.cloneNode(!1)), ((i = (!0 === t ? N.i : N.span).cloneNode(!1)).className = this.options.iconBase + " " + e.icon), N.fragment.appendChild(i), N.fragment.appendChild(s)),
                              e.subtext && (((i = N.subtext.cloneNode(!1)).textContent = e.subtext), n.appendChild(i))),
                        !0 === t)
                    )
                        for (; 0 < n.childNodes.length; ) N.fragment.appendChild(n.childNodes[0]);
                    else N.fragment.appendChild(n);
                    return N.fragment;
                },
                label: function (e) {
                    var t,
                        i,
                        s = N.text.cloneNode(!1);
                    return (
                        (s.innerHTML = e.display),
                        e.icon && ((i = N.whitespace.cloneNode(!1)), ((t = N.span.cloneNode(!1)).className = this.options.iconBase + " " + e.icon), N.fragment.appendChild(t), N.fragment.appendChild(i)),
                        e.subtext && (((t = N.subtext.cloneNode(!1)).textContent = e.subtext), s.appendChild(t)),
                        N.fragment.appendChild(s),
                        N.fragment
                    );
                },
            };
        function H(e) {
            var r,
                a = arguments,
                c = e;
            if (([].shift.apply(a), !E.success)) {
                try {
                    E.full = (I.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split(".");
                } catch (e) {
                    O.BootstrapVersion
                        ? (E.full = O.BootstrapVersion.split(" ")[0].split("."))
                        : ((E.full = [E.major, "0", "0"]),
                          console.warn(
                              "There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.",
                              e
                          ));
                }
                (E.major = E.full[0]), (E.success = !0);
            }
            if ("4" === E.major) {
                var t = [];
                O.DEFAULTS.style === A.BUTTONCLASS && t.push({ name: "style", className: "BUTTONCLASS" }),
                    O.DEFAULTS.iconBase === A.ICONBASE && t.push({ name: "iconBase", className: "ICONBASE" }),
                    O.DEFAULTS.tickIcon === A.TICKICON && t.push({ name: "tickIcon", className: "TICKICON" }),
                    (A.DIVIDER = "dropdown-divider"),
                    (A.SHOW = "show"),
                    (A.BUTTONCLASS = "btn-light"),
                    (A.POPOVERHEADER = "popover-header"),
                    (A.ICONBASE = ""),
                    (A.TICKICON = "bs-ok-default");
                for (var i = 0; i < t.length; i++) O.DEFAULTS[(e = t[i]).name] = A[e.className];
            }
            var s = this.each(function () {
                var e = I(this);
                if (e.is("select")) {
                    var t = e.data("selectpicker"),
                        i = "object" == typeof c && c;
                    if (t) {
                        if (i) for (var s in i) i.hasOwnProperty(s) && (t.options[s] = i[s]);
                    } else {
                        var n,
                            o = e.data();
                        for (n in o) o.hasOwnProperty(n) && -1 !== I.inArray(n, d) && delete o[n];
                        var l = I.extend({}, O.DEFAULTS, I.fn.selectpicker.defaults || {}, o, i);
                        (l.template = I.extend({}, O.DEFAULTS.template, I.fn.selectpicker.defaults ? I.fn.selectpicker.defaults.template : {}, o.template, i.template)), e.data("selectpicker", (t = new O(this, l)));
                    }
                    "string" == typeof c && (r = t[c] instanceof Function ? t[c].apply(t, a) : t.options[c]);
                }
            });
            return void 0 !== r ? r : s;
        }
        (O.VERSION = "1.13.14"),
            (O.DEFAULTS = {
                noneSelectedText: "Nothing selected",
                noneResultsText: "No results matched {0}",
                countSelectedText: function (e, t) {
                    return 1 == e ? "{0} item selected" : "{0} items selected";
                },
                maxOptionsText: function (e, t) {
                    return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"];
                },
                selectAllText: "Select All",
                deselectAllText: "Deselect All",
                doneButton: !1,
                doneButtonText: "Close",
                multipleSeparator: ", ",
                styleBase: "btn",
                style: A.BUTTONCLASS,
                size: "auto",
                title: null,
                selectedTextFormat: "values",
                width: !1,
                container: !1,
                hideDisabled: !1,
                showSubtext: !1,
                showIcon: !0,
                showContent: !0,
                dropupAuto: !0,
                header: !1,
                liveSearch: !1,
                liveSearchPlaceholder: null,
                liveSearchNormalize: !1,
                liveSearchStyle: "contains",
                actionsBox: !1,
                iconBase: A.ICONBASE,
                tickIcon: A.TICKICON,
                showTick: !1,
                template: { caret: '<span class="caret"></span>' },
                maxOptions: !1,
                mobile: !1,
                selectOnTab: !1,
                dropdownAlignRight: !1,
                windowPadding: 0,
                virtualScroll: 600,
                display: !1,
                sanitize: !0,
                sanitizeFn: null,
                whiteList: {
                    "*": ["class", "dir", "id", "lang", "role", "tabIndex", "style", /^aria-[\w-]*$/i],
                    a: ["target", "href", "title", "rel"],
                    area: [],
                    b: [],
                    br: [],
                    col: [],
                    code: [],
                    div: [],
                    em: [],
                    hr: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    i: [],
                    img: ["src", "alt", "title", "width", "height"],
                    li: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    small: [],
                    span: [],
                    sub: [],
                    sup: [],
                    strong: [],
                    u: [],
                    ul: [],
                },
            }),
            (O.prototype = {
                constructor: O,
                init: function () {
                    var i = this,
                        e = this.$element.attr("id");
                    z++,
                        (this.selectId = "bs-select-" + z),
                        this.$element[0].classList.add("bs-select-hidden"),
                        (this.multiple = this.$element.prop("multiple")),
                        (this.autofocus = this.$element.prop("autofocus")),
                        this.$element[0].classList.contains("show-tick") && (this.options.showTick = !0),
                        (this.$newElement = this.createDropdown()),
                        this.buildData(),
                        this.$element.after(this.$newElement).prependTo(this.$newElement),
                        (this.$button = this.$newElement.children("button")),
                        (this.$menu = this.$newElement.children(L.MENU)),
                        (this.$menuInner = this.$menu.children(".inner")),
                        (this.$searchbox = this.$menu.find("input")),
                        this.$element[0].classList.remove("bs-select-hidden"),
                        !0 === this.options.dropdownAlignRight && this.$menu[0].classList.add(A.MENURIGHT),
                        void 0 !== e && this.$button.attr("data-id", e),
                        this.checkDisabled(),
                        this.clickListener(),
                        this.options.liveSearch ? (this.liveSearchListener(), (this.focusedParent = this.$searchbox[0])) : (this.focusedParent = this.$menuInner[0]),
                        this.setStyle(),
                        this.render(),
                        this.setWidth(),
                        this.options.container
                            ? this.selectPosition()
                            : this.$element.on("hide" + T, function () {
                                  var e, t;
                                  i.isVirtual() && ((t = (e = i.$menuInner[0]).firstChild.cloneNode(!1)), e.replaceChild(t, e.firstChild), (e.scrollTop = 0));
                              }),
                        this.$menu.data("this", this),
                        this.$newElement.data("this", this),
                        this.options.mobile && this.mobile(),
                        this.$newElement.on({
                            "hide.bs.dropdown": function (e) {
                                i.$element.trigger("hide" + T, e);
                            },
                            "hidden.bs.dropdown": function (e) {
                                i.$element.trigger("hidden" + T, e);
                            },
                            "show.bs.dropdown": function (e) {
                                i.$element.trigger("show" + T, e);
                            },
                            "shown.bs.dropdown": function (e) {
                                i.$element.trigger("shown" + T, e);
                            },
                        }),
                        i.$element[0].hasAttribute("required") &&
                            this.$element.on("invalid" + T, function () {
                                i.$button[0].classList.add("bs-invalid"),
                                    i.$element
                                        .on("shown" + T + ".invalid", function () {
                                            i.$element.val(i.$element.val()).off("shown" + T + ".invalid");
                                        })
                                        .on("rendered" + T, function () {
                                            this.validity.valid && i.$button[0].classList.remove("bs-invalid"), i.$element.off("rendered" + T);
                                        }),
                                    i.$button.on("blur" + T, function () {
                                        i.$element.trigger("focus").trigger("blur"), i.$button.off("blur" + T);
                                    });
                            }),
                        setTimeout(function () {
                            i.buildList(), i.$element.trigger("loaded" + T);
                        });
                },
                createDropdown: function () {
                    var e = this.multiple || this.options.showTick ? " show-tick" : "",
                        t = this.multiple ? ' aria-multiselectable="true"' : "",
                        i = "",
                        s = this.autofocus ? " autofocus" : "";
                    E.major < 4 && this.$element.parent().hasClass("input-group") && (i = " input-group-btn");
                    var n = "",
                        o = "",
                        l = "",
                        r = "";
                    return (
                        this.options.header && (n = '<div class="' + A.POPOVERHEADER + '"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>"),
                        this.options.liveSearch &&
                            (o =
                                '<div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"' +
                                (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + w(this.options.liveSearchPlaceholder) + '"') +
                                ' role="combobox" aria-label="Search" aria-controls="' +
                                this.selectId +
                                '" aria-autocomplete="list"></div>'),
                        this.multiple &&
                            this.options.actionsBox &&
                            (l =
                                '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn ' +
                                A.BUTTONCLASS +
                                '">' +
                                this.options.selectAllText +
                                '</button><button type="button" class="actions-btn bs-deselect-all btn ' +
                                A.BUTTONCLASS +
                                '">' +
                                this.options.deselectAllText +
                                "</button></div></div>"),
                        this.multiple &&
                            this.options.doneButton &&
                            (r = '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm ' + A.BUTTONCLASS + '">' + this.options.doneButtonText + "</button></div></div>"),
                        (e =
                            '<div class="dropdown bootstrap-select' +
                            e +
                            i +
                            '"><button type="button" class="' +
                            this.options.styleBase +
                            ' dropdown-toggle" ' +
                            ("static" === this.options.display ? 'data-display="static"' : "") +
                            'data-toggle="dropdown"' +
                            s +
                            ' role="combobox" aria-owns="' +
                            this.selectId +
                            '" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>' +
                            ("4" === E.major ? "" : '<span class="bs-caret">' + this.options.template.caret + "</span>") +
                            '</button><div class="' +
                            A.MENU +
                            " " +
                            ("4" === E.major ? "" : A.SHOW) +
                            '">' +
                            n +
                            o +
                            l +
                            '<div class="inner ' +
                            A.SHOW +
                            '" role="listbox" id="' +
                            this.selectId +
                            '" tabIndex="-1" ' +
                            t +
                            '><ul class="' +
                            A.MENU +
                            " inner " +
                            ("4" === E.major ? A.SHOW : "") +
                            '" role="presentation"></ul></div>' +
                            r +
                            "</div></div>"),
                        I(e)
                    );
                },
                setPositionData: function () {
                    this.selectpicker.view.canHighlight = [];
                    for (var e = (this.selectpicker.view.size = 0); e < this.selectpicker.current.data.length; e++) {
                        var t = this.selectpicker.current.data[e],
                            i = !0;
                        "divider" === t.type ? ((i = !1), (t.height = this.sizeInfo.dividerHeight)) : "optgroup-label" === t.type ? ((i = !1), (t.height = this.sizeInfo.dropdownHeaderHeight)) : (t.height = this.sizeInfo.liHeight),
                            t.disabled && (i = !1),
                            this.selectpicker.view.canHighlight.push(i),
                            i && (this.selectpicker.view.size++, (t.posinset = this.selectpicker.view.size)),
                            (t.position = (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) + t.height);
                    }
                },
                isVirtual: function () {
                    return (!1 !== this.options.virtualScroll && this.selectpicker.main.elements.length >= this.options.virtualScroll) || !0 === this.options.virtualScroll;
                },
                createView: function (k, e, t) {
                    var y,
                        $,
                        S = this,
                        i = 0,
                        E = [];
                    function s(e, t) {
                        var i,
                            s = S.selectpicker.current.elements.length,
                            n = [],
                            o = !0,
                            l = S.isVirtual();
                        S.selectpicker.view.scrollTop = e;
                        for (var r, a = Math.ceil((S.sizeInfo.menuInnerHeight / S.sizeInfo.liHeight) * 1.5), c = Math.round(s / a) || 1, d = 0; d < c; d++) {
                            var h = d === c - 1 ? s : (d + 1) * a;
                            if (((n[d] = [d * a + (d ? 1 : 0), h]), !s)) break;
                            void 0 === i && e - 1 <= S.selectpicker.current.data[h - 1].position - S.sizeInfo.menuInnerHeight && (i = d);
                        }
                        if (
                            (void 0 === i && (i = 0),
                            (g = [S.selectpicker.view.position0, S.selectpicker.view.position1]),
                            (p = Math.max(0, i - 1)),
                            (f = Math.min(c - 1, i + 1)),
                            (S.selectpicker.view.position0 = (!1 !== l && Math.max(0, n[p][0])) || 0),
                            (S.selectpicker.view.position1 = !1 === l ? s : Math.min(s, n[f][1]) || 0),
                            (p = g[0] !== S.selectpicker.view.position0 || g[1] !== S.selectpicker.view.position1),
                            void 0 !== S.activeIndex &&
                                (($ = S.selectpicker.main.elements[S.prevActiveIndex]),
                                (E = S.selectpicker.main.elements[S.activeIndex]),
                                (y = S.selectpicker.main.elements[S.selectedIndex]),
                                t && (S.activeIndex !== S.selectedIndex && S.defocusItem(E), (S.activeIndex = void 0)),
                                S.activeIndex) &&
                                S.activeIndex !== S.selectedIndex &&
                                S.defocusItem(y),
                            void 0 !== S.prevActiveIndex && S.prevActiveIndex !== S.activeIndex && S.prevActiveIndex !== S.selectedIndex && S.defocusItem($),
                            (t || p) &&
                                ((f = S.selectpicker.view.visibleElements ? S.selectpicker.view.visibleElements.slice() : []),
                                (S.selectpicker.view.visibleElements = !1 === l ? S.selectpicker.current.elements : S.selectpicker.current.elements.slice(S.selectpicker.view.position0, S.selectpicker.view.position1)),
                                S.setOptionStatus(),
                                (k || (!1 === l && t)) &&
                                    ((g = f),
                                    (r = S.selectpicker.view.visibleElements),
                                    (o = !(
                                        g.length === r.length &&
                                        g.every(function (e, t) {
                                            return e === r[t];
                                        })
                                    ))),
                                t || !0 === l) &&
                                o)
                        ) {
                            var p = S.$menuInner[0],
                                u = document.createDocumentFragment(),
                                f = p.firstChild.cloneNode(!1),
                                m = S.selectpicker.view.visibleElements,
                                v = [];
                            p.replaceChild(f, p.firstChild);
                            for (var g, d = 0, b = m.length; d < b; d++) {
                                var w,
                                    I,
                                    x = m[d];
                                S.options.sanitize && (w = x.lastChild) && (I = S.selectpicker.current.data[d + S.selectpicker.view.position0]) && I.content && !I.sanitized && (v.push(w), (I.sanitized = !0)), u.appendChild(x);
                            }
                            S.options.sanitize && v.length && C(v, S.options.whiteList, S.options.sanitizeFn),
                                !0 === l
                                    ? ((g = 0 === S.selectpicker.view.position0 ? 0 : S.selectpicker.current.data[S.selectpicker.view.position0 - 1].position),
                                      (o = S.selectpicker.view.position1 > s - 1 ? 0 : S.selectpicker.current.data[s - 1].position - S.selectpicker.current.data[S.selectpicker.view.position1 - 1].position),
                                      (p.firstChild.style.marginTop = g + "px"),
                                      (p.firstChild.style.marginBottom = o + "px"))
                                    : ((p.firstChild.style.marginTop = 0), (p.firstChild.style.marginBottom = 0)),
                                p.firstChild.appendChild(u),
                                !0 === l &&
                                    S.sizeInfo.hasScrollBar &&
                                    ((f = p.firstChild.offsetWidth),
                                    t && f < S.sizeInfo.menuInnerInnerWidth && S.sizeInfo.totalMenuWidth > S.sizeInfo.selectWidth
                                        ? (p.firstChild.style.minWidth = S.sizeInfo.menuInnerInnerWidth + "px")
                                        : f > S.sizeInfo.menuInnerInnerWidth &&
                                          ((S.$menu[0].style.minWidth = 0),
                                          (g = p.firstChild.offsetWidth) > S.sizeInfo.menuInnerInnerWidth && ((S.sizeInfo.menuInnerInnerWidth = g), (p.firstChild.style.minWidth = S.sizeInfo.menuInnerInnerWidth + "px")),
                                          (S.$menu[0].style.minWidth = "")));
                        }
                        (S.prevActiveIndex = S.activeIndex),
                            S.options.liveSearch
                                ? k &&
                                  t &&
                                  (S.selectpicker.view.canHighlight[(o = 0)] || (o = 1 + S.selectpicker.view.canHighlight.slice(1).indexOf(!0)),
                                  (l = S.selectpicker.view.visibleElements[o]),
                                  S.defocusItem(S.selectpicker.view.currentActive),
                                  (S.activeIndex = (S.selectpicker.current.data[o] || {}).index),
                                  S.focusItem(l))
                                : S.$menuInner.trigger("focus");
                    }
                    (this.selectpicker.isSearching = k),
                        (this.selectpicker.current = k ? this.selectpicker.search : this.selectpicker.main),
                        this.setPositionData(),
                        e &&
                            (t
                                ? (i = this.$menuInner[0].scrollTop)
                                : S.multiple ||
                                  ("number" == typeof (t = ((e = S.$element[0]).options[e.selectedIndex] || {}).liIndex) &&
                                      !1 !== S.options.size &&
                                      (t = (e = S.selectpicker.main.data[t]) && e.position) &&
                                      (i = t - (S.sizeInfo.menuInnerHeight + S.sizeInfo.liHeight) / 2))),
                        s(i, !0),
                        this.$menuInner.off("scroll.createView").on("scroll.createView", function (e, t) {
                            S.noScroll || s(this.scrollTop, t), (S.noScroll = !1);
                        }),
                        I(window)
                            .off("resize" + T + "." + this.selectId + ".createView")
                            .on("resize" + T + "." + this.selectId + ".createView", function () {
                                S.$newElement.hasClass(A.SHOW) && s(S.$menuInner[0].scrollTop);
                            });
                },
                focusItem: function (e, t, i) {
                    var s;
                    e &&
                        ((t = t || this.selectpicker.main.data[this.activeIndex]), (s = e.firstChild)) &&
                        (s.setAttribute("aria-setsize", this.selectpicker.view.size), s.setAttribute("aria-posinset", t.posinset), !0 !== i) &&
                        (this.focusedParent.setAttribute("aria-activedescendant", s.id), e.classList.add("active"), s.classList.add("active"));
                },
                defocusItem: function (e) {
                    e && (e.classList.remove("active"), e.firstChild) && e.firstChild.classList.remove("active");
                },
                setPlaceholder: function () {
                    var e,
                        t,
                        i,
                        s = !1;
                    return (
                        this.options.title &&
                            !this.multiple &&
                            (this.selectpicker.view.titleOption || (this.selectpicker.view.titleOption = document.createElement("option")),
                            (e = this.$element[0]),
                            (t = !(s = !0)),
                            (i = !this.selectpicker.view.titleOption.parentNode) &&
                                ((this.selectpicker.view.titleOption.className = "bs-title-option"),
                                (this.selectpicker.view.titleOption.value = ""),
                                (t = void 0 === I(e.options[e.selectedIndex]).attr("selected") && void 0 === this.$element.data("selected"))),
                            (!i && 0 === this.selectpicker.view.titleOption.index) || e.insertBefore(this.selectpicker.view.titleOption, e.firstChild),
                            t) &&
                            (e.selectedIndex = 0),
                        s
                    );
                },
                buildData: function () {
                    var e = ':not([hidden]):not([data-hidden="true"])',
                        o = [],
                        t = 0,
                        i = this.setPlaceholder() ? 1 : 0,
                        s = (this.options.hideDisabled && (e += ":not(:disabled)"), this.$element[0].querySelectorAll("select > *" + e));
                    function l(e) {
                        var t = o[o.length - 1];
                        (t && "divider" === t.type && (t.optID || e.optID)) || (((e = e || {}).type = "divider"), o.push(e));
                    }
                    function n(e, t) {
                        var i, s, n;
                        ((t = t || {}).divider = "true" === e.getAttribute("data-divider")),
                            t.divider
                                ? l({ optID: t.optID })
                                : ((i = o.length),
                                  (s = (s = e.style.cssText) ? w(s) : ""),
                                  (n = (e.className || "") + (t.optgroupClass || "")),
                                  t.optID && (n = "opt " + n),
                                  (t.optionClass = n.trim()),
                                  (t.inlineStyle = s),
                                  (t.text = e.textContent),
                                  (t.content = e.getAttribute("data-content")),
                                  (t.tokens = e.getAttribute("data-tokens")),
                                  (t.subtext = e.getAttribute("data-subtext")),
                                  (t.icon = e.getAttribute("data-icon")),
                                  (e.liIndex = i),
                                  (t.display = t.content || t.text),
                                  (t.type = "option"),
                                  (t.index = i),
                                  (t.option = e),
                                  (t.selected = !!e.selected),
                                  (t.disabled = t.disabled || !!e.disabled),
                                  o.push(t));
                    }
                    for (var r = s.length; i < r; i++) {
                        var a = s[i];
                        if ("OPTGROUP" !== a.tagName) n(a, {});
                        else {
                            a = void 0;
                            c = void 0;
                            d = void 0;
                            h = void 0;
                            p = void 0;
                            u = void 0;
                            f = void 0;
                            m = void 0;
                            v = void 0;
                            g = void 0;
                            b = void 0;
                            a = i;
                            var c = s;
                            var d = c[a],
                                h = c[a - 1],
                                c = c[a + 1],
                                p = d.querySelectorAll("option" + e);
                            if (p.length) {
                                var u,
                                    f,
                                    m = { display: w(d.label), subtext: d.getAttribute("data-subtext"), icon: d.getAttribute("data-icon"), type: "optgroup-label", optgroupClass: " " + (d.className || "") };
                                t++, h && l({ optID: t }), (m.optID = t), o.push(m);
                                for (var v = 0, g = p.length; v < g; v++) {
                                    var b = p[v];
                                    0 === v && (f = (u = o.length - 1) + g), n(b, { headerIndex: u, lastIndex: f, optID: m.optID, optgroupClass: m.optgroupClass, disabled: d.disabled });
                                }
                                c && l({ optID: t });
                            }
                        }
                    }
                    this.selectpicker.main.data = this.selectpicker.current.data = o;
                },
                buildList: function () {
                    var e = this,
                        t = this.selectpicker.main.data,
                        i = [],
                        s = 0;
                    (!e.options.showTick && !e.multiple) || N.checkMark.parentNode || ((N.checkMark.className = this.options.iconBase + " " + e.options.tickIcon + " check-mark"), N.a.appendChild(N.checkMark));
                    for (var n = t.length, o = 0; o < n; o++) {
                        a = l = r = void 0;
                        var l,
                            r = t[o],
                            a = 0;
                        switch (r.type) {
                            case "divider":
                                l = D.li(!1, A.DIVIDER, r.optID ? r.optID + "div" : void 0);
                                break;
                            case "option":
                                (l = D.li(D.a(D.text.call(e, r), r.optionClass, r.inlineStyle), "", r.optID)).firstChild && (l.firstChild.id = e.selectId + "-" + r.index);
                                break;
                            case "optgroup-label":
                                l = D.li(D.label.call(e, r), "dropdown-header" + r.optgroupClass, r.optID);
                        }
                        i.push(l), r.display && (a += r.display.length), r.subtext && (a += r.subtext.length), r.icon && (a += 1), s < a && ((s = a), (e.selectpicker.view.widestOption = i[i.length - 1]));
                    }
                    this.selectpicker.main.elements = this.selectpicker.current.elements = i;
                },
                findLis: function () {
                    return this.$menuInner.find(".inner > li");
                },
                render: function () {
                    var e = this,
                        t = this.$element[0],
                        i = this.setPlaceholder() && 0 === t.selectedIndex,
                        s = x(t, this.options.hideDisabled),
                        n = s.length,
                        o = this.$button[0],
                        l = o.querySelector(".filter-option-inner-inner"),
                        r = document.createTextNode(this.options.multipleSeparator),
                        a = N.fragment.cloneNode(!1),
                        c = !1;
                    if ((o.classList.toggle("bs-placeholder", e.multiple ? !n : !k(t, s)), this.tabIndex(), "static" === this.options.selectedTextFormat)) a = D.text.call(this, { text: this.options.title }, !0);
                    else if (!1 === (this.multiple && -1 !== this.options.selectedTextFormat.indexOf("count") && 1 < n && ((1 < (t = this.options.selectedTextFormat.split(">")).length && n > t[1]) || (1 === t.length && 2 <= n)))) {
                        if (!i) {
                            for (var d = 0; d < n && d < 50; d++) {
                                var h = s[d],
                                    p = this.selectpicker.main.data[h.liIndex],
                                    u = {};
                                this.multiple && 0 < d && a.appendChild(r.cloneNode(!1)),
                                    h.title
                                        ? (u.text = h.title)
                                        : p &&
                                          (p.content && e.options.showContent
                                              ? ((u.content = p.content.toString()), (c = !0))
                                              : (e.options.showIcon && (u.icon = p.icon), e.options.showSubtext && !e.multiple && p.subtext && (u.subtext = " " + p.subtext), (u.text = h.textContent.trim()))),
                                    a.appendChild(D.text.call(this, u, !0));
                            }
                            49 < n && a.appendChild(document.createTextNode("..."));
                        }
                    } else
                        var t = ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])',
                            i = (this.options.hideDisabled && (t += ":not(:disabled)"), this.$element[0].querySelectorAll("select > option" + t + ", optgroup" + t + " option" + t).length),
                            t = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(n, i) : this.options.countSelectedText,
                            a = D.text.call(this, { text: t.replace("{0}", n.toString()).replace("{1}", i.toString()) }, !0);
                    null == this.options.title && (this.options.title = this.$element.attr("title")),
                        a.childNodes.length || (a = D.text.call(this, { text: void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText }, !0)),
                        (o.title = a.textContent.replace(/<[^>]*>?/g, "").trim()),
                        this.options.sanitize && c && C([a], e.options.whiteList, e.options.sanitizeFn),
                        (l.innerHTML = ""),
                        l.appendChild(a),
                        E.major < 4 && this.$newElement[0].classList.contains("bs3-has-addon") && ((t = o.querySelector(".filter-expand")), ((i = l.cloneNode(!0)).className = "filter-expand"), t ? o.replaceChild(i, t) : o.appendChild(i)),
                        this.$element.trigger("rendered" + T);
                },
                setStyle: function (e, t) {
                    var i = this.$button[0],
                        s = this.$newElement[0],
                        n = this.options.style.trim();
                    this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, "")),
                        E.major < 4 &&
                            (s.classList.add("bs3"), s.parentNode.classList.contains("input-group")) &&
                            (s.previousElementSibling || s.nextElementSibling) &&
                            (s.previousElementSibling || s.nextElementSibling).classList.contains("input-group-addon") &&
                            s.classList.add("bs3-has-addon"),
                        (s = e ? e.trim() : n),
                        "add" == t
                            ? s && i.classList.add.apply(i.classList, s.split(" "))
                            : "remove" == t
                            ? s && i.classList.remove.apply(i.classList, s.split(" "))
                            : (n && i.classList.remove.apply(i.classList, n.split(" ")), s && i.classList.add.apply(i.classList, s.split(" ")));
                },
                liHeight: function (e) {
                    var t, i, s, n, o, l, r, a, c, d, h, p, u;
                    (e || (!1 !== this.options.size && !Object.keys(this.sizeInfo).length)) &&
                        ((e = document.createElement("div")),
                        (t = document.createElement("div")),
                        (i = document.createElement("div")),
                        (l = document.createElement("ul")),
                        (p = document.createElement("li")),
                        (a = document.createElement("li")),
                        (r = document.createElement("li")),
                        (s = document.createElement("a")),
                        (n = document.createElement("span")),
                        (c = this.options.header && 0 < this.$menu.find("." + A.POPOVERHEADER).length ? this.$menu.find("." + A.POPOVERHEADER)[0].cloneNode(!0) : null),
                        (u = this.options.liveSearch ? document.createElement("div") : null),
                        (d = this.options.actionsBox && this.multiple && 0 < this.$menu.find(".bs-actionsbox").length ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null),
                        (h = this.options.doneButton && this.multiple && 0 < this.$menu.find(".bs-donebutton").length ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null),
                        (o = this.$element.find("option")[0]),
                        (this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth),
                        (n.className = "text"),
                        (s.className = "dropdown-item " + (o ? o.className : "")),
                        (e.className = this.$menu[0].parentNode.className + " " + A.SHOW),
                        (e.style.width = 0),
                        "auto" === this.options.width && (t.style.minWidth = 0),
                        (t.className = A.MENU + " " + A.SHOW),
                        (i.className = "inner " + A.SHOW),
                        (l.className = A.MENU + " inner " + ("4" === E.major ? A.SHOW : "")),
                        (p.className = A.DIVIDER),
                        (a.className = "dropdown-header"),
                        n.appendChild(document.createTextNode("​")),
                        s.appendChild(n),
                        r.appendChild(s),
                        a.appendChild(n.cloneNode(!0)),
                        this.selectpicker.view.widestOption && l.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)),
                        l.appendChild(r),
                        l.appendChild(p),
                        l.appendChild(a),
                        c && t.appendChild(c),
                        u && ((o = document.createElement("input")), (u.className = "bs-searchbox"), (o.className = "form-control"), u.appendChild(o), t.appendChild(u)),
                        d && t.appendChild(d),
                        i.appendChild(l),
                        t.appendChild(i),
                        h && t.appendChild(h),
                        e.appendChild(t),
                        document.body.appendChild(e),
                        (s = r.offsetHeight),
                        (n = a ? a.offsetHeight : 0),
                        (o = c ? c.offsetHeight : 0),
                        (l = u ? u.offsetHeight : 0),
                        (r = d ? d.offsetHeight : 0),
                        (a = h ? h.offsetHeight : 0),
                        (c = I(p).outerHeight(!0)),
                        (u = !!window.getComputedStyle && window.getComputedStyle(t)),
                        (d = t.offsetWidth),
                        (h = u ? null : I(t)),
                        (u = {
                            vert:
                                (p = {
                                    vert:
                                        f(u ? u.paddingTop : h.css("paddingTop")) +
                                        f(u ? u.paddingBottom : h.css("paddingBottom")) +
                                        f(u ? u.borderTopWidth : h.css("borderTopWidth")) +
                                        f(u ? u.borderBottomWidth : h.css("borderBottomWidth")),
                                    horiz:
                                        f(u ? u.paddingLeft : h.css("paddingLeft")) +
                                        f(u ? u.paddingRight : h.css("paddingRight")) +
                                        f(u ? u.borderLeftWidth : h.css("borderLeftWidth")) +
                                        f(u ? u.borderRightWidth : h.css("borderRightWidth")),
                                }).vert +
                                f(u ? u.marginTop : h.css("marginTop")) +
                                f(u ? u.marginBottom : h.css("marginBottom")) +
                                2,
                            horiz: p.horiz + f(u ? u.marginLeft : h.css("marginLeft")) + f(u ? u.marginRight : h.css("marginRight")) + 2,
                        }),
                        (i.style.overflowY = "scroll"),
                        (h = t.offsetWidth - d),
                        document.body.removeChild(e),
                        (this.sizeInfo.liHeight = s),
                        (this.sizeInfo.dropdownHeaderHeight = n),
                        (this.sizeInfo.headerHeight = o),
                        (this.sizeInfo.searchHeight = l),
                        (this.sizeInfo.actionsHeight = r),
                        (this.sizeInfo.doneButtonHeight = a),
                        (this.sizeInfo.dividerHeight = c),
                        (this.sizeInfo.menuPadding = p),
                        (this.sizeInfo.menuExtras = u),
                        (this.sizeInfo.menuWidth = d),
                        (this.sizeInfo.menuInnerInnerWidth = d - p.horiz),
                        (this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth),
                        (this.sizeInfo.scrollBarWidth = h),
                        (this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight),
                        this.setPositionData());
                },
                getSelectPosition: function () {
                    var e,
                        t = I(window),
                        i = this.$newElement.offset(),
                        s = I(this.options.container),
                        s =
                            (this.options.container && s.length && !s.is("body") ? (((e = s.offset()).top += parseInt(s.css("borderTopWidth"))), (e.left += parseInt(s.css("borderLeftWidth")))) : (e = { top: 0, left: 0 }),
                            this.options.windowPadding);
                    (this.sizeInfo.selectOffsetTop = i.top - e.top - t.scrollTop()),
                        (this.sizeInfo.selectOffsetBot = t.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - e.top - s[2]),
                        (this.sizeInfo.selectOffsetLeft = i.left - e.left - t.scrollLeft()),
                        (this.sizeInfo.selectOffsetRight = t.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - e.left - s[1]),
                        (this.sizeInfo.selectOffsetTop -= s[0]),
                        (this.sizeInfo.selectOffsetLeft -= s[3]);
                },
                setMenuSize: function (e) {
                    this.getSelectPosition();
                    var t,
                        i,
                        s,
                        n,
                        o,
                        l,
                        r = this.sizeInfo.selectWidth,
                        a = this.sizeInfo.liHeight,
                        c = this.sizeInfo.headerHeight,
                        d = this.sizeInfo.searchHeight,
                        h = this.sizeInfo.actionsHeight,
                        p = this.sizeInfo.doneButtonHeight,
                        u = this.sizeInfo.dividerHeight,
                        f = this.sizeInfo.menuPadding,
                        m = 0;
                    if (
                        (this.options.dropupAuto &&
                            ((l = a * this.selectpicker.current.elements.length + f.vert),
                            (l = this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && l + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot),
                            !0 === this.selectpicker.isSearching && (l = this.selectpicker.dropup),
                            this.$newElement.toggleClass(A.DROPUP, l),
                            (this.selectpicker.dropup = l)),
                        "auto" === this.options.size)
                    )
                        (l = 3 < this.selectpicker.current.elements.length ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2 : 0),
                            (i = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert),
                            (s = l + c + d + h + p),
                            (o = Math.max(l - f.vert, 0)),
                            (t = (n = i = this.$newElement.hasClass(A.DROPUP) ? this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert : i) - c - d - h - p - f.vert);
                    else if (this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size) {
                        for (var v = 0; v < this.options.size; v++) "divider" === this.selectpicker.current.data[v].type && m++;
                        (t = (i = a * this.options.size + m * u + f.vert) - f.vert), (n = i + c + d + h + p), (s = o = "");
                    }
                    this.$menu.css({ "max-height": n + "px", overflow: "hidden", "min-height": s + "px" }),
                        this.$menuInner.css({ "max-height": t + "px", "overflow-y": "auto", "min-height": o + "px" }),
                        (this.sizeInfo.menuInnerHeight = Math.max(t, 1)),
                        this.selectpicker.current.data.length &&
                            this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight &&
                            ((this.sizeInfo.hasScrollBar = !0), (this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth)),
                        "auto" === this.options.dropdownAlignRight &&
                            this.$menu.toggleClass(A.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < this.sizeInfo.totalMenuWidth - r),
                        this.dropdown && this.dropdown._popper && this.dropdown._popper.update();
                },
                setSize: function (e) {
                    var t, i;
                    this.liHeight(e),
                        this.options.header && this.$menu.css("padding-top", 0),
                        !1 !== this.options.size &&
                            ((t = this),
                            (i = I(window)),
                            this.setMenuSize(),
                            this.options.liveSearch &&
                                this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize", function () {
                                    return t.setMenuSize();
                                }),
                            "auto" === this.options.size
                                ? i
                                      .off("resize" + T + "." + this.selectId + ".setMenuSize scroll" + T + "." + this.selectId + ".setMenuSize")
                                      .on("resize" + T + "." + this.selectId + ".setMenuSize scroll" + T + "." + this.selectId + ".setMenuSize", function () {
                                          return t.setMenuSize();
                                      })
                                : this.options.size &&
                                  "auto" != this.options.size &&
                                  this.selectpicker.current.elements.length > this.options.size &&
                                  i.off("resize" + T + "." + this.selectId + ".setMenuSize scroll" + T + "." + this.selectId + ".setMenuSize")),
                        this.createView(!1, !0, e);
                },
                setWidth: function () {
                    var i = this;
                    "auto" === this.options.width
                        ? requestAnimationFrame(function () {
                              i.$menu.css("min-width", "0"),
                                  i.$element.on("loaded" + T, function () {
                                      i.liHeight(), i.setMenuSize();
                                      var e = i.$newElement.clone().appendTo("body"),
                                          t = e.css("width", "auto").children("button").outerWidth();
                                      e.remove(), (i.sizeInfo.selectWidth = Math.max(i.sizeInfo.totalMenuWidth, t)), i.$newElement.css("width", i.sizeInfo.selectWidth + "px");
                                  });
                          })
                        : "fit" === this.options.width
                        ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width"))
                        : this.options.width
                        ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width))
                        : (this.$menu.css("min-width", ""), this.$newElement.css("width", "")),
                        this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement[0].classList.remove("fit-width");
                },
                selectPosition: function () {
                    function e(e) {
                        var t = {},
                            i = l.options.display || (!!I.fn.dropdown.Constructor.Default && I.fn.dropdown.Constructor.Default.display);
                        l.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass(A.DROPUP, e.hasClass(A.DROPUP)),
                            (s = e.offset()),
                            r.is("body") ? (n = { top: 0, left: 0 }) : (((n = r.offset()).top += parseInt(r.css("borderTopWidth")) - r.scrollTop()), (n.left += parseInt(r.css("borderLeftWidth")) - r.scrollLeft())),
                            (o = e.hasClass(A.DROPUP) ? 0 : e[0].offsetHeight),
                            (E.major < 4 || "static" === i) && ((t.top = s.top - n.top + o), (t.left = s.left - n.left)),
                            (t.width = e[0].offsetWidth),
                            l.$bsContainer.css(t);
                    }
                    this.$bsContainer = I('<div class="bs-container" />');
                    var s,
                        n,
                        o,
                        l = this,
                        r = I(this.options.container);
                    this.$button.on("click.bs.dropdown.data-api", function () {
                        l.isDisabled() || (e(l.$newElement), l.$bsContainer.appendTo(l.options.container).toggleClass(A.SHOW, !l.$button.hasClass(A.SHOW)).append(l.$menu));
                    }),
                        I(window)
                            .off("resize" + T + "." + this.selectId + " scroll" + T + "." + this.selectId)
                            .on("resize" + T + "." + this.selectId + " scroll" + T + "." + this.selectId, function () {
                                l.$newElement.hasClass(A.SHOW) && e(l.$newElement);
                            }),
                        this.$element.on("hide" + T, function () {
                            l.$menu.data("height", l.$menu.height()), l.$bsContainer.detach();
                        });
                },
                setOptionStatus: function (e) {
                    var t = this;
                    if (((t.noScroll = !1), t.selectpicker.view.visibleElements && t.selectpicker.view.visibleElements.length))
                        for (var i = 0; i < t.selectpicker.view.visibleElements.length; i++) {
                            var s = t.selectpicker.current.data[i + t.selectpicker.view.position0],
                                n = s.option;
                            n && (!0 !== e && t.setDisabled(s.index, s.disabled), t.setSelected(s.index, n.selected));
                        }
                },
                setSelected: function (e, t) {
                    var i,
                        s = this.selectpicker.main.elements[e],
                        n = this.selectpicker.main.data[e],
                        o = void 0 !== this.activeIndex,
                        l = this.activeIndex === e || (t && !this.multiple && !o);
                    (n.selected = t),
                        (i = s.firstChild),
                        t && (this.selectedIndex = e),
                        s.classList.toggle("selected", t),
                        l ? (this.focusItem(s, n), (this.selectpicker.view.currentActive = s), (this.activeIndex = e)) : this.defocusItem(s),
                        i && (i.classList.toggle("selected", t), t ? i.setAttribute("aria-selected", !0) : this.multiple ? i.setAttribute("aria-selected", !1) : i.removeAttribute("aria-selected")),
                        l || o || !t || void 0 === this.prevActiveIndex || ((n = this.selectpicker.main.elements[this.prevActiveIndex]), this.defocusItem(n));
                },
                setDisabled: function (e, t) {
                    var i = this.selectpicker.main.elements[e];
                    (this.selectpicker.main.data[e].disabled = t),
                        (e = i.firstChild),
                        i.classList.toggle(A.DISABLED, t),
                        e && ("4" === E.major && e.classList.toggle(A.DISABLED, t), t ? (e.setAttribute("aria-disabled", t), e.setAttribute("tabIndex", -1)) : (e.removeAttribute("aria-disabled"), e.setAttribute("tabIndex", 0)));
                },
                isDisabled: function () {
                    return this.$element[0].disabled;
                },
                checkDisabled: function () {
                    this.isDisabled()
                        ? (this.$newElement[0].classList.add(A.DISABLED), this.$button.addClass(A.DISABLED).attr("tabIndex", -1).attr("aria-disabled", !0))
                        : (this.$button[0].classList.contains(A.DISABLED) && (this.$newElement[0].classList.remove(A.DISABLED), this.$button.removeClass(A.DISABLED).attr("aria-disabled", !1)),
                          -1 != this.$button.attr("tabIndex") || this.$element.data("tabIndex") || this.$button.removeAttr("tabIndex"));
                },
                tabIndex: function () {
                    this.$element.data("tabIndex") !== this.$element.attr("tabIndex") &&
                        -98 !== this.$element.attr("tabIndex") &&
                        "-98" !== this.$element.attr("tabIndex") &&
                        (this.$element.data("tabIndex", this.$element.attr("tabIndex")), this.$button.attr("tabIndex", this.$element.data("tabIndex"))),
                        this.$element.attr("tabIndex", -98);
                },
                clickListener: function () {
                    var w = this,
                        t = I(document);
                    function e() {
                        (w.options.liveSearch ? w.$searchbox : w.$menuInner).trigger("focus");
                    }
                    function i() {
                        w.dropdown && w.dropdown._popper && w.dropdown._popper.state.isCreated ? e() : requestAnimationFrame(i);
                    }
                    t.data("spaceSelect", !1),
                        this.$button.on("keyup", function (e) {
                            /(32)/.test(e.keyCode.toString(10)) && t.data("spaceSelect") && (e.preventDefault(), t.data("spaceSelect", !1));
                        }),
                        this.$newElement.on("show.bs.dropdown", function () {
                            3 < E.major && !w.dropdown && ((w.dropdown = w.$button.data("bs.dropdown")), (w.dropdown._menu = w.$menu[0]));
                        }),
                        this.$button.on("click.bs.dropdown.data-api", function () {
                            w.$newElement.hasClass(A.SHOW) || w.setSize();
                        }),
                        this.$element.on("shown" + T, function () {
                            w.$menuInner[0].scrollTop !== w.selectpicker.view.scrollTop && (w.$menuInner[0].scrollTop = w.selectpicker.view.scrollTop), 3 < E.major ? requestAnimationFrame(i) : e();
                        }),
                        this.$menuInner.on("mouseenter", "li a", function (e) {
                            var t = this.parentElement,
                                i = w.isVirtual() ? w.selectpicker.view.position0 : 0,
                                s = Array.prototype.indexOf.call(t.parentElement.children, t),
                                s = w.selectpicker.current.data[s + i];
                            w.focusItem(t, s, !0);
                        }),
                        this.$menuInner.on("click", "li a", function (e, t) {
                            var i = I(this),
                                s = w.$element[0],
                                n = w.isVirtual() ? w.selectpicker.view.position0 : 0,
                                n = w.selectpicker.current.data[i.parent().index() + n],
                                o = n.index,
                                l = k(s),
                                r = s.selectedIndex,
                                a = s.options[r],
                                c = !0;
                            if ((w.multiple && 1 !== w.options.maxOptions && e.stopPropagation(), e.preventDefault(), !w.isDisabled() && !i.parent().hasClass(A.DISABLED))) {
                                var e = n.option,
                                    n = I(e),
                                    d = e.selected,
                                    h = n.parent("optgroup"),
                                    p = h.find("option"),
                                    u = w.options.maxOptions,
                                    f = h.data("maxOptions") || !1;
                                if (((t = o === w.activeIndex ? !0 : t) || ((w.prevActiveIndex = w.activeIndex), (w.activeIndex = void 0)), w.multiple)) {
                                    if (((e.selected = !d), w.setSelected(o, !d), i.trigger("blur"), !1 !== u || !1 !== f)) {
                                        (t = u < x(s).length), (d = f < h.find("option:selected").length);
                                        if ((u && t) || (f && d))
                                            if (u && 1 == u) (s.selectedIndex = -1), (e.selected = !0), w.setOptionStatus(!0);
                                            else if (f && 1 == f) {
                                                for (var m = 0; m < p.length; m++) {
                                                    var v = p[m];
                                                    (v.selected = !1), w.setSelected(v.liIndex, !1);
                                                }
                                                (e.selected = !0), w.setSelected(o, !0);
                                            } else {
                                                var i = "string" == typeof w.options.maxOptionsText ? [w.options.maxOptionsText, w.options.maxOptionsText] : w.options.maxOptionsText,
                                                    h = "function" == typeof i ? i(u, f) : i,
                                                    i = h[0].replace("{n}", u),
                                                    g = h[1].replace("{n}", f),
                                                    b = I('<div class="notify"></div>');
                                                h[2] && ((i = i.replace("{var}", h[2][1 < u ? 0 : 1])), (g = g.replace("{var}", h[2][1 < f ? 0 : 1]))),
                                                    (e.selected = !1),
                                                    w.$menu.append(b),
                                                    u && t && (b.append(I("<div>" + i + "</div>")), (c = !1), w.$element.trigger("maxReached" + T)),
                                                    f && d && (b.append(I("<div>" + g + "</div>")), (c = !1), w.$element.trigger("maxReachedGrp" + T)),
                                                    setTimeout(function () {
                                                        w.setSelected(o, !1);
                                                    }, 10),
                                                    b[0].classList.add("fadeOut"),
                                                    setTimeout(function () {
                                                        b.remove();
                                                    }, 1050);
                                            }
                                    }
                                } else a && (a.selected = !1), (e.selected = !0), w.setSelected(o, !0);
                                !w.multiple || (w.multiple && 1 === w.options.maxOptions) ? w.$button.trigger("focus") : w.options.liveSearch && w.$searchbox.trigger("focus"),
                                    !c || (!w.multiple && r === s.selectedIndex) || ((y = [e.index, n.prop("selected"), l]), w.$element.triggerNative("change"));
                            }
                        }),
                        this.$menu.on("click", "li." + A.DISABLED + " a, ." + A.POPOVERHEADER + ", ." + A.POPOVERHEADER + " :not(.close)", function (e) {
                            e.currentTarget == this && (e.preventDefault(), e.stopPropagation(), (w.options.liveSearch && !I(e.target).hasClass("close") ? w.$searchbox : w.$button).trigger("focus"));
                        }),
                        this.$menuInner.on("click", ".divider, .dropdown-header", function (e) {
                            e.preventDefault(), e.stopPropagation(), (w.options.liveSearch ? w.$searchbox : w.$button).trigger("focus");
                        }),
                        this.$menu.on("click", "." + A.POPOVERHEADER + " .close", function () {
                            w.$button.trigger("click");
                        }),
                        this.$searchbox.on("click", function (e) {
                            e.stopPropagation();
                        }),
                        this.$menu.on("click", ".actions-btn", function (e) {
                            (w.options.liveSearch ? w.$searchbox : w.$button).trigger("focus"), e.preventDefault(), e.stopPropagation(), I(this).hasClass("bs-select-all") ? w.selectAll() : w.deselectAll();
                        }),
                        this.$element
                            .on("change" + T, function () {
                                w.render(), w.$element.trigger("changed" + T, y), (y = null);
                            })
                            .on("focus" + T, function () {
                                w.options.mobile || w.$button.trigger("focus");
                            });
                },
                liveSearchListener: function () {
                    var p = this,
                        u = document.createElement("li");
                    this.$button.on("click.bs.dropdown.data-api", function () {
                        p.$searchbox.val() && p.$searchbox.val("");
                    }),
                        this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api", function (e) {
                            e.stopPropagation();
                        }),
                        this.$searchbox.on("input propertychange", function () {
                            var e = p.$searchbox.val();
                            if (((p.selectpicker.search.elements = []), (p.selectpicker.search.data = []), e)) {
                                var t = [],
                                    i = e.toUpperCase(),
                                    s = {},
                                    n = [],
                                    o = p._searchStyle(),
                                    l = p.options.liveSearchNormalize;
                                l && (i = m(i));
                                for (var r = 0; r < p.selectpicker.main.data.length; r++) {
                                    var a = p.selectpicker.main.data[r];
                                    s[r] || (s[r] = b(a, i, o, l)),
                                        s[r] &&
                                            void 0 !== a.headerIndex &&
                                            -1 === n.indexOf(a.headerIndex) &&
                                            (0 < a.headerIndex && ((s[a.headerIndex - 1] = !0), n.push(a.headerIndex - 1)), (s[a.headerIndex] = !0), n.push(a.headerIndex), (s[a.lastIndex + 1] = !0)),
                                        s[r] && "optgroup-label" !== a.type && n.push(r);
                                }
                                for (var r = 0, c = n.length; r < c; r++) {
                                    var d = n[r],
                                        h = ((a = p.selectpicker.main.data[d]), p.selectpicker.main.data[n[r - 1]]);
                                    ("divider" !== a.type || ("divider" === a.type && h && "divider" !== h.type && c - 1 !== r)) && (p.selectpicker.search.data.push(a), t.push(p.selectpicker.main.elements[d]));
                                }
                                (p.activeIndex = void 0),
                                    (p.noScroll = !0),
                                    p.$menuInner.scrollTop(0),
                                    (p.selectpicker.search.elements = t),
                                    p.createView(!0),
                                    t.length || ((u.className = "no-results"), (u.innerHTML = p.options.noneResultsText.replace("{0}", '"' + w(e) + '"')), p.$menuInner[0].firstChild.appendChild(u));
                            } else p.$menuInner.scrollTop(0), p.createView(!1);
                        });
                },
                _searchStyle: function () {
                    return this.options.liveSearchStyle || "contains";
                },
                val: function (e) {
                    var t,
                        i = this.$element[0];
                    return void 0 === e
                        ? this.$element.val()
                        : ((t = k(i)),
                          (y = [null, null, t]),
                          this.$element.val(e).trigger("changed" + T, y),
                          this.$newElement.hasClass(A.SHOW) &&
                              (this.multiple ? this.setOptionStatus(!0) : "number" == typeof (t = (i.options[i.selectedIndex] || {}).liIndex) && (this.setSelected(this.selectedIndex, !1), this.setSelected(t, !0))),
                          this.render(),
                          (y = null),
                          this.$element);
                },
                changeAll: function (e) {
                    if (this.multiple) {
                        void 0 === e && (e = !0);
                        var t = this.$element[0],
                            i = 0,
                            s = 0,
                            n = k(t);
                        t.classList.add("bs-select-hidden");
                        for (var o = 0, l = this.selectpicker.current.data, r = l.length; o < r; o++) {
                            var a = l[o],
                                c = a.option;
                            c && !a.disabled && "divider" !== a.type && (a.selected && i++, !0 === (c.selected = e)) && s++;
                        }
                        t.classList.remove("bs-select-hidden"), i !== s && (this.setOptionStatus(), (y = [null, null, n]), this.$element.triggerNative("change"));
                    }
                },
                selectAll: function () {
                    return this.changeAll(!0);
                },
                deselectAll: function () {
                    return this.changeAll(!1);
                },
                toggle: function (e) {
                    (e = e || window.event) && e.stopPropagation(), this.$button.trigger("click.bs.dropdown.data-api");
                },
                keydown: function (e) {
                    var t,
                        i,
                        s,
                        n,
                        o = I(this),
                        l = o.hasClass("dropdown-toggle"),
                        r = (l ? o.closest(".dropdown") : o.closest(L.MENU)).data("this"),
                        a = r.findLis(),
                        c = !1,
                        l = 9 === e.which && !l && !r.options.selectOnTab,
                        d = _.test(e.which) || l,
                        h = r.$menuInner[0].scrollTop,
                        p = !0 === r.isVirtual() ? r.selectpicker.view.position0 : 0;
                    if (!(112 <= e.which && e.which <= 123))
                        if (
                            !(t = r.$newElement.hasClass(A.SHOW)) &&
                            (d || (48 <= e.which && e.which <= 57) || (96 <= e.which && e.which <= 105) || (65 <= e.which && e.which <= 90)) &&
                            (r.$button.trigger("click.bs.dropdown.data-api"), r.options.liveSearch)
                        )
                            r.$searchbox.trigger("focus");
                        else {
                            if ((27 === e.which && t && (e.preventDefault(), r.$button.trigger("click.bs.dropdown.data-api").trigger("focus")), d)) {
                                if (!a.length) return;
                                -1 !== (d = (i = r.selectpicker.main.elements[r.activeIndex]) ? Array.prototype.indexOf.call(i.parentElement.children, i) : -1) && r.defocusItem(i),
                                    38 === e.which
                                        ? (-1 !== d && d--, d + p < 0 && (d += a.length), r.selectpicker.view.canHighlight[d + p] || (-1 == (d = r.selectpicker.view.canHighlight.slice(0, d + p).lastIndexOf(!0) - p) && (d = a.length - 1)))
                                        : (40 !== e.which && !l) ||
                                          (++d + p >= r.selectpicker.view.canHighlight.length && (d = 0), r.selectpicker.view.canHighlight[d + p]) ||
                                          (d = d + 1 + r.selectpicker.view.canHighlight.slice(d + p + 1).indexOf(!0)),
                                    e.preventDefault();
                                var u = p + d;
                                38 === e.which
                                    ? 0 === p && d === a.length - 1
                                        ? ((r.$menuInner[0].scrollTop = r.$menuInner[0].scrollHeight), (u = r.selectpicker.current.elements.length - 1))
                                        : (c = (n = (s = r.selectpicker.current.data[u]).position - s.height) < h)
                                    : (40 !== e.which && !l) || (0 === d ? (u = r.$menuInner[0].scrollTop = 0) : (c = h < (n = (s = r.selectpicker.current.data[u]).position - r.sizeInfo.menuInnerHeight))),
                                    (i = r.selectpicker.current.elements[u]),
                                    (r.activeIndex = r.selectpicker.current.data[u].index),
                                    r.focusItem(i),
                                    (r.selectpicker.view.currentActive = i),
                                    c && (r.$menuInner[0].scrollTop = n),
                                    (r.options.liveSearch ? r.$searchbox : o).trigger("focus");
                            } else if ((!o.is("input") && !G.test(e.which)) || (32 === e.which && r.selectpicker.keydown.keyHistory)) {
                                var f,
                                    m = [];
                                e.preventDefault(),
                                    (r.selectpicker.keydown.keyHistory += F[e.which]),
                                    r.selectpicker.keydown.resetKeyHistory.cancel && clearTimeout(r.selectpicker.keydown.resetKeyHistory.cancel),
                                    (r.selectpicker.keydown.resetKeyHistory.cancel = r.selectpicker.keydown.resetKeyHistory.start()),
                                    (f = r.selectpicker.keydown.keyHistory),
                                    /^(.)\1+$/.test(f) && (f = f.charAt(0));
                                for (var v = 0; v < r.selectpicker.current.data.length; v++) {
                                    var g = r.selectpicker.current.data[v];
                                    b(g, f, "startsWith", !0) && r.selectpicker.view.canHighlight[v] && m.push(g.index);
                                }
                                m.length &&
                                    ((p = 0),
                                    a.removeClass("active").find("a").removeClass("active"),
                                    1 === f.length && (-1 === (p = m.indexOf(r.activeIndex)) || p === m.length - 1 ? (p = 0) : p++),
                                    (c = 0 < h - (s = r.selectpicker.main.data[(l = m[p])]).position ? ((n = s.position - s.height), !0) : ((n = s.position - r.sizeInfo.menuInnerHeight), s.position > h + r.sizeInfo.menuInnerHeight)),
                                    (i = r.selectpicker.main.elements[l]),
                                    (r.activeIndex = m[p]),
                                    r.focusItem(i),
                                    i && i.firstChild.focus(),
                                    c && (r.$menuInner[0].scrollTop = n),
                                    o.trigger("focus"));
                            }
                            t &&
                                ((32 === e.which && !r.selectpicker.keydown.keyHistory) || 13 === e.which || (9 === e.which && r.options.selectOnTab)) &&
                                (32 !== e.which && e.preventDefault(),
                                (r.options.liveSearch && 32 === e.which) || (r.$menuInner.find(".active a").trigger("click", !0), o.trigger("focus"), r.options.liveSearch) || (e.preventDefault(), I(document).data("spaceSelect", !0)));
                        }
                },
                mobile: function () {
                    this.$element[0].classList.add("mobile-device");
                },
                refresh: function () {
                    var e = I.extend({}, this.options, this.$element.data());
                    (this.options = e), this.checkDisabled(), this.setStyle(), this.render(), this.buildData(), this.buildList(), this.setWidth(), this.setSize(!0), this.$element.trigger("refreshed" + T);
                },
                hide: function () {
                    this.$newElement.hide();
                },
                show: function () {
                    this.$newElement.show();
                },
                remove: function () {
                    this.$newElement.remove(), this.$element.remove();
                },
                destroy: function () {
                    this.$newElement.before(this.$element).remove(),
                        (this.$bsContainer || this.$menu).remove(),
                        this.$element.off(T).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"),
                        I(window).off(T + "." + this.selectId);
                },
            });
        var q = I.fn.selectpicker,
            s =
                ((I.fn.selectpicker = H),
                (I.fn.selectpicker.Constructor = O),
                (I.fn.selectpicker.noConflict = function () {
                    return (I.fn.selectpicker = q), this;
                }),
                I.fn.dropdown.Constructor._dataApiKeydownHandler || I.fn.dropdown.Constructor.prototype.keydown);
        I(document)
            .off("keydown.bs.dropdown.data-api")
            .on("keydown.bs.dropdown.data-api", ':not(.bootstrap-select) > [data-toggle="dropdown"]', s)
            .on("keydown.bs.dropdown.data-api", ":not(.bootstrap-select) > .dropdown-menu", s)
            .on("keydown" + T, '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', O.prototype.keydown)
            .on("focusin.modal", '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', function (e) {
                e.stopPropagation();
            }),
            I(window).on("load" + T + ".data-api", function () {
                I(".selectpicker").each(function () {
                    var e = I(this);
                    H.call(e, e.data());
                });
            });
    })(e);
});
!(function (e, t) {
    "function" == typeof define && define.amd
        ? define([], function () {
              return t(e);
          })
        : "object" == typeof exports
        ? (module.exports = t(e))
        : (e.Gumshoe = t(e));
})("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, function (f) {
    "use strict";
    function u(e, t, n) {
        n.settings.events && ((e = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n })), t.dispatchEvent(e));
    }
    function n(e) {
        var t = 0;
        if (e.offsetParent) for (; e; ) (t += e.offsetTop), (e = e.offsetParent);
        return 0 <= t ? t : 0;
    }
    function d(e) {
        e &&
            e.sort(function (e, t) {
                return n(e.content) < n(t.content) ? -1 : 1;
            });
    }
    function i(e, t, n) {
        return (
            (e = e.getBoundingClientRect()),
            (t = "function" == typeof (t = t).offset ? parseFloat(t.offset()) : parseFloat(t.offset)),
            n ? parseInt(e.bottom, 10) < (f.innerHeight || document.documentElement.clientHeight) : parseInt(e.top, 10) <= t
        );
    }
    function m(e, t) {
        var n,
            o,
            s = e[e.length - 1];
        if (
            ((n = s),
            (o = t),
            f.innerHeight + f.pageYOffset >=
                Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) &&
                i(n.content, o, !0))
        )
            return s;
        for (var c = e.length - 1; 0 <= c; c--) if (i(e[c].content, t)) return e[c];
    }
    function v(e, t) {
        var n;
        e && (n = e.nav.closest("li")) && (n.classList.remove(t.navClass), e.content.classList.remove(t.contentClass), o(n, t), u("gumshoeDeactivate", n, { link: e.nav, content: e.content, settings: t }));
    }
    function p(e, t) {
        t.nested && (e = e.parentNode.closest("li")) && (e.classList.add(t.nestedClass), p(e, t));
    }
    var h = { navClass: "active", contentClass: "active", nested: !1, nestedClass: "active", offset: 0, reflow: !1, events: !0 },
        o = function (e, t) {
            t.nested && e.parentNode && (e = e.parentNode.closest("li")) && (e.classList.remove(t.nestedClass), o(e, t));
        };
    return function (e, t) {
        function n(e) {
            r && f.cancelAnimationFrame(r), (r = f.requestAnimationFrame(l.detect));
        }
        function o(e) {
            r && f.cancelAnimationFrame(r),
                (r = f.requestAnimationFrame(function () {
                    d(c), l.detect();
                }));
        }
        var s,
            c,
            i,
            r,
            a,
            l = {
                setup: function () {
                    (s = document.querySelectorAll(e)),
                        (c = []),
                        Array.prototype.forEach.call(s, function (e) {
                            var t = document.getElementById(decodeURIComponent(e.hash.substr(1)));
                            t && c.push({ nav: e, content: t });
                        }),
                        d(c);
                },
                detect: function () {
                    var e,
                        t,
                        n,
                        o = m(c, a);
                    o
                        ? (i && o.content === i.content) ||
                          (v(i, a),
                          (t = a),
                          (e = o) && (n = e.nav.closest("li")) && (n.classList.add(t.navClass), e.content.classList.add(t.contentClass), p(n, t), u("gumshoeActivate", n, { link: e.nav, content: e.content, settings: t })),
                          (i = o))
                        : i && (v(i, a), (i = null));
                },
            };
        return (
            (l.destroy = function () {
                i && v(i, a), f.removeEventListener("scroll", n, !1), a.reflow && f.removeEventListener("resize", o, !1), (a = r = i = s = c = null);
            }),
            (a = (function () {
                var n = {};
                return (
                    Array.prototype.forEach.call(arguments, function (e) {
                        for (var t in e) {
                            if (!e.hasOwnProperty(t)) return;
                            n[t] = e[t];
                        }
                    }),
                    n
                );
            })(h, t || {})),
            l.setup(),
            l.detect(),
            f.addEventListener("scroll", n, !1),
            a.reflow && f.addEventListener("resize", o, !1),
            l
        );
    };
});
const stickyElement = document.querySelector('[data-sticky="true"]');
if (stickyElement) {
    const a = stickyElement.getBoundingClientRect().top;
    var endScroll = window.innerHeight - stickyElement.offsetHeight - 500,
        currPos = window.scrollY,
        screenHeight = window.innerHeight,
        stickyElementHeight = stickyElement.offsetHeight,
        topGap = 0,
        bottomGap = 0;
    function positionStickySidebar() {
        endScroll = window.innerHeight - stickyElement.offsetHeight - bottomGap;
        var t = parseInt(stickyElement.style.top.replace("px;", ""));
        screenHeight < stickyElementHeight + topGap + bottomGap
            ? window.scrollY < currPos
                ? t < topGap
                    ? (stickyElement.style.top = t + currPos - window.scrollY + "px")
                    : topGap <= t && t != topGap && (stickyElement.style.top = topGap + "px")
                : endScroll < t
                ? (stickyElement.style.top = t + currPos - window.scrollY + "px")
                : t < endScroll && t != endScroll && (stickyElement.style.top = endScroll + "px")
            : (stickyElement.style.top = topGap + "px"),
            (currPos = window.scrollY);
    }
    function stickyElementToMe() {
        stickyElement.style.top = topGap + "px";
    }
    function updateSticky() {
        (screenHeight = window.innerHeight), (stickyElementHeight = stickyElement.offsetHeight), positionStickySidebar();
    }
    setTimeout(() => {
        var t;
        stickyElement.hasAttribute("data-top-gap") && ((t = stickyElement.getAttribute("data-top-gap")), (topGap = "auto" == String(t) ? a : parseInt(t))),
            stickyElement.hasAttribute("data-bottom-gap") && (bottomGap = parseInt(stickyElement.getAttribute("data-bottom-gap")));
    }, 100),
        (stickyElement.style.position = "sticky"),
        (stickyElement.style.top = topGap + "px"),
        (stickyElement.style.height = "fit-content"),
        setTimeout(() => {
            window.addEventListener("resize", () => {
                (currPos = window.scrollY), updateSticky();
            }),
                document.addEventListener("scroll", updateSticky, { capture: !0, passive: !0 });
        }, 1e3);
}
