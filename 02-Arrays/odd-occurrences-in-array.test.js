'use strict';

const solution = require("./odd-occurrences-in-array");

describe('OddOccurrencesInArray Tests', () => {

  // each element of array A is an integer within the range [1..1,000,000,000].
  test('each element of array A is an integer within the range [1..1,000,000,000].', () => {
    // arrange
    const A = [0, -1, 10, 5000000000, 1000000001]; // invalid values
    // act & assert
    expect(() => {
      solution(A)
    }).toThrow();
  });

  // test case to rotate A[1,2,3,4,5] K=2 return should be A[4,5,1,2,3]
  test('given A[9, 3, 9, 3, 9, 7, 9] should return 7.', () => {
    // arrange
    const A = [9, 3, 9, 3, 9, 7, 9];
    const expected = 7;
    // act
    const result = solution(A);
    // assert
    expect(result).toEqual(expected);
  });

  // test.each([
  //   [[3, 8, 9, 7, 6], 3, [9, 7, 6, 3, 8]],
  //   [[0, 0, 0], 1, [0, 0, 0]],
  //   [[1, 2, 3, 4], 4, [1, 2, 3, 4]],
  //   [[1, 2, 3, 4, 5], 2, [4, 5, 1, 2, 3]],
  //   [[1, 2, 3, 4, 5], 1, [5, 1, 2, 3, 4]],
  //   [[1, 2, 3, 4, 5], 3, [3, 4, 5, 1, 2]]
  // ])('array: %s and K: %i => %s', (A, K, expected) => {
  //   // each parameter goes into the test function: A, K, expected
  //   expect(solution(A, K)).toEqual(expected);
  // });

});

/*
Example Case	[9, 3, 9, 3, 9, 7, 9]	7	The primary example from the problem description.
Single Element	[42]	42	The smallest valid input array (N=1).
Paired Elements Only (Invalid Input)	[1, 1, 2, 2]	(Should not occur)	The problem assumes an odd N and one unpaired element, but a robust test suite might check for graceful failure/error handling if constraints are violated.
Large Numbers	[1000000000, 1000000000, 1]	1	Verifies handling of large integer values within the allowed range.
Unpaired at Ends	[7, 9, 9, 3, 3]	7	Checks if the solution correctly identifies the unpaired element at the beginning or end of the array.
Unpaired in Middle	[9, 9, 3, 7, 3, 5, 5]	7	Ensures the algorithm works when the unique element is not at the start or end.
Large Array (Performance Test)	[... many pairs ..., 5, ... many pairs ...]	5	Uses a large array (e.g., millions of elements) to test time complexity, ensuring an efficient solution (like using XOR) is necessary.
*/
