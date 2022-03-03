
gsap.registerPlugin(ScrollTrigger);

function loader() {
    document.querySelector(".load").style.display = "none";
}

let agb = document.querySelector(".a-gb");
let worksHeight = document.querySelector("#works").clientHeight;
let wLineHeight = document.querySelector("#w-line").clientHeight;
let displace = ((worksHeight / 2) - (wLineHeight / 2));
console.log(displace);

ScrollTrigger.matchMedia({


    "(min-width: 1008px)": function () {
        gsap.to(".gb", {
            x: "0%",
            duration: 5,
            scrollTrigger: {
                trigger: ".hero",
                toggleActions: "play none none reset",
                scrub: 1,
                start: "bottom bottom",
                end: "",
            },
        });
        gsap.to(".top-first", {
            scrollTrigger: {
                trigger: ".hero",
                start: "bottom bottom",
                endTrigger: ".hero-img",
                end: "bottom bottom",
                scrub: 1,
                pin: ".hero",
                pinSpacing: "none",
                toggleActions: "play none none reset",
            },
            rotationY: 15,

        })
        gsap.to(".top", {
            scrollTrigger: {
                trigger: ".hero",
                start: "bottom bottom",
                endTrigger: ".hero-img",
                end: "bottom bottom",
                scrub: 1,
                pin: ".hero",
                pinSpacing: "none",
                toggleActions: "play none none reset",
            },
            rotationY: -15,

        })

        gsap.to(".hero-img", {
            transform: "translateY(0%)",
            duration: 20,
            scrollTrigger: {
                trigger: ".hero",
                start: "bottom bottom",
                endTrigger: ".hero-img",
                end: "bottom bottom",
                scrub: 1,
                pin: ".hero",
                pinSpacing: "none",
                toggleActions: "play none none reset",
                //    markers:true,
            },
        });


        gsap.to("#suvayan", {
            scrollTrigger: {
                trigger: "#suvayan",
                start: "top bottom",
                end: "top top",
                scrub: true,
                // markers:true,
            },
            x: 100,
            duration: 10,

        });
        gsap.to("#halder", {
            scrollTrigger: {
                trigger: "#suvayan",
                start: "top bottom",
                end: "top top",
                scrub: true,
                // markers:true,
            },
            x: -100,
        });
        gsap.to(".a-gb", {
            scrollTrigger: {
                trigger: ".about",
                start: "top 80%",
                end: "top top",
                // scrub:true,
                toggleActions: "play none none reset",
                // markers:true,
            },
            // opacity:1,
        });

        gsap.to(".abt-text", {
            scrollTrigger: {
                trigger: ".about",
                start: "top center",
                end: "top top",
                toggleActions: "play none none reset",
            },
            x: 0,
            duration: 1.5,
            opacity: 1,
        });

        gsap.to(".wrapper", {
            scrollTrigger: {
                trigger: "#works",
                start: "top 100%",
                end: "top top",
                pin: ".abt",
                pinSpacing: false,
                toggleActions: "play none none reset",
            },
        });


        gsap.to(".wrapper", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 100%",
                end: "top top",
                // pin:".wrapper",
                toggleActions: "play none none reset",
                // snap: 6 / 1,
                // markers:true,
            },
        });

        gsap.to("#w-line", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 50%",
                end: "top 20%",
                scrub: true,
                toggleActions: "play none none reset",
                // markers:true,
            },
            // y: "50%",
            y: displace,
        });
        gsap.to("#w-line", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 0%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            background: "linear-gradient(45deg, var(--lgreen) , var(--lblue))",
            position: "absolute",
            width: "72%",
            borderRadius: "2rem",
            outlineOffset: "0.8rem",
            outline: "1px solid white",

        });
        gsap.to("#work", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 0%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            color: "var(--black)",
        });

        gsap.to("#your", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 5%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            opacity: 0,
        });
        gsap.to("#matter", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 5%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            opacity: 0,
        });
        gsap.to(".scroll-down", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 0%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            delay: 1.5,
            opacity: 1,
        });
        gsap.to(".sd-img", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 0%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            y: 5,
            repeat: -1,
            repeatDelay: 0.5,
        });


        const tl = gsap.timeline();
        tl.to(".w-lblue", { xPercent: -100, duration: 1, ease: "none" })
            .to(".w-lyellow", { xPercent: 100, duration: 1, ease: "none" })
            .to(".w-gb", { xPercent: -100, duration: 1, ease: "none" });

        ScrollTrigger.create({
            animation: tl,
            trigger: ".worksample",
            start: "top top",
            end: "+=22000",
            snap: 1 / 3,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            // markers:true,
        });

        gsap.to(".line-through", {
            scrollTrigger: {
                trigger: "#contact",
                start: "top 100%",
                end: "top top",
                scrub: true,
                // snap: 2 / 1,
                toggleActions: "play none reverse reset",
                // markers:true,
            },
            x: "1%",
        })




    },

    // _________________________________________TAB

    "(min-width: 641px) and (max-width: 1007px)": function () {
        gsap.to(".hero-img", {
            y: "0%",
            duration: 5,
            scrollTrigger: {
                trigger: ".hero",
                start: "bottom bottom",
                pin: ".hero",
                scrub: 1,
                toggleActions: "play none none reset",
            },
        });
        gsap.to("#suvayan", {
            scrollTrigger: {
                trigger: "#suvayan",
                start: "top bottom",
                end: "top top",
                scrub: true,
                // markers:true,
            },
            x: "25rem",
            duration: 10,

        });
        gsap.to("#halder", {
            scrollTrigger: {
                trigger: "#suvayan",
                start: "top bottom",
                end: "top top",
                scrub: true,
                // markers:true,
            },
            x: "-25rem",
        });
        gsap.to(".abt-text", {
            scrollTrigger: {
                trigger: ".about",
                start: "top center",
                end: "top top",
                toggleActions: "play none none reset",
            },
            x: 2,
            duration: 1.5,
            opacity: 1,
        });
        gsap.to(".wrapper", {
            scrollTrigger: {
                trigger: "#works",
                start: "top 100%",
                end: "top top",
                pin: ".abt",
                pinSpacing: false,
                toggleActions: "play none none reset",
            },
        });


        gsap.to(".wrapper", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 100%",
                end: "top top",
                toggleActions: "play none none reset",
                // snap: 6 / 1,
                // markers:true,
            },
        });



        gsap.to("#w-line", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 50%",
                end: "top 20%",
                scrub: true,
                toggleActions: "play none none reset",
                // markers:true,
            },
            y: displace,
        });
        gsap.to("#w-line", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 20vh",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            background: "linear-gradient(45deg, var(--lgreen) , var(--lblue))",
            position: "absolute",
            width: "75%",
            borderRadius: "2rem",
            outlineOffset: "0.8rem",
            outline: "1px solid white",

        });
        gsap.to("#work", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 0%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            color: "var(--black)",
        });

        gsap.to("#your", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 5%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            opacity: 0,
        });
        gsap.to("#matter", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 5%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            opacity: 0,
        });
        gsap.to(".scroll-down", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 0%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            delay: 1.5,
            opacity: 1,
        });
        gsap.to(".sd-img", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 0%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            y: 5,
            repeat: -1,
            repeatDelay: 0.5,
        });


        const tl = gsap.timeline();
        tl.to(".w-lblue", { xPercent: -100, duration: 2, ease: "none" })
            .to(".w-lyellow", { xPercent: 100, duration: 2, ease: "none" })
            .to(".w-gb", { xPercent: -100, duration: 2, ease: "none" });

        ScrollTrigger.create({
            animation: tl,
            trigger: ".worksample",
            start: "top top",
            end: "+=22000",
            snap: 1 / 3,
            scrub: 1,
            pin: true,
            // anticipatePin:1,
            // markers:true,
        });

        gsap.to(".line-through", {
            scrollTrigger: {
                trigger: "#contact",
                start: "top 100%",
                end: "top top",
                scrub: true,
                // snap: 2 / 1,
                toggleActions: "play none reverse reset",
                // markers:true,
            },
            x: "1%",
        })
    },

    // __________________________________________MOBILE_LARGE

    "(min-width: 376px) and (max-width: 640px)": function () {
        gsap.to(".hero-img", {
            y: "0%",
            duration: 5,
            scrollTrigger: {
                trigger: ".hero",
                start: "bottom bottom",
                pin: ".hero",
                scrub: 1,
                toggleActions: "play none none reset",
            },
        });
        gsap.to("#suvayan", {
            scrollTrigger: {
                trigger: "#suvayan",
                start: "top bottom",
                end: "top top",
                scrub: true,
                // markers:true,
            },
            x: 100,
            duration: 10,

        });
        gsap.to("#halder", {
            scrollTrigger: {
                trigger: "#suvayan",
                start: "top bottom",
                end: "top top",
                scrub: true,
                // markers:true,
            },
            x: -100,
        });
        gsap.to(".abt-text", {
            scrollTrigger: {
                trigger: ".about",
                start: "top center",
                end: "top top",
                toggleActions: "play none none reset",
            },
            x: 2,
            duration: 1.5,
            opacity: 1,
        });
        gsap.to(".wrapper", {
            scrollTrigger: {
                trigger: "#works",
                start: "top 100%",
                end: "top top",
                pin: ".abt",
                pinSpacing: false,
                toggleActions: "play none none reset",
            },
        });


        gsap.to(".wrapper", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 100%",
                end: "top top",
                toggleActions: "play none none reset",
                // snap: 6 / 1,
                // markers:true,
            },
        });

        gsap.to("#w-line", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 50%",
                end: "top 20%",
                scrub: true,
                toggleActions: "play none none reset",
                // markers:true,
            },
            // y: 300,
            y:displace,
        });
        gsap.to("#w-line", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 0%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            background: "linear-gradient(45deg, var(--lgreen) , var(--lblue))",
            position: "absolute",
            width: "72%",
            borderRadius: "2rem",
            outlineOffset: "0.8rem",
            outline: "1px solid white",

        });
        gsap.to("#work", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 0%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            color: "var(--black)",
        });

        gsap.to("#your", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 5%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            opacity: 0,
        });
        gsap.to("#matter", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 5%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            opacity: 0,
        });
        gsap.to(".scroll-down", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 0%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            delay: 1.5,
            opacity: 1,
        });
        gsap.to(".sd-img", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 0%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            y: 5,
            repeat: -1,
            repeatDelay: 0.5,
        });


        const tl = gsap.timeline();
        tl.to(".w-lblue", { xPercent: -100, duration: 2, ease: "none" })
            .to(".w-lyellow", { xPercent: 100, duration: 2, ease: "none" })
            .to(".w-gb", { xPercent: -100, duration: 2, ease: "none" });

        ScrollTrigger.create({
            animation: tl,
            trigger: ".worksample",
            start: "top top",
            end: "+=22000",
            snap: 1 / 3,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            // markers:true,
        });

        gsap.to(".line-through", {
            scrollTrigger: {
                trigger: "#contact",
                start: "top 100%",
                end: "top top",
                scrub: true,
                // snap: 2 / 1,
                toggleActions: "play none reverse reset",
                // markers:true,
            },
            x: "1%",
        })
    },

    // ___________________________________________MOBILE_SMALL


    "(max-width: 375px)": function () {
        gsap.to(".hero-img", {
            transform: "translateY(8%)",
            duration: 5,
            scrollTrigger: {
                trigger: ".hero",
                start: "bottom bottom",
                pin: ".hero",
                scrub: 1,
                toggleActions: "start pause resume pause",
                // markers:true,
            },
        });
        gsap.to("#suvayan", {
            scrollTrigger: {
                trigger: "#suvayan",
                start: "top bottom",
                end: "top top",
                scrub: true,
                // markers:true,
            },
            x: 100,
            duration: 10,

        });
        gsap.to("#halder", {
            scrollTrigger: {
                trigger: "#suvayan",
                start: "top bottom",
                end: "top top",
                scrub: true,
                // markers:true,
            },
            x: -100,
        });
        gsap.to(".abt-text", {
            scrollTrigger: {
                trigger: ".about",
                start: "top center",
                end: "top top",
                toggleActions: "play none none reset",
            },
            x: 2,
            duration: 1.5,
            opacity: 1,
        });
        gsap.to(".wrapper", {
            scrollTrigger: {
                trigger: "#works",
                start: "top 100%",
                end: "top top",
                pin: ".abt",
                pinSpacing: false,
                toggleActions: "play none none reset",
            },
        });



        gsap.to(".wrapper", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 100%",
                end: "top top",
                toggleActions: "play none none reset",
                // snap: 6 / 1,
                // markers:true,
            },
        });

        gsap.to("#w-line", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 50%",
                end: "top 20%",
                scrub: true,
                toggleActions: "play none none reset",
                // markers:true,
            },
            // y: 210,
            y:displace,
        });
        gsap.to("#w-line", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 0%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            background: "linear-gradient(45deg, var(--lgreen) , var(--lblue))",
            position: "absolute",
            width: "72%",
            borderRadius: "2rem",
            outlineOffset: "0.8rem",
            outline: "1px solid white",

        });
        gsap.to("#work", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 0%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            color: "var(--black)",
        });

        gsap.to("#your", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 5%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            opacity: 0,
        });
        gsap.to("#matter", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 5%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            opacity: 0,
        });
        gsap.to(".scroll-down", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 0%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            delay: 1.5,
            opacity: 1,
        });
        gsap.to(".sd-img", {
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top 0%",
                end: "bottom bottom",
                toggleActions: "play none none reset",
                // markers:true,
            },
            y: 5,
            repeat: -1,
            repeatDelay: 0.5,
        });


        const tl = gsap.timeline();
        tl.to(".w-lblue", { xPercent: -100, duration: 2, ease: "none" })
            .to(".w-lyellow", { xPercent: 100, duration: 2, ease: "none" })
            .to(".w-gb", { xPercent: -100, duration: 2, ease: "none" });

        ScrollTrigger.create({
            animation: tl,
            trigger: ".worksample",
            start: "top top",
            // end:"+=22000",
            end: "+=32000",
            snap: 1 / 3,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            // anticipatePin:1,
            // markers:true,
        });

        // 
        gsap.to(".line-through", {
            scrollTrigger: {
                trigger: "#contact",
                start: "top 100%",
                end: "top top",
                scrub: true,
                // snap: 2 / 1,
                toggleActions: "play none reverse reset",
                // markers:true,
            },
            x: "5%",
        })
    },



});

