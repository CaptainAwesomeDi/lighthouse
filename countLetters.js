const countLetters = (letters) => {
    let letterCounts = {};
    let splitedletters = letters.split(' ').join('');
    console.log(splitedletters);
    for (let i = 0; i < splitedletters.length; i++) {
      let currentletter = splitedletters[i];
      if (letterCounts[currentletter] === undefined){
        letterCounts[currentletter] = 0;
      }
      letterCounts[currentletter] +=1;
    }
    return letterCounts;
}

console.log(countLetters('lighthouse in the house'));