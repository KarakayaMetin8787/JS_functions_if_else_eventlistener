function age(yearBorn){
    const ageCalc = 2023 - yearBorn;
    return ageCalc;
}

const myAge = age(1987);
console.log(myAge);

function compareAge(yearBornOther){
    const ageCalc = Math.abs(myAge - (2023 - yearBornOther));
    return ageCalc;
}

console.log(compareAge(1992));