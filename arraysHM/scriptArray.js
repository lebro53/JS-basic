// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// const numbers = () => {
//   for (let i = 0; i < 11; i++) {
//     const element = i;
//     if (element === 0) {
//       console.log(`${element} - это ноль`);
//     } else if (element % 2 === 0) {
//       console.log(`${element} - четное число`);
//     } else {
//       console.log(`${element} - нечетное число`);
//     }
//   }
// };
// numbers();
// _____________________________________________________________________________________
// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const arrayNumbers = [1, 2, 3, 4, 5, 6, 7];
// function delNum(array, num) {
//   return array.splice(array.indexOf(num), 1);
// }
// delNum(arrayNumbers, 4);
// delNum(arrayNumbers, 5);

// console.log(arrayNumbers);
// _____________________________________________________________________________________

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// const createArray = () => {
//   const array = [];
//   for (let i = 0; i < 5; i++) {
//     array.push(Math.floor(Math.random() * (9 - 0 + 1)) + 0);
//   }
//   return array;
// };

// const sumElemArray = (array) => {
//   let sum = 0;
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     sum += element;
//   }
//   return sum;
// };

// const searchElemArray = (array, elem) => {
//   const indexSearchElem = array.indexOf(elem);
//   indexSearchElem === -1
//     ? console.log(`Элемента ${elem} нет в массиве`)
//     : console.log(`Элемент ${elem} есть в массиве`);
// };

// const array = createArray();
// console.log(array);
// console.log(sumElemArray(array));
// array.sort();
// console.log(array[0]);
// searchElemArray(array, 3);

// _____________________________________________________________________________________

// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

for (let i = 0; i < 20; i++) {
  console.log("x".repeat(i));
}
