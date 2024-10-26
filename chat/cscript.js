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


// Función para abrir un chat
function openChat(iconName, iconSrc) {
    // Cerrar todos los chats antes de abrir uno nuevo
    closeAllChats();

    // Crear un nuevo contenedor de chat
    var chatContainer = document.createElement('div');
    chatContainer.classList.add('chat-box');
    chatContainer.innerHTML = `
        <div class="chat-header">
            <img src="${iconSrc}" class="chat-icon" alt="${iconName} Icon">
            <h2>Chat - ${iconName}</h2>
            <button class="close-chat" onclick="closeChat(this)">×</button>
        </div>
        <div class="chat-content"></div>
        <div class="chat-input">
            <input type="text" placeholder="Escribe tu mensaje..." onkeypress="handleKeyPress(event, this)">
            <button onclick="sendMessage(this)">Enviar</button>
        </div>
    `;

    // Agregar el chat al contenedor de chats
    var chatsContainer = document.getElementById('chats-container');
    chatsContainer.appendChild(chatContainer);

    // Mostrar el contenedor de chats
    chatsContainer.style.display = 'flex';
}

// Función para cerrar todos los chats
function closeAllChats() {
    var chatContainers = document.querySelectorAll('.chat-box');
    chatContainers.forEach(chat => chat.remove());
}

// Función para cerrar un chat específico
function closeChat(button) {
    button.closest('.chat-box').remove();
}

// Función para manejar el envío de mensajes
function sendMessage(button) {
    var inputField = button.previousElementSibling;
    var message = inputField.value.trim();
    if (message) {
        var chatContent = button.closest('.chat-box').querySelector('.chat-content');
        var messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatContent.appendChild(messageElement);
        inputField.value = '';
        chatContent.scrollTop = chatContent.scrollHeight; // Desplazar hacia abajo
    }
}

// Función para manejar el evento de presionar la tecla Enter
function handleKeyPress(event, inputField) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage(inputField.nextElementSibling);
    }
}

// Agregar eventos a los íconos
document.querySelectorAll('.icon-item').forEach(item => {
    item.addEventListener('click', function() {
        var iconName = item.querySelector('.icon-text').textContent; // Captura el texto del icono
        var iconSrc = item.querySelector('img').src; // Captura la ruta de la imagen del ícono
        openChat(iconName, iconSrc);
    });
});
