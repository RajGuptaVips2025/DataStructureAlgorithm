function isSubsequence(s: string, t: string): boolean {
    let m = s.length;
    let n = t.length;

    let i = 0;
    let j = 0;

    while (i < m && j < n) {
        if (s[i] == t[j]) {
            i++;
        }
        j++
    }

    return i === m;
};