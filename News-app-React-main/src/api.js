import axios from 'axios';

const API_KEY = 'b3eb7536ce631f8a909a7b672d5b30e8'; //
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      params: { apiKey: API_KEY },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
