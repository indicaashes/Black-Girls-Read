const mongoose = require('../db/connection')
const ObjectId = mongoose.Schema.Types.ObjectId

const BookSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        bookInfo: {
            title: {
                type: String,
                required: true,
                trim: true 
            },
            authors: {
                type: String,
                required: true
            },
            genre: {
                type: String,
                required: true,
            },
            maturityRating: {
            type: String,
            enum: "G", "PG","PG-13", "MA",
            required: true
            },
            bookRating: {
                type: Number
            },
            botm: {
            type: Boolean,
            required: true
        },        
    },
    {timestamps: true}
)

const Book = mongoose.model('Book', BookSchema)
module.exports = Book