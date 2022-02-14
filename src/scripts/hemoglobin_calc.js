


// hemo1, hemo2,...hemo6
export function calcHemoglobin(hemoglobin) {
    let result = 0; // menos de 7,0

    if (hemoglobin === 'hem6') { // +10
        result += 999;
    }
    if (hemoglobin === 'hem5') { // de 9,1 a 10
        result += 100;
    }
    if (hemoglobin === 'hem4') { // de 8,1 a 9,0
        result += 75;
    }
    if (hemoglobin === 'hem3') { // de 7,6 a 8,0
        result += 50;
    }
    if (hemoglobin === 'hem2') { // de 7,0 a 7,5
        result += 25;
    }
    return result;
}
