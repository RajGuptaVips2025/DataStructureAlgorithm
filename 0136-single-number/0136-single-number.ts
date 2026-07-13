// brute for approach
function singleNumber(nums: number[]): number {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        let num = nums[i];
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (nums[j] == num) {
                count++;
            }
        }
        if (count == 1) return num;
    }
    return -1;
};

// better and optimal approach will be solved later on