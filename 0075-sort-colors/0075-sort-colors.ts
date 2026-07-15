/**
 Do not return anything, modify nums in-place instead.
 */

function swap(arr: number[], index1: number, index2: number): void {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function sortColors(nums: number[]): void {
    // optimal approach
    let low = 0; let mid = 0; let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] == 0) {
            swap(nums, low, mid);;
            low++;
            mid++;
        }
        else if (nums[mid] == 1) {
            mid++;
        }
        else {
            swap(nums, mid, high);
            high--;
        }
    }
};


// brute-force approach
// let count0 = 0;
// let count1 = 0;
// let count2 = 0;

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) count0++;
//     else if (nums[i] === 1) count1++;
//     else count2++
// }

// for (let i = 0; i < count0; i++) nums[i] = 0;
// for (let i = count0; i < count0 + count1; i++) nums[i] = 1;
// for (let i = count0 + count1; i < nums.length; i++) nums[i] = 2;