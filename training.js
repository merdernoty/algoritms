// 1. Функция для вычисления числа Фибоначчи рекурсивным методом.
// f(n) = f(n-1) + f(n-2) 
function fibonachi(n) {
	// Если число меньше 0, возвращаем 0
	if (n < 0) {
		return 0;
	}
	// Если n равно 1 или 2, возвращаем 1 (первые два числа Фибоначчи — это 1)
	if (n <= 2) {
		return 1;
	}
	// Рекурсивно вызываем функцию для двух предыдущих чисел и складываем их
	return fibonachi(n - 1) + fibonachi(n - 2);
}

// console.log(fibonachi(5)); // Ожидаемый результат: 5

// 2. Функция для вычисления числа Фибоначчи с использованием цикла for.
function forFibonachi(n) {
	// Если n <= 0, возвращаем 0
	if (n <= 0) {
		return 0;
	}
	// Если n равно 1 или 2, возвращаем 1
	if (n <= 2) {
		return 1;
	}
	let prev = 1; // Предыдущее число Фибоначчи
	let result = 1; // Текущее число Фибоначчи

	// Цикл начинается с 0 и продолжается до n-2, вычисляя числа Фибоначчи
	for (let i = 0; i < n - 2; i++) {
		let tmp = result; // Сохраняем текущее значение
		result += prev; // Обновляем результат, прибавив предыдущее число
		prev = tmp; // Предыдущее значение становится текущим
	}
	return result;
}

// console.log(forFibonachi(5)); // Ожидаемый результат: 5

// 3. Функция для проверки, является ли слово палиндромом.
function palindrom(word) {
	// Приводим строку к нижнему регистру
	word = word.toLowerCase();
	// Разделяем строку на массив символов, переворачиваем его и соединяем обратно в строку
	let newWord = word.split("").reverse().join("");
	// Проверяем, совпадает ли перевёрнутая строка с исходной
	return newWord === word;
}

// console.log(palindrom("шалаш")); // Ожидаемый результат: true

// 4. Цепочка вызовов с числами и арифметическими операциями
function one(callback) {
	return callback ? callback(1) : 1; // Если передан callback, вызываем его с числом 1, иначе возвращаем 1
}
function two(callback) {
	return callback ? callback(2) : 2; // То же самое для числа 2
}
function three(callback) {
	return callback ? callback(3) : 3; // То же самое для числа 3
}
function four(callback) {
	return callback ? callback(4) : 4; // То же самое для числа 4
}
function five(callback) {
	return callback ? callback(5) : 5; // То же самое для числа 5
}

function plus(a) {
	return (b) => a + b; // Возвращаем функцию, которая складывает два числа
}
function multi(a) {
	return (b) => a * b; // Возвращаем функцию, которая умножает два числа
}

// console.log(one(plus(three()))); // Ожидаемый результат: 4 (1 + 3)

// 5. Функция для фильтрации и сортировки концертов по дате
const concerts = {
	Antalya: new Date("2021-04-01"),
	Istambul: new Date("2023-04-01"),
	Ankara: new Date("2024-10-01"),
	Adana: new Date("2029-04-01"),
	Mersin: new Date("2026-04-01"),
};

function concertsToArr(concerts) {
	// Преобразуем объект в массив ключей, фильтруем города с датами больше текущей и сортируем по дате
	return Object.keys(concerts)
		.filter((city) => concerts[city] > new Date())
		.sort((a, b) => concerts[a] - concerts[b]);
}

// console.log(concertsToArr(concerts)); // Ожидаемый результат: отсортированный список городов с будущими концертами

// 6. Функция для подсчёта периметра, окружённого "X" на матрице
const matrix = ["XOOXO", "XOOXO", "OOOXO", "XXOXO", "OXOOO"];

function perimiter(matrix) {
	let p = 0; // Переменная для хранения периметра
	// Проходим по каждому символу в матрице
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === "X") { // Если нашли "X"
				// Проверяем границы и соседние клетки для подсчёта периметра
				p += j === 0 || matrix[i][j - 1] === "O";
				p += i === 0 || matrix[i - 1][j] === "O";
				p += i === matrix.length - 1 || matrix[i + 1][j] === "O";
				p += j === matrix[i].length - 1 || matrix[i][j + 1] === "O";
			}
		}
	}
	return p; // Возвращаем периметр
}

// console.log(perimiter(matrix)); // Ожидаемый результат: 24

// 7. Функция для удаления повторяющихся элементов в массиве
const arrWith = ["apple", "apple", "banana", "plum"];

function withoutreapit(arr) {
	const result = []; // Массив для хранения уникальных элементов
	// Проходим по каждому элементу массива
	for (let i = 0; i < arr.length; i++) {
		let count = 0; // Счётчик для подсчёта повторений
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				count++; // Увеличиваем счётчик, если находим повторение
			}
		}
		if (count === 1) { // Добавляем элемент в результат, если он уникален
			result.push(arr[i]);
		}
	}
	return result; // Возвращаем массив уникальных элементов
}

// console.log(withoutreapit(arrWith)); // Ожидаемый результат: ["banana", "plum"]

// 8. Оптимизированная функция для поиска уникальных элементов в массиве с использованием словаря (O(n))
function linearWithoutReapit(arr) {
	const result = []; // Массив для уникальных элементов
	const dictionary = {}; // Словарь для подсчёта количества каждого элемента
	// Проходим по каждому элементу и заполняем словарь
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		dictionary[item] = dictionary[item] ? dictionary[item] + 1 : 1;
	}
	// Проходим по массиву и добавляем только уникальные элементы в результат
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		if (dictionary[item] === 1) {
			result.push(item);
		}
	}
	return result;
}

// console.log(linearWithoutReapit(arrWith)); // Ожидаемый результат: ["banana", "plum"]

// 9. Функция для подсчёта суммы значений узлов в дереве
const tree = [
	{
		v: 5, // Значение текущего узла
		c: [{ v: 5 }, { v: 4 }, { v: 8 }, { v: 20 }, { v: 3 }], // Потомки
	},
];

function treeSum(tree) {
	if (!tree.length) {
		return 0; // Если дерево пустое, возвращаем 0
	}
	let sum = 0; // Переменная для суммы значений
	let stack = []; // Стек для хранения узлов, которые нужно обрабатывать

	// Добавляем каждый узел дерева в стек
	tree.forEach((node) => stack.push(node));
	while (stack.length) {
		// Пока стек не пустой, извлекаем узел
		let node = stack.pop();
		sum += node.v; // Добавляем значение узла к сумме
		// Если у узла есть потомки, добавляем их в стек
		if (node.c) {
			node.c.forEach((n) => stack.push(n));
		}
	}
	return sum; // Возвращаем общую сумму
}

// console.log(treeSum(tree)); // Ожидаемый результат: 45 (сумма всех значений в дереве)
