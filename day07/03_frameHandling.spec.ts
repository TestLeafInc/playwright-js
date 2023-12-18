import { test, chromium } from "@playwright/test";

test("Handle frames using frame object",async ({page}) => {

    await page.goto("https://leafground.com/frame.xhtml");
    const frame = page.frame({url:'https://leafground.com/default.xhtml'});
    console.log(frame);
    
    await frame?.waitForSelector("button#Click");

    await frame?.click('button#Click')
    
    await page.waitForTimeout(5000);

    //To get the frame count
    const allFrames = page.frames();
    page.mainFrame()

    console.log(`No. of frames present ${allFrames.length}`);
    
    await allFrames[4].click('button#Click');

    await page.waitForTimeout(5000);
})

test.only("Handle frames using frameLocator",async ({page}) => {

    const url = await page.goto("https://leafground.com/frame.xhtml");
    //Using frameLocator 
    //Locating the first
    const frameLocator = page.frameLocator('iframe').first();
    await frameLocator.locator('#Click').click();

    await page.waitForTimeout(5000);
    //Text: Click Me (Inside Nested frame)
    const cardLocator = page.locator(".card").filter({hasText:' Click Me (Inside Nested frame)'});
    const frameButton = cardLocator.frameLocator('iframe');
    frameButton.frameLocator('iframe').locator('#Click').click();
    await page.waitForTimeout(5000);




})