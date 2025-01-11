const search = document.querySelector('.search-box');
const cart = document.querySelector('.cart');
const user = document.querySelector('.user');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');

// Ensure elements exist before attaching event listeners
if (document.querySelector('#search-icon')) {
    document.querySelector('#search-icon').onclick = () => {
        if (search) search.classList.toggle('active');
        if (cart) cart.classList.remove('active');
        if (user) user.classList.remove('active');
        if (navbar) navbar.classList.remove('active');
    };
}

if (document.querySelector('#shop-icon')) {
    document.querySelector('#shop-icon').onclick = () => {
        if (cart) cart.classList.toggle('active');
        if (search) search.classList.remove('active');
        if (user) user.classList.remove('active');
        if (navbar) navbar.classList.remove('active');
    };
}

if (document.querySelector('#user-icon')) {
    document.querySelector('#user-icon').onclick = () => {
        if (user) user.classList.toggle('active');
        if (search) search.classList.remove('active');
        if (cart) cart.classList.remove('active');
        if (navbar) navbar.classList.remove('active');
    };
}

if (document.querySelector('#menu-icon')) {
    document.querySelector('#menu-icon').onclick = () => {
        if (navbar) navbar.classList.toggle('active');
        if (user) user.classList.remove('active');
        if (search) search.classList.remove('active');
        if (cart) cart.classList.remove('active');
    };
}

window.onscroll = () => {
    if (navbar) navbar.classList.remove('active');
    if (user) user.classList.remove('active');
    if (search) search.classList.remove('active');
    if (cart) cart.classList.remove('active');
};

// Navbar Scroll Effect
if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
}

// Swiper Initialization
if (typeof Swiper !== 'undefined' && document.querySelector('.new-arrival')) {
    const swiper = new Swiper(".new-arrival", {
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        breakpoints: {
            0: {
                slidesPerView: 0,
            },
            568: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1020: {
                slidesPerView: 3,
            },
        },
    });
} else {
    console.error("Swiper library not loaded or '.new-arrival' element missing.");
}