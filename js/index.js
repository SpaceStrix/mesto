let body = document.querySelector('.body');

// форма
let formElement = document.forms['popup__form'];
let nameInput = formElement.elements['name'];
let jobInput = formElement.elements['about-me'];

// поля профиля
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__job');

let popup = document.querySelector('.popup');
let editProfile = document.querySelector('.profile__edit');

body.addEventListener('click', closePopupHandler);

// события
function formSubmitHandler(e) {
	e.preventDefault();

	setTextContentValue();
	closePopup(popup);
}

function closePopupHandler(e) {
	const target = e.target;
	const currentPopup = target.closest('.popup');
	if (target.classList.contains('popup__close') || target === currentPopup) {
		closePopup(currentPopup);
	}
}

function setTextContentValue() {
	profileName.textContent = nameInput.value;
	profileProfession.textContent = jobInput.value;
}

function setPopupFieldValue() {
	nameInput.value = profileName.textContent;
	jobInput.value = profileProfession.textContent;
}

function openPopup(popup) {
	popup.classList.add('popup_opened');
}
function closePopup(popup) {
	popup.classList.remove('popup_opened');
}

editProfile.addEventListener('click', function() {
	openPopup(popup);
	setPopupFieldValue();
});

formElement.addEventListener('submit', formSubmitHandler);
