export class UserModel {
  name: string;
  email: string;
  avatar: string;
  desc: string;
  birthDay: string;
  gender: string;

  constructor(name: string, email: string, avatar: string) {
    this.name = name;
    this.email = email;
    this.avatar = avatar;
  }
}
