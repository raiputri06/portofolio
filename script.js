const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.navbarkanan');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide')
});