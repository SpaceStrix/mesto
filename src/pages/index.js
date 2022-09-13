import "./index.css";

import { Card } from "../components/Cards.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

export const configValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn-safe",
  inactiveButtonClass: "popup__btn-safe_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

const config = {
  templateElement: ".template-element",
  card: ".element",
  cardImage: ".element__img",
  cardTitle: ".element__title",
  btnDeleteCard: ".element__delete",
  btnLikeCard: ".element__like",
  btnCardLikeActive: "element__like_active",
};

const listCard = [
  {
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

//POPUP
const popupAddElement = ".popup_type_new-card";
const popupEditProfile = ".popup_type_edit";
const popupFigure = ".popup_type_image";

const containerElements = ".elements";
const profileName = ".profile__name";
const profileJob = ".profile__job";
const popupFigureImg = ".img-container__img";
const popupFigureCaption = ".img-container__title";

const formProfile = document.forms["popup__form-profile"];
const formInputName = document.querySelector("#popup__name-input");
const formInputJob = document.querySelector("#popup__about-input");

const formCreateElement = document.forms["popup__form-element"];
const formElementTitle = formCreateElement.elements["element-title"];
const formElementImages = formCreateElement.elements["element-img"];

const btnEditProfile = document.querySelector(".profile__edit");
const btnAddElement = document.querySelector(".profile__add-item");

//POPUP
// const popupAddElement = document.querySelector(".popup_type_new-card");
// const popupEditProfile = document.querySelector(".popup_type_edit");
// const popupFigure = document.querySelector(".popup_type_image");

// ** Экземпляр PopupWithForm Card** //
const popupWithFormCard = new PopupWithForm(
  popupAddElement,
  handleCreateElement
);
popupWithFormCard.setEventListeners();

//****************** CLICK BUTTON TO OPEN ******************
btnAddElement.addEventListener("click", () => {
  popupWithFormCard.open();
  //* Очистка формы при открытии
  cardFormValid.clearForm();
});

//****************** SUBMIT ******************
function handleCreateElement() {
  renderNewCard();
  popupWithFormCard.close();
}

// ** Экземпляр UserInfo ** //
const userInfo = new UserInfo({ profileName, profileJob });

// ** Экземпляр PopupWithForm for Profile** //
const popupWithFormProfile = new PopupWithForm(
  popupEditProfile,
  handleFormProfileSubmit
);
popupWithFormProfile.setEventListeners();

function handleFormProfileSubmit(data) {
  userInfo.setUserInfo(data);
}

//! КЛИК ПО КНОПКЕ ОТКРЫТИЯ ПРОФИЛЯ
btnEditProfile.addEventListener("click", function () {
  const user = userInfo.getUserInfo();

  formInputName.value = user.name;
  formInputJob.value = user.about;

  popupWithFormProfile.open();

  //* Очистка формы при открытии
  profileValid.clearForm();
});

//! ------------------------ popupWithFormProfile  PopupWithForm
//! ------------------------ popupWithFormProfile  PopupWithForm
//! ------------------------ popupWithFormProfile  PopupWithForm

//! ------------------------ popupWithFormProfile  PopupWithForm
//! ------------------------ popupWithFormProfile  PopupWithForm
//! ------------------------ popupWithFormProfile  PopupWithForm
//! ------------------------ popupWithFormProfile  PopupWithForm
//! ------------------------ popupWithFormProfile  PopupWithForm
//! ------------------------ popupWithFormProfile  PopupWithForm

function handleOpenPopupImg(name, link) {
  const openImg = new PopupWithImage(
    popupFigure,
    popupFigureCaption,
    popupFigureImg
  );
  openImg.open(name, link);
}
//* Экземпляр класса Card // шаблон карточки
function rednerCards(item) {
  const cardElem = new Card(item, config, handleOpenPopupImg);
  return cardElem.createCard();
}
//* Экземпляр класса Section
const sectionCardList = new Section(
  {
    item: listCard,
    renderer: item => {
      sectionCardList.addListItem(rednerCards(item));
    },
  },
  containerElements
);

function renderNewCard() {
  const newCreateCard = {
    name: formElementTitle.value,
    link: formElementImages.value,
  };
  //* инстанс для новой карточки // поправить
  const sectionCardList2 = new Section(
    {
      item: newCreateCard,
      renderer: newCreateCard => {
        sectionCardList2.addListItem(rednerCards(newCreateCard));
      },
    },
    containerElements
  );
  sectionCardList2.addNewCard(rednerCards(newCreateCard));
}

//** Экземпляр FormValidator для Сard ** //
const cardFormValid = new FormValidator(configValidation, formCreateElement);
cardFormValid.enableValidation();

//** Экземпляр FormValidator для Profile ** //
const profileValid = new FormValidator(configValidation, formProfile);
profileValid.enableValidation();

sectionCardList.renderItems();
