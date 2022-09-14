import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector, popupFigureCaption, popupFigureImg) {
    super(popupSelector);
    this._popupFigureCaption =
      this._popupSelector.querySelector(popupFigureCaption);
    this._popupFigureImg = this._popupSelector.querySelector(popupFigureImg);
  }

  open(name, link) {
    super.open();
    this._popupFigureCaption.textContent = name;
    this._popupFigureImg.alt = name;
    this._popupFigureImg.src = link;
  }
}
