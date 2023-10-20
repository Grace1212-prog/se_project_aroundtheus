export default class FormValidation {
  constructor(formEl, options) {
    this._formEl = formEl;
    this._formSelector = options.formSelector;
    this._inputSelector = options.inputSelector;
    this._submitButtonSelector = options.submitButtonSelector;
    this._inactiveButtonClass = options.inactiveButtonClass;
    this._inputErrorClass = options.inputErrorClass;
    this._errorClass = options.errorClass;
  }

  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      return this._showInputError();
    }
    this._hideInputError();
  }

  _showInputError({ inputErrorClass, errorClass }) {
    const errorMessageEl = this._formEl.querySelector(
      `#${this._inputEl.id}-error`
    );
    this._inputEl.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = this._inputEl.validationMessage;
    errorMessageEl.classList.add(this._errorClass);
  }

  _hideInputError({ inputErrorClass, errorClass }) {
    const errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    this._inputEl.classList.remove(this._inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this._errorClass);
  }

  _setEventListeners() {
    const { inputSelector, submitButtonSelector } = this._options;
    this._inputEls = [...this._formEl.querySelectorAll(this._inputSelector)];
    this._submitButton = this._formEl.querySelector(this._submitButtonSelector);

    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        this._checkInputValidity(inputEl);
        this._toggleButtonState();
      });
    });
  }

  hasInvalidInput(inputList) {
    return !inputList.every((inputEl) => inputEl.validity.valid);
  }

  toggleButtonState(inputEls, submitButton, { inactiveButtonClass }) {
    if (hasInvalidInput()) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
      return;
    }
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  //enables form validation

  enableValidation() {
    formEls.forEach(() => {
      this._formEl.addEventListener("submit", (e) => {
        e.preventDefault();
      });

      setEventListeners();
    });

    enableValidation();
  }
}

// enabling validation by calling enableValidation()
// pass all the settings on call
//look for inputs inside of form
//loop through all the inputs to see if all are valid
//if input is not valid
// get validation message
//add error class to input
//display error message
// disable button
//if all inputs are valid
// enable button
//reset error messages
