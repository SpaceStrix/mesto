// форма
let formElement = document.querySelector('.popup__form');
// поля формы
let nameInput = document.querySelector('.popup__name-field');
let jobInput = document.querySelector('.popup__job-field');
// поля профиля
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__job');
// зактырие popUp'a
let popupClose = document.querySelector('.popup__close');
// открытие popUp'a
let editProfile = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');

// Лайк Active
// let parentsElements = document.querySelector('.elements');

// события
function formSubmitHandler(e) {
	e.preventDefault();

	profileName.textContent = nameInput.value;
	profileProfession.textContent = jobInput.value;
}
function openPopUpHandler() {
	popup.classList.add('popup-visible');

	nameInput.value = profileName.textContent;
	jobInput.value = profileProfession.textContent;
}
function closePopupHandler() {
	popup.classList.remove('popup-visible');
}
// function putLikeHandler(e) {
// 	if (e.target.tagName === 'BUTTON') {
// 		e.target.classList.toggle('element__like_active');
// 	}
// }

editProfile.addEventListener('click', openPopUpHandler);
popupClose.addEventListener('click', closePopupHandler);
formElement.addEventListener('submit', formSubmitHandler);
// parentsElements.addEventListener('click', putLikeHandler);
