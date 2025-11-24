'use strict';

const solution = require("./perm-missing-elem");

describe('PermMissingElem Tests', () => {

  // function solution(A);
  // A: array of N different integers
  // The array contains integers in the range [1..(N + 1)]
  // exactly one element is missing
  //
  // N is an integer within the range [0..100,000];
  // the elements of A are all distinct;
  // each element of array A is an integer within the range [1..(N + 1)].

  // validation tests
  test('N must be within valid range [0..100,000]', () => {
    // Create an array larger than 100,000 elements
    const largeArray = new Array(100001).fill(1);
    expect(() => {
      solution(largeArray);
    }).toThrow("Parameter N is invalid!");
  });

  test('each element of A must be within range [1..(N + 1)]', () => {
    // element out of range (too small)
    expect(() => {
      solution([0, 1, 2, 3]);
    }).toThrow();

    // element out of range (too large)
    expect(() => {
      solution([1, 2, 3, 10]);
    }).toThrow();
  });

  // example from the problem description
  test('given A=[2, 3, 1, 5] should return 4', () => {
    expect(solution([2, 3, 1, 5])).toBe(4);
  });

  // edge case: empty array
  test('given empty array should return 1', () => {
    expect(solution([])).toBe(1);
  });

  // edge case: single element
  test('given A=[2] should return 1', () => {
    expect(solution([2])).toBe(1);
  });

  test('given A=[1] should return 2', () => {
    expect(solution([1])).toBe(2);
  });

  // edge case: missing first element
  test('given A=[2, 3, 4] should return 1', () => {
    expect(solution([2, 3, 4])).toBe(1);
  });

  // edge case: missing last element
  test('given A=[1, 2, 3] should return 4', () => {
    expect(solution([1, 2, 3])).toBe(4);
  });

  // edge case: missing middle element
  test('given A=[1, 2, 4, 5] should return 3', () => {
    expect(solution([1, 2, 4, 5])).toBe(3);
  });

  // larger array test
  test('given A=[1, 2, 3, 4, 5, 6, 8, 9, 10] should return 7', () => {
    expect(solution([1, 2, 3, 4, 5, 6, 8, 9, 10])).toBe(7);
  });

  // test with unsorted array
  test('given A=[5, 3, 1, 2] should return 4', () => {
    expect(solution([5, 3, 1, 2])).toBe(4);
  });

  // test with larger unsorted array
  test('given A=[10, 2, 8, 6, 4, 1, 3, 5, 9] should return 7', () => {
    expect(solution([10, 2, 8, 6, 4, 1, 3, 5, 9])).toBe(7);
  });

  // test with sequential array
  test('given A=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21] should return 20', () => {
    expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21])).toBe(20);
  });

});
