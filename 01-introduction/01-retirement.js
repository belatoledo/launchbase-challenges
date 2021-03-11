const name = 'James';
const gender = 'M';
const age = 60;
const contribuition = 36;

const totalContribuition = age + contribuition

const femaleRetirement = gender == 'F' && contribuition >= 30 && totalContribuition >= 85;
const maleRetirement = gender == 'M' && contribuition >= 35 && totalContribuition >= 95;

if (femaleRetirement || maleRetirement) {
    console.log(`${name}, you can retired!`)
} else {
    console.log(`${name}, you can't reitired yet.`)
}