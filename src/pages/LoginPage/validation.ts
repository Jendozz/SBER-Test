import * as yup from 'yup';

import { FORM_ERROR__MESSAGES } from './constants';

export const setLoginFormSchema = () => {
    return yup.object().shape({
        login: yup
            .string()
            .trim()
            .min(2, FORM_ERROR__MESSAGES.stringFieldMinMessage)
            .max(30, FORM_ERROR__MESSAGES.stringFieldMaxMessage)
            .required(FORM_ERROR__MESSAGES.requiredFieldMessage),
        password: yup
            .string()
            .trim()
            .required(FORM_ERROR__MESSAGES.requiredFieldMessage),
    });
};
