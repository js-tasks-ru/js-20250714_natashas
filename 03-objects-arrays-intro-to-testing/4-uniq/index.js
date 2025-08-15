/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
    if(!arr || arr.length === 0) {
        return [];
    }
    const uniqSet = new Set(arr);
    let uniqArray = [];
    for (let uniq of uniqSet) {
        uniqArray.push(uniq);
    }
    return uniqArray;
}
