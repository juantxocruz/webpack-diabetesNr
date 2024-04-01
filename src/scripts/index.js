import '../styles/index.scss';


import {
    addEventListenerList,
    calculate_age,
    dateIsHigher,
    subtractYearsToDate,
    dateIsOnRange,
    isNumberKey,
    limitChars, cmToMeter, toDateString
} from "./helpers"
import { calcAlcohol } from "./alcohol_calc";
import { calcCholesterol } from './cholesterol_calc';
import { calcDiabetesByAge } from './diabetes_age_calc';
import { calcDiabetesByYears } from './diabetes_years_calc';
import { calcHemoglobin } from './hemoglobin_calc';
import { calcHypertension, setSystolicColors, setDiastolicColors } from './hypertension_calc';
import { calcImc, setImcColor } from './imc_calc'
import { calcInsulin } from './insulin_calc';
import { calcTobacco } from './tobacco_calc';
import { openModalResults, initModalResults } from './modal_results';
import { openModalWindow, initModalWindow } from './modal_window';

import { getDictionaryWord, setFormDictionary } from './dictionary';




if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}


// export let idiom = 'ES'; // ES OR EN

export let idiom = getLang(); // ES OR EN


function getLang() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lang = urlParams.get('lang');

    return lang && lang.toUpperCase() === "FR" ? "FR" : lang && lang.toUpperCase() === "EN" ? "EN" : "ES";
}



let formForm = document.forms["diabetes_form"];
let diabetes_cal = document.getElementById('diabetes_cal');

let numericFields = formForm.querySelectorAll('input[type="number"]');
let genderField = formForm.elements['gender'];
let pathologyFields = document.getElementsByName('cbox');
let dateFields = formForm.querySelectorAll('input[type="date"]');
let body_mass = formForm.elements['body_mass'];



let pathologiesModalSetup = {
    header: getDictionaryWord("exclusionary_pathology"),
    content: getDictionaryWord("pathologiesModalSetup_content"),
    action: "",
    footer: getDictionaryWord("modalSetup_footer"),
}

let birthdayModalSetup = {
    header: getDictionaryWord("birthdayModalSetup_header"),
    content: getDictionaryWord("birthdayModalSetup_content"),
    action: getDictionaryWord("birthdayModalSetup_action"),
    footer: getDictionaryWord("modalSetup_footer"),
}

let modalSetup = {
    header: getDictionaryWord("modalSetup_header"),
    content: "",
    action: "",
    footer: getDictionaryWord("modalSetup_footer"),
}


const dateRange = [13, 69];
const minHeight = 120;
const minWeight = 32;
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const systolicRange = [65, 145];
const diastolicRange = [45, 95];

//+ subtractYearsToDate(new Date(), dateRange[1]).toLocaleDateString('es-ES', dateOptions) + 


let dateRangeModalSetup = {
    header: getDictionaryWord("dateRangeModalSetup_header"),
    content: getDictionaryWord("dateRangeModalSetup_content_1") + " " + dateRange[0] + " " + getDictionaryWord("dateRangeModalSetup_content_2") + " " + dateRange[1] + " " + getDictionaryWord("dateRangeModalSetup_content_3") + ".",
    action: getDictionaryWord("dateRangeModalSetup_action_1") + " " + toDateString(subtractYearsToDate(new Date(), dateRange[1]), idiom, dateOptions) + " " + getDictionaryWord("dateRangeModalSetup_action_2") + " " + toDateString(subtractYearsToDate(new Date(), dateRange[0]), idiom, dateOptions) + ".",
    footer: getDictionaryWord("modalSetup_footer")
}

let fieldsOffModalSetup = {
    header: getDictionaryWord("modalSetup_header"),
    content: getDictionaryWord("fieldsOffModalSetup_content"),
    action: getDictionaryWord("fieldsOffModalSetup_action"),
    footer: getDictionaryWord("modalSetup_footer")
}

