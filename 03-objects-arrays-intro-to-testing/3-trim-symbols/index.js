/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    if (size === 0) {
        return '';
    }
    if (size === undefined) {
        return string;
    }

    let str = '';
    let j = 0;
    for (let i = 0; i < string.length; i++) {
        if (j < size) {
            str += string[i];
        }
        if (string[i] === string[i + 1]) {            
            j++;
        }
        else {
            j = 0;
        }
    }
    return str;

}
