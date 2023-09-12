import React from 'react';
import { Link } from 'react-router-dom';
import { books } from '../../data';

export default function Forums() {
  return (
    <div>
      <h1>Discussion Forums</h1>
      <ul>
        {books.map((book) => (
          <li key={book.title}>

<Link to={`/forums/${book.title}`}>{book.title} Discussions</Link>          
</li>
        ))}
      </ul>
    </div>
  );
}
