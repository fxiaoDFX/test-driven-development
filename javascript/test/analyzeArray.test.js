import analyzeArray from "../analyzeArray"

const a = [1, 2, 3, 4, 5]
test("object returned should contain {average: 3, min: 1, max: 5, length: 5}", () => {
    expect(analyzeArray(a)).toEqual({ average: 3, min: 1, max: 5, length: 5 })
})
