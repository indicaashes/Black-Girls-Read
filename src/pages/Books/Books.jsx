import React from 'react';
import { books } from './src/pages/Books/data.js'; 
import BookList from './components/BookList/BookList'; 

function Books() {
  return (
    <div>
      <h1>Welcome to the Books Page</h1>
      <BookList books={books} /> {/* Pass the book data as a prop */}
    </div>
  );
}

export default Books;

