import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function BookDetailsPage({ books }) {
  let { bookName } = useParams();
  let book = books.find((bok) => bok.title === bookName);
  

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
        <h3>Genre: {book.genre}</h3>
        <p>Maturity Rating: {book.maturity}</p>
        
        <Link to={`/forums/${book.title}`}>Discuss this book</Link>
      </div>
      <img src={book.posterPath} alt={book.title} />
    </div>
  );
}

export default BookDetailsPage;
