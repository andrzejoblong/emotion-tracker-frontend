const API_BASE_URL = 'http://localhost:8000'; // Replace with your backend API URL

export const fetchEmotions = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/emotions`);
    if (!response.ok) {
      throw new Error('Failed to fetch emotions');
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const addEmotion = async (emotion) => {
  try {
    const response = await fetch(`${API_BASE_URL}/emotions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emotion }),
    });
    if (!response.ok) {
      throw new Error('Failed to add emotion');
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
