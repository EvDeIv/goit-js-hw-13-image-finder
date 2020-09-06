import refs from './refs.js';
import hitsCard from '../templates/hitsCard.hbs';

function updateHitsMarkup(hits) {
  refs.gallery.insertAdjacentHTML('beforeend', hitsCard(hits));
}

export default updateHitsMarkup;
