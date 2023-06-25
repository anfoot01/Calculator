var firstnumber;
var secondnumber = [];
var userSign = undefined;
var elEqual = document.getElementById("btnEqual");
elEqual && elEqual.addEventListener("click", equal);
function equal() {
    var resultnumber1 = firstnumber.map(Number);
    var resultnumber2 = secondnumber.map(Number);
    if (userSign == '+') {
        var resultPlus = Number(resultnumber1) + Number(resultnumber2);
        var element = document.getElementById("Output");
        if (element) {
            element.textContent = String(resultPlus);
        }
    }
    else if (userSign === '-') {
        var resultMinus = Number(resultnumber1) - Number(resultnumber2);
        var element = document.getElementById("Output");
        if (element) {
            element.textContent = String(resultMinus);
        }
    }
    else if (userSign === 'x') {
        var resultMultiplication = Number(resultnumber1) * Number(resultnumber2);
        var element = document.getElementById("Output");
        if (element) {
            element.textContent = String(resultMultiplication);
        }
    }
    else if (userSign === '/') {
        var resultDivision = Number(resultnumber1) / Number(resultnumber2);
        var element = document.getElementById("Output");
        if (element) {
            element.textContent = String(resultDivision);
        }
    }
}
var elPlus = document.getElementById("btnPlus");
elPlus && elPlus.addEventListener("click", function () { return ChooseSign('+'); });
var elMinus = document.getElementById("btnMinus");
elMinus && elMinus.addEventListener("click", function () { return ChooseSign('-'); });
var elMultiplication = document.getElementById("btnMultiplication");
elMultiplication && elMultiplication.addEventListener("click", function () { return ChooseSign('x'); });
var elDivision = document.getElementById("btnDivision");
elDivision && elDivision.addEventListener("click", function () { return ChooseSign('/'); });
var elPlusMinus = document.getElementById("btnPlusMinus");
elPlusMinus && elPlusMinus.addEventListener("click", countPlusMinus);
function countPlusMinus() {
    if (firstnumber[0] === "-") {
        firstnumber.shift();
        var element = document.getElementById("Output");
        if (element) {
            element.textContent = String(firstnumber.join(""));
        }
        console.log(firstnumber + "num");
    }
    else {
        var element = document.getElementById("Output");
        if (element) {
            element.textContent = String(firstnumber.join(""));
        }
        firstnumber.unshift("-");
        console.log(firstnumber + "num");
    }
}
var elAC = document.getElementById("btnAC");
elAC && elAC.addEventListener("click", countAC);
function countAC() {
    var element = document.getElementById("Output");
    if (element) {
        element.textContent = String("0");
    }
    firstnumber = [];
    secondnumber = [];
}
var el7 = document.getElementById("btn7");
el7 && el7.addEventListener("click", function () { return handlePress(7); });
var el8 = document.getElementById("btn8");
el8 && el8.addEventListener("click", function () { return handlePress(8); });
var el9 = document.getElementById("btn9");
el9 && el9.addEventListener("click", function () { return handlePress(9); });
var el4 = document.getElementById("btn4");
el4 && el4.addEventListener("click", function () { return handlePress(4); });
var el5 = document.getElementById("btn5");
el5 && el5.addEventListener("click", function () { return handlePress(5); });
var el6 = document.getElementById("btn6");
el6 && el6.addEventListener("click", function () { return handlePress(6); });
var el1 = document.getElementById("btn1");
el1 && el1.addEventListener("click", function () { return handlePress(1); });
var el2 = document.getElementById("btn2");
el2 && el2.addEventListener("click", function () { return handlePress(2); });
var el3 = document.getElementById("btn3");
el3 && el3.addEventListener("click", function () { return handlePress(3); });
var el0 = document.getElementById("btn0");
el0 && el0.addEventListener("click", function () { return handlePress(0); });
function handlePress(pressedNumber) {
    if (userSign === undefined) {
        firstnumber.push(pressedNumber);
        var element = document.getElementById("Output");
        if (element) {
            element.textContent = String(firstnumber.join(""));
        }
    }
    else {
        secondnumber.push(pressedNumber);
        var element = document.getElementById("Output");
        if (element) {
            element.textContent = String(secondnumber.join(""));
        }
    }
}
function ChooseSign(pressedSign) {
    userSign = pressedSign;
}
