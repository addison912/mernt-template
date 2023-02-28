/**
 * Family History users
 * @public
 */
export interface IUser {
  uid: string;
  email: string;
  fname: string;
  lname: string;
  profilePic: string;
  ftid: string;
}

/**
 * People in family tree
 * @public
 */
export interface IPerson {
  ftid: string;
  fname: string;
  mname?: string;
  lname: string;
  profilePic?: string;
  description?: string;
  birthDate?: string;
  deathDate?: string;
  father?: IPerson[];
  mother?: IPerson[];
  spouse?: IPerson[];
  children?: IPerson[];
}
