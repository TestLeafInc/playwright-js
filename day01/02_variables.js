// var, let, const

/*

Best Practices for variable naming conventions

- meaningful Names 
- a to z , A-Z, 0-9, _ (underscore)
// Dont start with numbers or _
// Lower Camel for best readability
*/

/*
ES6 - let got introduced to replace var !!

1) Re-assignment 
2) Block Level Scoping
3) Hoisting
*/

/*
var firstName = "Babu";
console.log(firstName);

var firstName = "Babu Manickam";
console.log(firstName);


let firstName = "Babu";
console.log(firstName);

//let 
firstName = "Babu Manickam";
console.log(firstName);
*/
/*

Variable Scoping

- Global (variable declared at the js level and not inside the functions or blocks)
- Function (Java >> Eq >> Method)
- Block 

*/

let gender = "male";
//print(gender)

function print(gender) {
   let age = 25; // function scope variable
   if(gender === 'female'){
        let color = "pink"; // block scope variable
        console.log("She / Her");
    } else{
        console.log("He / Him");
    }
   console.log(age);
   console.log(color);
}

//console.log(lastName);
let lastName = "Manickam";

const browserType = "chrome";
//browserType = "firefox";
console.log(browserType);





