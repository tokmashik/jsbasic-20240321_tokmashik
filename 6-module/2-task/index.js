export default class ProductCard {

  elem = '';
  constructor(product) {
    const elementDiv = document.createElement("div");

    elementDiv.classList.add('card');
    elementDiv.id = 'card';

    const elementСardDiv = document.createElement("div");
    elementСardDiv.classList.add('card__top');
    elementDiv.appendChild(elementСardDiv)

    const img = document.createElement('img');
    img.src = `assets/images/products/${product.image}`;
    img.classList.add('card__image');
    elementСardDiv.append(img);

    const elementPriceSpan = document.createElement("span");
    elementPriceSpan.classList.add('card__price');
    elementСardDiv.appendChild(elementPriceSpan)
    elementPriceSpan.innerHTML = `€${product.price.toFixed(2)}`

    const elementСardBodyDiv = document.createElement("div");
    elementСardBodyDiv.classList.add('card__body');
    elementСardBodyDiv.id = 'card__body';
    elementDiv.append(elementСardBodyDiv)

    const elementСardTitle = document.createElement("div");
    elementСardTitle.classList.add('card__title');
    elementСardTitle.innerHTML = `${product.name}`;
    elementСardBodyDiv.append(elementСardTitle)

    const elementСardButton = document.createElement("button");
    elementСardButton.classList.add('card__button');
    const img2 = document.createElement('img');
    img2.src = 'assets/images/icons/plus-icon.svg';
    elementСardButton.append(img2);
    elementСardBodyDiv.append(elementСardButton)

    elementСardButton.addEventListener('click', () => {
      elementСardButton.dispatchEvent(new CustomEvent("product-add", {
        detail: product.id,
        bubbles: true,
      }))
    })

    this.elem = elementDiv;
    }
}