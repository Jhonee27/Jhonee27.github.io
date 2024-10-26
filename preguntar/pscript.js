// Script para mostrar y ocultar el menú al hacer clic en el icono del menú
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


// Script para hacer que las preguntas frecuentes sean interactivas
document.querySelectorAll('.faq-box li').forEach(function (item) {
    item.addEventListener('click', function () {
        // Alternar la clase 'active' para mostrar/ocultar la respuesta
        this.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.color-box');
    const modal = document.getElementById('question-modal');
    const closeModal = document.getElementById('close-modal');
    const selectedCourse = document.getElementById('selected-course');
    const form = document.getElementById('modal-form');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const courseName = this.textContent; // Obtener el nombre del curso del texto del botón
            selectedCourse.textContent = courseName;
            modal.style.display = 'flex'; // Mostrar el modal
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none'; // Ocultar el modal
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Ocultar el modal si se hace clic fuera de él
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        alert('Pregunta enviada');
        modal.style.display = 'none'; // Ocultar el modal después de enviar
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.color-box');
    const modal = document.getElementById('question-modal');
    const closeModal = document.getElementById('close-modal');
    const selectedCourse = document.getElementById('selected-course');
    const modalForm = document.getElementById('modal-form');
    const questionForm = document.getElementById('question-form');

    // Mostrar el modal al hacer clic en los botones de color
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const courseName = this.textContent; // Obtener el nombre del curso del texto del botón
            selectedCourse.textContent = courseName;
            modal.style.display = 'flex'; // Mostrar el modal
        });
    });

    // Cerrar el modal al hacer clic en el botón de cerrar
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Cerrar el modal al hacer clic fuera del contenido del modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Manejar el envío del formulario en el modal
    modalForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Pregunta enviada');
        modalForm.reset(); // Limpiar el contenido del formulario del modal
        modal.style.display = 'none'; // Ocultar el modal después de enviar
    });

    // Manejar el envío del formulario en el question-box
    questionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Pregunta enviada');
        questionForm.reset(); // Limpiar el contenido del formulario del question-box
    });

    // Permitir envío del formulario con la tecla Enter
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && (event.target.closest('#question-form') || event.target.closest('#modal-form'))) {
            event.preventDefault();
            const form = event.target.closest('form');
            if (form) {
                form.requestSubmit(); // Enviar el formulario
            }
        }
    });
});
