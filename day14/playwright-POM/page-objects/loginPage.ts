import {Page, Locator,test, expect} from "@playwright/test";
import { BasePage } from "./basePage";
import { URLConstants } from "../constants/urlConstants";

export class LoginPage extends BasePage{

    static pageUrl = URLConstants.LOGIN_PAGE;
    readonly userNameInputBox:Locator;
    readonly passwordInputBox:Locator;
    readonly loginButton:Locator;

    constructor(page:Page){

        super(page) ;
        this.userNameInputBox = this.page.locator("#username");
        this.passwordInputBox = this.page.locator("#password");
        this.loginButton = this.page.locator("#Login")

    }
 
    async loadThePage() {
        await this.loadUrl(LoginPage.pageUrl);
        await this.verifyThePageIsLoaded();
    }

    async verifyThePageIsLoaded(): Promise<void> {
        await this.verifyTheLocatorIsVisible(this.userNameInputBox);
    }
     

    private async fillInUserName(name:string){
        await test.step(`Filling username with ${name}`,async () => {
            await this.fillIn(this.userNameInputBox,name);
        })
       
    }

    private async fillInPassword(password:string){
       await test.step(`Filling password with ${password}`,async () => {
        await this.fillIn(this.passwordInputBox,password);

    })
}
    private async clickOnLoginButton(){
        await test.step(`Clicking on the LoginButton`, async()=>{
        await this.clickOn(this.loginButton);

        })
}

    public async doLogin(username:string, password:string){
        await this.fillInUserName(username);
        await this.fillInPassword(password);
        await this.clickOnLoginButton();

    }
    // async clickOnByLocator(findLocatorBy:Locator){
    //     findLocatorBy.click();

    // }
    // async clickOnBySelector(selector:string){

    //     this.page.locator(selector).click();

    // }



}


