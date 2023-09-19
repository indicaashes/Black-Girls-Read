const Genre = require('./models/genre');
const Book = require('./models/bookSchema');

require('dotenv').config();
require('./config/database');


(async function() {
    await Genre.deleteMany({});
    const genres = await Genre.create([
      {genre: 'Historical Fiction'},
      {genre: 'Domestic Drama'},
      {genre: 'Domestic Fiction'},
      {genre: 'Fantasy Fiction'},
      {genre: 'Fiction'},
    ]);

    console.log(genres)


    await Book.deleteMany({});
    const books = await Book.create([    {
        posterPath: "https://i.imgur.com/fQWm52v.jpg",
        author: "Toni Morison",
        title: "Beloved",
        genre: genres[0],
        maturity: 'PG-13',

    },
    {
        posterPath: "https://i.imgur.com/7L4rPjY.jpg",
        author: "Lorraine Hansberry",
        title: "A Raisin in the Sun",
        genre: genres[1],
        maturity: 'PG-13',

    },
    {
        posterPath: "https://i.imgur.com/6HrelZx.jpg",
        author: "Alice Walker",
        title: "The Color Purple",
        genre: genres[2],
        maturity: 'PG-13',

    },
    {
        posterPath: "https://i.imgur.com/tK4mMlq.jpg",
        author: "Tomi Adeyemi",
        title: "Children of Blood and Bone",
        genre: genres[3],
        maturity: 'PG-13',

    },
    {
        posterPath: "https://i.imgur.com/qiXkF8X.jpg",
        author: "James Baldwin",
        title: "Go Tell It on the Mountain",
        genre: genres[4],
        maturity: 'PG-13',

    }
    
]);

  console.log(books)

  process.exit();

})();
