"use strict";
(function() {
    function isBiger(a, b) {
        var result = a > b;
        return (result);
    }

    function isSmaller(a, b) {
        var result = !isBiger(a, b);
        return (result);
    }
    console.log(isSmaller(5, 3));
}());