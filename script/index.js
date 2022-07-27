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

const popupAll = document.querySelectorAll('.popup');
const template = document.querySelector('.element').content;
const containerElements = document.querySelector('.elements');

const formProfile = document.forms['popup__form-profile'];
const formInputName = formProfile.elements['name'];
const formInputJob = formProfile.elements['about-me'];

const formCreateElement = document.forms['popup__form-element']; // испрвить имя формы
const formElementTitle = formCreateElement.elements['element-title'];
const formElementImages = formCreateElement.elements['element-img'];

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const btnEditProfile = document.querySelector('.profile__edit');
const btnAddElement = document.querySelector('.profile__add-item');

const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddElement = document.querySelector('.popup_type_new-card');

const popupFigure = document.querySelector('.popup_type_image');
const popupFigureImg = popupFigure.querySelector('.img-container__img');
const popupFigureCaption = popupFigure.querySelector('.img-container__title');

popupAll.forEach((popup) => {
	popup.addEventListener('click', handleClosePopup);
});

// event
btnAddElement.addEventListener('click', () => {
	openPopup(popupAddElement);
});
btnEditProfile.addEventListener('click', function() {
	openPopup(popupEditProfile);
	setPopupFieldValue();
});
formProfile.addEventListener('submit', handleFormProfileSubmit);
formCreateElement.addEventListener('submit', handleCreateElement);

// popup
function handleFormProfileSubmit(e) {
	e.preventDefault();

	setTextContentValue();
	closePopup(popupEditProfile);
}
function handleClosePopup(e) {
	const target = e.target;
	if (target.classList.contains('popup__close') || target.classList.contains('popup')) {
		closePopup(e.currentTarget);
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
function openPopupImg(src, name) {
	popupFigureImg.src = src;
	popupFigureImg.alt = name;
	popupFigureCaption.textContent = name;
	openPopup(popupFigure);
}
function addElementInHtml(initialCards) {
	initialCards.forEach((item) => {
		const element = createTemplateElement(item.link, item.name);
		containerElements.append(element);
	});
}
function createTemplateElement(src, name) {
	const cloneElement = template.querySelector('.element').cloneNode(true);
	const elementImage = cloneElement.querySelector('.element__img');
	const elementTitle = cloneElement.querySelector('.element__title');
	elementImage.src = src;
	elementImage.alt = `Изображение ${name}`;
	elementTitle.textContent = name;

	elementImage.addEventListener('click', () => openPopupImg(src, name));
	cloneElement.querySelector('.element__delete').addEventListener('click', handleDeleteBtn);
	cloneElement.querySelector('.element__like').addEventListener('click', handleLikeBtn);

	return cloneElement;
}
function renderNewElement() {
	const valueInputImg = formElementImages.value;
	const valueInputName = formElementTitle.value;
	const newElem = createTemplateElement(valueInputImg, valueInputName);

	containerElements.prepend(newElem);
}
function handleLikeBtn(e) {
	e.target.classList.toggle('element__like_active');
}
function handleDeleteBtn(e) {
	e.target.closest('.element').remove();
}
function handleCreateElement(e) {
	e.preventDefault();
	renderNewElement();
	closePopup(popupAddElement);
	formCreateElement.reset();
}

addElementInHtml(initialCards);
