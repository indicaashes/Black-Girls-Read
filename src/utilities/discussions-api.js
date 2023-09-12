import sendRequest from "./send-request";

const BASE_URL = 'http://localhost:3000/api/discussions';

export async function createDiscussion(discussionData) {
  try {
    const response = await sendRequest(BASE_URL, 'POST', discussionData);
    return response.data;
  } catch (error) {
    throw new Error(`Error creating discussion: ${error.message}`);
  }
}

export async function getDiscussionsForBook(bookId) {
  try {
    const response = await sendRequest(`${BASE_URL}/${bookId}`, 'GET');
    return response.data; 
  } catch (error) {
    throw new Error(`Error fetching discussions: ${error.message}`);
  }
}

export async function updateDiscussion(discussionId, updatedData) {
  try {
    const response = await sendRequest(`${BASE_URL}/${discussionId}`, 'PUT', updatedData);
    return response.data; 
  } catch (error) {
    throw new Error(`Error updating discussion: ${error.message}`);
  }
}

export async function deleteDiscussion(discussionId) {
  try {
    const response = await sendRequest(`${BASE_URL}/${discussionId}`, 'DELETE');
    return response.data;
  } catch (error) {
    throw new Error(`Error deleting discussion: ${error.message}`);
  }
}
