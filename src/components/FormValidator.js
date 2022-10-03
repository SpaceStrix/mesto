export class FormValidator {
  constructor(configForm, form) {
    this._configForm = configForm;
    this._form = form;
  }

  _showInputError(input, errorMessage) {
    const formInputError = this._form.querySelector(`.${input.id}-error`);
    input.classList.add(this._configForm.inputErrorClass);
    formInputError.classList.add(this._configForm.errorClass);
    formInputError.textContent = errorMessage;
  }

  _hideInputError(input) {
    const formInputError = this._form.querySelector(`.${input.id}-error`);
    input.classList.remove(this._configForm.inputErrorClass);
    formInputError.classList.remove(this._configForm.errorClass);
    formInputError.textContent = "";
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  _hasInvalidInput() {
    return this.inputList.some(input => {
      return !input.validity.valid;
    });
  }

  _toggleButtonState() {
    this._hasInvalidInput(this.inputList)
      ? this._disableBtn()
      : this._enableBtn();
  }

  _disableBtn() {
    this.btnForm.classList.add(this._configForm.inactiveButtonClass);
    this.btnForm.setAttribute("disabled", true);
  }
  _enableBtn() {
    this.btnForm.classList.remove(this._configForm.inactiveButtonClass);
    this.btnForm.removeAttribute("disabled", false);
  }

  resetValidation() {
    this._disableBtn();

    this.inputList.forEach(input => {
      this._hideInputError(input);
    });
  }

  _setEventListeners() {
    this.inputList = [
      ...this._form.querySelectorAll(this._configForm.inputSelector),
    ];
    this.btnForm = this._form.querySelector(
      this._configForm.submitButtonSelector
    );

    this.inputList.forEach(input => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
