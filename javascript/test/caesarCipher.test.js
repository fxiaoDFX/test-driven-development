import { encrypt as caesarCipher } from "../caesarCipher"

test('"Attack at dawn." encrypts to "Fyyfhp fy ifbs."', () => {
    expect(caesarCipher("Attack at dawn.", 5)).toBe("Fyyfhp fy ifbs.")
})

test("Encrypt a string with numbers", () => {
    expect(caesarCipher("12 12 23 1203 4 applE", 2)).toBe(
        "34 34 45 3425 6 crrnG"
    )
})
