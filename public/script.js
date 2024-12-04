    // JavaScript para el carrusel de imágenes deslizantes
    let currentIndex = 0;
    const slides = document.querySelectorAll('.image-slider .slides img');
    const totalSlides = slides.length;
    const slidesContainer = document.querySelector('.image-slider .slides');

    // Cambia de imagen
    function changeSlide() {
    currentIndex++;

    // Si llegamos al final, volvemos a la primera imagen
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
        // Sincrónicamente, al llegar al final, restablecemos la posición para evitar el "salto" visible.
        setTimeout(() => {
        slidesContainer.style.transition = 'none'; // Desactiva temporalmente la transición para no hacer un "salto"
        slidesContainer.style.transform = `translateX(0%)`; // Regresa a la primera imagen sin transición
        }, 1000); // Esperamos que termine la transición antes de reiniciar
    }

    // Ajusta la posición del carrusel para mover una imagen a la vez
    const offset = -currentIndex * 33.35; // Mueve el carrusel una imagen a la vez (33.35%)
    slidesContainer.style.transition = 'transform 1s ease-in-out'; // Asegura que la transición sea suave

    slidesContainer.style.transform = `translateX(${offset}%)`;
    }

    // Cambia la imagen cada 3 segundos (3000 ms)
    setInterval(changeSlide, 3000);
