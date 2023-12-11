var LoginPage = /** @class */ (function () {
    // url: string;
    function LoginPage() {
        this.browserName = "chrome";
        this.browserVersion = 117;
    }
    // login(){
    //     console.log(this.browserName = "chrome");
    //     console.log(this.browserVersion = 117)
    // }
    //Method with arguments
    LoginPage.prototype.signUp = function (username, password) {
        this.browserName = "safari";
        return username + " " + password;
    };
    return LoginPage;
}());
var myBrowser = new LoginPage();
//myBrowser.login();
var cred = myBrowser.signUp("Demosalesmanager");
console.log("The credentials are: ".concat(cred));
