import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as booksAPI from "../../utilities/books-api";

function BookListPage() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate(); 
  
 
  useEffect(() => {
    async function getBooks () {
      const books = await booksAPI.getallbooks()
      setBooks(books)
    }
    getBooks()
  }, []);


  const navigateToCreateBookPage = () => {
    navigate('/createbookpage'); 
    
  };

  const navigateToBookDetailsPage = (book) => {
    navigate(`/books/${book.title.toLowerCase().replace(/\s/g, "-")}`, {state:{book:book}}); 
    
  };

  return (
    <div>
      <h1>Book List</h1>
      <button onClick={navigateToCreateBookPage}>Add New Book</button> 
      
      <ul>
        {books.map((book) => (
          <li key={book._id}>{book.title}
          <button onClick={() => navigateToBookDetailsPage(book)}>Details</button>
          </li>

        ))}
      </ul>
    </div>
  );
}

export default BookListPage;