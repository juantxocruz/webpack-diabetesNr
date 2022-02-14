
function isBlank(str) {
    return (!!!str || /^\s*$/.test(str));
}

function isATake(sys, dia) {
    if (isBlank(sys) || isBlank(dia)) {
        return false;
    }
    return true;
}
function setNumber(input) {
    return input && input !== '' ? parseInt(input) : 0;
}


export function hypertensionFieldsOn(fields) {
    let firstOn = false;
    let secondOn = false;

    if (!isBlank(fields[0].value) && !isBlank(fields[1].value)) {
        firstOn = true
    }
    if (!isBlank(fields[2].value) && !isBlank(fields[3].value)) {
        secondOn = true
    }
    if (firstOn || secondOn) {
        return true;
    }
    return false;
}

export function hypertensionMsgOff() {
    let blocked = [];
    let msgs = [...document.querySelectorAll(`[data-type*="tension-msg"]`)];

    msgs.forEach((msg) => {
        if (msg.style.display === 'block') {
            blocked.push(msg);
        }
    });

    return blocked.length > 0 ? false : true;

}

export function isCompensatedTension() {
    let $phrase = document.getElementById("hypertension_msg");
    if ($phrase.innerHTML === 'Compensada') {
        return true;
    }
    return false;
}
export function isNotCompensatedTension() {
    let $phrase = document.getElementById("hypertension_msg");
    if ($phrase.innerHTML === 'Descompensada') {
        return true;
    }
    return false;
}



export function setHypertensionResume(hypertension, $systolic, $diastolic) {
    $diastolic.value = hypertension.diastolic !== 0 ? hypertension.diastolic : '';
    $systolic.value = hypertension.systolic !== 0 ? hypertension.systolic : '';
    let x;
}
export function setHypertensionPhrase(hypertension_mean) {
    let $phrase = document.getElementById("hypertension_msg");
    $phrase.classList.remove("blue", "green", "red");
    $phrase.innerHTML = '';

    if (hypertension_mean.systolic > 0 && hypertension_mean.diastolic > 0) {

        if ((hypertension_mean.systolic - hypertension_mean.diastolic) >= 20) {
            $phrase.innerHTML = 'Compensada';
            $phrase.classList.add("green");
        }
        else {
            $phrase.innerHTML = 'Descompensada';
            $phrase.classList.add("red");
            this.modalSetup.header = "Tarificación cancelada"
            this.modalSetup.content = 'La diferencia entre la tensión sistólica y la tensión diástolica es menor de 20 y, por tanto, está muy descompensada.';
            this.modalSetup.action = "Por favor, asegúrese de que la cifra es correcta para poder realizar la tarificación."
            this.openModalWindow(this, this.modalSetup);
        }
    } else {
        $phrase.innerHTML = ''
    }
    return false;
}


export function getHypertensionMean(systolic_1, diastolic_1, systolic_2, diastolic_2) {

    let hypertesion = {
        systolic: 0,
        diastolic: 0
    }
    systolic_1 = setNumber(systolic_1);
    diastolic_1 = setNumber(diastolic_1);
    systolic_2 = setNumber(systolic_2);
    diastolic_2 = setNumber(diastolic_2);

    if (systolic_1 > 0 && systolic_2 > 0) {
        hypertesion.systolic = (systolic_1 + systolic_2) / 2
    } else {
        hypertesion.systolic = systolic_1 + systolic_2
    }
    if (diastolic_1 > 0 && diastolic_2 > 0) {
        hypertesion.diastolic = (diastolic_1 + diastolic_2) / 2
    } else {
        hypertesion.diastolic = diastolic_1 + diastolic_2
    }

    return hypertesion;
}

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


