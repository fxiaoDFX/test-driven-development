export const encrypt = (string, shift = 0) => {
    const charCodes = []

    for (let i = 0; i < string.length; i++) {
        charCodes.push(shiftCode(string.charCodeAt(i), shift))
    }

    const encrypted = []
    for (let i = 0; i < charCodes.length; i++) {
        encrypted.push(String.fromCharCode(charCodes[i]))
    }
    return encrypted.join("")
}

function shiftCode(code, shift = 0) {
    // 0-9
    if (code > 47 && code < 58) {
        if (code + shift > 57) return ((code + shift) % 58) + 48
        else return code + shift
    } // a-z
    else if (code > 96 && code < 123) {
        if (code + shift > 122) return ((code + shift) % 123) + 97
        else return code + shift
    } // A-Z
    else if (code > 64 && code < 91) {
        if (code + shift > 90) return ((code + shift) % 91) + 65
        else return code + shift
    } else return code
}
