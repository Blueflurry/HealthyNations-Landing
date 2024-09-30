"use strict";

// ::::: GLobal Javascript ::::
// ================================Animate Interaction on Scroll ==================================
JOS.init({
    // disable: false, // Disable JOS gloabaly | Values :  'true', 'false'
    // debugMode: true, // Enable JOS debug mode | Values :  'true', 'false'
    passive: false, // Set the passive option for the scroll event listener | Values :  'true', 'false'

    once: true, // Disable JOS after first animation | Values :  'true', 'false' || Int : 0-1000
    animation: "fade-up", // JOS global animation type | Values :  'fade', 'slide', 'zoom', 'flip', 'fade-right', 'fade-left', 'fade-up', 'fade-down', 'zoom-in-right', 'zoom-in-left', 'zoom-in-up', 'zoom-in-down', 'zoom-out-right', 'zoom-out-left', 'zoom-out-up', 'zoom-out-down', 'flip-right', 'flip-left', 'flip-up', 'flip-down, spin, revolve, stretch, "my-custom-animation"
    // animationInverse: "static", // Set the animation type for the element when it is scrolled out of view | Values :  'fade', 'slide', 'zoom', 'flip', 'fade-right', 'fade-left', 'fade-up', 'fade-down', 'zoom-in-right', 'zoom-in-left', 'zoom-in-up', 'zoom-in-down', 'zoom-out-right', 'zoom-out-left', 'zoom-out-up', 'zoom-out-down', 'flip-right', 'flip-left', 'flip-up', 'flip-down, spin, revolve, stretch, "my-custom-animation"
    timingFunction: "ease", // JOS global timing function | Values :  'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'step-start', 'step-end', 'steps()', 'cubic-bezier()', 'my-custom-timing-function'
    //mirror : false, // Set whether the element should animate back when scrolled out of view | Values :  'true', 'false'
    threshold: 0, // Set gloabal the threshold for the element to be visible | Values :  0-1
    delay: 0.5, // Set global the delay for the animation to start | Values :  0,1,2,3,4,5
    duration: 0.7, // Set global the duration for the animation playback | Values :  flota : 0-1 & int : 0,1,2,3,4,5

    // startVisible: "true", // Set whether the element should animate when the page is loaded | Values :  'true', 'false' || MS : 0-10000
    scrollDirection: "down", // Set the scroll direction for the element to be visible | Values :  'up', 'down', 'none'
    //scrollProgressDisable: true // disable or enable scroll callback function | Values :  'true', 'false'
    // intersectionRatio: 0.4, // Set the intersection ratio between which the element should be visible | Values :  0-1 (automaticaly set)
    // rootMargin_top: "0%", // Set by which percent the element should animate out (Recommended value between 10% to -30%)
    // rootMargin_bottom: "-50%", // Set by which percent the element should animate out (Recommended value between -10% to -60%)
    rootMargin: "0% 0% 15% 0%", // Set the root margin for the element to be visible | Values :  _% _% _% _%  (automaticaly set)
});

// ======================================== Accordion ======================================
let accordions = document.querySelectorAll(".accordion-item");
accordions.forEach((item) => {
    let label = item.querySelector(".accordion-header");
    label.addEventListener("click", () => {
        accordions.forEach((accordionItem) => {
            accordionItem.classList.remove("active");
        });
        item.classList.toggle("active");
    });
});

//:::::::::::::::::::::::::::::::::::::::::: Template JavaScript ::::::::::::::::::::::::::::::::::

// ========================TF-1 : Brand Slider================================
var brandSlider = new Swiper(".brand-slider", {
    slidesPerView: 2,
    spaceBetween: 90,
    speed: 1200,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});

// ========================TF-2 : Brand Slider================================
var brandSlider = new Swiper(".brand-slider-2", {
    slidesPerView: 2,
    spaceBetween: 90,
    speed: 1200,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
        1400: {
            slidesPerView: 6,
        },
    },
});
// ========================TF-3 : Testimonial Slider================================
var testimonialOne = new Swiper(".testimonial-one", {
    navigation: {
        nextEl: ".slider-nav-btn-next",
        prevEl: ".slider-nav-btn-prev",
    },
});

// Get all tab buttons and content sections
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

// Add click event listeners to tab buttons
tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Remove 'active' class from all tab buttons and hide all tab content
        tabButtons.forEach((btn) => {
            btn.classList.remove("active");
        });
        tabContents.forEach((content) => {
            content.classList.add("hn-hidden");
        });

        // Get the data-tab attribute of the clicked button
        const tabId = button.getAttribute("data-tab");
        const correspondingTab = document.getElementById(tabId);

        // Add 'active' class to the clicked button and show the corresponding tab content
        button.classList.add("active");
        correspondingTab.classList.remove("hn-hidden");
    });
});

