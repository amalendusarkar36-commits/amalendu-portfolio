/* =========================================
   AMALENDU SARKAR PORTFOLIO
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   1. PROJECT POPUP DATA
========================================= */

const projects = {

    rudraksha: {
        image: "images/rudraksha.jpg",

        kicker: "VISUAL CONCEPT / 2026",

        title: "Rudraksha",

        description:
            "A visual concept inspired by spirituality, nature, Indian mythology and cinematic storytelling.",

        meta: [
            "Concept Art",
            "Visual Direction",
            "Poster Design"
        ],

        thumbs: [
            "images/rudraksha.jpg",
            "images/design2.jpg",
            "images/design4.jpg"
        ]
    },


    aadriyan: {
        image: "images/aadriyan.jpg",

        kicker: "FASHION BRANDING / 2026",

        title: "AADRIYAN",

        description:
            "A modern fashion identity built around individuality, confidence and a bold visual language.",

        meta: [
            "Brand Identity",
            "Fashion",
            "Logo Design"
        ],

        thumbs: [
            "images/aadriyan.jpg",
            "images/logo.jpg",
            "images/design1.jpg"
        ]
    },


    graphics: {
        image: "images/graphics.jpg",

        kicker: "GRAPHIC DESIGN / SELECTED WORK",

        title: "Graphic Designs",

        description:
            "A collection of posters, typography, social media artwork, illustrations and creative concepts.",

        meta: [
            "Posters",
            "Typography",
            "Illustration",
            "Concept Art"
        ],

        thumbs: [
            "images/design1.jpg",
            "images/design2.jpg",
            "images/design3.jpg"
        ]
    }

};


/* =========================================
   2. POPUP ELEMENTS
========================================= */

const modal =
    document.getElementById("projectModal");

const modalImage =
    document.getElementById("modalImage");

const modalKicker =
    document.getElementById("modalKicker");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalMeta =
    document.getElementById("modalMeta");

const modalThumbs =
    document.getElementById("modalThumbs");


/* =========================================
   3. OPEN POPUP
========================================= */

function openModal(projectName) {

    const project = projects[projectName];

    if (!project) {
        return;
    }


    modalImage.src =
        project.image;

    modalImage.alt =
        project.title;


    modalKicker.textContent =
        project.kicker;


    modalTitle.textContent =
        project.title;


    modalDescription.textContent =
        project.description;


    /* Project tags */

    modalMeta.innerHTML = "";

    project.meta.forEach(item => {

        const tag =
            document.createElement("span");

        tag.textContent =
            item;

        modalMeta.appendChild(tag);

    });


    /* Thumbnail images */

    modalThumbs.innerHTML = "";

    project.thumbs.forEach(image => {

        const img =
            document.createElement("img");

        img.src = image;

        img.alt =
            project.title;

        modalThumbs.appendChild(img);

    });


    /* Show popup */

    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    /* Stop background scrolling */

    document.body.style.overflow =
        "hidden";
}


/* =========================================
   4. CLOSE POPUP
========================================= */

function closeModal() {

    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";
}


/* =========================================
   5. ALL POPUP BUTTONS
========================================= */

const popupButtons =
    document.querySelectorAll(
        "[data-project]"
    );


popupButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            const projectName =
                this.dataset.project;

            openModal(projectName);

        }
    );

});


/* =========================================
   6. CLOSE BUTTON
========================================= */

const closeButton =
    document.querySelector(
        ".modal-close"
    );


if (closeButton) {

    closeButton.addEventListener(
        "click",
        closeModal
    );

}


/* =========================================
   7. CLICK OUTSIDE POPUP
========================================= */

const modalBackdrop =
    document.querySelector(
        ".modal-backdrop"
    );


if (modalBackdrop) {

    modalBackdrop.addEventListener(
        "click",
        closeModal
    );

}


/* =========================================
   8. ESC KEY CLOSES POPUP
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =========================================
   9. SCROLL REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    function (element) {

        revealObserver.observe(
            element
        );

    }
);


/* =========================================
   10. ACTIVE SIDE NAVIGATION
========================================= */

const pageSections =
    document.querySelectorAll(
        "main section[id]"
    );


const sideLinks =
    document.querySelectorAll(
        ".side-nav a"
    );


const sectionObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    sideLinks.forEach(
                        function (link) {

                            link.classList.remove(
                                "active"
                            );

                        }
                    );


                    const activeLink =
                        document.querySelector(
                            `.side-nav a[href="#${entry.target.id}"]`
                        );


                    if (activeLink) {

                        activeLink.classList.add(
                            "active"
                        );

                    }

                }
            );

        },

        {
            rootMargin:
                "-35% 0px -55% 0px"
        }

    );


