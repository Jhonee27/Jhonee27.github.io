function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    document.querySelector(`.tab[onclick="showTab('${tabName}')"]`).classList.add('active');
}
