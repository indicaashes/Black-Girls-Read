import React, { useState, useEffect } from 'react';
import * as apiService from '../../utilities/discussions-api.js';
import { useLocation } from 'react-router-dom';

const DiscussionsList = () => {
  const location = useLocation ()
  const book = location.state.book
  const [newDiscussionData, setNewDiscussionData] = useState({
    month: '',
    year: '',
    details: '',
  });
  const [discussions, setDiscussions] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    async function fetchDiscussions() {
      try {
        const discussionsData = await apiService.getDiscussionsForBook(book._id);
        setDiscussions(discussionsData);
      } catch (error) {
        console.error('Error fetching discussions:', error.message);
      }
    }

    fetchDiscussions();
  }, []);

  const handleNewDiscussionChange = (e) => {
    const { name, value } = e.target;
    setNewDiscussionData({ ...newDiscussionData, [name]: value });
  };

  const handleCreateDiscussion = async () => {
    try {
      const newDiscussion = {
        month: newDiscussionData.month,
        year: newDiscussionData.year,
        details: newDiscussionData.details,
      };

      const response = await apiService.createDiscussion(newDiscussion);
      console.log("function working")
      if (response.status === 201) {
        setDiscussions([...discussions, response.data]);
        setNewDiscussionData({
          month: '',
          year: '',
          details: '',
        });
        setIsFormOpen(false);
      } else {
        console.error('Failed to create discussion.');
      }
    } catch (error) {
      console.error('Error creating discussion:', error.message);
    }
  };

  return (
    <div>
      <h2>Discussion Board</h2>
      <button onClick={() => setIsFormOpen(!isFormOpen)}>
        {isFormOpen ? 'Close Form' : 'Open Form'}
      </button>
      {isFormOpen && (
        <form>
          <input
            type="number"
            name="month"
            placeholder="Month"
            value={newDiscussionData.month}
            onChange={handleNewDiscussionChange}
          />
          <input
            type="number"
            name="year"
            placeholder="Year"
            value={newDiscussionData.year}
            onChange={handleNewDiscussionChange}
          />
          <textarea
            name="details"
            placeholder="Discussion details"
            value={newDiscussionData.details}
            onChange={handleNewDiscussionChange}
          />
          <button type="button" onClick={handleCreateDiscussion}>
            Create Discussion
          </button>
        </form>
      )}
      <ul>
        {discussions.map((discussion, index) => (
          <li key={index}>
            <strong>{`Month: ${discussion.month}, Year: ${discussion.year}`}</strong>
            <p>{discussion.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscussionsList;