let navele = document.querySelectorAll(".nav-element");



// __________________________opacity annimation of hero text 
gsap.to(".hero-p", {
    scrollTrigger: {
        trigger: ".hero-img",
        scrub: 1,
        start: "top bottom",
        end: "bottom bottom",
        toggleActions: "play none none reset",

    },
    opacity: 1,
    duration: 5,
});


// _______________________top right annimation on the navbar
// gsap.to(".gb", {
//     x: -5,
//     duration: 5,
//     scrollTrigger: {
//         trigger: ".gb",
//         toggleActions: "restart resume reverse resume",
//         scrub: 2,
//         start: "350vh 50%",
//         end: "",
//         // markers:true,
//     },
// });



let mnav = document.getElementById("mobile-nav");
let navbar = document.getElementById("navbar");
let logo = document.getElementById("logo");
let body = document.querySelector("body");
let access = document.querySelector("#access");
let hb = document.querySelector(".hb");
let cross = document.querySelector("#crs");
const wrapBox = document.querySelector(".wrap-box");
const boxes = document.querySelectorAll(".box");
const next = document.querySelector("#right-arrow");
const prev = document.querySelector("#left-arrow");
let k = 1, m = 0;
const size = boxes[0].clientHeight;
let x = "";

hb.addEventListener('click', () => {
    mnav.style.transform = 'translateY(0%)';
    hb.classList.remove("hb");
    access.style.display = "none";
    cross.style.display = "inline-block"
    x = navbar.style.backgroundColor;
    navbar.style.backgroundColor = 'white';
    navbar.style.boxShadow = 'none';
    logo.style.backgroundImage = "url('logo-b.png')";
});
cross.addEventListener('click', () => {
    mnav.style.transform = 'translateY(-130%)';
    hb.classList.remove("cross");
    hb.classList.add("hb");
    cross.style.display = "none";
    access.style.display = "inline-block";
    // navbar.style.backgroundColor = 'var(--black)';
    navbar.style.backgroundColor = x;
    logo.style.backgroundImage = "url('logo-w.png')";
});

