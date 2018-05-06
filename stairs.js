/**
 * Created by Дарья on 06.05.2018.
 */
var ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this;
    },
    down: function() {
        this.step--;
        return this;
    },
    showStep: function() {
        alert( this.step );
        return this; //если после showstep будет желание использовать еще раз методы up down
    }
};
alert(ladder.up().up().down().up().down().showStep());
