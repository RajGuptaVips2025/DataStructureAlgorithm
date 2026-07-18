function majorityElement(nums: number[]): number {
    // Better approach
    const mpp = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        mpp.set(nums[i], (mpp.get(nums[i]) || 0) + 1);
    }

    for(const [key, value] of mpp){
        if(value > Math.floor(nums.length/2)){
            return key;
        }
    }

    return -1;
};


// brute force approach
// for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] == nums[i]) {
//             count++;
//         }
//     }
//     if(count > nums.length/2) return nums[i];
// }
// return -1;