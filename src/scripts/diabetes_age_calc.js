
// LIFE
function calcDiabetesByAgeLife(type, age) {
    let result = 0;
    if (type === 't1') {
        if (age <= 19) {
            result += 0;
        }
        if (age > 19 && age <= 24) {
            result += 250;
        }
        if (age > 24 && age <= 29) {
            result += 200;
        }
        if (age > 29 && age <= 40) {
            result += 150;
        }
        if (age > 40) {
            result += 100;
        }
    }
    if (type === 't2') {
        if (age <= 29) {
            result += 200;
        }
        if (age > 29 && age <= 39) {
            result += 150;
        }
        if (age > 39 && age <= 49) {
            result += 75;
        }
        if (age > 49) {
            result += 25;
        }
    }
    return result;

}
// INVALIDEZ Y ACCIDENTE
function calcDiabetesByAgeDis(type, age) {
    let result = 0;
    if (type === 't1') {
        result += 999;
    }
    if (type === 't2') {
        if (age <= 39) {
            result += 999;
        }
        if (age > 39 && age <= 49) {
            result += 100;
        }
        if (age > 49) {
            result += 25;
        }
    }
    return result;
}
// TO BE DONE
function calcDiabetesByAgeILT(type, age) {
    return 0;
}

export function calcDiabetesByAge(type, age) {
    let diabetesByAgeLife = calcDiabetesByAgeLife(type, age);
    let diabetesByAgeDis = calcDiabetesByAgeDis(type, age);
    let diabetesByAgILT = calcDiabetesByAgeILT(type, age);

    return {
        life: diabetesByAgeLife,
        disability: diabetesByAgeDis,
        accident: diabetesByAgeDis,
        ilt: diabetesByAgILT
    }

}