// _________________________NAVBAR transparent
gsap.to("#navbar", {
    scrollTrigger: {
        trigger: ".landing-page",
        start: "top 70%",
        endTrigger: ".contact",
        end: "bottom top",
        toggleActions: "play none none reset",
        // markers: true,
        onLeave: blackToGb,
        onEnter: gbToBlack,
        onEnterBack: gbToBlack,
        onLeaveBack: blackToGb,
    },

})
gsap.to("#navbar", {
    scrollTrigger: {
        trigger: ".landing-page",
        start: "top 70%",
        endTrigger: ".contact",
        end: "bottom top",
        toggleActions: "play none none reset",
        // markers: true,
        onEnter: navHover,
        onLeave: navHoverBack,
        onEnterBack: navHover,
        onLeaveBack: navHoverBack,
    },

})

gsap.to(".circle", {
    scrollTrigger: {
        trigger: ".clients",
        start: "top center",
        end: "top top",
        scrub: 0.5,
        id: true,
        toggleActions: "play none none reset",
        // markers:true,
    },
    rotate: "-50deg",
})


function gbToBlack() {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
    document.querySelector("#logo").style.fill = "white";
    document.querySelector(".gb").style.backgroundColor = "white";
}
function blackToGb() {
    navbar.style.backgroundColor = "var(--black)";
    navbar.style.boxShadow = "0px 2px 8px 1px rgba(19, 19, 19, 0.5)";
    document.querySelector("#logo").style.fill = "var(--gb)";
    document.querySelector(".gb").style.backgroundColor = "var(--gb)";
}
function navHover() {
    let arr = document.querySelectorAll(".nav-element");
    arr.forEach((element) => {
        element.addEventListener('mouseover', () => {
            for (let i = 0; i < arr.length; i++) {
                arr[i].style.color = "white";
            }
            element.style.color = "var(--black)";
            element.style.setProperty('--nElementBeforeColor', '#131313');
            setTimeout(function () {
                element.style.color = "white";
                element.style.setProperty('--nElementBeforeColor', 'white');
            }, 1000);
        })
    })
}
function navHoverBack() {
    let arr = document.querySelectorAll(".nav-element");
    arr.forEach((element) => {
        element.addEventListener('mouseover', () => {
            for (let i = 0; i < arr.length; i++) {
                arr[i].style.color = "white";
            }
            element.style.color = "var(--gb)";
            element.style.setProperty('--nElementBeforeColor', '#69C5B2');
            setTimeout(function () {
                element.style.color = "white";
                element.style.setProperty('--nElementBeforeColor', 'white');
            }, 1000);
        })
    })
}



