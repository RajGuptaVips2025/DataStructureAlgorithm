function majorityElement(nums: number[]): number {
    const mpp = new Map<number, number>();
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        mpp.set(nums[i], (mpp.get(nums[i]) || 0) + 1);
    }

    for (const [key, value] of mpp) {
        if (value > Math.floor(nums.length)/2) {
            return key;
        }
    }

    return -1;
};


// brute force approach
// let n = nums.length;

// for (let i = 0; i < n; i++) {
//     let count = 0;
//     for (let j = 0; j < n; j++) {
//         if(nums[j] === nums[i]){
//             count++;
//         }
//     }
//     if(count>n/2) return nums[i];
// }