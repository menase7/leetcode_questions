/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let result = [];
    let index = 0;
     while(index<arr.length){
        let chunked=arr.slice(index, index+size);
        result.push(chunked);
        index+=size;
     }
     return result;
};
