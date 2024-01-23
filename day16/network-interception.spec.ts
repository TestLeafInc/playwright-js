import {test} from "@playwright/test"

test.describe(`Salesforce login`,async()=>{

    test(`Login to salesforce`,async({page})=>{

        // Let the API intercepted
        // Use case: Read the Session 
        // Scenario 1: API will independently work fine
        // It will not work fine when integrated with Web (ReactJs)
        // Intercept and confirm that the particular API ??
        
        page.route("**/aura?preloadActions",async (route,request) => {
            if(request.method() === 'POST'){
                console.log(request.url())
                console.log(await request.allHeaders())
                const response = await request.response();
                const bodyContents = await response?.body();

            } else{
                route.continue();
            }
        })
        
        await page.goto("https://login.salesforce.com/");
        await page.fill("#username","ranjini.r@testleaf.com");
        await page.fill("#password","Testleaf$1234")
        await page.click("#Login")
        
        const appLauncherLocator = page.locator(".slds-icon-waffle")

        await appLauncherLocator.click()

        const viewAllLocator = page.getByLabel("View All Applications")
        await viewAllLocator.click()
    })
})