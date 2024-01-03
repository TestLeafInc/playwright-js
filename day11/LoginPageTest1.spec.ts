import { test } from "@playwright/test";
import { LoginPage } from "./LoginPage";

test(`User can login successfully`,async ({page}) => {

    const loginPage = new LoginPage();
    await page.goto("https://login.salesforce.com/");
    await loginPage.login(page, 'ranjini.r@testleaf.com', 'Testleaf$1234' );
    
})
