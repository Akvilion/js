const Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

function compare(x1, x2) {
    if (x1.calcBMI() > x2.calcBMI()) {
        return (`${x1.fullName} BMI is ${x1.bmi} is higher than ${x2.fullName} BMI ${x2.bmi}`)
    }
    else if (x1.calcBMI < x2.calcBMI) {
        return (`${x2.fullName} BMI is ${x2.bmi} is higher than ${x1.fullName} BMI ${x1.bmi}`)
    }
    else {

        return (`-1 ${x1.bmi} ${x2.bmi}`)
    }
}

console.log(compare(Mark, John))