const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountryByName(countryName) {
  return fetch(`${BASE_URL}/name/${countryName}`).then(response => {
    // return response.json();
    if (response.ok) return response.json();
    throw new Error('Error fetching data');
  });
}

export default { fetchCountryByName };
