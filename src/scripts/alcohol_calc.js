
export function calcAlcohol(wines, beers, spirits) {
    let units = +wines + (+beers) + (+spirits * 2);
    let result = 0;
    if (units <= 1) {
        result += 0;
    }
    if (units > 1 && units <= 3) {
        result += 25;
    }
    if (units > 3) {
        result += 999;
    }
    return result;
}


