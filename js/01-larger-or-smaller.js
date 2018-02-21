/*eslint-env browser*/
var x = window.prompt("Enter a number");
var y = window.prompt("Enter a second number");
if (x > y) {
    document.write("This number is larger: " + x);
} else if (x < y) {
    document.write("This number is larger: " + y);
} else {
    document.write("These are equal, please try again with different numbers!");
}
