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
function signUp(fName, lName, email, age, city) {
    console.log("Sign up with ".concat(fName, ", ").concat(lName, ", ").concat(email, ",").concat(age, ", ").concat(city, "  "));
}
signUp("Ranjini", "R", "rr@gmail.com");
//Default Parameters
function type(password, userName) {
    if (userName === void 0) { userName = 'DemosalesManager'; }
    console.log("Sign in with ".concat(userName, " and ").concat(password));
}
type("crmsfa", "DemoCSR");
