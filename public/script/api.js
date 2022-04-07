
// De 'REST Countries' API wordt ingeladen in het document
document.addEventListener('DOMContentLoaded', () => {
  const CountryDropdown = document.getElementById('Bestemming');

  fetch('https://restcountries.com/v2/all').then(res => {
      return res.json();
  }).then(countries => {
      let output = "";

      // Er wordt door elk land in de API heen 'geloopt', waarmee elke naam van het land uit het object gehaald wordt en wordt toegevoegd aan een output variabele
      countries.forEach(country => {
          output += `<option>${country.name}</option>`;
      });
      
      // Vervolgens wordt deze output toegevoegd aan het select element, welke eerder uit de EJS pagina is opgehaald
      CountryDropdown.innerHTML = output;
  }).catch(err => {
      // Bij sprake van een error wordt deze error naar de console gelogd
      console.log(err);
  })
});
// Bron gebruikt: https://www.youtube.com/watch?v=iw4lvZGBuvA&ab_channel=OstonCodeCypher 

const carouselSlide = document.querySelector('.caroussel ul');
const carouselImage = document.querySelectorAll('.caroussel li');
// const carouselP = document.querySelectorAll('.carousel-slide p'); 

//button 
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter 
let counter = 0; 
const size = carouselImage[0].clientWidth; 
// const sizeP = carouselP[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// carouselSlide.style.transform = 'translateX(' + (-sizeP * counter) + 'px)';

//button listener 

nextBtn.addEventListener('click', ()=>{
 carouselSlide.style.transition = "transform 0.4s ease-in-out"; 
 counter++; 
 carouselSlide.style.transform= 'translatex(' + (-size * counter) +'px)';
//  carouselSlide.style.transform= 'translatex(' + (-sizeP * counter) +'px)';
});

prevBtn.addEventListener('click', ()=>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out"; 
    counter--; 
    carouselSlide.style.transform= 'translatex(' + (-size * counter) +'px)';
    // carouselSlide.style.transform= 'translatex(' + (-sizeP * counter) +'px)';
   });