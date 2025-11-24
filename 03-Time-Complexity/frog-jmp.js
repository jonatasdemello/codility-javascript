'use strict';

// FrogJmp: Count minimal number of jumps from position X to Y.
// A small frog wants to get to the other side of the road.
// The frog is currently located at position X and wants to get to a position greater than or equal to Y.
// The small frog always jumps a fixed distance, D.

module.exports = function solution(X, Y, D) {
	// validations: X, Y and D are integers within the range [1..1,000,000,000];
	// X ≤ Y

	if (X < 1 || X > 1000000000) {
		throw new Error("Parameter X is invalid!");
	}

	if (Y < 1 || Y > 1000000000) {
		throw new Error("Parameter Y is invalid!");
	}

	if (D < 1 || D > 1000000000) {
		throw new Error("Parameter D is invalid!");
	}

	if (X > Y) {
		throw new Error("X must be less than or equal to Y!");
	}

	// Calculate the distance to cover
	const distance = Y - X;

	// Calculate number of jumps needed (round up)
	// Using ceiling division: Math.ceil(distance / D)
	return Math.ceil(distance / D);
}


function solutionInt(X, Y, D) {
    const distance = Y - X;
    return Math.floor((distance + D - 1) / D);
    // or: return Math.floor(distance / D) + (distance % D > 0 ? 1 : 0);
}