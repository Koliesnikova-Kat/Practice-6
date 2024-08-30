// Discovery API (https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#search-events-v2)
// Потрібно відрендерити колекцію івентів і реалізувати пагінацію за допомогою бібліотеки
// tui - pagination (https://www.npmjs.com/package/tui-pagination),
// Запити робимо використовуючи бібліотеку axios (https://www.npmjs.com/package/axios , https://axios-http.com/uk/docs/intro)
// і конструкції async/await, try/catch

import axios from 'axios';

const apiKey = 'uHSLi07StI0lriMPxJGxUbSYsHDs6AFx';
axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';

const axiosOptions = {
  params: {
    apikey: apiKey,
    id: 1,
  }
};

function fetchData() {
  axios.get('events', axiosOptions);
}

console.log(fetchData());