const selectors = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn-safe',
    inactiveButtonClass: 'popup__btn-safe_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
}

function showInputError(form,formInput, errorMessage, selectors) {
    const formInputError = form.querySelector(`.${formInput.id}-error`)
    formInput.classList.add(selectors.inputErrorClass)
    formInputError.classList.add(selectors.errorClass)
    formInputError.textContent = errorMessage
}
function hideInputError(form,formInput,selectors) {
    const formInputError = form.querySelector(`.${formInput.id}-error`)
    formInput.classList.remove(selectors.inputErrorClass)
    formInputError.classList.remove(selectors.errorClass)
    formInputError.textContent = ''
}
function checkInputValidity(form,formInput,selectors) {
    if (!formInput.validity.valid) {
        showInputError(form,formInput, formInput.validationMessage,selectors)
    } else {
        hideInputError(form,formInput,selectors)
    }
}
function hasInvalidInput(inputList) {
   return inputList.some(input => {
       return !input.validity.valid
   })
}
function toggleButtonState(inputList, formBtn,selectors) {
    if (hasInvalidInput(inputList)) {
        formBtn.classList.add(selectors.inactiveButtonClass)
        formBtn.setAttribute('disabled', true)
    } else {
        formBtn.classList.remove(selectors.inactiveButtonClass)
        formBtn.removeAttribute('disabled', true)
    }
}
function setEventListeners(form, selectors) {
    const inputList = [...form.querySelectorAll(selectors.inputSelector)]
    const formBtn = form.querySelector(selectors.submitButtonSelector)
    toggleButtonState(inputList, formBtn , selectors)
    inputList.forEach((input)=> {
        input.addEventListener('input', ()=>{
            checkInputValidity(form,input,selectors)
            toggleButtonState(inputList, formBtn, selectors)
        })
    })
}
function enableValidation(selectors) {
    const formList = [...document.querySelectorAll(selectors.formSelector)]
    formList.forEach((form)=> {
        form.addEventListener('submit', (e)=>{
            e.preventDefault()
        })
        setEventListeners(form,selectors)
    })
}


function resetForm(selectors, form) {
    // сброс формы, текста ошибок и классов ошибок
};

enableValidation(selectors);

