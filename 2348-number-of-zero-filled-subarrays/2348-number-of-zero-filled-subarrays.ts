function zeroFilledSubarray(nums: number[]): number {
    const n = nums.length;
    let result = 0;
    let i = 0;

    while(i < n){
        let subArrayLength = 0;
        if(nums[i] === 0){
            while(i<n && nums[i] === 0){
                i++;
                subArrayLength++;
            }
        }else{
            i++
        }
        result += subArrayLength*(subArrayLength+1)/2;
    }
    return result;
};