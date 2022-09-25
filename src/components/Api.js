export class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  //* массив карточек
  getAllCard() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
    });
  }

  addNewCardToServer({ name, link }) {
    console.log(name);
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

  //* информация о пользователе
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
    });
  }
  //* редактирование профиля
  editingProfile() {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: "name",
        about: "about",
      }),
    }).then(response => {
      return response.json();
    });
  }
}
