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

let empName:string = 'Roopa'; //explicit type refrence
console.log(`Employee name is ${empName}`);

const age: number = 23;
console.log(`Age is ${age}`);
/**
 * implicit type - ypu will explicitly mention
 * explicit type - mentioning the datatype
 * 
 */
let browser = 'chrome'; //implicit type ref
console.log(`The browser name is ${browser}`);

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
let isTsInteresting = true;
let varName:undefined ;
console.log(`The browsername is ${varName}`);
let isSecured: null = null;
console.log(`The browsername is ${isSecured}`);
let browserName: any;
browserName = 'chrome';
browserName = 117;
browserName = true;
console.log(`The browsername is ${browserName}`);

type Point ={
    height: number
    width: number

}
let dimension:Point = {height:10, width:20}

//Custom the datatype

type supportedBrowser = "Chrome"|"Firefox";
//Syntax:function funcName(argName:datatype):return type
function invokeBrowser(browserName:supportedBrowser):void{
    if (browserName === 'Chrome') {
        
        console.log("Launch Chrome browser");
        
    } else {
        console.log("Launch Firefox");
        
        
    }

}
invokeBrowser("Chrome");


