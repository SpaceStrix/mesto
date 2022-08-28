//* принимает в конструктор объект настроек с селекторами и классами формы;
//* принимает вторым параметром элемент той формы, которая валидируется;
//* имеет приватные методы, которые обрабатывают форму: проверяют валидность поля, изменяют состояние кнопки сабмита, устанавливают все обработчики;
//* имеет публичный метод enableValidation, который включает валидацию формы.
//* Для каждой проверяемой формы создайте экземпляр класса FormValidator.


// !const configValidation = {
//b     formSelector: '.popup__form',
//b     inputSelector: '.popup__input',
//b     submitButtonSelector: '.popup__btn-safe',
//b     inactiveButtonClass: 'popup__btn-safe_disabled',
//b     inputErrorClass: 'popup__input_type_error',
//b     errorClass: 'popup__input-error_active'
// }


export default class FormValidator {
    constructor(configForm, form) {
        this.configForm = configForm
        this.form = form
    }

    _showInputError(input, errorMessage) {
        const formInputError = this.form.querySelector(`.${input.id}-error`)
        input.classList.add(this.configForm.inputErrorClass)
        formInputError.classList.add(this.configForm.errorClass)
        formInputError.textContent = errorMessage
    }

    _hideInputError(input) {
        const formInputError = this.form.querySelector(`.${input.id}-error`)
        input.classList.remove(this.configForm.inputErrorClass)
        formInputError.classList.remove(this.configForm.errorClass)
        formInputError.textContent = ''
    }


    _checkInputValidity(input) {
        if (!input.validity.valid) {
            this._showInputError(input, input.validationMessage)
        } else {
            this._hideInputError(input)
        }
    }

    _hasInvalidInput() {
        return this.inputList.some(input => {
            return !input.validity.valid
        })
    }

    _toggleButtonState() {
        if (this._hasInvalidInput(this.inputList)) {
            this._disableBtn()
        } else {
            this._enableBtn()
        }
    }

    _disableBtn() {
        this.btnForm.classList.add(this.configForm.inactiveButtonClass)
        this.btnForm.setAttribute('disabled', true)
    }
    _enableBtn() {
        this.btnForm.classList.remove(this.configForm.inactiveButtonClass)
        this.btnForm.removeAttribute('disabled', false)
    }


    resetForm() {
        this._disableBtn()
        this.form.reset()
    }


    _setEventListeners() {
        this.inputList = [...this.form.querySelectorAll(this.configForm.inputSelector)]
        this.btnForm = this.form.querySelector(this.configForm.submitButtonSelector)

        this.inputList.forEach(input => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input)
                this._toggleButtonState()
            })
        });

        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
        })
    }

    enableValidation() {
        this._setEventListeners()
    }

}