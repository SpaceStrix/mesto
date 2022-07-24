const initialCards = [
	{
		name: 'Большая голубая дыра',
		link: './images/elem-1.jpg'
	},
	{
		name: 'Амазонка',
		link: './images/elem-2.jpg'
	},
	{
		name: 'Большой Барьерный риф',
		link: './images/elem-3.jpg'
	},
	{
		name: 'Антарктида ',
		link: './images/elem-4.jpg'
	},
	{
		name: 'Мадагаскар',
		link: './images/elem-5.jpg'
	},
	{
		name: 'Байкал',
		link: './images/elem-6.jpg'
	}
];

const body = document.querySelector('.body');
const template = document.querySelector('.element').content;
const containerElements = document.querySelector('.elements');

const formProfile = document.forms['popup__form-profile'];
const formInputName = formProfile.elements['name'];
const formInputJob = formProfile.elements['about-me'];

const formCreateElement = document.forms['popup__form_create-element'];
const formElementTitle = formCreateElement.elements['element-title'];
const formElementImages = formCreateElement.elements['element-img'];

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__job');
const profileEdit = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');

const popupAddElement = document.querySelector('.popup_type_new-card');
const buttonAddElement = document.querySelector('.profile__add-item');
const popupImg = document.querySelector('.popup_type_image');

// event
body.addEventListener('click', closePopupHandler);
buttonAddElement.addEventListener('click', () => {
	openPopup(popupAddElement);
});
profileEdit.addEventListener('click', function() {
	openPopup(popup);
	setPopupFieldValue();
});
formProfile.addEventListener('submit', handleFormSubmit);
formCreateElement.addEventListener('submit', createElementHandler);

// popup
function handleFormSubmit(e) {
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
	profileName.textContent = formInputName.value;
	profileProfession.textContent = formInputJob.value;
}
function setPopupFieldValue() {
	formInputName.value = profileName.textContent;
	formInputJob.value = profileProfession.textContent;
}
function openPopup(popup) {
	popup.classList.add('popup_opened');
}
function closePopup(popup) {
	popup.classList.remove('popup_opened');
}

//card
function openPopupImages(e) {
	const target = e.target;
	const img = target.src;
	const title = target.alt;

	setValuePopupImg(img, title);
	openPopup(popupImg);
}
function setValuePopupImg(img, title) {
	let getSrcPopupImg = popupImg.querySelector('.img-container__img');
	let getTitlePopupImg = popupImg.querySelector('.img-container__title');

	getSrcPopupImg.setAttribute('src', img);
	getTitlePopupImg.textContent = title;
}
function deleteHandler(e) {
	const target = e.target;
	deleteElement(target.closest('.element'));
}
function handleLikeBtn(e) {
	const target = e.target;
	target.classList.toggle('element__like_active');
}
function deleteElement(elem) {
	elem.remove();
}
function addElementInHtml(initialCards) {
	initialCards.forEach((item) => {
		renderElement(item.link, item.name);
	});
}
function renderElement(src, name) {
	const cloneElement = template.querySelector('.element').cloneNode(true);
	cloneElement.querySelector('.element__img').src = src;
	cloneElement.querySelector('.element__img').setAttribute('alt', `${name}`);
	cloneElement.querySelector('.element__title').textContent = name;

	cloneElement.querySelector('.element__delete').addEventListener('click', deleteHandler);
	cloneElement.querySelector('.element__like').addEventListener('click', handleLikeBtn);
	cloneElement.querySelector('.element__img').addEventListener('click', openPopupImages);

	return containerElements.prepend(cloneElement);
}
function createElementHandler(e) {
	e.preventDefault();
	renderElement(formElementImages.value, formElementTitle.value);
	closePopup(popupAddElement);
	formCreateElement.reset();
}

addElementInHtml(initialCards);
