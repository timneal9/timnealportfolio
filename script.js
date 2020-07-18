function buttonClick (button) {

  operators = ["+", "-", "/", "*"];
  

  if (button == "=" || button == "power") {
    
    

    if (buttonSequence == ""){
      result = 0;
    }
    else {
      if (button == "power"){
        button = "**2";
        buttonSequence += button;
      }
      result = eval(buttonSequence);
      result = +result.toFixed(5);
    }
    currentNumber = "";
    continuation = true;
    document.getElementById("result").innerHTML = result;
    
  }
  else if (operators.includes(button)) {
    var display = "";
    continuation = false;
    if (button != "power") {
      display = button;
    }
    buttonSequence += button;
    currentNumber = "";
    
    document.getElementById("result").innerHTML = display;
  }
  else if (button.slice(1, 2) == ".") {
    document.getElementById("result").innerHTML = button;
    checkDecimal = buttonSequence.slice(-6, -5);

    if (checkDecimal == ".") {
      var first = buttonSequence.slice(0, -7);
      buttonSequence = first + button;
    }
    else {
      buttonSequence += button;
    }
    currentNumber = "";
  }
  else {
    if (continuation) {
        buttonSequence = "";
        continuation = false;
      }
    buttonSequence += button;
    currentNumber += button
    document.getElementById("result").innerHTML = currentNumber;
  }
}

function clear () {
  document.getElementById("result").innerHTML = 0;
  buttonSequence = ""
  currentNumber = ""
}

function randomNumber () {
  var randomNum = 0;
  var strNum = "";

  randomNum = Math.random();
  randomNum = randomNum.toFixed(5);
  strNum = "" + randomNum;
  buttonClick(strNum);
}

var buttonSequence = "";
var currentNumber = "";
var continuation = true;
var result = 0;

document.getElementById("equalsButton").onclick = function () {buttonClick("=")};
document.getElementById("zeroButton").onclick = function () {buttonClick("0")};
document.getElementById("oneButton").onclick = function () {buttonClick("1")};
document.getElementById("twoButton").onclick = function () {buttonClick("2")};
document.getElementById("threeButton").onclick = function () {buttonClick("3")};
document.getElementById("fourButton").onclick = function () {buttonClick("4")};
document.getElementById("fiveButton").onclick = function () {buttonClick("5")};
document.getElementById("sixButton").onclick = function () {buttonClick("6")};
document.getElementById("sevenButton").onclick = function () {buttonClick("7")};
document.getElementById("eightButton").onclick = function () {buttonClick("8")};
document.getElementById("nineButton").onclick = function () {buttonClick("9")};
document.getElementById("plusButton").onclick = function () {buttonClick("+")};
document.getElementById("minusButton").onclick = function () {buttonClick("-")};
document.getElementById("divideButton").onclick = function () {buttonClick("/")};
document.getElementById("multiplyButton").onclick = function () {buttonClick("*")};
document.getElementById("powerButton").onclick = function () {buttonClick("power")};
document.getElementById("randButton").onclick = function () {randomNumber()};
document.getElementById("clearButton").onclick = function () {clear()};
