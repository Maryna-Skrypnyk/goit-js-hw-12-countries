import countryCardTpl from './templates/country.hbs';
import countriesListTpl from './templates/countries.hbs';
import _debounce from 'lodash.debounce';
import API from './js/api-service';
import getRefs from './js/get-refs';
import './sass/main.scss';

const refs = getRefs();

refs.input.addEventListener('input', _debounce(onCountryInput, 500));

function onCountryInput(e) {
  API.fetchCountryByName(e.target.value)
    .then(country => {
      if (country.length < 10 && country.length > 1) {
        renderCountriesList(country);
      } else if (country.length === 1) {
        renderCountryCard(country);
      } else {
        return alert('Too many matches found. Please enter a more specific query!');
      }
    })
    .catch(onFetchError);
}

function renderCountryCard(country) {
  const markup = countryCardTpl(country);
  refs.country.insertAdjacentHTML('beforeend', markup);
}

function renderCountriesList(country) {
  const markup = countriesListTpl(country);
  refs.country.insertAdjacentHTML('beforeend', markup);
}

function onFetchError(error) {
  alert('Too many matches found. Please enter a more specific query!');
}
