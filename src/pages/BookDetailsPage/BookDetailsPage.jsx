import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as booksAPI from "../../utilities/books-api";
import React, { useEffect, useState } from 'react';
import * as postsAPI from "../../utilities/posts-api";



function BookDetailsPage({  }) {
let location = useLocation()
let navigate = useNavigate()
const bookid = location.state.book._id

const [book, setBook] = useState({});
const [posts, setPosts] = useState([]);

useEffect(() => {
  async function getBook(id) {
    const book = await booksAPI.getbookbyID(id)
    setBook(book)
    console.log(book)
    }
    getBook(bookid)
  }, []);

  useEffect(() => {
    async function getPosts(id) {
      const response = await postsAPI.getPostsForBook(id)
      setPosts(response)
      console.log(response)
      }
      getPosts(bookid)
    }, [book]);
  
  const navigateToCreatePostPage = (book) => {
    navigate(`/books/${book.title.toLowerCase().replace(/\s/g, "-")}/post`, {state:{book:book}}); 
    
  };

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
       <h3>Genre: {book.genre?.name}</h3>
        <p>Maturity Rating: {book.maturity}</p>
        
        <button onClick={() => navigateToCreatePostPage(book)}> Create Post </button>
      </div>
      <img src={book.posterPath} alt={book.title} />
      {posts.posts?.map(post => (
        <div>
        <p>{post.user.name} says: {post.comment}</p>
        <p>{new Date(post.updatedAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>

  );
}

export default BookDetailsPage;
