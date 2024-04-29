let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

function sumSalary(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    typeof salary === 'number' ? sum += salary : sum += 0;
  }
}

sumSalary()
