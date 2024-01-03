export class LoginPage{
    //properties to interact with the login page
    usernameField: string;
    passwordField: string;
    loginButton: any;

    constructor(){
        this.usernameField = '#username';
        this.passwordField = '#password';
        this.loginButton = '#Login';
    }

    //method to login
    async login(page:any, username: string, password:string){
        await page.fill(this.usernameField, username);
        await page.fill(this.passwordField, password);
        await page.click(this.loginButton);
    }
}