// global results
let _today = new Date();
let _age = '';
let _date = formForm.elements['birthday'].value;
let _gender = formForm.elements['gender'].value;
let _diabetes = formForm.elements['diabetes'].value;
let _yearsDiabetes = formForm.elements['years_diabetes'].value;
let _weight = formForm.elements['weight'].value;
let _height = formForm.elements['height'].value;
let _imc = formForm.elements['body_mass'].value;
let _cigarettes = formForm.elements['cigarettes'].value;
let _cigars = formForm.elements['cigars'].value;
let _pipes = formForm.elements['pipes'].value;
let _wines = formForm.elements['wines'].value;
let _beers = formForm.elements['beers'].value;
let _spirits = formForm.elements['spirits'].value;
let _systolic = formForm.elements['systolic'].value;
let _diastolic = formForm.elements['diastolic'].value;
let _insulin = formForm.elements['insulin'].value;
let _hemoglobin = formForm.elements['hemoglobin'].value;
let _cholesterol = formForm.elements['cholesterol'].value;
let _vars = {};


let $result = {
    diabetesByYears: {
        life: 0,
        disability: 0,
        accident: 0,
        ilt: 0
    },
    diabetesByAge: {
        life: 0,
        disability: 0,
        accident: 0,
        ilt: 0
    },
    imc: {
        life: 0,
        disability: 0,
        accident: 0,
        ilt: 0
    },
    tobacco: 0,
    alcohol: 0,
    hypertension: 0,
    insulin: 0,
    hemoglobin: 0,
    cholesterol: 0
};

function getVars() {
    return {
        date: _date,
        age: _age,
        gender: _gender,
        diabetes: _diabetes,
        yearsDiabetes: _yearsDiabetes,
        weight: _weight,
        height: _height,
        imc: _imc,
        cigarettes: _cigarettes,
        cigars: _cigars,
        pipes: _pipes,
        wines: _wines,
        beers: _beers,
        spirits: _spirits,
        systolic: _systolic,
        diastolic: _diastolic,
        insulin: _insulin,
        hemoglobin: _hemoglobin,
        cholesterol: _cholesterol,
        today: _today
    }
}


function setSubmitButtonState() {
    let button = document.getElementById('submit_button');
    if (fieldsOn()) {
        return button.classList.add("fieldsOn");
    }
    else {
        return button.classList.remove("fieldsOn");
    }


}

function radioButtonOn(list) {
    let wrongFields = [];
    list.forEach((l) => {
        let fields = document.getElementsByName(l);
        let wrongTemp = [];
        fields.forEach((f) => {
            if (f.checked === false) {
                wrongTemp.push(f);
            }
        })
        if (wrongTemp.length === fields.length) { wrongFields.push(fields) };
    })
    return wrongFields.length > 0 ? false : true;
}

// CHECK ALL FIELDS FUNCTIONS
function fieldsOn() {
    let insulin = document.getElementsByName("insulin");
    let nodeList = formForm.querySelectorAll('input[type="number"], input[type="date"], input[type="checkbox"], input[type="radio"]');
    let wrongFields = [];
    let i = 0;
    for (i = 0; i < nodeList.length; i++) {
        if (nodeList[i].type === "checkbox" && nodeList[i].checked) {
            wrongFields.push(nodeList[i]);
        }
        if ((nodeList[i].type === "date" || nodeList[i].type === "number") && nodeList[i].value === "") {
            wrongFields.push(nodeList[i]);
        }

    }
    if (!radioButtonOn(["insulin", "gender", "diabetes", "hemoglobin", "cholesterol"])) {
        wrongFields.push({});
    }

    return wrongFields.length > 0 ? false : true;
}

function resetNodeFields(nodeList) {

    let i = 0;
    for (i = 0; i < nodeList.length; i++) {
        document.getElementById(nodeList[i].name + "_msg").style.display = "none";
    }


}
function checkNodeFields(nodeList) {
    let i = 0;
    for (i = 0; i < nodeList.length; i++) {
        if (nodeList[i].type === "checkbox" && nodeList[i].checked) {
            document.getElementById(nodeList[i].name + "_msg").style.display = "block";
        }

        if (nodeList[i].type === "radio" && nodeList.value === "") {
            document.getElementById(nodeList[i].name + "_msg").style.display = "block";
        }

        if ((nodeList[i].type === "date" || nodeList[i].type === "number") && nodeList[i].value === "") {
            let x = nodeList[i].name + "_msg";
            let y = document.getElementById(nodeList[i].name + "_msg");
            document.getElementById(nodeList[i].name + "_msg").style.display = "block";
        }
    }
}




// Event listeners