let n1 = document.querySelector('#n1');
let n2 = document.querySelector('#n2');
let n3 = document.querySelector('#n3');
let n4 = document.querySelector('#n4');
n1.addEventListener("click", () => {
    mnav.style.transform = 'translateY(-130%)';
    hb.classList.remove("cross");
    hb.classList.add("hb");
    cross.style.display = "none";
    access.style.display = "inline-block";
    navbar.style.backgroundColor = 'var(--black)';
    logo.style.backgroundImage = "url('logo-w.png')";
});
n2.addEventListener("click", () => {
    mnav.style.transform = 'translateY(-130%)';
    hb.classList.remove("cross");
    hb.classList.add("hb");
    cross.style.display = "none";
    access.style.display = "inline-block";
    navbar.style.backgroundColor = 'var(--black)';
    logo.style.backgroundImage = "url('logo-w.png')";
});
n3.addEventListener("click", () => {
    mnav.style.transform = 'translateY(-130%)';
    hb.classList.remove("cross");
    hb.classList.add("hb");
    cross.style.display = "none";
    access.style.display = "inline-block";
    navbar.style.backgroundColor = 'var(--black)';
    logo.style.backgroundImage = "url('logo-w.png')";
});
n4.addEventListener("click", () => {
    mnav.style.transform = 'translateY(-130%)';
    hb.classList.remove("cross");
    hb.classList.add("hb");
    cross.style.display = "none";
    access.style.display = "inline-block";
    navbar.style.backgroundColor = 'var(--black)';
    logo.style.backgroundImage = "url('logo-w.png')";
});

