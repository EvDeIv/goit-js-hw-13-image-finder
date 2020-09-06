import './styles.css';
import newService from './components/apiService.js';
import refs from './components/refs.js';
import updateHitsMarkup from './components/updateHitsMarkup';

var _ = require('lodash');

refs.input.addEventListener(
  'input',
  _.debounce(event => {
    event.preventDefault();
    const formValue = event.target.value;
    newService.query = formValue;
    refs.gallery.innerHTML = '';
    newService.resetPage();
    newService.fetchHits().then(hits => {
      updateHitsMarkup(hits);
    });
  }, 500),
);
window.addEventListener(
  'scroll',
  _.debounce(function () {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      newService.fetchHits().then(hits => {
        updateHitsMarkup(hits);
      });
    }
  }, 200),
);
