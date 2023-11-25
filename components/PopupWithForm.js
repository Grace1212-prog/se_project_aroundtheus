import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelectorAll(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  open() {
    this._popupForm.reset();
    super.open();
  }

  _getInputValues() {
    //get all fields elements
    this._inputList = this._popupElement.querySelectorAll(".modal__input");

    // create an empty object

    this._formValues = {};

    //add the value of the fields to this object
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    //return the values object
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());

      this._popupForm.reset();
    });
  }
}
