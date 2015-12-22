"use strict";
(function() {
    var i;

    function isPrime(a) {
        for (i = 2; i <= (a - 1); i++) {
            if (a % i === 0) {
                return false;
            }
        }
        return true;
    }
    console.log(isPrime(8));
})();