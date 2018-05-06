function sum(a) {

    var currentSum = a;

    function f(b) {
        currentSum += b; // сложение
        return f;
    }

    f.toString = function() { //строковое преобразование
        return currentSum;
    };

    return f;
}

alert( sum(3)(2) ); // 5
alert( sum(5)(-10)(1) ); // -4
alert( sum(6)(12)(-2)(-3) ); // 13
alert( sum(0)(8)(2)(-12)(3)(5) ); // 6
alert( sum(0)(8)(2)(12)(3)(5)(31) ); //61