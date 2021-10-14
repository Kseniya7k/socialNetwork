export const required = (value) => {
    if (value) return undefined;

    return "Нет текста";
}

export const maxLengthCreator = (maxLength, messageError) => (value) => {
    if (value && value.length > maxLength) return `Превышена максимальна длинна ${messageError}, допустимо только ${maxLength} символов`;

    return undefined;
}