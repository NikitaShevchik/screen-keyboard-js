"use strict"
/*--------DOM---------*/
const keyboardKeys = document.querySelectorAll(".keyboard__key");
const allKeyboardKeys = document.querySelector(".keyboard__keys");
const inputText = document.querySelector(".input__text");
const capsLock = document.getElementById("CAPS");
/*--------DOM FOR SHIFT BUTTON---------*/
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eigth = document.getElementById("eigth");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const dash = document.getElementById("def");
const plus = document.getElementById("plus");
const slashOne = document.getElementById("slash_1");
const slashTwo = document.getElementById("slash_2");
/*--------KEYBOARD LOGIC---------*/
keyboardKeys.forEach(key => key.addEventListener('click', function (e) {
    if (key.id === "BS") {
        inputText.focus();
        var textvalue = inputText.value;
        inputText.value = textvalue.slice(0, textvalue.length - 1); // textvalue.substring(0, textvalue.length - 1)
        allKeyboardKeys.classList.remove("_shift");
        ifShift();
    } else if (key.id == "SPACE") {
        inputText.focus();
        inputText.value += " ";
    } else if (key.id === "CAPS") {
        allKeyboardKeys.classList.toggle("_caps");
        allKeyboardKeys.classList.remove("_shift");
        ifShift();
    } else if (key.id === "TAB" || key.id === "ALT-L" || key.id === "ALT-R" || key.id === "CTRL-R" ||
        key.id === "CTRL-L" || key.id === "WIN" || key.id === "FN" || key.id === "CMD" || key.id === "ENTER") {
        e.preventDefault();
    } else if (key.id === "SHIFT-L" || key.id === "SHIFT-R") {
        inputText.focus();
        allKeyboardKeys.classList.toggle("_shift");
        ifShift();
    } else {
        inputText.focus();
        if (allKeyboardKeys.classList.contains("_caps") || allKeyboardKeys.classList.contains("_shift")) {
            inputText.value += key.innerHTML.toUpperCase();
            allKeyboardKeys.classList.remove("_shift");
            ifShift()
        } else {
            inputText.value += key.innerHTML;
            allKeyboardKeys.classList.remove("_shift");
            ifShift()
        }
    };
}));
function ifShift() {
    if (allKeyboardKeys.classList.contains("_shift")) {
        one.innerHTML = "!";
        two.innerHTML = "@";
        three.innerHTML = "#";
        four.innerHTML = "$";
        five.innerHTML = "%";
        six.innerHTML = ":";
        seven.innerHTML = "?";
        eigth.innerHTML = "*";
        nine.innerHTML = "(";
        zero.innerHTML = ")";
        dash.innerHTML = "_";
        plus.innerHTML = "=";
        slashOne.innerHTML = "/";
        slashTwo.innerHTML = ",";
    } else {
        one.innerHTML = "1";
        two.innerHTML = "2";
        three.innerHTML = "3";
        four.innerHTML = "4";
        five.innerHTML = "5";
        six.innerHTML = "6";
        seven.innerHTML = "7";
        eigth.innerHTML = "8";
        nine.innerHTML = "9";
        zero.innerHTML = "0";
        dash.innerHTML = "-";
        plus.innerHTML = "+";
        slashOne.innerHTML = "\\";
        slashTwo.innerHTML = ".";
    }
}
/*--------INPUT AREA LOGIC---------*/
inputText.addEventListener("mousedown", function (e) {
    e.preventDefault();
});
inputText.addEventListener("keydown", function (e) {
    e.preventDefault();
})