import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import EmotionEntryForm from '../components/EmotionEntryForm';
import EmotionList from '../components/EmotionList';
import { fetchEmotions } from '../services/api';

const Dashboard = () => {
  const [emotions, setEmotions] = useState([]);

  useEffect(() => {
    // Fetch emotions from backend on component mount
    const fetchData = async () => {
      try {
        const emotionsData = await fetchEmotions();
        setEmotions(emotionsData);
      } catch (error) {
        console.error('Error fetching emotions:', error);
      }
    };
    fetchData();
  }, []);

  const handleAddEmotion = (newEmotion) => {
    setEmotions([...emotions, newEmotion]);
  };

  return (
    <div>
      <Header />
      <main>
        <h1>Dashboard</h1>
        <EmotionEntryForm onAddEmotion={handleAddEmotion} />
        <EmotionList emotions={emotions} />
      </main>
    </div>
  );
};

export default Dashboard;
