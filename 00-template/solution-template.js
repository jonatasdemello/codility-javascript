'use strict';

module.exports = function solution(n) {
	var result = 1;

	// validations
	if (n < 1 || n > 2147483647) {
		throw new Error("Parameter is invalid!");
	}

	return result;
}
