/**
 * Created by Дарья on 13.05.2018.
 */
var n = +prompt('Insert num','');

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

alert( factorial(n) );