import Card from "./Cards.js";
import FormValidator from "./FormValidator.js";
import {
  Popup
} from "./Popup.js";

import {
  PopupWithImage
} from './PopupWithImage.js'

import {
  Section
} from "./Section.js";


const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-safe',
  inactiveButtonClass: 'popup__btn-safe_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

const config = {
  templateElement: '.template-element',
  card: '.element',
  cardImage: '.element__img',
  cardTitle: '.element__title',
  btnDeleteCard: '.element__delete',
  btnLikeCard: '.element__like',
  btnCardLikeActive: 'element__like_active',
}


const listCard = [{
    name: "Baily Abrahams",
    link: "https://images.unsplash.com/photo-1494344670326-077cb5f4d3e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1828&q=80",
  },
  {
    name: "Andreas Gücklhorn",
    link: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
  },
  {
    name: "Michelle Spollen",
    link: "https://images.unsplash.com/photo-1541599468348-e96984315921?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80",
  },
  {
    name: "JOHN TOWNER",
    link: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    name: "Michael Olsen",
    link: "https://images.unsplash.com/photo-1526035266069-fc237c5baddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
  },
  {
    name: "Trevor Bobyk",
    link: "https://images.unsplash.com/photo-1507808130096-d3e6ece8eabf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
  },
];

// const allPopUps = document.querySelectorAll(".popup");

const containerElements = ".elements";



const formProfile = document.forms["popup__form-profile"];
const formInputName = formProfile.elements["name"];
const formInputJob = formProfile.elements["about"];

const formCreateElement = document.forms["popup__form-element"];
const formElementTitle = formCreateElement.elements["element-title"];
const formElementImages = formCreateElement.elements["element-img"];

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

const btnEditProfile = document.querySelector(".profile__edit");
const btnAddElement = document.querySelector(".profile__add-item");



const popupEditProfile = document.querySelector(".popup_type_edit");
const popupAddElement = document.querySelector(".popup_type_new-card");

const popupFigure = document.querySelector(".popup_type_image");
const popupFigureImg = popupFigure.querySelector(".img-container__img");
const popupFigureCaption = popupFigure.querySelector(".img-container__title");


//*  Экземпляр класса Popup
const popup = new Popup(popupAddElement)
const popupProfile = new Popup(popupEditProfile)
popupProfile.setEventListeners()
popup.setEventListeners()
//*  Экземпляр класса Popup


//! КЛИК ПО КНОПКЕ СОЗДАНИЯ ЭЛЕМЕНТА
btnAddElement.addEventListener("click", () => {
  popup.open();
  //* Очистка формы при открытии
  resetFormCard(formCreateElement)

});
//! КЛИК ПО КНОПКЕ ОТКРЫТИЯ ПРОФИЛЯ
btnEditProfile.addEventListener("click", function () {
  popupProfile.open();
  fillPopupEditProfileFields();
  //* Очистка формы при открытии
  resetFormProfile(formProfile)
});



formProfile.addEventListener("submit", handleFormProfileSubmit);
formCreateElement.addEventListener("submit", handleCreateElement);

function handleFormProfileSubmit(e) {
  fillProfileFieldsFromPopup();
  // closePopup(popupEditProfile);
  popupProfile.close();
}


// popup
// allPopUps.forEach((popup) => {
//   popup.addEventListener("click", handleClosePopup);
// });

function handleCreateElement(e) {
  popup.close()
  e.preventDefault();
  renderNewElement();
}

// function handleClosePopup(e) {
//   const target = e.target;
//   if (
//     target.classList.contains("popup__close") ||
//     target.classList.contains("popup")
//   ) {
//     closePopup(e.currentTarget);
//   }
// }


// ! Профиль пока не трогаем
function fillProfileFieldsFromPopup() {
  profileName.textContent = formInputName.value;
  profileJob.textContent = formInputJob.value;
}

function fillPopupEditProfileFields() {
  formInputName.value = profileName.textContent;
  formInputJob.value = profileJob.textContent;
}

// function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener('keydown', closePopupOnEscKeyPress)
// }

// function closePopup(popup) {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener('keydown', closePopupOnEscKeyPress)
// }

// function closePopupOnEscKeyPress(e) {
//   if (e.code === 'Escape') {
//     closePopup(document.querySelector('.popup_opened'))
//   }
// }

//! Фулл картинка

function openPopupImg(name, link) {
  popupFigureImg.alt = name;
  popupFigureImg.src = link;
  popupFigureCaption.textContent = name;
  openPopup(popupFigure);
}





// инстанс класса Section

const sectionCardList = new Section({
  item: listCard,
  renderer: (item) => {
    // Экземпляр класса Card
    const cardElem = new Card(item, config, openPopupImg)
    const catdElement = cardElem.createCard()

    sectionCardList.addItem(catdElement);

  }
}, containerElements)

sectionCardList.renderItems()






//* Экземпляр класса Card
// function rednerCards(item) {
//   const cardElem = new Card(item, config, openPopupImg)
//   return cardElem.createCard()
// }

// !Инит карт

// function addInitialElements(listCard) {
//   listCard.forEach((item) => {
//     containerElements.append(rednerCards(item));
//   });
// }







//! Экземляр для новой карточки
// function renderNewElement() {
//   const newCreateCard = {
//     name: formElementTitle.value,
//     link: formElementImages.value
//   }
//   containerElements.prepend(rednerCards(newCreateCard));
// }



//! Очистка формы
function resetFormProfile(form) {
  form.querySelectorAll(configValidation.inputSelector).forEach(input => {
    profileValid.resetForm(input)
  })
}
//! Очистка формы
function resetFormCard(form) {
  form.querySelectorAll(configValidation.inputSelector).forEach(input => {
    cardFormValid.resetForm(input)
  })
  form.reset()
}


//! экземпляр класса FormValidator для форм 
const cardFormValid = new FormValidator(configValidation, formCreateElement)
cardFormValid.enableValidation()
const profileValid = new FormValidator(configValidation, formProfile)
profileValid.enableValidation()


// addInitialElements(listCard);