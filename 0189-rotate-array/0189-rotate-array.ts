/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    k = k % (nums.length);
    let temp: number[] = []
    let n = nums.length;

    // storing the array in nums
     for (let i = n - k; i < n; i++){
        temp[i - (n - k)] = nums[i]
    }

    // shifting the array nums
    for (let i = ((nums.length) - k - 1); i >= 0; i--) {
        nums[i + k] = nums[i];
    }

    // rotating the aaray
    for (let i = 0; i < k; i++) {
        nums[i] = temp[i];
    }

};