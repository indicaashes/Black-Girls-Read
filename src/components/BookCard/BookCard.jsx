import React from 'react';
import { Link } from 'react-router-dom';

export default function BookCard(props) {
  return (
    <Link to={`/books/${props.book.title}`} className="book-link">
      <div
        style={{
          backgroundImage: `url(${props.book.posterPath})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          WebkitBackgroundSize: 'cover',
        }}
        className="item-card"
      >
        <div className="title">
          <h1>{props.book.title}</h1>
          <h4>Author: {props.book.author}</h4>
        </div>
      </div>
    </Link>
  );
}
