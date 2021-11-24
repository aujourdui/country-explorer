/*-------------------------------------+----------------------------------------
                                  Global TODO:
- 
---------------------------------------+--------------------------------------*/

const addCountryName = () => {
  for (let i = 0; i < 8; i++) {
    const countryName = document.getElementsByClassName("country-name")[i];
    countryName.innerHTML = "German";
  }
};
addCountryName();

const zoomIn = () => {
  const countryCard = document.getElementsByClassName("country-card")[0];
  countryCard.addEventListener("click", () => {
    // e.preventDefault();
    alert("hello");
  });
};
zoomIn();
