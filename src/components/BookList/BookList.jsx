import React from 'react';

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <img src={book.posterPath} alt={`Poster for ${book.title}`} />
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Maturity Rating: {book.maturity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
