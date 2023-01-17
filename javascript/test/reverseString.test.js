import { reverseString } from "../reverseString"

test("Fire reversed is eriF", () => {
    expect(reverseString("Fire")).toMatch(/[eriF]/)
})

test("String with special characters", () => {
    expect(reverseString("asdf . / w")).toMatch("w / . fdsa")
})
