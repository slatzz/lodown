'use strict';

// YOU KNOW WHAT TO DO //

/**
 * 1. identity
 * 
 * Designed to return the given input value.
 * 
 * @param: {*}, Value: Can be any datatype.
 * 
 * @return: {*}, Value: The given input value, unchanged.
 * 
 */
 
 function identity(value){
    return value;
};

module.exports.identity = identity;

/**
 * 2. typeOf
 * 
 * Designed to take an input value and return its datatype as a string.
 * 
 * @param: {*}, Value: Can be any datatype.
 * 
 * @return: {String}, "", the input value's datatype returned as a string.
 * 
 */
 
function typeOf(value){

    let type = typeof(value);
    
    if(type == "object"){ 
        
        if(Array.isArray(value)){ 
            type = "array";
            return type;
            
        } else if(value === null){
            type = "null";
            return type;
        }
    }
         return type;
    };

module.exports.typeOf = typeOf;



/**
 * 3. first
 * 
 * Designed to return the first number of elements as specified by a given input number. If the array is not an array, 
 * or if the number is negative, an empty array will be returned. If the array is empty, the first element of the array
 * will be returned. If the number is greater than the length of the array, the whole array will be returned.
 * 
 * @param: {Array}, []: Can be any array.
 * 
 * @param: {Number}, Number: Can be any number.
 * 
 * @return: {*}, Value(s): The first number of specified elements, which can be any datatype.
 * 
 */
 
  function first(array, number){
     
     if(!Array.isArray(array) || number <= 0){
         return [];
     } 
    
     let elements = [];

     for(let i = 0; i < array.length && i < number; i++){ 
         elements.push(array[i]);
     } 
     
     if(elements.length === 0){ 
         elements = array[0]; 
     }
     return elements;
 };

module.exports.first = first;


/**
 * 4. last
 * 
 * Designed to return a specified number of the last elements of the array. If the array is not an array or if the 
 * number is negative, an empty array will be returned. If the number is greater than the length of the array, the 
 * whole array is returned. If the array is empty or a number is not given, the last element of the array will be
 * returned.
 * 
 * @param: {Array}, []: Can be any array.
 * 
 * @param: {Number}, Number: Can be any number.
 * 
 * @return: {*}, the last number of specified elements, which can be any datatype.
 */
 
 function last(array, number){
   
    let lastElements = [];
    let i;
    
    if(!Array.isArray(array) || number <= 0){
        return [];
    } 

    number > array.length ? i = 0: i = array.length - number;

    for(i; i < array.length; i++){ 
        lastElements.push(array[i]);
    }
    if(lastElements.length === 0 || isNaN(number)){
        return array[array.length - 1];
    }   
        return lastElements;
    };

 module.exports.last = last;



/**
 * 5. indexOf
 * 
 * Designed to return the numerical index of a specified value within an array. If the value occurs multiple times in the array,
 * the index of its first occurrence will be returned. If the value is not found within the array, -1 will be 
 * returned.
 * 
 * @param: {Array}, []: Can be any array.
 * 
 * @param: {*}, Value: Can be any datatype.
 * 
 * @return: {Number}, Number: Number representing the index of the given value. 
 * 
 */
 
 function indexOf(array, value){
    
  for(let i = 0; i < array.length; i++){
            if(array[i] === value){
                return i;
            }   
        }
        return -1;
    };
    
module.exports.indexOf = indexOf;


/**
 * 6. contains
 * 
 * Designed to return a Boolean value. If a given array contains a given value, will return true. Will return
 * false, otherwise. 
 * 
 * @param: {Array}, []: Can be any array.
 * 
 * @param: {*}, Value: Can be any datatype.
 * 
 * @return: {Boolean}, will return either true or false.
 * 
 */
 
 function contains(array, value){
   return array.includes(value) ? true: false;
};

module.exports.contains = contains;


/**
 * 7. each
 * 
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object}, Collection: The array, [], or object, {} over which to iterate. 
 * Can be any array or object.
 * 
 * @param {Function} Action: A function that will perform an action on the array's/object's elements/properties, indices/key/value pairs, 
 * and the entire array or object. 
 * 
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**
 * 8. unique
 * 
 * Designed to remove all duplicates within an array and return a new array with only unique values.
 * 
 * @param: {Array}, []: Can be any array with duplicate elements.
 * 
 * @return: {A new array}, [], with unique values and all duplicates removed.
 * 
 */
 
 function unique(array){
    
        let uniqueArray = [];
 
    for(let i = 0; i < array.length; i++){
        if(!uniqueArray.includes(array[i]) && (indexOf(array, array[i]) !== -1)){
            uniqueArray.push(array[i]);
        } 
    }
   
    return uniqueArray;
};
module.exports.unique = unique;



/**
 * 9. filter
 * 
 * Designed to take an array and pass a function over its elements. All elements that evaluate to true
 * after the function passes over it are pushed into a new array with all truthy values. 
 * 
 * @param: {Array}, []: Can be any array.
 * 
 * @param: {Function}, Action: A function that will perform an action on the array's elements, indices, 
 * and the entire array.
 * 
 * @return: {Array}, [], a new array with all values that returned true.
 * 
 */
 
 function filter(array, action){

let filtered = [];

each(array, function(element, index, array){
  
    if(action(element, index, array)){
     filtered.push(element);
    }
});
return filtered;
};
module.exports.filter = filter;



/**
 * 10. reject
 * 
 * Designed to take an array and pass a function over all of its elements. If the elements result to false after
 * the function has passed over them, then they are pushed into a new array with all other elements that returned
 * false.
 * 
 * @param: {Array}, []: Can be any array.
 * 
 * @param: {Function}, Action: A function that will perform an action on the array's elements, indices, 
 * and the entire array.
 * 
 * @return: {Array}, [], a new array with all elements that returned false.
 * 
 */
 
 function reject(array, action){
    
let rejects = [];

each(array, function(element, index, array){
   
    if(!action(element, index, array)){
     rejects.push(element);
    }
});

return rejects;
};
module.exports.reject = reject;



