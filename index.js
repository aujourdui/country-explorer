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

const zoomIn = (numberOfCountry) => {
  for (let i = 0; i < numberOfCountry; i++) {
    const countryCard = document.getElementsByClassName("country-card")[i];
    const modal = document.getElementById("myModal");
    countryCard.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
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

  for (let i = 0; i < countries.length; i++) {
    countryNames.push(countries[i].name);
  }

  updateCountryNames(countryNames);
  handleSearch(countryNames);
  zoomIn(countries.length);
  zoomOut();
};

main();
