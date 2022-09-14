import { Popup } from "../components/Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    this._form = this._popupSelector.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
  }

  //* собирает данные всех полей формы.
  _getInputValues() {
    return [...this._inputList].reduce((acc, input) => {
      acc[input.name] = input.value;
      return acc;
    }, {});
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", e => {
      e.preventDefault();
      this.handleFormSubmit(this._getInputValues());

      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
