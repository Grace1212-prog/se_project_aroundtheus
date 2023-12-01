import Popup from "./Popup.js";
import { modalImage, modalTitle } from "../constants.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._modalImage = this._popupElement.querySelector(
      ".modal__image_preview"
    );
    this._modalTitle = document.querySelector(".modal__title_preview");
  }

  close() {
    // this._popupImage.reset();
    super.close();
  }

  open(cardData) {
    this._modalImage.src = cardData.link;
    this._modalImage.alt = cardData.name;
    this._modalTitle.textContent = cardData.name;
    super.open();
  }
}
