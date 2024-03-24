// change the background color on click
const htmlBody = document.querySelector('body');
const randomClickFunction = function() {
    const colors = ["red","blue","green","yellow","purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    console.log('The user clicked and changed the background color to '+ randomColor);
}
randomClickFunction()
htmlBody.onclick = randomClickFunction;

// to declare a variable but not assign it, ust the let keyword
let someVariable;
someVariable = 20;
// it is not best practice to use the var keyword because it 
// can be reassigned without throwing any errors, e.g.,
var myVar = 20;
var myVar = 30;
//const will not allow you to reassigned a variable
//the let keyword will allow you to reassign the value of a variable
let counter = 0;
counter++;

//"number" is a datatype in JavaScript, you can use typeof keyword
//to find the type of a variable

//implicit coercion is where JS automatically casts stuff for you and
// it can lead to incorrect behavior, e.g.,
const var1 = '10';
const var2 = 20;
console.log(var1 + var2);
//the above would log 1020
//instead you can use the built-in Number() function
console.log(Number(var1) + var2);
// you can also log a variable by just typing its name in the console

//single quotations are preferred for strings

//in JavaScript, you can mix datatypes inside of an array
const firstArray = [1, 2, 3, 4];
const secondArray = [10, 'hi', {prop:'hello'}, [5,6]];
console.log(secondArray[3][0]); //get values from 2d arrays like this

const nestedOjbect = {
    layer1: {
        layer2: {
            targetValue: 20
        }
    }
}
nestedOjbect.layer1.layer2.targetValue;
const objectVariable = {prop1: 20, prop2: 50}
objectVariable['prop1'];

// in JS, there are assignment operators for every arithmetic operator, i.e.,
// +=, -=, *=, /=

//=== evaluates equality based on both type and value.
//== evaluates equality based only on value, e.g., 20 == '20' would 
// evaluate to true. when using the == operator, JS will automatically cast them
// to the same data type and evaluate based on that
// use lodash library for reference equality

const result = 20 === 20 ? 'values match' : 'values do not match';
// i.e., if 20 === 20, value match, else values do no match, this is called
// a ternary operator

const resultFunct = (() => {
    return 20;
})();
// this is a lambda that is also an immediately invoked function
// the syntax for being immediately invoked is the two extra pairs of orange parentheses

switch (randomColor) {
    case 'orange':
        console.log('the color is orange');
        break;
    case 'green':
        console.log('the color is green');
        break;
    case 'yellow':
        console.log('the color is yellow');
        break;
    default:
        console.log('the color was not found');

}
(function immediatelyInvokedFunction() {
    console.log('hello');
})();
//the above is an immediately invoked function, the whole thing is wrapped in parentheses
//and it has (); at the end

function paramFunction (param1, param2) {
    // nothing special here, just not that JS is dynamically typed so you can
    // pass in any type as arguments so be careful
}

// you can assign a function to a variable, when you do this, the function
// does not have a name so it is called an anonymous function

const arrowFunction = () => {
    console.log('I am an arrow function');
}
// an arrow function has to be assigned to a variable, can be used in a callback
// and affects scope and the this keyword

let str = 'hello world';
str.split(" ");
// the above line would return an array with hello at 0 and world at 1
//its paramater is a delimiter which is whatever is in parentheses 
//passing in nothing inbetween the quotation marks into split will split based on every character
let strArr = str.split("");
strArr = strArr.reverse();
let retVal = strArr.join("");
// if you don't put the quotation marks in the join and split then
//behavior is all fucked up.

//for each syntax is as follows
let theArray = [1, 2, 3, 4];
for (const element of theArray) {
    element++;
}

//Arrays in JS are like LinkedLists in that you can add to the end using arr.push()

//convert a string which represents a number into a number using the Number() function
let arr = [0];