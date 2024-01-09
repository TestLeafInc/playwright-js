import { test, expect} from "@playwright/test";
import { LoginPage } from "../page-objects/loginPage";
import { AppConstants, ToggleStates } from "../constants/appConstants";
import { FrameworkHelper } from "../utils/frameworkHelper";
import { EnvConstants } from "../constants/envConstants";
import { URLConstants } from "../constants/urlConstants";
import { HomePage } from "../page-objects/homePage";



test.describe(`Salesforce login`,async () => {


    test.only(`TC002: Verify user after login is able to open sales application`,async ({page}) => {
       
        const loginPage = new LoginPage(page);
        await loginPage.loadThePage();
        const appData = FrameworkHelper.loadTestData(EnvConstants.STAGE)
        await loginPage.doLogin(appData.adminUserName, appData.adminPassword);
        await expect(page).toHaveURL(AppConstants.INSTANCE_URL);

        const homePage = new HomePage(page);
        await homePage.verifyThePageIsLoaded();
        await homePage.clickOnAppLauncherIcon();
        await homePage.clickOnViewAllButton();
        await homePage.clickOnSalesTilesInAppLauncher();

    
})
})