let nline = document.querySelector("#n-active");
let nele = document.querySelectorAll("a");


// _____________________________landing page 

let lpLArr = document.querySelector("#lp-left-arrow");
let lpRArr = document.querySelector("#lp-right-arrow");
let page = document.querySelectorAll(".page");
let pageText = document.querySelectorAll(".page-text");
const pSize = page[0].clientWidth;
let pageCounter = 0, p1 = 0, p2 = 0;
setInterval(
    function () {
        lpRArr.click();
    }, 4000);



lpRArr.addEventListener("click", () => {
    if (pageCounter === 3) {
        pageCounter = 0;
    }
    if (pageCounter === 0) {
        p1 = pageCounter + 1;
        p2 = pageCounter + 2;
    }
    else if (pageCounter === 1) {
        p1 = pageCounter + 1;
        p2 = pageCounter - 1;
    }
    else if (pageCounter === 2) {
        p1 = pageCounter - 2;
        p2 = pageCounter - 1;
    }
    page[pageCounter].style.transform = "translateX(0%)";
    page[pageCounter].style.transition = "0.4s ease-in-out";
    page[pageCounter].style.opacity = 1;
    page[pageCounter].style.transform = "scale(1.15)";
    page[pageCounter].style.zIndex = "6";
    page[p1].style.transform = "translateX(-100%)";
    page[p1].style.transition = "0.4s ease-in-out";
    page[p1].style.opacity = 0.5;
    page[p1].style.zIndex = "4";
    page[p2].style.transform = "translateX(100%)";
    page[p2].style.transition = "0.4s ease-in-out";
    page[p2].style.opacity = 0.5;
    page[p2].style.zIndex = "5";
    pageCounter++;

})
lpLArr.addEventListener("click", () => {
    if (pageCounter === -1) {
        pageCounter = 2;
    }
    if (pageCounter === 0) {
        p1 = pageCounter + 1;
        p2 = pageCounter + 2;
    }
    else if (pageCounter === 1) {
        p1 = pageCounter + 1;
        p2 = pageCounter - 1;
    }
    else if (pageCounter === 2) {
        p1 = pageCounter - 2;
        p2 = pageCounter - 1;
    }
    page[pageCounter].style.transform = "translateX(0%)";
    page[pageCounter].style.transition = "0.4s ease-in-out";
    page[pageCounter].style.opacity = 1;
    page[pageCounter].style.transform = "scale(1.15)";
    page[pageCounter].style.zIndex = "6";
    page[p1].style.transform = "translateX(-100%)";
    page[p1].style.transition = "0.4s ease-in-out";
    page[p1].style.opacity = 0.5;
    page[p1].style.zIndex = "4";
    page[p2].style.transform = "translateX(100%)";
    page[p2].style.transition = "0.4s ease-in-out";
    page[p2].style.opacity = 0.5;
    page[p2].style.zIndex = "5";
    pageCounter--;

})

