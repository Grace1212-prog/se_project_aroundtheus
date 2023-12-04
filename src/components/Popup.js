import { modals } from "../constants.js";
import Card from "./Card.js";

export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(
      ".modal_open");
    this._closeModalButton = document.querySelector(".modal__close");
  }

  open() {
    //open popup
    this._popupElement.classList.add("modal_opened");
    this.setEventListeners();
  }

  close() {
    //close popup

    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
    document.removeEventListener("click", this._handdleOverlayClose);
    this._closeModalButton.removeEventListener(
      "click",
      this._handleClickButtonClose
    );
  }

  _handleEscClose(evt) {
    //listen for esc buttons
    const key = evt.key;
    if (key === "Escape") {
      this.close();
    }
  }

  _handdleOverlayClose = (evt) => {
    if (evt.target.classList.contains("modal_opened")) {
      this.close();
    }
  };

  _handleClickButtonClose = () => {
    this.close();
  };

  setEventListeners() {
    //sets event listeners
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("click", this._handdleOverlayClose);
    this._closeModalButton.addEventListener(
      "click",
      this._handleClickButtonClose
    );
  }
}
