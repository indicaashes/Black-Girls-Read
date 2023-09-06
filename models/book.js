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
                type: [{type: String}],
                required: true
            },
            averageRating: Number,
            ratingsCount: Number,
            maturityRating: String,
            imageLinks: {smallThumbnail: {type:String}, thumbnail: {type:String}},
        },
        ratings: [{type: ObjectId, ref: 'Rating'}]
    },
    {timestamps: true}
)

const Book = mongoose.model('Book', BookSchema)
module.exports = Book