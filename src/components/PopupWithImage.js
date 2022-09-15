import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup, popupFigureCaption, popupFigureImg) {
    super(popup);
    this._popupFigureCaption = this._popup.querySelector(popupFigureCaption);
    this._popupFigureImg = this._popup.querySelector(popupFigureImg);
  }

  open(name, link) {
    super.open();
    this._popupFigureCaption.textContent = name;
    this._popupFigureImg.alt = name;
    this._popupFigureImg.src = link;
  }
}
