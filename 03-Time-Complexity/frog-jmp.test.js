'use strict';

const solution = require("./frog-jmp");

describe('FrogJmp Tests', () => {

  // function solution(X, Y, D);
  // X: starting position
  // Y: target position (frog needs to reach Y or greater)
  // D: fixed jump distance
  //
  // X, Y and D are integers within the range [1..1,000,000,000];
  // X ≤ Y

  // validation tests
  test('X, Y and D must be within valid range [1..1,000,000,000]', () => {
    // X out of range
    expect(() => {
      solution(0, 100, 10);
    }).toThrow("Parameter X is invalid!");

    expect(() => {
      solution(1000000001, 1000000000, 10);
    }).toThrow("Parameter X is invalid!");

    // Y out of range
    expect(() => {
      solution(10, 0, 10);
    }).toThrow("Parameter Y is invalid!");

    expect(() => {
      solution(10, 1000000001, 10);
    }).toThrow("Parameter Y is invalid!");

    // D out of range
    expect(() => {
      solution(10, 100, 0);
    }).toThrow("Parameter D is invalid!");

    expect(() => {
      solution(10, 100, 1000000001);
    }).toThrow("Parameter D is invalid!");
  });

  test('X must be less than or equal to Y', () => {
    expect(() => {
      solution(100, 10, 5);
    }).toThrow("X must be less than or equal to Y!");
  });

  // example from the problem description
  test('given X=10, Y=85, D=30 should return 3', () => {
    expect(solution(10, 85, 30)).toBe(3);
  });

  // edge case: already at target
  test('given X=10, Y=10, D=30 should return 0', () => {
    expect(solution(10, 10, 30)).toBe(0);
  });

  // edge case: one jump needed
  test('given X=10, Y=20, D=15 should return 1', () => {
    expect(solution(10, 20, 15)).toBe(1);
  });

  // edge case: exact distance divisible by D
  test('given X=10, Y=40, D=10 should return 3', () => {
    expect(solution(10, 40, 10)).toBe(3);
  });

  // edge case: distance not divisible by D
  test('given X=10, Y=42, D=10 should return 4', () => {
    expect(solution(10, 42, 10)).toBe(4);
  });

  // large numbers test
  test('given X=1, Y=1000000000, D=1 should return 999999999', () => {
    expect(solution(1, 1000000000, 1)).toBe(999999999);
  });

  // large jump test
  test('given X=1, Y=1000000000, D=1000000000 should return 1', () => {
    expect(solution(1, 1000000000, 1000000000)).toBe(1);
  });

});
