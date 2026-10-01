// =========================================
// CARRUSEL DE IMÁGENES
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const imagenes = document.querySelectorAll(".carrusel-imagen");

    let actual = 0;

    setInterval(function () {

        // Quitar imagen actual
        imagenes[actual].classList.remove("activa");

        // Pasar a la siguiente
        actual++;

        // Volver a la primera
        if (actual >= imagenes.length) {
            actual = 0;
        }

        // Mostrar nueva imagen
        imagenes[actual].classList.add("activa");

    }, 3000);

});