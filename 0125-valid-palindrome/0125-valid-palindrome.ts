function isAlphaNumeric(char: string): boolean {
    return (
        (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z') ||
        (char >= '0' && char <= '9')
    );
}


function isPalindrome(s: string): boolean {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {

        while (i < j && !isAlphaNumeric(s[i])) {
            i++;
        }

        // Skip non-alphanumeric characters from right
        while (i < j && !isAlphaNumeric(s[j])) {
            j--;
        }

        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
        i++;
        j--;
    }

    return true;
};