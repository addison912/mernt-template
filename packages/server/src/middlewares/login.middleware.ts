import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { RequestHandler } from 'express';
import { HttpException } from '@exceptions/HttpException';
import { FieldError } from '@/../../types/src';

const fieldValidationMiddleware = (
  type: ClassConstructor<object>,
  value: string | 'body' | 'query' | 'params' = 'body',
  skipMissingProperties = false,
  whitelist = true,
  forbidNonWhitelisted = true,
): RequestHandler => {
  return (req, res, next) => {
    validate(plainToInstance(type, req[value as keyof typeof req]), { skipMissingProperties, whitelist, forbidNonWhitelisted })
      .then((err: ValidationError[]) => {
        if (err.length > 0) {
          let errors: FieldError[] = [];
          err.forEach(error => {
            const message = typeof error.constraints != 'undefined' ? Object.values(error.constraints).join(', ') : 'Error message not available';
            const field = typeof error.property != 'undefined' ? error.property : '';
            errors.push({ field, message });
          });
          next(res.json({ errors }));
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

export default fieldValidationMiddleware;
