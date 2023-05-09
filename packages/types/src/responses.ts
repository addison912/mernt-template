import { IUser } from './user';

/**
 * Field Error
 * @public
 */
export type FieldError = {
  field?: string;
  message?: string;
};
/**
 * Error Response
 * @public
 */
type ErrorResponse = {
  status: string;
  message: string;
};

/**
 * Field Error Response
 * @public
 */
export type FieldErrorResponse = Error & FieldError;

/**
 * HTTP Exception
 * @public
 */
export type HttpException = Error & ErrorResponse;

/**
 * User response
 * @public
 */
export type UserResponse = {
  user?: IUser;
  errors?: FieldErrorResponse[];
};
