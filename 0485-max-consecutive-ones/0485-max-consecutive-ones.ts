function findMaxConsecutiveOnes(nums: number[]): number {
    const n = nums.length;
    let count = 0;
    let maximum = 0;

    for (let i = 0; i < n; i++) {
        if(nums[i] === 1){
            count++;
            maximum = Math.max(maximum, count);
        }
        else{
            count = 0;
        }
    }
    return maximum;
};