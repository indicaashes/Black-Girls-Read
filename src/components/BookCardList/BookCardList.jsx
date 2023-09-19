import './BookCardList.css';
import BookCardList from '../BookCardList/BookCardList';

export default function BookCardList({ bookCard }) {
  const books = menuItems.map(item =>
    <BookCard
      key={book._id}
      bookCard={book}
    />
  );
  return (
    <main className="BookCardList">
      {books}
    </main>
  );
}