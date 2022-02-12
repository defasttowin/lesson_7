'use strict';

//let obj = {
//	employee1: 100,
//	employee2: 200,
//	employee3: 300,
//	employee4: 400,
//	employee5: 500,
//	employee6: 600,
//	employee7: 700,
//};

//for (let key in obj) {
//	obj[key] += obj[key] * 0.1;
//}

//console.log(obj);

//let obj = {
//	employee1: 100,
//	employee2: 200,
//	employee3: 300,
//	employee4: 400,
//	employee5: 500,
//	employee6: 600,
//	employee7: 700,
//};

//for (let key in obj) {
//	if (obj[key] <= obj['employee4']) {
//		obj[key] += obj[key] * 0.1;
//	}
//}

//console.log(obj);

//С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.
//let arr1 = [1, 2, 3, 4, 5];
//let arr2 = [6, 7, 8, 9, 10];
//let obj = {};

//for (let i = 0, k = 0; i < arr1.length; i++, k++) {
//	obj[arr1[i]] = arr2[k];
//}

//console.log(obj);
//Найдите сумму ключей этого объекта и поделите ее на сумму значений.
//let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
//let result;
//for (let key in obj) {
//	let summKey = 0;
//	summKey += key;
//	let summValue = 0;
//	summValue += obj[key];
//	result = summKey / summValue;
//}

//console.log(result);
//Запишите ключи этого объекта в один массив, а значения - в другой.
//let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
//let arr1 = [];
//let arr2 = [];

//for (let key in obj) {
//	arr1.push(key);
//	arr2.push(obj[key]);
//}

//console.log(arr1);
//console.log(arr2);
//Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. То есть у вас в результате получится вот такой массив:
//let obj = {
//	1: 125,
//	2: 225,
//	3: 128,
//	4: 356,
//	5: 145,
//	6: 281,
//	7: 452,
//};
//let arr = [];

//for (let key in obj) {
//	if (String(obj[key])[0] == 1 || String(obj[key])[0] == 2) {
//		arr.push(obj[key]);
//	}
//}

//console.log(arr);

//Создайте из этого массива следующий объект:

//let arr = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};

//let arr = ['a', 'b', 'c', 'd', 'e'];
//let obj = {};
//for (let i = 0, k = 1; i < arr.length; i++, k++) {
//	obj[k] = arr[i];
//}
//console.log(obj);

//Создайте из этого массива следующий объект:

//let arr = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

//let arr = ['a', 'b', 'c', 'd', 'e'];
//let obj = {};
//for (let i = 0, k = 1; i < arr.length; i++, k++) {
//	obj[arr[i]] = k;
//}

//console.log(obj);

//Пусть дан следующий массив:

//let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
//Давайте подсчитаем количество элементов 'a' в этом массиве. Для этого будем перебирать массив циклом и каждый раз, когда нам будет встречаться элемент с нужным значением, будем увеличивать какой-нибудь счетчик на единицу:

//let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
//let count = { a: 0, b: 0, c: 0 };

////Будем перебирать массив циклом и увеличивать соответствующее значение в объекте count:

//for (let elem of arr) {
//	count[elem]++;
//}

//console.log(count);
