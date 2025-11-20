'use strict';

// Cyclic Rotation: Rotate an array to the right by a given number of steps.
// given an array A consisting of N integers and an integer K,
// returns the array A rotated K times.
function solution(A, K) {
    var result = [];

    // debug
    console.log("----------------------------------------");
    console.log("K:", K, "A:", A , "A.length:", A.length, "(K % arr.length):", K % A.length , " => first element new index");
    for (let i = 0; i < K; i++) {
        let item = A.pop();
        A.unshift(item);

        console.log("i:", i+1, "A:", A);
        //console.log("i:", i+1, "A:", A , "i % arr.length:", i % A.length);
    }
    return A;
}

// K = 3, A = [3, 8, 9, 7, 6], O = [9, 7, 6, 3, 8]

solution([3, 8, 9, 7, 6], 3); // should return [9, 7, 6, 3, 8]

solution([1, 2, 3, 4, 5], 1);
solution([1, 2, 3, 4, 5], 2);
solution([1, 2, 3, 4, 5], 3);
solution([1, 2, 3, 4, 5], 4);
solution([1, 2, 3, 4, 5], 5);
solution([1, 2, 3, 4, 5], 6);



module.exports = solution;