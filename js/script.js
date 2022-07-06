// форма
let formElement = document.querySelector('.popup__form');
// поля формы
let nameInput = formElement.elements['name'];
let jobInput = formElement.elements['about-me'];

// поля профиля
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__job');
// зактырие popUp'a
let popupClose = document.querySelector('.popup__close');
// открытие popUp'a
let editProfile = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
// Сохранение
let safeData = document.querySelector('.popup__btn-safe');

// Лайк Active
let parentsElements = document.querySelector('.elements');

// события
function formSubmitHandler(e) {
	e.preventDefault();

	profileName.textContent = nameInput.value;
	profileProfession.textContent = jobInput.value;

	// e.keyCode === 13 ? popup.classList.remove('popup_opened') : false;
	// if (e.keyCode === 13) {
	// 	popup.classList.remove('popup_opened');
	// }
}
function openPopUpHandler() {
	popup.classList.add('popup_opened');

	nameInput.value = profileName.textContent;
	jobInput.value = profileProfession.textContent;
}
function closePopupHandler() {
	popup.classList.remove('popup_opened');
}
function safeDataHendler() {
	popup.classList.remove('popup_opened');
}

editProfile.addEventListener('click', openPopUpHandler);
popupClose.addEventListener('click', closePopupHandler);
formElement.addEventListener('submit', formSubmitHandler);
safeData.addEventListener('click', safeDataHendler);

// parentsElements.addEventListener('click', putLikeHandler);
// function putLikeHandler(e) {
// 	if (e.target.matches('.element__like')) {
// 		e.target.classList.toggle('element__like_active');
// 	}
// }
