export const SPACE_REG_EXP = /[\s](?=\s)/g;

export const replaceSpaces = (text: string) =>
    text.replaceAll(SPACE_REG_EXP, '');
