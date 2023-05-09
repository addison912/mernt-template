import { FieldError } from '@/../../types/src';

export class FieldErrorResponse {
  public errors: FieldError[];

  constructor(errors: FieldError[]) {
    this.errors = errors;
  }
}
