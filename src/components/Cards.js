export class Card {
  constructor(data, config, handleOpenPopupImg, handleClickDelete) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._idOwner = data.idOwner;

    this._config = config;
    this._handleOpenPopupImg = handleOpenPopupImg;
    this._handleClickDelete = handleClickDelete;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._config.templateElement)
      .content.querySelector(this._config.card)
      .cloneNode(true);
    return cardTemplate;
  }

  createCard() {
    this.card = this._getTemplate();

    this.img = this.card.querySelector(this._config.cardImage);

    //* counter
    this._counter = this.card.querySelector(this._config.likeCounter);
    this._counter.textContent = this._data.likes.length;

    this.img.src = this._link;
    this.img.alt = this._name;
    this.card.querySelector(this._config.cardTitle).textContent = this._name;

    this._likeButton = this.card.querySelector(this._config.btnLikeCard);
    this._deleteCard = this.card.querySelector(this._config.btnDeleteCard);

    if (this._data.owner._id != "f80f9d3c7d7644e8bac682ce") {
      this._deleteCard.remove();
    }

    this._setEventListeners();
    return this.card;
  }

  _handleLikeBtn() {
    this._likeButton.classList.toggle(this._config.btnCardLikeActive);
  }

  removeCard() {
    this.card.remove();
    this.card = null;
  }

  _handleCardClick() {
    this._handleOpenPopupImg(this._name, this._link);
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeBtn();
    });
    this._deleteCard.addEventListener("click", () => {
      this._handleClickDelete(this);
    });
    this.img.addEventListener("click", () => {
      this._handleCardClick();
    });
  }

  _checkUserPost() {}

  getIdCard() {
    return this._data._id;
  }
}
