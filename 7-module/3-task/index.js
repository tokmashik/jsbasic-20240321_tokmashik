export default class StepSlider {
  elem = ''

  constructor({ steps, value = 0 }) {
    this.initSlider(steps)
  }

  initSlider(steps) {
    const slider = document.createElement("div");
    slider.classList.add('slider');

    const sliderThumb = document.createElement("div");
    sliderThumb.classList.add('slider__thumb');
    slider.appendChild(sliderThumb)

    const span = document.createElement("span");
    span.classList.add('slider__value');
    sliderThumb.style.left = "0%"
    sliderThumb.appendChild(span)

    const sliderProgress = document.createElement("div");
    sliderProgress.classList.add('slider__progress');
    // sliderProgress.style.width = "50%"; 
    slider.appendChild(sliderProgress)

    const elementDiv = document.createElement("div");
    elementDiv.classList.add('slider__steps');
    slider.appendChild(elementDiv)

    for ( let step = 0; step < steps; step++) {
      const s = new Step(step);
      // console.log(productCard.elem);
      
      elementDiv.appendChild(s.elem)
    }
    elementDiv.childNodes[0].classList.add('slider__step-active');
    slider.addEventListener('click', (event) => {

      let left = event.clientX - this.elem.getBoundingClientRect().left; 
      let leftRelative = left / this.elem.offsetWidth;
      let segments = steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100;

      console.log('left', valuePercents, value, elementDiv.childNodes);

      sliderThumb.style.left = `${valuePercents}%`;
      sliderProgress.style.width = `${valuePercents}%`;
      [...elementDiv.childNodes].map((step) => step.classList.remove('slider__step-active'))
      elementDiv.childNodes[value].classList.add('slider__step-active');
      elementDiv.dispatchEvent(new CustomEvent("slider-change", {
        detail: value,
        bubbles: true,
      }))
    })

    
    
    this.elem = slider;
  }
}

class Step {
  elem = '';
  constructor(s) {
    console.log(s);

    const span = document.createElement("span");
    // event.target.classList.add('slider__step-active');

    // span.classList.add('slider__step-active');
    // elementDiv.appendChild(span)

    // const slider = document.getElementsByClassName("slider");
    // slider.addEventListener('click', (event) => {

    //   let left = event.clientX - this.elem.getBoundingClientRect().left; 
    //   console.log('left', left);
    //   let leftPercents = 55; // Значение в процентах от 0 до 100

    //   sliderThumb.style.left = `${leftPercents}%`;
    //   sliderProgress.style.width = `${leftPercents}%`;

    //   elementСardButton.dispatchEvent(new CustomEvent("product-add", {
    //     detail: this.value,
    //     bubbles: true,
    //   }))

    // })

    this.elem = span;
  }
}