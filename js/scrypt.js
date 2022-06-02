"use strict"
/*--------DOM---------*/
const keyboardKeys = document.querySelectorAll(".keyboard__key");
const allKeyboardKeys = document.querySelector(".keyboard__keys");
const inputText = document.querySelector(".input__text");
const capsLock = document.getElementById("CAPS");
/*--------KEYBOARD LOGIC---------*/
keyboardKeys.forEach(key => key.addEventListener('click', function (e) {
    if (key.id === "BS") {
        inputText.focus();
        var textvalue = inputText.value;
        inputText.value = textvalue.slice(0, textvalue.length - 1); // textvalue.substring(0, textvalue.length - 1)
    } else if (key.id == "SPACE") {
        inputText.focus();
        inputText.value += " ";
    } else if (key.id === "CAPS") {
        allKeyboardKeys.classList.toggle("_caps")
    } else if (key.id === "TAB" || key.id === "ALT-L" || key.id === "ALT-R" || key.id === "CTRL-R" ||
        key.id === "CTRL-L" || key.id === "WIN" || key.id === "FN" || key.id === "CMD" || key.id === "ENTER") {
        e.preventDefault();
    } else if (key.id === "SHIFT-L" || key.id === "SHIFT-R") {
        allKeyboardKeys.classList.toggle("_shift");

    } else {
        inputText.focus();
        if (allKeyboardKeys.classList.contains("_caps")) {
            inputText.value += key.innerHTML.toUpperCase();
        } else {
            inputText.value += key.innerHTML;
        }
    };
}))
/*--------INPUT AREA LOGIC---------*/
inputText.addEventListener("mousedown", function (e) {
    e.preventDefault();
});
inputText.addEventListener("keydown", function (e) {
    e.preventDefault();
})