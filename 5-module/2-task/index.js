function toggleText() {
  let toggleButton = document.querySelector('.toggle-text-button');
  let textElement = document.getElementById('text');

  toggleButton.addEventListener('click', () => {
    console.log(textElement.hidden);
    if (textElement.hidden === true){
      textElement.hidden = false;
      console.log(2, textElement.hidden);
    } else {
      textElement.hidden = true;
    }
  });
}
