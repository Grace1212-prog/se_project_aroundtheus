import { modals } from "../constants.js";
import Card from "./Card.js";

export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEsc = (evt) => {
      this._handleEsc(evt);
    };
  }

  open() {
    //open popup
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEsc);
  }

  close() {
    //close popup

    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEsc);
  }

  _handleEscClose(evt) {
    //listen for esc buttons
    const key = evt.key;
    if (key === "Escape") {
      //const openedModal = document.querySelector(".modal_opened");
      this.close();
    }
  }

  setEventListeners() {
    //sets event listeners
    this._popupElement.addEventlistener("click", (evt) => {
      if (evt.target.classList.contains("modal_opened")) {
        this.close();
      }
      if (evt.target.classList.contains("modal__close")) {
        this.close();
      }
    });
  }
}
