function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  ul.innerHTML = friends.map(e => `<li>${Object.values(e).join(' ')}</li>`).join('');
  return ul;
}
