//* ARRAY CARD
export const listCard = [
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
//* Config Validation
export const configValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn-safe",
  inactiveButtonClass: "popup__btn-safe_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};
//* Config for CARD
export const config = {
  templateElement: ".template-element",
  card: ".element",
  cardImage: ".element__img",
  cardTitle: ".element__title",
  btnDeleteCard: ".element__delete",
  btnLikeCard: ".element__like",
  btnCardLikeActive: "element__like_active",
};
//* Selectors
export const popupAddElement = ".popup_type_new-card";
export const popupEditProfile = ".popup_type_edit";
export const popupFigure = ".popup_type_image";
export const containerElements = ".elements";
export const profileName = ".profile__name";
export const profileJob = ".profile__job";
export const popupFigureImg = ".img-container__img";
export const popupFigureCaption = ".img-container__title";

export const formProfile = document.forms["popup__form-profile"];
export const formInputName = formProfile.elements["name"];
export const formInputJob = formProfile.elements["about"];
export const formCreateElement = document.forms["popup__form-element"];
export const btnEditProfile = document.querySelector(".profile__edit");
export const btnAddElement = document.querySelector(".profile__add-item");
