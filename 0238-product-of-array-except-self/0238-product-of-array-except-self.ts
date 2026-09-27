function productExceptSelf(nums: number[]): number[] {
    const n: number = nums.length;
    let result: number[] = [];

    let prefix = 1;

    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;

    for (let i = n-1; i >=0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result
};


// brute force approach
// let temp: number[] = [];
// const n = nums.length;

// for(let i = 0; i<n; i++){
//     let product = 1;
//     for(let j = 0; j<n; j++){
//         if(j != i) product *= nums[j];
//     }
//     temp[i] = product;
// }

// return temp;