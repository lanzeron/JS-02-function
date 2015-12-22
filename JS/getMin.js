"use strict";
(function() {
    function getMin() {
        var i;
        var min = arguments[0];
        for (i = 0; i < arguments.length; i++) {
            if (arguments[i] < min) {
                min = arguments[i];
            }
        }
        return min;
    }
    console.log(getMin(2, 5, 4, 10));
})();