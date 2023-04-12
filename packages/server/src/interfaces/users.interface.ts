export interface User {
  _id: string;
  email: string;
  password: string;
  username: string;
  authenticated: boolean;
  auth_code?: string;
  date_created?: Date;
  date_updated?: Date;
  last_login?: Date;
}
