'use strict';

const solution = require("./cyclic-rotation");

describe('CyclicRotation Tests', () => {

  // function solution(A, K);
  // A: array of N integers;
  // K: integer representing number of rotations;
  //
  // N and K are integers within the range [0..100];
  // array A consisting of N integers is given.
  // each element of array A is an integer within the range [−1,000..1,000].

  // N and K are integers within the range [0..100];
  test('N and K are integers within the range [0..100];', () => {

    // K: rotations = less than 0 or greater than 100
    expect(() => {
      solution(new Array(1), -1)
    }).toThrow("Parameter K is invalid!");

    expect(() => {
      solution(new Array(1), 101)
    }).toThrow("Parameter K is invalid!");

    // N: number of elements in A[] = less than 0 or greater than 100
    // an array cannot have less than 0 elements, so we skip that test
    expect(() => {
      solution(new Array(150), 5)
    }).toThrow();
  });

  // each element of array A is an integer within the range [−1,000..1,000].
  test('each element of array A is an integer within the range [-1,000..1,000].', () => {
    // arrange
    const N = 5;
    const K = 3;
    const A = [];
    // values added are A[0, 500, 1000, 1500, 2000]
    for (let i = 0; i < N; i++) {
      A.push(i * 500);
    }

    // act & assert
    expect(() => {
      solution(A, K)
    }).toThrow();
  });

  // test case to rotate A[1,2,3,4,5] K=2 return should be A[4,5,1,2,3]
  test('rotate A[1,2,3,4,5] with K=2 should return A[4,5,1,2,3]', () => {
    // arrange
    const A = [1, 2, 3, 4, 5];
    const K = 2;
    const expected = [4, 5, 1, 2, 3];
    // act
    const result = solution(A, K);
    // assert
    expect(result).toEqual(expected);
  });

  test.each([
    [[1, 2, 3, 4, 5], 2, [4, 5, 1, 2, 3]],
    [[1, 2, 3, 4, 5], 1, [5, 1, 2, 3, 4]],
    [[1, 2, 3, 4, 5], 3, [3, 4, 5, 1, 2]],
  ])('array: %s and K: %i => %s', (A, K, expected) => {
    // each parameter goes into the test function: A, K, expected
    expect(solution(A, K)).toEqual(expected);
  });

});
