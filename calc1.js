/**
 * Created by Дарья on 06.05.2018.
 */
var calculator = {
    //метод
    read: function() {
        this.a = +prompt('a?', 0); //Значение this является контекстом вызова и будет определено в момент вызова функции.
        this.b = +prompt('b?', 0); //то есть значение This определяется в момент выполнения функ-ции
    },
    sum: function() {
        return this.a + this.b;
    },
    mul: function() {
        return this.a * this.b;
    }
}
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
