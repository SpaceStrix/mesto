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
  config,
  popupAddElement,
  popupEditProfile,
  popupFigure,
  containerElements,
  profileName,
  profileJob,
  popupFigureImg,
  popupFigureCaption,
  formProfile,
  formInputName,
  formInputJob,
  formCreateElement,
  btnEditProfile,
  btnAddElement,
} from "../utils/constants.js";

//* Экземпляр UserInfo ** //
const userInfo = new UserInfo({ profileName, profileJob });

//*  Экземпляр PopupWithForm Card ** //
const popupWithFormCard = new PopupWithForm(popupAddElement, card => {
  sectionCardList.addItem(rednerCards(card));
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
  cardFormValid.clearForm();
});

//! -- КЛИК ПО КНОПКЕ ОТКРЫТИЯ ПРОФИЛЯ
btnEditProfile.addEventListener("click", () => {
  const user = userInfo.getUserInfo();
  formInputName.value = user.name;
  formInputJob.value = user.about;

  popupWithFormProfile.open();
  profileValid.clearForm();
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
function rednerCards(item) {
  const cardElem = new Card(item, config, handleOpenPopupImg);
  return cardElem.createCard();
}
//* Экземпляр класса Section
const sectionCardList = new Section(
  {
    item: listCard,
    renderer: item => {
      sectionCardList.addItem(rednerCards(item), "after");
    },
  },
  containerElements
);

//** Экземпляр FormValidator для Сard ** //
const cardFormValid = new FormValidator(configValidation, formCreateElement);
cardFormValid.enableValidation();

//** Экземпляр FormValidator для Profile ** //
const profileValid = new FormValidator(configValidation, formProfile);
profileValid.enableValidation();

sectionCardList.renderItems();
