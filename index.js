/*-------------------------------------+----------------------------------------
                                                                    Global TODO:
- features
    - filter by region
---------------------------------------+--------------------------------------*/

"use strict";

const handleSearch = (countryNames) => {
  // TODO: implement input validation
  const inputElm = document.querySelector("#search-input");
  const countryCards = document.querySelectorAll(".country-card");

  inputElm.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
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
          countryCards[i].querySelector(".country-name").innerHTML !=
          inputElm.value
        ) {
          countryCards[i].style.display = "none";
        }
      }
    }
  });

  // {display: block all}, when input field is cleared
  inputElm.addEventListener("input", (e) => {
    if (inputElm.value === "") {
      for (let i = 0; i < countryCards.length; i++) {
        countryCards[i].style.display = "block";
      }
    }
  });
};

const fetchCountries = async () => {
  const countries = await fetch("./resources/db/countries.json")
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return countries;
};

const updateCountryNames = (countryNames) => {
  const countryNameElms = document.querySelectorAll(".country-name");

  for (let i = 0; i < countryNameElms.length; i++) {
    countryNameElms[i].innerHTML = countryNames[i];
  }
};

const updateModalCountryInformation = async (id) => {
  const countries = await fetchCountries();
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
  for (let i = 0; i < 4; i++) {
    const modalInfo = document.getElementsByClassName("modal-info")[i];
    if(i == 0) {
      modalInfo.innerHTML = `country: ${countryNames[id]}`};
    if(i == 1) {
      modalInfo.innerHTML = `population: ${countryPopulation[id]}`};
    if(i == 2) {
      modalInfo.innerHTML = `region: ${countryRegion[id]}`};
    if(i == 3) {
      modalInfo.innerHTML = `capital: ${countryCapital[id]}`};
  }
};

const zoomIn = (countryLength) => {
  for (let i = 0; i < countryLength; i++) {
    const countryCard = document.getElementsByClassName("country-card")[i];
    const modal = document.getElementById("myModal");
    countryCard.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
      updateModalCountryInformation(i)
    });
  }
};

const zoomOut = () => {
  const modal = document.getElementById("myModal");
  modal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
  });
};

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
  zoomIn(countries.length);
  zoomOut();
};

main();
