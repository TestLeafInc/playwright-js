//import {Browser } from "./04_interface";
var OpenChrome = /** @class */ (function () {
    function OpenChrome() {
    }
    OpenChrome.prototype.startApp = function () {
        this.browserName;
        console.log("Launch the browser");
    };
    OpenChrome.prototype.loginCredentials = function (username, password) {
        return username + " " + password;
    };
    OpenChrome.prototype.getStatus = function () {
        return true;
    };
    return OpenChrome;
}());
var myChrome = new OpenChrome();
console.log(myChrome.browserName);
myChrome.startApp();
console.log(myChrome.getStatus());
console.log(myChrome.loginCredentials("Demosalesamanager", "crmsfa"));
