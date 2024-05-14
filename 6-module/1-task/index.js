let rows = [
  {
    name: 'Вася',
    age: 25,
    salary: 1000,
    city: 'Самара'
  },
  {
    name: 'Петя',
    age: 30,
    salary: 1500,
    city: 'Москва'
  }
];
export default class UserTable {
  #rows;
  #elem;
  constructor(rows) {
    this.#rows = rows;
    this.#elem = document.createElement("table");
    this.makeHTML();
  }
  get elem() {
    return this.#elem;
  }
  makeHTML() {
    let s = `      
          <thead>
          <tr>
              <th>name</th>
              <th>age</th>
              <th>salary</th>
              <th>city</th>
              <th>delete</th>
          </tr>
          </thead>
          <tbody>` + this.#rows.map(e => `
          <tr>
              <td>${e.name}</td>
              <td>${e.age}</td>
              <td>${e.salary}</td>
              <td>${e.city}</td>
              <td><button>X</button></td>
          </tr>              
                  `).join("") + `</tbody>`;
    this.#elem.innerHTML = s;
    for (let b of this.#elem.querySelectorAll("button"))
      b.addEventListener("click", this);
  }
  handleEvent(event) {
    let row = event.target.parentElement.parentElement;
    this.#rows.splice(row.rowIndex - 1, 1);
    row.remove();
    console.log(this.#rows);
  }
}

// let table = new UserTable(rows);
// document.body.appendChild(table.elem);