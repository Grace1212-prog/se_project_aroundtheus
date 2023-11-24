import Card from "./Card.js";

export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    //open popup
    modal.classList.add("modal_opened");
  }

  close() {
    //close popup
    this._popupElement.classList.remove("modal_opened");
  }

  _handleEscClose() {
    //listen for esc buttons
    const key = evt.key;
    if (key === "Escape") {
      const openedModal = document.querySelector(".modal_opened");
      closePopup(openedModal);
    }
  }

  setEventListeners() {
    //sets event listeners
    this._popupElement.forEach((popupSelector) => {
      popupSelector.addEventlistener("click", (evt) => {
        if (evt.target.classList.contains("modal_opened")) {
          closePopup(modal);
        }
        if (evt.target.classList.contains("modal__close")) {
          closePopup(modal);
        }
      });
    });
  }
}
