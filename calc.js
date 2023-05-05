var number1 = [];
var number2 = [];
var userSign = undefined;
var el = document.getElementById("btnWillBe");
el && el.addEventListener("click", WillBe);
function WillBe() {
    var resultnumber1 = number1.join("") * 1;
    var resultnumber2 = number2.join("") * 1;
    if (userSign == '+') {
        result = resultnumber1 + resultnumber2;
        document.getElementById("zero").textContent = result;
    }
    else if (userSign == '-') {
        result = resultnumber1 - resultnumber2;
        document.getElementById("zero").textContent = result;
    }
    else if (userSign == 'x') {
        result = resultnumber1 * resultnumber2;
        document.getElementById("zero").textContent = result;
    }
    else if (userSign == '/') {
        result = resultnumber1 / resultnumber2;
        document.getElementById("zero").textContent = result;
        number1 = result;
        number2 = [];
    }
}
var el = document.getElementById("btnPlus");
el && el.addEventListener("click", function () { return ChooseSign('+'); });
var el = document.getElementById("btnMinus");
el && el.addEventListener("click", function () { return ChooseSign('-'); });
var el = document.getElementById("btnmultiplication");
el && el.addEventListener("click", function () { return ChooseSign('x'); });
var el = document.getElementById("btnDivision");
el && el.addEventListener("click", function () { return ChooseSign('/'); });
var el = document.getElementById("btnPlusMinus");
el && el.addEventListener("click", countPlusMinus);
function countPlusMinus() {
    if (number1[0] == "-") {
        number1.shift();
        document.getElementById("zero").textContent = number1.join("");
        console.log(number1 + "num");
    }
    else {
        document.getElementById("zero").textContent = "-" + number1.join("");
        number1.unshift("-");
        console.log(number1 + "num");
    }
}
var el = document.getElementById("btnAC");
el && el.addEventListener("click", countAC);
function countAC() {
    document.getElementById("zero").textContent = "0";
    number1 = [];
    number2 = [];
}
var el = document.getElementById("btn7");
el && el.addEventListener("click", function () { return handlePress(7); });
var el = document.getElementById("btn8");
el && el.addEventListener("click", function () { return handlePress(8); });
var el = document.getElementById("btn9");
el && el.addEventListener("click", function () { return handlePress(9); });
var el = document.getElementById("btn4");
el && el.addEventListener("click", function () { return handlePress(4); });
var el = document.getElementById("btn5");
el && el.addEventListener("click", function () { return handlePress(5); });
var el = document.getElementById("btn6");
el && el.addEventListener("click", function () { return handlePress(6); });
var el = document.getElementById("btn1");
el && el.addEventListener("click", function () { return handlePress(1); });
var el = document.getElementById("btn2");
el && el.addEventListener("click", function () { return handlePress(2); });
var el = document.getElementById("btn3");
el && el.addEventListener("click", function () { return handlePress(3); });
var el = document.getElementById("btn0");
el && el.addEventListener("click", function () { return handlePress(0); });
function handlePress(pressedNumber) {
    if (userSign === undefined) {
        number1.push(pressedNumber);
        document.getElementById("zero").textContent = number1.join("");
    }
    else {
        number2.push(pressedNumber);
        document.getElementById("zero").textContent = number2.join("");
    }
}
function ChooseSign(pressedSign) {
    userSign = pressedSign;
}
