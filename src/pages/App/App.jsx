import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import BookListPage from '../BookListPage/BookListPage';
import BookDetailsPage from '../BookDetailsPage/BookDetailsPage';
import CreateBookPage from '../CreateBookPage/CreateBookPage';
import Profile from '../Profile/Profile';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/createbookpage" element={<CreateBookPage />} />
            <Route path="/booklistpage" element={<BookListPage />} /> 
           <Route path="/books/:bookName" element={<BookDetailsPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}