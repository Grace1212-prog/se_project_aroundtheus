import Card from "../components/Card.js";
import FormValidation from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import "../pages/index.css";

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
} from "../constants.js";
import Popup from "../components/Popup.js";

//instantiate the class
// pass submission listeners to class
// call setEventListeners

const popupSelector = new Popup(".modal_open");
popupSelector.setEventListeners();

const addCardPopup = new PopupWithForm({
  popupSelector: "#add-card-modal",
  handleAddCardFormSubmit,
});

//const newCardPopup = new PopupWithForm("")

const profileCardPopup = new PopupWithForm({
  popupSelector: "#profile-edit-modal",
  handleProfileFormSubmit,
});

addCardPopup.setEventListeners();

const imagePopup = new PopupWithImage("#preview-image-modal", handleImageClick);
//imagePopup.setEventListeners();

const profileInfo = new UserInfo(".profile__title", ".profile__description");

const section = new Section({ initialCards, createCard }, cardListEL);

// function closePopup(popup) {
//   document.removeEventListener("keydown", handleEscape);
//   popup.classList.remove("modal_opened");
// }

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileCardPopup.open();
  //use the modal's open method
});

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  profileEditModal.close();
});

// function openModal(modal) {
//   document.addEventListener("keydown", handleEscape);
//   modal.classList.add("modal_opened");
// }

addNewCardButton.addEventListener("click", () => {
  addCardFormValidator.toggleButtonState();
  //newCardPopup.open();
  addCardPopup.open();
});

function handleAddCardFormSubmit() {
  //evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard = ({ name, link }, cardListEL);
  addCardPopup.open();
  //addCardPopup.close();
}

function handleProfileFormSubmit(profileEditModal) {
  newUserInfo.setUserInfo({
    name: nameInput.value,
    job: jobInput.value,
  });
  profileCardPopup.close(profileEditModal);
}

function handleImageClick({ link, name }) {
  modalImage.src = link;
  modalImage.alt = name;
  imagePopup.open();
}

modalImage.addEventListener("click", handleImageClick);
// imagePopup.addEventListener("click", () => {
//   handleImageClick
//   //previewImageModal.open();
// });
addCardForm.addEventListener("submit", handleAddCardFormSubmit);

export function createCard(cardData) {
  const card = new Card(cardData, "#card-template");
  return card.getView();
}

initialCards.forEach((cardData) => {
  const card = createCard(cardData);
  cardListEL.prepend(card);
});

//combining close button and overlay listeners together

// modals.forEach((modal) => {
//   modal.addEventListener("mousedown", (evt) => {
//     if (evt.target.classList.contains("modal_opened")) {
//       closePopup(modal);
//     }
//     if (evt.target.classList.contains("modal__close")) {
//       closePopup(modal);
//     }
//   });
// });

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

// function handleEscape(evt) {
//   const key = evt.key;
//   if (key === "Escape") {
//     const openedModal = document.querySelector(".modal_opened");
//     closePopup(openedModal);
//   }
// }
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
