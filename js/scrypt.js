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
            inputText.value += key.textContent[0].toUpperCase();
            allKeyboardKeys.classList.remove("_shift");
            ifShift();
        } else {
            inputText.value += key.textContent[0];
            allKeyboardKeys.classList.remove("_shift");
            ifShift()
        }
    }
}));
/*--------SHIFT LOGIC---------*/
function ifShift() {
    if (allKeyboardKeys.classList.contains("_shift")) {
        one.innerHTML = `!<p class="onshift">1</p>`;
        two.innerHTML = `@<p class="onshift">2</p>`;
        three.innerHTML = `#<p class="onshift">3</p>`;
        four.innerHTML = `$<p class="onshift">4</p>`;
        five.innerHTML = `%<p class="onshift">5</p>`;
        six.innerHTML = `:<p class="onshift">6</p>`;
        seven.innerHTML = `?<p class="onshift">7</p>`;
        eigth.innerHTML = `*<p class="onshift">8</p>`;
        nine.innerHTML = `(<p class="onshift">9</p>`;
        zero.innerHTML = `)<p class="onshift">0</p>`;
        dash.innerHTML = `_<p class="onshift">-</p>`;
        plus.innerHTML = `=<p class="onshift">+</p>`;
        slashOne.innerHTML = `/<p class="onshift">\\</p>`;
        slashTwo.innerHTML = `,<p class="onshift">.</p>`;
    } else {
        one.innerHTML = `1<p class="onshift">!</p>`;
        two.innerHTML = `2<p class="onshift">@</p>`;
        three.innerHTML = `3<p class="onshift">#</p>`;
        four.innerHTML = `4<p class="onshift">$</p>`;
        five.innerHTML = `5<p class="onshift">%</p>`;
        six.innerHTML = `6<p class="onshift">:</p>`;
        seven.innerHTML = `7<p class="onshift">?</p>`;
        eigth.innerHTML = `8<p class="onshift">*</p>`;
        nine.innerHTML = `9<p class="onshift">(</p>`;
        zero.innerHTML = `0<p class="onshift">)</p>`;
        dash.innerHTML = `-<p class="onshift">_</p>`;
        plus.innerHTML = `+<p class="onshift">=</p>`;
        slashOne.innerHTML = `\\<p class="onshift">/</p>`;
        slashTwo.innerHTML = `.<p class="onshift">,</p>`;
    }
}
/*--------INPUT AREA LOGIC---------*/
inputText.addEventListener("mousedown", function (e) {
    e.preventDefault();
});
inputText.addEventListener("keydown", function (e) {
    e.preventDefault();
})