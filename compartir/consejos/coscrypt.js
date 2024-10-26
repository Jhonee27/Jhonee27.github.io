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
