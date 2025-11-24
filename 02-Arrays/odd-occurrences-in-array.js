'use strict';

// Find value that occurs in odd number of elements.

module.exports = function solution(A) { // A array

	// each element of array A is an integer within the range [1..1,000,000,000];
	for (let i = 0; i < A.length; i++) {
		if (A[i] < 1 || A[i] > 1000000000) {
			throw new Error("Element A[" + i + "] is invalid!");
		}
	}

	// using Map() data structure to count occurrences
	let map = new Map();
	for (let i = 0; i < A.length; i++) {
		let exists = map.get(A[i]);
		if (exists) {
			map.set(A[i], exists + 1);
		} else {
			map.set(A[i], 1);
		}
	}
	// Debug
	// console.log(map);

	// find the element with odd occurrences
	for (let [key, value] of map) {
		if (value % 2 !== 0) {
			return key;
		}
	}
	// O(N) or O(N*log(N))
	return 0;
}

