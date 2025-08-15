/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
    if (!obj) {
        return undefined; // Return undefined if obj is not an object or is null
    }
    const Entries = Object.entries(obj);   
  
    return Object.fromEntries(Entries.map(([key, value]) =>[value,key]));

}
