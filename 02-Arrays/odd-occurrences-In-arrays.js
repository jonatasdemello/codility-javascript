'use strict';

// Find value that occurs in odd number of elements.

module.exports = function solution(A) { // A array
	var result = [];

	// each element of array A is an integer within the range [1..1,000,000,000];
	for (let i = 0; i < A.length; i++) {
		if (A[i] < 1 || A[i] > 1000000000) {
			throw new Error("Element A[" + i + "] is invalid!");
		}
	}
/*
	// using map to count occurrences
	let map = new Map();
	for (let i = 0; i < A.length; i++) {
		let exists = map.get(A[i]);
		if (exists) {
			map.set(A[i], exists + 1);
		} else {
			map.set(A[i], 1);
		}
	}
	//console.log(map);
	// find the element with odd occurrences
	for (let [key, value] of map) {
		if (value % 2 !== 0) {
			return key;
		}
	}
	// O(N) or O(N*log(N))
	return result;
*/
	let result1 = 0;
	for (let element of A) {
		// Apply Bitwise XOR to the current and next element
		result1 ^= element
	}
	return result1;
}

function usingXor() {
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

function solution1(A) {
  const map = {};

  for (let i = 0; i < A.length; i++) {
	if (map[A[i]]) {
	  delete map[A[i]];
	} else {
	  map[A[i]] = true;
	}
  }

  return Number(Object.keys(map)[0]);
}

function test() {
	A.sort();

	var ocur = 0;
	var t = 0;
	while (t < A.length) {
		ocur = getNOC(A, t);
		t += ocur;
		if (ocur % 2 != 0)
			return A[t - ocur];
	}

	function getNOC(A, pos) {
		var cont = 0;
		while ((A[pos] ^ A[pos + 1]) == 0) {
			cont++;
			pos++;
		}
		return cont + 1;
	}
}