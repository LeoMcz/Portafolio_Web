
/* =========================================
   01. AÑO AUTOMÁTICO
========================================= */

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


/* =========================================
   02. ANIMACIONES AL DESPLAZARSE
========================================= */

const elementsToReveal = document.querySelectorAll(
    ".developer-card, .technology-item, .project-window, .section-top"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});


elementsToReveal.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================
   03. BARRA DE PROGRESO
========================================= */

const progressBar = document.querySelector(".progress-fill");

if (progressBar) {

    const progressValue = progressBar.dataset.progress;

    setTimeout(() => {

        progressBar.style.width = progressValue + "%";

    }, 400);

}



/* =========================================
   04. MENÚ RESPONSIVE
========================================= */

const menuToggle = document.getElementById("menuToggle");

const navbarContent = document.getElementById("navbarContent");

const navbarLinks = document.querySelectorAll(
    "#navbarContent .nav-link"
);


// ABRIR Y CERRAR MENÚ

menuToggle.addEventListener("click", () => {

    navbarContent.classList.toggle("show");

    const isOpen = navbarContent.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
    );

});


// CERRAR AL SELECCIONAR UN ENLACE

navbarLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbarContent.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Abrir menú");

    });

});


// CERRAR AL CAMBIAR A ESCRITORIO

window.addEventListener("resize", () => {

    if (window.innerWidth >= 992) {

        navbarContent.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");

    }

});

/* =========================================
   05. NAVEGACIÓN PRINCIPAL
========================================= */

const mainNavLinks = document.querySelectorAll(
    ".main-navbar .nav-link"
);

mainNavLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mainNavLinks.forEach((item) => {

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});
