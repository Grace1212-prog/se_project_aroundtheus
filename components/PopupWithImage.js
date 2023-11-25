import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupImage = this._popupElement.querySelector("#preview-image-modal");
  }

  close() {
    this._popupImage.reset();
    super.close();
  }

  open(cardData) {
    this._popupImage.src = cardData.link;
    this._popupImage.alt = cardData.name;
    this._popupTitle.textContent = cardData.name;
    super.open();
  }
}
