/**
 Do not return anything, modify nums in-place instead.
 */
function swap(arr: number[], index1: number, index2: number): void {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function moveZeroes(nums: number[]): void {
    const n = nums.length;
    let j = -1;

    for (let i = 0; i < n; i++) {
        if (nums[i] == 0) {
            j = i;
            break;
        }
    }

    if (j === -1) return;

    for (let i = j + 1; i < n; i++) {
        if (nums[i] != 0) {
            swap(nums, i, j);
            j++;
        }
    }
};