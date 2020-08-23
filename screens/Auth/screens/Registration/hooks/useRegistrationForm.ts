import * as React from 'react';

import { useLogin, useForm, FormField, FormFields } from 'hooks';

type FieldName = 'email' | 'password' | 'passwordRepeat';
const fields: FieldName[] = ['email', 'password', 'passwordRepeat'];

type RegistrationFormHook = {
  fields: FormFields<FieldName>;
  submit: () => void;
}

const validator = (field: FormField<FieldName>, fields: FormFields<FieldName>): FormField<FieldName> => {
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
    case 'password': case 'passwordRepeat': {
      if (!field) {
        nextField.valid = false;
        nextField.error = 'Поле не может быть пустым'; 
      } else if (field.value.length < 6) {
        nextField.valid = false;
        nextField.error = 'Мин 6 символов'; 
      } else if (field.value.length > 50) {
        nextField.valid = false;
        nextField.error = 'Макс 50 символов'; 
      } else if (field.name === 'passwordRepeat' && field.value !== fields.password.value) {
        nextField.valid = false;
        nextField.error = 'Пароли не совпадают'; 
      } else {
        nextField.valid = true;
      }
      return nextField;
    }
    default:
      throw new Error('Invalid field');
  }
}

export const useRegistrationForm = (): RegistrationFormHook => {
  const Login = useLogin();
  const Form = useForm(fields, validator);

  const submit = React.useCallback(() => {
    const valid = Form.validate();

    if (valid) {
      Login.registration({
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
