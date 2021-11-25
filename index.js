/*-------------------------------------+----------------------------------------
                                  Global TODO:
- new features
  - search by country name
  - filter by region
---------------------------------------+--------------------------------------*/

'use strict'

const fetchCountries = async () => {
  const countries = await fetch('./resources/db/countries.json', {
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(err => console.error(err));

  return countries;
}

const updateCountryNames = (countryNames) => {
  const countryNameElms = document.querySelectorAll('.country-name');

  for (let i = 0; i < countryNameElms.length; i++) {
    countryNameElms[i].innerHTML = countryNames[i];
  }
}

const zoomIn = () => {
  for (let i = 0; i < 8; i++) {
    const countryCard = document.getElementsByClassName("country-card")[i];
    countryCard.addEventListener("click", (e) => {
      e.preventDefault();
      // console.log("hello");
    });
  }
};

const main = async () => {
  const countries = await fetchCountries();
  // TODO: populate on declaration?
  const countryNames = [];

  for (let i = 0; i < countries.length; i++) {
    countryNames.push(countries[i].name);
  }

  updateCountryNames(countryNames);
  // zoomIn();
}

main();
