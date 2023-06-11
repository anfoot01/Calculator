let number1: string[] = [];
let number2: string[] = [];
type SignType = undefined | "+" | "-" | "x" | "/";
let sign: SignType = undefined;
var element = document.getElementById("btnEqual");
element && element.addEventListener("click", equal);
function equal (){
  let resultnumber1 = number1.join("") * 1;
  let resultnumber2 = number2.join("") * 1;
  if(sign == '+'){
    result = resultnumber1 + resultnumber2;
    document.getElementById("zero").textContent = result;
  }
  else if  (sign == '-'){
    result = resultnumber1 - resultnumber2;
    document.getElementById("zero").textContent = result;
  }
  else if  (sign == 'x'){
    result = sign * resultnumber2;
    document.getElementById("zero").textContent = result;
  }
  else if  (sign == '/'){
    result = resultnumber1 / resultnumber2;
    document.getElementById("zero").textContent = result;
    number1 = result;
    number2 = [];
  }
}
var element = document.getElementById("btnPlus");
element && element.addEventListener("click", ()=>ChooseSign('+'));
var element = document.getElementById("btnMinus");
element && element.addEventListener("click", ()=>ChooseSign('-'));
var element = document.getElementById("btnMultiplication");
element && element.addEventListener("click", ()=>ChooseSign('x'));
var element = document.getElementById("btnDivision");
element && element.addEventListener("click", ()=>ChooseSign('/'));
var element = document.getElementById("btnPlusMinus");
element && element.addEventListener("click",  countPlusMinus );
function countPlusMinus() {
  if (number1[0] == "-") {
    number1.shift();
    document.getElementById("zero").textContent = number1.join("");
    console.log(number1 + "num");
  } else {
    document.getElementById("zero").textContent = "-" + number1.join("");
    number1.unshift("-");
    console.log(number1 + "num");
  }
}
var element = document.getElementById("btnAC");
element && element.addEventListener("click", countAC);
function countAC() {
  document.getElementById("zero").textContent = "0";
  number1 = [];
  number2 = [];
}
var element = document.getElementById("btn7");
element && element.addEventListener("click", ()=>handlePress(7));
var element = document.getElementById("btn8");
element && element.addEventListener("click", ()=>handlePress(8));
var element = document.getElementById("btn9");
element && element.addEventListener("click", ()=>handlePress(9));
var element = document.getElementById("btn4");
element && element.addEventListener("click", ()=>handlePress(4));
var element = document.getElementById("btn5");
element && element.addEventListener("click", ()=>handlePress(5));
var element = document.getElementById("btn6");
element && element.addEventListener("click", ()=>handlePress(6));
var element = document.getElementById("btn1");
element && element.addEventListener("click", ()=>handlePress(1));
var element = document.getElementById("btn2");
element && element.addEventListener("click", ()=>handlePress(2));
var element = document.getElementById("btn3");
element && element.addEventListener("click", ()=>handlePress(3));
var el = document.getElementById("btn0");
element && element.addEventListener("click", ()=>handlePress(0));
function handlePress(pressedNumber: string) {
  if (sign === undefined) {
    number1.push(pressedNumber);
  document.getElementById("zero").textContent = number1.join("");
  }
  else{
    number2.push(pressedNumber);
  document.getElementById("zero").textContent = number2.join("");
  }
}
function ChooseSign(pressedSign: string) {
  sign = pressedSign;
}