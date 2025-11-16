'use strict';

// Binary Gap: Find longest sequence of zeros in binary representation of an integer.
// given a positive integer N, returns the length of its longest binary gap.
//
// A binary gap within a positive integer N is any maximal sequence of consecutive zeros
// that is surrounded by ones at both ends in the binary representation of N.

module.exports = function solution(N) {
	var zeros = 0;
	var maxGap = 0;

	// validations
	if (N < 1 || N > 2147483647) {
		return 0;
	}

	// first, convert the number to binary
	let bin = N.toString(2);

	// now iterate over the 0's and 1's and count
	for (var x = 0; x < bin.length; x++) {
		if (bin[x] == 0) { // means it is a 0 gap
			zeros++;
		} else { // (bin[x] == 1) means that the gap ended
			if (zeros > maxGap) {
				maxGap = zeros;
			}
			zeros = 0;
		}
	}

	return maxGap;
}
