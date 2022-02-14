
export function calcHypertension(systolic, diastolic) {

    let result = 0;
    if ((systolic > 145) || (diastolic > 95)) {
        return result += 999;
    }
    if ((systolic > 139) || (diastolic > 89)) {
        return result += 75;
    }
    if ((systolic > 131) || (diastolic > 80)) {
        return result += 50;
    }
    return result;

}

export function setSystolicColors(input, systolic) {

    input.classList.remove("blue", "green", "red");
    if (systolic > 145 || systolic < 65) {
        input.classList.add("red");
        return false;
    }

    if (systolic > 131) {
        input.classList.add("blue");
        return false;
    }

    input.classList.add("green");
    return false;

}

export function setDiastolicColors(input, diastolic) {
    input.classList.remove("blue", "green", "red");
    if (diastolic > 95 || diastolic < 45) {
        input.classList.add("red");
        return false;
    }
    if (diastolic > 80) {
        input.classList.add("blue");
        return false;
    }
    input.classList.add("green");
    return false;

}
