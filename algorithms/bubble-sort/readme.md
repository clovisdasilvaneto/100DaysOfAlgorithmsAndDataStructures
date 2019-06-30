## Bubble Sort

Bubble sort is an algorithm that takes an array with **n** inputs and sorts it based on the **current index** and **next index** of the current loop.

Basically, the example that I did on the `index.html` file has been written in the following way:

### Step 1 - Take the input and declare the function

```
//Original input
const a = [2, 6, 1, 4, 8, 3, 13, 123, 34, 1234, 11, 10];
```

As we will implement this algorithm showing the worst and better way, we don't want to mutate the original value, so we'll clone the original input and store it on two variables, which I called `firstWay` and `betterWay`:

```
function bubbleSort() {
  const firstWay = [...a];
  const betterWay = [...a];
}
```

### Step 2.a - Use the two `for` loops, one to go through the array and another one to compare the current value with the other one.

By using two `for` operations, we'll be able to go through the all values of the array, for each value of the current loop. For example, when `i = 0` we can compare all the values from the right without losing the index. So I wrote it in the following way:

```
  for (let i = 0; i < firstWay.length - 1; i++) {
    for (let j = 0; j < firstWay.length - 1; j++) {
      if (firstWay[j] > firstWay[j + 1]) {
        swap(firstWay, j, j + 1);
      }
    }
  }
```

I won't explain the `swap` function, as it's so simple and can be done in many different ways ;)

### Step 2.b.1 (the better way) - Use one `while` and one `for` loop, the while will receive a break condition, to prevent our loop to continue traversing the array unnecessarily

If you went to take a look at the beginning of the `bubbleSort` function, you might notice that I've declared a variable called `isSorted`. I've declared this variable to use it as a break condition on our `while` loop, because sometimes, depending on our input, the array is already sorted without needs of going to the end of the loop operation. For example, if we receive an input which the value is equal to `[1, 3, 2, 4]` we'll just need to do the **swap** one time. So I've implemented it in the following way:

```
  //(...)
  let isSorted;

  //(...)
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < lastSorted; i++) {
      if (betterWay[i] > betterWay[i + 1]) {
        swap(betterWay, i, i + 1);
        isSorted = false;
      }
    }
  }
```

So when the for loop ends without any **swap**, we can just stop the loop 👍

### Step 2.b.2 - Declare a last sorted variable, to avoid that the loop enters on positions which were already sorted

One tip is to declare a variable called `lastSorted` which will receive the length of the original input and each end of a loop, we can decrease the value of it. So we can change the `for` condition to something like this: 

```
  let lastSorted = betterWay.length - 1;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < lastSorted; i++) {
      if (betterWay[i] > betterWay[i + 1]) {
        swap(betterWay, i, i + 1);
        isSorted = false;
      }
    }
    lastSorted--;
  }
```

### Step 3 - Show the output

In my case, I just used a document.querySelector.innerHTML (as I used a `<b>` tag there) to update the DOM.

PS: If you took a look on the entire code, probably you noticed that I used `performance.now()` to measure the time that my algorithm takes, it's a best practice when you're debugging your code and implementing some algorithm or some other thing. 👍
