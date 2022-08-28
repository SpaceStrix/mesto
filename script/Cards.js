//*принимает в конструктор её данные и селектор её template-элемента;
//*содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий;
//*содержит приватные методы для каждого обработчика;
//*содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.


//!const config = {
//b    templateElement: '.template-element',
//b    card: '.elements',
//b    cardImage: '.element__img',
//b    cardTitle: '.element__title',
//b    btnDeleteCard: '.element__delete',
//b    btnLikeCard: '.element__like',
//b    btnCardLikeActive: 'element__like_active',
//   }

export default class Card {
    constructor(data, config, openPopupImg) {
        this.name = data.name
        this.link = data.link
        this.config = config
        this.openPopupImg = openPopupImg
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this.config.templateElement).content
            .querySelector(this.config.card)
            .cloneNode(true);
        return cardTemplate
    }

    createCard() {
        this.card = this._getTemplate()

        this.img = this.card.querySelector(this.config.cardImage)

        this.img.src = this.link
        this.img.alt = this.name
        this.card.querySelector(this.config.cardTitle).textContent = this.name

        this._setEventListeners()
        return this.card
    }

    _handleLikeBtn() {
        this.card.querySelector(this.config.btnLikeCard).classList.toggle(this.config.btnCardLikeActive);
    }

    _handleDeleteBtn() {
        this.card.remove();
    }

    _fullImg() {
        this.openPopupImg(this.name, this.link)
    }

    _setEventListeners() {
        this.card.querySelector(this.config.btnLikeCard).addEventListener("click", () => {
            this._handleLikeBtn()
        });
        this.card.querySelector(this.config.btnDeleteCard).addEventListener('click', () => {
            this._handleDeleteBtn()
        })
        this.img.addEventListener('click', () => {
            this._fullImg()
        })

    }

}