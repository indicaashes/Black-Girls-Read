import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Home from '../Home/Home';
import BookListPage from '../BookListPage/BookListPage';
import BookDetailsPage from '../BookDetailsPage/BookDetailsPage';
import DiscussionsList from '../DiscussionsList/DiscussionsList';
import Profile from '../Profile/Profile';
import Forums from '../Forums/Forums';
import NavBar from '../../components/NavBar/NavBar';
import { books } from '../../data.js';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/home" element={<Home />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/forums/:bookTitle" element={<DiscussionsList />} />
            <Route path="/booklistpage" element={<BookListPage />} />
            <Route path="/books/:bookName" element={<BookDetailsPage books={books} />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
