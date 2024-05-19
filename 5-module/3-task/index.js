function initCarousel() {
  const right = document.querySelector('.carousel__arrow_right');
  const left = document.querySelector('.carousel__arrow_left');
  const slide = document.querySelector('.carousel__inner');

  left.style.display = 'none'

  let counter = 0;

  right.addEventListener('click', () => {
    left.style.display = ''
    counter = counter + 1;
    slide.style.transform = `translateX(-${slide.offsetWidth * counter}px)`
    if (counter === 3) {
      right.style.display = 'none'
    }
  })

  left.addEventListener('click', () => {
    right.style.display = ''
    counter = counter - 1;
    slide.style.transform = `translateX(-${slide.offsetWidth * counter}px)`

    console.log(counter);
    if (!counter) {
      left.style.display = 'none'
    }
  })
};

