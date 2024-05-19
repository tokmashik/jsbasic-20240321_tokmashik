import createElement from '../../assets/lib/create-element.js';

export default class Modal {

  elem = ''
  title = ''
  body = undefined

  constructor() {

  }

  setTitle(title) {
    this.title = title
  }

  setBody(body) {
    this.body = body
  }

  close() {
    document.body.classList.remove('is-modal-open')
    document.body.removeChild(this.elem)
  }

  open() {
    const div = document.createElement('div')
    div.classList.add('modal')
    document.body.appendChild(div)

    const modalOverlay = document.createElement('div')
    modalOverlay.classList.add('modal__overlay')
    div.appendChild(modalOverlay)

    const modalInner = document.createElement('div')
    modalInner.classList.add('modal__inner')
    div.appendChild(modalInner)

    const modalHeader = document.createElement('div')
    modalHeader.classList.add('modal__header')
    modalInner.appendChild(modalHeader)

    const modalTitle = document.createElement('h3')
    modalTitle.classList.add('modal__title')
    modalTitle.innerHTML = this.title
    modalHeader.appendChild(modalTitle)

    const modalBody = document.createElement('div')
    modalBody.classList.add('modal__body')
    console.log(this.body);
    modalBody.appendChild(this.body)
    modalInner.appendChild(modalBody)

    const elementСardButton = document.createElement("button");
    elementСardButton.classList.add('modal__close');
    const img2 = document.createElement('img');
    img2.src = '../../assets/images/icons/cross-icon.svg';
    elementСardButton.append(img2);
    modalHeader.append(elementСardButton)

    elementСardButton.addEventListener('click', 
      this.close.bind(this)
    )
    
    document.body.classList.add('is-modal-open')
    this.elem = div

    document.addEventListener('keydown', (event) => {
      event.code === 'Escape' ? this.close() : ''
    })
  }
}

