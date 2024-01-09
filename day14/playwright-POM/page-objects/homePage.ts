import {Page, Locator, expect} from "@playwright/test"
import { BasePage } from "./basePage";
import { URLConstants } from "../constants/urlConstants";

export class HomePage extends BasePage{

static pageUrl = URLConstants.HOME_PAGE
readonly appLauncherIcon: Locator;
readonly viewAllButton: Locator;
readonly salesTileAppLauncher: Locator;
readonly pageAnchor:Locator;

constructor(page:Page){
    super(page);
    this.appLauncherIcon = this.page.locator("div.slds-icon-waffle");
    this.viewAllButton = this.page.locator("button").filter({hasText:"View All"});
    this.salesTileAppLauncher = this.page.locator("one-app-launcher-app-tile[data-name='Sales']");
    this.pageAnchor = this.page.locator(".tileTitle").filter({hasText:"Get Started with Einstein Bots"})
   

}

async loadThePage() {
    await this.loadUrl(HomePage.pageUrl)
}

async verifyThePageIsLoaded(): Promise<void> {
    await this.verifyTheLocatorIsVisible(this.pageAnchor);
}
 
async clickOnAppLauncherIcon(){

    await this.clickOn(this.appLauncherIcon);

}

async clickOnViewAllButton(){

    await this.clickOn(this.viewAllButton);

}

async clickOnSalesTilesInAppLauncher(){

    await  this.clickOn(this.salesTileAppLauncher);

}


}