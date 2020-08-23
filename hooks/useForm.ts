import * as React from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export type FormField<FieldName> = {
  name: FieldName;
  value: string;
  valid: boolean;
  error: string;
  onChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export type FormFields<FieldName extends string> = Record<FieldName, FormField<FieldName>>;

type FormHook<FieldName extends string> = {
  fields: FormFields<FieldName>;
  changeField: (field: FieldName, event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  getChangeFieldHandler: (field: FieldName) => 
    (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  validate: () => boolean;
}

const prepareInitFields = <FieldName extends string>(initFields: FieldName[]): FormFields<FieldName> => {
  const fields = {} as FormFields<FieldName>;
  initFields.forEach((name) => {
    fields[name] = {
      name,
      value: '',
      valid: true,
      error: '',
      onChange: () => {},
    };
  });
  return fields;
};

export const useForm = <FieldName extends string>(
  names: FieldName[],
  validateField: (field: FormField<FieldName>, fields: FormFields<FieldName>) => FormField<FieldName>
): FormHook<FieldName> => {
  const initFields = prepareInitFields(names);
  const [fields, setFields] = React.useState<FormFields<FieldName>>(initFields);

  const changeField = (field: FieldName, event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const nextFields = { ...fields };
    nextFields[field].value = event.nativeEvent.text;
    nextFields[field].valid = true;
    nextFields[field].error = '';
    setFields(nextFields);
  }

  const getChangeFieldHandler = (field: FieldName) => {
    return (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
      return changeField(field, event);
    }
  }

  const validate = React.useCallback(() => {
    const nextFields = { ...fields };
    const keys = Object.keys(nextFields) as FieldName[];
    keys.forEach((key) => {
      nextFields[key] = validateField(nextFields[key], fields);
    });
    setFields(nextFields);

    const map = Object.values(nextFields) as FormField<FieldName>[];
    return map.every(({ valid }) => valid);
  }, [fields]);

  React.useEffect(() => {
    const nextFields = { ...fields };
    const keys = Object.keys(nextFields) as FieldName[];
    keys.forEach((key) => {
      nextFields[key].onChange = getChangeFieldHandler(key);
    });
    setFields(nextFields);
  }, []);

  return {
    fields,
    changeField,
    getChangeFieldHandler,
    validate,
  }
}
