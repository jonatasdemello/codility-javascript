'use strict';

// PermMissingElem: Find the missing element in a given permutation.
// An array A consisting of N different integers is given.
// The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

module.exports = function solution(A) {
	// validations: N is an integer within the range [0..100,000];
	const N = A.length;

	if (N < 0 || N > 100000) {
		throw new Error("Parameter N is invalid!");
	}

	// edge case: empty array means the missing element is 1
	if (N === 0) {
		return 1;
	}

	// validate that each element of array A is an integer within the range [1..(N + 1)]
	for (let i = 0; i < N; i++) {
		if (A[i] < 1 || A[i] > N + 1) {
			throw new Error("Element A[" + i + "] is invalid!");
		}

	}
	return solutionSort(A)

	let B = new Array(N + 1).fill(0);
	for (let i = 0; i< N; i++) {
		B[A[i]-1] = 1;
	}
	//add 1 because the array starts at 1
	//return(B.indexOf(0)+1)
	for (let i = 0; i < N + 1; i++) {
		if (B[i] == 0) {
	  return i + 1;
	}
  }
}

function solutionSum(A) {
	// Using mathematical approach: sum of 1 to (N+1) minus sum of A
	// Sum of 1 to (N+1) = (N+1) * (N+2) / 2
	const expectedSum = (N + 1) * (N + 2) / 2;
	const actualSum = A.reduce((sum, num) => sum + num, 0);
	return expectedSum - actualSum;
}

function solutionSort(A) {
	// need this to sort numbers correctly in JavaScript
	A.sort(function(a, b) {
		return a - b;
	});

	const N = A.length;
	if (N == 0) {
		return 1;
	}

	if (A[0] != 1) {
		return 1;
	}

	console.log(A, N);
	for (var i = 0; i < N - 1; i++) {
		let curr = A[i];
		let next = A[i + 1];
		if (next !== curr + 1) {
			return curr + 1;
		}
	}
	let last = A[N - 1];
	console.log("last:", last, "N:", N);
	return last + 1;
}