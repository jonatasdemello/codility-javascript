'use strict';

const solution = require("./solution-template");

describe('Template Tests', () => {

  // an invalid parameter should throw an error
  test('given -1 should throw an error', () => {
    expect(() => {
    solution(-1);
      }).toThrow();
  });

  // a valid parameter should retunr a result
  test('given 1 should return 1.', () => {
    expect(solution(1)).toBe(1);
  });

});
