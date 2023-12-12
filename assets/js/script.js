'use strict';
const calc = document.forms['calculator'];
const toggleBtn1 = document.querySelector('.toggleBtn1');
const toggleBtn2 = document.querySelector('.toggleBtn2');
const toggleBtn3 = document.querySelector('.toggleBtn3');
const clear = document.querySelector('input[name="clear"]');
const keyBoard2 = document.querySelector('.key-board2');
const keyBoard3 = document.querySelector('.key-board3');
const keyBoard4 = document.querySelector('.key-board4');
const subBoard1 = document.querySelector('.sub-board1');
const subBoard2 = document.querySelector('.sub-board2');
const subBoard3 = document.querySelector('.sub-board3');
const trigonometryBtn = document.querySelector('.trigonometry');
const functionBtn = document.querySelector('.func');
const result = calc.result;
const input = calc.input;
const gradBtn = document.querySelector('input[name="deg"]');
const degValue = ['DEG', 'RAD', 'GRAD'];
const changeDeg1 = changeDeg();
let clearInput = false;
let answer = '';
let func;
let double = false;
let degree = '';
let brackets = 0;
let expFunc = false;
keyBoard3.addEventListener('click', (e) => {
	if (e.target.closest('.toggleBtn2')) {
		toggleBtn2.classList.toggle('active');
	}
	if (e.target.closest('.toggleBtn3')) {
		toggleBtn3.classList.toggle('active');
	}

	if (toggleBtn2.classList.contains('active') && toggleBtn3.classList.contains('active')) {
		subBoard3.classList.add('active');
		subBoard2.classList.remove('active');
		subBoard1.classList.remove('active');
	} else {
		if (toggleBtn2.classList.contains('active')) {
			subBoard1.classList.add('active');
			subBoard2.classList.remove('active');
			subBoard3.classList.remove('active');
		} else if (toggleBtn3.classList.contains('active')) {
			subBoard2.classList.add('active');
			subBoard1.classList.remove('active');
			subBoard3.classList.remove('active');
		} else {
			subBoard1.classList.remove('active');
			subBoard2.classList.remove('active');
			subBoard3.classList.remove('active');
		}
	}
});
functionBtn.addEventListener('click', () => {
	functionBtn.classList.toggle('active');
	keyBoard4.classList.toggle('active');
});
trigonometryBtn.addEventListener('click', () => {
	trigonometryBtn.classList.toggle('active');
	keyBoard3.classList.toggle('active');
});
calc.addEventListener('click', (e) => {
	if (!e.target.closest('.key-board3') && keyBoard3.classList.contains('active') && !e.target.closest('.trigonometry')) {
		trigonometryBtn.classList.remove('active');
		keyBoard3.classList.remove('active');
	}
	if (!e.target.closest('.key-board4') && keyBoard4.classList.contains('active') && !e.target.closest('.func')) {
		functionBtn.classList.remove('active');
		keyBoard4.classList.remove('active');
	}
});
toggleBtn1.addEventListener('click', () => {
	toggleBtn1.classList.toggle('active');
	keyBoard2.classList.toggle('active');
});
calc.addEventListener('input', (e) => {
	let test = e.target.value.replace(/[^\d\(\)]/i, '');
	if (test.length > 1 && test[0] == 0 && test[1] !== '.') {
		test = test.replace('00', '0');
		if (test[0] == 0 && test[1] !== '.') {
			test = test.substr(1, 32);
		}
	}

	if (test.length > 32) {
		input.value = test.substr(0, 32);
	} else {
		input.value = test;
	}
});
calc.addEventListener('click', (e) => {
	switch (e.target.name) {
		case '0':
			checkAndClearValues();
			if (!clearInput) {
				input.value += '0';
			} else {
				input.value = '0';
			}
			clearInput = false;
			input.value = input.value.replace(/^00/, '0');
			break;
		case '1':
			;
			checkAndClearValues();
			if (!clearInput) {
				input.value += '1';
			} else {
				input.value = '1';
			}
			clearInput = false;
			break;
		case '2':
			checkAndClearValues();
			if (!clearInput) {
				input.value += '2';
			} else {
				input.value = '2';
			}
			clearInput = false;
			break;
		case '3':
			checkAndClearValues();
			if (!clearInput) {
				input.value += '3';
			} else {
				input.value = '3';
			}
			clearInput = false;
			break;
		case '4':
			checkAndClearValues();
			if (!clearInput) {
				input.value += '4';
			} else {
				input.value = '4';
			}
			clearInput = false;
			break;
		case '5':
			checkAndClearValues();
			if (!clearInput) {
				input.value += '5';
			} else {
				input.value = '5';
			}
			clearInput = false;
			break;
		case '6':
			checkAndClearValues();
			if (!clearInput) {
				input.value += '6';
			} else {
				input.value = '6';
			}
			clearInput = false;
			break;
		case '7':
			checkAndClearValues();
			if (!clearInput) {
				input.value += '7';
			} else {
				input.value = '7';
			}
			clearInput = false;
			break;
		case '8':
			checkAndClearValues();
			if (!clearInput) {
				input.value += '8';
			} else {
				input.value = '8';
			}
			clearInput = false;
			break;
		case '9':
			checkAndClearValues();
			if (!clearInput) {
				input.value += '9';
			} else {
				input.value = '9';
			}
			clearInput = false;
			break;
		case 'deg':
			changeDeg1();
			break;
		case 'add-minus':
			if (input.value[0] === '0' && input.value.length < 2) {
				return;
			}
			if (input.value[0] === '-') {
				input.value = input.value.replace('-', '');
			} else {
				input.value = '-' + input.value;
			}
			break;
		case ',':
			if (/\./.test(input.value)) {
				return;
			} else {
				if (input.value.length == 0) {
					input.value = input.value + '0.';
				} else {
					input.value = input.value + '.';
				}
			}
			break;
		case 'e':
			input.value = Math.E;
			clearInput = true;
			func = 'result';
			break;
		case 'π':
			input.value = Math.PI;
			clearInput = true;
			func = 'result';
			break;
		case 'pow2':
			input.value = Math.pow(input.value, 2);
			func = 'result';
			break;
		case 'x3':
			input.value = Math.pow(input.value, 3);
			func = 'result';
			break;
		case '10pow':
			input.value = Math.pow(10, input.value);
			func = 'result';
			break;
		case 'log':
			input.value = Math.log10(input.value);
			func = 'result';
			break;
		case 'sqrt':
			input.value = Math.sqrt(input.value);
			func = 'result';
			break;
		case 'logyx':
			result.value = input.value + 'log base';
			func = 'logyx';
			clearInput = true;
			break;
		case '3sqrt':
			input.value = Math.cbrt(input.value);
			break;
		case '2powx':
			input.value = Math.pow(2, input.value);
			func = 'result';
			break;
		case 'ysqrt':
			result.value += input.value + 'ysqrt';
			clearInput = true;
			break;
		case 'ln':
			input.value = Math.log(input.value);
			func = 'result';
			break;
		case '1/x':
			input.value = 1 / input.value;
			func = 'result';
			break;
		case 'abs':
			input.value = Math.abs(input.value);
			func = 'result';
			break;
		case 'fact':
			input.value = exp(input.value);
			func = 'result';
			break;
		case 'sin':
			input.value = Math.sin(calcSystem(Number(input.value)));
			func = 'result';
			break;
		case 'cos':
			input.value = Math.cos(calcSystem(Number(input.value)));
			func = 'result';
			break;
		case 'tan':
			input.value = Math.tan(calcSystem(Number(input.value)));
			func = 'result';
			break;
		case 'cot':
			input.value = Math.cos(calcSystem(Number(input.value))) / Math.sin(calcSystem(Number(input.value)));
			func = 'result';
			break;
		case 'sec':
			input.value = 1 / Math.cos(calcSystem(Number(input.value)));
			func = 'result';
			break;
		case 'csc':
			input.value = 1 / Math.sin(calcSystem(Number(input.value)));
			func = 'result';
			break;
		case 'sinh':
			input.value = (Math.pow(Math.E, calcSystem(Number(input.value))) - Math.pow(Math.E, calcSystem(Number(-input.value)))) / 2;
			func = 'result';
			break;
		case 'cosh':
			input.value = (Math.pow(Math.E, calcSystem(Number(input.value))) + Math.pow(Math.E, calcSystem(Number(-input.value)))) / 2;
			func = 'result';
			break;
		case 'tanh':
			input.value = (Math.pow(Math.E, calcSystem(Number(input.value))) - Math.pow(Math.E, calcSystem(Number(-input.value)))) / (Math.pow(Math.E, calcSystem(Number(input.value))) + Math.pow(Math.E, calcSystem(Number(-input.value))));
			func = 'result';
			break;
		case 'coth':
			input.value = (Math.pow(Math.E, calcSystem(Number(input.value))) + Math.pow(Math.E, calcSystem(Number(-input.value)))) / (Math.pow(Math.E, calcSystem(Number(input.value))) - Math.pow(Math.E, calcSystem(Number(-input.value))));
			func = 'result';
			break;
		case 'sech':
			input.value = 2 / (Math.pow(Math.E, calcSystem(Number(input.value))) + Math.pow(Math.E, calcSystem(Number(-input.value))));
			func = 'result';
			break;
		case 'csch':
			input.value = 2 / (Math.pow(Math.E, calcSystem(Number(input.value))) - Math.pow(Math.E, calcSystem(Number(-input.value))));
			func = 'result';
			break;
		case 'sin⁻¹':
			if (parseFloat(input.value) > 1 || parseFloat(input.value) < -1) {
				alert("Для sin⁻¹ значение должно быть от -1 до 1");
				break;
			}
			input.value = Math.asin(parseFloat(calcSystem(Number(input.value))));
			func = 'result';
			break;
		case 'cos⁻¹':
			if (parseFloat(input.value) > 1 || parseFloat(input.value) < -1) {
				alert("Для cos⁻¹ значение должно быть от -1 до 1");
				break;
			}
			input.value = Math.acos(parseFloat(calcSystem(Number(input.value))));
			func = 'result';
			break;
		case 'tan⁻¹':
			input.value = Math.atan(parseFloat(calcSystem(Number(input.value))));
			func = 'result';
			break;
		case 'sec⁻¹':
			input.value = 1 / Math.cos(parseFloat(calcSystem(Number(input.value))));
			func = 'result';
			break;
		case 'csc⁻¹':
			input.value = 1 / Math.sin(parseFloat(calcSystem(Number(input.value))));
			func = 'result';
			break;
		case 'cot⁻¹':
			input.value = 1 / Math.tan(parseFloat(icalcSystem(Number(input.value))));
			func = 'result';
			break;
		case 'sinh⁻¹':
			input.value = Math.asinh(parseFloat(calcSystem(Number(input.value))));
			func = 'result';
			break;
		case 'cosh⁻¹':
			if (parseFloat(input.value) < 1) {
				alert("Для cosh⁻¹ значение должно быть >= 1");
				break;
			}
			input.value = Math.acosh(parseFloat(calcSystem(Number(input.value))));
			func = 'result';
			break;
		case 'tanh⁻¹':
			if (Math.abs(parseFloat(input.value)) >= 1) {
				alert("Для tanh⁻¹ значение должно быть меньше 1 по модулю");
				break;
			}
			input.value = Math.atanh(parseFloat(calcSystem(Number(input.value))));
			func = 'result';
			break;
		case 'sech⁻¹':
			if (parseFloat(input.value) <= 0 || parseFloat(input.value) > 1) {
				alert("Для sech⁻¹ значение должно быть в интервале (0, 1]");
				break;
			}
			input.value = Math.acosh(1 / parseFloat(calcSystem(Number(input.value))));
			func = 'result';
			break;
		case 'csch⁻¹':
			if (parseFloat(input.value) === 0) {
				alert("Для csch⁻¹ значение не должно быть равно 0");
				break;
			}
			input.value = Math.asinh(1 / parseFloat(calcSystem(Number(input.value))));
			func = 'result';
			break;
		case 'coth⁻¹':
			if (Math.abs(parseFloat(input.value)) <= 1) {
				alert("Для coth⁻¹ значение должно быть больше 1 по модулю");
				break;
			}
			input.value = Math.atanh(1 / parseFloat(calcSystem(Number(input.value))));
			func = 'result';
			break;
		case 'dms':
			let decimalDegrees = parseFloat(input.value);
			let degrees = Math.trunc(decimalDegrees);
			let minutes = Math.trunc((decimalDegrees - degrees) * 60);
			let seconds = ((decimalDegrees - degrees - minutes / 60) * 3600).toFixed(2);
			input.value = `${degrees}°${minutes}'${seconds}"`;
			func = 'result';
			break;
		case 'deg':
			let dmsValue = input.value.match(/(\d+)°(\d+)'(\d+(\.\d+)?)"/);
			if (dmsValue) {
				let degreesFromDMS = parseInt(dmsValue[1]) + parseInt(dmsValue[2]) / 60 + parseFloat(dmsValue[3]) / 3600;
				input.value = degreesFromDMS.toFixed(6);
			} else {
				alert("Неверный формат DMS. Используйте формат 'XX°XX'XX\"'.");
			}
			func = 'result';
			break;
		case 'ceil':
			input.value = Math.ceil(input.value);
			result.value = input.value;
			func = 'result';
			break;
		case 'floor':
			input.value = Math.floor(input.value);
			result.value = input.value;
			func = 'result';
			break;
		case 'rand':
			input.value = Math.random();
			func = 'result';
			break;
		case 'ex':
			if (double) {
				return;
			}
			input.value = Math.pow(Math.E, input.value);
			double = true;
			break;
		case 'mod':
			if (result.value.match('%')) {
				return;
			}
			if (result.value) {
				result.value += '%';
			} else {
				result.value = input.value + '%';
			}
			clearInput = true;
			func = 'mod';
			break;
		case 'exp':
			input.value = input.value + 'e+';
			func = 'exp';
			break;
		case 'move':
			input.value = input.value.slice(0, input.value.length - 1);
			break;
		case 'clear':
			if (clear.value === 'CE') {
				checkAndClearValues();
				input.value = '0';
				if (func !== 'equal') {
					break;
				}
			}
			input.value = '0';
			result.value = '';
			answer = '';
			double = false;
			degree = '';
			func = '';
			brackets = 0;
			break;
		case 'open(':
			checkAndClearValues();
			if (!result.value && !input.value) {
				result.value += '(';
				brackets++;
				break;
			}
			if (!result.value && input.value == '0') {
				result.value += '(';
				brackets++;
				break;
			}
			if (/[d$\)]/.test(result.value[result.value.length - 1])) {
				if (/d$/.test(result.value[result.value.length - 1])) {
					result.value += input.value + '*(';
				} else {
					result.value += '*(';
				}
			} else {
				if (!clearInput) {
					result.value += input.value + '*(';
				} else {
					result.value += '(';
				}
				input.value = 0;
			}
			input.value = 0;
			brackets++;
			break;
		case 'close)':
			if (brackets == 0) {
				input.value = 0;
				return;
			}
			result.value += input.value + ')';
			input.value = 0;
			brackets--;
			clearInput = true;
			break;
		case 'pow':
			result.value = input.value + '^';
			func = 'pow';
			double = false;
			clearInput = true;
			break;
		case 'plus':
			if (func == 'exp') {
				calcEXP();
				func = '';
			}
			if (result.value && brackets === 0) {
				try {
					result.value = eval(result.value) + '+';
				} catch {
					result.value = result.value + input.value + '+';
				}
			} else {
				result.value += input.value + '+';
			}
			double = false;
			clearInput = true;
			break;
		case 'minus':
			if (func == 'exp') {
				calcEXP();
				func = '';
			}
			if (result.value && brackets === 0) {
				try {
					result.value = eval(result.value) + '-';
				} catch {
					result.value = result.value + input.value + '-';
				}
			} else {
				result.value += input.value + '-';
			}
			double = false;
			clearInput = true;
			break;
		case 'divide':
			if (func == 'exp') {
				calcEXP();
				func = '';
			}
			if (result.value && brackets === 0) {
				try {
					result.value = eval(result.value) + '/';
				} catch {
					result.value = result.value + input.value + '/';
				}
			} else {
				if (/\)$/.test(result.value)) {
					result.value += '/';
				} else {
					result.value += input.value + '/';
				}
			}
			double = false;
			clearInput = true;
			break;
		case 'multiply':
			if (func == 'exp') {
				calcEXP();
				func = '';
			}
			if (result.value && brackets === 0) {
				try {
					result.value = eval(result.value) + '*';
				} catch {
					result.value = result.value + input.value + '*';
				}
			} else {
				result.value += input.value + '*';
			}
			double = false;
			clearInput = true;
			break;
		case 'equal':
			if (/ysqrt/.test(result.value)) {
				if (/ysqrt$/.test(result.value)) {
					result.value = result.value.replace(/ysqrt/, '**');
					input.value = eval(result.value + 1 / input.value)
					return;
				} else {
					let arr = result.value.split(/ysqrt/);
					let start = arr[0].split(/\D/);
					result.value = arr[0].replace(start[start.length - 1], '') + start[start.length - 1] ** (1 / arr[1].split(/\D/)[0]) + arr[1].replace(arr[1].split(/\D/)[0], '');
					input.value = eval(result.value + input.value);
					return;
				}
			}
			if (func == 'logyx') {
				result.value = result.value.replace('log base', '');
				if (!double) {
					degree = input.value;
				}
				if (double) {
					input.value = Math.log(result.value) / Math.log(degree);
				} else {
					input.value = Math.log(result.value) / Math.log(input.value);
				}
				result.value = input.value;
				double = true;
				func = '';
				return;
			}
			if (func == 'mod') {
				if (double) {
					return;
				}
				input.value = eval(result.value + input.value);
				result.value = input.value;
				double = true;
				func = '';
				return;
			}
			if (func == 'exp') {
				// if (double) {
				// 	return;
				// }
				calcEXP();
				return;
			}
			if (double) {
				let symbol = result.value.match(/[\*\/\+\-]/i);
				let position;
				if (symbol) {
					position = result.value.indexOf(symbol[0]);
				} else {
					return;
				}
				answer = eval(result.value);
				result.value = answer + result.value.slice(position);
				input.value = eval(result.value);
				return;
			}
			if (!clearInput) {
				if (/\)$/.test(result.value)) {
					result.value += '*' + input.value;
				} else {
					result.value = result.value + input.value;
				}
			}
			if (clearInput) {
				if (/[\+\-\\\*]$/.test(result.value)) {
					result.value += input.value;
				} 
			}
			result.value = result.value.replace('--', '+');
			result.value = result.value.replace('^', '**');
			if (brackets > 0) {
				for (let i = brackets; i !== 0; i--) {
					brackets--;
					result.value += ')';
				}
			}
			if (func == 'result') {
				result.value = result.value + input.value;
			}
			input.value = eval(result.value);
			double = true;
			answer = input.value;
			func = 'equal';
			return;
		default:
			return;
	}
	if (input.value !== '0') {
		clear.value = 'CE';
	} else {
		clear.value = 'C';
	}
	if (input.value.length > 1 && input.value[0] == 0 && input.value[1] !== '.') {
		input.value = input.value.substr(1);
	}
	if (input.value.length > 32) {
		input.value = input.value.substr(0, 32);
	}
});
document.addEventListener('keydown', (e) => {
	if (e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
		let buttonName = null;
		switch (e.key) {
			case '0': case '1': case '2': case '3': case '4':
			case '5': case '6': case '7': case '8': case '9':
				buttonName = e.key;
				break;
			case '+':
				buttonName = 'plus';
				break;
			case '-':
				buttonName = 'minus';
				break;
			case '*':
				buttonName = 'multiply';
				break;
			case '/':
				buttonName = 'divide';
				break;
			case 'Enter':
				buttonName = 'equal';
				break;
			case '(':
				buttonName = 'open(';
				break;
			case ')':
				buttonName = 'close)';
				break;
			case ',': case '.':
				buttonName = ',';
				break;
			case 'Backspace':
				buttonName = 'move';
				break;
			case 'Escape':
				buttonName = 'clear';
				break;
		}
		if (buttonName) {
			const button = document.querySelector(`input[name="${buttonName}"]`);
			button.classList.add('click');
			if (button) {
				button.dispatchEvent(new Event('click', { bubbles: true }));
			}
			setTimeout(() => {
				button.classList.remove('click');
			}, 100);
		}
	}
});
function exp(n) {
	let result = 1;
	for (let count = n; count > 1; count--) {
		result *= count;
	}
	return result;
}
function checkAndClearValues() {
	try {
		let calculatedValue = eval(result.value);
		let isInputNumber = !isNaN(input.value) && !isNaN(parseFloat(input.value));
		if (isInputNumber && calculatedValue == input.value) {
			input.value = '';
			result.value = '';
		}
	} catch (e) {
		return;
	}
}
function calcEXP() {
	let x = input.value.split('e+');
	input.value = x[0].replace(/e\+$/, '') * (10 ** x[1]);
	double = true;
	func = '';
	return;
}
function changeDeg() {
	let current = 0;
	return () => {
		current++;
		if (current > degValue.length - 1) {
			current = 0;
		}
		gradBtn.value = degValue[current];
	}
}
function calcSystem(number) {
	switch (gradBtn.value) {
		case 'DEG':
			return number * Math.PI / 180;
		case 'RAD':
			return number;
		case 'GRAD':
			return number * 1.1 * Math.PI / 180;
	}
}