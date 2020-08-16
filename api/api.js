const express = require('express');
const router = express.Router();
const Quotes = require('../models/quotes')


router.get('/' , async (req , res) => {
    try {
        const books = await Quotes.find({})
        res.send(books)

    } catch (error) {
        res.send(error)
    }
})

router.post('/' , async (req , res) => {
    try {
        const {title, description } = req.body
        const newQuote = new Quotes ({
            title: title,
            description: description 
        }) 

        await newQuote.save()
        res.json({
            message:"Saved"
        })

    } catch (error) {
        res.send(error)
    }
})


module.exports = router