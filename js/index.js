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

const btnEditProfile = document.querySelector('.profile__edit');
const btnAddElement = document.querySelector('.profile__add-item');

const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddElement = document.querySelector('.popup_type_new-card');
const popupImg = document.querySelector('.popup_type_image');

// event
body.addEventListener('click', closePopupHandler);
btnAddElement.addEventListener('click', () => {
	openPopup(popupAddElement);
});
btnEditProfile.addEventListener('click', function() {
	openPopup(popupEditProfile);
	setPopupFieldValue();
});
formProfile.addEventListener('submit', handleFormSubmit);
formCreateElement.addEventListener('submit', createElementHandler);

// popup
function handleFormSubmit(e) {
	e.preventDefault();

	setTextContentValue();
	closePopup(popupEditProfile);
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

function popupOpenImg(src, name) {
	popupImg.querySelector('.img-container__img').setAttribute('src', src);
	popupImg.querySelector('.img-container__title').textContent = name;
	openPopup(popupImg);
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
	elementImage.setAttribute('alt', `Изображение ${name}`);
	elementTitle.textContent = name;

	cloneElement.querySelector('.element__delete').addEventListener('click', handleDeleteBtn);
	cloneElement.querySelector('.element__like').addEventListener('click', handleLikeBtn);
	cloneElement.querySelector('.element__img').addEventListener('click', () => popupOpenImg(src, name));

	return cloneElement;
}
const renderNewElement = () => {
	containerElements.prepend(createTemplateElement(formElementImages.value, formElementTitle.value));
};
function handleLikeBtn(e) {
	e.target.classList.toggle('element__like_active');
}
function handleDeleteBtn(e) {
	e.target.closest('.element').remove();
}
function createElementHandler(e) {
	e.preventDefault();
	renderNewElement();
	closePopup(popupAddElement);
	formCreateElement.reset();
}

addElementInHtml(initialCards);
