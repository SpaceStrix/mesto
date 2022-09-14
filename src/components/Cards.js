export class Card {
  constructor(data, config, handleOpenPopupImg) {
    this._name = data.name;
    this._link = data.link;
    this._config = config;
    this._handleOpenPopupImg = handleOpenPopupImg;
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

    this.img.src = this._link;
    this.img.alt = this._name;
    this.card.querySelector(this._config.cardTitle).textContent = this._name;
    this._likeButton = this.card.querySelector(this._config.btnLikeCard);

    this._setEventListeners();
    return this.card;
  }

  _handleLikeBtn() {
    this._likeButton.classList.toggle(this._config.btnCardLikeActive);
  }

  _handleDeleteBtn() {
    this.card.remove();
  }

  _handleCardClick() {
    this._handleOpenPopupImg(this._name, this._link);
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeBtn();
    });
    this.card
      .querySelector(this._config.btnDeleteCard)
      .addEventListener("click", () => {
        this._handleDeleteBtn();
      });
    this.img.addEventListener("click", () => {
      this._handleCardClick();
    });
  }
}
