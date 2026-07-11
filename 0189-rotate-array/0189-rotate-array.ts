/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n;

    const temp: number[] = [];
    for (let i = n - k; i < n; i++) {
        temp[i - (n - k)] = nums[i]
    }

    // shifting
    for (let i = n - k - 1; i >= 0; i--) {
        nums[i + k] = nums[i];
    }

    // adding the temp position back to array
    for (let i = 0; i < k; i++) {
        nums[i] = temp[i];
    }
};