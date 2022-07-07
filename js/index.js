// форма
let formElement = document.forms['popup__form'];
let nameInput = formElement.elements['name'];
let jobInput = formElement.elements['about-me'];

// поля профиля
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__job');

let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let editProfile = document.querySelector('.profile__edit');

// события
function formSubmitHandler(e) {
	e.preventDefault();

	profileName.textContent = nameInput.value;
	profileProfession.textContent = jobInput.value;

	closePopupHandler();
}
function openPopUpHandler() {
	popup.classList.add('popup_opened');

	nameInput.value = profileName.textContent;
	jobInput.value = profileProfession.textContent;
}
function closePopupHandler() {
	popup.classList.remove('popup_opened');
}

editProfile.addEventListener('click', openPopUpHandler);
popupClose.addEventListener('click', closePopupHandler);
formElement.addEventListener('submit', formSubmitHandler);
