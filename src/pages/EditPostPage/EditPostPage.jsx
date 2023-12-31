import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as postsAPI from "../../utilities/posts-api";

export default function EditPostPage({user}){
    let location = useLocation()
    const book = location.state.book
    const post = location.state.post
    const [newPost, setNewPost] = useState({
        book: book, 
        user: user, 
        comment: post.comment,

    })
    
       function handleChange(evt){
        setNewPost({ ...newPost, [evt.target.name]: evt.target.value});
        
    }
    
    async function handleSubmit(evt) {

        evt.preventDefault();
        try {
            const response = await postsAPI.updatePost(post._id, newPost.comment)

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
            <input type="text" name="comment" onChange={handleChange} value={newPost.comment}/>
        <button type="submit">Update Comment</button>
        </form>
        </div>
    )
}

