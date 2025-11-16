### Lesson-01 - Iterations
---------------------------------------------------------------------------------------------------

https://app.codility.com/programmers/lessons/1-iterations/

---------------------------------------------------------------------------------------------------
[easy]

### BinaryGap

Find longest sequence of zeros in binary representation of an integer.

A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example,

- number 9 has binary representation 1001 and contains a binary gap of length 2.
- The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
- The number 20 has binary representation 10100 and contains one binary gap of length 1.
- The number 15 has binary representation 1111 and has no binary gaps.
- The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

    function solution(N);

that, given a positive integer N, returns the length of its longest binary gap.

The function should return 0 if N doesn't contain a binary gap.

For example,

- given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5.
- Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..2,147,483,647].

---------------------------------------------------------------------------------------------------

## Solution

The first lesson is "Iterations" and the task is "Binary Gap".
I created 2 files in the "01-Iterations" folder:

The first file is the code (solution) itself and it is called **"binary-gap.js"**:

```js
// binary-gap.js
'use strict';

module.exports = function solution(N) {
  var maxGap = 0;
  return maxGap;
}
```

The other file is the test suite for this problem, which is called **"binary-gap.test.js"**:

```js
// binary-gap.test.js
'use strict';

const solution = require("./binary-gap");

describe('BinaryGap Tests', () => {

  // The number 9 has binary representation 1001 and contains a binary gap of length 2
  test('Given 9 [1001] should return 2.', () => {
    expect(solution(9)).toBe(2);
  });

  // The number 15 has binary representation 1111 and has no binary gaps.
  test('Given 15 [1111] should return 0.', () => {
    expect(solution(15)).toBe(0);
  });

});
```

## Adding Unit Tests

Each test case will be added based on the instructions provided in the problem description.
Feel free to add more, start simple and add more as you go and look for edge cases or potential issues.
It is good to also add cases outside the scope or boundaries too.

I will start with these requirements and add some extra tests too:

- The number 9 has binary representation 1001 and contains a binary gap of length 2.
- The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
- The number 20 has binary representation 10100 and contains one binary gap of length 1.
- The number 15 has binary representation 1111 and has no binary gaps.
- The number 32 has binary representation 100000 and has no binary gaps.
- Given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5.
- Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

After adding the test cases to `binary-gap.test.js`, run the tests with:

`npm test`

The first time, all the tests will fail and this is expected.

```js
> codility-javascript@1.0.0 test
> jest

 FAIL  01-Iterations/binary-gap.test.js
  BinaryGap Tests
    × Given -10 should return 0. (4 ms)
    × Given 0 [0000] should return 0. (1 ms)
    × Given 2,147,483,648 should return 0. (1 ms)
    × Given 1 [0001] should return 0.
    × Given 5 [0101] should return 1. (1 ms)
    × Given 2147483647 [0111.1111.1111.1111.1111.1111.1111.1111] should return 0. (1 ms)
    × Given 9 [1001] should return 2. (1 ms)
    × Given 529 [1000010001] should return 4. (1 ms)
    × Given 20 [10100] should return 1. (1 ms)
    × Given 15 [1111] should return 0. (1 ms)
    × Given 32 [100000] should return 0

Test Suites: 1 failed, 1 total
Tests:       11 failed, 11 total
Snapshots:   0 total
Time:        0.444 s, estimated 1 s
```

**Note:** I added more tests for the min and max range and also some other test numbers. This is available in the lesson folder. This is why the test results show more items than the above results.

## Write Some Code

Now it is time to start writing the code.

Note that I don't have a "main" or "index" as an application entry point calling the **solution(N)** function.
This is intended and if I run `npm start` I will get an error.
I want to test my function in isolation, provide multiple inputs and evaluate the results.
This would be more difficult and time consuming to do without a test framework.

With the tests in place, I can now start writing the code to solve the problem.
I may even go back later and add more tests (for other uses cases), but this is enough for now.

The first thing I will do is to add some validations to the **solution(N)** function in the `binary-gap.js` file.

Provided that I have this statement in the problem description:

>  N is an integer within the range [1 .. 2,147,483,647].

I can add the first check:

```js
module.exports = function solution(N) {
  var zeros = 0;
  var maxGap = 0;

  // validations
  if (N < 1 || N > 2147483647) {
    return 0;
  }

  return maxGap;
}
```

Then run the tests again with:

`npm test`

And he result is:

```js
 FAIL  01-Iterations/binary-gap.test.js
  BinaryGap Tests
    √ Given -10 should return 0. (2 ms)
    √ Given 0 [0000] should return 0. (1 ms)
    √ Given 2,147,483,648 should return 0.
    × Given 1 [0001] should return 0. (2 ms)
    × Given 5 [0101] should return 1. (1 ms)
    × Given 2147483647 [0111.1111.1111.1111.1111.1111.1111.1111] should return 0.
    × Given 9 [1001] should return 2. (1 ms)
    × Given 529 [1000010001] should return 4.
    × Given 20 [10100] should return 1. (1 ms)
    × Given 15 [1111] should return 0.
    × Given 32 [100000] should return 0. (1 ms)

Test Suites: 1 failed, 1 total
Tests:       8 failed, 3 passed, 11 total
Snapshots:   0 total
Time:        0.512 s, estimated 1 s
```

Now I have some progress and 3 tests as passing!

The first 3 tests will check for numbers outside the scope (invalid inputs).

Next, I will start the problem/solution logic.


The first thing to consider is that my input number is a decimal number.
I need to convert it to its binary representation.

In JavaScript, the simplest and most common method to convert a decimal number to its binary representation is by using the built-in toString() method with a radix of 2.

See Javascript Number.prototype.toString() reference at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString).

