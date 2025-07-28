/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
 const fieldsArray=[...fields];
 let objEntries = Object.entries(obj);
 let newObj = {};
 
 for (let i = 0; i < fieldsArray.length; i++) {   
    let a = objEntries[i];   
    if(a[0] === fieldsArray[i]) {        
       newObj[fieldsArray[i]] = a[1];
    }
 }
 return newObj;
};
