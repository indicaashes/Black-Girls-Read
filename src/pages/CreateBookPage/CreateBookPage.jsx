import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateBookPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    bookInfo: {
      title: '',
      authors: '',
      genre: '',
      maturityRating: 'G',
      bookRating: 0,
      botm: false,
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData.bookInfo),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok (status ${response.status})`);
      }

      navigate('/booklistpage');
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  return (
    <div>
      <h2>Create Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.bookInfo.title}
            onChange={(e) => setFormData({ ...formData, bookInfo: { ...formData.bookInfo, title: e.target.value } })}
            required
          />
        </div>
        <div>
          <label>Authors:</label>
          <input
            type="text"
            name="authors"
            value={formData.bookInfo.authors}
            onChange={(e) => setFormData({ ...formData, bookInfo: { ...formData.bookInfo, authors: e.target.value } })}
            required
          />
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={formData.bookInfo.genre}
            onChange={(e) => setFormData({ ...formData, bookInfo: { ...formData.bookInfo, genre: e.target.value } })}
            required
          />
        </div>
        <div>
          <label>Maturity Rating:</label>
          <select
            name="maturityRating"
            value={formData.bookInfo.maturityRating}
            onChange={(e) => setFormData({ ...formData, bookInfo: { ...formData.bookInfo, maturityRating: e.target.value } })}
            required
          >
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="MA">MA</option>
          </select>
        </div>
        <div>
          <label>Book Rating:</label>
          <input
            type="number"
            name="bookRating"
            value={formData.bookInfo.bookRating}
            onChange={(e) => setFormData({ ...formData, bookInfo: { ...formData.bookInfo, bookRating: e.target.value } })}
          />
        </div>
        <div>
          <label>Book of the Month:</label>
          <input
            type="checkbox"
            name="botm"
            checked={formData.bookInfo.botm}
            onChange={(e) => setFormData({ ...formData, bookInfo: { ...formData.bookInfo, botm: e.target.checked } })}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateBookPage;
