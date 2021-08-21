/**Compact. Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.

  * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
  * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
  * Сложность задачи: 1 of 5
  * @param {Array} array - Массив любых элементов
  * @returns {Array}
*/
const compact = (array) => {
 return array.filter((e)=> e);
}

const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)) // [1, 2, 3]