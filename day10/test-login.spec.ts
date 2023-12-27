import { test} from "@playwright/test";
import loginData from "../../test-data/logintestData.json";

test("Login using data from json file",async ({page}) => {

    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", "ranjini.r@testleaf.com");
    await page.fill("#password", "Testleaf$1234");
    await page.click("#Login");
    
});