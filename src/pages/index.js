import "./index.css";

import { Card } from "../components/Cards.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { DeleteCard } from "../components/PopupWithDeleteCard";
import { Api } from "../components/Api";

import {
  configApi,
  configValidation,
  configCard,
  popupAddElement,
  popupEditProfile,
  popupFigure,
  containerElements,
  profileName,
  profileJob,
  profileAvatar,
  popupFigureImg,
  popupFigureCaption,
  formProfile,
  formCreateElement,
  btnEditProfile,
  btnAddElement,
  btnEditAvatar,
  formEditAvatar,
  deleteCard,
  popupFormAvatar,
} from "../utils/constants.js";

//b ************ API ***********/

const api = new Api(configApi);

api
  .setNewAvatar(
    "https://www.matthewchilders.com/wp-content/uploads/2019/04/lovecraft-product-print.jpg"
  )
  .then(result => {
    document.querySelector(profileAvatar).src = result.avatar;
  });

api.getUserInfoFromServer().then(dataUser => {
  userInfo.setUserInfo(dataUser);
});
api.getAllCard().then(dataListCard => {
  sectionCardList.renderItems(dataListCard);
});

//  Экземпляр UserInfo
const userInfo = new UserInfo({
  profileName,
  profileJob,
});

// Экземпляр PopupWithForm Card
const popupWithFormCard = new PopupWithForm(popupAddElement, card => {
  api.addNewCardToServer(card).then(dataFromServer => {
    sectionCardList.addItem(createCard(dataFromServer));
  });
  popupWithFormCard.close();
});
popupWithFormCard.setEventListeners();

// Экземпляр PopupWithForm Avatar
const popupWithAvatar = new PopupWithForm(popupFormAvatar, avatar => {
  console.log(avatar);
});
popupWithAvatar.setEventListeners();

// Экземпляр PopupWithForm for Profile
const popupWithFormProfile = new PopupWithForm(popupEditProfile, dataUser => {
  api.editingProfile(dataUser).then(dataFromServer => {
    userInfo.setUserInfo(dataFromServer);
  });
});
popupWithFormProfile.setEventListeners();

// Экземпляр класса PopupWithImage
const popupWithImage = new PopupWithImage(
  popupFigure,
  popupFigureCaption,
  popupFigureImg
);
popupWithImage.setEventListeners();

// Экземпляр класса Card
function createCard(item) {
  const cardElem = new Card(
    item,
    configCard,
    handleOpenPopupImg,
    handleClickDeleteCard
  );

  return cardElem.createCard();
}
// КоллБэки класса Кард
function handleOpenPopupImg(name, link) {
  popupWithImage.open(name, link);
}

function handleClickDeleteCard(dataToDelete) {
  api.removeCard(dataToDelete.getIdCard()).then(() => {
    return dataToDelete.removeCard();
  });
}

// Экземпляр класса Section
const sectionCardList = new Section(item => {
  sectionCardList.addItem(createCard(item), "after");
}, containerElements);

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

// КЛИК ПО КНОПКЕ ОТКРЫТИЯ КАРТОЧКИ
btnAddElement.addEventListener("click", () => {
  popupWithFormCard.open();
  formValidators[formCreateElement].resetValidation();
});
// КЛИК ПО КНОПКЕ ОТКРЫТИЯ ПРОФИЛЯ
btnEditProfile.addEventListener("click", () => {
  popupWithFormProfile.setInputValues(userInfo.getUserInfo());
  popupWithFormProfile.open();
  formValidators[formProfile].resetValidation();
});

btnEditAvatar.addEventListener("click", () => {
  popupWithAvatar.open();
  formValidators[formEditAvatar].resetValidation();
});

enableValidation(configValidation);
