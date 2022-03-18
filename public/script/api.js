const section = document.querySelector('section')

console.log(section)

section.addEventListener ('dragstart', (event) => { 
 console.log (event)                          
 })

section.addEventListener ('dragdrop', (event) => { 
 console.log (event)                          
 })

 //ik ben bezig geweest met het aan de praat krijgen van het drag and drop event alleen is dit helaas niet gelukt, 
 //ik heb hier helaas iets langer de tijd voor nodig om het werkend te krijgen. 
 //als api wil ik werken met http://api.weatherstack.com/ 

 //
 const axios = require('axios');
const params = {
    access_key: 'YOUR_ACCESS_KEY',
    query: 'New York'
  }
  
  axios.get('https://api.weatherstack.com/current', {params})
    .then(response => {
      const apiResponse = response.data;
      console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
    }).catch(error => {
      console.log(error);
    });
    