import { chromium, expect, test } from "@playwright/test";


test("Create a new lead",async ({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Enter Username
    await page.fill("#username", "Demosalesmanager");
     //Enter password
     await page.fill("#password", "crmsfa");

     //Click Login
    await page.click(".decorativeSubmit");
    //Click CRM/SFA link
    await page.click("a:has-text('CRM/SFA')");

    //Click Leads
    await page.click("text=Leads");

    //Click Create Lead
    await page.click("text=Create Lead");
    
    //Enter the company name
    await page.fill("#createLeadForm_companyName", "Testleaf");
    
    //Enter first name
    await page.fill("#createLeadForm_firstName", "Ranjini");

    //Enter the surname
    await page.fill("#createLeadForm_lastName", "R");
    
    //Click Submit button
    await page.click("input[type=submit]");

    //Print the url
    const url = page.url();
    console.log(`The url of the page is ${url}`);

    //await page.waitForLoadState('load');
    //Print the title of the page
    const title = await page.title();
    console.log(`The title of the page is ${title}`);

    await expect(page).toHaveTitle("View Lead | opentaps CRM");


})