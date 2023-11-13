function isPalindrome(word) {
  const lowerCaseWord = word.toLowerCase();

  for (let i = 0; i < lowerCaseWord.length / 2; i++) {
    if (lowerCaseWord[i] !== lowerCaseWord[lowerCaseWord.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

/*

Add your pseudocode here

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
