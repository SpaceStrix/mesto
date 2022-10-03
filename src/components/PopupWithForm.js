import { Popup } from "../components/Popup.js";

export class PopupWithForm extends Popup {
  constructor(popup, handleFormSubmit) {
    super(popup);
    this.handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._btnForm = this._form.querySelector(".popup__btn-safe");

    this._btnTextDefault = this._btnForm.textContent;
  }

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
    });
  }

  setInputValues(data) {
    this._inputList.forEach(input => {
      input.value = data[input.name];
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  loadProcess(status) {
    status
      ? (this._btnForm.textContent = "Сохранение...")
      : (this._btnForm.textContent = this._btnTextDefault);
  }
}
