/**
Fill. Напишите функцию, которая заполняет новый массив предоставленным значением.
  * Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
  * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
  * Сложность задачи: 1 of 5
  * @param {number} arraySize - размер массива
  * @param {?} value - значение для массива
  * @returns {Array}
*/

const fill = (arraySize, value) => {
return new Array(arraySize).fill(value, 0);
}

const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill)) // ['a', 'a', 'a']