/*eslint-env browser*/

var coinFlip = Math.round(Math.random());
var choice = window.prompt("Heads or tails?");
var result;
if (coinFlip === 1 && choice === "heads") {
    result = "The flip was heads and you chose heads...you win!";
} else if (coinFlip === 1 && choice === "tails") {
    result = "The flip was heads and you chose tails...you lose!";
} else if (coinFlip === 0 && choice === "heads") {
    result = "The flip was tails and you chose heads...you lose!";
} else if (coinFlip === 0 && choice === "tails") {
    result = "The flip was tails and you chose tails...you win!";
}
window.alert(result);



