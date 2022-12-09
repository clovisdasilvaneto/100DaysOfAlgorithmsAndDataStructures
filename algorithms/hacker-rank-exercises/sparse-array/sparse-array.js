const matchingStrings = (stringList, queries) => {
    const hashMap = queries.reduce((acc, query) => ({
        ...acc,
        [query]: 0
    }), {})

    stringList.forEach(listItem => {
        if (typeof hashMap[listItem] === "number") {
            hashMap[listItem] += 1;
        }
    })

    return queries.map((query) => hashMap[query])
}

const stringList = ["ab", "ab", "abc"];
const queries = ["ab", "abc", "bc"];

console.log(matchingStrings(stringList, queries));