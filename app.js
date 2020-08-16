const express = require('express')
const mongoose = require('mongoose')
const app = express();
const apiRouter = require('./api/api')
const port = process.env.PORT || 3000
require ('dotenv').config()



mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("Connected to DB")
)


app.use(express.json())
app.use('/api', apiRouter )





app.get('/' , (req , res) => {
    res.json({
        message: "hello world"
    })
})

app.listen(port, () => {
    console.log(`Listening to ${port}`)
} )