const getIndex = (countryLength) => {
  var empArr = []
  for (let i=0; i<countryLength; i++){
    empArr.push(i)
    return i
  }
}

console.log(getIndex(8))