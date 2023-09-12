import React from 'react';
import { useParams } from 'react-router-dom';

function DiscussionsList() {

  let { bookTitle } = useParams();


  return (
    <div>
      <h2>Discussion Board for {bookTitle}</h2>

    </div>
  );
}

export default DiscussionsList;
