import { getDictionaryWord } from './dictionary';
import { idiom } from './index';

let self = document;

let modal_result = self.getElementById("modal_result");
let close_modal_result = self.getElementById("close_modal_result");
let result_today = self.getElementById('result_today');
let result_year = self.getElementById('result_year');
let result_vars_constitution = self.getElementById('result_vars_constitution');
let result_vars_medical = self.getElementById('result_vars_medical');
let result_vars_drugs = self.getElementById('result_vars_drugs');
let result_total_life = self.getElementById('result_total_life');
let result_total_disability = self.getElementById('result_total_disability');
let result_total_accident = self.getElementById('result_total_accident');
let result_total_ilt = self.getElementById('result_total_ilt');
let result_table_life = self.getElementById('result_table_life');
let result_table_disability = self.getElementById('result_table_disability');
let result_table_accident = self.getElementById('result_table_accident');
let result_table_ilt = self.getElementById('result_table_ilt');


// functions
// MODAL WINDOW
export function initModalResults() {
    close_modal_result.onclick = function () {
        modal_result.style.display = "none";
    }
}

function getYearsDiabetes(num) {
    if (+num > 1) {
        return num + " " + getDictionaryWord("r_years");
    }
    if (+num === 1) {
        return num + " " + getDictionaryWord("r_year");
    }
    return getDictionaryWord("r_no_years");
}


function getAlcohol(beers, wines, spirits) {
    let result = '';
    if (beers === 0 && wines === 0 && spirits === 0) {
        result += getDictionaryWord("r_no_alcohol");
        return result;
    } else {
        if (beers === 0 || beers > 1) {
            result += beers + " " + getDictionaryWord("r_beers") + ' | ';
        }
        if (beers === 1) {
            result += getDictionaryWord("r_beer") + ' | ';
        }
        if (wines === 0 || wines > 1) {
            result += wines + " " + getDictionaryWord("r_wines") + ' | ';
        }
        if (wines === 1) {
            result += getDictionaryWord("r_wine") + ' | ';
        }
        if (spirits === 0 || spirits > 1) {
            result += spirits + " " + getDictionaryWord("r_liqueurs") + ' | ';
        }
        if (spirits === 1) {
            result += getDictionaryWord("r_liquor");
        }
    }
    return result;
};

function getTobacco(cigarettes, cigars, pipes) {
    let result = '';
    if (cigarettes === 0 && cigars === 0 && pipes === 0) {
        result += getDictionaryWord("r_no_tobacco");
        return result;
    } else {
        if (cigarettes === 0 || cigarettes > 1) {
            result += cigarettes + " " + getDictionaryWord("r_cigarettes") + ' | ';
        }
        if (cigarettes === 1) {
            result += getDictionaryWord("r_cigarette") + ' | ';
        }

        if (cigars === 0 || cigars > 1) {
            result += cigars + " " + getDictionaryWord("r_cigars") + ' | ';
        }
        if (cigars === 1) {
            result += getDictionaryWord("r_cigar") + ' | ';
        }

        if (pipes === 0 || pipes > 1) {
            result += pipes + " " + getDictionaryWord("r_pipes") + ' | ';
        }
        if (pipes === 1) {
            result += pipes + " " + getDictionaryWord("r_pipe");
        }

    }
    return result;
};

function getPartialResult(number) {
    if (number >= 999) {
        return '<span class="red">' + getDictionaryWord("r_refuse") + '</span>';
    }
    if (number === 0) {
        return '<span class="green">' + getDictionaryWord("r_normal") + '</span>';
    }
    if (number > 0) {
        return '<span class="red"> +' + number + '%</span>';
    }

}


function getTotalResult(data, key) {
    let result = data.diabetesByYears[key] + data.diabetesByAge[key] + data.imc[key] + data.tobacco + data.alcohol + data.hypertension + data.insulin + data.hemoglobin + data.cholesterol
    return getPartialResult(+result);
}

