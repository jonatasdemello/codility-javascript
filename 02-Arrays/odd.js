'use strict';

// Using this to test an Alernate Solution and a XOR Solution

function solutionUsingXor() {
	/*
	Recommended Solution Approach
	An optimal solution for this problem uses the bitwise XOR (^) operator.
	XORing all elements together cancels out every paired element (a ^ a = 0),
	leaving only the unpaired element (0 ^ b = b).

	1 XOR 1 = 0
	1 XOR 0 = 1
	0 XOR 1 = 1
	0 XOR 0 = 0

	A = [9, 3, 9] => expected value: 3
	9 = 1001
	3 = 0011

	=> 1001(9) XOR 0011(3) = 1010(10) XOR 1001(9) = 0011(3)
	=> 9 XOR 3 XOR 9 = 3
	*/

	let result = 0;
	for (let element of A) {
		// Apply Bitwise XOR to the current and next element
		result ^= element
	}
	return result
}

function solutionAlternate(A) {
  const map = {};

  for (let i = 0; i < A.length; i++) {
	if (map[A[i]]) {
	  delete map[A[i]];
	} else {
	  map[A[i]] = true;
	}
  }
  console.log(map);
  return Number(Object.keys(map)[0]);
}

let res = solutionAlternate([9, 3, 9, 3, 9, 7, 9]);
// { '7': true }
console.log("Odd Occurrence is: " + res); // Odd Occurrence is: 7
