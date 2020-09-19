! function(t) {
    "use strict";
	 $('#mrova-img-control').click(function(){
	 
	  $('#mrova-feedback').toggleClass('active');
	 });
    t(window).on("load", function() {
        t(".preloader").fadeOut(700)
    }), t("#searchOpen").on("click", function() {
        t(".search-form").addClass("open")
    }), t("#searchClose").on("click", function() {
        t(".search-form").removeClass("open")
    }), t(window).scroll(function() {
        t(window).scrollTop() > 200 ? t(".navigation").addClass("fixed-topp") : t(".navigation").removeClass("fixed-topp")
    }), t(".hero-slider").slick({
        autoplay: !0,
        infinite: !0,
        arrows: !0,
        prevArrow: "<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>",
        dots: !0,
        customPaging: function(o, e) {
            return '<a><i class="' + t(o.$slides[e]).data("icon") + '"></i><span>' + t(o.$slides[e]).data("text") + "</span></a>"
        },
        responsive: [{
            breakpoint: 576,
            settings: {
                arrows: !1
            }
        }]
    }), t(".hero-slider").slickAnimation(), t(".hero-slider-2").slick({
        autoplay: !0,
        infinite: !0,
        arrows: !1,
        dots: !1
    }), t(".hero-slider-2").slickAnimation(), t(".work-slider").slick({
        dots: !0,
        infinite: !1,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 7,
        centerPadding: "60px",
        arrows: !1,
        autoplay: !0,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 7,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), t(".team").slick({
        dots: !0,
        infinite: !0,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: "60px",
        arrows: !1,
        autoplay: !0,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), t(".about-slider").slick({
        arrows: !0,
        autoplay: !0,
        prevArrow: "<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>"
    }), t(".post-slider").slick({
        arrows: !0,
        autoplay: !0,
        prevArrow: "<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>"
    }), t(".collapse").on("shown.bs.collapse", function() {
        t(this).parent().find(".ti-plus").removeClass("ti-plus").addClass("ti-minus")
    }).on("hidden.bs.collapse", function() {
        t(this).parent().find(".ti-minus").removeClass("ti-minus").addClass("ti-plus")
    }), t(".testimonial-slider").slick({
        infinite: !1,
        dots: !1,
        arrows: !0,
        autoplay: !0,
        prevArrow: "<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>"
    }), t(".client-logo-slider").slick({
        infinite: !0,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: !0,
        dots: !1,
        arrows: !1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), t(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-zoom-in",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !0
    }), t(".popup-image").magnificPopup({
        type: "image",
        removalDelay: 160,
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = this.st.el.attr("data-effect")
            }
        },
        closeOnContentClick: !0,
        midClick: !0,
        fixedContentPos: !0,
        fixedBgPos: !0
    });
    var o = document.querySelector('[data-ref~="mixitup-container"]');
    o && mixitup(o, {
        selectors: {
            target: '[data-ref~="mixitup-target"]'
        }
    }), t(".control").on("click", function() {
        t(".control").removeClass("active"), t(this).addClass("active")
    });
    var e = t("html, body");
    t("nav a, .page-scroll").on("click", function() {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            var o = t(this.hash);
            if ((o = o.length ? o : t("[name=" + this.hash.slice(1) + "]")).length) return e.animate({
                scrollTop: o.offset().top - 90
            }, 1500, "easeInOutExpo"), !1
        }
    }), jQuery.extend(jQuery.easing, {
        easeInOutExpo: function(t, o, e, s, i) {
            return 0 === o ? e : o === i ? e + s : (o /= i / 2) < 1 ? s / 2 * Math.pow(2, 10 * (o - 1)) + e : s / 2 * (2 - Math.pow(2, -10 * --o)) + e
        }
    }), t(".back-to-top").on("click", function(o) {
        o.preventDefault(), t("html,body").animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    }), t(window).on("scroll", function() {
        ! function() {
            var o;
            0 !== t(".count").length && (o = t(".count").offset().top - window.innerHeight), t(window).scrollTop() > o && t(".count").each(function() {
                var o = t(this),
                    e = o.attr("data-count");
                t({
                    countNum: o.text()
                }).animate({
                    countNum: e
                }, {
                    duration: 1e3,
                    easing: "swing",
                    step: function() {
                        o.text(Math.floor(this.countNum))
                    },
                    complete: function() {
                        o.text(this.countNum)
                    }
                })
            })
        }()
    }), t("#simple-timer").syotimer({
        year: 2019,
        month: 1,
        day: 31,
        hour: 0,
        minute: 0
    }), AOS.init(), t(".megamenu-li, .megamenu").hover(function() {
        t(".megamenu").toggleClass("megaactive")
    }), t(".tabs-box").length && t(".tabs-box .tab-buttons .tab-btn").on("click", function(o) {
        o.preventDefault();
        var e = t(t(this).attr("data-tab"));
        return !t(e).is(":visible") && (e.parents(".tabs-box").find(".tab-buttons").find(".tab-btn").removeClass("active-btn"), t(this).addClass("active-btn"), e.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0), e.parents(".tabs-box").find(".tabs-content").find(".tab").removeClass("active-tab"), t(e).fadeIn(300), void t(e).addClass("active-tab"))
    }), fetch("https://www.panaeshacapital.com/blog/wp-json/wp/v2/posts/").then(t => t.json()).then(t => {
        console.log(t);
        let o = "";
        for (let e = 0; e < 9; e++) {
            let s = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const {
                id: i,
                date: n,
                link: a,
                title: r,
                content: l
            } = t[e];
            o += `<div class="col-lg-4 col-md-6 col-sm-12 "><div class="card mb-4">\x3c!--<div class="card-img-wrapper overlay-rounded-top"><img class="card-img-top"src="https://www.panaeshacapital.com/blog/wp-content/uploads/2019/06/tech04.jpg"alt="blog-thumbnail"></div>--\x3e<div class="card-body p-0"><div class="d-flex"><div class="py-3 px-4 border-right text-center min-width"><h3 class="text-primary mb-0">${new Date(n).getDate()}</h3><p class="mb-2">${s[new Date(n).getMonth()]}</p></div><div class="p-3"><a href="${a}"class="h4 font-primary text-dark font16"target="_blank">${r.rendered}</a>\x3c!--<p>by Admin</p>--\x3e</div></div></div></div></div>`, document.getElementById("result").innerHTML = o
        }
    }), $(window).scroll(function() {
        $(window).scrollTop() > 450 ? $("#contact").fadeIn() : $("#contact").fadeOut()
    })
}(jQuery);
! function(t) {
    "use strict";
    t(window).on("load", function() {
        t(".preloader").fadeOut(700)
    }), t("#searchOpen").on("click", function() {
        t(".search-form").addClass("open")
    }), t("#searchClose").on("click", function() {
        t(".search-form").removeClass("open")
    }), t(window).scroll(function() {
        t(window).scrollTop() > 200 ? t(".navigation").addClass("fixed-topp") : t(".navigation").removeClass("fixed-topp")
    }), t(".hero-slider").slick({
        autoplay: !0,
        infinite: !0,
        arrows: !0,
        prevArrow: "<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>",
        dots: !0,
        customPaging: function(o, e) {
            return '<a><i class="' + t(o.$slides[e]).data("icon") + '"></i><span>' + t(o.$slides[e]).data("text") + "</span></a>"
        },
        responsive: [{
            breakpoint: 576,
            settings: {
                arrows: !1
            }
        }]
    }), t(".hero-slider").slickAnimation(), t(".hero-slider-2").slick({
        autoplay: !0,
        infinite: !0,
        arrows: !1,
        dots: !1
    }), t(".hero-slider-2").slickAnimation(), t(".work-slider").slick({
        dots: !0,
        infinite: !1,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 7,
        centerPadding: "60px",
        arrows: !1,
        autoplay: !0,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 7,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), t(".team").slick({
        dots: !0,
        infinite: !0,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: "60px",
        arrows: !1,
        autoplay: !0,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), t(".about-slider").slick({
        arrows: !0,
        autoplay: !0,
        prevArrow: "<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>"
    }), t(".post-slider").slick({
        arrows: !0,
        autoplay: !0,
        prevArrow: "<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>"
    }), t(".collapse").on("shown.bs.collapse", function() {
        t(this).parent().find(".ti-plus").removeClass("ti-plus").addClass("ti-minus")
    }).on("hidden.bs.collapse", function() {
        t(this).parent().find(".ti-minus").removeClass("ti-minus").addClass("ti-plus")
    }), t(".testimonial-slider").slick({
        infinite: !1,
        dots: !1,
        arrows: !0,
        autoplay: !0,
        prevArrow: "<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>"
    }), t(".client-logo-slider").slick({
        infinite: !0,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: !0,
        dots: !1,
        arrows: !1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), t(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-zoom-in",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !0
    }), t(".popup-image").magnificPopup({
        type: "image",
        removalDelay: 160,
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = this.st.el.attr("data-effect")
            }
        },
        closeOnContentClick: !0,
        midClick: !0,
        fixedContentPos: !0,
        fixedBgPos: !0
    });
    var o = document.querySelector('[data-ref~="mixitup-container"]');
    o && mixitup(o, {
        selectors: {
            target: '[data-ref~="mixitup-target"]'
        }
    }), t(".control").on("click", function() {
        t(".control").removeClass("active"), t(this).addClass("active")
    });
    var e = t("html, body");
    t("nav a, .page-scroll").on("click", function() {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            var o = t(this.hash);
            if ((o = o.length ? o : t("[name=" + this.hash.slice(1) + "]")).length) return e.animate({
                scrollTop: o.offset().top - 90
            }, 1500, "easeInOutExpo"), !1
        }
    }), jQuery.extend(jQuery.easing, {
        easeInOutExpo: function(t, o, e, s, i) {
            return 0 === o ? e : o === i ? e + s : (o /= i / 2) < 1 ? s / 2 * Math.pow(2, 10 * (o - 1)) + e : s / 2 * (2 - Math.pow(2, -10 * --o)) + e
        }
    }), t(".back-to-top").on("click", function(o) {
        o.preventDefault(), t("html,body").animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    }), t(window).on("scroll", function() {
        ! function() {
            var o;
            0 !== t(".count").length && (o = t(".count").offset().top - window.innerHeight), t(window).scrollTop() > o && t(".count").each(function() {
                var o = t(this),
                    e = o.attr("data-count");
                t({
                    countNum: o.text()
                }).animate({
                    countNum: e
                }, {
                    duration: 1e3,
                    easing: "swing",
                    step: function() {
                        o.text(Math.floor(this.countNum))
                    },
                    complete: function() {
                        o.text(this.countNum)
                    }
                })
            })
        }()
    }), t("#simple-timer").syotimer({
        year: 2019,
        month: 1,
        day: 31,
        hour: 0,
        minute: 0
    }), AOS.init(), t(".megamenu-li, .megamenu").hover(function() {
        t(".megamenu").toggleClass("megaactive")
    }), t(".tabs-box").length && t(".tabs-box .tab-buttons .tab-btn").on("click", function(o) {
        o.preventDefault();
        var e = t(t(this).attr("data-tab"));
        return !t(e).is(":visible") && (e.parents(".tabs-box").find(".tab-buttons").find(".tab-btn").removeClass("active-btn"), t(this).addClass("active-btn"), e.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0), e.parents(".tabs-box").find(".tabs-content").find(".tab").removeClass("active-tab"), t(e).fadeIn(300), void t(e).addClass("active-tab"))
    }), fetch("https://www.panaeshacapital.com/blog/wp-json/wp/v2/posts/").then(t => t.json()).then(t => {
        console.log(t);
        let o = "";
        for (let e = 0; e < 9; e++) {
            let s = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const {
                id: i,
                date: n,
                link: a,
                title: r,
                content: l
            } = t[e];
            o += `<div class="col-lg-4 col-md-6 col-sm-12 "><div class="card mb-4">\x3c!--<div class="card-img-wrapper overlay-rounded-top"><img class="card-img-top"src="https://www.panaeshacapital.com/blog/wp-content/uploads/2019/06/tech04.jpg"alt="blog-thumbnail"></div>--\x3e<div class="card-body p-0"><div class="d-flex"><div class="py-3 px-4 border-right text-center min-width"><h3 class="text-primary mb-0">${new Date(n).getDate()}</h3><p class="mb-2">${s[new Date(n).getMonth()]}</p></div><div class="p-3"><a href="${a}"class="h4 font-primary text-dark font16"target="_blank">${r.rendered}</a>\x3c!--<p>by Admin</p>--\x3e</div></div></div></div></div>`, document.getElementById("result").innerHTML = o
        }
    }), $(window).scroll(function() {
        $(window).scrollTop() > 450 ? $("#contact").fadeIn() : $("#contact").fadeOut()
    })
	
}(jQuery);
