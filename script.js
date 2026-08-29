document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (menuToggle && menu) {

        menuToggle.addEventListener("click", function () {

            menu.classList.toggle("show");

        });

    }


    const galleryImages =
        document.querySelectorAll(".gallery-item img");

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            window.open(image.src, "_blank");

        });

    });


    const buttons =
        document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("mouseenter", function () {

            button.style.transition = "0.3s";

        });

    });

});