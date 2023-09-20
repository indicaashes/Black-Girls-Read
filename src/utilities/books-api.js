import sendRequest from "./send-request";
const BASE_URL = '/api/books';

export async function getallbooks(){
  return sendRequest(BASE_URL)
}