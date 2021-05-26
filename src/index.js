import countryCardTpl from './templates/country.hbs';
import countriesListTpl from './templates/countries.hbs';
import _debounce from 'lodash.debounce';
import API from './js/api-service';
import getRefs from './js/get-refs';
import './sass/main.scss';

const refs = getRefs();

refs.input.addEventListener('input', _debounce(onCountryInput, 500));

function onCountryInput(e) {
  clearCountryInput();
  API.fetchCountryByName(e.target.value)
    .then(country => {
      if (country.length === 1) {
        renderCountryCard(country);
      } else if (country.length < 10 && country.length > 1) {
        renderCountriesList(country);
      } else {
        // renderCountriesList(country);
        console.log('Too many matches found. Please enter a more specific query!');
        // alert('Too many matches found. Please enter a more specific query!');
      }
    })
    .catch(onFetchError);
}

function renderCountryCard(country) {
  const markup = countryCardTpl(country);
  refs.country.insertAdjacentHTML('beforeend', markup);
}

function renderCountriesList(countries) {
  const markup = countriesListTpl(countries);
  refs.country.insertAdjacentHTML('beforeend', markup);
}

function onFetchError(error) {
  alert(error);
}

function clearCountryInput() {
  refs.country.innerHTML = '';
}
