'use strict';

module.exports = function solution(n) {
	var zeros = 0;
	var maxGap = 0;

	// validations
	if (n < 1 || n > 2147483647) {
		return 0;
	}

	// first, convert the number to binary
	n = n.toString(2);

	// now iterate over the 0's and 1's and count
	for (var x = 0; x < n.length; x++) {
		if (n[x] == 0) {
			zeros++;
		} else {
			if (zeros > maxGap){
				maxGap = zeros;
			}
			zeros = 0;
		}
	}

	return maxGap;
}
