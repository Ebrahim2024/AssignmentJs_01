//! 1- Write a program that allow to user enter number then print it.
// var userNumber = Number(window.prompt("Enter Number : "));
// console.log(userNumber);

//! 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no.
// var userNumber = Number(window.prompt("Enter Number : "));
// if (userNumber % 3 == 0 && userNumber % 4 == 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

//! 3- Write a program that allows the user to insert 2 integers then print the max.
// var userNumber1 = Number(window.prompt("Enter Number1 : "));
// var userNumber2 = Number(window.prompt("Enter Number2 : "));
// if (userNumber1 > userNumber2) {
//   console.log(userNumber1);
// } else if (userNumber2 > userNumber1) {
//   console.log(userNumber2);
// } else {
//   console.log(userNumber1 + " Equals " + userNumber2);
// }

//! 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
// var userNumber = Number(window.prompt("Enter Number : "));
// if (userNumber == 0) {
//   console.log("Number is not Positive and is not Negative");
// } else if (userNumber > 0) {
//   console.log("positive");
// } else {
//   console.log("negative");
// }

//! 5- Write a program that take 3 integers from user then print the max element and the min element.
// var userNumber1 = Number(window.prompt("Enter Number1 : "));
// var userNumber2 = Number(window.prompt("Enter Number2 : "));
// var userNumber3 = Number(window.prompt("Enter Number3 : "));
// if (userNumber1 > userNumber2 && userNumber1 > userNumber3) {
//   if (userNumber2 > userNumber3) {
//     console.log("max element = " + userNumber1);
//     console.log("min element = " + userNumber3);
//   } else {
//     console.log("max element = " + userNumber1);
//     console.log("min element = " + userNumber2);
//   }
// } else if (userNumber2 > userNumber1 && userNumber2 > userNumber3) {
//   if (userNumber1 > userNumber3) {
//     console.log("max element = " + userNumber2);
//     console.log("min element = " + userNumber3);
//   } else {
//     console.log("max element = " + userNumber2);
//     console.log("min element = " + userNumber1);
//   }
// } else if (userNumber3 > userNumber1 && userNumber3 > userNumber2) {
//   if (userNumber1 > userNumber2) {
//     console.log("max element = " + userNumber3);
//     console.log("min element = " + userNumber2);
//   } else {
//     console.log("max element = " + userNumber3);
//     console.log("min element = " + userNumber1);
//   }
// } else {
//   console.log(
//     userNumber1 + " Equals " + userNumber2 + " Equals " + userNumber3
//   );
// }

//! 6- Write a program that allows the user to insert integer number then check If a number is even or odd.
// var userNumber = Number(window.prompt("Enter Number : "));
// if (userNumber % 2 == 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

//! 7- Write a program that take character from user then if it is vowel chars (a,e,i,o,u) then print vowel otherwise print consonant.
// var character = window.prompt("Enter Character : ");
// switch (character) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log("vowel");
//     break;
//   default:
//     console.log("consonant");
// }

//! 8- Write a program that allows user to insert integer then print all numbers between 1 to that’s number.
// var userNumber = Number(window.prompt("Enter Number : "));
// for (var i = 1; i <= userNumber; i++) {
//   console.log(i);
// }

//! 9- Write a program that allows userto insert integerthen print a multiplication table up to 12.
// var userNumber = Number(window.prompt("Enter Number : "));
// for (var i = 1; i <= 12; i++) {
//   console.log(userNumber * i);
// }

//! 10- Write aprogram that allows to user to insert number then print all even numbers between 1 to this number.
// var userNumber = Number(window.prompt("Enter Number : "));
// for (var i = 1; i <= userNumber; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//& 11- Write aprogram that take two integers then print the power.
// var userNumber1 = Number(window.prompt("Enter Number1 : "));
// var userNumber2 = Number(window.prompt("Enter Number2 : "));
// var store = 1;
// for (var i = 1; i <= userNumber2; i++) {
//   store = userNumber1 * userNumber1;
//   store *= userNumber1;
// }
// console.log(store);

//! 12- Write a program to enter marks of five subjects and calculate total, average and percentage.
// var total = 0,
//   average = 0;
// percentage = 0;
// var eng = Number(window.prompt("Enter Degree of English : "));
// var phy = Number(window.prompt("Enter Degree of Physics : "));
// var chem = Number(window.prompt("Enter Degree of Chemistry : "));
// var math = Number(window.prompt("Enter Degree of Mathematics : "));
// var comp = Number(window.prompt("Enter Degree of Computer : "));
// total = eng + phy + chem + math + comp;
// average = total / 5;
// percentage = (total / 500) * 100;
// console.log("Total Marks = " + total);
// console.log("Average Marks = " + average);
// console.log("Precentage Marks = " + percentage);

