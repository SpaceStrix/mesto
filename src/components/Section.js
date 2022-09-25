export class Section {
  constructor(renderer, containerElements) {
    this._renderer = renderer;
    this._container = document.querySelector(containerElements);
  }

  addItem(card, position) {
    position === "after"
      ? this._container.append(card)
      : this._container.prepend(card);
  }

  renderItems(cardList) {
    cardList.forEach(card => {
      this._renderer(card);
    });
  }
}
