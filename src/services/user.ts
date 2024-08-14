import {AuthToken, User, UserLogin, UserRegister} from '../types/user';
import {Fetch} from '../utils/axios';

class UserService {
  async CreateUser(data: UserRegister): Promise<void> {
    try {
      const {
        data: {access_token, refresh_token},
      } = await Fetch.post<AuthToken>('/account/sign-up', data);

      console.log(access_token, refresh_token)
    } catch (err) {
      throw err;
    }
  }

  async UserLogin(data: UserLogin): Promise<void> {
    try {
      const {
        data: {access_token, refresh_token},
      } = await Fetch.post<AuthToken>('/account/sign-in', data);

      console.log(access_token, refresh_token)

    } catch (err) {
      throw err;
    }
  }

  async GetUserInfo(): Promise<User> {
    const {data: user}: {data: User} = await Fetch.get<User>('/account');

    return user;
  }
}

export const userService: UserService = new UserService();
