import {Page, Locator,test} from "@playwright/test";
export class LoginPage{

    page:Page;
    readonly userNameInputBox:Locator;
    readonly passwordInputBox:Locator;
    readonly loginButton:Locator;

    constructor(page:Page){

        this.page =page;
        this.userNameInputBox = this.page.locator("#username");
        this.passwordInputBox = this.page.locator("#password");
        this.loginButton = this.page.locator("#Login")

    }
 
    private async fillInUserName(name:string){
        await test.step(`Filling username with ${name}`,async () => {
            await this.userNameInputBox.fill(name);
        })
       
    }

    private async fillInPassword(password:string){
       await test.step(`Filling password with ${password}`,async () => {
        await this.passwordInputBox.fill(password);

    })
}
    private async clickOnLoginButton(){
        await test.step(`Clicking on the LoginButton`, async()=>{
        await this.loginButton.click();

        })
}

    public async doLogin(username:string, password:string){
        await this.fillInUserName(username);
        await this.fillInPassword(password);
        await this.clickOnLoginButton();

    }

}