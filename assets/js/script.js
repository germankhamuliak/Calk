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
let clearInput = false;
let answer = '';
let func;
let double = false;
let degree = '';
let brackets = 0;
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
			debugger;
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
			break;
		case 'π':
			input.value = Math.PI;
			break;
		case 'pow2':
			input.value = Math.pow(input.value, 2);
			break;
		case 'x3':
			input.value = Math.pow(input.value, 3);
			break;
		case '10pow':
			input.value = Math.pow(10, input.value);
			break;
		case 'log':
			input.value = Math.log10(input.value);
			break;
		case 'sqrt':
			input.value = Math.sqrt(input.value);
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
			break;
		case 'ysqrt':
			result.value = input.value;
			func = 'ysqrt';
			clearInput = true;
			break;
		case 'ln':
			input.value = Math.log(input.value);
			break;
		case '1/x':
			input.value = 1 / input.value;
			break;
		case 'abs':
			input.value = Math.abs(input.value);
			result.value = eval(result.value + input.value);
			break;
		case 'fact':
			input.value = exp(input.value);
			break;
		case 'sin':
			input.value = Math.sin(input.value);
			func = '';
			break;
		case 'cos':
			input.value = Math.cos(input.value);
			func = '';
			break;
		case 'tan':
			input.value = Math.tan(input.value);
			func = '';
			break;
		case 'cot':
			input.value = Math.cos(input.value) / Math.sin(input.value);
			func = '';
			break;
		case 'sec':
			input.value = 1 / Math.cos(input.value);
			func = '';
			break;
		case 'csc':
			input.value = 1 / Math.sin(input.value);
			func = '';
			break;
		case 'sinh':
			input.value = (Math.pow(Math.E, input.value) - Math.pow(Math.E, -input.value)) / 2;
			func = '';
			break;
		case 'cosh':
			input.value = (Math.pow(Math.E, input.value) + Math.pow(Math.E, -input.value)) / 2;
			func = '';
			break;
		case 'tanh':
			input.value = (Math.pow(Math.E, input.value) - Math.pow(Math.E, -input.value)) / (Math.pow(Math.E, input.value) + Math.pow(Math.E, -input.value));
			func = '';
			break;
		case 'coth':
			input.value = (Math.pow(Math.E, input.value) + Math.pow(Math.E, -input.value)) / (Math.pow(Math.E, input.value) - Math.pow(Math.E, -input.value));
			func = '';
			break;
		case 'sech':
			input.value = 2 / (Math.pow(Math.E, input.value) + Math.pow(Math.E, -input.value));
			func = '';
			break;
		case 'csch':
			input.value = 2 / (Math.pow(Math.E, input.value) - Math.pow(Math.E, -input.value));
			func = '';
			break;
		case 'sin⁻¹':
			if (parseFloat(input.value) > 1 || parseFloat(input.value) < -1) {
				alert("Для sin⁻¹ значение должно быть от -1 до 1");
				break;
			}
			input.value = Math.asin(parseFloat(input.value)).toString();
			break;
		case 'cos⁻¹':
			if (parseFloat(input.value) > 1 || parseFloat(input.value) < -1) {
				alert("Для cos⁻¹ значение должно быть от -1 до 1");
				break;
			}
			input.value = Math.acos(parseFloat(input.value)).toString();
			break;
		case 'tan⁻¹':
			input.value = Math.atan(parseFloat(input.value)).toString();
			break;
		case 'sec⁻¹':
			input.value = 1 / Math.cos(parseFloat(input.value)).toString();
			break;
		case 'csc⁻¹':
			input.value = 1 / Math.sin(parseFloat(input.value)).toString();
			break;
		case 'cot⁻¹':
			input.value = 1 / Math.tan(parseFloat(input.value)).toString();
			break;
		case 'sinh⁻¹':
			input.value = Math.asinh(parseFloat(input.value)).toString();
			break;
		case 'cosh⁻¹':
			if (parseFloat(input.value) < 1) {
				alert("Для cosh⁻¹ значение должно быть >= 1");
				break;
			}
			input.value = Math.acosh(parseFloat(input.value)).toString();
			break;
		case 'tanh⁻¹':
			if (Math.abs(parseFloat(input.value)) >= 1) {
				alert("Для tanh⁻¹ значение должно быть меньше 1 по модулю");
				break;
			}
			input.value = Math.atanh(parseFloat(input.value)).toString();
			break;
		case 'sech⁻¹':
			if (parseFloat(input.value) <= 0 || parseFloat(input.value) > 1) {
				alert("Для sech⁻¹ значение должно быть в интервале (0, 1]");
				break;
			}
			input.value = Math.acosh(1 / parseFloat(input.value)).toString();
			break;
		case 'csch⁻¹':
			if (parseFloat(input.value) === 0) {
				alert("Для csch⁻¹ значение не должно быть равно 0");
				break;
			}
			input.value = Math.asinh(1 / parseFloat(input.value)).toString();
			break;
		case 'coth⁻¹':
			if (Math.abs(parseFloat(input.value)) <= 1) {
				alert("Для coth⁻¹ значение должно быть больше 1 по модулю");
				break;
			}
			input.value = Math.atanh(1 / parseFloat(input.value)).toString();
			break;
		case 'dms':
			let decimalDegrees = parseFloat(input.value);
			let degrees = Math.trunc(decimalDegrees);
			let minutes = Math.trunc((decimalDegrees - degrees) * 60);
			let seconds = ((decimalDegrees - degrees - minutes / 60) * 3600).toFixed(2);
			input.value = `${degrees}°${minutes}'${seconds}"`;
			break;
		case 'deg':
			let dmsValue = input.value.match(/(\d+)°(\d+)'(\d+(\.\d+)?)"/);
			if (dmsValue) {
				let degreesFromDMS = parseInt(dmsValue[1]) + parseInt(dmsValue[2]) / 60 + parseFloat(dmsValue[3]) / 3600;
				input.value = degreesFromDMS.toFixed(6);
			} else {
				alert("Неверный формат DMS. Используйте формат 'XX°XX'XX\"'.");
			}
			break;
		case 'ceil':
			input.value = Math.ceil(input.value);
			result.value = input.value;
			break;
		case 'floor':
			input.value = Math.floor(input.value);
			result.value = input.value;
			break;
		case 'rand':
			input.value = Math.random();
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
			result.value = input.value + 'e+';
			func = 'exp';
			clearInput = true;
			break;
		case 'move':
			input.value = input.value.slice(0, input.value.length - 1);
			break;
		case 'clear':
			if (clear.value === 'CE') {
				input.value = '0';
				break;
			}
			input.value = '0';
			result.value = '';
			answer = '';
			double = false;
			degree = '';
			break;
		case 'open(':
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
				result.value += '(';
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
			if (func == 'ysqrt') {
				if (!double) {
					degree = input.value
				}
				if (double) {
					input.value = Math.pow(result.value, 1 / degree);
				} else {
					input.value = Math.pow(result.value, 1 / input.value);
				}
				result.value = input.value;
				double = true;
				return;
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
				return;
			}
			if (func == 'mod') {
				if (double) {
					return;
				}
				input.value = eval(result.value + input.value);
				result.value = input.value;
				double = true;
				return;
			}
			if (func == 'exp') {
				if (double) {
					return;
				}
				input.value = result.value.replace(/e\+$/, '') * (10 ** input.value);
				result.value = input.value;
				double = true;
				func = '';
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
			result.value = result.value.replace('--', '+');
			result.value = result.value.replace('^', '**');

			if (brackets > 0) {
				for (let i = brackets; i !== 0; i--) {
					brackets--;
					result.value += ')';
				}
			}
			input.value = eval(result.value);
			double = true;
			answer = input.value;
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
	if (+result.value) {
		try {
			let calculatedValue = eval(result.value);
			let isInputNumber = !isNaN(input.value) && !isNaN(parseFloat(input.value));
			if (isInputNumber && calculatedValue == input.value ) {
				input.value = '';
				result.value = '';
			}
		} catch (e) {
			console.error("Ошибка в вычислении: ", e);
		}
	}
}

