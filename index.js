'use strict';

$('.trigo-title').click(function(){
    $('.trigo-functions').toggle();
})
let display = document.getElementById("output");
let buttons = document.getElementsByClassName("btn");
Array.prototype.forEach.call(buttons, function(button) {
  button.addEventListener("click", function() {
    if (button.innerHTML != "=" && button.innerHTML != "C" && button.innerHTML != "x" && button.innerHTML != "÷" && button.innerHTML != "sqrt" && button.innerHTML != "sq" && button.innerHTML != "%" && button.innerHTML != "<=" && button.innerHTML != "+/-" && button.innerHTML != "sin" && button.innerHTML != "cos" && button.innerHTML != "tan" && button.innerHTML != "log" && button.innerHTML != "ln" && button.innerHTML != "^" && button.innerHTML != "n!" && button.innerHTML != "π" && button.innerHTML != "exp" && button.innerHTML != "radians" && button.innerHTML != "degrees") {
      display.value += button.innerHTML;
    } else if (button.innerHTML === "=") {
      equals();
    } else if (button.innerHTML === "C") {
      clear();
    } else if (button.innerHTML === "x") {
      multiply();
    } else if (button.innerHTML === "÷") {
      divide();
    } else if (button.innerHTML === "+/-") {
      plusMinus();
    } else if (button.innerHTML === "<=") {
      backspace();
    } else if (button.innerHTML === "%") {
      percent();
    } else if (button.innerHTML === "π") {
      pi();
    } else if (button.innerHTML === "x<sup>2</sup>") {
      square();
    } else if (button.innerHTML === '<i class="fa fa-square-root-alt" aria-hidden="true"></i>') {
      squareRoot();
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
    } else if (button.innerHTML === "^") {
      exponent();
    } else if (button.innerHTML === "n!") {
      factorial();
    } else if (button.innerHTML === "exp") {
      exp();
    } else if (button.innerHTML === "radians") {
      radians();
    } else if (button.innerHTML === "degrees") {
      degrees();
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
  if ((display.value).indexOf("^") > -1) {
      let base = (display.value).slice(0, (display.value).indexOf("^"));
      let exponent = (display.value).slice((display.value).indexOf("^") + 1);
      display.value = eval("Math.pow(" + base + "," + exponent + ")");
    }else if(display.value === '' || display.value === undefined){
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
  // if(display.value === "") {
  //   display.value = Math.PI;
  // }
  display.value = (display.value * Math.PI);
}
function square() {
  display.value = eval(display.value * display.value);
}
function squareRoot() {
    console.log(display.value);
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
function radians() {
  display.value = display.value * (Math.PI / 180);
}
function degrees() {
  display.value = display.value * (180 / Math.PI);
}