const carouselSlide = document.querySelector('.caroussel ul');
const profile = document.querySelectorAll('.caroussel li');

//button 
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter 
let counter = 0;
const size = profile[0].clientWidth;

carouselSlide.style.transform = 'translateX' + (-size * counter) + 'px)';

//button listener functie 
nextBtn.addEventListener('click', () => {
    counter++;
    carouselSlide.style.transform = 'translatex(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    counter--;
    carouselSlide.style.transform = 'translatex(' + (-size * counter) + 'px)';
});

nextBtn.removeAttribute('disabled');
prevBtn.removeAttribute('disabled');