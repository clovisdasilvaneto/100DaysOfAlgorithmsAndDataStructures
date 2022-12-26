/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    const hash = heights.reduce((acc, current, index) => {
        acc[current] = names[index];

        return acc;
    }, {})

    return Object.keys(hash).map((key) => hash[key]).reverse();
};