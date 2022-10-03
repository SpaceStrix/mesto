import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._imgCaption = this._popup.querySelector(".img-container__title");
    this._imgFigure = this._popup.querySelector(".img-container__img");
  }

  open(name, link) {
    super.open();
    this._imgCaption.textContent = name;
    this._imgFigure.alt = name;
    this._imgFigure.src = link;
  }
}
