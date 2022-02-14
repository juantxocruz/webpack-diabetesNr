

export function calcCholesterol(cholesterol) {
    let result = 0; // cho1 - Hasta 200

    if (cholesterol === 'cho5') { // +Más de 300
        result += 999;
    }
    if (cholesterol === 'cho4') { // de 276 a 300
        result += 75;
    }
    if (cholesterol === 'cho3') { // de 251 a 275
        result += 50;
    }
    if (cholesterol === 'cho2') { // de 200 a  250
        result += 25;
    }

    return result;
}


