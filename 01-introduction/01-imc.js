const name = 'Adam';
const bodyweight = 80;
const stature = 1.80;

const imc = bodyweight/(stature * stature)
console.log(imc)

    if (imc >= 30) {
        console.log(`${name}, you are overweight.`)
    } else {
        console.log(`${name}, you aren't overweight.`)
    }


