"use strict";
$(".trigo-title").click(function () {
  $(".trigo-functions").toggle();
  if ($(".down1").hasClass("fa-angle-down")) {
    $(".down1").removeClass("fa-angle-down").addClass("fa-angle-up");
  } else {
    $(".down1").addClass("fa-angle-down").removeClass("fa-angle-up");
  }
});
$(".function-title").click(function () {
  $(".functions").toggle();
  if ($(".down").hasClass("fa-angle-down")) {
    $(".down").removeClass("fa-angle-down").addClass("fa-angle-up");
  } else {
    $(".down").addClass("fa-angle-down").removeClass("fa-angle-up");
  }
});
let display = document.getElementById("output");
let buttons = document.getElementsByClassName("btn");
Array.prototype.forEach.call(buttons, function (button) {
  button.addEventListener("click", function () {
    if (
      button.innerHTML != "=" &&
      button.innerHTML != "C" &&
      button.innerHTML != "x" &&
      button.innerHTML != "÷" &&
      button.innerHTML != "1/x" &&
      button.innerHTML !=
        '<i class="fa fa-square-root-alt" aria-hidden="true"></i>' &&
      button.innerHTML != "x<sup>2</sup>" &&
      button.innerHTML != "2<sup>nd</sup>" &&
      button.innerHTML != "10<sup>x</sup>" &&
      button.innerHTML != "%" &&
      button.innerHTML != "|x|" &&
      button.innerHTML != "e" &&
      button.innerHTML != "mod" &&
      button.innerHTML !=
        '<i class="fa fa-backspace" aria-hidden="true"></i>' &&
      button.innerHTML != "+/-" &&
      button.innerHTML != "sin" &&
      button.innerHTML != "cos" &&
      button.innerHTML != "tan" &&
      button.innerHTML != "Floor" &&
      button.innerHTML != "Ceil" &&
      button.innerHTML != "Random" &&
      button.innerHTML != "log" &&
      button.innerHTML != "ln" &&
      button.innerHTML != "x<sup>y</sup>" &&
      button.innerHTML != "n!" &&
      button.innerHTML != "π" &&
      button.innerHTML != "exp"
    ) {
      display.value += button.innerHTML;
    } else if (button.innerHTML === "=") {
      equals();
    } else if (button.innerHTML === "C") {
      clear();
    } else if (button.innerHTML === "2<sup>nd</sup>") {
      power();
    } else if (button.innerHTML === "10<sup>x</sup>") {
      power10();
    } else if (button.innerHTML === "x") {
      multiply();
    } else if (button.innerHTML === "|x|") {
      absolute();
    } else if (button.innerHTML === "÷") {
      divide();
    } else if (button.innerHTML === "Floor") {
      floor();
    } else if (button.innerHTML === "Ceil") {
      ceil();
    } else if (button.innerHTML === "Random") {
      random();
    } else if (button.innerHTML === "+/-") {
      plusMinus();
    } else if (button.innerHTML === "1/x") {
      upon();
    } else if (
      button.innerHTML === '<i class="fa fa-backspace" aria-hidden="true"></i>'
    ) {
      backspace();
    } else if (button.innerHTML === "%") {
      percent();
    } else if (button.innerHTML === "π") {
      pi();
    } else if (button.innerHTML === "x<sup>2</sup>") {
      square();
    } else if (
      button.innerHTML ===
      '<i class="fa fa-square-root-alt" aria-hidden="true"></i>'
    ) {
      squareRoot();
    } else if (button.innerHTML === "e") {
      eulersNum();
    } else if (button.innerHTML === "mod") {
      mod();
    } else if (button.innerHTML === "sin") {
      sin();
    } else if (button.innerHTML === "cos") {
      cos();
    } else if (button.innerHTML === "tan") {
      tan();
    } else if (button.innerHTML === "log") {
      log();
    } else if (button.innerHTML === "ln") {
      ln();
    } else if (button.innerHTML === "x<sup>y</sup>") {
      exponent();
    } else if (button.innerHTML === "n!") {
      factorial();
    } else if (button.innerHTML === "exp") {
      exp();
    }
  });
});

