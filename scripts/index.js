const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg ",
  },
];

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const addCardModal = document.querySelector("#add-card-modal");
const addNewCardButton = document.querySelector(".profile__add-button");
const addCardModalCloseButton = addCardModal.querySelector(".modal__close");
const addCardForm = addCardModal.querySelector(".modal__form");
addCardForm.addEventListener("submit", handleAddCardFormSubmit);
const cardTitleInput = document.querySelector("#card-title-input");
const cardUrlInput = document.querySelector("#card-url-input");
const deleteButton = document.querySelector(".card__delete-card");

const profileEditForm = profileEditModal.querySelector(".modal__form");

const cardListEL = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

function closePopup() {
  profileEditModal.classList.remove("modal_opened");
  addCardModal.classList.remove("modal_opened");
}

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

profileEditCloseButton.addEventListener("click", () => {
  closePopup();
});

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
});

function openModal(modal) {
  modal.classList.add("modal_opened");
}

addCardModal.addEventListener("submit", () => {
  cardTitleInput.value = cardListEL.textContent;
  cardUrlInput.value = cardUrlInput.textContent;
  addCardModal.classList.add("modal_opened");
  closePopup(addCardForm);
});

addCardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  cardTitleInput.textContent = cardTitleInput.value;
  cardUrlInput.textContent = cardUrlInput.value;
  addCardForm.classList.add("modal__input");
  closePopup();
});

addNewCardButton.addEventListener("click", () => openModal(addCardModal));
addCardModalCloseButton.addEventListener("click", () =>
  closePopup(addCardModal)
);

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  const cardData = { name, link };
  const cardElement = getCardElement(cardData);
  cardListEL.prepend(cardElement);
  renderCard({ name, link }, cardsWrap);
  closePopup(addCardModal);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEL = cardElement.querySelector(".card__image");
  const cardTitleEL = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEL.src = cardData.link;
  cardImageEL.alt = cardData.name;
  cardTitleEL.textContent = cardData.name;
  return cardElement;
}

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEL.prepend(cardElement);
});
