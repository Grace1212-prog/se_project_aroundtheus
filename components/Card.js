// export default class Card {
//   constructor({ name, link }, cardSelector, handleImageClick) {
//     this._name = name;
//     this._link = link;
//     this._cardSelector = cardSelector;
//     this._handleImageClick = handleImageClick;
//   }

//   _setEventListeners() {
//     //".card__like-button"
//     this._cardElement
//       .querySelector(".card__like-button")
//       .addEventListener("click", () => {
//         this._handleLikeIcon(this);
//       });
//     //".card__delete-button"
//     this._cardElement
//       .querySelector(".card__delete-button")
//       .addEventListener("click", () => {
//         this._handleDeleteCard();
//       });
//     //image preview
//     this._cardElement
//       .querySelector(".card__image")
//       .addEventListener("click", () => {
//         this._handleImageClick({ link: this._link, name: this._name });
//       });
//   }

//   _handleLikeIcon() {
//     this._cardElement
//       .querySelector(".card__like-button")
//       .classList.toggle("card__like-button_active");
//   }
//   _handleDeleteCard() {
//     this._cardElement.remove();
//     this._cardElement = null;
//   }

//   _handleImageClick() {
//     this._cardElement.querySelector(".modal_image_preview");
//     this._handleImageClick.open({ link: this._link, name: this._name });
//   }
//   getView() {
//     const cardData = { link: this._link, name: this._name };

//     this._cardElement = document
//       .querySelector(this._cardSelector)
//       .content.querySelector(".card")
//       .cloneNode(true);

//     //get the card view
//     const cardImageEL = this._cardElement.querySelector(".card__image");
//     cardImageEL.src = this._link;
//     cardImageEL.alt = this._name;

//     const cardTitleEL = this._cardElement.querySelector(".card__title");
//     cardTitleEL.textContent = cardData.name;

//     //set event listeners
//     this._setEventListeners();
//     //return the card
//     return this._cardElement;
//   }
// }
export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this._name = name;

    this._link = link;

    this._cardSelector = cardSelector;

    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    //".card__like-button"

    this._cardElement

      .querySelector(".card__like-button")

      .addEventListener("click", () => {
        this._handleLikeIcon(this);
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

  getView() {
    const cardData = { link: this._link, name: this._name };

    this._cardElement = document

      .querySelector(this._cardSelector)

      .content.querySelector(".card")

      .cloneNode(true);

    //get the card view

    const cardImageEL = this._cardElement.querySelector(".card__image");

    cardImageEL.src = this._link;

    cardImageEL.alt = this._name;

    const cardTitleEL = this._cardElement.querySelector(".card__title");

    cardTitleEL.textContent = cardData.name;

    //set event listeners

    this._setEventListeners();

    //return the card

    return this._cardElement;
  }
} 