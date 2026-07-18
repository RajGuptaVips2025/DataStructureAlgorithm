function majorityElement(nums: number[]): number {
    // optimal approach
    let count = 0;
    let element

    for (let i = 0; i < nums.length; i++) {
        if (count == 0) {
            count = 1;
            element = nums[i];
        }
        else if (nums[i] == element) {
            count++;
        } else {
            count--;
        }
    }

    let count1 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == element) count1++;
    }
    if (count1 > (nums.length) / 2) {
        return element;
    }
    return -1;
};

// Better approach
// const mpp = new Map<number, number>();

// for (let i = 0; i < nums.length; i++) {
//     mpp.set(nums[i], (mpp.get(nums[i]) || 0) + 1);
// }

// for(const [key, value] of mpp){
//     if(value > Math.floor(nums.length/2)){
//         return key;
//     }
// }

// return -1;


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