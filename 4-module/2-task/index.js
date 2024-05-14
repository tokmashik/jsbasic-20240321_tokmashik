function makeDiagonalRed(table) {
  let rows = table.querySelectorAll('tr');
  let i = 0, data = [];
  for (let row of rows) {
    data[i] = row.children[i].textContent;
    row.children[i].style = "background-color: red";
    i++;
  }
  return data;
}
