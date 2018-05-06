/**
 * Created by Дарья on 06.05.2018.
 */
var x = +prompt('num','');
var n = +prompt('st','');
function pow(x,n){
    if (n !=1) {
        return  x = x * pow(x, n - 1);

    }
    else {
        return x;
    }

}
alert(pow(x,n));