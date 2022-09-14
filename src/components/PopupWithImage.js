//* Создайте класс PopupWithImage, который наследует от Popup. Этот класс должен перезаписывать родительский метод open. В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.

import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector, popupFigureCaption, popupFigureImg) {
    super(popupSelector);
    this.popupFigureCaption =
      this.popupSelector.querySelector(popupFigureCaption);
    this.popupFigureImg = this.popupSelector.querySelector(popupFigureImg);
  }

  open(name, link) {
    super.open();
    this.popupFigureCaption.textContent = name;
    this.popupFigureImg.alt = name;
    this.popupFigureImg.src = link;
  }
}
