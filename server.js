const express = require('express')
const app = express(); 
const port = 3000; 

//error 
app.use( (req, res) => {
    res.status(404).send('error 404 file not found')
})

//listen 
app.listen(port, () => {
    console.log(`web server running om http://localhost:${port}`)
})