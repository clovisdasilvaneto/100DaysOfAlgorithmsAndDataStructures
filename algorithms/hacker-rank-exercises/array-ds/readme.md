This example is based on the following code challenge: https://www.hackerrank.com/challenges/arrays-ds/problem

I could solve it by using `reverse` but the propose here is not to use built-in methods. I also could use `reduce` for it, eg:

```javascript
a.reduce((acc, val, index) => {
    acc[size - index] = val;
    return acc;
}, []);
```

But it is **O(N)2 - Quadratic** in terms of **space**. So I decided to came up with a **O(N)** solution in terms of space and time complexty 👍