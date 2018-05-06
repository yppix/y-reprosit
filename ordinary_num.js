var finish = 10;

nextPrime:
    for (var i = 2; i <= finish; i++) {

        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        alert( i ); // простое
    }