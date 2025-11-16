'use strict';

// Cyclic Rotation: Rotate an array to the right by a given number of steps.
// given an array A consisting of N integers and an integer K,
// returns the array A rotated K times.

module.exports = function solution(A, K) {
	var result = [];

	// validations: N and K are integers within the range [0..100];

	// k: integer representing number of rotations;
	if (K < 1 || K > 100) {
		throw new Error("Parameter K is invalid!");
	}

	// N: number of elements in A[];
	let N = A.length;
	if (N < 0 || N > 100) {
		throw new Error("Parameter N is invalid!");
	}

	// each element of array A is an integer within the range [-1,000..1,000].
	for (let i = 0; i < N; i++) {
		if (A[i] < -1000 || A[i] > 1000) {
			throw new Error("Element A[" + i + "] is invalid!");
		}
	}

	// // rotate the array
	// for (let i = 0; i < N; i++) {
	// 	let newIndex = (i + K) % N;
	// 	result[newIndex] = A[i];
	// }

	for (let i = 0; i < K; i++) {
		let item = A.pop();
		A.unshift(item);
	}

	return A;
}
