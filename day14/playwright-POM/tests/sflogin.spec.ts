import { test, expect} from "@playwright/test";
import { LoginPage } from "../page-objects/loginPage";
import { AppConstants, ToggleStates } from "../constants/appConstants";
import { FrameworkHelper } from "../utils/frameworkHelper";
import { EnvConstants } from "../constants/envConstants";
import { URLConstants } from "../constants/urlConstants";



test.describe(`Salesforce login`,async () => {


    test(`TC001: Verify with valid creds`,async ({page}) => {
        await page.goto(URLConstants.LOGIN_PAGE);
        const loginPage = new LoginPage(page);
        const appData = FrameworkHelper.loadTestData(EnvConstants.STAGE)
        await loginPage.doLogin(appData.adminUserName, appData.adminPassword);
        await expect(page).toHaveURL(AppConstants.INSTANCE_URL);
    
})

})  
// function doToggle(toggleState:ToggleStates){

//     if(toggleState===ToggleStates.ON){
//         //perform the action to enable the toggle button
//     }else{
//         //perform the action to disable the toggle
//     }
// }