const DATE_FORMAT = 'DD MM YY';

function getRandomElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function addOffers(items) {
  let fragment = '';
  for(const item of items) {
    fragment += `<li class="event__offer">
      <span class="event__offer-title">${item.title}</span>
      <span class="event__offer-price">&plus; ${item.price}</span>
      &euro;&nbsp;
    </li>`;
  }
  return fragment;
}
export { DATE_FORMAT, getRandomElement, addOffers };
