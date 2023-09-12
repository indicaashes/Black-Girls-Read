import React from 'react';
import BookCard from '../../components/BookCard/BookCard';  
import { books } from '../../data'; 


export default function BookListPage() {
  
  return (

    
    <div className="container">
      {
        books.map(book => (
          <BookCard key={book.title} book={book} />
        ))
      }
    </div>
  );
}

