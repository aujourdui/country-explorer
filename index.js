/*-------------------------------------+----------------------------------------
                                  Global TODO:
- 
---------------------------------------+--------------------------------------*/

const fetchData = async () => {
  const response = await fetch("./resources/data.json");
  const data = await response.json();
  const germanyData = data[84];
  const USData = data[239];
  const brazilData = data[31];
  const icelandData = data[103];
  const afghanistanData = data[0];
  const alandIslandsData = data[1];
  const albaniaData = data[2];
  const algeriaData = data[3];

  const createNewList = () => {
    const newList = [];
    newList.push(germanyData);
    newList.push(USData);
    newList.push(brazilData);
    newList.push(icelandData);
    newList.push(afghanistanData);
    newList.push(alandIslandsData);
    newList.push(albaniaData);
    newList.push(algeriaData);
    console.log(newList);
  };
  createNewList();
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
