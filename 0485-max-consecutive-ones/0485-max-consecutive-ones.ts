function findMaxConsecutiveOnes(nums: number[]): number {
    let n: number = nums.length;
    let count: number = 0;
    let maximum: number = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) {
            count++
            maximum = Math.max(maximum, count);
        }
        else {
            count = 0;
        }
    }
    return maximum;
};