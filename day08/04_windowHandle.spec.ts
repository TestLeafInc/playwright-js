/***
 *  Approach 1
 * 
 * 1. Create a promise in your code to tell that this will resolve into a page
 *     const windowPromise =  context.waitForEvent("page")
 * 2. Now perform the user action which is supposed to open a new window
 *     await page.getByText('Open').click();
 * 3. Now wait for the promise to get completed (for the promise you created in step 1)
 *     const window =  await windowPromise
 * 4. Switch to the new window for performing further actions
 *      window.bringToFront();
 *  
 */
import { test, chromium, expect } from "@playwright/test";


test("Window using promise",async ({page,context}) => {
    //First Approach: Sequential --> creating the promise, triggering the action, resolving the promise --> this promise returns a new page
    await page.goto("https://leafground.com/window.xhtml");

    const windowPromise = context. waitForEvent("page");
    page.getByText('Open',{exact:true}).click();
    const window = await windowPromise;
    await expect(window).toHaveURL("https://leafground.com/dashboard.xhtml");
    console.log(window.url());
    await window.waitForTimeout(5000);
    await window.fill("#email", "rr7@gmail.com");
    await window.waitForTimeout(5000);
    await window.close();
    await page.click("i[class='pi pi-home']");
    await page.waitForTimeout(5000);
})
test("Window using Promise.all",async ({page,context}) => {
    //for multiple promises to be resolved
    await page.goto("https://leafground.com/window.xhtml");
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.getByText('Open',{exact:true}).click(),
       
    ])

    console.log(newPage.url());
    await newPage.waitForTimeout(5000);
    await newPage.fill("#email", "rr7@gmail.com");
    await newPage.close();
    await page.click("i[class='pi pi-home']");
    await page.waitForTimeout(5000);
    
})
test.only("Testing multiple Tabs",async ({page,context}) => {
    let webPage: any;
    //for multiple promises to be resolved
    await page.goto("https://leafground.com/window.xhtml");
    const [multiPage] = await Promise.all([
        context.waitForEvent("page"),
        page.getByText('Open Multiple',{exact:true}).click(),
       
    ])
    //await multiPage.waitForLoadState('load')
    //No. of pages getting opened
    const pages =  multiPage.context().pages();
    console.log(`No.of pages ${pages.length}`);

    pages.forEach(tabs =>{
        console.log(tabs.url())   
        
    })
    
   //const dashboard = await pages[2].bringToFront();

    await page.waitForTimeout(5000);

    for (let index = 0; index < pages.length; index++) {
        await pages[index].waitForLoadState('load')
       const title = await pages[index].title();
       console.log(title);
       
       if(title==='Web Table'){
         webPage = pages[index];
       }
        
    }
    await webPage.fill("input[placeholder='Search']", "Amy Elsner");

    await webPage.waitForTimeout(5000);
})


