// Shared animation configurations
const commonEase = "power2.inOut";
const commonDuration = 1;
const breakpoints = {
    mobile: 673,
    tablet: 1392
};

// Reusable animation functions
const createSplitText = (selector) => new SplitType(selector, { types: "words, lines" });

const animatePortrait = (tl, config) => {
    gsap.set(".portrait", {
        transformOrigin: "center center",
        ...config.initial
    });
    
    tl.to(".portrait", {
        duration: commonDuration,
        ease: commonEase,
        ...config.to
    }).from(".portrait", {
        duration: 0.75,
        ease: "power3.inOut",
        ...config.from
    }, "start");
};

const animateNavbar = (tl) => {
    tl.from(".navbar", {
        delay: 0.1,
        duration: 0.5,
        scale: 0,
        y: 50,
        ease: commonEase,
    }, "start")
    .from(".logo , .nav-links a", {
        delay: 0.6,
        duration: 0.5,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: commonEase
    }, "start");
};

const animateIntroSection = (tl, cardIntro, isMobile = false) => {
    if (isMobile) {
        tl.from(".cardIntro", {
            duration: 0.8,
            opacity: 0,
            y: 100,
            ease: "back.out(1.7)"
        }, "start")
        .from(".cardIntro .vector-design", {
            delay: 0.3,
            duration: 0.6,
            opacity: 0,
            rotate: 180,
            scale: 0,
            ease: "elastic.out(1, 0.3)"
        }, "start")
        .from(cardIntro.lines, {
            delay: 0.4,
            duration: 0.7,
            opacity: 0,
            x: -30,
            stagger: 0.15,
            ease: "power4.out"
        }, "start");
    } else {
        tl.from(".cardIntro", {
            duration: 0.5,
            opacity: 0,
            scale: 0,
            y: 100,
            x: 400,
            ease: commonEase
        }, "start")
        .from(".cardIntro .vector-design", {
            delay: 0.5,
            duration: commonDuration,
            opacity: 0,
            rotate: -20,
            scale: 0,
            ease: commonEase
        }, "start")
        .from(cardIntro.lines, {
            delay: 0.5,
            duration: 0.5,
            opacity: 0,
            y: 15,
            stagger: 0.2,
            ease: commonEase
        }, "start");
    }
};

const animateAboutSection = (tl, about) => {
    tl.from(".about", {
        duration: commonDuration,
        opacity: 0,
        scale: 0,
        x: 400,
        y: -100,
        ease: commonEase,
    }, "start")
    .from(about.lines, {
        delay: 1,
        duration: 0.5,
        opacity: 0,
        y: 15,
        stagger: 0.2,
        ease: commonEase
    }, "start")
    .from(".about p", {
        delay: 1.2,
        duration: commonDuration,
        opacity: 0,
        y: 20,
        ease: commonEase,
    }, "start");
};

const animateContactSection = (tl) => {
    tl.from(".contact", {
        duration: commonDuration,
        opacity: 0,
        scale: 0,
        y: -100,
        ease: commonEase,
    }, "start")
    .from(".contact h2, .contact p", {
        delay: 1.5,
        duration: commonDuration,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: commonEase,
    }, "start")
    .from(".contact a", {
        delay: 1.7,
        duration: commonDuration,
        opacity: 0,
        y: 30,
        ease: commonEase,
    }, "start");
};

const animateSocialsSection = (tl) => {
    tl.from(".socials", {
        duration: commonDuration,
        opacity: 0,
        scale: 0,
        y: -100,
        x: -400,
        ease: commonEase,
    }, "start")
    .from(".socials h2", {
        delay: 1.5,
        duration: commonDuration,
        opacity: 0,
        y: 20,
        ease: commonEase,
    }, "start")
    .from(".social-links a", {
        delay: 1.7,
        duration: 0.5,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: commonEase,
    }, "start");
};

const initDesktopAnimations = (cardIntro, about) => {
    const tl = gsap.timeline({ delay: 2 });

    // Portrait animation
    animatePortrait(tl, {
        initial: { scale: 1.2 },
        to: { scale: 1 },
        from: {
            xPercent: -50,
            left: "50%",
            yPercent: -50,
            top: "50%",
            x: 0,
            y: '75%'
        }
    });

    // Intro and navbar animations
    animateIntroSection(tl, cardIntro);
    animateNavbar(tl);
    animateAboutSection(tl, about);
    animateContactSection(tl);
    animateSocialsSection(tl);

    // Projects section
    tl.from(".projects", {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        x: -400,
        ease: commonEase,
    }, "start")
    .from(".project-name, .current-project .links", {
        delay: 0.5,
        duration: commonDuration,
        opacity: 0,
        y: 20,
        ease: commonEase,
    }, "start")
    .from(".current-project-image", {
        delay: 1,
        duration: commonDuration,
        opacity: 0,
        ease: commonEase,
    }, "start")
    .from(".project-list li p", {
        delay: 1,
        duration: commonDuration,
        opacity: 0,
        y: 20,
        stagger: 0.5,
        ease: commonEase,
    }, "start");
};

