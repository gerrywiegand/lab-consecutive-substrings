function consecutiveSubstrings(string) {
  if (string.length === 0) return [];

  const subStrings = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      subStrings.push(string.slice(i, j));
    }
  }
  return subStrings;
}

console.log(consecutiveSubstrings("abc"));

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings("abc"));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings("a"));
}

module.exports = consecutiveSubstrings;
