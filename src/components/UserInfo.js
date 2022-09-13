//! Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.

//! Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.

//! Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.

export class UserInfo {
  constructor({ profileName, profileJob }) {
    this.name = document.querySelector(profileName);
    this.about = document.querySelector(profileJob);
  }

  //* возвращает объект с данными пользователя. метод подставит в форму при открытии.
  getUserInfo() {
    let infoData = {
      name: this.name.textContent,
      about: this.about.textContent,
    };
    return infoData;
  }

  //* принимает новые данные пользователя и добавляет их на страницу.
  setUserInfo({ name, about }) {
    this.name.textContent = name;
    this.about.textContent = about;
  }
}
