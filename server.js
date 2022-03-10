const { application } = require('express');
const express = require('express');
const multer  = require('multer');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const slug = require('slug');
const app = express();
const port = 3000;


const { MongoClient } = require("mongodb"); 
const { ObjectId } = require("mongodb"); 
const res = require('express/lib/response');
const { redirect } = require('express/lib/response');

let db = null; 


const profielen = [
    {
        "url": "sophie.jpeg",
        "naam": "Sophie",
        "geboortedatum": "27-01-2000",
        "hobbie": "Klimmen",
        "bestemming": "china", 
        "duur": "2 weken",
        "beschrijving": "dit wordt nog een keer echt een mooie lange beschrijving"
    }, 

    {
        "url": "jesper.jpeg",
        "naam": "Jesper",
        "geboortedatum": "02-04-1999",
        "hobbie": "Knutslen",
        "bestemming": "china", 
        "duur": "2 weken" ,
        "beschrijving": "dit wordt nog een keer echt een mooie lange beschrijving"
    }, 

    {
        "url": "rosalie.jpeg",
        "naam": "Rosalie",
        "geboortedatum": "14-07-1995",
        "hobbie": "Klimmen",
        "bestemming": "china", 
        "duur": "2 weken",
        "beschrijving": "dit wordt nog een keer echt een mooie lange beschrijving"
    },

    {
        "url": "kevin.jpeg",
        "naam": "Kevin",
        "geboortedatum": "23-02-1998",
        "hobbie": "Klimmen",
        "bestemming": "china", 
        "duur": "2 weken",
        "beschrijving": "dit wordt nog een keer echt een mooie lange beschrijving"
    }
]



//statc files 
app.use(express.static('public'))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set view
app.set('view engine', 'ejs')


//om url te linken app.get('/aanmelden)
//{aanmelden: aanmeld pagina } is ejs tekst template kan ook zonder 
//'aanmelden' is de ejs/html pagina


app.get('/aanmelden', (req, res) => {
    res.render('aanmelden', {aanmelden: 'aanmeld pagina'})
})

app.get('/profielen', async (req, res) => {
    const query = {"hobbie": "Klimmen"};
    const filtered = await db.collection('profielen').find(query).toArray();
    // console.log(filtered);
    res.render('profielen',{profielen: filtered} )
    
})

 
app.get('/', async (req, res) => {
    res.render('index')

})

app.get('/registeren', async (req, res) => {
    const title = "registeren"; 
    res.render('registeren', {title})
    
 
})

app.post('/registreren', async (req, res) => {

    console.log('yo');
    
    let toevoegenProfiel = {
        slug: slug(req.body.naam),
        name: req.body.naam,
        DOB: req.body.geboortedatum,
        hobby: req.body.hobby,
        bestemming: req.body.bestemming,
        duur: req.body.duur,

    };

    console.log('kaas')
    console.log(toevoegenProfiel);
    await db.collection('profielen').insertOne(toevoegenProfiel)

    res.redirect('/profielen'); 
})


//conect db 
async function connectDB() {
    const uri = process.env.DB_URI;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true,});
    
    try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
    
    } catch (error) {
    throw error;
    }
}

//listen on port 3000
app.listen(port, () => {
    console.info(`listening on port ${port}`);
    connectDB().then( () => console.log("we have a connection with mongo"))
})


//error 
app.use( (req, res) => {
    res.status(404).send('error 404 file not found')
})

