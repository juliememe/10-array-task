/**Unique. Напишите функцию, которая убирает повторяющиеся значения.

  * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
  * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
  * Сложность задачи: 2 of 5
  * @param {Array<string | number>} array - Массив с примитивными значениями
  * @returns {Array}
*/
const unique = (array) => {
 return Array.from(new Set(array));
}

const data = [1, 2, 1, 2, 3];
console.log(unique(data)); // [1, 2, 3]