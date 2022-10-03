/**
 *  Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program 
 * to help Harry calculate how much money the shopkeeper will return.
 * 
 *  Input:
 * The first line of the input is the taka Harry’s mom gave him.
 * 
 * Output
 * The second line is the cost of 1 kg of oranges and 1 kg of apples.
 * 
 *  Print the result.
 */
var momsGive = 1000;
var oranges = 400;
var apples = 300;

var sum = oranges + apples;

var shopkeeperBack = momsGive - sum;

console.log(shopkeeperBack);

// Output 
// 300 - PASSED