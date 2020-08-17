const express = require('express')
const mongoose = require('mongoose')
const app = express();
const apiRouter = require('./api/api')
var bodyParser = require('body-parser');
const port = process.env.PORT || 3000
require ('dotenv').config()



mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("Connected to DB")
)


app.use(express.json())
// app.use(bodyParser.json({ type: 'application/json' }));

app.use('/api', apiRouter )
app.get('/' , (req , res) => {
    res.json({
        message: "For api, please go to /api"
    })
})

app.listen(port, () => {
    console.log(`Listening to ${port}`)
} )