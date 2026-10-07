/* =========================================================
   TSUNGIRIRAI MACHINGURA
   PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
   ========================================================= */

const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {

    navToggle.addEventListener("click", () => {

        const isOpen =
            mainNav.classList.toggle("open");

        navToggle.classList.toggle("active");

        navToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    const navLinks =
        mainNav.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("open");

            navToggle.classList.remove("active");

            navToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================================
   2. SCROLL REVEAL
   ========================================================= */

const revealItems =
    document.querySelectorAll(".reveal");


if (revealItems.length > 0) {

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealItems.forEach((item) => {

            revealObserver.observe(item);

        });

    } else {

        revealItems.forEach((item) => {

            item.classList.add("visible");

        });

    }

}


/* =========================================================
   3. CURRENT YEAR
   ========================================================= */

const currentYear =
    new Date().getFullYear();


const yearElements =
    document.querySelectorAll(".current-year");


yearElements.forEach((element) => {

    element.textContent =
        currentYear;

});


/* =========================================================
   4. CONTACT FORM
   ========================================================= */

const contactForm =
    document.querySelector(".contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const submitButton =
                contactForm.querySelector(
                    'button[type="submit"]'
                );


            const status =
                contactForm.querySelector(
                    ".form-status"
                );


            if (submitButton) {

                submitButton.disabled = true;

                submitButton.innerHTML =
                    "<span>Message ready ✓</span>";

            }


            if (status) {

                status.textContent =
                    "Thanks! The form is currently a frontend demo and does not send email yet.";

            }


            setTimeout(() => {

                contactForm.reset();


                if (submitButton) {

                    submitButton.disabled = false;

                    submitButton.innerHTML =
                        "Send message <span>→</span>";

                }

            }, 3000);

        }
    );

}