/**
 * 11. partition
 * 
 * Designed to take an array and a function. Will pass the function over all the elements in the array and push
 * the elements that returned true into a new array, will push all the elements that returned false into a separate 
 * array, and will push both of the subarrays into a final array in which they are contained.
 * 
 * @param: {Array}, []: Can be any array.
 * 
 * @param: {Function}, Action: A function that will perform an action on the array's elements, indices,
 * and the entire array.
 * 
 * @return: {Array}, [], will return an array containing two subarrays.
 * 
 */
 
function partition(array, action){
    
let finalArray = [];
let truthyArray = [];
let falseyArray = [];

each(array, function(element, index, array){
    action(element, index, array) ? truthyArray.push(element) : falseyArray.push(element);
});

finalArray.push(truthyArray, falseyArray);

return finalArray;
};
module.exports.partition = partition;




/**
 * 12. map
 * 
 * Designed to take in a collection (array or object) and pass a function over its contents. Will push all of the 
 * modified elements/properties into a new array once the function has been called over all of its contents.
 * 
 * @param: {Array or Object}, Collection: Can be any array, [], or object, {}.
 * 
 * @param: {Function}, Action: A function that will perform an action on the collection's elements/properties, indices/key/value
 * pairs, and over the entire array or object.
 * 
 * @return: {Array}, [], will return an array with the modified elements/properties.
 * 
 */ 
 
function map(collection, action){

let mapArray = [];

if(Array.isArray(collection)){ 
    for(let i = 0; i < collection.length; i++){
        mapArray.push(action(collection[i], i, collection));
} 
} else if(typeOf(collection) === "object"){
    for(let key in collection){ 
        mapArray.push(action(collection[key], key, collection));
    }
} 
return mapArray;

};
module.exports.map = map;



/**
 * 13. pluck
 * 
 * Designed to map over an array containing objects and return all of its values as strings within a new array.
 * 
 * @param: {Array}, []: Can be any array containing objects.
 * 
 * @param: {String}, "", Property: A string representing the name of the object's key property.
 * 
 * @return: {Array}, [], a new array containing the object's values represented as strings.
 * 
 */
 
 function pluck(arrayOfObjs, prop){
    
    let plucked = [];
    
       map(arrayOfObjs, function(objInArr, i, arrayOfObjs){
                plucked.push(arrayOfObjs[i][prop]);
        });
        
        return plucked;
};
module.exports.pluck = pluck;


/**
 * 14. every
 * 
 * Designed to call a function over a collection's contents and return true if every element/property returned
 * true after the function is called, or if there are truthy results and no function is given. Will return false if at least one element/property 
 * returns false or if there are falsey results and no function is given.
 * 
 * @param: {Array or Object}, Collection: Can be any array, [], or object, {}.
 * 
 * @param: {Function}, Action: A function that will perform an action on the collection's contents.
 * 
 * @return: {Boolean}, returns either true or false.
 * 
 */
 
 function every(collection, action){
    
    let result = true;
    
   each(collection, function(element, index, collection){
       
       if(arguments.length > 1 && typeOf(action) === "function"){
           !action(element, index, collection) ? result = false : result;
       } 
            else { 
                !element ? result = false : result;
            }
       });
            return result;
};
module.exports.every = every;



/**
 * 15. some
 * 
 * Designed to call a function over a collection's contents and return true if at least one element/property returned
 * true after the function is called, or if there are truthy results and no function is given. Will return false when no element/property 
 * returns true or if no function is given and all values are falsey.
 * 
 * @param: {Array or Object}, Collection: Can be any array, [], or object, {}.
 * 
 * @param: {Function}, Action: A function that will perform an action on the collection's contents.
 * 
 * @return: {Boolean}, returns either true or false.
 * 
 */
 
 function some(collection, action){
    
    let result = false;
    
    each(collection, function(element, index, collection){
       
       if(arguments.length > 1 && typeOf(action) === "function"){
           action(element, index, collection) ? result = true : result;
       } 
            else { 
                element ? result = true : result;
            }
       });
            return result;
};
module.exports.some = some;


/**
 * 16. reduce
 * 
 * Designed to take an array, a function, and a seed. Will pass the function over the elements in the array
 * and return the result of the function call. If no seed is given, the seed will be assigned to the first element
 * of the array.
 * 
 * @param: {Array}, []: Can be any array.
 * 
 * @param: {Function}, Action: A function that will perform an action on the collection's contents.
 * 
 * @param: {*}, Seed: Can be any value and datatype.
 * 
 * @return: {*}, will return the result of the function call upon the array's elements. 
 * 
 */
 
 function reduce(array, action, seed = array[0]){ 
    let result = seed;
   
    let i;
        
        for(arguments.length === 3 ? i = 0 : i = 1; i < array.length; i++){
            result = action(result, array[i], i);
        } 
    return result;
};
module.exports.reduce = reduce;


/**
 * 17. extend
 * 
 * Designed to take in multiple objects and update the first object with the other provided objects' properties.
 * 
 * @param: {Object}, {}: Can be any object.
 * 
 * @param: {Object}, {}: Any specified number of other objects.
 * 
 * @return: {Object}, {}, the first object, updated with the other objects' properties.
 * 
 */
 
 function extend(object, ...objects){ 
    
    for(let i = 0; i < objects.length; i++){ 
        
        let currObj = objects[i];
        
        for(let key in currObj){ 
            object[key] = currObj[key]; 
        }
    }
    
    return object;
    
};
module.exports.extend = extend;