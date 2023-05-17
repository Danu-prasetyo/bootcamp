function bracketMatcher(string) {
  let match = 1

  for (i = 0; i < string.length; i++) {
    if (string[i] == "(") {
      match += 1
    }
  }

  for (i = 0; i < string.length; i++) {
    if (string[i] == ")") {
      match -= 1
    }
  }

  if (match != 1) {
    return 0
  }

  return match
}

const string1 = "((asdas)d(asdas)dasdas)"
console.log(`Input: "${string1}"`);
console.log(`Output: "${bracketMatcher(string1)}"`);