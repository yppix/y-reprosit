/**
 * Created by Дарья on 06.05.2018.
 */
var n = +prompt('n?','');

/*function sumTo(n){
    if (n !=1) {
        return  n = n  + sumTo(n-1);

    }
    else {
        return n;
    }

}

function sumTo(n) {
    var result = 0;
    for (var i =1; i<=n; i++){
        result += i; /* result= n+i*/
    /*}
    return result;
}*/
function sumTo(n) {
    return n * (n + 1) / 2;
}


alert (sumTo(n));