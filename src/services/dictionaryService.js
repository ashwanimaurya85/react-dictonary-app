import axios from 'axios';

const API_BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export const fetchWordDetails = async (word) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${word}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching word details:', error);
    throw error;
  }
};