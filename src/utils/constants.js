export const configApi = {
  url: "https://mesto.nomoreparties.co/v1/cohort-51",
  headers: {
    "content-type": "application/json",
    Authorization: "662f9b88-9df7-4d94-b426-3c935e9f3363",
  },
};

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
export const configCard = {
  templateElement: ".template-element",
  card: ".element",
  cardImage: ".element__img",
  cardTitle: ".element__title",
  btnDeleteCard: ".element__delete",
  btnLikeCard: ".element__like",
  btnCardLikeActive: "element__like_active",
  likeCounter: ".element__like-counter",
};
//* Selectors
export const popupAddElement = ".popup_type_new-card";
export const popupEditProfile = ".popup_type_edit";
export const popupFigure = ".popup_type_image";
export const popupFormAvatar = ".popup_type_avatar";

export const containerElements = ".elements";

export const profileName = ".profile__name";
export const profileJob = ".profile__job";
export const profileAvatar = ".profile__avatar-img";

export const popupFigureImg = ".img-container__img";
export const popupFigureCaption = ".img-container__title";
export const formProfile = "popup__form-profile";
export const formCreateElement = "popup__form-element";
export const formEditAvatar = "popup__form-avatar";
export const deleteCard = ".popup_type_confirm";

export const btnEditProfile = document.querySelector(".profile__edit");
export const btnAddElement = document.querySelector(".profile__add-item");
export const btnEditAvatar = document.querySelector(".profile__avatar");
