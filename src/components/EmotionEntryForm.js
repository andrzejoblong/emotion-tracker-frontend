import React, { useState } from 'react';
import { addEmotion } from '../services/api';

const EmotionEntryForm = ({ onAddEmotion }) => {
  const [emotion, setEmotion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newEmotion = await addEmotion(emotion);
      onAddEmotion(newEmotion); // Update state or UI with new emotion
      setEmotion(''); // Clear input field
    } catch (error) {
      console.error('Error adding emotion:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your emotion"
        value={emotion}
        onChange={(e) => setEmotion(e.target.value)}
        required
      />
      <button type="submit">Add Emotion</button>
    </form>
  );
};

export default EmotionEntryForm;
