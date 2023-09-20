import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as booksAPI from "../../utilities/books-api";
import React, { useEffect, useState } from 'react';



function BookDetailsPage({  }) {
let location = useLocation()
const bookid = location.state.book._id

const [book, setBook] = useState({});
useEffect(() => {
  async function getBook(id) {
    const book = await booksAPI.getbookbyID(id)
    setBook(book)
    console.log(book)
    }
    getBook(bookid)
  }, []);

  if (!book) {

    return (
      <div>
        <p>Book not found.</p>
      </div>
    );
  }

  return (
    <div className="flex">
      <div>
        <h1>{book.title}</h1>
        <h4>Author: {book.author}</h4>
       <h3>Genre: {book.genre?.name}</h3>
        <p>Maturity Rating: {book.maturity}</p>
        
        <Link to={`/forums/${book.title}`} state = {book}>Discuss this book</Link>
      </div>
      <img src={book.posterPath} alt={book.title} />
    </div>
  );
}

export default BookDetailsPage;
