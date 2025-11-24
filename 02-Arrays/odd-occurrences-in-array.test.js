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
  test('given: [9, 3, 9, 3, 9, 7, 9] should return 7.', () => {
    // arrange
    const A = [9, 3, 9, 3, 9, 7, 9];
    const expected = 7;
    // act
    const result = solution(A);
    // assert
    expect(result).toEqual(expected);
  });

  test.each([
    [[9, 3, 9, 3, 9, 7, 9], 7],
    [[42], 42],
    [[1, 1, 2, 2], 0], // invalid input case
    [[1000000000, 1000000000, 1], 1], // large numbers
    [[7, 9, 9, 3, 3], 7], // unpaired at ends
    [[9, 9, 3, 7, 3, 5, 5], 7], // unpaired in middle
  ])('array: %p and expected: %i ', (A, expected) => {
    // each parameter goes into the test function: A, K, expected
    expect(solution(A)).toEqual(expected);
  });

});

