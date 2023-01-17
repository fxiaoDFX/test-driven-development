import calculator from "../calculator"

test("5 times 7 equals 35", () => {
    expect(calculator.multiply(5, 7)).toBe(35)
})

test("99 divided by 11 equals 9", () => {
    expect(calculator.divide(99, 11)).toBe(9)
})

test("2 plus 2 equals 4", () => {
    expect(calculator.add(2, 2)).toBe(4)
})
test("3 minus 5 equals -2", () => {
    expect(calculator.subtract(3, 5)).toBe(-2)
})
