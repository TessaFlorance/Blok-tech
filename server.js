const { application } = require('express')
const express = require('express')
const app = express()
const port = 3000



const profielen = [
    {
        "naam": "Sophie",
        "geboortedatum": "27-01-2001",
        "hobbie": "knutselen",
        "duur": 2,
        "beschrijving": "dit wordt nog een keer echt een mooie lange beschrijving"
    }, 

    {
        "naam": "Sophie",
        "geboortedatum": "27-01-2001",
        "hobbie": "knutselen",
        "duur": 2,
        "beschrijving": "dit wordt nog een keer echt een mooie lange beschrijving"
    }, 

    {
        "naam": "Sophie",
        "geboortedatum": "27-01-2001",
        "hobbie": "knutselen",
        "duur": 2,
        "beschrijving": "dit wordt nog een keer echt een mooie lange beschrijving"
    }
]



//statc files 
app.use(express.static('public'))


//set view
app.set('view engine', 'ejs')


//om url te linken app.get('/aanmelden)
//{aanmelden: aanmeld pagina } is ejs tekst template kan ook zonder 
app.get('/aanmelden', (req, res) => {
    res.render('aanmelden', {aanmelden: 'aanmeld pagina'})
})

app.get('/profielen', (req, res) => {
    res.render('profielen',{profielen} )
})

app.get('/', (req, res) => {})
//listen on port 3000
app.listen(port, () => console.info(`listening on port ${port}`))


//error 
app.use( (req, res) => {
    res.status(404).send('error 404 file not found')
})
