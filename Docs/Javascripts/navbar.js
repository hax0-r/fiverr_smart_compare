const navBar = document.getElementById('navBar');
const resNav = document.getElementById('resNav');
const closeNav = document.getElementById('closeNav');

navBar.addEventListener('click', () => {
    resNav.style.width = '100%';
})
closeNav.addEventListener('click', () => {
    resNav.style.width = '0%';
})