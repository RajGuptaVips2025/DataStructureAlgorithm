/**
 Do not return anything, modify nums in-place instead.
 */

function swap(arr: number[], i: number, j: number): void {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function moveZeroes(nums: number[]): void {
    let n = nums.length;
    let j = -1;

    for (let i = 0; i < n; i++) {
        if (nums[i] == 0) {
            j = i;
            break;
        }
    }

    if (j === -1) return;

    // Find non-zero elements and swap them with zero
    // I have done nums[j] !== 0 previously which is wrong because we have to find the non zero element here.
    for (let i = j + 1; i < n; i++) {
        if (nums[i] !== 0) {
            swap(nums, i, j);
            j++
        }
    }

};