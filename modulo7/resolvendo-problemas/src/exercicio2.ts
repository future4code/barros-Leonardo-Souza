function compressedStr(str:string) {
    let compressed = ""
    let count = 1
    let prevChar = str[0]

    for (let i = 0; i < str.length; i++) {
       if (str[i] !== prevChar) {
        compressed += prevChar + count
        prevChar = str[i]
        count = 1
       } else {
        count++;
       }
    }
    compressed += prevChar + count

    if (compressed.length < str.length) {
        return compressed
    } else {
        return str
    }
}

console.log(compressedStr("aabcccccaaa"));
