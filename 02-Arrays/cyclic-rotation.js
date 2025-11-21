'use strict';

// Cyclic Rotation: Rotate an array to the right by a given number of steps.
// given an array A consisting of N integers and an integer K,
// returns the array A rotated K times.

module.exports = function solution(A, K, version = 1) { // A array, K integer
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
	for (let i = 0; i < A.length; i++) {
		if (A[i] < -1000 || A[i] > 1000) {
			throw new Error("Element A[" + i + "] is invalid!");
		}
	}
	// validations: done

	// improvement #1
	// if K > A.length, we can reduce the number of rotations
	// this will keep the number of rotations within the length of the array
	K = K % A.length;

	switch (version) {
		case 1:
			return solution1(A, K);
		case 2:
			return solution2(A, K);
		case 3:
			return solution3(A, K);
		default:
			break;
	}
	return result;
}

function solution1(A, K) {
	// one way to rotate the array is to pop the last element and unshift it to the front K times
	// The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
	// The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
	for (let i = 0; i < K; i++) {
		let item = A.pop();
		A.unshift(item);
	}
	return A;
}

function solution2(A, K) {
	// improvement #2
	// calculate the split point of the array
	let R = A.length - K;
	// split the array using slice()
	let arrLeft = A.slice(0, R);
	let arrRight = A.slice(R, A.length);
	// concatenate the two arrays in reversed order
	let result = arrRight.concat(arrLeft);
	return result;
}

function solution3(A, K) {
	var result = [];
	// rotate the array
	for (let i = 0; i < A.length; i++) {
		let newIndex = (i + K) % A.length;
		result[newIndex] = A[i];
	}
	return result;
}
