import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api';

const apiService = axios.create({
  baseURL: BASE_URL,
});

export const createDiscussion = async (discussionData) => {
  try {
    const response = await apiService.post('/discussions', discussionData);
    return response.data;
  } catch (error) {
    throw new Error(`Error creating discussion: ${error.message}`);
  }
};

export const getDiscussionsForBook = async (bookId) => {
  try {
    const response = await apiService.get(`/discussions/${bookId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching discussions: ${error.message}`);
  }
};

export const updateDiscussion = async (discussionId, updatedData) => {
  try {
    const response = await apiService.put(`/discussions/${discussionId}`, updatedData);
    return response.data;
  } catch (error) {
    throw new Error(`Error updating discussion: ${error.message}`);
  }
};

export const deleteDiscussion = async (discussionId) => {
  try {
    const response = await apiService.delete(`/discussions/${discussionId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error deleting discussion: ${error.message}`);
  }
};

export default apiService;