// Only numeric values on fields, no comma, no dot, no paste, no drop.
function setNumericField() {
    let fields = formForm.querySelectorAll('input[type="number"]');
    addEventListenerList(fields, "keypress", (e) => {
        isNumberKey(e)
        limitChars(e)
    });
    addEventListenerList(fields, "paste", (e) => { e.preventDefault(); return false; });
    addEventListenerList(fields, "drop", (e) => { e.preventDefault(); return false; });
    addEventListenerList(fields, "change", (e) => { toggleMandatoryMsg(e) });
}

function toggleMandatoryMsg(e) {
    if ((e.currentTarget.type === 'date' || e.currentTarget.type === "number" || e.currentTarget.type === 'radio') && e.currentTarget.value !== "") {
        document.getElementById(e.currentTarget.name + "_msg").style.display = "none";
        return false;
    }
    if (e.currentTarget.type === 'checkbox' && !e.currentTarget.checked) {
        let boxes = document.getElementsByName(e.currentTarget.name);
        let checked = Array.prototype.slice.call(boxes).filter(d => d.checked);
        if (checked.length < 1) {
            document.getElementById(e.currentTarget.name + "_msg").style.display = "none";
            return false;
        }
    }
    document.getElementById(e.currentTarget.name + "_msg").style.display = "block";
    return false;
}


// INIT INPUTS 
function initPathologies() {
    // 1. Pathologies
    let pathologyCheckBoxes = document.getElementsByName('cbox');
    addEventListenerList(pathologyCheckBoxes, "click", (e) => {
        openModalWindow(e, pathologiesModalSetup)
    });
    addEventListenerList(pathologyCheckBoxes, "change", (e) => {
        toggleMandatoryMsg(e);
    });
    addEventListenerList(pathologyCheckBoxes, "change", (e) => {
        setSubmitButtonState(e);
    });


}


function initBirthday() {
    // 2. Birthday and age
    let birthdayInput = formForm.elements['birthday'];
    birthdayInput.onblur = (e) => {
        _date = new Date(e.currentTarget.value);
        if (!dateIsHigher(_date)) {
            if (dateIsOnRange(dateRange, _date)) {
                _age = calculate_age(new Date(e.currentTarget.value));
                document.getElementById("birthday_msg").style.display = "none";
            } else {
                openModalWindow(e, dateRangeModalSetup);
                e.currentTarget.value = "";
                document.getElementById("birthday_msg").style.display = "block";
            }
        }
        else {
            openModalWindow(e, birthdayModalSetup);
            e.currentTarget.value = "";
            document.getElementById("birthday_msg").style.display = "block";
        }
        setSubmitButtonState();
    }
}


function initRadioButtons(name) {
    let input = formForm.elements[name];
    addEventListenerList(input, "change", (e) => {
        toggleMandatoryMsg(e);
        switch (name) {
            case 'gender':
                _gender = e.currentTarget.value; // male, female
                break;
            case 'diabetes':
                _diabetes = e.currentTarget.value; // t1, t2
                // to move and delete from here
                $result.diabetesByAge = calcDiabetesByAge(_diabetes, Number(_age));


                break;
            case 'insulin':
                _insulin = e.currentTarget.value; // ins1, ins2
                $result.insulin = calcInsulin(_insulin);
                let x;

                break;
            case 'hemoglobin':
                _hemoglobin = e.currentTarget.value; // hemo1, hemo2,...hemo6
                // to move
                $result.hemoglobin = calcHemoglobin(_hemoglobin);
                let y;
                break;
            case 'cholesterol':
                _cholesterol = e.currentTarget.value; // cho1, cho2... cho5
                // to move

                $result.cholesterol = calcCholesterol(_cholesterol);
                let w;
                break;
            default:
                return "";
        }
        setSubmitButtonState();


    });
}



