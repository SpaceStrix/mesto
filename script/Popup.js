//* ## Создайте класс `Popup`

//! Создайте класс `Popup`, который отвечает за открытие и закрытие попапа. Этот класс:

//! - Принимает в конструктор единственный параметр — селектор попапа.
//! - Содержит публичные методы `open` и `close`, которые отвечают за открытие и закрытие попапа.
//! - Содержит приватный метод `_handleEscClose`, который содержит логику закрытия попапа клавишей Esc.
//! - Содержит публичный метод `_setEventListeners`, который добавляет слушатель клика иконке закрытия попапа.

export class Popup {
  constructor(popupSelector) {
    this.popupSelector = document.querySelector(`${popupSelector}`);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this.popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this.popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.key === "Escape") this.close();
  }

  setEventListeners() {
    this.popupSelector.addEventListener("click", e => {
      if (
        e.target.classList.contains("popup__close") ||
        e.target.classList.contains("popup_opened")
      )
        this.close();
    });
  }
}
