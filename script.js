document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // MENU MOBILE
    // ================================

    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (menuToggle && menu) {

        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("show");
        });

    }


    // ================================
    // GALERI
    // ================================

    const galleryImages =
        document.querySelectorAll(".gallery-item img");

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {
            window.open(image.src, "_blank");
        });

    });


    // ================================
    // TOMBOL
    // ================================

    const buttons =
        document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("mouseenter", function () {
            button.style.transition = "0.3s";
        });

    });


    // ================================
    // GOOGLE APPS SCRIPT
    // ================================

    const SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbyX5xD66N_STgXwoYyLYfMiOzo5a4vBUxiDXTTY3PeSpc6t_sFYNzNYqR-T2oQO0RQM/exec";


    // Cari form aduan
    const formAduan =
        document.getElementById("formAduan");


    // Kalau form aduan ada
    if (formAduan) {

        formAduan.addEventListener("submit", function (e) {

            e.preventDefault();


            const btnKirim =
                document.getElementById("btnKirim");


            if (btnKirim) {
                btnKirim.disabled = true;
                btnKirim.textContent = "Mengirim...";
            }


            // Ambil data dari form
            const data = {

                nama:
                    document.getElementById("nama").value,

                email:
                    document.getElementById("email").value,

                kategori:
                    document.getElementById("kategori").value,

                judul:
                    document.getElementById("judul").value,

                deskripsi:
                    document.getElementById("deskripsi").value

            };


            // Kirim ke Google Apps Script
            fetch(SCRIPT_URL, {

                method: "POST",

                mode: "no-cors",

                headers: {
                    "Content-Type":
                        "text/plain;charset=utf-8"
                },

                body: JSON.stringify(data)

            })
            .then(function () {

                alert(
                    "Aduan berhasil dikirim.\n\n" +
                    "Terima kasih telah menyampaikan aduan."
                );


                // Kosongkan form
                formAduan.reset();

            })
            .catch(function (error) {

                console.error(error);

                alert(
                    "Aduan gagal dikirim. " +
                    "Silakan coba lagi."
                );

            })
            .finally(function () {

                if (btnKirim) {
                    btnKirim.disabled = false;
                    btnKirim.textContent = "Kirim Aduan";
                }

            });

        });

    }

});