function getTableResult(data, key) {
    let table = '';
    table += '<table class="result-table" style="width:100%">';
    table += '<tr><th </th><th></th></tr>';
    table += '<tr>';
    table += '<td>' + getDictionaryWord('tr_diabetes') + '</td>';
    table += ' <td>' + getPartialResult(data.diabetesByYears[key]) + '</td>';
    table += ' </tr>';

    table += '<tr>';
    table += '<td>' + getDictionaryWord('tr_age') + '</td>';
    table += ' <td>' + getPartialResult(data.diabetesByAge[key]) + '</td>';
    table += ' </tr>';

    table += '<tr>';
    table += '<td>' + getDictionaryWord('tr_bmi') + '</td>';
    table += ' <td>' + getPartialResult(data.imc[key]) + '</td>';
    table += ' </tr>';

    table += '<tr>';
    table += '<td>' + getDictionaryWord('tr_tobacco') + '</td>';
    table += ' <td>' + getPartialResult(data.tobacco) + '</td>';
    table += ' </tr>';

    table += '<tr>';
    table += '<td>' + getDictionaryWord('tr_alcohol') + '</td>';
    table += ' <td>' + getPartialResult(data.alcohol) + '</td>';
    table += ' </tr>';

    table += '<tr>';
    table += '<td>' + getDictionaryWord('tr_tension') + '</td>';
    table += ' <td>' + getPartialResult(data.hypertension) + '</td>';
    table += ' </tr>';

    table += '<tr>';
    table += '<td>' + getDictionaryWord('tr_hemoglobin') + '</td>';
    table += ' <td>' + getPartialResult(data.hemoglobin) + '</td>';
    table += ' </tr>';

    table += '<tr>';
    table += '<td>' + getDictionaryWord('tr_insulin') + '</td>';
    table += ' <td>' + getPartialResult(data.insulin) + '</td>';
    table += ' </tr>';

    table += '<tr>';
    table += '<td>' + getDictionaryWord('tr_cholesterol') + '</td>';
    table += ' <td>' + getPartialResult(data.cholesterol) + '</td>';
    table += ' </tr>';
    table += '</table>';

    return table;

}



export function openModalResults(event, _vars, $results) {
    event.stopPropagation();

    // vars
    let newDate = new Date(_vars.today);
    let year = newDate.getFullYear();
    let today = newDate.getDate() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getFullYear() + " " + getDictionaryWord('p_at') + " " + (newDate.getUTCHours() + 1) + ':' + newDate.getUTCMinutes() + getDictionaryWord('p_hours');
    let gender = getDictionaryWord(_vars.gender);
    let bornDate = new Date(_vars.date);
    let date = bornDate.getDate() + '/' + (bornDate.getMonth() + 1) + '/' + bornDate.getFullYear() + '';
    let age = _vars.age + " " + getDictionaryWord("r_years");
    let height = _vars.height + " " + getDictionaryWord("r_cm");
    let weight = _vars.weight + " " + getDictionaryWord("r_kg");
    let imc = _vars.imc + " " + getDictionaryWord("r_bmi");
    let diabetes = getDictionaryWord("r_diabetes") + " " + getDictionaryWord(_vars.diabetes);
    let systolic = _vars.systolic + " " + getDictionaryWord("r_systolic");
    let diastolic = _vars.diastolic + " " + getDictionaryWord("r_diastolic");
    let insulin = getDictionaryWord(_vars.insulin);
    let hemoglobin = getDictionaryWord(_vars.hemoglobin) + " " + getDictionaryWord("r_hemoglobin");
    let cholesterol = getDictionaryWord(_vars.cholesterol) + " " + getDictionaryWord("r_cholesterol");
    let alcohol = getAlcohol(parseInt(_vars.beers), parseInt(_vars.wines), parseInt(_vars.spirits));
    let tobacco = getTobacco(parseInt(_vars.cigarettes), parseInt(_vars.cigars), parseInt(_vars.pipes));


    let constitution = gender + ' | ' + date + ' | ' + age + ' | ' + height + ' | ' + weight + ' | ' + imc;
    let medical = diabetes + ': ' + getYearsDiabetes(_vars.yearsDiabetes) + ' | ' + systolic + ' | ' + diastolic + ' | ' + insulin;
    let drugs = hemoglobin + ' | ' + cholesterol + ' | ' + alcohol + ' | ' + tobacco;
    let total_life = getTotalResult($results, 'life');
    let total_disability = getTotalResult($results, 'disability');
    let total_accident = getTotalResult($results, 'accident');
    let total_ilt = getTotalResult($results, 'ilt');
    let table_life = getTableResult($results, 'life');
    let table_disability = getTableResult($results, 'disability');
    let table_accident = getTableResult($results, 'accident');
    let table_ilt = getTableResult($results, 'ilt');


    // print
    result_today.innerHTML = today;
    result_year.innerHTML = year;
    result_vars_constitution.innerHTML = constitution;
    result_vars_medical.innerHTML = medical;
    result_vars_drugs.innerHTML = drugs;
    result_total_life.innerHTML = total_life;
    result_total_disability.innerHTML = total_disability;
    result_total_accident.innerHTML = total_accident;
    result_total_ilt.innerHTML = total_ilt;
    result_table_life.innerHTML = table_life;
    result_table_disability.innerHTML = table_disability;
    result_table_accident.innerHTML = table_accident;
    result_table_ilt.innerHTML = table_ilt;

    modal_result.style.display = "block";
}