function setBodyMassField() {

    if (_weight !== "" && _height !== "") {
        let w = cmToMeter(Number(_height));
        _imc = (Number(_weight) / (Number(w) * Number(w))).toFixed(2);
        body_mass.value = _imc;
        setImcColor(body_mass, _imc);
        // to move
        $result.imc = calcImc(_imc, Number(_age));


    }
    else {
        body_mass.value = '';


    }
}
function initNumericField(name) {
    let input = formForm.elements[name];
    let parser;
    input.addEventListener("blur", (e) => {
        switch (name) {
            case 'years_diabetes':
                _yearsDiabetes = e.currentTarget.value; // string 
                // to move
                $result.diabetesByYears = calcDiabetesByYears(_diabetes, Number(_yearsDiabetes));
                break;
            case 'weight':

                _weight = e.currentTarget.value; // string 
                parser = !!parseInt(_weight) ? parseInt(_weight) : 0;
                if (parser <= minWeight) {
                    modalSetup.content = getDictionaryWord("weightModalSetup_1_content") + " " + (minWeight) + " " + getDictionaryWord("weightModalSetup_2_content") + '.';
                    modalSetup.action = getDictionaryWord("date_is_not_correct");

                    if (_weight !== '') {
                        openModalWindow(e, modalSetup);

                    }
                    _weight = '';
                    e.currentTarget.value = '';
                    body_mass.value = '';


                } else {
                    if (_weight !== '' && _height !== '') {
                        setBodyMassField();
                    }

                }

                break;
            case 'height':
                _height = e.currentTarget.value; // string d
                parser = !!parseInt(_height) ? parseInt(_height) : 0;
                if (parser <= minHeight) {
                    modalSetup.content = getDictionaryWord("heightModalSetup_1_content") + " " + (minHeight) + " " + getDictionaryWord("heightModalSetup_2_content") + '.';
                    modalSetup.action = getDictionaryWord("date_is_not_correct");
                    _height = '';
                    e.currentTarget.value = '';
                    body_mass.value = '';
                    openModalWindow(e, modalSetup);

                } else {
                    if (_weight !== '' && _height !== '') {
                        setBodyMassField();
                    }
                }

                break;
            case 'cigarettes':
                _cigarettes = e.currentTarget.value; // string 
                break;
            case 'cigars':
                _cigars = e.currentTarget.value; // string 
                break;
            case 'pipes':
                _pipes = e.currentTarget.value; // string 
                // to move
                $result.tobacco = calcTobacco(Number(_cigarettes), Number(_cigars), Number(_pipes));

                break;
            case 'wines':
                _wines = e.currentTarget.value; // string 
                break;
            case 'beers':
                _beers = e.currentTarget.value; // string 
                break;
            case 'spirits':
                _spirits = e.currentTarget.value; // string
                $result.alcohol = calcAlcohol(Number(_wines), Number(_beers), Number(_spirits));

                break;
            case 'systolic':


                _systolic = e.currentTarget.value; // string 
                if (parseInt(_systolic) > systolicRange[1]) {
                    modalSetup.content = getDictionaryWord("systolicModalSetup_High_content");
                    modalSetup.action = getDictionaryWord("date_is_not_correct");
                    openModalWindow(e, modalSetup);
                }
                if (parseInt(_systolic) < systolicRange[0]) {
                    modalSetup.content = getDictionaryWord("systolicModalSetup_Low_content");
                    modalSetup.action = getDictionaryWord("date_is_not_correct");
                    openModalWindow(e, modalSetup);
                }
                setSystolicColors(formForm.elements['systolic'], _systolic);
                break;
            case 'diastolic':
                _diastolic = e.currentTarget.value; // string 
                if (parseInt(_diastolic) > diastolicRange[1]) {
                    modalSetup.content = getDictionaryWord("diastolicModalSetup_High_content");
                    modalSetup.action = getDictionaryWord("date_is_not_correct");
                    openModalWindow(e, modalSetup);
                }
                if (parseInt(_diastolic) < diastolicRange[0]) {
                    modalSetup.content = getDictionaryWord("diastolicModalSetup_Low_content");
                    modalSetup.action = getDictionaryWord("date_is_not_correct");
                    openModalWindow(e, modalSetup);
                }
                setDiastolicColors(formForm.elements['diastolic'], _diastolic);
                // to move
                $result.hypertension = calcHypertension(Number(_systolic), Number(_diastolic));
                let x;
                break;
            default:
                return "";

        }
        setSubmitButtonState();





    });
}



function setNumericLang(lang) {
    // input max min setCustomValidity message idiom
    let elems = document.querySelectorAll('input', 'html');
    for (let i = 0; i < elems.length; i++) {
        elems[i].setAttribute('lang', lang.toLowerCase());
    }
}

