//* Создайте класс PopupWithForm, который наследует от Popup. Этот класс:

//! Кроме селектора попапа принимает в конструктор колбэк сабмита формы.

//! Содержит приватный метод _getInputValues, который собирает данные всех полей формы.

//! Перезаписывает родительский метод setEventListeners.

//! Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.

//! Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
//! Для каждого попапа создавайте свой экземпляр класса PopupWithForm

import { Popup } from "./Popup.js";
import { configValidation } from "./index.js"; // Поправить

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    this.form = this.popupSelector.querySelector(configValidation.formSelector);
  }

  //* собирает данные всех полей формы.
  _getInputValues() {
    return [...this.form.querySelectorAll(".popup__input")].reduce(
      (acc, input) => {
        acc[input.name] = input.value;
        return acc;
      },
      {}
    );
  }

  setEventListeners() {
    super.setEventListeners();

    this.form.addEventListener("submit", e => {
      e.preventDefault();
      this.handleFormSubmit(this._getInputValues());

      this.close();
    });
  }

  close() {
    super.close();
    this.form.reset();
  }
}
