export class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(`${popupSelector}`);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.key === "Escape") this.close();
  }

  setEventListeners() {
    this._popupSelector.addEventListener("mousedown", e => {
      if (
        e.target.classList.contains("popup__close") ||
        e.target.classList.contains("popup_opened")
      )
        this.close();
    });
  }
}
