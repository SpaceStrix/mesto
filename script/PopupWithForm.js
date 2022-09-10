//* Создайте класс PopupWithForm, который наследует от Popup. Этот класс:

//! Кроме селектора попапа принимает в конструктор колбэк сабмита формы.

//! Содержит приватный метод _getInputValues, который собирает данные всех полей формы.

//! Перезаписывает родительский метод setEventListeners.

//! Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.

//! Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
//! Для каждого попапа создавайте свой экземпляр класса PopupWithForm

import { Popup } from "./Popup.js";
import { configValidation } from "./index.js";

export class PopupWithForm extends Popup {
  constructor(popup, formSubmit) {
    super(popup);
    this.form = this.popup.querySelector(configValidation.formSelector);
    this.formSubmit = formSubmit;
  }

  //* собирает данные всех полей формы.
  _getInputValues() {
    const { elements } = this.form;
    const { name, about } = elements;
    const valuesInput = {
      name: name.value,
      job: about.value,
    };
    return valuesInput;
  }

  setEventListeners() {
    super.setEventListeners();
    this.popup.addEventListener("submit", this.formSubmit);
  }

  close() {
    super.close();
    this.form.reset();
  }

  open() {
    super.open();
  }
}
