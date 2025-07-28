/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    let sortedArray = [];

    if (param === 'asc') {
        sortedArray = [...arr].sort((a, b) => (a.localeCompare(b, ['ru', 'en'], { caseFirst: "upper" }) <= 0 ? -1 : 1));
    } else {
        sortedArray = [...arr].sort((a, b) => (a.localeCompare(b, ['ru', 'en'], { caseFirst: "upper" }) > 0 ? -1 : 1));
    }

    return sortedArray;

}
//   понять почему не работает
//  return sortedArray = [...arr].sort((a,b) => (a.localeCompare(b, ['ru', 'en'],{caseFirst:"upper"}) <= 0 ? ((param === 'asc') ? -1 : 1) : ((param === 'desc') ? 1 : -1)));
