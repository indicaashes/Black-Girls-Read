import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as postsAPI from "../../utilities/posts-api";

export default function CreatePostPage({user}){
    let location = useLocation()
    const book = location.state.book
    const [post, setPost] = useState({
        book: book, 
        user: user, 
        comment: "",

    })
    
    function handleChange(evt){
        setPost({ ...post, [evt.target.name]: evt.target.value});
        
    }
    
    async function handleSubmit(evt) {

        evt.preventDefault();
        try {
            const response = await postsAPI.createPost(post)

        } catch (error){ 
           throw error
          }
          window.history.back()
    }

    return(
        <div>
        <h1>
            {book.title}
        </h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="comment" onChange={handleChange}/>
        <button type="submit">Add Comment</button>
        </form>
        </div>
    )
}

