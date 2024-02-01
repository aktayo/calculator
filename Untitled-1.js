let display = document.getElementById("disPOff");
let display2 = document.getElementById("disp2Off");
let off = document.getElementById("on");
let dispScreen = document.getElementById("screen");
// off.style.backgroundColor='red';
//     off.innerText='ON';
//     dispScreen.innerHTML='<input type="text" id="dispOff" class="info" placeholder=" "><br><input type="text" id="disp2Off" class="info" placeholder=" ">';
let state ='off';



function onOff(){
    // off.style.backgroundColor='red';
    // off.innerText='OFF';
    dispScreen.innerHTML='<input type="text" id="dispOff" class="info" placeholder=" "><br><input type="text" id="disp2Off" class="info" placeholder=" ">';
    let display = document.getElementById("disp");
let display2 = document.getElementById("disp2");
clear();
state='off';
  // }else {
    // off.style.backgroundColor='brown';
    // off.innerText='ON';
// let displayOn = dispScreen.innerHTML='<input type="text" id="disp" class="info" placeholder="0"><br><input type="text" id="disp2" class="info" placeholder=" ">';
// let display = document.getElementById("disp");
// let display2 = document.getElementById("disp2");
// state='on';

//   }

}

off.addEventListener('click',onOff)









let buttons = document.querySelectorAll(".bttn");
let ans = document.querySelector(".equal");
let clr = document.querySelector(".clear");







let signs = ["+", "-", "/", "x"];
let num1 = "";
let num2 = "";
let operator = "";
let result = "";
let scrn = i = op = scrn1 = symbol = "";
const flag = Boolean(false);
function calculate() {
  digit1 = parseInt(num1);
  digit2 = parseInt(num2);
  switch (operator) {
    case "+":
      result = digit1 + digit2;
      break;
    case "-":
      result = digit1 - digit2;
      break;
    case "x":
      result = digit1 * digit2;
      break;
    case "/":
      result = digit1 / digit2;
      break;
  }
  display2.value = result;
  num1 = result;
}

buttons.forEach(function (buttn) {
  buttn.addEventListener("click", function (e) {
    if(state='on'){
    let value = e.target.dataset.val;

    for (let i of signs) {
      if (value == i && num1 != "") {
        display.value += value;
        symbol = i;

        op = "done";
        break;
      }
    }

    if (op == "done" && num1 != "") {
      operator = symbol;
      op = "";
    } else if (operator == "") {
      display.value += value;
      num1 = display.value;
    } else if (operator != "") {
      num2 += value;
      display.value += num2;
    }
    if (operator != "" && num1 != "" && num2 != "") {
      calculate();
      num2 = "";
    }
  }});
});
function clear() {
  display.value = "";
  display2.value = "";
  operator = "";
  result = "";
  num1=num2='';
}
function cal() {
  if (num2 == "") {
    display.value = result;
    display2.value = "";
  } else {
    calculate();
    display.value = result;
    display2.value = "";
  }
}
clr.addEventListener("click", clear);
ans.addEventListener("click", cal);
