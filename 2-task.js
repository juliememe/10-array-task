/**Reverse. Напишите функцию, которая разворачивает массив в обратном порядке. Пожалуйста, не используйте array.reverse(), чтобы сделать задачу более интересной.

  * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
  * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
  * Сложность задачи: 1 of 5
  * @param {Array} array - Массив любых элементов
  * @returns {Array}
*/
const reverse = (array) => {
 let newArray = [];
 for(let i= array.length-1; i>=0; i--){
     newArray.push(array[i]);
 }
 return newArray;
}

const data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1]