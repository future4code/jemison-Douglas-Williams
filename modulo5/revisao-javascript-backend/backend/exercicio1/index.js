
const returnNumber = (num) => {
    if (typeof num === Number) {
        return num
    } else {
        return `Erro. Parâmetro invalido(${num}`
}




const convertCelsius = (number, str) => {
    const fahrenheitEmCelsius = number * 1.8 + 32
    const kelvinEmCelsius = number + 273
    const num = Number(number)

    if (str === "F") {
        return `${num}° Celsius é equivalente a ${fahrenheitEmCelsius}° Fahrenheit`
    } else if (str === "K") {
        return `${num}° Celsius é equivalente a ${kelvinEmCelsius}° Kelvin`
    } else if (str ==! "F" || "K") {
        return `Erro. Parâmetro invalido(${str})`
    } else if ( typeof num === Number) {
        return `Erro. Parâmetro invalido(${num})`
    } else {
        return `Erro`
    }
}


console.log(convertCelsius("string", "F"));