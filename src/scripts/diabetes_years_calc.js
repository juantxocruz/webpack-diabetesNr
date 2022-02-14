
// antigüedad vida, invalidez, accidente
function calcDiabetesByYearsLife(type, years) {
    let result = 0;

    if (type === 't1') {
        if (years < 5) {
            result += 0;
        }
        if (years >= 5 && years <= 20) {
            result += 50;
        }

        if (years > 20) {
            result += 999;
        }
    }
    if (type === 't2') {
        if (years <= 10) {
            result += 0;
        }

        if (years > 10) {
            result += 50;
        }
    }
    return result;
}

// antigüedad ILT

function calcDiabetesByYearsILT(type, years) {
    let result = 0;
    if (type === 't1') {

        if (years <= 10) {
            result += 25;
        }
        if (years > 11 && years <= 20) {
            result += 50;
        }
        if (years > 20 && years <= 25) {
            result += 75;
        }
        if (years > 25 && years <= 30) {
            result += 100;
        }
        if (years > 30 && years <= 35) {
            result += 150;
        }
        if (years > 35) {
            result += 999;
        }
    }

    if (type === 't2') {

        if (years <= 5) {
            result += 25;
        }
        if (years > 5 && years <= 10) {
            result += 50;
        }
        if (years > 10 && years <= 15) {
            result += 75;
        }
        if (years > 15) {
            result += 100;
        }
    }
    return result;
}
export function calcDiabetesByYears(type, years) {
    let diabetesByYearLife = calcDiabetesByYearsLife(type, years);
    let diabetesByYearILT = calcDiabetesByYearsILT(type, years);
    return {
        life: diabetesByYearLife,
        disability: diabetesByYearLife,
        accident: diabetesByYearLife,
        ilt: diabetesByYearILT
    }
}