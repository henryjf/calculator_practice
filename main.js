// / * When I click the "calculate" button, the values in the
//  // first box should be added, subtracted, multiplied or divided 
//  // by the value in the second box. 
//  // * You'll need to convert the values to a number 
//  // (think `Number(value)`) in order to process them.
// // * Your output should be injected into the answer element

var num1 = document.querySelector('#num_one');
var num2 = document.querySelector('#num_two');
var button = document.querySelector('#calculateBtn');
var answer = document.querySelector('#answer');

function add() {
	return (Number(num1.value) + Number(num2.value));
}

function print() {
	answer.textContent = add();
}

button.addEventListener('click', print);




