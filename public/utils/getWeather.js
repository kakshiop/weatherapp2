import axios from 'axios';

export const getWeather = async (city, country) => {
  const url = `https://open-weather13.p.rapidapi.com/city/${city}/${country}`;
  const headers = {
    'x-rapidapi-key': '9c3b338e9amsh753404800ceb8e6p1adcafjsn3cea6107a4f4',
    'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data
  } catch (error) {
    throw error;
  }
};
