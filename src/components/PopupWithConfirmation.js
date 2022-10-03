import { Popup } from "./Popup.js";

export class DeleteCard extends Popup {
  constructor(popup) {
    super(popup);
    this._form = document.querySelector(popup);
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
}
