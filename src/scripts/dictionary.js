import { idiom } from './index';
export let dictionary =
    [{ "key": "date", "ES": "fecha", "EN": "date" },
    { "key": "age", "ES": "edad", "EN": "age" },
    { "key": "gender", "ES": "género", "EN": "gender" },
    { "key": "male", "ES": "Hombre", "EN": "Male" },
    { "key": "female", "ES": "Mujer", "EN": "Female" },
    { "key": "diabetes", "ES": "diabetes", "EN": "diabetes" },
    { "key": "t1", "ES": "tipo 1", "EN": "type I" },
    { "key": "t2", "ES": "tipo 2", "EN": "type II" },
    { "key": "yearsDiabetes", "ES": "años de tratamiento de diabetes", "EN": "years of diabetes treatment" },
    { "key": "weigth", "ES": "peso", "EN": "weigth" },
    { "key": "height", "ES": "altura", "EN": "height" },
    { "key": "imc", "ES": "índice de masa muscular", "EN": "body mass index" },
    { "key": "cigarettes", "ES": "cigarrillo", "EN": "cigarettes" },
    { "key": "cigars", "ES": "puro", "EN": "cigars" },
    { "key": "pipes", "ES": "pipa", "EN": "pipes" },
    { "key": "wines", "ES": "vino", "EN": "wines" },
    { "key": "beers", "ES": "cerveza", "EN": "beers" },
    { "key": "spirits", "ES": "licor", "EN": "spirits" },
    { "key": "systolic", "ES": "sistólica", "EN": "systolic" },
    { "key": "diastolic", "ES": "diastólica", "EN": "diastolic" },
    { "key": "insulin", "ES": "insulina", "EN": "insulin" },
    { "key": "upper_insulin", "ES": "Insulina", "EN": "Insulin" },
    { "key": "hemoglobin", "ES": "hemoglobina", "EN": "hemoglobin" },
    { "key": "label_hem1", "ES": "Menos de 7,0", "EN": "Less than 7.0" },
    { "key": "label_hem2", "ES": "De 7,0 a 7,5", "EN": "7.0 to 7.5" },
    { "key": "label_hem3", "ES": "De 7,6 a 8,0", "EN": "From 7.6 to 8.0" },
    { "key": "label_hem4", "ES": "De 8,1 a 9,0", "EN": "From 8.1 to 9.0" },
    { "key": "label_hem5", "ES": "De 9,1 a 10", "EN": "From 9.1 to 10" },
    { "key": "label_hem6", "ES": "Más de 10", "EN": "More than 10" },
    { "key": "hem1", "ES": "Menos de 7,0", "EN": "Less than 7.0" },
    { "key": "hem2", "ES": "De 7,0 a 7,5", "EN": "7.0 to 7.5" },
    { "key": "hem3", "ES": "De 7,6 a 8,0", "EN": "From 7.6 to 8.0" },
    { "key": "hem4", "ES": "De 8,1 a 9,0", "EN": "From 8.1 to 9.0" },
    { "key": "hem5", "ES": "De 9,1 a 10", "EN": "From 9.1 to 10" },
    { "key": "hem6", "ES": "Más de 10", "EN": "More than 10" },
    { "key": "cholesterol", "ES": "colesterol", "EN": "cholesterol" },
    { "key": "label_cho1", "ES": "Hasta 200", "EN": "Up to 200" },
    { "key": "label_cho2", "ES": "De 200 a 250", "EN": "From 200 to 250" },
    { "key": "label_cho3", "ES": "De 251 a 275", "EN": "From 251 to 275" },
    { "key": "label_cho4", "ES": "De 276 a 300", "EN": "From 276 to 300" },
    { "key": "label_cho5", "ES": "Más de 300", "EN": "More than 300" },
    { "key": "cho1", "ES": "Hasta 200", "EN": "Up to 200" },
    { "key": "cho2", "ES": "De 200 a 250", "EN": "From 200 to 250" },
    { "key": "cho3", "ES": "De 251 a 275", "EN": "From 251 to 275" },
    { "key": "cho4", "ES": "De 276 a 300", "EN": "From 276 to 300" },
    { "key": "cho5", "ES": "Más de 300", "EN": "More than 300" },
    { "key": "results", "ES": "Resultados", "EN": "Results" },
    { "key": "exclusionary_pathology", "ES": "Patología excluyente", "EN": "Exclusionary pathology" },
    { "key": "pathologiesModalSetup_content", "ES": "Esta patología no permite asegurar ningún riesgo.", "EN": "This pathology does not allow to ensure any risk." },
    { "key": "modalSetup_footer", "ES": " © NacionalRe. Todos los derechos reservados.", "EN": " © NacionalRe. All rights reserved." },
    { "key": "retinopathy", "ES": "Retinopatía", "EN": "Retinopathy" },
    { "key": "neuropathy", "ES": "Neuropatía", "EN": "Neuropathy" },
    { "key": "coronary_heart_disease", "ES": "Enfermedad coronaria (Angina, I.A.M.)", "EN": "Coronary heart disease" },
    { "key": "kidney_disease", "ES": "Enfermedad renal asociada", "EN": "Associated kidney disease" },
    { "key": "arterial_disease", "ES": "Enfermedad arterial periférica", "EN": "Peripheral arterial disease" },
    { "key": "stroke", "ES": "Accidente cerebrovascular", "EN": "Stroke" },
    { "key": "admission_less", "ES": "Ingreso hace menos de 6 meses por una complicación", "EN": "Admission less than 6 months ago for a complication" },
    { "key": "suffered_pathologies", "ES": "¿Ha padecido alguna de las siguiente patologías?", "EN": "Have you suffered from any of the following pathologies?" },
    { "key": "gender_upper", "ES": "Género", "EN": "Gender" },
    { "key": "Diabetes", "ES": "Diabetes", "EN": "Diabetes" },
    { "key": "birth_date", "ES": "Fecha nacimiento", "EN": "Birth date" },
    { "key": "old_diabetes", "ES": "Antigüedad diabetes", "EN": "Age of diabetes" },
    { "key": "constitution", "ES": "Constitución", "EN": "Constitution" },
    { "key": "upper_tobacco", "ES": "Tabaco", "EN": "Tobacco" },
    { "key": "upper_alcohol", "ES": "Alcohol", "EN": "Alcohol" },
    { "key": "upper_blood_pressure", "ES": "Tensión arterial", "EN": "Blood pressure" },
    { "key": "insulin", "ES": "Insulina", "EN": "Insulin" },
    { "key": "upper_glycosylated", "ES": "Hemoglobina glicosilada (HbA1c)", "EN": "Glycosylated Hemoglobin (HbA1c)" },
    { "key": "upper_cholesterol", "ES": "Colesterol total", "EN": "Total cholesterol" },
    { "key": "years_diagnosis", "ES": "Años desde diagnóstico:", "EN": "Years since diagnosis:" },
    { "key": "tobacco_daily_consumption", "ES": "Consumo diario", "EN": "Daily consumption" },
    { "key": "alcohol_daily_consumption", "ES": "Consumo diario", "EN": "Daily consumption" },
    { "key": "intro_blood_pressure", "ES": "Presión arterial (mm Hg.)", "EN": "Blood pressure (mmHg)" },
    { "key": "intro_insulin", "ES": "Cantidades", "EN": "Quantities" },
    { "key": "intro_millimole", "ES": "Milimol por litro (mmol/l)", "EN": "Millimole per liter (mmol/l)" },
    { "key": "intro_milligrams", "ES": "Miligramos por decilitro (mg/dL)", "EN": "Milligrams per deciliter (mg/dL)" },
    { "key": "man", "ES": "Hombre", "EN": "Man" },
    { "key": "woman", "ES": "Mujer", "EN": "Woman" },
    { "key": "type_I", "ES": "Tipo I", "EN": "Type I" },
    { "key": "type_II", "ES": "Tipo II", "EN": "Type II" },
    { "key": "weight_kg", "ES": "Peso (kg)", "EN": "Weight (kg)" },
    { "key": "height_cm", "ES": "Altura (cm)", "EN": "Height (cm)" },
    { "key": "mass_index", "ES": "índice de masa", "EN": "Mass index" },
    { "key": "upper_cigarettes", "ES": "Cigarrilos", "EN": "Cigarettes" },
    { "key": "upper_cigars", "ES": "Puros", "EN": "Cigars" },
    { "key": "upper_pipes", "ES": "Pipas", "EN": "Pipes" },
    { "key": "upper_wines", "ES": "Vinos", "EN": "Wines" },
    { "key": "upper_beers", "ES": "Cervezas", "EN": "Beers" },
    { "key": "upper_spirits", "ES": "Licores", "EN": "Spirits" },
    { "key": "upper-systolic", "ES": "Sistólica", "EN": "Systolic" },
    { "key": "upper-diastolic", "ES": "Diastólica", "EN": "Diastolic" },
    { "key": "cbox_msg", "ES": "Estas patologías no permite asegurar ningún riesgo.", "EN": "These pathologies do not allow to ensure any risk." },
    { "key": "mandatory_text_1", "ES": "Campo obligatorio", "EN": "Mandatory field" },
    { "key": "mandatory_text_2", "ES": "Campo obligatorio", "EN": "Mandatory field" },
    { "key": "mandatory_text_3", "ES": "Campo obligatorio", "EN": "Mandatory field" },
    { "key": "mandatory_text_4", "ES": "Campo obligatorio", "EN": "Mandatory field" },
    { "key": "mandatory_text_5", "ES": "Campo obligatorio", "EN": "Mandatory field" },
    { "key": "mandatory_text_6", "ES": "Campo obligatorio", "EN": "Mandatory field" },
    { "key": "mandatory_text_7", "ES": "Campo obligatorio", "EN": "Mandatory field" },
    { "key": "mandatory_text_8", "ES": "Campo obligatorio", "EN": "Mandatory field" },
    { "key": "mandatory_text_9", "ES": "Campo obligatorio", "EN": "Mandatory field" },
    { "key": "mandatory_text_10", "ES": "Campo obligatorio", "EN": "Mandatory field" },
    { "key": "mandatory_text_11", "ES": "Campo obligatorio", "EN": "Mandatory field" },
    { "key": "mandatory_text_12", "ES": "Campo obligatorio", "EN": "Mandatory field" },
    { "key": "mandatory_text_13", "ES": "Campo obligatorio", "EN": "Mandatory field" },
    { "key": "mandatory_text_14", "ES": "Campo obligatorio", "EN": "Mandatory field" },
    { "key": "mandatory_text_15", "ES": "Campo obligatorio", "EN": "Mandatory field" },
    { "key": "mandatory_text_16", "ES": "Campo obligatorio", "EN": "Mandatory field" },
    { "key": "mandatory_text_17", "ES": "Campo obligatorio", "EN": "Mandatory field" },
    { "key": "mandatory_text_18", "ES": "Campo obligatorio", "EN": "Mandatory field" },
    { "key": "ins1_less_25", "ES": "Hasta 25 ", "EN": "Up to 25 " },
    { "key": "ins2_more_25", "ES": "Más de 25", "EN": "More than 25" },
    { "key": "ins1_units", "ES": "unidades diarias de insulina", "EN": "units of insulin daily" },
    { "key": "ins2_units", "ES": "unidades diarias de insulina", "EN": "units of insulin daily" },
    { "key": "pdf_button", "ES": "Cuestionario", "EN": "Questionnaire" },
    { "key": "reset_button", "ES": "Restaurar", "EN": "Reset" },
    { "key": "submit_button", "ES": "Tarificación", "EN": "Calculate" },
    { "key": "birthdayModalSetup_header", "ES": "Fecha incorrecta", "EN": "Incorrect date" },
    { "key": "birthdayModalSetup_content", "ES": "La fecha seleccionada no puede ser mayor que la fecha actual.", "EN": "The selected date cannot be greater than the current date." },
    { "key": "birthdayModalSetup_action", "ES": "Por favor, escoga una fecha de nuevo", "EN": "Please choose a date again" },
    { "key": "modalSetup_header", "ES": "Atención", "EN": "Attention" },
    { "key": "dateRangeModalSetup_header", "ES": "Atención: Fecha fuera de rango", "EN": "Attention: Date out of range" },
    { "key": "dateRangeModalSetup_content_1", "ES": "Por favor, escoga una fecha en el rango (entre ", "EN": "Please choose a date in the range (between" },
    { "key": "dateRangeModalSetup_content_2", "ES": "y", "EN": "and" },
    { "key": "dateRangeModalSetup_content_3", "ES": "años de edad)", "EN": "year old)" },
    { "key": "dateRangeModalSetup_action_1", "ES": "La fecha seleccionada debe estar entre el ", "EN": "The selected date must be between" },
    { "key": "dateRangeModalSetup_action_2", "ES": "y el ", "EN": "and the" },
    { "key": "fieldsOffModalSetup_content", "ES": "Por favor, rellene correctamente los campos con mensajes en rojo.", "EN": "Please fill in the fields with messages in red correctly." },
    { "key": "fieldsOffModalSetup_action", "ES": "Existen campos erróneos o sin rellenar.", "EN": "There are erroneous or unfilled fields." },
    { "key": "date_is_not_correct", "ES": "Por favor, asegúrese de que la cifra es correcta.", "EN": "Please make sure the figure is correct." },
    { "key": "heightModalSetup_1_content", "ES": "La altura introducida es muy baja. Debe introducir una altura mayor de", "EN": "The entered height is too low. You must enter a height greater than" },
    { "key": "heightModalSetup_2_content", "ES": "centímetros", "EN": "centimeters" },
    { "key": "systolicModalSetup_High_content", "ES": "La tensión sistólica es muy alta para asegurar el riesgo.", "EN": "Systolic blood pressure is too high to ensure risk." },
    { "key": "systolicModalSetup_Low_content", "ES": "La tensión sistólica es muy baja para asegurar el riesgo.", "EN": "Systolic blood pressure is too low to ensure risk." },
    { "key": "diastolicModalSetup_High_content", "ES": "La tensión diastólica es muy alta para asegurar el riesgo.", "EN": "Diastolic blood pressure is too high to insure risk." },
    { "key": "diastolicModalSetup_Low_content", "ES": "La tensión diastólica es muy baja para asegurar el riesgo.", "EN": "Diastolic blood pressure is too low to ensure risk." },
    { "key": "weightModalSetup_1_content", "ES": "El peso introducido es muy bajo. Debe introducir un peso mayor de", "EN": "The entered weight is too low. You must enter a weight greater than" },
    { "key": "weightModalSetup_2_content", "ES": "kilos", "EN": "kilos" },
    { "key": "ins1", "ES": "Hasta 25 unidades diarias de insulina", "EN": "Up to 25 units of insulin daily" },
    { "key": "ins2", "ES": "Más de 25 unidades diarias de insulina", "EN": "More than 25 units of insulin daily" },
    { "key": "tr_diabetes", "ES": "Antigüedad diabetes", "EN": "Age of diabetes" },
    { "key": "tr_age", "ES": "Edad candidato", "EN": "Candidate age" },
    { "key": "tr_bmi", "ES": "IMC", "EN": "BMI" },
    { "key": "tr_tobacco", "ES": "Tabaco", "EN": "Tobacco" },
    { "key": "tr_alcohol", "ES": "Alcohol", "EN": "Alcohol" },
    { "key": "tr_tension", "ES": "Tensión", "EN": "Tension" },
    { "key": "tr_hemoglobin", "ES": "Hemoglobina", "EN": "Hemoglobin" },
    { "key": "tr_insulin", "ES": "Insulina", "EN": "Insulin" },
    { "key": "tr_cholesterol", "ES": "Colesterol", "EN": "Cholesterol" },
    { "key": "h_death", "ES": "Fallecimiento", "EN": "Death" },
    { "key": "h_disability", "ES": "Invalidez", "EN": "Disability" },
    { "key": "h_accidents", "ES": "Accidentes", "EN": "Accidents" },
    { "key": "h_temporary_incapacity", "ES": "Incapacidad laboral temporal", "EN": "Temporary incapacity for work" },
    { "key": "r_refuse", "ES": "Rechazar", "EN": "To refuse" },
    { "key": "r_normal", "ES": "Normal", "EN": "Normal" },
    { "key": "r_no_tobacco", "ES": "No consume tabaco", "EN": "Does not use tobacco" },
    { "key": "r_cigarettes", "ES": "cigarrillos", "EN": "cigarettes" },
    { "key": "r_cigarette", "ES": "1 cigarrillo", "EN": "1 cigarette" },
    { "key": "r_cigars", "ES": "puros", "EN": "cigars" },
    { "key": "r_cigar", "ES": "1 puro", "EN": "1 cigar" },
    { "key": "r_pipes", "ES": "pipas", "EN": "pipes" },
    { "key": "r_pipes", "ES": "pipa", "EN": "pipe" },
    { "key": "r_no_alcohol", "ES": "No consume alcohol", "EN": "Does not consume alcohol" },
    { "key": "r_beers", "ES": "cervezas", "EN": "beers" },
    { "key": "r_beer", "ES": "1 cerveza", "EN": "1 beer" },
    { "key": "r_wines", "ES": "vinos", "EN": "wines" },
    { "key": "r_wines", "ES": "1 vino ", "EN": "1 wine" },
    { "key": "r_liqueurs", "ES": "licores", "EN": "liqueurs" },
    { "key": "r_liquor", "ES": "1 licor", "EN": "1 liquor" },
    { "key": "r_years", "ES": "años", "EN": "years" },
    { "key": "r_year", "ES": "año", "EN": "year" },
    { "key": "r_no_years", "ES": "Sin años de antigüedad", "EN": "No years old" },
    { "key": "r_cm", "ES": "cm", "EN": "cm" },
    { "key": "r_kg", "ES": "kg", "EN": "kg" },
    { "key": "r_bmi", "ES": "imc", "EN": "bmi" },
    { "key": "r_diabetes", "ES": "Diabetes", "EN": "Diabetes" },
    { "key": "r_systolic", "ES": "sistólica", "EN": "systolic" },
    { "key": "r_diastolic", "ES": "diastólica", "EN": "diastolic" },
    { "key": "r_hemoglobin", "ES": "hemoglobina", "EN": "hemoglobin" },
    { "key": "r_cholesterol", "ES": "colesterol", "EN": "cholesterol" },
    { "key": "p_consultation", "ES": "Consulta realizada el", "EN": "Consultation made on" },
    { "key": "p_at", "ES": "a las", "EN": "at" },
    { "key": "p_hours", "ES": "h.", "EN": "h." },
    { "key": "b_print", "ES": "Imprimir", "EN": "Print" },
    { "key": "h_results", "ES": "Resultados de los seguros para diabéticos", "EN": "Diabetic insurance results" },
    { "key": "h_attention", "ES": "Atención", "EN": "Attention" }];

export function getDictionaryWord(key) {
    let term = dictionary.filter(d => d.key === key);
    return idiom && term && term[0] && term[0][idiom] ? term[0][idiom] : "Upps sorry";
}

export function setFormDictionary() {

    dictionary.forEach((d) => {
        let term = document.getElementById(d.key);

        if (term) {
            if (term.nodeName === "INPUT" && (term.type === 'reset' || term.type === 'button' || term.type === 'submit')) {
                term.value = getDictionaryWord(d.key);
                return false;
            }
            term.innerHTML = getDictionaryWord(d.key);
            return false;
        }
    })

}