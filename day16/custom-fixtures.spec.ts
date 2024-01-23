import {test as baseTest} from '@playwright/test';

// common fixture at the beginning of the test
export const test = baseTest.extend({
    page:async ({page}, use) => {

        await page.goto("https://login.salesforce.com/");
        await page.setViewportSize({width: 800, height: 600});
        await page.fill("#username","ranjini.r@testleaf.com");
        await page.fill("#password","Testleaf$1234")
        await page.click("#Login")
        
        // add something ??
        await use(page);
    }
})