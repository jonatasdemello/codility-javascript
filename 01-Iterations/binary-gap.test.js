'use strict';

const solution = require("./binary-gap");

describe('BinaryGap Tests', () => {

  // negative number
  test('Given -10 should return 0.', () => {
    expect(solution(-10)).toBe(0);
  });
  // zero is not valid
  test('Given 0 [0000] should return 0.', () => {
    expect(solution(0)).toBe(0);
  });
  // big number
  test('Given 2,147,483,648 should return 0.', () => {
    expect(solution(2147483648)).toBe(0);
  });

  // extremes: N is an integer within the range [1..2,147,483,647].
  test('Given 1 [0001] should return 0.', () => {
    expect(solution(1)).toBe(0);
  });
  test('Given 2147483647 [0111.1111.1111.1111.1111.1111.1111.1111] should return 0.', () => {
    expect(solution(2147483647)).toBe(0);
  });

  /*
  Test numbers from the problem description:
  - The number 9 has binary representation 1001 and contains a binary gap of length 2.
  - The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
  - The number 20 has binary representation 10100 and contains one binary gap of length 1.
  - The number 15 has binary representation 1111 and has no binary gaps.
  - The number 32 has binary representation 100000 and has no binary gaps.
  - Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.
  - Given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5.
  */

  test('Given 9 [1001] should return 2.', () => {
    expect(solution(9)).toBe(2);
  });

  test('Given 529 [1000010001] should return 4.', () => {
    expect(solution(529)).toBe(4);
  });

  test('Given 20 [10100] should return 1.', () => {
    expect(solution(20)).toBe(1);
  });

  test('Given 15 [1111] should return 0.', () => {
    expect(solution(15)).toBe(0);
  });

  test('Given 32 [100000] should return 0.', () => {
    expect(solution(32)).toBe(0);
  });

  // other numbers
  test('Given 1041 [10000010001] should return 5.', () => {
    expect(solution(1041)).toBe(5);
  });

  test('Given 64 [01000000] should return 0.', () => {
    expect(solution(64)).toBe(0);
  });

  test('Given 132 [10000100] should return 4.', () => {
    expect(solution(132)).toBe(4);
  });

  test('Given 133 [10000101] should return 4.', () => {
    expect(solution(133)).toBe(4);
  });

  // some more tests form the site:
  test('Given 5 [0101] should return 1.', () => {
    expect(solution(5)).toBe(1);
  });
  test('Given 6 [0110] should return 0.', () => {
    expect(solution(6)).toBe(0); // 0110
  });
  test('Given 9 [1001] should return 2.', () => {
    expect(solution(9)).toBe(2); // 1001
  });
  test('Given 11 [1011] should return 1.', () => {
    expect(solution(11)).toBe(1); // 1011
  });
  test('Given 16 [0001.0000] should return 0.', () => {
    expect(solution(16)).toBe(0); // 0001.0000
  });
  test('Given 19 [0001.0011] should return 2.', () => {
    expect(solution(19)).toBe(2); // 0001.0011
  });
  test('Given 42 [0010.1010] should return 1.', () => {
    expect(solution(42)).toBe(1); // 0010.1010
  });
  test('Given 328 [0001.0100.1000] should return 2.', () => {
    expect(solution(328)).toBe(2); // 0001.0100.1000
  });
  test('Given 1024 [0100.0000.0000] should return 0.', () => {
    expect(solution(1024)).toBe(0); // 0100.0000.0000
  });
  test('Given 1162 [0100.1000.1010] should return 3.', () => {
    expect(solution(1162)).toBe(3); // 0100.1000.1010
  });
  test('Given 51712 [0110.0101.0000.0000] should return 2.', () => {
    expect(solution(51712)).toBe(2); // 0110.0101.0000.0000
  });
  test('Given 561892 [1000.1001.0010.1110.0100] should return 3.', () => {
    expect(solution(561892)).toBe(3); // 1000.1001.0010.1110.0100
  });
  test('Given 66561 [0001.0000.0100.0000.0001] should return 9.', () => {
    expect(solution(66561)).toBe(9); // 0001.0000.0100.0000.0001
  });
  test('Given 6291457 [0110.0000.0000.0000.0000.0001] should return 20.', () => {
    expect(solution(6291457)).toBe(20); // 0110.0000.0000.0000.0000.0001
  });
  test('Given 74901729 [0100.0111.0110.1110.1000.1110.0001] should return 4.', () => {
    expect(solution(74901729)).toBe(4); // 0100.0111.0110.1110.1000.1110.0001
  });
  test('Given 805306373 [0011.0000.0000.0000.0000.0000.0000.0101] should return 25.', () => {
    expect(solution(805306373)).toBe(25); // 0011.0000.0000.0000.0000.0000.0000.0101
  });
  test('Given 1376796946 [0101.0010.0001.0000.0100.0001.0001.0010] should return 5.', () => {
    expect(solution(1376796946)).toBe(5); // 0101.0010.0001.0000.0100.0001.0001.0010
  });
  test('Given 1073741825 [0100.0000.0000.0000.0000.0000.0000.0001] should return 29.', () => {
    expect(solution(1073741825)).toBe(29); // 0100.0000.0000.0000.0000.0000.0000.0001
  });
  test('Given 1610612737 [0110.0000.0000.0000.0000.0000.0000.0001] should return 28.', () => {
    expect(solution(1610612737)).toBe(28); // 0110.0000.0000.0000.0000.0000.0000.0001
  });

});
