/**
 * 
 * এখানে একটি String এর মাঝে search করার জন্য includes() function use করা হয়
 * 
 * মাঝে মাঝে indexOf() function ব্যবহার করা হয় 
 * startWith() and endsWith o use kora hoy
 * 
 * 
 * ---Note----
 * কোন কিছু search করার আগে, সেটাকে lowerCase করে নেওয়া ভালো। 
 * কারণ user এর input কি হয় সেটা জানা যায় নাহ। তাই সব সময় lowerCase করে নেওয়া ভালো 
 * 
 */ 

const lyrics = 'Tumi bondo kala pakhi ami jno ki. Bosonto kale tumi amar hoiba ki. Sada sada kala kala rong jomeche sada kala.'

const doesExits = 'paKhi';

// Search with text
const search = lyrics.toLowerCase().includes(doesExits.toLowerCase());

// console.log(search);


// indexOf()
/* 

const indexSearch = lyrics.indexOf(doesExits.toLowerCase());

if(indexSearch !== -1){
    console.log('your search is valid');    
} else{
    console.log('Your search is not valid')
}

 */


// startWith() & endsWith
// console.log(lyrics.startsWith('Tumi'))

// EndsWith
const fileName = 'Resume.pdf'
console.log(fileName.endsWith('pdf'))