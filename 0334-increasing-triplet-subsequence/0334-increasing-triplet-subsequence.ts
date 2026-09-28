function increasingTriplet(nums: number[]): boolean {
    const n = nums.length;
    let num1 = Infinity;
    let num2 = Infinity;

    for (let i = 0; i < n; i++) {
        let num3 = nums[i];
        if (num3 <= num1) {
            num1 = num3;
        } else if (num3 <= num2) {
            num2 = num3
        } else {
            return true;
        }
    }
    return false;
};
