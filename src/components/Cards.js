export class Card {
  constructor(
    data,
    config,
    handleOpenPopupImg,
    handleClickDelete,
    userID,
    handleLikeCard
  ) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;

    this._config = config;
    this._handleOpenPopupImg = handleOpenPopupImg;
    this._handleClickDelete = handleClickDelete;
    this._handleLikeCard = handleLikeCard;

    this._userID = userID;
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
    this._deleteCard = this.card.querySelector(this._config.btnDeleteCard);

    if (this._data.owner._id != "f80f9d3c7d7644e8bac682ce") {
      this._deleteCard.remove();
    }

    this._updataLike();

    this._setEventListeners();
    return this.card;
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
      this._handleLikeCard(this);
    });
    this._deleteCard.addEventListener("click", () => {
      this._handleClickDelete(this);
    });
    this.img.addEventListener("click", () => {
      this._handleCardClick();
    });
  }

  getIdCard() {
    return this._data._id;
  }

  liked() {
    return this._data.likes.some(likedList => {
      return likedList._id == this._userID;
    });
  }

  _updataLike() {
    this._counter = this.card.querySelector(this._config.likeCounter);
    this._counter.textContent = this._data.likes.length;

    const liked = this._data.likes.some(likedList => {
      return likedList._id == this._userID;
    });

    // if (liked) {
    //   this._likeButton.classList.add(this._config.btnCardLikeActive);
    // } else {
    //   this._likeButton.classList.remove(this._config.btnCardLikeActive);
    // }

    this.liked()
      ? this._likeButton.classList.add(this._config.btnCardLikeActive)
      : this._likeButton.classList.remove(this._config.btnCardLikeActive);
  }

  setLike(data) {
    this._data.likes = data.likes;
    this._updataLike();
  }
}
