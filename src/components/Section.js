export class Section {
  constructor({ item, renderer }, containerElements) {
    this._item = item;
    this._renderer = renderer;
    this._container = document.querySelector(containerElements);
  }

  addItem(card, position) {
    position === "after"
      ? this._container.append(card)
      : this._container.prepend(card);
  }

  renderCard(item) {
    this._renderer(item);
  }

  renderItems() {
    this._item.forEach(card => {
      this._renderer(card);
    });
  }
}
