/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
        let count0 = 0;
    let count1 = 0;

    for (let s of students) {
        if (s === 0) count0++;
        else count1++;
    }

    for (let sw of sandwiches) {
        if (sw === 0) {
            if (count0 === 0) return count1;
            count0--;
        } else {
            if (count1 === 0) return count0;
            count1--;
        }
    }

    return 0;
};