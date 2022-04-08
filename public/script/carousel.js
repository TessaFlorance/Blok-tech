const carouselSlide = document.querySelector('.caroussel ul');
const profile = document.querySelectorAll('.caroussel li');

//button 
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter 
let counter = 0; 
const size = profile[0].clientWidth; 
// const sizeP = carouselP[0].clientWidth;

carouselSlide.style.transform = 'translateX' + (-size * counter) + 'px)';


//button listener 

nextBtn.addEventListener('click', ()=>{
 carouselSlide.style.transition = "transform 0.4s ease-in-out"; 
 counter++; 
 carouselSlide.style.transform= 'translatex(' + (-size * counter) +'px)';

});

prevBtn.addEventListener('click', ()=>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out"; 
    counter--; 
    carouselSlide.style.transform= 'translatex(' + (-size * counter) +'px)';
    // carouselSlide.style.transform= 'translatex(' + (-sizeP * counter) +'px)';
   });

