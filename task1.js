function findLength(str) {
    var newString = [];
    var lengthOfStr = 0
    for (let i = 0; i < str.length; i++) {

        var position = newString.indexOf(str[i]);

        if (position !== -1) {
            newString.splice(0, position + 1);
        }
        newString.push(str[i]);

        lengthOfStr = Math.max(
            lengthOfStr,
            newString.length
        );
    }
    console.log(lengthOfStr)
    console.log(newString)
};

findLength("abbbcabcdefef")