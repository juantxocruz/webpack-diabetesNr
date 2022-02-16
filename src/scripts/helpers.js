
let version = "1.0.0";

export function toDateString(date, lang, dateOptions) {

  let l = lang === 'ES' ? "es-ES" : "en";


  return lang === 'ES' ? date.toLocaleDateString(l, dateOptions) : date.toDateString(l, dateOptions);
}
export function addEventListenerList(nodelist, event, fn) {
  let e = event || window.event;
  for (var i = 0, len = nodelist.length; i < len; i++) {
    nodelist[i].addEventListener(e, fn, false);
  }
}

export function dateIsHigher(dob) {
  if (Date.now() - dob.getTime() < 0) {
    return true;
  }
  return false;
}

export function subtractYearsToDate(date, years) {
  date.setFullYear(date.getFullYear() - years);
  return date;
}

export function dateIsOnRange(range, check) {
  var dateMin = subtractYearsToDate(new Date(), range[0]);
  var dateMax = subtractYearsToDate(new Date(), range[1]);

  if (check > dateMax && check < dateMin) {
    return true;
  }
  return false;
}
export function calculate_age(dob) {
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);
  var age_dt_full = age_dt.getUTCFullYear();

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

export function isNumberKey(evt) {
  let e = evt || window.event;
  let y = e.currentTarget.value;
  var charCode = (e.charCode) ? e.charCode : ((e.keyCode) ? e.keyCode :
    ((e.which) ? e.which : 0));
  // allow decimals
  if (charCode > 31 && ((charCode != 46 || charCode != 44) && (charCode < 48 || charCode > 57))) {
    e.preventDefault();
    return false;
  }
  return true;
}

export function limitChars(evt) {
  let e = evt || window.event;
  let y = e.currentTarget.value;
  var max_chars = 2;

  if (y.length > max_chars) {
    e.currentTarget.value = y.substr(0, max_chars);
  }
  return false;
}


export function cmToMeter(cm) {
  return Number(cm) / 100;
}