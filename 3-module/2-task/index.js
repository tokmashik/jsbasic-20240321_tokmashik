function filterRange(arr, a, b) {
  let resultArr = [];
  arr.map((i) => { if (i < b && i >= a) resultArr.push(i) });
  return  resultArr;
}
