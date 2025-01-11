const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    navbar.classList.toggle('active')
}
window.onscroll = ()  =>{
    navbar.classList.remove('active')
}
