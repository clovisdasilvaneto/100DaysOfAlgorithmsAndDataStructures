const isMissingOperator = expression => {
  const stack = [];
  let missing;
  let i = 0;

  while (!missing && i < expression.length) {
    if (
      expression[i] === "(" ||
      expression[i] === "[" ||
      expression[i] === "{"
    ) {
      stack.push(expression[i]);
    } else if (
      expression[i] === ")" ||
      expression[i] === "]" ||
      expression[i] === "}"
    ) {
      const lastStackElement = stack[stack.length - 1];

      if (
        (lastStackElement === "(" && expression[i] === ")") ||
        (lastStackElement === "{" && expression[i] === "}") ||
        (lastStackElement === "[" && expression[i] === "]")
      ) {
        stack.pop();
      } else {
        missing = true;
      }
    }

    i++;
  }

  return missing || !!stack.length;
};

const expression = "22 * 3 + [( 2 * 3 )]";
const expression2 = "22 * 3 + [( 2 * 3 )";
const expression3 = "22 * 3 + [( 2 * 3 )]}";

console.log(isMissingOperator(expression));
console.log(isMissingOperator(expression2));
console.log(isMissingOperator(expression3));
console.log(`
----------------------------------------------
Time complexity: O(N) worst case
----------------------------------------------
`);
