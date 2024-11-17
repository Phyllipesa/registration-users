
/**
 * @description - Convert date string to date object
 *
 * @param date
 * @returns Date or NULL if date is invalid
 */
export const convertPtBrDateToDateObj = (date: string): Date | null => {
    if (!date) return null;

    const [day, month, year] = date.split('/').map(Number);

    if (isValidDate(day, month, year)) {
        return new Date(year, month - 1, day);
    }
    
    return null;
}

/**
 * @description - Check if date is valid
 *
 * @param day
 * @param month
 * @param year
 * @returns true if date is valid, false otherwise
 */
const isValidDate = (day: number, month: number, year: number): boolean => {
    const date = new Date(year, month - 1, day);

    return (
        date.getDate() === day &&
        date.getMonth() === month - 1 &&
        date.getFullYear() === year
    );
}