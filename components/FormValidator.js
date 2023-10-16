export default class FormValidation {
  constructor(formEl, options) {
    this._formEl = formEl;
    this._options = options;
  }

  _checkInputValidity() {
    if (!this._inputEl.validity.valid) {
      return _showInputError(this._formEl, this._inputEl, this._options);
    }
    _hideInputError(this._formEl, this._inputEl, this._options);
  }

  _showInputError({ inputErrorClass, errorClass }) {
    const errorMessageEl = this._formEl.querySelector(
      `#${this._inputEl.id}-error`
    );
    this._inputEl.classList.add(inputErrorClass);
    errorMessageEl.textContent = this._inputEl.validationMessage;
    errorMessageEl.classList.add(errorClass);
  }

  _hideInputError({ inputErrorClass, errorClass }) {
    const errorMessageEl = this._formEl.querySelector(
      `#${this._inputEl.id}-error`
    );
    this._inputEl.classList.remove(inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(errorClass);
  }

  _setEventListeners() {
    const { inputSelector, submitButtonSelector } = this._options;
    this._inputEls = [...this._formEl.querySelectorAll(inputSelector)];
    this._submitButton = this._formEl.querySelector(submitButtonSelector);

    inputEls.forEach((inputEl) => {
      this._inputEl.addEventListener("input", (e) => {
        _checkInputValidity(this._formEl, this._inputEl, this._options);
        toggleButtonState(this._inputEls, this._submitButton, this._options);
      });
    });
  }

  hasInvalidInput(inputList) {
    return !inputList.every((inputEl) => inputEl.validity.valid);
  }

  toggleButtonState(inputEls, submitButton, { inactiveButtonClass }) {
    if (hasInvalidInput(this._inputEls)) {
      this._submitButton.classList.add(inactiveButtonClass);
      this._submitButton.disabled = true;
      return;
    }
    this._submitButton.classList.remove(inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  //enables form validation

  enableValidation() {
    const formEls = [...document.querySelectorAll(this._options.formSelector)];

    formEls.forEach((formEl) => {
      this._formEl.addEventListener("submit", (e) => {
        e.preventDefault();
      });

      setEventListeners(this._formEl, this._options);
    });

    enableValidation(config);
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
