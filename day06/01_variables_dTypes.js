/**
 * variables - let, var and const
 *
 * var is not recommended in TS
 *
 * // Variable Declaration
 * let varName: datatype = value; (mutable)
 * let name: string = 'Mikin';
 *
 * const age: number = 23; (immutable)
 *
 *
 */
var empName = 'Roopa'; //explicit type refrence
console.log("Employee name is ".concat(empName));
var age = 23;
console.log("Age is ".concat(age));
/**
 * implicit type - ypu will explicitly mention
 * explicit type - mentioning the datatype
 *
 */
var browser = 'chrome'; //implicit type ref
console.log("The browser name is ".concat(browser));
/**
 * Datatypes
 * 1. string
 * 2. number
 * 3. boolean
 * 4. null
 * 5. undefined
 * 6. any
 *
 *
 */
var isTsInteresting = true;
var varName;
console.log("The browsername is ".concat(varName));
var isSecured = null;
console.log("The browsername is ".concat(isSecured));
var browserName;
browserName = 'chrome';
browserName = 117;
browserName = true;
console.log("The browsername is ".concat(browserName));
var dimension = { height: 10, width: 20 };
//Syntax:function funcName(argName:datatype):return type
function invokeBrowser(browserName) {
    if (browserName === 'Chrome') {
        console.log("Launch Chrome browser");
    }
    else {
        console.log("Launch Firefox");
    }
}
invokeBrowser("Chrome");
