const mongoose = require('mongoose')

const quotesSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    imageUrl: {
        type: String,
    }
})

module.exports = mongoose.model('Quotes', quotesSchema)