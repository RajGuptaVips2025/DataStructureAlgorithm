function removeDuplicates(nums: number[]): number {
    let i = 0;
    const n = nums.length;

    for (let j = 1; j < n; j++) {
        if(nums[i] != nums[j]){
            nums[i+1] = nums[j];
            i++ 
        }
    }
    return i+1;
};


// brute force approach
// const set = new Set(nums); // to find the total unique values.

// let i = 0; // for having the counter of total unique values.

// for(let num of set){
//     nums[i] = num;
//     i++;
// }

// return set.size;