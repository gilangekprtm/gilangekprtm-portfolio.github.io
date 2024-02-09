window.addEventListener('load', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        element.classList.add('show');
    });
});

window.addEventListener('load', function() {
    const navbarItems = document.querySelectorAll('.navbar li');
    navbarItems.forEach(item => {
        item.classList.add('show');
    });
});

window.addEventListener('load', function() {
    const navbarItems = document.querySelectorAll('.navbar-brand');
    navbarItems.forEach(item => {
        item.classList.add('show');
    });
});

const layananSection = document.querySelector('.layanan');

function checkScroll() {
    const windowHeight = window.innerHeight;
    const layananSectionTop = layananSection.getBoundingClientRect().top;

    if (layananSectionTop < windowHeight && layananSectionTop > 0) {
        layananSection.classList.add('show');
    } else {
        layananSection.classList.remove('show');
    }
}

window.addEventListener('scroll', checkScroll);

const cards = document.querySelectorAll('.kartu');

function checkScrollCard() {
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;
    
        if (cardTop < windowHeight && cardBottom > 0) {
            card.classList.add('fade-in');
        } else {
            card.classList.remove('fade-in');
        }
    });
}

window.addEventListener('scroll', checkScrollCard);

const aboutSection = document.querySelector('.about-section');

function checkScrollAbout() {
    const windowHeight = window.innerHeight;
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const sectionBottom = aboutSection.getBoundingClientRect().bottom;

    if (sectionTop < windowHeight && sectionBottom > 0) {
        aboutSection.classList.add('fade-in');
    } else {
        aboutSection.classList.remove('fade-in');
    }
}

window.addEventListener('scroll', checkScrollAbout);

// Gambar berganti otomatis ciwidey-card

let images = ["img/IMG_7078.jpg", "img/IMG_7075.jpg", "img/IMG_7098.jpg", "img/IMG_7111.jpg"];
let currentImageIndex = 0;
let imgElements = document.querySelectorAll(".ciwidey-card img");

setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imgElements.forEach((img) => {
    img.src = images[currentImageIndex];
    });
}, 2000); // Ubah gambar setiap 2 detik