# Codility Lessons

The goal of this project is to show how to solve coding problems using TDD.
For this I will use the [Codility Developer Trining](https://app.codility.com/programmers/) site lessons.
Please go ahead and create an account there and start exploring.

In the process of learning or during a coding interview, the process (how) is much more important than the result itself.
If I only needed a solution I could simply Google it or use AI.
Your final solution may not even be complete, but through multiple iterations it can always be improved.
There are many ways to solve a problem (as you will see if you look for solutions on the Internet).
In a real world scenario, the solution may not be easily available, and some exploration and thinking may be necessary.

I will take a step-by-step approach showing the steps that any interviewer would like to see, providing explanations along the way.
In order to solve any problem, you need to understand it first. Then take gradual iterations, sometimes by trial and error, until a solution is achieved.
This is how things work in a company or the real world.

For the purpose of this exercise, I will use JavaScript since it is one of the most popular languages and requires less setup and tools.
Maybe later I will expand it to other languages like C# or Python.
I like to do this exercise to learn other languages or understand how it works.

I will use the Test Driven Development (TDD) approach, writing the tests first then the code.
This allows for more experimentation and helps with correctness.
The Codility tool will generate a suite of tests to validate the solution, but I can start with the information provided in the problem description.
Codility also has a timer, which I don't like - so running it locally can be less stressful.

## Lessons

In this page I will only address the first lesson.
Check each lesson for more details.

- [Lesson-01 - Iterations](01-Iterations\Lesson-01-Iterations.md)
- [Lesson-02 - Arrays](02-Arrays\Lesson-02-Arrays.md)
- [Lesson-03 - Time Complexity](03-Time-Complexity\Lesson-03-Time_Complexity.md)
- [Lesson-04 - Counting Elements](04-Counting-Elements\Lesson-04-Counting_Elements.md)
- [Lesson-05 - Prefix Sums](05-Prefix-Sums\Lesson-05-Prefix_Sums.md)
- [Lesson-06 - Sorting](06-Sorting\Lesson-06-Sorting.md)
- [Lesson-07 - Stacks and Queues](07-Stacks-and-Queues\Lesson-07-Stacks_and_Queues.md)
- [Lesson-08 - Leader](08-Leader\Lesson-08-Leader.md)
- [Lesson-09 - Maximum slice problem](09-Maximum-Slice-Problem\Lesson-09-Maximum_slice_problem.md)
- [Lesson-10 - Prime and composite numbers](10-Prime-and-Composite-Numbers\Lesson-10-Prime_and_composite_numbers.md)
- [Lesson-11 - Sieve of Eratosthenes](11-Sieve-of-Eratosthenes\Lesson-11-Sieve_of_Eratosthenes.md)
- [Lesson-12 - Euclidean algorithm](12-Euclidean-Algorithm\Lesson-12-Euclidean_algorithm.md)
- [Lesson-13 - Fibonacci numbers](13-Fibonacci-Nnumbers\Lesson-13-Fibonacci_numbers.md)
- [Lesson-14 - Binary search algorithm](14-Binary-Search-Algorithm\Lesson-14-Binary_search_algorithm.md)
- [Lesson-15 - Caterpillar method](15-Caterpillar-Method\Lesson-15-Caterpillar_method.md)
- [Lesson-16 - Greedy algorithms](16-Greedy-Algorithms\Lesson-16-Greedy_algorithms.md)
- [Lesson-17 - Dynamic programming](17-Dynamic-Programming\Lesson-17-Dynamic_programming.md)



## Setup

First, I need to install the tools. If you still don't have it, install:

- Node.JS (any LTS version is good).
- Visual Studio Code (or any other IDE that you like, even Notepad++ will do).

I will create a new project and install [Jest](https://jestjs.io/) to run the tests
(you can use Mocha or Jasmine if you like). Open the console or terminal and type (inside the project folder):

`npm init --yes`

`npm install --save-dev jest`

Modify the `package.json` file to run the tests:

```js
"scripts": {
    "test": "jest"
  },
```

Then you can run the tests with:

`npm test`


Next, create sub-folders, one for each lesson (to make it easy to find and keep it organized):

```
mkdir 01-Iterations
mkdir 02-Arrays
mkdir 03-Time-Complexity
mkdir 04-Counting-Elements
mkdir 05-Prefix-Sums
mkdir 06-Sorting
mkdir 07-Stacks-and-Queues
mkdir 08-Leader
mkdir 09-Maximum-Slice-Problem
mkdir 10-Prime-and-Composite-Numbers
mkdir 11-Sieve-of-Eratosthenes
mkdir 12-Euclidean-Algorithm
mkdir 13-Fibonacci-Nnumbers
mkdir 14-Binary-Search-Algorithm
mkdir 15-Caterpillar-Method
mkdir 16-Greedy-Algorithms
mkdir 17-Dynamic-Programming
```

I will start with the first lesson (warm-up), but the setup process will be the same for all.
The first lesson is "Iterations" and the task is "Binary Gap", so create 2 files in the "01-Iterations" folder:

The first file is the code (solution), I will call "binary-gap.js":

```js
// binary-gap.js
'use strict';

module.exports = function solution(n) {
  var maxGap = 0;
  return maxGap;
}
```
Next, create the test suite for this solution, I will call "binary-gap.test.js":


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

I will start with these items and add some extra tests:

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

Note: I added more tests for the min and max range and also more test numbers. This is available in the folder. This is why the test results show more tests.


## Write Some Code

Now it is time to start writing the code.

Note that I don't have a "main" or "index" as an application entry point calling the **solution(N)** function.
This is intended. If I run `npm start` I will get an error.
I want to test my function in isolation, provide multiple inputs and evaluate the results.
This would be more difficult and time consuming to do without a test framework.

With the tests in place, I can now start writing the code to solve the problem.
I may even go back later and add more tests (for other uses cases), but this is enough for now.

The first thing I will do is to add some validations to the **solution(N)** function in the `binary-gap.js` file.

Provided that I have this statement in the problem description:

>  N is an integer within the range [1 .. 2,147,483,647].

I will add the first check:

```js
module.exports = function solution(n) {
  var zeros = 0;
  var maxGap = 0;

  // validations
  if (n < 1 || n > 2147483647) {
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

Next, I will start the problem/solution logic.
First thing to consider is that my input number is a decimal number.
I need to convert it to its binary representation:

In JavaScript, the simplest and most common method to convert a decimal number to its binary representation is by using the built-in toString() method with a radix of 2.

Javascript Number.prototype.toString() reference at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString).

```js
module.exports = function solution(n) {
  var zeros = 0;
  var maxGap = 0;

  // validations
  if (n < 1 || n > 2147483647) {
    return 0;
  }

  // first, convert the number to binary
  n = n.toString(2);
  console.log(n);

  return maxGap;
}
```

And run the tests again.

Notice that I added the `console.log(n);` after the conversion.
The reason for that is to see what the result is.
This is important because depending on (the language or) the result returned from the binary conversion function, I may need to remove the trailing zeros before.


| dec | bin    | bytes |
|-----|--------|-------|
| 1   |      1 |  0001 |
| 5   |    101 |  0101 |
| 7   |    111 |  0111 |
| 9   |   1001 |  1001 |
| 32  | 100000 |  0010.0000 |

**Disclaimer Note:**

> Here is one situation where it is OK to do a Google search.
> I usually work with multiple languages and environments (C#, C, C++, Python, JavaScript, PowerShell, T-SQL, TypeScript just to name a few) and there is no way to know all the syntaxes and parameters for all languages and functions.
>
> But there is a difference between asking "how to convert decimal to binary in JavaScript" to "give me the solution to this problem so I can copy it".
> Sometimes in a real work situation it is necessary to just get one solution and apply it, instead of reinventing the wheel and creating your own solution. Viewer discretion is advised.

I will remove the `console.log(n);` now, because it affects performance. It is OK to have it while developing/debugging, but it is ideal to remove before shipping the code (when the work is done).

Assuming there is no trailing 0's, all numbers will start with 1 (see table above column 'bin').
In this case, if the converted binary number can be accessed as an array, I can use an index/array syntax:

```
  N = 5 (decimal)
  n = 101 (binary)
so
  n[0] = 1
  n[1] = 0
  n[2] = 1
```

Next, I will iterate over the binary digits and count the ones that are 0:

```js
	// now iterate over the 0's and 1's and count
	for (var x = 0; x < n.length; x++) {
		if (n[x] == 0) {
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
	for (var x = 0; x < n.length; x++) {
		if (n[x] == 0) { // means that there is gap
			zeros++;
		}
		if (n[x] == 1) { // means that the gap ended
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
  let n = ConvertToBinary(N);

  // example:
  // N = 5 (decimal) => n = 101 (binary)
  // so
  // n[0] = 1
  // n[1] = 0
  // n[2] = 1

  // loop through all binary digits
  for x = 0 to n.length:
    if x == 0 then
      // n[0] = 1 first digit
      skip // do nothing
    end if
    if x > 0 then
      // second digit and on
      // check if is 0
      if n[x] == 0 then // it is a 0 gap
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
