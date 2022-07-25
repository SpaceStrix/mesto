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

const formProfile = document.forms['popup__form-profile']; // испрвить имя формы
const formInputName = formProfile.elements['name'];
const formInputJob = formProfile.elements['about-me'];

const formCreateElement = document.forms['popup__form_create-element']; // испрвить имя формы
const formElementTitle = formCreateElement.elements['element-title'];
const formElementImages = formCreateElement.elements['element-img'];

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const profileEditBtn = document.querySelector('.profile__edit');

const popup = document.querySelector('.popup');
const popupAddElement = document.querySelector('.popup_type_new-card');
const buttonAddElement = document.querySelector('.profile__add-item');
const popupImg = document.querySelector('.popup_type_image');

// event
body.addEventListener('click', closePopupHandler);
buttonAddElement.addEventListener('click', () => {
	openPopup(popupAddElement);
});
profileEditBtn.addEventListener('click', function() {
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
	profileJob.textContent = formInputJob.value;
}
function setPopupFieldValue() {
	formInputName.value = profileName.textContent;
	formInputJob.value = profileJob.textContent;
}
function openPopup(popup) {
	popup.classList.add('popup_opened');
}
function closePopup(popup) {
	popup.classList.remove('popup_opened');
}

//card
function handleOpenImage(e) {
	const target = e.target;
	const img = target.src;
	const title = target.alt;

	setValuePopupImg(img, title);
	openPopup(popupImg);
}
function setValuePopupImg(img, title) {
	getSrcPopupImg = popupImg.querySelector('.img-container__img').setAttribute('src', img);
	getTitlePopupImg = popupImg.querySelector('.img-container__title').textContent = title;
}
function handleLikeBtn(e) {
	e.target.classList.toggle('element__like_active');
}
function handleDeleteBtn(e) {
	e.target.closest('.element').remove();
}
function addElementInHtml(initialCards) {
	initialCards.forEach((item) => {
		createdElement(item.link, item.name);
	});
}
function createdElement(src, name) {
	const cloneElement = template.querySelector('.element').cloneNode(true);
	const elementImage = cloneElement.querySelector('.element__img');
	const elementTitle = cloneElement.querySelector('.element__title');
	elementImage.src = src;
	elementImage.setAttribute('alt', `Изображение ${name}`);
	elementTitle.textContent = name;

	cloneElement.querySelector('.element__delete').addEventListener('click', handleDeleteBtn);
	cloneElement.querySelector('.element__like').addEventListener('click', handleLikeBtn);
	cloneElement.querySelector('.element__img').addEventListener('click', handleOpenImage);

	return containerElements.prepend(cloneElement);
}
function createElementHandler(e) {
	e.preventDefault();
	createdElement(formElementImages.value, formElementTitle.value);
	closePopup(popupAddElement);
	formCreateElement.reset();
}

addElementInHtml(initialCards);
