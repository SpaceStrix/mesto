import { Popup } from "./Popup.js";

export class DeleteCard extends Popup {
  constructor(popup, handleFormSubmit) {
    super(popup);
    this._form = document.querySelector(popup);
    this._btnForm = this._form.querySelector(".popup__btn-safe");
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", () => {
      this._handleFormSubmit(this);
    });
  }

  handleDeleteCard(data) {
    this._handleFormSubmit = data;
  }

  open() {
    super.open();
  }

  loadProcess(status) {
    status
      ? (this._btnForm.textContent = "Да")
      : (this._btnForm.textContent = "Сохранение...");
  }
}
