let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let total = []


function calcTip(x) {
    if (x > 50 && x < 300) {

    }
}


function calcTip(x, z, y) {
    for (let i = 0; i < x.length; i++) {
        if (x[i] > 50 && x[i] < 300) {
            z[i] = x[i] * 0.15
            y[i] = x[i] + z[i]
        }
        else {
            z[i] = x[i] * 0.20
            y[i] = x[i] + z[i]
        }
    }
    return y
}


let a = calcTip(bills, tips, total)

console.log(a)

function calcAverage(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i]
    }
    return sum
}

let b = calcAverage(a)
console.log(b)
