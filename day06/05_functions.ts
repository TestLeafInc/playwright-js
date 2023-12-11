/**
 * function --can take arguments
 * default arguments
 * optional arguments
 * ////signup page////
 * firstname (mandatory)
 * lastname (mandatory)
 * email (mandatory)
 * city (optional)
 * age (optional)
 * 
 * 
 */
//Optional Parameters -- ?: 
// Note: optional parameter should always come after mandatory parametrs
function signUp(fName:string, lName:string, email:string, age?:string,city?:string ) {
    console.log(`Sign up with ${fName}, ${lName}, ${email},${age}, ${city}  `);    
}
signUp("Ranjini", "R", "rr@gmail.com");

//Default Parameters

function type(userName:string='Demosalesmanager', password:string ):void{
    console.log(`Sign in with ${userName} and ${password}`);
    
}
type("DemoCSR", "crmsfa")

