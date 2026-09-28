function increasingTriplet(nums: number[]): boolean {
    const n = nums.length;
    let num1 = Infinity;
    let num2 = Infinity;

    for (let i = 0; i < n; i++) {
        let num3 = nums[i];
        if (num3 <= num1) {
            num1 = num3;
        } else if (num3 <= num2) {
            num2 = num3
        } else {
            return true;
        }
    }
    return false;
};


// Brute force approach
// const n = nums.length;

// for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//         for (let k = j + 1; k < n; k++) {

//             if (nums[i] < nums[j] && nums[j] < nums[k]) {
//                 return true;
//             }

//         }
//     }
// }

// return false;
