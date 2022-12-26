/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let {
        maxLen
    } = nums.reduce((acc, num) => {
        if (acc.max < num) {
            return {
                max: num,
                maxLen: 1,
                len: 1
            }
        } else if (acc.max == num) {
            acc.len += 1;

            if (acc.maxLen < acc.len) {
                acc.maxLen += 1;
            }
        } else {
            acc.len = 0;
        }

        return acc
    }, {
        max: 0,
        maxLen: 0,
        len: 0
    });

    return maxLen

};