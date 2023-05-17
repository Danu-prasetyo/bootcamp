function matchBracket(bracket) {
    let stack = [];
    for (let i = 0; i < bracket.length; i++) {
        if (bracket[i] === "(") {
            stack.push("(");
        } else if (bracket[i] === ")") {
            if (stack.length === 0 || stack.pop() !== "(") {
                return 0;
            }
        }
    }
    return stack.length === 0 ? 1 : 0;
}

console.log(matchBracket("(coder)")); 
console.log(matchBracket("(coder")); 