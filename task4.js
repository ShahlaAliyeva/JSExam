function checkAnagram(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a.length !== b.length) {
        return false;
    }

    var str1 = a.split('').sort().join('');
    var str2 = b.split('').sort().join('');

    var result = (str1 === str2);
    return result;
}

console.log(checkAnagram('finder', 'Friend'));
console.log(checkAnagram('hello', 'bye'));