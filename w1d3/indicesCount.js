const indicesCount = (letters) => {
    let letterPositions = {};
    for (let i = 0; i < letters.length; i++) {
        let currentletter = letters[i];
        if (currentletter !== ' ') {
            if (letterPositions[currentletter] === undefined) {
                letterPositions[currentletter] = [];
            }
            letterPositions[currentletter] += i + " ";
        }
    }

    return letterPositions;
}

console.log(indicesCount('lighthouse in the house'));