/*

1)  Javascript File Name: 01_learn.js
 
    Objective: Learn Primitive Data Types
 
    Create the following variables using var and check their typeOf
 
    a) firstName
    b) companyName
    c) mobileNumber
    d) isAutomation
    e) hasPlaywright (do not assign)
 
    print and confirm the values and data types
 
    Time: 10 Minutes (including setup)


We will start at 4.50 PM IST again 

2)  Use same Javascript File Name: 01_learn.js
 
    Objective: Learn var vs let vs const and understand variable scoping
 
    Declare a const name as browserName (global)
    Assign value as "Chrome"
    Create a function by name getBrowserVersion
    Create if condition inside function to check if browser is chrome, then
    Declare a local variable -- use var first (browserVersion) and print that variable inside function (outside block)
    Call that function from the javascript
 
    - Use 'var' first as block variable and then convert that as 'let'
    - Confirm how it works

    - function how to write and how to call
    - basic if condition and block variable
    - let vs var

  3) Use new Javascript File Name: 02_Conditional.js
 
    Objective: Learn if - else and switch - case
    Create 2 functions : launchBrowser, runTests
    where,
    a) launchBrowser need to take input as browserName (string) and do not return any
        - use if, else (chrome or otherwise)
        - just print
    b) runTests need to take input as testType (string) and do not return any
        - use switch case (smoke, sanity, regression, default (smoke))
        - just do print
 
    Call that function from the javascript
 
    Time: 15 Minutes

*/

let testType = "smoke";

switch (testType) {
    case "smoke":
        console.log("Run smoke tests");
        break;
    case "sanity":
        console.log("Run sanity tests");
        break;
    default:
        break;
}