function rearrangeArray(nums: number[]): number[] {
    // optimal approach
    let posIndex = 0;
    let negIndex = 1;
    const result: number[] = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            result[negIndex] = nums[i];
            negIndex += 2;
        }
        else {
            result[posIndex] = nums[i]
            posIndex += 2;
        }
    }
    return result;
};


// brute force approach
// const pos: number[] = [];
// const neg: number[] = [];

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) pos.push(nums[i]);
//     else neg.push(nums[i]);
// }

// for (let i = 0; i < (nums.length) / 2; i++) {
//     nums[2 * i] = pos[i];
//     nums[2 * i + 1] = neg[i]
// }

// return nums;