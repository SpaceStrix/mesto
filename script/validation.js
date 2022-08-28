function showInputError(form, formInput, errorMessage, configValidation) {
    const formInputError = form.querySelector(`.${formInput.id}-error`)
    formInput.classList.add(configValidation.inputErrorClass)
    formInputError.classList.add(configValidation.errorClass)
    formInputError.textContent = errorMessage
}



function hideInputError(form, formInput, configValidation) {
    const formInputError = form.querySelector(`.${formInput.id}-error`)
    formInput.classList.remove(configValidation.inputErrorClass)
    formInputError.classList.remove(configValidation.errorClass)
    formInputError.textContent = ''
}



function checkInputValidity(form, formInput, configValidation) {
    if (!formInput.validity.valid) {
        showInputError(form, formInput, formInput.validationMessage, configValidation)
    } else {
        hideInputError(form, formInput, configValidation)
    }
}



function hasInvalidInput(inputList) {
    return inputList.some(input => {
        return !input.validity.valid
    })
}



function toggleButtonState(inputList, formBtn, configValidation) {
    if (hasInvalidInput(inputList)) {
        formBtn.classList.add(configValidation.inactiveButtonClass)
        formBtn.setAttribute('disabled', true)
    } else {
        formBtn.classList.remove(configValidation.inactiveButtonClass)
        formBtn.removeAttribute('disabled')
    }
}



function setEventListeners(form, configValidation) {
    const inputList = [...form.querySelectorAll(configValidation.inputSelector)]
    const formBtn = form.querySelector(configValidation.submitButtonSelector)
    toggleButtonState(inputList, formBtn, configValidation)
    inputList.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidity(form, input, configValidation)
            toggleButtonState(inputList, formBtn, configValidation)
        })
    })
}




function enableValidation(configValidation) {
    const formList = document.querySelectorAll(configValidation.formSelector)
    formList.forEach((form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault()
        })
        setEventListeners(form, configValidation)
    })
}


export {
    enableValidation,
    hideInputError
}