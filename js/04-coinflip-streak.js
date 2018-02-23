/*eslint-env browser*/
var coinFlip;
do {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        window.console.log("heads");
    } else {
        window.console.log("tails");
    }
} while (coinFlip === 0);