/**
 Do not return anything, modify nums in-place instead.
 */

function swap(arr: number[], i: number, j: number): void {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function moveZeroes(nums: number[]): void {
    let j: number = -1;
    let n: number = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] == 0) {
            j = i;
            break;
        }
    }

    if (j === -1) return;

    for (let i = j + 1; i < n; i++) {
        if (nums[i] != 0) {
            swap(nums, i, j)
            j++;
        }
    }
};