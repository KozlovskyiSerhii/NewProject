const burgerIcon = document.querySelector('.burger-icon');
const dropdownMenu = document.querySelector('.header-nav-panel-dropdown');

burgerIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});