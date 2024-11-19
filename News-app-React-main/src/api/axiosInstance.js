// src/api/axiosInstance.js
import axios from 'axios';
import axiosRetry from 'axios-retry';

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/v2', // Adjust based on your API endpoint
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosRetry(axiosInstance, {
  retries: 3,
  retryDelay: (retryCount) => {
    console.log(`Retry attempt: ${retryCount}`);
    return retryCount * 1000; // Exponential backoff
  },
  retryCondition: (error) => {
    // Retry on 429 status code
    return error.response.status === 429;
  },
});

export default axiosInstance;
