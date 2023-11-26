
/*

string - data type used to hold a sequence of characters

*/

let browserName = "chrome"; // primitive or literal
let browser = new String("chrome"); // String object

// single or double quote -- both 
let testType = 'I\'m a smoke test';
let sentence = "Hello there, This is \"\" double quote";

// Concatenation
let testcaseName = "Create a new Opportunity";
let testcaseId = 1102;
const result = testcaseId+" - "+testcaseName+" : passed in the last execution";
console.log(result);
console.log(typeof result);

// ES6 - 2015 --> backtick
let testcaseCount = 814;
const output = `There are ${testcaseCount} tests automated in our project`;
console.log(output);

// How do we get the count of characters in the string?
// property --> const --> O(1)
// method() --> execute and find a value
console.log(output.length);

var firstName = "Babu"; // B (0), a (1), b (2), u (3) // 4-1 // length-1

// find the first character of the given String
const firstChar = firstName.charAt(0);
console.log(firstChar);

// get the last character
const lastChar = firstName.charAt(firstName.length-1); // 0 - index
console.log(lastChar)

// methods --> function inside the class
// function --> reusable code inside the js file (not inside the class)

// index of the character
const firstIndex = firstName.indexOf('a');
console.log(firstIndex); // first matching index

const noMatch = firstName.indexOf('M');
console.log(noMatch); // -1

// sub str --> includes 
console.log(firstName.includes('bu'));
console.log(firstName.includes('Ma'));

// lower case , upper case
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

// slice, 
let resultDesc = "The price of the bag is 272 USD";
console.log(resultDesc.slice(24,27));
//console.log(resultDesc.slice(42));
let chars = firstName.split("")
console.log(chars);

/*

Classroom Assignment 1:

let yourName = "suresh";
write a function to reverse the string.

// hints
1) convert the input into characters
2) loop them in reverse direction
3) concate the string
4) print the new string

Classroom Assignment 2:

If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/

function reverseStr(str){
    let chars = str.split("");
    let reversed = "";
    for (let index = chars.length-1; index >= 0; index--) {
        reversed = reversed + chars[index];
    }
    return reversed;
}

console.log(reverseStr("Babu"));
console.log(isPalindrome("madam",reverseStr("Madam")));
function isPalindrome(str1, str2){
    if(str1 === str2) return true;
    return false;
}

// We will start at 5 PM IST 
