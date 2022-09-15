import { Popup } from "../components/Popup.js";

export class PopupWithForm extends Popup {
  constructor(popup, handleFormSubmit) {
    super(popup);
    this.handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
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

      this.close();
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
}
