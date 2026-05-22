// LeetCode 58 - Length of Last Word

function lengthOfLastWord(s) {

    let count = 0;

    for (let i = s.length - 1; i >= 0; i--) {

        if (s[i] !== " ") {
            count++;
        }
        else if (count > 0) {
            break;
        }
    }

    return count;
}

// Test Cases
console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6