/**
 * Created by Дарья on 06.05.2018.
 */
function Calculator() {

    var methods = {
        "-": function(a, b) {
            return a - b;
        },
        "+": function(a, b) {
            return a + b;
        }
    };

    this.calculate = function(str) {

        var split = str.split(' '), // сплит функция разбивает строку на элементы по разделителю. зд.разделитель пробел
            a = +split[0], // рез-т вносится в массив
            op = split[1],
            b = +split[2]

        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return methods[op](a, b);
    }

    this.addMethod = function(name, func) {  //дбавит новые методы
        methods[name] = func; //name это знак математической операции, а func это что делать при вызове метода
    };
}

var calc = new Calculator;

calc.addMethod("*", function(a, b) {
    return a * b;
});
calc.addMethod("/", function(a, b) {
    return a / b;
});
calc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});

var result = calc.calculate("9 / 4");
alert( result );
