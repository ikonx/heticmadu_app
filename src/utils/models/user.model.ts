export interface UserModel {
  id?: string;
  token?: any;
  firstName?: any;
  lastName?: any;
  email?: string;
  password?: string;
  isLogin: boolean;
  gotError: boolean;
  picture?: string;
}
