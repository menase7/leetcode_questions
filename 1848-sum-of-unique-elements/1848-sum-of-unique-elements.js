/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let map = {};
    for(num of nums){
        if(map[num]){
            map[num]++
        } else{
            map[num]=1
        }
    }

    let sum=0;
    for(number in map){
        if(map[number]==1){
            sum += parseInt(number);
        }
    }

    return sum;
};