//! 13-Write a program to input month number and print number of days in that month.
// var monthNumber = Number(window.prompt("Month Number : "));
// switch (monthNumber) {
//   case 1:
//     console.log("Days in Month: 31");
//     break;
//   case 2:
//     console.log("Days in Month: 28");
//     break;
//   case 3:
//     console.log("Days in Month: 31");
//     break;
//   case 4:
//     console.log("Days in Month: 30");
//     break;
//   case 5:
//     console.log("Days in Month: 31");
//     break;
//   case 6:
//     console.log("Days in Month: 30");
//     break;
//   case 7:
//     console.log("Days in Month: 31");
//     break;
//   case 8:
//     console.log("Days in Month: 31");
//     break;
//   case 9:
//     console.log("Days in Month: 30");
//     break;
//   case 10:
//     console.log("Days in Month: 31");
//     break;
//   case 11:
//     console.log("Days in Month: 30");
//     break;
//   case 12:
//     console.log("Days in Month: 31");
//     break;

//   default:
//     console.log("This Month Is Not Found!");
//     break;
// }

//! 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade.
// var total = 0,
//   Precentage = 0;
// var phy = Number(window.prompt("Enter Degree of English : "));
// var chem = Number(window.prompt("Enter Degree of Physics : "));
// var bio = Number(window.prompt("Enter Degree of Chemistry : "));
// var math = Number(window.prompt("Enter Degree of Mathematics : "));
// var comp = Number(window.prompt("Enter Degree of Computer : "));
// total = phy + chem + bio + math + comp;
// Precentage = (total / 500) * 100;
// if (Precentage <= 100 && Precentage >= 95 ) {
//   console.log("A+");
// } else if (Precentage < 90 && Precentage >= 85) {
//   console.log("A");
// } else if (Precentage < 85 && Precentage >= 75) {
//   console.log("B");
// } else if (Precentage < 75 && Precentage >= 65) {
//   console.log("C");
// } else if (Precentage < 65 && Precentage >= 60) {
//   console.log("D");
// } else if (Precentage < 60 && Precentage >= 50) {
//   console.log("E");
// } else {
//   console.log("F");
// }

//? ******************************** Using switch case*******************************

//! 15- Write a program to print total number of days in month.
// var monthNumber = Number(window.prompt("Month Number : "));
// switch (monthNumber) {
//   case 1:
//     console.log("Days in Month: 31");
//     break;
//   case 2:
//     console.log("Days in Month: 28");
//     break;
//   case 3:
//     console.log("Days in Month: 31");
//     break;
//   case 4:
//     console.log("Days in Month: 30");
//     break;
//   case 5:
//     console.log("Days in Month: 31");
//     break;
//   case 6:
//     console.log("Days in Month: 30");
//     break;
//   case 7:
//     console.log("Days in Month: 31");
//     break;
//   case 8:
//     console.log("Days in Month: 31");
//     break;
//   case 9:
//     console.log("Days in Month: 30");
//     break;
//   case 10:
//     console.log("Days in Month: 31");
//     break;
//   case 11:
//     console.log("Days in Month: 30");
//     break;
//   case 12:
//     console.log("Days in Month: 31");
//     break;

//   default:
//     console.log("This Month Is Not Found!");
//     break;
// }

//! 16- Write a program to check whether an alphabet is vowel or consonant.
// var alphabet = window.prompt("Enter Alphabet : ");
// switch (alphabet) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log("vowel");
//     break;
//   default:
//     console.log("consonant");
// }

//! 17- Write a program to find maximum between two numbers.
// var userNumber1 = Number(window.prompt("Enter Number1 : "));
// var userNumber2 = Number(window.prompt("Enter Number2: "));
// switch (true) {
//   case userNumber1 > userNumber2:
//     console.log("Bigger Number Is : " + userNumber1);
//     break;
//   case userNumber2 > userNumber1:
//     console.log("Bigger Number Is : " + userNumber2);
//     break;
//   case userNumber2 == userNumber1:
//     console.log(userNumber1 + " is equal to " + userNumber2);
//     break;

//   default:
//     console.log("Something went wrong");
//     break;
// }

//! 18- 18- Write a program to check whether a number is even or odd.
// var userNumber = Number(window.prompt("Enter Number : "));
// switch (userNumber % 2 == 0) {
//   case true:
//     console.log("Even");
//     break;
//   case false:
//     console.log("Odd");
//     break;
// }

//! 19- Write a program to check whether a number is positive or negative or zero.
// var userNumber = Number(window.prompt("Enter Number : "));
// switch (userNumber > 0) {
//   case true:
//     console.log("Number Is Positive");
//     break;
//   case false:
//     console.log("Number Is Negative");
//     break;
// }

//! 20- Write a program to create Simple Calculator
// var sum = 0,
//   sub = 0,
//   multip = 0,
//   divide = 0;
// var userNumber1 = Number(window.prompt("Enter Number1 : "));
// var userNumber2 = Number(window.prompt("Enter Number2: "));
// sum = userNumber1 + userNumber2;
// sub = userNumber1 - userNumber2;
// multip = userNumber1 * userNumber2;
// if (userNumber2 >= 1) {
//   divide = userNumber1 / userNumber2;
// }
// console.log("Sumition = " + sum);
// console.log("Subtraction = " + sub);
// console.log("Multiplication = " + multip);
// console.log("Division = " + divide);
