const capitalize = require("../capitalize")

test("capitalize hello world is Hello world", () => {
    expect(capitalize("hello world")).toMatch(/^H/)
})
