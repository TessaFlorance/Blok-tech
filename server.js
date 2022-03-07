const { application } = require('express')
const express = require('express')
const app = express()
const port = 3000



const profielen = [
    {
        "naam": "Sophie",
        "geboortedatum": "27-01-2000",
        "hobbie": "Klimmen",
        "duur": "2 weken",
        "beschrijving": "dit wordt nog een keer echt een mooie lange beschrijving"
    }, 

    {
        "naam": "Jesper",
        "geboortedatum": "02-04-1999",
        "hobbie": "Klimmen",
        "duur": "2 weken" ,
        "beschrijving": "dit wordt nog een keer echt een mooie lange beschrijving"
    }, 

    {
        "naam": "Rosalie",
        "geboortedatum": "14-07-1995",
        "hobbie": "Klimmen",
        "duur": "2 weken",
        "beschrijving": "dit wordt nog een keer echt een mooie lange beschrijving"
    },

    {
        "naam": "Kevin",
        "geboortedatum": "23-02-1998",
        "hobbie": "Klimmen",
        "duur": "2 weken",
        "beschrijving": "dit wordt nog een keer echt een mooie lange beschrijving"
    }
]



//statc files 
app.use(express.static('public'))


//set view
app.set('view engine', 'ejs')


//om url te linken app.get('/aanmelden)
//{aanmelden: aanmeld pagina } is ejs tekst template kan ook zonder 
//'aanmelden' is de ejs/html pagina
app.get('/aanmelden', (req, res) => {
    res.render('aanmelden', {aanmelden: 'aanmeld pagina'})
})

app.get('/profielen', (req, res) => {
    res.render('profielen',{profielen} )
})
 
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/registeren', (req, res) => {
    res.render('registeren')
})

//listen on port 3000
app.listen(port, () => console.info(`listening on port ${port}`))

//error 
app.use( (req, res) => {
    res.status(404).send('error 404 file not found')
})
