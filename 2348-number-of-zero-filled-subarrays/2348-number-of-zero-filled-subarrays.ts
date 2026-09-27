function zeroFilledSubarray(nums: number[]): number {
    // Second Approach
    let result = 0;
    const n = nums.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i] == 0) {
            count++;
        } else {
            count = 0;
        }
        result = result + count;
    }

    return result;
};

// First Approach
// const n = nums.length;
// let result = 0;
// let i = 0;

// while(i < n){
//     let subArrayLength = 0;
//     if(nums[i] === 0){
//         while(i<n && nums[i] === 0){
//             i++;
//             subArrayLength++;
//         }
//     }else{
//         i++
//     }
//     result += subArrayLength*(subArrayLength+1)/2;
// }
// return result;