// 1) Open http://leaftaps.com/opentaps/control/main
// 2) Perform the following functions

//     a) Login (Enter username, password, Click Login)
//     b) Click CRM/SFA Link (Locator for Link: text='Text of the Link') 
//        await page.locator("text=CRM/SFA').click();
//     c) Click the Leads Link (See the Tab)
//     d) Click Create Lead Link (See Left Menu)
//     e) Enter the company name, first name and last name (use id and pur your own data)
//     f) Click Create Lead Button 

import { chromium, test } from "@playwright/test";

test("Create a new lead",async () => {
    //Create the browser instance
    const browser =  await chromium.launch();
    //Get the browser context
    const browserContext = await browser.newContext();
    //Get a new page
    const page = await browserContext.newPage();

    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Enter Username
    await page.getByLabel("Username").fill("Demosalesmanager");

    //clear method clears the text present 
    await page.getByLabel("Username").clear();

    await page.waitForTimeout(10000);

    await page.getByLabel("Username").fill("Demosalesmanager");
     //Enter password
     await page.fill("#password", "crmsfa");

     //Click Login
    await page.click(".decorativeSubmit");

     //to get the text
     console.log(await page.getByText("CRM/SFA").innerText());
     

    //Click CRM/SFA link
   
    await page.getByText("CRM/SFA").click();


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

    await page.waitForLoadState('load');
    //Print the title of the page
    const title = await page.title();
    console.log(`The title of the page is ${title}`);

        
    


    
})