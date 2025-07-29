/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const fieldsArray=[...fields];
  const objEntries = Object.entries(obj);
  let newObj = {};
 
 for (let i = 0; i < objEntries.length; i++) {   
    const a = objEntries[i];
    if (fieldsArray.includes(a[0])) {        
       continue; // Skip the fields that are to be omitted
    } else {
      newObj[a[0]] = a[1]; // Add the remaining fields to the new object
    }   
 }
 return newObj;
};
