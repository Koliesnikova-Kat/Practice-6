import { list } from '../main';

export const eventList = eventArray => {
  const eventMarkup = eventArray
    .map(
      ({ name }) => `
    <li class='listEl'>
      <p class='list-text'>${name}</p>
    </li>
  `
    )
    .join('');
  list.innerHTML = eventMarkup;
};