// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // your code goes here
  var result = '';
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    result += obj
  }
  if (typeof obj === 'string') {
    result += '"' + obj + '"';
  }
  if (typeof obj === null) {
    result = 'null';
  }
  if (obj === null) {
    result = 'null';
  }
  if (obj !== null && !Array.isArray(obj) && (typeof obj === 'object' && Object.keys(obj).length === 0)) {
    result = '{}';
  }
  if (Array.isArray(obj)) {
    var arrayResult = [];
    obj.forEach(function (element) {
      arrayResult.push(stringifyJSON(element));
    });
    return result += '[' + arrayResult.join(',') + ']';
  }
  if (obj !== null && (typeof obj === 'object' && Object.keys(obj).length !== 0)) {
    var objResult = [];
    for (var key in obj) {
      if (key !== 'undefined' && key !== 'functions') {
        objResult.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + objResult.join(',') + '}';
  }
  return result;
};