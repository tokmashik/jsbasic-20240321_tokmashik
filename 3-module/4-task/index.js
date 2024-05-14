function showSalary(users, age) {
  let array = users.filter(function(user) {
    return user.age < age;
  });
  const str = array.map((i) => `${i.name} ${i.balance}`)
  return str.join('\n')
}

let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 45,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user2 = {
  "balance": "$65",
  "picture": "https://placehold.it/32x32",
  "age": 35,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user3 = {
  "balance": "$65",
  "picture": "https://placehold.it/32x32",
  "age": 20,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let users = [user1, user2, user3]

showSalary(users, 40)