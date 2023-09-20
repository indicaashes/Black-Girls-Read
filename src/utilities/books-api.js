import sendRequest from "./send-request";
const BASE_URL = '/api/books';

export async function getallbooks(){
  return sendRequest(BASE_URL)
}

export async function getbookbyID(id){
  return sendRequest(`${BASE_URL}/${id}`)
}