// Discovery API (https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#search-events-v2)
// Потрібно відрендерити колекцію івентів і реалізувати пагінацію за допомогою бібліотеки
// tui - pagination (https://www.npmjs.com/package/tui-pagination),
// Запити робимо використовуючи бібліотеку axios (https://www.npmjs.com/package/axios , https://axios-http.com/uk/docs/intro)
// і конструкції async/await, try/catch
import { fetchData } from './js/pixabay-api.js';
import { eventList } from './js/render-functions.js';
import Pagination from 'tui-pagination';

export const list = document.querySelector('.list');
const form = document.querySelector('.form');
let value = '';

//* pagination
const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination('pagination', options);
const page = pagination.getCurrentPage();
function reset(totalItems) {
  pagination.reset(totalItems);
}
pagination.on('afterMove', event => {
  const currentPage = event.page;
  renderEvent(currentPage, value);
});

//* event
async function renderEvent(page, value) {
  try {
    const arrayEvent = await fetchData(page, value);

    if (!arrayEvent.page.totalElements) {
      alert('Try again!');
      return;
    }

    if (page === 1) {
      reset(arrayEvent.page.totalElements);
    }

    eventList(arrayEvent._embedded.events);
  } catch (err) {
    console.log(err);
  }
}
renderEvent(page, value);

//* form
const onFormSubmit = event => {
  event.preventDefault();

  list.innerHTML = '';
  value = event.target.elements.input.value;
  renderEvent(page, value);
  form.reset();
};

form.addEventListener('submit', onFormSubmit);