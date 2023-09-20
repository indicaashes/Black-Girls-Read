import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as postsAPI from "../../utilities/posts-api";

export default function CreatePostPage(){
    let location = useLocation()
    const book = location.state.book

    
    return(
        <div>
        <h1>
            {book.title}
        </h1>

        </div>
    )
}

