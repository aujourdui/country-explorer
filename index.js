/*-------------------------------------+----------------------------------------
                                  Global TODO:
- 
---------------------------------------+--------------------------------------*/

const fetchData = () => async {
    const await
}

const addCountryName = () => {
for (let i = 0; i < 8; i++) {
    const countryName = document.getElementsByClassName("country-name")[i];
    countryName.innerHTML = "German";
  }
};
addCountryName();

const zoomIn = () => {
    for (let i = 0; i < 8; i++) {
        const countryCard = document.getElementsByClassName("country-card")[i];
        countryCard.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("hello");
    });
  }
};
zoomIn();
