export default class FormValidation {
constructor({ formEl, inputEl }, enableValidation, options) {
    this._formEl = formEl;
    this._inputEl = inputEl;
    enableValidation = enableValidation;
    this._options = options;
  }

  _checkInputValidity(this._formEl, this._inputEl, this._options) {
    if (!this._inputEl.validity.valid) {
        return _showInputError(this._formEl, this._inputEl, this._options);
    }
    _hideInputError(this._formEl, this._inputEl, this._options);
  }

  _showInputError(this._formEl, this._inputEl, { inputErrorClass, errorClass }) {
    const errorMessageEl = this._formEl.querySelector(`#${this._inputEl.id}-error`);
    this._inputEl.classList.add(inputErrorClass);
    errorMessageEl.textContent = this._inputEl.validationMessage;
     errorMessageEl.classList.add(errorClass);
  }

  _hideInputError(this._formEl, this._inputEl, { inputErrorClass, errorClass }) {
  const errorMessageEl = this._formEl.querySelector(`#${this._inputEl.id}-error`);
  this._inputEl.classList.remove(inputErrorClass);
  errorMessageEl.textContent = "";
  errorMessageEl.classList.remove(errorClass);
}

  _setEventListeners(this._formEl, this._options) {
const {inputSelector, submitButtonSelector} = this._options;
const inputEls = [...formEl.querySelectorAll(inputSelector)];
const submitButton = formEl.querySelector(submitButtonSelector);

 inputEls.forEach((inputEl) => {
    this._inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEl, inputEl, options);
      toggleButtonState(inputEls, submitButton, options);
    });
  });
  }

 hasInvalidInput(inputList) {
  return !inputList.every((inputEl) => inputEl.validity.valid);
}

toggleButtonState(inputEls, submitButton, { inactiveButtonClass }) {
  if (hasInvalidInput(inputEls)) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
    return;
  }
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
}

  //enables form validation

  enableValidation() {
    const formEls = [...document.querySelectorAll(this._options.formSelector)];

    formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListeners(formEl, options);
  });

    const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",

  
}

enableValidation(config);

  }
}
  
    
