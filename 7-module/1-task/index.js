import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  currentLink = undefined
  elem = ''
  constructor(categories) {
    this.categories = categories;
    this.initCarousel()
  }

  initCarousel() {
    const ribbon = document.createElement("div");
    ribbon.classList.add('ribbon');

    const ribbonArrowLeft = document.createElement("div");
    ribbonArrowLeft.classList.add('ribbon__arrow');
    ribbonArrowLeft.classList.add('ribbon__arrow_left');
    ribbonArrowLeft.classList.add('ribbon__arrow_visible');
    const imgArrowLeft = document.createElement('img');
    imgArrowLeft.src = '../../assets/images/icons/angle-icon.svg';
    ribbonArrowLeft.appendChild(imgArrowLeft)
    ribbon.appendChild(ribbonArrowLeft)

    const ribbonArrowRight = document.createElement("div");
    ribbonArrowRight.classList.add('ribbon__arrow');
    ribbonArrowRight.classList.add('ribbon__arrow_right');
    ribbonArrowRight.classList.add('ribbon__arrow_visible');
    const imgArrowRight = document.createElement('img');
    imgArrowRight.src = '../../assets/images/icons/angle-icon.svg';
    ribbonArrowRight.appendChild(imgArrowRight)
    ribbon.appendChild(ribbonArrowRight)

    const inner = document.createElement("div");
    inner.classList.add('ribbon__inner');
    ribbon.appendChild(inner)

    this.categories.map((link) => { 
      const l = new Link(link);
      inner.appendChild(l.elem)
      l.elem.addEventListener("ribbon-select", (event) => {
         if (this.currentLink) {
            this.currentLink.classList.remove('ribbon__item_active')
          }
          this.currentLink = event.target;
      })
    })
    this.elem = ribbon;

    ribbonArrowLeft.style.display = 'none'

    let counter = 0;

    ribbonArrowRight.addEventListener('click', () => {
      ribbonArrowLeft.style.display = ''
      counter = counter + 1;
      inner.scrollBy(350, 0);
    })

    ribbonArrowLeft.addEventListener('click', () => {
      ribbonArrowRight.style.display = ''
      counter = counter - 1;
      inner.scrollBy(-350, 0);
      if (!counter) {
        ribbonArrowLeft.style.display = 'none'
      }
    })
  }
}

class Link {
  elem = ''
  constructor(category) {
    const a = document.createElement("a");
    a.classList.add('ribbon__item');
    a.title = `${category.name}`;
    a.innerHTML = `${category.name}`;
    // a.('data-id');
    // a.attr('href', '#');
    const attrs = document.createAttribute("data-id");
    attrs.value = category.id;
    a.setAttributeNode(attrs);
    // console.log(a);
    a.addEventListener('click', (event) => {
      event.preventDefault()
      a.classList.add('ribbon__item_active');
      a.dispatchEvent(new CustomEvent("ribbon-select", {
        detail: category.id,
        bubbles: true,
      }))
    })
    this.elem = a;
  }
}