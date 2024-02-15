import { FieldError } from '../../../types';

export const toErrorMap = (errors: FieldError[]) => {
  const errorMap: Record<string, string> = {};
  errors.forEach(({ field, message }) => {
    const checkedField = field == undefined ? 'field not specified' : field;
    const checkedMessage = message == undefined ? 'message not specified' : message;
    errorMap[checkedField] = checkedMessage;
  });

  return errorMap;
};
