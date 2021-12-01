'use strict';

const getCountryListByRegion = (region) => {
  // TODO: fetch table from ./resources/region-country-correspondence-table.json
  const table = {
    Africa: ['Algeria'],
    America: ['United States of America', 'Brazil'],
    Asia: ['Afghanistan'],
    Europe: ['Germany', 'Iceland', 'Aland Islands', 'Albania'],
    Oceania: []
  }

  return table[`${region}`];
}

const filterByContinent = () => {
  const countryCards = document.querySelectorAll('.country-card');
  const select = document.querySelector('.regions');

  select.addEventListener('change', e => {
    // initialize cards
    for (let i = 0; i < countryCards.length; i++) {
      countryCards[i].style.display = 'block';
    }

    if (select.value === 'All') {
      return;
    }

    // loop through all cards
    for (let i = 0; i < countryCards.length; i++) {
      // get list of countries that belongs in a selected region.
      // if current card's country name doesn't exist in the list,
      // apply {display: none} to that card.
      // repeat
      if (getCountryListByRegion(select.value)
          .indexOf(`${countryCards[i].querySelector('.country-name').innerHTML}`)
            === -1) {
              countryCards[i].style.display = 'none';
      }
    }
  });
}

const handleSearch = (countryNames) => {
  // TODO: implement input validation
  const inputElm = document.querySelector('#search-input');
  const countryCards = document.querySelectorAll('.country-card');

  inputElm.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      // check if query exist in country list. if it doesn't, throw error to UI
      for (let i = 0; i < countryNames.length; i++) {
        if (countryNames.indexOf(`${inputElm.value}`) === -1) {
          // TODO: use a non-blocking method to present error to user
          alert(`${inputElm.value} does not match our records.`);
          return;
        }
      }

      // {display: none} all, except matching country
      for (let i = 0; i < countryCards.length; i++) {
        if (
          countryCards[i].querySelector('.country-name').innerHTML !=
          inputElm.value
        ) {
          countryCards[i].style.display = 'none';
        }
      }
    }
  });

  // {display: block all}, when input field is cleared
  inputElm.addEventListener('input', (e) => {
    if (inputElm.value === '') {
      for (let i = 0; i < countryCards.length; i++) {
        countryCards[i].style.display = 'block';
      }
    }
  });
};

const fetchCountries = async () => {
  const countries = await fetch('./resources/db/countries.json')
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return countries;
};

const updateCountryNames = (countryNames) => {
  const countryNameElms = document.querySelectorAll('.country-name');

  for (let i = 0; i < countryNameElms.length; i++) {
    countryNameElms[i].innerHTML = countryNames[i];
  }
};

const zoomIn = (countryIndex) => {
  for (let i = 0; i < countryIndex; i++) {
    const countryCard = document.getElementsByClassName('country-card')[i];
    const modal = document.getElementById('myModal');
    countryCard.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'block';
      updateModalCountryInformation(i)
    });
  }
};

const updateModalCountryInformation = async (id) => {
  const countries = await fetchCountries();
  const countryNames = [];
  const countryNativeNames = [];
  const countryPopulation = [];
  const countryRegion = [];
  const countrySubRegion = [];
  const countryCapital = [];
  const countryTopLevelDomain = [];
  const countryCurrencies = [];
  const countryLanguages = [];

  for (let i = 0; i < countries.length; i++) {
    countryNames.push(countries[i].name);
    countryNativeNames.push(countries[i].nativeName);
    countryPopulation.push(countries[i].population);
    countryRegion.push(countries[i].region);
    countrySubRegion.push(countries[i].subRegion);
    countryCapital.push(countries[i].capital);
    countryTopLevelDomain.push(countries[i].topLevelDomain);
    countryCurrencies.push(countries[i].currencies);
    countryLanguages.push(countries[i].languages);
  }
  const modalImg = document.getElementById("modal-image")
  modalImg.src = `./resources/images/${countryNames[id]}.png`

  for (let i = 0; i < 9; i++) {
    const modalInfo = document.getElementsByClassName("modal-info")[i];
    if(i == 0) {
      modalInfo.innerHTML = `${countryNames[id]}`};
    if(i == 1) {
      modalInfo.innerHTML = `${countryPopulation[id]}`};
    if(i == 2) {
      modalInfo.innerHTML = `${countrySubRegion[id]}`};
    if(i == 3) {
      modalInfo.innerHTML = `${countryRegion[id]}`};
    if(i == 4) {
      modalInfo.innerHTML = `${countryCapital[id]}`};
    if(i == 5) {
      modalInfo.innerHTML = `${countryTopLevelDomain[id]}`};
    if(i == 6) {
      modalInfo.innerHTML = `${countryCurrencies[id]}`};
    if(i == 7) {
      modalInfo.innerHTML = `${countryLanguages[id]}`};
    if(i == 8) {
      modalInfo.innerHTML = `${countryCapital[id]}`};
  }
};

const zoomOut = () => {
  const modal = document.getElementById('myModal');
  modal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'none';
  });
};

const darkModeToggler = () => {
  const body = document.body
  const header = document.querySelector("header")
  const title = document.getElementById("title");
  const searchCountry = document.querySelector(".search-country")
  const searchInput = document.getElementById("search-input")
  const filterRegion = document.querySelector(".filter-region")
  const regions = document.querySelector(".regions")
  const iconSearch = document.querySelector(".fa-search")
  const iconMoon = document.querySelector(".fa-moon")
  const cardContainer = document.querySelector(".country-container")
  const countryCards = document.querySelectorAll(".country-card")
  const countryNames = document.querySelectorAll(".country-name")
  const modal = document.querySelector(".modal")

  body.classList.toggle("change-dark-mode")
  header.classList.toggle("change-dark-mode-light")
  title.classList.toggle("change-dark-mode-light")
  searchCountry.classList.toggle("change-dark-mode-light")
  searchInput.classList.toggle("change-dark-mode-light")
  filterRegion.classList.toggle("change-dark-mode-light")
  regions.classList.toggle("change-dark-mode-light")
  iconSearch.classList.toggle("change-dark-mode-light")
  iconMoon.classList.toggle("change-dark-mode-light")
  cardContainer.classList.toggle("change-dark-mode")
  modal.classList.toggle("modal-dark")

  for (let i = 0; i < countryCards.length; i++) {
    countryCards[i].classList.toggle("change-dark-mode-light")
    countryNames[i].classList.toggle("change-dark-mode-light")
  }
}

const main = async () => {
  const countries = await fetchCountries();
  // TODO: populate on declaration?
  const countryNames = [];
  const countryPopulation = [];
  const countryRegion = [];
  const countryCapital = [];

  for (let i = 0; i < countries.length; i++) {
    countryNames.push(countries[i].name);
    countryPopulation.push(countries[i].population);
    countryRegion.push(countries[i].region);
    countryCapital.push(countries[i].capital);
  }

  updateCountryNames(countryNames);
  handleSearch(countryNames);
  filterByContinent();
  zoomIn(countries.length);
  zoomOut();
};

main();
