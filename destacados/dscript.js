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