page.forEach((element) => {
    element.addEventListener("mouseover", (e) => {
        ind = parseInt(e.target.id.charAt(5)) - 1;
        pageText[ind].style.transform = "translateY(0%)";
        pageText[ind].style.transition = "0.4s ease-in-out";
        pageText[ind].style.opacity = "1";
        setTimeout(function () {
            pageText[ind].style.transform = "translateY(100%)";
            pageText[ind].style.opacity = "0";
            pageText[ind].style.transition = "0.4s ease-in-out";
        }, 1000);

    })
})



// ___________________________client--carousel

const dot = document.querySelectorAll(".dot");
const tag = document.querySelector(".wrap .tag");
dot[0].style.outlineOffset = "0.2rem";
dot[0].style.outline = "1px solid var(--black)";
dot[0].style.backgroundColor = "var(--black)";
dot[0].style.border = "none";
setInterval(
    function () {
        next.click();
    }, 7000);

wrapBox.style.transform = "translateY(" + (-size * k) + "px)";
next.addEventListener("click", () => {
    if (k >= boxes.length - 1) return;
    wrapBox.style.transition = "transform 0.4s ease-in-out";
    k++;
    console.log(k);
    wrapBox.style.transform = "translateY(" + (-size * k) + "px)";

    if (k === 1) {
        tag.innerHTML = "18th December, 2021"
    }
    else if (k === 2) {
        tag.innerHTML = "20th June, 2021"
    }
    else if (k === 3) {
        tag.innerHTML = "5th February, 2022"
    }
    else if (k === 4) {
        tag.innerHTML = "27th July, 2021"
    }
    else if (k === 5) {
        tag.innerHTML = "8th October, 2021"
    }


    for (let i = 0; i < dot.length; i++) {
        dot[i].style.outline = "none";
        dot[i].style.backgroundColor = "transparent";
        dot[i].style.border = "2px solid var(--black)";
    }
    if (k === 6) {
        dot[0].style.outlineOffset = "0.2rem";
        dot[0].style.outline = "1px solid var(--black)";
        dot[0].style.backgroundColor = "var(--black)";
        dot[0].style.border = "none";
    }
    dot[k - 1].style.outlineOffset = "0.2rem";
    dot[k - 1].style.outline = "1px solid var(--black)";
    dot[k - 1].style.backgroundColor = "var(--black)";
    dot[k - 1].style.border = "none";
})
prev.addEventListener("click", () => {
    if (k <= 0) return;
    wrapBox.style.transition = "transform 0.4s ease-in-out";
    k--;
    console.log(k);
    wrapBox.style.transform = "translateY(" + (-size * k) + "px)";

    if (k === 1) {
        tag.innerHTML = "18th December, 2021"
    }
    else if (k === 2) {
        tag.innerHTML = "20th November, 2021"
    }
    else if (k === 3) {
        tag.innerHTML = "10th February, 2022"
    }
    else if (k === 4) {
        tag.innerHTML = "27th July, 2021"
    }
    else if (k === 5) {
        tag.innerHTML = "8th October, 2021"
    }

    for (let i = 0; i < dot.length; i++) {
        dot[i].style.outline = "none";
        dot[i].style.backgroundColor = "transparent";
        dot[i].style.border = "2px solid var(--black)";
    }
    if (k === 0) {
        dot[4].style.outlineOffset = "0.2rem";
        dot[4].style.outline = "1px solid var(--black)";
        dot[4].style.backgroundColor = "var(--black)";
        dot[4].style.border = "none";
    }
    dot[k - 1].style.outlineOffset = "0.2rem";
    dot[k - 1].style.outline = "1px solid var(--black)";
    dot[k - 1].style.backgroundColor = "var(--black)";
    dot[k - 1].style.border = "none";
})

