let display = document.getElementById("disp");
let display2 = document.getElementById("disp2");
let buttons = document.querySelectorAll(".bttn");
let ans = document.querySelector(".equal");
let clr = document.querySelector(".clear");
let dispScreen = document.getElementById("screen");
let off = document.getElementById("on");
let state = "OFF";
let disp1 = (disp2 = "");
let calFlag = "no";
let signFlag = "OFF";
let changeSign = "";
let newSign = "";
let changeSign1 = "";

function onOff() {
  if (state == "ON") {
    off.innerText = "ON";
    off.style.backgroundColor = "red";
    display.style.backgroundColor = "rgba(119, 113, 108, 0.911)";
    display2.style.backgroundColor = "rgba(119, 113, 108, 0.911)";
    display.placeholder = "";
    clear();
    state = "OFF";
  } else {
    off.innerText = "OFF";
    off.style.backgroundColor = "brown";
    display.style.backgroundColor = "aliceblue";
    display2.style.backgroundColor = "aliceblue";
    display.placeholder = "0";

    state = "ON";
  }
}

off.addEventListener("click", onOff);

let signs = ["+", "-", "/", "x"];
let num1 = "";
let num2 = "";
let operator = "";
let result = "";
let i = (op = symbol = "");
let flag = "NSET";
let resFlag = "OFF";
let opFlag = "OFF";
function calculate() {
  if (signFlag == "ON") {
    num1 = disp1;
    signFlag = "OFF";
  }

  digit1 = parseFloat(num1);
  digit2 = parseFloat(num2);
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
  disp1 = result;
  result = "";
}

buttons.forEach(function (buttn) {
  buttn.addEventListener("click", function (e) {
    if (state == "ON") {
      let value = e.target.dataset.val;
      // loop through sign checked if sign is clicked
      for (let i of signs) {
        if (value == i && num1 != "") {
          if (operator != "" && num2 == "") {
            newSign = "ON";
          }
          // check if calculate has bn called, raise sign flag
          if (resFlag == "ON") {
            signFlag = "ON";
            num2 = "";
          }
          // to exit else if condition by changing flag value
          flag = "NSET";
          operator = i;
          break;
        }
      }
      if (operator == "") {
        num1 += value;
        display.value = num1;

        console.log(num1);
      } else if (operator !== "" && num1 != "" && flag == "NSET") {
        if (newSign == "ON") {
          changeSign = display.value;
          changeSign1 = changeSign.slice(0, -1);
          changeSign1 += value;
          display.value = changeSign1;
          newSign = "OFF";
        } else {
          display.value += value;
        }
        flag = "SET";
      } else {
        num2 += value;
        display.value += value;
        calculate();
        resFlag = "ON";
      }
    }
  });
});
// reset all varaibles
function clear() {
  if (state == "ON") {
    display.value = "";
    display2.value = "";
    operator = "";
    result = "";
    num1 = num2 = "";
    value = "";
    disp1 = "";
    flag = "NSET";
    resFlag = "OFF";
    opFlag = "OFF";
  }
}
// evaluate when equality is pressed
function cal() {
  if (state == "ON") {
    // check if 2nd num is assigned
    if (num2 == "") {
      display.value = disp1;
      display2.value = "";
    } else {
      calculate();
      display.value = disp1;
      display2.value = "";
    }
  }
}
clr.addEventListener("click", clear);
ans.addEventListener("click", cal);