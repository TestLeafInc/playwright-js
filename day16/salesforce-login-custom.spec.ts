import {test} from "./custom-fixtures.spec";

test.describe(`Salesforce login`,async()=>{

    test(`Login to salesforce`,async({page})=>{
        
        const appLauncherLocator = page.locator(".slds-icon-waffle")
        await appLauncherLocator.click()
        const viewAllLocator = page.getByLabel("View All Applications")
        await viewAllLocator.click()
    })
})