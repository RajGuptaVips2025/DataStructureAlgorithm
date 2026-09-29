function longestCommonPrefix(strs: string[]): string {
    strs.sort();

    let first = strs[0];
    let last = strs[strs.length - 1];

    let i = 0;

    while (i < first.length || i < last.length) {
        if (first[i] === last[i]) {
            i++
        }
        else {
            break;
        }
    }

    return first.substring(0, i);
};

// approach 1
// let prefix = "";

// for (let i = 0; i < strs[0].length; i++) {
//     let char = strs[0][i];

//     for (let j = 1; j < strs.length; j++) {
//         if (i >= strs[j].length || char !== strs[j][i]) {
//             return prefix;
//         }
//     }
//     prefix += char
// }
// return prefix;