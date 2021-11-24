/*-------------------------------------+----------------------------------------
                                  Global TODO:
- 
---------------------------------------+--------------------------------------*/

const fetchData = async () => {
  const response = await fetch("./resources/data.json");
  const data = await response.json();
  console.log(data);
  const germanyData = data[84];
  const USData = data[239];
  const brazilData = data[31];
  const icelandData = data[103];
  const afghanistanData = data[0];
  const alandIslandsData = data[1];
  const albaniaData = data[2];
  const algeriaData = data[3];
  console.log(germanyData);
  console.log(USData);
  console.log(brazilData);
  console.log(icelandData);
  console.log(afghanistanData);
  console.log(alandIslandsData);
  console.log(albaniaData);
  console.log(algeriaData);
};
fetchData();

const addCountryName = () => {
  for (let i = 0; i < 8; i++) {
    const countryName = document.getElementsByClassName("country-name")[i];
    countryName.innerHTML = "Germany";
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
