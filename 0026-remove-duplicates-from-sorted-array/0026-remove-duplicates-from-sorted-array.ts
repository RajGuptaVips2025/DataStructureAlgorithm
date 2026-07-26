function removeDuplicates(nums: number[]): number {
    let i: number = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            nums[i + 1] = nums[j];
            i++;
        }
    }
    return i + 1; // returning i+1 because i initially started from zero;
};