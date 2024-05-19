import createElement from '../../assets/lib/create-element.js';

export default class Carousel {

  elem = ''
  constructor(slides) {
    this.slides = slides;
    this.initCarousel()
  }

  initCarousel() {
    const carousel = document.createElement("div");
    carousel.classList.add('carousel');

    const arrowRight = document.createElement("div");
    arrowRight.classList.add('carousel__arrow');
    arrowRight.classList.add('carousel__arrow_right');
    const imgArrowRight = document.createElement('img');
    imgArrowRight.src = `../../assets/images/icons/angle-icon.svg`;
    arrowRight.appendChild(imgArrowRight)
    carousel.appendChild(arrowRight)

    const arrowLeft = document.createElement("div");
    arrowLeft.classList.add('carousel__arrow');
    arrowLeft.classList.add('carousel__arrow_left');
    const imgArrowLeft = document.createElement('img');
    imgArrowLeft.src = `../../assets/images/icons/angle-left-icon.svg`;
    arrowLeft.appendChild(imgArrowLeft)
    carousel.appendChild(arrowLeft)

    const inner = document.createElement("div");
    inner.classList.add('carousel__inner');
    carousel.appendChild(inner)

    console.log(33, this.slides);
    this.slides.map((slide) => { 
      const productCard = new ProductCard(slide);
      console.log(productCard.elem);
      inner.appendChild(productCard.elem)
    })

      arrowLeft.style.display = 'none'

      let counter = 0;

      arrowRight.addEventListener('click', () => {
        arrowLeft.style.display = ''
        counter = counter + 1;
        inner.style.transform = `translateX(-${inner.offsetWidth * counter}px)`
        if (counter === (this.slides.length - 1)) {
          arrowRight.style.display = 'none'
        }
      })

      arrowLeft.addEventListener('click', () => {
        arrowRight.style.display = ''
        counter = counter - 1;
        inner.style.transform = `translateX(-${inner.offsetWidth * counter}px)`
        if (!counter) {
          arrowLeft.style.display = 'none'
        }
      })
      this.elem = carousel;
  };
}

class ProductCard {

  elem = '';
  constructor(product) {
    const elementDiv = document.createElement("div");

    elementDiv.classList.add('carousel__slide');

    const elementСardDiv = document.createElement("div");
    elementСardDiv.classList.add('card__top');
    elementDiv.appendChild(elementСardDiv)

    const img = document.createElement('img');
    img.src = `../../assets/images/carousel/${product.image}`;
    img.classList.add('carousel__img');
    elementСardDiv.append(img);


    const elementCarouselCaption = document.createElement("div");
    elementCarouselCaption.classList.add('carousel__caption');
    elementСardDiv.appendChild(elementCarouselCaption)

    const elementPriceSpan = document.createElement("span");
    elementPriceSpan.classList.add('carousel__price');
    elementCarouselCaption.appendChild(elementPriceSpan)
    elementPriceSpan.innerHTML = `€${product.price.toFixed(2)}`

    const elementСardTitle = document.createElement("div");
    elementСardTitle.classList.add('carousel__title');
    elementСardTitle.innerHTML = `${product.name}`;
    elementCarouselCaption.append(elementСardTitle)

    const elementСardButton = document.createElement("button");
    elementСardButton.classList.add('carousel__button');
    const img2 = document.createElement('img');
    img2.src = '../../assets/images/icons/plus-icon.svg';
    elementСardButton.append(img2);
    elementCarouselCaption.append(elementСardButton)

    elementСardButton.addEventListener('click', () => {
      console.log(1111);
      elementСardButton.dispatchEvent(new CustomEvent("product-add", {
        detail: product.id,
        bubbles: true,
      }))
    })

    this.elem = elementDiv;
  }
}
