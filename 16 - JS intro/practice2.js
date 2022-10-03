/**
 * 
 * Write a program to calculate the average marks of Mathematics, Biology,
 * Chemistry, Physics, and Bangla of a student.
 * 
 * 
 * Input:
 * The first line of the input is the marks of the five subjects mentioned above,respectively.
 * 75.25, 65, 80, 35.45, 99.50
 * 
 * 
 * Output:
 * Print the result in 2 decimal places.
 * 
 * 
 */

var mathematics = 75.25;
var biology = 65.10008;
var chemistry = 80.9864582;
var physics = 35.45;
var bangla = 99.5589;

var totalNumber = mathematics + biology + chemistry + physics + bangla;

// console.log(totalNumber);

console.log(totalNumber.toFixed(2));

// Output => is 2 decimal Number
// 356.35