// ========================TF-1 : Testimonial Slider================================
const testimonialSlider = new Swiper(".testimonial-slider", {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var isCouponApplied = false;

var monthLinks = ["https://rzp.io/l/hn-silver-3", "https://rzp.io/l/hn-gold-3", "https://rzp.io/rzp/hn-diamond-3"];
var annualLinks = ["https://rzp.io/rzp/hn-silver-6", "https://rzp.io/l/hn-gold-6", "https://rzp.io/l/hn-diamond-6"];

var monthDiscountLinks = ["https://rzp.io/l/hn-silver-htm-3", "https://rzp.io/l/hn-gold-htm-3", "https://rzp.io/rzp/hn-diamond-htm-3"];
var annualDiscountLinks = ["https://rzp.io/rzp/hn-silver-htm-6", "https://rzp.io/rzp/hn-gold-htm-6", "https://rzp.io/l/hn-diamond-htm-6"];

// JS Toggle Button
function toggleSwitch() {
    var month = document.querySelectorAll(".month");
    var annual = document.querySelectorAll(".annual");
    var payButtons = document.querySelectorAll(".hn-pay-btn");

    for (var i = 0; i < month.length; i++) {
        var paymentLink = monthLinks[i];

        if (document.getElementById("toggle").checked == true) {
            month[i].classList.add("hidden");
            annual[i].classList.remove("hidden");
            if (isCouponApplied) {
                paymentLink = annualDiscountLinks[i];
            } else {
                paymentLink = annualLinks[i];
            }
        } else {
            month[i].classList.remove("hidden");
            annual[i].classList.add("hidden");
            if (isCouponApplied) {
                paymentLink = monthDiscountLinks[i];
            } else {
                paymentLink = monthLinks[i];
            }
        }

        payButtons[i].href = paymentLink;
    }
}

// Sticky Menu
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("scrolling", window.scrollY > 0);
});

function setupHeroVideo() {
    var heroVideo = document.querySelector(".healthynations-hero-video");
    heroVideo.style.height = (heroVideo.offsetWidth * 9) / 16 + "px";
}

function setupFooter() {
    var dateSpan = document.querySelector(".hn-date");
    dateSpan.innerHTML = new Date().getFullYear();
}

function reducePriceBy10Percent(priceText) {
    // Remove the "₹" symbol from the start
    let priceWithoutSymbol = priceText.replace("₹", "");

    // Convert the remaining text to a number
    let price = parseInt(priceWithoutSymbol, 10);

    // Reduce the price by 10%
    let discountedPrice = price * 0.9;

    // Convert back to a string and return the discounted price
    return Math.round(discountedPrice).toString();
}

function setupCouponOnHomePage() {
    var couponBtn = document.querySelector(".hn-submit");
    var couponAlerts = document.querySelectorAll(".hn-coupon-alert");
    var couponErrorAlert = document.querySelector(".hn-coupon-error");

    couponAlerts.forEach(function (couponAlert) {
        couponAlert.classList.add("hn-hidden");
    });

    couponErrorAlert.classList.add("hn-hidden");

    isCouponApplied = false;

    couponBtn.addEventListener("click", function () {
        var couponInput = document.querySelector("#coupon");
        var coupon = couponInput.value;

        if (coupon == null || coupon !== "HTM2024") {
            // Coupon is invalid
            isCouponApplied = false;

            couponInput.value = "";

            couponAlerts.forEach(function (couponAlert) {
                couponAlert.classList.add("hn-hidden");
            });

            couponErrorAlert.classList.remove("hn-hidden");

            setTimeout(function () {
                couponErrorAlert.classList.add("hn-hidden");
            }, 5000);
        } else {
            // Coupon is valid
            isCouponApplied = true;

            couponInput.disabled = true;

            couponAlerts.forEach(function (couponAlert) {
                couponAlert.classList.remove("hn-hidden");
            });

            couponErrorAlert.classList.add("hn-hidden");

            couponBtn.disabled = true;
            couponBtn.innerHTML = "Applied";

            var month = document.querySelectorAll(".month");
            var annual = document.querySelectorAll(".annual");
            for (var i = 0; i < month.length; i++) {
                var monthValue = month[i].querySelector("span").innerHTML;
                var annualValue = annual[i].querySelector("span").innerHTML;
                month[i].querySelector("span").innerHTML = "₹" + reducePriceBy10Percent(monthValue);
                annual[i].querySelector("span").innerHTML = "₹" + reducePriceBy10Percent(annualValue);
            }
        }

        toggleSwitch();
    });
}

setupHeroVideo();
setupCouponOnHomePage();
setupFooter();
