import Popup from "./Popup.js";
import { modalImage, modalTitle } from "../utils/constants.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupImage = this._popupElement.querySelector(
      ".modal__image_preview"
    );
  }

  close() {
    this._popupImage.reset();
    super.close();
  }

  open(cardData) {
    modalImage.src = cardData.link;
    modalImage.alt = cardData.name;
    modalTitle.textContent = cardData.name;
    super.open();
  }
}
