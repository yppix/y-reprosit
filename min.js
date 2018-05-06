/**
 * Created by Дарья on 06.05.2018.
 */
var a = +prompt('a?','');
var b = +prompt('b?','');

function min(a,b){
    if (a>b) {

        return b;
    }
    else if (b>a){

        return a;
    }
    else {
        return('=');
    }

}

alert(min(a,b));