wrapBox.addEventListener("transitionend", () => {
    if (boxes[k].id === "last-clone") {
        wrapBox.style.transition = "none";
        k = boxes.length - 2;
        wrapBox.style.transform = "translateY(" + (-size * k) + "px)";
    }
    if (boxes[k].id === "first-clone") {
        wrapBox.style.transition = "none";
        k = boxes.length - k;
        wrapBox.style.transform = "translateY(" + (-size * k) + "px)";
    }
})





// ________________________________Copy to Clipboard

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

let cpy = document.querySelector("#copy");
let cpd = document.querySelector(".copied");

cpy.addEventListener("click", () => {
    if (cpd.style.opacity === '0') {
        cpd.style.opacity = "1";
    }
    else {
        cpd.style.display = "inline";
        cpd.style.animation = "timeout 2s ease 1";
        setTimeout(function () { cpd.style.display = "none"; }, 600);
    }
})

let arw1 = document.querySelector("#a-lyellow");
let arw2 = document.querySelector("#a-lgreen");
let arw3 = document.querySelector("#a-white1");
let arw4 = document.querySelector("#a-white2");
let btng = document.querySelector("#b-ly");
let btny = document.querySelector("#b-lg");
let btnb = document.querySelector("#b-w1");
let btngb = document.querySelector("#b-w2");
btng.addEventListener("mouseover", () => {
    // arw.style.opacity=1;
    arw1.style.animation = "a-move-right 1s ease 2 alternate forwards";
    setTimeout(function () {
        // arw.style.opacity=0;
        arw1.style.animation = "";
    }, 2000);
});
btny.addEventListener("mouseover", () => {
    // arw.style.opacity=1;
    arw2.style.animation = "a-move-right 1s ease 2 alternate forwards";
    setTimeout(function () {
        // arw.style.opacity=0;
        arw2.style.animation = "";
    }, 2000);
});
btnb.addEventListener("mouseover", () => {
    // arw.style.opacity=1;
    arw3.style.animation = "a-move-right 1s ease 2 alternate forwards";
    setTimeout(function () {
        // arw.style.opacity=0;
        arw3.style.animation = "";
    }, 2000);
});
btngb.addEventListener("mouseover", () => {
    // arw.style.opacity=1;
    arw4.style.animation = "a-move-right 1s ease 2 alternate forwards";
    setTimeout(function () {
        // arw.style.opacity=0;
        arw4.style.animation = "";
    }, 2000);
});
