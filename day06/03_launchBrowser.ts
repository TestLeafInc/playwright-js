class LoginPage{

    browserName: string;
    browserVersion: number;
   // url: string;
    constructor(){
        this.browserName = "chrome";
        this.browserVersion = 117;
    }
   
    // login(){
    //     console.log(this.browserName = "chrome");
    //     console.log(this.browserVersion = 117)

    // }
    //Method with arguments
    signUp (username:string, password?: string):string{
        this.browserName = "safari";
            return username+ " "+password;
    }
}

const myBrowser = new LoginPage();
//myBrowser.login();
const cred = myBrowser.signUp("Demosalesmanager");
console.log(`The credentials are: ${cred}`);

