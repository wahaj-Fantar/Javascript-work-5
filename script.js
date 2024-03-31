// ---chapter 17-20 ---
// ---------Q1-------
// ---------Q2-------
// ---------Q3-------

// for(let i=1;i<=10;i++){
//     console.log(i)
// }

// ---------Q4-------

// let tableOfNum = +prompt("Enter a number to show its multiplication table : ");
// let tableLength = +prompt("Enter length of multiplication table : ");
// console.log(
//   `Multiplication table of : ${tableOfNum} \n Length :  ${tableLength} \n`
// );

// for (let i = 1; i <= tableLength; i++) {
//   console.log(`${tableOfNum} x ${i} = ${tableOfNum * i}`);
// }

// ---------Q5-------

// let arr = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(`${arr[i]} \n`);
// }
// for (let i = 0; i < arr.length; i++) {
//   console.log(`Element at index ${i} is ${arr[i]}`);
// }

// ---------Q6-------

// document.write("<b>Counting : </b>" + "<br><br>");
// for (i = 1; i <= 15; i++) {
//   document.write(`${i} , `);
// }

// document.write("<b>Reverse counting : </b>" + "<br><br>");
// for (i = 10; i >= 1; i--) {
//   document.write(`${i} , `);
// }

// document.write("<b>Even : </b>" + "<br><br>");
// for (i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     document.write(`${i} , `);
//   }
// }

// document.write("<b>Odd : </b>" + "<br><br>");
// for (i = 0; i <= 20; i++) {
//   if (i % 2 != 0) {
//     document.write(`${i} , `);
//   }
// }

// document.write("<b>Series : </b>" + "<br><br>");
// for (i = 2; i <= 20; i = i + 2) {
//   document.write(`${i}k , `);
// }

// ---------Q7-------

// let arr = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput = prompt(
//   "Welcome to ABC Bakery. What do you want to order sir/ma'am"
// );

// let found = false;

// for (let i = 0; i < arr.length; i++) {
//   if (userInput === arr[i]) {
//     found = true;
//     console.log(`${userInput} is available at index ${i} in our bakery`);
//     break;
//   }
// }

// if (found === false) {
//   console.log(`We are sorry. ${userInput} is not available in our bakery`);
// }

// ---------Q8-------

// let arr = [24, 53, 78, 91, 12];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(`The biggest number is : ${max}`);

// ---------Q9-------

// let arr = [24, 53, 78, 91, 12];
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(`The smallest number is : ${min}`);

// ---------Q10-------

// for(let i=5;i<101;i=i+5){
//     console.log(i)
// }