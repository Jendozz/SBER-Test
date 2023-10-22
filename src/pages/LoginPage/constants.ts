import type { ILoginFormValues } from './types';

export const initialLoginFormValues: ILoginFormValues = {
    login: '',
    password: '',
};

export const FORM_ERROR__MESSAGES = {
    requiredFieldMessage: 'Не должно быть пустым',
    stringFieldMinMessage: 'Не менее 2 символов',
    stringFieldMaxMessage: 'Не более 30 символов',
};
