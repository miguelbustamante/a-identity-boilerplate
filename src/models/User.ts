export class User {
  username: string;
  active: boolean;
  phoneNumber?: string;

  constructor(username: string, active: boolean, phoneNumber?: string) {
    this.username = username;
    this.active = active;
    this.phoneNumber = phoneNumber;
  }

  static fromTokenPayload(payload: JwtPayload): User {
    return new User(payload.username, payload.active, payload.phoneNumber);
  }
}

export interface JwtPayload {
  username: string;
  active: boolean;
  phoneNumber?: string;
}
