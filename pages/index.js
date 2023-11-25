import Card from "../components/Card.js";
import FormValidation from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";

import {
  initialCards,
  profileEditModal,
  profileEditButton,
  profileTitleInput,
  profileDescriptionInput,
  profileEditForm,
  addCardForm,
  addNewCardButton,
  modalImage,
  modalTitle,
  modals,
  cardListEL,
  previewImageModal,
  addCardModal,
  profileTitle,
  profileDescription,
} from "../utils/constants.js";

//instantiate the class
// pass submission listeners to class
// call setEventListeners

const newCardPopup = new PopupWithForm("#new-card-popup", () => {});
newCardPopup.open();
newCardPopup.close();
newCardPopup.setEventListeners();

// function closePopup(popup) {
//   document.removeEventListener("keydown", handleEscape);
//   popup.classList.remove("modal_opened");
// }

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
  //use the modal's open method
});

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
});

// function openModal(modal) {
//   document.addEventListener("keydown", handleEscape);
//   modal.classList.add("modal_opened");
// }

addNewCardButton.addEventListener("click", () => {
  addCardFormValidator.toggleButtonState();
  openModal(addCardModal);
});

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  const cardData = { name, link };
  const card = createCard(cardData);
  cardListEL.prepend(card);
  addCardForm.reset();
  closePopup(addCardModal);
}
addCardForm.addEventListener("submit", handleAddCardFormSubmit);

function createCard(cardData) {
  const card = new Card(cardData, "#card-template", (name, link) => {
    modalImage.src = cardData.link;
    modalImage.alt = cardData.name;
    modalTitle.textContent = cardData.name;
    openModal(previewImageModal);
  });
  return card.getView();
}

initialCards.forEach((cardData) => {
  const card = createCard(cardData);
  cardListEL.prepend(card);
});

//combining close button and overlay listeners together

modals.forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("modal_opened")) {
      closePopup(modal);
    }
    if (evt.target.classList.contains("modal__close")) {
      closePopup(modal);
    }
  });
});

/*[profileEditModal, addCardModal, previewImageModal].forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("modal")) {
      closePopup(modal);
    }
  });
});
*/
/*closeButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => closePopup(popup));
});*/

function handleEscape(evt) {
  const key = evt.key;
  if (key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closePopup(openedModal);
  }
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const addCardFormValidator = new FormValidation(addCardForm, config);
addCardFormValidator.enableValidation();

const profileEditModalFormValidator = new FormValidation(
  profileEditModal,
  config
);
profileEditModalFormValidator.enableValidation();
