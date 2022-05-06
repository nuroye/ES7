// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes("John");
//false

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.

 dragons.includes("John")


// #3) Create a function that calculates the power of 100 of a number entered as a parameter
const power=(a)=>a**100;
power(10);
      //or
//const power=(a)=>Math.pow(a, 100);
//power(10);

 

// #4) Using your function from #3, put in the parameter 10000. What is the result?
// Research for yourself why you get this result
const power1=(a)=>a**100;
power1(1000);

/* Ans: 1e+300....But The MAX_SAFE_INTEGER constant has a value of 
9007199254740991 (9,007,199,254,740,991 or ~9 quadrillion). 
The reasoning behind that number is that JavaScript uses double-precision floating-point 
format numbers as specified in IEEE 754 and can only safely represent integers 
between -(2^53 - 1) and 2^53 - 1...Thats the highest number you can have in JS.