// Evento de clic para mostrar/ocultar el menú
document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        document.body.classList.remove('menu-open');
    } else {
        menu.style.display = 'block';
        document.body.classList.add('menu-open');
    }
});

// Ocultar el menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var body = document.body;
    var isClickInsideMenu = menu.contains(event.target);
    var isClickOnMenuIcon = document.getElementById('menu-icon').contains(event.target);

    if (!isClickInsideMenu && !isClickOnMenuIcon) {
        menu.style.display = 'none';
        body.classList.remove('menu-open');
    }
});

// Evento de clic para la flecha para cambiar de pestaña
document.querySelector('.arrow-icon').addEventListener('click', function() {
    // Redirige a la página anterior o a una pestaña específica
    window.history.back(); // Cambia esto si quieres redirigir a una URL específica
    // Ejemplo para redirigir a otra URL:
    // window.location.href = 'otra-pagina.html';
});


// Abre el modal y muestra la imagen ampliada
document.querySelectorAll('.message-img').forEach(function(image) {
    image.addEventListener('click', function() {
        var modal = document.getElementById('image-modal');
        var modalImg = document.getElementById('modal-img');
        var captionText = document.getElementById('caption');

        // Establece la imagen del modal y su caption
        modal.style.display = 'flex'; // Cambia de 'block' a 'flex'
        modalImg.src = this.getAttribute('data-fullsize');
        captionText.innerHTML = this.alt;
    });
});

// Cierra el modal cuando se hace clic en el botón de cerrar
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('image-modal').style.display = 'none';
});

// Cierra el modal si se hace clic fuera de la imagen
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('image-modal')) {
        document.getElementById('image-modal').style.display = 'none';
    }
});
