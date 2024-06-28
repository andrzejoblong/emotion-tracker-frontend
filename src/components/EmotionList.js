import React from 'react';

const EmotionList = ({ emotions }) => {
  return (
    <div>
      <h2>Emotion History</h2>
      <ul>
        {emotions.map((emotion, index) => (
          <li key={index}>{emotion}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmotionList;
