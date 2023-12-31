import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export async function createPost(payload){
    return sendRequest(BASE_URL, 'POST', payload)
}

export async function getPostsForBook(bookId){
    return sendRequest(`${BASE_URL}/book/${bookId}`)
}

export async function updatePost(postId, comment){
    return sendRequest(`${BASE_URL}/${postId}`, 'PUT', {comment})
}

export async function deletePost(postId){
    return sendRequest(`${BASE_URL}/${postId}`, 'DELETE')
}