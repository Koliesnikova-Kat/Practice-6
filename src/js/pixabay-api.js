import axios from 'axios';

const apiKey = 'uHSLi07StIOlriMPxJGxUbSYsHDs6AFx';
axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';

export async function fetchData(page, value) {
  const axiosOptions = {
    params: {
      apikey: apiKey,
      page: page,
      keyword: value,
    }
  };

  const response = await axios.get('events.json', axiosOptions);
  return response.data;
}