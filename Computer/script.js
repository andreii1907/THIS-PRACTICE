function Calculator() {
    this.x = 0;
    this.y = 0;
  
    this.read = function (a, b) {
      this.x = a;
      this.y = b;
    };

    this.add = function () {
      return this.x + this.y;
    };

    this.diff = function () {
      return this.x - this.y;
    };
  
    this.multiply = function () {
      return this.x * this.y;
    };
  
    this.divide = function () {
      if (this.y === 0) {
        return console.log("Nu se poate calcula");
      }
      return this.x / this.y;
    };
  }
  
const calculator = new Calculator();

const firstOperator = document.getElementById('operator1');
const secondOperator = document.getElementById('operator2');
const result = document.getElementById('result');

function calculating(calc) {
    result.value = "";
    calculator.read(Number(firstOperator.value), Number(secondOperator.value));
    if (firstOperator.value === "" || secondOperator.value === "") {
      return console.log('you must enter both operators');
    } 
    result.value = Number(result.value) + calc;
    firstOperator.value = "";
    secondOperator.value = "";
};
  
const adding = document.getElementById('add');
  adding.addEventListener('click',function() {
    calculating(calculator.add());
  });

const substraction = document.getElementById('sub');
  substraction.addEventListener('click',function() {
    calculating(calculator.diff());
  });

const multipling = document.getElementById('mul');
  multipling.addEventListener('click',function() {
    calculating(calculator.multiply());
  });

const dividing = document.getElementById('div');
  dividing.addEventListener('click',function() {
    calculating(calculator.divide());
  });