function majorityElement(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] == nums[i]) {
                count++;
            }
        }
        if(count > nums.length/2) return nums[i];
    }
    return -1;
};