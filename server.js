const {
    application
} = require('express');
const express = require('express');
const multer = require('multer');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const slug = require('slug');
const app = express();
const port = process.env.PORT || 3000;


const {
    MongoClient
} = require("mongodb");
const {
    ObjectId
} = require("mongodb");
const res = require('express/lib/response');
const {
    redirect
} = require('express/lib/response');


let db = null;

//statc files Middle ware
app.use(express.static('public'))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//set view
app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
    res.render('index')
})

app.get('/aanmelden', (req, res) => {
    res.render('aanmelden', {
        aanmelden: 'aanmeld pagina'
    })
})


app.get('/registeren', async (req, res) => {
    const title = "registeren";
    res.render('registeren', {
        title
    })

})

app.post('/registreren', async (req, res) => {

    let toevoegenProfiel = {
        slug: slug(req.body.Naam),
        url: req.body.avatar,
        Name: req.body.Naam,
        DOB: req.body.Geboortedatum,
        Hobby: req.body.Hobby,
        Bestemming: req.body.Bestemming,
        Duur: req.body.Duur,
        Beschrijving: req.body.Beschrijving,
    };

    console.log(toevoegenProfiel);
    await db.collection('profielen').insertOne(toevoegenProfiel)


    const query = {
        "Bestemming": req.body.Bestemming,
        "Hobby": req.body.Hobby,
        "Duur": req.body.Duur
    };
    const filtered = await db.collection('profielen').find(query).toArray();
    console.log(filtered);
    res.render('profielen', {
        profielen: filtered
    })
})


//connect db 
async function connectDB() {
    const uri = process.env.DB_URI;
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

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
    connectDB().then(() => console.log("we have a connection with mongo"))
})


//error 
app.use((req, res) => {
    res.status(404).send('error 404 file not found')
})