const initTabletAnimations = (cardIntro, about) => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.normalizeScroll(true);
    
    const tl = gsap.timeline({ delay: 2 });

    // Portrait animation
    animatePortrait(tl, {
        initial: { scale: 1.2, width: "100%" },
        to: { scale: 1, width: "35%" },
        from: {
            xPercent: -50,
            yPercent: -50,
            top: "50%",
            x: 50,
            y: '50%'
        }
    });

    // Basic animations
    animateIntroSection(tl, cardIntro);
    animateNavbar(tl);
    animateAboutSection(tl, about);
    animateContactSection(tl);

    // Scroll-triggered animations
    const tl2 = gsap.timeline();
    initScrollTriggeredAnimations(tl2);
};

const initMobileAnimations = (cardIntro, about) => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.normalizeScroll(true);
    
    const tl = gsap.timeline({ delay: 2 });

    // Portrait animation
    animatePortrait(tl, {
        initial: { scale: 0.8 },
        to: { scale: 1 },
        from: {
            yPercent: -150,
            top: "50%",
            x: 0,
            y: '60%'
        }
    });

    // Basic animations with mobile flag set to true
    animateNavbar(tl);
    animateIntroSection(tl, cardIntro, true);

    // Scroll-triggered animations
    initMobileScrollAnimations(about);
};

const initScrollTriggeredAnimations = (tl) => {
    // Projects section with scroll trigger
    tl.from(".projects", {
        duration: commonDuration,
        opacity: 0,
        y: 100,
        scrollTrigger: {
            trigger: ".projects",
            start: "-20% 80%",
            end: "80% bottom",
            scrub: 2,
        },
        ease: commonEase,
    }, "start");
};

const initMobileScrollAnimations = (about) => {
    // About section scroll trigger
    gsap.from(".about", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
            end: "bottom center",
            scrub: 1,
        },
        duration: commonDuration,
        opacity: 0,
        y: 50,
        ease: commonEase
    });

    gsap.from(about.lines, {
        scrollTrigger: {
            trigger: ".about",
            start: "top 70%",
            end: "bottom center",
            scrub: 1,
        },
        duration: 0.5,
        opacity: 0,
        y: 15,
        stagger: 0.2,
        ease: commonEase
    });

    // Projects section scroll trigger
    gsap.from(".projects", {
        scrollTrigger: {
            trigger: ".projects",
            start: "top 80%",
            end: "center center",
            scrub: 1,
        },
        duration: commonDuration,
        opacity: 0,
        y: 50,
        ease: commonEase
    });

    // Contact section scroll trigger
    gsap.from(".contact", {
        scrollTrigger: {
            trigger: ".contact",
            start: "top 80%",
            end: "center center",
            scrub: 1,
        },
        duration: commonDuration,
        opacity: 0,
        y: 50,
        ease: commonEase
    });

    // Updated Socials section
    gsap.from(".socials", {
        duration: commonDuration,
        opacity: 0,
        y: 50,
        ease: commonEase
    });
    gsap.from(".social-links a", {
        duration: commonDuration,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: commonEase
    });
};

// Main initialization
const initAnimations = () => {
    const width = window.innerWidth;
    let cardIntro = createSplitText(".cardIntro h2");
    let about = createSplitText(".about h2");

    // Clear any existing ScrollTrigger instances
    ScrollTrigger.getAll().forEach(st => st.kill());
    
    if (width > breakpoints.tablet) {
        initDesktopAnimations(cardIntro, about);
    } else if (width > breakpoints.mobile) {
        initTabletAnimations(cardIntro, about);
    } else {
        initMobileAnimations(cardIntro, about);
    }
};

// Event listeners with debouncing
let resizeTimeout;
const handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        gsap.killTweensOf("*");
        ScrollTrigger.getAll().forEach(st => st.kill());
        initAnimations();
    }, 250);
};

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("load", initAnimations);
    window.addEventListener("resize", handleResize);
});

// Cleanup function 
const cleanup = () => {
    window.removeEventListener("resize", handleResize);
    gsap.killTweensOf("*");
    ScrollTrigger.getAll().forEach(st => st.kill());
};


