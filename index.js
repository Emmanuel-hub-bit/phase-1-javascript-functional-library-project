function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(callback(collection[key], key, collection));
        }
      }
    }
    return result;
  }

  function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue;
    let startIdx = 0;
    
    // If the collection is an object, convert its values to an array
    if (!Array.isArray(collection)) {
      collection = Object.values(collection);
    }
  
    // If no initial value is provided, use the first element of the collection
    if (accumulator === undefined) {
      accumulator = collection[0];
      startIdx = 1;
    }
  
    for (let i = startIdx; i < collection.length; i++) {
      accumulator = callback(accumulator, collection[i], collection);
    }
  
    return accumulator;
  }
  

  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        return collection[i];
      }
    }
    return undefined;
  }

  function myFilter(collection, predicate) {
    let result = [];
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        result.push(collection[i]);
      }
    }
    return result;
  }

  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }

  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }

  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }

  function myKeys(object) {
    return Object.keys(object);
  }

  function myValues(object) {
    return Object.values(object);
  }

  function arraysEqual(arrA, arrB) {
    if (arrA.length !== arrB.length) return false;
    for (let i = 0; i < arrA.length; i++) {
      if (Array.isArray(arrA[i]) && Array.isArray(arrB[i])) {
        if (!arraysEqual(arrA[i], arrB[i])) return false;
      } else if (arrA[i] !== arrB[i]) {
        return false;
      }
    }
    return true;
  }
  
  function objectsEqual(objA, objB) {
    return JSON.stringify(objA) === JSON.stringify(objB);
  }
  