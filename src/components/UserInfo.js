export class UserInfo {
  constructor({ profileName, profileJob }) {
    this._name = document.querySelector(profileName);
    this._about = document.querySelector(profileJob);
  }

  //* возвращает объект с данными пользователя. метод подставит в форму при открытии.
  getUserInfo() {
    const infoData = {
      name: this._name.textContent,
      about: this._about.textContent,
    };
    return infoData;
  }

  //* принимает новые данные пользователя и добавляет их на страницу.
  setUserInfo({ name, about }) {
    this._name.textContent = name;
    this._about.textContent = about;
  }
}
