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

let imagesCiwidey = ["img/IMG_7078.jpg", "img/IMG_7075.jpg", "img/IMG_7098.jpg", "img/IMG_7111.jpg"];
let currentImageCiwideyIndex = 0;
let imgCiwideyElements = document.querySelectorAll(".ciwidey-card img");

setInterval(() => {
    currentImageCiwideyIndex = (currentImageCiwideyIndex + 1) % imagesCiwidey.length;
    imgCiwideyElements.forEach((img) => {
    img.src = imagesCiwidey[currentImageCiwideyIndex];
    });
}, 2000); // Ubah gambar setiap 2 detik

// Gambar berganti otomatis ciwidey-card

let imagesPangalengan = ["img/kebun teh.jpg", "img/IMG_7025.jpg", "img/IMG_7022.jpg", "img/IMG_6973.jpg"];
let currentImagePangalenganIndex = 0;
let imgPangalenganElements = document.querySelectorAll(".pangalengan-card img");

setInterval(() => {
    currentImagePangalenganIndex = (currentImagePangalenganIndex + 1) % imagesPangalengan.length;
    imgPangalenganElements.forEach((img) => {
    img.src = imagesPangalengan[currentImagePangalenganIndex];
    });
}, 2000); // Ubah gambar setiap 2 detik