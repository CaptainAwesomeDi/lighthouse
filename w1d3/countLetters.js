const countLetters = (letters) => {
    let letterCounts = {};
    for (let i = 0; i < letters.length; i++) {
        let currentletter = letters[i];
        if (currentletter !== ' ') {
            if (letterCounts[currentletter] === undefined) {
                letterCounts[currentletter] = 0;
            }
            letterCounts[currentletter] += 1;
        }
    }

    return letterCounts;
}

console.log(countLetters('lighthouse in the house'));