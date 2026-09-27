function removeDuplicates(nums: number[]): number {
    const set = new Set(nums); // to find the total unique values.

    let i = 0; // for having the counter of total unique values.

    for(let num of set){
        nums[i] = num;
        i++;
    }

    return set.size;
};