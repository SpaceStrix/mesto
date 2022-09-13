//* Создайте класс PopupWithImage, который наследует от Popup. Этот класс должен перезаписывать родительский метод open. В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.

import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup, popupFigureCaption, popupFigureImg) {
    super(popup);
    this.popupFigureCaption = document.querySelector(popupFigureCaption);
    this.popupFigureImg = document.querySelector(popupFigureImg);
  }

  open(caption, src) {
    this.popupFigureCaption.textContent = caption;

    this.popupFigureImg.alt = caption;
    this.popupFigureImg.src = src;
    super.open();
    super.setEventListeners(); // Временно
  }
}
