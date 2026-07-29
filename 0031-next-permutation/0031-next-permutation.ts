/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    let idx = -1;
    let n = nums.length;

    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            idx = i;
            break;
        }
    }

    if (idx === -1) {
        nums.reverse();
        return;
    }

    for (let i = n - 1; i > idx; i--) {
        if (nums[i] > nums[idx]) {
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            break;
        }
    }

    // let left = idx + 1;
    // let right = n - 1;
    // while (left < right) {
    //     [nums[left], nums[right]] = [nums[right], nums[left]];
    //     left++;
    //     right--;
    // }

    // Reverses elements from index (idx + 1) to the end in-place
    nums.splice(idx + 1, n - (idx + 1), ...nums.slice(idx + 1).reverse());
};