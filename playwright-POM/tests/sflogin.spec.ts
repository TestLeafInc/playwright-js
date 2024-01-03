import { test, expect} from "@playwright/test";
import { LoginPage } from "../page-objects/loginPage";
import { AppConstants } from "../constants/appConstants";

test.describe(`Salesforce login`,async () => {


    test(`TC001: Verify with valid creds`,async ({page}) => {
        await page.goto(AppConstants.SF_URL);

        const loginPage = new LoginPage(page);

        await loginPage.doLogin("ranjini.r@testleaf.com", "Testleaf$1234");
        await expect(page).toHaveURL(AppConstants.INSTANCE_URL);
    
})

})  