pageSections.forEach(
    function (section) {

        sectionObserver.observe(
            section
        );

    }
);


/* =========================================
   11. CUSTOM CURSOR
========================================= */

const cursorDot =
    document.querySelector(
        ".cursor-dot"
    );


const cursorRing =
    document.querySelector(
        ".cursor-ring"
    );


let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;


window.addEventListener(
    "mousemove",
    function (event) {

        mouseX =
            event.clientX;

        mouseY =
            event.clientY;


        if (cursorDot) {

            cursorDot.style.left =
                mouseX + "px";

            cursorDot.style.top =
                mouseY + "px";

        }

    }
);


/* Smooth cursor ring */

function animateCursor() {

    ringX +=
        (mouseX - ringX) *
        0.12;

    ringY +=
        (mouseY - ringY) *
        0.12;


    if (cursorRing) {

        cursorRing.style.left =
            ringX + "px";

        cursorRing.style.top =
            ringY + "px";

    }


    requestAnimationFrame(
        animateCursor
    );

}


animateCursor();


/* =========================================
   12. CURSOR HOVER EFFECT
========================================= */

const interactiveElements =
    document.querySelectorAll(
        "a, button, .project-card"
    );


interactiveElements.forEach(
    function (element) {

        element.addEventListener(
            "mouseenter",
            function () {

                if (cursorRing) {

                    cursorRing.classList.add(
                        "hover"
                    );

                }

            }
        );


        element.addEventListener(
            "mouseleave",
            function () {

                if (cursorRing) {

                    cursorRing.classList.remove(
                        "hover"
                    );

                }

            }
        );

    }
);


/* =========================================
   13. 3D CARD EFFECT
========================================= */

const tiltCards =
    document.querySelectorAll(
        ".tilt"
    );


tiltCards.forEach(
    function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    (event.clientX -
                        rect.left) /
                    rect.width -
                    0.5;


                const y =
                    (event.clientY -
                        rect.top) /
                    rect.height -
                    0.5;


                const rotateX =
                    y * -8;


                const rotateY =
                    x * 8;


                card.style.transform =
                    `perspective(700px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "";

            }
        );

    }
);


/* =========================================
   14. MAGNETIC BUTTON EFFECT
========================================= */

const magneticButtons =
    document.querySelectorAll(
        ".magnetic"
    );


magneticButtons.forEach(
    function (button) {

        button.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;


                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;


                button.style.transform =
                    `translate(
                        ${x * 0.18}px,
                        ${y * 0.18}px
                    )`;

            }
        );


        button.addEventListener(
            "mouseleave",
            function () {

                button.style.transform =
                    "";

            }
        );

    }
);


/* =========================================
   15. PROJECT IMAGE PARALLAX
========================================= */

const projectImages =
    document.querySelectorAll(
        ".project-image img"
    );


function updateParallax() {

    projectImages.forEach(
        function (image) {

            const container =
                image.parentElement;


            const rect =
                container.getBoundingClientRect();


            const distance =
                rect.top -
                window.innerHeight / 2;


            const movement =
                distance * -0.025;


            image.style.transform =
                `scale(1.05)
                 translateY(${movement}px)`;

        }
    );

}


window.addEventListener(
    "scroll",
    updateParallax,
    {
        passive: true
    }
);


/* =========================================
   16. SMOOTH ANCHOR SCROLL
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetID =
                    this.getAttribute(
                        "href"
                    );


                if (
                    targetID === "#" ||
                    !targetID
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetID
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }
);


/* =========================================
   17. HERO PARALLAX
========================================= */

const heroPhoto =
    document.querySelector(
        ".hero-photo-wrap"
    );


window.addEventListener(
    "scroll",
    function () {

        if (!heroPhoto) {
            return;
        }


        const scroll =
            window.scrollY;


        if (scroll < window.innerHeight) {

            heroPhoto.style.transform =
                `translateY(
                    ${scroll * 0.08}px
                )`;

        }

    },
    {
        passive: true
    }
);


/* =========================================
   18. PAGE LOADING EFFECT
========================================= */

window.addEventListener(
    "load",
    function () {

        document.body.classList.add(
            "loaded"
        );


        /* Make the hero appear */

        const hero =
            document.querySelector(
                ".hero"
            );


        if (hero) {

            hero.classList.add(
                "visible"
            );

        }

    }
);