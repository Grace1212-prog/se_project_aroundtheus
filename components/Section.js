
class Section {
    constructor({data, renderer}, modalContainer) {
   this._initialArray = data;
   this._renderer = renderer;

   this._modalContainer = document.querySelector(".modal__container");
    }
}