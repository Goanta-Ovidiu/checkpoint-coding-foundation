function zipStrings(strA, strB) {
  let arrA = strA.split("");
  let arrB = strB.split("");
  let count = 0;
  if (arrA.length > arrB.length) {
    count = arrA.length;
  } else {
    count = arrB.length;
  }
  let arrTogether = [];
  for (let i = 0; i < count; i++) {
    if (arrA[i] !== undefined) {
      arrTogether.push(arrA[i]);
    }
    if (arrB[i] !== undefined) {
      arrTogether.push(arrB[i]);
    }
  }
  return arrTogether.join("");
}
