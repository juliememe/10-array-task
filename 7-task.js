/** IsEqual. Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.

  * Описание задачи: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
  * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
  * Сложность задачи: 2 of 5
  * @param {Array} firstArray - Массив с примитивными значениями
  * @param {Array} secondArray - Массив с примитивными значениями
  * @returns {boolean}
*/
const isEqual = (firstArray, secondArray) => {
  return (firstArray.filter((e)=> !secondArray.includes(e)).concat(secondArray.filter((e)=> !firstArray.includes(e)))).length > 0 ? false : true;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false