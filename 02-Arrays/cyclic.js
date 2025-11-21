'use strict';

// Cyclic Rotation: Rotate an array to the right by a given number of steps.
// given an array A consisting of N integers and an integer K,
// returns the array A rotated K times.
function cyclic(A, K) {
    var result = [];

    // debug
    console.log("----------------------------------------");
    console.log("K:", K, "A:", A, "A.length:", A.length, "(K % arr.length):", K % A.length, " => first element new index");
    for (let i = 0; i < K; i++) {
        let item = A.pop();
        A.unshift(item);

        console.log("i:", i + 1, "A:", A);
        //console.log("i:", i+1, "A:", A , "i % arr.length:", i % A.length);
    }
    return A;
}


// K = 3, A = [3, 8, 9, 7, 6], O = [9, 7, 6, 3, 8]
//cyclic([3, 8, 9, 7, 6], 3); // should return [9, 7, 6, 3, 8]
// cyclic([3, 8, 9, 7, 6], 1); // should return [9, 7, 6, 3, 8]
// cyclic([3, 8, 9, 7, 6], 6); // should return [9, 7, 6, 3, 8]

// cyclic([1, 2, 3, 4, 5], 1);
// cyclic([1, 2, 3, 4, 5], 2);
cyclic([1, 2, 3, 4, 5], 3);
// cyclic([1, 2, 3, 4, 5], 4);
// cyclic([1, 2, 3, 4, 5], 5);
cyclic([1, 2, 3, 4, 5], 6);

console.log("========================================");

for (let i = 0; i < 11; i++) {
    console.log("i =", i, "mod 5 = ", i % 5);
}

console.log("========================================");
for (let i = 0; i < 11; i++) {
    console.log("(i =", i, "+ K = 3) mod 5 => ", (i+3) % 5);
}

console.log("========================================");

// 2# improvement
let A = [1, 2, 3, 4, 5];
let K = 3;
let N = A.length;

// calculate where to split
let R = N - K; // from end the until the split point

// split the array:
let arrLeft = A.slice(0, R); // [0..K]
let arrRight = A.slice(R, A.length); // [idxLeft..A.length]
let O = arrRight.concat(arrLeft);

console.log("A:", A, "K:", K, "A.length:", A.length);
console.log("R:", R);
console.log("arrLeft:", arrLeft);
console.log("arrRight:", arrRight);
console.log("O:", O);

module.exports = cyclic;