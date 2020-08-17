const express = require('express');
const router = express.Router();
const Quotes = require('../models/quotes')


router.get('/' , async (req , res) => {
    try {
        const books = await Quotes.find({})
        res.status(200).json(books)

    } catch (error) {
        res.status(500).json({ message: error.message })
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
        res.status(400).json({message : error.message})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const quote = await Quotes.findById(req.params.id)

        res.json(quote)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

router.patch('/:id', async (req, res) =>{
    try {
        const quote = await Quotes.findById(req.params.id)
        
        if(req.body.title != null) {
        quote.title = req.body.title
        }

        if(req.body.description != null ){
            quote.description = req.body.description
        }
        await quote.save()
        res.status(200).json(quote)


    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const quote = await Quotes.findById(req.params.id)
        quote.remove()
        res.status(200).json({
            message: "deleted successfully!"
        })

    } catch (error) {
        res.status(500).json({
            message:error.message
        })        
    }
})

module.exports = router