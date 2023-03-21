function isOneEdit(string1:string, string2:string):boolean {
    if (Math.abs(string1.length - string2.length) > 1) {
        return false
    }
    
    if (string1.length > string2.length) {
        return string1.includes(string2)
    } else if (string2.length > string1.length) {
        return string2.includes(string1)
    }
    
    let diffCount = 0

    for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== string2[i]) {
            diffCount++
        }
        if (diffCount > 1) {
            return false
        }
        
    }

    return diffCount === 1

}

console.log(isOneEdit("Banana", "Panama"));