```js
module.exports = function solution(N) {
  var zeros = 0;
  var maxGap = 0;

  // validations
  if (N < 1 || N > 2147483647) {
    return 0;
  }

  // first, convert the number to binary
  bin = n.toString(2);
  console.log(bin);

  return maxGap;
}
```

And run the tests again.

Note that I added the `console.log(bin);` after the conversion.
The reason for that is to see what the result is.
This is important because depending on (the language or) the result returned from the binary conversion function, I may need to remove the trailing zeros (they can be discared).

| dec | bin    | bytes     |
| --- | ------ | --------- |
| 1   | 1      | 0001      |
| 5   | 101    | 0101      |
| 7   | 111    | 0111      |
| 9   | 1001   | 1001      |
| 32  | 100000 | 0010.0000 |

**Disclaimer Note:**

> Here is one situation where it is OK to do a Google search.
> I usually work with multiple languages and environments (C#, C, C++, Python, JavaScript, PowerShell, T-SQL, TypeScript just to name a few) and there is no way to know all the syntaxes and parameters for all languages and functions.
>
> But there is a difference between asking "how to convert decimal to binary in JavaScript" to "give me the solution to this problem so I can copy it".
> Sometimes in a real work situation it is necessary to just get one solution and apply it, instead of reinventing the wheel and creating your own solution. Viewer discretion is advised.

I will remove the `console.log(bin);` now, because it affects performance. It is OK to have it while developing/debugging, but it is ideal to remove before shipping the code (when the work is done).



Assuming there is no trailing 0's, all numbers will start with 1 (see table above, column 'bin').
In this case, if the converted binary number can be accessed as an array, I can use an index/array syntax:

```
  N = 5 (decimal)
  bin = 101 (binary)
then
  bin[0] = 1
  bin[1] = 0
  bin[2] = 1
```

Next, I will iterate over the binary digits and count the ones that are 0:

```js
    // now iterate over the 0's and 1's and count
    for (var x = 0; x < bin.length; x++) {
        if (bin[x] == 0) {
            zeros++;
        }
    }
    maxGap = zeros;
    return maxGap;
```

Run the tests again:

```js
 FAIL  01-Iterations/binary-gap.test.js
  BinaryGap Tests
    √ Given -10 should return 0. (2 ms)
    √ Given 0 [0000] should return 0.
    √ Given 2,147,483,648 should return 0. (1 ms)
    √ Given 1 [0001] should return 0. (1 ms)
    √ Given 2147483647 [0111.1111.1111.1111.1111.1111.1111.1111] should return 0. (1 ms)
    √ Given 9 [1001] should return 2. (1 ms)
    × Given 529 [1000010001] should return 4. (2 ms)
    × Given 20 [10100] should return 1.
    √ Given 15 [1111] should return 0. (5 ms)
    × Given 32 [100000] should return 0. (1 ms)

  ● BinaryGap Tests › Given 529 [1000010001] should return 4.
    Expected: 4
    Received: 7

  ● BinaryGap Tests › Given 20 [10100] should return 1.
    Expected: 1
    Received: 3

  ● BinaryGap Tests › Given 32 [100000] should return 0.
    Expected: 0
    Received: 5

Test Suites: 1 failed, 1 total
Tests:       3 failed, 7 passed, 10 total
Snapshots:   0 total
Time:        0.499 s, estimated 1 s
```

This is interesting, the failed tests tell me that the returned value is wrong when
I have more than 2 gaps [1000010001] and [10100]
or when there is no 1 closing the last gap [100000].

To fix that I will need to modify my main loop and add some more checks.
I need to check for 1's too (closing gap).

```js
    // now iterate over the 0's and 1's and count
    for (var x = 0; x < bin.length; x++) {
        if (bin[x] == 0) { // means that there is gap
            zeros++;
        }
        if (bin[x] == 1) { // means that the gap ended
            // if the gap ended, check if this is biggest found
            if (zeros > maxGap) {
                maxGap = zeros;
            }
            // reset the zero counter
            zeros = 0;
        }
    }
    return maxGap;
```

Run the tests again:

```js
 PASS  01-Iterations/binary-gap.test.js
  BinaryGap Tests
    √ Given -10 should return 0. (3 ms)
    √ Given 0 [0000] should return 0.
    √ Given 2,147,483,648 should return 0. (1 ms)
    √ Given 1 [0001] should return 0.
    √ Given 2147483647 [0111.1111.1111.1111.1111.1111.1111.1111] should return 0.
    √ Given 9 [1001] should return 2.
    √ Given 529 [1000010001] should return 4.
    √ Given 20 [10100] should return 1.
    √ Given 15 [1111] should return 0. (1 ms)
    √ Given 32 [100000] should return 0. (1 ms)

Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        0.439 s, estimated 1 s
Ran all test suites.
```

And we have a solution!

Now I can start improving the solution, cleaning up the code, adding more tests.

### Suggestions

Sometimes, when I am working with the algorithm logic, I prefer to start with **Pseudocode**, so I don't have to worry about the syntax or language construction rules.

Something like this:

<pre>
  let zeros = 0; // zero counter
  let maxGap = 0; // max gap found

  // convert input N to bin
  let bin = ConvertToBinary(N);

  // example:
  // N = 5 (decimal) => bin = 101 (binary)
  // so
  // bin[0] = 1
  // bin[1] = 0
  // bin[2] = 1

  // loop through all binary digits
  for x = 0 to n.length:
    if x == 0 then
      // bin[0] = 1 first digit
      skip // do nothing
    end if
    if x > 0 then
      // second digit and on
      // check if is 0
      if bin[x] == 0 then // it is a 0 gap
        // increase out counter
        zeros++
      end if
      // save the maxGap number
      maxGap = zeros
    end if
  next x
  return maxGap
</pre>

Then it is easier later to find the correct syntax for the language I am using.
