function showSalary(users, age) {
  let array = users.filter(function(user) {
    return user.age <= age;
  });
  const str = array.map((i) => `${i.name}, ${i.balance}`)
  return str.join('\n')
}