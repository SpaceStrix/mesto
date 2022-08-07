
function showInputError(form,formInput, errorMessage) {
    const formInputError = form.querySelector(`.${formInput.id}-error`)

    formInput.classList.add('popup__input_type_error')

    formInputError.classList.add('form__input-error_active')
    formInputError.textContent = errorMessage
}

function hideInputError(form,formInput) {
    const formInputError = form.querySelector(`.${formInput.id}-error`)

    formInput.classList.remove('popup__input_type_error')

    formInputError.classList.remove('form__input-error_active')
    formInputError.textContent = ''
}

function checkInputValidity(form,formInput) {
    if (!formInput.validity.valid) {
        showInputError(form,formInput, formInput.validationMessage)
    } else {
        hideInputError(form,formInput)
    }
}

function setEventListeners(form) {
    const inputList = [...form.querySelectorAll('.popup__field')]
    inputList.forEach((input)=> {
        input.addEventListener('input', ()=>{
            checkInputValidity(form,input)
        })
    })
}

function enableValidation() {
    const formList = [...document.querySelectorAll('.popup__form')]

    formList.forEach((form)=> {
        form.addEventListener('submit', (e)=>{
            e.preventDefault()
        })
        setEventListeners(form)
    })
}

enableValidation()

