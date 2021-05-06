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
        return "Nu se poate calcula";
      }
      return this.x / this.y;
    };
  }
  
  // const calculator = new Calculator();
  
  // calculator.read(6, 2);
  
  // console.log(calculator.add());
  // console.log(calculator.diff());
  // console.log(calculator.multiply());
  // console.log(calculator.divide());
  
  // calculator.read(20, 0);
  
  // console.log(calculator.add());
  // console.log(calculator.diff());
  // console.log(calculator.multiply());
  // console.log(calculator.divide());

const firstOperator = document.getElementById('operator1');
const secondOperator = document.getElementById('operator2');
const result = document.getElementById('result');
  
const adding = document.getElementById('add');
adding.addEventListener('click',function() {
    result.value= "";
    calculator.read(Number(firstOperator.value), Number(secondOperator.value));
    if (firstOperator.value === "" || secondOperator.value === "") {
      return console.log('you must enter both operators');
    }
    result.value = Number(result.value) + calculator.add();
    firstOperator.value = "";
    secondOperator.value = "";
});

const substraction = document.getElementById('sub');
  substraction.addEventListener('click',function() {
    result.value= "";
    calculator.read(Number(firstOperator.value), Number(secondOperator.value));
    if (firstOperator.value === "" || secondOperator.value === "") {
      return console.log('you must enter both operators');
    } 
    console.log(result.value);
    result.value = Number(result.value) + calculator.diff();
    firstOperator.value = "";
    secondOperator.value = "";
});

const multipling = document.getElementById('mul');
  multipling.addEventListener('click',function() {
    result.value= "";
    calculator.read(Number(firstOperator.value), Number(secondOperator.value));
    if (firstOperator.value === "" || secondOperator.value === "") {
      return console.log('you must enter both operators');
    } 
    console.log(result.value);
    result.value = Number(result.value) + calculator.multiply();
    firstOperator.value = "";
    secondOperator.value = "";
});

const dividing = document.getElementById('div');
  dividing.addEventListener('click',function() {
    result.value= "";
    calculator.read(Number(firstOperator.value), Number(secondOperator.value));
    if (firstOperator.value === "" || secondOperator.value === "") {
      return console.log('you must enter both operators');
    } 
    console.log(result.value);
    result.value = Number(result.value) + calculator.divide();
    firstOperator.value = "";
    secondOperator.value = "";
});




 