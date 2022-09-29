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
  profileAvatar,
});

//b Экземпляр PopupWithForm Card
const popupWithFormCard = new PopupWithForm(popupAddElement, card => {
  popupWithFormCard.loadProcess(true);
  api
    .addNewCardToServer(card)
    .then(dataFromServer => {
      sectionCardList.addItem(createCard(dataFromServer));
    })
    .finally(() => {
      popupWithFormCard.loadProcess(false);
    });
  popupWithFormCard.close();
});
popupWithFormCard.setEventListeners();

//b Экземпляр PopupWithForm Avatar
const popupWithAvatar = new PopupWithForm(popupFormAvatar, data => {
  popupWithAvatar.loadProcess(true);
  api
    .setNewAvatar(data)
    .then(result => {
      userInfo.setAvatar(result.avatar);
      console.log(result);
      popupWithAvatar.close();
    })
    .finally(() => {
      popupWithAvatar.loadProcess(false);
    });
});
popupWithAvatar.setEventListeners();

//b Экземпляр PopupWithForm for Profile
const popupWithFormProfile = new PopupWithForm(popupEditProfile, dataUser => {
  popupWithFormProfile.loadProcess(true);
  api
    .editingProfile(dataUser)
    .then(dataFromServer => {
      userInfo.setUserInfo(dataFromServer);
      popupWithFormProfile.close();
    })
    .finally(() => {
      popupWithFormProfile.loadProcess(false);
    });
});
popupWithFormProfile.setEventListeners();

//b Экземпляр класса PopupWithImage
const popupWithImage = new PopupWithImage(
  popupFigure,
  popupFigureCaption,
  popupFigureImg
);
popupWithImage.setEventListeners();

//b Экземпляр класса Card
function createCard(item) {
  const cardElem = new Card(
    item,
    configCard,
    handleOpenPopupImg,
    handleClickDeleteCard
  );

  return cardElem.createCard();
}
//b КоллБэки класса Кард
function handleOpenPopupImg(name, link) {
  popupWithImage.open(name, link);
}

function handleClickDeleteCard(dataToDelete) {
  api.removeCard(dataToDelete.getIdCard()).then(() => {
    return dataToDelete.removeCard();
  });
}

//b Экземпляр класса Section
const sectionCardList = new Section(item => {
  sectionCardList.addItem(createCard(item), "after");
}, containerElements);

//b Валидация форм
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

//b КЛИК ПО КНОПКЕ ОТКРЫТИЯ КАРТОЧКИ
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