function checkLength() {
  if (display.value.length >= 23) {
    display.value = "Overload Error";
  }
}
function syntaxError() {
  if (eval(display.value) == SyntaxError) {
    display.value = "Syntax Error";
  }
}
function equals() {
  if (display.value.indexOf("^") > -1) {
    let base = display.value.slice(0, display.value.indexOf("^"));
    let exponent = display.value.slice(display.value.indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else if (display.value === "" || display.value === undefined) {
    clear();
  } else {
    display.value = eval(display.value);
    checkLength();
    syntaxError();
  }
}
function clear() {
  display.value = "";
}
function backspace() {
  display.value = display.value.substring(0, display.value.length - 1);
}
function multiply() {
  display.value = display.value + "*";
}
function divide() {
  display.value = display.value + "/";
}
function plusMinus() {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}
function factorial() {
  let result = 1;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    let result = 1;
    for (let i = display.value; i > 0; i--) {
      result = result * i;
    }
    display.value = result;
  }
}
function pi() {
  if (display.value === "") {
    display.value = Math.PI;
  } else {
    display.value = display.value * Math.PI;
  }
}
function square() {
  display.value = display.value * display.value;
}
function squareRoot() {
  display.value = Math.sqrt(display.value);
}
function percent() {
  display.value = display.value / 100;
}
function sin() {
  display.value = Math.sin(display.value);
}
function cos() {
  display.value = Math.cos(display.value);
}
function tan() {
  display.value = Math.tan(display.value);
}
function log() {
  display.value = Math.log10(display.value);
}
function ln() {
  display.value = Math.log(display.value);
}
function exponent() {
  display.value = display.value + "^";
}
function exp() {
  display.value = Math.exp(display.value);
}
function degtorad() {
  if ($(".degrees").text() == "DEG") {
    display.value = display.value * (180 / Math.PI);
    $(".degrees").text("RAD");
  } else {
    display.value = display.value * (Math.PI / 180);
    $(".degrees").text("DEG");
  }
}
function power() {
  display.value = Math.pow(2, display.value);
}
function power10() {
  display.value = Math.pow(10, display.value);
}
function eulersNum() {
  if (display.value) {
    display.value = Math.E * display.value;
  } else {
    display.value = Math.E;
  }
}
function upon() {
  if (display.value == 0 && display.value == "") {
    display.value = "Error";
  } else {
    display.value = 1 / display.value;
  }
}
function absolute() {
  display.value = Math.abs(display.value);
}
function mod() {
  display.value = display.value + "%";
}
function ceil() {
  display.value = Math.ceil(display.value);
}
function floor() {
  display.value = Math.floor(display.value);
}
function random() {
  display.value = Math.random();
}
function exponential() {
  let num = parseFloat(display.value);
  display.value = num.toExponential();
}
let memory = [];
function mplus() {
  if (display.value != "") {
    $(".memoryplus").css("display", "block");
    $(".memoryminus").css("display", "none");
    $(".memory").css("display", "none");
    memory.push(parseInt(display.value));
    display.value = memory.reduce((a, b) => a + b, 0);
  }
}
function mminus() {
  if (display.value != "") {
    $(".memoryminus").css("display", "block");
    $(".memoryplus").css("display", "none");
    $(".memory").css("display", "none");
    memory.push(parseInt(-display.value));
    display.value = memory.reduce((a, b) => a + b, 0);
  }
}
function mrecall() {
  if (memory.length > 0) {
    $(".memory").css("display", "block");
    $(".memoryminus").css("display", "none");
    $(".memoryplus").css("display", "none");
    if (memory.length > 1) {
      display.value = memory[memory.length - 1];
    } else {
      display.value = memory[0];
    }
  }
}
function mclear() {
  memory = [];
  $(".memory").css("display", "none");
  $(".memoryminus").css("display", "none");
  $(".memoryplus").css("display", "none");
  display.value = "";
}
function msave() {
  if (display.value != "") {
    $(".memoryplus").css("display", "none");
    $(".memoryminus").css("display", "none");
    $(".memory").css("display", "block");
    memory.push(parseInt(display.value));
  }
}
