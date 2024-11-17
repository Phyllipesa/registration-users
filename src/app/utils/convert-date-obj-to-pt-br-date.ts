/**
 *  convertDateObjToPtBrDate
 * 
 *  Get an object date and convert to a string date in format dd/mm/yyyy
 * 
 * @param date 
 * @returns string
 */
export const convertDateObjToPtBrDate = (date: Date): string  => {
    const day = padZero(date.getDate());
    const month = padZero(date.getMonth() + 1);
    const year = date.getFullYear();

    return `${day}/${month}/${year}`
}

/**
 *  padZero
 *
 *  Add a zero to the left of the number if it is less than 10
 *
 * @param value
 * @returns string
 */
const padZero = (value: number): string => {
    return value < 10 ? `0${value}` : value.toString();
}