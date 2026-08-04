// better-force approach

function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    // Pick the pivot (middle element)
    const pivot = arr[Math.floor(arr.length / 2)];

    const left: number[] = [];
    const equal: number[] = [];
    const right: number[] = [];

    // Partition elements into three groups
    for (const num of arr) {
        if (num < pivot) {
            left.push(num);
        } else if (num === pivot) {
            equal.push(num);
        } else {
            right.push(num);
        }
    }

    // Recursively sort left and right partitions, then combine
    return [...quickSort(left), ...equal, ...quickSort(right)];
}

function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;
    const sortedNums = quickSort(nums);
    let countCurrent = 0;
    let lastSmaller = Number.MIN_SAFE_INTEGER;
    let longest = 1;
    let n = sortedNums.length;

    for (let i = 0; i < n; i++) {
        // 2. Iterate through sortedNums instead of nums
        if (sortedNums[i] - 1 === lastSmaller) {
            countCurrent = countCurrent + 1;
            lastSmaller = sortedNums[i];
        } else if (sortedNums[i] !== lastSmaller) {
            countCurrent = 1;
            lastSmaller = sortedNums[i];
        }
        longest = Math.max(longest, countCurrent);
    }

    return longest
};


// brute-force approach

// function linearSearch(arr: number[], num: number): boolean {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//             return true;
//         }
//     }
//     return false
// }

// brute-force approach

// let longest = 1;

// for (let i = 0; i < nums.length; i++) {
//     let x = nums[i]
//     let count = 1;

//     while (linearSearch(nums, x + 1) == true) {
//         x = x + 1;
//         count = count + 1;
//     }

//     longest = Math.max(longest, count);
// }

// return longest;