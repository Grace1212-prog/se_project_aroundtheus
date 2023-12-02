import { createCard } from "../pages";
import { cardListEL } from "../constants";
export default class Section {
  constructor({ items, renderer }, containerSelector) {
    //this._initialArray = data;
    this._Items = items;
    this._renderer = renderer;

    this._containerSelector = document.querySelector(containerSelector);
  }

  renderItems() {
    this.items.array.forEach((item) => {
      this._renderer(item);
    });
  }

  createCards() {
    initialCards.forEach((cardData) => {
      const card = createCard(cardData);
      cardListEL.prepend(card);
    });
  }

  addItems(item) {
    this._containerSelector.prepend(item);
  }
}