// Not in use
function InvalidMsg(textbox) {
    if (textbox.value == '') {
        if (idiom === "ES") { }
        if (idiom === "EN") { }
        if (idiom === "FR") { }
        textbox.setCustomValidity('Lütfen işaretli yerleri doldurunuz');
    }
    else if (textbox.validity.typeMismatch) {
        textbox.setCustomValidity('Lütfen işaretli yere geçerli bir email adresi yazınız.');
    }
    else {
        textbox.setCustomValidity('');
    }
    return true;
}


function initForm() {
    setNumericLang(idiom);
    setNumericField();
    initPathologies();
    initRadioButtons('gender');
    initRadioButtons('diabetes');
    initRadioButtons('insulin');
    initRadioButtons('hemoglobin');
    initRadioButtons('cholesterol');
    initBirthday();
    initNumericField("years_diabetes");
    initNumericField("weight");
    initNumericField("height");
    initNumericField("cigarettes");
    initNumericField("cigars");
    initNumericField("pipes");
    initNumericField("wines");
    initNumericField("beers");
    initNumericField("spirits");
    initNumericField("systolic");
    initNumericField("diastolic");
}


function initSubmit() {

    // submit
    formForm.onsubmit = (e) => {
        e.preventDefault();
        checkNodeFields(pathologyFields);
        checkNodeFields(formForm.elements['gender']);
        checkNodeFields(formForm.elements['diabetes']);
        checkNodeFields(formForm.elements['insulin']);
        checkNodeFields(formForm.elements['hemoglobin']);
        checkNodeFields(formForm.elements['cholesterol']);
        checkNodeFields(numericFields);
        checkNodeFields(dateFields);


        if (fieldsOn()) {

            // results
            $result.diabetesByYears = calcDiabetesByYears(_diabetes, Number(_yearsDiabetes));
            $result.diabetesByAge = calcDiabetesByAge(_diabetes, Number(_age));
            $result.imc = calcImc(_imc, Number(_age));
            $result.tobacco = calcTobacco(Number(_cigarettes), Number(_cigars), Number(_pipes));
            $result.alcohol = calcAlcohol(Number(_wines), Number(_beers), Number(_spirits));
            $result.hypertension = calcHypertension(Number(_systolic), Number(_diastolic));
            $result.insulin = calcInsulin(parseInt(_insulin));
            $result.hemoglobin = calcHemoglobin(_hemoglobin);
            $result.cholesterol = calcCholesterol(_cholesterol);

            _vars = getVars();

            // OPEN results

            openModalResults(e, _vars, $result);

            // we are here: THE CALCULATIONS

            let ok;
        } else {
            openModalWindow(e, fieldsOffModalSetup)
            return false;
        }
    }
}

function initReset() {

    // submit
    formForm.onreset = (e) => {
        resetNodeFields(pathologyFields);
        resetNodeFields(formForm.elements['gender']);
        resetNodeFields(formForm.elements['diabetes']);
        resetNodeFields(formForm.elements['insulin']);
        resetNodeFields(formForm.elements['hemoglobin']);
        resetNodeFields(formForm.elements['cholesterol']);
        resetNodeFields(numericFields);
        resetNodeFields(dateFields);
    }
}
function disableEnter() {

    diabetes_cal.addEventListener('keydown', (e) => {
        if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13 || e.code == 'Enter' || e.which == 13) {
            if (e.target.nodeName == 'INPUT') {
                e.preventDefault();
                let form = e.target.form;
                let index = Array.prototype.indexOf.call(form, e.target);
                if (index < 37) {
                    form.elements[index + 1].focus();
                }
                return false;
            }
        }
    },
        true);
}



let init = () => {


    initForm();
    initModalWindow();
    initModalResults();
    initSubmit();
    initReset();
    disableEnter();
    setFormDictionary();

};

document.addEventListener("DOMContentLoaded", init, false);

// https://stackoverflow.com/questions/5272433/html5-form-required-attribute-set-custom-validation-message
// http://jsfiddle.net/hleinone/njSbH/
document.addEventListener("DOMContentLoaded", function () {
    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function (e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                if (idiom === "EN") {
                    e.target.setCustomValidity("This field is out of the allowed range");
                }
                if (idiom === "ES") {
                    e.target.setCustomValidity("Este campo esta fuera del rango permitido");
                }
                if (idiom === "FR") {
                    e.target.setCustomValidity("Ce champ est en dehors de la plage autorisée");
                }


            }
        };
        elements[i].oninput = function (e) {
            e.target.setCustomValidity("");
        };
    }
})