//preview Image
const loadFile = function (event) {
    const image = document.getElementById('previewphoto');
    image.src = URL.createObjectURL(event.target.files[0]);
};


//Api rest Countries wordt in geladen
document.addEventListener('DOMContentLoaded', () => {
    const CountryDropdown = document.getElementById('Bestemming');

    fetch('https://restcountries.com/v2/all').then(res => {
        return res.json();
    }).then(countries => {
        let output = "";

        //Er wordt door elk land heen geloopt die in de api staat.
        //Dat er voorzorgt dat het land uit het object wordt gehaald en wordt toegevoegd aan de variable output

        countries.forEach(country => {
            output += `<option>${country.name}</option>`;
        });

        // output wordt toegevoegd aan element als de pagina wordt geladen
        CountryDropdown.innerHTML = output;
    }).catch(err => {
        // error zie dit in consol log 
        console.log(err);
    })
});