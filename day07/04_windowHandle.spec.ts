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

test("Handle frames using frame object",async ({page,context}) => {

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