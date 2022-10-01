import { Popup } from "./Popup.js";

export class DeleteCard extends Popup {
  constructor(popup, handleFormSubmit) {
    super(popup);
    this._form = document.querySelector(popup);
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", e => {
      e.preventDefault();
      this._handleFormSubmit(this);
    });
  }

  handleDeleteCard(data) {
    this._handleFormSubmit = data;
  }

  open() {
    super.open();
  }
}
