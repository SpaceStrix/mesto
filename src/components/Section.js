export class Section {
  constructor(
    {
      item, // массив карточек
      renderer, // функция отвечает за создание и отрисовку данных на странице.
    },
    containerElements
  ) {
    this._item = item;
    this._renderer = renderer;
    this._container = document.querySelector(containerElements);
  }

  addItem(card, position) {
    position === "after"
      ? this._container.append(card)
      : this._container.prepend(card);
  }

  renderItems() {
    this._item.forEach(card => {
      this._renderer(card);
    });
  }
}
