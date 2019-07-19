//I've implemented this one, where the time complexty is O(n)
//and instead of using dictionary I could use hash table 👍
function getComparison(phrase, searchString) {
  const dictionary = {};
  let result = "NO";

  for (let i = 0; i < phrase.length; i++) {
    dictionary[phrase[i]] = true;
  }

  for (let i = 0; i < searchString.length; i++) {
    if (dictionary[searchString[i]]) {
      result = "YES";
    }
  }

  return result;
}

// I'm creating the dictionary based on the small string,
//to decrease the size of the alocated memory at dictionary variable
function twoStrings(s1, s2) {
  if (s1.length < s2.length) {
    return getComparison(s1, s2);
  }

  return getComparison(s2, s1);
}
