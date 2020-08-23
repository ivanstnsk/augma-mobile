import * as React from 'react';

import { useLogin, useForm, FormField, FormFields } from 'hooks';

type FieldName = 'email' | 'password';
const fields: FieldName[] = ['email', 'password'];

type LoginFormHook = {
  fields: FormFields<FieldName>;
  submit: () => void;
}

const validator = (field: FormField<FieldName>): FormField<FieldName> => {
  const nextField = { ...field };

  switch (field.name) {
    case 'email': {
      if (!field) {
        nextField.valid = false;
        nextField.error = 'Поле не может быть пустым'; 
      } else if (field.value.length < 5) {
        nextField.valid = false;
        nextField.error = 'Мин 5 символов'; 
      } else if (field.value.length > 30) {
        nextField.valid = false;
        nextField.error = 'Макс 30 символов'; 
      } else {
        nextField.valid = true;
      }
      return nextField;
    }
    case 'password': {
      if (!field) {
        nextField.valid = false;
        nextField.error = 'Поле не может быть пустым'; 
      } else if (field.value.length < 6) {
        nextField.valid = false;
        nextField.error = 'Мин 6 символов'; 
      } else if (field.value.length > 50) {
        nextField.valid = false;
        nextField.error = 'Макс 50 символов'; 
      } else {
        nextField.valid = true;
      }
      return nextField;
    }
    default:
      throw new Error('Invalid field');
  }
}

export const useLoginForm = (): LoginFormHook => {
  const Login = useLogin();
  const Form = useForm(fields, validator);

  const submit = React.useCallback(() => {
    const valid = Form.validate();

    if (valid) {
      Login.login({
        username: Form.fields.email.value,
        password: Form.fields.password.value,
      });
    }
  }, []);
  
  return {
    fields: Form.fields,
    submit,
  }
}
