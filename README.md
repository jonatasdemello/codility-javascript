# Codility Lessons Using TDD

The goal of this project is to show how to solve coding problems using [TDD - Test Driven Development](https://martinfowler.com/bliki/TestDrivenDevelopment.html).

For this I will use the [Codility Developer Training](https://app.codility.com/programmers/) site lessons.
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
Check each lesson below for more details and other problems.

- [Lesson-01 - Iterations](01-Iterations/Lesson-01-Iterations.md)
- [Lesson-02 - Arrays](02-Arrays/Lesson-02-Arrays.md)
- [Lesson-03 - Time Complexity](03-Time-Complexity/Lesson-03-Time_Complexity.md)
- [Lesson-04 - Counting Elements](04-Counting-Elements/Lesson-04-Counting_Elements.md)
- [Lesson-05 - Prefix Sums](05-Prefix-Sums/Lesson-05-Prefix_Sums.md)
- [Lesson-06 - Sorting](06-Sorting/Lesson-06-Sorting.md)
- [Lesson-07 - Stacks and Queues](07-Stacks-and-Queues/Lesson-07-Stacks_and_Queues.md)
- [Lesson-08 - Leader](08-Leader/Lesson-08-Leader.md)
- [Lesson-09 - Maximum slice problem](09-Maximum-Slice-Problem/Lesson-09-Maximum_slice_problem.md)
- [Lesson-10 - Prime and composite numbers](10-Prime-and-Composite-Numbers/Lesson-10-Prime_and_composite_numbers.md)
- [Lesson-11 - Sieve of Eratosthenes](11-Sieve-of-Eratosthenes/Lesson-11-Sieve_of_Eratosthenes.md)
- [Lesson-12 - Euclidean algorithm](12-Euclidean-Algorithm/Lesson-12-Euclidean_algorithm.md)
- [Lesson-13 - Fibonacci numbers](13-Fibonacci-Nnumbers/Lesson-13-Fibonacci_numbers.md)
- [Lesson-14 - Binary search algorithm](14-Binary-Search-Algorithm/Lesson-14-Binary_search_algorithm.md)
- [Lesson-15 - Caterpillar method](15-Caterpillar-Method/Lesson-15-Caterpillar_method.md)
- [Lesson-16 - Greedy algorithms](16-Greedy-Algorithms/Lesson-16-Greedy_algorithms.md)
- [Lesson-17 - Dynamic programming](17-Dynamic-Programming/Lesson-17-Dynamic_programming.md)


## Setup

### Tools

First, install the development tools. If you don't have it, please install:

- Node.JS (any LTS version is good).
- Visual Studio Code (or any other IDE that you like, even Notepad++ will do).

I decided to use Node.JS and JavaScript so it can run on Mac, Windows or Linux.
Also, it can run on "watch mode" re-running tests automatically after any file changed.

### Project

Next, I create a new project and install [Jest](https://jestjs.io/) to run the tests
(you can use Mocha or Jasmine if you like).
Open the console or terminal, create a new folder for the project and then type (inside the project folder):

`npm init --yes`

`npm install --save-dev jest`

Then modify the `package.json` file to run the tests:

```js
"scripts": {
    "test": "jest"
  },
```

Then you can run the tests with:

`npm test`

To run in "watch mode":

`npm run test -- --watch`

Or to show more information:

`npm run test -- --verbose`

Next, create sub-folders, one for each lesson (to make it easy to find and keep it organized):

```bash
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

Now I am ready to starting solving some problems using TDD.
Here I will start with the first lesson (warm-up), but the setup process will be the same for all.

### Template

Since I will be working on multiple problems and they all start the same way,
I will create a template so I can duplicate it for each new problem and start from there.

The first file is the solution code and it is called **"solution-template.js"**:

```js
// solution-template.js
'use strict';

module.exports = function solution(N) {
  // your code here
  return 1;
}
```

The other file is the test suite for this problem called **"solution-template.test.js"**:

```js
// solution-template.test.js
'use strict';

const solution = require("./solution-template");

describe('solution-template tests', () => {

  test('given 1 should return 1.', () => {
    expect(solution(X)).toBe(Y);
  });

});
```

And with that I can just run `npm test` and see the results:

```
PS > npm test

> codility-javascript@1.0.0 test
> jest

 PASS  00-template/solution-template.test.js
  Template Tests
    √ given 1 should return 1. (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.492 s, estimated 1 s
Ran all test suites.
```

Here I have

- one Test Suite defined with "describe()" and

- one Unit Test defined with "test()".



## The Problem

The fist lesson/problem to solve is called **BinaryGap** copied from [Codility](https://app.codility.com/programmers/lessons/1-iterations/binary_gap/) web site.


The step-by-step process and solution is here [BinaryGap.md](./01-Iterations/BinaryGap.md)

-------------------

### Solutions

- [Lesson-01 - Iterations](01-Iterations/Lesson-01-Iterations.md)
  - [Binary Gap](./01-Iterations/BinaryGap.md)
- [Lesson-02 - Arrays](02-Arrays/Lesson-02-Arrays.md)
  - [Cyclic Rotation](./02-Arrays/CyclicRotation.md)
  - [Odd Occurrences In Array](./02-Arrays/OddOccurrencesInArray.md)
- [Lesson-03 - Time Complexity](03-Time-Complexity/Lesson-03-Time_Complexity.md)
- [Lesson-04 - Counting Elements](04-Counting-Elements/Lesson-04-Counting_Elements.md)
- [Lesson-05 - Prefix Sums](05-Prefix-Sums/Lesson-05-Prefix_Sums.md)
- [Lesson-06 - Sorting](06-Sorting/Lesson-06-Sorting.md)
- [Lesson-07 - Stacks and Queues](07-Stacks-and-Queues/Lesson-07-Stacks_and_Queues.md)
- [Lesson-08 - Leader](08-Leader/Lesson-08-Leader.md)
- [Lesson-09 - Maximum slice problem](09-Maximum-Slice-Problem/Lesson-09-Maximum_slice_problem.md)
- [Lesson-10 - Prime and composite numbers](10-Prime-and-Composite-Numbers/Lesson-10-Prime_and_composite_numbers.md)
- [Lesson-11 - Sieve of Eratosthenes](11-Sieve-of-Eratosthenes/Lesson-11-Sieve_of_Eratosthenes.md)
- [Lesson-12 - Euclidean algorithm](12-Euclidean-Algorithm/Lesson-12-Euclidean_algorithm.md)
- [Lesson-13 - Fibonacci numbers](13-Fibonacci-Nnumbers/Lesson-13-Fibonacci_numbers.md)
- [Lesson-14 - Binary search algorithm](14-Binary-Search-Algorithm/Lesson-14-Binary_search_algorithm.md)
- [Lesson-15 - Caterpillar method](15-Caterpillar-Method/Lesson-15-Caterpillar_method.md)
- [Lesson-16 - Greedy algorithms](16-Greedy-Algorithms/Lesson-16-Greedy_algorithms.md)
- [Lesson-17 - Dynamic programming](17-Dynamic-Programming/Lesson-17-Dynamic_programming.md)

