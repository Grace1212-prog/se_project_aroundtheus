import Popup from "./Popup.js";
import { modalImage, modalTitle } from "../constants.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._modalImage = document.querySelector(
      ".modal__image_preview"
    );
    this._modalTitle = document.querySelector(".modal__title_preview");
  }

  close() {
    // this._popupImage.reset();
    super.close();
  }

  open({ name, link }) {
    this._modalImage.src = link;
    this._modalImage.alt = `image of ${name}`;
    this._modalTitle.textContent = name;
    super.open();
  }
}
