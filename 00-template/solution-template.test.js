'use strict';

const solution = require("./solution-template");

describe('Template Tests', () => {

  // valid input: negative number
  test('Given -10 should return 0.', () => {
    expect(solution(-10)).toBe(0);
  });
  // valid input: zero
  test('Given 0 [0000] should return 0.', () => {
    expect(solution(0)).toBe(0);
  });
  // valid input: big number
  test('Given 2,147,483,648 should return 0.', () => {
    expect(solution(2147483648)).toBe(0);
  });

  // extremes: N is an integer within the range [1..2,147,483,647].
  test('Given 1 [0001] should return 1.', () => {
    expect(solution(1)).toBe(1);
  });
  test('Given 2147483647 should return 1.', () => {
    expect(solution(2147483647)).toBe(1);
  });

});
