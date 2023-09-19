import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookListPage() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate(); 
  
  const fetchBooks = async () => {
    try {
      const apiUrl = '/api/books';
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);


  const navigateToCreateBookPage = () => {
    navigate('/createbookpage'); 
    
  };

  return (
    <div>
      <h1>Book List</h1>
      <button onClick={navigateToCreateBookPage}>Add New Book</button> 
      
      <ul>
        {books.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookListPage;
