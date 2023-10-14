export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick, cardImageEL) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._cardImageEL = cardImageEL;
  }

  _setEventListeners() {
    //".card__like-button"
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });
    //".card__delete-button"
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
    //image preview
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleImageClick(this);
      });
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }
  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }
  _handleImageClick() {
    this._cardElement
      .querySelector(".card__image")
      .classList.add("modal_opened");
  }

  getView() {
    // const cardElement = cardTemplate.cloneNode(true);
    // const cardTemplate =
    //   document.querySelector("#card-template").content.firstElementChild;
    const cardData = (this._name, this._link);

    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    //get the card view
    const cardImageEL = this._cardElement.querySelector(".card__image");
    cardImageEL.src = cardData.link;
    cardImageEL.alt = cardData.name;

    const cardTitleEL = this._cardElement.querySelector(".card__title");
    cardTitleEL.textContent = cardData.name;
    //set event listeners
    this._setEventListeners();
    //return the card
    return this._cardElement;
  }
}
