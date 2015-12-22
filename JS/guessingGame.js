"use strict";
(function() {
    function guessingGame() {
    	    var randomnumber = Math.floor(Math.random() * 100);
        do {
            var x = prompt("please try to guess number from 1 to 100", "0");
            if (x > randomnumber) {
                alert("sorry our number is lower, try again");
            } else if (x < randomnumber) {
                alert("sorry our number is higher, try again");
            }
        }
        while (x != randomnumber);
        alert("You are win!!!");
        return x;
    }

   console.log(guessingGame());
})();