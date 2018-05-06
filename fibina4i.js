/**
 * Created by Дарья on 06.05.2018.
 */
var n = +prompt('n?','');
function fib(n) {
    var a=1;
    var b = 1;

    /*Поскольку первые числа уж записаны в переменны начинаем с 3*/
    for (var i =3; i<=n; i++){
        var c = a + b;
        /*Далее каждому новому знаечнию присваивается предыдущее*/
        a = b;
        b=c;
    }
    return c;
}
alert (fib(n));