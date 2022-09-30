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
let userID = null;
const api = new Api(configApi);

api.getUserInfoFromServer().then(dataUser => {
  userID = dataUser._id;
  userInfo.setUserInfo(dataUser);
  userInfo.setAvatar(dataUser.avatar);
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
const popupWithFormCard = new PopupWithForm(popupAddElement, dataCard => {
  popupWithFormCard.loadProcess(true);
  api
    .addNewCardToServer(dataCard)
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
const popupWithAvatar = new PopupWithForm(popupFormAvatar, dataAvatar => {
  popupWithAvatar.loadProcess(true);
  api
    .setNewAvatar(dataAvatar)
    .then(result => {
      userInfo.setAvatar(result.avatar);
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

function handleLikeCard(data) {
  api
    .toggleLike(data.getIdCard(), data.liked())
    .then(dataCard => data.setLike(dataCard));
}

//b Экземпляр класса Card
function createCard(item) {
  const cardElem = new Card(
    item,
    configCard,
    handleOpenPopupImg,
    handleClickDeleteCard,
    userID,
    handleLikeCard
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

//b Кнопка создания карточки
btnAddElement.addEventListener("click", () => {
  popupWithFormCard.open();
  formValidators[formCreateElement].resetValidation();
});
//b Кнопка редактирования профиля
btnEditProfile.addEventListener("click", () => {
  popupWithFormProfile.setInputValues(userInfo.getUserInfo());
  popupWithFormProfile.open();
  formValidators[formProfile].resetValidation();
});
//b Кнопка редактирования аватарки
btnEditAvatar.addEventListener("click", () => {
  popupWithAvatar.open();
  formValidators[formEditAvatar].resetValidation();
});

enableValidation(configValidation);
