export class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  //b массив карточек
  getAllCard() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
    });
  }
  //b добавление новой карточки
  addNewCardToServer({ name, link }) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
    });
  }
  //b удаление карточки
  removeCard(idCard) {
    return fetch(`${this._url}/cards/${idCard}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(response => {
      if (response.ok) {
        response.json();
      }
    });
  }
  //b информация о пользователе
  getUserInfoFromServer() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
    });
  }
  //b редактирование профиля
  editingProfile({ name, about }) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(response => {
      return response.json();
    });
  }

  setNewAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(response => {
      return response.json();
    });
  }
}
