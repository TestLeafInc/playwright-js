import {Browser } from "./04_interface";
class OpenChrome implements Browser{
    browserName: string;
    
    startApp(): void {
        this.browserName;
        console.log("Launch the browser");
        
    }
    loginCredentials(username: string, password: string): string {
        return username+ " "+password;    
    }
    getStatus(): boolean {
       return true;
    }
}
const myChrome = new OpenChrome();
console.log(myChrome.browserName);
myChrome.startApp();
console.log(myChrome.getStatus());
console.log(myChrome.loginCredentials("Demosalesamanager", "crmsfa"));

