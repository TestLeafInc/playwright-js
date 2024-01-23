import {test} from "./retry-logic";

test.describe(`Salesforce login`,async()=>{

    test(`Login to salesforce`,async({page})=>{
        
        await page.goto("https://login.salesforce.com/");
        await page.delayedFill("#username","ranjini.r@testleaf.com");
        await page.delayedFill("#password","Testleaf$1234")
        await page.clickAndDelay("Login")
        
        const appLauncherLocator = page.locator(".slds-icon-waffle")

        await appLauncherLocator.click()

        const viewAllLocator = page.getByLabel("View All Applications")
        await viewAllLocator.click()
    })
})