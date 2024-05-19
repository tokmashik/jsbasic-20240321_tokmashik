let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: NaN,
  isPayed2: Infinity,
}

function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (typeof salaries[key] === 'number' && isFinite(salaries[key]) ) {
      // console.log(salaries[key])
      sum += salaries[key];
    }
  }
  // console.log(sum)
  return sum;
}

sumSalary(salaries)
