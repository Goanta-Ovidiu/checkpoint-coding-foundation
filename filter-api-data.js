function filterApiData(apiData, mandatoryKeys) {
  let filterderArr = apiData.filter(function (items) {
    let arr = Object.keys(items);
    let check = true;
    for (let i = 0; i < mandatoryKeys.length; i++) {
      if (!arr.includes(mandatoryKeys[i])) {
        check = false;
      }
    }
    if (check === true) {
      return true;
    }
  });
  return filterderArr;
}
