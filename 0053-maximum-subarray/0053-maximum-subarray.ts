function maxSubArray(nums: number[]): number {
    let sum = 0;
    let maximum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (sum > maximum) {
            maximum = sum;
        }

        if (sum < 0) {
            sum = 0;
        }
    }
    return maximum;
};


// better approach
// let maximum = Number.MIN_SAFE_INTEGER;

// for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//         sum += nums[j];
//         maximum = Math.max(sum, maximum);
//     }
// }
// return maximum;


// brute force approach
// let maximum = Number.MIN_SAFE_INTEGER;

// for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//         let sum = 0;
//         for (let k = i; k <= j; k++) {
//             sum += nums[k];
//             maximum = Math.max(sum, maximum);
//         }
//     }
// }
// return maximum;