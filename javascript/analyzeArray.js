const analyzeArray = (array) => {
    return {
        average: getAverage(array),
        min: getMin(array),
        max: getMax(array),
        length: array.length,
    }
}

const getAverage = (array) => {
    let sum = 0
    array.forEach((value) => {
        sum += value
    })
    return sum / array.length
}

const getMin = (array) => {
    let temp = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] < temp) temp = array[i]
    }
    return temp
}

const getMax = (array) => {
    let temp = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > temp) temp = array[i]
    }
    return temp
}

module.exports = analyzeArray
