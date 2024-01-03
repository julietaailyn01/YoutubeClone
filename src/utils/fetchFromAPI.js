import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    url: 'https://youtube-v311.p.rapidapi.com/',
    params: {
      part: 'snippet',
      channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '08240d4157mshed8f5a0616063acp1b1943jsnfb091e9ef454',
      'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
    }
  };

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};