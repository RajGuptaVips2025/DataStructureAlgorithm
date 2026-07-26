function twoSum(nums: number[], target: number): number[] {
    let mpp = new Map<number, number>();
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let complement = target - nums[i];

        // Check if the complement already exists in our map
        if (mpp.has(complement)) {
            return [mpp.get(complement)!, i];
        }

        // If not, store the current number and its index in the map
        mpp.set(nums[i], i);
    }
    return [];

};