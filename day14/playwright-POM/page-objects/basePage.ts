import { Page, Locator, test, expect } from "@playwright/test";

type LocateBy = Locator|string;

export abstract class BasePage{

readonly page:Page;

constructor(page:Page){

    this.page = page;

}
async verifyTheLocatorIsVisible(locateBy:LocateBy){

    await expect(this.generateLocator(locateBy)).toBeVisible();

}

constructLocatorBasedOnSelector(selector:string){
    return this.page.locator(selector)

}

generateLocator(locateBy:LocateBy){

    return typeof(locateBy)==="string"?this.constructLocatorBasedOnSelector(locateBy):locateBy;

}
async loadUrl(url:string){
    await this.page.goto(url);
}

abstract loadThePage():Promise<void>;

abstract verifyThePageIsLoaded():Promise<void>;

async clickOn(locateBy:LocateBy){
   

   // await test.step(`${stepTitle}: Attempting to click on given locator`, async()=>){
      try{
        await this.generateLocator(locateBy).click();   
      }  
         catch(err){
            console.log(`Error occurred while trying to click on given locator: ${err}`);
            
         }   

    }

async fillIn(locateBy:Locator|string, textToFill:string){

     await this.generateLocator(locateBy).fill(textToFill);
}

}








