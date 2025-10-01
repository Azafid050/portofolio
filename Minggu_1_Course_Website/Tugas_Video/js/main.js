document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger-menu");
    const iconBars = hamburger.querySelector(".fa-bars");
    const iconClose = hamburger.querySelector(".fa-xmark");
    const navMenu = document.querySelector(".menu ul");
    const menuLinks = navMenu.querySelectorAll("a");

    // Awal, sembunyikan icon close
    iconClose.style.display = "none";

    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            iconBars.style.display = "none";
            iconClose.style.display = "inline-block";
        } else {
            iconBars.style.display = "inline-block";
            iconClose.style.display = "none";
        }
    });

    menuLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            navMenu.classList.remove("active");
            iconBars.style.display = "inline-block";
            iconClose.style.display = "none";
        });
    });
});
