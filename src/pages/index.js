import "./index.css";

import { Card } from "../components/Cards.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

import {
  listCard,
  configValidation,
  configCard,
  popupAddElement,
  popupEditProfile,
  popupFigure,
  containerElements,
  profileName,
  profileJob,
  popupFigureImg,
  popupFigureCaption,
  formProfile,
  formCreateElement,
  btnEditProfile,
  btnAddElement,
} from "../utils/constants.js";

//* Экземпляр UserInfo ** //
const userInfo = new UserInfo({ profileName, profileJob });

//*  Экземпляр PopupWithForm Card ** //
const popupWithFormCard = new PopupWithForm(popupAddElement, card => {
  sectionCardList.addItem(createCard(card));
  popupWithFormCard.close();
});
popupWithFormCard.setEventListeners();

//* Экземпляр PopupWithForm for Profile ** //
const popupWithFormProfile = new PopupWithForm(popupEditProfile, dataUser => {
  userInfo.setUserInfo(dataUser);
});
popupWithFormProfile.setEventListeners();

//! -- КЛИК ПО КНОПКЕ ОТКРЫТИЯ КАРТОЧКИ
btnAddElement.addEventListener("click", () => {
  popupWithFormCard.open();

  formValidators[formCreateElement].resetValidation();
});

//! -- КЛИК ПО КНОПКЕ ОТКРЫТИЯ ПРОФИЛЯ
btnEditProfile.addEventListener("click", () => {
  popupWithFormProfile.setInputValues(userInfo.getUserInfo());
  popupWithFormProfile.open();

  formValidators[formProfile].resetValidation();
});

//* Экземпляр класса PopupWithImage ** //
const popupWithImage = new PopupWithImage(
  popupFigure,
  popupFigureCaption,
  popupFigureImg
);
popupWithImage.setEventListeners();

function handleOpenPopupImg(name, link) {
  popupWithImage.open(name, link);
}

//* Экземпляр класса Card // готовая разметка карточки
function createCard(item) {
  const cardElem = new Card(item, configCard, handleOpenPopupImg);
  return cardElem.createCard();
}
//* Экземпляр класса Section
const sectionCardList = new Section(
  {
    item: listCard,
    renderer: item => {
      sectionCardList.addItem(createCard(item), "after");
    },
  },
  containerElements
);

// Валидация форм
const formValidators = {};
const enableValidation = configValidation => {
  const formList = Array.from(
    document.querySelectorAll(configValidation.formSelector)
  );
  formList.forEach(formElement => {
    const validator = new FormValidator(configValidation, formElement);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(configValidation);
sectionCardList.renderItems();
