import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { RequestHandler } from 'express';
import { HttpException } from '@exceptions/HttpException';

const validationMiddleware = (
  type: ClassConstructor<object>,
  value: string | 'body' | 'query' | 'params' = 'body',
  skipMissingProperties = false,
  whitelist = true,
  forbidNonWhitelisted = true,
): RequestHandler => {
  return (req, _res, next) => {
    validate(plainToInstance(type, req[value as keyof typeof req]), { skipMissingProperties, whitelist, forbidNonWhitelisted })
      .then((errors: ValidationError[]) => {
        if (errors.length > 0) {
          const message = errors
            .map((error: ValidationError) =>
              error && typeof error.constraints != 'undefined' ? Object.values(error.constraints) : 'Error message not available',
            )
            .join(', ');
          next(new HttpException(400, message));
        } else {
          next();
        }
      })
      .catch((errors: ValidationError[]) => {
        if (errors.length > 0) {
          const message = errors
            .map((error: ValidationError) =>
              error && typeof error.constraints != 'undefined' ? Object.values(error.constraints) : 'Error message not available',
            )
            .join(', ');
          next(new HttpException(500, message));
        } else {
          next();
        }
      });
  };
};

export default validationMiddleware;
